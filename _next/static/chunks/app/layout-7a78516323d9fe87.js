(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1348: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => a });
      var n = r(5681),
        o = r(8095);
      function a(e) {
        let { locale: t, ...r } = e;
        if (!t) throw Error(void 0);
        return (0, o.jsx)(n.Dk, { locale: t, ...r });
      }
    },
    2005: (e, t, r) => {
      "use strict";
      r.d(t, { KC: () => c, Zx: () => l });
      let n = "mandate:referralCode";
      function o(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (e) {
          return null;
        }
      }
      function a() {
        return void 0 !== window.localStorage;
      }
      function l() {
        let e;
        if (!a()) return null;
        try {
          e = window.localStorage.getItem(n);
        } catch (e) {
          return null;
        }
        let t = o(e);
        return t && "string" == typeof t.code && "number" == typeof t.capturedAt
          ? Date.now() - t.capturedAt > 2592e6
            ? ((function () {
                if (a())
                  try {
                    window.localStorage.removeItem(n);
                  } catch (e) {}
              })(),
              null)
            : t
          : null;
      }
      function c(e) {
        if (a())
          try {
            let t = window.localStorage.getItem(n);
            if (t && o(t)) return;
            let r = { code: e.toUpperCase(), capturedAt: Date.now() };
            window.localStorage.setItem(n, JSON.stringify(r));
          } catch (e) {}
      }
    },
    2242: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 1348)),
        Promise.resolve().then(r.t.bind(r, 8099, 23)),
        Promise.resolve().then(r.bind(r, 6659));
    },
    6659: (e, t, r) => {
      "use strict";
      r.d(t, { RefCaptureMount: () => l });
      var n = r(8967),
        o = r(2005);
      let a = /^[A-Z0-9]{8}$/i;
      function l() {
        return (
          (0, n.useEffect)(() => {
            let e = new URL(window.location.href),
              t = e.searchParams.get("ref");
            if (!t) return;
            a.test(t) && !(0, o.Zx)() && (0, o.KC)(t.toUpperCase()),
              e.searchParams.delete("ref");
            let r = "".concat(e.pathname).concat(e.search).concat(e.hash);
            try {
              window.history.replaceState(window.history.state, "", r);
            } catch (e) {}
          }, []),
          null
        );
      }
    },
    8099: () => {},
  },
  (e) => {
    e.O(0, [122, 681, 36, 381, 358], () => e((e.s = 2242))), (_N_E = e.O());
  },
]);
