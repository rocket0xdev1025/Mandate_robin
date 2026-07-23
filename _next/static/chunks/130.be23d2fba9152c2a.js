(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [130],
  {
    443: (e) => {
      "use strict";
      e.exports = function (e, t) {
        for (
          var r = {}, n = Object.keys(e), i = Array.isArray(t), a = 0;
          a < n.length;
          a++
        ) {
          var o = n[a],
            s = e[o];
          (i ? -1 !== t.indexOf(o) : t(o, s, e)) && (r[o] = s);
        }
        return r;
      };
    },
    454: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { E8: () => eG, j6: () => e_ });
      var i,
        a,
        o = r(8967),
        s = r(5499),
        l = r(8616);
      function u(e, t) {
        let r;
        return (...n) => {
          window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t));
        };
      }
      let c = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
      var d = r(8105),
        f = r(8095);
      function h({
        ref: e,
        children: t,
        fallback: r,
        resize: n,
        style: i,
        gl: a,
        events: d = s.f,
        eventSource: h,
        eventPrefix: A,
        shadows: p,
        linear: m,
        flat: B,
        legacy: g,
        orthographic: v,
        frameloop: C,
        dpr: b,
        performance: E,
        raycaster: y,
        camera: M,
        scene: w,
        onPointerMissed: R,
        onCreated: F,
        ...I
      }) {
        o.useMemo(() => (0, s.e)(l), []);
        let T = (0, s.u)(),
          [x, D] = (function (
            { debounce: e, scroll: t, polyfill: r, offsetSize: n } = {
              debounce: 0,
              scroll: !1,
              offsetSize: !1,
            }
          ) {
            var i, a, s;
            let l =
              r ||
              ("undefined" == typeof window ? class {} : window.ResizeObserver);
            if (!l)
              throw Error(
                "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
              );
            let [d, f] = (0, o.useState)({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0,
              }),
              h = (0, o.useRef)({
                element: null,
                scrollContainers: null,
                resizeObserver: null,
                lastBounds: d,
                orientationHandler: null,
              }),
              A = e ? ("number" == typeof e ? e : e.scroll) : null,
              p = e ? ("number" == typeof e ? e : e.resize) : null,
              m = (0, o.useRef)(!1);
            (0, o.useEffect)(
              () => ((m.current = !0), () => void (m.current = !1))
            );
            let [B, g, v] = (0, o.useMemo)(() => {
              let e = () => {
                let e, t;
                if (!h.current.element) return;
                let {
                    left: r,
                    top: i,
                    width: a,
                    height: o,
                    bottom: s,
                    right: l,
                    x: u,
                    y: d,
                  } = h.current.element.getBoundingClientRect(),
                  A = {
                    left: r,
                    top: i,
                    width: a,
                    height: o,
                    bottom: s,
                    right: l,
                    x: u,
                    y: d,
                  };
                h.current.element instanceof HTMLElement &&
                  n &&
                  ((A.height = h.current.element.offsetHeight),
                  (A.width = h.current.element.offsetWidth)),
                  Object.freeze(A),
                  m.current &&
                    ((e = h.current.lastBounds),
                    (t = A),
                    !c.every((r) => e[r] === t[r])) &&
                    f((h.current.lastBounds = A));
              };
              return [e, p ? u(e, p) : e, A ? u(e, A) : e];
            }, [f, n, A, p]);
            function C() {
              h.current.scrollContainers &&
                (h.current.scrollContainers.forEach((e) =>
                  e.removeEventListener("scroll", v, !0)
                ),
                (h.current.scrollContainers = null)),
                h.current.resizeObserver &&
                  (h.current.resizeObserver.disconnect(),
                  (h.current.resizeObserver = null)),
                h.current.orientationHandler &&
                  ("orientation" in screen &&
                  "removeEventListener" in screen.orientation
                    ? screen.orientation.removeEventListener(
                        "change",
                        h.current.orientationHandler
                      )
                    : "onorientationchange" in window &&
                      window.removeEventListener(
                        "orientationchange",
                        h.current.orientationHandler
                      ));
            }
            function b() {
              h.current.element &&
                ((h.current.resizeObserver = new l(v)),
                h.current.resizeObserver.observe(h.current.element),
                t &&
                  h.current.scrollContainers &&
                  h.current.scrollContainers.forEach((e) =>
                    e.addEventListener("scroll", v, {
                      capture: !0,
                      passive: !0,
                    })
                  ),
                (h.current.orientationHandler = () => {
                  v();
                }),
                "orientation" in screen &&
                "addEventListener" in screen.orientation
                  ? screen.orientation.addEventListener(
                      "change",
                      h.current.orientationHandler
                    )
                  : "onorientationchange" in window &&
                    window.addEventListener(
                      "orientationchange",
                      h.current.orientationHandler
                    ));
            }
            return (
              (i = v),
              (a = !!t),
              (0, o.useEffect)(() => {
                if (a)
                  return (
                    window.addEventListener("scroll", i, {
                      capture: !0,
                      passive: !0,
                    }),
                    () => void window.removeEventListener("scroll", i, !0)
                  );
              }, [i, a]),
              (s = g),
              (0, o.useEffect)(
                () => (
                  window.addEventListener("resize", s),
                  () => void window.removeEventListener("resize", s)
                ),
                [s]
              ),
              (0, o.useEffect)(() => {
                C(), b();
              }, [t, v, g]),
              (0, o.useEffect)(() => C, []),
              [
                (e) => {
                  e &&
                    e !== h.current.element &&
                    (C(),
                    (h.current.element = e),
                    (h.current.scrollContainers = (function e(t) {
                      let r = [];
                      if (!t || t === document.body) return r;
                      let {
                        overflow: n,
                        overflowX: i,
                        overflowY: a,
                      } = window.getComputedStyle(t);
                      return (
                        [n, i, a].some((e) => "auto" === e || "scroll" === e) &&
                          r.push(t),
                        [...r, ...e(t.parentElement)]
                      );
                    })(e)),
                    b());
                },
                d,
                B,
              ]
            );
          })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...n }),
          G = o.useRef(null),
          S = o.useRef(null);
        o.useImperativeHandle(e, () => G.current);
        let H = (0, s.a)(R),
          [_, O] = o.useState(!1),
          [L, U] = o.useState(!1);
        if (_) throw _;
        if (L) throw L;
        let P = o.useRef(null);
        (0, s.b)(() => {
          let e = G.current;
          D.width > 0 &&
            D.height > 0 &&
            e &&
            (P.current || (P.current = (0, s.c)(e)),
            (async function () {
              await P.current.configure({
                gl: a,
                scene: w,
                events: d,
                shadows: p,
                linear: m,
                flat: B,
                legacy: g,
                orthographic: v,
                frameloop: C,
                dpr: b,
                performance: E,
                raycaster: y,
                camera: M,
                size: D,
                onPointerMissed: (...e) =>
                  null == H.current ? void 0 : H.current(...e),
                onCreated: (e) => {
                  null == e.events.connect ||
                    e.events.connect(
                      h ? ((0, s.i)(h) ? h.current : h) : S.current
                    ),
                    A &&
                      e.setEvents({
                        compute: (e, t) => {
                          let r = e[A + "X"],
                            n = e[A + "Y"];
                          t.pointer.set(
                            (r / t.size.width) * 2 - 1,
                            -(2 * (n / t.size.height)) + 1
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera);
                        },
                      }),
                    null == F || F(e);
                },
              }),
                P.current.render(
                  (0, f.jsx)(T, {
                    children: (0, f.jsx)(s.E, {
                      set: U,
                      children: (0, f.jsx)(o.Suspense, {
                        fallback: (0, f.jsx)(s.B, { set: O }),
                        children: null != t ? t : null,
                      }),
                    }),
                  })
                );
            })());
        }),
          o.useEffect(() => {
            let e = G.current;
            if (e) return () => (0, s.d)(e);
          }, []);
        let J = h ? "none" : "auto";
        return (0, f.jsx)("div", {
          ref: S,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: J,
            ...i,
          },
          ...I,
          children: (0, f.jsx)("div", {
            ref: x,
            style: { width: "100%", height: "100%" },
            children: (0, f.jsx)("canvas", {
              ref: G,
              style: { display: "block" },
              children: r,
            }),
          }),
        });
      }
      function A(e) {
        return (0, f.jsx)(d.Af, { children: (0, f.jsx)(h, { ...e }) });
      }
      r(7630);
      var p = [],
        m = "ResizeObserver loop completed with undelivered notifications.",
        B = function () {
          var e;
          "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: m }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
              (e.message = m)),
            window.dispatchEvent(e);
        };
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(i || (i = {}));
      var g = function (e) {
          return Object.freeze(e);
        },
        v = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), g(this);
        },
        C = (function () {
          function e(e, t, r, n) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = r),
              (this.height = n),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              g(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                x: this.x,
                y: this.y,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
                width: this.width,
                height: this.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        b = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        E = function (e) {
          if (b(e)) {
            var t = e.getBBox(),
              r = t.width,
              n = t.height;
            return !r && !n;
          }
          var i = e.offsetWidth,
            a = e.offsetHeight;
          return !(i || a || e.getClientRects().length);
        },
        y = function (e) {
          if (e instanceof Element) return !0;
          var t,
            r =
              null == (t = null == e ? void 0 : e.ownerDocument)
                ? void 0
                : t.defaultView;
          return !!(r && e instanceof r.Element);
        },
        M = function (e) {
          switch (e.tagName) {
            case "INPUT":
              if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
              return !0;
          }
          return !1;
        },
        w = "undefined" != typeof window ? window : {},
        R = new WeakMap(),
        F = /auto|scroll/,
        I = /^tb|vertical/,
        T = /msie|trident/i.test(w.navigator && w.navigator.userAgent),
        x = function (e) {
          return parseFloat(e || "0");
        },
        D = function (e, t, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new v((r ? t : e) || 0, (r ? e : t) || 0)
          );
        },
        G = g({
          devicePixelContentBoxSize: D(),
          borderBoxSize: D(),
          contentBoxSize: D(),
          contentRect: new C(0, 0, 0, 0),
        }),
        S = function (e, t) {
          if ((void 0 === t && (t = !1), R.has(e) && !t)) return R.get(e);
          if (E(e)) return R.set(e, G), G;
          var r = getComputedStyle(e),
            n = b(e) && e.ownerSVGElement && e.getBBox(),
            i = !T && "border-box" === r.boxSizing,
            a = I.test(r.writingMode || ""),
            o = !n && F.test(r.overflowY || ""),
            s = !n && F.test(r.overflowX || ""),
            l = n ? 0 : x(r.paddingTop),
            u = n ? 0 : x(r.paddingRight),
            c = n ? 0 : x(r.paddingBottom),
            d = n ? 0 : x(r.paddingLeft),
            f = n ? 0 : x(r.borderTopWidth),
            h = n ? 0 : x(r.borderRightWidth),
            A = n ? 0 : x(r.borderBottomWidth),
            p = n ? 0 : x(r.borderLeftWidth),
            m = d + u,
            B = l + c,
            v = p + h,
            y = f + A,
            M = s ? e.offsetHeight - y - e.clientHeight : 0,
            w = o ? e.offsetWidth - v - e.clientWidth : 0,
            S = n ? n.width : x(r.width) - (i ? m + v : 0) - w,
            H = n ? n.height : x(r.height) - (i ? B + y : 0) - M,
            _ = S + m + w + v,
            O = H + B + M + y,
            L = g({
              devicePixelContentBoxSize: D(
                Math.round(S * devicePixelRatio),
                Math.round(H * devicePixelRatio),
                a
              ),
              borderBoxSize: D(_, O, a),
              contentBoxSize: D(S, H, a),
              contentRect: new C(d, l, S, H),
            });
          return R.set(e, L), L;
        },
        H = function (e, t, r) {
          var n = S(e, r),
            a = n.borderBoxSize,
            o = n.contentBoxSize,
            s = n.devicePixelContentBoxSize;
          switch (t) {
            case i.DEVICE_PIXEL_CONTENT_BOX:
              return s;
            case i.BORDER_BOX:
              return a;
            default:
              return o;
          }
        },
        _ = function (e) {
          var t = S(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = g([t.borderBoxSize])),
            (this.contentBoxSize = g([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = g([t.devicePixelContentBoxSize]));
        },
        O = function (e) {
          if (E(e)) return 1 / 0;
          for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
          return t;
        },
        L = function () {
          var e = 1 / 0,
            t = [];
          p.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
              var n = [];
              r.activeTargets.forEach(function (t) {
                var r = new _(t.target),
                  i = O(t.target);
                n.push(r),
                  (t.lastReportedSize = H(t.target, t.observedBox)),
                  i < e && (e = i);
              }),
                t.push(function () {
                  r.callback.call(r.observer, n, r.observer);
                }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }
          });
          for (var r = 0; r < t.length; r++) (0, t[r])();
          return e;
        },
        U = function (e) {
          p.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (r) {
                r.isActive() &&
                  (O(r.target) > e
                    ? t.activeTargets.push(r)
                    : t.skippedTargets.push(r));
              });
          });
        },
        P = function () {
          var e = 0;
          for (
            U(0);
            p.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            U((e = L()));
          return (
            p.some(function (e) {
              return e.skippedTargets.length > 0;
            }) && B(),
            e > 0
          );
        },
        J = [],
        k = function (e) {
          if (!a) {
            var t = 0,
              r = document.createTextNode("");
            new MutationObserver(function () {
              return J.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(r, { characterData: !0 }),
              (a = function () {
                r.textContent = "".concat(t ? t-- : t++);
              });
          }
          J.push(e), a();
        },
        N = function (e) {
          k(function () {
            requestAnimationFrame(e);
          });
        },
        K = 0,
        j = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Q = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        X = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        Y = !1,
        W = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !Y)) {
                Y = !0;
                var r = X(e);
                N(function () {
                  var n = !1;
                  try {
                    n = P();
                  } finally {
                    if (((Y = !1), (e = r - X()), !K)) return;
                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, j);
                };
              document.body ? t() : w.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Q.forEach(function (t) {
                  return w.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Q.forEach(function (t) {
                  return w.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        z = function (e) {
          !K && e > 0 && W.start(), (K += e) || W.stop();
        },
        Z = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || i.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = H(this.target, this.observedBox, !0);
              return (
                b((e = this.target)) ||
                  M(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        q = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        V = new WeakMap(),
        $ = function (e, t) {
          for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
          return -1;
        },
        ee = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var r = new q(e, t);
              V.set(e, r);
            }),
            (e.observe = function (e, t, r) {
              var n = V.get(e),
                i = 0 === n.observationTargets.length;
              0 > $(n.observationTargets, t) &&
                (i && p.push(n),
                n.observationTargets.push(new Z(t, r && r.box)),
                z(1),
                W.schedule());
            }),
            (e.unobserve = function (e, t) {
              var r = V.get(e),
                n = $(r.observationTargets, t),
                i = 1 === r.observationTargets.length;
              n >= 0 &&
                (i && p.splice(p.indexOf(r), 1),
                r.observationTargets.splice(n, 1),
                z(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                r = V.get(e);
              r.observationTargets.slice().forEach(function (r) {
                return t.unobserve(e, r.target);
              }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
          );
        })(),
        et = (function () {
          function e(e) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            ee.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!y(e))
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ee.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!y(e))
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ee.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              ee.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        er = r(7139);
      let en =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? o.useEffect
          : o.useLayoutEffect;
      var ei = r(9671);
      r(3773), r(7655);
      let ea = new Promise((e) => {
        let t = new Image();
        t.addEventListener("error", () => e(!1)),
          t.addEventListener("load", () => e(1 === t.width)),
          (t.src =
            "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=");
      }).catch(() => !1);
      r(1694);
      var eo = r(4497);
      function es() {
        return (es = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function el(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          t.indexOf((r = a[n])) >= 0 || (i[r] = e[r]);
        return i;
      }
      function eu(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == typeof t ? t : String(t);
      }
      let ec = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        ed = {
          PRIORITY_PRELOAD: 0,
          PRIORITY_GLOBAL: 1e3,
          DEFAULT_SCALE_MULTIPLIER: 1,
          preloadQueue: [],
        },
        ef = (function (e) {
          let t =
              "function" == typeof e
                ? (function (e) {
                    let t,
                      r = new Set(),
                      n = (e, n) => {
                        let i = "function" == typeof e ? e(t) : e;
                        if (i !== t) {
                          let e = t;
                          (t = n ? i : Object.assign({}, t, i)),
                            r.forEach((r) => r(t, e));
                        }
                      },
                      i = () => t,
                      a = {
                        setState: n,
                        getState: i,
                        subscribe: (e, n, a) =>
                          n || a
                            ? ((e, n = i, a = Object.is) => {
                                console.warn(
                                  "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                                );
                                let o = n(t);
                                function s() {
                                  let r = n(t);
                                  if (!a(o, r)) {
                                    let t = o;
                                    e((o = r), t);
                                  }
                                }
                                return r.add(s), () => r.delete(s);
                              })(e, n, a)
                            : (r.add(e), () => r.delete(e)),
                        destroy: () => r.clear(),
                      };
                    return (t = e(n, i, a)), a;
                  })(e)
                : e,
            r = (e = t.getState, r = Object.is) => {
              let n,
                [, i] = (0, o.useReducer)((e) => e + 1, 0),
                a = t.getState(),
                s = (0, o.useRef)(a),
                l = (0, o.useRef)(e),
                u = (0, o.useRef)(r),
                c = (0, o.useRef)(!1),
                d = (0, o.useRef)();
              void 0 === d.current && (d.current = e(a));
              let f = !1;
              (s.current !== a ||
                l.current !== e ||
                u.current !== r ||
                c.current) &&
                ((n = e(a)), (f = !r(d.current, n))),
                en(() => {
                  f && (d.current = n),
                    (s.current = a),
                    (l.current = e),
                    (u.current = r),
                    (c.current = !1);
                });
              let h = (0, o.useRef)(a);
              en(() => {
                let e = () => {
                    try {
                      let e = t.getState(),
                        r = l.current(e);
                      u.current(d.current, r) ||
                        ((s.current = e), (d.current = r), i());
                    } catch (e) {
                      (c.current = !0), i();
                    }
                  },
                  r = t.subscribe(e);
                return t.getState() !== h.current && e(), r;
              }, []);
              let A = f ? n : d.current;
              return (0, o.useDebugValue)(A), A;
            };
          return (
            Object.assign(r, t),
            (r[Symbol.iterator] = function () {
              console.warn(
                "[useStore, api] = create() is deprecated and will be removed in v4"
              );
              let e = [r, t];
              return {
                next() {
                  let t = e.length <= 0;
                  return { value: e.shift(), done: t };
                },
              };
            }),
            r
          );
        })((e) => ({
          debug: !1,
          scaleMultiplier: ed.DEFAULT_SCALE_MULTIPLIER,
          globalRender: !0,
          globalPriority: ed.PRIORITY_GLOBAL,
          globalClearDepth: !1,
          globalRenderQueue: !1,
          clearGlobalRenderQueue: () => e(() => ({ globalRenderQueue: !1 })),
          isCanvasAvailable: !1,
          hasSmoothScrollbar: !1,
          canvasChildren: {},
          renderToCanvas: (t, r, n = {}) =>
            e(({ canvasChildren: e }) =>
              Object.getOwnPropertyDescriptor(e, t)
                ? ((e[t].instances += 1),
                  (e[t].props.inactive = !1),
                  { canvasChildren: e })
                : {
                    canvasChildren: es({}, e, {
                      [t]: { mesh: r, props: n, instances: 1 },
                    }),
                  }
            ),
          updateCanvas: (t, r) =>
            e(({ canvasChildren: e }) => {
              if (!e[t]) return;
              let {
                [t]: { mesh: n, props: i, instances: a },
              } = e;
              return {
                canvasChildren: es({}, e, {
                  [t]: { mesh: n, props: es({}, i, r), instances: a },
                }),
              };
            }),
          removeFromCanvas: (t, r = !0) =>
            e(({ canvasChildren: e }) => {
              var n;
              return (null == (n = e[t]) ? void 0 : n.instances) > 1
                ? ((e[t].instances -= 1), { canvasChildren: e })
                : r
                ? { canvasChildren: el(e, [t].map(eu)) }
                : ((e[t].instances = 0),
                  (e[t].props.inactive = !0),
                  { canvasChildren: es({}, e) });
            }),
          pageReflow: 0,
          requestReflow: () => {
            e((e) => ({ pageReflow: e.pageReflow + 1 }));
          },
          scroll: {
            y: 0,
            x: 0,
            limit: 0,
            velocity: 0,
            progress: 0,
            direction: 0,
            scrollDirection: void 0,
          },
          __lenis: void 0,
          scrollTo: () => {},
          onScroll: () => () => {},
        })),
        eh = () => {
          let e = ef((e) => e.requestReflow),
            t = ef((e) => e.debug);
          return (
            (0, o.useEffect)(() => {
              let r = new (window.ResizeObserver || et)(() => {
                e(),
                  t &&
                    console.log(
                      "ResizeManager",
                      "document.body height changed"
                    );
              });
              return (
                r.observe(document.body),
                () => {
                  null == r || r.disconnect();
                }
              );
            }, []),
            null
          );
        },
        eA = ["makeDefault", "margin"],
        ep = (0, o.forwardRef)((e, t) => {
          let { makeDefault: r = !1, margin: n = 0 } = e,
            i = el(e, eA),
            a = (0, s.C)((e) => e.set),
            l = (0, s.C)((e) => e.camera),
            u = (0, s.C)((e) => e.size),
            c = (0, s.C)((e) => e.viewport),
            d = (0, o.useRef)(null);
          (0, o.useImperativeHandle)(t, () => d.current);
          let f = ef((e) => e.pageReflow),
            h = ef((e) => e.scaleMultiplier),
            {
              fov: A,
              distance: p,
              aspect: m,
            } = (0, o.useMemo)(() => {
              var e;
              let t = (u.height + 2 * n) * h,
                r = ((u.width + 2 * n) * h) / t,
                a = i.fov || 50,
                o = null == i || null == (e = i.position) ? void 0 : e[2];
              return (
                o
                  ? (a = (180 / Math.PI) * 2 * Math.atan(t / (2 * o)))
                  : (o = t / (2 * Math.tan(((a / 2) * Math.PI) / 180))),
                { fov: a, distance: o, aspect: r }
              );
            }, [u, h, f]);
          return (
            ec(() => {
              d.current.lookAt(0, 0, 0),
                d.current.updateProjectionMatrix(),
                d.current.updateMatrixWorld(),
                a((e) => ({
                  viewport: es({}, e.viewport, c.getCurrentViewport(l)),
                }));
            }, [u, h, f]),
            ec(() => {
              if (r)
                return (
                  a(() => ({ camera: d.current })),
                  () => a(() => ({ camera: l }))
                );
            }, [d, r, a]),
            o.createElement(
              "perspectiveCamera",
              es(
                {
                  ref: d,
                  position: [0, 0, p],
                  onUpdate: (e) => e.updateProjectionMatrix(),
                  near: 0.1,
                  aspect: m,
                  fov: A,
                  far: 2 * p,
                },
                i
              )
            )
          );
        }),
        em = ["makeDefault", "margin"],
        eB = (0, o.forwardRef)((e, t) => {
          let { makeDefault: r = !1, margin: n = 0 } = e,
            i = el(e, em),
            a = (0, s.C)((e) => e.set),
            l = (0, s.C)((e) => e.camera),
            u = (0, s.C)((e) => e.size),
            c = ef((e) => e.pageReflow),
            d = ef((e) => e.scaleMultiplier),
            f = (0, o.useMemo)(
              () => Math.max(u.width * d, u.height * d),
              [u, c, d]
            ),
            h = (0, o.useRef)(null);
          return (
            (0, o.useImperativeHandle)(t, () => h.current),
            ec(() => {
              h.current.lookAt(0, 0, 0),
                h.current.updateProjectionMatrix(),
                h.current.updateMatrixWorld();
            }, [f, u]),
            ec(() => {
              if (r)
                return (
                  a(() => ({ camera: h.current })),
                  () => a(() => ({ camera: l }))
                );
            }, [h, r, a]),
            o.createElement(
              "orthographicCamera",
              es(
                {
                  left: -((u.width * d) / 2) - n * d,
                  right: (u.width * d) / 2 + n * d,
                  top: (u.height * d) / 2 + n * d,
                  bottom: -((u.height * d) / 2) - n * d,
                  far: 2 * f,
                  position: [0, 0, f],
                  near: 0.001,
                  ref: h,
                  onUpdate: (e) => e.updateProjectionMatrix(),
                },
                i
              )
            )
          );
        });
      function eg(e, t) {
        e &&
          (!1 === t
            ? ((e.wasFrustumCulled = e.frustumCulled),
              (e.wasVisible = e.visible),
              (e.visible = !0),
              (e.frustumCulled = !1))
            : ((e.visible = !!e.wasVisible),
              (e.frustumCulled = !!e.wasFrustumCulled)),
          e.children.forEach((e) => eg(e, t)));
      }
      let ev = new ei.I9Y(),
        eC = (e = [0]) => {
          (ef.getState().globalRenderQueue = ef.getState()
            .globalRenderQueue || [0]),
            (ef.getState().globalRenderQueue = [
              ...(ef.getState().globalRenderQueue || []),
              ...e,
            ]);
        },
        eb = ({
          gl: e,
          scene: t,
          camera: r,
          left: n,
          top: i,
          width: a,
          height: o,
          layer: s = 0,
          autoClear: l = !1,
          clearDepth: u = !1,
        }) => {
          t &&
            r &&
            ((e.autoClear = l),
            e.setScissor(n, i, a, o),
            e.setScissorTest(!0),
            r.layers.set(s),
            u && e.clearDepth(),
            e.render(t, r),
            e.setScissorTest(!1));
        },
        eE = ({
          gl: e,
          scene: t,
          camera: r,
          left: n,
          top: i,
          width: a,
          height: o,
          layer: s = 0,
          scissor: l = !0,
          autoClear: u = !1,
          clearDepth: c = !1,
        }) => {
          t &&
            r &&
            (e.getSize(ev),
            (e.autoClear = u),
            e.setViewport(n, i, a, o),
            e.setScissor(n, i, a, o),
            e.setScissorTest(l),
            r.layers.set(s),
            c && e.clearDepth(),
            e.render(t, r),
            e.setScissorTest(!1),
            e.setViewport(0, 0, ev.x, ev.y));
        },
        ey = ({ scene: e, camera: t, layer: r = 0 }, n) => {
          ed.preloadQueue.push((i, a, o) => {
            i.setScissorTest(!1),
              eg(e || a, !1),
              (t || o).layers.set(r),
              i.render(e || a, t || o),
              eg(e || a, !0),
              n && n();
          }),
            (0, s.m)();
        },
        eM = () => {
          let e = ef((e) => e.isCanvasAvailable),
            t = ef((e) => e.hasSmoothScrollbar),
            r = ef((e) => e.requestReflow),
            n = ef((e) => e.pageReflow),
            i = ef((e) => e.debug),
            a = ef((e) => e.scaleMultiplier);
          return (
            (0, o.useEffect)(() => {
              i &&
                ((window._scrollRig = window._scrollRig || {}),
                (window._scrollRig.reflow = r));
            }, []),
            {
              debug: i,
              isCanvasAvailable: e,
              hasSmoothScrollbar: t,
              scaleMultiplier: a,
              preloadScene: ey,
              requestRender: eC,
              renderScissor: eb,
              renderViewport: eE,
              reflow: r,
              reflowCompleted: n,
            }
          );
        },
        ew = ({ children: e }) => {
          let t = (0, s.C)((e) => e.gl),
            r = ef((e) => e.canvasChildren),
            n = eM();
          return (
            (0, o.useEffect)(() => {
              Object.keys(r).length ||
                (n.debug &&
                  console.log("GlobalRenderer", "auto render empty canvas"),
                t.clear(),
                n.requestRender(),
                (0, s.m)());
            }, [r]),
            n.debug && console.log("GlobalChildren", Object.keys(r).length),
            o.createElement(
              o.Fragment,
              null,
              e,
              Object.keys(r).map((e) => {
                let { mesh: t, props: i } = r[e];
                return "function" == typeof t
                  ? o.createElement(
                      o.Fragment,
                      { key: e },
                      t(es({ key: e }, n, i))
                    )
                  : (0, o.cloneElement)(t, es({ key: e }, i));
              })
            )
          );
        },
        eR = () => {
          let e = (0, s.C)((e) => e.gl),
            t = (0, s.C)((e) => e.frameloop),
            r = ef((e) => e.globalClearDepth),
            n = ef((e) => e.globalPriority),
            i = eM();
          return (
            ec(() => {
              e.debug.checkShaderErrors = i.debug;
            }, [i.debug]),
            (0, s.D)(({ camera: t, scene: r }) => {
              ed.preloadQueue.length &&
                (ed.preloadQueue.forEach((n) => n(e, r, t)),
                e.clear(),
                (ed.preloadQueue = []),
                i.debug &&
                  console.log(
                    "GlobalRenderer",
                    "preload complete. trigger global render"
                  ),
                i.requestRender(),
                (0, s.m)());
            }, ed.PRIORITY_PRELOAD),
            (0, s.D)(({ camera: n, scene: i }) => {
              let a = ef.getState().globalRenderQueue;
              ("always" === t || a) &&
                (n.layers.disableAll(),
                a
                  ? a.forEach((e) => {
                      n.layers.enable(e);
                    })
                  : n.layers.enable(0),
                r && e.clearDepth(),
                e.render(i, n)),
                ef.getState().clearGlobalRenderQueue();
            }, n),
            null
          );
        };
      class eF extends o.Component {
        constructor(e) {
          super(e), (this.state = { error: !1 }), (this.props = e);
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error
            ? (this.props.onError && this.props.onError(this.state.error), null)
            : this.props.children;
        }
      }
      var eI = "8.14.0";
      let eT = [
          "children",
          "as",
          "gl",
          "style",
          "orthographic",
          "camera",
          "debug",
          "scaleMultiplier",
          "globalRender",
          "globalPriority",
          "globalClearDepth",
        ],
        ex = ["children", "onError"];
      "undefined" != typeof window && (n = window.ResizeObserver || et);
      let eD = (e) => {
          let {
              children: t,
              as: r = A,
              gl: i,
              style: a,
              orthographic: s,
              camera: l,
              debug: u,
              scaleMultiplier: c = ed.DEFAULT_SCALE_MULTIPLIER,
              globalRender: d = !0,
              globalPriority: f = ed.PRIORITY_GLOBAL,
              globalClearDepth: h = !1,
            } = e,
            p = el(e, eT),
            m = ef((e) => e.globalRender);
          return (
            ec(() => {
              "undefined" != typeof window && (window.__r3f_scroll_rig = eI);
              let e = (0, er.parse)(window.location.search);
              (u || void 0 !== e.debug) &&
                (ef.setState({ debug: !0 }),
                console.info("@14islands/r3f-scroll-rig@" + eI));
            }, [u]),
            ec(() => {
              (0, o.startTransition)(() => {
                ef.setState({
                  scaleMultiplier: c,
                  globalRender: d,
                  globalPriority: f,
                  globalClearDepth: h,
                });
              });
            }, [c, f, d, h]),
            o.createElement(
              r,
              es(
                {
                  id: "ScrollRig-canvas",
                  camera: { manual: !0 },
                  gl: es({ failIfMajorPerformanceCaveat: !0 }, i),
                  resize: { scroll: !1, debounce: 0, polyfill: n },
                  style: es(
                    {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100vh",
                    },
                    a
                  ),
                },
                p
              ),
              !s && o.createElement(ep, es({ manual: !0, makeDefault: !0 }, l)),
              s && o.createElement(eB, es({ manual: !0, makeDefault: !0 }, l)),
              m && o.createElement(eR, null),
              "function" == typeof t
                ? t(o.createElement(ew, null))
                : o.createElement(ew, null, t),
              o.createElement(eh, null)
            )
          );
        },
        eG = (e) => {
          let { children: t, onError: r } = e,
            n = el(e, ex);
          return (
            ec(() => {
              document.documentElement.classList.add("js-has-global-canvas"),
                ef.setState({ isCanvasAvailable: !0 });
            }, []),
            o.createElement(
              eF,
              {
                onError: (e) => {
                  r && r(e),
                    ef.setState({ isCanvasAvailable: !1 }),
                    document.documentElement.classList.remove(
                      "js-has-global-canvas"
                    ),
                    document.documentElement.classList.add(
                      "js-global-canvas-error"
                    );
                },
              },
              o.createElement(eD, es({}, n), t),
              o.createElement(
                "noscript",
                null,
                o.createElement(
                  "style",
                  null,
                  "\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          "
                )
              )
            )
          );
        },
        eS = ["children", "id", "dispose"];
      (0, o.forwardRef)((e, t) => {
        let { children: r, id: n, dispose: i = !0 } = e,
          a = el(e, eS);
        return (
          r &&
            (function (e, t = {}, { key: r, dispose: n = !0 } = {}) {
              let i = ef((e) => e.updateCanvas),
                a = ef((e) => e.renderToCanvas),
                s = ef((e) => e.removeFromCanvas),
                l = (0, o.useMemo)(() => r || ei.cj9.generateUUID(), []);
              ec(() => {
                a(l, e, es({}, t, { inactive: !1 }));
              }, [l]),
                (0, o.useEffect)(
                  () => () => {
                    s(l, n);
                  },
                  [l]
                );
              let u = (0, o.useCallback)(
                (e) => {
                  i(l, e);
                },
                [i, l]
              );
              (0, o.useEffect)(() => {
                u(t);
              }, [...Object.values(t)]);
            })(r, es({}, a, { id: n, ref: t }), { key: n, dispose: i }),
          null
        );
      });
      ea.then((e) => {});
      let eH = (0, o.forwardRef)(
        (
          {
            children: e,
            enabled: t = !0,
            locked: r = !1,
            scrollRestoration: n = "auto",
            disablePointerOnScroll: i = !0,
            horizontal: a = !1,
            scrollInContainer: s = !1,
            updateGlobalState: l = !0,
            onScroll: u,
            config: c = {},
            invalidate: d = () => {},
            addEffect: f,
          },
          h
        ) => {
          let A = (0, o.useRef)(),
            p = (0, o.useRef)(!1),
            m = ef((e) => e.scroll);
          (0, o.useImperativeHandle)(h, () => ({
            start: () => {
              var e;
              return null == (e = A.current) ? void 0 : e.start();
            },
            stop: () => {
              var e;
              return null == (e = A.current) ? void 0 : e.stop();
            },
            on: (e, t) => {
              var r;
              return null == (r = A.current) ? void 0 : r.on(e, t);
            },
            scrollTo: (e, t) => {
              var r;
              return null == (r = A.current) ? void 0 : r.scrollTo(e, t);
            },
            raf: (e) => {
              var t;
              return null == (t = A.current) ? void 0 : t.raf(e);
            },
            __lenis: A.current,
          }));
          let B = (0, o.useCallback)(
            (e) => {
              i &&
                p.current !== e &&
                ((p.current = e),
                (document.documentElement.style.pointerEvents = e
                  ? "none"
                  : "auto"));
            },
            [i, p]
          );
          return (
            ec(() => {
              "scrollRestoration" in window.history &&
                (window.history.scrollRestoration = n);
            }, []),
            ec(() => {
              let e,
                r = document.documentElement,
                n = document.body,
                i = document.body.firstElementChild;
              if (
                (r.classList.toggle("ScrollRig-scrollHtml", s),
                n.classList.toggle("ScrollRig-scrollWrapper", s),
                s &&
                  Object.assign(c, { smoothTouch: !0, wrapper: n, content: i }),
                (A.current = new eo.default(
                  es(
                    { orientation: a ? "horizontal" : "vertical" },
                    c,
                    t ? {} : { smoothWheel: !1, syncTouch: !1, smoothTouch: !1 }
                  )
                )),
                f)
              )
                e = f((e) => {
                  var t;
                  return null == (t = A.current) ? void 0 : t.raf(e);
                });
              else {
                let t;
                (t = requestAnimationFrame(function e(r) {
                  var n;
                  null == (n = A.current) || n.raf(r),
                    (t = requestAnimationFrame(e));
                })),
                  (e = () => cancelAnimationFrame(t));
              }
              return () => {
                var t;
                e(), null == (t = A.current) || t.destroy();
              };
            }, [t]),
            ec(() => {
              let e = A.current,
                t = ({
                  scroll: e,
                  limit: t,
                  velocity: r,
                  direction: n,
                  progress: i,
                }) => {
                  let o = a ? e : 0;
                  l &&
                    ((m.y = a ? 0 : e),
                    (m.x = o),
                    (m.limit = t),
                    (m.velocity = r),
                    (m.direction = n),
                    (m.progress = i || 0)),
                    Math.abs(r) > 1.5 && B(!0),
                    1 > Math.abs(r) && B(!1),
                    u &&
                      u({
                        scroll: e,
                        limit: t,
                        velocity: r,
                        direction: n,
                        progress: i,
                      }),
                    d();
                };
              return (
                null == e || e.on("scroll", t),
                l &&
                  ((m.scrollDirection = a ? "horizontal" : "vertical"),
                  ef.setState({
                    __lenis: e,
                    scrollTo: (...t) => {
                      null == e || e.scrollTo(...t);
                    },
                    onScroll: (t) => (
                      null == e || e.on("scroll", t),
                      null == e || e.emit(),
                      () => (null == e ? void 0 : e.off("scroll", t))
                    ),
                  }),
                  (ef.getState().scroll.y = window.scrollY),
                  (ef.getState().scroll.x = window.scrollX)),
                null == e || e.emit(),
                () => {
                  null == e || e.off("scroll", t),
                    l &&
                      ef.setState({
                        __lenis: void 0,
                        onScroll: () => () => {},
                        scrollTo: () => {},
                      });
                }
              );
            }, [t]),
            ec(() => {
              let e = () => d(),
                t = () => B(!1);
              return (
                window.addEventListener("pointermove", t),
                window.addEventListener("pointerdown", t),
                window.addEventListener("wheel", e),
                () => {
                  window.removeEventListener("pointermove", t),
                    window.removeEventListener("pointerdown", t),
                    window.removeEventListener("wheel", e);
                }
              );
            }, []),
            (0, o.useEffect)(
              () => (
                l &&
                  (document.documentElement.classList.toggle(
                    "js-smooth-scrollbar-enabled",
                    t
                  ),
                  document.documentElement.classList.toggle(
                    "js-smooth-scrollbar-disabled",
                    !t
                  ),
                  ef.setState({ hasSmoothScrollbar: t })),
                () => {
                  document.documentElement.classList.remove(
                    "js-smooth-scrollbar-enabled"
                  ),
                    document.documentElement.classList.remove(
                      "js-smooth-scrollbar-disabled"
                    );
                }
              ),
              [t]
            ),
            (0, o.useEffect)(() => {
              var e, t;
              r
                ? null == (e = A.current) || e.stop()
                : null == (t = A.current) || t.start();
            }, [r]),
            e ? e({}) : null
          );
        }
      );
      var e_ = (0, o.forwardRef)(function (e, t) {
        let r = ef((e) => e.isCanvasAvailable);
        return o.createElement(
          eH,
          es(
            r
              ? { key: "r3f", ref: t, invalidate: s.m, addEffect: s.j }
              : { key: "native", ref: t },
            e
          )
        );
      });
    },
    655: (e, t) => {
      "use strict";
      function r(e, t) {
        var r = e.length;
        for (e.push(t); 0 < r; ) {
          var n = (r - 1) >>> 1,
            i = e[n];
          if (0 < a(i, t)) (e[n] = t), (e[r] = i), (r = n);
          else break;
        }
      }
      function n(e) {
        return 0 === e.length ? null : e[0];
      }
      function i(e) {
        if (0 === e.length) return null;
        var t = e[0],
          r = e.pop();
        if (r !== t) {
          e[0] = r;
          for (var n = 0, i = e.length, o = i >>> 1; n < o; ) {
            var s = 2 * (n + 1) - 1,
              l = e[s],
              u = s + 1,
              c = e[u];
            if (0 > a(l, r))
              u < i && 0 > a(c, l)
                ? ((e[n] = c), (e[u] = r), (n = u))
                : ((e[n] = l), (e[s] = r), (n = s));
            else if (u < i && 0 > a(c, r)) (e[n] = c), (e[u] = r), (n = u);
            else break;
          }
        }
        return t;
      }
      function a(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id;
      }
      if (
        ((t.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now)
      ) {
        var o,
          s = performance;
        t.unstable_now = function () {
          return s.now();
        };
      } else {
        var l = Date,
          u = l.now();
        t.unstable_now = function () {
          return l.now() - u;
        };
      }
      var c = [],
        d = [],
        f = 1,
        h = null,
        A = 3,
        p = !1,
        m = !1,
        B = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        C = "function" == typeof clearTimeout ? clearTimeout : null,
        b = "undefined" != typeof setImmediate ? setImmediate : null;
      function E(e) {
        for (var t = n(d); null !== t; ) {
          if (null === t.callback) i(d);
          else if (t.startTime <= e)
            i(d), (t.sortIndex = t.expirationTime), r(c, t);
          else break;
          t = n(d);
        }
      }
      function y(e) {
        if (((B = !1), E(e), !m))
          if (null !== n(c)) (m = !0), M || ((M = !0), o());
          else {
            var t = n(d);
            null !== t && G(y, t.startTime - e);
          }
      }
      var M = !1,
        w = -1,
        R = 5,
        F = -1;
      function I() {
        return !!g || !(t.unstable_now() - F < R);
      }
      function T() {
        if (((g = !1), M)) {
          var e = t.unstable_now();
          F = e;
          var r = !0;
          try {
            e: {
              (m = !1), B && ((B = !1), C(w), (w = -1)), (p = !0);
              var a = A;
              try {
                t: {
                  for (
                    E(e), h = n(c);
                    null !== h && !(h.expirationTime > e && I());

                  ) {
                    var s = h.callback;
                    if ("function" == typeof s) {
                      (h.callback = null), (A = h.priorityLevel);
                      var l = s(h.expirationTime <= e);
                      if (((e = t.unstable_now()), "function" == typeof l)) {
                        (h.callback = l), E(e), (r = !0);
                        break t;
                      }
                      h === n(c) && i(c), E(e);
                    } else i(c);
                    h = n(c);
                  }
                  if (null !== h) r = !0;
                  else {
                    var u = n(d);
                    null !== u && G(y, u.startTime - e), (r = !1);
                  }
                }
                break e;
              } finally {
                (h = null), (A = a), (p = !1);
              }
            }
          } finally {
            r ? o() : (M = !1);
          }
        }
      }
      if ("function" == typeof b)
        o = function () {
          b(T);
        };
      else if ("undefined" != typeof MessageChannel) {
        var x = new MessageChannel(),
          D = x.port2;
        (x.port1.onmessage = T),
          (o = function () {
            D.postMessage(null);
          });
      } else
        o = function () {
          v(T, 0);
        };
      function G(e, r) {
        w = v(function () {
          e(t.unstable_now());
        }, r);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (R = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return A;
        }),
        (t.unstable_next = function (e) {
          switch (A) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = A;
          }
          var r = A;
          A = t;
          try {
            return e();
          } finally {
            A = r;
          }
        }),
        (t.unstable_requestPaint = function () {
          g = !0;
        }),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var r = A;
          A = e;
          try {
            return t();
          } finally {
            A = r;
          }
        }),
        (t.unstable_scheduleCallback = function (e, i, a) {
          var s = t.unstable_now();
          switch (
            ((a =
              "object" == typeof a &&
              null !== a &&
              "number" == typeof (a = a.delay) &&
              0 < a
                ? s + a
                : s),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 0x3fffffff;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (l = a + l),
            (e = {
              id: f++,
              callback: i,
              priorityLevel: e,
              startTime: a,
              expirationTime: l,
              sortIndex: -1,
            }),
            a > s
              ? ((e.sortIndex = a),
                r(d, e),
                null === n(c) &&
                  e === n(d) &&
                  (B ? (C(w), (w = -1)) : (B = !0), G(y, a - s)))
              : ((e.sortIndex = l),
                r(c, e),
                m || p || ((m = !0), M || ((M = !0), o()))),
            e
          );
        }),
        (t.unstable_shouldYield = I),
        (t.unstable_wrapCallback = function (e) {
          var t = A;
          return function () {
            var r = A;
            A = t;
            try {
              return e.apply(this, arguments);
            } finally {
              A = r;
            }
          };
        });
    },
    1694: (e) => {
      "use strict";
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1;
            for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((n = (a = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (i = n; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(r, a[i])) return !1;
          for (i = n; 0 != i--; ) {
            var n,
              i,
              a,
              o = a[i];
            if (!e(t[o], r[o])) return !1;
          }
          return !0;
        }
        return t != t && r != r;
      };
    },
    2490: (e, t, r) => {
      "use strict";
      r.d(t, { Do: () => a, Fh: () => h });
      var n = r(8616),
        i = r(9671);
      let a = /\bvoid\s+main\s*\(\s*\)\s*{/g;
      function o(e) {
        return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function (e, t) {
          let r = n.ShaderChunk[t];
          return r ? o(r) : e;
        });
      }
      let s = [];
      for (let e = 0; e < 256; e++) s[e] = (e < 16 ? "0" : "") + e.toString(16);
      let l =
          Object.assign ||
          function () {
            let e = arguments[0];
            for (let t = 1, r = arguments.length; t < r; t++) {
              let r = arguments[t];
              if (r)
                for (let t in r)
                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
          },
        u = Date.now(),
        c = new WeakMap(),
        d = new Map(),
        f = 1e10;
      function h(e, t) {
        let r = (function (e) {
            let t = JSON.stringify(e, p),
              r = B.get(t);
            return null == r && B.set(t, (r = ++m)), r;
          })(t),
          n = c.get(e);
        if ((n || c.set(e, (n = Object.create(null))), n[r])) return new n[r]();
        let a = `_onBeforeCompile${r}`,
          g = function (n, i) {
            e.onBeforeCompile.call(this, n, i);
            let s =
                this.customProgramCacheKey() +
                "|" +
                n.vertexShader +
                "|" +
                n.fragmentShader,
              c = d[s];
            if (!c) {
              let e = (function (
                e,
                { vertexShader: t, fragmentShader: r },
                n,
                i
              ) {
                let {
                  vertexDefs: a,
                  vertexMainIntro: s,
                  vertexMainOutro: l,
                  vertexTransform: u,
                  fragmentDefs: c,
                  fragmentMainIntro: d,
                  fragmentMainOutro: f,
                  fragmentColorTransform: h,
                  customRewriter: p,
                  timeUniform: m,
                } = n;
                if (
                  ((a = a || ""),
                  (s = s || ""),
                  (l = l || ""),
                  (c = c || ""),
                  (d = d || ""),
                  (f = f || ""),
                  (u || p) && (t = o(t)),
                  (h || p) &&
                    (r = o(
                      (r = r.replace(
                        /^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,
                        "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"
                      ))
                    )),
                  p)
                ) {
                  let e = p({ vertexShader: t, fragmentShader: r });
                  (t = e.vertexShader), (r = e.fragmentShader);
                }
                if (h) {
                  let e = [];
                  (r = r.replace(
                    /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
                    (t) => (e.push(t), "")
                  )),
                    (f = `${h}
${e.join("\n")}
${f}`);
                }
                if (m) {
                  let e = `
uniform float ${m};
`;
                  (a = e + a), (c = e + c);
                }
                return (
                  u &&
                    ((t = `vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`),
                    (a = `${a}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${u}
}
`),
                    (s = `
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`),
                    (t = t.replace(/\b(position|normal|uv)\b/g, (e, t, r, n) =>
                      /\battribute\s+vec[23]\s+$/.test(n.substr(0, r))
                        ? t
                        : `troika_${t}_${i}`
                    )),
                    (e.map && e.map.channel > 0) ||
                      (t = t.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))),
                  {
                    vertexShader: (t = A(t, i, a, s, l)),
                    fragmentShader: (r = A(r, i, c, d, f)),
                  }
                );
              })(this, n, t, r);
              c = d[s] = e;
            }
            (n.vertexShader = c.vertexShader),
              (n.fragmentShader = c.fragmentShader),
              l(n.uniforms, this.uniforms),
              t.timeUniform &&
                (n.uniforms[t.timeUniform] = {
                  get value() {
                    return Date.now() - u;
                  },
                }),
              this[a] && this[a](n);
          },
          v = function () {
            return C(t.chained ? e : e.clone());
          },
          C = function (n) {
            let i = Object.create(n, b);
            return (
              Object.defineProperty(i, "baseMaterial", { value: e }),
              Object.defineProperty(i, "id", { value: f++ }),
              (i.uuid = (function () {
                let e = (0xffffffff * Math.random()) | 0,
                  t = (0xffffffff * Math.random()) | 0,
                  r = (0xffffffff * Math.random()) | 0,
                  n = (0xffffffff * Math.random()) | 0;
                return (
                  s[255 & e] +
                  s[(e >> 8) & 255] +
                  s[(e >> 16) & 255] +
                  s[(e >> 24) & 255] +
                  "-" +
                  s[255 & t] +
                  s[(t >> 8) & 255] +
                  "-" +
                  s[((t >> 16) & 15) | 64] +
                  s[(t >> 24) & 255] +
                  "-" +
                  s[(63 & r) | 128] +
                  s[(r >> 8) & 255] +
                  "-" +
                  s[(r >> 16) & 255] +
                  s[(r >> 24) & 255] +
                  s[255 & n] +
                  s[(n >> 8) & 255] +
                  s[(n >> 16) & 255] +
                  s[(n >> 24) & 255]
                ).toUpperCase();
              })()),
              (i.uniforms = l({}, n.uniforms, t.uniforms)),
              (i.defines = l({}, n.defines, t.defines)),
              (i.defines[`TROIKA_DERIVED_MATERIAL_${r}`] = ""),
              (i.extensions = l({}, n.extensions, t.extensions)),
              (i._listeners = void 0),
              i
            );
          },
          b = {
            constructor: { value: v },
            isDerivedMaterial: { value: !0 },
            type: {
              get: () => e.type,
              set: (t) => {
                e.type = t;
              },
            },
            isDerivedFrom: {
              writable: !0,
              configurable: !0,
              value: function (e) {
                let t = this.baseMaterial;
                return (
                  e === t || (t.isDerivedMaterial && t.isDerivedFrom(e)) || !1
                );
              },
            },
            customProgramCacheKey: {
              writable: !0,
              configurable: !0,
              value: function () {
                return e.customProgramCacheKey() + "|" + r;
              },
            },
            onBeforeCompile: {
              get: () => g,
              set(e) {
                this[a] = e;
              },
            },
            copy: {
              writable: !0,
              configurable: !0,
              value: function (t) {
                return (
                  e.copy.call(this, t),
                  e.isShaderMaterial ||
                    e.isDerivedMaterial ||
                    (l(this.extensions, t.extensions),
                    l(this.defines, t.defines),
                    l(this.uniforms, i.LlO.clone(t.uniforms))),
                  this
                );
              },
            },
            clone: {
              writable: !0,
              configurable: !0,
              value: function () {
                return C(new e.constructor()).copy(this);
              },
            },
            getDepthMaterial: {
              writable: !0,
              configurable: !0,
              value: function () {
                let r = this._depthMaterial;
                return (
                  r ||
                    (((r = this._depthMaterial =
                      h(
                        e.isDerivedMaterial
                          ? e.getDepthMaterial()
                          : new i.CSG({ depthPacking: i.N5j }),
                        t
                      )).defines.IS_DEPTH_MATERIAL = ""),
                    (r.uniforms = this.uniforms)),
                  r
                );
              },
            },
            getDistanceMaterial: {
              writable: !0,
              configurable: !0,
              value: function () {
                let r = this._distanceMaterial;
                return (
                  r ||
                    (((r = this._distanceMaterial =
                      h(
                        e.isDerivedMaterial
                          ? e.getDistanceMaterial()
                          : new i.aVO(),
                        t
                      )).defines.IS_DISTANCE_MATERIAL = ""),
                    (r.uniforms = this.uniforms)),
                  r
                );
              },
            },
            dispose: {
              writable: !0,
              configurable: !0,
              value() {
                let { _depthMaterial: t, _distanceMaterial: r } = this;
                t && t.dispose(), r && r.dispose(), e.dispose.call(this);
              },
            },
          };
        return (n[r] = v), new v();
      }
      function A(e, t, r, n, i) {
        return (
          (n || i || r) &&
            (e =
              e.replace(
                a,
                `
${r}
void troikaOrigMain${t}() {`
              ) +
              `
void main() {
  ${n}
  troikaOrigMain${t}();
  ${i}
}`),
          e
        );
      }
      function p(e, t) {
        return "uniforms" === e
          ? void 0
          : "function" == typeof t
          ? t.toString()
          : t;
      }
      let m = 0,
        B = new Map(),
        g = `
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,
        v = `
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,
        C = `
uniform vec3 dashing;
varying float bezierT;
`,
        b = `
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`,
        E = null,
        y = new i._4j({ color: 0xffffff, side: i.$EB });
      class M extends i.eaF {
        static getGeometry() {
          return E || (E = new i.Ho_(1, 1, 1, 6, 64).translate(0, 0.5, 0));
        }
        constructor() {
          super(M.getGeometry(), y),
            (this.pointA = new i.Pq0()),
            (this.controlA = new i.Pq0()),
            (this.controlB = new i.Pq0()),
            (this.pointB = new i.Pq0()),
            (this.radius = 0.01),
            (this.dashArray = new i.I9Y()),
            (this.dashOffset = 0),
            (this.frustumCulled = !1);
        }
        get material() {
          let e = this._derivedMaterial,
            t =
              this._baseMaterial ||
              this._defaultMaterial ||
              (this._defaultMaterial = y.clone());
          return (
            (e && e.baseMaterial === t) ||
              ((e = this._derivedMaterial =
                h(t, {
                  chained: !0,
                  uniforms: {
                    pointA: { value: new i.Pq0() },
                    controlA: { value: new i.Pq0() },
                    controlB: { value: new i.Pq0() },
                    pointB: { value: new i.Pq0() },
                    radius: { value: 0.01 },
                    dashing: { value: new i.Pq0() },
                  },
                  vertexDefs: g,
                  vertexTransform: v,
                  fragmentDefs: C,
                  fragmentMainIntro: b,
                })),
              t.addEventListener("dispose", function r() {
                t.removeEventListener("dispose", r), e.dispose();
              })),
            e
          );
        }
        set material(e) {
          this._baseMaterial = e;
        }
        get customDepthMaterial() {
          return this.material.getDepthMaterial();
        }
        set customDepthMaterial(e) {}
        get customDistanceMaterial() {
          return this.material.getDistanceMaterial();
        }
        set customDistanceMaterial(e) {}
        onBeforeRender() {
          let { uniforms: e } = this.material,
            {
              pointA: t,
              controlA: r,
              controlB: n,
              pointB: i,
              radius: a,
              dashArray: o,
              dashOffset: s,
            } = this;
          e.pointA.value.copy(t),
            e.controlA.value.copy(r),
            e.controlB.value.copy(n),
            e.pointB.value.copy(i),
            (e.radius.value = a),
            e.dashing.value.set(o.x, o.y, s || 0);
        }
        raycast() {}
      }
    },
    3353: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = function () {
        return (function (e) {
          var t,
            r,
            n,
            i,
            a = {
              R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
              EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
              ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
              ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
              AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
              CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
              B: "a,3,f+2,2v,690",
              S: "9,2,k",
              WS: "c,k,4f4,1vk+a,u,1j,335",
              ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
              BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
              NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
              AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
              LRO: "6ct",
              RLO: "6cu",
              LRE: "6cq",
              RLE: "6cr",
              PDF: "6cs",
              LRI: "6ee",
              RLI: "6ef",
              FSI: "6eg",
              PDI: "6eh",
            },
            o = {},
            s = {};
          (o.L = 1),
            (s[1] = "L"),
            Object.keys(a).forEach(function (e, t) {
              (o[e] = 1 << (t + 1)), (s[o[e]] = e);
            }),
            Object.freeze(o);
          var l = o.LRI | o.RLI | o.FSI,
            u = o.L | o.R | o.AL,
            c = o.B | o.S | o.WS | o.ON | o.FSI | o.LRI | o.RLI | o.PDI,
            d = o.BN | o.RLE | o.LRE | o.RLO | o.LRO | o.PDF,
            f = o.S | o.WS | o.B | l | o.PDI | d,
            h = null;
          function A(e) {
            if (!h) {
              h = new Map();
              var t = function (e) {
                if (a.hasOwnProperty(e)) {
                  var t = 0;
                  a[e].split(",").forEach(function (r) {
                    var n = r.split("+"),
                      i = n[0],
                      a = n[1];
                    (i = parseInt(i, 36)),
                      (a = a ? parseInt(a, 36) : 0),
                      h.set((t += i), o[e]);
                    for (var s = 0; s < a; s++) h.set(++t, o[e]);
                  });
                }
              };
              for (var r in a) t(r);
            }
            return h.get(e.codePointAt(0)) || o.L;
          }
          function p(e, t) {
            var r,
              n = 0,
              i = new Map(),
              a = t && new Map();
            return (
              e.split(",").forEach(function e(o) {
                if (-1 !== o.indexOf("+")) for (var s = +o; s--; ) e(r);
                else {
                  r = o;
                  var l = o.split(">"),
                    u = l[0],
                    c = l[1];
                  (u = String.fromCodePoint((n += parseInt(u, 36)))),
                    (c = String.fromCodePoint((n += parseInt(c, 36)))),
                    i.set(u, c),
                    t && a.set(c, u);
                }
              }),
              { map: i, reverseMap: a }
            );
          }
          function m() {
            if (!t) {
              var e = p(
                  "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
                  !0
                ),
                i = e.map,
                a = e.reverseMap;
              (t = i),
                (r = a),
                (n = p(
                  "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye",
                  !1
                ).map);
            }
          }
          function B(e) {
            return m(), t.get(e) || null;
          }
          function g(e) {
            return m(), r.get(e) || null;
          }
          function v(e) {
            return m(), n.get(e) || null;
          }
          var C = o.L,
            b = o.R,
            E = o.EN,
            y = o.ES,
            M = o.ET,
            w = o.AN,
            R = o.CS,
            F = o.B,
            I = o.S,
            T = o.ON,
            x = o.BN,
            D = o.NSM,
            G = o.AL,
            S = o.LRO,
            H = o.RLO,
            _ = o.LRE,
            O = o.RLE,
            L = o.PDF,
            U = o.LRI,
            P = o.RLI,
            J = o.FSI,
            k = o.PDI;
          function N(e) {
            if (!i) {
              var t = p(
                  "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",
                  !0
                ),
                r = t.map;
              t.reverseMap.forEach(function (e, t) {
                r.set(t, e);
              }),
                (i = r);
            }
            return i.get(e) || null;
          }
          function K(e, t, r, n) {
            var i = e.length;
            (r = Math.max(0, null == r ? 0 : +r)),
              (n = Math.min(i - 1, null == n ? i - 1 : +n));
            var a = [];
            return (
              t.paragraphs.forEach(function (i) {
                var o = Math.max(r, i.start),
                  s = Math.min(n, i.end);
                if (o < s) {
                  for (
                    var l = t.levels.slice(o, s + 1), u = s;
                    u >= o && A(e[u]) & f;
                    u--
                  )
                    l[u] = i.level;
                  for (var c = i.level, d = 1 / 0, h = 0; h < l.length; h++) {
                    var p = l[h];
                    p > c && (c = p), p < d && (d = 1 | p);
                  }
                  for (var m = c; m >= d; m--)
                    for (var B = 0; B < l.length; B++)
                      if (l[B] >= m) {
                        for (var g = B; B + 1 < l.length && l[B + 1] >= m; )
                          B++;
                        B > g && a.push([g + o, B + o]);
                      }
                }
              }),
              a
            );
          }
          function j(e, t, r, n) {
            for (var i = K(e, t, r, n), a = [], o = 0; o < e.length; o++)
              a[o] = o;
            return (
              i.forEach(function (e) {
                for (
                  var t = e[0], r = e[1], n = a.slice(t, r + 1), i = n.length;
                  i--;

                )
                  a[r - i] = n[i];
              }),
              a
            );
          }
          return (
            (e.closingToOpeningBracket = g),
            (e.getBidiCharType = A),
            (e.getBidiCharTypeName = function (e) {
              return s[A(e)];
            }),
            (e.getCanonicalBracket = v),
            (e.getEmbeddingLevels = function (e, t) {
              for (var r = new Uint32Array(e.length), n = 0; n < e.length; n++)
                r[n] = A(e[n]);
              var i = new Map();
              function a(e, t) {
                var n = r[e];
                (r[e] = t),
                  i.set(n, i.get(n) - 1),
                  n & c && i.set(c, i.get(c) - 1),
                  i.set(t, (i.get(t) || 0) + 1),
                  t & c && i.set(c, (i.get(c) || 0) + 1);
              }
              for (
                var o = new Uint8Array(e.length),
                  s = new Map(),
                  h = [],
                  p = null,
                  m = 0;
                m < e.length;
                m++
              )
                p ||
                  h.push(
                    (p = {
                      start: m,
                      end: e.length - 1,
                      level: "rtl" === t ? 1 : "ltr" === t ? 0 : tx(m, !1),
                    })
                  ),
                  r[m] & F && ((p.end = m), (p = null));
              for (
                var N = O | _ | H | S | l | k | L | F,
                  K = function (e) {
                    return e + (1 & e ? 1 : 2);
                  },
                  j = function (e) {
                    return e + (1 & e ? 2 : 1);
                  },
                  Q = 0;
                Q < h.length;
                Q++
              ) {
                var X = [
                    { _level: (p = h[Q]).level, _override: 0, _isolate: 0 },
                  ],
                  Y = void 0,
                  W = 0,
                  z = 0,
                  Z = 0;
                i.clear();
                for (var q = p.start; q <= p.end; q++) {
                  var V = r[q];
                  if (
                    ((Y = X[X.length - 1]),
                    i.set(V, (i.get(V) || 0) + 1),
                    V & c && i.set(c, (i.get(c) || 0) + 1),
                    V & N)
                  )
                    if (V & (O | _)) {
                      o[q] = Y._level;
                      var $ = (V === O ? j : K)(Y._level);
                      !($ <= 125) || W || z
                        ? !W && z++
                        : X.push({ _level: $, _override: 0, _isolate: 0 });
                    } else if (V & (H | S)) {
                      o[q] = Y._level;
                      var ee = (V === H ? j : K)(Y._level);
                      !(ee <= 125) || W || z
                        ? !W && z++
                        : X.push({
                            _level: ee,
                            _override: V & H ? b : C,
                            _isolate: 0,
                          });
                    } else if (V & l) {
                      V & J && (V = 1 === tx(q + 1, !0) ? P : U),
                        (o[q] = Y._level),
                        Y._override && a(q, Y._override);
                      var et = (V === P ? j : K)(Y._level);
                      et <= 125 && 0 === W && 0 === z
                        ? (Z++,
                          X.push({
                            _level: et,
                            _override: 0,
                            _isolate: 1,
                            _isolInitIndex: q,
                          }))
                        : W++;
                    } else if (V & k) {
                      if (W > 0) W--;
                      else if (Z > 0) {
                        for (z = 0; !X[X.length - 1]._isolate; ) X.pop();
                        var er = X[X.length - 1]._isolInitIndex;
                        null != er && (s.set(er, q), s.set(q, er)),
                          X.pop(),
                          Z--;
                      }
                      (Y = X[X.length - 1]),
                        (o[q] = Y._level),
                        Y._override && a(q, Y._override);
                    } else
                      V & L
                        ? (0 === W &&
                            (z > 0
                              ? z--
                              : !Y._isolate &&
                                X.length > 1 &&
                                (X.pop(), (Y = X[X.length - 1]))),
                          (o[q] = Y._level))
                        : V & F && (o[q] = p.level);
                  else
                    (o[q] = Y._level),
                      Y._override && V !== x && a(q, Y._override);
                }
                for (var en = [], ei = null, ea = p.start; ea <= p.end; ea++) {
                  var eo = r[ea];
                  if (!(eo & d)) {
                    var es = o[ea],
                      el = eo & l,
                      eu = eo === k;
                    ei && es === ei._level
                      ? ((ei._end = ea), (ei._endsWithIsolInit = el))
                      : en.push(
                          (ei = {
                            _start: ea,
                            _end: ea,
                            _level: es,
                            _startsWithPDI: eu,
                            _endsWithIsolInit: el,
                          })
                        );
                  }
                }
                for (var ec = [], ed = 0; ed < en.length; ed++) {
                  var ef = en[ed];
                  if (
                    !ef._startsWithPDI ||
                    (ef._startsWithPDI && !s.has(ef._start))
                  ) {
                    for (
                      var eh = [(ei = ef)], eA = void 0;
                      ei &&
                      ei._endsWithIsolInit &&
                      null != (eA = s.get(ei._end));

                    )
                      for (var ep = ed + 1; ep < en.length; ep++)
                        if (en[ep]._start === eA) {
                          eh.push((ei = en[ep]));
                          break;
                        }
                    for (var em = [], eB = 0; eB < eh.length; eB++)
                      for (var eg = eh[eB], ev = eg._start; ev <= eg._end; ev++)
                        em.push(ev);
                    for (
                      var eC = o[em[0]], eb = p.level, eE = em[0] - 1;
                      eE >= 0;
                      eE--
                    )
                      if (!(r[eE] & d)) {
                        eb = o[eE];
                        break;
                      }
                    var ey = em[em.length - 1],
                      eM = o[ey],
                      ew = p.level;
                    if (!(r[ey] & l)) {
                      for (var eR = ey + 1; eR <= p.end; eR++)
                        if (!(r[eR] & d)) {
                          ew = o[eR];
                          break;
                        }
                    }
                    ec.push({
                      _seqIndices: em,
                      _sosType: Math.max(eb, eC) % 2 ? b : C,
                      _eosType: Math.max(ew, eM) % 2 ? b : C,
                    });
                  }
                }
                for (var eF = 0; eF < ec.length; eF++) {
                  var eI = ec[eF],
                    eT = eI._seqIndices,
                    ex = eI._sosType,
                    eD = eI._eosType,
                    eG = 1 & o[eT[0]] ? b : C;
                  if (i.get(D))
                    for (var eS = 0; eS < eT.length; eS++) {
                      var eH = eT[eS];
                      if (r[eH] & D) {
                        for (var e_ = ex, eO = eS - 1; eO >= 0; eO--)
                          if (!(r[eT[eO]] & d)) {
                            e_ = r[eT[eO]];
                            break;
                          }
                        a(eH, e_ & (l | k) ? T : e_);
                      }
                    }
                  if (i.get(E))
                    for (var eL = 0; eL < eT.length; eL++) {
                      var eU = eT[eL];
                      if (r[eU] & E)
                        for (var eP = eL - 1; eP >= -1; eP--) {
                          var eJ = -1 === eP ? ex : r[eT[eP]];
                          if (eJ & u) {
                            eJ === G && a(eU, w);
                            break;
                          }
                        }
                    }
                  if (i.get(G))
                    for (var ek = 0; ek < eT.length; ek++) {
                      var eN = eT[ek];
                      r[eN] & G && a(eN, b);
                    }
                  if (i.get(y) || i.get(R))
                    for (var eK = 1; eK < eT.length - 1; eK++) {
                      var ej = eT[eK];
                      if (r[ej] & (y | R)) {
                        for (
                          var eQ = 0, eX = 0, eY = eK - 1;
                          eY >= 0 && (eQ = r[eT[eY]]) & d;
                          eY--
                        );
                        for (
                          var eW = eK + 1;
                          eW < eT.length && (eX = r[eT[eW]]) & d;
                          eW++
                        );
                        eQ === eX &&
                          (r[ej] === y ? eQ === E : eQ & (E | w)) &&
                          a(ej, eQ);
                      }
                    }
                  if (i.get(E)) {
                    for (var ez = 0; ez < eT.length; ez++)
                      if (r[eT[ez]] & E) {
                        for (
                          var eZ = ez - 1;
                          eZ >= 0 && r[eT[eZ]] & (M | d);
                          eZ--
                        )
                          a(eT[eZ], E);
                        for (
                          ez++;
                          ez < eT.length && r[eT[ez]] & (M | d | E);
                          ez++
                        )
                          r[eT[ez]] !== E && a(eT[ez], E);
                      }
                  }
                  if (i.get(M) || i.get(y) || i.get(R))
                    for (var eq = 0; eq < eT.length; eq++) {
                      var eV = eT[eq];
                      if (r[eV] & (M | y | R)) {
                        a(eV, T);
                        for (var e$ = eq - 1; e$ >= 0 && r[eT[e$]] & d; e$--)
                          a(eT[e$], T);
                        for (
                          var e1 = eq + 1;
                          e1 < eT.length && r[eT[e1]] & d;
                          e1++
                        )
                          a(eT[e1], T);
                      }
                    }
                  if (i.get(E))
                    for (var e0 = 0, e2 = ex; e0 < eT.length; e0++) {
                      var e9 = eT[e0],
                        e3 = r[e9];
                      e3 & E ? e2 === C && a(e9, C) : e3 & u && (e2 = e3);
                    }
                  if (i.get(c)) {
                    for (
                      var e8 = b | E | w, e6 = e8 | C, e4 = [], e5 = [], e7 = 0;
                      e7 < eT.length;
                      e7++
                    )
                      if (r[eT[e7]] & c) {
                        var te = e[eT[e7]],
                          tt = void 0;
                        if (null !== B(te))
                          if (e5.length < 63)
                            e5.push({ char: te, seqIndex: e7 });
                          else break;
                        else if (null !== (tt = g(te)))
                          for (var tr = e5.length - 1; tr >= 0; tr--) {
                            var tn = e5[tr].char;
                            if (
                              tn === tt ||
                              tn === g(v(te)) ||
                              B(v(tn)) === te
                            ) {
                              e4.push([e5[tr].seqIndex, e7]), (e5.length = tr);
                              break;
                            }
                          }
                      }
                    e4.sort(function (e, t) {
                      return e[0] - t[0];
                    });
                    for (var ti = 0; ti < e4.length; ti++) {
                      for (
                        var ta = e4[ti],
                          to = ta[0],
                          ts = ta[1],
                          tl = !1,
                          tu = 0,
                          tc = to + 1;
                        tc < ts;
                        tc++
                      ) {
                        var td = eT[tc];
                        if (r[td] & e6) {
                          tl = !0;
                          var tf = r[td] & e8 ? b : C;
                          if (tf === eG) {
                            tu = tf;
                            break;
                          }
                        }
                      }
                      if (tl && !tu) {
                        tu = ex;
                        for (var th = to - 1; th >= 0; th--) {
                          var tA = eT[th];
                          if (r[tA] & e6) {
                            var tp = r[tA] & e8 ? b : C;
                            tu = tp !== eG ? tp : eG;
                            break;
                          }
                        }
                      }
                      if (tu) {
                        if (((r[eT[to]] = r[eT[ts]] = tu), tu !== eG)) {
                          for (var tm = to + 1; tm < eT.length; tm++)
                            if (!(r[eT[tm]] & d)) {
                              A(e[eT[tm]]) & D && (r[eT[tm]] = tu);
                              break;
                            }
                        }
                        if (tu !== eG) {
                          for (var tB = ts + 1; tB < eT.length; tB++)
                            if (!(r[eT[tB]] & d)) {
                              A(e[eT[tB]]) & D && (r[eT[tB]] = tu);
                              break;
                            }
                        }
                      }
                    }
                    for (var tg = 0; tg < eT.length; tg++)
                      if (r[eT[tg]] & c) {
                        for (
                          var tv = tg, tC = tg, tb = ex, tE = tg - 1;
                          tE >= 0;
                          tE--
                        )
                          if (r[eT[tE]] & d) tv = tE;
                          else {
                            tb = r[eT[tE]] & e8 ? b : C;
                            break;
                          }
                        for (var ty = eD, tM = tg + 1; tM < eT.length; tM++)
                          if (r[eT[tM]] & (c | d)) tC = tM;
                          else {
                            ty = r[eT[tM]] & e8 ? b : C;
                            break;
                          }
                        for (var tw = tv; tw <= tC; tw++)
                          r[eT[tw]] = tb === ty ? tb : eG;
                        tg = tC;
                      }
                  }
                }
                for (var tR = p.start; tR <= p.end; tR++) {
                  var tF = o[tR],
                    tI = r[tR];
                  if (
                    (1 & tF
                      ? tI & (C | E | w) && o[tR]++
                      : tI & b
                      ? o[tR]++
                      : tI & (w | E) && (o[tR] += 2),
                    tI & d && (o[tR] = 0 === tR ? p.level : o[tR - 1]),
                    tR === p.end || A(e[tR]) & (I | F))
                  )
                    for (var tT = tR; tT >= 0 && A(e[tT]) & f; tT--)
                      o[tT] = p.level;
                }
              }
              return { levels: o, paragraphs: h };
              function tx(t, n) {
                for (var i = t; i < e.length; i++) {
                  var a = r[i];
                  if (a & (b | G)) return 1;
                  if (a & (F | C) || (n && a === k)) break;
                  if (a & l) {
                    var o = (function (t) {
                      for (var n = 1, i = t + 1; i < e.length; i++) {
                        var a = r[i];
                        if (a & F) break;
                        if (a & k) {
                          if (0 == --n) return i;
                        } else a & l && n++;
                      }
                      return -1;
                    })(i);
                    i = -1 === o ? e.length : o;
                  }
                }
                return 0;
              }
            }),
            (e.getMirroredCharacter = N),
            (e.getMirroredCharactersMap = function (e, t, r, n) {
              var i = e.length;
              (r = Math.max(0, null == r ? 0 : +r)),
                (n = Math.min(i - 1, null == n ? i - 1 : +n));
              for (var a = new Map(), o = r; o <= n; o++)
                if (1 & t[o]) {
                  var s = N(e[o]);
                  null !== s && a.set(o, s);
                }
              return a;
            }),
            (e.getReorderSegments = K),
            (e.getReorderedIndices = j),
            (e.getReorderedString = function (e, t, r, n) {
              var i = j(e, t, r, n),
                a = [].concat(e);
              return (
                i.forEach(function (r, n) {
                  a[n] = (1 & t.levels[r] ? N(e[r]) : null) || e[r];
                }),
                a.join("")
              );
            }),
            (e.openingToClosingBracket = B),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
          );
        })({});
      };
    },
    3536: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => n });
      let n = parseInt(r(9671).sPf.replace(/\D+/g, ""));
    },
    3606: (e, t, r) => {
      "use strict";
      var n = r(8967),
        i = r(4838),
        a =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = i.useSyncExternalStore,
        s = n.useRef,
        l = n.useEffect,
        u = n.useMemo,
        c = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var d = s(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = o(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (o = e), (e = n(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), a(o, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r)
                  ? ((o = e), t)
                  : ((o = e), (s = r));
              }
              var o,
                s,
                l = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          d[1]
        );
        return (
          l(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          c(h),
          h
        );
      };
    },
    3773: (e) => {
      function t(e, t, r) {
        function n() {
          var u = Date.now() - s;
          u < t && u >= 0
            ? (i = setTimeout(n, t - u))
            : ((i = null), r || ((l = e.apply(o, a)), (o = a = null)));
        }
        null == t && (t = 100);
        var i,
          a,
          o,
          s,
          l,
          u = function () {
            (o = this), (a = arguments), (s = Date.now());
            var u = r && !i;
            return (
              i || (i = setTimeout(n, t)),
              u && ((l = e.apply(o, a)), (o = a = null)),
              l
            );
          };
        return (
          (u.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (u.flush = function () {
            i &&
              ((l = e.apply(o, a)),
              (o = a = null),
              clearTimeout(i),
              (i = null));
          }),
          u
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    3906: (e, t, r) => {
      "use strict";
      r.d(t, { zo: () => s });
      var n = r(8967),
        i = r(9671),
        a = r(5499);
      let o = (e) =>
        e === Object(e) && !Array.isArray(e) && "function" != typeof e;
      function s(e, t) {
        let r = (0, a.C)((e) => e.gl),
          s = (0, a.G)(i.Tap, o(e) ? Object.values(e) : e);
        return (
          (0, n.useLayoutEffect)(() => {
            null == t || t(s);
          }, [t]),
          (0, n.useEffect)(() => {
            if ("initTexture" in r) {
              let e = [];
              Array.isArray(s)
                ? (e = s)
                : s instanceof i.gPd
                ? (e = [s])
                : o(s) && (e = Object.values(s)),
                e.forEach((e) => {
                  e instanceof i.gPd && r.initTexture(e);
                });
            }
          }, [r, s]),
          (0, n.useMemo)(() => {
            if (!o(e)) return s;
            {
              let t = {},
                r = 0;
              for (let n in e) t[n] = s[r++];
              return t;
            }
          }, [e, s])
        );
      }
      (s.preload = (e) => a.G.preload(i.Tap, e)),
        (s.clear = (e) => a.G.clear(i.Tap, e));
    },
    4063: (e) => {
      "use strict";
      var t = "%[a-f0-9]{2}",
        r = RegExp("(" + t + ")|([^%]+?)", "gi"),
        n = RegExp("(" + t + ")+", "gi");
      e.exports = function (e) {
        if ("string" != typeof e)
          throw TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var t = { "%FE%FF": "��", "%FF%FE": "��" }, i = n.exec(e);
              i;

            ) {
              try {
                t[i[0]] = decodeURIComponent(i[0]);
              } catch (e) {
                var a = (function (e) {
                  try {
                    return decodeURIComponent(e);
                  } catch (i) {
                    for (var t = e.match(r) || [], n = 1; n < t.length; n++)
                      t =
                        (e = (function e(t, r) {
                          try {
                            return [decodeURIComponent(t.join(""))];
                          } catch (e) {}
                          if (1 === t.length) return t;
                          r = r || 1;
                          var n = t.slice(0, r),
                            i = t.slice(r);
                          return Array.prototype.concat.call([], e(n), e(i));
                        })(t, n).join("")).match(r) || [];
                    return e;
                  }
                })(i[0]);
                a !== i[0] && (t[i[0]] = a);
              }
              i = n.exec(e);
            }
            t["%C2"] = "�";
            for (var o = Object.keys(t), s = 0; s < o.length; s++) {
              var l = o[s];
              e = e.replace(RegExp(l, "g"), t[l]);
            }
            return e;
          })(e);
        }
      };
    },
    4838: (e, t, r) => {
      "use strict";
      e.exports = r(6557);
    },
    5631: (e, t, r) => {
      "use strict";
      function n() {
        var e = Object.create(null);
        function t(e, t) {
          var r = void 0;
          self.troikaDefine = function (e) {
            return (r = e);
          };
          var n = URL.createObjectURL(
            new Blob(
              [
                "/** " +
                  e.replace(/\*/g, "") +
                  " **/\n\ntroikaDefine(\n" +
                  t +
                  "\n)",
              ],
              { type: "application/javascript" }
            )
          );
          try {
            importScripts(n);
          } catch (e) {
            console.error(e);
          }
          return URL.revokeObjectURL(n), delete self.troikaDefine, r;
        }
        self.addEventListener("message", function (r) {
          var n = r.data,
            i = n.messageId,
            a = n.action,
            o = n.data;
          try {
            "registerModule" === a &&
              (function r(n, i) {
                var a = n.id,
                  o = n.name,
                  s = n.dependencies;
                void 0 === s && (s = []);
                var l = n.init;
                void 0 === l && (l = function () {});
                var u = n.getTransferables;
                if ((void 0 === u && (u = null), !e[a]))
                  try {
                    (s = s.map(function (t) {
                      return (
                        t &&
                          t.isWorkerModule &&
                          (r(t, function (e) {
                            if (e instanceof Error) throw e;
                          }),
                          (t = e[t.id].value)),
                        t
                      );
                    })),
                      (l = t("<" + o + ">.init", l)),
                      u && (u = t("<" + o + ">.getTransferables", u));
                    var c = null;
                    "function" == typeof l
                      ? (c = l.apply(void 0, s))
                      : console.error(
                          "worker module init function failed to rehydrate"
                        ),
                      (e[a] = { id: a, value: c, getTransferables: u }),
                      i(c);
                  } catch (e) {
                    (e && e.noLog) || console.error(e), i(e);
                  }
              })(o, function (e) {
                e instanceof Error
                  ? postMessage({ messageId: i, success: !1, error: e.message })
                  : postMessage({
                      messageId: i,
                      success: !0,
                      result: { isCallable: "function" == typeof e },
                    });
              }),
              "callModule" === a &&
                (function (t, r) {
                  var n,
                    i = t.id,
                    a = t.args;
                  (e[i] && "function" == typeof e[i].value) ||
                    r(
                      Error(
                        "Worker module " +
                          i +
                          ": not found or its 'init' did not return a function"
                      )
                    );
                  try {
                    var o = (n = e[i]).value.apply(n, a);
                    o && "function" == typeof o.then
                      ? o.then(s, function (e) {
                          return r(e instanceof Error ? e : Error("" + e));
                        })
                      : s(o);
                  } catch (e) {
                    r(e);
                  }
                  function s(t) {
                    try {
                      var n = e[i].getTransferables && e[i].getTransferables(t);
                      (n && Array.isArray(n) && n.length) || (n = void 0),
                        r(t, n);
                    } catch (e) {
                      console.error(e), r(e);
                    }
                  }
                })(o, function (e, t) {
                  e instanceof Error
                    ? postMessage({
                        messageId: i,
                        success: !1,
                        error: e.message,
                      })
                    : postMessage(
                        { messageId: i, success: !0, result: e },
                        t || void 0
                      );
                });
          } catch (e) {
            postMessage({ messageId: i, success: !1, error: e.stack });
          }
        });
      }
      r.d(t, {
        Qw: () => d,
        kl: () =>
          function e(t) {
            if ((!t || "function" != typeof t.init) && !s)
              throw Error("requires `options.init` function");
            var r,
              n = t.dependencies,
              o = t.init,
              l = t.getTransferables,
              c = t.workerId,
              d =
                (((r = function () {
                  for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                  return r._getInitResult().then(function (t) {
                    if ("function" == typeof t) return t.apply(void 0, e);
                    throw Error(
                      "Worker module function was called but `init` did not return a callable function"
                    );
                  });
                })._getInitResult = function () {
                  var e = t.dependencies,
                    n = t.init,
                    i = Promise.all(
                      (e = Array.isArray(e)
                        ? e.map(function (e) {
                            return (
                              e &&
                                (e = e.onMainThread || e)._getInitResult &&
                                (e = e._getInitResult()),
                              e
                            );
                          })
                        : [])
                    ).then(function (e) {
                      return n.apply(null, e);
                    });
                  return (
                    (r._getInitResult = function () {
                      return i;
                    }),
                    i
                  );
                }),
                r);
            null == c && (c = "#default");
            var A = "workerModule" + ++a,
              p = t.name || A,
              m = null;
            function B() {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (!i()) return d.apply(void 0, e);
              if (!m) {
                m = h(c, "registerModule", B.workerModuleData);
                var r = function () {
                  (m = null), u[c].delete(r);
                };
                (u[c] || (u[c] = new Set())).add(r);
              }
              return m.then(function (t) {
                if (t.isCallable) return h(c, "callModule", { id: A, args: e });
                throw Error(
                  "Worker module function was called but `init` did not return a callable function"
                );
              });
            }
            return (
              (n =
                n &&
                n.map(function (t) {
                  return (
                    "function" != typeof t ||
                      t.workerModuleData ||
                      ((s = !0),
                      (t = e({
                        workerId: c,
                        name: "<" + p + "> function dependency: " + t.name,
                        init: "function(){return (\n" + f(t) + "\n)}",
                      })),
                      (s = !1)),
                    t && t.workerModuleData && (t = t.workerModuleData),
                    t
                  );
                })),
              (B.workerModuleData = {
                isWorkerModule: !0,
                id: A,
                name: p,
                dependencies: n,
                init: f(o),
                getTransferables: l && f(l),
              }),
              (B.onMainThread = d),
              B
            );
          },
      }),
        r(4188);
      var i = function () {
          var e = !1;
          if ("undefined" != typeof window && void 0 !== window.document)
            try {
              new Worker(
                URL.createObjectURL(
                  new Blob([""], { type: "application/javascript" })
                )
              ).terminate(),
                (e = !0);
            } catch (e) {
              console.log(
                "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" +
                  e.message +
                  "]"
              );
            }
          return (
            (i = function () {
              return e;
            }),
            e
          );
        },
        a = 0,
        o = 0,
        s = !1,
        l = Object.create(null),
        u = Object.create(null),
        c = Object.create(null);
      function d(e) {
        u[e] &&
          u[e].forEach(function (e) {
            e();
          }),
          l[e] && (l[e].terminate(), delete l[e]);
      }
      function f(e) {
        var t = e.toString();
        return (
          !/^function/.test(t) && /^\w+\s*\(/.test(t) && (t = "function " + t),
          t
        );
      }
      function h(e, t, r) {
        return new Promise(function (i, a) {
          var s = ++o;
          (c[s] = function (e) {
            e.success
              ? i(e.result)
              : a(Error("Error in worker " + t + " call: " + e.error));
          }),
            (function (e) {
              var t = l[e];
              if (!t) {
                var r = f(n);
                (t = l[e] =
                  new Worker(
                    URL.createObjectURL(
                      new Blob(
                        [
                          "/** Worker Module Bootstrap: " +
                            e.replace(/\*/g, "") +
                            " **/\n\n;(" +
                            r +
                            ")()",
                        ],
                        { type: "application/javascript" }
                      )
                    )
                  )).onmessage = function (e) {
                  var t = e.data,
                    r = t.messageId,
                    n = c[r];
                  if (!n)
                    throw Error(
                      "WorkerModule response with empty or unknown messageId"
                    );
                  delete c[r], n(t);
                };
              }
              return t;
            })(e).postMessage({ messageId: s, action: t, data: r });
        });
      }
    },
    6557: (e, t, r) => {
      "use strict";
      var n = r(8967),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = n.useState,
        o = n.useEffect,
        s = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                c = n[1];
              return (
                s(
                  function () {
                    (i.value = r), (i.getSnapshot = t), u(i) && c({ inst: i });
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      u(i) && c({ inst: i }),
                      e(function () {
                        u(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    6643: (e, t, r) => {
      "use strict";
      r.d(t, { DY: () => o, IU: () => l, uv: () => s });
      let n = [];
      function i(e, t, r = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let n = e.length;
        if (t.length !== n) return !1;
        for (let i = 0; i < n; i++) if (!r(e[i], t[i])) return !1;
        return !0;
      }
      function a(e, t = null, r = !1, o = {}) {
        for (let a of (null === t && (t = [e]), n))
          if (i(t, a.keys, a.equal)) {
            if (r) return;
            if (Object.prototype.hasOwnProperty.call(a, "error")) throw a.error;
            if (Object.prototype.hasOwnProperty.call(a, "response"))
              return (
                o.lifespan &&
                  o.lifespan > 0 &&
                  (a.timeout && clearTimeout(a.timeout),
                  (a.timeout = setTimeout(a.remove, o.lifespan))),
                a.response
              );
            if (!r) throw a.promise;
          }
        let s = {
          keys: t,
          equal: o.equal,
          remove: () => {
            let e = n.indexOf(s);
            -1 !== e && n.splice(e, 1);
          },
          promise: ("object" == typeof e && "function" == typeof e.then
            ? e
            : e(...t)
          )
            .then((e) => {
              (s.response = e),
                o.lifespan &&
                  o.lifespan > 0 &&
                  (s.timeout = setTimeout(s.remove, o.lifespan));
            })
            .catch((e) => (s.error = e)),
        };
        if ((n.push(s), !r)) throw s.promise;
      }
      let o = (e, t, r) => a(e, t, !1, r),
        s = (e, t, r) => void a(e, t, !0, r),
        l = (e) => {
          if (void 0 === e || 0 === e.length) n.splice(0, n.length);
          else {
            let t = n.find((t) => i(e, t.keys, t.equal));
            t && t.remove();
          }
        };
    },
    6661: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { OH: () => ev });
      var i = r(9100),
        a = r(8967),
        o = r(5499),
        s = r(9671),
        l = r(8616),
        u = r(3536);
      class c extends s.eaF {
        constructor(e, t) {
          var r, n;
          let i = ((e) => e && e.isCubeTexture)(e),
            a = Math.floor(
              Math.log2(
                (null !=
                (n = i
                  ? null == (r = e.image[0])
                    ? void 0
                    : r.width
                  : e.image.width)
                  ? n
                  : 1024) / 4
              )
            ),
            o = Math.pow(2, a),
            l = 3 * Math.max(o, 112),
            c = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,
            d =
              [
                i ? "#define ENVMAP_TYPE_CUBE" : "",
                `#define CUBEUV_TEXEL_WIDTH ${1 / l}`,
                `#define CUBEUV_TEXEL_HEIGHT ${1 / (4 * o)}`,
                `#define CUBEUV_MAX_MIP ${a}.0`,
              ].join("\n") +
              `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${
              u.r >= 154 ? "colorspace_fragment" : "encodings_fragment"
            }>
        }
        `,
            f = {
              map: { value: e },
              height: { value: (null == t ? void 0 : t.height) || 15 },
              radius: { value: (null == t ? void 0 : t.radius) || 100 },
            };
          super(
            new s.WBB(1, 16),
            new s.BKk({
              uniforms: f,
              fragmentShader: d,
              vertexShader: c,
              side: s.$EB,
            })
          );
        }
        set radius(e) {
          this.material.uniforms.radius.value = e;
        }
        get radius() {
          return this.material.uniforms.radius.value;
        }
        set height(e) {
          this.material.uniforms.height.value = e;
        }
        get height() {
          return this.material.uniforms.height.value;
        }
      }
      class d extends s.BRH {
        constructor(e) {
          super(e), (this.type = s.ix0);
        }
        parse(e) {
          let t,
            r,
            n,
            i = function (e, t) {
              switch (e) {
                case 1:
                  throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
                case 2:
                  throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
                case 3:
                  throw Error(
                    "THREE.RGBELoader: Bad File Format: " + (t || "")
                  );
                default:
                  throw Error("THREE.RGBELoader: Memory Error: " + (t || ""));
              }
            },
            a = function (e, t, r) {
              t = t || 1024;
              let n = e.pos,
                i = -1,
                a = 0,
                o = "",
                s = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(n, n + 128))
                );
              for (; 0 > (i = s.indexOf("\n")) && a < t && n < e.byteLength; )
                (o += s),
                  (a += s.length),
                  (n += 128),
                  (s += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(n, n + 128))
                  ));
              return (
                -1 < i && (!1 !== r && (e.pos += a + i + 1), o + s.slice(0, i))
              );
            },
            o = new Uint8Array(e);
          o.pos = 0;
          let l = (function (e) {
              let t,
                r,
                n = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                o = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                s = /^\s*FORMAT=(\S+)\s*$/,
                l = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                u = {
                  valid: 0,
                  string: "",
                  comments: "",
                  programtype: "RGBE",
                  format: "",
                  gamma: 1,
                  exposure: 1,
                  width: 0,
                  height: 0,
                };
              for (
                (!(e.pos >= e.byteLength) && (t = a(e))) ||
                  i(1, "no header found"),
                  (r = t.match(/^#\?(\S+)/)) || i(3, "bad initial token"),
                  u.valid |= 1,
                  u.programtype = r[1],
                  u.string += t + "\n";
                !1 !== (t = a(e));

              ) {
                if (((u.string += t + "\n"), "#" === t.charAt(0))) {
                  u.comments += t + "\n";
                  continue;
                }
                if (
                  ((r = t.match(n)) && (u.gamma = parseFloat(r[1])),
                  (r = t.match(o)) && (u.exposure = parseFloat(r[1])),
                  (r = t.match(s)) && ((u.valid |= 2), (u.format = r[1])),
                  (r = t.match(l)) &&
                    ((u.valid |= 4),
                    (u.height = parseInt(r[1], 10)),
                    (u.width = parseInt(r[2], 10))),
                  2 & u.valid && 4 & u.valid)
                )
                  break;
              }
              return (
                2 & u.valid || i(3, "missing format specifier"),
                4 & u.valid || i(3, "missing image size specifier"),
                u
              );
            })(o),
            u = l.width,
            c = l.height,
            d = (function (e, t, r) {
              if (t < 8 || t > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                return new Uint8Array(e);
              t !== ((e[2] << 8) | e[3]) && i(3, "wrong scanline width");
              let n = new Uint8Array(4 * t * r);
              n.length || i(4, "unable to allocate buffer space");
              let a = 0,
                o = 0,
                s = 4 * t,
                l = new Uint8Array(4),
                u = new Uint8Array(s),
                c = r;
              for (; c > 0 && o < e.byteLength; ) {
                o + 4 > e.byteLength && i(1),
                  (l[0] = e[o++]),
                  (l[1] = e[o++]),
                  (l[2] = e[o++]),
                  (l[3] = e[o++]),
                  (2 != l[0] || 2 != l[1] || ((l[2] << 8) | l[3]) != t) &&
                    i(3, "bad rgbe scanline format");
                let r = 0,
                  d;
                for (; r < s && o < e.byteLength; ) {
                  let t = (d = e[o++]) > 128;
                  if (
                    (t && (d -= 128),
                    (0 === d || r + d > s) && i(3, "bad scanline data"),
                    t)
                  ) {
                    let t = e[o++];
                    for (let e = 0; e < d; e++) u[r++] = t;
                  } else u.set(e.subarray(o, o + d), r), (r += d), (o += d);
                }
                for (let e = 0; e < t; e++) {
                  let r = 0;
                  (n[a] = u[e + r]),
                    (r += t),
                    (n[a + 1] = u[e + r]),
                    (r += t),
                    (n[a + 2] = u[e + r]),
                    (r += t),
                    (n[a + 3] = u[e + r]),
                    (a += 4);
                }
                c--;
              }
              return n;
            })(o.subarray(o.pos), u, c);
          switch (this.type) {
            case s.RQf:
              let f = new Float32Array(4 * (n = d.length / 4));
              for (let e = 0; e < n; e++)
                !(function (e, t, r, n) {
                  let i = Math.pow(2, e[t + 3] - 128) / 255;
                  (r[n + 0] = e[t + 0] * i),
                    (r[n + 1] = e[t + 1] * i),
                    (r[n + 2] = e[t + 2] * i),
                    (r[n + 3] = 1);
                })(d, 4 * e, f, 4 * e);
              (t = f), (r = s.RQf);
              break;
            case s.ix0:
              let h = new Uint16Array(4 * (n = d.length / 4));
              for (let e = 0; e < n; e++)
                !(function (e, t, r, n) {
                  let i = Math.pow(2, e[t + 3] - 128) / 255;
                  (r[n + 0] = s.GxU.toHalfFloat(Math.min(e[t + 0] * i, 65504))),
                    (r[n + 1] = s.GxU.toHalfFloat(
                      Math.min(e[t + 1] * i, 65504)
                    )),
                    (r[n + 2] = s.GxU.toHalfFloat(
                      Math.min(e[t + 2] * i, 65504)
                    )),
                    (r[n + 3] = s.GxU.toHalfFloat(1));
                })(d, 4 * e, h, 4 * e);
              (t = h), (r = s.ix0);
              break;
            default:
              throw Error("THREE.RGBELoader: Unsupported type: " + this.type);
          }
          return {
            width: u,
            height: c,
            data: t,
            header: l.string,
            gamma: l.gamma,
            exposure: l.exposure,
            type: r,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, r, n) {
          return super.load(
            e,
            function (e, r) {
              switch (e.type) {
                case s.RQf:
                case s.ix0:
                  "colorSpace" in e
                    ? (e.colorSpace = "srgb-linear")
                    : (e.encoding = 3e3),
                    (e.minFilter = s.k6q),
                    (e.magFilter = s.k6q),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, r);
            },
            r,
            n
          );
        }
      }
      var f = Uint8Array,
        h = Uint16Array,
        A = Uint32Array,
        p = new f([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        m = new f([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        B = new f([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        g = function (e, t) {
          for (var r = new h(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
          for (var i = new A(r[30]), n = 1; n < 30; ++n)
            for (var a = r[n]; a < r[n + 1]; ++a) i[a] = ((a - r[n]) << 5) | n;
          return [r, i];
        },
        v = g(p, 2),
        C = v[0],
        b = v[1];
      (C[28] = 258), (b[258] = 28);
      var E = g(m, 0),
        y = E[0];
      E[1];
      for (var M = new h(32768), w = 0; w < 32768; ++w) {
        var R = ((43690 & w) >>> 1) | ((21845 & w) << 1);
        (R =
          ((61680 & (R = ((52428 & R) >>> 2) | ((13107 & R) << 2))) >>> 4) |
          ((3855 & R) << 4)),
          (M[w] = (((65280 & R) >>> 8) | ((255 & R) << 8)) >>> 1);
      }
      for (
        var F = function (e, t, r) {
            for (var n, i = e.length, a = 0, o = new h(t); a < i; ++a)
              ++o[e[a] - 1];
            var s = new h(t);
            for (a = 0; a < t; ++a) s[a] = (s[a - 1] + o[a - 1]) << 1;
            if (r) {
              n = new h(1 << t);
              var l = 15 - t;
              for (a = 0; a < i; ++a)
                if (e[a])
                  for (
                    var u = (a << 4) | e[a],
                      c = t - e[a],
                      d = s[e[a] - 1]++ << c,
                      f = d | ((1 << c) - 1);
                    d <= f;
                    ++d
                  )
                    n[M[d] >>> l] = u;
            } else
              for (a = 0, n = new h(i); a < i; ++a)
                e[a] && (n[a] = M[s[e[a] - 1]++] >>> (15 - e[a]));
            return n;
          },
          I = new f(288),
          w = 0;
        w < 144;
        ++w
      )
        I[w] = 8;
      for (var w = 144; w < 256; ++w) I[w] = 9;
      for (var w = 256; w < 280; ++w) I[w] = 7;
      for (var w = 280; w < 288; ++w) I[w] = 8;
      for (var T = new f(32), w = 0; w < 32; ++w) T[w] = 5;
      var x = F(I, 9, 1),
        D = F(T, 5, 1),
        G = function (e) {
          for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
          return t;
        },
        S = function (e, t, r) {
          var n = (t / 8) | 0;
          return ((e[n] | (e[n + 1] << 8)) >> (7 & t)) & r;
        },
        H = function (e, t) {
          var r = (t / 8) | 0;
          return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
        },
        _ = function (e, t, r) {
          (null == t || t < 0) && (t = 0),
            (null == r || r > e.length) && (r = e.length);
          var n = new (e instanceof h ? h : e instanceof A ? A : f)(r - t);
          return n.set(e.subarray(t, r)), n;
        },
        O = function (e, t, r) {
          var n = e.length;
          if (!n || (r && !r.l && n < 5)) return t || new f(0);
          var i = !t || r,
            a = !r || r.i;
          r || (r = {}), t || (t = new f(3 * n));
          var o = function (e) {
              var r = t.length;
              if (e > r) {
                var n = new f(Math.max(2 * r, e));
                n.set(t), (t = n);
              }
            },
            s = r.f || 0,
            l = r.p || 0,
            u = r.b || 0,
            c = r.l,
            d = r.d,
            h = r.m,
            A = r.n,
            g = 8 * n;
          do {
            if (!c) {
              r.f = s = S(e, l, 1);
              var v = S(e, l + 1, 3);
              if (((l += 3), v))
                if (1 == v) (c = x), (d = D), (h = 9), (A = 5);
                else if (2 == v) {
                  var b = S(e, l, 31) + 257,
                    E = S(e, l + 10, 15) + 4,
                    M = b + S(e, l + 5, 31) + 1;
                  l += 14;
                  for (var w = new f(M), R = new f(19), I = 0; I < E; ++I)
                    R[B[I]] = S(e, l + 3 * I, 7);
                  l += 3 * E;
                  for (
                    var T = G(R), O = (1 << T) - 1, L = F(R, T, 1), I = 0;
                    I < M;

                  ) {
                    var U = L[S(e, l, O)];
                    l += 15 & U;
                    var P = U >>> 4;
                    if (P < 16) w[I++] = P;
                    else {
                      var J = 0,
                        k = 0;
                      for (
                        16 == P
                          ? ((k = 3 + S(e, l, 3)), (l += 2), (J = w[I - 1]))
                          : 17 == P
                          ? ((k = 3 + S(e, l, 7)), (l += 3))
                          : 18 == P && ((k = 11 + S(e, l, 127)), (l += 7));
                        k--;

                      )
                        w[I++] = J;
                    }
                  }
                  var N = w.subarray(0, b),
                    K = w.subarray(b);
                  (h = G(N)), (A = G(K)), (c = F(N, h, 1)), (d = F(K, A, 1));
                } else throw "invalid block type";
              else {
                var j,
                  P = (((j = l) / 8) | 0) + (7 & j && 1) + 4,
                  Q = e[P - 4] | (e[P - 3] << 8),
                  X = P + Q;
                if (X > n) {
                  if (a) throw "unexpected EOF";
                  break;
                }
                i && o(u + Q),
                  t.set(e.subarray(P, X), u),
                  (r.b = u += Q),
                  (r.p = l = 8 * X);
                continue;
              }
              if (l > g) {
                if (a) throw "unexpected EOF";
                break;
              }
            }
            i && o(u + 131072);
            for (var Y = (1 << h) - 1, W = (1 << A) - 1, z = l; ; z = l) {
              var J = c[H(e, l) & Y],
                Z = J >>> 4;
              if ((l += 15 & J) > g) {
                if (a) throw "unexpected EOF";
                break;
              }
              if (!J) throw "invalid length/literal";
              if (Z < 256) t[u++] = Z;
              else if (256 == Z) {
                (z = l), (c = null);
                break;
              } else {
                var q = Z - 254;
                if (Z > 264) {
                  var I = Z - 257,
                    V = p[I];
                  (q = S(e, l, (1 << V) - 1) + C[I]), (l += V);
                }
                var $ = d[H(e, l) & W],
                  ee = $ >>> 4;
                if (!$) throw "invalid distance";
                l += 15 & $;
                var K = y[ee];
                if (ee > 3) {
                  var V = m[ee];
                  (K += H(e, l) & ((1 << V) - 1)), (l += V);
                }
                if (l > g) {
                  if (a) throw "unexpected EOF";
                  break;
                }
                i && o(u + 131072);
                for (var et = u + q; u < et; u += 4)
                  (t[u] = t[u - K]),
                    (t[u + 1] = t[u + 1 - K]),
                    (t[u + 2] = t[u + 2 - K]),
                    (t[u + 3] = t[u + 3 - K]);
                u = et;
              }
            }
            (r.l = c),
              (r.p = z),
              (r.b = u),
              c && ((s = 1), (r.m = h), (r.d = d), (r.n = A));
          } while (!s);
          return u == t.length ? t : _(t, 0, u);
        },
        L = new f(0),
        U = function (e) {
          if ((15 & e[0]) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31)
            throw "invalid zlib data";
          if (32 & e[1])
            throw "invalid zlib data: preset dictionaries not supported";
        };
      function P(e, t) {
        return O((U(e), e.subarray(2, -4)), t);
      }
      var J = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        J.decode(L, { stream: !0 });
      } catch (e) {}
      let k = u.r >= 152;
      class N extends s.BRH {
        constructor(e) {
          super(e), (this.type = s.ix0);
        }
        parse(e) {
          let t = { l: 0, c: 0, lc: 0 };
          function r(e, r, n, i, a) {
            for (; n < e; ) (r = (r << 8) | R(i, a)), (n += 8);
            (t.l = (r >> (n -= e)) & ((1 << e) - 1)), (t.c = r), (t.lc = n);
          }
          let n = Array(59),
            i = { c: 0, lc: 0 };
          function a(e, t, r, n) {
            (e = (e << 8) | R(r, n)), (t += 8), (i.c = e), (i.lc = t);
          }
          let o = { c: 0, lc: 0 };
          function l(e, t, r, n, s, l, u, c, d, f) {
            if (e == t) {
              n < 8 && (a(r, n, s, u), (r = i.c), (n = i.lc));
              var h = r >> (n -= 8),
                h = new Uint8Array([h])[0];
              if (d.value + h > f) return !1;
              for (var A = c[d.value - 1]; h-- > 0; ) c[d.value++] = A;
            } else {
              if (!(d.value < f)) return !1;
              c[d.value++] = e;
            }
            (o.c = r), (o.lc = n);
          }
          function u(e) {
            var t = 65535 & e;
            return t > 32767 ? t - 65536 : t;
          }
          let c = { a: 0, b: 0 };
          function d(e, t) {
            var r = u(e),
              n = u(t),
              i = r + (1 & n) + (n >> 1),
              a = i - n;
            (c.a = i), (c.b = a);
          }
          function f(e, t) {
            var r = 65535 & t,
              n = ((65535 & e) - (r >> 1)) & 65535;
            (c.a = (r + n - 32768) & 65535), (c.b = n);
          }
          function h(e, s, u, c, d, f) {
            var h = u.value,
              A = w(s, u),
              p = w(s, u);
            u.value += 4;
            var m = w(s, u);
            if (((u.value += 4), A < 0 || A >= 65537 || p < 0 || p >= 65537))
              throw "Something wrong with HUF_ENCSIZE";
            for (var B = Array(65537), g = Array(16384), v = 0; v < 16384; v++)
              (g[v] = {}), (g[v].len = 0), (g[v].lit = 0), (g[v].p = null);
            var C = c - (u.value - h);
            if (
              (!(function (e, i, a, o, s, l, u) {
                for (var c = 0, d = 0; s <= l; s++) {
                  if (a.value - a.value > o) return !1;
                  r(6, c, d, e, a);
                  var f = t.l;
                  if (((c = t.c), (d = t.lc), (u[s] = f), 63 == f)) {
                    if (a.value - a.value > o)
                      throw "Something wrong with hufUnpackEncTable";
                    r(8, c, d, e, a);
                    var h = t.l + 6;
                    if (((c = t.c), (d = t.lc), s + h > l + 1))
                      throw "Something wrong with hufUnpackEncTable";
                    for (; h--; ) u[s++] = 0;
                    s--;
                  } else if (f >= 59) {
                    var h = f - 59 + 2;
                    if (s + h > l + 1)
                      throw "Something wrong with hufUnpackEncTable";
                    for (; h--; ) u[s++] = 0;
                    s--;
                  }
                }
                !(function (e) {
                  for (var t = 0; t <= 58; ++t) n[t] = 0;
                  for (var t = 0; t < 65537; ++t) n[e[t]] += 1;
                  for (var r = 0, t = 58; t > 0; --t) {
                    var i = (r + n[t]) >> 1;
                    (n[t] = r), (r = i);
                  }
                  for (var t = 0; t < 65537; ++t) {
                    var a = e[t];
                    a > 0 && (e[t] = a | (n[a]++ << 6));
                  }
                })(u);
              })(e, 0, u, C, A, p, B),
              m > 8 * (c - (u.value - h)))
            )
              throw "Something wrong with hufUncompress";
            !(function (e, t, r, n) {
              for (; t <= r; t++) {
                var i = e[t] >> 6,
                  a = 63 & e[t];
                if (i >> a) throw "Invalid table entry";
                if (a > 14) {
                  var o = n[i >> (a - 14)];
                  if (o.len) throw "Invalid table entry";
                  if ((o.lit++, o.p)) {
                    var s = o.p;
                    o.p = Array(o.lit);
                    for (var l = 0; l < o.lit - 1; ++l) o.p[l] = s[l];
                  } else o.p = [,];
                  o.p[o.lit - 1] = t;
                } else if (a)
                  for (var u = 0, l = 1 << (14 - a); l > 0; l--) {
                    var o = n[(i << (14 - a)) + u];
                    if (o.len || o.p) throw "Invalid table entry";
                    (o.len = a), (o.lit = t), u++;
                  }
              }
            })(B, A, p, g),
              (function (e, t, r, n, s, u, c, d, f, h) {
                for (
                  var A = 0, p = 0, m = Math.trunc(s.value + (u + 7) / 8);
                  s.value < m;

                )
                  for (a(A, p, r, s), A = i.c, p = i.lc; p >= 14; ) {
                    var B = t[(A >> (p - 14)) & 16383];
                    if (B.len)
                      (p -= B.len),
                        l(B.lit, c, A, p, r, n, s, f, h, d),
                        (A = o.c),
                        (p = o.lc);
                    else {
                      if (!B.p) throw "hufDecode issues";
                      for (g = 0; g < B.lit; g++) {
                        for (var g, v = 63 & e[B.p[g]]; p < v && s.value < m; )
                          a(A, p, r, s), (A = i.c), (p = i.lc);
                        if (
                          p >= v &&
                          e[B.p[g]] >> 6 == ((A >> (p - v)) & ((1 << v) - 1))
                        ) {
                          (p -= v),
                            l(B.p[g], c, A, p, r, n, s, f, h, d),
                            (A = o.c),
                            (p = o.lc);
                          break;
                        }
                      }
                      if (g == B.lit) throw "hufDecode issues";
                    }
                  }
                var C = (8 - u) & 7;
                for (A >>= C, p -= C; p > 0; ) {
                  var B = t[(A << (14 - p)) & 16383];
                  if (B.len)
                    (p -= B.len),
                      l(B.lit, c, A, p, r, n, s, f, h, d),
                      (A = o.c),
                      (p = o.lc);
                  else throw "hufDecode issues";
                }
              })(B, g, e, s, u, m, p, f, d, { value: 0 });
          }
          function A(e) {
            for (var t = 1; t < e.length; t++) {
              var r = e[t - 1] + e[t] - 128;
              e[t] = r;
            }
          }
          function p(e, t) {
            for (
              var r = 0,
                n = Math.floor((e.length + 1) / 2),
                i = 0,
                a = e.length - 1;
              !(i > a) && ((t[i++] = e[r++]), !(i > a));

            ) {
              t[i++] = e[n++];
            }
          }
          function m(e) {
            for (
              var t = e.byteLength, r = [], n = 0, i = new DataView(e);
              t > 0;

            ) {
              var a = i.getInt8(n++);
              if (a < 0) {
                var o = -a;
                t -= o + 1;
                for (var s = 0; s < o; s++) r.push(i.getUint8(n++));
              } else {
                var o = a;
                t -= 2;
                for (var l = i.getUint8(n++), s = 0; s < o + 1; s++) r.push(l);
              }
            }
            return r;
          }
          function B(e) {
            return new DataView(e.array.buffer, e.offset.value, e.size);
          }
          function g(e) {
            var t = new Uint8Array(
                m(
                  e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size)
                )
              ),
              r = new Uint8Array(t.length);
            return A(t), p(t, r), new DataView(r.buffer);
          }
          function v(e) {
            var t = P(e.array.slice(e.offset.value, e.offset.value + e.size)),
              r = new Uint8Array(t.length);
            return A(t), p(t, r), new DataView(r.buffer);
          }
          function C(e) {
            for (
              var t = e.viewer,
                r = { value: e.offset.value },
                n = new Uint16Array(
                  e.width * e.scanlineBlockSize * (e.channels * e.type)
                ),
                i = new Uint8Array(8192),
                a = 0,
                o = Array(e.channels),
                s = 0;
              s < e.channels;
              s++
            )
              (o[s] = {}),
                (o[s].start = a),
                (o[s].end = o[s].start),
                (o[s].nx = e.width),
                (o[s].ny = e.lines),
                (o[s].size = e.type),
                (a += o[s].nx * o[s].ny * o[s].size);
            var l = G(t, r),
              u = G(t, r);
            if (u >= 8192)
              throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
            if (l <= u) for (var s = 0; s < u - l + 1; s++) i[s + l] = F(t, r);
            var A = new Uint16Array(65536),
              p = (function (e, t) {
                for (var r = 0, n = 0; n < 65536; ++n)
                  (0 == n || e[n >> 3] & (1 << (7 & n))) && (t[r++] = n);
                for (var i = r - 1; r < 65536; ) t[r++] = 0;
                return i;
              })(i, A),
              m = w(t, r);
            h(e.array, t, r, m, n, a);
            for (var s = 0; s < e.channels; ++s)
              for (var B = o[s], g = 0; g < o[s].size; ++g)
                !(function (e, t, r, n, i, a, o) {
                  for (var s = o < 16384, l = r > i ? i : r, u = 1; u <= l; )
                    u <<= 1;
                  for (u >>= 1, h = u, u >>= 1; u >= 1; ) {
                    for (
                      var h,
                        A,
                        p,
                        m,
                        B,
                        g = 0,
                        v = 0 + a * (i - h),
                        C = a * u,
                        b = a * h,
                        E = n * u,
                        y = n * h;
                      g <= v;
                      g += b
                    ) {
                      for (var M = g, w = g + n * (r - h); M <= w; M += y) {
                        var R = M + E,
                          F = M + C,
                          I = F + E;
                        s
                          ? (d(e[M + t], e[F + t]),
                            (A = c.a),
                            (m = c.b),
                            d(e[R + t], e[I + t]),
                            (p = c.a),
                            (B = c.b),
                            d(A, p),
                            (e[M + t] = c.a),
                            (e[R + t] = c.b),
                            d(m, B))
                          : (f(e[M + t], e[F + t]),
                            (A = c.a),
                            (m = c.b),
                            f(e[R + t], e[I + t]),
                            (p = c.a),
                            (B = c.b),
                            f(A, p),
                            (e[M + t] = c.a),
                            (e[R + t] = c.b),
                            f(m, B)),
                          (e[F + t] = c.a),
                          (e[I + t] = c.b);
                      }
                      if (r & u) {
                        var F = M + C;
                        s ? d(e[M + t], e[F + t]) : f(e[M + t], e[F + t]),
                          (A = c.a),
                          (e[F + t] = c.b),
                          (e[M + t] = A);
                      }
                    }
                    if (i & u)
                      for (var M = g, w = g + n * (r - h); M <= w; M += y) {
                        var R = M + E;
                        s ? d(e[M + t], e[R + t]) : f(e[M + t], e[R + t]),
                          (A = c.a),
                          (e[R + t] = c.b),
                          (e[M + t] = A);
                      }
                    (h = u), (u >>= 1);
                  }
                })(n, B.start + g, B.nx, B.size, B.ny, B.nx * B.size, p);
            for (var v = a, C = 0; C < v; ++C) n[C] = A[n[C]];
            for (
              var b = 0, E = new Uint8Array(n.buffer.byteLength), y = 0;
              y < e.lines;
              y++
            )
              for (var M = 0; M < e.channels; M++) {
                var B = o[M],
                  R = B.nx * B.size,
                  I = new Uint8Array(n.buffer, 2 * B.end, 2 * R);
                E.set(I, b), (b += 2 * R), (B.end += R);
              }
            return new DataView(E.buffer);
          }
          function b(e) {
            var t = P(e.array.slice(e.offset.value, e.offset.value + e.size));
            let r = e.lines * e.channels * e.width,
              n = 1 == e.type ? new Uint16Array(r) : new Uint32Array(r),
              i = 0,
              a = 0,
              o = [, , , ,];
            for (let r = 0; r < e.lines; r++)
              for (let r = 0; r < e.channels; r++) {
                let r = 0;
                switch (e.type) {
                  case 1:
                    (o[0] = i), (o[1] = o[0] + e.width), (i = o[1] + e.width);
                    for (let i = 0; i < e.width; ++i)
                      (r += (t[o[0]++] << 8) | t[o[1]++]), (n[a] = r), a++;
                    break;
                  case 2:
                    (o[0] = i),
                      (o[1] = o[0] + e.width),
                      (o[2] = o[1] + e.width),
                      (i = o[2] + e.width);
                    for (let i = 0; i < e.width; ++i)
                      (r +=
                        (t[o[0]++] << 24) |
                        (t[o[1]++] << 16) |
                        (t[o[2]++] << 8)),
                        (n[a] = r),
                        a++;
                }
              }
            return new DataView(n.buffer);
          }
          function E(e) {
            var t = e.viewer,
              r = { value: e.offset.value },
              n = new Uint8Array(e.width * e.lines * (e.channels * e.type * 2)),
              i = {
                version: I(t, r),
                unknownUncompressedSize: I(t, r),
                unknownCompressedSize: I(t, r),
                acCompressedSize: I(t, r),
                dcCompressedSize: I(t, r),
                rleCompressedSize: I(t, r),
                rleUncompressedSize: I(t, r),
                rleRawSize: I(t, r),
                totalAcUncompressedCount: I(t, r),
                totalDcUncompressedCount: I(t, r),
                acCompression: I(t, r),
              };
            if (i.version < 2)
              throw (
                "EXRLoader.parse: " +
                L.compression +
                " version " +
                i.version +
                " is unsupported"
              );
            for (var a = [], o = G(t, r) - 2; o > 0; ) {
              var l = y(t.buffer, r),
                u = F(t, r),
                c = (u >> 2) & 3,
                d = new Int8Array([(u >> 4) - 1])[0],
                f = F(t, r);
              a.push({ name: l, index: d, type: f, compression: c }),
                (o -= l.length + 3);
            }
            for (
              var A = L.channels, p = Array(e.channels), B = 0;
              B < e.channels;
              ++B
            ) {
              var g = (p[B] = {}),
                C = A[B];
              (g.name = C.name),
                (g.compression = 0),
                (g.decoded = !1),
                (g.type = C.pixelType),
                (g.pLinear = C.pLinear),
                (g.width = e.width),
                (g.height = e.lines);
            }
            for (var b = { idx: [, , ,] }, E = 0; E < e.channels; ++E)
              for (var g = p[E], B = 0; B < a.length; ++B) {
                var M = a[B];
                g.name == M.name &&
                  ((g.compression = M.compression),
                  M.index >= 0 && (b.idx[M.index] = E),
                  (g.offset = E));
              }
            if (i.acCompressedSize > 0)
              switch (i.acCompression) {
                case 0:
                  var w = new Uint16Array(i.totalAcUncompressedCount);
                  h(
                    e.array,
                    t,
                    r,
                    i.acCompressedSize,
                    w,
                    i.totalAcUncompressedCount
                  );
                  break;
                case 1:
                  var R = e.array.slice(
                      r.value,
                      r.value + i.totalAcUncompressedCount
                    ),
                    T = P(R),
                    w = new Uint16Array(T.buffer);
                  r.value += i.totalAcUncompressedCount;
              }
            if (i.dcCompressedSize > 0) {
              var x = new Uint16Array(
                v({
                  array: e.array,
                  offset: r,
                  size: i.dcCompressedSize,
                }).buffer
              );
              r.value += i.dcCompressedSize;
            }
            if (i.rleRawSize > 0) {
              var R = e.array.slice(r.value, r.value + i.rleCompressedSize),
                T = P(R),
                S = m(T.buffer);
              r.value += i.rleCompressedSize;
            }
            for (var H = 0, _ = Array(p.length), B = 0; B < _.length; ++B)
              _[B] = [];
            for (var O = 0; O < e.lines; ++O)
              for (var U = 0; U < p.length; ++U)
                _[U].push(H), (H += p[U].width * e.type * 2);
            !(function (e, t, r, n, i, a) {
              var o = new DataView(a.buffer),
                l = r[e.idx[0]].width,
                u = r[e.idx[0]].height,
                c = Math.floor(l / 8),
                d = Math.ceil(l / 8),
                f = Math.ceil(u / 8),
                h = l - (d - 1) * 8,
                A = u - (f - 1) * 8,
                p = { value: 0 },
                m = [, , ,],
                B = [, , ,],
                g = [, , ,],
                v = [, , ,],
                C = [, , ,];
              for (let r = 0; r < 3; ++r)
                (C[r] = t[e.idx[r]]),
                  (m[r] = r < 1 ? 0 : m[r - 1] + d * f),
                  (B[r] = new Float32Array(64)),
                  (g[r] = new Uint16Array(64)),
                  (v[r] = new Uint16Array(64 * d));
              for (let t = 0; t < f; ++t) {
                var b,
                  E,
                  y = 8;
                t == f - 1 && (y = A);
                var M = 8;
                for (let e = 0; e < d; ++e) {
                  e == d - 1 && (M = h);
                  for (let e = 0; e < 3; ++e) {
                    g[e].fill(0),
                      (g[e][0] = i[m[e]++]),
                      (function (e, t, r) {
                        for (var n, i = 1; i < 64; )
                          65280 == (n = t[e.value])
                            ? (i = 64)
                            : n >> 8 == 255
                            ? (i += 255 & n)
                            : ((r[i] = n), i++),
                            e.value++;
                      })(p, n, g[e]),
                      (b = g[e]),
                      ((E = B[e])[0] = D(b[0])),
                      (E[1] = D(b[1])),
                      (E[2] = D(b[5])),
                      (E[3] = D(b[6])),
                      (E[4] = D(b[14])),
                      (E[5] = D(b[15])),
                      (E[6] = D(b[27])),
                      (E[7] = D(b[28])),
                      (E[8] = D(b[2])),
                      (E[9] = D(b[4])),
                      (E[10] = D(b[7])),
                      (E[11] = D(b[13])),
                      (E[12] = D(b[16])),
                      (E[13] = D(b[26])),
                      (E[14] = D(b[29])),
                      (E[15] = D(b[42])),
                      (E[16] = D(b[3])),
                      (E[17] = D(b[8])),
                      (E[18] = D(b[12])),
                      (E[19] = D(b[17])),
                      (E[20] = D(b[25])),
                      (E[21] = D(b[30])),
                      (E[22] = D(b[41])),
                      (E[23] = D(b[43])),
                      (E[24] = D(b[9])),
                      (E[25] = D(b[11])),
                      (E[26] = D(b[18])),
                      (E[27] = D(b[24])),
                      (E[28] = D(b[31])),
                      (E[29] = D(b[40])),
                      (E[30] = D(b[44])),
                      (E[31] = D(b[53])),
                      (E[32] = D(b[10])),
                      (E[33] = D(b[19])),
                      (E[34] = D(b[23])),
                      (E[35] = D(b[32])),
                      (E[36] = D(b[39])),
                      (E[37] = D(b[45])),
                      (E[38] = D(b[52])),
                      (E[39] = D(b[54])),
                      (E[40] = D(b[20])),
                      (E[41] = D(b[22])),
                      (E[42] = D(b[33])),
                      (E[43] = D(b[38])),
                      (E[44] = D(b[46])),
                      (E[45] = D(b[51])),
                      (E[46] = D(b[55])),
                      (E[47] = D(b[60])),
                      (E[48] = D(b[21])),
                      (E[49] = D(b[34])),
                      (E[50] = D(b[37])),
                      (E[51] = D(b[47])),
                      (E[52] = D(b[50])),
                      (E[53] = D(b[56])),
                      (E[54] = D(b[59])),
                      (E[55] = D(b[61])),
                      (E[56] = D(b[35])),
                      (E[57] = D(b[36])),
                      (E[58] = D(b[48])),
                      (E[59] = D(b[49])),
                      (E[60] = D(b[57])),
                      (E[61] = D(b[58])),
                      (E[62] = D(b[62])),
                      (E[63] = D(b[63])),
                      (function (e) {
                        let t = 0.5 * Math.cos(3.14159 / 16),
                          r = 0.5 * Math.cos(3.14159 / 8),
                          n = 0.5 * Math.cos((3 * 3.14159) / 16),
                          i = 0.5 * Math.cos((3 * 3.14159) / 8);
                        for (
                          var a = [, , , ,],
                            o = [, , , ,],
                            s = [, , , ,],
                            l = [, , , ,],
                            u = 0;
                          u < 8;
                          ++u
                        ) {
                          var c = 8 * u;
                          (a[0] = r * e[c + 2]),
                            (a[1] = i * e[c + 2]),
                            (a[2] = r * e[c + 6]),
                            (a[3] = i * e[c + 6]),
                            (o[0] =
                              t * e[c + 1] +
                              n * e[c + 3] +
                              0.2777854612564676 * e[c + 5] +
                              0.09754573032714427 * e[c + 7]),
                            (o[1] =
                              n * e[c + 1] -
                              0.09754573032714427 * e[c + 3] -
                              t * e[c + 5] -
                              0.2777854612564676 * e[c + 7]),
                            (o[2] =
                              0.2777854612564676 * e[c + 1] -
                              t * e[c + 3] +
                              0.09754573032714427 * e[c + 5] +
                              n * e[c + 7]),
                            (o[3] =
                              0.09754573032714427 * e[c + 1] -
                              0.2777854612564676 * e[c + 3] +
                              n * e[c + 5] -
                              t * e[c + 7]),
                            (s[0] =
                              0.35355362513961314 * (e[c + 0] + e[c + 4])),
                            (s[3] =
                              0.35355362513961314 * (e[c + 0] - e[c + 4])),
                            (s[1] = a[0] + a[3]),
                            (s[2] = a[1] - a[2]),
                            (l[0] = s[0] + s[1]),
                            (l[1] = s[3] + s[2]),
                            (l[2] = s[3] - s[2]),
                            (l[3] = s[0] - s[1]),
                            (e[c + 0] = l[0] + o[0]),
                            (e[c + 1] = l[1] + o[1]),
                            (e[c + 2] = l[2] + o[2]),
                            (e[c + 3] = l[3] + o[3]),
                            (e[c + 4] = l[3] - o[3]),
                            (e[c + 5] = l[2] - o[2]),
                            (e[c + 6] = l[1] - o[1]),
                            (e[c + 7] = l[0] - o[0]);
                        }
                        for (var d = 0; d < 8; ++d)
                          (a[0] = r * e[16 + d]),
                            (a[1] = i * e[16 + d]),
                            (a[2] = r * e[48 + d]),
                            (a[3] = i * e[48 + d]),
                            (o[0] =
                              t * e[8 + d] +
                              n * e[24 + d] +
                              0.2777854612564676 * e[40 + d] +
                              0.09754573032714427 * e[56 + d]),
                            (o[1] =
                              n * e[8 + d] -
                              0.09754573032714427 * e[24 + d] -
                              t * e[40 + d] -
                              0.2777854612564676 * e[56 + d]),
                            (o[2] =
                              0.2777854612564676 * e[8 + d] -
                              t * e[24 + d] +
                              0.09754573032714427 * e[40 + d] +
                              n * e[56 + d]),
                            (o[3] =
                              0.09754573032714427 * e[8 + d] -
                              0.2777854612564676 * e[24 + d] +
                              n * e[40 + d] -
                              t * e[56 + d]),
                            (s[0] = 0.35355362513961314 * (e[d] + e[32 + d])),
                            (s[3] = 0.35355362513961314 * (e[d] - e[32 + d])),
                            (s[1] = a[0] + a[3]),
                            (s[2] = a[1] - a[2]),
                            (l[0] = s[0] + s[1]),
                            (l[1] = s[3] + s[2]),
                            (l[2] = s[3] - s[2]),
                            (l[3] = s[0] - s[1]),
                            (e[0 + d] = l[0] + o[0]),
                            (e[8 + d] = l[1] + o[1]),
                            (e[16 + d] = l[2] + o[2]),
                            (e[24 + d] = l[3] + o[3]),
                            (e[32 + d] = l[3] - o[3]),
                            (e[40 + d] = l[2] - o[2]),
                            (e[48 + d] = l[1] - o[1]),
                            (e[56 + d] = l[0] - o[0]);
                      })(B[e]);
                  }
                  for (var w = B, R = 0; R < 64; ++R) {
                    var F = w[0][R],
                      I = w[1][R],
                      T = w[2][R];
                    (w[0][R] = F + 1.5747 * T),
                      (w[1][R] = F - 0.1873 * I - 0.4682 * T),
                      (w[2][R] = F + 1.8556 * I);
                  }
                  for (let t = 0; t < 3; ++t)
                    !(function (e, t, r) {
                      for (var n, i = 0; i < 64; ++i) {
                        t[r + i] = s.GxU.toHalfFloat(
                          (n = e[i]) <= 1
                            ? Math.sign(n) * Math.pow(Math.abs(n), 2.2)
                            : Math.sign(n) *
                                Math.pow(9.025013291561939, Math.abs(n) - 1)
                        );
                      }
                    })(B[t], v[t], 64 * e);
                }
                let a = 0;
                for (let n = 0; n < 3; ++n) {
                  let i = r[e.idx[n]].type;
                  for (let e = 8 * t; e < 8 * t + y; ++e) {
                    a = C[n][e];
                    for (let t = 0; t < c; ++t) {
                      let r = 64 * t + (7 & e) * 8;
                      o.setUint16(a + 0 * i, v[n][r + 0], !0),
                        o.setUint16(a + 2 * i, v[n][r + 1], !0),
                        o.setUint16(a + 4 * i, v[n][r + 2], !0),
                        o.setUint16(a + 6 * i, v[n][r + 3], !0),
                        o.setUint16(a + 8 * i, v[n][r + 4], !0),
                        o.setUint16(a + 10 * i, v[n][r + 5], !0),
                        o.setUint16(a + 12 * i, v[n][r + 6], !0),
                        o.setUint16(a + 14 * i, v[n][r + 7], !0),
                        (a += 16 * i);
                    }
                  }
                  if (c != d)
                    for (let e = 8 * t; e < 8 * t + y; ++e) {
                      let t = C[n][e] + 8 * c * 2 * i,
                        r = 64 * c + (7 & e) * 8;
                      for (let e = 0; e < M; ++e)
                        o.setUint16(t + 2 * e * i, v[n][r + e], !0);
                    }
                }
              }
              for (
                var x = new Uint16Array(l), o = new DataView(a.buffer), G = 0;
                G < 3;
                ++G
              ) {
                r[e.idx[G]].decoded = !0;
                var S = r[e.idx[G]].type;
                if (2 == r[G].type)
                  for (var H = 0; H < u; ++H) {
                    let e = C[G][H];
                    for (var _ = 0; _ < l; ++_)
                      x[_] = o.getUint16(e + 2 * _ * S, !0);
                    for (var _ = 0; _ < l; ++_)
                      o.setFloat32(e + 2 * _ * S, D(x[_]), !0);
                  }
              }
            })(b, _, p, w, x, n);
            for (var B = 0; B < p.length; ++B) {
              var g = p[B];
              if (!g.decoded)
                if (2 === g.compression)
                  for (var J = 0, k = 0, O = 0; O < e.lines; ++O) {
                    for (var N = _[B][J], K = 0; K < g.width; ++K) {
                      for (var j = 0; j < 2 * g.type; ++j)
                        n[N++] = S[k + j * g.width * g.height];
                      k++;
                    }
                    J++;
                  }
                else throw "EXRLoader.parse: unsupported channel compression";
            }
            return new DataView(n.buffer);
          }
          function y(e, t) {
            for (var r = new Uint8Array(e), n = 0; 0 != r[t.value + n]; )
              n += 1;
            var i = new TextDecoder().decode(r.slice(t.value, t.value + n));
            return (t.value = t.value + n + 1), i;
          }
          function M(e, t) {
            var r = e.getInt32(t.value, !0);
            return (t.value = t.value + 4), r;
          }
          function w(e, t) {
            var r = e.getUint32(t.value, !0);
            return (t.value = t.value + 4), r;
          }
          function R(e, t) {
            var r = e[t.value];
            return (t.value = t.value + 1), r;
          }
          function F(e, t) {
            var r = e.getUint8(t.value);
            return (t.value = t.value + 1), r;
          }
          let I = function (e, t) {
            let r;
            return (
              (r =
                "getBigInt64" in DataView.prototype
                  ? Number(e.getBigInt64(t.value, !0))
                  : e.getUint32(t.value + 4, !0) +
                    Number(e.getUint32(t.value, !0) << 32)),
              (t.value += 8),
              r
            );
          };
          function T(e, t) {
            var r = e.getFloat32(t.value, !0);
            return (t.value += 4), r;
          }
          function x(e, t) {
            return s.GxU.toHalfFloat(T(e, t));
          }
          function D(e) {
            var t = (31744 & e) >> 10,
              r = 1023 & e;
            return (
              (e >> 15 ? -1 : 1) *
              (t
                ? 31 === t
                  ? r
                    ? NaN
                    : 1 / 0
                  : Math.pow(2, t - 15) * (1 + r / 1024)
                : (r / 1024) * 6103515625e-14)
            );
          }
          function G(e, t) {
            var r = e.getUint16(t.value, !0);
            return (t.value += 2), r;
          }
          function S(e, t) {
            return D(G(e, t));
          }
          let H = new DataView(e),
            _ = new Uint8Array(e),
            O = { value: 0 },
            L = (function (e, t, r) {
              let n = {};
              if (0x1312f76 != e.getUint32(0, !0))
                throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
              n.version = e.getUint8(4);
              let i = e.getUint8(5);
              (n.spec = {
                singleTile: !!(2 & i),
                longName: !!(4 & i),
                deepFormat: !!(8 & i),
                multiPart: !!(16 & i),
              }),
                (r.value = 8);
              for (var a = !0; a; ) {
                var o = y(t, r);
                if (0 == o) a = !1;
                else {
                  var s = y(t, r),
                    l = w(e, r),
                    u = (function (e, t, r, n, i) {
                      var a, o, s, l, u, c, d;
                      if (
                        "string" === n ||
                        "stringvector" === n ||
                        "iccProfile" === n
                      )
                        return (
                          (a = new TextDecoder().decode(
                            new Uint8Array(t).slice(r.value, r.value + i)
                          )),
                          (r.value = r.value + i),
                          a
                        );
                      if ("chlist" === n)
                        return (function (e, t, r, n) {
                          for (var i = r.value, a = []; r.value < i + n - 1; ) {
                            var o = y(t, r),
                              s = M(e, r),
                              l = F(e, r);
                            r.value += 3;
                            var u = M(e, r),
                              c = M(e, r);
                            a.push({
                              name: o,
                              pixelType: s,
                              pLinear: l,
                              xSampling: u,
                              ySampling: c,
                            });
                          }
                          return (r.value += 1), a;
                        })(e, t, r, i);
                      if ("chromaticities" === n)
                        return (
                          (o = T(e, r)),
                          (s = T(e, r)),
                          (l = T(e, r)),
                          (u = T(e, r)),
                          (c = T(e, r)),
                          {
                            redX: o,
                            redY: s,
                            greenX: l,
                            greenY: u,
                            blueX: c,
                            blueY: T(e, r),
                            whiteX: T(e, r),
                            whiteY: T(e, r),
                          }
                        );
                      if ("compression" === n)
                        return [
                          "NO_COMPRESSION",
                          "RLE_COMPRESSION",
                          "ZIPS_COMPRESSION",
                          "ZIP_COMPRESSION",
                          "PIZ_COMPRESSION",
                          "PXR24_COMPRESSION",
                          "B44_COMPRESSION",
                          "B44A_COMPRESSION",
                          "DWAA_COMPRESSION",
                          "DWAB_COMPRESSION",
                        ][F(e, r)];
                      if ("box2i" === n)
                        return (
                          (d = w(e, r)),
                          {
                            xMin: d,
                            yMin: w(e, r),
                            xMax: w(e, r),
                            yMax: w(e, r),
                          }
                        );
                      else if ("lineOrder" === n)
                        return ["INCREASING_Y"][F(e, r)];
                      else if ("float" === n) return T(e, r);
                      else if ("v2f" === n) return [T(e, r), T(e, r)];
                      else if ("v3f" === n) return [T(e, r), T(e, r), T(e, r)];
                      else if ("int" === n) return M(e, r);
                      else if ("rational" === n) return [M(e, r), w(e, r)];
                      else if ("timecode" === n) return [w(e, r), w(e, r)];
                      else
                        return "preview" === n
                          ? ((r.value += i), "skipped")
                          : ((r.value += i), void 0);
                    })(e, t, r, s, l);
                  void 0 === u
                    ? console.warn(
                        `EXRLoader.parse: skipped unknown header attribute type '${s}'.`
                      )
                    : (n[o] = u);
                }
              }
              if ((-5 & i) != 0)
                throw (
                  (console.error("EXRHeader:", n),
                  "THREE.EXRLoader: provided file is currently unsupported.")
                );
              return n;
            })(H, e, O),
            U = (function (e, t, r, n, i) {
              let a = {
                size: 0,
                viewer: t,
                array: r,
                offset: n,
                width: e.dataWindow.xMax - e.dataWindow.xMin + 1,
                height: e.dataWindow.yMax - e.dataWindow.yMin + 1,
                channels: e.channels.length,
                bytesPerLine: null,
                lines: null,
                inputSize: null,
                type: e.channels[0].pixelType,
                uncompress: null,
                getter: null,
                format: null,
                [k ? "colorSpace" : "encoding"]: null,
              };
              switch (e.compression) {
                case "NO_COMPRESSION":
                  (a.lines = 1), (a.uncompress = B);
                  break;
                case "RLE_COMPRESSION":
                  (a.lines = 1), (a.uncompress = g);
                  break;
                case "ZIPS_COMPRESSION":
                  (a.lines = 1), (a.uncompress = v);
                  break;
                case "ZIP_COMPRESSION":
                  (a.lines = 16), (a.uncompress = v);
                  break;
                case "PIZ_COMPRESSION":
                  (a.lines = 32), (a.uncompress = C);
                  break;
                case "PXR24_COMPRESSION":
                  (a.lines = 16), (a.uncompress = b);
                  break;
                case "DWAA_COMPRESSION":
                  (a.lines = 32), (a.uncompress = E);
                  break;
                case "DWAB_COMPRESSION":
                  (a.lines = 256), (a.uncompress = E);
                  break;
                default:
                  throw "EXRLoader.parse: " + e.compression + " is unsupported";
              }
              if (((a.scanlineBlockSize = a.lines), 1 == a.type))
                switch (i) {
                  case s.RQf:
                    (a.getter = S), (a.inputSize = 2);
                    break;
                  case s.ix0:
                    (a.getter = G), (a.inputSize = 2);
                }
              else if (2 == a.type)
                switch (i) {
                  case s.RQf:
                    (a.getter = T), (a.inputSize = 4);
                    break;
                  case s.ix0:
                    (a.getter = x), (a.inputSize = 4);
                }
              else
                throw (
                  "EXRLoader.parse: unsupported pixelType " +
                  a.type +
                  " for " +
                  e.compression +
                  "."
                );
              a.blockCount = (e.dataWindow.yMax + 1) / a.scanlineBlockSize;
              for (var o = 0; o < a.blockCount; o++) I(t, n);
              a.outputChannels = 3 == a.channels ? 4 : a.channels;
              let l = a.width * a.height * a.outputChannels;
              switch (i) {
                case s.RQf:
                  (a.byteArray = new Float32Array(l)),
                    a.channels < a.outputChannels && a.byteArray.fill(1, 0, l);
                  break;
                case s.ix0:
                  (a.byteArray = new Uint16Array(l)),
                    a.channels < a.outputChannels &&
                      a.byteArray.fill(15360, 0, l);
                  break;
                default:
                  console.error("THREE.EXRLoader: unsupported type: ", i);
              }
              return (
                (a.bytesPerLine = a.width * a.inputSize * a.channels),
                4 == a.outputChannels ? (a.format = s.GWd) : (a.format = s.VT0),
                k ? (a.colorSpace = "srgb-linear") : (a.encoding = 3e3),
                a
              );
            })(L, H, _, O, this.type),
            J = { value: 0 },
            N = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
          for (let e = 0; e < U.height / U.scanlineBlockSize; e++) {
            let t = w(H, O);
            (U.size = w(H, O)),
              (U.lines =
                t + U.scanlineBlockSize > U.height
                  ? U.height - t
                  : U.scanlineBlockSize);
            let r = U.size < U.lines * U.bytesPerLine ? U.uncompress(U) : B(U);
            O.value += U.size;
            for (let t = 0; t < U.scanlineBlockSize; t++) {
              let n = t + e * U.scanlineBlockSize;
              if (n >= U.height) break;
              for (let e = 0; e < U.channels; e++) {
                let i = N[L.channels[e].name];
                for (let a = 0; a < U.width; a++) {
                  J.value =
                    (t * (U.channels * U.width) + e * U.width + a) *
                    U.inputSize;
                  let o =
                    (U.height - 1 - n) * (U.width * U.outputChannels) +
                    a * U.outputChannels +
                    i;
                  U.byteArray[o] = U.getter(r, J);
                }
              }
            }
          }
          return {
            header: L,
            width: U.width,
            height: U.height,
            data: U.byteArray,
            format: U.format,
            [k ? "colorSpace" : "encoding"]: U[k ? "colorSpace" : "encoding"],
            type: this.type,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, r, n) {
          return super.load(
            e,
            function (e, r) {
              k ? (e.colorSpace = r.colorSpace) : (e.encoding = r.encoding),
                (e.minFilter = s.k6q),
                (e.magFilter = s.k6q),
                (e.generateMipmaps = !1),
                (e.flipY = !1),
                t && t(e, r);
            },
            r,
            n
          );
        }
      }
      let K = (e, t, r) => {
        let n;
        switch (e) {
          case s.OUM:
            n = new Uint8ClampedArray(t * r * 4);
            break;
          case s.ix0:
            n = new Uint16Array(t * r * 4);
            break;
          case s.bkx:
            n = new Uint32Array(t * r * 4);
            break;
          case s.tJf:
            n = new Int8Array(t * r * 4);
            break;
          case s.fBL:
            n = new Int16Array(t * r * 4);
            break;
          case s.Yuy:
            n = new Int32Array(t * r * 4);
            break;
          case s.RQf:
            n = new Float32Array(t * r * 4);
            break;
          default:
            throw Error("Unsupported data type");
        }
        return n;
      };
      class j {
        _renderer;
        _rendererIsDisposable = !1;
        _material;
        _scene;
        _camera;
        _quad;
        _renderTarget;
        _width;
        _height;
        _type;
        _colorSpace;
        _supportsReadPixels = !0;
        constructor(e) {
          (this._width = e.width),
            (this._height = e.height),
            (this._type = e.type),
            (this._colorSpace = e.colorSpace);
          let t = {
            format: s.GWd,
            depthBuffer: !1,
            stencilBuffer: !1,
            type: this._type,
            colorSpace: this._colorSpace,
            anisotropy:
              e.renderTargetOptions?.anisotropy !== void 0
                ? e.renderTargetOptions?.anisotropy
                : 1,
            generateMipmaps:
              e.renderTargetOptions?.generateMipmaps !== void 0 &&
              e.renderTargetOptions?.generateMipmaps,
            magFilter:
              e.renderTargetOptions?.magFilter !== void 0
                ? e.renderTargetOptions?.magFilter
                : s.k6q,
            minFilter:
              e.renderTargetOptions?.minFilter !== void 0
                ? e.renderTargetOptions?.minFilter
                : s.k6q,
            samples:
              e.renderTargetOptions?.samples !== void 0
                ? e.renderTargetOptions?.samples
                : void 0,
            wrapS:
              e.renderTargetOptions?.wrapS !== void 0
                ? e.renderTargetOptions?.wrapS
                : s.ghU,
            wrapT:
              e.renderTargetOptions?.wrapT !== void 0
                ? e.renderTargetOptions?.wrapT
                : s.ghU,
          };
          if (
            ((this._material = e.material),
            e.renderer
              ? (this._renderer = e.renderer)
              : ((this._renderer = j.instantiateRenderer()),
                (this._rendererIsDisposable = !0)),
            (this._scene = new s.Z58()),
            (this._camera = new s.qUd()),
            this._camera.position.set(0, 0, 10),
            (this._camera.left = -0.5),
            (this._camera.right = 0.5),
            (this._camera.top = 0.5),
            (this._camera.bottom = -0.5),
            this._camera.updateProjectionMatrix(),
            !((e, t, r, i) => {
              if (void 0 !== n) return n;
              let a = new s.nWS(1, 1, i);
              t.setRenderTarget(a);
              let o = new s.eaF(new s.bdM(), new s.V9B({ color: 0xffffff }));
              t.render(o, r), t.setRenderTarget(null);
              let l = K(e, a.width, a.height);
              return (
                t.readRenderTargetPixels(a, 0, 0, a.width, a.height, l),
                a.dispose(),
                o.geometry.dispose(),
                o.material.dispose(),
                (n = 0 !== l[0])
              );
            })(this._type, this._renderer, this._camera, t))
          ) {
            let e;
            this._type === s.ix0 &&
              (e = this._renderer.extensions.has("EXT_color_buffer_float")
                ? s.RQf
                : void 0),
              void 0 !== e
                ? (console.warn(
                    `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${s.RQf}`
                  ),
                  (this._type = e))
                : ((this._supportsReadPixels = !1),
                  console.warn(
                    "This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"
                  ));
          }
          (this._quad = new s.eaF(new s.bdM(), this._material)),
            this._quad.geometry.computeBoundingBox(),
            this._scene.add(this._quad),
            (this._renderTarget = new s.nWS(this.width, this.height, t)),
            (this._renderTarget.texture.mapping =
              e.renderTargetOptions?.mapping !== void 0
                ? e.renderTargetOptions?.mapping
                : s.UTZ);
        }
        static instantiateRenderer() {
          let e = new l.WebGLRenderer();
          return e.setSize(128, 128), e;
        }
        render = () => {
          this._renderer.setRenderTarget(this._renderTarget);
          try {
            this._renderer.render(this._scene, this._camera);
          } catch (e) {
            throw (this._renderer.setRenderTarget(null), e);
          }
          this._renderer.setRenderTarget(null);
        };
        toArray() {
          if (!this._supportsReadPixels)
            throw Error("Can't read pixels in this browser");
          let e = K(this._type, this._width, this._height);
          return (
            this._renderer.readRenderTargetPixels(
              this._renderTarget,
              0,
              0,
              this._width,
              this._height,
              e
            ),
            e
          );
        }
        toDataTexture(e) {
          let t = new s.GYF(
            this.toArray(),
            this.width,
            this.height,
            s.GWd,
            this._type,
            e?.mapping || s.UTZ,
            e?.wrapS || s.ghU,
            e?.wrapT || s.ghU,
            e?.magFilter || s.k6q,
            e?.minFilter || s.k6q,
            e?.anisotropy || 1,
            s.Zr2
          );
          return (
            (t.generateMipmaps =
              e?.generateMipmaps !== void 0 && e?.generateMipmaps),
            t
          );
        }
        disposeOnDemandRenderer() {
          this._renderer.setRenderTarget(null),
            this._rendererIsDisposable &&
              (this._renderer.dispose(), this._renderer.forceContextLoss());
        }
        dispose(e) {
          this.disposeOnDemandRenderer(),
            e && this.renderTarget.dispose(),
            this.material instanceof s.BKk &&
              Object.values(this.material.uniforms).forEach((e) => {
                e.value instanceof s.gPd && e.value.dispose();
              }),
            Object.values(this.material).forEach((e) => {
              e instanceof s.gPd && e.dispose();
            }),
            this.material.dispose(),
            this._quad.geometry.dispose();
        }
        get width() {
          return this._width;
        }
        set width(e) {
          (this._width = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get height() {
          return this._height;
        }
        set height(e) {
          (this._height = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get renderer() {
          return this._renderer;
        }
        get renderTarget() {
          return this._renderTarget;
        }
        set renderTarget(e) {
          (this._renderTarget = e),
            (this._width = e.width),
            (this._height = e.height);
        }
        get material() {
          return this._material;
        }
        get type() {
          return this._type;
        }
        get colorSpace() {
          return this._colorSpace;
        }
      }
      class Q extends Error {}
      class X extends Error {}
      let Y = (e, t, r) => {
        let n = RegExp(`${t}="([^"]*)"`, "i").exec(e);
        if (n) return n[1];
        let i = RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e);
        if (i) {
          let e = i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
          return e && 3 === e.length
            ? e.map((e) => e.replace(/<\/?rdf:li>/g, ""))
            : i[1].trim();
        }
        if (void 0 !== r) return r;
        throw Error(`Can't find ${t} in gainmap metadata`);
      };
      class W {
        options;
        constructor(e) {
          this.options = {
            debug: !!e && void 0 !== e.debug && e.debug,
            extractFII: !e || void 0 === e.extractFII || e.extractFII,
            extractNonFII: !e || void 0 === e.extractNonFII || e.extractNonFII,
          };
        }
        extract(e) {
          return new Promise((t, r) => {
            let n,
              i = this.options.debug,
              a = new DataView(e.buffer);
            if (65496 !== a.getUint16(0))
              return void r(Error("Not a valid jpeg"));
            let o = a.byteLength,
              s = 2,
              l = 0;
            for (; s < o; ) {
              if (++l > 250)
                return void r(Error(`Found no marker after ${l} loops 😵`));
              if (255 !== a.getUint8(s))
                return void r(
                  Error(
                    `Not a valid marker at offset 0x${s.toString(
                      16
                    )}, found: 0x${a.getUint8(s).toString(16)}`
                  )
                );
              if (
                ((n = a.getUint8(s + 1)),
                i && console.log(`Marker: ${n.toString(16)}`),
                226 === n)
              ) {
                i && console.log("Found APP2 marker (0xffe2)");
                let e = s + 4;
                if (0x4d504600 === a.getUint32(e)) {
                  let n,
                    i = e + 4;
                  if (18761 === a.getUint16(i)) n = !1;
                  else {
                    if (19789 !== a.getUint16(i))
                      return void r(
                        Error("No valid endianness marker found in TIFF header")
                      );
                    n = !0;
                  }
                  if (42 !== a.getUint16(i + 2, !n))
                    return void r(
                      Error("Not valid TIFF data! (no 0x002A marker)")
                    );
                  let o = a.getUint32(i + 4, !n);
                  if (o < 8)
                    return void r(
                      Error("Not valid TIFF data! (First offset less than 8)")
                    );
                  let s = i + o,
                    l = a.getUint16(s, !n),
                    u = s + 2,
                    c = 0;
                  for (let e = u; e < u + 12 * l; e += 12)
                    45057 === a.getUint16(e, !n) &&
                      (c = a.getUint32(e + 8, !n));
                  let d = s + 2 + 12 * l + 4,
                    f = [];
                  for (let e = d; e < d + 16 * c; e += 16) {
                    let t = {
                      MPType: a.getUint32(e, !n),
                      size: a.getUint32(e + 4, !n),
                      dataOffset: a.getUint32(e + 8, !n),
                      dependantImages: a.getUint32(e + 12, !n),
                      start: -1,
                      end: -1,
                      isFII: !1,
                    };
                    t.dataOffset
                      ? ((t.start = i + t.dataOffset), (t.isFII = !1))
                      : ((t.start = 0), (t.isFII = !0)),
                      (t.end = t.start + t.size),
                      f.push(t);
                  }
                  if (this.options.extractNonFII && f.length) {
                    let e = new Blob([a]),
                      r = [];
                    for (let t of f) {
                      if (t.isFII && !this.options.extractFII) continue;
                      let n = e.slice(t.start, t.end + 1, "image/jpeg");
                      r.push(n);
                    }
                    t(r);
                  }
                }
              }
              s += 2 + a.getUint16(s + 2);
            }
          });
        }
      }
      let z = async (e) => {
          let t = ((e) => {
            let t,
              r = (t =
                "undefined" != typeof TextDecoder
                  ? new TextDecoder().decode(e)
                  : e.toString()).indexOf("<x:xmpmeta");
            for (; -1 !== r; ) {
              let e = t.indexOf("x:xmpmeta>", r),
                n = t.slice(r, e + 10);
              try {
                let e = Y(n, "hdrgm:GainMapMin", "0"),
                  t = Y(n, "hdrgm:GainMapMax"),
                  r = Y(n, "hdrgm:Gamma", "1"),
                  i = Y(n, "hdrgm:OffsetSDR", "0.015625"),
                  a = Y(n, "hdrgm:OffsetHDR", "0.015625"),
                  o = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(n),
                  s = o ? o[1] : "0",
                  l = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);
                if (!l) throw Error("Incomplete gainmap metadata");
                let u = l[1];
                return {
                  gainMapMin: Array.isArray(e)
                    ? e.map((e) => parseFloat(e))
                    : [parseFloat(e), parseFloat(e), parseFloat(e)],
                  gainMapMax: Array.isArray(t)
                    ? t.map((e) => parseFloat(e))
                    : [parseFloat(t), parseFloat(t), parseFloat(t)],
                  gamma: Array.isArray(r)
                    ? r.map((e) => parseFloat(e))
                    : [parseFloat(r), parseFloat(r), parseFloat(r)],
                  offsetSdr: Array.isArray(i)
                    ? i.map((e) => parseFloat(e))
                    : [parseFloat(i), parseFloat(i), parseFloat(i)],
                  offsetHdr: Array.isArray(a)
                    ? a.map((e) => parseFloat(e))
                    : [parseFloat(a), parseFloat(a), parseFloat(a)],
                  hdrCapacityMin: parseFloat(s),
                  hdrCapacityMax: parseFloat(u),
                };
              } catch (e) {}
              r = t.indexOf("<x:xmpmeta", e);
            }
          })(e);
          if (!t) throw new X("Gain map XMP metadata not found");
          let r = new W({ extractFII: !0, extractNonFII: !0 }),
            n = await r.extract(e);
          if (2 !== n.length) throw new Q("Gain map recovery image not found");
          return {
            sdr: new Uint8Array(await n[0].arrayBuffer()),
            gainMap: new Uint8Array(await n[1].arrayBuffer()),
            metadata: t,
          };
        },
        Z = (e) =>
          new Promise((t, r) => {
            let n = document.createElement("img");
            (n.onload = () => {
              t(n);
            }),
              (n.onerror = (e) => {
                r(e);
              }),
              (n.src = URL.createObjectURL(e));
          });
      class q extends s.aHM {
        _renderer;
        _renderTargetOptions;
        _internalLoadingManager;
        _config;
        constructor(e, t) {
          super(t),
            (this._config = e),
            e.renderer && (this._renderer = e.renderer),
            (this._internalLoadingManager = new s.KPJ());
        }
        setRenderer(e) {
          return (this._renderer = e), this;
        }
        setRenderTargetOptions(e) {
          return (this._renderTargetOptions = e), this;
        }
        prepareQuadRenderer() {
          this._renderer ||
            console.warn(
              "WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer."
            );
          let e = this._config.createMaterial({
            gainMapMax: [1, 1, 1],
            gainMapMin: [0, 0, 0],
            gamma: [1, 1, 1],
            offsetHdr: [1, 1, 1],
            offsetSdr: [1, 1, 1],
            hdrCapacityMax: 1,
            hdrCapacityMin: 0,
            maxDisplayBoost: 1,
            gainMap: new s.gPd(),
            sdr: new s.gPd(),
          });
          return this._config.createQuadRenderer({
            width: 16,
            height: 16,
            type: s.ix0,
            colorSpace: s.Zr2,
            material: e,
            renderer: this._renderer,
            renderTargetOptions: this._renderTargetOptions,
          });
        }
        async processImages(e, t, r) {
          let n,
            i,
            a = t ? new Blob([t], { type: "image/jpeg" }) : void 0,
            o = new Blob([e], { type: "image/jpeg" }),
            s = !1;
          if ("undefined" == typeof createImageBitmap) {
            let e = await Promise.all([
              a ? Z(a) : Promise.resolve(void 0),
              Z(o),
            ]);
            (i = e[0]), (n = e[1]), (s = "flipY" === r);
          } else {
            let e = await Promise.all([
              a
                ? createImageBitmap(a, { imageOrientation: r || "flipY" })
                : Promise.resolve(void 0),
              createImageBitmap(o, { imageOrientation: r || "flipY" }),
            ]);
            (i = e[0]), (n = e[1]);
          }
          return { sdrImage: n, gainMapImage: i, needsFlip: s };
        }
        createTextures(e, t, r) {
          let n = new s.gPd(
            t || new ImageData(2, 2),
            s.UTZ,
            s.ghU,
            s.ghU,
            s.k6q,
            s.NZq,
            s.GWd,
            s.OUM,
            1,
            s.Zr2
          );
          (n.flipY = r), (n.needsUpdate = !0);
          let i = new s.gPd(
            e,
            s.UTZ,
            s.ghU,
            s.ghU,
            s.k6q,
            s.NZq,
            s.GWd,
            s.OUM,
            1,
            s.er$
          );
          return (i.flipY = r), (i.needsUpdate = !0), { gainMap: n, sdr: i };
        }
        updateQuadRenderer(e, t, r, n, i) {
          (e.width = t.width),
            (e.height = t.height),
            (e.material.gainMap = r),
            (e.material.sdr = n),
            (e.material.gainMapMin = i.gainMapMin),
            (e.material.gainMapMax = i.gainMapMax),
            (e.material.offsetHdr = i.offsetHdr),
            (e.material.offsetSdr = i.offsetSdr),
            (e.material.gamma = i.gamma),
            (e.material.hdrCapacityMin = i.hdrCapacityMin),
            (e.material.hdrCapacityMax = i.hdrCapacityMax),
            (e.material.maxDisplayBoost = Math.pow(2, i.hdrCapacityMax)),
            (e.material.needsUpdate = !0);
        }
      }
      let V = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
        $ = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
      class ee extends s.BKk {
        _maxDisplayBoost;
        _hdrCapacityMin;
        _hdrCapacityMax;
        constructor({
          gamma: e,
          offsetHdr: t,
          offsetSdr: r,
          gainMapMin: n,
          gainMapMax: i,
          maxDisplayBoost: a,
          hdrCapacityMin: o,
          hdrCapacityMax: l,
          sdr: u,
          gainMap: c,
        }) {
          super({
            name: "GainMapDecoderMaterial",
            vertexShader: V,
            fragmentShader: $,
            uniforms: {
              sdr: { value: u },
              gainMap: { value: c },
              gamma: { value: new s.Pq0(1 / e[0], 1 / e[1], 1 / e[2]) },
              offsetHdr: { value: new s.Pq0().fromArray(t) },
              offsetSdr: { value: new s.Pq0().fromArray(r) },
              gainMapMin: { value: new s.Pq0().fromArray(n) },
              gainMapMax: { value: new s.Pq0().fromArray(i) },
              weightFactor: { value: (Math.log2(a) - o) / (l - o) },
            },
            blending: s.XIg,
            depthTest: !1,
            depthWrite: !1,
          }),
            (this._maxDisplayBoost = a),
            (this._hdrCapacityMin = o),
            (this._hdrCapacityMax = l),
            (this.needsUpdate = !0),
            (this.uniformsNeedUpdate = !0);
        }
        get sdr() {
          return this.uniforms.sdr.value;
        }
        set sdr(e) {
          this.uniforms.sdr.value = e;
        }
        get gainMap() {
          return this.uniforms.gainMap.value;
        }
        set gainMap(e) {
          this.uniforms.gainMap.value = e;
        }
        get offsetHdr() {
          return this.uniforms.offsetHdr.value.toArray();
        }
        set offsetHdr(e) {
          this.uniforms.offsetHdr.value.fromArray(e);
        }
        get offsetSdr() {
          return this.uniforms.offsetSdr.value.toArray();
        }
        set offsetSdr(e) {
          this.uniforms.offsetSdr.value.fromArray(e);
        }
        get gainMapMin() {
          return this.uniforms.gainMapMin.value.toArray();
        }
        set gainMapMin(e) {
          this.uniforms.gainMapMin.value.fromArray(e);
        }
        get gainMapMax() {
          return this.uniforms.gainMapMax.value.toArray();
        }
        set gainMapMax(e) {
          this.uniforms.gainMapMax.value.fromArray(e);
        }
        get gamma() {
          let e = this.uniforms.gamma.value;
          return [1 / e.x, 1 / e.y, 1 / e.z];
        }
        set gamma(e) {
          let t = this.uniforms.gamma.value;
          (t.x = 1 / e[0]), (t.y = 1 / e[1]), (t.z = 1 / e[2]);
        }
        get hdrCapacityMin() {
          return this._hdrCapacityMin;
        }
        set hdrCapacityMin(e) {
          (this._hdrCapacityMin = e), this.calculateWeight();
        }
        get hdrCapacityMax() {
          return this._hdrCapacityMax;
        }
        set hdrCapacityMax(e) {
          (this._hdrCapacityMax = e), this.calculateWeight();
        }
        get maxDisplayBoost() {
          return this._maxDisplayBoost;
        }
        set maxDisplayBoost(e) {
          (this._maxDisplayBoost = Math.max(1, Math.min(65504, e))),
            this.calculateWeight();
        }
        calculateWeight() {
          let e =
            (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
            (this._hdrCapacityMax - this._hdrCapacityMin);
          this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
        }
      }
      !l.WebGLRenderer;
      class et extends q {
        constructor(e, t) {
          super(
            {
              renderer: e,
              createMaterial: (e) => new ee(e),
              createQuadRenderer: (e) => new j(e),
            },
            t
          );
        }
        async render(e, t, r, n) {
          let {
              sdrImage: i,
              gainMapImage: a,
              needsFlip: o,
            } = await this.processImages(r, n, "flipY"),
            { gainMap: s, sdr: l } = this.createTextures(i, a, o);
          this.updateQuadRenderer(e, i, s, l, t), e.render();
        }
      }
      class er extends et {
        load([e, t, r], n, i, a) {
          let o,
            l,
            u,
            c = this.prepareQuadRenderer(),
            d = async () => {
              if (o && l && u) {
                try {
                  await this.render(c, u, o, l);
                } catch (n) {
                  this.manager.itemError(e),
                    this.manager.itemError(t),
                    this.manager.itemError(r),
                    "function" == typeof a && a(n),
                    c.disposeOnDemandRenderer();
                  return;
                }
                "function" == typeof n && n(c),
                  this.manager.itemEnd(e),
                  this.manager.itemEnd(t),
                  this.manager.itemEnd(r),
                  c.disposeOnDemandRenderer();
              }
            },
            f = !0,
            h = 0,
            A = 0,
            p = !0,
            m = 0,
            B = 0,
            g = !0,
            v = 0,
            C = 0,
            b = () => {
              "function" == typeof i &&
                i(
                  new ProgressEvent("progress", {
                    lengthComputable: f && p && g,
                    loaded: A + B + C,
                    total: h + m + v,
                  })
                );
            };
          this.manager.itemStart(e),
            this.manager.itemStart(t),
            this.manager.itemStart(r);
          let E = new s.Y9S(this._internalLoadingManager);
          E.setResponseType("arraybuffer"),
            E.setRequestHeader(this.requestHeader),
            E.setPath(this.path),
            E.setWithCredentials(this.withCredentials),
            E.load(
              e,
              async (e) => {
                if ("string" == typeof e) throw Error("Invalid sdr buffer");
                (o = e), await d();
              },
              (e) => {
                (f = e.lengthComputable), (A = e.loaded), (h = e.total), b();
              },
              (t) => {
                this.manager.itemError(e), "function" == typeof a && a(t);
              }
            );
          let y = new s.Y9S(this._internalLoadingManager);
          y.setResponseType("arraybuffer"),
            y.setRequestHeader(this.requestHeader),
            y.setPath(this.path),
            y.setWithCredentials(this.withCredentials),
            y.load(
              t,
              async (e) => {
                if ("string" == typeof e) throw Error("Invalid gainmap buffer");
                (l = e), await d();
              },
              (e) => {
                (p = e.lengthComputable), (B = e.loaded), (m = e.total), b();
              },
              (e) => {
                this.manager.itemError(t), "function" == typeof a && a(e);
              }
            );
          let M = new s.Y9S(this._internalLoadingManager);
          return (
            M.setRequestHeader(this.requestHeader),
            M.setPath(this.path),
            M.setWithCredentials(this.withCredentials),
            M.load(
              r,
              async (e) => {
                if ("string" != typeof e)
                  throw Error("Invalid metadata string");
                (u = JSON.parse(e)), await d();
              },
              (e) => {
                (g = e.lengthComputable), (C = e.loaded), (v = e.total), b();
              },
              (e) => {
                this.manager.itemError(r), "function" == typeof a && a(e);
              }
            ),
            c
          );
        }
      }
      class en extends et {
        load(e, t, r, n) {
          let i = this.prepareQuadRenderer(),
            a = new s.Y9S(this._internalLoadingManager);
          return (
            a.setResponseType("arraybuffer"),
            a.setRequestHeader(this.requestHeader),
            a.setPath(this.path),
            a.setWithCredentials(this.withCredentials),
            this.manager.itemStart(e),
            a.load(
              e,
              async (r) => {
                let a, o, s;
                if ("string" == typeof r)
                  throw Error(
                    "Invalid buffer, received [string], was expecting [ArrayBuffer]"
                  );
                let l = new Uint8Array(r);
                try {
                  let e = await z(l);
                  (a = e.sdr), (o = e.gainMap), (s = e.metadata);
                } catch (t) {
                  if (t instanceof X || t instanceof Q)
                    console.warn(
                      `Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`
                    ),
                      (s = {
                        gainMapMin: [0, 0, 0],
                        gainMapMax: [1, 1, 1],
                        gamma: [1, 1, 1],
                        hdrCapacityMin: 0,
                        hdrCapacityMax: 1,
                        offsetHdr: [0, 0, 0],
                        offsetSdr: [0, 0, 0],
                      }),
                      (a = l);
                  else throw t;
                }
                try {
                  await this.render(i, s, a.buffer, o?.buffer);
                } catch (t) {
                  this.manager.itemError(e),
                    "function" == typeof n && n(t),
                    i.disposeOnDemandRenderer();
                  return;
                }
                "function" == typeof t && t(i),
                  this.manager.itemEnd(e),
                  i.disposeOnDemandRenderer();
              },
              r,
              (t) => {
                this.manager.itemError(e), "function" == typeof n && n(t);
              }
            ),
            i
          );
        }
      }
      let ei = {
          apartment: "lebombo_1k.hdr",
          city: "potsdamer_platz_1k.hdr",
          dawn: "kiara_1_dawn_1k.hdr",
          forest: "forest_slope_1k.hdr",
          lobby: "st_fagans_interior_1k.hdr",
          night: "dikhololo_night_1k.hdr",
          park: "rooitou_park_1k.hdr",
          studio: "studio_small_03_1k.hdr",
          sunset: "venice_sunset_1k.hdr",
          warehouse: "empty_warehouse_01_1k.hdr",
        },
        ea =
          "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",
        eo = (e) => Array.isArray(e),
        es = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
      function el({
        files: e = es,
        path: t = "",
        preset: r,
        colorSpace: n,
        extensions: i,
      } = {}) {
        r && (ed(r), (e = ei[r]), (t = ea));
        let l = eo(e),
          { extension: u, isCubemap: c } = ef(e),
          d = eh(u);
        if (!d)
          throw Error("useEnvironment: Unrecognized file extension: " + e);
        let f = (0, o.C)((e) => e.gl);
        (0, a.useLayoutEffect)(() => {
          ("webp" === u || "jpg" === u || "jpeg" === u) &&
            f.domElement.addEventListener(
              "webglcontextlost",
              function () {
                o.G.clear(d, l ? [e] : e);
              },
              { once: !0 }
            );
        }, [e, f.domElement]);
        let h = (0, o.G)(d, l ? [e] : e, (e) => {
            ("webp" === u || "jpg" === u || "jpeg" === u) && e.setRenderer(f),
              null == e.setPath || e.setPath(t),
              i && i(e);
          }),
          A = l ? h[0] : h;
        if ("jpg" === u || "jpeg" === u || "webp" === u) {
          var p;
          A = null == (p = A.renderTarget) ? void 0 : p.texture;
        }
        return (
          (A.mapping = c ? s.hy7 : s.wfO),
          (A.colorSpace = null != n ? n : c ? "srgb" : "srgb-linear"),
          A
        );
      }
      let eu = { files: es, path: "", preset: void 0, extensions: void 0 };
      el.preload = (e) => {
        let t = { ...eu, ...e },
          { files: r, path: n = "" } = t,
          { preset: i, extensions: a } = t;
        i && (ed(i), (r = ei[i]), (n = ea));
        let { extension: s } = ef(r);
        if ("webp" === s || "jpg" === s || "jpeg" === s)
          throw Error("useEnvironment: Preloading gainmaps is not supported");
        let l = eh(s);
        if (!l)
          throw Error("useEnvironment: Unrecognized file extension: " + r);
        o.G.preload(l, eo(r) ? [r] : r, (e) => {
          null == e.setPath || e.setPath(n), a && a(e);
        });
      };
      let ec = { files: es, preset: void 0 };
      function ed(e) {
        if (!(e in ei))
          throw Error("Preset must be one of: " + Object.keys(ei).join(", "));
      }
      function ef(e) {
        var t;
        let r = eo(e) && 6 === e.length,
          n = eo(e) && 3 === e.length && e.some((e) => e.endsWith("json")),
          i = eo(e) ? e[0] : e;
        return {
          extension: r
            ? "cube"
            : n
            ? "webp"
            : i.startsWith("data:application/exr")
            ? "exr"
            : i.startsWith("data:application/hdr")
            ? "hdr"
            : i.startsWith("data:image/jpeg")
            ? "jpg"
            : null == (t = i.split(".").pop()) ||
              null == (t = t.split("?")) ||
              null == (t = t.shift())
            ? void 0
            : t.toLowerCase(),
          isCubemap: r,
          isGainmap: n,
        };
      }
      function eh(e) {
        return "cube" === e
          ? s.ScU
          : "hdr" === e
          ? d
          : "exr" === e
          ? N
          : "jpg" === e || "jpeg" === e
          ? en
          : "webp" === e
          ? er
          : null;
      }
      function eA(e, t, r, n, i = {}) {
        var a, s, l, u;
        let c, d;
        i = {
          backgroundBlurriness: 0,
          backgroundIntensity: 1,
          backgroundRotation: [0, 0, 0],
          environmentIntensity: 1,
          environmentRotation: [0, 0, 0],
          ...i,
        };
        let f = (d = c = t || r).current && d.current.isScene ? c.current : c,
          h = f.background,
          A = f.environment,
          p = {
            backgroundBlurriness: f.backgroundBlurriness,
            backgroundIntensity: f.backgroundIntensity,
            backgroundRotation:
              null !=
              (a =
                null == (s = f.backgroundRotation) || null == s.clone
                  ? void 0
                  : s.clone())
                ? a
                : [0, 0, 0],
            environmentIntensity: f.environmentIntensity,
            environmentRotation:
              null !=
              (l =
                null == (u = f.environmentRotation) || null == u.clone
                  ? void 0
                  : u.clone())
                ? l
                : [0, 0, 0],
          };
        return (
          "only" !== e && (f.environment = n),
          e && (f.background = n),
          (0, o.s)(f, i),
          () => {
            "only" !== e && (f.environment = A),
              e && (f.background = h),
              (0, o.s)(f, p);
          }
        );
      }
      function ep({ scene: e, background: t = !1, map: r, ...n }) {
        let i = (0, o.C)((e) => e.scene);
        return (
          a.useLayoutEffect(() => {
            if (r) return eA(t, e, i, r, n);
          }),
          null
        );
      }
      function em({
        background: e = !1,
        scene: t,
        blur: r,
        backgroundBlurriness: n,
        backgroundIntensity: i,
        backgroundRotation: s,
        environmentIntensity: l,
        environmentRotation: u,
        ...c
      }) {
        let d = el(c),
          f = (0, o.C)((e) => e.scene);
        return (
          a.useLayoutEffect(() =>
            eA(e, t, f, d, {
              backgroundBlurriness: null != r ? r : n,
              backgroundIntensity: i,
              backgroundRotation: s,
              environmentIntensity: l,
              environmentRotation: u,
            })
          ),
          a.useEffect(
            () => () => {
              d.dispose();
            },
            [d]
          ),
          null
        );
      }
      function eB({
        children: e,
        near: t = 0.1,
        far: r = 1e3,
        resolution: n = 256,
        frames: i = 1,
        map: u,
        background: c = !1,
        blur: d,
        backgroundBlurriness: f,
        backgroundIntensity: h,
        backgroundRotation: A,
        environmentIntensity: p,
        environmentRotation: m,
        scene: B,
        files: g,
        path: v,
        preset: C,
        extensions: b,
      }) {
        let E = (0, o.C)((e) => e.gl),
          y = (0, o.C)((e) => e.scene),
          M = a.useRef(null),
          [w] = a.useState(() => new s.Z58()),
          R = a.useMemo(() => {
            let e = new l.WebGLCubeRenderTarget(n);
            return (e.texture.type = s.ix0), e;
          }, [n]);
        a.useEffect(
          () => () => {
            R.dispose();
          },
          [R]
        ),
          a.useLayoutEffect(() => {
            if (1 === i) {
              let e = E.autoClear;
              (E.autoClear = !0), M.current.update(E, w), (E.autoClear = e);
            }
            return eA(c, B, y, R.texture, {
              backgroundBlurriness: null != d ? d : f,
              backgroundIntensity: h,
              backgroundRotation: A,
              environmentIntensity: p,
              environmentRotation: m,
            });
          }, [e, w, R.texture, B, y, c, i, E]);
        let F = 1;
        return (
          (0, o.D)(() => {
            if (i === 1 / 0 || F < i) {
              let e = E.autoClear;
              (E.autoClear = !0),
                M.current.update(E, w),
                (E.autoClear = e),
                F++;
            }
          }),
          a.createElement(
            a.Fragment,
            null,
            (0, o.o)(
              a.createElement(
                a.Fragment,
                null,
                e,
                a.createElement("cubeCamera", { ref: M, args: [t, r, R] }),
                g || C
                  ? a.createElement(em, {
                      background: !0,
                      files: g,
                      preset: C,
                      path: v,
                      extensions: b,
                    })
                  : u
                  ? a.createElement(ep, {
                      background: !0,
                      map: u,
                      extensions: b,
                    })
                  : null
              ),
              w
            )
          )
        );
      }
      function eg(e) {
        var t, r, n, s;
        let l = el(e),
          u = e.map || l;
        a.useMemo(() => (0, o.e)({ GroundProjectedEnvImpl: c }), []),
          a.useEffect(
            () => () => {
              l.dispose();
            },
            [l]
          );
        let d = a.useMemo(() => [u], [u]),
          f = null == (t = e.ground) ? void 0 : t.height,
          h = null == (r = e.ground) ? void 0 : r.radius,
          A = null != (n = null == (s = e.ground) ? void 0 : s.scale) ? n : 1e3;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(ep, (0, i.A)({}, e, { map: u })),
          a.createElement("groundProjectedEnvImpl", {
            args: d,
            scale: A,
            height: f,
            radius: h,
          })
        );
      }
      function ev(e) {
        return e.ground
          ? a.createElement(eg, e)
          : e.map
          ? a.createElement(ep, e)
          : e.children
          ? a.createElement(eB, e)
          : a.createElement(em, e);
      }
      el.clear = (e) => {
        let t = { ...ec, ...e },
          { files: r } = t,
          { preset: n } = t;
        n && (ed(n), (r = ei[n]));
        let { extension: i } = ef(r),
          a = eh(i);
        if (!a)
          throw Error("useEnvironment: Unrecognized file extension: " + r);
        o.G.clear(a, eo(r) ? [r] : r);
      };
    },
    6979: (e) => {
      "use strict";
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    7007: (e) => {
      "use strict";
      e.exports = (e, t) => {
        if ("string" != typeof e || "string" != typeof t)
          throw TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        let r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    7040: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => l });
      var n = r(9100),
        i = r(8967),
        a = r(7710),
        o = r(5499),
        s = r(6643);
      let l = i.forwardRef(
        (
          {
            sdfGlyphSize: e = 64,
            anchorX: t = "center",
            anchorY: r = "middle",
            font: l,
            fontSize: u = 1,
            children: c,
            characters: d,
            onSync: f,
            ...h
          },
          A
        ) => {
          let p = (0, o.C)(({ invalidate: e }) => e),
            [m] = i.useState(() => new a.EY()),
            [B, g] = i.useMemo(() => {
              let e = [],
                t = "";
              return (
                i.Children.forEach(c, (r) => {
                  "string" == typeof r || "number" == typeof r
                    ? (t += r)
                    : e.push(r);
                }),
                [e, t]
              );
            }, [c]);
          return (
            (0, s.DY)(
              () =>
                new Promise((e) => (0, a.PY)({ font: l, characters: d }, e)),
              ["troika-text", l, d]
            ),
            i.useLayoutEffect(
              () =>
                void m.sync(() => {
                  p(), f && f(m);
                })
            ),
            i.useEffect(() => () => m.dispose(), [m]),
            i.createElement(
              "primitive",
              (0, n.A)(
                {
                  object: m,
                  ref: A,
                  font: l,
                  text: g,
                  anchorX: t,
                  anchorY: r,
                  fontSize: u,
                  sdfGlyphSize: e,
                },
                h
              ),
              B
            )
          );
        }
      );
    },
    7062: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => l });
      var n = r(8967),
        i = r(9372);
      let a = (e) => {
          let t,
            r = new Set(),
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  r.forEach((r) => r(t, e));
              }
            },
            i = () => t,
            a = {
              setState: n,
              getState: i,
              getInitialState: () => o,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            o = (t = e(n, i, a));
          return a;
        },
        { useSyncExternalStoreWithSelector: o } = i,
        s = (e, t) => {
          let r = ((e) => (e ? a(e) : a))(e),
            i = (e, i = t) =>
              (function (e, t = (e) => e, r) {
                let i = o(e.subscribe, e.getState, e.getInitialState, t, r);
                return n.useDebugValue(i), i;
              })(r, e, i);
          return Object.assign(i, r), i;
        },
        l = (e, t) => (e ? s(e, t) : s);
    },
    7139: (e, t, r) => {
      "use strict";
      let n = r(6979),
        i = r(4063),
        a = r(7007),
        o = r(443);
      function s(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function l(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function u(e, t) {
        return t.decode ? i(e) : e;
      }
      function c(e) {
        let t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function d(e) {
        let t = (e = c(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : t.parseBooleans &&
              null !== e &&
              ("true" === e.toLowerCase() || "false" === e.toLowerCase()) &&
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function h(e, t) {
        s(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        let r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  if (
                    ((t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    !t)
                  ) {
                    n[e] = r;
                    return;
                  }
                  void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  if (
                    ((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), !t)
                  ) {
                    n[e] = r;
                    return;
                  }
                  if (void 0 === n[e]) {
                    n[e] = [r];
                    return;
                  }
                  n[e] = [].concat(n[e], r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  let i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    a =
                      "string" == typeof r &&
                      !i &&
                      u(r, e).includes(e.arrayFormatSeparator);
                  r = a ? u(r, e) : r;
                  let o =
                    i || a
                      ? r.split(e.arrayFormatSeparator).map((t) => u(t, e))
                      : null === r
                      ? r
                      : u(r, e);
                  n[t] = o;
                };
              default:
                return (e, t, r) => {
                  if (void 0 === r[e]) {
                    r[e] = t;
                    return;
                  }
                  r[e] = [].concat(r[e], t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, "")))
          return n;
        for (let i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = a(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator"].includes(t.arrayFormat)
              ? o
              : u(o, t)),
            r(u(e, t), o, n);
        }
        for (let e of Object.keys(n)) {
          let r = n[e];
          if ("object" == typeof r && null !== r)
            for (let e of Object.keys(r)) r[e] = f(r[e], t);
          else n[e] = f(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              let r = n[t];
              return (
                r && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : "object" == typeof t
                        ? e(Object.keys(t))
                            .sort((e, t) => Number(e) - Number(t))
                            .map((e) => t[e])
                        : t;
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = h),
        (t.stringify = (e, t) => {
          if (!e) return "";
          s(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          let r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    let i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, l(t, e) + "[" + i + "]"]
                      : [...r, l(t, e) + "[" + l(i, e) + "]=" + l(n, e)];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, l(t, e) + "[]"]
                      : [...r, l(t, e) + "[]=" + l(n, e)];
                case "comma":
                case "separator":
                  return (t) => (r, n) =>
                    null == n || 0 === n.length
                      ? r
                      : 0 === r.length
                      ? [l(t, e) + "=" + l(n, e)]
                      : [[r, l(n, e)].join(e.arrayFormatSeparator)];
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, l(t, e)]
                      : [...r, l(t, e) + "=" + l(n, e)];
              }
            })(t),
            i = {};
          for (let t of Object.keys(e)) r(t) || (i[t] = e[t]);
          let a = Object.keys(i);
          return (
            !1 !== t.sort && a.sort(t.sort),
            a
              .map((r) => {
                let i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? l(r, t)
                  : Array.isArray(i)
                  ? i.reduce(n(r), []).join("&")
                  : l(r, t) + "=" + l(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          let [r, n] = a(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: h(d(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: u(n, t) }
              : {}
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0 }, r);
          let n = c(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            a = Object.assign(t.parse(i, { sort: !1 }), e.query),
            o = t.stringify(a, r);
          o && (o = `?${o}`);
          let s = (function (e) {
            let t = "",
              r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier && (s = `#${l(e.fragmentIdentifier, r)}`),
            `${n}${o}${s}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0 }, n);
          let { url: i, query: a, fragmentIdentifier: s } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(a, r), fragmentIdentifier: s },
            n
          );
        }),
        (t.exclude = (e, r, n) => {
          let i = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    7630: (e, t, r) => {
      "use strict";
      e.exports = r(655);
    },
    7655: (e) => {
      let t = new Proxy(
        {},
        {
          get: function (e, t) {
            return e.hasOwnProperty(t) || (e[t] = i(t)), e[t];
          },
        }
      );
      class r extends Array {
        constructor(e, t) {
          if (
            !(t = (function e(t) {
              return t instanceof Array &&
                1 === t.length &&
                t[0] instanceof Array
                ? e(t[0])
                : t;
            })(t)).every((e) => "Number" === u(e))
          )
            throw TypeError("All arguments must be numbers.");
          if (t.length > 1 && t.length !== e)
            throw Error(
              "Argument list must be empty, have a single number, or have a length equal to the dimension."
            );
          0 === t.length && (t = [0]),
            1 === t.length && "Number" === u(t[0]) && (t = Array(e).fill(t[0])),
            e > 1 ? super(...t) : (super(1), (this[0] = t[0])),
            Reflect.defineProperty(this, "pop", {
              value: void 0,
              enumerable: !1,
            }),
            Reflect.defineProperty(this, "push", {
              value: void 0,
              enumerable: !1,
            }),
            Reflect.defineProperty(this, "shift", {
              value: void 0,
              enumerable: !1,
            }),
            Reflect.defineProperty(this, "unshift", {
              value: void 0,
              enumerable: !1,
            });
        }
        get magnitude() {
          return this.pnorm(2);
        }
        div(e) {
          s(e, this.dim, !0),
            "Number" === u(e) && (e = Array(this.dim).fill(e));
          let r = [];
          for (let t = 0; t < this.length; ++t) r[t] = this[t] / e[t];
          return t[this.dim](r);
        }
        minus(e) {
          s(e, this.dim, !0),
            "Number" === u(e) && (e = Array(this.dim).fill(e));
          let r = [];
          for (let t = 0; t < this.dim; ++t) r[t] = this[t] - e[t];
          return t[this.dim](r);
        }
        neg() {
          return t[this.dim](this.times(-1));
        }
        plus(e) {
          s(e, this.dim, !0),
            "Number" === u(e) && (e = Array(this.dim).fill(e));
          let r = [];
          for (let t = 0; t < this.dim; ++t) r[t] = this[t] + e[t];
          return t[this.dim](r);
        }
        pow(e) {
          let r = [];
          for (let t = 0; t < this.dim; ++t) r[t] = Math.pow(this[t], e);
          return t[this.dim](r);
        }
        times(e) {
          s(e, this.dim, !0),
            "Number" === u(e) && (e = Array(this.dim).fill(e));
          let r = [];
          for (let t = 0; t < this.dim; ++t) r[t] = this[t] * e[t];
          return t[this.dim](r);
        }
        dot(e) {
          s(e, this.dim);
          let t = 0;
          for (let r = 0; r < this.dim; ++r) t += this[r] * e[r];
          return t;
        }
        normalize() {
          return this.div(this.magnitude);
        }
        pnorm(e) {
          let t = 0;
          for (let r = 0; r < this.dim; ++r)
            t += Math.pow(Math.abs(this[r]), e);
          return Math.pow(t, 1 / e);
        }
        reflect(e) {
          let t = e.normalize();
          return this.minus(t.times(2 * this.dot(t)));
        }
        argmax() {
          let e = this.max();
          return this.reduce((t, r, n) => (r === e ? t.concat([n]) : t), []);
        }
        argmin() {
          let e = this.min();
          return this.reduce((t, r, n) => (r === e ? t.concat([n]) : t), []);
        }
        choose(e) {
          if (!Array.isArray(e))
            throw TypeError("Argument must be a list of indices.");
          if (!e.every((e) => e < this.dim && l(e.toString())))
            throw RangeError("All elements of argument must be valid indices.");
          let r = [];
          return e.forEach((e) => r.push(this[e])), t[r.length](r);
        }
        copy() {
          return t[this.dim](this);
        }
        equals(e) {
          return e.length === this.dim && e.every((e, t) => this[t] === e);
        }
        approximatelyEquals(e, t = 1e-8) {
          return (
            e.length === this.dim &&
            e.every((e, r) => Math.abs(this[r] - e) < t)
          );
        }
        max() {
          return Math.max(...this);
        }
        min() {
          return Math.min(...this);
        }
        sum() {
          return this.reduce((e, t) => e + t, 0);
        }
        toArray() {
          return Array.from(this);
        }
        concat(...e) {
          let r = super.concat.apply(this.toArray(), e);
          return t[r.length](r);
        }
        filter(...e) {
          let r = super.filter.apply(this.toArray(), e);
          return r.length > 0 ? t[r.length](r) : r;
        }
        map(...e) {
          let t = super.map(...e);
          return t.every((e) => "Number" === u(e)) ? t : t.toArray();
        }
        slice(...e) {
          let r = super.slice.apply(this.toArray(), e);
          return r.length > 0 ? t[r.length](r) : r;
        }
        splice(...e) {
          let t = this.toArray();
          if ((t.splice(...e), t.length !== this.dim))
            throw Error("All removed elements must be replaced.");
          if (!t.every((e) => "Number" === u(e)))
            throw TypeError("All elements must be numbers.");
          t.forEach((e, t) => {
            this[t] = e;
          });
        }
        toString() {
          return (
            this.reduce(
              (e, t, r) => e + t + (r === this.dim - 1 ? " " : ", "),
              "[ "
            ) + "]"
          );
        }
      }
      let n = {
        set: function (e, t, r) {
          if ("length" === t) return !1;
          if (l(t))
            if (Number(t) >= e.dim)
              throw RangeError(
                "Vector may not have more elements than dimension."
              );
            else if ("Number" === u(r)) return (e[t] = r), !0;
            else throw TypeError("Vectors may only contain numbers.");
          let n = o(t.toString());
          return (
            e.dim <= 4 &&
            !!n &&
            ((function (e, t, r, n) {
              if (1 === t.length) {
                if ("Number" !== u(n)) throw TypeError("Must set to a number");
                e[r[t]] = n;
                return;
              }
              if (!Array.isArray(n))
                throw TypeError("Right-hand side must be an array.");
              if (t.length !== n.length)
                throw TypeError("Right-hand side must have matching length.");
              if (!n.every((e) => "Number" === u(e)))
                throw TypeError("All new values must be numbers.");
              if (t.split("").some((t) => r[t] >= e.dim)) return;
              let i = !0;
              for (let e = 0, r = {}; e < t.length; ++e) {
                if (r.hasOwnProperty(t[e])) {
                  i = !1;
                  break;
                }
                r[t[e]] = !0;
              }
              if (!i)
                throw SyntaxError(
                  "Swizzle assignment does not allow symbols to be repeated."
                );
              t.split("")
                .map((e) => r[e])
                .forEach((t, r) => {
                  e[t] = n[r];
                });
            })(e, t.toString(), n, r),
            !0)
          );
        },
        get: function (e, r) {
          let n = o(r.toString());
          return e.dim <= 4 && n
            ? (function (e, r, n) {
                let i = r.length;
                if (1 === i) return e[n[r]];
                let a = r.split("").reduce((t, r) => {
                  let i = n[r];
                  return t && i < e.dim ? t.concat([e[i]]) : void 0;
                }, []);
                return a ? new t[i](...a) : void 0;
              })(e, r, n)
            : e[r];
        },
      };
      function i(e) {
        if (!((e = Number(e)) in t)) {
          if (isNaN(e))
            throw TypeError("Dimension must be coercible to a number.");
          if (e <= 0 || !Number.isInteger(e))
            throw RangeError("Dimension must be positive.");
          let i = "vec" + e,
            a = {
              [i]: class extends r {
                constructor(...t) {
                  if (1 === t.length && t[0] instanceof r) {
                    if (t[0].dim > e) throw TypeError("Cannot demote vectors.");
                    t = (function (e, t) {
                      return [...Array(t)].map((t, r) =>
                        r < e.length ? e[r] : 0
                      );
                    })(t[0].toArray(), e);
                  }
                  super(e, t),
                    Reflect.defineProperty(this, "dim", {
                      value: e,
                      writable: !1,
                      enumerable: !1,
                    });
                }
              },
            }[i];
          t[e] = function (...e) {
            let t = new a(...e);
            return Object.preventExtensions(t), new Proxy(t, n);
          };
        }
        return t[e];
      }
      let a = [
        { x: 0, y: 1, z: 2, w: 3 },
        { r: 0, g: 1, b: 2, a: 3 },
        { s: 0, t: 1, p: 2, q: 3 },
      ];
      function o(e) {
        return a.find((t) => e.split("").every((e) => e in t));
      }
      function s(e, t, r = !1) {
        if (!r || "Number" !== u(e)) {
          if (!e.length || e.length !== t)
            throw TypeError(
              `Invalid argument. Input must have matching dimension${
                r ? "or be a scalar" : ""
              }.`
            );
        }
      }
      function l(e) {
        return (
          !isNaN(e) &&
          Number(e).toString() === e &&
          Number.isInteger(Number(e)) &&
          Number(e) >= 0
        );
      }
      function u(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      e.exports = {
        getVecType: i,
        isVec: function (e) {
          return e instanceof r;
        },
        vec2: t[2],
        vec3: t[3],
        vec4: t[4],
        add: function (...e) {
          let r = e[0].dim;
          if (!e.every((e) => e.dim === r))
            throw TypeError("All vectors must have the same dimension.");
          return e.reduce((e, t) => e.plus(t), t[r]());
        },
        multiply: function (...e) {
          let r = e[0].dim;
          if (!e.every((e) => e.dim === r))
            throw TypeError("All vectors must have the same dimension.");
          return e.reduce((e, t) => e.times(t), t[r](1));
        },
        lerp: function (e, t, r) {
          if (e.dim !== t.dim)
            throw TypeError("Vectors must have the same dimension.");
          return (r = r < 0 ? 0 : r > 1 ? 1 : r), e.plus(t.minus(e).times(r));
        },
        slerp: function (e, t, r) {
          if (e.dim !== t.dim)
            throw TypeError("Vectors must have the same dimension.");
          r = r < 0 ? 0 : r > 1 ? 1 : r;
          let n = e.normalize().dot(t.normalize()),
            i = Math.acos((n = n < -1 ? -1 : n > 1 ? 1 : n)) * r,
            a = t.minus(e.times(n)).normalize(),
            o = e.magnitude + (t.magnitude - e.magnitude) * r;
          return e
            .times(Math.cos(i))
            .plus(a.times(Math.sin(i)))
            .normalize()
            .times(o);
        },
      };
    },
    7871: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { p: () => eu }), r(8967);
      var i = r(9671);
      let a = new WeakMap();
      class o extends i.aHM {
        constructor(e) {
          super(e),
            (this.decoderPath = ""),
            (this.decoderConfig = {}),
            (this.decoderBinary = null),
            (this.decoderPending = null),
            (this.workerLimit = 4),
            (this.workerPool = []),
            (this.workerNextTaskID = 1),
            (this.workerSourceURL = ""),
            (this.defaultAttributeIDs = {
              position: "POSITION",
              normal: "NORMAL",
              color: "COLOR",
              uv: "TEX_COORD",
            }),
            (this.defaultAttributeTypes = {
              position: "Float32Array",
              normal: "Float32Array",
              color: "Float32Array",
              uv: "Float32Array",
            });
        }
        setDecoderPath(e) {
          return (this.decoderPath = e), this;
        }
        setDecoderConfig(e) {
          return (this.decoderConfig = e), this;
        }
        setWorkerLimit(e) {
          return (this.workerLimit = e), this;
        }
        load(e, t, r, n) {
          let a = new i.Y9S(this.manager);
          a.setPath(this.path),
            a.setResponseType("arraybuffer"),
            a.setRequestHeader(this.requestHeader),
            a.setWithCredentials(this.withCredentials),
            a.load(
              e,
              (e) => {
                let r = {
                  attributeIDs: this.defaultAttributeIDs,
                  attributeTypes: this.defaultAttributeTypes,
                  useUniqueIDs: !1,
                };
                this.decodeGeometry(e, r).then(t).catch(n);
              },
              r,
              n
            );
        }
        decodeDracoFile(e, t, r, n) {
          let i = {
            attributeIDs: r || this.defaultAttributeIDs,
            attributeTypes: n || this.defaultAttributeTypes,
            useUniqueIDs: !!r,
          };
          this.decodeGeometry(e, i).then(t);
        }
        decodeGeometry(e, t) {
          let r;
          for (let e in t.attributeTypes) {
            let r = t.attributeTypes[e];
            void 0 !== r.BYTES_PER_ELEMENT && (t.attributeTypes[e] = r.name);
          }
          let n = JSON.stringify(t);
          if (a.has(e)) {
            let t = a.get(e);
            if (t.key === n) return t.promise;
            if (0 === e.byteLength)
              throw Error(
                "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
              );
          }
          let i = this.workerNextTaskID++,
            o = e.byteLength,
            s = this._getWorker(i, o)
              .then(
                (n) => (
                  (r = n),
                  new Promise((n, a) => {
                    (r._callbacks[i] = { resolve: n, reject: a }),
                      r.postMessage(
                        { type: "decode", id: i, taskConfig: t, buffer: e },
                        [e]
                      );
                  })
                )
              )
              .then((e) => this._createGeometry(e.geometry));
          return (
            s
              .catch(() => !0)
              .then(() => {
                r && i && this._releaseTask(r, i);
              }),
            a.set(e, { key: n, promise: s }),
            s
          );
        }
        _createGeometry(e) {
          let t = new i.LoY();
          e.index && t.setIndex(new i.THS(e.index.array, 1));
          for (let r = 0; r < e.attributes.length; r++) {
            let n = e.attributes[r],
              a = n.name,
              o = n.array,
              s = n.itemSize;
            t.setAttribute(a, new i.THS(o, s));
          }
          return t;
        }
        _loadLibrary(e, t) {
          let r = new i.Y9S(this.manager);
          return (
            r.setPath(this.decoderPath),
            r.setResponseType(t),
            r.setWithCredentials(this.withCredentials),
            new Promise((t, n) => {
              r.load(e, t, void 0, n);
            })
          );
        }
        preload() {
          return this._initDecoder(), this;
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          let e =
              "object" != typeof WebAssembly ||
              "js" === this.decoderConfig.type,
            t = [];
          return (
            e
              ? t.push(this._loadLibrary("draco_decoder.js", "text"))
              : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
                t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
            (this.decoderPending = Promise.all(t).then((t) => {
              let r = t[0];
              e || (this.decoderConfig.wasmBinary = t[1]);
              let n = s.toString(),
                i = [
                  "/* draco decoder */",
                  r,
                  "\n/* worker */",
                  n.substring(n.indexOf("{") + 1, n.lastIndexOf("}")),
                ].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([i]));
            })),
            this.decoderPending
          );
        }
        _getWorker(e, t) {
          return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
              let e = new Worker(this.workerSourceURL);
              (e._callbacks = {}),
                (e._taskCosts = {}),
                (e._taskLoad = 0),
                e.postMessage({
                  type: "init",
                  decoderConfig: this.decoderConfig,
                }),
                (e.onmessage = function (t) {
                  let r = t.data;
                  switch (r.type) {
                    case "decode":
                      e._callbacks[r.id].resolve(r);
                      break;
                    case "error":
                      e._callbacks[r.id].reject(r);
                      break;
                    default:
                      console.error(
                        'THREE.DRACOLoader: Unexpected message, "' +
                          r.type +
                          '"'
                      );
                  }
                }),
                this.workerPool.push(e);
            } else
              this.workerPool.sort(function (e, t) {
                return e._taskLoad > t._taskLoad ? -1 : 1;
              });
            let r = this.workerPool[this.workerPool.length - 1];
            return (r._taskCosts[e] = t), (r._taskLoad += t), r;
          });
        }
        _releaseTask(e, t) {
          (e._taskLoad -= e._taskCosts[t]),
            delete e._callbacks[t],
            delete e._taskCosts[t];
        }
        debug() {
          console.log(
            "Task load: ",
            this.workerPool.map((e) => e._taskLoad)
          );
        }
        dispose() {
          for (let e = 0; e < this.workerPool.length; ++e)
            this.workerPool[e].terminate();
          return (this.workerPool.length = 0), this;
        }
      }
      function s() {
        let e, t;
        onmessage = function (r) {
          let n = r.data;
          switch (n.type) {
            case "init":
              (e = n.decoderConfig),
                (t = new Promise(function (t) {
                  (e.onModuleLoaded = function (e) {
                    t({ draco: e });
                  }),
                    DracoDecoderModule(e);
                }));
              break;
            case "decode":
              let i = n.buffer,
                a = n.taskConfig;
              t.then((e) => {
                let t = e.draco,
                  r = new t.Decoder(),
                  o = new t.DecoderBuffer();
                o.Init(new Int8Array(i), i.byteLength);
                try {
                  let e = (function (e, t, r, n) {
                      let i,
                        a,
                        o = n.attributeIDs,
                        s = n.attributeTypes,
                        l = t.GetEncodedGeometryType(r);
                      if (l === e.TRIANGULAR_MESH)
                        (i = new e.Mesh()), (a = t.DecodeBufferToMesh(r, i));
                      else if (l === e.POINT_CLOUD)
                        (i = new e.PointCloud()),
                          (a = t.DecodeBufferToPointCloud(r, i));
                      else
                        throw Error(
                          "THREE.DRACOLoader: Unexpected geometry type."
                        );
                      if (!a.ok() || 0 === i.ptr)
                        throw Error(
                          "THREE.DRACOLoader: Decoding failed: " + a.error_msg()
                        );
                      let u = { index: null, attributes: [] };
                      for (let r in o) {
                        let a,
                          l,
                          c = self[s[r]];
                        if (n.useUniqueIDs)
                          (l = o[r]), (a = t.GetAttributeByUniqueId(i, l));
                        else {
                          if (-1 === (l = t.GetAttributeId(i, e[o[r]])))
                            continue;
                          a = t.GetAttribute(i, l);
                        }
                        u.attributes.push(
                          (function (e, t, r, n, i, a) {
                            let o = a.num_components(),
                              s = r.num_points() * o,
                              l = s * i.BYTES_PER_ELEMENT,
                              u = (function (e, t) {
                                switch (t) {
                                  case Float32Array:
                                    return e.DT_FLOAT32;
                                  case Int8Array:
                                    return e.DT_INT8;
                                  case Int16Array:
                                    return e.DT_INT16;
                                  case Int32Array:
                                    return e.DT_INT32;
                                  case Uint8Array:
                                    return e.DT_UINT8;
                                  case Uint16Array:
                                    return e.DT_UINT16;
                                  case Uint32Array:
                                    return e.DT_UINT32;
                                }
                              })(e, i),
                              c = e._malloc(l);
                            t.GetAttributeDataArrayForAllPoints(r, a, u, l, c);
                            let d = new i(e.HEAPF32.buffer, c, s).slice();
                            return (
                              e._free(c), { name: n, array: d, itemSize: o }
                            );
                          })(e, t, i, r, c, a)
                        );
                      }
                      return (
                        l === e.TRIANGULAR_MESH &&
                          (u.index = (function (e, t, r) {
                            let n = 3 * r.num_faces(),
                              i = 4 * n,
                              a = e._malloc(i);
                            t.GetTrianglesUInt32Array(r, i, a);
                            let o = new Uint32Array(
                              e.HEAPF32.buffer,
                              a,
                              n
                            ).slice();
                            return e._free(a), { array: o, itemSize: 1 };
                          })(e, t, i)),
                        e.destroy(i),
                        u
                      );
                    })(t, r, o, a),
                    i = e.attributes.map((e) => e.array.buffer);
                  e.index && i.push(e.index.array.buffer),
                    self.postMessage(
                      { type: "decode", id: n.id, geometry: e },
                      i
                    );
                } catch (e) {
                  console.error(e),
                    self.postMessage({
                      type: "error",
                      id: n.id,
                      error: e.message,
                    });
                } finally {
                  t.destroy(o), t.destroy(r);
                }
              });
          }
        };
      }
      function l(e, t) {
        if (t === i.RJ4)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            e
          );
        if (t !== i.rYR && t !== i.O49)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              t
            ),
            e
          );
        {
          let r = e.getIndex();
          if (null === r) {
            let t = [],
              n = e.getAttribute("position");
            if (void 0 === n)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                e
              );
            for (let e = 0; e < n.count; e++) t.push(e);
            e.setIndex(t), (r = e.getIndex());
          }
          let n = r.count - 2,
            a = [];
          if (r)
            if (t === i.rYR)
              for (let e = 1; e <= n; e++)
                a.push(r.getX(0)), a.push(r.getX(e)), a.push(r.getX(e + 1));
            else
              for (let e = 0; e < n; e++)
                e % 2 == 0
                  ? (a.push(r.getX(e)),
                    a.push(r.getX(e + 1)),
                    a.push(r.getX(e + 2)))
                  : (a.push(r.getX(e + 2)),
                    a.push(r.getX(e + 1)),
                    a.push(r.getX(e)));
          a.length / 3 !== n &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let o = e.clone();
          return o.setIndex(a), o.clearGroups(), o;
        }
      }
      var u = r(3536);
      function c(e) {
        if ("undefined" != typeof TextDecoder)
          return new TextDecoder().decode(e);
        let t = "";
        for (let r = 0, n = e.length; r < n; r++)
          t += String.fromCharCode(e[r]);
        try {
          return decodeURIComponent(escape(t));
        } catch (e) {
          return t;
        }
      }
      let d = "srgb",
        f = "srgb-linear";
      class h extends i.aHM {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new v(e);
            }),
            this.register(function (e) {
              return new C(e);
            }),
            this.register(function (e) {
              return new T(e);
            }),
            this.register(function (e) {
              return new x(e);
            }),
            this.register(function (e) {
              return new D(e);
            }),
            this.register(function (e) {
              return new E(e);
            }),
            this.register(function (e) {
              return new y(e);
            }),
            this.register(function (e) {
              return new M(e);
            }),
            this.register(function (e) {
              return new w(e);
            }),
            this.register(function (e) {
              return new g(e);
            }),
            this.register(function (e) {
              return new R(e);
            }),
            this.register(function (e) {
              return new b(e);
            }),
            this.register(function (e) {
              return new I(e);
            }),
            this.register(function (e) {
              return new F(e);
            }),
            this.register(function (e) {
              return new m(e);
            }),
            this.register(function (e) {
              return new G(e);
            }),
            this.register(function (e) {
              return new S(e);
            });
        }
        load(e, t, r, n) {
          let a,
            o = this;
          if ("" !== this.resourcePath) a = this.resourcePath;
          else if ("" !== this.path) {
            let t = i.r6x.extractUrlBase(e);
            a = i.r6x.resolveURL(t, this.path);
          } else a = i.r6x.extractUrlBase(e);
          this.manager.itemStart(e);
          let s = function (t) {
              n ? n(t) : console.error(t),
                o.manager.itemError(e),
                o.manager.itemEnd(e);
            },
            l = new i.Y9S(this.manager);
          l.setPath(this.path),
            l.setResponseType("arraybuffer"),
            l.setRequestHeader(this.requestHeader),
            l.setWithCredentials(this.withCredentials),
            l.load(
              e,
              function (r) {
                try {
                  o.parse(
                    r,
                    a,
                    function (r) {
                      t(r), o.manager.itemEnd(e);
                    },
                    s
                  );
                } catch (e) {
                  s(e);
                }
              },
              r,
              s
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setDDSLoader() {
          throw Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, r, n) {
          let i,
            a = {},
            o = {};
          if ("string" == typeof e) i = JSON.parse(e);
          else if (e instanceof ArrayBuffer)
            if (c(new Uint8Array(e.slice(0, 4))) === H) {
              try {
                a[p.KHR_BINARY_GLTF] = new O(e);
              } catch (e) {
                n && n(e);
                return;
              }
              i = JSON.parse(a[p.KHR_BINARY_GLTF].content);
            } else i = JSON.parse(c(new Uint8Array(e)));
          else i = e;
          if (void 0 === i.asset || i.asset.version[0] < 2) {
            n &&
              n(
                Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              );
            return;
          }
          let s = new en(i, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          s.fileLoader.setRequestHeader(this.requestHeader);
          for (let e = 0; e < this.pluginCallbacks.length; e++) {
            let t = this.pluginCallbacks[e](s);
            t.name ||
              console.error(
                "THREE.GLTFLoader: Invalid plugin found: missing name"
              ),
              (o[t.name] = t),
              (a[t.name] = !0);
          }
          if (i.extensionsUsed)
            for (let e = 0; e < i.extensionsUsed.length; ++e) {
              let t = i.extensionsUsed[e],
                r = i.extensionsRequired || [];
              switch (t) {
                case p.KHR_MATERIALS_UNLIT:
                  a[t] = new B();
                  break;
                case p.KHR_DRACO_MESH_COMPRESSION:
                  a[t] = new L(i, this.dracoLoader);
                  break;
                case p.KHR_TEXTURE_TRANSFORM:
                  a[t] = new U();
                  break;
                case p.KHR_MESH_QUANTIZATION:
                  a[t] = new P();
                  break;
                default:
                  r.indexOf(t) >= 0 &&
                    void 0 === o[t] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + t + '".'
                    );
              }
            }
          s.setExtensions(a), s.setPlugins(o), s.parse(r, n);
        }
        parseAsync(e, t) {
          let r = this;
          return new Promise(function (n, i) {
            r.parse(e, t, n, i);
          });
        }
      }
      function A() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, r) {
            e[t] = r;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      let p = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
      };
      class m {
        constructor(e) {
          (this.parser = e),
            (this.name = p.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          let e = this.parser,
            t = this.parser.json.nodes || [];
          for (let r = 0, n = t.length; r < n; r++) {
            let n = t[r];
            n.extensions &&
              n.extensions[this.name] &&
              void 0 !== n.extensions[this.name].light &&
              e._addNodeRef(this.cache, n.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          let t,
            r = this.parser,
            n = "light:" + e,
            a = r.cache.get(n);
          if (a) return a;
          let o = r.json,
            s = (((o.extensions && o.extensions[this.name]) || {}).lights ||
              [])[e],
            l = new i.Q1f(0xffffff);
          void 0 !== s.color && l.setRGB(s.color[0], s.color[1], s.color[2], f);
          let u = void 0 !== s.range ? s.range : 0;
          switch (s.type) {
            case "directional":
              (t = new i.ZyN(l)).target.position.set(0, 0, -1), t.add(t.target);
              break;
            case "point":
              (t = new i.HiM(l)).distance = u;
              break;
            case "spot":
              ((t = new i.nCl(l)).distance = u),
                (s.spot = s.spot || {}),
                (s.spot.innerConeAngle =
                  void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
                (s.spot.outerConeAngle =
                  void 0 !== s.spot.outerConeAngle
                    ? s.spot.outerConeAngle
                    : Math.PI / 4),
                (t.angle = s.spot.outerConeAngle),
                (t.penumbra =
                  1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
                t.target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            default:
              throw Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
          }
          return (
            t.position.set(0, 0, 0),
            (t.decay = 2),
            $(t, s),
            void 0 !== s.intensity && (t.intensity = s.intensity),
            (t.name = r.createUniqueName(s.name || "light_" + e)),
            (a = Promise.resolve(t)),
            r.cache.add(n, a),
            a
          );
        }
        getDependency(e, t) {
          if ("light" === e) return this._loadLight(t);
        }
        createNodeAttachment(e) {
          let t = this,
            r = this.parser,
            n = r.json.nodes[e],
            i = ((n.extensions && n.extensions[this.name]) || {}).light;
          return void 0 === i
            ? null
            : this._loadLight(i).then(function (e) {
                return r._getNodeRef(t.cache, i, e);
              });
        }
      }
      class B {
        constructor() {
          this.name = p.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return i.V9B;
        }
        extendParams(e, t, r) {
          let n = [];
          (e.color = new i.Q1f(1, 1, 1)), (e.opacity = 1);
          let a = t.pbrMetallicRoughness;
          if (a) {
            if (Array.isArray(a.baseColorFactor)) {
              let t = a.baseColorFactor;
              e.color.setRGB(t[0], t[1], t[2], f), (e.opacity = t[3]);
            }
            void 0 !== a.baseColorTexture &&
              n.push(r.assignTexture(e, "map", a.baseColorTexture, d));
          }
          return Promise.all(n);
        }
      }
      class g {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(e, t) {
          let r = this.parser.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let n = r.extensions[this.name].emissiveStrength;
          return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
        }
      }
      class v {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let a = [],
            o = n.extensions[this.name];
          if (
            (void 0 !== o.clearcoatFactor && (t.clearcoat = o.clearcoatFactor),
            void 0 !== o.clearcoatTexture &&
              a.push(r.assignTexture(t, "clearcoatMap", o.clearcoatTexture)),
            void 0 !== o.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = o.clearcoatRoughnessFactor),
            void 0 !== o.clearcoatRoughnessTexture &&
              a.push(
                r.assignTexture(
                  t,
                  "clearcoatRoughnessMap",
                  o.clearcoatRoughnessTexture
                )
              ),
            void 0 !== o.clearcoatNormalTexture &&
              (a.push(
                r.assignTexture(
                  t,
                  "clearcoatNormalMap",
                  o.clearcoatNormalTexture
                )
              ),
              void 0 !== o.clearcoatNormalTexture.scale))
          ) {
            let e = o.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new i.I9Y(e, e);
          }
          return Promise.all(a);
        }
      }
      class C {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_DISPERSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let n = r.extensions[this.name];
          return (
            (t.dispersion = void 0 !== n.dispersion ? n.dispersion : 0),
            Promise.resolve()
          );
        }
      }
      class b {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let i = [],
            a = n.extensions[this.name];
          return (
            void 0 !== a.iridescenceFactor &&
              (t.iridescence = a.iridescenceFactor),
            void 0 !== a.iridescenceTexture &&
              i.push(
                r.assignTexture(t, "iridescenceMap", a.iridescenceTexture)
              ),
            void 0 !== a.iridescenceIor &&
              (t.iridescenceIOR = a.iridescenceIor),
            void 0 === t.iridescenceThicknessRange &&
              (t.iridescenceThicknessRange = [100, 400]),
            void 0 !== a.iridescenceThicknessMinimum &&
              (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
            void 0 !== a.iridescenceThicknessMaximum &&
              (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
            void 0 !== a.iridescenceThicknessTexture &&
              i.push(
                r.assignTexture(
                  t,
                  "iridescenceThicknessMap",
                  a.iridescenceThicknessTexture
                )
              ),
            Promise.all(i)
          );
        }
      }
      class E {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let a = [];
          (t.sheenColor = new i.Q1f(0, 0, 0)),
            (t.sheenRoughness = 0),
            (t.sheen = 1);
          let o = n.extensions[this.name];
          if (void 0 !== o.sheenColorFactor) {
            let e = o.sheenColorFactor;
            t.sheenColor.setRGB(e[0], e[1], e[2], f);
          }
          return (
            void 0 !== o.sheenRoughnessFactor &&
              (t.sheenRoughness = o.sheenRoughnessFactor),
            void 0 !== o.sheenColorTexture &&
              a.push(
                r.assignTexture(t, "sheenColorMap", o.sheenColorTexture, d)
              ),
            void 0 !== o.sheenRoughnessTexture &&
              a.push(
                r.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)
              ),
            Promise.all(a)
          );
        }
      }
      class y {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let i = [],
            a = n.extensions[this.name];
          return (
            void 0 !== a.transmissionFactor &&
              (t.transmission = a.transmissionFactor),
            void 0 !== a.transmissionTexture &&
              i.push(
                r.assignTexture(t, "transmissionMap", a.transmissionTexture)
              ),
            Promise.all(i)
          );
        }
      }
      class M {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let a = [],
            o = n.extensions[this.name];
          (t.thickness = void 0 !== o.thicknessFactor ? o.thicknessFactor : 0),
            void 0 !== o.thicknessTexture &&
              a.push(r.assignTexture(t, "thicknessMap", o.thicknessTexture)),
            (t.attenuationDistance = o.attenuationDistance || 1 / 0);
          let s = o.attenuationColor || [1, 1, 1];
          return (
            (t.attenuationColor = new i.Q1f().setRGB(s[0], s[1], s[2], f)),
            Promise.all(a)
          );
        }
      }
      class w {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_IOR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let n = r.extensions[this.name];
          return (t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve();
        }
      }
      class R {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let a = [],
            o = n.extensions[this.name];
          (t.specularIntensity =
            void 0 !== o.specularFactor ? o.specularFactor : 1),
            void 0 !== o.specularTexture &&
              a.push(
                r.assignTexture(t, "specularIntensityMap", o.specularTexture)
              );
          let s = o.specularColorFactor || [1, 1, 1];
          return (
            (t.specularColor = new i.Q1f().setRGB(s[0], s[1], s[2], f)),
            void 0 !== o.specularColorTexture &&
              a.push(
                r.assignTexture(
                  t,
                  "specularColorMap",
                  o.specularColorTexture,
                  d
                )
              ),
            Promise.all(a)
          );
        }
      }
      class F {
        constructor(e) {
          (this.parser = e), (this.name = p.EXT_MATERIALS_BUMP);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let i = [],
            a = n.extensions[this.name];
          return (
            (t.bumpScale = void 0 !== a.bumpFactor ? a.bumpFactor : 1),
            void 0 !== a.bumpTexture &&
              i.push(r.assignTexture(t, "bumpMap", a.bumpTexture)),
            Promise.all(i)
          );
        }
      }
      class I {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_MATERIALS_ANISOTROPY);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? i.uSd : null;
        }
        extendMaterialParams(e, t) {
          let r = this.parser,
            n = r.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          let i = [],
            a = n.extensions[this.name];
          return (
            void 0 !== a.anisotropyStrength &&
              (t.anisotropy = a.anisotropyStrength),
            void 0 !== a.anisotropyRotation &&
              (t.anisotropyRotation = a.anisotropyRotation),
            void 0 !== a.anisotropyTexture &&
              i.push(r.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
            Promise.all(i)
          );
        }
      }
      class T {
        constructor(e) {
          (this.parser = e), (this.name = p.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          let t = this.parser,
            r = t.json,
            n = r.textures[e];
          if (!n.extensions || !n.extensions[this.name]) return null;
          let i = n.extensions[this.name],
            a = t.options.ktx2Loader;
          if (!a)
            if (
              !(
                r.extensionsRequired &&
                r.extensionsRequired.indexOf(this.name) >= 0
              )
            )
              return null;
            else
              throw Error(
                "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
              );
          return t.loadTextureImage(e, i.source, a);
        }
      }
      class x {
        constructor(e) {
          (this.parser = e),
            (this.name = p.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            r = this.parser,
            n = r.json,
            i = n.textures[e];
          if (!i.extensions || !i.extensions[t]) return null;
          let a = i.extensions[t],
            o = n.images[a.source],
            s = r.textureLoader;
          if (o.uri) {
            let e = r.options.manager.getHandler(o.uri);
            null !== e && (s = e);
          }
          return this.detectSupport().then(function (i) {
            if (i) return r.loadTextureImage(e, a.source, s);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return r.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class D {
        constructor(e) {
          (this.parser = e),
            (this.name = p.EXT_TEXTURE_AVIF),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            r = this.parser,
            n = r.json,
            i = n.textures[e];
          if (!i.extensions || !i.extensions[t]) return null;
          let a = i.extensions[t],
            o = n.images[a.source],
            s = r.textureLoader;
          if (o.uri) {
            let e = r.options.manager.getHandler(o.uri);
            null !== e && (s = e);
          }
          return this.detectSupport().then(function (i) {
            if (i) return r.loadTextureImage(e, a.source, s);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: AVIF required by asset but unsupported."
              );
            return r.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class G {
        constructor(e) {
          (this.name = p.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          let t = this.parser.json,
            r = t.bufferViews[e];
          if (!r.extensions || !r.extensions[this.name]) return null;
          {
            let e = r.extensions[this.name],
              n = this.parser.getDependency("buffer", e.buffer),
              i = this.parser.options.meshoptDecoder;
            if (!i || !i.supported)
              if (
                !(
                  t.extensionsRequired &&
                  t.extensionsRequired.indexOf(this.name) >= 0
                )
              )
                return null;
              else
                throw Error(
                  "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
                );
            return n.then(function (t) {
              let r = e.byteOffset || 0,
                n = e.byteLength || 0,
                a = e.count,
                o = e.byteStride,
                s = new Uint8Array(t, r, n);
              return i.decodeGltfBufferAsync
                ? i
                    .decodeGltfBufferAsync(a, o, s, e.mode, e.filter)
                    .then(function (e) {
                      return e.buffer;
                    })
                : i.ready.then(function () {
                    let t = new ArrayBuffer(a * o);
                    return (
                      i.decodeGltfBuffer(
                        new Uint8Array(t),
                        a,
                        o,
                        s,
                        e.mode,
                        e.filter
                      ),
                      t
                    );
                  });
            });
          }
        }
      }
      class S {
        constructor(e) {
          (this.name = p.EXT_MESH_GPU_INSTANCING), (this.parser = e);
        }
        createNodeMesh(e) {
          let t = this.parser.json,
            r = t.nodes[e];
          if (!r.extensions || !r.extensions[this.name] || void 0 === r.mesh)
            return null;
          for (let e of t.meshes[r.mesh].primitives)
            if (
              e.mode !== K.TRIANGLES &&
              e.mode !== K.TRIANGLE_STRIP &&
              e.mode !== K.TRIANGLE_FAN &&
              void 0 !== e.mode
            )
              return null;
          let n = r.extensions[this.name].attributes,
            a = [],
            o = {};
          for (let e in n)
            a.push(
              this.parser
                .getDependency("accessor", n[e])
                .then((t) => ((o[e] = t), o[e]))
            );
          return a.length < 1
            ? null
            : (a.push(this.parser.createNodeMesh(e)),
              Promise.all(a).then((e) => {
                let t = e.pop(),
                  r = t.isGroup ? t.children : [t],
                  n = e[0].count,
                  a = [];
                for (let e of r) {
                  let t = new i.kn4(),
                    r = new i.Pq0(),
                    s = new i.PTz(),
                    l = new i.Pq0(1, 1, 1),
                    u = new i.ZLX(e.geometry, e.material, n);
                  for (let e = 0; e < n; e++)
                    o.TRANSLATION && r.fromBufferAttribute(o.TRANSLATION, e),
                      o.ROTATION && s.fromBufferAttribute(o.ROTATION, e),
                      o.SCALE && l.fromBufferAttribute(o.SCALE, e),
                      u.setMatrixAt(e, t.compose(r, s, l));
                  for (let t in o)
                    if ("_COLOR_0" === t) {
                      let e = o[t];
                      u.instanceColor = new i.uWO(
                        e.array,
                        e.itemSize,
                        e.normalized
                      );
                    } else
                      "TRANSLATION" !== t &&
                        "ROTATION" !== t &&
                        "SCALE" !== t &&
                        e.geometry.setAttribute(t, o[t]);
                  i.B69.prototype.copy.call(u, e),
                    this.parser.assignFinalMaterial(u),
                    a.push(u);
                }
                return t.isGroup ? (t.clear(), t.add(...a), t) : a[0];
              }));
        }
      }
      let H = "glTF",
        _ = { JSON: 0x4e4f534a, BIN: 5130562 };
      class O {
        constructor(e) {
          (this.name = p.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          let t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: c(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== H)
          )
            throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2)
            throw Error("THREE.GLTFLoader: Legacy binary file detected.");
          let r = this.header.length - 12,
            n = new DataView(e, 12),
            i = 0;
          for (; i < r; ) {
            let t = n.getUint32(i, !0);
            i += 4;
            let r = n.getUint32(i, !0);
            if (((i += 4), r === _.JSON)) {
              let r = new Uint8Array(e, 12 + i, t);
              this.content = c(r);
            } else if (r === _.BIN) {
              let r = 12 + i;
              this.body = e.slice(r, r + t);
            }
            i += t;
          }
          if (null === this.content)
            throw Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class L {
        constructor(e, t) {
          if (!t)
            throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          (this.name = p.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          let r = this.json,
            n = this.dracoLoader,
            i = e.extensions[this.name].bufferView,
            a = e.extensions[this.name].attributes,
            o = {},
            s = {},
            l = {};
          for (let e in a) o[W[e] || e.toLowerCase()] = a[e];
          for (let t in e.attributes) {
            let n = W[t] || t.toLowerCase();
            if (void 0 !== a[t]) {
              let i = r.accessors[e.attributes[t]],
                a = j[i.componentType];
              (l[n] = a.name), (s[n] = !0 === i.normalized);
            }
          }
          return t.getDependency("bufferView", i).then(function (e) {
            return new Promise(function (t, r) {
              n.decodeDracoFile(
                e,
                function (e) {
                  for (let t in e.attributes) {
                    let r = e.attributes[t],
                      n = s[t];
                    void 0 !== n && (r.normalized = n);
                  }
                  t(e);
                },
                o,
                l,
                f,
                r
              );
            });
          });
        }
      }
      class U {
        constructor() {
          this.name = p.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            ((void 0 === t.texCoord || t.texCoord === e.channel) &&
              void 0 === t.offset &&
              void 0 === t.rotation &&
              void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.texCoord && (e.channel = t.texCoord),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class P {
        constructor() {
          this.name = p.KHR_MESH_QUANTIZATION;
        }
      }
      class J extends i.lGw {
        constructor(e, t, r, n) {
          super(e, t, r, n);
        }
        copySampleValue_(e) {
          let t = this.resultBuffer,
            r = this.sampleValues,
            n = this.valueSize,
            i = e * n * 3 + n;
          for (let e = 0; e !== n; e++) t[e] = r[i + e];
          return t;
        }
        interpolate_(e, t, r, n) {
          let i = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            s = 2 * o,
            l = 3 * o,
            u = n - t,
            c = (r - t) / u,
            d = c * c,
            f = d * c,
            h = e * l,
            A = h - l,
            p = -2 * f + 3 * d,
            m = f - d,
            B = 1 - p,
            g = m - d + c;
          for (let e = 0; e !== o; e++) {
            let t = a[A + e + o],
              r = a[A + e + s] * u,
              n = a[h + e + o],
              l = a[h + e] * u;
            i[e] = B * t + g * r + p * n + m * l;
          }
          return i;
        }
      }
      let k = new i.PTz();
      class N extends J {
        interpolate_(e, t, r, n) {
          let i = super.interpolate_(e, t, r, n);
          return k.fromArray(i).normalize().toArray(i), i;
        }
      }
      let K = {
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          TRIANGLE_STRIP: 5,
          TRIANGLE_FAN: 6,
        },
        j = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        Q = {
          9728: i.hxR,
          9729: i.k6q,
          9984: i.pHI,
          9985: i.kRr,
          9986: i.Cfg,
          9987: i.$_I,
        },
        X = { 33071: i.ghU, 33648: i.kTW, 10497: i.GJx },
        Y = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        W = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          ...(u.r >= 152
            ? {
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv1",
                TEXCOORD_2: "uv2",
                TEXCOORD_3: "uv3",
              }
            : { TEXCOORD_0: "uv", TEXCOORD_1: "uv2" }),
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        z = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        Z = { CUBICSPLINE: void 0, LINEAR: i.PJ3, STEP: i.ljd },
        q = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
      function V(e, t, r) {
        for (let n in r.extensions)
          void 0 === e[n] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[n] = r.extensions[n]));
      }
      function $(e, t) {
        void 0 !== t.extras &&
          ("object" == typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
              ));
      }
      function ee(e) {
        let t = "",
          r = Object.keys(e).sort();
        for (let n = 0, i = r.length; n < i; n++)
          t += r[n] + ":" + e[r[n]] + ";";
        return t;
      }
      function et(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      let er = new i.kn4();
      class en {
        constructor(e = {}, t = {}) {
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new A()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.nodeCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          let r = !1,
            n = !1,
            a = -1;
          "undefined" != typeof navigator &&
            void 0 !== navigator.userAgent &&
            ((r =
              !0 ===
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
            (a = (n = navigator.userAgent.indexOf("Firefox") > -1)
              ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]
              : -1)),
            "undefined" == typeof createImageBitmap || r || (n && a < 98)
              ? (this.textureLoader = new i.Tap(this.options.manager))
              : (this.textureLoader = new i.Kzg(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new i.Y9S(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          let r = this,
            n = this.json,
            i = this.extensions;
          this.cache.removeAll(),
            (this.nodeCache = {}),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  r.getDependencies("scene"),
                  r.getDependencies("animation"),
                  r.getDependencies("camera"),
                ]);
              })
              .then(function (t) {
                let a = {
                  scene: t[0][n.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: n.asset,
                  parser: r,
                  userData: {},
                };
                return (
                  V(i, a, n),
                  $(a, n),
                  Promise.all(
                    r._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(a);
                    })
                  ).then(function () {
                    for (let e of a.scenes) e.updateMatrixWorld();
                    e(a);
                  })
                );
              })
              .catch(t);
        }
        _markDefs() {
          let e = this.json.nodes || [],
            t = this.json.skins || [],
            r = this.json.meshes || [];
          for (let r = 0, n = t.length; r < n; r++) {
            let n = t[r].joints;
            for (let t = 0, r = n.length; t < r; t++) e[n[t]].isBone = !0;
          }
          for (let t = 0, n = e.length; t < n; t++) {
            let n = e[t];
            void 0 !== n.mesh &&
              (this._addNodeRef(this.meshCache, n.mesh),
              void 0 !== n.skin && (r[n.mesh].isSkinnedMesh = !0)),
              void 0 !== n.camera &&
                this._addNodeRef(this.cameraCache, n.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, r) {
          if (e.refs[t] <= 1) return r;
          let n = r.clone(),
            i = (e, t) => {
              let r = this.associations.get(e);
              for (let [n, a] of (null != r && this.associations.set(t, r),
              e.children.entries()))
                i(a, t.children[n]);
            };
          return i(r, n), (n.name += "_instance_" + e.uses[t]++), n;
        }
        _invokeOne(e) {
          let t = Object.values(this.plugins);
          t.push(this);
          for (let r = 0; r < t.length; r++) {
            let n = e(t[r]);
            if (n) return n;
          }
          return null;
        }
        _invokeAll(e) {
          let t = Object.values(this.plugins);
          t.unshift(this);
          let r = [];
          for (let n = 0; n < t.length; n++) {
            let i = e(t[n]);
            i && r.push(i);
          }
          return r;
        }
        getDependency(e, t) {
          let r = e + ":" + t,
            n = this.cache.get(r);
          if (!n) {
            switch (e) {
              case "scene":
                n = this.loadScene(t);
                break;
              case "node":
                n = this._invokeOne(function (e) {
                  return e.loadNode && e.loadNode(t);
                });
                break;
              case "mesh":
                n = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case "accessor":
                n = this.loadAccessor(t);
                break;
              case "bufferView":
                n = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case "buffer":
                n = this.loadBuffer(t);
                break;
              case "material":
                n = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case "texture":
                n = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case "skin":
                n = this.loadSkin(t);
                break;
              case "animation":
                n = this._invokeOne(function (e) {
                  return e.loadAnimation && e.loadAnimation(t);
                });
                break;
              case "camera":
                n = this.loadCamera(t);
                break;
              default:
                if (
                  !(n = this._invokeOne(function (r) {
                    return (
                      r != this && r.getDependency && r.getDependency(e, t)
                    );
                  }))
                )
                  throw Error("Unknown type: " + e);
            }
            this.cache.add(r, n);
          }
          return n;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            let r = this;
            (t = Promise.all(
              (this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function (
                t,
                n
              ) {
                return r.getDependency(e, n);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          let t = this.json.buffers[e],
            r = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type)
            throw Error(
              "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[p.KHR_BINARY_GLTF].body);
          let n = this.options;
          return new Promise(function (e, a) {
            r.load(i.r6x.resolveURL(t.uri, n.path), e, void 0, function () {
              a(
                Error(
                  'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                )
              );
            });
          });
        }
        loadBufferView(e) {
          let t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then(function (e) {
            let r = t.byteLength || 0,
              n = t.byteOffset || 0;
            return e.slice(n, n + r);
          });
        }
        loadAccessor(e) {
          let t = this,
            r = this.json,
            n = this.json.accessors[e];
          if (void 0 === n.bufferView && void 0 === n.sparse) {
            let e = Y[n.type],
              t = j[n.componentType],
              r = !0 === n.normalized,
              a = new t(n.count * e);
            return Promise.resolve(new i.THS(a, e, r));
          }
          let a = [];
          return (
            void 0 !== n.bufferView
              ? a.push(this.getDependency("bufferView", n.bufferView))
              : a.push(null),
            void 0 !== n.sparse &&
              (a.push(
                this.getDependency("bufferView", n.sparse.indices.bufferView)
              ),
              a.push(
                this.getDependency("bufferView", n.sparse.values.bufferView)
              )),
            Promise.all(a).then(function (e) {
              let a,
                o,
                s = e[0],
                l = Y[n.type],
                u = j[n.componentType],
                c = u.BYTES_PER_ELEMENT,
                d = c * l,
                f = n.byteOffset || 0,
                h =
                  void 0 !== n.bufferView
                    ? r.bufferViews[n.bufferView].byteStride
                    : void 0,
                A = !0 === n.normalized;
              if (h && h !== d) {
                let e = Math.floor(f / h),
                  r =
                    "InterleavedBuffer:" +
                    n.bufferView +
                    ":" +
                    n.componentType +
                    ":" +
                    e +
                    ":" +
                    n.count,
                  d = t.cache.get(r);
                d ||
                  ((a = new u(s, e * h, (n.count * h) / c)),
                  (d = new i.eB$(a, h / c)),
                  t.cache.add(r, d)),
                  (o = new i.eHs(d, l, (f % h) / c, A));
              } else (a = null === s ? new u(n.count * l) : new u(s, f, n.count * l)), (o = new i.THS(a, l, A));
              if (void 0 !== n.sparse) {
                let t = Y.SCALAR,
                  r = j[n.sparse.indices.componentType],
                  a = n.sparse.indices.byteOffset || 0,
                  c = n.sparse.values.byteOffset || 0,
                  d = new r(e[1], a, n.sparse.count * t),
                  f = new u(e[2], c, n.sparse.count * l);
                null !== s &&
                  (o = new i.THS(o.array.slice(), o.itemSize, o.normalized));
                for (let e = 0, t = d.length; e < t; e++) {
                  let t = d[e];
                  if (
                    (o.setX(t, f[e * l]),
                    l >= 2 && o.setY(t, f[e * l + 1]),
                    l >= 3 && o.setZ(t, f[e * l + 2]),
                    l >= 4 && o.setW(t, f[e * l + 3]),
                    l >= 5)
                  )
                    throw Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
              }
              return o;
            })
          );
        }
        loadTexture(e) {
          let t = this.json,
            r = this.options,
            n = t.textures[e].source,
            i = t.images[n],
            a = this.textureLoader;
          if (i.uri) {
            let e = r.manager.getHandler(i.uri);
            null !== e && (a = e);
          }
          return this.loadTextureImage(e, n, a);
        }
        loadTextureImage(e, t, r) {
          let n = this,
            a = this.json,
            o = a.textures[e],
            s = a.images[t],
            l = (s.uri || s.bufferView) + ":" + o.sampler;
          if (this.textureCache[l]) return this.textureCache[l];
          let u = this.loadImageSource(t, r)
            .then(function (t) {
              (t.flipY = !1),
                (t.name = o.name || s.name || ""),
                "" === t.name &&
                  "string" == typeof s.uri &&
                  !1 === s.uri.startsWith("data:image/") &&
                  (t.name = s.uri);
              let r = (a.samplers || {})[o.sampler] || {};
              return (
                (t.magFilter = Q[r.magFilter] || i.k6q),
                (t.minFilter = Q[r.minFilter] || i.$_I),
                (t.wrapS = X[r.wrapS] || i.GJx),
                (t.wrapT = X[r.wrapT] || i.GJx),
                n.associations.set(t, { textures: e }),
                t
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[l] = u), u;
        }
        loadImageSource(e, t) {
          let r = this.json,
            n = this.options;
          if (void 0 !== this.sourceCache[e])
            return this.sourceCache[e].then((e) => e.clone());
          let a = r.images[e],
            o = self.URL || self.webkitURL,
            s = a.uri || "",
            l = !1;
          if (void 0 !== a.bufferView)
            s = this.getDependency("bufferView", a.bufferView).then(function (
              e
            ) {
              l = !0;
              let t = new Blob([e], { type: a.mimeType });
              return (s = o.createObjectURL(t));
            });
          else if (void 0 === a.uri)
            throw Error(
              "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
            );
          let u = Promise.resolve(s)
            .then(function (e) {
              return new Promise(function (r, a) {
                let o = r;
                !0 === t.isImageBitmapLoader &&
                  (o = function (e) {
                    let t = new i.gPd(e);
                    (t.needsUpdate = !0), r(t);
                  }),
                  t.load(i.r6x.resolveURL(e, n.path), o, void 0, a);
              });
            })
            .then(function (e) {
              var t;
              return (
                !0 === l && o.revokeObjectURL(s),
                $(e, a),
                (e.userData.mimeType =
                  a.mimeType ||
                  ((t = a.uri).search(/\.jpe?g($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/jpeg/)
                    ? "image/jpeg"
                    : t.search(/\.webp($|\?)/i) > 0 ||
                      0 === t.search(/^data\:image\/webp/)
                    ? "image/webp"
                    : "image/png")),
                e
              );
            })
            .catch(function (e) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", s), e)
              );
            });
          return (this.sourceCache[e] = u), u;
        }
        assignTexture(e, t, r, n) {
          let i = this;
          return this.getDependency("texture", r.index).then(function (a) {
            if (!a) return null;
            if (
              (void 0 !== r.texCoord &&
                r.texCoord > 0 &&
                ((a = a.clone()).channel = r.texCoord),
              i.extensions[p.KHR_TEXTURE_TRANSFORM])
            ) {
              let e =
                void 0 !== r.extensions
                  ? r.extensions[p.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (e) {
                let t = i.associations.get(a);
                (a = i.extensions[p.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
                  i.associations.set(a, t);
              }
            }
            return (
              void 0 !== n &&
                ("number" == typeof n && (n = 3001 === n ? d : f),
                "colorSpace" in a
                  ? (a.colorSpace = n)
                  : (a.encoding = n === d ? 3001 : 3e3)),
              (e[t] = a),
              a
            );
          });
        }
        assignFinalMaterial(e) {
          let t = e.geometry,
            r = e.material,
            n = void 0 === t.attributes.tangent,
            a = void 0 !== t.attributes.color,
            o = void 0 === t.attributes.normal;
          if (e.isPoints) {
            let e = "PointsMaterial:" + r.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new i.BH$()),
              i.imn.prototype.copy.call(t, r),
              t.color.copy(r.color),
              (t.map = r.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (r = t);
          } else if (e.isLine) {
            let e = "LineBasicMaterial:" + r.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new i.mrM()),
              i.imn.prototype.copy.call(t, r),
              t.color.copy(r.color),
              (t.map = r.map),
              this.cache.add(e, t)),
              (r = t);
          }
          if (n || a || o) {
            let e = "ClonedMaterial:" + r.uuid + ":";
            n && (e += "derivative-tangents:"),
              a && (e += "vertex-colors:"),
              o && (e += "flat-shading:");
            let t = this.cache.get(e);
            t ||
              ((t = r.clone()),
              a && (t.vertexColors = !0),
              o && (t.flatShading = !0),
              n &&
                (t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(r))),
              (r = t);
          }
          e.material = r;
        }
        getMaterialType() {
          return i._4j;
        }
        loadMaterial(e) {
          let t,
            r = this,
            n = this.json,
            a = this.extensions,
            o = n.materials[e],
            s = {},
            l = o.extensions || {},
            u = [];
          if (l[p.KHR_MATERIALS_UNLIT]) {
            let e = a[p.KHR_MATERIALS_UNLIT];
            (t = e.getMaterialType()), u.push(e.extendParams(s, o, r));
          } else {
            let n = o.pbrMetallicRoughness || {};
            if (
              ((s.color = new i.Q1f(1, 1, 1)),
              (s.opacity = 1),
              Array.isArray(n.baseColorFactor))
            ) {
              let e = n.baseColorFactor;
              s.color.setRGB(e[0], e[1], e[2], f), (s.opacity = e[3]);
            }
            void 0 !== n.baseColorTexture &&
              u.push(r.assignTexture(s, "map", n.baseColorTexture, d)),
              (s.metalness =
                void 0 !== n.metallicFactor ? n.metallicFactor : 1),
              (s.roughness =
                void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
              void 0 !== n.metallicRoughnessTexture &&
                (u.push(
                  r.assignTexture(s, "metalnessMap", n.metallicRoughnessTexture)
                ),
                u.push(
                  r.assignTexture(s, "roughnessMap", n.metallicRoughnessTexture)
                )),
              (t = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              u.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return (
                      t.extendMaterialParams && t.extendMaterialParams(e, s)
                    );
                  })
                )
              );
          }
          !0 === o.doubleSided && (s.side = i.$EB);
          let c = o.alphaMode || q.OPAQUE;
          if (
            (c === q.BLEND
              ? ((s.transparent = !0), (s.depthWrite = !1))
              : ((s.transparent = !1),
                c === q.MASK &&
                  (s.alphaTest =
                    void 0 !== o.alphaCutoff ? o.alphaCutoff : 0.5)),
            void 0 !== o.normalTexture &&
              t !== i.V9B &&
              (u.push(r.assignTexture(s, "normalMap", o.normalTexture)),
              (s.normalScale = new i.I9Y(1, 1)),
              void 0 !== o.normalTexture.scale))
          ) {
            let e = o.normalTexture.scale;
            s.normalScale.set(e, e);
          }
          if (
            (void 0 !== o.occlusionTexture &&
              t !== i.V9B &&
              (u.push(r.assignTexture(s, "aoMap", o.occlusionTexture)),
              void 0 !== o.occlusionTexture.strength &&
                (s.aoMapIntensity = o.occlusionTexture.strength)),
            void 0 !== o.emissiveFactor && t !== i.V9B)
          ) {
            let e = o.emissiveFactor;
            s.emissive = new i.Q1f().setRGB(e[0], e[1], e[2], f);
          }
          return (
            void 0 !== o.emissiveTexture &&
              t !== i.V9B &&
              u.push(r.assignTexture(s, "emissiveMap", o.emissiveTexture, d)),
            Promise.all(u).then(function () {
              let n = new t(s);
              return (
                o.name && (n.name = o.name),
                $(n, o),
                r.associations.set(n, { materials: e }),
                o.extensions && V(a, n, o),
                n
              );
            })
          );
        }
        createUniqueName(e) {
          let t = i.Nwf.sanitizeNodeName(e || "");
          return t in this.nodeNamesUsed
            ? t + "_" + ++this.nodeNamesUsed[t]
            : ((this.nodeNamesUsed[t] = 0), t);
        }
        loadGeometries(e) {
          let t = this,
            r = this.extensions,
            n = this.primitiveCache,
            a = [];
          for (let o = 0, s = e.length; o < s; o++) {
            let s = e[o],
              l = (function (e) {
                let t,
                  r =
                    e.extensions && e.extensions[p.KHR_DRACO_MESH_COMPRESSION];
                if (
                  ((t = r
                    ? "draco:" +
                      r.bufferView +
                      ":" +
                      r.indices +
                      ":" +
                      ee(r.attributes)
                    : e.indices + ":" + ee(e.attributes) + ":" + e.mode),
                  void 0 !== e.targets)
                )
                  for (let r = 0, n = e.targets.length; r < n; r++)
                    t += ":" + ee(e.targets[r]);
                return t;
              })(s),
              u = n[l];
            if (u) a.push(u.promise);
            else {
              let e;
              (e =
                s.extensions && s.extensions[p.KHR_DRACO_MESH_COMPRESSION]
                  ? (function (e) {
                      return r[p.KHR_DRACO_MESH_COMPRESSION]
                        .decodePrimitive(e, t)
                        .then(function (r) {
                          return ei(r, e, t);
                        });
                    })(s)
                  : ei(new i.LoY(), s, t)),
                (n[l] = { primitive: s, promise: e }),
                a.push(e);
            }
          }
          return Promise.all(a);
        }
        loadMesh(e) {
          let t = this,
            r = this.json,
            n = this.extensions,
            a = r.meshes[e],
            o = a.primitives,
            s = [];
          for (let e = 0, t = o.length; e < t; e++) {
            var u;
            let t =
              void 0 === o[e].material
                ? (void 0 === (u = this.cache).DefaultMaterial &&
                    (u.DefaultMaterial = new i._4j({
                      color: 0xffffff,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: i.hB5,
                    })),
                  u.DefaultMaterial)
                : this.getDependency("material", o[e].material);
            s.push(t);
          }
          return (
            s.push(t.loadGeometries(o)),
            Promise.all(s).then(function (r) {
              let s = r.slice(0, r.length - 1),
                u = r[r.length - 1],
                c = [];
              for (let r = 0, d = u.length; r < d; r++) {
                let d,
                  f = u[r],
                  h = o[r],
                  A = s[r];
                if (
                  h.mode === K.TRIANGLES ||
                  h.mode === K.TRIANGLE_STRIP ||
                  h.mode === K.TRIANGLE_FAN ||
                  void 0 === h.mode
                )
                  !0 ===
                    (d =
                      !0 === a.isSkinnedMesh
                        ? new i.I46(f, A)
                        : new i.eaF(f, A)).isSkinnedMesh &&
                    d.normalizeSkinWeights(),
                    h.mode === K.TRIANGLE_STRIP
                      ? (d.geometry = l(d.geometry, i.O49))
                      : h.mode === K.TRIANGLE_FAN &&
                        (d.geometry = l(d.geometry, i.rYR));
                else if (h.mode === K.LINES) d = new i.DXC(f, A);
                else if (h.mode === K.LINE_STRIP) d = new i.N1A(f, A);
                else if (h.mode === K.LINE_LOOP) d = new i.FCc(f, A);
                else if (h.mode === K.POINTS) d = new i.ONl(f, A);
                else
                  throw Error(
                    "THREE.GLTFLoader: Primitive mode unsupported: " + h.mode
                  );
                Object.keys(d.geometry.morphAttributes).length > 0 &&
                  (function (e, t) {
                    if ((e.updateMorphTargets(), void 0 !== t.weights))
                      for (let r = 0, n = t.weights.length; r < n; r++)
                        e.morphTargetInfluences[r] = t.weights[r];
                    if (t.extras && Array.isArray(t.extras.targetNames)) {
                      let r = t.extras.targetNames;
                      if (e.morphTargetInfluences.length === r.length) {
                        e.morphTargetDictionary = {};
                        for (let t = 0, n = r.length; t < n; t++)
                          e.morphTargetDictionary[r[t]] = t;
                      } else
                        console.warn(
                          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
                        );
                    }
                  })(d, a),
                  (d.name = t.createUniqueName(a.name || "mesh_" + e)),
                  $(d, a),
                  h.extensions && V(n, d, h),
                  t.assignFinalMaterial(d),
                  c.push(d);
              }
              for (let r = 0, n = c.length; r < n; r++)
                t.associations.set(c[r], { meshes: e, primitives: r });
              if (1 === c.length) return a.extensions && V(n, c[0], a), c[0];
              let d = new i.YJl();
              a.extensions && V(n, d, a), t.associations.set(d, { meshes: e });
              for (let e = 0, t = c.length; e < t; e++) d.add(c[e]);
              return d;
            })
          );
        }
        loadCamera(e) {
          let t,
            r = this.json.cameras[e],
            n = r[r.type];
          return n
            ? ("perspective" === r.type
                ? (t = new i.ubm(
                    i.cj9.radToDeg(n.yfov),
                    n.aspectRatio || 1,
                    n.znear || 1,
                    n.zfar || 2e6
                  ))
                : "orthographic" === r.type &&
                  (t = new i.qUd(
                    -n.xmag,
                    n.xmag,
                    n.ymag,
                    -n.ymag,
                    n.znear,
                    n.zfar
                  )),
              r.name && (t.name = this.createUniqueName(r.name)),
              $(t, r),
              Promise.resolve(t))
            : void console.warn("THREE.GLTFLoader: Missing camera parameters.");
        }
        loadSkin(e) {
          let t = this.json.skins[e],
            r = [];
          for (let e = 0, n = t.joints.length; e < n; e++)
            r.push(this._loadNodeShallow(t.joints[e]));
          return (
            void 0 !== t.inverseBindMatrices
              ? r.push(this.getDependency("accessor", t.inverseBindMatrices))
              : r.push(null),
            Promise.all(r).then(function (e) {
              let r = e.pop(),
                n = [],
                a = [];
              for (let o = 0, s = e.length; o < s; o++) {
                let s = e[o];
                if (s) {
                  n.push(s);
                  let e = new i.kn4();
                  null !== r && e.fromArray(r.array, 16 * o), a.push(e);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    t.joints[o]
                  );
              }
              return new i.EAD(n, a);
            })
          );
        }
        loadAnimation(e) {
          let t = this.json,
            r = this,
            n = t.animations[e],
            a = n.name ? n.name : "animation_" + e,
            o = [],
            s = [],
            l = [],
            u = [],
            c = [];
          for (let e = 0, t = n.channels.length; e < t; e++) {
            let t = n.channels[e],
              r = n.samplers[t.sampler],
              i = t.target,
              a = i.node,
              d = void 0 !== n.parameters ? n.parameters[r.input] : r.input,
              f = void 0 !== n.parameters ? n.parameters[r.output] : r.output;
            void 0 !== i.node &&
              (o.push(this.getDependency("node", a)),
              s.push(this.getDependency("accessor", d)),
              l.push(this.getDependency("accessor", f)),
              u.push(r),
              c.push(i));
          }
          return Promise.all([
            Promise.all(o),
            Promise.all(s),
            Promise.all(l),
            Promise.all(u),
            Promise.all(c),
          ]).then(function (e) {
            let t = e[0],
              n = e[1],
              o = e[2],
              s = e[3],
              l = e[4],
              u = [];
            for (let e = 0, i = t.length; e < i; e++) {
              let i = t[e],
                a = n[e],
                c = o[e],
                d = s[e],
                f = l[e];
              if (void 0 === i) continue;
              i.updateMatrix && i.updateMatrix();
              let h = r._createAnimationTracks(i, a, c, d, f);
              if (h) for (let e = 0; e < h.length; e++) u.push(h[e]);
            }
            return new i.tz3(a, void 0, u);
          });
        }
        createNodeMesh(e) {
          let t = this.json,
            r = this,
            n = t.nodes[e];
          return void 0 === n.mesh
            ? null
            : r.getDependency("mesh", n.mesh).then(function (e) {
                let t = r._getNodeRef(r.meshCache, n.mesh, e);
                return (
                  void 0 !== n.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, r = n.weights.length; t < r; t++)
                          e.morphTargetInfluences[t] = n.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          let t = this.json.nodes[e],
            r = this._loadNodeShallow(e),
            n = [],
            i = t.children || [];
          for (let e = 0, t = i.length; e < t; e++)
            n.push(this.getDependency("node", i[e]));
          let a =
            void 0 === t.skin
              ? Promise.resolve(null)
              : this.getDependency("skin", t.skin);
          return Promise.all([r, Promise.all(n), a]).then(function (e) {
            let t = e[0],
              r = e[1],
              n = e[2];
            null !== n &&
              t.traverse(function (e) {
                e.isSkinnedMesh && e.bind(n, er);
              });
            for (let e = 0, n = r.length; e < n; e++) t.add(r[e]);
            return t;
          });
        }
        _loadNodeShallow(e) {
          let t = this.json,
            r = this.extensions,
            n = this;
          if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
          let a = t.nodes[e],
            o = a.name ? n.createUniqueName(a.name) : "",
            s = [],
            l = n._invokeOne(function (t) {
              return t.createNodeMesh && t.createNodeMesh(e);
            });
          return (
            l && s.push(l),
            void 0 !== a.camera &&
              s.push(
                n.getDependency("camera", a.camera).then(function (e) {
                  return n._getNodeRef(n.cameraCache, a.camera, e);
                })
              ),
            n
              ._invokeAll(function (t) {
                return t.createNodeAttachment && t.createNodeAttachment(e);
              })
              .forEach(function (e) {
                s.push(e);
              }),
            (this.nodeCache[e] = Promise.all(s).then(function (t) {
              let s;
              if (
                (s =
                  !0 === a.isBone
                    ? new i.$Kf()
                    : t.length > 1
                    ? new i.YJl()
                    : 1 === t.length
                    ? t[0]
                    : new i.B69()) !== t[0]
              )
                for (let e = 0, r = t.length; e < r; e++) s.add(t[e]);
              if (
                (a.name && ((s.userData.name = a.name), (s.name = o)),
                $(s, a),
                a.extensions && V(r, s, a),
                void 0 !== a.matrix)
              ) {
                let e = new i.kn4();
                e.fromArray(a.matrix), s.applyMatrix4(e);
              } else void 0 !== a.translation && s.position.fromArray(a.translation), void 0 !== a.rotation && s.quaternion.fromArray(a.rotation), void 0 !== a.scale && s.scale.fromArray(a.scale);
              return (
                n.associations.has(s) || n.associations.set(s, {}),
                (n.associations.get(s).nodes = e),
                s
              );
            })),
            this.nodeCache[e]
          );
        }
        loadScene(e) {
          let t = this.extensions,
            r = this.json.scenes[e],
            n = this,
            a = new i.YJl();
          r.name && (a.name = n.createUniqueName(r.name)),
            $(a, r),
            r.extensions && V(t, a, r);
          let o = r.nodes || [],
            s = [];
          for (let e = 0, t = o.length; e < t; e++)
            s.push(n.getDependency("node", o[e]));
          return Promise.all(s).then(function (e) {
            for (let t = 0, r = e.length; t < r; t++) a.add(e[t]);
            return (
              (n.associations = ((e) => {
                let t = new Map();
                for (let [e, r] of n.associations)
                  (e instanceof i.imn || e instanceof i.gPd) && t.set(e, r);
                return (
                  e.traverse((e) => {
                    let r = n.associations.get(e);
                    null != r && t.set(e, r);
                  }),
                  t
                );
              })(a)),
              a
            );
          });
        }
        _createAnimationTracks(e, t, r, n, a) {
          let o,
            s = [],
            l = e.name ? e.name : e.uuid,
            u = [];
          switch (
            (z[a.path] === z.weights
              ? e.traverse(function (e) {
                  e.morphTargetInfluences && u.push(e.name ? e.name : e.uuid);
                })
              : u.push(l),
            z[a.path])
          ) {
            case z.weights:
              o = i.Hit;
              break;
            case z.rotation:
              o = i.MBL;
              break;
            case z.position:
            case z.scale:
              o = i.RiT;
              break;
            default:
              o = 1 === r.itemSize ? i.Hit : i.RiT;
          }
          let c = void 0 !== n.interpolation ? Z[n.interpolation] : i.PJ3,
            d = this._getArrayFromAccessor(r);
          for (let e = 0, r = u.length; e < r; e++) {
            let r = new o(u[e] + "." + z[a.path], t.array, d, c);
            "CUBICSPLINE" === n.interpolation &&
              this._createCubicSplineTrackInterpolant(r),
              s.push(r);
          }
          return s;
        }
        _getArrayFromAccessor(e) {
          let t = e.array;
          if (e.normalized) {
            let e = et(t.constructor),
              r = new Float32Array(t.length);
            for (let n = 0, i = t.length; n < i; n++) r[n] = t[n] * e;
            t = r;
          }
          return t;
        }
        _createCubicSplineTrackInterpolant(e) {
          (e.createInterpolant = function (e) {
            return new (this instanceof i.MBL ? N : J)(
              this.times,
              this.values,
              this.getValueSize() / 3,
              e
            );
          }),
            (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0);
        }
      }
      function ei(e, t, r) {
        let n = t.attributes,
          a = [];
        for (let t in n) {
          let i = W[t] || t.toLowerCase();
          i in e.attributes ||
            a.push(
              (function (t, n) {
                return r.getDependency("accessor", t).then(function (t) {
                  e.setAttribute(n, t);
                });
              })(n[t], i)
            );
        }
        if (void 0 !== t.indices && !e.index) {
          let n = r.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
          });
          a.push(n);
        }
        return (
          $(e, t),
          !(function (e, t, r) {
            let n = t.attributes,
              a = new i.NRn();
            if (void 0 === n.POSITION) return;
            {
              let e = r.json.accessors[n.POSITION],
                t = e.min,
                o = e.max;
              if (void 0 === t || void 0 === o)
                return console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
              if (
                (a.set(
                  new i.Pq0(t[0], t[1], t[2]),
                  new i.Pq0(o[0], o[1], o[2])
                ),
                e.normalized)
              ) {
                let t = et(j[e.componentType]);
                a.min.multiplyScalar(t), a.max.multiplyScalar(t);
              }
            }
            let o = t.targets;
            if (void 0 !== o) {
              let e = new i.Pq0(),
                t = new i.Pq0();
              for (let n = 0, i = o.length; n < i; n++) {
                let i = o[n];
                if (void 0 !== i.POSITION) {
                  let n = r.json.accessors[i.POSITION],
                    a = n.min,
                    o = n.max;
                  if (void 0 !== a && void 0 !== o) {
                    if (
                      (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
                      t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
                      t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
                      n.normalized)
                    ) {
                      let e = et(j[n.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              a.expandByVector(e);
            }
            e.boundingBox = a;
            let s = new i.iyt();
            a.getCenter(s.center),
              (s.radius = a.min.distanceTo(a.max) / 2),
              (e.boundingSphere = s);
          })(e, t, r),
          Promise.all(a).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, r) {
                  let n = !1,
                    i = !1,
                    a = !1;
                  for (let e = 0, r = t.length; e < r; e++) {
                    let r = t[e];
                    if (
                      (void 0 !== r.POSITION && (n = !0),
                      void 0 !== r.NORMAL && (i = !0),
                      void 0 !== r.COLOR_0 && (a = !0),
                      n && i && a)
                    )
                      break;
                  }
                  if (!n && !i && !a) return Promise.resolve(e);
                  let o = [],
                    s = [],
                    l = [];
                  for (let u = 0, c = t.length; u < c; u++) {
                    let c = t[u];
                    if (n) {
                      let t =
                        void 0 !== c.POSITION
                          ? r.getDependency("accessor", c.POSITION)
                          : e.attributes.position;
                      o.push(t);
                    }
                    if (i) {
                      let t =
                        void 0 !== c.NORMAL
                          ? r.getDependency("accessor", c.NORMAL)
                          : e.attributes.normal;
                      s.push(t);
                    }
                    if (a) {
                      let t =
                        void 0 !== c.COLOR_0
                          ? r.getDependency("accessor", c.COLOR_0)
                          : e.attributes.color;
                      l.push(t);
                    }
                  }
                  return Promise.all([
                    Promise.all(o),
                    Promise.all(s),
                    Promise.all(l),
                  ]).then(function (t) {
                    let r = t[0],
                      o = t[1],
                      s = t[2];
                    return (
                      n && (e.morphAttributes.position = r),
                      i && (e.morphAttributes.normal = o),
                      a && (e.morphAttributes.color = s),
                      (e.morphTargetsRelative = !0),
                      e
                    );
                  });
                })(e, t.targets, r)
              : e;
          })
        );
      }
      var ea = r(5499);
      let eo = null,
        es = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
      function el(e = !0, t = !0, r) {
        return (i) => {
          r && r(i),
            e &&
              (eo || (eo = new o()),
              eo.setDecoderPath("string" == typeof e ? e : es),
              i.setDRACOLoader(eo)),
            t &&
              i.setMeshoptDecoder(
                (() => {
                  let e;
                  if (n) return n;
                  let t = new Uint8Array([
                      0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2,
                      0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0,
                      65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26,
                      11,
                    ]),
                    r = new Uint8Array([
                      32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20,
                      13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21,
                      22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114,
                      118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74,
                      156, 154, 70, 167,
                    ]);
                  if ("object" != typeof WebAssembly) return { supported: !1 };
                  let i =
                    "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
                  WebAssembly.validate(t) &&
                    (i =
                      "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");
                  let a = WebAssembly.instantiate(
                    (function (e) {
                      let t = new Uint8Array(e.length);
                      for (let r = 0; r < e.length; ++r) {
                        let n = e.charCodeAt(r);
                        t[r] =
                          n > 96
                            ? n - 71
                            : n > 64
                            ? n - 65
                            : n > 47
                            ? n + 4
                            : n > 46
                            ? 63
                            : 62;
                      }
                      let n = 0;
                      for (let i = 0; i < e.length; ++i)
                        t[n++] =
                          t[i] < 60 ? r[t[i]] : (t[i] - 60) * 64 + t[++i];
                      return t.buffer.slice(0, n);
                    })(i),
                    {}
                  ).then((t) => {
                    (e = t.instance).exports.__wasm_call_ctors();
                  });
                  function o(t, r, n, i, a, o) {
                    let s = e.exports.sbrk,
                      l = (n + 3) & -4,
                      u = s(l * i),
                      c = s(a.length),
                      d = new Uint8Array(e.exports.memory.buffer);
                    d.set(a, c);
                    let f = t(u, n, i, c, a.length);
                    if (
                      (0 === f && o && o(u, l, i),
                      r.set(d.subarray(u, u + n * i)),
                      s(u - s(0)),
                      0 !== f)
                    )
                      throw Error(`Malformed buffer data: ${f}`);
                  }
                  let s = {
                      0: "",
                      1: "meshopt_decodeFilterOct",
                      2: "meshopt_decodeFilterQuat",
                      3: "meshopt_decodeFilterExp",
                      NONE: "",
                      OCTAHEDRAL: "meshopt_decodeFilterOct",
                      QUATERNION: "meshopt_decodeFilterQuat",
                      EXPONENTIAL: "meshopt_decodeFilterExp",
                    },
                    l = {
                      0: "meshopt_decodeVertexBuffer",
                      1: "meshopt_decodeIndexBuffer",
                      2: "meshopt_decodeIndexSequence",
                      ATTRIBUTES: "meshopt_decodeVertexBuffer",
                      TRIANGLES: "meshopt_decodeIndexBuffer",
                      INDICES: "meshopt_decodeIndexSequence",
                    };
                  return (n = {
                    ready: a,
                    supported: !0,
                    decodeVertexBuffer(t, r, n, i, a) {
                      o(
                        e.exports.meshopt_decodeVertexBuffer,
                        t,
                        r,
                        n,
                        i,
                        e.exports[s[a]]
                      );
                    },
                    decodeIndexBuffer(t, r, n, i) {
                      o(e.exports.meshopt_decodeIndexBuffer, t, r, n, i);
                    },
                    decodeIndexSequence(t, r, n, i) {
                      o(e.exports.meshopt_decodeIndexSequence, t, r, n, i);
                    },
                    decodeGltfBuffer(t, r, n, i, a, u) {
                      o(e.exports[l[a]], t, r, n, i, e.exports[s[u]]);
                    },
                  });
                })()
              );
        };
      }
      let eu = (e, t, r, n) => (0, ea.G)(h, e, el(t, r, n));
      (eu.preload = (e, t, r, n) => ea.G.preload(h, e, el(t, r, n))),
        (eu.clear = (e) => ea.G.clear(h, e)),
        (eu.setDecoderPath = (e) => {
          es = e;
        });
    },
    8105: (e, t, r) => {
      "use strict";
      r.d(t, { Af: () => s, Nz: () => i, u5: () => l, y3: () => d });
      var n = r(8967);
      function i(e, t, r) {
        if (!e) return;
        if (!0 === r(e)) return e;
        let n = t ? e.return : e.child;
        for (; n; ) {
          let e = i(n, t, r);
          if (e) return e;
          n = t ? null : n.sibling;
        }
      }
      function a(e) {
        try {
          return Object.defineProperties(e, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (t) {
          return e;
        }
      }
      (() => {
        var e, t;
        return (
          "undefined" != typeof window &&
          ((null == (e = window.document) ? void 0 : e.createElement) ||
            (null == (t = window.navigator) ? void 0 : t.product) ===
              "ReactNative")
        );
      })()
        ? n.useLayoutEffect
        : n.useEffect;
      let o = a(n.createContext(null));
      class s extends n.Component {
        render() {
          return n.createElement(
            o.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      }
      function l() {
        let e = n.useContext(o);
        if (null === e)
          throw Error(
            "its-fine: useFiber must be called within a <FiberProvider />!"
          );
        let t = n.useId();
        return n.useMemo(() => {
          for (let r of [e, null == e ? void 0 : e.alternate]) {
            if (!r) continue;
            let e = i(r, !1, (e) => {
              let r = e.memoizedState;
              for (; r; ) {
                if (r.memoizedState === t) return !0;
                r = r.next;
              }
            });
            if (e) return e;
          }
        }, [e, t]);
      }
      let u = Symbol.for("react.context"),
        c = (e) =>
          null !== e &&
          "object" == typeof e &&
          "$$typeof" in e &&
          e.$$typeof === u;
      function d() {
        let e = (function () {
          let e = l(),
            [t] = n.useState(() => new Map());
          t.clear();
          let r = e;
          for (; r; ) {
            let e = r.type;
            c(e) && e !== o && !t.has(e) && t.set(e, n.use(a(e))),
              (r = r.return);
          }
          return t;
        })();
        return n.useMemo(
          () =>
            Array.from(e.keys()).reduce(
              (t, r) => (i) =>
                n.createElement(
                  t,
                  null,
                  n.createElement(r.Provider, { ...i, value: e.get(r) })
                ),
              (e) => n.createElement(s, { ...e })
            ),
          [e]
        );
      }
    },
    8951: (e, t, r) => {
      "use strict";
      function n() {
        return (function (e) {
          function t(e, t) {
            for (
              var r, n, i, a, o, s = /([MLQCZ])([^MLQCZ]*)/g;
              (r = s.exec(e));

            ) {
              var l = r[2]
                .replace(/^\s*|\s*$/g, "")
                .split(/[,\s]+/)
                .map(function (e) {
                  return parseFloat(e);
                });
              switch (r[1]) {
                case "M":
                  (a = n = l[0]), (o = i = l[1]);
                  break;
                case "L":
                  (l[0] !== a || l[1] !== o) &&
                    t("L", a, o, (a = l[0]), (o = l[1]));
                  break;
                case "Q":
                  t("Q", a, o, (a = l[2]), (o = l[3]), l[0], l[1]);
                  break;
                case "C":
                  t("C", a, o, (a = l[4]), (o = l[5]), l[0], l[1], l[2], l[3]);
                  break;
                case "Z":
                  (a !== n || o !== i) && t("L", a, o, n, i);
              }
            }
          }
          function r(e, r, n) {
            void 0 === n && (n = 16);
            var i = { x: 0, y: 0 };
            t(e, function (e, t, a, o, s, l, u, c, d) {
              switch (e) {
                case "L":
                  r(t, a, o, s);
                  break;
                case "Q":
                  for (var f = t, h = a, A = 1; A < n; A++)
                    !(function (e, t, r, n, i, a, o, s) {
                      var l = 1 - o;
                      (s.x = l * l * e + 2 * l * o * r + o * o * i),
                        (s.y = l * l * t + 2 * l * o * n + o * o * a);
                    })(t, a, l, u, o, s, A / (n - 1), i),
                      r(f, h, i.x, i.y),
                      (f = i.x),
                      (h = i.y);
                  break;
                case "C":
                  for (var p = t, m = a, B = 1; B < n; B++)
                    !(function (e, t, r, n, i, a, o, s, l, u) {
                      var c = 1 - l;
                      (u.x =
                        c * c * c * e +
                        3 * c * c * l * r +
                        3 * c * l * l * i +
                        l * l * l * o),
                        (u.y =
                          c * c * c * t +
                          3 * c * c * l * n +
                          3 * c * l * l * a +
                          l * l * l * s);
                    })(t, a, l, u, c, d, o, s, B / (n - 1), i),
                      r(p, m, i.x, i.y),
                      (p = i.x),
                      (m = i.y);
              }
            });
          }
          var n =
              "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
            i = new WeakMap(),
            a = {
              premultipliedAlpha: !1,
              preserveDrawingBuffer: !0,
              antialias: !1,
              depth: !1,
            };
          function o(e, t) {
            var r = e.getContext ? e.getContext("webgl", a) : e,
              n = i.get(r);
            if (!n) {
              var o =
                  "undefined" != typeof WebGL2RenderingContext &&
                  r instanceof WebGL2RenderingContext,
                s = {},
                l = {},
                u = {},
                c = -1,
                d = [];
              function f(e) {
                var t = s[e];
                if (!t && !(t = s[e] = r.getExtension(e)))
                  throw Error(e + " not supported");
                return t;
              }
              function h(e, t) {
                var n = r.createShader(t);
                return r.shaderSource(n, e), r.compileShader(n), n;
              }
              function A() {
                (s = {}), (l = {}), (u = {}), (c = -1), (d.length = 0);
              }
              r.canvas.addEventListener(
                "webglcontextlost",
                function (e) {
                  A(), e.preventDefault();
                },
                !1
              ),
                i.set(
                  r,
                  (n = {
                    gl: r,
                    isWebGL2: o,
                    getExtension: f,
                    withProgram: function (e, t, n, i) {
                      if (!l[e]) {
                        var a = {},
                          s = {},
                          u = r.createProgram();
                        r.attachShader(u, h(t, r.VERTEX_SHADER)),
                          r.attachShader(u, h(n, r.FRAGMENT_SHADER)),
                          r.linkProgram(u),
                          (l[e] = {
                            program: u,
                            transaction: function (e) {
                              r.useProgram(u),
                                e({
                                  setUniform: function (e, t) {
                                    for (
                                      var n = [], i = arguments.length - 2;
                                      i-- > 0;

                                    )
                                      n[i] = arguments[i + 2];
                                    var a =
                                      s[t] ||
                                      (s[t] = r.getUniformLocation(u, t));
                                    r["uniform" + e].apply(r, [a].concat(n));
                                  },
                                  setAttribute: function (e, t, n, i, s) {
                                    var l = a[e];
                                    l ||
                                      (l = a[e] =
                                        {
                                          buf: r.createBuffer(),
                                          loc: r.getAttribLocation(u, e),
                                          data: null,
                                        }),
                                      r.bindBuffer(r.ARRAY_BUFFER, l.buf),
                                      r.vertexAttribPointer(
                                        l.loc,
                                        t,
                                        r.FLOAT,
                                        !1,
                                        0,
                                        0
                                      ),
                                      r.enableVertexAttribArray(l.loc),
                                      o
                                        ? r.vertexAttribDivisor(l.loc, i)
                                        : f(
                                            "ANGLE_instanced_arrays"
                                          ).vertexAttribDivisorANGLE(l.loc, i),
                                      s !== l.data &&
                                        (r.bufferData(r.ARRAY_BUFFER, s, n),
                                        (l.data = s));
                                  },
                                });
                            },
                          });
                      }
                      l[e].transaction(i);
                    },
                    withTexture: function (e, t) {
                      c++;
                      try {
                        r.activeTexture(r.TEXTURE0 + c);
                        var n = u[e];
                        n ||
                          ((n = u[e] = r.createTexture()),
                          r.bindTexture(r.TEXTURE_2D, n),
                          r.texParameteri(
                            r.TEXTURE_2D,
                            r.TEXTURE_MIN_FILTER,
                            r.NEAREST
                          ),
                          r.texParameteri(
                            r.TEXTURE_2D,
                            r.TEXTURE_MAG_FILTER,
                            r.NEAREST
                          )),
                          r.bindTexture(r.TEXTURE_2D, n),
                          t(n, c);
                      } finally {
                        c--;
                      }
                    },
                    withTextureFramebuffer: function (e, t, n) {
                      var i = r.createFramebuffer();
                      d.push(i),
                        r.bindFramebuffer(r.FRAMEBUFFER, i),
                        r.activeTexture(r.TEXTURE0 + t),
                        r.bindTexture(r.TEXTURE_2D, e),
                        r.framebufferTexture2D(
                          r.FRAMEBUFFER,
                          r.COLOR_ATTACHMENT0,
                          r.TEXTURE_2D,
                          e,
                          0
                        );
                      try {
                        n(i);
                      } finally {
                        r.deleteFramebuffer(i),
                          r.bindFramebuffer(
                            r.FRAMEBUFFER,
                            d[--d.length - 1] || null
                          );
                      }
                    },
                    handleContextLoss: A,
                  })
                );
            }
            t(n);
          }
          function s(e, t, r, i, a, s, l, u) {
            void 0 === l && (l = 15),
              void 0 === u && (u = null),
              o(e, function (e) {
                var o = e.gl,
                  c = e.withProgram;
                (0, e.withTexture)("copy", function (e, d) {
                  o.texImage2D(
                    o.TEXTURE_2D,
                    0,
                    o.RGBA,
                    a,
                    s,
                    0,
                    o.RGBA,
                    o.UNSIGNED_BYTE,
                    t
                  ),
                    c(
                      "copy",
                      n,
                      "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",
                      function (e) {
                        var t = e.setUniform;
                        (0, e.setAttribute)(
                          "aUV",
                          2,
                          o.STATIC_DRAW,
                          0,
                          new Float32Array([0, 0, 2, 0, 0, 2])
                        ),
                          t("1i", "image", d),
                          o.bindFramebuffer(o.FRAMEBUFFER, u || null),
                          o.disable(o.BLEND),
                          o.colorMask(8 & l, 4 & l, 2 & l, 1 & l),
                          o.viewport(r, i, a, s),
                          o.scissor(r, i, a, s),
                          o.drawArrays(o.TRIANGLES, 0, 3);
                      }
                    );
                });
              });
          }
          var l = Object.freeze({
            __proto__: null,
            withWebGLContext: o,
            renderImageData: s,
            resizeWebGLCanvasWithoutClearing: function (e, t, r) {
              var n = e.width,
                i = e.height;
              o(e, function (a) {
                var o = a.gl,
                  l = new Uint8Array(n * i * 4);
                o.readPixels(0, 0, n, i, o.RGBA, o.UNSIGNED_BYTE, l),
                  (e.width = t),
                  (e.height = r),
                  s(o, l, 0, 0, n, i);
              });
            },
          });
          function u(e, t, n, i, a, o) {
            void 0 === o && (o = 1);
            var s = new Uint8Array(e * t),
              l = i[2] - i[0],
              u = i[3] - i[1],
              c = [];
            r(n, function (e, t, r, n) {
              c.push({
                x1: e,
                y1: t,
                x2: r,
                y2: n,
                minX: Math.min(e, r),
                minY: Math.min(t, n),
                maxX: Math.max(e, r),
                maxY: Math.max(t, n),
              });
            }),
              c.sort(function (e, t) {
                return e.maxX - t.maxX;
              });
            for (var d = 0; d < e; d++)
              for (var f = 0; f < t; f++) {
                var h = (function (e, t) {
                    for (var r = 1 / 0, n = 1 / 0, i = c.length; i--; ) {
                      var a = c[i];
                      if (a.maxX + n <= e) break;
                      if (e + n > a.minX && t - n < a.maxY && t + n > a.minY) {
                        var o = (function (e, t, r, n, i, a) {
                          var o = i - r,
                            s = a - n,
                            l = o * o + s * s,
                            u = l
                              ? Math.max(
                                  0,
                                  Math.min(1, ((e - r) * o + (t - n) * s) / l)
                                )
                              : 0,
                            c = e - (r + u * o),
                            d = t - (n + u * s);
                          return c * c + d * d;
                        })(e, t, a.x1, a.y1, a.x2, a.y2);
                        o < r && (n = Math.sqrt((r = o)));
                      }
                    }
                    return (
                      (function (e, t) {
                        for (var r = 0, n = c.length; n--; ) {
                          var i = c[n];
                          if (i.maxX <= e) break;
                          i.y1 > t != i.y2 > t &&
                            e <
                              ((i.x2 - i.x1) * (t - i.y1)) / (i.y2 - i.y1) +
                                i.x1 &&
                            (r += i.y1 < i.y2 ? 1 : -1);
                        }
                        return 0 !== r;
                      })(e, t) && (n = -n),
                      n
                    );
                  })(i[0] + (l * (d + 0.5)) / e, i[1] + (u * (f + 0.5)) / t),
                  A = Math.pow(1 - Math.abs(h) / a, o) / 2;
                h < 0 && (A = 1 - A),
                  (A = Math.max(0, Math.min(255, Math.round(255 * A)))),
                  (s[f * e + d] = A);
              }
            return s;
          }
          function c(e, t, r, n, i, a, o, s, l, u) {
            void 0 === a && (a = 1),
              void 0 === s && (s = 0),
              void 0 === l && (l = 0),
              void 0 === u && (u = 0),
              d(e, t, r, n, i, a, o, null, s, l, u);
          }
          function d(e, t, r, n, i, a, o, l, c, d, f) {
            void 0 === a && (a = 1),
              void 0 === c && (c = 0),
              void 0 === d && (d = 0),
              void 0 === f && (f = 0);
            for (
              var h = u(e, t, r, n, i, a),
                A = new Uint8Array(4 * h.length),
                p = 0;
              p < h.length;
              p++
            )
              A[4 * p + f] = h[p];
            s(o, A, c, d, e, t, 1 << (3 - f), l);
          }
          var f = Object.freeze({
              __proto__: null,
              generate: u,
              generateIntoCanvas: c,
              generateIntoFramebuffer: d,
            }),
            h = new Float32Array([0, 0, 2, 0, 0, 2]),
            A = null,
            p = !1,
            m = {},
            B = new WeakMap();
          function g(e) {
            if (!p && !E(e)) throw Error("WebGL generation not supported");
          }
          function v(e, t, r, n, i, a, s) {
            if (
              (void 0 === a && (a = 1),
              void 0 === s && (s = null),
              !s && !(s = A))
            ) {
              var l =
                "function" == typeof OffscreenCanvas
                  ? new OffscreenCanvas(1, 1)
                  : "undefined" != typeof document
                  ? document.createElement("canvas")
                  : null;
              if (!l)
                throw Error("OffscreenCanvas or DOM canvas not supported");
              s = A = l.getContext("webgl", { depth: !1 });
            }
            g(s);
            var u = new Uint8Array(e * t * 4);
            o(s, function (o) {
              var s = o.gl,
                l = o.withTexture,
                c = o.withTextureFramebuffer;
              l("readable", function (o, l) {
                s.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  s.RGBA,
                  e,
                  t,
                  0,
                  s.RGBA,
                  s.UNSIGNED_BYTE,
                  null
                ),
                  c(o, l, function (o) {
                    b(e, t, r, n, i, a, s, o, 0, 0, 0),
                      s.readPixels(0, 0, e, t, s.RGBA, s.UNSIGNED_BYTE, u);
                  });
              });
            });
            for (
              var c = new Uint8Array(e * t), d = 0, f = 0;
              d < u.length;
              d += 4
            )
              c[f++] = u[d];
            return c;
          }
          function C(e, t, r, n, i, a, o, s, l, u) {
            void 0 === a && (a = 1),
              void 0 === s && (s = 0),
              void 0 === l && (l = 0),
              void 0 === u && (u = 0),
              b(e, t, r, n, i, a, o, null, s, l, u);
          }
          function b(e, t, i, a, s, l, u, c, d, f, A) {
            void 0 === l && (l = 1),
              void 0 === d && (d = 0),
              void 0 === f && (f = 0),
              void 0 === A && (A = 0),
              g(u);
            var p = [];
            r(i, function (e, t, r, n) {
              p.push(e, t, r, n);
            }),
              (p = new Float32Array(p)),
              o(u, function (r) {
                var i = r.gl,
                  o = r.isWebGL2,
                  u = r.getExtension,
                  m = r.withProgram,
                  B = r.withTexture,
                  g = r.withTextureFramebuffer,
                  v = r.handleContextLoss;
                if (
                  (B("rawDistances", function (r, B) {
                    (e !== r._lastWidth || t !== r._lastHeight) &&
                      i.texImage2D(
                        i.TEXTURE_2D,
                        0,
                        i.RGBA,
                        (r._lastWidth = e),
                        (r._lastHeight = t),
                        0,
                        i.RGBA,
                        i.UNSIGNED_BYTE,
                        null
                      ),
                      m(
                        "main",
                        "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
                        "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",
                        function (n) {
                          var c = n.setAttribute,
                            d = n.setUniform,
                            f = !o && u("ANGLE_instanced_arrays"),
                            A = !o && u("EXT_blend_minmax");
                          c("aUV", 2, i.STATIC_DRAW, 0, h),
                            c("aLineSegment", 4, i.DYNAMIC_DRAW, 1, p),
                            d.apply(void 0, ["4f", "uGlyphBounds"].concat(a)),
                            d("1f", "uMaxDistance", s),
                            d("1f", "uExponent", l),
                            g(r, B, function (r) {
                              i.enable(i.BLEND),
                                i.colorMask(!0, !0, !0, !0),
                                i.viewport(0, 0, e, t),
                                i.scissor(0, 0, e, t),
                                i.blendFunc(i.ONE, i.ONE),
                                i.blendEquationSeparate(
                                  i.FUNC_ADD,
                                  o ? i.MAX : A.MAX_EXT
                                ),
                                i.clear(i.COLOR_BUFFER_BIT),
                                o
                                  ? i.drawArraysInstanced(
                                      i.TRIANGLES,
                                      0,
                                      3,
                                      p.length / 4
                                    )
                                  : f.drawArraysInstancedANGLE(
                                      i.TRIANGLES,
                                      0,
                                      3,
                                      p.length / 4
                                    );
                            });
                        }
                      ),
                      m(
                        "post",
                        n,
                        "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",
                        function (r) {
                          r.setAttribute("aUV", 2, i.STATIC_DRAW, 0, h),
                            r.setUniform("1i", "tex", B),
                            i.bindFramebuffer(i.FRAMEBUFFER, c),
                            i.disable(i.BLEND),
                            i.colorMask(0 === A, 1 === A, 2 === A, 3 === A),
                            i.viewport(d, f, e, t),
                            i.scissor(d, f, e, t),
                            i.drawArrays(i.TRIANGLES, 0, 3);
                        }
                      );
                  }),
                  i.isContextLost())
                )
                  throw (v(), Error("webgl context lost"));
              });
          }
          function E(e) {
            var t = e && e !== A ? e.canvas || e : m,
              r = B.get(t);
            if (void 0 === r) {
              p = !0;
              var n = null;
              try {
                var i = [
                    97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97,
                    106, 97,
                  ],
                  a = v(
                    4,
                    4,
                    "M8,8L16,8L24,24L16,24Z",
                    [0, 0, 32, 32],
                    24,
                    1,
                    e
                  );
                (r =
                  a &&
                  i.length === a.length &&
                  a.every(function (e, t) {
                    return e === i[t];
                  })) || ((n = "bad trial run results"), console.info(i, a));
              } catch (e) {
                (r = !1), (n = e.message);
              }
              n && console.warn("WebGL SDF generation not supported:", n),
                (p = !1),
                B.set(t, r);
            }
            return r;
          }
          var y = Object.freeze({
            __proto__: null,
            generate: v,
            generateIntoCanvas: C,
            generateIntoFramebuffer: b,
            isSupported: E,
          });
          return (
            (e.forEachPathCommand = t),
            (e.generate = function (e, t, r, n, i, a) {
              void 0 === i && (i = Math.max(n[2] - n[0], n[3] - n[1]) / 2),
                void 0 === a && (a = 1);
              try {
                return v.apply(y, arguments);
              } catch (e) {
                return (
                  console.info(
                    "WebGL SDF generation failed, falling back to JS",
                    e
                  ),
                  u.apply(f, arguments)
                );
              }
            }),
            (e.generateIntoCanvas = function (e, t, r, n, i, a, o, s, l, u) {
              void 0 === i && (i = Math.max(n[2] - n[0], n[3] - n[1]) / 2),
                void 0 === a && (a = 1),
                void 0 === s && (s = 0),
                void 0 === l && (l = 0),
                void 0 === u && (u = 0);
              try {
                return C.apply(y, arguments);
              } catch (e) {
                return (
                  console.info(
                    "WebGL SDF generation failed, falling back to JS",
                    e
                  ),
                  c.apply(f, arguments)
                );
              }
            }),
            (e.javascript = f),
            (e.pathToLineSegments = r),
            (e.webgl = y),
            (e.webglUtils = l),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
          );
        })({});
      }
      r.d(t, { A: () => n });
    },
    9100: (e, t, r) => {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      r.d(t, { A: () => n });
    },
    9224: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var n = r(9100),
        i = r(5499),
        a = r(8967),
        o = r(9671);
      let s = a.forwardRef(
        (
          {
            light: e,
            args: t,
            map: r,
            toneMapped: s = !1,
            color: l = "white",
            form: u = "rect",
            intensity: c = 1,
            scale: d = 1,
            target: f = [0, 0, 0],
            children: h,
            ...A
          },
          p
        ) => {
          let m = a.useRef(null);
          return (
            a.useImperativeHandle(p, () => m.current, []),
            a.useLayoutEffect(() => {
              h ||
                A.material ||
                ((0, i.s)(m.current.material, { color: l }),
                m.current.material.color.multiplyScalar(c));
            }, [l, c, h, A.material]),
            a.useLayoutEffect(() => {
              A.rotation || m.current.quaternion.identity(),
                f &&
                  !A.rotation &&
                  ("boolean" == typeof f
                    ? m.current.lookAt(0, 0, 0)
                    : m.current.lookAt(Array.isArray(f) ? new o.Pq0(...f) : f));
            }, [f, A.rotation]),
            (d = Array.isArray(d) && 2 === d.length ? [d[0], d[1], 1] : d),
            a.createElement(
              "mesh",
              (0, n.A)({ ref: m, scale: d }, A),
              "circle" === u
                ? a.createElement("ringGeometry", { args: t || [0, 0.5, 64] })
                : "ring" === u
                ? a.createElement("ringGeometry", {
                    args: t || [0.25, 0.5, 64],
                  })
                : "rect" === u || "plane" === u
                ? a.createElement("planeGeometry", { args: t || [1, 1] })
                : "box" === u
                ? a.createElement("boxGeometry", { args: t || [1, 1, 1] })
                : a.createElement(u, { args: t }),
              h ||
                a.createElement("meshBasicMaterial", {
                  toneMapped: s,
                  map: r,
                  side: o.$EB,
                }),
              e &&
                a.createElement("pointLight", (0, n.A)({ castShadow: !0 }, e))
            )
          );
        }
      );
    },
    9372: (e, t, r) => {
      "use strict";
      e.exports = r(3606);
    },
    9829: () => {},
  },
]);
