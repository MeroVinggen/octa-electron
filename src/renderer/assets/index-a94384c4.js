var Xo = Object.defineProperty;
var Qo = (e, t, n) =>
  t in e ? Xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var De = (e, t, n) => (Qo(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
const Zo = 'modulepreload',
  ea = function (e) {
    return '/' + e;
  },
  cs = {},
  ta = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName('link');
    return Promise.all(
      n.map((s) => {
        if (((s = ea(s)), s in cs)) return;
        cs[s] = !0;
        const o = s.endsWith('.css'),
          c = o ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let f = i.length - 1; f >= 0; f--) {
            const h = i[f];
            if (h.href === s && (!o || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${s}"]${c}`)) return;
        const a = document.createElement('link');
        if (
          ((a.rel = o ? 'stylesheet' : Zo),
          o || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = s),
          document.head.appendChild(a),
          o)
        )
          return new Promise((f, h) => {
            a.addEventListener('load', f),
              a.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${s}`)));
          });
      }),
    )
      .then(() => t())
      .catch((s) => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented)) throw s;
      });
  };
function Xn(e) {
  return e.split('-')[1];
}
function Di(e) {
  return e === 'y' ? 'height' : 'width';
}
function Gt(e) {
  return e.split('-')[0];
}
function Qn(e) {
  return ['top', 'bottom'].includes(Gt(e)) ? 'x' : 'y';
}
function us(e, t, n) {
  let { reference: r, floating: i } = e;
  const s = r.x + r.width / 2 - i.width / 2,
    o = r.y + r.height / 2 - i.height / 2,
    c = Qn(t),
    l = Di(c),
    a = r[l] / 2 - i[l] / 2,
    f = c === 'x';
  let h;
  switch (Gt(t)) {
    case 'top':
      h = { x: s, y: r.y - i.height };
      break;
    case 'bottom':
      h = { x: s, y: r.y + r.height };
      break;
    case 'right':
      h = { x: r.x + r.width, y: o };
      break;
    case 'left':
      h = { x: r.x - i.width, y: o };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Xn(t)) {
    case 'start':
      h[c] -= a * (n && f ? -1 : 1);
      break;
    case 'end':
      h[c] += a * (n && f ? -1 : 1);
  }
  return h;
}
const na = async (e, t, n) => {
  const { placement: r = 'bottom', strategy: i = 'absolute', middleware: s = [], platform: o } = n,
    c = s.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let a = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: f, y: h } = us(a, r, l),
    m = r,
    g = {},
    w = 0;
  for (let b = 0; b < c.length; b++) {
    const { name: S, fn: E } = c[b],
      {
        x: A,
        y: x,
        data: B,
        reset: k,
      } = await E({
        x: f,
        y: h,
        initialPlacement: r,
        placement: m,
        strategy: i,
        middlewareData: g,
        rects: a,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (f = A ?? f),
      (h = x ?? h),
      (g = { ...g, [S]: { ...g[S], ...B } }),
      k &&
        w <= 50 &&
        (w++,
        typeof k == 'object' &&
          (k.placement && (m = k.placement),
          k.rects &&
            (a =
              k.rects === !0
                ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                : k.rects),
          ({ x: f, y: h } = us(a, m, l))),
        (b = -1));
  }
  return { x: f, y: h, placement: m, strategy: i, middlewareData: g };
};
function Ns(e) {
  return typeof e != 'number'
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ar(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Is(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: s, rects: o, elements: c, strategy: l } = e,
    {
      boundary: a = 'clippingAncestors',
      rootBoundary: f = 'viewport',
      elementContext: h = 'floating',
      altBoundary: m = !1,
      padding: g = 0,
    } = t,
    w = Ns(g),
    b = c[m ? (h === 'floating' ? 'reference' : 'floating') : h],
    S = Ar(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n
            ? b
            : b.contextElement ||
              (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating))),
        boundary: a,
        rootBoundary: f,
        strategy: l,
      }),
    ),
    E = h === 'floating' ? { ...o.floating, x: r, y: i } : o.reference,
    A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)),
    x = ((await (s.isElement == null ? void 0 : s.isElement(A))) &&
      (await (s.getScale == null ? void 0 : s.getScale(A)))) || { x: 1, y: 1 },
    B = Ar(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: E,
            offsetParent: A,
            strategy: l,
          })
        : E,
    );
  return {
    top: (S.top - B.top + w.top) / x.y,
    bottom: (B.bottom - S.bottom + w.bottom) / x.y,
    left: (S.left - B.left + w.left) / x.x,
    right: (B.right - S.right + w.right) / x.x,
  };
}
const ra = Math.min,
  ia = Math.max;
function ii(e, t, n) {
  return ia(e, ra(t, n));
}
const sa = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { element: n, padding: r = 0 } = e || {},
        { x: i, y: s, placement: o, rects: c, platform: l, elements: a } = t;
      if (n == null) return {};
      const f = Ns(r),
        h = { x: i, y: s },
        m = Qn(o),
        g = Di(m),
        w = await l.getDimensions(n),
        b = m === 'y',
        S = b ? 'top' : 'left',
        E = b ? 'bottom' : 'right',
        A = b ? 'clientHeight' : 'clientWidth',
        x = c.reference[g] + c.reference[m] - h[m] - c.floating[g],
        B = h[m] - c.reference[m],
        k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
      let I = k ? k[A] : 0;
      (I && (await (l.isElement == null ? void 0 : l.isElement(k)))) ||
        (I = a.floating[A] || c.floating[g]);
      const C = x / 2 - B / 2,
        $ = f[S],
        v = I - w[g] - f[E],
        d = I / 2 - w[g] / 2 + C,
        P = ii($, d, v),
        T = Xn(o) != null && d != P && c.reference[g] / 2 - (d < $ ? f[S] : f[E]) - w[g] / 2 < 0;
      return {
        [m]: h[m] - (T ? (d < $ ? $ - d : v - d) : 0),
        data: { [m]: P, centerOffset: d - P },
      };
    },
  }),
  oa = ['top', 'right', 'bottom', 'left'];
oa.reduce((e, t) => e.concat(t, t + '-start', t + '-end'), []);
const aa = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Or(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aa[t]);
}
function ca(e, t, n) {
  n === void 0 && (n = !1);
  const r = Xn(e),
    i = Qn(e),
    s = Di(i);
  let o =
    i === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
  return t.reference[s] > t.floating[s] && (o = Or(o)), { main: o, cross: Or(o) };
}
const ua = { start: 'end', end: 'start' };
function Hr(e) {
  return e.replace(/start|end/g, (t) => ua[t]);
}
const la = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n;
          const {
              placement: r,
              middlewareData: i,
              rects: s,
              initialPlacement: o,
              platform: c,
              elements: l,
            } = t,
            {
              mainAxis: a = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: w = !0,
              ...b
            } = e,
            S = Gt(r),
            E = Gt(o) === o,
            A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            x =
              h ||
              (E || !w
                ? [Or(o)]
                : (function (P) {
                    const T = Or(P);
                    return [Hr(P), T, Hr(T)];
                  })(o));
          h ||
            g === 'none' ||
            x.push(
              ...(function (P, T, Y, q) {
                const se = Xn(P);
                let re = (function (ie, oe, ke) {
                  const Ce = ['left', 'right'],
                    $e = ['right', 'left'],
                    Ue = ['top', 'bottom'],
                    et = ['bottom', 'top'];
                  switch (ie) {
                    case 'top':
                    case 'bottom':
                      return ke ? (oe ? $e : Ce) : oe ? Ce : $e;
                    case 'left':
                    case 'right':
                      return oe ? Ue : et;
                    default:
                      return [];
                  }
                })(Gt(P), Y === 'start', q);
                return (
                  se && ((re = re.map((ie) => ie + '-' + se)), T && (re = re.concat(re.map(Hr)))),
                  re
                );
              })(o, w, g, A),
            );
          const B = [o, ...x],
            k = await Is(t, b),
            I = [];
          let C = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((a && I.push(k[S]), f)) {
            const { main: P, cross: T } = ca(r, s, A);
            I.push(k[P], k[T]);
          }
          if (((C = [...C, { placement: r, overflows: I }]), !I.every((P) => P <= 0))) {
            var $, v;
            const P = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              T = B[P];
            if (T) return { data: { index: P, overflows: C }, reset: { placement: T } };
            let Y =
              (v = C.filter((q) => q.overflows[0] <= 0).sort(
                (q, se) => q.overflows[1] - se.overflows[1],
              )[0]) == null
                ? void 0
                : v.placement;
            if (!Y)
              switch (m) {
                case 'bestFit': {
                  var d;
                  const q =
                    (d = C.map((se) => [
                      se.placement,
                      se.overflows.filter((re) => re > 0).reduce((re, ie) => re + ie, 0),
                    ]).sort((se, re) => se[1] - re[1])[0]) == null
                      ? void 0
                      : d[0];
                  q && (Y = q);
                  break;
                }
                case 'initialPlacement':
                  Y = o;
              }
            if (r !== Y) return { reset: { placement: Y } };
          }
          return {};
        },
      }
    );
  },
  fa = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            i = await (async function (s, o) {
              const { placement: c, platform: l, elements: a } = s,
                f = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
                h = Gt(c),
                m = Xn(c),
                g = Qn(c) === 'x',
                w = ['left', 'top'].includes(h) ? -1 : 1,
                b = f && g ? -1 : 1,
                S = typeof o == 'function' ? o(s) : o;
              let {
                mainAxis: E,
                crossAxis: A,
                alignmentAxis: x,
              } = typeof S == 'number'
                ? { mainAxis: S, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...S };
              return (
                m && typeof x == 'number' && (A = m === 'end' ? -1 * x : x),
                g ? { x: A * b, y: E * w } : { x: E * w, y: A * b }
              );
            })(t, e);
          return { x: n + i.x, y: r + i.y, data: i };
        },
      }
    );
  };
function da(e) {
  return e === 'x' ? 'y' : 'x';
}
const ha = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'shift',
      options: e,
      async fn(t) {
        const { x: n, y: r, placement: i } = t,
          {
            mainAxis: s = !0,
            crossAxis: o = !1,
            limiter: c = {
              fn: (S) => {
                let { x: E, y: A } = S;
                return { x: E, y: A };
              },
            },
            ...l
          } = e,
          a = { x: n, y: r },
          f = await Is(t, l),
          h = Qn(Gt(i)),
          m = da(h);
        let g = a[h],
          w = a[m];
        if (s) {
          const S = h === 'y' ? 'bottom' : 'right';
          g = ii(g + f[h === 'y' ? 'top' : 'left'], g, g - f[S]);
        }
        if (o) {
          const S = m === 'y' ? 'bottom' : 'right';
          w = ii(w + f[m === 'y' ? 'top' : 'left'], w, w - f[S]);
        }
        const b = c.fn({ ...t, [h]: g, [m]: w });
        return { ...b, data: { x: b.x - n, y: b.y - r } };
      },
    }
  );
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vt(e) {
  return ot(e).getComputedStyle(e);
}
function Bs(e) {
  return e instanceof ot(e).Node;
}
function Ft(e) {
  return Bs(e) ? (e.nodeName || '').toLowerCase() : '';
}
let ar;
function js() {
  if (ar) return ar;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((ar = e.brands.map((t) => t.brand + '/' + t.version).join(' ')), ar)
    : navigator.userAgent;
}
function wt(e) {
  return e instanceof ot(e).HTMLElement;
}
function at(e) {
  return e instanceof ot(e).Element;
}
function ls(e) {
  return typeof ShadowRoot > 'u' ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Un(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(i);
}
function pa(e) {
  return ['table', 'td', 'th'].includes(Ft(e));
}
function si(e) {
  const t = /firefox/i.test(js()),
    n = vt(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (!!r && r !== 'none') ||
    (t && n.willChange === 'filter') ||
    (t && !!n.filter && n.filter !== 'none') ||
    ['transform', 'perspective'].some((i) => n.willChange.includes(i)) ||
    ['paint', 'layout', 'strict', 'content'].some((i) => {
      const s = n.contain;
      return s != null && s.includes(i);
    })
  );
}
function oi() {
  return /^((?!chrome|android).)*safari/i.test(js());
}
function Kr(e) {
  return ['html', 'body', '#document'].includes(Ft(e));
}
const fs = Math.min,
  Bn = Math.max,
  Tr = Math.round;
function Ds(e) {
  const t = vt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = wt(e),
    s = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    c = Tr(n) !== s || Tr(r) !== o;
  return c && ((n = s), (r = o)), { width: n, height: r, fallback: c };
}
function Rs(e) {
  return at(e) ? e : e.contextElement;
}
const $s = { x: 1, y: 1 };
function yn(e) {
  const t = Rs(e);
  if (!wt(t)) return $s;
  const n = t.getBoundingClientRect(),
    { width: r, height: i, fallback: s } = Ds(t);
  let o = (s ? Tr(n.width) : n.width) / r,
    c = (s ? Tr(n.height) : n.height) / i;
  return (o && Number.isFinite(o)) || (o = 1), (c && Number.isFinite(c)) || (c = 1), { x: o, y: c };
}
function en(e, t, n, r) {
  var i, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    c = Rs(e);
  let l = $s;
  t && (r ? at(r) && (l = yn(r)) : (l = yn(e)));
  const a = c ? ot(c) : window,
    f = oi() && n;
  let h = (o.left + ((f && ((i = a.visualViewport) == null ? void 0 : i.offsetLeft)) || 0)) / l.x,
    m = (o.top + ((f && ((s = a.visualViewport) == null ? void 0 : s.offsetTop)) || 0)) / l.y,
    g = o.width / l.x,
    w = o.height / l.y;
  if (c) {
    const b = ot(c),
      S = r && at(r) ? ot(r) : r;
    let E = b.frameElement;
    for (; E && r && S !== b; ) {
      const A = yn(E),
        x = E.getBoundingClientRect(),
        B = getComputedStyle(E);
      (x.x += (E.clientLeft + parseFloat(B.paddingLeft)) * A.x),
        (x.y += (E.clientTop + parseFloat(B.paddingTop)) * A.y),
        (h *= A.x),
        (m *= A.y),
        (g *= A.x),
        (w *= A.y),
        (h += x.x),
        (m += x.y),
        (E = ot(E).frameElement);
    }
  }
  return Ar({ width: g, height: w, x: h, y: m });
}
function Kt(e) {
  return ((Bs(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fr(e) {
  return at(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ls(e) {
  return en(Kt(e)).left + Fr(e).scrollLeft;
}
function _n(e) {
  if (Ft(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (ls(e) && e.host) || Kt(e);
  return ls(t) ? t.host : t;
}
function Ks(e) {
  const t = _n(e);
  return Kr(t) ? t.ownerDocument.body : wt(t) && Un(t) ? t : Ks(t);
}
function jn(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ks(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = ot(r);
  return i ? t.concat(s, s.visualViewport || [], Un(r) ? r : []) : t.concat(r, jn(r));
}
function ds(e, t, n) {
  let r;
  if (t === 'viewport')
    r = (function (o, c) {
      const l = ot(o),
        a = Kt(o),
        f = l.visualViewport;
      let h = a.clientWidth,
        m = a.clientHeight,
        g = 0,
        w = 0;
      if (f) {
        (h = f.width), (m = f.height);
        const b = oi();
        (!b || (b && c === 'fixed')) && ((g = f.offsetLeft), (w = f.offsetTop));
      }
      return { width: h, height: m, x: g, y: w };
    })(e, n);
  else if (t === 'document')
    r = (function (o) {
      const c = Kt(o),
        l = Fr(o),
        a = o.ownerDocument.body,
        f = Bn(c.scrollWidth, c.clientWidth, a.scrollWidth, a.clientWidth),
        h = Bn(c.scrollHeight, c.clientHeight, a.scrollHeight, a.clientHeight);
      let m = -l.scrollLeft + Ls(o);
      const g = -l.scrollTop;
      return (
        vt(a).direction === 'rtl' && (m += Bn(c.clientWidth, a.clientWidth) - f),
        { width: f, height: h, x: m, y: g }
      );
    })(Kt(e));
  else if (at(t))
    r = (function (o, c) {
      const l = en(o, !0, c === 'fixed'),
        a = l.top + o.clientTop,
        f = l.left + o.clientLeft,
        h = wt(o) ? yn(o) : { x: 1, y: 1 };
      return { width: o.clientWidth * h.x, height: o.clientHeight * h.y, x: f * h.x, y: a * h.y };
    })(t, n);
  else {
    const o = { ...t };
    if (oi()) {
      var i, s;
      const c = ot(e);
      (o.x -= ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0),
        (o.y -= ((s = c.visualViewport) == null ? void 0 : s.offsetTop) || 0);
    }
    r = o;
  }
  return Ar(r);
}
function Fs(e, t) {
  const n = _n(e);
  return !(n === t || !at(n) || Kr(n)) && (vt(n).position === 'fixed' || Fs(n, t));
}
function hs(e, t) {
  return wt(e) && vt(e).position !== 'fixed' ? (t ? t(e) : e.offsetParent) : null;
}
function ps(e, t) {
  const n = ot(e);
  if (!wt(e)) return n;
  let r = hs(e, t);
  for (; r && pa(r) && vt(r).position === 'static'; ) r = hs(r, t);
  return r && (Ft(r) === 'html' || (Ft(r) === 'body' && vt(r).position === 'static' && !si(r)))
    ? n
    : r ||
        (function (i) {
          let s = _n(i);
          for (; wt(s) && !Kr(s); ) {
            if (si(s)) return s;
            s = _n(s);
          }
          return null;
        })(e) ||
        n;
}
function ya(e, t, n) {
  const r = wt(t),
    i = Kt(t),
    s = en(e, !0, n === 'fixed', t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (r || (!r && n !== 'fixed'))
    if (((Ft(t) !== 'body' || Un(i)) && (o = Fr(t)), wt(t))) {
      const l = en(t, !0);
      (c.x = l.x + t.clientLeft), (c.y = l.y + t.clientTop);
    } else i && (c.x = Ls(i));
  return {
    x: s.left + o.scrollLeft - c.x,
    y: s.top + o.scrollTop - c.y,
    width: s.width,
    height: s.height,
  };
}
const ma = {
  getClippingRect: function (e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
    const s =
        n === 'clippingAncestors'
          ? (function (a, f) {
              const h = f.get(a);
              if (h) return h;
              let m = jn(a).filter((S) => at(S) && Ft(S) !== 'body'),
                g = null;
              const w = vt(a).position === 'fixed';
              let b = w ? _n(a) : a;
              for (; at(b) && !Kr(b); ) {
                const S = vt(b),
                  E = si(b);
                E || S.position !== 'fixed' || (g = null),
                  (
                    w
                      ? !E && !g
                      : (!E &&
                          S.position === 'static' &&
                          g &&
                          ['absolute', 'fixed'].includes(g.position)) ||
                        (Un(b) && !E && Fs(a, b))
                  )
                    ? (m = m.filter((A) => A !== b))
                    : (g = S),
                  (b = _n(b));
              }
              return f.set(a, m), m;
            })(t, this._c)
          : [].concat(n),
      o = [...s, r],
      c = o[0],
      l = o.reduce((a, f) => {
        const h = ds(t, f, i);
        return (
          (a.top = Bn(h.top, a.top)),
          (a.right = fs(h.right, a.right)),
          (a.bottom = fs(h.bottom, a.bottom)),
          (a.left = Bn(h.left, a.left)),
          a
        );
      }, ds(t, c, i));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { rect: t, offsetParent: n, strategy: r } = e;
    const i = wt(n),
      s = Kt(n);
    if (n === s) return t;
    let o = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 1, y: 1 };
    const l = { x: 0, y: 0 };
    if ((i || (!i && r !== 'fixed')) && ((Ft(n) !== 'body' || Un(s)) && (o = Fr(n)), wt(n))) {
      const a = en(n);
      (c = yn(n)), (l.x = a.x + n.clientLeft), (l.y = a.y + n.clientTop);
    }
    return {
      width: t.width * c.x,
      height: t.height * c.y,
      x: t.x * c.x - o.scrollLeft * c.x + l.x,
      y: t.y * c.y - o.scrollTop * c.y + l.y,
    };
  },
  isElement: at,
  getDimensions: function (e) {
    return Ds(e);
  },
  getOffsetParent: ps,
  getDocumentElement: Kt,
  getScale: yn,
  async getElementRects(e) {
    let { reference: t, floating: n, strategy: r } = e;
    const i = this.getOffsetParent || ps,
      s = this.getDimensions;
    return { reference: ya(t, await i(n), r), floating: { x: 0, y: 0, ...(await s(n)) } };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => vt(e).direction === 'rtl',
};
function ga(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: s = !0,
      elementResize: o = !0,
      animationFrame: c = !1,
    } = r,
    l = i || s ? [...(at(e) ? jn(e) : e.contextElement ? jn(e.contextElement) : []), ...jn(t)] : [];
  l.forEach((m) => {
    const g = !at(m) && m.toString().includes('V');
    !i || (c && !g) || m.addEventListener('scroll', n, { passive: !0 }),
      s && m.addEventListener('resize', n);
  });
  let a,
    f = null;
  o &&
    ((f = new ResizeObserver(() => {
      n();
    })),
    at(e) && !c && f.observe(e),
    at(e) || !e.contextElement || c || f.observe(e.contextElement),
    f.observe(t));
  let h = c ? en(e) : null;
  return (
    c &&
      (function m() {
        const g = en(e);
        !h || (g.x === h.x && g.y === h.y && g.width === h.width && g.height === h.height) || n(),
          (h = g),
          (a = requestAnimationFrame(m));
      })(),
    n(),
    () => {
      var m;
      l.forEach((g) => {
        i && g.removeEventListener('scroll', n), s && g.removeEventListener('resize', n);
      }),
        (m = f) == null || m.disconnect(),
        (f = null),
        c && cancelAnimationFrame(a);
    }
  );
}
const va = (e, t, n) => {
  const r = new Map(),
    i = { platform: ma, ...n },
    s = { ...i.platform, _c: r };
  return na(e, t, { ...i, platform: s });
};
function Ve() {}
const Ur = (e) => e;
function ba(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function Us(e) {
  return e();
}
function ys() {
  return Object.create(null);
}
function Bt(e) {
  e.forEach(Us);
}
function rn(e) {
  return typeof e == 'function';
}
function wa(e, t) {
  return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
let cr;
function Nl(e, t) {
  return cr || (cr = document.createElement('a')), (cr.href = t), e === cr.href;
}
function _a(e) {
  return Object.keys(e).length === 0;
}
function Ri(e, ...t) {
  if (e == null) return Ve;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ms(e) {
  let t;
  return Ri(e, (n) => (t = n))(), t;
}
function Il(e, t, n) {
  e.$$.on_destroy.push(Ri(t, n));
}
function Bl(e, t, n, r) {
  if (e) {
    const i = qs(e, t, n, r);
    return e[0](i);
  }
}
function qs(e, t, n, r) {
  return e[1] && r ? ba(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function jl(e, t, n, r) {
  if (e[2] && r) {
    const i = e[2](r(n));
    if (t.dirty === void 0) return i;
    if (typeof i == 'object') {
      const s = [],
        o = Math.max(t.dirty.length, i.length);
      for (let c = 0; c < o; c += 1) s[c] = t.dirty[c] | i[c];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Dl(e, t, n, r, i, s) {
  if (i) {
    const o = qs(t, n, r, s);
    e.p(o, i);
  }
}
function Rl(e) {
  if (e.ctx.length > 32) {
    const t = [],
      n = e.ctx.length / 32;
    for (let r = 0; r < n; r++) t[r] = -1;
    return t;
  }
  return -1;
}
function $l(e) {
  const t = {};
  for (const n in e) n[0] !== '$' && (t[n] = e[n]);
  return t;
}
function Ll(e, t) {
  const n = {};
  t = new Set(t);
  for (const r in e) !t.has(r) && r[0] !== '$' && (n[r] = e[r]);
  return n;
}
function Kl(e) {
  const t = {};
  for (const n in e) t[n] = !0;
  return t;
}
function Fl(e) {
  return e ?? '';
}
function Ul(e, t, n) {
  return e.set(n), t;
}
function Ml(e) {
  return e && rn(e.destroy) ? e.destroy : Ve;
}
function ql(e) {
  const t = typeof e == 'string' && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || 'px'] : [e, 'px'];
}
const Ws = typeof window < 'u';
let Mr = Ws ? () => window.performance.now() : () => Date.now(),
  $i = Ws ? (e) => requestAnimationFrame(e) : Ve;
const mn = new Set();
function Vs(e) {
  mn.forEach((t) => {
    t.c(e) || (mn.delete(t), t.f());
  }),
    mn.size !== 0 && $i(Vs);
}
function qr(e) {
  let t;
  return (
    mn.size === 0 && $i(Vs),
    {
      promise: new Promise((n) => {
        mn.add((t = { c: e, f: n }));
      }),
      abort() {
        mn.delete(t);
      },
    }
  );
}
const Wl = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function Sa(e, t) {
  e.appendChild(t);
}
function Ys(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function xa(e) {
  const t = zs('style');
  return Ea(Ys(e), t), t.sheet;
}
function Ea(e, t) {
  return Sa(e.head || e, t), t.sheet;
}
function Aa(e, t, n) {
  e.insertBefore(t, n || null);
}
function Li(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Vl(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function zs(e) {
  return document.createElement(e);
}
function Oa(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function Js(e) {
  return document.createTextNode(e);
}
function Yl() {
  return Js(' ');
}
function zl() {
  return Js('');
}
function Jl(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function Hl(e) {
  return function (t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function Ta(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const Pa = ['width', 'height'];
function Gl(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null
      ? e.removeAttribute(r)
      : r === 'style'
      ? (e.style.cssText = t[r])
      : r === '__value'
      ? (e.value = e[r] = t[r])
      : n[r] && n[r].set && Pa.indexOf(r) === -1
      ? (e[r] = t[r])
      : Ta(e, r, t[r]);
}
function Xl(e) {
  let t;
  return {
    p(...n) {
      (t = n), t.forEach((r) => e.push(r));
    },
    r() {
      t.forEach((n) => e.splice(e.indexOf(n), 1));
    },
  };
}
function ka(e) {
  return Array.from(e.childNodes);
}
function Ql(e, t) {
  (t = '' + t), e.data !== t && (e.data = t);
}
function Zl(e, t) {
  e.value = t ?? '';
}
function ef(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? 'important' : '');
}
function tf(e, t, n) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function nf(e, t) {
  for (let n = 0; n < e.options.length; n += 1) {
    const r = e.options[n];
    r.selected = ~t.indexOf(r.__value);
  }
}
function rf(e) {
  const t = e.querySelector(':checked');
  return t && t.__value;
}
function sf(e) {
  return [].map.call(e.querySelectorAll(':checked'), (t) => t.__value);
}
function of(e, t, n) {
  e.classList[n ? 'add' : 'remove'](t);
}
function Hs(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent('CustomEvent');
  return i.initCustomEvent(e, n, r, t), i;
}
class af {
  constructor(t = !1) {
    (this.is_svg = !1), (this.is_svg = t), (this.e = this.n = null);
  }
  c(t) {
    this.h(t);
  }
  m(t, n, r = null) {
    this.e ||
      (this.is_svg
        ? (this.e = Oa(n.nodeName))
        : (this.e = zs(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
      (this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
      this.c(t)),
      this.i(r);
  }
  h(t) {
    (this.e.innerHTML = t),
      (this.n = Array.from(
        this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes,
      ));
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1) Aa(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(Li);
  }
}
function cf(e, t) {
  return new e(t);
}
const Pr = new Map();
let kr = 0;
function Ca(e) {
  let t = 5381,
    n = e.length;
  for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n);
  return t >>> 0;
}
function Na(e, t) {
  const n = { stylesheet: xa(t), rules: {} };
  return Pr.set(e, n), n;
}
function Mn(e, t, n, r, i, s, o, c = 0) {
  const l = 16.666 / r;
  let a = `{
`;
  for (let S = 0; S <= 1; S += l) {
    const E = t + (n - t) * s(S);
    a +=
      S * 100 +
      `%{${o(E, 1 - E)}}
`;
  }
  const f =
      a +
      `100% {${o(n, 1 - n)}}
}`,
    h = `__svelte_${Ca(f)}_${c}`,
    m = Ys(e),
    { stylesheet: g, rules: w } = Pr.get(m) || Na(m, e);
  w[h] || ((w[h] = !0), g.insertRule(`@keyframes ${h} ${f}`, g.cssRules.length));
  const b = e.style.animation || '';
  return (e.style.animation = `${b ? `${b}, ` : ''}${h} ${r}ms linear ${i}ms 1 both`), (kr += 1), h;
}
function qn(e, t) {
  const n = (e.style.animation || '').split(', '),
    r = n.filter(t ? (s) => s.indexOf(t) < 0 : (s) => s.indexOf('__svelte') === -1),
    i = n.length - r.length;
  i && ((e.style.animation = r.join(', ')), (kr -= i), kr || Ia());
}
function Ia() {
  $i(() => {
    kr ||
      (Pr.forEach((e) => {
        const { ownerNode: t } = e.stylesheet;
        t && Li(t);
      }),
      Pr.clear());
  });
}
function uf(e, t, n, r) {
  if (!t) return Ve;
  const i = e.getBoundingClientRect();
  if (t.left === i.left && t.right === i.right && t.top === i.top && t.bottom === i.bottom)
    return Ve;
  const {
    delay: s = 0,
    duration: o = 300,
    easing: c = Ur,
    start: l = Mr() + s,
    end: a = l + o,
    tick: f = Ve,
    css: h,
  } = n(e, { from: t, to: i }, r);
  let m = !0,
    g = !1,
    w;
  function b() {
    h && (w = Mn(e, 0, 1, o, s, c, h)), s || (g = !0);
  }
  function S() {
    h && qn(e, w), (m = !1);
  }
  return (
    qr((E) => {
      if ((!g && E >= l && (g = !0), g && E >= a && (f(1, 0), S()), !m)) return !1;
      if (g) {
        const A = E - l,
          x = 0 + 1 * c(A / o);
        f(x, 1 - x);
      }
      return !0;
    }),
    b(),
    f(0, 1),
    S
  );
}
function lf(e) {
  const t = getComputedStyle(e);
  if (t.position !== 'absolute' && t.position !== 'fixed') {
    const { width: n, height: r } = t,
      i = e.getBoundingClientRect();
    (e.style.position = 'absolute'), (e.style.width = n), (e.style.height = r), Ba(e, i);
  }
}
function Ba(e, t) {
  const n = e.getBoundingClientRect();
  if (t.left !== n.left || t.top !== n.top) {
    const r = getComputedStyle(e),
      i = r.transform === 'none' ? '' : r.transform;
    e.style.transform = `${i} translate(${t.left - n.left}px, ${t.top - n.top}px)`;
  }
}
let Wn;
function Dn(e) {
  Wn = e;
}
function Zn() {
  if (!Wn) throw new Error('Function called outside component initialization');
  return Wn;
}
function ff(e) {
  Zn().$$.on_mount.push(e);
}
function df(e) {
  Zn().$$.on_destroy.push(e);
}
function hf() {
  const e = Zn();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const s = Hs(t, n, { cancelable: r });
      return (
        i.slice().forEach((o) => {
          o.call(e, s);
        }),
        !s.defaultPrevented
      );
    }
    return !0;
  };
}
function pf(e, t) {
  return Zn().$$.context.set(e, t), t;
}
function yf(e) {
  return Zn().$$.context.get(e);
}
function mf(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const dn = [],
  ms = [];
let gn = [];
const ai = [],
  Gs = Promise.resolve();
let ci = !1;
function Xs() {
  ci || ((ci = !0), Gs.then(Qs));
}
function gf() {
  return Xs(), Gs;
}
function Sn(e) {
  gn.push(e);
}
function vf(e) {
  ai.push(e);
}
const Gr = new Set();
let cn = 0;
function Qs() {
  if (cn !== 0) return;
  const e = Wn;
  do {
    try {
      for (; cn < dn.length; ) {
        const t = dn[cn];
        cn++, Dn(t), ja(t.$$);
      }
    } catch (t) {
      throw ((dn.length = 0), (cn = 0), t);
    }
    for (Dn(null), dn.length = 0, cn = 0; ms.length; ) ms.pop()();
    for (let t = 0; t < gn.length; t += 1) {
      const n = gn[t];
      Gr.has(n) || (Gr.add(n), n());
    }
    gn.length = 0;
  } while (dn.length);
  for (; ai.length; ) ai.pop()();
  (ci = !1), Gr.clear(), Dn(e);
}
function ja(e) {
  if (e.fragment !== null) {
    e.update(), Bt(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Sn);
  }
}
function Da(e) {
  const t = [],
    n = [];
  gn.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : n.push(r))), n.forEach((r) => r()), (gn = t);
}
let Pn;
function Ki() {
  return (
    Pn ||
      ((Pn = Promise.resolve()),
      Pn.then(() => {
        Pn = null;
      })),
    Pn
  );
}
function Xt(e, t, n) {
  e.dispatchEvent(Hs(`${t ? 'intro' : 'outro'}${n}`));
}
const gr = new Set();
let St;
function bf() {
  St = { r: 0, c: [], p: St };
}
function wf() {
  St.r || Bt(St.c), (St = St.p);
}
function Zs(e, t) {
  e && e.i && (gr.delete(e), e.i(t));
}
function Ra(e, t, n, r) {
  if (e && e.o) {
    if (gr.has(e)) return;
    gr.add(e),
      St.c.push(() => {
        gr.delete(e), r && (n && e.d(1), r());
      }),
      e.o(t);
  } else r && r();
}
const Fi = { duration: 0 };
function _f(e, t, n) {
  const r = { direction: 'in' };
  let i = t(e, n, r),
    s = !1,
    o,
    c,
    l = 0;
  function a() {
    o && qn(e, o);
  }
  function f() {
    const { delay: m = 0, duration: g = 300, easing: w = Ur, tick: b = Ve, css: S } = i || Fi;
    S && (o = Mn(e, 0, 1, g, m, w, S, l++)), b(0, 1);
    const E = Mr() + m,
      A = E + g;
    c && c.abort(),
      (s = !0),
      Sn(() => Xt(e, !0, 'start')),
      (c = qr((x) => {
        if (s) {
          if (x >= A) return b(1, 0), Xt(e, !0, 'end'), a(), (s = !1);
          if (x >= E) {
            const B = w((x - E) / g);
            b(B, 1 - B);
          }
        }
        return s;
      }));
  }
  let h = !1;
  return {
    start() {
      h || ((h = !0), qn(e), rn(i) ? ((i = i(r)), Ki().then(f)) : f());
    },
    invalidate() {
      h = !1;
    },
    end() {
      s && (a(), (s = !1));
    },
  };
}
function Sf(e, t, n) {
  const r = { direction: 'out' };
  let i = t(e, n, r),
    s = !0,
    o;
  const c = St;
  c.r += 1;
  function l() {
    const { delay: a = 0, duration: f = 300, easing: h = Ur, tick: m = Ve, css: g } = i || Fi;
    g && (o = Mn(e, 1, 0, f, a, h, g));
    const w = Mr() + a,
      b = w + f;
    Sn(() => Xt(e, !1, 'start')),
      qr((S) => {
        if (s) {
          if (S >= b) return m(0, 1), Xt(e, !1, 'end'), --c.r || Bt(c.c), !1;
          if (S >= w) {
            const E = h((S - w) / f);
            m(1 - E, E);
          }
        }
        return s;
      });
  }
  return (
    rn(i)
      ? Ki().then(() => {
          (i = i(r)), l();
        })
      : l(),
    {
      end(a) {
        a && i.tick && i.tick(1, 0), s && (o && qn(e, o), (s = !1));
      },
    }
  );
}
function xf(e, t, n, r) {
  const i = { direction: 'both' };
  let s = t(e, n, i),
    o = r ? 0 : 1,
    c = null,
    l = null,
    a = null;
  function f() {
    a && qn(e, a);
  }
  function h(g, w) {
    const b = g.b - o;
    return (
      (w *= Math.abs(b)),
      { a: o, b: g.b, d: b, duration: w, start: g.start, end: g.start + w, group: g.group }
    );
  }
  function m(g) {
    const { delay: w = 0, duration: b = 300, easing: S = Ur, tick: E = Ve, css: A } = s || Fi,
      x = { start: Mr() + w, b: g };
    g || ((x.group = St), (St.r += 1)),
      c || l
        ? (l = x)
        : (A && (f(), (a = Mn(e, o, g, b, w, S, A))),
          g && E(0, 1),
          (c = h(x, b)),
          Sn(() => Xt(e, g, 'start')),
          qr((B) => {
            if (
              (l &&
                B > l.start &&
                ((c = h(l, b)),
                (l = null),
                Xt(e, c.b, 'start'),
                A && (f(), (a = Mn(e, o, c.b, c.duration, 0, S, s.css)))),
              c)
            ) {
              if (B >= c.end)
                E((o = c.b), 1 - o),
                  Xt(e, c.b, 'end'),
                  l || (c.b ? f() : --c.group.r || Bt(c.group.c)),
                  (c = null);
              else if (B >= c.start) {
                const k = B - c.start;
                (o = c.a + c.d * S(k / c.duration)), E(o, 1 - o);
              }
            }
            return !!(c || l);
          }));
  }
  return {
    run(g) {
      rn(s)
        ? Ki().then(() => {
            (s = s(i)), m(g);
          })
        : m(g);
    },
    end() {
      f(), (c = l = null);
    },
  };
}
function $a(e, t) {
  e.d(1), t.delete(e.key);
}
function La(e, t) {
  Ra(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function Ef(e, t) {
  e.f(), $a(e, t);
}
function Af(e, t) {
  e.f(), La(e, t);
}
function Of(e, t, n, r, i, s, o, c, l, a, f, h) {
  let m = e.length,
    g = s.length,
    w = m;
  const b = {};
  for (; w--; ) b[e[w].key] = w;
  const S = [],
    E = new Map(),
    A = new Map(),
    x = [];
  for (w = g; w--; ) {
    const C = h(i, s, w),
      $ = n(C);
    let v = o.get($);
    v ? r && x.push(() => v.p(C, t)) : ((v = a($, C)), v.c()),
      E.set($, (S[w] = v)),
      $ in b && A.set($, Math.abs(w - b[$]));
  }
  const B = new Set(),
    k = new Set();
  function I(C) {
    Zs(C, 1), C.m(c, f), o.set(C.key, C), (f = C.first), g--;
  }
  for (; m && g; ) {
    const C = S[g - 1],
      $ = e[m - 1],
      v = C.key,
      d = $.key;
    C === $
      ? ((f = C.first), m--, g--)
      : E.has(d)
      ? !o.has(v) || B.has(v)
        ? I(C)
        : k.has(d)
        ? m--
        : A.get(v) > A.get(d)
        ? (k.add(v), I(C))
        : (B.add(d), m--)
      : (l($, o), m--);
  }
  for (; m--; ) {
    const C = e[m];
    E.has(C.key) || l(C, o);
  }
  for (; g; ) I(S[g - 1]);
  return Bt(x), S;
}
function Tf(e, t) {
  const n = {},
    r = {},
    i = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const o = e[s],
      c = t[s];
    if (c) {
      for (const l in o) l in c || (r[l] = 1);
      for (const l in c) i[l] || ((n[l] = c[l]), (i[l] = 1));
      e[s] = c;
    } else for (const l in o) i[l] = 1;
  }
  for (const o in r) o in n || (n[o] = void 0);
  return n;
}
function Pf(e) {
  return typeof e == 'object' && e !== null ? e : {};
}
function kf(e, t, n) {
  const r = e.$$.props[t];
  r !== void 0 && ((e.$$.bound[r] = n), n(e.$$.ctx[r]));
}
function Cf(e) {
  e && e.c();
}
function Ka(e, t, n, r) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n),
    r ||
      Sn(() => {
        const o = e.$$.on_mount.map(Us).filter(rn);
        e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Bt(o), (e.$$.on_mount = []);
      }),
    s.forEach(Sn);
}
function Fa(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (Da(n.after_update),
    Bt(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Ua(e, t) {
  e.$$.dirty[0] === -1 && (dn.push(e), Xs(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Nf(e, t, n, r, i, s, o, c = [-1]) {
  const l = Wn;
  Dn(e);
  const a = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: Ve,
    not_equal: i,
    bound: ys(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: ys(),
    dirty: c,
    skip_bound: !1,
    root: t.target || l.$$.root,
  });
  o && o(a.root);
  let f = !1;
  if (
    ((a.ctx = n
      ? n(e, t.props || {}, (h, m, ...g) => {
          const w = g.length ? g[0] : m;
          return (
            a.ctx &&
              i(a.ctx[h], (a.ctx[h] = w)) &&
              (!a.skip_bound && a.bound[h] && a.bound[h](w), f && Ua(e, h)),
            m
          );
        })
      : []),
    a.update(),
    (f = !0),
    Bt(a.before_update),
    (a.fragment = r ? r(a.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const h = ka(t.target);
      a.fragment && a.fragment.l(h), h.forEach(Li);
    } else a.fragment && a.fragment.c();
    t.intro && Zs(e.$$.fragment), Ka(e, t.target, t.anchor, t.customElement), Qs();
  }
  Dn(l);
}
class If {
  $destroy() {
    Fa(this, 1), (this.$destroy = Ve);
  }
  $on(t, n) {
    if (!rn(n)) return Ve;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      }
    );
  }
  $set(t) {
    this.$$set && !_a(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const un = [];
function Ma(e, t) {
  return { subscribe: En(e, t).subscribe };
}
function En(e, t = Ve) {
  let n;
  const r = new Set();
  function i(c) {
    if (wa(e, c) && ((e = c), n)) {
      const l = !un.length;
      for (const a of r) a[1](), un.push(a, e);
      if (l) {
        for (let a = 0; a < un.length; a += 2) un[a][0](un[a + 1]);
        un.length = 0;
      }
    }
  }
  function s(c) {
    i(c(e));
  }
  function o(c, l = Ve) {
    const a = [c, l];
    return (
      r.add(a),
      r.size === 1 && (n = t(i) || Ve),
      c(e),
      () => {
        r.delete(a), r.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: i, update: s, subscribe: o };
}
function Bf(e, t, n) {
  const r = !Array.isArray(e),
    i = r ? [e] : e,
    s = t.length < 2;
  return Ma(n, (o) => {
    let c = !1;
    const l = [];
    let a = 0,
      f = Ve;
    const h = () => {
        if (a) return;
        f();
        const g = t(r ? l[0] : l, o);
        s ? o(g) : (f = rn(g) ? g : Ve);
      },
      m = i.map((g, w) =>
        Ri(
          g,
          (b) => {
            (l[w] = b), (a &= ~(1 << w)), c && h();
          },
          () => {
            a |= 1 << w;
          },
        ),
      );
    return (
      (c = !0),
      h(),
      function () {
        Bt(m), f(), (c = !1);
      }
    );
  });
}
const eo = En(void 0);
function jf(e, t) {
  const {
      computePosition: n,
      autoUpdate: r,
      offset: i,
      shift: s,
      flip: o,
      arrow: c,
      size: l,
      autoPlacement: a,
      hide: f,
      inline: h,
    } = Ms(eo),
    m = { open: !1, autoUpdateCleanup: () => {} },
    g = ':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';
  let w;
  const b = 'https://www.skeleton.dev/utilities/popups';
  let S, E;
  function A() {
    (S = document.querySelector(`[data-popup="${t.target}"]`) ?? document.createElement('div')),
      (E = S.querySelector('.arrow') ?? document.createElement('div'));
  }
  A();
  function x() {
    var d, P, T, Y, q, se, re, ie;
    if (!S) throw new Error(`The data-popup="${t.target}" element was not found. ${b}`);
    if (!n)
      throw new Error(`Floating UI 'computePosition' not found for data-popup="${t.target}". ${b}`);
    if (!i) throw new Error(`Floating UI 'offset' not found for data-popup="${t.target}". ${b}`);
    if (!s) throw new Error(`Floating UI 'shift' not found for data-popup="${t.target}". ${b}`);
    if (!o) throw new Error(`Floating UI 'flip' not found for data-popup="${t.target}". ${b}`);
    if (!c) throw new Error(`Floating UI 'arrow' not found for data-popup="${t.target}". ${b}`);
    const v = [];
    l && v.push(l((d = t.middleware) == null ? void 0 : d.size)),
      a && v.push(a((P = t.middleware) == null ? void 0 : P.autoPlacement)),
      f && v.push(f((T = t.middleware) == null ? void 0 : T.hide)),
      h && v.push(h((Y = t.middleware) == null ? void 0 : Y.inline)),
      n(e, S, {
        placement: t.placement ?? 'bottom',
        middleware: [
          i(((q = t.middleware) == null ? void 0 : q.offset) ?? 8),
          s(((se = t.middleware) == null ? void 0 : se.shift) ?? { padding: 8 }),
          o((re = t.middleware) == null ? void 0 : re.flip),
          c(((ie = t.middleware) == null ? void 0 : ie.arrow) ?? { element: E || null }),
          ...v,
        ],
      }).then(({ x: oe, y: ke, placement: Ce, middlewareData: $e }) => {
        if ((Object.assign(S.style, { left: `${oe}px`, top: `${ke}px` }), E)) {
          const { x: Ue, y: et } = $e.arrow,
            H = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[Ce.split('-')[0]];
          Object.assign(E.style, {
            left: Ue != null ? `${Ue}px` : '',
            top: et != null ? `${et}px` : '',
            right: '',
            bottom: '',
            [H]: '-4px',
          });
        }
      });
  }
  function B() {
    S &&
      ((m.open = !0),
      t.state && t.state({ state: m.open }),
      x(),
      (S.style.display = 'block'),
      (S.style.opacity = '1'),
      (S.style.pointerEvents = 'auto'),
      S.removeAttribute('inert'),
      (m.autoUpdateCleanup = r(e, S, x)),
      (w = Array.from(S == null ? void 0 : S.querySelectorAll(g))));
  }
  function k(v) {
    if (!S) return;
    const d = parseFloat(window.getComputedStyle(S).transitionDuration.replace('s', '')) * 1e3;
    setTimeout(() => {
      (m.open = !1),
        t.state && t.state({ state: m.open }),
        (S.style.opacity = '0'),
        S.setAttribute('inert', ''),
        m.autoUpdateCleanup && m.autoUpdateCleanup(),
        v && v();
    }, d);
  }
  function I() {
    m.open === !1 ? B() : k();
  }
  function C(v) {
    if (m.open === !1 || e.contains(v.target)) return;
    if (S && S.contains(v.target) === !1) {
      k();
      return;
    }
    const d = t.closeQuery === void 0 ? 'a[href], button' : t.closeQuery,
      P = S == null ? void 0 : S.querySelectorAll(d);
    P == null ||
      P.forEach((T) => {
        T.contains(v.target) && k();
      });
  }
  const $ = (v) => {
    if (m.open === !1) return;
    const d = v.key;
    if (d === 'Escape') {
      v.preventDefault(), e.focus(), k();
      return;
    }
    (w = Array.from(S == null ? void 0 : S.querySelectorAll(g))),
      m.open &&
        document.activeElement === e &&
        (d === 'ArrowDown' || d === 'Tab') &&
        g.length > 0 &&
        w.length > 0 &&
        (v.preventDefault(), w[0].focus());
  };
  switch (t.event) {
    case 'click':
      e.addEventListener('click', I, !0), window.addEventListener('click', C, !0);
      break;
    case 'hover':
      e.addEventListener('mouseover', B, !0), e.addEventListener('mouseleave', () => k(), !0);
      break;
    case 'focus-blur':
      e.addEventListener('focus', I, !0), e.addEventListener('blur', () => k(), !0);
      break;
    case 'focus-click':
      e.addEventListener('focus', B, !0), window.addEventListener('click', C, !0);
      break;
    default:
      throw new Error(`Event value of '${t.event}' is not supported. ${b}`);
  }
  return (
    window.addEventListener('keydown', $, !0),
    x(),
    {
      update(v) {
        k(() => {
          (t = v), x(), A();
        });
      },
      destroy() {
        e.removeEventListener('click', I, !0),
          e.removeEventListener('mouseover', B, !0),
          e.removeEventListener('mouseleave', () => k(), !0),
          e.removeEventListener('focus', I, !0),
          e.removeEventListener('focus', B, !0),
          e.removeEventListener('blur', () => k(), !0),
          window.removeEventListener('click', C, !0),
          window.removeEventListener('keydown', $, !0);
      },
    }
  );
}
const qa = { message: 'Missing Toast Message', autohide: !0, timeout: 5e3 };
function Wa() {
  const e = Math.random();
  return Number(e).toString(32);
}
function gs(e) {
  if (e.autohide === !0)
    return setTimeout(() => {
      to.close(e.id);
    }, e.timeout);
}
function Va() {
  const { subscribe: e, set: t, update: n } = En([]);
  return {
    subscribe: e,
    trigger: (r) => {
      const i = Wa();
      return (
        n((s) => {
          r && r.callback && r.callback({ id: i, status: 'queued' }),
            r.hideDismiss && (r.autohide = !0);
          const o = { ...qa, ...r, id: i };
          return (o.timeoutId = gs(o)), s.push(o), s;
        }),
        i
      );
    },
    close: (r) =>
      n((i) => {
        if (i.length > 0) {
          const s = i.findIndex((c) => c.id === r),
            o = i[s];
          o &&
            (o.callback && o.callback({ id: r, status: 'closed' }),
            o.timeoutId && clearTimeout(o.timeoutId),
            i.splice(s, 1));
        }
        return i;
      }),
    freeze: (r) => n((i) => (i.length > 0 && clearTimeout(i[r].timeoutId), i)),
    unfreeze: (r) => n((i) => (i.length > 0 && (i[r].timeoutId = gs(i[r])), i)),
    clear: () => t([]),
  };
}
const to = Va(),
  Xr = {};
function vs(e) {
  return e === 'local' ? localStorage : sessionStorage;
}
function Ui(e, t, n) {
  const r = (n == null ? void 0 : n.serializer) ?? JSON,
    i = (n == null ? void 0 : n.storage) ?? 'local';
  function s(o, c) {
    vs(i).setItem(o, r.stringify(c));
  }
  if (!Xr[e]) {
    const o = En(t, (a) => {
        const f = vs(i).getItem(e);
        f && a(r.parse(f));
        {
          const h = (m) => {
            m.key === e && a(m.newValue ? r.parse(m.newValue) : null);
          };
          return (
            window.addEventListener('storage', h), () => window.removeEventListener('storage', h)
          );
        }
      }),
      { subscribe: c, set: l } = o;
    Xr[e] = {
      set(a) {
        s(e, a), l(a);
      },
      update(a) {
        const f = a(Ms(o));
        s(e, f), l(f);
      },
      subscribe: c,
    };
  }
  return Xr[e];
}
Ui('modeOsPrefers', !1);
Ui('modeUserPrefers', void 0);
Ui('modeCurrent', !1);
class Ya {
  constructor(t) {
    De(this, 'prevValue');
    De(this, 'checker');
    De(this, 'resolveCallback');
    De(this, 'rejectCallback');
    (this.prevValue = t.prevValue || ''),
      (this.checker = t.checker),
      (this.resolveCallback = t.resolveCallback),
      (this.rejectCallback = t.rejectCallback);
  }
  handleEvent(t) {
    const n = String(t.target.value);
    this.checker(n) ? this.onResolveInput(n, t) : this.onRejectInput(n, t);
  }
  onResolveInput(t, n) {
    var r;
    this.updatePrevValue(t),
      (r = this.resolveCallback) == null ||
        r.call(this, { event: n, curValue: t, prevValue: this.prevValue });
  }
  onRejectInput(t, n) {
    var i;
    const r = n.target.selectionStart || 0;
    this.restore(n.target, t, r),
      (i = this.rejectCallback) == null ||
        i.call(this, { event: n, curValue: t, prevValue: this.prevValue });
  }
  restore(t, n, r) {
    this.restorePrevValue(t), this.restorePrevCaretPos(t, n, r);
  }
  restorePrevValue(t) {
    t.value = this.prevValue;
  }
  restorePrevCaretPos(t, n, r) {
    const i = n.length,
      s = r - (i - this.prevValue.length);
    t.setSelectionRange(s, s);
  }
  updatePrevValue(t) {
    this.prevValue = t;
  }
  getPrevValue() {
    return this.prevValue;
  }
}
const Df = (e, t) => {
    let n;
    return (...r) => {
      clearTimeout(n), (n = setTimeout(e, t, ...r));
    };
  },
  za = 'bg-red-400 text-white cursor-default !rounded-md',
  Rf = (e) =>
    `-webkit-mask: url(${e}) no-repeat center / contain; mask: url(${e}) no-repeat center / contain;`,
  no = (e) => JSON.parse(JSON.stringify(e)),
  $f = (e) => [...e].sort(() => Math.random() - 0.5);
function* Lf(e) {
  const t = e.length;
  for (let n = 0; n < t; n += 1) yield e[n];
}
const Kf = (e) => new Ya(e),
  Ff = (e) =>
    e === 0 ? 'bg-slate-400' : e < 40 ? 'bg-orange-400' : e < 75 ? 'bg-amber-400' : 'bg-green-400',
  Uf = (e) =>
    e === 0
      ? 'bg-slate-300 hover:bg-slate-400 focus:bg-slate-400'
      : e < 40
      ? 'bg-orange-300 hover:bg-orange-400 focus:bg-orange-400'
      : e < 75
      ? 'bg-amber-300 hover:bg-amber-400 focus:bg-amber-400'
      : 'bg-green-300 hover:bg-green-400 focus:bg-green-400',
  ro = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  Ja = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  Mf = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  },
  qf = Ja.map((e) => e.slice(0, 3)),
  bs = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 },
  Wf = (e) => {
    e.sort((t, n) => bs[t] - bs[n]);
  },
  Vf = (e, t) => {
    let n = e.indexOf(t);
    for (; n !== -1; ) e.splice(n, 1), (n = e.indexOf(t, n + 1));
  },
  Yf = (e) => {
    e.sort(({ from: t }, { from: n }) => Number(t.replace(':', '')) - Number(n.replace(':', '')));
  },
  Fe = async (e, t) => {
    try {
      return await e(...t);
    } catch (n) {
      to.trigger({ message: n.message || String(n), background: za });
    }
  },
  io = (e) => {
    e.code === 'Escape' && e.stopPropagation();
  },
  zf = () => {
    document.addEventListener('keydown', io);
  },
  Jf = () => {
    document.removeEventListener('keydown', io);
  },
  Ha = (e) => {
    e.preventDefault();
  },
  Ga = () => {
    document.addEventListener('contextmenu', Ha);
  },
  Xa = { startWithSystem: !0, startAppAsMinimized: !1 },
  Qa = {
    enabled: !1,
    soundNotification: !0,
    daySettings: { general: { interval: '02:00', timeFrames: [] } },
  },
  Za = {
    enabled: !1,
    soundNotification: !0,
    daySettings: { general: { interval: '02:00', timeFrames: [] } },
  },
  ec = { basic: Xa, practice: { passive: Qa, active: Za } },
  tc = () => no(ec),
  nc = {
    practiceTarget: 'original',
    practiceType: 'section',
    sectionLastWordId: null,
    sectionSize: 10,
  },
  rc = () => no(nc);
class so {
  constructor() {
    De(this, 'totalWordsAmount');
    De(this, 'addedWordsAmount');
    De(this, 'deletedWordsAmount');
    De(this, 'wordTotalPracticeAmount');
    De(this, 'wordOriginPracticeAmount');
    De(this, 'wordTranslationPracticeAmount');
    De(this, 'averagePracticeSuccess');
    De(this, 'successfulPracticeCount');
    De(this, 'unsuccessfulPracticeCount');
    (this.totalWordsAmount = 0),
      (this.addedWordsAmount = 0),
      (this.deletedWordsAmount = 0),
      (this.wordTotalPracticeAmount = 0),
      (this.wordOriginPracticeAmount = 0),
      (this.wordTranslationPracticeAmount = 0),
      (this.averagePracticeSuccess = 0),
      (this.successfulPracticeCount = 0),
      (this.unsuccessfulPracticeCount = 0);
  }
}
const ic = () => {
    const e = String(new Date().getFullYear()),
      t = {};
    return (
      ro.forEach((n) => {
        t[n] = new so();
      }),
      (t.year = e),
      [t]
    );
  },
  Te =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  Re = Object.keys,
  ze = Array.isArray;
function Xe(e, t) {
  return (
    typeof t != 'object' ||
      Re(t).forEach(function (n) {
        e[n] = t[n];
      }),
    e
  );
}
typeof Promise > 'u' || Te.Promise || (Te.Promise = Promise);
const Vn = Object.getPrototypeOf,
  sc = {}.hasOwnProperty;
function ct(e, t) {
  return sc.call(e, t);
}
function xn(e, t) {
  typeof t == 'function' && (t = t(Vn(e))),
    (typeof Reflect > 'u' ? Re : Reflect.ownKeys)(t).forEach((n) => {
      Ct(e, n, t[n]);
    });
}
const oo = Object.defineProperty;
function Ct(e, t, n, r) {
  oo(
    e,
    t,
    Xe(
      n && ct(n, 'get') && typeof n.get == 'function'
        ? { get: n.get, set: n.set, configurable: !0 }
        : { value: n, configurable: !0, writable: !0 },
      r,
    ),
  );
}
function vn(e) {
  return {
    from: function (t) {
      return (
        (e.prototype = Object.create(t.prototype)),
        Ct(e.prototype, 'constructor', e),
        { extend: xn.bind(null, e.prototype) }
      );
    },
  };
}
const oc = Object.getOwnPropertyDescriptor;
function Mi(e, t) {
  let n;
  return oc(e, t) || ((n = Vn(e)) && Mi(n, t));
}
const ac = [].slice;
function Cr(e, t, n) {
  return ac.call(e, t, n);
}
function ao(e, t) {
  return t(e);
}
function Cn(e) {
  if (!e) throw new Error('Assertion Failed');
}
function co(e) {
  Te.setImmediate ? setImmediate(e) : setTimeout(e, 0);
}
function uo(e, t) {
  return e.reduce((n, r, i) => {
    var s = t(r, i);
    return s && (n[s[0]] = s[1]), n;
  }, {});
}
function Nt(e, t) {
  if (ct(e, t)) return e[t];
  if (!t) return e;
  if (typeof t != 'string') {
    for (var n = [], r = 0, i = t.length; r < i; ++r) {
      var s = Nt(e, t[r]);
      n.push(s);
    }
    return n;
  }
  var o = t.indexOf('.');
  if (o !== -1) {
    var c = e[t.substr(0, o)];
    return c === void 0 ? void 0 : Nt(c, t.substr(o + 1));
  }
}
function bt(e, t, n) {
  if (e && t !== void 0 && (!('isFrozen' in Object) || !Object.isFrozen(e)))
    if (typeof t != 'string' && 'length' in t) {
      Cn(typeof n != 'string' && 'length' in n);
      for (var r = 0, i = t.length; r < i; ++r) bt(e, t[r], n[r]);
    } else {
      var s = t.indexOf('.');
      if (s !== -1) {
        var o = t.substr(0, s),
          c = t.substr(s + 1);
        if (c === '')
          n === void 0 ? (ze(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o]) : (e[o] = n);
        else {
          var l = e[o];
          (l && ct(e, o)) || (l = e[o] = {}), bt(l, c, n);
        }
      } else
        n === void 0 ? (ze(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t]) : (e[t] = n);
    }
}
function lo(e) {
  var t = {};
  for (var n in e) ct(e, n) && (t[n] = e[n]);
  return t;
}
const cc = [].concat;
function fo(e) {
  return cc.apply([], e);
}
const ho =
    'Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey'
      .split(',')
      .concat(fo([8, 16, 32, 64].map((e) => ['Int', 'Uint', 'Float'].map((t) => t + e + 'Array'))))
      .filter((e) => Te[e]),
  uc = ho.map((e) => Te[e]);
uo(ho, (e) => [e, !0]);
let Lt = null;
function er(e) {
  Lt = typeof WeakMap < 'u' && new WeakMap();
  const t = ui(e);
  return (Lt = null), t;
}
function ui(e) {
  if (!e || typeof e != 'object') return e;
  let t = Lt && Lt.get(e);
  if (t) return t;
  if (ze(e)) {
    (t = []), Lt && Lt.set(e, t);
    for (var n = 0, r = e.length; n < r; ++n) t.push(ui(e[n]));
  } else if (uc.indexOf(e.constructor) >= 0) t = e;
  else {
    const s = Vn(e);
    for (var i in ((t = s === Object.prototype ? {} : Object.create(s)), Lt && Lt.set(e, t), e))
      ct(e, i) && (t[i] = ui(e[i]));
  }
  return t;
}
const { toString: lc } = {};
function li(e) {
  return lc.call(e).slice(8, -1);
}
const fi = typeof Symbol < 'u' ? Symbol.iterator : '@@iterator',
  fc =
    typeof fi == 'symbol'
      ? function (e) {
          var t;
          return e != null && (t = e[fi]) && t.apply(e);
        }
      : function () {
          return null;
        },
  hn = {};
function Pt(e) {
  var t, n, r, i;
  if (arguments.length === 1) {
    if (ze(e)) return e.slice();
    if (this === hn && typeof e == 'string') return [e];
    if ((i = fc(e))) {
      for (n = []; !(r = i.next()).done; ) n.push(r.value);
      return n;
    }
    if (e == null) return [e];
    if (typeof (t = e.length) == 'number') {
      for (n = new Array(t); t--; ) n[t] = e[t];
      return n;
    }
    return [e];
  }
  for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
  return n;
}
const qi = typeof Symbol < 'u' ? (e) => e[Symbol.toStringTag] === 'AsyncFunction' : () => !1;
var xt = typeof location < 'u' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function po(e, t) {
  (xt = e), (yo = t);
}
var yo = () => !0;
const dc = !new Error('').stack;
function sn() {
  if (dc)
    try {
      throw (sn.arguments, new Error());
    } catch (e) {
      return e;
    }
  return new Error();
}
function di(e, t) {
  var n = e.stack;
  return n
    ? ((t = t || 0),
      n.indexOf(e.name) === 0 &&
        (t += (e.name + e.message).split(`
`).length),
      n
        .split(
          `
`,
        )
        .slice(t)
        .filter(yo)
        .map(
          (r) =>
            `
` + r,
        )
        .join(''))
    : '';
}
var mo = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone',
  ],
  Wi = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait',
  ].concat(mo),
  hc = {
    VersionChanged: 'Database version changed by other database connection',
    DatabaseClosed: 'Database has been closed',
    Abort: 'Transaction aborted',
    TransactionInactive: 'Transaction has already completed or failed',
    MissingAPI: 'IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb',
  };
function bn(e, t) {
  (this._e = sn()), (this.name = e), (this.message = t);
}
function go(e, t) {
  return (
    e +
    '. Errors: ' +
    Object.keys(t)
      .map((n) => t[n].toString())
      .filter((n, r, i) => i.indexOf(n) === r).join(`
`)
  );
}
function Nr(e, t, n, r) {
  (this._e = sn()),
    (this.failures = t),
    (this.failedKeys = r),
    (this.successCount = n),
    (this.message = go(e, t));
}
function Rn(e, t) {
  (this._e = sn()),
    (this.name = 'BulkError'),
    (this.failures = Object.keys(t).map((n) => t[n])),
    (this.failuresByPos = t),
    (this.message = go(e, t));
}
vn(bn)
  .from(Error)
  .extend({
    stack: {
      get: function () {
        return this._stack || (this._stack = this.name + ': ' + this.message + di(this._e, 2));
      },
    },
    toString: function () {
      return this.name + ': ' + this.message;
    },
  }),
  vn(Nr).from(bn),
  vn(Rn).from(bn);
var Vi = Wi.reduce((e, t) => ((e[t] = t + 'Error'), e), {});
const pc = bn;
var ne = Wi.reduce((e, t) => {
  var n = t + 'Error';
  function r(i, s) {
    (this._e = sn()),
      (this.name = n),
      i
        ? typeof i == 'string'
          ? ((this.message = `${i}${
              s
                ? `
 ` + s
                : ''
            }`),
            (this.inner = s || null))
          : typeof i == 'object' && ((this.message = `${i.name} ${i.message}`), (this.inner = i))
        : ((this.message = hc[t] || n), (this.inner = null));
  }
  return vn(r).from(pc), (e[t] = r), e;
}, {});
(ne.Syntax = SyntaxError), (ne.Type = TypeError), (ne.Range = RangeError);
var ws = mo.reduce((e, t) => ((e[t + 'Error'] = ne[t]), e), {}),
  vr = Wi.reduce(
    (e, t) => (['Syntax', 'Type', 'Range'].indexOf(t) === -1 && (e[t + 'Error'] = ne[t]), e),
    {},
  );
function xe() {}
function Yn(e) {
  return e;
}
function yc(e, t) {
  return e == null || e === Yn
    ? t
    : function (n) {
        return t(e(n));
      };
}
function tn(e, t) {
  return function () {
    e.apply(this, arguments), t.apply(this, arguments);
  };
}
function mc(e, t) {
  return e === xe
    ? t
    : function () {
        var n = e.apply(this, arguments);
        n !== void 0 && (arguments[0] = n);
        var r = this.onsuccess,
          i = this.onerror;
        (this.onsuccess = null), (this.onerror = null);
        var s = t.apply(this, arguments);
        return (
          r && (this.onsuccess = this.onsuccess ? tn(r, this.onsuccess) : r),
          i && (this.onerror = this.onerror ? tn(i, this.onerror) : i),
          s !== void 0 ? s : n
        );
      };
}
function gc(e, t) {
  return e === xe
    ? t
    : function () {
        e.apply(this, arguments);
        var n = this.onsuccess,
          r = this.onerror;
        (this.onsuccess = this.onerror = null),
          t.apply(this, arguments),
          n && (this.onsuccess = this.onsuccess ? tn(n, this.onsuccess) : n),
          r && (this.onerror = this.onerror ? tn(r, this.onerror) : r);
      };
}
function vc(e, t) {
  return e === xe
    ? t
    : function (n) {
        var r = e.apply(this, arguments);
        Xe(n, r);
        var i = this.onsuccess,
          s = this.onerror;
        (this.onsuccess = null), (this.onerror = null);
        var o = t.apply(this, arguments);
        return (
          i && (this.onsuccess = this.onsuccess ? tn(i, this.onsuccess) : i),
          s && (this.onerror = this.onerror ? tn(s, this.onerror) : s),
          r === void 0 ? (o === void 0 ? void 0 : o) : Xe(r, o)
        );
      };
}
function bc(e, t) {
  return e === xe
    ? t
    : function () {
        return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
      };
}
function Yi(e, t) {
  return e === xe
    ? t
    : function () {
        var n = e.apply(this, arguments);
        if (n && typeof n.then == 'function') {
          for (var r = this, i = arguments.length, s = new Array(i); i--; ) s[i] = arguments[i];
          return n.then(function () {
            return t.apply(r, s);
          });
        }
        return t.apply(this, arguments);
      };
}
(vr.ModifyError = Nr), (vr.DexieError = bn), (vr.BulkError = Rn);
var zn = {};
const [hi, Ir, pi] =
    typeof Promise > 'u'
      ? []
      : (() => {
          let e = Promise.resolve();
          if (typeof crypto > 'u' || !crypto.subtle) return [e, Vn(e), e];
          const t = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
          return [t, Vn(t), e];
        })(),
  vo = Ir && Ir.then,
  br = hi && hi.constructor,
  zi = !!pi;
var yi = !1,
  wc = pi
    ? () => {
        pi.then(ur);
      }
    : Te.setImmediate
    ? setImmediate.bind(null, ur)
    : Te.MutationObserver
    ? () => {
        var e = document.createElement('div');
        new MutationObserver(() => {
          ur(), (e = null);
        }).observe(e, { attributes: !0 }),
          e.setAttribute('i', '1');
      }
    : () => {
        setTimeout(ur, 0);
      },
  $n = function (e, t) {
    Nn.push([e, t]), Br && (wc(), (Br = !1));
  },
  mi = !0,
  Br = !0,
  Qt = [],
  wr = [],
  gi = null,
  vi = Yn,
  wn = {
    id: 'global',
    global: !0,
    ref: 0,
    unhandleds: [],
    onunhandled: Ss,
    pgp: !1,
    env: {},
    finalize: function () {
      this.unhandleds.forEach((e) => {
        try {
          Ss(e[0], e[1]);
        } catch {}
      });
    },
  },
  Q = wn,
  Nn = [],
  Zt = 0,
  _r = [];
function W(e) {
  if (typeof this != 'object') throw new TypeError('Promises must be constructed via new');
  (this._listeners = []), (this.onuncatched = xe), (this._lib = !1);
  var t = (this._PSD = Q);
  if (
    (xt && ((this._stackHolder = sn()), (this._prev = null), (this._numPrev = 0)),
    typeof e != 'function')
  ) {
    if (e !== zn) throw new TypeError('Not a function');
    return (
      (this._state = arguments[1]),
      (this._value = arguments[2]),
      void (this._state === !1 && wi(this, this._value))
    );
  }
  (this._state = null), (this._value = null), ++t.ref, wo(this, e);
}
const bi = {
  get: function () {
    var e = Q,
      t = jr;
    function n(r, i) {
      var s = !e.global && (e !== Q || t !== jr);
      const o = s && !It();
      var c = new W((l, a) => {
        Ji(this, new bo(Dr(r, e, s, o), Dr(i, e, s, o), l, a, e));
      });
      return xt && xo(c, this), c;
    }
    return (n.prototype = zn), n;
  },
  set: function (e) {
    Ct(
      this,
      'then',
      e && e.prototype === zn
        ? bi
        : {
            get: function () {
              return e;
            },
            set: bi.set,
          },
    );
  },
};
function bo(e, t, n, r, i) {
  (this.onFulfilled = typeof e == 'function' ? e : null),
    (this.onRejected = typeof t == 'function' ? t : null),
    (this.resolve = n),
    (this.reject = r),
    (this.psd = i);
}
function wo(e, t) {
  try {
    t((n) => {
      if (e._state === null) {
        if (n === e) throw new TypeError('A promise cannot be resolved with itself.');
        var r = e._lib && tr();
        n && typeof n.then == 'function'
          ? wo(e, (i, s) => {
              n instanceof W ? n._then(i, s) : n.then(i, s);
            })
          : ((e._state = !0), (e._value = n), _o(e)),
          r && nr();
      }
    }, wi.bind(null, e));
  } catch (n) {
    wi(e, n);
  }
}
function wi(e, t) {
  if ((wr.push(t), e._state === null)) {
    var n = e._lib && tr();
    (t = vi(t)),
      (e._state = !1),
      (e._value = t),
      xt &&
        t !== null &&
        typeof t == 'object' &&
        !t._promise &&
        (function (r, i, s) {
          try {
            r.apply(null, s);
          } catch (o) {
            i && i(o);
          }
        })(() => {
          var r = Mi(t, 'stack');
          (t._promise = e),
            Ct(t, 'stack', { get: () => (yi ? r && (r.get ? r.get.apply(t) : r.value) : e.stack) });
        }),
      (function (r) {
        Qt.some((i) => i._value === r._value) || Qt.push(r);
      })(e),
      _o(e),
      n && nr();
  }
}
function _o(e) {
  var t = e._listeners;
  e._listeners = [];
  for (var n = 0, r = t.length; n < r; ++n) Ji(e, t[n]);
  var i = e._PSD;
  --i.ref || i.finalize(),
    Zt === 0 &&
      (++Zt,
      $n(() => {
        --Zt == 0 && Hi();
      }, []));
}
function Ji(e, t) {
  if (e._state !== null) {
    var n = e._state ? t.onFulfilled : t.onRejected;
    if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
    ++t.psd.ref, ++Zt, $n(_c, [n, e, t]);
  } else e._listeners.push(t);
}
function _c(e, t, n) {
  try {
    gi = t;
    var r,
      i = t._value;
    t._state
      ? (r = e(i))
      : (wr.length && (wr = []),
        (r = e(i)),
        wr.indexOf(i) === -1 &&
          (function (s) {
            for (var o = Qt.length; o; )
              if (Qt[--o]._value === s._value) return void Qt.splice(o, 1);
          })(t)),
      n.resolve(r);
  } catch (s) {
    n.reject(s);
  } finally {
    (gi = null), --Zt == 0 && Hi(), --n.psd.ref || n.psd.finalize();
  }
}
function So(e, t, n) {
  if (t.length === n) return t;
  var r = '';
  if (e._state === !1) {
    var i,
      s,
      o = e._value;
    o != null
      ? ((i = o.name || 'Error'), (s = o.message || o), (r = di(o, 0)))
      : ((i = o), (s = '')),
      t.push(i + (s ? ': ' + s : '') + r);
  }
  return (
    xt &&
      ((r = di(e._stackHolder, 2)) && t.indexOf(r) === -1 && t.push(r),
      e._prev && So(e._prev, t, n)),
    t
  );
}
function xo(e, t) {
  var n = t ? t._numPrev + 1 : 0;
  n < 100 && ((e._prev = t), (e._numPrev = n));
}
function ur() {
  tr() && nr();
}
function tr() {
  var e = mi;
  return (mi = !1), (Br = !1), e;
}
function nr() {
  var e, t, n;
  do
    for (; Nn.length > 0; )
      for (e = Nn, Nn = [], n = e.length, t = 0; t < n; ++t) {
        var r = e[t];
        r[0].apply(null, r[1]);
      }
  while (Nn.length > 0);
  (mi = !0), (Br = !0);
}
function Hi() {
  var e = Qt;
  (Qt = []),
    e.forEach((r) => {
      r._PSD.onunhandled.call(null, r._value, r);
    });
  for (var t = _r.slice(0), n = t.length; n; ) t[--n]();
}
function lr(e) {
  return new W(zn, !1, e);
}
function Pe(e, t) {
  var n = Q;
  return function () {
    var r = tr(),
      i = Q;
    try {
      return Mt(n, !0), e.apply(this, arguments);
    } catch (s) {
      t && t(s);
    } finally {
      Mt(i, !1), r && nr();
    }
  };
}
xn(W.prototype, {
  then: bi,
  _then: function (e, t) {
    Ji(this, new bo(null, null, e, t, Q));
  },
  catch: function (e) {
    if (arguments.length === 1) return this.then(null, e);
    var t = arguments[0],
      n = arguments[1];
    return typeof t == 'function'
      ? this.then(null, (r) => (r instanceof t ? n(r) : lr(r)))
      : this.then(null, (r) => (r && r.name === t ? n(r) : lr(r)));
  },
  finally: function (e) {
    return this.then(
      (t) => (e(), t),
      (t) => (e(), lr(t)),
    );
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        yi = !0;
        var e = So(this, [], 20).join(`
From previous: `);
        return this._state !== null && (this._stack = e), e;
      } finally {
        yi = !1;
      }
    },
  },
  timeout: function (e, t) {
    return e < 1 / 0
      ? new W((n, r) => {
          var i = setTimeout(() => r(new ne.Timeout(t)), e);
          this.then(n, r).finally(clearTimeout.bind(null, i));
        })
      : this;
  },
}),
  typeof Symbol < 'u' && Symbol.toStringTag && Ct(W.prototype, Symbol.toStringTag, 'Dexie.Promise'),
  (wn.env = Eo()),
  xn(W, {
    all: function () {
      var e = Pt.apply(null, arguments).map(fr);
      return new W(function (t, n) {
        e.length === 0 && t([]);
        var r = e.length;
        e.forEach((i, s) =>
          W.resolve(i).then((o) => {
            (e[s] = o), --r || t(e);
          }, n),
        );
      });
    },
    resolve: (e) => {
      if (e instanceof W) return e;
      if (e && typeof e.then == 'function')
        return new W((n, r) => {
          e.then(n, r);
        });
      var t = new W(zn, !0, e);
      return xo(t, gi), t;
    },
    reject: lr,
    race: function () {
      var e = Pt.apply(null, arguments).map(fr);
      return new W((t, n) => {
        e.map((r) => W.resolve(r).then(t, n));
      });
    },
    PSD: { get: () => Q, set: (e) => (Q = e) },
    totalEchoes: { get: () => jr },
    newPSD: Ut,
    usePSD: On,
    scheduler: {
      get: () => $n,
      set: (e) => {
        $n = e;
      },
    },
    rejectionMapper: {
      get: () => vi,
      set: (e) => {
        vi = e;
      },
    },
    follow: (e, t) =>
      new W((n, r) =>
        Ut(
          (i, s) => {
            var o = Q;
            (o.unhandleds = []),
              (o.onunhandled = s),
              (o.finalize = tn(function () {
                (function (c) {
                  function l() {
                    c(), _r.splice(_r.indexOf(l), 1);
                  }
                  _r.push(l),
                    ++Zt,
                    $n(() => {
                      --Zt == 0 && Hi();
                    }, []);
                })(() => {
                  this.unhandleds.length === 0 ? i() : s(this.unhandleds[0]);
                });
              }, o.finalize)),
              e();
          },
          t,
          n,
          r,
        ),
      ),
  }),
  br &&
    (br.allSettled &&
      Ct(W, 'allSettled', function () {
        const e = Pt.apply(null, arguments).map(fr);
        return new W((t) => {
          e.length === 0 && t([]);
          let n = e.length;
          const r = new Array(n);
          e.forEach((i, s) =>
            W.resolve(i)
              .then(
                (o) => (r[s] = { status: 'fulfilled', value: o }),
                (o) => (r[s] = { status: 'rejected', reason: o }),
              )
              .then(() => --n || t(r)),
          );
        });
      }),
    br.any &&
      typeof AggregateError < 'u' &&
      Ct(W, 'any', function () {
        const e = Pt.apply(null, arguments).map(fr);
        return new W((t, n) => {
          e.length === 0 && n(new AggregateError([]));
          let r = e.length;
          const i = new Array(r);
          e.forEach((s, o) =>
            W.resolve(s).then(
              (c) => t(c),
              (c) => {
                (i[o] = c), --r || n(new AggregateError(i));
              },
            ),
          );
        });
      }));
const Ye = { awaits: 0, echoes: 0, id: 0 };
var Sc = 0,
  Sr = [],
  Qr = 0,
  jr = 0,
  xc = 0;
function Ut(e, t, n, r) {
  var i = Q,
    s = Object.create(i);
  (s.parent = i), (s.ref = 0), (s.global = !1), (s.id = ++xc);
  var o = wn.env;
  (s.env = zi
    ? {
        Promise: W,
        PromiseProp: { value: W, configurable: !0, writable: !0 },
        all: W.all,
        race: W.race,
        allSettled: W.allSettled,
        any: W.any,
        resolve: W.resolve,
        reject: W.reject,
        nthen: _s(o.nthen, s),
        gthen: _s(o.gthen, s),
      }
    : {}),
    t && Xe(s, t),
    ++i.ref,
    (s.finalize = function () {
      --this.parent.ref || this.parent.finalize();
    });
  var c = On(s, e, n, r);
  return s.ref === 0 && s.finalize(), c;
}
function An() {
  return Ye.id || (Ye.id = ++Sc), ++Ye.awaits, (Ye.echoes += 100), Ye.id;
}
function It() {
  return !!Ye.awaits && (--Ye.awaits == 0 && (Ye.id = 0), (Ye.echoes = 100 * Ye.awaits), !0);
}
function fr(e) {
  return Ye.echoes && e && e.constructor === br
    ? (An(),
      e.then(
        (t) => (It(), t),
        (t) => (It(), Le(t)),
      ))
    : e;
}
function Ec(e) {
  ++jr, (Ye.echoes && --Ye.echoes != 0) || (Ye.echoes = Ye.id = 0), Sr.push(Q), Mt(e, !0);
}
function Ac() {
  var e = Sr[Sr.length - 1];
  Sr.pop(), Mt(e, !1);
}
function Mt(e, t) {
  var n = Q;
  if (
    ((t ? !Ye.echoes || (Qr++ && e === Q) : !Qr || (--Qr && e === Q)) ||
      Ao(t ? Ec.bind(null, e) : Ac),
    e !== Q && ((Q = e), n === wn && (wn.env = Eo()), zi))
  ) {
    var r = wn.env.Promise,
      i = e.env;
    (Ir.then = i.nthen),
      (r.prototype.then = i.gthen),
      (n.global || e.global) &&
        (Object.defineProperty(Te, 'Promise', i.PromiseProp),
        (r.all = i.all),
        (r.race = i.race),
        (r.resolve = i.resolve),
        (r.reject = i.reject),
        i.allSettled && (r.allSettled = i.allSettled),
        i.any && (r.any = i.any));
  }
}
function Eo() {
  var e = Te.Promise;
  return zi
    ? {
        Promise: e,
        PromiseProp: Object.getOwnPropertyDescriptor(Te, 'Promise'),
        all: e.all,
        race: e.race,
        allSettled: e.allSettled,
        any: e.any,
        resolve: e.resolve,
        reject: e.reject,
        nthen: Ir.then,
        gthen: e.prototype.then,
      }
    : {};
}
function On(e, t, n, r, i) {
  var s = Q;
  try {
    return Mt(e, !0), t(n, r, i);
  } finally {
    Mt(s, !1);
  }
}
function Ao(e) {
  vo.call(hi, e);
}
function Dr(e, t, n, r) {
  return typeof e != 'function'
    ? e
    : function () {
        var i = Q;
        n && An(), Mt(t, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          Mt(i, !1), r && Ao(It);
        }
      };
}
function _s(e, t) {
  return function (n, r) {
    return e.call(this, Dr(n, t), Dr(r, t));
  };
}
('' + vo).indexOf('[native code]') === -1 && (An = It = xe);
function Ss(e, t) {
  var n;
  try {
    n = t.onuncatched(e);
  } catch {}
  if (n !== !1)
    try {
      var r,
        i = { promise: t, reason: e };
      if (
        (Te.document && document.createEvent
          ? ((r = document.createEvent('Event')).initEvent('unhandledrejection', !0, !0), Xe(r, i))
          : Te.CustomEvent && Xe((r = new CustomEvent('unhandledrejection', { detail: i })), i),
        r &&
          Te.dispatchEvent &&
          (dispatchEvent(r), !Te.PromiseRejectionEvent && Te.onunhandledrejection))
      )
        try {
          Te.onunhandledrejection(r);
        } catch {}
      xt && r && !r.defaultPrevented && console.warn(`Unhandled rejection: ${e.stack || e}`);
    } catch {}
}
var Le = W.reject;
function _i(e, t, n, r) {
  if (e.idbdb && (e._state.openComplete || Q.letThrough || e._vip)) {
    var i = e._createTransaction(t, n, e._dbSchema);
    try {
      i.create(), (e._state.PR1398_maxLoop = 3);
    } catch (s) {
      return s.name === Vi.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
        ? (console.warn('Dexie: Need to reopen db'),
          e._close(),
          e.open().then(() => _i(e, t, n, r)))
        : Le(s);
    }
    return i
      ._promise(t, (s, o) => Ut(() => ((Q.trans = i), r(s, o, i))))
      .then((s) => i._completion.then(() => s));
  }
  if (e._state.openComplete) return Le(new ne.DatabaseClosed(e._state.dbOpenError));
  if (!e._state.isBeingOpened) {
    if (!e._options.autoOpen) return Le(new ne.DatabaseClosed());
    e.open().catch(xe);
  }
  return e._state.dbReadyPromise.then(() => _i(e, t, n, r));
}
const Ht = String.fromCharCode(65535),
  Ot =
    'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
  Ln = [],
  Wr = typeof navigator < 'u' && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
  Oc = Wr,
  Tc = Wr,
  Oo = (e) => !/(dexie\.js|dexie\.min\.js)/.test(e);
function nn(e, t) {
  return e
    ? t
      ? function () {
          return e.apply(this, arguments) && t.apply(this, arguments);
        }
      : e
    : t;
}
const To = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
function dr(e) {
  return typeof e != 'string' || /\./.test(e)
    ? (t) => t
    : (t) => (t[e] === void 0 && e in t && delete (t = er(t))[e], t);
}
class Pc {
  _trans(t, n, r) {
    const i = this._tx || Q.trans,
      s = this.name;
    function o(l, a, f) {
      if (!f.schema[s]) throw new ne.NotFound('Table ' + s + ' not part of transaction');
      return n(f.idbtrans, f);
    }
    const c = tr();
    try {
      return i && i.db === this.db
        ? i === Q.trans
          ? i._promise(t, o, r)
          : Ut(() => i._promise(t, o, r), { trans: i, transless: Q.transless || Q })
        : _i(this.db, t, [this.name], o);
    } finally {
      c && nr();
    }
  }
  get(t, n) {
    return t && t.constructor === Object
      ? this.where(t).first(n)
      : this._trans('readonly', (r) =>
          this.core.get({ trans: r, key: t }).then((i) => this.hook.reading.fire(i)),
        ).then(n);
  }
  where(t) {
    if (typeof t == 'string') return new this.db.WhereClause(this, t);
    if (ze(t)) return new this.db.WhereClause(this, `[${t.join('+')}]`);
    const n = Re(t);
    if (n.length === 1) return this.where(n[0]).equals(t[n[0]]);
    const r = this.schema.indexes
      .concat(this.schema.primKey)
      .filter(
        (a) =>
          a.compound &&
          n.every((f) => a.keyPath.indexOf(f) >= 0) &&
          a.keyPath.every((f) => n.indexOf(f) >= 0),
      )[0];
    if (r && this.db._maxKey !== Ht) return this.where(r.name).equals(r.keyPath.map((a) => t[a]));
    !r &&
      xt &&
      console.warn(
        `The query ${JSON.stringify(t)} on ${this.name} would benefit of a compound index [${n.join(
          '+',
        )}]`,
      );
    const { idxByName: i } = this.schema,
      s = this.db._deps.indexedDB;
    function o(a, f) {
      try {
        return s.cmp(a, f) === 0;
      } catch {
        return !1;
      }
    }
    const [c, l] = n.reduce(
      ([a, f], h) => {
        const m = i[h],
          g = t[h];
        return [
          a || m,
          a || !m
            ? nn(
                f,
                m && m.multi
                  ? (w) => {
                      const b = Nt(w, h);
                      return ze(b) && b.some((S) => o(g, S));
                    }
                  : (w) => o(g, Nt(w, h)),
              )
            : f,
        ];
      },
      [null, null],
    );
    return c
      ? this.where(c.name).equals(t[c.keyPath]).filter(l)
      : r
      ? this.filter(l)
      : this.where(n).equals('');
  }
  filter(t) {
    return this.toCollection().and(t);
  }
  count(t) {
    return this.toCollection().count(t);
  }
  offset(t) {
    return this.toCollection().offset(t);
  }
  limit(t) {
    return this.toCollection().limit(t);
  }
  each(t) {
    return this.toCollection().each(t);
  }
  toArray(t) {
    return this.toCollection().toArray(t);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(t) {
    return new this.db.Collection(new this.db.WhereClause(this, ze(t) ? `[${t.join('+')}]` : t));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(t) {
    this.schema.mappedClass = t;
    const n = (r) => {
      if (!r) return r;
      const i = Object.create(t.prototype);
      for (var s in r)
        if (ct(r, s))
          try {
            i[s] = r[s];
          } catch {}
      return i;
    };
    return (
      this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
      (this.schema.readHook = n),
      this.hook('reading', n),
      t
    );
  }
  defineClass() {
    return this.mapToClass(function (t) {
      Xe(this, t);
    });
  }
  add(t, n) {
    const { auto: r, keyPath: i } = this.schema.primKey;
    let s = t;
    return (
      i && r && (s = dr(i)(t)),
      this._trans('readwrite', (o) =>
        this.core.mutate({ trans: o, type: 'add', keys: n != null ? [n] : null, values: [s] }),
      )
        .then((o) => (o.numFailures ? W.reject(o.failures[0]) : o.lastResult))
        .then((o) => {
          if (i)
            try {
              bt(t, i, o);
            } catch {}
          return o;
        })
    );
  }
  update(t, n) {
    if (typeof t != 'object' || ze(t)) return this.where(':id').equals(t).modify(n);
    {
      const r = Nt(t, this.schema.primKey.keyPath);
      if (r === void 0)
        return Le(new ne.InvalidArgument('Given object does not contain its primary key'));
      try {
        typeof n != 'function'
          ? Re(n).forEach((i) => {
              bt(t, i, n[i]);
            })
          : n(t, { value: t, primKey: r });
      } catch {}
      return this.where(':id').equals(r).modify(n);
    }
  }
  put(t, n) {
    const { auto: r, keyPath: i } = this.schema.primKey;
    let s = t;
    return (
      i && r && (s = dr(i)(t)),
      this._trans('readwrite', (o) =>
        this.core.mutate({ trans: o, type: 'put', values: [s], keys: n != null ? [n] : null }),
      )
        .then((o) => (o.numFailures ? W.reject(o.failures[0]) : o.lastResult))
        .then((o) => {
          if (i)
            try {
              bt(t, i, o);
            } catch {}
          return o;
        })
    );
  }
  delete(t) {
    return this._trans('readwrite', (n) =>
      this.core.mutate({ trans: n, type: 'delete', keys: [t] }),
    ).then((n) => (n.numFailures ? W.reject(n.failures[0]) : void 0));
  }
  clear() {
    return this._trans('readwrite', (t) =>
      this.core.mutate({ trans: t, type: 'deleteRange', range: To }),
    ).then((t) => (t.numFailures ? W.reject(t.failures[0]) : void 0));
  }
  bulkGet(t) {
    return this._trans('readonly', (n) =>
      this.core.getMany({ keys: t, trans: n }).then((r) => r.map((i) => this.hook.reading.fire(i))),
    );
  }
  bulkAdd(t, n, r) {
    const i = Array.isArray(n) ? n : void 0,
      s = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
    return this._trans('readwrite', (o) => {
      const { auto: c, keyPath: l } = this.schema.primKey;
      if (l && i)
        throw new ne.InvalidArgument(
          'bulkAdd(): keys argument invalid on tables with inbound keys',
        );
      if (i && i.length !== t.length)
        throw new ne.InvalidArgument('Arguments objects and keys must have the same length');
      const a = t.length;
      let f = l && c ? t.map(dr(l)) : t;
      return this.core
        .mutate({ trans: o, type: 'add', keys: i, values: f, wantResults: s })
        .then(({ numFailures: h, results: m, lastResult: g, failures: w }) => {
          if (h === 0) return s ? m : g;
          throw new Rn(`${this.name}.bulkAdd(): ${h} of ${a} operations failed`, w);
        });
    });
  }
  bulkPut(t, n, r) {
    const i = Array.isArray(n) ? n : void 0,
      s = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
    return this._trans('readwrite', (o) => {
      const { auto: c, keyPath: l } = this.schema.primKey;
      if (l && i)
        throw new ne.InvalidArgument(
          'bulkPut(): keys argument invalid on tables with inbound keys',
        );
      if (i && i.length !== t.length)
        throw new ne.InvalidArgument('Arguments objects and keys must have the same length');
      const a = t.length;
      let f = l && c ? t.map(dr(l)) : t;
      return this.core
        .mutate({ trans: o, type: 'put', keys: i, values: f, wantResults: s })
        .then(({ numFailures: h, results: m, lastResult: g, failures: w }) => {
          if (h === 0) return s ? m : g;
          throw new Rn(`${this.name}.bulkPut(): ${h} of ${a} operations failed`, w);
        });
    });
  }
  bulkDelete(t) {
    const n = t.length;
    return this._trans('readwrite', (r) =>
      this.core.mutate({ trans: r, type: 'delete', keys: t }),
    ).then(({ numFailures: r, lastResult: i, failures: s }) => {
      if (r === 0) return i;
      throw new Rn(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`, s);
    });
  }
}
function Kn(e) {
  var t = {},
    n = function (c, l) {
      if (l) {
        for (var a = arguments.length, f = new Array(a - 1); --a; ) f[a - 1] = arguments[a];
        return t[c].subscribe.apply(null, f), e;
      }
      if (typeof c == 'string') return t[c];
    };
  n.addEventType = s;
  for (var r = 1, i = arguments.length; r < i; ++r) s(arguments[r]);
  return n;
  function s(c, l, a) {
    if (typeof c == 'object') return o(c);
    l || (l = bc), a || (a = xe);
    var f = {
      subscribers: [],
      fire: a,
      subscribe: function (h) {
        f.subscribers.indexOf(h) === -1 && (f.subscribers.push(h), (f.fire = l(f.fire, h)));
      },
      unsubscribe: function (h) {
        (f.subscribers = f.subscribers.filter(function (m) {
          return m !== h;
        })),
          (f.fire = f.subscribers.reduce(l, a));
      },
    };
    return (t[c] = n[c] = f), f;
  }
  function o(c) {
    Re(c).forEach(function (l) {
      var a = c[l];
      if (ze(a)) s(l, c[l][0], c[l][1]);
      else {
        if (a !== 'asap') throw new ne.InvalidArgument('Invalid event config');
        var f = s(l, Yn, function () {
          for (var h = arguments.length, m = new Array(h); h--; ) m[h] = arguments[h];
          f.subscribers.forEach(function (g) {
            co(function () {
              g.apply(null, m);
            });
          });
        });
      }
    });
  }
}
function kn(e, t) {
  return vn(t).from({ prototype: e }), t;
}
function ln(e, t) {
  return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
}
function Zr(e, t) {
  e.filter = nn(e.filter, t);
}
function ei(e, t, n) {
  var r = e.replayFilter;
  (e.replayFilter = r ? () => nn(r(), t()) : t), (e.justLimit = n && !r);
}
function xr(e, t) {
  if (e.isPrimKey) return t.primaryKey;
  const n = t.getIndexByKeyPath(e.index);
  if (!n)
    throw new ne.Schema('KeyPath ' + e.index + ' on object store ' + t.name + ' is not indexed');
  return n;
}
function xs(e, t, n) {
  const r = xr(e, t.schema);
  return t.openCursor({
    trans: n,
    values: !e.keysOnly,
    reverse: e.dir === 'prev',
    unique: !!e.unique,
    query: { index: r, range: e.range },
  });
}
function hr(e, t, n, r) {
  const i = e.replayFilter ? nn(e.filter, e.replayFilter()) : e.filter;
  if (e.or) {
    const s = {},
      o = (c, l, a) => {
        if (
          !i ||
          i(
            l,
            a,
            (m) => l.stop(m),
            (m) => l.fail(m),
          )
        ) {
          var f = l.primaryKey,
            h = '' + f;
          h === '[object ArrayBuffer]' && (h = '' + new Uint8Array(f)),
            ct(s, h) || ((s[h] = !0), t(c, l, a));
        }
      };
    return Promise.all([
      e.or._iterate(o, n),
      Es(xs(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper),
    ]);
  }
  return Es(xs(e, r, n), nn(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
}
function Es(e, t, n, r) {
  var i = Pe(r ? (s, o, c) => n(r(s), o, c) : n);
  return e.then((s) => {
    if (s)
      return s.start(() => {
        var o = () => s.continue();
        (t &&
          !t(
            s,
            (c) => (o = c),
            (c) => {
              s.stop(c), (o = xe);
            },
            (c) => {
              s.fail(c), (o = xe);
            },
          )) ||
          i(s.value, s, (c) => (o = c)),
          o();
      });
  });
}
function Ge(e, t) {
  try {
    const n = As(e),
      r = As(t);
    if (n !== r)
      return n === 'Array'
        ? 1
        : r === 'Array'
        ? -1
        : n === 'binary'
        ? 1
        : r === 'binary'
        ? -1
        : n === 'string'
        ? 1
        : r === 'string'
        ? -1
        : n === 'Date'
        ? 1
        : r !== 'Date'
        ? NaN
        : -1;
    switch (n) {
      case 'number':
      case 'Date':
      case 'string':
        return e > t ? 1 : e < t ? -1 : 0;
      case 'binary':
        return (function (i, s) {
          const o = i.length,
            c = s.length,
            l = o < c ? o : c;
          for (let a = 0; a < l; ++a) if (i[a] !== s[a]) return i[a] < s[a] ? -1 : 1;
          return o === c ? 0 : o < c ? -1 : 1;
        })(Os(e), Os(t));
      case 'Array':
        return (function (i, s) {
          const o = i.length,
            c = s.length,
            l = o < c ? o : c;
          for (let a = 0; a < l; ++a) {
            const f = Ge(i[a], s[a]);
            if (f !== 0) return f;
          }
          return o === c ? 0 : o < c ? -1 : 1;
        })(e, t);
    }
  } catch {}
  return NaN;
}
function As(e) {
  const t = typeof e;
  if (t !== 'object') return t;
  if (ArrayBuffer.isView(e)) return 'binary';
  const n = li(e);
  return n === 'ArrayBuffer' ? 'binary' : n;
}
function Os(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : new Uint8Array(e);
}
class kc {
  _read(t, n) {
    var r = this._ctx;
    return r.error
      ? r.table._trans(null, Le.bind(null, r.error))
      : r.table._trans('readonly', t).then(n);
  }
  _write(t) {
    var n = this._ctx;
    return n.error
      ? n.table._trans(null, Le.bind(null, n.error))
      : n.table._trans('readwrite', t, 'locked');
  }
  _addAlgorithm(t) {
    var n = this._ctx;
    n.algorithm = nn(n.algorithm, t);
  }
  _iterate(t, n) {
    return hr(this._ctx, t, n, this._ctx.table.core);
  }
  clone(t) {
    var n = Object.create(this.constructor.prototype),
      r = Object.create(this._ctx);
    return t && Xe(r, t), (n._ctx = r), n;
  }
  raw() {
    return (this._ctx.valueMapper = null), this;
  }
  each(t) {
    var n = this._ctx;
    return this._read((r) => hr(n, t, r, n.table.core));
  }
  count(t) {
    return this._read((n) => {
      const r = this._ctx,
        i = r.table.core;
      if (ln(r, !0))
        return i
          .count({ trans: n, query: { index: xr(r, i.schema), range: r.range } })
          .then((o) => Math.min(o, r.limit));
      var s = 0;
      return hr(r, () => (++s, !1), n, i).then(() => s);
    }).then(t);
  }
  sortBy(t, n) {
    const r = t.split('.').reverse(),
      i = r[0],
      s = r.length - 1;
    function o(a, f) {
      return f ? o(a[r[f]], f - 1) : a[i];
    }
    var c = this._ctx.dir === 'next' ? 1 : -1;
    function l(a, f) {
      var h = o(a, s),
        m = o(f, s);
      return h < m ? -c : h > m ? c : 0;
    }
    return this.toArray(function (a) {
      return a.sort(l);
    }).then(n);
  }
  toArray(t) {
    return this._read((n) => {
      var r = this._ctx;
      if (r.dir === 'next' && ln(r, !0) && r.limit > 0) {
        const { valueMapper: i } = r,
          s = xr(r, r.table.core.schema);
        return r.table.core
          .query({ trans: n, limit: r.limit, values: !0, query: { index: s, range: r.range } })
          .then(({ result: o }) => (i ? o.map(i) : o));
      }
      {
        const i = [];
        return hr(r, (s) => i.push(s), n, r.table.core).then(() => i);
      }
    }, t);
  }
  offset(t) {
    var n = this._ctx;
    return (
      t <= 0 ||
        ((n.offset += t),
        ln(n)
          ? ei(n, () => {
              var r = t;
              return (i, s) =>
                r === 0 ||
                (r === 1
                  ? (--r, !1)
                  : (s(() => {
                      i.advance(r), (r = 0);
                    }),
                    !1));
            })
          : ei(n, () => {
              var r = t;
              return () => --r < 0;
            })),
      this
    );
  }
  limit(t) {
    return (
      (this._ctx.limit = Math.min(this._ctx.limit, t)),
      ei(
        this._ctx,
        () => {
          var n = t;
          return function (r, i, s) {
            return --n <= 0 && i(s), n >= 0;
          };
        },
        !0,
      ),
      this
    );
  }
  until(t, n) {
    return (
      Zr(this._ctx, function (r, i, s) {
        return !t(r.value) || (i(s), n);
      }),
      this
    );
  }
  first(t) {
    return this.limit(1)
      .toArray(function (n) {
        return n[0];
      })
      .then(t);
  }
  last(t) {
    return this.reverse().first(t);
  }
  filter(t) {
    var n, r;
    return (
      Zr(this._ctx, function (i) {
        return t(i.value);
      }),
      (n = this._ctx),
      (r = t),
      (n.isMatch = nn(n.isMatch, r)),
      this
    );
  }
  and(t) {
    return this.filter(t);
  }
  or(t) {
    return new this.db.WhereClause(this._ctx.table, t, this);
  }
  reverse() {
    return (
      (this._ctx.dir = this._ctx.dir === 'prev' ? 'next' : 'prev'),
      this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
      this
    );
  }
  desc() {
    return this.reverse();
  }
  eachKey(t) {
    var n = this._ctx;
    return (
      (n.keysOnly = !n.isMatch),
      this.each(function (r, i) {
        t(i.key, i);
      })
    );
  }
  eachUniqueKey(t) {
    return (this._ctx.unique = 'unique'), this.eachKey(t);
  }
  eachPrimaryKey(t) {
    var n = this._ctx;
    return (
      (n.keysOnly = !n.isMatch),
      this.each(function (r, i) {
        t(i.primaryKey, i);
      })
    );
  }
  keys(t) {
    var n = this._ctx;
    n.keysOnly = !n.isMatch;
    var r = [];
    return this.each(function (i, s) {
      r.push(s.key);
    })
      .then(function () {
        return r;
      })
      .then(t);
  }
  primaryKeys(t) {
    var n = this._ctx;
    if (n.dir === 'next' && ln(n, !0) && n.limit > 0)
      return this._read((i) => {
        var s = xr(n, n.table.core.schema);
        return n.table.core.query({
          trans: i,
          values: !1,
          limit: n.limit,
          query: { index: s, range: n.range },
        });
      })
        .then(({ result: i }) => i)
        .then(t);
    n.keysOnly = !n.isMatch;
    var r = [];
    return this.each(function (i, s) {
      r.push(s.primaryKey);
    })
      .then(function () {
        return r;
      })
      .then(t);
  }
  uniqueKeys(t) {
    return (this._ctx.unique = 'unique'), this.keys(t);
  }
  firstKey(t) {
    return this.limit(1)
      .keys(function (n) {
        return n[0];
      })
      .then(t);
  }
  lastKey(t) {
    return this.reverse().firstKey(t);
  }
  distinct() {
    var t = this._ctx,
      n = t.index && t.table.schema.idxByName[t.index];
    if (!n || !n.multi) return this;
    var r = {};
    return (
      Zr(this._ctx, function (i) {
        var s = i.primaryKey.toString(),
          o = ct(r, s);
        return (r[s] = !0), !o;
      }),
      this
    );
  }
  modify(t) {
    var n = this._ctx;
    return this._write((r) => {
      var i;
      if (typeof t == 'function') i = t;
      else {
        var s = Re(t),
          o = s.length;
        i = function (b) {
          for (var S = !1, E = 0; E < o; ++E) {
            var A = s[E],
              x = t[A];
            Nt(b, A) !== x && (bt(b, A, x), (S = !0));
          }
          return S;
        };
      }
      const c = n.table.core,
        { outbound: l, extractKey: a } = c.schema.primaryKey,
        f = this.db._options.modifyChunkSize || 200,
        h = [];
      let m = 0;
      const g = [],
        w = (b, S) => {
          const { failures: E, numFailures: A } = S;
          m += b - A;
          for (let x of Re(E)) h.push(E[x]);
        };
      return this.clone()
        .primaryKeys()
        .then((b) => {
          const S = (E) => {
            const A = Math.min(f, b.length - E);
            return c
              .getMany({ trans: r, keys: b.slice(E, E + A), cache: 'immutable' })
              .then((x) => {
                const B = [],
                  k = [],
                  I = l ? [] : null,
                  C = [];
                for (let v = 0; v < A; ++v) {
                  const d = x[v],
                    P = { value: er(d), primKey: b[E + v] };
                  i.call(P, P.value, P) !== !1 &&
                    (P.value == null
                      ? C.push(b[E + v])
                      : l || Ge(a(d), a(P.value)) === 0
                      ? (k.push(P.value), l && I.push(b[E + v]))
                      : (C.push(b[E + v]), B.push(P.value)));
                }
                const $ = ln(n) &&
                  n.limit === 1 / 0 &&
                  (typeof t != 'function' || t === ti) && { index: n.index, range: n.range };
                return Promise.resolve(
                  B.length > 0 &&
                    c.mutate({ trans: r, type: 'add', values: B }).then((v) => {
                      for (let d in v.failures) C.splice(parseInt(d), 1);
                      w(B.length, v);
                    }),
                )
                  .then(
                    () =>
                      (k.length > 0 || ($ && typeof t == 'object')) &&
                      c
                        .mutate({
                          trans: r,
                          type: 'put',
                          keys: I,
                          values: k,
                          criteria: $,
                          changeSpec: typeof t != 'function' && t,
                        })
                        .then((v) => w(k.length, v)),
                  )
                  .then(
                    () =>
                      (C.length > 0 || ($ && t === ti)) &&
                      c
                        .mutate({ trans: r, type: 'delete', keys: C, criteria: $ })
                        .then((v) => w(C.length, v)),
                  )
                  .then(() => b.length > E + A && S(E + f));
              });
          };
          return S(0).then(() => {
            if (h.length > 0) throw new Nr('Error modifying one or more objects', h, m, g);
            return b.length;
          });
        });
    });
  }
  delete() {
    var t = this._ctx,
      n = t.range;
    return ln(t) && ((t.isPrimKey && !Tc) || n.type === 3)
      ? this._write((r) => {
          const { primaryKey: i } = t.table.core.schema,
            s = n;
          return t.table.core.count({ trans: r, query: { index: i, range: s } }).then((o) =>
            t.table.core
              .mutate({ trans: r, type: 'deleteRange', range: s })
              .then(({ failures: c, lastResult: l, results: a, numFailures: f }) => {
                if (f)
                  throw new Nr(
                    'Could not delete some values',
                    Object.keys(c).map((h) => c[h]),
                    o - f,
                  );
                return o - f;
              }),
          );
        })
      : this.modify(ti);
  }
}
const ti = (e, t) => (t.value = null);
function Cc(e, t) {
  return e < t ? -1 : e === t ? 0 : 1;
}
function Nc(e, t) {
  return e > t ? -1 : e === t ? 0 : 1;
}
function st(e, t, n) {
  var r = e instanceof ko ? new e.Collection(e) : e;
  return (r._ctx.error = n ? new n(t) : new TypeError(t)), r;
}
function fn(e) {
  return new e.Collection(e, () => Po('')).limit(0);
}
function Ic(e, t, n, r, i, s) {
  for (var o = Math.min(e.length, r.length), c = -1, l = 0; l < o; ++l) {
    var a = t[l];
    if (a !== r[l])
      return i(e[l], n[l]) < 0
        ? e.substr(0, l) + n[l] + n.substr(l + 1)
        : i(e[l], r[l]) < 0
        ? e.substr(0, l) + r[l] + n.substr(l + 1)
        : c >= 0
        ? e.substr(0, c) + t[c] + n.substr(c + 1)
        : null;
    i(e[l], a) < 0 && (c = l);
  }
  return o < r.length && s === 'next'
    ? e + n.substr(e.length)
    : o < e.length && s === 'prev'
    ? e.substr(0, n.length)
    : c < 0
    ? null
    : e.substr(0, c) + r[c] + n.substr(c + 1);
}
function pr(e, t, n, r) {
  var i,
    s,
    o,
    c,
    l,
    a,
    f,
    h = n.length;
  if (!n.every((b) => typeof b == 'string')) return st(e, 'String expected.');
  function m(b) {
    (i = (function (E) {
      return E === 'next' ? (A) => A.toUpperCase() : (A) => A.toLowerCase();
    })(b)),
      (s = (function (E) {
        return E === 'next' ? (A) => A.toLowerCase() : (A) => A.toUpperCase();
      })(b)),
      (o = b === 'next' ? Cc : Nc);
    var S = n
      .map(function (E) {
        return { lower: s(E), upper: i(E) };
      })
      .sort(function (E, A) {
        return o(E.lower, A.lower);
      });
    (c = S.map(function (E) {
      return E.upper;
    })),
      (l = S.map(function (E) {
        return E.lower;
      })),
      (a = b),
      (f = b === 'next' ? '' : r);
  }
  m('next');
  var g = new e.Collection(e, () => $t(c[0], l[h - 1] + r));
  g._ondirectionchange = function (b) {
    m(b);
  };
  var w = 0;
  return (
    g._addAlgorithm(function (b, S, E) {
      var A = b.key;
      if (typeof A != 'string') return !1;
      var x = s(A);
      if (t(x, l, w)) return !0;
      for (var B = null, k = w; k < h; ++k) {
        var I = Ic(A, x, c[k], l[k], o, a);
        I === null && B === null ? (w = k + 1) : (B === null || o(B, I) > 0) && (B = I);
      }
      return (
        S(
          B !== null
            ? function () {
                b.continue(B + f);
              }
            : E,
        ),
        !1
      );
    }),
    g
  );
}
function $t(e, t, n, r) {
  return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
}
function Po(e) {
  return { type: 1, lower: e, upper: e };
}
class ko {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(t, n, r, i) {
    (r = r !== !1), (i = i === !0);
    try {
      return this._cmp(t, n) > 0 || (this._cmp(t, n) === 0 && (r || i) && (!r || !i))
        ? fn(this)
        : new this.Collection(this, () => $t(t, n, !r, !i));
    } catch {
      return st(this, Ot);
    }
  }
  equals(t) {
    return t == null ? st(this, Ot) : new this.Collection(this, () => Po(t));
  }
  above(t) {
    return t == null ? st(this, Ot) : new this.Collection(this, () => $t(t, void 0, !0));
  }
  aboveOrEqual(t) {
    return t == null ? st(this, Ot) : new this.Collection(this, () => $t(t, void 0, !1));
  }
  below(t) {
    return t == null ? st(this, Ot) : new this.Collection(this, () => $t(void 0, t, !1, !0));
  }
  belowOrEqual(t) {
    return t == null ? st(this, Ot) : new this.Collection(this, () => $t(void 0, t));
  }
  startsWith(t) {
    return typeof t != 'string' ? st(this, 'String expected.') : this.between(t, t + Ht, !0, !0);
  }
  startsWithIgnoreCase(t) {
    return t === '' ? this.startsWith(t) : pr(this, (n, r) => n.indexOf(r[0]) === 0, [t], Ht);
  }
  equalsIgnoreCase(t) {
    return pr(this, (n, r) => n === r[0], [t], '');
  }
  anyOfIgnoreCase() {
    var t = Pt.apply(hn, arguments);
    return t.length === 0 ? fn(this) : pr(this, (n, r) => r.indexOf(n) !== -1, t, '');
  }
  startsWithAnyOfIgnoreCase() {
    var t = Pt.apply(hn, arguments);
    return t.length === 0 ? fn(this) : pr(this, (n, r) => r.some((i) => n.indexOf(i) === 0), t, Ht);
  }
  anyOf() {
    const t = Pt.apply(hn, arguments);
    let n = this._cmp;
    try {
      t.sort(n);
    } catch {
      return st(this, Ot);
    }
    if (t.length === 0) return fn(this);
    const r = new this.Collection(this, () => $t(t[0], t[t.length - 1]));
    r._ondirectionchange = (s) => {
      (n = s === 'next' ? this._ascending : this._descending), t.sort(n);
    };
    let i = 0;
    return (
      r._addAlgorithm((s, o, c) => {
        const l = s.key;
        for (; n(l, t[i]) > 0; ) if ((++i, i === t.length)) return o(c), !1;
        return (
          n(l, t[i]) === 0 ||
          (o(() => {
            s.continue(t[i]);
          }),
          !1)
        );
      }),
      r
    );
  }
  notEqual(t) {
    return this.inAnyRange(
      [
        [-(1 / 0), t],
        [t, this.db._maxKey],
      ],
      { includeLowers: !1, includeUppers: !1 },
    );
  }
  noneOf() {
    const t = Pt.apply(hn, arguments);
    if (t.length === 0) return new this.Collection(this);
    try {
      t.sort(this._ascending);
    } catch {
      return st(this, Ot);
    }
    const n = t.reduce((r, i) => (r ? r.concat([[r[r.length - 1][1], i]]) : [[-(1 / 0), i]]), null);
    return (
      n.push([t[t.length - 1], this.db._maxKey]),
      this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 })
    );
  }
  inAnyRange(t, n) {
    const r = this._cmp,
      i = this._ascending,
      s = this._descending,
      o = this._min,
      c = this._max;
    if (t.length === 0) return fn(this);
    if (!t.every((A) => A[0] !== void 0 && A[1] !== void 0 && i(A[0], A[1]) <= 0))
      return st(
        this,
        'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
        ne.InvalidArgument,
      );
    const l = !n || n.includeLowers !== !1,
      a = n && n.includeUppers === !0;
    let f,
      h = i;
    function m(A, x) {
      return h(A[0], x[0]);
    }
    try {
      (f = t.reduce(function (A, x) {
        let B = 0,
          k = A.length;
        for (; B < k; ++B) {
          const I = A[B];
          if (r(x[0], I[1]) < 0 && r(x[1], I[0]) > 0) {
            (I[0] = o(I[0], x[0])), (I[1] = c(I[1], x[1]));
            break;
          }
        }
        return B === k && A.push(x), A;
      }, [])),
        f.sort(m);
    } catch {
      return st(this, Ot);
    }
    let g = 0;
    const w = a ? (A) => i(A, f[g][1]) > 0 : (A) => i(A, f[g][1]) >= 0,
      b = l ? (A) => s(A, f[g][0]) > 0 : (A) => s(A, f[g][0]) >= 0;
    let S = w;
    const E = new this.Collection(this, () => $t(f[0][0], f[f.length - 1][1], !l, !a));
    return (
      (E._ondirectionchange = (A) => {
        A === 'next' ? ((S = w), (h = i)) : ((S = b), (h = s)), f.sort(m);
      }),
      E._addAlgorithm((A, x, B) => {
        for (var k = A.key; S(k); ) if ((++g, g === f.length)) return x(B), !1;
        return (
          !!(function (I) {
            return !w(I) && !b(I);
          })(k) ||
          (this._cmp(k, f[g][1]) === 0 ||
            this._cmp(k, f[g][0]) === 0 ||
            x(() => {
              h === i ? A.continue(f[g][0]) : A.continue(f[g][1]);
            }),
          !1)
        );
      }),
      E
    );
  }
  startsWithAnyOf() {
    const t = Pt.apply(hn, arguments);
    return t.every((n) => typeof n == 'string')
      ? t.length === 0
        ? fn(this)
        : this.inAnyRange(t.map((n) => [n, n + Ht]))
      : st(this, 'startsWithAnyOf() only works with strings');
  }
}
function _t(e) {
  return Pe(function (t) {
    return Jn(t), e(t.target.error), !1;
  });
}
function Jn(e) {
  e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
}
const qt = Kn(null, 'storagemutated');
class Bc {
  _lock() {
    return (
      Cn(!Q.global),
      ++this._reculock,
      this._reculock !== 1 || Q.global || (Q.lockOwnerFor = this),
      this
    );
  }
  _unlock() {
    if ((Cn(!Q.global), --this._reculock == 0))
      for (
        Q.global || (Q.lockOwnerFor = null);
        this._blockedFuncs.length > 0 && !this._locked();

      ) {
        var t = this._blockedFuncs.shift();
        try {
          On(t[1], t[0]);
        } catch {}
      }
    return this;
  }
  _locked() {
    return this._reculock && Q.lockOwnerFor !== this;
  }
  create(t) {
    if (!this.mode) return this;
    const n = this.db.idbdb,
      r = this.db._state.dbOpenError;
    if ((Cn(!this.idbtrans), !t && !n))
      switch (r && r.name) {
        case 'DatabaseClosedError':
          throw new ne.DatabaseClosed(r);
        case 'MissingAPIError':
          throw new ne.MissingAPI(r.message, r);
        default:
          throw new ne.OpenFailed(r);
      }
    if (!this.active) throw new ne.TransactionInactive();
    return (
      Cn(this._completion._state === null),
      ((t = this.idbtrans =
        t ||
        (this.db.core
          ? this.db.core.transaction(this.storeNames, this.mode, {
              durability: this.chromeTransactionDurability,
            })
          : n.transaction(this.storeNames, this.mode, {
              durability: this.chromeTransactionDurability,
            }))).onerror = Pe((i) => {
        Jn(i), this._reject(t.error);
      })),
      (t.onabort = Pe((i) => {
        Jn(i),
          this.active && this._reject(new ne.Abort(t.error)),
          (this.active = !1),
          this.on('abort').fire(i);
      })),
      (t.oncomplete = Pe(() => {
        (this.active = !1),
          this._resolve(),
          'mutatedParts' in t && qt.storagemutated.fire(t.mutatedParts);
      })),
      this
    );
  }
  _promise(t, n, r) {
    if (t === 'readwrite' && this.mode !== 'readwrite')
      return Le(new ne.ReadOnly('Transaction is readonly'));
    if (!this.active) return Le(new ne.TransactionInactive());
    if (this._locked())
      return new W((s, o) => {
        this._blockedFuncs.push([
          () => {
            this._promise(t, n, r).then(s, o);
          },
          Q,
        ]);
      });
    if (r)
      return Ut(() => {
        var s = new W((o, c) => {
          this._lock();
          const l = n(o, c, this);
          l && l.then && l.then(o, c);
        });
        return s.finally(() => this._unlock()), (s._lib = !0), s;
      });
    var i = new W((s, o) => {
      var c = n(s, o, this);
      c && c.then && c.then(s, o);
    });
    return (i._lib = !0), i;
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(t) {
    var n = this._root();
    const r = W.resolve(t);
    if (n._waitingFor) n._waitingFor = n._waitingFor.then(() => r);
    else {
      (n._waitingFor = r), (n._waitingQueue = []);
      var i = n.idbtrans.objectStore(n.storeNames[0]);
      (function o() {
        for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
        n._waitingFor && (i.get(-1 / 0).onsuccess = o);
      })();
    }
    var s = n._waitingFor;
    return new W((o, c) => {
      r.then(
        (l) => n._waitingQueue.push(Pe(o.bind(null, l))),
        (l) => n._waitingQueue.push(Pe(c.bind(null, l))),
      ).finally(() => {
        n._waitingFor === s && (n._waitingFor = null);
      });
    });
  }
  abort() {
    this.active &&
      ((this.active = !1), this.idbtrans && this.idbtrans.abort(), this._reject(new ne.Abort()));
  }
  table(t) {
    const n = this._memoizedTables || (this._memoizedTables = {});
    if (ct(n, t)) return n[t];
    const r = this.schema[t];
    if (!r) throw new ne.NotFound('Table ' + t + ' not part of transaction');
    const i = new this.db.Table(t, r, this);
    return (i.core = this.db.core.table(t)), (n[t] = i), i;
  }
}
function Si(e, t, n, r, i, s, o) {
  return {
    name: e,
    keyPath: t,
    unique: n,
    multi: r,
    auto: i,
    compound: s,
    src: (n && !o ? '&' : '') + (r ? '*' : '') + (i ? '++' : '') + Co(t),
  };
}
function Co(e) {
  return typeof e == 'string' ? e : e ? '[' + [].join.call(e, '+') + ']' : '';
}
function No(e, t, n) {
  return {
    name: e,
    primKey: t,
    indexes: n,
    mappedClass: null,
    idxByName: uo(n, (r) => [r.name, r]),
  };
}
let Hn = (e) => {
  try {
    return e.only([[]]), (Hn = () => [[]]), [[]];
  } catch {
    return (Hn = () => Ht), Ht;
  }
};
function xi(e) {
  return e == null
    ? () => {}
    : typeof e == 'string'
    ? (function (t) {
        return t.split('.').length === 1 ? (n) => n[t] : (n) => Nt(n, t);
      })(e)
    : (t) => Nt(t, e);
}
function Ts(e) {
  return [].slice.call(e);
}
let jc = 0;
function Fn(e) {
  return e == null ? ':id' : typeof e == 'string' ? e : `[${e.join('+')}]`;
}
function Dc(e, t, n) {
  function r(l) {
    if (l.type === 3) return null;
    if (l.type === 4) throw new Error('Cannot convert never type to IDBKeyRange');
    const { lower: a, upper: f, lowerOpen: h, upperOpen: m } = l;
    return a === void 0
      ? f === void 0
        ? null
        : t.upperBound(f, !!m)
      : f === void 0
      ? t.lowerBound(a, !!h)
      : t.bound(a, f, !!h, !!m);
  }
  const { schema: i, hasGetAll: s } = (function (l, a) {
      const f = Ts(l.objectStoreNames);
      return {
        schema: {
          name: l.name,
          tables: f
            .map((h) => a.objectStore(h))
            .map((h) => {
              const { keyPath: m, autoIncrement: g } = h,
                w = ze(m),
                b = m == null,
                S = {},
                E = {
                  name: h.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: b,
                    compound: w,
                    keyPath: m,
                    autoIncrement: g,
                    unique: !0,
                    extractKey: xi(m),
                  },
                  indexes: Ts(h.indexNames)
                    .map((A) => h.index(A))
                    .map((A) => {
                      const { name: x, unique: B, multiEntry: k, keyPath: I } = A,
                        C = {
                          name: x,
                          compound: ze(I),
                          keyPath: I,
                          unique: B,
                          multiEntry: k,
                          extractKey: xi(I),
                        };
                      return (S[Fn(I)] = C), C;
                    }),
                  getIndexByKeyPath: (A) => S[Fn(A)],
                };
              return (S[':id'] = E.primaryKey), m != null && (S[Fn(m)] = E.primaryKey), E;
            }),
        },
        hasGetAll:
          f.length > 0 &&
          'getAll' in a.objectStore(f[0]) &&
          !(
            typeof navigator < 'u' &&
            /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
          ),
      };
    })(e, n),
    o = i.tables.map((l) =>
      (function (a) {
        const f = a.name;
        return {
          name: f,
          schema: a,
          mutate: function ({ trans: h, type: m, keys: g, values: w, range: b }) {
            return new Promise((S, E) => {
              S = Pe(S);
              const A = h.objectStore(f),
                x = A.keyPath == null,
                B = m === 'put' || m === 'add';
              if (!B && m !== 'delete' && m !== 'deleteRange')
                throw new Error('Invalid operation type: ' + m);
              const { length: k } = g || w || { length: 1 };
              if (g && w && g.length !== w.length)
                throw new Error('Given keys array must have same length as given values array.');
              if (k === 0)
                return S({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              let I;
              const C = [],
                $ = [];
              let v = 0;
              const d = (T) => {
                ++v, Jn(T);
              };
              if (m === 'deleteRange') {
                if (b.type === 4)
                  return S({ numFailures: v, failures: $, results: [], lastResult: void 0 });
                b.type === 3 ? C.push((I = A.clear())) : C.push((I = A.delete(r(b))));
              } else {
                const [T, Y] = B ? (x ? [w, g] : [w, null]) : [g, null];
                if (B)
                  for (let q = 0; q < k; ++q)
                    C.push((I = Y && Y[q] !== void 0 ? A[m](T[q], Y[q]) : A[m](T[q]))),
                      (I.onerror = d);
                else for (let q = 0; q < k; ++q) C.push((I = A[m](T[q]))), (I.onerror = d);
              }
              const P = (T) => {
                const Y = T.target.result;
                C.forEach((q, se) => q.error != null && ($[se] = q.error)),
                  S({
                    numFailures: v,
                    failures: $,
                    results: m === 'delete' ? g : C.map((q) => q.result),
                    lastResult: Y,
                  });
              };
              (I.onerror = (T) => {
                d(T), P(T);
              }),
                (I.onsuccess = P);
            });
          },
          getMany: ({ trans: h, keys: m }) =>
            new Promise((g, w) => {
              g = Pe(g);
              const b = h.objectStore(f),
                S = m.length,
                E = new Array(S);
              let A,
                x = 0,
                B = 0;
              const k = (C) => {
                  const $ = C.target;
                  (E[$._pos] = $.result), ++B === x && g(E);
                },
                I = _t(w);
              for (let C = 0; C < S; ++C)
                m[C] != null &&
                  ((A = b.get(m[C])), (A._pos = C), (A.onsuccess = k), (A.onerror = I), ++x);
              x === 0 && g(E);
            }),
          get: ({ trans: h, key: m }) =>
            new Promise((g, w) => {
              g = Pe(g);
              const b = h.objectStore(f).get(m);
              (b.onsuccess = (S) => g(S.target.result)), (b.onerror = _t(w));
            }),
          query: (function (h) {
            return (m) =>
              new Promise((g, w) => {
                g = Pe(g);
                const { trans: b, values: S, limit: E, query: A } = m,
                  x = E === 1 / 0 ? void 0 : E,
                  { index: B, range: k } = A,
                  I = b.objectStore(f),
                  C = B.isPrimaryKey ? I : I.index(B.name),
                  $ = r(k);
                if (E === 0) return g({ result: [] });
                if (h) {
                  const v = S ? C.getAll($, x) : C.getAllKeys($, x);
                  (v.onsuccess = (d) => g({ result: d.target.result })), (v.onerror = _t(w));
                } else {
                  let v = 0;
                  const d = S || !('openKeyCursor' in C) ? C.openCursor($) : C.openKeyCursor($),
                    P = [];
                  (d.onsuccess = (T) => {
                    const Y = d.result;
                    return Y
                      ? (P.push(S ? Y.value : Y.primaryKey),
                        ++v === E ? g({ result: P }) : void Y.continue())
                      : g({ result: P });
                  }),
                    (d.onerror = _t(w));
                }
              });
          })(s),
          openCursor: function ({ trans: h, values: m, query: g, reverse: w, unique: b }) {
            return new Promise((S, E) => {
              S = Pe(S);
              const { index: A, range: x } = g,
                B = h.objectStore(f),
                k = A.isPrimaryKey ? B : B.index(A.name),
                I = w ? (b ? 'prevunique' : 'prev') : b ? 'nextunique' : 'next',
                C = m || !('openKeyCursor' in k) ? k.openCursor(r(x), I) : k.openKeyCursor(r(x), I);
              (C.onerror = _t(E)),
                (C.onsuccess = Pe(($) => {
                  const v = C.result;
                  if (!v) return void S(null);
                  (v.___id = ++jc), (v.done = !1);
                  const d = v.continue.bind(v);
                  let P = v.continuePrimaryKey;
                  P && (P = P.bind(v));
                  const T = v.advance.bind(v),
                    Y = () => {
                      throw new Error('Cursor not stopped');
                    };
                  (v.trans = h),
                    (v.stop =
                      v.continue =
                      v.continuePrimaryKey =
                      v.advance =
                        () => {
                          throw new Error('Cursor not started');
                        }),
                    (v.fail = Pe(E)),
                    (v.next = function () {
                      let q = 1;
                      return this.start(() => (q-- ? this.continue() : this.stop())).then(
                        () => this,
                      );
                    }),
                    (v.start = (q) => {
                      const se = new Promise((ie, oe) => {
                          (ie = Pe(ie)),
                            (C.onerror = _t(oe)),
                            (v.fail = oe),
                            (v.stop = (ke) => {
                              (v.stop = v.continue = v.continuePrimaryKey = v.advance = Y), ie(ke);
                            });
                        }),
                        re = () => {
                          if (C.result)
                            try {
                              q();
                            } catch (ie) {
                              v.fail(ie);
                            }
                          else
                            (v.done = !0),
                              (v.start = () => {
                                throw new Error('Cursor behind last entry');
                              }),
                              v.stop();
                        };
                      return (
                        (C.onsuccess = Pe((ie) => {
                          (C.onsuccess = re), re();
                        })),
                        (v.continue = d),
                        (v.continuePrimaryKey = P),
                        (v.advance = T),
                        re(),
                        se
                      );
                    }),
                    S(v);
                }, E));
            });
          },
          count({ query: h, trans: m }) {
            const { index: g, range: w } = h;
            return new Promise((b, S) => {
              const E = m.objectStore(f),
                A = g.isPrimaryKey ? E : E.index(g.name),
                x = r(w),
                B = x ? A.count(x) : A.count();
              (B.onsuccess = Pe((k) => b(k.target.result))), (B.onerror = _t(S));
            });
          },
        };
      })(l),
    ),
    c = {};
  return (
    o.forEach((l) => (c[l.name] = l)),
    {
      stack: 'dbcore',
      transaction: e.transaction.bind(e),
      table(l) {
        if (!c[l]) throw new Error(`Table '${l}' not found`);
        return c[l];
      },
      MIN_KEY: -1 / 0,
      MAX_KEY: Hn(t),
      schema: i,
    }
  );
}
function Ei({ _novip: e }, t) {
  const n = t.db,
    r = (function (i, s, { IDBKeyRange: o, indexedDB: c }, l) {
      return {
        dbcore: (function (f, h) {
          return h.reduce((m, { create: g }) => ({ ...m, ...g(m) }), f);
        })(Dc(s, o, l), i.dbcore),
      };
    })(e._middlewares, n, e._deps, t);
  (e.core = r.dbcore),
    e.tables.forEach((i) => {
      const s = i.name;
      e.core.schema.tables.some((o) => o.name === s) &&
        ((i.core = e.core.table(s)), e[s] instanceof e.Table && (e[s].core = i.core));
    });
}
function Rr({ _novip: e }, t, n, r) {
  n.forEach((i) => {
    const s = r[i];
    t.forEach((o) => {
      const c = Mi(o, i);
      (!c || ('value' in c && c.value === void 0)) &&
        (o === e.Transaction.prototype || o instanceof e.Transaction
          ? Ct(o, i, {
              get() {
                return this.table(i);
              },
              set(l) {
                oo(this, i, { value: l, writable: !0, configurable: !0, enumerable: !0 });
              },
            })
          : (o[i] = new e.Table(i, s)));
    });
  });
}
function Ai({ _novip: e }, t) {
  t.forEach((n) => {
    for (let r in n) n[r] instanceof e.Table && delete n[r];
  });
}
function Rc(e, t) {
  return e._cfg.version - t._cfg.version;
}
function $c(e, t, n, r) {
  const i = e._dbSchema,
    s = e._createTransaction('readwrite', e._storeNames, i);
  s.create(n), s._completion.catch(r);
  const o = s._reject.bind(s),
    c = Q.transless || Q;
  Ut(() => {
    (Q.trans = s),
      (Q.transless = c),
      t === 0
        ? (Re(i).forEach((l) => {
            ni(n, l, i[l].primKey, i[l].indexes);
          }),
          Ei(e, n),
          W.follow(() => e.on.populate.fire(s)).catch(o))
        : (function ({ _novip: l }, a, f, h) {
            const m = [],
              g = l._versions;
            let w = (l._dbSchema = Ti(l, l.idbdb, h)),
              b = !1;
            function S() {
              return m.length ? W.resolve(m.shift()(f.idbtrans)).then(S) : W.resolve();
            }
            return (
              g
                .filter((E) => E._cfg.version >= a)
                .forEach((E) => {
                  m.push(() => {
                    const A = w,
                      x = E._cfg.dbschema;
                    Pi(l, A, h), Pi(l, x, h), (w = l._dbSchema = x);
                    const B = Io(A, x);
                    B.add.forEach((I) => {
                      ni(h, I[0], I[1].primKey, I[1].indexes);
                    }),
                      B.change.forEach((I) => {
                        if (I.recreate)
                          throw new ne.Upgrade('Not yet support for changing primary key');
                        {
                          const C = h.objectStore(I.name);
                          I.add.forEach(($) => Oi(C, $)),
                            I.change.forEach(($) => {
                              C.deleteIndex($.name), Oi(C, $);
                            }),
                            I.del.forEach(($) => C.deleteIndex($));
                        }
                      });
                    const k = E._cfg.contentUpgrade;
                    if (k && E._cfg.version > a) {
                      Ei(l, h), (f._memoizedTables = {}), (b = !0);
                      let I = lo(x);
                      B.del.forEach((d) => {
                        I[d] = A[d];
                      }),
                        Ai(l, [l.Transaction.prototype]),
                        Rr(l, [l.Transaction.prototype], Re(I), I),
                        (f.schema = I);
                      const C = qi(k);
                      let $;
                      C && An();
                      const v = W.follow(() => {
                        if ((($ = k(f)), $ && C)) {
                          var d = It.bind(null, null);
                          $.then(d, d);
                        }
                      });
                      return $ && typeof $.then == 'function' ? W.resolve($) : v.then(() => $);
                    }
                  }),
                    m.push((A) => {
                      (!b || !Oc) &&
                        (function (x, B) {
                          [].slice
                            .call(B.db.objectStoreNames)
                            .forEach((k) => x[k] == null && B.db.deleteObjectStore(k));
                        })(E._cfg.dbschema, A),
                        Ai(l, [l.Transaction.prototype]),
                        Rr(l, [l.Transaction.prototype], l._storeNames, l._dbSchema),
                        (f.schema = l._dbSchema);
                    });
                }),
              S().then(() => {
                var E, A;
                (A = h),
                  Re((E = w)).forEach((x) => {
                    A.db.objectStoreNames.contains(x) || ni(A, x, E[x].primKey, E[x].indexes);
                  });
              })
            );
          })(e, t, s, n).catch(o);
  });
}
function Io(e, t) {
  const n = { del: [], add: [], change: [] };
  let r;
  for (r in e) t[r] || n.del.push(r);
  for (r in t) {
    const i = e[r],
      s = t[r];
    if (i) {
      const o = { name: r, def: s, recreate: !1, del: [], add: [], change: [] };
      if (
        '' + (i.primKey.keyPath || '') != '' + (s.primKey.keyPath || '') ||
        (i.primKey.auto !== s.primKey.auto && !Wr)
      )
        (o.recreate = !0), n.change.push(o);
      else {
        const c = i.idxByName,
          l = s.idxByName;
        let a;
        for (a in c) l[a] || o.del.push(a);
        for (a in l) {
          const f = c[a],
            h = l[a];
          f ? f.src !== h.src && o.change.push(h) : o.add.push(h);
        }
        (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o);
      }
    } else n.add.push([r, s]);
  }
  return n;
}
function ni(e, t, n, r) {
  const i = e.db.createObjectStore(
    t,
    n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto },
  );
  return r.forEach((s) => Oi(i, s)), i;
}
function Oi(e, t) {
  e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
}
function Ti(e, t, n) {
  const r = {};
  return (
    Cr(t.objectStoreNames, 0).forEach((i) => {
      const s = n.objectStore(i);
      let o = s.keyPath;
      const c = Si(Co(o), o || '', !1, !1, !!s.autoIncrement, o && typeof o != 'string', !0),
        l = [];
      for (let f = 0; f < s.indexNames.length; ++f) {
        const h = s.index(s.indexNames[f]);
        o = h.keyPath;
        var a = Si(h.name, o, !!h.unique, !!h.multiEntry, !1, o && typeof o != 'string', !1);
        l.push(a);
      }
      r[i] = No(i, c, l);
    }),
    r
  );
}
function Pi({ _novip: e }, t, n) {
  const r = n.db.objectStoreNames;
  for (let i = 0; i < r.length; ++i) {
    const s = r[i],
      o = n.objectStore(s);
    e._hasGetAll = 'getAll' in o;
    for (let c = 0; c < o.indexNames.length; ++c) {
      const l = o.indexNames[c],
        a = o.index(l).keyPath,
        f = typeof a == 'string' ? a : '[' + Cr(a).join('+') + ']';
      if (t[s]) {
        const h = t[s].idxByName[f];
        h && ((h.name = l), delete t[s].idxByName[f], (t[s].idxByName[l] = h));
      }
    }
  }
  typeof navigator < 'u' &&
    /Safari/.test(navigator.userAgent) &&
    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
    Te.WorkerGlobalScope &&
    Te instanceof Te.WorkerGlobalScope &&
    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
    (e._hasGetAll = !1);
}
class Lc {
  _parseStoresSpec(t, n) {
    Re(t).forEach((r) => {
      if (t[r] !== null) {
        var i = t[r].split(',').map((o, c) => {
            const l = (o = o.trim()).replace(/([&*]|\+\+)/g, ''),
              a = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split('+') : l;
            return Si(l, a || null, /\&/.test(o), /\*/.test(o), /\+\+/.test(o), ze(a), c === 0);
          }),
          s = i.shift();
        if (s.multi) throw new ne.Schema('Primary key cannot be multi-valued');
        i.forEach((o) => {
          if (o.auto) throw new ne.Schema('Only primary key can be marked as autoIncrement (++)');
          if (!o.keyPath)
            throw new ne.Schema('Index must have a name and cannot be an empty string');
        }),
          (n[r] = No(r, s, i));
      }
    });
  }
  stores(t) {
    const n = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? Xe(this._cfg.storesSource, t) : t;
    const r = n._versions,
      i = {};
    let s = {};
    return (
      r.forEach((o) => {
        Xe(i, o._cfg.storesSource), (s = o._cfg.dbschema = {}), o._parseStoresSpec(i, s);
      }),
      (n._dbSchema = s),
      Ai(n, [n._allTables, n, n.Transaction.prototype]),
      Rr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], Re(s), s),
      (n._storeNames = Re(s)),
      this
    );
  }
  upgrade(t) {
    return (this._cfg.contentUpgrade = Yi(this._cfg.contentUpgrade || xe, t)), this;
  }
}
function Gi(e, t) {
  let n = e._dbNamesDB;
  return (
    n ||
      ((n = e._dbNamesDB = new Ne('__dbnames', { addons: [], indexedDB: e, IDBKeyRange: t })),
      n.version(1).stores({ dbnames: 'name' })),
    n.table('dbnames')
  );
}
function Xi(e) {
  return e && typeof e.databases == 'function';
}
function ki(e) {
  return Ut(function () {
    return (Q.letThrough = !0), e();
  });
}
function Kc() {
  var e;
  return !navigator.userAgentData &&
    /Safari\//.test(navigator.userAgent) &&
    !/Chrom(e|ium)\//.test(navigator.userAgent) &&
    indexedDB.databases
    ? new Promise(function (t) {
        var n = function () {
          return indexedDB.databases().finally(t);
        };
        (e = setInterval(n, 100)), n();
      }).finally(function () {
        return clearInterval(e);
      })
    : Promise.resolve();
}
function Fc(e) {
  const t = e._state,
    { indexedDB: n } = e._deps;
  if (t.isBeingOpened || e.idbdb)
    return t.dbReadyPromise.then(() => (t.dbOpenError ? Le(t.dbOpenError) : e));
  xt && (t.openCanceller._stackHolder = sn()),
    (t.isBeingOpened = !0),
    (t.dbOpenError = null),
    (t.openComplete = !1);
  const r = t.openCanceller;
  function i() {
    if (t.openCanceller !== r) throw new ne.DatabaseClosed('db.open() was cancelled');
  }
  let s = t.dbReadyResolve,
    o = null,
    c = !1;
  return W.race([
    r,
    (typeof navigator > 'u' ? W.resolve() : Kc()).then(
      () =>
        new W((l, a) => {
          if ((i(), !n)) throw new ne.MissingAPI();
          const f = e.name,
            h = t.autoSchema ? n.open(f) : n.open(f, Math.round(10 * e.verno));
          if (!h) throw new ne.MissingAPI();
          (h.onerror = _t(a)),
            (h.onblocked = Pe(e._fireOnBlocked)),
            (h.onupgradeneeded = Pe((m) => {
              if (((o = h.transaction), t.autoSchema && !e._options.allowEmptyDB)) {
                (h.onerror = Jn), o.abort(), h.result.close();
                const w = n.deleteDatabase(f);
                w.onsuccess = w.onerror = Pe(() => {
                  a(new ne.NoSuchDatabase(`Database ${f} doesnt exist`));
                });
              } else {
                o.onerror = _t(a);
                var g = m.oldVersion > Math.pow(2, 62) ? 0 : m.oldVersion;
                (c = g < 1), (e._novip.idbdb = h.result), $c(e, g / 10, o, a);
              }
            }, a)),
            (h.onsuccess = Pe(() => {
              o = null;
              const m = (e._novip.idbdb = h.result),
                g = Cr(m.objectStoreNames);
              if (g.length > 0)
                try {
                  const b = m.transaction((w = g).length === 1 ? w[0] : w, 'readonly');
                  t.autoSchema
                    ? (function ({ _novip: S }, E, A) {
                        S.verno = E.version / 10;
                        const x = (S._dbSchema = Ti(0, E, A));
                        (S._storeNames = Cr(E.objectStoreNames, 0)),
                          Rr(S, [S._allTables], Re(x), x);
                      })(e, m, b)
                    : (Pi(e, e._dbSchema, b),
                      (function (S, E) {
                        const A = Io(Ti(0, S.idbdb, E), S._dbSchema);
                        return !(
                          A.add.length || A.change.some((x) => x.add.length || x.change.length)
                        );
                      })(e, b) ||
                        console.warn(
                          'Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.',
                        )),
                    Ei(e, b);
                } catch {}
              var w;
              Ln.push(e),
                (m.onversionchange = Pe((b) => {
                  (t.vcFired = !0), e.on('versionchange').fire(b);
                })),
                (m.onclose = Pe((b) => {
                  e.on('close').fire(b);
                })),
                c &&
                  (function ({ indexedDB: b, IDBKeyRange: S }, E) {
                    !Xi(b) && E !== '__dbnames' && Gi(b, S).put({ name: E }).catch(xe);
                  })(e._deps, f),
                l();
            }, a));
        }),
    ),
  ])
    .then(
      () => (
        i(),
        (t.onReadyBeingFired = []),
        W.resolve(ki(() => e.on.ready.fire(e.vip))).then(function l() {
          if (t.onReadyBeingFired.length > 0) {
            let a = t.onReadyBeingFired.reduce(Yi, xe);
            return (t.onReadyBeingFired = []), W.resolve(ki(() => a(e.vip))).then(l);
          }
        })
      ),
    )
    .finally(() => {
      (t.onReadyBeingFired = null), (t.isBeingOpened = !1);
    })
    .then(() => e)
    .catch((l) => {
      t.dbOpenError = l;
      try {
        o && o.abort();
      } catch {}
      return r === t.openCanceller && e._close(), Le(l);
    })
    .finally(() => {
      (t.openComplete = !0), s();
    });
}
function Ci(e) {
  var t = (s) => e.next(s),
    n = i(t),
    r = i((s) => e.throw(s));
  function i(s) {
    return (o) => {
      var c = s(o),
        l = c.value;
      return c.done
        ? l
        : l && typeof l.then == 'function'
        ? l.then(n, r)
        : ze(l)
        ? Promise.all(l).then(n, r)
        : n(l);
    };
  }
  return i(t)();
}
function Uc(e, t, n) {
  var r = arguments.length;
  if (r < 2) throw new ne.InvalidArgument('Too few arguments');
  for (var i = new Array(r - 1); --r; ) i[r - 1] = arguments[r];
  n = i.pop();
  var s = fo(i);
  return [e, s, n];
}
function Bo(e, t, n, r, i) {
  return W.resolve().then(() => {
    const s = Q.transless || Q,
      o = e._createTransaction(t, n, e._dbSchema, r),
      c = { trans: o, transless: s };
    if (r) o.idbtrans = r.idbtrans;
    else
      try {
        o.create(), (e._state.PR1398_maxLoop = 3);
      } catch (h) {
        return h.name === Vi.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
          ? (console.warn('Dexie: Need to reopen db'),
            e._close(),
            e.open().then(() => Bo(e, t, n, null, i)))
          : Le(h);
      }
    const l = qi(i);
    let a;
    l && An();
    const f = W.follow(() => {
      if (((a = i.call(o, o)), a))
        if (l) {
          var h = It.bind(null, null);
          a.then(h, h);
        } else typeof a.next == 'function' && typeof a.throw == 'function' && (a = Ci(a));
    }, c);
    return (
      a && typeof a.then == 'function'
        ? W.resolve(a).then((h) =>
            o.active
              ? h
              : Le(
                  new ne.PrematureCommit(
                    'Transaction committed too early. See http://bit.ly/2kdckMn',
                  ),
                ),
          )
        : f.then(() => a)
    )
      .then((h) => (r && o._resolve(), o._completion.then(() => h)))
      .catch((h) => (o._reject(h), Le(h)));
  });
}
function yr(e, t, n) {
  const r = ze(e) ? e.slice() : [e];
  for (let i = 0; i < n; ++i) r.push(t);
  return r;
}
const Mc = {
  stack: 'dbcore',
  name: 'VirtualIndexMiddleware',
  level: 1,
  create: function (e) {
    return {
      ...e,
      table(t) {
        const n = e.table(t),
          { schema: r } = n,
          i = {},
          s = [];
        function o(f, h, m) {
          const g = Fn(f),
            w = (i[g] = i[g] || []),
            b = f == null ? 0 : typeof f == 'string' ? 1 : f.length,
            S = h > 0,
            E = {
              ...m,
              isVirtual: S,
              keyTail: h,
              keyLength: b,
              extractKey: xi(f),
              unique: !S && m.unique,
            };
          return (
            w.push(E),
            E.isPrimaryKey || s.push(E),
            b > 1 && o(b === 2 ? f[0] : f.slice(0, b - 1), h + 1, m),
            w.sort((A, x) => A.keyTail - x.keyTail),
            E
          );
        }
        const c = o(r.primaryKey.keyPath, 0, r.primaryKey);
        i[':id'] = [c];
        for (const f of r.indexes) o(f.keyPath, 0, f);
        function l(f) {
          const h = f.query.index;
          return h.isVirtual
            ? {
                ...f,
                query: {
                  index: h,
                  range:
                    ((m = f.query.range),
                    (g = h.keyTail),
                    {
                      type: m.type === 1 ? 2 : m.type,
                      lower: yr(m.lower, m.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g),
                      lowerOpen: !0,
                      upper: yr(m.upper, m.upperOpen ? e.MIN_KEY : e.MAX_KEY, g),
                      upperOpen: !0,
                    }),
                },
              }
            : f;
          var m, g;
        }
        return {
          ...n,
          schema: {
            ...r,
            primaryKey: c,
            indexes: s,
            getIndexByKeyPath: function (f) {
              const h = i[Fn(f)];
              return h && h[0];
            },
          },
          count: (f) => n.count(l(f)),
          query: (f) => n.query(l(f)),
          openCursor(f) {
            const { keyTail: h, isVirtual: m, keyLength: g } = f.query.index;
            return m
              ? n.openCursor(l(f)).then(
                  (w) =>
                    w &&
                    (function (b) {
                      return Object.create(b, {
                        continue: {
                          value: function (E) {
                            E != null
                              ? b.continue(yr(E, f.reverse ? e.MAX_KEY : e.MIN_KEY, h))
                              : f.unique
                              ? b.continue(
                                  b.key.slice(0, g).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, h),
                                )
                              : b.continue();
                          },
                        },
                        continuePrimaryKey: {
                          value(E, A) {
                            b.continuePrimaryKey(yr(E, e.MAX_KEY, h), A);
                          },
                        },
                        primaryKey: { get: () => b.primaryKey },
                        key: {
                          get() {
                            const E = b.key;
                            return g === 1 ? E[0] : E.slice(0, g);
                          },
                        },
                        value: { get: () => b.value },
                      });
                    })(w),
                )
              : n.openCursor(f);
          },
        };
      },
    };
  },
};
function Qi(e, t, n, r) {
  return (
    (n = n || {}),
    (r = r || ''),
    Re(e).forEach((i) => {
      if (ct(t, i)) {
        var s = e[i],
          o = t[i];
        if (typeof s == 'object' && typeof o == 'object' && s && o) {
          const c = li(s);
          c !== li(o)
            ? (n[r + i] = t[i])
            : c === 'Object'
            ? Qi(s, o, n, r + i + '.')
            : s !== o && (n[r + i] = t[i]);
        } else s !== o && (n[r + i] = t[i]);
      } else n[r + i] = void 0;
    }),
    Re(t).forEach((i) => {
      ct(e, i) || (n[r + i] = t[i]);
    }),
    n
  );
}
const qc = {
  stack: 'dbcore',
  name: 'HooksMiddleware',
  level: 2,
  create: (e) => ({
    ...e,
    table(t) {
      const n = e.table(t),
        { primaryKey: r } = n.schema;
      return {
        ...n,
        mutate(s) {
          const o = Q.trans,
            { deleting: c, creating: l, updating: a } = o.table(t).hook;
          switch (s.type) {
            case 'add':
              if (l.fire === xe) break;
              return o._promise('readwrite', () => f(s), !0);
            case 'put':
              if (l.fire === xe && a.fire === xe) break;
              return o._promise('readwrite', () => f(s), !0);
            case 'delete':
              if (c.fire === xe) break;
              return o._promise('readwrite', () => f(s), !0);
            case 'deleteRange':
              if (c.fire === xe) break;
              return o._promise(
                'readwrite',
                () =>
                  (function (m) {
                    return h(m.trans, m.range, 1e4);
                  })(s),
                !0,
              );
          }
          return n.mutate(s);
          function f(m) {
            const g = Q.trans,
              w =
                m.keys ||
                (function (b, S) {
                  return S.type === 'delete' ? S.keys : S.keys || S.values.map(b.extractKey);
                })(r, m);
            if (!w) throw new Error('Keys missing');
            return (
              (m = m.type === 'add' || m.type === 'put' ? { ...m, keys: w } : { ...m }).type !==
                'delete' && (m.values = [...m.values]),
              m.keys && (m.keys = [...m.keys]),
              (function (b, S, E) {
                return S.type === 'add'
                  ? Promise.resolve([])
                  : b.getMany({ trans: S.trans, keys: E, cache: 'immutable' });
              })(n, m, w).then((b) => {
                const S = w.map((E, A) => {
                  const x = b[A],
                    B = { onerror: null, onsuccess: null };
                  if (m.type === 'delete') c.fire.call(B, E, x, g);
                  else if (m.type === 'add' || x === void 0) {
                    const k = l.fire.call(B, E, m.values[A], g);
                    E == null &&
                      k != null &&
                      ((E = k), (m.keys[A] = E), r.outbound || bt(m.values[A], r.keyPath, E));
                  } else {
                    const k = Qi(x, m.values[A]),
                      I = a.fire.call(B, k, E, x, g);
                    if (I) {
                      const C = m.values[A];
                      Object.keys(I).forEach(($) => {
                        ct(C, $) ? (C[$] = I[$]) : bt(C, $, I[$]);
                      });
                    }
                  }
                  return B;
                });
                return n
                  .mutate(m)
                  .then(({ failures: E, results: A, numFailures: x, lastResult: B }) => {
                    for (let k = 0; k < w.length; ++k) {
                      const I = A ? A[k] : w[k],
                        C = S[k];
                      I == null
                        ? C.onerror && C.onerror(E[k])
                        : C.onsuccess && C.onsuccess(m.type === 'put' && b[k] ? m.values[k] : I);
                    }
                    return { failures: E, results: A, numFailures: x, lastResult: B };
                  })
                  .catch((E) => (S.forEach((A) => A.onerror && A.onerror(E)), Promise.reject(E)));
              })
            );
          }
          function h(m, g, w) {
            return n
              .query({ trans: m, values: !1, query: { index: r, range: g }, limit: w })
              .then(({ result: b }) =>
                f({ type: 'delete', keys: b, trans: m }).then((S) =>
                  S.numFailures > 0
                    ? Promise.reject(S.failures[0])
                    : b.length < w
                    ? { failures: [], numFailures: 0, lastResult: void 0 }
                    : h(m, { ...g, lower: b[b.length - 1], lowerOpen: !0 }, w),
                ),
              );
          }
        },
      };
    },
  }),
};
function jo(e, t, n) {
  try {
    if (!t || t.keys.length < e.length) return null;
    const r = [];
    for (let i = 0, s = 0; i < t.keys.length && s < e.length; ++i)
      Ge(t.keys[i], e[s]) === 0 && (r.push(n ? er(t.values[i]) : t.values[i]), ++s);
    return r.length === e.length ? r : null;
  } catch {
    return null;
  }
}
const Wc = {
  stack: 'dbcore',
  level: -1,
  create: (e) => ({
    table: (t) => {
      const n = e.table(t);
      return {
        ...n,
        getMany: (r) => {
          if (!r.cache) return n.getMany(r);
          const i = jo(r.keys, r.trans._cache, r.cache === 'clone');
          return i
            ? W.resolve(i)
            : n
                .getMany(r)
                .then(
                  (s) => (
                    (r.trans._cache = { keys: r.keys, values: r.cache === 'clone' ? er(s) : s }), s
                  ),
                );
        },
        mutate: (r) => (r.type !== 'add' && (r.trans._cache = null), n.mutate(r)),
      };
    },
  }),
};
function Zi(e) {
  return !('from' in e);
}
const Tt = function (e, t) {
  if (!this) {
    const n = new Tt();
    return e && 'd' in e && Xe(n, e), n;
  }
  Xe(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
};
function Gn(e, t, n) {
  const r = Ge(t, n);
  if (isNaN(r)) return;
  if (r > 0) throw RangeError();
  if (Zi(e)) return Xe(e, { from: t, to: n, d: 1 });
  const i = e.l,
    s = e.r;
  if (Ge(n, e.from) < 0)
    return i ? Gn(i, t, n) : (e.l = { from: t, to: n, d: 1, l: null, r: null }), Ps(e);
  if (Ge(t, e.to) > 0)
    return s ? Gn(s, t, n) : (e.r = { from: t, to: n, d: 1, l: null, r: null }), Ps(e);
  Ge(t, e.from) < 0 && ((e.from = t), (e.l = null), (e.d = s ? s.d + 1 : 1)),
    Ge(n, e.to) > 0 && ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1));
  const o = !e.r;
  i && !e.l && $r(e, i), s && o && $r(e, s);
}
function $r(e, t) {
  Zi(t) ||
    (function n(r, { from: i, to: s, l: o, r: c }) {
      Gn(r, i, s), o && n(r, o), c && n(r, c);
    })(e, t);
}
function Vc(e, t) {
  const n = Ni(t);
  let r = n.next();
  if (r.done) return !1;
  let i = r.value;
  const s = Ni(e);
  let o = s.next(i.from),
    c = o.value;
  for (; !r.done && !o.done; ) {
    if (Ge(c.from, i.to) <= 0 && Ge(c.to, i.from) >= 0) return !0;
    Ge(i.from, c.from) < 0 ? (i = (r = n.next(c.from)).value) : (c = (o = s.next(i.from)).value);
  }
  return !1;
}
function Ni(e) {
  let t = Zi(e) ? null : { s: 0, n: e };
  return {
    next(n) {
      const r = arguments.length > 0;
      for (; t; )
        switch (t.s) {
          case 0:
            if (((t.s = 1), r))
              for (; t.n.l && Ge(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
            else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
          case 1:
            if (((t.s = 2), !r || Ge(n, t.n.to) <= 0)) return { value: t.n, done: !1 };
          case 2:
            if (t.n.r) {
              (t.s = 3), (t = { up: t, n: t.n.r, s: 0 });
              continue;
            }
          case 3:
            t = t.up;
        }
      return { done: !0 };
    },
  };
}
function Ps(e) {
  var t, n;
  const r =
      (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) -
      (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0),
    i = r > 1 ? 'r' : r < -1 ? 'l' : '';
  if (i) {
    const s = i === 'r' ? 'l' : 'r',
      o = { ...e },
      c = e[i];
    (e.from = c.from), (e.to = c.to), (e[i] = c[i]), (o[i] = c[s]), (e[s] = o), (o.d = ks(o));
  }
  e.d = ks(e);
}
function ks({ r: e, l: t }) {
  return (e ? (t ? Math.max(e.d, t.d) : e.d) : t ? t.d : 0) + 1;
}
xn(Tt.prototype, {
  add(e) {
    return $r(this, e), this;
  },
  addKey(e) {
    return Gn(this, e, e), this;
  },
  addKeys(e) {
    return e.forEach((t) => Gn(this, t, t)), this;
  },
  [fi]() {
    return Ni(this);
  },
});
const Yc = {
  stack: 'dbcore',
  level: 0,
  create: (e) => {
    const t = e.schema.name,
      n = new Tt(e.MIN_KEY, e.MAX_KEY);
    return {
      ...e,
      table: (r) => {
        const i = e.table(r),
          { schema: s } = i,
          { primaryKey: o } = s,
          { extractKey: c, outbound: l } = o,
          a = {
            ...i,
            mutate: (m) => {
              const g = m.trans,
                w = g.mutatedParts || (g.mutatedParts = {}),
                b = (I) => {
                  const C = `idb://${t}/${r}/${I}`;
                  return w[C] || (w[C] = new Tt());
                },
                S = b(''),
                E = b(':dels'),
                { type: A } = m;
              let [x, B] =
                m.type === 'deleteRange'
                  ? [m.range]
                  : m.type === 'delete'
                  ? [m.keys]
                  : m.values.length < 50
                  ? [[], m.values]
                  : [];
              const k = m.trans._cache;
              return i.mutate(m).then((I) => {
                if (ze(x)) {
                  A !== 'delete' && (x = I.results), S.addKeys(x);
                  const C = jo(x, k);
                  C || A === 'add' || E.addKeys(x),
                    (C || B) &&
                      (function ($, v, d, P) {
                        function T(Y) {
                          const q = $(Y.name || '');
                          function se(ie) {
                            return ie != null ? Y.extractKey(ie) : null;
                          }
                          const re = (ie) =>
                            Y.multiEntry && ze(ie)
                              ? ie.forEach((oe) => q.addKey(oe))
                              : q.addKey(ie);
                          (d || P).forEach((ie, oe) => {
                            const ke = d && se(d[oe]),
                              Ce = P && se(P[oe]);
                            Ge(ke, Ce) !== 0 && (ke != null && re(ke), Ce != null && re(Ce));
                          });
                        }
                        v.indexes.forEach(T);
                      })(b, s, C, B);
                } else if (x) {
                  const C = { from: x.lower, to: x.upper };
                  E.add(C), S.add(C);
                } else S.add(n), E.add(n), s.indexes.forEach((C) => b(C.name).add(n));
                return I;
              });
            },
          },
          f = ({ query: { index: m, range: g } }) => {
            var w, b;
            return [
              m,
              new Tt(
                (w = g.lower) !== null && w !== void 0 ? w : e.MIN_KEY,
                (b = g.upper) !== null && b !== void 0 ? b : e.MAX_KEY,
              ),
            ];
          },
          h = {
            get: (m) => [o, new Tt(m.key)],
            getMany: (m) => [o, new Tt().addKeys(m.keys)],
            count: f,
            query: f,
            openCursor: f,
          };
        return (
          Re(h).forEach((m) => {
            a[m] = function (g) {
              const { subscr: w } = Q;
              if (w) {
                const b = (B) => {
                    const k = `idb://${t}/${r}/${B}`;
                    return w[k] || (w[k] = new Tt());
                  },
                  S = b(''),
                  E = b(':dels'),
                  [A, x] = h[m](g);
                if ((b(A.name || '').add(x), !A.isPrimaryKey)) {
                  if (m !== 'count') {
                    const B = m === 'query' && l && g.values && i.query({ ...g, values: !1 });
                    return i[m].apply(this, arguments).then((k) => {
                      if (m === 'query') {
                        if (l && g.values) return B.then(({ result: C }) => (S.addKeys(C), k));
                        const I = g.values ? k.result.map(c) : k.result;
                        g.values ? S.addKeys(I) : E.addKeys(I);
                      } else if (m === 'openCursor') {
                        const I = k,
                          C = g.values;
                        return (
                          I &&
                          Object.create(I, {
                            key: { get: () => (E.addKey(I.primaryKey), I.key) },
                            primaryKey: {
                              get() {
                                const $ = I.primaryKey;
                                return E.addKey($), $;
                              },
                            },
                            value: { get: () => (C && S.addKey(I.primaryKey), I.value) },
                          })
                        );
                      }
                      return k;
                    });
                  }
                  E.add(n);
                }
              }
              return i[m].apply(this, arguments);
            };
          }),
          a
        );
      },
    };
  },
};
class Ne {
  constructor(t, n) {
    (this._middlewares = {}), (this.verno = 0);
    const r = Ne.dependencies;
    (this._options = n =
      {
        addons: Ne.addons,
        autoOpen: !0,
        indexedDB: r.indexedDB,
        IDBKeyRange: r.IDBKeyRange,
        ...n,
      }),
      (this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange });
    const { addons: i } = n;
    (this._dbSchema = {}),
      (this._versions = []),
      (this._storeNames = []),
      (this._allTables = {}),
      (this.idbdb = null),
      (this._novip = this);
    const s = {
      dbOpenError: null,
      isBeingOpened: !1,
      onReadyBeingFired: null,
      openComplete: !1,
      dbReadyResolve: xe,
      dbReadyPromise: null,
      cancelOpen: xe,
      openCanceller: null,
      autoSchema: !0,
      PR1398_maxLoop: 3,
    };
    var o;
    (s.dbReadyPromise = new W((c) => {
      s.dbReadyResolve = c;
    })),
      (s.openCanceller = new W((c, l) => {
        s.cancelOpen = l;
      })),
      (this._state = s),
      (this.name = t),
      (this.on = Kn(this, 'populate', 'blocked', 'versionchange', 'close', { ready: [Yi, xe] })),
      (this.on.ready.subscribe = ao(this.on.ready.subscribe, (c) => (l, a) => {
        Ne.vip(() => {
          const f = this._state;
          if (f.openComplete) f.dbOpenError || W.resolve().then(l), a && c(l);
          else if (f.onReadyBeingFired) f.onReadyBeingFired.push(l), a && c(l);
          else {
            c(l);
            const h = this;
            a ||
              c(function m() {
                h.on.ready.unsubscribe(l), h.on.ready.unsubscribe(m);
              });
          }
        });
      })),
      (this.Collection =
        ((o = this),
        kn(kc.prototype, function (c, l) {
          this.db = o;
          let a = To,
            f = null;
          if (l)
            try {
              a = l();
            } catch (w) {
              f = w;
            }
          const h = c._ctx,
            m = h.table,
            g = m.hook.reading.fire;
          this._ctx = {
            table: m,
            index: h.index,
            isPrimKey: !h.index || (m.schema.primKey.keyPath && h.index === m.schema.primKey.name),
            range: a,
            keysOnly: !1,
            dir: 'next',
            unique: '',
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: !0,
            isMatch: null,
            offset: 0,
            limit: 1 / 0,
            error: f,
            or: h.or,
            valueMapper: g !== Yn ? g : null,
          };
        }))),
      (this.Table = (function (c) {
        return kn(Pc.prototype, function (l, a, f) {
          (this.db = c),
            (this._tx = f),
            (this.name = l),
            (this.schema = a),
            (this.hook = c._allTables[l]
              ? c._allTables[l].hook
              : Kn(null, {
                  creating: [mc, xe],
                  reading: [yc, Yn],
                  updating: [vc, xe],
                  deleting: [gc, xe],
                }));
        });
      })(this)),
      (this.Transaction = (function (c) {
        return kn(Bc.prototype, function (l, a, f, h, m) {
          (this.db = c),
            (this.mode = l),
            (this.storeNames = a),
            (this.schema = f),
            (this.chromeTransactionDurability = h),
            (this.idbtrans = null),
            (this.on = Kn(this, 'complete', 'error', 'abort')),
            (this.parent = m || null),
            (this.active = !0),
            (this._reculock = 0),
            (this._blockedFuncs = []),
            (this._resolve = null),
            (this._reject = null),
            (this._waitingFor = null),
            (this._waitingQueue = null),
            (this._spinCount = 0),
            (this._completion = new W((g, w) => {
              (this._resolve = g), (this._reject = w);
            })),
            this._completion.then(
              () => {
                (this.active = !1), this.on.complete.fire();
              },
              (g) => {
                var w = this.active;
                return (
                  (this.active = !1),
                  this.on.error.fire(g),
                  this.parent
                    ? this.parent._reject(g)
                    : w && this.idbtrans && this.idbtrans.abort(),
                  Le(g)
                );
              },
            );
        });
      })(this)),
      (this.Version = (function (c) {
        return kn(Lc.prototype, function (l) {
          (this.db = c),
            (this._cfg = {
              version: l,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null,
            });
        });
      })(this)),
      (this.WhereClause = (function (c) {
        return kn(ko.prototype, function (l, a, f) {
          (this.db = c), (this._ctx = { table: l, index: a === ':id' ? null : a, or: f });
          const h = c._deps.indexedDB;
          if (!h) throw new ne.MissingAPI();
          (this._cmp = this._ascending = h.cmp.bind(h)),
            (this._descending = (m, g) => h.cmp(g, m)),
            (this._max = (m, g) => (h.cmp(m, g) > 0 ? m : g)),
            (this._min = (m, g) => (h.cmp(m, g) < 0 ? m : g)),
            (this._IDBKeyRange = c._deps.IDBKeyRange);
        });
      })(this)),
      this.on('versionchange', (c) => {
        c.newVersion > 0
          ? console.warn(
              `Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`,
            )
          : console.warn(
              `Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`,
            ),
          this.close();
      }),
      this.on('blocked', (c) => {
        !c.newVersion || c.newVersion < c.oldVersion
          ? console.warn(`Dexie.delete('${this.name}') was blocked`)
          : console.warn(
              `Upgrade '${this.name}' blocked by other connection holding version ${
                c.oldVersion / 10
              }`,
            );
      }),
      (this._maxKey = Hn(n.IDBKeyRange)),
      (this._createTransaction = (c, l, a, f) =>
        new this.Transaction(c, l, a, this._options.chromeTransactionDurability, f)),
      (this._fireOnBlocked = (c) => {
        this.on('blocked').fire(c),
          Ln.filter((l) => l.name === this.name && l !== this && !l._state.vcFired).map((l) =>
            l.on('versionchange').fire(c),
          );
      }),
      this.use(Mc),
      this.use(qc),
      this.use(Yc),
      this.use(Wc),
      (this.vip = Object.create(this, { _vip: { value: !0 } })),
      i.forEach((c) => c(this));
  }
  version(t) {
    if (isNaN(t) || t < 0.1) throw new ne.Type('Given version is not a positive number');
    if (((t = Math.round(10 * t) / 10), this.idbdb || this._state.isBeingOpened))
      throw new ne.Schema('Cannot add version when database is open');
    this.verno = Math.max(this.verno, t);
    const n = this._versions;
    var r = n.filter((i) => i._cfg.version === t)[0];
    return (
      r ||
      ((r = new this.Version(t)),
      n.push(r),
      n.sort(Rc),
      r.stores({}),
      (this._state.autoSchema = !1),
      r)
    );
  }
  _whenReady(t) {
    return this.idbdb && (this._state.openComplete || Q.letThrough || this._vip)
      ? t()
      : new W((n, r) => {
          if (this._state.openComplete) return r(new ne.DatabaseClosed(this._state.dbOpenError));
          if (!this._state.isBeingOpened) {
            if (!this._options.autoOpen) return void r(new ne.DatabaseClosed());
            this.open().catch(xe);
          }
          this._state.dbReadyPromise.then(n, r);
        }).then(t);
  }
  use({ stack: t, create: n, level: r, name: i }) {
    i && this.unuse({ stack: t, name: i });
    const s = this._middlewares[t] || (this._middlewares[t] = []);
    return (
      s.push({ stack: t, create: n, level: r ?? 10, name: i }),
      s.sort((o, c) => o.level - c.level),
      this
    );
  }
  unuse({ stack: t, name: n, create: r }) {
    return (
      t &&
        this._middlewares[t] &&
        (this._middlewares[t] = this._middlewares[t].filter((i) =>
          r ? i.create !== r : !!n && i.name !== n,
        )),
      this
    );
  }
  open() {
    return Fc(this);
  }
  _close() {
    const t = this._state,
      n = Ln.indexOf(this);
    if ((n >= 0 && Ln.splice(n, 1), this.idbdb)) {
      try {
        this.idbdb.close();
      } catch {}
      this._novip.idbdb = null;
    }
    (t.dbReadyPromise = new W((r) => {
      t.dbReadyResolve = r;
    })),
      (t.openCanceller = new W((r, i) => {
        t.cancelOpen = i;
      }));
  }
  close() {
    this._close();
    const t = this._state;
    (this._options.autoOpen = !1),
      (t.dbOpenError = new ne.DatabaseClosed()),
      t.isBeingOpened && t.cancelOpen(t.dbOpenError);
  }
  delete() {
    const t = arguments.length > 0,
      n = this._state;
    return new W((r, i) => {
      const s = () => {
        this.close();
        var o = this._deps.indexedDB.deleteDatabase(this.name);
        (o.onsuccess = Pe(() => {
          (function ({ indexedDB: c, IDBKeyRange: l }, a) {
            !Xi(c) && a !== '__dbnames' && Gi(c, l).delete(a).catch(xe);
          })(this._deps, this.name),
            r();
        })),
          (o.onerror = _t(i)),
          (o.onblocked = this._fireOnBlocked);
      };
      if (t) throw new ne.InvalidArgument('Arguments not allowed in db.delete()');
      n.isBeingOpened ? n.dbReadyPromise.then(s) : s();
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const t = this._state.dbOpenError;
    return t && t.name === 'DatabaseClosed';
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return Re(this._allTables).map((t) => this._allTables[t]);
  }
  transaction() {
    const t = Uc.apply(this, arguments);
    return this._transaction.apply(this, t);
  }
  _transaction(t, n, r) {
    let i = Q.trans;
    (i && i.db === this && t.indexOf('!') === -1) || (i = null);
    const s = t.indexOf('?') !== -1;
    let o, c;
    t = t.replace('!', '').replace('?', '');
    try {
      if (
        ((c = n.map((a) => {
          var f = a instanceof this.Table ? a.name : a;
          if (typeof f != 'string')
            throw new TypeError(
              'Invalid table argument to Dexie.transaction(). Only Table or String are allowed',
            );
          return f;
        })),
        t == 'r' || t === 'readonly')
      )
        o = 'readonly';
      else {
        if (t != 'rw' && t != 'readwrite')
          throw new ne.InvalidArgument('Invalid transaction mode: ' + t);
        o = 'readwrite';
      }
      if (i) {
        if (i.mode === 'readonly' && o === 'readwrite') {
          if (!s)
            throw new ne.SubTransaction(
              'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY',
            );
          i = null;
        }
        i &&
          c.forEach((a) => {
            if (i && i.storeNames.indexOf(a) === -1) {
              if (!s)
                throw new ne.SubTransaction('Table ' + a + ' not included in parent transaction.');
              i = null;
            }
          }),
          s && i && !i.active && (i = null);
      }
    } catch (a) {
      return i
        ? i._promise(null, (f, h) => {
            h(a);
          })
        : Le(a);
    }
    const l = Bo.bind(null, this, o, c, i, r);
    return i
      ? i._promise(o, l, 'lock')
      : Q.trans
      ? On(Q.transless, () => this._whenReady(l))
      : this._whenReady(l);
  }
  table(t) {
    if (!ct(this._allTables, t)) throw new ne.InvalidTable(`Table ${t} does not exist`);
    return this._allTables[t];
  }
}
const zc = typeof Symbol < 'u' && 'observable' in Symbol ? Symbol.observable : '@@observable';
class Jc {
  constructor(t) {
    this._subscribe = t;
  }
  subscribe(t, n, r) {
    return this._subscribe(t && typeof t != 'function' ? t : { next: t, error: n, complete: r });
  }
  [zc]() {
    return this;
  }
}
function Do(e, t) {
  return (
    Re(t).forEach((n) => {
      $r(e[n] || (e[n] = new Tt()), t[n]);
    }),
    e
  );
}
function Hc(e) {
  return new Jc((t) => {
    const n = qi(e);
    let r = !1,
      i = {},
      s = {};
    const o = {
      get closed() {
        return r;
      },
      unsubscribe: () => {
        (r = !0), qt.storagemutated.unsubscribe(f);
      },
    };
    t.start && t.start(o);
    let c = !1,
      l = !1;
    function a() {
      return Re(s).some((m) => i[m] && Vc(i[m], s[m]));
    }
    const f = (m) => {
        Do(i, m), a() && h();
      },
      h = () => {
        if (c || r) return;
        i = {};
        const m = {},
          g = (function (w) {
            n && An();
            const b = () => Ut(e, { subscr: w, trans: null }),
              S = Q.trans ? On(Q.transless, b) : b();
            return n && S.then(It, It), S;
          })(m);
        l || (qt('storagemutated', f), (l = !0)),
          (c = !0),
          Promise.resolve(g).then(
            (w) => {
              (c = !1), r || (a() ? h() : ((i = {}), (s = m), t.next && t.next(w)));
            },
            (w) => {
              (c = !1), t.error && t.error(w), o.unsubscribe();
            },
          );
      };
    return h(), o;
  });
}
let Ii;
try {
  Ii = {
    indexedDB: Te.indexedDB || Te.mozIndexedDB || Te.webkitIndexedDB || Te.msIndexedDB,
    IDBKeyRange: Te.IDBKeyRange || Te.webkitIDBKeyRange,
  };
} catch {
  Ii = { indexedDB: null, IDBKeyRange: null };
}
const Jt = Ne;
function Er(e) {
  let t = kt;
  try {
    (kt = !0), qt.storagemutated.fire(e);
  } finally {
    kt = t;
  }
}
xn(Jt, {
  ...vr,
  delete: (e) => new Jt(e, { addons: [] }).delete(),
  exists: (e) =>
    new Jt(e, { addons: [] })
      .open()
      .then((t) => (t.close(), !0))
      .catch('NoSuchDatabaseError', () => !1),
  getDatabaseNames(e) {
    try {
      return (function ({ indexedDB: t, IDBKeyRange: n }) {
        return Xi(t)
          ? Promise.resolve(t.databases()).then((r) =>
              r.map((i) => i.name).filter((i) => i !== '__dbnames'),
            )
          : Gi(t, n).toCollection().primaryKeys();
      })(Jt.dependencies).then(e);
    } catch {
      return Le(new ne.MissingAPI());
    }
  },
  defineClass: () =>
    function (e) {
      Xe(this, e);
    },
  ignoreTransaction: (e) => (Q.trans ? On(Q.transless, e) : e()),
  vip: ki,
  async: function (e) {
    return function () {
      try {
        var t = Ci(e.apply(this, arguments));
        return t && typeof t.then == 'function' ? t : W.resolve(t);
      } catch (n) {
        return Le(n);
      }
    };
  },
  spawn: function (e, t, n) {
    try {
      var r = Ci(e.apply(n, t || []));
      return r && typeof r.then == 'function' ? r : W.resolve(r);
    } catch (i) {
      return Le(i);
    }
  },
  currentTransaction: { get: () => Q.trans || null },
  waitFor: function (e, t) {
    const n = W.resolve(typeof e == 'function' ? Jt.ignoreTransaction(e) : e).timeout(t || 6e4);
    return Q.trans ? Q.trans.waitFor(n) : n;
  },
  Promise: W,
  debug: {
    get: () => xt,
    set: (e) => {
      po(e, e === 'dexie' ? () => !0 : Oo);
    },
  },
  derive: vn,
  extend: Xe,
  props: xn,
  override: ao,
  Events: Kn,
  on: qt,
  liveQuery: Hc,
  extendObservabilitySet: Do,
  getByKeyPath: Nt,
  setByKeyPath: bt,
  delByKeyPath: function (e, t) {
    typeof t == 'string'
      ? bt(e, t, void 0)
      : 'length' in t &&
        [].map.call(t, function (n) {
          bt(e, n, void 0);
        });
  },
  shallowClone: lo,
  deepClone: er,
  getObjectDiff: Qi,
  cmp: Ge,
  asap: co,
  minKey: -(1 / 0),
  addons: [],
  connections: Ln,
  errnames: Vi,
  dependencies: Ii,
  semVer: '3.2.3',
  version: '3.2.3'
    .split('.')
    .map((e) => parseInt(e))
    .reduce((e, t, n) => e + t / Math.pow(10, 2 * n)),
}),
  (Jt.maxKey = Hn(Jt.dependencies.IDBKeyRange)),
  typeof dispatchEvent < 'u' &&
    typeof addEventListener < 'u' &&
    (qt('storagemutated', (e) => {
      if (!kt) {
        let t;
        Wr
          ? ((t = document.createEvent('CustomEvent')),
            t.initCustomEvent('x-storagemutated-1', !0, !0, e))
          : (t = new CustomEvent('x-storagemutated-1', { detail: e })),
          (kt = !0),
          dispatchEvent(t),
          (kt = !1);
      }
    }),
    addEventListener('x-storagemutated-1', ({ detail: e }) => {
      kt || Er(e);
    }));
let kt = !1;
if (typeof BroadcastChannel < 'u') {
  const e = new BroadcastChannel('x-storagemutated-1');
  typeof e.unref == 'function' && e.unref(),
    qt('storagemutated', (t) => {
      kt || e.postMessage(t);
    }),
    (e.onmessage = (t) => {
      t.data && Er(t.data);
    });
} else if (typeof self < 'u' && typeof navigator < 'u') {
  qt('storagemutated', (t) => {
    try {
      kt ||
        (typeof localStorage < 'u' &&
          localStorage.setItem(
            'x-storagemutated-1',
            JSON.stringify({ trig: Math.random(), changedParts: t }),
          ),
        typeof self.clients == 'object' &&
          [...self.clients.matchAll({ includeUncontrolled: !0 })].forEach((n) =>
            n.postMessage({ type: 'x-storagemutated-1', changedParts: t }),
          ));
    } catch {}
  }),
    typeof addEventListener < 'u' &&
      addEventListener('storage', (t) => {
        if (t.key === 'x-storagemutated-1') {
          const n = JSON.parse(t.newValue);
          n && Er(n.changedParts);
        }
      });
  const e = self.document && navigator.serviceWorker;
  e &&
    e.addEventListener('message', function ({ data: t }) {
      t && t.type === 'x-storagemutated-1' && Er(t.changedParts);
    });
}
(W.rejectionMapper = function (e, t) {
  if (
    !e ||
    e instanceof bn ||
    e instanceof TypeError ||
    e instanceof SyntaxError ||
    !e.name ||
    !ws[e.name]
  )
    return e;
  var n = new ws[e.name](t || e.message, e);
  return (
    'stack' in e &&
      Ct(n, 'stack', {
        get: function () {
          return this.inner.stack;
        },
      }),
    n
  );
}),
  po(xt, Oo);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Wt(
  e,
  t,
  n,
  r,
) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function c(f) {
      try {
        a(r.next(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      try {
        a(r.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function a(f) {
      f.done ? s(f.value) : i(f.value).then(c, l);
    }
    a((r = r.apply(e, t || [])).next());
  });
}
function gt(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    s,
    o;
  return (
    (o = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function c(a) {
    return function (f) {
      return l([a, f]);
    };
  }
  function l(a) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; n; )
      try {
        if (
          ((r = 1),
          i &&
            (s =
              a[0] & 2 ? i.return : a[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) &&
            !(s = s.call(i, a[1])).done)
        )
          return s;
        switch (((i = 0), s && (a = [a[0] & 2, s.value]), a[0])) {
          case 0:
          case 1:
            s = a;
            break;
          case 4:
            return n.label++, { value: a[1], done: !1 };
          case 5:
            n.label++, (i = a[1]), (a = [0]);
            continue;
          case 7:
            (a = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((s = n.trys), !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!s || (a[1] > s[0] && a[1] < s[3]))) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < s[1]) {
              (n.label = s[1]), (s = a);
              break;
            }
            if (s && n.label < s[2]) {
              (n.label = s[2]), n.ops.push(a);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        a = t.call(e, n);
      } catch (f) {
        (a = [6, f]), (i = 0);
      } finally {
        r = s = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
function Gc(e) {
  var t = [e.schema.primKey].concat(e.schema.indexes);
  return t
    .map(function (n) {
      return n.src;
    })
    .join(',');
}
function Xc(e) {
  for (var t = {}, n = 0, r = e.tables; n < r.length; n++) {
    var i = r[n];
    t[i.name] = i.schema;
  }
  return t;
}
function Ro(e, t) {
  return new Promise(function (n, r) {
    var i = new FileReader();
    (i.onabort = function (s) {
      return r(new Error('file read aborted'));
    }),
      (i.onerror = function (s) {
        return r(s.target.error);
      }),
      (i.onload = function (s) {
        return n(s.target.result);
      }),
      t === 'binary' ? i.readAsArrayBuffer(e) : i.readAsText(e);
  });
}
function $o(e, t) {
  if (typeof FileReaderSync > 'u')
    throw new Error(
      'FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread.',
    );
  var n = new FileReaderSync(),
    r = t === 'binary' ? n.readAsArrayBuffer(e) : n.readAsText(e);
  return r;
}
var Bi =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function es(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var Vr = es(function (e, t) {
    (function (n, r) {
      e.exports = r();
    })(Bi, function () {
      function n(N) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (n = function (j) {
                return typeof j;
              })
            : (n = function (j) {
                return j &&
                  typeof Symbol == 'function' &&
                  j.constructor === Symbol &&
                  j !== Symbol.prototype
                  ? 'symbol'
                  : typeof j;
              }),
          n(N)
        );
      }
      function r(N, j, D, R, U, de, me) {
        try {
          var fe = N[de](me),
            G = fe.value;
        } catch (qe) {
          D(qe);
          return;
        }
        fe.done ? j(G) : Promise.resolve(G).then(R, U);
      }
      function i(N) {
        return function () {
          var j = this,
            D = arguments;
          return new Promise(function (R, U) {
            var de = N.apply(j, D);
            function me(G) {
              r(de, R, U, me, fe, 'next', G);
            }
            function fe(G) {
              r(de, R, U, me, fe, 'throw', G);
            }
            me(void 0);
          });
        };
      }
      function s(N, j) {
        if (!(N instanceof j)) throw new TypeError('Cannot call a class as a function');
      }
      function o(N, j) {
        for (var D = 0; D < j.length; D++) {
          var R = j[D];
          (R.enumerable = R.enumerable || !1),
            (R.configurable = !0),
            'value' in R && (R.writable = !0),
            Object.defineProperty(N, R.key, R);
        }
      }
      function c(N, j, D) {
        return j && o(N.prototype, j), D && o(N, D), N;
      }
      function l(N, j, D) {
        return (
          j in N
            ? Object.defineProperty(N, j, {
                value: D,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (N[j] = D),
          N
        );
      }
      function a(N, j) {
        var D = Object.keys(N);
        if (Object.getOwnPropertySymbols) {
          var R = Object.getOwnPropertySymbols(N);
          j &&
            (R = R.filter(function (U) {
              return Object.getOwnPropertyDescriptor(N, U).enumerable;
            })),
            D.push.apply(D, R);
        }
        return D;
      }
      function f(N) {
        for (var j = 1; j < arguments.length; j++) {
          var D = arguments[j] != null ? arguments[j] : {};
          j % 2
            ? a(Object(D), !0).forEach(function (R) {
                l(N, R, D[R]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(D))
            : a(Object(D)).forEach(function (R) {
                Object.defineProperty(N, R, Object.getOwnPropertyDescriptor(D, R));
              });
        }
        return N;
      }
      function h(N, j) {
        return w(N) || S(N, j) || A();
      }
      function m(N) {
        return g(N) || b(N) || E();
      }
      function g(N) {
        if (Array.isArray(N)) {
          for (var j = 0, D = new Array(N.length); j < N.length; j++) D[j] = N[j];
          return D;
        }
      }
      function w(N) {
        if (Array.isArray(N)) return N;
      }
      function b(N) {
        if (
          Symbol.iterator in Object(N) ||
          Object.prototype.toString.call(N) === '[object Arguments]'
        )
          return Array.from(N);
      }
      function S(N, j) {
        if (
          Symbol.iterator in Object(N) ||
          Object.prototype.toString.call(N) === '[object Arguments]'
        ) {
          var D = [],
            R = !0,
            U = !1,
            de = void 0;
          try {
            for (
              var me = N[Symbol.iterator](), fe;
              !(R = (fe = me.next()).done) && (D.push(fe.value), !(j && D.length === j));
              R = !0
            );
          } catch (G) {
            (U = !0), (de = G);
          } finally {
            try {
              !R && me.return != null && me.return();
            } finally {
              if (U) throw de;
            }
          }
          return D;
        }
      }
      function E() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function A() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
      var x = function N(j) {
        s(this, N), (this.p = new Promise(j));
      };
      (x.__typeson__type__ = 'TypesonPromise'),
        typeof Symbol < 'u' && (x.prototype[Symbol.toStringTag] = 'TypesonPromise'),
        (x.prototype.then = function (N, j) {
          var D = this;
          return new x(function (R, U) {
            D.p
              .then(function (de) {
                R(N ? N(de) : de);
              })
              .catch(function (de) {
                return j ? j(de) : Promise.reject(de);
              })
              .then(R, U);
          });
        }),
        (x.prototype.catch = function (N) {
          return this.then(null, N);
        }),
        (x.resolve = function (N) {
          return new x(function (j) {
            j(N);
          });
        }),
        (x.reject = function (N) {
          return new x(function (j, D) {
            D(N);
          });
        }),
        ['all', 'race'].forEach(function (N) {
          x[N] = function (j) {
            return new x(function (D, R) {
              Promise[N](
                j.map(function (U) {
                  return U && U.constructor && U.constructor.__typeson__type__ === 'TypesonPromise'
                    ? U.p
                    : U;
                }),
              ).then(D, R);
            });
          };
        });
      var B = {},
        k = B.toString,
        I = {}.hasOwnProperty,
        C = Object.getPrototypeOf,
        $ = I.toString;
      function v(N, j) {
        return q(N) && typeof N.then == 'function' && (!j || typeof N.catch == 'function');
      }
      function d(N) {
        return k.call(N).slice(8, -1);
      }
      function P(N, j) {
        if (!N || n(N) !== 'object') return !1;
        var D = C(N);
        if (!D) return j === null;
        var R = I.call(D, 'constructor') && D.constructor;
        return typeof R != 'function'
          ? j === null
          : j === R ||
              (j !== null && $.call(R) === $.call(j)) ||
              (typeof j == 'function' &&
                typeof R.__typeson__type__ == 'string' &&
                R.__typeson__type__ === j.__typeson__type__);
      }
      function T(N) {
        if (!N || d(N) !== 'Object') return !1;
        var j = C(N);
        return j ? P(N, Object) : !0;
      }
      function Y(N) {
        if (!N || d(N) !== 'Object') return !1;
        var j = C(N);
        return j ? P(N, Object) || Y(j) : !0;
      }
      function q(N) {
        return N && n(N) === 'object';
      }
      function se(N) {
        return N.replace(/~/g, '~0').replace(/\./g, '~1');
      }
      function re(N) {
        return N.replace(/~1/g, '.').replace(/~0/g, '~');
      }
      function ie(N, j) {
        if (j === '') return N;
        var D = j.indexOf('.');
        if (D > -1) {
          var R = N[re(j.slice(0, D))];
          return R === void 0 ? void 0 : ie(R, j.slice(D + 1));
        }
        return N[re(j)];
      }
      function oe(N, j, D) {
        if (j === '') return D;
        var R = j.indexOf('.');
        if (R > -1) {
          var U = N[re(j.slice(0, R))];
          return oe(U, j.slice(R + 1), D);
        }
        return (N[re(j)] = D), N;
      }
      function ke(N) {
        return N === null ? 'null' : Array.isArray(N) ? 'array' : n(N);
      }
      var Ce = Object.keys,
        $e = Array.isArray,
        Ue = {}.hasOwnProperty,
        et = ['type', 'replaced', 'iterateIn', 'iterateUnsetNumeric'];
      function H(N, j) {
        if (N.keypath === '') return -1;
        var D = N.keypath.match(/\./g) || 0,
          R = j.keypath.match(/\./g) || 0;
        return (
          D && (D = D.length),
          R && (R = R.length),
          D > R ? -1 : D < R ? 1 : N.keypath < j.keypath ? -1 : N.keypath > j.keypath
        );
      }
      var be = (function () {
          function N(j) {
            s(this, N),
              (this.options = j),
              (this.plainObjectReplacers = []),
              (this.nonplainObjectReplacers = []),
              (this.revivers = {}),
              (this.types = {});
          }
          return (
            c(N, [
              {
                key: 'stringify',
                value: function (D, R, U, de) {
                  de = f({}, this.options, {}, de, { stringification: !0 });
                  var me = this.encapsulate(D, null, de);
                  return $e(me)
                    ? JSON.stringify(me[0], R, U)
                    : me.then(function (fe) {
                        return JSON.stringify(fe, R, U);
                      });
                },
              },
              {
                key: 'stringifySync',
                value: function (D, R, U, de) {
                  return this.stringify(D, R, U, f({ throwOnBadSyncType: !0 }, de, { sync: !0 }));
                },
              },
              {
                key: 'stringifyAsync',
                value: function (D, R, U, de) {
                  return this.stringify(D, R, U, f({ throwOnBadSyncType: !0 }, de, { sync: !1 }));
                },
              },
              {
                key: 'parse',
                value: function (D, R, U) {
                  return (
                    (U = f({}, this.options, {}, U, { parse: !0 })),
                    this.revive(JSON.parse(D, R), U)
                  );
                },
              },
              {
                key: 'parseSync',
                value: function (D, R, U) {
                  return this.parse(D, R, f({ throwOnBadSyncType: !0 }, U, { sync: !0 }));
                },
              },
              {
                key: 'parseAsync',
                value: function (D, R, U) {
                  return this.parse(D, R, f({ throwOnBadSyncType: !0 }, U, { sync: !1 }));
                },
              },
              {
                key: 'specialTypeNames',
                value: function (D, R) {
                  var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  return (U.returnTypeNames = !0), this.encapsulate(D, R, U);
                },
              },
              {
                key: 'rootTypeName',
                value: function (D, R) {
                  var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  return (U.iterateNone = !0), this.encapsulate(D, R, U);
                },
              },
              {
                key: 'encapsulate',
                value: function (D, R, U) {
                  U = f({ sync: !0 }, this.options, {}, U);
                  var de = U,
                    me = de.sync,
                    fe = this,
                    G = {},
                    qe = [],
                    Qe = [],
                    tt = [],
                    dt = 'cyclic' in U ? U.cyclic : !0,
                    ht = U,
                    Et = ht.encapsulateObserver,
                    nt = _e('', D, dt, R || {}, tt);
                  function pt(z) {
                    var y = Object.values(G);
                    if (U.iterateNone) return y.length ? y[0] : N.getJSONType(z);
                    if (y.length) {
                      if (U.returnTypeNames) return m(new Set(y));
                      !z || !T(z) || Ue.call(z, '$types')
                        ? (z = { $: z, $types: { $: G } })
                        : (z.$types = G);
                    } else q(z) && Ue.call(z, '$types') && (z = { $: z, $types: !0 });
                    return U.returnTypeNames ? !1 : z;
                  }
                  function Ie(z, y) {
                    return we.apply(this, arguments);
                  }
                  function we() {
                    return (
                      (we = i(
                        regeneratorRuntime.mark(function z(y, u) {
                          var p;
                          return regeneratorRuntime.wrap(function (O) {
                            for (;;)
                              switch ((O.prev = O.next)) {
                                case 0:
                                  return (
                                    (O.next = 2),
                                    Promise.all(
                                      u.map(function (L) {
                                        return L[1].p;
                                      }),
                                    )
                                  );
                                case 2:
                                  return (
                                    (p = O.sent),
                                    (O.next = 5),
                                    Promise.all(
                                      p.map(
                                        (function () {
                                          var L = i(
                                            regeneratorRuntime.mark(function F(J) {
                                              var M,
                                                ee,
                                                ce,
                                                ue,
                                                ve,
                                                pe,
                                                he,
                                                Ee,
                                                Ae,
                                                ae,
                                                We,
                                                V,
                                                K,
                                                Z;
                                              return regeneratorRuntime.wrap(function (te) {
                                                for (;;)
                                                  switch ((te.prev = te.next)) {
                                                    case 0:
                                                      if (
                                                        ((M = []),
                                                        (ee = u.splice(0, 1)),
                                                        (ce = h(ee, 1)),
                                                        (ue = ce[0]),
                                                        (ve = h(ue, 7)),
                                                        (pe = ve[0]),
                                                        (he = ve[2]),
                                                        (Ee = ve[3]),
                                                        (Ae = ve[4]),
                                                        (ae = ve[5]),
                                                        (We = ve[6]),
                                                        (V = _e(pe, J, he, Ee, M, !0, We)),
                                                        (K = P(V, x)),
                                                        !(pe && K))
                                                      ) {
                                                        te.next = 11;
                                                        break;
                                                      }
                                                      return (te.next = 8), V.p;
                                                    case 8:
                                                      return (
                                                        (Z = te.sent),
                                                        (Ae[ae] = Z),
                                                        te.abrupt('return', Ie(y, M))
                                                      );
                                                    case 11:
                                                      return (
                                                        pe ? (Ae[ae] = V) : K ? (y = V.p) : (y = V),
                                                        te.abrupt('return', Ie(y, M))
                                                      );
                                                    case 13:
                                                    case 'end':
                                                      return te.stop();
                                                  }
                                              }, F);
                                            }),
                                          );
                                          return function (F) {
                                            return L.apply(this, arguments);
                                          };
                                        })(),
                                      ),
                                    )
                                  );
                                case 5:
                                  return O.abrupt('return', y);
                                case 6:
                                case 'end':
                                  return O.stop();
                              }
                          }, z);
                        }),
                      )),
                      we.apply(this, arguments)
                    );
                  }
                  function ge(z, y, u) {
                    Object.assign(z, y);
                    var p = et.map(function (_) {
                      var O = z[_];
                      return delete z[_], O;
                    });
                    u(),
                      et.forEach(function (_, O) {
                        z[_] = p[O];
                      });
                  }
                  function _e(z, y, u, p, _, O, L) {
                    var F,
                      J = {},
                      M = n(y),
                      ee = Et
                        ? function (K) {
                            var Z = L || p.type || N.getJSONType(y);
                            Et(
                              Object.assign(
                                K || J,
                                {
                                  keypath: z,
                                  value: y,
                                  cyclic: u,
                                  stateObj: p,
                                  promisesData: _,
                                  resolvingTypesonPromise: O,
                                  awaitingTypesonPromise: P(y, x),
                                },
                                { type: Z },
                              ),
                            );
                          }
                        : null;
                    if (['string', 'boolean', 'number', 'undefined'].includes(M))
                      return (
                        y === void 0 ||
                        (M === 'number' && (isNaN(y) || y === -1 / 0 || y === 1 / 0))
                          ? (p.replaced ? (F = y) : (F = Be(z, y, p, _, !1, O, ee)),
                            F !== y && (J = { replaced: F }))
                          : (F = y),
                        ee && ee(),
                        F
                      );
                    if (y === null) return ee && ee(), y;
                    if (u && !p.iterateIn && !p.iterateUnsetNumeric && y && n(y) === 'object') {
                      var ce = qe.indexOf(y);
                      if (ce < 0) u === !0 && (qe.push(y), Qe.push(z));
                      else return (G[z] = '#'), ee && ee({ cyclicKeypath: Qe[ce] }), '#' + Qe[ce];
                    }
                    var ue = T(y),
                      ve = $e(y),
                      pe =
                        ((ue || ve) && (!fe.plainObjectReplacers.length || p.replaced)) ||
                        p.iterateIn
                          ? y
                          : Be(z, y, p, _, ue || ve, null, ee),
                      he;
                    if (
                      (pe !== y
                        ? ((F = pe), (J = { replaced: pe }))
                        : z === '' && P(y, x)
                        ? (_.push([z, y, u, p, void 0, void 0, p.type]), (F = y))
                        : (ve && p.iterateIn !== 'object') || p.iterateIn === 'array'
                        ? ((he = new Array(y.length)), (J = { clone: he }))
                        : (!['function', 'symbol'].includes(n(y)) &&
                            !('toJSON' in y) &&
                            !P(y, x) &&
                            !P(y, Promise) &&
                            !P(y, ArrayBuffer)) ||
                          ue ||
                          p.iterateIn === 'object'
                        ? ((he = {}), p.addLength && (he.length = y.length), (J = { clone: he }))
                        : (F = y),
                      ee && ee(),
                      U.iterateNone)
                    )
                      return he || F;
                    if (!he) return F;
                    if (p.iterateIn) {
                      var Ee = function (Z) {
                        var X = { ownKeys: Ue.call(y, Z) };
                        ge(p, X, function () {
                          var te = z + (z ? '.' : '') + se(Z),
                            le = _e(te, y[Z], !!u, p, _, O);
                          P(le, x)
                            ? _.push([te, le, !!u, p, he, Z, p.type])
                            : le !== void 0 && (he[Z] = le);
                        });
                      };
                      for (var Ae in y) Ee(Ae);
                      ee && ee({ endIterateIn: !0, end: !0 });
                    } else
                      Ce(y).forEach(function (K) {
                        var Z = z + (z ? '.' : '') + se(K),
                          X = { ownKeys: !0 };
                        ge(p, X, function () {
                          var te = _e(Z, y[K], !!u, p, _, O);
                          P(te, x)
                            ? _.push([Z, te, !!u, p, he, K, p.type])
                            : te !== void 0 && (he[K] = te);
                        });
                      }),
                        ee && ee({ endIterateOwn: !0, end: !0 });
                    if (p.iterateUnsetNumeric) {
                      for (
                        var ae = y.length,
                          We = function (Z) {
                            if (!(Z in y)) {
                              var X = z + (z ? '.' : '') + Z,
                                te = { ownKeys: !1 };
                              ge(p, te, function () {
                                var le = _e(X, void 0, !!u, p, _, O);
                                P(le, x)
                                  ? _.push([X, le, !!u, p, he, Z, p.type])
                                  : le !== void 0 && (he[Z] = le);
                              });
                            }
                          },
                          V = 0;
                        V < ae;
                        V++
                      )
                        We(V);
                      ee && ee({ endIterateUnsetNumeric: !0, end: !0 });
                    }
                    return he;
                  }
                  function Be(z, y, u, p, _, O, L) {
                    for (
                      var F = _ ? fe.plainObjectReplacers : fe.nonplainObjectReplacers,
                        J = F.length;
                      J--;

                    ) {
                      var M = F[J];
                      if (M.test(y, u)) {
                        var ee = M.type;
                        if (fe.revivers[ee]) {
                          var ce = G[z];
                          G[z] = ce ? [ee].concat(ce) : ee;
                        }
                        if (
                          (Object.assign(u, { type: ee, replaced: !0 }),
                          (me || !M.replaceAsync) && !M.replace)
                        )
                          return (
                            L && L({ typeDetected: !0 }), _e(z, y, dt && 'readonly', u, p, O, ee)
                          );
                        L && L({ replacing: !0 });
                        var ue = me || !M.replaceAsync ? 'replace' : 'replaceAsync';
                        return _e(z, M[ue](y, u), dt && 'readonly', u, p, O, ee);
                      }
                    }
                    return y;
                  }
                  return tt.length
                    ? me && U.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError('Sync method requested but async result obtained');
                        })()
                      : Promise.resolve(Ie(nt, tt)).then(pt)
                    : !me && U.throwOnBadSyncType
                    ? (function () {
                        throw new TypeError('Async method requested but sync result obtained');
                      })()
                    : U.stringification && me
                    ? [pt(nt)]
                    : me
                    ? pt(nt)
                    : Promise.resolve(pt(nt));
                },
              },
              {
                key: 'encapsulateSync',
                value: function (D, R, U) {
                  return this.encapsulate(D, R, f({ throwOnBadSyncType: !0 }, U, { sync: !0 }));
                },
              },
              {
                key: 'encapsulateAsync',
                value: function (D, R, U) {
                  return this.encapsulate(D, R, f({ throwOnBadSyncType: !0 }, U, { sync: !1 }));
                },
              },
              {
                key: 'revive',
                value: function (D, R) {
                  var U = D && D.$types;
                  if (!U) return D;
                  if (U === !0) return D.$;
                  R = f({ sync: !0 }, this.options, {}, R);
                  var de = R,
                    me = de.sync,
                    fe = [],
                    G = {},
                    qe = !0;
                  U.$ && T(U.$) && ((D = D.$), (U = U.$), (qe = !1));
                  var Qe = this;
                  function tt(we, ge) {
                    var _e = Qe.revivers[we] || [],
                      Be = h(_e, 1),
                      z = Be[0];
                    if (!z) throw new Error('Unregistered type: ' + we);
                    return me && !('revive' in z)
                      ? ge
                      : z[
                          me && z.revive
                            ? 'revive'
                            : !me && z.reviveAsync
                            ? 'reviveAsync'
                            : 'revive'
                        ](ge, G);
                  }
                  function dt() {
                    var we = [];
                    if (
                      (Object.entries(U).forEach(function (ge) {
                        var _e = h(ge, 2),
                          Be = _e[0],
                          z = _e[1];
                        z !== '#' &&
                          [].concat(z).forEach(function (y) {
                            var u = Qe.revivers[y] || [null, {}],
                              p = h(u, 2),
                              _ = p[1].plain;
                            _ && (we.push({ keypath: Be, type: y }), delete U[Be]);
                          });
                      }),
                      !!we.length)
                    )
                      return we.sort(H).reduce(function ge(_e, Be) {
                        var z = Be.keypath,
                          y = Be.type;
                        if (v(_e))
                          return _e.then(function (_) {
                            return ge(_, { keypath: z, type: y });
                          });
                        var u = ie(D, z);
                        if (((u = tt(y, u)), P(u, x)))
                          return u.then(function (_) {
                            var O = oe(D, z, _);
                            O === _ && (D = O);
                          });
                        var p = oe(D, z, u);
                        p === u && (D = p);
                      }, void 0);
                  }
                  var ht = [];
                  function Et(we, ge, _e, Be, z) {
                    if (!(qe && we === '$types')) {
                      var y = U[we],
                        u = $e(ge);
                      if (u || T(ge)) {
                        var p = u ? new Array(ge.length) : {};
                        for (
                          Ce(ge).forEach(function (ce) {
                            var ue = Et(we + (we ? '.' : '') + se(ce), ge[ce], _e || p, p, ce),
                              ve = function (he) {
                                return (
                                  P(he, Me) ? (p[ce] = void 0) : he !== void 0 && (p[ce] = he), he
                                );
                              };
                            P(ue, x)
                              ? ht.push(
                                  ue.then(function (pe) {
                                    return ve(pe);
                                  }),
                                )
                              : ve(ue);
                          }),
                            ge = p;
                          fe.length;

                        ) {
                          var _ = h(fe[0], 4),
                            O = _[0],
                            L = _[1],
                            F = _[2],
                            J = _[3],
                            M = ie(O, L);
                          if (M !== void 0) F[J] = M;
                          else break;
                          fe.splice(0, 1);
                        }
                      }
                      if (!y) return ge;
                      if (y === '#') {
                        var ee = ie(_e, ge.slice(1));
                        return ee === void 0 && fe.push([_e, ge.slice(1), Be, z]), ee;
                      }
                      return [].concat(y).reduce(function ce(ue, ve) {
                        return P(ue, x)
                          ? ue.then(function (pe) {
                              return ce(pe, ve);
                            })
                          : tt(ve, ue);
                      }, ge);
                    }
                  }
                  function nt(we) {
                    return P(we, Me) ? void 0 : we;
                  }
                  var pt = dt(),
                    Ie;
                  return (
                    P(pt, x)
                      ? (Ie = pt.then(function () {
                          return D;
                        }))
                      : ((Ie = Et('', D, null)),
                        ht.length &&
                          (Ie = x
                            .resolve(Ie)
                            .then(function (we) {
                              return x.all([we].concat(ht));
                            })
                            .then(function (we) {
                              var ge = h(we, 1),
                                _e = ge[0];
                              return _e;
                            }))),
                    v(Ie)
                      ? me && R.throwOnBadSyncType
                        ? (function () {
                            throw new TypeError('Sync method requested but async result obtained');
                          })()
                        : P(Ie, x)
                        ? Ie.p.then(nt)
                        : Ie
                      : !me && R.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError('Async method requested but sync result obtained');
                        })()
                      : me
                      ? nt(Ie)
                      : Promise.resolve(nt(Ie))
                  );
                },
              },
              {
                key: 'reviveSync',
                value: function (D, R) {
                  return this.revive(D, f({ throwOnBadSyncType: !0 }, R, { sync: !0 }));
                },
              },
              {
                key: 'reviveAsync',
                value: function (D, R) {
                  return this.revive(D, f({ throwOnBadSyncType: !0 }, R, { sync: !1 }));
                },
              },
              {
                key: 'register',
                value: function (D, R) {
                  return (
                    (R = R || {}),
                    [].concat(D).forEach(function U(de) {
                      var me = this;
                      if ($e(de))
                        return de.map(function (fe) {
                          return U.call(me, fe);
                        });
                      de &&
                        Ce(de).forEach(function (fe) {
                          if (fe === '#')
                            throw new TypeError(
                              '# cannot be used as a type name as it is reserved for cyclic objects',
                            );
                          if (N.JSON_TYPES.includes(fe))
                            throw new TypeError(
                              'Plain JSON object types are reserved as type names',
                            );
                          var G = de[fe],
                            qe =
                              G && G.testPlainObjects
                                ? this.plainObjectReplacers
                                : this.nonplainObjectReplacers,
                            Qe = qe.filter(function (_e) {
                              return _e.type === fe;
                            });
                          if (
                            (Qe.length &&
                              (qe.splice(qe.indexOf(Qe[0]), 1),
                              delete this.revivers[fe],
                              delete this.types[fe]),
                            typeof G == 'function')
                          ) {
                            var tt = G;
                            G = {
                              test: function (Be) {
                                return Be && Be.constructor === tt;
                              },
                              replace: function (Be) {
                                return f({}, Be);
                              },
                              revive: function (Be) {
                                return Object.assign(Object.create(tt.prototype), Be);
                              },
                            };
                          } else if ($e(G)) {
                            var dt = G,
                              ht = h(dt, 3),
                              Et = ht[0],
                              nt = ht[1],
                              pt = ht[2];
                            G = { test: Et, replace: nt, revive: pt };
                          }
                          if (!(!G || !G.test)) {
                            var Ie = { type: fe, test: G.test.bind(G) };
                            G.replace && (Ie.replace = G.replace.bind(G)),
                              G.replaceAsync && (Ie.replaceAsync = G.replaceAsync.bind(G));
                            var we =
                              typeof R.fallback == 'number' ? R.fallback : R.fallback ? 0 : 1 / 0;
                            if (
                              (G.testPlainObjects
                                ? this.plainObjectReplacers.splice(we, 0, Ie)
                                : this.nonplainObjectReplacers.splice(we, 0, Ie),
                              G.revive || G.reviveAsync)
                            ) {
                              var ge = {};
                              G.revive && (ge.revive = G.revive.bind(G)),
                                G.reviveAsync && (ge.reviveAsync = G.reviveAsync.bind(G)),
                                (this.revivers[fe] = [ge, { plain: G.testPlainObjects }]);
                            }
                            this.types[fe] = G;
                          }
                        }, this);
                    }, this),
                    this
                  );
                },
              },
            ]),
            N
          );
        })(),
        Me = function N() {
          s(this, N);
        };
      return (
        (Me.__typeson__type__ = 'TypesonUndefined'),
        (be.Undefined = Me),
        (be.Promise = x),
        (be.isThenable = v),
        (be.toStringTag = d),
        (be.hasConstructorOf = P),
        (be.isObject = q),
        (be.isPlainObject = T),
        (be.isUserObject = Y),
        (be.escapeKeyPathComponent = se),
        (be.unescapeKeyPathComponent = re),
        (be.getByKeyPath = ie),
        (be.getJSONType = ke),
        (be.JSON_TYPES = ['null', 'boolean', 'number', 'string', 'array', 'object']),
        be
      );
    });
  }),
  Qc = es(function (e, t) {
    (function (n, r) {
      e.exports = r();
    })(Bi, function () {
      function n(y) {
        return (n =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (u) {
                return typeof u;
              }
            : function (u) {
                return u &&
                  typeof Symbol == 'function' &&
                  u.constructor === Symbol &&
                  u !== Symbol.prototype
                  ? 'symbol'
                  : typeof u;
              })(y);
      }
      function r(y, u) {
        if (!(y instanceof u)) throw new TypeError('Cannot call a class as a function');
      }
      function i(y, u) {
        for (var p = 0; p < u.length; p++) {
          var _ = u[p];
          (_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            'value' in _ && (_.writable = !0),
            Object.defineProperty(y, _.key, _);
        }
      }
      function s(y, u, p) {
        return (
          u in y
            ? Object.defineProperty(y, u, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (y[u] = p),
          y
        );
      }
      function o(y, u) {
        var p = Object.keys(y);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(y);
          u &&
            (_ = _.filter(function (O) {
              return Object.getOwnPropertyDescriptor(y, O).enumerable;
            })),
            p.push.apply(p, _);
        }
        return p;
      }
      function c(y) {
        return (
          (function (p) {
            if (Array.isArray(p)) return l(p);
          })(y) ||
          (function (p) {
            if (typeof Symbol < 'u' && Symbol.iterator in Object(p)) return Array.from(p);
          })(y) ||
          (function (p, _) {
            if (p) {
              if (typeof p == 'string') return l(p, _);
              var O = Object.prototype.toString.call(p).slice(8, -1);
              if (
                (O === 'Object' && p.constructor && (O = p.constructor.name),
                O === 'Map' || O === 'Set')
              )
                return Array.from(p);
              if (O === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))
                return l(p, _);
            }
          })(y) ||
          (function () {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })()
        );
      }
      function l(y, u) {
        (u == null || u > y.length) && (u = y.length);
        for (var p = 0, _ = new Array(u); p < u; p++) _[p] = y[p];
        return _;
      }
      function a(y) {
        return (a =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (p) {
                return typeof p;
              }
            : function (p) {
                return p &&
                  typeof Symbol == 'function' &&
                  p.constructor === Symbol &&
                  p !== Symbol.prototype
                  ? 'symbol'
                  : typeof p;
              })(y);
      }
      function f(y, u) {
        if (!(y instanceof u)) throw new TypeError('Cannot call a class as a function');
      }
      function h(y, u) {
        for (var p = 0; p < u.length; p++) {
          var _ = u[p];
          (_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            'value' in _ && (_.writable = !0),
            Object.defineProperty(y, _.key, _);
        }
      }
      function m(y, u, p) {
        return (
          u in y
            ? Object.defineProperty(y, u, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (y[u] = p),
          y
        );
      }
      function g(y, u) {
        var p = Object.keys(y);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(y);
          u &&
            (_ = _.filter(function (O) {
              return Object.getOwnPropertyDescriptor(y, O).enumerable;
            })),
            p.push.apply(p, _);
        }
        return p;
      }
      function w(y) {
        for (var u = 1; u < arguments.length; u++) {
          var p = arguments[u] != null ? arguments[u] : {};
          u % 2
            ? g(Object(p), !0).forEach(function (_) {
                m(y, _, p[_]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(p))
            : g(Object(p)).forEach(function (_) {
                Object.defineProperty(y, _, Object.getOwnPropertyDescriptor(p, _));
              });
        }
        return y;
      }
      function b(y, u) {
        return (
          (function (_) {
            if (Array.isArray(_)) return _;
          })(y) ||
          (function (_, O) {
            if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(_)))) {
              var L = [],
                F = !0,
                J = !1,
                M = void 0;
              try {
                for (
                  var ee, ce = _[Symbol.iterator]();
                  !(F = (ee = ce.next()).done) && (L.push(ee.value), !O || L.length !== O);
                  F = !0
                );
              } catch (ue) {
                (J = !0), (M = ue);
              } finally {
                try {
                  F || ce.return == null || ce.return();
                } finally {
                  if (J) throw M;
                }
              }
              return L;
            }
          })(y, u) ||
          E(y, u) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })()
        );
      }
      function S(y) {
        return (
          (function (p) {
            if (Array.isArray(p)) return A(p);
          })(y) ||
          (function (p) {
            if (typeof Symbol < 'u' && Symbol.iterator in Object(p)) return Array.from(p);
          })(y) ||
          E(y) ||
          (function () {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })()
        );
      }
      function E(y, u) {
        if (y) {
          if (typeof y == 'string') return A(y, u);
          var p = Object.prototype.toString.call(y).slice(8, -1);
          return (
            p === 'Object' && y.constructor && (p = y.constructor.name),
            p === 'Map' || p === 'Set'
              ? Array.from(y)
              : p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
              ? A(y, u)
              : void 0
          );
        }
      }
      function A(y, u) {
        (u == null || u > y.length) && (u = y.length);
        for (var p = 0, _ = new Array(u); p < u; p++) _[p] = y[p];
        return _;
      }
      var x = function y(u) {
        f(this, y), (this.p = new Promise(u));
      };
      (x.__typeson__type__ = 'TypesonPromise'),
        typeof Symbol < 'u' && (x.prototype[Symbol.toStringTag] = 'TypesonPromise'),
        (x.prototype.then = function (y, u) {
          var p = this;
          return new x(function (_, O) {
            p.p
              .then(function (L) {
                _(y ? y(L) : L);
              })
              .catch(function (L) {
                return u ? u(L) : Promise.reject(L);
              })
              .then(_, O);
          });
        }),
        (x.prototype.catch = function (y) {
          return this.then(null, y);
        }),
        (x.resolve = function (y) {
          return new x(function (u) {
            u(y);
          });
        }),
        (x.reject = function (y) {
          return new x(function (u, p) {
            p(y);
          });
        }),
        ['all', 'race'].forEach(function (y) {
          x[y] = function (u) {
            return new x(function (p, _) {
              Promise[y](
                u.map(function (O) {
                  return O && O.constructor && O.constructor.__typeson__type__ === 'TypesonPromise'
                    ? O.p
                    : O;
                }),
              ).then(p, _);
            });
          };
        });
      var B = {}.toString,
        k = {}.hasOwnProperty,
        I = Object.getPrototypeOf,
        C = k.toString;
      function $(y, u) {
        return T(y) && typeof y.then == 'function' && (!u || typeof y.catch == 'function');
      }
      function v(y) {
        return B.call(y).slice(8, -1);
      }
      function d(y, u) {
        if (!y || a(y) !== 'object') return !1;
        var p = I(y);
        if (!p) return u === null;
        var _ = k.call(p, 'constructor') && p.constructor;
        return typeof _ != 'function'
          ? u === null
          : u === _ ||
              (u !== null && C.call(_) === C.call(u)) ||
              (typeof u == 'function' &&
                typeof _.__typeson__type__ == 'string' &&
                _.__typeson__type__ === u.__typeson__type__);
      }
      function P(y) {
        return !(!y || v(y) !== 'Object') && (!I(y) || d(y, Object));
      }
      function T(y) {
        return y && a(y) === 'object';
      }
      function Y(y) {
        return y.replace(/~/g, '~0').replace(/\./g, '~1');
      }
      function q(y) {
        return y.replace(/~1/g, '.').replace(/~0/g, '~');
      }
      function se(y, u) {
        if (u === '') return y;
        var p = u.indexOf('.');
        if (p > -1) {
          var _ = y[q(u.slice(0, p))];
          return _ === void 0 ? void 0 : se(_, u.slice(p + 1));
        }
        return y[q(u)];
      }
      function re(y, u, p) {
        if (u === '') return p;
        var _ = u.indexOf('.');
        return _ > -1 ? re(y[q(u.slice(0, _))], u.slice(_ + 1), p) : ((y[q(u)] = p), y);
      }
      function ie(y, u, p) {
        return p ? (u ? u(y) : y) : ((y && y.then) || (y = Promise.resolve(y)), u ? y.then(u) : y);
      }
      var oe = Object.keys,
        ke = Array.isArray,
        Ce = {}.hasOwnProperty,
        $e = ['type', 'replaced', 'iterateIn', 'iterateUnsetNumeric'];
      function Ue(y) {
        return function () {
          for (var u = [], p = 0; p < arguments.length; p++) u[p] = arguments[p];
          try {
            return Promise.resolve(y.apply(this, u));
          } catch (_) {
            return Promise.reject(_);
          }
        };
      }
      function et(y, u) {
        if (y.keypath === '') return -1;
        var p = y.keypath.match(/\./g) || 0,
          _ = u.keypath.match(/\./g) || 0;
        return (
          p && (p = p.length),
          _ && (_ = _.length),
          p > _ ? -1 : p < _ ? 1 : y.keypath < u.keypath ? -1 : y.keypath > u.keypath
        );
      }
      var H = (function () {
          function y(u) {
            f(this, y),
              (this.options = u),
              (this.plainObjectReplacers = []),
              (this.nonplainObjectReplacers = []),
              (this.revivers = {}),
              (this.types = {});
          }
          return (
            (function (p, _, O) {
              return _ && h(p.prototype, _), O && h(p, O), p;
            })(y, [
              {
                key: 'stringify',
                value: function (p, _, O, L) {
                  L = w(w(w({}, this.options), L), {}, { stringification: !0 });
                  var F = this.encapsulate(p, null, L);
                  return ke(F)
                    ? JSON.stringify(F[0], _, O)
                    : F.then(function (J) {
                        return JSON.stringify(J, _, O);
                      });
                },
              },
              {
                key: 'stringifySync',
                value: function (p, _, O, L) {
                  return this.stringify(
                    p,
                    _,
                    O,
                    w(w({ throwOnBadSyncType: !0 }, L), {}, { sync: !0 }),
                  );
                },
              },
              {
                key: 'stringifyAsync',
                value: function (p, _, O, L) {
                  return this.stringify(
                    p,
                    _,
                    O,
                    w(w({ throwOnBadSyncType: !0 }, L), {}, { sync: !1 }),
                  );
                },
              },
              {
                key: 'parse',
                value: function (p, _, O) {
                  return (
                    (O = w(w(w({}, this.options), O), {}, { parse: !0 })),
                    this.revive(JSON.parse(p, _), O)
                  );
                },
              },
              {
                key: 'parseSync',
                value: function (p, _, O) {
                  return this.parse(p, _, w(w({ throwOnBadSyncType: !0 }, O), {}, { sync: !0 }));
                },
              },
              {
                key: 'parseAsync',
                value: function (p, _, O) {
                  return this.parse(p, _, w(w({ throwOnBadSyncType: !0 }, O), {}, { sync: !1 }));
                },
              },
              {
                key: 'specialTypeNames',
                value: function (p, _) {
                  var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  return (O.returnTypeNames = !0), this.encapsulate(p, _, O);
                },
              },
              {
                key: 'rootTypeName',
                value: function (p, _) {
                  var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  return (O.iterateNone = !0), this.encapsulate(p, _, O);
                },
              },
              {
                key: 'encapsulate',
                value: function (p, _, O) {
                  var L = Ue(function (V, K) {
                      return ie(
                        Promise.all(
                          K.map(function (Z) {
                            return Z[1].p;
                          }),
                        ),
                        function (Z) {
                          return ie(
                            Promise.all(
                              Z.map(
                                Ue(function (X) {
                                  var te = !1,
                                    le = [],
                                    rt = b(K.splice(0, 1), 1),
                                    je = b(rt[0], 7),
                                    Ze = je[0],
                                    ut = je[2],
                                    Se = je[3],
                                    lt = je[4],
                                    Oe = je[5],
                                    it = je[6],
                                    Je = ae(Ze, X, ut, Se, le, !0, it),
                                    yt = d(Je, x);
                                  return (function (zr, sr) {
                                    var an = zr();
                                    return an && an.then ? an.then(sr) : sr(an);
                                  })(
                                    function () {
                                      if (Ze && yt)
                                        return ie(Je.p, function (mt) {
                                          return (lt[Oe] = mt), (te = !0), L(V, le);
                                        });
                                    },
                                    function (mt) {
                                      return te
                                        ? mt
                                        : (Ze ? (lt[Oe] = Je) : (V = yt ? Je.p : Je), L(V, le));
                                    },
                                  );
                                }),
                              ),
                            ),
                            function () {
                              return V;
                            },
                          );
                        },
                      );
                    }),
                    F = (O = w(w({ sync: !0 }, this.options), O)).sync,
                    J = this,
                    M = {},
                    ee = [],
                    ce = [],
                    ue = [],
                    ve = !('cyclic' in O) || O.cyclic,
                    pe = O.encapsulateObserver,
                    he = ae('', p, ve, _ || {}, ue);
                  function Ee(V) {
                    var K = Object.values(M);
                    if (O.iterateNone) return K.length ? K[0] : y.getJSONType(V);
                    if (K.length) {
                      if (O.returnTypeNames) return S(new Set(K));
                      V && P(V) && !Ce.call(V, '$types')
                        ? (V.$types = M)
                        : (V = { $: V, $types: { $: M } });
                    } else T(V) && Ce.call(V, '$types') && (V = { $: V, $types: !0 });
                    return !O.returnTypeNames && V;
                  }
                  function Ae(V, K, Z) {
                    Object.assign(V, K);
                    var X = $e.map(function (te) {
                      var le = V[te];
                      return delete V[te], le;
                    });
                    Z(),
                      $e.forEach(function (te, le) {
                        V[te] = X[le];
                      });
                  }
                  function ae(V, K, Z, X, te, le, rt) {
                    var je,
                      Ze = {},
                      ut = a(K),
                      Se = pe
                        ? function (Rt) {
                            var He = rt || X.type || y.getJSONType(K);
                            pe(
                              Object.assign(
                                Rt || Ze,
                                {
                                  keypath: V,
                                  value: K,
                                  cyclic: Z,
                                  stateObj: X,
                                  promisesData: te,
                                  resolvingTypesonPromise: le,
                                  awaitingTypesonPromise: d(K, x),
                                },
                                { type: He },
                              ),
                            );
                          }
                        : null;
                    if (['string', 'boolean', 'number', 'undefined'].includes(ut))
                      return (
                        K === void 0 ||
                        Number.isNaN(K) ||
                        K === Number.NEGATIVE_INFINITY ||
                        K === Number.POSITIVE_INFINITY
                          ? (je = X.replaced ? K : We(V, K, X, te, !1, le, Se)) !== K &&
                            (Ze = { replaced: je })
                          : (je = K),
                        Se && Se(),
                        je
                      );
                    if (K === null) return Se && Se(), K;
                    if (Z && !X.iterateIn && !X.iterateUnsetNumeric && K && a(K) === 'object') {
                      var lt = ee.indexOf(K);
                      if (!(lt < 0))
                        return (M[V] = '#'), Se && Se({ cyclicKeypath: ce[lt] }), '#' + ce[lt];
                      Z === !0 && (ee.push(K), ce.push(V));
                    }
                    var Oe,
                      it = P(K),
                      Je = ke(K),
                      yt =
                        ((it || Je) && (!J.plainObjectReplacers.length || X.replaced)) ||
                        X.iterateIn
                          ? K
                          : We(V, K, X, te, it || Je, null, Se);
                    if (
                      (yt !== K
                        ? ((je = yt), (Ze = { replaced: yt }))
                        : V === '' && d(K, x)
                        ? (te.push([V, K, Z, X, void 0, void 0, X.type]), (je = K))
                        : (Je && X.iterateIn !== 'object') || X.iterateIn === 'array'
                        ? ((Oe = new Array(K.length)), (Ze = { clone: Oe }))
                        : (['function', 'symbol'].includes(a(K)) ||
                            'toJSON' in K ||
                            d(K, x) ||
                            d(K, Promise) ||
                            d(K, ArrayBuffer)) &&
                          !it &&
                          X.iterateIn !== 'object'
                        ? (je = K)
                        : ((Oe = {}), X.addLength && (Oe.length = K.length), (Ze = { clone: Oe })),
                      Se && Se(),
                      O.iterateNone)
                    )
                      return Oe || je;
                    if (!Oe) return je;
                    if (X.iterateIn) {
                      var mt = function (He) {
                        var At = { ownKeys: Ce.call(K, He) };
                        Ae(X, At, function () {
                          var zt = V + (V ? '.' : '') + Y(He),
                            or = ae(zt, K[He], !!Z, X, te, le);
                          d(or, x)
                            ? te.push([zt, or, !!Z, X, Oe, He, X.type])
                            : or !== void 0 && (Oe[He] = or);
                        });
                      };
                      for (var zr in K) mt(zr);
                      Se && Se({ endIterateIn: !0, end: !0 });
                    } else
                      oe(K).forEach(function (Rt) {
                        var He = V + (V ? '.' : '') + Y(Rt);
                        Ae(X, { ownKeys: !0 }, function () {
                          var At = ae(He, K[Rt], !!Z, X, te, le);
                          d(At, x)
                            ? te.push([He, At, !!Z, X, Oe, Rt, X.type])
                            : At !== void 0 && (Oe[Rt] = At);
                        });
                      }),
                        Se && Se({ endIterateOwn: !0, end: !0 });
                    if (X.iterateUnsetNumeric) {
                      for (
                        var sr = K.length,
                          an = function (He) {
                            if (!(He in K)) {
                              var At = V + (V ? '.' : '') + He;
                              Ae(X, { ownKeys: !1 }, function () {
                                var zt = ae(At, void 0, !!Z, X, te, le);
                                d(zt, x)
                                  ? te.push([At, zt, !!Z, X, Oe, He, X.type])
                                  : zt !== void 0 && (Oe[He] = zt);
                              });
                            }
                          },
                          Jr = 0;
                        Jr < sr;
                        Jr++
                      )
                        an(Jr);
                      Se && Se({ endIterateUnsetNumeric: !0, end: !0 });
                    }
                    return Oe;
                  }
                  function We(V, K, Z, X, te, le, rt) {
                    for (
                      var je = te ? J.plainObjectReplacers : J.nonplainObjectReplacers,
                        Ze = je.length;
                      Ze--;

                    ) {
                      var ut = je[Ze];
                      if (ut.test(K, Z)) {
                        var Se = ut.type;
                        if (J.revivers[Se]) {
                          var lt = M[V];
                          M[V] = lt ? [Se].concat(lt) : Se;
                        }
                        return (
                          Object.assign(Z, { type: Se, replaced: !0 }),
                          (!F && ut.replaceAsync) || ut.replace
                            ? (rt && rt({ replacing: !0 }),
                              ae(
                                V,
                                ut[F || !ut.replaceAsync ? 'replace' : 'replaceAsync'](K, Z),
                                ve && 'readonly',
                                Z,
                                X,
                                le,
                                Se,
                              ))
                            : (rt && rt({ typeDetected: !0 }),
                              ae(V, K, ve && 'readonly', Z, X, le, Se))
                        );
                      }
                    }
                    return K;
                  }
                  return ue.length
                    ? F && O.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError('Sync method requested but async result obtained');
                        })()
                      : Promise.resolve(L(he, ue)).then(Ee)
                    : !F && O.throwOnBadSyncType
                    ? (function () {
                        throw new TypeError('Async method requested but sync result obtained');
                      })()
                    : O.stringification && F
                    ? [Ee(he)]
                    : F
                    ? Ee(he)
                    : Promise.resolve(Ee(he));
                },
              },
              {
                key: 'encapsulateSync',
                value: function (p, _, O) {
                  return this.encapsulate(
                    p,
                    _,
                    w(w({ throwOnBadSyncType: !0 }, O), {}, { sync: !0 }),
                  );
                },
              },
              {
                key: 'encapsulateAsync',
                value: function (p, _, O) {
                  return this.encapsulate(
                    p,
                    _,
                    w(w({ throwOnBadSyncType: !0 }, O), {}, { sync: !1 }),
                  );
                },
              },
              {
                key: 'revive',
                value: function (p, _) {
                  var O = p && p.$types;
                  if (!O) return p;
                  if (O === !0) return p.$;
                  var L = (_ = w(w({ sync: !0 }, this.options), _)).sync,
                    F = [],
                    J = {},
                    M = !0;
                  O.$ && P(O.$) && ((p = p.$), (O = O.$), (M = !1));
                  var ee = this;
                  function ce(Ee, Ae) {
                    var ae = b(ee.revivers[Ee] || [], 1)[0];
                    if (!ae) throw new Error('Unregistered type: ' + Ee);
                    return L && !('revive' in ae)
                      ? Ae
                      : ae[
                          L && ae.revive
                            ? 'revive'
                            : !L && ae.reviveAsync
                            ? 'reviveAsync'
                            : 'revive'
                        ](Ae, J);
                  }
                  var ue = [];
                  function ve(Ee) {
                    return d(Ee, be) ? void 0 : Ee;
                  }
                  var pe,
                    he = (function () {
                      var Ae = [];
                      if (
                        (Object.entries(O).forEach(function (ae) {
                          var We = b(ae, 2),
                            V = We[0],
                            K = We[1];
                          K !== '#' &&
                            [].concat(K).forEach(function (Z) {
                              b(ee.revivers[Z] || [null, {}], 2)[1].plain &&
                                (Ae.push({ keypath: V, type: Z }), delete O[V]);
                            });
                        }),
                        Ae.length)
                      )
                        return Ae.sort(et).reduce(function ae(We, V) {
                          var K = V.keypath,
                            Z = V.type;
                          if ($(We))
                            return We.then(function (le) {
                              return ae(le, { keypath: K, type: Z });
                            });
                          var X = se(p, K);
                          if (d((X = ce(Z, X)), x))
                            return X.then(function (le) {
                              var rt = re(p, K, le);
                              rt === le && (p = rt);
                            });
                          var te = re(p, K, X);
                          te === X && (p = te);
                        }, void 0);
                    })();
                  return (
                    d(he, x)
                      ? (pe = he.then(function () {
                          return p;
                        }))
                      : ((pe = (function Ee(Ae, ae, We, V, K) {
                          if (!M || Ae !== '$types') {
                            var Z = O[Ae],
                              X = ke(ae);
                            if (X || P(ae)) {
                              var te = X ? new Array(ae.length) : {};
                              for (
                                oe(ae).forEach(function (Oe) {
                                  var it = Ee(
                                      Ae + (Ae ? '.' : '') + Y(Oe),
                                      ae[Oe],
                                      We || te,
                                      te,
                                      Oe,
                                    ),
                                    Je = function (mt) {
                                      return (
                                        d(mt, be)
                                          ? (te[Oe] = void 0)
                                          : mt !== void 0 && (te[Oe] = mt),
                                        mt
                                      );
                                    };
                                  d(it, x)
                                    ? ue.push(
                                        it.then(function (yt) {
                                          return Je(yt);
                                        }),
                                      )
                                    : Je(it);
                                }),
                                  ae = te;
                                F.length;

                              ) {
                                var le = b(F[0], 4),
                                  rt = le[0],
                                  je = le[1],
                                  Ze = le[2],
                                  ut = le[3],
                                  Se = se(rt, je);
                                if (Se === void 0) break;
                                (Ze[ut] = Se), F.splice(0, 1);
                              }
                            }
                            if (!Z) return ae;
                            if (Z === '#') {
                              var lt = se(We, ae.slice(1));
                              return lt === void 0 && F.push([We, ae.slice(1), V, K]), lt;
                            }
                            return [].concat(Z).reduce(function Oe(it, Je) {
                              return d(it, x)
                                ? it.then(function (yt) {
                                    return Oe(yt, Je);
                                  })
                                : ce(Je, it);
                            }, ae);
                          }
                        })('', p, null)),
                        ue.length &&
                          (pe = x
                            .resolve(pe)
                            .then(function (Ee) {
                              return x.all([Ee].concat(ue));
                            })
                            .then(function (Ee) {
                              return b(Ee, 1)[0];
                            }))),
                    $(pe)
                      ? L && _.throwOnBadSyncType
                        ? (function () {
                            throw new TypeError('Sync method requested but async result obtained');
                          })()
                        : d(pe, x)
                        ? pe.p.then(ve)
                        : pe
                      : !L && _.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError('Async method requested but sync result obtained');
                        })()
                      : L
                      ? ve(pe)
                      : Promise.resolve(ve(pe))
                  );
                },
              },
              {
                key: 'reviveSync',
                value: function (p, _) {
                  return this.revive(p, w(w({ throwOnBadSyncType: !0 }, _), {}, { sync: !0 }));
                },
              },
              {
                key: 'reviveAsync',
                value: function (p, _) {
                  return this.revive(p, w(w({ throwOnBadSyncType: !0 }, _), {}, { sync: !1 }));
                },
              },
              {
                key: 'register',
                value: function (p, _) {
                  return (
                    (_ = _ || {}),
                    [].concat(p).forEach(function O(L) {
                      var F = this;
                      if (ke(L))
                        return L.map(function (J) {
                          return O.call(F, J);
                        });
                      L &&
                        oe(L).forEach(function (J) {
                          if (J === '#')
                            throw new TypeError(
                              '# cannot be used as a type name as it is reserved for cyclic objects',
                            );
                          if (y.JSON_TYPES.includes(J))
                            throw new TypeError(
                              'Plain JSON object types are reserved as type names',
                            );
                          var M = L[J],
                            ee =
                              M && M.testPlainObjects
                                ? this.plainObjectReplacers
                                : this.nonplainObjectReplacers,
                            ce = ee.filter(function (Ae) {
                              return Ae.type === J;
                            });
                          if (
                            (ce.length &&
                              (ee.splice(ee.indexOf(ce[0]), 1),
                              delete this.revivers[J],
                              delete this.types[J]),
                            typeof M == 'function')
                          ) {
                            var ue = M;
                            M = {
                              test: function (ae) {
                                return ae && ae.constructor === ue;
                              },
                              replace: function (ae) {
                                return w({}, ae);
                              },
                              revive: function (ae) {
                                return Object.assign(Object.create(ue.prototype), ae);
                              },
                            };
                          } else if (ke(M)) {
                            var ve = b(M, 3);
                            M = { test: ve[0], replace: ve[1], revive: ve[2] };
                          }
                          if (M && M.test) {
                            var pe = { type: J, test: M.test.bind(M) };
                            M.replace && (pe.replace = M.replace.bind(M)),
                              M.replaceAsync && (pe.replaceAsync = M.replaceAsync.bind(M));
                            var he =
                              typeof _.fallback == 'number'
                                ? _.fallback
                                : _.fallback
                                ? 0
                                : Number.POSITIVE_INFINITY;
                            if (
                              (M.testPlainObjects
                                ? this.plainObjectReplacers.splice(he, 0, pe)
                                : this.nonplainObjectReplacers.splice(he, 0, pe),
                              M.revive || M.reviveAsync)
                            ) {
                              var Ee = {};
                              M.revive && (Ee.revive = M.revive.bind(M)),
                                M.reviveAsync && (Ee.reviveAsync = M.reviveAsync.bind(M)),
                                (this.revivers[J] = [Ee, { plain: M.testPlainObjects }]);
                            }
                            this.types[J] = M;
                          }
                        }, this);
                    }, this),
                    this
                  );
                },
              },
            ]),
            y
          );
        })(),
        be = function y() {
          f(this, y);
        };
      (be.__typeson__type__ = 'TypesonUndefined'),
        (H.Undefined = be),
        (H.Promise = x),
        (H.isThenable = $),
        (H.toStringTag = v),
        (H.hasConstructorOf = d),
        (H.isObject = T),
        (H.isPlainObject = P),
        (H.isUserObject = function y(u) {
          if (!u || v(u) !== 'Object') return !1;
          var p = I(u);
          return !p || d(u, Object) || y(p);
        }),
        (H.escapeKeyPathComponent = Y),
        (H.unescapeKeyPathComponent = q),
        (H.getByKeyPath = se),
        (H.getJSONType = function (u) {
          return u === null ? 'null' : Array.isArray(u) ? 'array' : a(u);
        }),
        (H.JSON_TYPES = ['null', 'boolean', 'number', 'string', 'array', 'object']);
      for (
        var Me = {
            userObject: {
              test: function (u, p) {
                return H.isUserObject(u);
              },
              replace: function (u) {
                return (function (_) {
                  for (var O = 1; O < arguments.length; O++) {
                    var L = arguments[O] != null ? arguments[O] : {};
                    O % 2
                      ? o(Object(L), !0).forEach(function (F) {
                          s(_, F, L[F]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(L))
                      : o(Object(L)).forEach(function (F) {
                          Object.defineProperty(_, F, Object.getOwnPropertyDescriptor(L, F));
                        });
                  }
                  return _;
                })({}, u);
              },
              revive: function (u) {
                return u;
              },
            },
          },
          N = [
            {
              arrayNonindexKeys: {
                testPlainObjects: !0,
                test: function (u, p) {
                  return (
                    !!Array.isArray(u) &&
                    (Object.keys(u).some(function (_) {
                      return String(Number.parseInt(_)) !== _;
                    }) && ((p.iterateIn = 'object'), (p.addLength = !0)),
                    !0)
                  );
                },
                replace: function (u, p) {
                  return (p.iterateUnsetNumeric = !0), u;
                },
                revive: function (u) {
                  if (Array.isArray(u)) return u;
                  var p = [];
                  return (
                    Object.keys(u).forEach(function (_) {
                      var O = u[_];
                      p[_] = O;
                    }),
                    p
                  );
                },
              },
            },
            {
              sparseUndefined: {
                test: function (u, p) {
                  return u === void 0 && p.ownKeys === !1;
                },
                replace: function (u) {
                  return 0;
                },
                revive: function (u) {},
              },
            },
          ],
          j = {
            undef: {
              test: function (u, p) {
                return u === void 0 && (p.ownKeys || !('ownKeys' in p));
              },
              replace: function (u) {
                return 0;
              },
              revive: function (u) {
                return new H.Undefined();
              },
            },
          },
          D = {
            StringObject: {
              test: function (u) {
                return H.toStringTag(u) === 'String' && n(u) === 'object';
              },
              replace: function (u) {
                return String(u);
              },
              revive: function (u) {
                return new String(u);
              },
            },
            BooleanObject: {
              test: function (u) {
                return H.toStringTag(u) === 'Boolean' && n(u) === 'object';
              },
              replace: function (u) {
                return !!u;
              },
              revive: function (u) {
                return new Boolean(u);
              },
            },
            NumberObject: {
              test: function (u) {
                return H.toStringTag(u) === 'Number' && n(u) === 'object';
              },
              replace: function (u) {
                return Number(u);
              },
              revive: function (u) {
                return new Number(u);
              },
            },
          },
          R = [
            {
              nan: {
                test: function (u) {
                  return Number.isNaN(u);
                },
                replace: function (u) {
                  return 'NaN';
                },
                revive: function (u) {
                  return Number.NaN;
                },
              },
            },
            {
              infinity: {
                test: function (u) {
                  return u === Number.POSITIVE_INFINITY;
                },
                replace: function (u) {
                  return 'Infinity';
                },
                revive: function (u) {
                  return Number.POSITIVE_INFINITY;
                },
              },
            },
            {
              negativeInfinity: {
                test: function (u) {
                  return u === Number.NEGATIVE_INFINITY;
                },
                replace: function (u) {
                  return '-Infinity';
                },
                revive: function (u) {
                  return Number.NEGATIVE_INFINITY;
                },
              },
            },
          ],
          U = {
            date: {
              test: function (u) {
                return H.toStringTag(u) === 'Date';
              },
              replace: function (u) {
                var p = u.getTime();
                return Number.isNaN(p) ? 'NaN' : p;
              },
              revive: function (u) {
                return u === 'NaN' ? new Date(Number.NaN) : new Date(u);
              },
            },
          },
          de = {
            regexp: {
              test: function (u) {
                return H.toStringTag(u) === 'RegExp';
              },
              replace: function (u) {
                return {
                  source: u.source,
                  flags:
                    (u.global ? 'g' : '') +
                    (u.ignoreCase ? 'i' : '') +
                    (u.multiline ? 'm' : '') +
                    (u.sticky ? 'y' : '') +
                    (u.unicode ? 'u' : ''),
                };
              },
              revive: function (u) {
                var p = u.source,
                  _ = u.flags;
                return new RegExp(p, _);
              },
            },
          },
          me = {
            map: {
              test: function (u) {
                return H.toStringTag(u) === 'Map';
              },
              replace: function (u) {
                return c(u.entries());
              },
              revive: function (u) {
                return new Map(u);
              },
            },
          },
          fe = {
            set: {
              test: function (u) {
                return H.toStringTag(u) === 'Set';
              },
              replace: function (u) {
                return c(u.values());
              },
              revive: function (u) {
                return new Set(u);
              },
            },
          },
          G = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          qe = new Uint8Array(256),
          Qe = 0;
        Qe < G.length;
        Qe++
      )
        qe[G.charCodeAt(Qe)] = Qe;
      var tt = function (u, p, _) {
          _ == null && (_ = u.byteLength);
          for (var O = new Uint8Array(u, p || 0, _), L = O.length, F = '', J = 0; J < L; J += 3)
            (F += G[O[J] >> 2]),
              (F += G[((3 & O[J]) << 4) | (O[J + 1] >> 4)]),
              (F += G[((15 & O[J + 1]) << 2) | (O[J + 2] >> 6)]),
              (F += G[63 & O[J + 2]]);
          return (
            L % 3 == 2 ? (F = F.slice(0, -1) + '=') : L % 3 == 1 && (F = F.slice(0, -2) + '=='), F
          );
        },
        dt = function (u) {
          var p,
            _,
            O,
            L,
            F = u.length,
            J = 0.75 * u.length,
            M = 0;
          u[u.length - 1] === '=' && (J--, u[u.length - 2] === '=' && J--);
          for (var ee = new ArrayBuffer(J), ce = new Uint8Array(ee), ue = 0; ue < F; ue += 4)
            (p = qe[u.charCodeAt(ue)]),
              (_ = qe[u.charCodeAt(ue + 1)]),
              (O = qe[u.charCodeAt(ue + 2)]),
              (L = qe[u.charCodeAt(ue + 3)]),
              (ce[M++] = (p << 2) | (_ >> 4)),
              (ce[M++] = ((15 & _) << 4) | (O >> 2)),
              (ce[M++] = ((3 & O) << 6) | (63 & L));
          return ee;
        },
        ht = {
          arraybuffer: {
            test: function (u) {
              return H.toStringTag(u) === 'ArrayBuffer';
            },
            replace: function (u, p) {
              p.buffers || (p.buffers = []);
              var _ = p.buffers.indexOf(u);
              return _ > -1 ? { index: _ } : (p.buffers.push(u), tt(u));
            },
            revive: function (u, p) {
              if ((p.buffers || (p.buffers = []), n(u) === 'object')) return p.buffers[u.index];
              var _ = dt(u);
              return p.buffers.push(_), _;
            },
          },
        },
        Et = typeof self > 'u' ? Bi : self,
        nt = {};
      [
        'Int8Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Int16Array',
        'Uint16Array',
        'Int32Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array',
      ].forEach(function (y) {
        var u = y,
          p = Et[u];
        p &&
          (nt[y.toLowerCase()] = {
            test: function (O) {
              return H.toStringTag(O) === u;
            },
            replace: function (O, L) {
              var F = O.buffer,
                J = O.byteOffset,
                M = O.length;
              L.buffers || (L.buffers = []);
              var ee = L.buffers.indexOf(F);
              return ee > -1
                ? { index: ee, byteOffset: J, length: M }
                : (L.buffers.push(F), { encoded: tt(F), byteOffset: J, length: M });
            },
            revive: function (O, L) {
              L.buffers || (L.buffers = []);
              var F,
                J = O.byteOffset,
                M = O.length,
                ee = O.encoded,
                ce = O.index;
              return (
                'index' in O ? (F = L.buffers[ce]) : ((F = dt(ee)), L.buffers.push(F)),
                new p(F, J, M)
              );
            },
          });
      });
      var pt = {
          dataview: {
            test: function (u) {
              return H.toStringTag(u) === 'DataView';
            },
            replace: function (u, p) {
              var _ = u.buffer,
                O = u.byteOffset,
                L = u.byteLength;
              p.buffers || (p.buffers = []);
              var F = p.buffers.indexOf(_);
              return F > -1
                ? { index: F, byteOffset: O, byteLength: L }
                : (p.buffers.push(_), { encoded: tt(_), byteOffset: O, byteLength: L });
            },
            revive: function (u, p) {
              p.buffers || (p.buffers = []);
              var _,
                O = u.byteOffset,
                L = u.byteLength,
                F = u.encoded,
                J = u.index;
              return (
                'index' in u ? (_ = p.buffers[J]) : ((_ = dt(F)), p.buffers.push(_)),
                new DataView(_, O, L)
              );
            },
          },
        },
        Ie = {
          IntlCollator: {
            test: function (u) {
              return H.hasConstructorOf(u, Intl.Collator);
            },
            replace: function (u) {
              return u.resolvedOptions();
            },
            revive: function (u) {
              return new Intl.Collator(u.locale, u);
            },
          },
          IntlDateTimeFormat: {
            test: function (u) {
              return H.hasConstructorOf(u, Intl.DateTimeFormat);
            },
            replace: function (u) {
              return u.resolvedOptions();
            },
            revive: function (u) {
              return new Intl.DateTimeFormat(u.locale, u);
            },
          },
          IntlNumberFormat: {
            test: function (u) {
              return H.hasConstructorOf(u, Intl.NumberFormat);
            },
            replace: function (u) {
              return u.resolvedOptions();
            },
            revive: function (u) {
              return new Intl.NumberFormat(u.locale, u);
            },
          },
        };
      function we(y) {
        for (var u = new Uint8Array(y.length), p = 0; p < y.length; p++) u[p] = y.charCodeAt(p);
        return u.buffer;
      }
      var ge = {
          file: {
            test: function (u) {
              return H.toStringTag(u) === 'File';
            },
            replace: function (u) {
              var p = new XMLHttpRequest();
              if (
                (p.overrideMimeType('text/plain; charset=x-user-defined'),
                p.open('GET', URL.createObjectURL(u), !1),
                p.send(),
                p.status !== 200 && p.status !== 0)
              )
                throw new Error('Bad File access: ' + p.status);
              return {
                type: u.type,
                stringContents: p.responseText,
                name: u.name,
                lastModified: u.lastModified,
              };
            },
            revive: function (u) {
              var p = u.name,
                _ = u.type,
                O = u.stringContents,
                L = u.lastModified;
              return new File([we(O)], p, { type: _, lastModified: L });
            },
            replaceAsync: function (u) {
              return new H.Promise(function (p, _) {
                var O = new FileReader();
                O.addEventListener('load', function () {
                  p({
                    type: u.type,
                    stringContents: O.result,
                    name: u.name,
                    lastModified: u.lastModified,
                  });
                }),
                  O.addEventListener('error', function () {
                    _(O.error);
                  }),
                  O.readAsBinaryString(u);
              });
            },
          },
        },
        _e = {
          bigint: {
            test: function (u) {
              return typeof u == 'bigint';
            },
            replace: function (u) {
              return String(u);
            },
            revive: function (u) {
              return BigInt(u);
            },
          },
        },
        Be = {
          bigintObject: {
            test: function (u) {
              return n(u) === 'object' && H.hasConstructorOf(u, BigInt);
            },
            replace: function (u) {
              return String(u);
            },
            revive: function (u) {
              return new Object(BigInt(u));
            },
          },
        },
        z = {
          cryptokey: {
            test: function (u) {
              return H.toStringTag(u) === 'CryptoKey' && u.extractable;
            },
            replaceAsync: function (u) {
              return new H.Promise(function (p, _) {
                crypto.subtle
                  .exportKey('jwk', u)
                  .catch(function (O) {
                    _(O);
                  })
                  .then(function (O) {
                    p({ jwk: O, algorithm: u.algorithm, usages: u.usages });
                  });
              });
            },
            revive: function (u) {
              var p = u.jwk,
                _ = u.algorithm,
                O = u.usages;
              return crypto.subtle.importKey('jwk', p, _, !0, O);
            },
          },
        };
      return [
        Me,
        j,
        N,
        D,
        R,
        U,
        de,
        {
          imagedata: {
            test: function (u) {
              return H.toStringTag(u) === 'ImageData';
            },
            replace: function (u) {
              return { array: c(u.data), width: u.width, height: u.height };
            },
            revive: function (u) {
              return new ImageData(new Uint8ClampedArray(u.array), u.width, u.height);
            },
          },
        },
        {
          imagebitmap: {
            test: function (u) {
              return (
                H.toStringTag(u) === 'ImageBitmap' ||
                (u && u.dataset && u.dataset.toStringTag === 'ImageBitmap')
              );
            },
            replace: function (u) {
              var p = document.createElement('canvas');
              return p.getContext('2d').drawImage(u, 0, 0), p.toDataURL();
            },
            revive: function (u) {
              var p = document.createElement('canvas'),
                _ = p.getContext('2d'),
                O = document.createElement('img');
              return (
                O.addEventListener('load', function () {
                  _.drawImage(O, 0, 0);
                }),
                (O.src = u),
                p
              );
            },
            reviveAsync: function (u) {
              var p = document.createElement('canvas'),
                _ = p.getContext('2d'),
                O = document.createElement('img');
              return (
                O.addEventListener('load', function () {
                  _.drawImage(O, 0, 0);
                }),
                (O.src = u),
                createImageBitmap(p)
              );
            },
          },
        },
        ge,
        {
          file: ge.file,
          filelist: {
            test: function (u) {
              return H.toStringTag(u) === 'FileList';
            },
            replace: function (u) {
              for (var p = [], _ = 0; _ < u.length; _++) p[_] = u.item(_);
              return p;
            },
            revive: function (u) {
              return new ((function () {
                function p() {
                  r(this, p), (this._files = arguments[0]), (this.length = this._files.length);
                }
                return (
                  (function (O, L, F) {
                    return L && i(O.prototype, L), F && i(O, F), O;
                  })(p, [
                    {
                      key: 'item',
                      value: function (O) {
                        return this._files[O];
                      },
                    },
                    {
                      key: Symbol.toStringTag,
                      get: function () {
                        return 'FileList';
                      },
                    },
                  ]),
                  p
                );
              })())(u);
            },
          },
        },
        {
          blob: {
            test: function (u) {
              return H.toStringTag(u) === 'Blob';
            },
            replace: function (u) {
              var p = new XMLHttpRequest();
              if (
                (p.overrideMimeType('text/plain; charset=x-user-defined'),
                p.open('GET', URL.createObjectURL(u), !1),
                p.send(),
                p.status !== 200 && p.status !== 0)
              )
                throw new Error('Bad Blob access: ' + p.status);
              return { type: u.type, stringContents: p.responseText };
            },
            revive: function (u) {
              var p = u.type,
                _ = u.stringContents;
              return new Blob([we(_)], { type: p });
            },
            replaceAsync: function (u) {
              return new H.Promise(function (p, _) {
                var O = new FileReader();
                O.addEventListener('load', function () {
                  p({ type: u.type, stringContents: O.result });
                }),
                  O.addEventListener('error', function () {
                    _(O.error);
                  }),
                  O.readAsBinaryString(u);
              });
            },
          },
        },
      ].concat(
        typeof Map == 'function' ? me : [],
        typeof Set == 'function' ? fe : [],
        typeof ArrayBuffer == 'function' ? ht : [],
        typeof Uint8Array == 'function' ? nt : [],
        typeof DataView == 'function' ? pt : [],
        typeof Intl < 'u' ? Ie : [],
        typeof crypto < 'u' ? z : [],
        typeof BigInt < 'u' ? [_e, Be] : [],
      );
    });
  }),
  pn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  In = new Uint8Array(256);
for (var mr = 0; mr < pn.length; mr++) In[pn.codePointAt(mr)] = mr;
var ji = function (t, n, r) {
    r == null && (r = t.byteLength);
    for (var i = new Uint8Array(t, n || 0, r), s = i.length, o = '', c = 0; c < s; c += 3)
      (o += pn[i[c] >> 2]),
        (o += pn[((i[c] & 3) << 4) | (i[c + 1] >> 4)]),
        (o += pn[((i[c + 1] & 15) << 2) | (i[c + 2] >> 6)]),
        (o += pn[i[c + 2] & 63]);
    return s % 3 === 2 ? (o = o.slice(0, -1) + '=') : s % 3 === 1 && (o = o.slice(0, -2) + '=='), o;
  },
  Lo = function (t) {
    var n = t.length,
      r = t.length * 0.75,
      i = 0,
      s,
      o,
      c,
      l;
    t[t.length - 1] === '=' && (r--, t[t.length - 2] === '=' && r--);
    for (var a = new ArrayBuffer(r), f = new Uint8Array(a), h = 0; h < n; h += 4)
      (s = In[t.codePointAt(h)]),
        (o = In[t.codePointAt(h + 1)]),
        (c = In[t.codePointAt(h + 2)]),
        (l = In[t.codePointAt(h + 3)]),
        (f[i++] = (s << 2) | (o >> 4)),
        (f[i++] = ((o & 15) << 4) | (c >> 2)),
        (f[i++] = ((c & 3) << 6) | (l & 63));
    return a;
  },
  Zc = typeof self > 'u' ? global : self,
  Ko = {};
[
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
].forEach(function (e) {
  var t = e,
    n = Zc[t];
  n &&
    (Ko[e.toLowerCase() + '2'] = {
      test: function (r) {
        return Vr.toStringTag(r) === t;
      },
      replace: function (r) {
        var i = r.buffer,
          s = r.byteOffset,
          o = r.length;
        return { buffer: i, byteOffset: s, length: o };
      },
      revive: function (r) {
        var i = r.buffer,
          s = r.byteOffset,
          o = r.length;
        return new n(i, s, o);
      },
    });
});
var eu = {
    arraybuffer: {
      test: function (e) {
        return Vr.toStringTag(e) === 'ArrayBuffer';
      },
      replace: function (e) {
        return ji(e, 0, e.byteLength);
      },
      revive: function (e) {
        var t = Lo(e);
        return t;
      },
    },
  },
  ft = new Vr().register(Qc),
  tu = 'FileReaderSync' in self,
  Lr = [],
  ri = 0;
ft.register([
  eu,
  Ko,
  {
    blob2: {
      test: function (e) {
        return Vr.toStringTag(e) === 'Blob';
      },
      replace: function (e) {
        if (e.isClosed) throw new Error('The Blob is closed');
        if (tu) {
          var t = $o(e, 'binary'),
            n = ji(t, 0, t.byteLength);
          return { type: e.type, data: n };
        } else {
          Lr.push(e);
          var r = { type: e.type, data: { start: ri, end: ri + e.size } };
          return (ri += e.size), r;
        }
      },
      finalize: function (e, t) {
        e.data = ji(t, 0, t.byteLength);
      },
      revive: function (e) {
        var t = e.type,
          n = e.data;
        return new Blob([Lo(n)], { type: t });
      },
    },
  },
]);
ft.mustFinalize = function () {
  return Lr.length > 0;
};
ft.finalize = function (e) {
  return Wt(void 0, void 0, void 0, function () {
    var t, n, r, i, s, o, c, l, a, f;
    return gt(this, function (h) {
      switch (h.label) {
        case 0:
          return [4, Ro(new Blob(Lr), 'binary')];
        case 1:
          if (((t = h.sent()), e)) {
            for (n = 0, r = e; n < r.length; n++)
              if (((i = r[n]), i.$types)) {
                (s = i.$types), (o = s.$), o && (s = s.$);
                for (c in s)
                  (l = s[c]),
                    (a = ft.types[l]),
                    a &&
                      a.finalize &&
                      ((f = Ne.getByKeyPath(i, o ? '$.' + c : c)),
                      a.finalize(f, t.slice(f.start, f.end)));
              }
          }
          return (Lr = []), [2];
      }
    });
  });
};
var nu = 2e3;
function Fo(e, t) {
  return Wt(this, void 0, void 0, function () {
    function n() {
      return Wt(this, void 0, void 0, function () {
        var a, f, h, m, g, w, b, S, E;
        return gt(this, function (A) {
          switch (A.label) {
            case 0:
              return [
                4,
                Promise.all(
                  e.tables.map(function (x) {
                    return x.count();
                  }),
                ),
              ];
            case 1:
              (a = A.sent()),
                a.forEach(function (x, B) {
                  return (i[B].rowCount = x);
                }),
                (l.totalRows = a.reduce(function (x, B) {
                  return x + B;
                })),
                (f = JSON.stringify(o, void 0, s ? 2 : void 0)),
                (h = f.lastIndexOf(']')),
                (m = f.substring(0, h)),
                r.push(m),
                (g = t.filter),
                (w = function (x) {
                  var B, k, I, C, $, v, d, P, T, Y, q, se;
                  return gt(this, function (re) {
                    switch (re.label) {
                      case 0:
                        (B = e.table(x)),
                          (k = B.schema.primKey),
                          (I = !!k.keyPath),
                          (C = t.numRowsPerChunk || nu),
                          ($ = I
                            ? { tableName: B.name, inbound: !0, rows: [] }
                            : { tableName: B.name, inbound: !1, rows: [] }),
                          (v = JSON.stringify($, void 0, s ? 2 : void 0)),
                          s &&
                            (v = v.split(`
`).join(`
    `)),
                          (d = v.lastIndexOf(']')),
                          r.push(v.substring(0, d)),
                          (P = null),
                          (T = 0),
                          (Y = !0),
                          (q = function () {
                            var ie, oe, ke, Ce, H, $e, Ue, et, H;
                            return gt(this, function (be) {
                              switch (be.label) {
                                case 0:
                                  return (
                                    c &&
                                      Ne.ignoreTransaction(function () {
                                        return c(l);
                                      }),
                                    (ie =
                                      P == null ? B.limit(C) : B.where(':id').above(P).limit(C)),
                                    [4, ie.toArray()]
                                  );
                                case 1:
                                  return (
                                    (oe = be.sent()),
                                    oe.length === 0
                                      ? [2, 'break']
                                      : (P != null &&
                                          T > 0 &&
                                          (r.push(','),
                                          s &&
                                            r.push(`
      `)),
                                        (Y = oe.length === C),
                                        I
                                          ? ((ke = g
                                              ? oe.filter(function (Me) {
                                                  return g(x, Me);
                                                })
                                              : oe),
                                            (Ce = ke.map(function (Me) {
                                              return ft.encapsulate(Me);
                                            })),
                                            ft.mustFinalize()
                                              ? [4, Ne.waitFor(ft.finalize(Ce))]
                                              : [3, 3])
                                          : [3, 4])
                                  );
                                case 2:
                                  be.sent(), (be.label = 3);
                                case 3:
                                  return (
                                    (H = JSON.stringify(Ce, void 0, s ? 2 : void 0)),
                                    s &&
                                      (H = H.split(`
`).join(`
      `)),
                                    r.push(new Blob([H.substring(1, H.length - 1)])),
                                    (T = ke.length),
                                    (P =
                                      oe.length > 0
                                        ? Ne.getByKeyPath(oe[oe.length - 1], k.keyPath)
                                        : null),
                                    [3, 8]
                                  );
                                case 4:
                                  return [4, ie.primaryKeys()];
                                case 5:
                                  return (
                                    ($e = be.sent()),
                                    (Ue = $e.map(function (Me, N) {
                                      return [Me, oe[N]];
                                    })),
                                    g &&
                                      (Ue = Ue.filter(function (Me) {
                                        var N = Me[0],
                                          j = Me[1];
                                        return g(x, j, N);
                                      })),
                                    (et = Ue.map(function (Me) {
                                      return ft.encapsulate(Me);
                                    })),
                                    ft.mustFinalize() ? [4, Ne.waitFor(ft.finalize(et))] : [3, 7]
                                  );
                                case 6:
                                  be.sent(), (be.label = 7);
                                case 7:
                                  (H = JSON.stringify(et, void 0, s ? 2 : void 0)),
                                    s &&
                                      (H = H.split(`
`).join(`
      `)),
                                    r.push(new Blob([H.substring(1, H.length - 1)])),
                                    (T = Ue.length),
                                    (P = $e.length > 0 ? $e[$e.length - 1] : null),
                                    (be.label = 8);
                                case 8:
                                  return (l.completedRows += oe.length), [2];
                              }
                            });
                          }),
                          (re.label = 1);
                      case 1:
                        return Y ? [5, q()] : [3, 3];
                      case 2:
                        return (se = re.sent()), se === 'break' ? [3, 3] : [3, 1];
                      case 3:
                        return (
                          r.push(v.substr(d)),
                          (l.completedTables += 1),
                          l.completedTables < l.totalTables && r.push(','),
                          [2]
                        );
                    }
                  });
                }),
                (b = 0),
                (S = i),
                (A.label = 2);
            case 2:
              return b < S.length ? ((E = S[b].name), [5, w(E)]) : [3, 5];
            case 3:
              A.sent(), (A.label = 4);
            case 4:
              return b++, [3, 2];
            case 5:
              return (
                r.push(f.substr(h)),
                (l.done = !0),
                c &&
                  Ne.ignoreTransaction(function () {
                    return c(l);
                  }),
                [2]
              );
          }
        });
      });
    }
    var r, i, s, o, c, l;
    return gt(this, function (a) {
      switch (a.label) {
        case 0:
          (t = t || {}),
            (r = []),
            (i = e.tables.map(function (f) {
              return { name: f.name, schema: Gc(f), rowCount: 0 };
            })),
            (s = t.prettyJson),
            (o = {
              formatName: 'dexie',
              formatVersion: 1,
              data: { databaseName: e.name, databaseVersion: e.verno, tables: i, data: [] },
            }),
            (c = t.progressCallback),
            (l = {
              done: !1,
              completedRows: 0,
              completedTables: 0,
              totalRows: NaN,
              totalTables: e.tables.length,
            }),
            (a.label = 1);
        case 1:
          return a.trys.push([1, , 6, 7]), t.noTransaction ? [4, n()] : [3, 3];
        case 2:
          return a.sent(), [3, 5];
        case 3:
          return [4, e.transaction('r', e.tables, n)];
        case 4:
          a.sent(), (a.label = 5);
        case 5:
          return [3, 7];
        case 6:
          return ft.finalize(), [7];
        case 7:
          return [2, new Blob(r, { type: 'text/json' })];
      }
    });
  });
}
var ru = 1,
  iu = { Stream: function () {} },
  su = es(function (e, t) {
    (function (n) {
      var r = typeof process == 'object' && process.env ? process.env : self;
      (n.parser = function (v) {
        return new g(v);
      }),
        (n.CParser = g),
        (n.CStream = b),
        (n.createStream = w),
        (n.MAX_BUFFER_LENGTH = 10 * 1024 * 1024),
        (n.DEBUG = r.CDEBUG === 'debug'),
        (n.INFO = r.CDEBUG === 'debug' || r.CDEBUG === 'info'),
        (n.EVENTS = [
          'value',
          'string',
          'key',
          'openobject',
          'closeobject',
          'openarray',
          'closearray',
          'error',
          'end',
          'ready',
        ]);
      var i = { textNode: void 0, numberNode: '' },
        s = n.EVENTS.filter(function (v) {
          return v !== 'error' && v !== 'end';
        }),
        o = 0,
        c;
      n.STATE = {
        BEGIN: o++,
        VALUE: o++,
        OPEN_OBJECT: o++,
        CLOSE_OBJECT: o++,
        OPEN_ARRAY: o++,
        CLOSE_ARRAY: o++,
        TEXT_ESCAPE: o++,
        STRING: o++,
        BACKSLASH: o++,
        END: o++,
        OPEN_KEY: o++,
        CLOSE_KEY: o++,
        TRUE: o++,
        TRUE2: o++,
        TRUE3: o++,
        FALSE: o++,
        FALSE2: o++,
        FALSE3: o++,
        FALSE4: o++,
        NULL: o++,
        NULL2: o++,
        NULL3: o++,
        NUMBER_DECIMAL_POINT: o++,
        NUMBER_DIGIT: o++,
      };
      for (var l in n.STATE) n.STATE[n.STATE[l]] = l;
      o = n.STATE;
      const a = {
        tab: 9,
        lineFeed: 10,
        carriageReturn: 13,
        space: 32,
        doubleQuote: 34,
        plus: 43,
        comma: 44,
        minus: 45,
        period: 46,
        _0: 48,
        _9: 57,
        colon: 58,
        E: 69,
        openBracket: 91,
        backslash: 92,
        closeBracket: 93,
        a: 97,
        b: 98,
        e: 101,
        f: 102,
        l: 108,
        n: 110,
        r: 114,
        s: 115,
        t: 116,
        u: 117,
        openBrace: 123,
        closeBrace: 125,
      };
      Object.create ||
        (Object.create = function (v) {
          function d() {
            this.__proto__ = v;
          }
          return (d.prototype = v), new d();
        }),
        Object.getPrototypeOf ||
          (Object.getPrototypeOf = function (v) {
            return v.__proto__;
          }),
        Object.keys ||
          (Object.keys = function (v) {
            var d = [];
            for (var P in v) v.hasOwnProperty(P) && d.push(P);
            return d;
          });
      function f(v) {
        var d = Math.max(n.MAX_BUFFER_LENGTH, 10),
          P = 0;
        for (var T in i) {
          var Y = v[T] === void 0 ? 0 : v[T].length;
          if (Y > d)
            switch (T) {
              case 'text':
                closeText(v);
                break;
              default:
                k(v, 'Max buffer length exceeded: ' + T);
            }
          P = Math.max(P, Y);
        }
        v.bufferCheckPosition = n.MAX_BUFFER_LENGTH - P + v.position;
      }
      function h(v) {
        for (var d in i) v[d] = i[d];
      }
      var m = /[\\"\n]/g;
      function g(v) {
        if (!(this instanceof g)) return new g(v);
        var d = this;
        h(d),
          (d.bufferCheckPosition = n.MAX_BUFFER_LENGTH),
          (d.q = d.c = d.p = ''),
          (d.opt = v || {}),
          (d.closed = d.closedRoot = d.sawRoot = !1),
          (d.tag = d.error = null),
          (d.state = o.BEGIN),
          (d.stack = new Array()),
          (d.position = d.column = 0),
          (d.line = 1),
          (d.slashed = !1),
          (d.unicodeI = 0),
          (d.unicodeS = null),
          (d.depth = 0),
          S(d, 'onready');
      }
      g.prototype = {
        end: function () {
          I(this);
        },
        write: $,
        resume: function () {
          return (this.error = null), this;
        },
        close: function () {
          return this.write(null);
        },
      };
      try {
        c = iu.Stream;
      } catch {
        c = function () {};
      }
      function w(v) {
        return new b(v);
      }
      function b(v) {
        if (!(this instanceof b)) return new b(v);
        (this._parser = new g(v)),
          (this.writable = !0),
          (this.readable = !0),
          (this.bytes_remaining = 0),
          (this.bytes_in_sequence = 0),
          (this.temp_buffs = { 2: new Buffer(2), 3: new Buffer(3), 4: new Buffer(4) }),
          (this.string = '');
        var d = this;
        c.apply(d),
          (this._parser.onend = function () {
            d.emit('end');
          }),
          (this._parser.onerror = function (P) {
            d.emit('error', P), (d._parser.error = null);
          }),
          s.forEach(function (P) {
            Object.defineProperty(d, 'on' + P, {
              get: function () {
                return d._parser['on' + P];
              },
              set: function (T) {
                if (!T) return d.removeAllListeners(P), (d._parser['on' + P] = T), T;
                d.on(P, T);
              },
              enumerable: !0,
              configurable: !1,
            });
          });
      }
      (b.prototype = Object.create(c.prototype, { constructor: { value: b } })),
        (b.prototype.write = function (v) {
          v = new Buffer(v);
          for (var d = 0; d < v.length; d++) {
            var P = v[d];
            if (this.bytes_remaining > 0) {
              for (var T = 0; T < this.bytes_remaining; T++)
                this.temp_buffs[this.bytes_in_sequence][
                  this.bytes_in_sequence - this.bytes_remaining + T
                ] = v[T];
              (this.string = this.temp_buffs[this.bytes_in_sequence].toString()),
                (this.bytes_in_sequence = this.bytes_remaining = 0),
                (d = d + T - 1),
                this._parser.write(this.string),
                this.emit('data', this.string);
              continue;
            }
            if (this.bytes_remaining === 0 && P >= 128)
              if (
                (P >= 194 && P <= 223 && (this.bytes_in_sequence = 2),
                P >= 224 && P <= 239 && (this.bytes_in_sequence = 3),
                P >= 240 && P <= 244 && (this.bytes_in_sequence = 4),
                this.bytes_in_sequence + d > v.length)
              ) {
                for (var Y = 0; Y <= v.length - 1 - d; Y++)
                  this.temp_buffs[this.bytes_in_sequence][Y] = v[d + Y];
                return (this.bytes_remaining = d + this.bytes_in_sequence - v.length), !0;
              } else {
                (this.string = v.slice(d, d + this.bytes_in_sequence).toString()),
                  (d = d + this.bytes_in_sequence - 1),
                  this._parser.write(this.string),
                  this.emit('data', this.string);
                continue;
              }
            for (var q = d; q < v.length && !(v[q] >= 128); q++);
            (this.string = v.slice(d, q).toString()),
              this._parser.write(this.string),
              this.emit('data', this.string),
              (d = q - 1);
          }
        }),
        (b.prototype.end = function (v) {
          return v && v.length && this._parser.write(v.toString()), this._parser.end(), !0;
        }),
        (b.prototype.on = function (v, d) {
          var P = this;
          return (
            !P._parser['on' + v] &&
              s.indexOf(v) !== -1 &&
              (P._parser['on' + v] = function () {
                var T = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                T.splice(0, 0, v), P.emit.apply(P, T);
              }),
            c.prototype.on.call(P, v, d)
          );
        }),
        (b.prototype.destroy = function () {
          h(this._parser), this.emit('close');
        });
      function S(v, d, P) {
        n.INFO && console.log('-- emit', d, P), v[d] && v[d](P);
      }
      function E(v, d, P) {
        A(v), S(v, d, P);
      }
      function A(v, d) {
        (v.textNode = B(v.opt, v.textNode)),
          v.textNode !== void 0 && S(v, d || 'onvalue', v.textNode),
          (v.textNode = void 0);
      }
      function x(v) {
        v.numberNode && S(v, 'onvalue', parseFloat(v.numberNode)), (v.numberNode = '');
      }
      function B(v, d) {
        return (
          d === void 0 || (v.trim && (d = d.trim()), v.normalize && (d = d.replace(/\s+/g, ' '))), d
        );
      }
      function k(v, d) {
        return (
          A(v),
          (d +=
            `
Line: ` +
            v.line +
            `
Column: ` +
            v.column +
            `
Char: ` +
            v.c),
          (d = new Error(d)),
          (v.error = d),
          S(v, 'onerror', d),
          v
        );
      }
      function I(v) {
        return (
          (v.state !== o.VALUE || v.depth !== 0) && k(v, 'Unexpected end'),
          A(v),
          (v.c = ''),
          (v.closed = !0),
          S(v, 'onend'),
          g.call(v, v.opt),
          v
        );
      }
      function C(v) {
        return v === a.carriageReturn || v === a.lineFeed || v === a.space || v === a.tab;
      }
      function $(v) {
        var d = this;
        if (this.error) throw this.error;
        if (d.closed) return k(d, 'Cannot write after close. Assign an onready handler.');
        if (v === null) return I(d);
        var P = 0,
          T = v.charCodeAt(0),
          Y = d.p;
        for (
          n.DEBUG && console.log('write -> [' + v + ']');
          T && ((Y = T), (d.c = T = v.charCodeAt(P++)), Y !== T ? (d.p = Y) : (Y = d.p), !!T);

        )
          switch (
            (n.DEBUG && console.log(P, T, n.STATE[d.state]),
            d.position++,
            T === a.lineFeed ? (d.line++, (d.column = 0)) : d.column++,
            d.state)
          ) {
            case o.BEGIN:
              T === a.openBrace
                ? (d.state = o.OPEN_OBJECT)
                : T === a.openBracket
                ? (d.state = o.OPEN_ARRAY)
                : C(T) || k(d, 'Non-whitespace before {[.');
              continue;
            case o.OPEN_KEY:
            case o.OPEN_OBJECT:
              if (C(T)) continue;
              if (d.state === o.OPEN_KEY) d.stack.push(o.CLOSE_KEY);
              else if (T === a.closeBrace) {
                S(d, 'onopenobject'),
                  this.depth++,
                  S(d, 'oncloseobject'),
                  this.depth--,
                  (d.state = d.stack.pop() || o.VALUE);
                continue;
              } else d.stack.push(o.CLOSE_OBJECT);
              T === a.doubleQuote
                ? (d.state = o.STRING)
                : k(d, 'Malformed object key should start with "');
              continue;
            case o.CLOSE_KEY:
            case o.CLOSE_OBJECT:
              if (C(T)) continue;
              d.state,
                o.CLOSE_KEY,
                T === a.colon
                  ? (d.state === o.CLOSE_OBJECT
                      ? (d.stack.push(o.CLOSE_OBJECT), A(d, 'onopenobject'), this.depth++)
                      : A(d, 'onkey'),
                    (d.state = o.VALUE))
                  : T === a.closeBrace
                  ? (E(d, 'oncloseobject'), this.depth--, (d.state = d.stack.pop() || o.VALUE))
                  : T === a.comma
                  ? (d.state === o.CLOSE_OBJECT && d.stack.push(o.CLOSE_OBJECT),
                    A(d),
                    (d.state = o.OPEN_KEY))
                  : k(d, 'Bad object');
              continue;
            case o.OPEN_ARRAY:
            case o.VALUE:
              if (C(T)) continue;
              if (d.state === o.OPEN_ARRAY)
                if (
                  (S(d, 'onopenarray'), this.depth++, (d.state = o.VALUE), T === a.closeBracket)
                ) {
                  S(d, 'onclosearray'), this.depth--, (d.state = d.stack.pop() || o.VALUE);
                  continue;
                } else d.stack.push(o.CLOSE_ARRAY);
              T === a.doubleQuote
                ? (d.state = o.STRING)
                : T === a.openBrace
                ? (d.state = o.OPEN_OBJECT)
                : T === a.openBracket
                ? (d.state = o.OPEN_ARRAY)
                : T === a.t
                ? (d.state = o.TRUE)
                : T === a.f
                ? (d.state = o.FALSE)
                : T === a.n
                ? (d.state = o.NULL)
                : T === a.minus
                ? (d.numberNode += '-')
                : a._0 <= T && T <= a._9
                ? ((d.numberNode += String.fromCharCode(T)), (d.state = o.NUMBER_DIGIT))
                : k(d, 'Bad value');
              continue;
            case o.CLOSE_ARRAY:
              if (T === a.comma) d.stack.push(o.CLOSE_ARRAY), A(d, 'onvalue'), (d.state = o.VALUE);
              else if (T === a.closeBracket)
                E(d, 'onclosearray'), this.depth--, (d.state = d.stack.pop() || o.VALUE);
              else {
                if (C(T)) continue;
                k(d, 'Bad array');
              }
              continue;
            case o.STRING:
              d.textNode === void 0 && (d.textNode = '');
              var q = P - 1,
                se = d.slashed,
                re = d.unicodeI;
              e: for (;;) {
                for (n.DEBUG && console.log(P, T, n.STATE[d.state], se); re > 0; )
                  if (
                    ((d.unicodeS += String.fromCharCode(T)),
                    (T = v.charCodeAt(P++)),
                    d.position++,
                    re === 4
                      ? ((d.textNode += String.fromCharCode(parseInt(d.unicodeS, 16))),
                        (re = 0),
                        (q = P - 1))
                      : re++,
                    !T)
                  )
                    break e;
                if (T === a.doubleQuote && !se) {
                  (d.state = d.stack.pop() || o.VALUE),
                    (d.textNode += v.substring(q, P - 1)),
                    (d.position += P - 1 - q);
                  break;
                }
                if (
                  T === a.backslash &&
                  !se &&
                  ((se = !0),
                  (d.textNode += v.substring(q, P - 1)),
                  (d.position += P - 1 - q),
                  (T = v.charCodeAt(P++)),
                  d.position++,
                  !T)
                )
                  break;
                if (se) {
                  if (
                    ((se = !1),
                    T === a.n
                      ? (d.textNode += `
`)
                      : T === a.r
                      ? (d.textNode += '\r')
                      : T === a.t
                      ? (d.textNode += '	')
                      : T === a.f
                      ? (d.textNode += '\f')
                      : T === a.b
                      ? (d.textNode += '\b')
                      : T === a.u
                      ? ((re = 1), (d.unicodeS = ''))
                      : (d.textNode += String.fromCharCode(T)),
                    (T = v.charCodeAt(P++)),
                    d.position++,
                    (q = P - 1),
                    T)
                  )
                    continue;
                  break;
                }
                m.lastIndex = P;
                var ie = m.exec(v);
                if (ie === null) {
                  (P = v.length + 1),
                    (d.textNode += v.substring(q, P - 1)),
                    (d.position += P - 1 - q);
                  break;
                }
                if (((P = ie.index + 1), (T = v.charCodeAt(ie.index)), !T)) {
                  (d.textNode += v.substring(q, P - 1)), (d.position += P - 1 - q);
                  break;
                }
              }
              (d.slashed = se), (d.unicodeI = re);
              continue;
            case o.TRUE:
              T === a.r ? (d.state = o.TRUE2) : k(d, 'Invalid true started with t' + T);
              continue;
            case o.TRUE2:
              T === a.u ? (d.state = o.TRUE3) : k(d, 'Invalid true started with tr' + T);
              continue;
            case o.TRUE3:
              T === a.e
                ? (S(d, 'onvalue', !0), (d.state = d.stack.pop() || o.VALUE))
                : k(d, 'Invalid true started with tru' + T);
              continue;
            case o.FALSE:
              T === a.a ? (d.state = o.FALSE2) : k(d, 'Invalid false started with f' + T);
              continue;
            case o.FALSE2:
              T === a.l ? (d.state = o.FALSE3) : k(d, 'Invalid false started with fa' + T);
              continue;
            case o.FALSE3:
              T === a.s ? (d.state = o.FALSE4) : k(d, 'Invalid false started with fal' + T);
              continue;
            case o.FALSE4:
              T === a.e
                ? (S(d, 'onvalue', !1), (d.state = d.stack.pop() || o.VALUE))
                : k(d, 'Invalid false started with fals' + T);
              continue;
            case o.NULL:
              T === a.u ? (d.state = o.NULL2) : k(d, 'Invalid null started with n' + T);
              continue;
            case o.NULL2:
              T === a.l ? (d.state = o.NULL3) : k(d, 'Invalid null started with nu' + T);
              continue;
            case o.NULL3:
              T === a.l
                ? (S(d, 'onvalue', null), (d.state = d.stack.pop() || o.VALUE))
                : k(d, 'Invalid null started with nul' + T);
              continue;
            case o.NUMBER_DECIMAL_POINT:
              T === a.period
                ? ((d.numberNode += '.'), (d.state = o.NUMBER_DIGIT))
                : k(d, 'Leading zero not followed by .');
              continue;
            case o.NUMBER_DIGIT:
              a._0 <= T && T <= a._9
                ? (d.numberNode += String.fromCharCode(T))
                : T === a.period
                ? (d.numberNode.indexOf('.') !== -1 && k(d, 'Invalid number has two dots'),
                  (d.numberNode += '.'))
                : T === a.e || T === a.E
                ? ((d.numberNode.indexOf('e') !== -1 || d.numberNode.indexOf('E') !== -1) &&
                    k(d, 'Invalid number has two exponential'),
                  (d.numberNode += 'e'))
                : T === a.plus || T === a.minus
                ? (Y === a.e || Y === a.E || k(d, 'Invalid symbol in number'),
                  (d.numberNode += String.fromCharCode(T)))
                : (x(d), P--, (d.state = d.stack.pop() || o.VALUE));
              continue;
            default:
              k(d, 'Unknown state: ' + d.state);
          }
        return d.position >= d.bufferCheckPosition && f(d), d;
      }
    })(t);
  });
function ou(e) {
  var t = 0,
    n = au(!0),
    r = {
      pullAsync: function (i) {
        return Wt(this, void 0, void 0, function () {
          var s, o, c;
          return gt(this, function (l) {
            switch (l.label) {
              case 0:
                return (s = e.slice(t, t + i)), (t += i), [4, Ro(s, 'text')];
              case 1:
                return (o = l.sent()), (c = n.write(o)), (r.result = c || {}), [2, c];
            }
          });
        });
      },
      pullSync: function (i) {
        var s = e.slice(t, t + i);
        t += i;
        var o = $o(s, 'text'),
          c = n.write(o);
        return (r.result = c || {}), c;
      },
      done: function () {
        return n.done();
      },
      eof: function () {
        return t >= e.size;
      },
      result: {},
    };
  return r;
}
function au(e) {
  var t = su.parser(),
    n = 0,
    r,
    i = [],
    s,
    o,
    c = !1,
    l = !1;
  return (
    (t.onopenobject = function (a) {
      var f = {};
      (f.incomplete = !0),
        r || (r = f),
        s && (i.push([o, s, l]), e && (l ? s.push(f) : (s[o] = f))),
        (s = f),
        (o = a),
        (l = !1),
        ++n;
    }),
    (t.onkey = function (a) {
      return (o = a);
    }),
    (t.onvalue = function (a) {
      return l ? s.push(a) : (s[o] = a);
    }),
    (t.oncloseobject = function () {
      var a;
      if ((delete s.incomplete, (o = null), --n === 0)) c = !0;
      else {
        var f = s;
        (a = i.pop()), (o = a[0]), (s = a[1]), (l = a[2]), e || (l ? s.push(f) : (s[o] = f));
      }
    }),
    (t.onopenarray = function () {
      var a = [];
      (a.incomplete = !0),
        r || (r = a),
        s && (i.push([o, s, l]), e && (l ? s.push(a) : (s[o] = a))),
        (s = a),
        (l = !0),
        (o = null),
        ++n;
    }),
    (t.onclosearray = function () {
      var a;
      if ((delete s.incomplete, (o = null), --n === 0)) c = !0;
      else {
        var f = s;
        (a = i.pop()), (o = a[0]), (s = a[1]), (l = a[2]), e || (l ? s.push(f) : (s[o] = f));
      }
    }),
    {
      write: function (a) {
        return t.write(a), r;
      },
      done: function () {
        return c;
      },
    }
  );
}
var Uo = 1024;
function cu(e, t) {
  return Wt(this, void 0, void 0, function () {
    var n, r, i, s;
    return gt(this, function (o) {
      switch (o.label) {
        case 0:
          return (t = t || {}), (n = t.chunkSizeBytes || Uo * 1024), [4, qo(e, n)];
        case 1:
          return (
            (r = o.sent()),
            (i = r.result.data),
            (s = new Ne(i.databaseName)),
            s.version(i.databaseVersion).stores(Xc(i)),
            [4, Mo(s, r, t)]
          );
        case 2:
          return o.sent(), [2, s];
      }
    });
  });
}
function Mo(e, t, n) {
  return Wt(this, void 0, void 0, function () {
    function r() {
      return Wt(this, void 0, void 0, function () {
        var w, b, S, E, A;
        return gt(this, function (x) {
          switch (x.label) {
            case 0:
              (w = function (B) {
                var k, I, C, $, v, d, P, T, Y, q, se, re;
                return gt(this, function (ie) {
                  switch (ie.label) {
                    case 0:
                      if (!B.rows) return [2, 'break'];
                      if (!B.rows.incomplete && B.rows.length === 0) return [2, 'continue'];
                      if (
                        (a &&
                          Ne.ignoreTransaction(function () {
                            return a(f);
                          }),
                        (k = B.tableName),
                        (I = e.table(k)),
                        (C = l.tables.filter(function (oe) {
                          return oe.name === k;
                        })[0].schema),
                        !I)
                      ) {
                        if (n.acceptMissingTables) return [2, 'continue'];
                        throw new Error(
                          'Exported table '.concat(
                            B.tableName,
                            ' is missing in installed database',
                          ),
                        );
                      }
                      if (!n.acceptChangedPrimaryKey && C.split(',')[0] != I.schema.primKey.src)
                        throw new Error('Primary key differs for table '.concat(B.tableName, '. '));
                      for (
                        $ = B.rows, v = [], d = 0;
                        d < $.length && ((P = $[d]), !P.incomplete);
                        d++
                      )
                        v.push(ft.revive(P));
                      return (
                        (T = n.filter),
                        (Y = T
                          ? B.inbound
                            ? v.filter(function (oe) {
                                return T(k, oe);
                              })
                            : v.filter(function (oe) {
                                var ke = oe[0],
                                  Ce = oe[1];
                                return T(k, Ce, ke);
                              })
                          : v),
                        (q = B.inbound
                          ? [void 0, Y]
                          : [
                              Y.map(function (oe) {
                                return oe[0];
                              }),
                              v.map(function (oe) {
                                return oe[1];
                              }),
                            ]),
                        (se = q[0]),
                        (re = q[1]),
                        n.overwriteValues ? [4, I.bulkPut(re, se)] : [3, 2]
                      );
                    case 1:
                      return ie.sent(), [3, 4];
                    case 2:
                      return [4, I.bulkAdd(re, se)];
                    case 3:
                      ie.sent(), (ie.label = 4);
                    case 4:
                      return (
                        (f.completedRows += v.length),
                        v.incomplete || (f.completedTables += 1),
                        $.splice(0, v.length),
                        [2]
                      );
                  }
                });
              }),
                (b = 0),
                (S = l.data),
                (x.label = 1);
            case 1:
              return b < S.length ? ((E = S[b]), [5, w(E)]) : [3, 4];
            case 2:
              if (((A = x.sent()), A === 'break')) return [3, 4];
              x.label = 3;
            case 3:
              return b++, [3, 1];
            case 4:
              for (; l.data.length > 0 && l.data[0].rows && !l.data[0].rows.incomplete; )
                l.data.splice(0, 1);
              return !s.done() && !s.eof() ? (c ? (s.pullSync(i), [3, 7]) : [3, 5]) : [3, 8];
            case 5:
              return [4, Ne.waitFor(s.pullAsync(i))];
            case 6:
              x.sent(), (x.label = 7);
            case 7:
              return [3, 9];
            case 8:
              return [3, 10];
            case 9:
              return [3, 0];
            case 10:
              return [2];
          }
        });
      });
    }
    var i, s, o, c, l, a, f, h, m, g;
    return gt(this, function (w) {
      switch (w.label) {
        case 0:
          return (n = n || {}), (i = n.chunkSizeBytes || Uo * 1024), [4, qo(t, i)];
        case 1:
          if (
            ((s = w.sent()),
            (o = s.result),
            (c = 'FileReaderSync' in self),
            (l = o.data),
            !n.acceptNameDiff && e.name !== l.databaseName)
          )
            throw new Error(
              'Name differs. Current database name is '
                .concat(e.name, ' but export is ')
                .concat(l.databaseName),
            );
          if (!n.acceptVersionDiff && e.verno !== l.databaseVersion)
            throw new Error(
              'Database version differs. Current database is in version '
                .concat(e.verno, ' but export is ')
                .concat(l.databaseVersion),
            );
          if (
            ((a = n.progressCallback),
            (f = {
              done: !1,
              completedRows: 0,
              completedTables: 0,
              totalRows: l.tables.reduce(function (b, S) {
                return b + S.rowCount;
              }, 0),
              totalTables: l.tables.length,
            }),
            a &&
              Ne.ignoreTransaction(function () {
                return a(f);
              }),
            !n.clearTablesBeforeImport)
          )
            return [3, 5];
          (h = 0), (m = e.tables), (w.label = 2);
        case 2:
          return h < m.length ? ((g = m[h]), [4, g.clear()]) : [3, 5];
        case 3:
          w.sent(), (w.label = 4);
        case 4:
          return h++, [3, 2];
        case 5:
          return n.noTransaction ? [4, r()] : [3, 7];
        case 6:
          return w.sent(), [3, 9];
        case 7:
          return [4, e.transaction('rw', e.tables, r)];
        case 8:
          w.sent(), (w.label = 9);
        case 9:
          return (
            (f.done = !0),
            a &&
              Ne.ignoreTransaction(function () {
                return a(f);
              }),
            [2]
          );
      }
    });
  });
}
function qo(e, t) {
  return Wt(this, void 0, void 0, function () {
    var n, r;
    return gt(this, function (i) {
      switch (i.label) {
        case 0:
          (n = 'slice' in e ? ou(e) : e), (i.label = 1);
        case 1:
          return n.eof() ? [3, 3] : [4, n.pullAsync(t)];
        case 2:
          return i.sent(), n.result.data && n.result.data.data ? [3, 3] : [3, 1];
        case 3:
          if (((r = n.result), !r || r.formatName != 'dexie'))
            throw new Error('Given file is not a dexie export');
          if (r.formatVersion > ru)
            throw new Error('Format version '.concat(r.formatVersion, ' not supported'));
          if (!r.data) throw new Error('No data in export file');
          if (!r.data.databaseName) throw new Error('Missing databaseName in export file');
          if (!r.data.databaseVersion) throw new Error('Missing databaseVersion in export file');
          if (!r.data.tables) throw new Error('Missing tables in export file');
          return [2, n];
      }
    });
  });
}
Ne.prototype.export = function (e) {
  return Fo(this, e);
};
Ne.prototype.import = function (e, t) {
  return Mo(this, e, t);
};
Ne.import = function (e, t) {
  return cu(e, t);
};
class Wo extends Ne {
  constructor() {
    super('AppDB');
    De(this, 'dictionary');
    De(this, 'practiceSettings');
    De(this, 'statistic');
    De(this, 'appSettings');
    this.version(1).stores({
      dictionary: 'id',
      practiceSettings: '',
      statistic: 'year',
      appSettings: '',
    });
  }
  static recreateFromImport(n) {
    Ke = n;
  }
}
let Ke = new Wo();
const uu = (e) => Ke.dictionary.add({ ...e }),
  lu = (e) => Ke.dictionary.put(e),
  fu = (e) => Ke.dictionary.delete(e),
  du = () => Ke.dictionary.toArray(),
  hu = () => Ke.dictionary.clear(),
  ts = 1,
  pu = () => Ke.practiceSettings.get(ts),
  yu = (e) => Ke.practiceSettings.add({ ...e }, ts),
  mu = (e) => Ke.practiceSettings.update(ts, e),
  gu = (e) => Ke.statistic.put(e),
  vu = () => Ke.statistic.toArray(),
  bu = async (e) => Ke.statistic.add({ ...e }),
  wu = () => Ke.statistic.clear(),
  _u = async () => Fo(Ke),
  Su = async (e) => {
    await Ke.delete(), Wo.recreateFromImport(await Ne.import(e));
  },
  ns = 1,
  xu = () => Ke.appSettings.get(ns),
  Eu = (e) => Ke.appSettings.add({ ...e }, ns),
  Au = (e) => Ke.appSettings.update(ns, e),
  Ou = () => Ke.appSettings.clear(),
  ye = new Map();
ye.set('onAddWord', (...e) => Fe(uu, e));
ye.set('onEditWord', (...e) => Fe(lu, e));
ye.set('onDeleteWord', (...e) => Fe(fu, e));
ye.set('getDictionaryDataAsArray', (...e) => Fe(du, e));
ye.set('getPracticeData', (...e) => Fe(pu, e));
ye.set('getStatisticDataAsArray', (...e) => Fe(vu, e));
ye.set('onDictionaryClear', (...e) => Fe(hu, e));
ye.set('initStatisticData', (...e) => Fe(bu, e));
ye.set('onStatisticClear', (...e) => Fe(wu, e));
ye.set('initPracticeData', (...e) => Fe(yu, e));
ye.set('updatePracticeData', (...e) => Fe(mu, e));
ye.set('updateStatistic', (...e) => Fe(gu, e));
ye.set('exportAppDBData', (...e) => Fe(_u, e));
ye.set('importAppDBData', (...e) => Fe(Su, e));
ye.set('getAppSettings', (...e) => Fe(xu, e));
ye.set('initAppSettingsData', (...e) => Fe(Eu, e));
ye.set('updateAppSettingsData', (...e) => Fe(Au, e));
ye.set('onAppSettingsClear', (...e) => Fe(Ou, e));
const Tu = async () => {
  let [e, t, n, r] = await Promise.all([
    ye.get('getDictionaryDataAsArray')(),
    ye.get('getPracticeData')(),
    ye.get('getStatisticDataAsArray')(),
    ye.get('getAppSettings')(),
  ]);
  return (
    t === void 0 && ((t = rc()), ye.get('initPracticeData')(t)),
    n.length === 0 && ((n = ic()), ye.get('initStatisticData')(n[0])),
    r === void 0 && ((r = tc()), ye.get('initAppSettingsData')(r)),
    [e, t, n, r]
  );
};
class Vo {
  constructor(t) {
    De(this, 'value');
    De(this, 'subscriptions', []);
    this.value = t;
  }
  subscribe(t) {
    return t(this.value), this.subscriptions.push(t), () => this.unsubscribe(t);
  }
  update(t) {
    this.set(t(this.value));
  }
  set(t) {
    (this.value = t), this.broadcast();
  }
  get() {
    return this.value;
  }
  broadcast() {
    this.subscriptions.forEach((t) => t(this.value));
  }
  unsubscribe(t) {
    this.subscriptions = this.subscriptions.filter((n) => n !== t);
  }
}
const on = (e, t) => {
    const n = new Vo(e);
    return Object.assign(n, t), n;
  },
  Pu = on(),
  ku = (e, t) => {
    t.daySettings[e] = { enabled: !1, interval: '00:00', timeFrames: [] };
  },
  Cu = (e, t) => {
    jt.update((n) => ((n.daySettings[e].interval = t), n));
  },
  Nu = (e, t) => {
    jt.update((n) => ((n.daySettings[e].enabled = t), n));
  },
  Iu = (e) => {
    jt.update((t) => (ku(e, t), t));
  },
  Bu = (e) => {
    jt.update((t) => (delete t.daySettings[e], t));
  },
  ju = (e, t) => {
    jt.update((n) => ((n.daySettings[e].timeFrames = t), n));
  },
  Du = (e, t) => {
    jt.update((n) => {
      const { enabled: r, interval: i, timeFrames: s } = n.daySettings[t];
      return (
        (n.daySettings[e] = {
          enabled: r,
          interval: i,
          timeFrames: s.map(({ from: o, to: c }) => ({ from: o, to: c })),
        }),
        Pu.set(e),
        n
      );
    });
  },
  Ru = (e) => {
    jt.set(e);
  },
  $u = (e) => {
    jt = on(e, {
      updateSettingKeyIntervalProp: Cu,
      updateSettingKeyEnabledProp: Nu,
      addSettingKey: Iu,
      removeSettingKey: Bu,
      updateTimeFrames: ju,
      copySettingsForDay: Du,
      reInit: Ru,
    });
  };
let jt, Yo;
const Lu = (e) => {
    Yo = En(e);
  },
  Ku = on(),
  Fu = (e, t) => {
    t.daySettings[e] = { enabled: !1, interval: '00:00', timeFrames: [] };
  },
  Uu = (e, t) => {
    Dt.update((n) => ((n.daySettings[e].interval = t), n));
  },
  Mu = (e, t) => {
    Dt.update((n) => ((n.daySettings[e].enabled = t), n));
  },
  qu = (e) => {
    Dt.update((t) => (Fu(e, t), t));
  },
  Wu = (e) => {
    Dt.update((t) => (delete t.daySettings[e], t));
  },
  Vu = (e, t) => {
    Dt.update((n) => ((n.daySettings[e].timeFrames = t), n));
  },
  Yu = (e, t) => {
    Dt.update((n) => {
      const { enabled: r, interval: i, timeFrames: s } = n.daySettings[t];
      return (
        (n.daySettings[e] = {
          enabled: r,
          interval: i,
          timeFrames: s.map(({ from: o, to: c }) => ({ from: o, to: c })),
        }),
        Ku.set(e),
        n
      );
    });
  },
  zu = (e) => {
    Dt.set(e);
  },
  Ju = (e) => {
    Dt = on(e, {
      updateSettingKeyIntervalProp: Uu,
      updateSettingKeyEnabledProp: Mu,
      addSettingKey: qu,
      removeSettingKey: Wu,
      updateTimeFrames: Vu,
      copySettingsForDay: Yu,
      reInit: zu,
    });
  };
let Dt;
const Hu = (e) => {
    Tn.update((t) => ((t.practice.passive = { ...e }), t));
  },
  Gu = (e) => {
    Tn.update((t) => ((t.practice.active = { ...e }), t));
  },
  Xu = (e) => {
    Tn.update((t) => ({ ...t, basic: { ...e } }));
  },
  Qu = () => {
    Dt.subscribe(Hu), jt.subscribe(Gu), Yo.subscribe(Xu);
  };
let Tn;
const Zu = (e) => {
    Tn.value = e;
  },
  el = (e) => {
    (Tn = on(e, { reInit: Zu })), Qu();
  },
  tl = (e) => {
    ye.get('updateAppSettingsData')(e);
  },
  nl = () => {
    Tn.subscribe(tl);
  },
  rl = (e) => {
    rs = En({ ...e });
  };
let rs;
const il = (e) => {
    ye.get('updatePracticeData')(e);
  },
  sl = () => {
    rs.subscribe(il);
  };
class ol extends Vo {
  subscribe(t) {
    return this.subscriptions.push(t), () => this.unsubscribe(t);
  }
}
const is = (e, t) => {
    const n = new ol(e);
    return Object.assign(n, t), n;
  },
  Yr = is(),
  al = (e) => {
    ye.get('updateStatistic')(e);
  },
  cl = () => {
    Yr.subscribe(al);
  },
  Vt = is(),
  ul = { add: ye.get('onAddWord'), edit: ye.get('onEditWord'), delete: ye.get('onDeleteWord') },
  ll = ([e, t]) => {
    ul[e](t);
  },
  fl = () => {
    Vt.subscribe(ll);
  },
  dl = (e) => {
    const t = { ...e, learnSuccess: 0, practiceCount: 0, successfulPracticeCount: 0 };
    rr(t), Vt.set(['edit', t]);
  },
  rr = (e) => {
    Yt.update((t) => t.set(e.id, e));
  },
  ss = (e) => Yt.value.get(e),
  hl = (e) => {
    const n = {
      id: String(new Date().getTime()),
      learnSuccess: 0,
      practiceCount: 0,
      successfulPracticeCount: 0,
      ...e,
    };
    rr(n), Vt.set(['add', n]);
  },
  pl = (e, t) => {
    const { learnSuccess: n, practiceCount: r, successfulPracticeCount: i } = e,
      s = { id: e.id, learnSuccess: n, practiceCount: r, successfulPracticeCount: i, ...t };
    rr(s), Vt.set(['edit', s]);
  },
  yl = (e) => {
    Yt.update((t) => (t.delete(e), t)), Vt.set(['delete', e]);
  },
  zo = 2,
  ml = (e) => {
    const t = ss(e),
      n = t.practiceCount + 1,
      r = (t.successfulPracticeCount * 100) / n,
      i = Number(r.toFixed(zo)),
      s = { ...t, practiceCount: n, learnSuccess: i };
    rr(s), Vt.set(['edit', s]);
  },
  gl = (e) => {
    const t = ss(e),
      n = t.practiceCount + 1,
      r = t.successfulPracticeCount + 1,
      i = (r * 100) / n,
      s = Number(i.toFixed(zo)),
      o = { ...t, practiceCount: n, successfulPracticeCount: r, learnSuccess: s };
    rr(o), Vt.set(['edit', o]);
  },
  vl = () => {
    Yt.value.clear();
  },
  Hf = async () => {
    const e = await ye.get('getDictionaryDataAsArray')();
    Yt.value = Jo(e);
  },
  Jo = (e) => {
    const t = new Map();
    return (
      e.forEach(({ id: n, ...r }) => {
        t.set(n, { id: n, ...r });
      }),
      t
    );
  },
  bl = (e) => {
    Yt = on(Jo(e), {
      getById: ss,
      removeWord: yl,
      resetWordPractice: dl,
      editWord: pl,
      addWord: hl,
      onUnsuccessfulPractice: ml,
      onSuccessfulPractice: gl,
      clear: vl,
    });
  };
let Yt;
const wl = is();
let Ho;
const _l = ({ practiceTarget: e }) => {
    Ho = e;
  },
  Sl = (e) => {
    const t = {};
    return (
      ro.forEach((n) => {
        t[n] = new so();
      }),
      (t.year = e),
      t
    );
  },
  os = (e, t) => (e.has(t) ? e.get(t) : Sl(t)),
  as = () => new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }).split(' '),
  xl = ([e, t]) => {
    e in Cs && Cs[e](t);
  },
  El = () => {
    ir.update((e) => {
      const [t, n] = as(),
        r = os(e, n);
      return (
        (r[t].totalWordsAmount = Yt.value.size),
        (r[t].deletedWordsAmount += 1),
        e.set(n, r),
        Yr.set(r),
        e
      );
    });
  },
  Al = () => {
    ir.update((e) => {
      const [t, n] = as(),
        r = os(e, n);
      return (
        (r[t].totalWordsAmount = Yt.value.size),
        (r[t].addedWordsAmount += 1),
        e.set(n, r),
        Yr.set(r),
        e
      );
    });
  },
  Cs = { add: Al, delete: El },
  Ol = (e) => {
    ir.update((t) => {
      const [n, r] = as(),
        i = os(t, r);
      return (
        e === 'successful'
          ? (i[n].successfulPracticeCount += 1)
          : (i[n].unsuccessfulPracticeCount += 1),
        Ho === 'original'
          ? (i[n].wordOriginPracticeAmount += 1)
          : (i[n].wordTranslationPracticeAmount += 1),
        (i[n].wordTotalPracticeAmount += 1),
        (i[n].averagePracticeSuccess =
          Number((i[n].successfulPracticeCount / i[n].wordTotalPracticeAmount).toFixed(2)) * 100),
        t.set(r, i),
        Yr.set(i),
        t
      );
    });
  },
  Tl = () => {
    rs.subscribe(_l), Vt.subscribe(xl), wl.subscribe(Ol);
  };
let ir;
const Go = (e) => {
    const t = new Map();
    return (
      e.forEach((n) => {
        t.set(n.year, n);
      }),
      t
    );
  },
  Pl = (e) => {
    ir.value = Go(e);
  },
  kl = (e) => {
    (ir = on(Go(e), { reInit: Pl })), Tl();
  };
eo.set({ computePosition: va, autoUpdate: ga, offset: fa, shift: ha, flip: la, arrow: sa });
Tu().then(async ([e, t, n, r]) => {
  bl(e),
    rl(t),
    kl(n),
    Ju(r.practice.passive),
    $u(r.practice.active),
    Lu(r.basic),
    el(r),
    fl(),
    sl(),
    cl(),
    nl(),
    Ga();
  const i = (
    await ta(
      () => import('./App-aa0a8ea8.js'),
      ['assets/App-aa0a8ea8.js', 'assets/App-0daa165f.css'],
    )
  ).default;
  new i({ target: document.getElementById('app') });
});
export {
  rf as $,
  Kl as A,
  hf as B,
  yf as C,
  Sn as D,
  xf as E,
  Ve as F,
  Ri as G,
  mf as H,
  Js as I,
  Gl as J,
  of as K,
  Tf as L,
  Ll as M,
  nf as N,
  Zl as O,
  Vl as P,
  ff as Q,
  Ql as R,
  If as S,
  Of as T,
  Af as U,
  lf as V,
  uf as W,
  ms as X,
  sf as Y,
  Xl as Z,
  tf as _,
  Ta as a,
  zl as a0,
  ef as a1,
  Il as a2,
  Ml as a3,
  cf as a4,
  Cf as a5,
  Ka as a6,
  Pf as a7,
  Fa as a8,
  Nl as a9,
  Yo as aA,
  zf as aB,
  Jf as aC,
  ye as aD,
  ic as aE,
  tc as aF,
  Tn as aG,
  Dt as aH,
  jt as aI,
  Hf as aJ,
  qf as aK,
  Ef as aL,
  Mf as aM,
  La as aN,
  gf as aO,
  Fl as aP,
  Yf as aQ,
  jf as aR,
  Vf as aS,
  Wf as aT,
  Ku as aU,
  Pu as aV,
  Ff as aW,
  af as aa,
  Wl as ab,
  _f as ac,
  Sf as ad,
  to as ae,
  Ba as af,
  Rf as ag,
  Hl as ah,
  df as ai,
  kf as aj,
  vf as ak,
  Yt as al,
  Ul as am,
  Df as an,
  Bf as ao,
  Uf as ap,
  rs as aq,
  Kf as ar,
  $a as as,
  Lf as at,
  $f as au,
  Ms as av,
  wl as aw,
  za as ax,
  ir as ay,
  ro as az,
  Aa as b,
  Bl as c,
  jl as d,
  zs as e,
  Ra as f,
  Rl as g,
  Li as h,
  Nf as i,
  pf as j,
  ba as k,
  $l as l,
  Ur as m,
  ql as n,
  rn as o,
  Yl as p,
  Oa as q,
  Sa as r,
  wa as s,
  Zs as t,
  Dl as u,
  Jl as v,
  En as w,
  bf as x,
  wf as y,
  Bt as z,
};
