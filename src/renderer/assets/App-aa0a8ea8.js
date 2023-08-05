var Dd = Object.defineProperty;
var Cd = (n, t, e) =>
  t in n ? Dd(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e);
var it = (n, t, e) => (Cd(n, typeof t != 'symbol' ? t + '' : t, e), e);
import {
  w as ae,
  S as lt,
  i as at,
  s as rt,
  c as Kt,
  e as C,
  a as b,
  b as x,
  u as Gt,
  g as Zt,
  d as Jt,
  t as L,
  f as F,
  h as A,
  j as Ot,
  k as St,
  l as Rt,
  m as Td,
  n as _r,
  o as Oe,
  p as B,
  q as Vn,
  r as S,
  v as R,
  x as vt,
  y as wt,
  z as Pt,
  A as Zn,
  B as ke,
  C as gt,
  D as pt,
  E as ot,
  F as ct,
  G as Pd,
  H as ut,
  I as X,
  J as Fe,
  K as st,
  L as Jn,
  M as Ee,
  N as yr,
  O as Ie,
  P as oe,
  Q as ze,
  R as mt,
  T as Me,
  U as Ns,
  V as Vi,
  W as ji,
  X as dt,
  Y as xd,
  Z as Vo,
  _ as En,
  $ as mo,
  a0 as ee,
  a1 as Ds,
  a2 as Dt,
  a3 as Qn,
  a4 as jn,
  a5 as Z,
  a6 as J,
  a7 as Ad,
  a8 as Q,
  a9 as ln,
  aa as Ld,
  ab as Od,
  ac as $n,
  ad as Yi,
  ae as On,
  af as Fd,
  ag as Re,
  ah as Ae,
  ai as jo,
  aj as Ct,
  ak as Tt,
  al as re,
  am as Si,
  an as Ed,
  ao as wu,
  ap as kr,
  aq as fe,
  ar as Id,
  as as Vs,
  at as Rd,
  au as Bd,
  av as zd,
  aw as Cs,
  ax as Hd,
  ay as Ai,
  az as Wd,
  aA as Ts,
  aB as Nd,
  aC as Vd,
  aD as Dn,
  aE as jd,
  aF as Yd,
  aG as Ud,
  aH as Su,
  aI as Mu,
  aJ as qd,
  aK as po,
  aL as Xd,
  aM as bo,
  aN as Du,
  aO as Cu,
  aP as Yn,
  aQ as Kd,
  aR as Gd,
  aS as vr,
  aT as to,
  aU as Zd,
  aV as Jd,
  aW as wr,
} from './index-a94384c4.js';
function Qd() {
  const { subscribe: n, set: t, update: e } = ae({});
  return {
    subscribe: n,
    set: t,
    update: e,
    open: (i) => e(() => ({ open: !0, ...i })),
    close: () => e((i) => ((i.open = !1), i)),
  };
}
const qe = Qd();
function $d() {
  const { subscribe: n, set: t, update: e } = ae([]);
  return {
    subscribe: n,
    set: t,
    update: e,
    trigger: (i) => e((s) => (s.push(i), s)),
    close: () => e((i) => (i.length > 0 && i.shift(), i)),
    clear: () => t([]),
  };
}
const Wt = $d();
function Tu(n, t) {
  const e = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
  let i, s;
  function o(u) {
    u.shiftKey && u.code === 'Tab' && (u.preventDefault(), s.focus());
  }
  function r(u) {
    !u.shiftKey && u.code === 'Tab' && (u.preventDefault(), i.focus());
  }
  const l = (u) => {
    if (t === !1) return;
    const d = Array.from(n.querySelectorAll(e));
    d.length &&
      ((i = d[0]),
      (s = d[d.length - 1]),
      u || i.focus(),
      i.addEventListener('keydown', o),
      s.addEventListener('keydown', r));
  };
  l(!1);
  function a() {
    i && i.removeEventListener('keydown', o), s && s.removeEventListener('keydown', r);
  }
  const c = (u, d) => (u.length && (a(), l(!0)), d),
    f = new MutationObserver(c);
  return (
    f.observe(n, { childList: !0, subtree: !0 }),
    {
      update(u) {
        (t = u), u ? l(!1) : a();
      },
      destroy() {
        a(), f.disconnect();
      },
    }
  );
}
function th(n) {
  let t, e, i;
  const s = n[15].default,
    o = Kt(s, n, n[14], null);
  return {
    c() {
      (t = C('div')),
        o && o.c(),
        b(t, 'class', (e = 'accordion ' + n[0])),
        b(t, 'data-testid', 'accordion');
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, [l]) {
      o &&
        o.p &&
        (!i || l & 16384) &&
        Gt(o, s, r, r[14], i ? Jt(s, r[14], l, null) : Zt(r[14]), null),
        (!i || (l & 1 && e !== (e = 'accordion ' + r[0]))) && b(t, 'class', e);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
function eh(n, t, e) {
  let i,
    { $$slots: s = {}, $$scope: o } = t,
    { autocollapse: r = !1 } = t,
    { duration: l = 200 } = t,
    { width: a = 'w-full' } = t,
    { spacing: c = 'space-y-1' } = t,
    { disabled: f = !1 } = t,
    { padding: u = 'py-2 px-4' } = t,
    { hover: d = 'hover:bg-primary-hover-token' } = t,
    { rounded: h = 'rounded-container-token' } = t,
    { caretOpen: g = 'rotate-180' } = t,
    { caretClosed: m = '' } = t,
    { regionControl: p = '' } = t,
    { regionPanel: _ = 'space-y-4' } = t,
    { regionCaret: y = '' } = t;
  const v = ae(null);
  return (
    Ot('active', v),
    Ot('autocollapse', r),
    Ot('duration', l),
    Ot('disabled', f),
    Ot('padding', u),
    Ot('hover', d),
    Ot('rounded', h),
    Ot('caretOpen', g),
    Ot('caretClosed', m),
    Ot('regionControl', p),
    Ot('regionPanel', _),
    Ot('regionCaret', y),
    (n.$$set = (k) => {
      e(17, (t = St(St({}, t), Rt(k)))),
        'autocollapse' in k && e(1, (r = k.autocollapse)),
        'duration' in k && e(2, (l = k.duration)),
        'width' in k && e(3, (a = k.width)),
        'spacing' in k && e(4, (c = k.spacing)),
        'disabled' in k && e(5, (f = k.disabled)),
        'padding' in k && e(6, (u = k.padding)),
        'hover' in k && e(7, (d = k.hover)),
        'rounded' in k && e(8, (h = k.rounded)),
        'caretOpen' in k && e(9, (g = k.caretOpen)),
        'caretClosed' in k && e(10, (m = k.caretClosed)),
        'regionControl' in k && e(11, (p = k.regionControl)),
        'regionPanel' in k && e(12, (_ = k.regionPanel)),
        'regionCaret' in k && e(13, (y = k.regionCaret)),
        '$$scope' in k && e(14, (o = k.$$scope));
    }),
    (n.$$.update = () => {
      e(0, (i = `${a} ${c} ${t.class ?? ''}`));
    }),
    (t = Rt(t)),
    [i, r, l, a, c, f, u, d, h, g, m, p, _, y, o, s]
  );
}
class Pu extends lt {
  constructor(t) {
    super(),
      at(this, t, eh, th, rt, {
        autocollapse: 1,
        duration: 2,
        width: 3,
        spacing: 4,
        disabled: 5,
        padding: 6,
        hover: 7,
        rounded: 8,
        caretOpen: 9,
        caretClosed: 10,
        regionControl: 11,
        regionPanel: 12,
        regionCaret: 13,
      });
  }
}
function nh(n) {
  return n < 0.5 ? 4 * n * n * n : 0.5 * Math.pow(2 * n - 2, 3) + 1;
}
function ti(n) {
  const t = n - 1;
  return t * t * t + 1;
}
function ih(n, t) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
      t.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, i[s]) &&
        (e[i[s]] = n[i[s]]);
  return e;
}
function bt(n, { delay: t = 0, duration: e = 400, easing: i = Td } = {}) {
  const s = +getComputedStyle(n).opacity;
  return { delay: t, duration: e, easing: i, css: (o) => `opacity: ${o * s}` };
}
function he(
  n,
  { delay: t = 0, duration: e = 400, easing: i = ti, x: s = 0, y: o = 0, opacity: r = 0 } = {},
) {
  const l = getComputedStyle(n),
    a = +l.opacity,
    c = l.transform === 'none' ? '' : l.transform,
    f = a * (1 - r),
    [u, d] = _r(s),
    [h, g] = _r(o);
  return {
    delay: t,
    duration: e,
    easing: i,
    css: (m, p) => `
			transform: ${c} translate(${(1 - m) * u}${d}, ${(1 - m) * h}${g});
			opacity: ${a - f * p}`,
  };
}
function Sr(n, { delay: t = 0, duration: e = 400, easing: i = ti, axis: s = 'y' } = {}) {
  const o = getComputedStyle(n),
    r = +o.opacity,
    l = s === 'y' ? 'height' : 'width',
    a = parseFloat(o[l]),
    c = s === 'y' ? ['top', 'bottom'] : ['left', 'right'],
    f = c.map((_) => `${_[0].toUpperCase()}${_.slice(1)}`),
    u = parseFloat(o[`padding${f[0]}`]),
    d = parseFloat(o[`padding${f[1]}`]),
    h = parseFloat(o[`margin${f[0]}`]),
    g = parseFloat(o[`margin${f[1]}`]),
    m = parseFloat(o[`border${f[0]}Width`]),
    p = parseFloat(o[`border${f[1]}Width`]);
  return {
    delay: t,
    duration: e,
    easing: i,
    css: (_) =>
      `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * r};${l}: ${_ * a}px;padding-${c[0]}: ${
        _ * u
      }px;padding-${c[1]}: ${_ * d}px;margin-${c[0]}: ${_ * h}px;margin-${c[1]}: ${
        _ * g
      }px;border-${c[0]}-width: ${_ * m}px;border-${c[1]}-width: ${_ * p}px;`,
  };
}
function ge(
  n,
  { delay: t = 0, duration: e = 400, easing: i = ti, start: s = 0, opacity: o = 0 } = {},
) {
  const r = getComputedStyle(n),
    l = +r.opacity,
    a = r.transform === 'none' ? '' : r.transform,
    c = 1 - s,
    f = l * (1 - o);
  return {
    delay: t,
    duration: e,
    easing: i,
    css: (u, d) => `
			transform: ${a} scale(${1 - c * d});
			opacity: ${l - f * d}
		`,
  };
}
function sh(n) {
  var { fallback: t } = n,
    e = ih(n, ['fallback']);
  const i = new Map(),
    s = new Map();
  function o(l, a, c) {
    const {
        delay: f = 0,
        duration: u = (D) => Math.sqrt(D) * 30,
        easing: d = ti,
      } = St(St({}, e), c),
      h = l.getBoundingClientRect(),
      g = a.getBoundingClientRect(),
      m = h.left - g.left,
      p = h.top - g.top,
      _ = h.width / g.width,
      y = h.height / g.height,
      v = Math.sqrt(m * m + p * p),
      k = getComputedStyle(a),
      w = k.transform === 'none' ? '' : k.transform,
      M = +k.opacity;
    return {
      delay: f,
      duration: Oe(u) ? u(v) : u,
      easing: d,
      css: (D, T) => `
				opacity: ${D * M};
				transform-origin: top left;
				transform: ${w} translate(${T * m}px,${T * p}px) scale(${D + (1 - D) * _}, ${D + (1 - D) * y});
			`,
    };
  }
  function r(l, a, c) {
    return (f, u) => (
      l.set(u.key, f),
      () => {
        if (a.has(u.key)) {
          const d = a.get(u.key);
          return a.delete(u.key), o(d, f, u);
        }
        return l.delete(u.key), t && t(f, u, c);
      }
    );
  }
  return [r(s, i, !1), r(i, s, !0)];
}
const oh = (n) => ({}),
  Mr = (n) => ({}),
  rh = (n) => ({}),
  Dr = (n) => ({}),
  lh = (n) => ({}),
  Cr = (n) => ({});
function Tr(n) {
  let t, e;
  const i = n[24].lead,
    s = Kt(i, n, n[23], Cr);
  return {
    c() {
      (t = C('div')), s && s.c(), b(t, 'class', 'accordion-lead');
    },
    m(o, r) {
      x(o, t, r), s && s.m(t, null), (e = !0);
    },
    p(o, r) {
      s &&
        s.p &&
        (!e || r[0] & 8388608) &&
        Gt(s, i, o, o[23], e ? Jt(i, o[23], r, lh) : Zt(o[23]), Cr);
    },
    i(o) {
      e || (L(s, o), (e = !0));
    },
    o(o) {
      F(s, o), (e = !1);
    },
    d(o) {
      o && A(t), s && s.d(o);
    },
  };
}
function ah(n) {
  let t;
  return {
    c() {
      t = X('(summary)');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Pr(n) {
  let t, e, i, s, o, r, l;
  const a = n[24].content,
    c = Kt(a, n, n[23], Mr),
    f = c || ch();
  return {
    c() {
      (t = C('div')),
        f && f.c(),
        b(t, 'class', (e = 'accordion-panel ' + n[5])),
        b(t, 'id', (i = 'accordion-panel-' + n[0])),
        b(t, 'role', 'region'),
        b(t, 'aria-hidden', (s = !n[4])),
        b(t, 'aria-labelledby', (o = 'accordion-control-' + n[0]));
    },
    m(u, d) {
      x(u, t, d), f && f.m(t, null), (l = !0);
    },
    p(u, d) {
      (n = u),
        c &&
          c.p &&
          (!l || d[0] & 8388608) &&
          Gt(c, a, n, n[23], l ? Jt(a, n[23], d, oh) : Zt(n[23]), Mr),
        (!l || (d[0] & 32 && e !== (e = 'accordion-panel ' + n[5]))) && b(t, 'class', e),
        (!l || (d[0] & 1 && i !== (i = 'accordion-panel-' + n[0]))) && b(t, 'id', i),
        (!l || (d[0] & 16 && s !== (s = !n[4]))) && b(t, 'aria-hidden', s),
        (!l || (d[0] & 1 && o !== (o = 'accordion-control-' + n[0]))) && b(t, 'aria-labelledby', o);
    },
    i(u) {
      l ||
        (L(f, u),
        u &&
          pt(() => {
            l && (r || (r = ot(t, Sr, { duration: n[2] }, !0)), r.run(1));
          }),
        (l = !0));
    },
    o(u) {
      F(f, u), u && (r || (r = ot(t, Sr, { duration: n[2] }, !1)), r.run(0)), (l = !1);
    },
    d(u) {
      u && A(t), f && f.d(u), u && r && r.end();
    },
  };
}
function ch(n) {
  let t;
  return {
    c() {
      t = X('(content)');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function uh(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p,
    _,
    y = n[10].lead && Tr(n);
  const v = n[24].summary,
    k = Kt(v, n, n[23], Dr),
    w = k || ah();
  let M = n[4] && Pr(n);
  return {
    c() {
      (t = C('div')),
        (e = C('button')),
        y && y.c(),
        (i = B()),
        (s = C('div')),
        w && w.c(),
        (o = B()),
        (r = C('div')),
        (l = Vn('svg')),
        (a = Vn('path')),
        (h = B()),
        M && M.c(),
        b(s, 'class', 'accordion-summary flex-1'),
        b(
          a,
          'd',
          'M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z',
        ),
        b(l, 'xmlns', 'http://www.w3.org/2000/svg'),
        b(l, 'viewBox', '0 0 448 512'),
        b(r, 'class', (c = 'accordion-summary-caret ' + n[6])),
        b(e, 'type', 'button'),
        b(e, 'class', (f = 'accordion-control ' + n[7])),
        b(e, 'id', (u = 'accordion-control-' + n[0])),
        b(e, 'aria-expanded', n[4]),
        b(e, 'aria-controls', (d = 'accordion-panel-' + n[0])),
        (e.disabled = n[3]),
        b(t, 'class', (g = 'accordion-item ' + n[8])),
        b(t, 'data-testid', 'accordion-item');
    },
    m(D, T) {
      x(D, t, T),
        S(t, e),
        y && y.m(e, null),
        S(e, i),
        S(e, s),
        w && w.m(s, null),
        S(e, o),
        S(e, r),
        S(r, l),
        S(l, a),
        S(t, h),
        M && M.m(t, null),
        (m = !0),
        p ||
          ((_ = [
            R(e, 'click', n[9]),
            R(e, 'click', n[25]),
            R(e, 'keydown', n[26]),
            R(e, 'keyup', n[27]),
            R(e, 'keypress', n[28]),
          ]),
          (p = !0));
    },
    p(D, T) {
      D[10].lead
        ? y
          ? (y.p(D, T), T[0] & 1024 && L(y, 1))
          : ((y = Tr(D)), y.c(), L(y, 1), y.m(e, i))
        : y &&
          (vt(),
          F(y, 1, 1, () => {
            y = null;
          }),
          wt()),
        k &&
          k.p &&
          (!m || T[0] & 8388608) &&
          Gt(k, v, D, D[23], m ? Jt(v, D[23], T, rh) : Zt(D[23]), Dr),
        (!m || (T[0] & 64 && c !== (c = 'accordion-summary-caret ' + D[6]))) && b(r, 'class', c),
        (!m || (T[0] & 128 && f !== (f = 'accordion-control ' + D[7]))) && b(e, 'class', f),
        (!m || (T[0] & 1 && u !== (u = 'accordion-control-' + D[0]))) && b(e, 'id', u),
        (!m || T[0] & 16) && b(e, 'aria-expanded', D[4]),
        (!m || (T[0] & 1 && d !== (d = 'accordion-panel-' + D[0]))) && b(e, 'aria-controls', d),
        (!m || T[0] & 8) && (e.disabled = D[3]),
        D[4]
          ? M
            ? (M.p(D, T), T[0] & 16 && L(M, 1))
            : ((M = Pr(D)), M.c(), L(M, 1), M.m(t, null))
          : M &&
            (vt(),
            F(M, 1, 1, () => {
              M = null;
            }),
            wt()),
        (!m || (T[0] & 256 && g !== (g = 'accordion-item ' + D[8]))) && b(t, 'class', g);
    },
    i(D) {
      m || (L(y), L(w, D), L(M), (m = !0));
    },
    o(D) {
      F(y), F(w, D), F(M), (m = !1);
    },
    d(D) {
      D && A(t), y && y.d(), w && w.d(D), M && M.d(), (p = !1), Pt(_);
    },
  };
}
const fh = '',
  dh = 'text-left w-full flex items-center space-x-4',
  hh = 'fill-current w-3 transition-transform duration-[200ms]',
  gh = '';
function mh(n, t, e) {
  let i,
    s,
    o,
    r,
    l,
    a,
    c,
    f = ct,
    u = () => (f(), (f = Pd(v, (I) => e(22, (c = I)))), v);
  n.$$.on_destroy.push(() => f());
  let { $$slots: d = {}, $$scope: h } = t;
  const g = Zn(d),
    m = ke();
  let { open: p = !1 } = t,
    { id: _ = String(Math.random()) } = t,
    { autocollapse: y = gt('autocollapse') } = t,
    { active: v = gt('active') } = t;
  u();
  let { duration: k = gt('duration') } = t,
    { disabled: w = gt('disabled') } = t,
    { padding: M = gt('padding') } = t,
    { hover: D = gt('hover') } = t,
    { rounded: T = gt('rounded') } = t,
    { caretOpen: P = gt('caretOpen') } = t,
    { caretClosed: E = gt('caretClosed') } = t,
    { regionControl: O = gt('regionControl') } = t,
    { regionPanel: H = gt('regionPanel') } = t,
    { regionCaret: W = gt('regionCaret') } = t;
  function $(I) {
    y === !0 ? v.set(_) : e(11, (p = !p)), tt(I);
  }
  function tt(I) {
    const K = y ? c === _ : p;
    m('toggle', { event: I, id: `accordion-control-${_}`, open: K, autocollapse: y });
  }
  y && p && $();
  function Y(I) {
    ut.call(this, n, I);
  }
  function N(I) {
    ut.call(this, n, I);
  }
  function q(I) {
    ut.call(this, n, I);
  }
  function V(I) {
    ut.call(this, n, I);
  }
  return (
    (n.$$set = (I) => {
      e(31, (t = St(St({}, t), Rt(I)))),
        'open' in I && e(11, (p = I.open)),
        'id' in I && e(0, (_ = I.id)),
        'autocollapse' in I && e(12, (y = I.autocollapse)),
        'active' in I && u(e(1, (v = I.active))),
        'duration' in I && e(2, (k = I.duration)),
        'disabled' in I && e(3, (w = I.disabled)),
        'padding' in I && e(13, (M = I.padding)),
        'hover' in I && e(14, (D = I.hover)),
        'rounded' in I && e(15, (T = I.rounded)),
        'caretOpen' in I && e(16, (P = I.caretOpen)),
        'caretClosed' in I && e(17, (E = I.caretClosed)),
        'regionControl' in I && e(18, (O = I.regionControl)),
        'regionPanel' in I && e(19, (H = I.regionPanel)),
        'regionCaret' in I && e(20, (W = I.regionCaret)),
        '$$scope' in I && e(23, (h = I.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 6144 && p && y && $(),
        n.$$.dirty[0] & 4200449 && e(4, (i = y ? c === _ : p)),
        e(8, (s = `${fh} ${t.class ?? ''}`)),
        n.$$.dirty[0] & 319488 && e(7, (o = `${dh} ${M} ${D} ${T} ${O}`)),
        n.$$.dirty[0] & 196624 && e(21, (r = i ? P : E)),
        n.$$.dirty[0] & 3145728 && e(6, (l = `${hh} ${W} ${r}`)),
        n.$$.dirty[0] & 565248 && e(5, (a = `${gh} ${M} ${T} ${H}`));
    }),
    (t = Rt(t)),
    [_, v, k, w, i, a, l, o, s, $, g, p, y, M, D, T, P, E, O, H, W, r, c, h, d, Y, N, q, V]
  );
}
class xu extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        mh,
        uh,
        rt,
        {
          open: 11,
          id: 0,
          autocollapse: 12,
          active: 1,
          duration: 2,
          disabled: 3,
          padding: 13,
          hover: 14,
          rounded: 15,
          caretOpen: 16,
          caretClosed: 17,
          regionControl: 18,
          regionPanel: 19,
          regionCaret: 20,
        },
        null,
        [-1, -1],
      );
  }
}
const ph = (n) => ({}),
  xr = (n) => ({}),
  bh = (n) => ({}),
  Ar = (n) => ({}),
  _h = (n) => ({}),
  Lr = (n) => ({});
function Or(n) {
  let t, e, i;
  const s = n[17].lead,
    o = Kt(s, n, n[16], Lr);
  return {
    c() {
      (t = C('div')), o && o.c(), b(t, 'class', (e = 'dropzone-lead ' + n[4]));
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, l) {
      o && o.p && (!i || l & 65536) && Gt(o, s, r, r[16], i ? Jt(s, r[16], l, _h) : Zt(r[16]), Lr),
        (!i || (l & 16 && e !== (e = 'dropzone-lead ' + r[4]))) && b(t, 'class', e);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
function yh(n) {
  let t, e;
  return {
    c() {
      (t = C('strong')), (t.textContent = 'Upload a file'), (e = X(' or drag and drop'));
    },
    m(i, s) {
      x(i, t, s), x(i, e, s);
    },
    p: ct,
    d(i) {
      i && A(t), i && A(e);
    },
  };
}
function Fr(n) {
  let t, e, i;
  const s = n[17].meta,
    o = Kt(s, n, n[16], xr);
  return {
    c() {
      (t = C('small')), o && o.c(), b(t, 'class', (e = 'dropzone-meta ' + n[6]));
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, l) {
      o && o.p && (!i || l & 65536) && Gt(o, s, r, r[16], i ? Jt(s, r[16], l, ph) : Zt(r[16]), xr),
        (!i || (l & 64 && e !== (e = 'dropzone-meta ' + r[6]))) && b(t, 'class', e);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
function kh(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p,
    _ = [{ type: 'file' }, { name: n[1] }, { class: (i = 'dropzone-input ' + n[8]) }, n[10]()],
    y = {};
  for (let T = 0; T < _.length; T += 1) y = St(y, _[T]);
  let v = n[12].lead && Or(n);
  const k = n[17].message,
    w = Kt(k, n, n[16], Ar),
    M = w || yh();
  let D = n[12].meta && Fr(n);
  return {
    c() {
      (t = C('div')),
        (e = C('input')),
        (s = B()),
        (o = C('div')),
        (r = C('div')),
        v && v.c(),
        (l = B()),
        (a = C('div')),
        M && M.c(),
        (f = B()),
        D && D.c(),
        Fe(e, y),
        b(a, 'class', (c = 'dropzone-message ' + n[5])),
        b(r, 'class', (u = 'dropzone-interface-text ' + n[3])),
        b(o, 'class', (d = 'dropzone-interface ' + n[7] + ' ' + n[2])),
        b(t, 'class', (h = 'dropzone ' + n[9])),
        b(t, 'data-testid', 'file-dropzone'),
        st(t, 'opacity-50', n[11].disabled);
    },
    m(T, P) {
      x(T, t, P),
        S(t, e),
        e.autofocus && e.focus(),
        S(t, s),
        S(t, o),
        S(o, r),
        v && v.m(r, null),
        S(r, l),
        S(r, a),
        M && M.m(a, null),
        S(r, f),
        D && D.m(r, null),
        (g = !0),
        m ||
          ((p = [
            R(e, 'change', n[27]),
            R(e, 'change', n[18]),
            R(e, 'dragenter', n[19]),
            R(e, 'dragover', n[20]),
            R(e, 'dragleave', n[21]),
            R(e, 'drop', n[22]),
            R(e, 'click', n[23]),
            R(e, 'keydown', n[24]),
            R(e, 'keyup', n[25]),
            R(e, 'keypress', n[26]),
          ]),
          (m = !0));
    },
    p(T, [P]) {
      Fe(
        e,
        (y = Jn(_, [
          { type: 'file' },
          (!g || P & 2) && { name: T[1] },
          (!g || (P & 256 && i !== (i = 'dropzone-input ' + T[8]))) && { class: i },
          T[10](),
        ])),
      ),
        T[12].lead
          ? v
            ? (v.p(T, P), P & 4096 && L(v, 1))
            : ((v = Or(T)), v.c(), L(v, 1), v.m(r, l))
          : v &&
            (vt(),
            F(v, 1, 1, () => {
              v = null;
            }),
            wt()),
        w &&
          w.p &&
          (!g || P & 65536) &&
          Gt(w, k, T, T[16], g ? Jt(k, T[16], P, bh) : Zt(T[16]), Ar),
        (!g || (P & 32 && c !== (c = 'dropzone-message ' + T[5]))) && b(a, 'class', c),
        T[12].meta
          ? D
            ? (D.p(T, P), P & 4096 && L(D, 1))
            : ((D = Fr(T)), D.c(), L(D, 1), D.m(r, null))
          : D &&
            (vt(),
            F(D, 1, 1, () => {
              D = null;
            }),
            wt()),
        (!g || (P & 8 && u !== (u = 'dropzone-interface-text ' + T[3]))) && b(r, 'class', u),
        (!g || (P & 132 && d !== (d = 'dropzone-interface ' + T[7] + ' ' + T[2]))) &&
          b(o, 'class', d),
        (!g || (P & 512 && h !== (h = 'dropzone ' + T[9]))) && b(t, 'class', h),
        (!g || P & 2560) && st(t, 'opacity-50', T[11].disabled);
    },
    i(T) {
      g || (L(v), L(M, T), L(D), (g = !0));
    },
    o(T) {
      F(v), F(M, T), F(D), (g = !1);
    },
    d(T) {
      T && A(t), v && v.d(), M && M.d(T), D && D.d(), (m = !1), Pt(p);
    },
  };
}
const vh = 'textarea relative flex justify-center items-center',
  wh =
    'w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer',
  Sh = 'flex justify-center items-center text-center';
function Mh(n, t, e) {
  let i, s, o;
  const r = [
    'files',
    'name',
    'border',
    'padding',
    'rounded',
    'regionInterface',
    'regionInterfaceText',
    'slotLead',
    'slotMessage',
    'slotMeta',
  ];
  let l = Ee(t, r),
    { $$slots: a = {}, $$scope: c } = t;
  const f = Zn(a);
  let { files: u = void 0 } = t,
    { name: d } = t,
    { border: h = 'border-2 border-dashed' } = t,
    { padding: g = 'p-4 py-8' } = t,
    { rounded: m = 'rounded-container-token' } = t,
    { regionInterface: p = '' } = t,
    { regionInterfaceText: _ = '' } = t,
    { slotLead: y = 'mb-4' } = t,
    { slotMessage: v = '' } = t,
    { slotMeta: k = 'opacity-75' } = t;
  function w() {
    return delete l.class, l;
  }
  function M(Y) {
    ut.call(this, n, Y);
  }
  function D(Y) {
    ut.call(this, n, Y);
  }
  function T(Y) {
    ut.call(this, n, Y);
  }
  function P(Y) {
    ut.call(this, n, Y);
  }
  function E(Y) {
    ut.call(this, n, Y);
  }
  function O(Y) {
    ut.call(this, n, Y);
  }
  function H(Y) {
    ut.call(this, n, Y);
  }
  function W(Y) {
    ut.call(this, n, Y);
  }
  function $(Y) {
    ut.call(this, n, Y);
  }
  function tt() {
    (u = this.files), e(0, u);
  }
  return (
    (n.$$set = (Y) => {
      e(28, (t = St(St({}, t), Rt(Y)))),
        e(11, (l = Ee(t, r))),
        'files' in Y && e(0, (u = Y.files)),
        'name' in Y && e(1, (d = Y.name)),
        'border' in Y && e(13, (h = Y.border)),
        'padding' in Y && e(14, (g = Y.padding)),
        'rounded' in Y && e(15, (m = Y.rounded)),
        'regionInterface' in Y && e(2, (p = Y.regionInterface)),
        'regionInterfaceText' in Y && e(3, (_ = Y.regionInterfaceText)),
        'slotLead' in Y && e(4, (y = Y.slotLead)),
        'slotMessage' in Y && e(5, (v = Y.slotMessage)),
        'slotMeta' in Y && e(6, (k = Y.slotMeta)),
        '$$scope' in Y && e(16, (c = Y.$$scope));
    }),
    (n.$$.update = () => {
      e(9, (i = `${vh} ${h} ${g} ${m} ${t.class ?? ''}`));
    }),
    e(8, (s = `${wh}`)),
    e(7, (o = `${Sh}`)),
    (t = Rt(t)),
    [u, d, p, _, y, v, k, o, s, i, w, l, f, h, g, m, c, a, M, D, T, P, E, O, H, W, $, tt]
  );
}
class Dh extends lt {
  constructor(t) {
    super(),
      at(this, t, Mh, kh, rt, {
        files: 0,
        name: 1,
        border: 13,
        padding: 14,
        rounded: 15,
        regionInterface: 2,
        regionInterfaceText: 3,
        slotLead: 4,
        slotMessage: 5,
        slotMeta: 6,
      });
  }
}
function Ui(n, { from: t, to: e }, i = {}) {
  const s = getComputedStyle(n),
    o = s.transform === 'none' ? '' : s.transform,
    [r, l] = s.transformOrigin.split(' ').map(parseFloat),
    a = t.left + (t.width * r) / e.width - (e.left + r),
    c = t.top + (t.height * l) / e.height - (e.top + l),
    { delay: f = 0, duration: u = (h) => Math.sqrt(h) * 120, easing: d = ti } = i;
  return {
    delay: f,
    duration: Oe(u) ? u(Math.sqrt(a * a + c * c)) : u,
    easing: d,
    css: (h, g) => {
      const m = g * a,
        p = g * c,
        _ = h + (g * t.width) / e.width,
        y = h + (g * t.height) / e.height;
      return `transform: ${o} translate(${m}px, ${p}px) scale(${_}, ${y});`;
    },
  };
}
function Er(n, t, e) {
  const i = n.slice();
  return (i[43] = t[e].id), (i[44] = t[e].val), (i[46] = e), i;
}
function Ir(n, t, e) {
  const i = n.slice();
  return (i[47] = t[e]), i;
}
function Rr(n) {
  let t,
    e = n[47] + '',
    i,
    s;
  return {
    c() {
      (t = C('option')), (i = X(e)), (t.__value = s = n[47]), (t.value = t.__value);
    },
    m(o, r) {
      x(o, t, r), S(t, i);
    },
    p(o, r) {
      r[0] & 1 && e !== (e = o[47] + '') && mt(i, e),
        r[0] & 1 && s !== (s = o[47]) && ((t.__value = s), (t.value = t.__value));
    },
    d(o) {
      o && A(t);
    },
  };
}
function Br(n) {
  let t,
    e = [],
    i = new Map(),
    s,
    o,
    r,
    l = n[6];
  const a = (c) => c[43];
  for (let c = 0; c < l.length; c += 1) {
    let f = Er(n, l, c),
      u = a(f);
    i.set(u, (e[c] = zr(u, f)));
  }
  return {
    c() {
      t = C('div');
      for (let c = 0; c < e.length; c += 1) e[c].c();
      b(t, 'class', (s = 'input-chip-list ' + n[9]));
    },
    m(c, f) {
      x(c, t, f);
      for (let u = 0; u < e.length; u += 1) e[u] && e[u].m(t, null);
      r = !0;
    },
    p(c, f) {
      if (((n = c), f[0] & 16488)) {
        (l = n[6]), vt();
        for (let u = 0; u < e.length; u += 1) e[u].r();
        e = Me(e, f, a, 1, n, l, i, t, Ns, zr, null, Er);
        for (let u = 0; u < e.length; u += 1) e[u].a();
        wt();
      }
      (!r || (f[0] & 512 && s !== (s = 'input-chip-list ' + n[9]))) && b(t, 'class', s);
    },
    i(c) {
      if (!r) {
        for (let f = 0; f < l.length; f += 1) L(e[f]);
        c &&
          pt(() => {
            r && (o || (o = ot(t, he, { duration: n[3], opacity: 0, y: -20 }, !0)), o.run(1));
          }),
          (r = !0);
      }
    },
    o(c) {
      for (let f = 0; f < e.length; f += 1) F(e[f]);
      c && (o || (o = ot(t, he, { duration: n[3], opacity: 0, y: -20 }, !1)), o.run(0)), (r = !1);
    },
    d(c) {
      c && A(t);
      for (let f = 0; f < e.length; f += 1) e[f].d();
      c && o && o.end();
    },
  };
}
function zr(n, t) {
  let e,
    i,
    s,
    o = t[44] + '',
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h = ct,
    g,
    m,
    p;
  function _(...y) {
    return t[38](t[46], t[44], ...y);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('div')),
        (i = C('button')),
        (s = C('span')),
        (r = X(o)),
        (l = B()),
        (a = C('span')),
        (a.textContent = '✕'),
        (u = B()),
        b(i, 'type', 'button'),
        b(i, 'class', (c = 'chip ' + t[5])),
        (this.first = e);
    },
    m(y, v) {
      x(y, e, v),
        S(e, i),
        S(i, s),
        S(s, r),
        S(i, l),
        S(i, a),
        S(e, u),
        (g = !0),
        m ||
          ((p = [
            R(i, 'click', _),
            R(i, 'click', t[28]),
            R(i, 'keypress', t[29]),
            R(i, 'keydown', t[30]),
            R(i, 'keyup', t[31]),
          ]),
          (m = !0));
    },
    p(y, v) {
      (t = y),
        (!g || v[0] & 64) && o !== (o = t[44] + '') && mt(r, o),
        (!g || (v[0] & 32 && c !== (c = 'chip ' + t[5]))) && b(i, 'class', c);
    },
    r() {
      d = e.getBoundingClientRect();
    },
    f() {
      Vi(e), h();
    },
    a() {
      h(), (h = ji(e, d, Ui, { duration: t[3] }));
    },
    i(y) {
      g ||
        (y &&
          pt(() => {
            g && (f || (f = ot(i, ge, { duration: t[3], opacity: 0 }, !0)), f.run(1));
          }),
        (g = !0));
    },
    o(y) {
      y && (f || (f = ot(i, ge, { duration: t[3], opacity: 0 }, !1)), f.run(0)), (g = !1);
    },
    d(y) {
      y && A(e), y && f && f.end(), (m = !1), Pt(p);
    },
  };
}
function Ch(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p,
    _ = n[0],
    y = [];
  for (let k = 0; k < _.length; k += 1) y[k] = Rr(Ir(n, _, k));
  let v = n[6].length && Br(n);
  return {
    c() {
      (t = C('div')), (e = C('div')), (i = C('select'));
      for (let k = 0; k < y.length; k += 1) y[k].c();
      (s = B()),
        (o = C('div')),
        (r = C('form')),
        (l = C('input')),
        (u = B()),
        v && v.c(),
        b(i, 'name', n[2]),
        (i.multiple = !0),
        (i.required = n[4]),
        b(i, 'tabindex', '-1'),
        n[0] === void 0 && pt(() => n[36].call(i)),
        b(e, 'class', 'h-0 overflow-hidden'),
        b(l, 'type', 'text'),
        b(l, 'placeholder', (a = n[15].placeholder ?? 'Enter values...')),
        b(l, 'class', (c = 'input-chip-field ' + n[8])),
        (l.disabled = f = n[15].disabled),
        b(o, 'class', (d = 'input-chip-interface ' + n[10])),
        b(t, 'class', (h = 'input-chip ' + n[11])),
        st(t, 'opacity-50', n[15].disabled);
    },
    m(k, w) {
      x(k, t, w), S(t, e), S(e, i);
      for (let M = 0; M < y.length; M += 1) y[M] && y[M].m(i, null);
      n[35](i),
        yr(i, n[0]),
        S(t, s),
        S(t, o),
        S(o, r),
        S(r, l),
        Ie(l, n[1]),
        S(o, u),
        v && v.m(o, null),
        (g = !0),
        m ||
          ((p = [
            R(i, 'change', n[36]),
            R(l, 'input', n[37]),
            R(l, 'input', n[12]),
            R(l, 'input', n[32]),
            R(l, 'focus', n[33]),
            R(l, 'blur', n[34]),
            R(r, 'submit', n[13]),
          ]),
          (m = !0));
    },
    p(k, w) {
      if (w[0] & 1) {
        _ = k[0];
        let M;
        for (M = 0; M < _.length; M += 1) {
          const D = Ir(k, _, M);
          y[M] ? y[M].p(D, w) : ((y[M] = Rr(D)), y[M].c(), y[M].m(i, null));
        }
        for (; M < y.length; M += 1) y[M].d(1);
        y.length = _.length;
      }
      (!g || w[0] & 4) && b(i, 'name', k[2]),
        (!g || w[0] & 16) && (i.required = k[4]),
        w[0] & 1 && yr(i, k[0]),
        (!g || (w[0] & 32768 && a !== (a = k[15].placeholder ?? 'Enter values...'))) &&
          b(l, 'placeholder', a),
        (!g || (w[0] & 256 && c !== (c = 'input-chip-field ' + k[8]))) && b(l, 'class', c),
        (!g || (w[0] & 32768 && f !== (f = k[15].disabled))) && (l.disabled = f),
        w[0] & 2 && l.value !== k[1] && Ie(l, k[1]),
        k[6].length
          ? v
            ? (v.p(k, w), w[0] & 64 && L(v, 1))
            : ((v = Br(k)), v.c(), L(v, 1), v.m(o, null))
          : v &&
            (vt(),
            F(v, 1, 1, () => {
              v = null;
            }),
            wt()),
        (!g || (w[0] & 1024 && d !== (d = 'input-chip-interface ' + k[10]))) && b(o, 'class', d),
        (!g || (w[0] & 2048 && h !== (h = 'input-chip ' + k[11]))) && b(t, 'class', h),
        (!g || w[0] & 34816) && st(t, 'opacity-50', k[15].disabled);
    },
    i(k) {
      g || (L(v), (g = !0));
    },
    o(k) {
      F(v), (g = !1);
    },
    d(k) {
      k && A(t), oe(y, k), n[35](null), v && v.d(), (m = !1), Pt(p);
    },
  };
}
const Th = 'textarea cursor-pointer',
  Ph = 'space-y-4',
  xh = 'flex flex-wrap gap-2',
  Ah = 'unstyled bg-transparent border-0 !ring-0 p-0 w-full';
function Lh(n, t, e) {
  let i, s, o, r, l;
  const a = [
    'input',
    'name',
    'value',
    'whitelist',
    'max',
    'minlength',
    'maxlength',
    'allowUpperCase',
    'allowDuplicates',
    'validation',
    'duration',
    'required',
    'chips',
    'invalid',
    'padding',
    'rounded',
  ];
  let c = Ee(t, a);
  const f = ke();
  let { input: u = '' } = t,
    { name: d } = t,
    { value: h = [] } = t,
    { whitelist: g = [] } = t,
    { max: m = -1 } = t,
    { minlength: p = -1 } = t,
    { maxlength: _ = -1 } = t,
    { allowUpperCase: y = !1 } = t,
    { allowDuplicates: v = !1 } = t,
    { validation: k = () => !0 } = t,
    { duration: w = 150 } = t,
    { required: M = !1 } = t,
    { chips: D = 'variant-filled' } = t,
    { invalid: T = 'input-error' } = t,
    { padding: P = 'p-2' } = t,
    { rounded: E = 'rounded-container-token' } = t,
    O = !0,
    H = (h == null ? void 0 : h.map((z) => ({ val: z, id: Math.random() }))) || [];
  function W() {
    e(0, (h = []));
  }
  let $;
  ze(() => {
    if (!$.form) return;
    const z = $.form;
    return (
      z.addEventListener('reset', W),
      () => {
        z.removeEventListener('reset', W);
      }
    );
  });
  function tt() {
    e(26, (O = !0));
  }
  function Y() {
    return !(
      !u ||
      (e(1, (u = u.trim())), k !== void 0 && !k(u)) ||
      (m !== -1 && h.length >= m) ||
      (p !== -1 && u.length < p) ||
      (_ !== -1 && u.length > _) ||
      (g.length > 0 && !g.includes(u)) ||
      (v === !1 && h.includes(u))
    );
  }
  function N(z) {
    if ((z.preventDefault(), e(26, (O = Y())), O === !1)) {
      f('invalid', { event: z, input: u });
      return;
    }
    e(1, (u = y ? u : u.toLowerCase())),
      h.push(u),
      e(0, h),
      H.push({ val: u, id: Math.random() }),
      e(6, H),
      e(0, h),
      f('add', { event: z, chipIndex: h.length - 1, chipValue: u }),
      e(1, (u = ''));
  }
  function q(z, xt, ht) {
    c.disabled ||
      (h.splice(xt, 1),
      e(0, h),
      H.splice(xt, 1),
      e(6, H),
      e(0, h),
      f('remove', { event: z, chipIndex: xt, chipValue: ht }));
  }
  function V(z) {
    ut.call(this, n, z);
  }
  function I(z) {
    ut.call(this, n, z);
  }
  function K(z) {
    ut.call(this, n, z);
  }
  function U(z) {
    ut.call(this, n, z);
  }
  function ft(z) {
    ut.call(this, n, z);
  }
  function Mt(z) {
    ut.call(this, n, z);
  }
  function It(z) {
    ut.call(this, n, z);
  }
  function kt(z) {
    dt[z ? 'unshift' : 'push'](() => {
      ($ = z), e(7, $);
    });
  }
  function G() {
    (h = xd(this)), e(0, h);
  }
  function et() {
    (u = this.value), e(1, u);
  }
  const Lt = (z, xt, ht) => {
    q(ht, z, xt);
  };
  return (
    (n.$$set = (z) => {
      e(42, (t = St(St({}, t), Rt(z)))),
        e(15, (c = Ee(t, a))),
        'input' in z && e(1, (u = z.input)),
        'name' in z && e(2, (d = z.name)),
        'value' in z && e(0, (h = z.value)),
        'whitelist' in z && e(16, (g = z.whitelist)),
        'max' in z && e(17, (m = z.max)),
        'minlength' in z && e(18, (p = z.minlength)),
        'maxlength' in z && e(19, (_ = z.maxlength)),
        'allowUpperCase' in z && e(20, (y = z.allowUpperCase)),
        'allowDuplicates' in z && e(21, (v = z.allowDuplicates)),
        'validation' in z && e(22, (k = z.validation)),
        'duration' in z && e(3, (w = z.duration)),
        'required' in z && e(4, (M = z.required)),
        'chips' in z && e(5, (D = z.chips)),
        'invalid' in z && e(23, (T = z.invalid)),
        'padding' in z && e(24, (P = z.padding)),
        'rounded' in z && e(25, (E = z.rounded));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 75497472 && e(27, (i = O === !1 ? T : '')),
        e(11, (s = `${Th} ${P} ${E} ${t.class ?? ''} ${i}`)),
        n.$$.dirty[0] & 65 &&
          e(
            6,
            (H =
              (h == null
                ? void 0
                : h.map((z, xt) => {
                    var ht;
                    return ((ht = H[xt]) == null ? void 0 : ht.val) === z
                      ? H[xt]
                      : { id: Math.random(), val: z };
                  })) || []),
          );
    }),
    e(10, (o = `${Ph}`)),
    e(9, (r = `${xh}`)),
    e(8, (l = `${Ah}`)),
    (t = Rt(t)),
    [
      h,
      u,
      d,
      w,
      M,
      D,
      H,
      $,
      l,
      r,
      o,
      s,
      tt,
      N,
      q,
      c,
      g,
      m,
      p,
      _,
      y,
      v,
      k,
      T,
      P,
      E,
      O,
      i,
      V,
      I,
      K,
      U,
      ft,
      Mt,
      It,
      kt,
      G,
      et,
      Lt,
    ]
  );
}
class Oh extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Lh,
        Ch,
        rt,
        {
          input: 1,
          name: 2,
          value: 0,
          whitelist: 16,
          max: 17,
          minlength: 18,
          maxlength: 19,
          allowUpperCase: 20,
          allowDuplicates: 21,
          validation: 22,
          duration: 3,
          required: 4,
          chips: 5,
          invalid: 23,
          padding: 24,
          rounded: 25,
        },
        null,
        [-1, -1],
      );
  }
}
function Fh(n) {
  let t, e, i;
  const s = n[9].default,
    o = Kt(s, n, n[8], null);
  return {
    c() {
      (t = C('div')),
        o && o.c(),
        b(t, 'class', (e = 'listbox ' + n[1])),
        b(t, 'role', 'listbox'),
        b(t, 'aria-labelledby', n[0]),
        b(t, 'data-testid', 'listbox');
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, [l]) {
      o && o.p && (!i || l & 256) && Gt(o, s, r, r[8], i ? Jt(s, r[8], l, null) : Zt(r[8]), null),
        (!i || (l & 2 && e !== (e = 'listbox ' + r[1]))) && b(t, 'class', e),
        (!i || l & 1) && b(t, 'aria-labelledby', r[0]);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
const Eh = '';
function Ih(n, t, e) {
  let i,
    { $$slots: s = {}, $$scope: o } = t,
    { multiple: r = !1 } = t,
    { spacing: l = 'space-y-1' } = t,
    { rounded: a = 'rounded-token' } = t,
    { active: c = 'variant-filled' } = t,
    { hover: f = 'hover:variant-soft' } = t,
    { padding: u = 'px-4 py-2' } = t,
    { labelledby: d = '' } = t;
  return (
    Ot('multiple', r),
    Ot('rounded', a),
    Ot('active', c),
    Ot('hover', f),
    Ot('padding', u),
    (n.$$set = (h) => {
      e(10, (t = St(St({}, t), Rt(h)))),
        'multiple' in h && e(2, (r = h.multiple)),
        'spacing' in h && e(3, (l = h.spacing)),
        'rounded' in h && e(4, (a = h.rounded)),
        'active' in h && e(5, (c = h.active)),
        'hover' in h && e(6, (f = h.hover)),
        'padding' in h && e(7, (u = h.padding)),
        'labelledby' in h && e(0, (d = h.labelledby)),
        '$$scope' in h && e(8, (o = h.$$scope));
    }),
    (n.$$.update = () => {
      e(1, (i = `${Eh} ${l} ${a} ${t.class ?? ''}`));
    }),
    (t = Rt(t)),
    [d, i, r, l, a, c, f, u, o, s]
  );
}
class Rh extends lt {
  constructor(t) {
    super(),
      at(this, t, Ih, Fh, rt, {
        multiple: 2,
        spacing: 3,
        rounded: 4,
        active: 5,
        hover: 6,
        padding: 7,
        labelledby: 0,
      });
  }
}
const Bh = (n) => ({}),
  Hr = (n) => ({}),
  zh = (n) => ({}),
  Wr = (n) => ({});
function Hh(n) {
  let t,
    e = !1,
    i,
    s,
    o;
  return (
    (i = Vo(n[29][0])),
    {
      c() {
        (t = C('input')),
          b(t, 'type', 'radio'),
          b(t, 'name', n[1]),
          (t.__value = n[2]),
          (t.value = t.__value),
          b(t, 'tabindex', '-1'),
          i.p(t);
      },
      m(r, l) {
        x(r, t, l),
          n[27](t),
          (t.checked = t.__value === n[0]),
          s ||
            ((o = [R(t, 'change', n[28]), R(t, 'click', n[23]), R(t, 'change', n[24])]), (s = !0));
      },
      p(r, l) {
        l[0] & 2 && b(t, 'name', r[1]),
          l[0] & 4 && ((t.__value = r[2]), (t.value = t.__value), (e = !0)),
          (e || l[0] & 1) && (t.checked = t.__value === r[0]);
      },
      d(r) {
        r && A(t), n[27](null), i.r(), (s = !1), Pt(o);
      },
    }
  );
}
function Wh(n) {
  let t, e, i;
  return {
    c() {
      (t = C('input')),
        b(t, 'type', 'checkbox'),
        b(t, 'name', n[1]),
        (t.__value = n[2]),
        (t.value = t.__value),
        b(t, 'tabindex', '-1');
    },
    m(s, o) {
      x(s, t, o),
        n[25](t),
        (t.checked = n[4]),
        e || ((i = [R(t, 'change', n[26]), R(t, 'click', n[21]), R(t, 'change', n[22])]), (e = !0));
    },
    p(s, o) {
      o[0] & 2 && b(t, 'name', s[1]),
        o[0] & 4 && ((t.__value = s[2]), (t.value = t.__value)),
        o[0] & 16 && (t.checked = s[4]);
    },
    d(s) {
      s && A(t), n[25](null), (e = !1), Pt(i);
    },
  };
}
function Nr(n) {
  let t, e;
  const i = n[17].lead,
    s = Kt(i, n, n[16], Wr);
  return {
    c() {
      (t = C('div')), s && s.c(), b(t, 'class', 'listbox-label-lead');
    },
    m(o, r) {
      x(o, t, r), s && s.m(t, null), (e = !0);
    },
    p(o, r) {
      s &&
        s.p &&
        (!e || r[0] & 65536) &&
        Gt(s, i, o, o[16], e ? Jt(i, o[16], r, zh) : Zt(o[16]), Wr);
    },
    i(o) {
      e || (L(s, o), (e = !0));
    },
    o(o) {
      F(s, o), (e = !1);
    },
    d(o) {
      o && A(t), s && s.d(o);
    },
  };
}
function Vr(n) {
  let t, e;
  const i = n[17].trail,
    s = Kt(i, n, n[16], Hr);
  return {
    c() {
      (t = C('div')), s && s.c(), b(t, 'class', 'listbox-label-trail');
    },
    m(o, r) {
      x(o, t, r), s && s.m(t, null), (e = !0);
    },
    p(o, r) {
      s &&
        s.p &&
        (!e || r[0] & 65536) &&
        Gt(s, i, o, o[16], e ? Jt(i, o[16], r, Bh) : Zt(o[16]), Hr);
    },
    i(o) {
      e || (L(s, o), (e = !0));
    },
    o(o) {
      F(s, o), (e = !1);
    },
    d(o) {
      o && A(t), s && s.d(o);
    },
  };
}
function Nh(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h;
  function g(w, M) {
    return w[3] ? Wh : Hh;
  }
  let m = g(n),
    p = m(n),
    _ = n[10].lead && Nr(n);
  const y = n[17].default,
    v = Kt(y, n, n[16], null);
  let k = n[10].trail && Vr(n);
  return {
    c() {
      (t = C('label')),
        (e = C('div')),
        (i = C('div')),
        p.c(),
        (s = B()),
        (o = C('div')),
        _ && _.c(),
        (r = B()),
        (l = C('div')),
        v && v.c(),
        (a = B()),
        k && k.c(),
        b(i, 'class', 'h-0 w-0 overflow-hidden'),
        b(l, 'class', 'listbox-label-content flex-1'),
        b(o, 'class', (c = 'listbox-label ' + n[7])),
        b(e, 'class', (f = 'listbox-item ' + n[8])),
        b(e, 'data-testid', 'listbox-item'),
        b(e, 'role', 'option'),
        b(e, 'aria-selected', n[5]),
        b(e, 'tabindex', '0');
    },
    m(w, M) {
      x(w, t, M),
        S(t, e),
        S(e, i),
        p.m(i, null),
        S(e, s),
        S(e, o),
        _ && _.m(o, null),
        S(o, r),
        S(o, l),
        v && v.m(l, null),
        S(o, a),
        k && k.m(o, null),
        (u = !0),
        d ||
          ((h = [
            R(e, 'keydown', n[9]),
            R(e, 'keydown', n[18]),
            R(e, 'keyup', n[19]),
            R(e, 'keypress', n[20]),
          ]),
          (d = !0));
    },
    p(w, M) {
      m === (m = g(w)) && p ? p.p(w, M) : (p.d(1), (p = m(w)), p && (p.c(), p.m(i, null))),
        w[10].lead
          ? _
            ? (_.p(w, M), M[0] & 1024 && L(_, 1))
            : ((_ = Nr(w)), _.c(), L(_, 1), _.m(o, r))
          : _ &&
            (vt(),
            F(_, 1, 1, () => {
              _ = null;
            }),
            wt()),
        v &&
          v.p &&
          (!u || M[0] & 65536) &&
          Gt(v, y, w, w[16], u ? Jt(y, w[16], M, null) : Zt(w[16]), null),
        w[10].trail
          ? k
            ? (k.p(w, M), M[0] & 1024 && L(k, 1))
            : ((k = Vr(w)), k.c(), L(k, 1), k.m(o, null))
          : k &&
            (vt(),
            F(k, 1, 1, () => {
              k = null;
            }),
            wt()),
        (!u || (M[0] & 128 && c !== (c = 'listbox-label ' + w[7]))) && b(o, 'class', c),
        (!u || (M[0] & 256 && f !== (f = 'listbox-item ' + w[8]))) && b(e, 'class', f),
        (!u || M[0] & 32) && b(e, 'aria-selected', w[5]);
    },
    i(w) {
      u || (L(_), L(v, w), L(k), (u = !0));
    },
    o(w) {
      F(_), F(v, w), F(k), (u = !1);
    },
    d(w) {
      w && A(t), p.d(), _ && _.d(), v && v.d(w), k && k.d(), (d = !1), Pt(h);
    },
  };
}
const Vh = 'cursor-pointer -outline-offset-[3px]',
  jh = 'flex items-center space-x-4';
function _o(n, t) {
  if (n === t) return !0;
  if (!(n instanceof Object) || !(t instanceof Object)) return !1;
  const e = Object.keys(n),
    i = Object.keys(t);
  if (e.length !== i.length) return !1;
  for (const s of e) {
    const o = n[s],
      r = t[s];
    if (!_o(o, r)) return !1;
  }
  return !0;
}
function Yh(n, t, e) {
  let i,
    s,
    o,
    r,
    { $$slots: l = {}, $$scope: a } = t;
  const c = Zn(l);
  let { group: f } = t,
    { name: u } = t,
    { value: d } = t,
    { multiple: h = gt('multiple') } = t,
    { rounded: g = gt('rounded') } = t,
    { active: m = gt('active') } = t,
    { hover: p = gt('hover') } = t,
    { padding: _ = gt('padding') } = t,
    y,
    v;
  function k(V) {
    e(4, (y = V.indexOf(d) >= 0));
  }
  function w(V) {
    const I = f.indexOf(d);
    V ? I < 0 && (f.push(d), e(0, f)) : I >= 0 && (f.splice(I, 1), e(0, f));
  }
  function M(V) {
    ['Enter', 'Space'].includes(V.code) && (V.preventDefault(), v.click());
  }
  const D = [[]];
  function T(V) {
    ut.call(this, n, V);
  }
  function P(V) {
    ut.call(this, n, V);
  }
  function E(V) {
    ut.call(this, n, V);
  }
  function O(V) {
    ut.call(this, n, V);
  }
  function H(V) {
    ut.call(this, n, V);
  }
  function W(V) {
    ut.call(this, n, V);
  }
  function $(V) {
    ut.call(this, n, V);
  }
  function tt(V) {
    dt[V ? 'unshift' : 'push'](() => {
      (v = V), e(6, v);
    });
  }
  function Y() {
    (y = this.checked), e(4, y);
  }
  function N(V) {
    dt[V ? 'unshift' : 'push'](() => {
      (v = V), e(6, v);
    });
  }
  function q() {
    (f = this.__value), e(0, f);
  }
  return (
    (n.$$set = (V) => {
      e(32, (t = St(St({}, t), Rt(V)))),
        'group' in V && e(0, (f = V.group)),
        'name' in V && e(1, (u = V.name)),
        'value' in V && e(2, (d = V.value)),
        'multiple' in V && e(3, (h = V.multiple)),
        'rounded' in V && e(11, (g = V.rounded)),
        'active' in V && e(12, (m = V.active)),
        'hover' in V && e(13, (p = V.hover)),
        'padding' in V && e(14, (_ = V.padding)),
        '$$scope' in V && e(16, (a = V.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 9 && h && k(f),
        n.$$.dirty[0] & 24 && h && w(y),
        n.$$.dirty[0] & 13 && e(5, (i = h ? f.some((V) => _o(d, V)) : _o(f, d))),
        n.$$.dirty[0] & 12320 && e(15, (s = i ? m : p)),
        e(8, (o = `${Vh} ${g} ${_} ${s} ${t.class ?? ''}`));
    }),
    e(7, (r = `${jh}`)),
    (t = Rt(t)),
    [f, u, d, h, y, i, v, r, o, M, c, g, m, p, _, s, a, l, T, P, E, O, H, W, $, tt, Y, N, q, D]
  );
}
class ts extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Yh,
        Nh,
        rt,
        {
          group: 0,
          name: 1,
          value: 2,
          multiple: 3,
          rounded: 11,
          active: 12,
          hover: 13,
          padding: 14,
        },
        null,
        [-1, -1],
      );
  }
}
const Uh =
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
  qh =
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>',
  Xh =
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>',
  Kh =
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>';
function jr(n, t, e) {
  const i = n.slice();
  return (i[42] = t[e]), i;
}
function Yr(n, t, e) {
  const i = n.slice();
  return (i[45] = t[e]), i;
}
function Ur(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l = n[0].amounts,
    a = [];
  for (let c = 0; c < l.length; c += 1) a[c] = qr(Yr(n, l, c));
  return {
    c() {
      (t = C('label')), (e = C('select'));
      for (let c = 0; c < a.length; c += 1) a[c].c();
      b(e, 'class', (i = 'paginator-select ' + n[18])),
        (e.disabled = n[1]),
        b(e, 'aria-label', 'Select Amount'),
        n[0].limit === void 0 && pt(() => n[31].call(e)),
        b(t, 'class', (s = 'paginator-label ' + n[19]));
    },
    m(c, f) {
      x(c, t, f), S(t, e);
      for (let u = 0; u < a.length; u += 1) a[u] && a[u].m(e, null);
      En(e, n[0].limit, !0), o || ((r = [R(e, 'change', n[31]), R(e, 'change', n[22])]), (o = !0));
    },
    p(c, f) {
      if (f[0] & 33) {
        l = c[0].amounts;
        let u;
        for (u = 0; u < l.length; u += 1) {
          const d = Yr(c, l, u);
          a[u] ? a[u].p(d, f) : ((a[u] = qr(d)), a[u].c(), a[u].m(e, null));
        }
        for (; u < a.length; u += 1) a[u].d(1);
        a.length = l.length;
      }
      f[0] & 262144 && i !== (i = 'paginator-select ' + c[18]) && b(e, 'class', i),
        f[0] & 2 && (e.disabled = c[1]),
        f[0] & 1 && En(e, c[0].limit),
        f[0] & 524288 && s !== (s = 'paginator-label ' + c[19]) && b(t, 'class', s);
    },
    d(c) {
      c && A(t), oe(a, c), (o = !1), Pt(r);
    },
  };
}
function qr(n) {
  let t,
    e = n[45] + '',
    i,
    s,
    o,
    r;
  return {
    c() {
      (t = C('option')),
        (i = X(e)),
        (s = B()),
        (o = X(n[5])),
        (t.__value = r = n[45]),
        (t.value = t.__value);
    },
    m(l, a) {
      x(l, t, a), S(t, i), S(t, s), S(t, o);
    },
    p(l, a) {
      a[0] & 1 && e !== (e = l[45] + '') && mt(i, e),
        a[0] & 32 && mt(o, l[5]),
        a[0] & 1 && r !== (r = l[45]) && ((t.__value = r), (t.value = t.__value));
    },
    d(l) {
      l && A(t);
    },
  };
}
function Xr(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        b(t, 'type', 'button'),
        b(t, 'aria-label', n[11]),
        b(t, 'class', n[6]),
        (t.disabled = e = n[1] || n[0].offset === 0);
    },
    m(o, r) {
      x(o, t, r), (t.innerHTML = n[9]), i || ((s = R(t, 'click', n[32])), (i = !0));
    },
    p(o, r) {
      r[0] & 512 && (t.innerHTML = o[9]),
        r[0] & 2048 && b(t, 'aria-label', o[11]),
        r[0] & 64 && b(t, 'class', o[6]),
        r[0] & 3 && e !== (e = o[1] || o[0].offset === 0) && (t.disabled = e);
    },
    d(o) {
      o && A(t), (i = !1), s();
    },
  };
}
function Kr(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        b(t, 'type', 'button'),
        b(t, 'aria-label', n[12]),
        b(t, 'class', n[6]),
        (t.disabled = e = n[1] || n[0].offset === 0);
    },
    m(o, r) {
      x(o, t, r), (t.innerHTML = n[7]), i || ((s = R(t, 'click', n[33])), (i = !0));
    },
    p(o, r) {
      r[0] & 128 && (t.innerHTML = o[7]),
        r[0] & 4096 && b(t, 'aria-label', o[12]),
        r[0] & 64 && b(t, 'class', o[6]),
        r[0] & 3 && e !== (e = o[1] || o[0].offset === 0) && (t.disabled = e);
    },
    d(o) {
      o && A(t), (i = !1), s();
    },
  };
}
function Gh(n) {
  let t,
    e = n[16],
    i = [];
  for (let s = 0; s < e.length; s += 1) i[s] = Gr(jr(n, e, s));
  return {
    c() {
      for (let s = 0; s < i.length; s += 1) i[s].c();
      t = ee();
    },
    m(s, o) {
      for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(s, o);
      x(s, t, o);
    },
    p(s, o) {
      if (o[0] & 10551360) {
        e = s[16];
        let r;
        for (r = 0; r < e.length; r += 1) {
          const l = jr(s, e, r);
          i[r] ? i[r].p(l, o) : ((i[r] = Gr(l)), i[r].c(), i[r].m(t.parentNode, t));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = e.length;
      }
    },
    d(s) {
      oe(i, s), s && A(t);
    },
  };
}
function Zh(n) {
  let t,
    e = n[0].offset * n[0].limit + 1 + '',
    i,
    s,
    o = Math.min(n[0].offset * n[0].limit + n[0].limit, n[0].size) + '',
    r,
    l,
    a,
    c,
    f = n[0].size + '',
    u,
    d;
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        (s = X('-')),
        (r = X(o)),
        (l = X(' ')),
        (a = C('span')),
        (c = X('of ')),
        (u = X(f)),
        b(a, 'class', 'opacity-50'),
        b(t, 'type', 'button'),
        b(t, 'class', (d = n[6] + ' pointer-events-none !text-sm'));
    },
    m(h, g) {
      x(h, t, g), S(t, i), S(t, s), S(t, r), S(t, l), S(t, a), S(a, c), S(a, u);
    },
    p(h, g) {
      g[0] & 1 && e !== (e = h[0].offset * h[0].limit + 1 + '') && mt(i, e),
        g[0] & 1 &&
          o !== (o = Math.min(h[0].offset * h[0].limit + h[0].limit, h[0].size) + '') &&
          mt(r, o),
        g[0] & 1 && f !== (f = h[0].size + '') && mt(u, f),
        g[0] & 64 && d !== (d = h[6] + ' pointer-events-none !text-sm') && b(t, 'class', d);
    },
    d(h) {
      h && A(t);
    },
  };
}
function Gr(n) {
  let t,
    e = (n[42] >= 0 ? n[42] + 1 : '...') + '',
    i,
    s,
    o,
    r,
    l;
  function a() {
    return n[34](n[42]);
  }
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        (s = B()),
        b(t, 'type', 'button'),
        b(t, 'class', (o = n[6] + ' ' + n[21](n[42])));
    },
    m(c, f) {
      x(c, t, f), S(t, i), S(t, s), r || ((l = R(t, 'click', a)), (r = !0));
    },
    p(c, f) {
      (n = c),
        f[0] & 65536 && e !== (e = (n[42] >= 0 ? n[42] + 1 : '...') + '') && mt(i, e),
        f[0] & 2162752 && o !== (o = n[6] + ' ' + n[21](n[42])) && b(t, 'class', o);
    },
    d(c) {
      c && A(t), (r = !1), l();
    },
  };
}
function Zr(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        b(t, 'type', 'button'),
        b(t, 'aria-label', n[13]),
        b(t, 'class', n[6]),
        (t.disabled = e = n[1] || (n[0].offset + 1) * n[0].limit >= n[0].size);
    },
    m(o, r) {
      x(o, t, r), (t.innerHTML = n[8]), i || ((s = R(t, 'click', n[35])), (i = !0));
    },
    p(o, r) {
      r[0] & 256 && (t.innerHTML = o[8]),
        r[0] & 8192 && b(t, 'aria-label', o[13]),
        r[0] & 64 && b(t, 'class', o[6]),
        r[0] & 3 &&
          e !== (e = o[1] || (o[0].offset + 1) * o[0].limit >= o[0].size) &&
          (t.disabled = e);
    },
    d(o) {
      o && A(t), (i = !1), s();
    },
  };
}
function Jr(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        b(t, 'type', 'button'),
        b(t, 'aria-label', n[14]),
        b(t, 'class', n[6]),
        (t.disabled = e = n[1] || (n[0].offset + 1) * n[0].limit >= n[0].size);
    },
    m(o, r) {
      x(o, t, r), (t.innerHTML = n[10]), i || ((s = R(t, 'click', n[36])), (i = !0));
    },
    p(o, r) {
      r[0] & 1024 && (t.innerHTML = o[10]),
        r[0] & 16384 && b(t, 'aria-label', o[14]),
        r[0] & 64 && b(t, 'class', o[6]),
        r[0] & 3 &&
          e !== (e = o[1] || (o[0].offset + 1) * o[0].limit >= o[0].size) &&
          (t.disabled = e);
    },
    d(o) {
      o && A(t), (i = !1), s();
    },
  };
}
function Jh(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f = n[0].amounts.length && Ur(n),
    u = n[3] && Xr(n),
    d = n[2] && Kr(n);
  function h(y, v) {
    return y[4] === !1 ? Zh : Gh;
  }
  let g = h(n),
    m = g(n),
    p = n[2] && Zr(n),
    _ = n[3] && Jr(n);
  return {
    c() {
      (t = C('div')),
        f && f.c(),
        (e = B()),
        (i = C('div')),
        u && u.c(),
        (s = B()),
        d && d.c(),
        (o = B()),
        m.c(),
        (r = B()),
        p && p.c(),
        (l = B()),
        _ && _.c(),
        b(i, 'class', (a = 'paginator-controls ' + n[17])),
        b(t, 'class', (c = 'paginator ' + n[20])),
        b(t, 'data-testid', 'paginator');
    },
    m(y, v) {
      x(y, t, v),
        f && f.m(t, null),
        S(t, e),
        S(t, i),
        u && u.m(i, null),
        S(i, s),
        d && d.m(i, null),
        S(i, o),
        m.m(i, null),
        S(i, r),
        p && p.m(i, null),
        S(i, l),
        _ && _.m(i, null);
    },
    p(y, v) {
      y[0].amounts.length
        ? f
          ? f.p(y, v)
          : ((f = Ur(y)), f.c(), f.m(t, e))
        : f && (f.d(1), (f = null)),
        y[3] ? (u ? u.p(y, v) : ((u = Xr(y)), u.c(), u.m(i, s))) : u && (u.d(1), (u = null)),
        y[2] ? (d ? d.p(y, v) : ((d = Kr(y)), d.c(), d.m(i, o))) : d && (d.d(1), (d = null)),
        g === (g = h(y)) && m ? m.p(y, v) : (m.d(1), (m = g(y)), m && (m.c(), m.m(i, r))),
        y[2] ? (p ? p.p(y, v) : ((p = Zr(y)), p.c(), p.m(i, l))) : p && (p.d(1), (p = null)),
        y[3] ? (_ ? _.p(y, v) : ((_ = Jr(y)), _.c(), _.m(i, null))) : _ && (_.d(1), (_ = null)),
        v[0] & 131072 && a !== (a = 'paginator-controls ' + y[17]) && b(i, 'class', a),
        v[0] & 1048576 && c !== (c = 'paginator ' + y[20]) && b(t, 'class', c);
    },
    i: ct,
    o: ct,
    d(y) {
      y && A(t), f && f.d(), u && u.d(), d && d.d(), m.d(), p && p.d(), _ && _.d();
    },
  };
}
const Qh = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4',
  $h = 'w-full md:w-auto';
function tg(n, t, e) {
  let i, s, o, r, l;
  const a = ke();
  let { settings: c = { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] } } = t,
    { disabled: f = !1 } = t,
    { showPreviousNextButtons: u = !0 } = t,
    { showFirstLastButtons: d = !1 } = t,
    { showNumerals: h = !1 } = t,
    { maxNumerals: g = 1 } = t,
    { justify: m = 'justify-between' } = t,
    { select: p = 'select min-w-[150px]' } = t,
    { amountText: _ = 'Items' } = t,
    { regionControl: y = 'btn-group' } = t,
    { controlVariant: v = 'variant-filled' } = t,
    { controlSeparator: k = '' } = t,
    { active: w = 'variant-filled-primary' } = t,
    { buttonClasses: M = '!px-3 !py-1.5 fill-current' } = t,
    { buttonTextPrevious: D = Uh } = t,
    { buttonTextNext: T = qh } = t,
    { buttonTextFirst: P = Xh } = t,
    { buttonTextLast: E = Kh } = t,
    { labelFirst: O = 'First page' } = t,
    { labelPrevious: H = 'Previous page' } = t,
    { labelNext: W = 'Next page' } = t,
    { labelLast: $ = 'Last page' } = t,
    tt = Math.max(0, Math.ceil(c.size / c.limit - 1)),
    Y = I();
  function N() {
    e(0, (c.offset = 0), c),
      a('amount', c.limit),
      e(15, (tt = Math.max(0, Math.ceil(c.size / c.limit - 1)))),
      e(16, (Y = I()));
  }
  function q(et) {
    et < 0 || (e(0, (c.offset = et), c), a('page', c.offset), e(16, (Y = I())));
  }
  function V() {
    const et = [];
    for (let Lt = 0; Lt <= tt; Lt++) et.push(Lt);
    return et;
  }
  function I() {
    const et = [],
      Lt = c.offset < g + 2,
      z = c.offset > tt - (g + 2);
    if (tt <= g * 2 + 1) return V();
    if ((et.push(0), Lt || et.push(-1), Lt || z)) {
      const xt = Lt ? 1 : tt - (g + 2),
        ht = z ? tt - 1 : g + 2;
      for (let Qt = xt; Qt <= ht; Qt++) et.push(Qt);
    } else for (let xt = c.offset - g; xt <= c.offset + g; xt++) et.push(xt);
    return z || et.push(-1), et.push(tt), et;
  }
  function K(et) {
    e(15, (tt = Math.max(0, Math.ceil(et / c.limit - 1)))), e(16, (Y = I()));
  }
  function U() {
    (c.limit = mo(this)), e(0, c);
  }
  const ft = () => {
      q(0);
    },
    Mt = () => {
      q(c.offset - 1);
    },
    It = (et) => q(et),
    kt = () => {
      q(c.offset + 1);
    },
    G = () => {
      q(tt);
    };
  return (
    (n.$$set = (et) => {
      e(41, (t = St(St({}, t), Rt(et)))),
        'settings' in et && e(0, (c = et.settings)),
        'disabled' in et && e(1, (f = et.disabled)),
        'showPreviousNextButtons' in et && e(2, (u = et.showPreviousNextButtons)),
        'showFirstLastButtons' in et && e(3, (d = et.showFirstLastButtons)),
        'showNumerals' in et && e(4, (h = et.showNumerals)),
        'maxNumerals' in et && e(24, (g = et.maxNumerals)),
        'justify' in et && e(25, (m = et.justify)),
        'select' in et && e(26, (p = et.select)),
        'amountText' in et && e(5, (_ = et.amountText)),
        'regionControl' in et && e(27, (y = et.regionControl)),
        'controlVariant' in et && e(28, (v = et.controlVariant)),
        'controlSeparator' in et && e(29, (k = et.controlSeparator)),
        'active' in et && e(30, (w = et.active)),
        'buttonClasses' in et && e(6, (M = et.buttonClasses)),
        'buttonTextPrevious' in et && e(7, (D = et.buttonTextPrevious)),
        'buttonTextNext' in et && e(8, (T = et.buttonTextNext)),
        'buttonTextFirst' in et && e(9, (P = et.buttonTextFirst)),
        'buttonTextLast' in et && e(10, (E = et.buttonTextLast)),
        'labelFirst' in et && e(11, (O = et.labelFirst)),
        'labelPrevious' in et && e(12, (H = et.labelPrevious)),
        'labelNext' in et && e(13, (W = et.labelNext)),
        'labelLast' in et && e(14, ($ = et.labelLast));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 1073741825 &&
        e(21, (i = (et) => (et === c.offset ? `${w} pointer-events-none` : ''))),
        n.$$.dirty[0] & 16777216 && N(),
        n.$$.dirty[0] & 1 && K(c.size),
        e(20, (s = `${Qh} ${m} ${t.class ?? ''}`)),
        n.$$.dirty[0] & 67108864 && e(18, (r = `${p}`)),
        n.$$.dirty[0] & 939524096 && e(17, (l = `${y} ${v} ${k}`));
    }),
    e(19, (o = `${$h}`)),
    (t = Rt(t)),
    [
      c,
      f,
      u,
      d,
      h,
      _,
      M,
      D,
      T,
      P,
      E,
      O,
      H,
      W,
      $,
      tt,
      Y,
      l,
      r,
      o,
      s,
      i,
      N,
      q,
      g,
      m,
      p,
      y,
      v,
      k,
      w,
      U,
      ft,
      Mt,
      It,
      kt,
      G,
    ]
  );
}
class eg extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        tg,
        Jh,
        rt,
        {
          settings: 0,
          disabled: 1,
          showPreviousNextButtons: 2,
          showFirstLastButtons: 3,
          showNumerals: 4,
          maxNumerals: 24,
          justify: 25,
          select: 26,
          amountText: 5,
          regionControl: 27,
          controlVariant: 28,
          controlSeparator: 29,
          active: 30,
          buttonClasses: 6,
          buttonTextPrevious: 7,
          buttonTextNext: 8,
          buttonTextFirst: 9,
          buttonTextLast: 10,
          labelFirst: 11,
          labelPrevious: 12,
          labelNext: 13,
          labelLast: 14,
        },
        null,
        [-1, -1],
      );
  }
}
function ng(n) {
  let t,
    e,
    i,
    s = `${n[4] ? 100 : n[7]}%`,
    o,
    r;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        b(e, 'class', (i = 'progress-bar-meter ' + n[5] + ' ' + n[5] + ' svelte-l4u953')),
        Ds(e, 'width', s),
        b(t, 'class', (o = 'progress-bar ' + n[6] + ' svelte-l4u953')),
        b(t, 'data-testid', 'progress-bar'),
        b(t, 'role', 'progressbar'),
        b(t, 'aria-labelledby', n[3]),
        b(t, 'aria-valuenow', n[0]),
        b(t, 'aria-valuemin', n[1]),
        b(t, 'aria-valuemax', (r = n[2] - n[1]));
    },
    m(l, a) {
      x(l, t, a), S(t, e);
    },
    p(l, [a]) {
      a & 32 &&
        i !== (i = 'progress-bar-meter ' + l[5] + ' ' + l[5] + ' svelte-l4u953') &&
        b(e, 'class', i),
        a & 144 && s !== (s = `${l[4] ? 100 : l[7]}%`) && Ds(e, 'width', s),
        a & 64 && o !== (o = 'progress-bar ' + l[6] + ' svelte-l4u953') && b(t, 'class', o),
        a & 8 && b(t, 'aria-labelledby', l[3]),
        a & 1 && b(t, 'aria-valuenow', l[0]),
        a & 2 && b(t, 'aria-valuemin', l[1]),
        a & 6 && r !== (r = l[2] - l[1]) && b(t, 'aria-valuemax', r);
    },
    i: ct,
    o: ct,
    d(l) {
      l && A(t);
    },
  };
}
const ig = 'w-full overflow-hidden',
  sg = 'h-full';
function og(n, t, e) {
  let i,
    s,
    o,
    r,
    l,
    { value: a = void 0 } = t,
    { min: c = 0 } = t,
    { max: f = 100 } = t,
    { height: u = 'h-2' } = t,
    { rounded: d = 'rounded-token' } = t,
    { meter: h = 'bg-surface-900-50-token' } = t,
    { track: g = 'bg-surface-200-700-token' } = t,
    { labelledby: m = '' } = t;
  return (
    (n.$$set = (p) => {
      e(13, (t = St(St({}, t), Rt(p)))),
        'value' in p && e(0, (a = p.value)),
        'min' in p && e(1, (c = p.min)),
        'max' in p && e(2, (f = p.max)),
        'height' in p && e(8, (u = p.height)),
        'rounded' in p && e(9, (d = p.rounded)),
        'meter' in p && e(10, (h = p.meter)),
        'track' in p && e(11, (g = p.track)),
        'labelledby' in p && e(3, (m = p.labelledby));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 7 && e(7, (i = a ? (100 * (a - c)) / (f - c) : 0)),
        n.$$.dirty & 1 && e(4, (s = a === void 0 || a < 0)),
        n.$$.dirty & 16 && e(12, (o = s ? 'animIndeterminate' : '')),
        e(6, (r = `${ig} ${u} ${d} ${g} ${t.class ?? ''}`)),
        n.$$.dirty & 5632 && e(5, (l = `${sg} ${d} ${o} ${h}`));
    }),
    (t = Rt(t)),
    [a, c, f, m, s, l, r, i, u, d, h, g, o]
  );
}
class rg extends lt {
  constructor(t) {
    super(),
      at(this, t, og, ng, rt, {
        value: 0,
        min: 1,
        max: 2,
        height: 8,
        rounded: 9,
        meter: 10,
        track: 11,
        labelledby: 3,
      });
  }
}
function lg(n) {
  let t, e, i;
  const s = n[13].default,
    o = Kt(s, n, n[12], null);
  return {
    c() {
      (t = C('div')),
        o && o.c(),
        b(t, 'class', (e = 'radio-group ' + n[1])),
        b(t, 'data-testid', 'radio-group'),
        b(t, 'role', 'radiogroup'),
        b(t, 'aria-labelledby', n[0]);
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, [l]) {
      o &&
        o.p &&
        (!i || l & 4096) &&
        Gt(o, s, r, r[12], i ? Jt(s, r[12], l, null) : Zt(r[12]), null),
        (!i || (l & 2 && e !== (e = 'radio-group ' + r[1]))) && b(t, 'class', e),
        (!i || l & 1) && b(t, 'aria-labelledby', r[0]);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
const ag = 'p-1';
function cg(n, t, e) {
  let i,
    { $$slots: s = {}, $$scope: o } = t,
    { display: r = 'inline-flex' } = t,
    { background: l = 'bg-surface-200-700-token' } = t,
    { border: a = 'border-token border-surface-400-500-token' } = t,
    { spacing: c = '' } = t,
    { rounded: f = 'rounded-token' } = t,
    { padding: u = 'px-4 py-1' } = t,
    { active: d = 'variant-filled' } = t,
    { hover: h = 'hover:variant-soft' } = t,
    { color: g = '' } = t,
    { fill: m = '' } = t,
    { labelledby: p = '' } = t;
  return (
    Ot('rounded', f),
    Ot('padding', u),
    Ot('active', d),
    Ot('hover', h),
    Ot('color', g),
    Ot('fill', m),
    (n.$$set = (_) => {
      e(14, (t = St(St({}, t), Rt(_)))),
        'display' in _ && e(3, (r = _.display)),
        'background' in _ && e(4, (l = _.background)),
        'border' in _ && e(5, (a = _.border)),
        'spacing' in _ && e(2, (c = _.spacing)),
        'rounded' in _ && e(6, (f = _.rounded)),
        'padding' in _ && e(7, (u = _.padding)),
        'active' in _ && e(8, (d = _.active)),
        'hover' in _ && e(9, (h = _.hover)),
        'color' in _ && e(10, (g = _.color)),
        'fill' in _ && e(11, (m = _.fill)),
        'labelledby' in _ && e(0, (p = _.labelledby)),
        '$$scope' in _ && e(12, (o = _.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 8 && e(2, (c = `${r.includes('flex-col') ? '' : 'space-x-1'}`)),
        e(1, (i = `${ag} ${r} ${l} ${a} ${c} ${f} ${t.class ?? ''}`));
    }),
    (t = Rt(t)),
    [p, i, c, r, l, a, f, u, d, h, g, m, o, s]
  );
}
class yo extends lt {
  constructor(t) {
    super(),
      at(this, t, cg, lg, rt, {
        display: 3,
        background: 4,
        border: 5,
        spacing: 2,
        rounded: 6,
        padding: 7,
        active: 8,
        hover: 9,
        color: 10,
        fill: 11,
        labelledby: 0,
      });
  }
}
function ug(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u = [{ type: 'radio' }, { name: n[1] }, { __value: n[2] }, n[9](), { tabindex: '-1' }],
    d = {};
  for (let m = 0; m < u.length; m += 1) d = St(d, u[m]);
  const h = n[19].default,
    g = Kt(h, n, n[18], null);
  return (
    (a = Vo(n[27][0])),
    {
      c() {
        (t = C('label')),
          (e = C('div')),
          (i = C('div')),
          (s = C('input')),
          (o = B()),
          g && g.c(),
          Fe(s, d),
          b(i, 'class', 'h-0 w-0 overflow-hidden'),
          b(e, 'class', (r = 'radio-item ' + n[7])),
          b(e, 'data-testid', 'radio-item'),
          b(e, 'role', 'radio'),
          b(e, 'aria-checked', n[5]),
          b(e, 'aria-label', n[4]),
          b(e, 'tabindex', '0'),
          b(e, 'title', n[3]),
          a.p(s);
      },
      m(m, p) {
        x(m, t, p),
          S(t, e),
          S(e, i),
          S(i, s),
          s.autofocus && s.focus(),
          n[25](s),
          (s.checked = s.__value === n[0]),
          S(e, o),
          g && g.m(e, null),
          (l = !0),
          c ||
            ((f = [
              R(s, 'change', n[26]),
              R(s, 'click', n[23]),
              R(s, 'change', n[24]),
              R(e, 'keydown', n[8]),
              R(e, 'keydown', n[20]),
              R(e, 'keyup', n[21]),
              R(e, 'keypress', n[22]),
            ]),
            (c = !0));
      },
      p(m, [p]) {
        Fe(
          s,
          (d = Jn(u, [
            { type: 'radio' },
            (!l || p & 2) && { name: m[1] },
            (!l || p & 4) && { __value: m[2] },
            m[9](),
            { tabindex: '-1' },
          ])),
        ),
          p & 1 && (s.checked = s.__value === m[0]),
          g &&
            g.p &&
            (!l || p & 262144) &&
            Gt(g, h, m, m[18], l ? Jt(h, m[18], p, null) : Zt(m[18]), null),
          (!l || (p & 128 && r !== (r = 'radio-item ' + m[7]))) && b(e, 'class', r),
          (!l || p & 32) && b(e, 'aria-checked', m[5]),
          (!l || p & 16) && b(e, 'aria-label', m[4]),
          (!l || p & 8) && b(e, 'title', m[3]);
      },
      i(m) {
        l || (L(g, m), (l = !0));
      },
      o(m) {
        F(g, m), (l = !1);
      },
      d(m) {
        m && A(t), n[25](null), g && g.d(m), a.r(), (c = !1), Pt(f);
      },
    }
  );
}
const fg = 'flex-auto text-base text-center cursor-pointer',
  dg = 'opacity-50 cursor-not-allowed';
function hg(n, t, e) {
  let i, s, o, r;
  const l = [
    'group',
    'name',
    'value',
    'title',
    'label',
    'rounded',
    'padding',
    'active',
    'hover',
    'color',
    'fill',
  ];
  let a = Ee(t, l),
    { $$slots: c = {}, $$scope: f } = t,
    { group: u } = t,
    { name: d } = t,
    { value: h } = t,
    { title: g = '' } = t,
    { label: m = '' } = t,
    { rounded: p = gt('rounded') } = t,
    { padding: _ = gt('padding') } = t,
    { active: y = gt('active') } = t,
    { hover: v = gt('hover') } = t,
    { color: k = gt('color') } = t,
    { fill: w = gt('fill') } = t,
    M;
  function D(N) {
    ['Enter', 'Space'].includes(N.code) && (N.preventDefault(), M.click());
  }
  function T() {
    return delete a.class, a;
  }
  const P = [[]];
  function E(N) {
    ut.call(this, n, N);
  }
  function O(N) {
    ut.call(this, n, N);
  }
  function H(N) {
    ut.call(this, n, N);
  }
  function W(N) {
    ut.call(this, n, N);
  }
  function $(N) {
    ut.call(this, n, N);
  }
  function tt(N) {
    dt[N ? 'unshift' : 'push'](() => {
      (M = N), e(6, M);
    });
  }
  function Y() {
    (u = this.__value), e(0, u);
  }
  return (
    (n.$$set = (N) => {
      e(29, (t = St(St({}, t), Rt(N)))),
        e(28, (a = Ee(t, l))),
        'group' in N && e(0, (u = N.group)),
        'name' in N && e(1, (d = N.name)),
        'value' in N && e(2, (h = N.value)),
        'title' in N && e(3, (g = N.title)),
        'label' in N && e(4, (m = N.label)),
        'rounded' in N && e(10, (p = N.rounded)),
        'padding' in N && e(11, (_ = N.padding)),
        'active' in N && e(12, (y = N.active)),
        'hover' in N && e(13, (v = N.hover)),
        'color' in N && e(14, (k = N.color)),
        'fill' in N && e(15, (w = N.fill)),
        '$$scope' in N && e(18, (f = N.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 5 && e(5, (i = h === u)),
        n.$$.dirty & 61472 && e(17, (s = i ? `${y} ${k} ${w}` : v)),
        e(16, (o = t.disabled ? dg : '')),
        e(7, (r = `${fg} ${_} ${p} ${s} ${o} ${t.class ?? ''}`));
    }),
    (t = Rt(t)),
    [u, d, h, g, m, i, M, r, D, T, p, _, y, v, k, w, o, s, f, c, E, O, H, W, $, tt, Y, P]
  );
}
class wn extends lt {
  constructor(t) {
    super(),
      at(this, t, hg, ug, rt, {
        group: 0,
        name: 1,
        value: 2,
        title: 3,
        label: 4,
        rounded: 10,
        padding: 11,
        active: 12,
        hover: 13,
        color: 14,
        fill: 15,
      });
  }
}
function Qr(n) {
  let t, e;
  const i = n[22].default,
    s = Kt(i, n, n[21], null);
  return {
    c() {
      (t = C('div')), s && s.c(), b(t, 'class', 'slide-toggle-text ml-3');
    },
    m(o, r) {
      x(o, t, r), s && s.m(t, null), (e = !0);
    },
    p(o, r) {
      s &&
        s.p &&
        (!e || r[0] & 2097152) &&
        Gt(s, i, o, o[21], e ? Jt(i, o[21], r, null) : Zt(o[21]), null);
    },
    i(o) {
      e || (L(s, o), (e = !0));
    },
    o(o) {
      F(s, o), (e = !1);
    },
    d(o) {
      o && A(t), s && s.d(o);
    },
  };
}
function gg(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p = [
      { type: 'checkbox' },
      { class: 'slide-toggle-input hidden' },
      { name: n[1] },
      n[8](),
      { disabled: (s = n[9].disabled) },
    ],
    _ = {};
  for (let v = 0; v < p.length; v += 1) _ = St(_, p[v]);
  let y = n[10].default && Qr(n);
  return {
    c() {
      (t = C('div')),
        (e = C('label')),
        (i = C('input')),
        (o = B()),
        (r = C('div')),
        (l = C('div')),
        (f = B()),
        y && y.c(),
        Fe(i, _),
        b(l, 'class', (a = 'slide-toggle-thumb ' + n[3])),
        st(l, 'cursor-not-allowed', n[9].disabled),
        b(r, 'class', (c = 'slide-toggle-track ' + n[4])),
        st(r, 'cursor-not-allowed', n[9].disabled),
        b(e, 'class', (u = 'slide-toggle-label ' + n[5])),
        b(t, 'id', n[2]),
        b(t, 'class', (d = 'slide-toggle ' + n[6])),
        b(t, 'data-testid', 'slide-toggle'),
        b(t, 'role', 'switch'),
        b(t, 'aria-label', n[2]),
        b(t, 'aria-checked', n[0]),
        b(t, 'tabindex', '0');
    },
    m(v, k) {
      x(v, t, k),
        S(t, e),
        S(e, i),
        i.autofocus && i.focus(),
        (i.checked = n[0]),
        S(e, o),
        S(e, r),
        S(r, l),
        S(e, f),
        y && y.m(e, null),
        (h = !0),
        g ||
          ((m = [
            R(i, 'change', n[31]),
            R(i, 'click', n[23]),
            R(i, 'keydown', n[24]),
            R(i, 'keyup', n[25]),
            R(i, 'keypress', n[26]),
            R(i, 'mouseover', n[27]),
            R(i, 'change', n[28]),
            R(i, 'focus', n[29]),
            R(i, 'blur', n[30]),
            R(t, 'keydown', n[7]),
          ]),
          (g = !0));
    },
    p(v, k) {
      Fe(
        i,
        (_ = Jn(p, [
          { type: 'checkbox' },
          { class: 'slide-toggle-input hidden' },
          (!h || k[0] & 2) && { name: v[1] },
          v[8](),
          (!h || (k[0] & 512 && s !== (s = v[9].disabled))) && { disabled: s },
        ])),
      ),
        k[0] & 1 && (i.checked = v[0]),
        (!h || (k[0] & 8 && a !== (a = 'slide-toggle-thumb ' + v[3]))) && b(l, 'class', a),
        (!h || k[0] & 520) && st(l, 'cursor-not-allowed', v[9].disabled),
        (!h || (k[0] & 16 && c !== (c = 'slide-toggle-track ' + v[4]))) && b(r, 'class', c),
        (!h || k[0] & 528) && st(r, 'cursor-not-allowed', v[9].disabled),
        v[10].default
          ? y
            ? (y.p(v, k), k[0] & 1024 && L(y, 1))
            : ((y = Qr(v)), y.c(), L(y, 1), y.m(e, null))
          : y &&
            (vt(),
            F(y, 1, 1, () => {
              y = null;
            }),
            wt()),
        (!h || (k[0] & 32 && u !== (u = 'slide-toggle-label ' + v[5]))) && b(e, 'class', u),
        (!h || k[0] & 4) && b(t, 'id', v[2]),
        (!h || (k[0] & 64 && d !== (d = 'slide-toggle ' + v[6]))) && b(t, 'class', d),
        (!h || k[0] & 4) && b(t, 'aria-label', v[2]),
        (!h || k[0] & 1) && b(t, 'aria-checked', v[0]);
    },
    i(v) {
      h || (L(y), (h = !0));
    },
    o(v) {
      F(y), (h = !1);
    },
    d(v) {
      v && A(t), y && y.d(), (g = !1), Pt(m);
    },
  };
}
const mg = 'inline-block',
  pg = 'unstyled flex items-center',
  bg = 'flex transition-all duration-[200ms] cursor-pointer',
  _g = 'w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow';
function yg(n, t, e) {
  let i, s, o, r, l, a, c, f;
  const u = ['name', 'checked', 'size', 'background', 'active', 'border', 'rounded', 'label'];
  let d = Ee(t, u),
    { $$slots: h = {}, $$scope: g } = t;
  const m = Zn(h),
    p = ke();
  let { name: _ } = t,
    { checked: y = !1 } = t,
    { size: v = 'md' } = t,
    { background: k = 'bg-surface-400 dark:bg-surface-700' } = t,
    { active: w = 'bg-surface-900 dark:bg-surface-300' } = t,
    { border: M = '' } = t,
    { rounded: D = 'rounded-full' } = t,
    { label: T = '' } = t,
    P;
  switch (v) {
    case 'sm':
      P = 'w-12 h-6';
      break;
    case 'lg':
      P = 'w-20 h-10';
      break;
    default:
      P = 'w-16 h-8';
  }
  function E(K) {
    ['Enter', 'Space'].includes(K.code) &&
      (K.preventDefault(), p('keyup', K), K.currentTarget.firstChild.click());
  }
  function O() {
    return delete d.class, d;
  }
  function H(K) {
    ut.call(this, n, K);
  }
  function W(K) {
    ut.call(this, n, K);
  }
  function $(K) {
    ut.call(this, n, K);
  }
  function tt(K) {
    ut.call(this, n, K);
  }
  function Y(K) {
    ut.call(this, n, K);
  }
  function N(K) {
    ut.call(this, n, K);
  }
  function q(K) {
    ut.call(this, n, K);
  }
  function V(K) {
    ut.call(this, n, K);
  }
  function I() {
    (y = this.checked), e(0, y);
  }
  return (
    (n.$$set = (K) => {
      e(9, (t = St(St({}, t), Rt(K)))),
        e(33, (d = Ee(t, u))),
        'name' in K && e(1, (_ = K.name)),
        'checked' in K && e(0, (y = K.checked)),
        'size' in K && e(11, (v = K.size)),
        'background' in K && e(12, (k = K.background)),
        'active' in K && e(13, (w = K.active)),
        'border' in K && e(14, (M = K.border)),
        'rounded' in K && e(15, (D = K.rounded)),
        'label' in K && e(2, (T = K.label)),
        '$$scope' in K && e(21, (g = K.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 12289 && e(19, (i = y ? w : `${k} cursor-pointer`)),
        n.$$.dirty[0] & 1 && e(18, (s = y ? 'bg-white/75' : 'bg-white')),
        n.$$.dirty[0] & 1 && e(17, (o = y ? 'translate-x-full' : '')),
        e(
          20,
          (r =
            t.disabled === !0
              ? 'opacity-50'
              : 'hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer'),
        ),
        e(6, (l = `${mg} ${D} ${r} ${t.class ?? ''}`)),
        n.$$.dirty[0] & 638976 && e(4, (c = `${bg} ${M} ${D} ${P} ${i}`)),
        n.$$.dirty[0] & 425984 && e(3, (f = `${_g} ${D} ${s} ${o}`));
    }),
    e(5, (a = `${pg}`)),
    (t = Rt(t)),
    [
      y,
      _,
      T,
      f,
      c,
      a,
      l,
      E,
      O,
      t,
      m,
      v,
      k,
      w,
      M,
      D,
      P,
      o,
      s,
      i,
      r,
      g,
      h,
      H,
      W,
      $,
      tt,
      Y,
      N,
      q,
      V,
      I,
    ]
  );
}
class ei extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        yg,
        gg,
        rt,
        {
          name: 1,
          checked: 0,
          size: 11,
          background: 12,
          active: 13,
          border: 14,
          rounded: 15,
          label: 2,
        },
        null,
        [-1, -1],
      );
  }
}
const kg = (n) => ({}),
  $r = (n) => ({});
function tl(n) {
  let t, e, i;
  const s = n[17].panel,
    o = Kt(s, n, n[16], $r);
  return {
    c() {
      (t = C('div')),
        o && o.c(),
        b(t, 'class', (e = 'tab-panel ' + n[2])),
        b(t, 'role', 'tabpanel'),
        b(t, 'aria-labelledby', n[1]),
        b(t, 'tabindex', '0');
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, l) {
      o && o.p && (!i || l & 65536) && Gt(o, s, r, r[16], i ? Jt(s, r[16], l, kg) : Zt(r[16]), $r),
        (!i || (l & 4 && e !== (e = 'tab-panel ' + r[2]))) && b(t, 'class', e),
        (!i || l & 2) && b(t, 'aria-labelledby', r[1]);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
function vg(n) {
  let t, e, i, s, o, r, l, a;
  const c = n[17].default,
    f = Kt(c, n, n[16], null);
  let u = n[5].panel && tl(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        f && f.c(),
        (s = B()),
        u && u.c(),
        b(e, 'class', (i = 'tab-list ' + n[3])),
        b(e, 'role', 'tablist'),
        b(e, 'aria-labelledby', n[0]),
        b(t, 'class', (o = 'tab-group ' + n[4])),
        b(t, 'data-testid', 'tab-group');
    },
    m(d, h) {
      x(d, t, h),
        S(t, e),
        f && f.m(e, null),
        S(t, s),
        u && u.m(t, null),
        (r = !0),
        l ||
          ((a = [
            R(t, 'click', n[18]),
            R(t, 'keypress', n[19]),
            R(t, 'keydown', n[20]),
            R(t, 'keyup', n[21]),
          ]),
          (l = !0));
    },
    p(d, [h]) {
      f &&
        f.p &&
        (!r || h & 65536) &&
        Gt(f, c, d, d[16], r ? Jt(c, d[16], h, null) : Zt(d[16]), null),
        (!r || (h & 8 && i !== (i = 'tab-list ' + d[3]))) && b(e, 'class', i),
        (!r || h & 1) && b(e, 'aria-labelledby', d[0]),
        d[5].panel
          ? u
            ? (u.p(d, h), h & 32 && L(u, 1))
            : ((u = tl(d)), u.c(), L(u, 1), u.m(t, null))
          : u &&
            (vt(),
            F(u, 1, 1, () => {
              u = null;
            }),
            wt()),
        (!r || (h & 16 && o !== (o = 'tab-group ' + d[4]))) && b(t, 'class', o);
    },
    i(d) {
      r || (L(f, d), L(u), (r = !0));
    },
    o(d) {
      F(f, d), F(u), (r = !1);
    },
    d(d) {
      d && A(t), f && f.d(d), u && u.d(), (l = !1), Pt(a);
    },
  };
}
const wg = 'space-y-4',
  Sg = 'flex overflow-x-auto hide-scrollbar',
  Mg = '';
function Dg(n, t, e) {
  let i,
    s,
    o,
    { $$slots: r = {}, $$scope: l } = t;
  const a = Zn(r);
  let { justify: c = 'justify-start' } = t,
    { border: f = 'border-b border-surface-400-500-token' } = t,
    { active: u = 'border-b-2 border-surface-900-50-token' } = t,
    { hover: d = 'hover:variant-soft' } = t,
    { flex: h = 'flex-none' } = t,
    { padding: g = 'px-4 py-2' } = t,
    { rounded: m = 'rounded-tl-container-token rounded-tr-container-token' } = t,
    { spacing: p = 'space-y-1' } = t,
    { regionList: _ = '' } = t,
    { regionPanel: y = '' } = t,
    { labelledby: v = '' } = t,
    { panel: k = '' } = t;
  Ot('active', u),
    Ot('hover', d),
    Ot('flex', h),
    Ot('padding', g),
    Ot('rounded', m),
    Ot('spacing', p);
  function w(P) {
    ut.call(this, n, P);
  }
  function M(P) {
    ut.call(this, n, P);
  }
  function D(P) {
    ut.call(this, n, P);
  }
  function T(P) {
    ut.call(this, n, P);
  }
  return (
    (n.$$set = (P) => {
      e(22, (t = St(St({}, t), Rt(P)))),
        'justify' in P && e(6, (c = P.justify)),
        'border' in P && e(7, (f = P.border)),
        'active' in P && e(8, (u = P.active)),
        'hover' in P && e(9, (d = P.hover)),
        'flex' in P && e(10, (h = P.flex)),
        'padding' in P && e(11, (g = P.padding)),
        'rounded' in P && e(12, (m = P.rounded)),
        'spacing' in P && e(13, (p = P.spacing)),
        'regionList' in P && e(14, (_ = P.regionList)),
        'regionPanel' in P && e(15, (y = P.regionPanel)),
        'labelledby' in P && e(0, (v = P.labelledby)),
        'panel' in P && e(1, (k = P.panel)),
        '$$scope' in P && e(16, (l = P.$$scope));
    }),
    (n.$$.update = () => {
      e(4, (i = `${wg} ${t.class ?? ''}`)),
        n.$$.dirty & 16576 && e(3, (s = `${Sg} ${c} ${f} ${_}`)),
        n.$$.dirty & 32768 && e(2, (o = `${Mg} ${y}`));
    }),
    (t = Rt(t)),
    [v, k, o, s, i, a, c, f, u, d, h, g, m, p, _, y, l, r, w, M, D, T]
  );
}
class Au extends lt {
  constructor(t) {
    super(),
      at(this, t, Dg, vg, rt, {
        justify: 6,
        border: 7,
        active: 8,
        hover: 9,
        flex: 10,
        padding: 11,
        rounded: 12,
        spacing: 13,
        regionList: 14,
        regionPanel: 15,
        labelledby: 0,
        panel: 1,
      });
  }
}
const Cg = (n) => ({}),
  el = (n) => ({});
function nl(n) {
  let t, e;
  const i = n[22].lead,
    s = Kt(i, n, n[21], el);
  return {
    c() {
      (t = C('div')), s && s.c(), b(t, 'class', 'tab-lead');
    },
    m(o, r) {
      x(o, t, r), s && s.m(t, null), (e = !0);
    },
    p(o, r) {
      s &&
        s.p &&
        (!e || r[0] & 2097152) &&
        Gt(s, i, o, o[21], e ? Jt(i, o[21], r, Cg) : Zt(o[21]), el);
    },
    i(o) {
      e || (L(s, o), (e = !0));
    },
    o(o) {
      F(s, o), (e = !1);
    },
    d(o) {
      o && A(t), s && s.d(o);
    },
  };
}
function Tg(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p = [{ type: 'radio' }, { name: n[1] }, { __value: n[2] }, n[11](), { tabindex: '-1' }],
    _ = {};
  for (let w = 0; w < p.length; w += 1) _ = St(_, p[w]);
  let y = n[12].lead && nl(n);
  const v = n[22].default,
    k = Kt(v, n, n[21], null);
  return (
    (h = Vo(n[30][0])),
    {
      c() {
        (t = C('label')),
          (e = C('div')),
          (i = C('div')),
          (s = C('input')),
          (o = B()),
          (r = C('div')),
          y && y.c(),
          (l = B()),
          (a = C('div')),
          k && k.c(),
          Fe(s, _),
          b(i, 'class', 'h-0 w-0 overflow-hidden'),
          b(a, 'class', 'tab-label'),
          b(r, 'class', (c = 'tab-interface ' + n[8])),
          b(e, 'class', (f = 'tab ' + n[7])),
          b(e, 'data-testid', 'tab'),
          b(e, 'role', 'tab'),
          b(e, 'aria-controls', n[4]),
          b(e, 'aria-selected', n[5]),
          b(e, 'tabindex', (u = n[5] ? 0 : -1)),
          b(t, 'class', n[9]),
          b(t, 'title', n[3]),
          h.p(s);
      },
      m(w, M) {
        x(w, t, M),
          S(t, e),
          S(e, i),
          S(i, s),
          s.autofocus && s.focus(),
          n[28](s),
          (s.checked = s.__value === n[0]),
          S(e, o),
          S(e, r),
          y && y.m(r, null),
          S(r, l),
          S(r, a),
          k && k.m(a, null),
          (d = !0),
          g ||
            ((m = [
              R(s, 'change', n[29]),
              R(s, 'click', n[26]),
              R(s, 'change', n[27]),
              R(e, 'keydown', n[10]),
              R(e, 'keydown', n[23]),
              R(e, 'keyup', n[24]),
              R(e, 'keypress', n[25]),
            ]),
            (g = !0));
      },
      p(w, M) {
        Fe(
          s,
          (_ = Jn(p, [
            { type: 'radio' },
            (!d || M[0] & 2) && { name: w[1] },
            (!d || M[0] & 4) && { __value: w[2] },
            w[11](),
            { tabindex: '-1' },
          ])),
        ),
          M[0] & 1 && (s.checked = s.__value === w[0]),
          w[12].lead
            ? y
              ? (y.p(w, M), M[0] & 4096 && L(y, 1))
              : ((y = nl(w)), y.c(), L(y, 1), y.m(r, l))
            : y &&
              (vt(),
              F(y, 1, 1, () => {
                y = null;
              }),
              wt()),
          k &&
            k.p &&
            (!d || M[0] & 2097152) &&
            Gt(k, v, w, w[21], d ? Jt(v, w[21], M, null) : Zt(w[21]), null),
          (!d || (M[0] & 256 && c !== (c = 'tab-interface ' + w[8]))) && b(r, 'class', c),
          (!d || (M[0] & 128 && f !== (f = 'tab ' + w[7]))) && b(e, 'class', f),
          (!d || M[0] & 16) && b(e, 'aria-controls', w[4]),
          (!d || M[0] & 32) && b(e, 'aria-selected', w[5]),
          (!d || (M[0] & 32 && u !== (u = w[5] ? 0 : -1))) && b(e, 'tabindex', u),
          (!d || M[0] & 512) && b(t, 'class', w[9]),
          (!d || M[0] & 8) && b(t, 'title', w[3]);
      },
      i(w) {
        d || (L(y), L(k, w), (d = !0));
      },
      o(w) {
        F(y), F(k, w), (d = !1);
      },
      d(w) {
        w && A(t), n[28](null), y && y.d(), k && k.d(w), h.r(), (g = !1), Pt(m);
      },
    }
  );
}
const Pg = 'text-center cursor-pointer transition-colors duration-100',
  xg = '';
function Ag(n, t, e) {
  let i, s, o, r, l;
  const a = [
    'group',
    'name',
    'value',
    'title',
    'controls',
    'regionTab',
    'active',
    'hover',
    'flex',
    'padding',
    'rounded',
    'spacing',
  ];
  let c = Ee(t, a),
    { $$slots: f = {}, $$scope: u } = t;
  const d = Zn(f);
  let { group: h } = t,
    { name: g } = t,
    { value: m } = t,
    { title: p = '' } = t,
    { controls: _ = '' } = t,
    { regionTab: y = '' } = t,
    { active: v = gt('active') } = t,
    { hover: k = gt('hover') } = t,
    { flex: w = gt('flex') } = t,
    { padding: M = gt('padding') } = t,
    { rounded: D = gt('rounded') } = t,
    { spacing: T = gt('spacing') } = t,
    P;
  function E(I) {
    if (['Enter', 'Space'].includes(I.code)) I.preventDefault(), P.click();
    else if (I.code === 'ArrowRight') {
      const K = P.closest('.tab-list');
      if (!K) return;
      const U = Array.from(K.querySelectorAll('.tab')),
        ft = P.closest('.tab');
      if (!ft) return;
      const Mt = U.indexOf(ft),
        It = Mt + 1 >= U.length ? 0 : Mt + 1,
        kt = U[It],
        G = kt == null ? void 0 : kt.querySelector('input');
      kt && G && (G.click(), kt.focus());
    } else if (I.code === 'ArrowLeft') {
      const K = P.closest('.tab-list');
      if (!K) return;
      const U = Array.from(K.querySelectorAll('.tab')),
        ft = P.closest('.tab');
      if (!ft) return;
      const Mt = U.indexOf(ft),
        It = Mt - 1 < 0 ? U.length - 1 : Mt - 1,
        kt = U[It],
        G = kt == null ? void 0 : kt.querySelector('input');
      kt && G && (G.click(), kt.focus());
    }
  }
  function O() {
    return delete c.class, c;
  }
  const H = [[]];
  function W(I) {
    ut.call(this, n, I);
  }
  function $(I) {
    ut.call(this, n, I);
  }
  function tt(I) {
    ut.call(this, n, I);
  }
  function Y(I) {
    ut.call(this, n, I);
  }
  function N(I) {
    ut.call(this, n, I);
  }
  function q(I) {
    dt[I ? 'unshift' : 'push'](() => {
      (P = I), e(6, P);
    });
  }
  function V() {
    (h = this.__value), e(0, h);
  }
  return (
    (n.$$set = (I) => {
      e(32, (t = St(St({}, t), Rt(I)))),
        e(31, (c = Ee(t, a))),
        'group' in I && e(0, (h = I.group)),
        'name' in I && e(1, (g = I.name)),
        'value' in I && e(2, (m = I.value)),
        'title' in I && e(3, (p = I.title)),
        'controls' in I && e(4, (_ = I.controls)),
        'regionTab' in I && e(13, (y = I.regionTab)),
        'active' in I && e(14, (v = I.active)),
        'hover' in I && e(15, (k = I.hover)),
        'flex' in I && e(16, (w = I.flex)),
        'padding' in I && e(17, (M = I.padding)),
        'rounded' in I && e(18, (D = I.rounded)),
        'spacing' in I && e(19, (T = I.spacing)),
        '$$scope' in I && e(21, (u = I.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 5 && e(5, (i = m === h)),
        n.$$.dirty[0] & 49184 && e(20, (s = i ? v : k)),
        e(9, (o = `${Pg} ${w} ${M} ${D} ${s} ${t.class ?? ''}`)),
        n.$$.dirty[0] & 524288 && e(8, (r = `${xg} ${T}`)),
        n.$$.dirty[0] & 8192 && e(7, (l = `${y}`));
    }),
    (t = Rt(t)),
    [h, g, m, p, _, i, P, l, r, o, E, O, d, y, v, k, w, M, D, T, s, u, f, W, $, tt, Y, N, q, V, H]
  );
}
class Mi extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Ag,
        Tg,
        rt,
        {
          group: 0,
          name: 1,
          value: 2,
          title: 3,
          controls: 4,
          regionTab: 13,
          active: 14,
          hover: 15,
          flex: 16,
          padding: 17,
          rounded: 18,
          spacing: 19,
        },
        null,
        [-1, -1],
      );
  }
}
function il(n) {
  let t = n[12],
    e,
    i,
    s = al(n);
  return {
    c() {
      s.c(), (e = ee());
    },
    m(o, r) {
      s.m(o, r), x(o, e, r), (i = !0);
    },
    p(o, r) {
      r[0] & 4096 && rt(t, (t = o[12]))
        ? (vt(), F(s, 1, 1, ct), wt(), (s = al(o)), s.c(), L(s, 1), s.m(e.parentNode, e))
        : s.p(o, r);
    },
    i(o) {
      i || (L(s), (i = !0));
    },
    o(o) {
      F(s), (i = !1);
    },
    d(o) {
      o && A(e), s.d(o);
    },
  };
}
function Lg(n) {
  var c, f;
  let t, e, i, s, o;
  const r = [(c = n[14]) == null ? void 0 : c.props, { parent: n[15] }];
  var l = (f = n[14]) == null ? void 0 : f.ref;
  function a(u) {
    let d = { $$slots: { default: [Fg] }, $$scope: { ctx: u } };
    for (let h = 0; h < r.length; h += 1) d = St(d, r[h]);
    return { props: d };
  }
  return (
    l && (e = jn(l, a(n))),
    {
      c() {
        var u;
        (t = C('div')),
          e && Z(e.$$.fragment),
          b(
            t,
            'class',
            (i = 'modal contents ' + (((u = n[12][0]) == null ? void 0 : u.modalClasses) ?? '')),
          ),
          b(t, 'data-testid', 'modal-component'),
          b(t, 'role', 'dialog'),
          b(t, 'aria-modal', 'true'),
          b(t, 'aria-label', (s = n[12][0].title ?? ''));
      },
      m(u, d) {
        x(u, t, d), e && J(e, t, null), (o = !0);
      },
      p(u, d) {
        var g, m, p;
        const h =
          d[0] & 49152
            ? Jn(r, [
                d[0] & 16384 && Ad((g = u[14]) == null ? void 0 : g.props),
                d[0] & 32768 && { parent: u[15] },
              ])
            : {};
        if (
          ((d[0] & 16384) | (d[1] & 8192) && (h.$$scope = { dirty: d, ctx: u }),
          d[0] & 16384 && l !== (l = (m = u[14]) == null ? void 0 : m.ref))
        ) {
          if (e) {
            vt();
            const _ = e;
            F(_.$$.fragment, 1, 0, () => {
              Q(_, 1);
            }),
              wt();
          }
          l
            ? ((e = jn(l, a(u))), Z(e.$$.fragment), L(e.$$.fragment, 1), J(e, t, null))
            : (e = null);
        } else l && e.$set(h);
        (!o ||
          (d[0] & 4096 &&
            i !==
              (i =
                'modal contents ' + (((p = u[12][0]) == null ? void 0 : p.modalClasses) ?? '')))) &&
          b(t, 'class', i),
          (!o || (d[0] & 4096 && s !== (s = u[12][0].title ?? ''))) && b(t, 'aria-label', s);
      },
      i(u) {
        o || (e && L(e.$$.fragment, u), (o = !0));
      },
      o(u) {
        e && F(e.$$.fragment, u), (o = !1);
      },
      d(u) {
        u && A(t), e && Q(e);
      },
    }
  );
}
function Og(n) {
  var m, p, _, y;
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c = ((m = n[12][0]) == null ? void 0 : m.title) && ol(n),
    f = ((p = n[12][0]) == null ? void 0 : p.body) && rl(n),
    u =
      ((_ = n[12][0]) == null ? void 0 : _.image) &&
      typeof ((y = n[12][0]) == null ? void 0 : y.image) == 'string' &&
      ll(n);
  function d(v, k) {
    if (v[12][0].type === 'alert') return Rg;
    if (v[12][0].type === 'confirm') return Ig;
    if (v[12][0].type === 'prompt') return Eg;
  }
  let h = d(n),
    g = h && h(n);
  return {
    c() {
      (t = C('div')),
        c && c.c(),
        (e = B()),
        f && f.c(),
        (i = B()),
        u && u.c(),
        (s = B()),
        g && g.c(),
        b(t, 'class', (o = 'modal ' + n[16])),
        b(t, 'data-testid', 'modal'),
        b(t, 'role', 'dialog'),
        b(t, 'aria-modal', 'true'),
        b(t, 'aria-label', (r = n[12][0].title ?? ''));
    },
    m(v, k) {
      x(v, t, k),
        c && c.m(t, null),
        S(t, e),
        f && f.m(t, null),
        S(t, i),
        u && u.m(t, null),
        S(t, s),
        g && g.m(t, null),
        (a = !0);
    },
    p(v, k) {
      var w, M, D, T;
      (n = v),
        (w = n[12][0]) != null && w.title
          ? c
            ? c.p(n, k)
            : ((c = ol(n)), c.c(), c.m(t, e))
          : c && (c.d(1), (c = null)),
        (M = n[12][0]) != null && M.body
          ? f
            ? f.p(n, k)
            : ((f = rl(n)), f.c(), f.m(t, i))
          : f && (f.d(1), (f = null)),
        (D = n[12][0]) != null &&
        D.image &&
        typeof ((T = n[12][0]) == null ? void 0 : T.image) == 'string'
          ? u
            ? u.p(n, k)
            : ((u = ll(n)), u.c(), u.m(t, s))
          : u && (u.d(1), (u = null)),
        h === (h = d(n)) && g
          ? g.p(n, k)
          : (g && g.d(1), (g = h && h(n)), g && (g.c(), g.m(t, null))),
        (!a || (k[0] & 65536 && o !== (o = 'modal ' + n[16]))) && b(t, 'class', o),
        (!a || (k[0] & 4096 && r !== (r = n[12][0].title ?? ''))) && b(t, 'aria-label', r);
    },
    i(v) {
      a ||
        (pt(() => {
          a && (l || (l = ot(t, he, { duration: n[3], opacity: 0, y: 100 }, !0)), l.run(1));
        }),
        (a = !0));
    },
    o(v) {
      l || (l = ot(t, he, { duration: n[3], opacity: 0, y: 100 }, !1)), l.run(0), (a = !1);
    },
    d(v) {
      v && A(t), c && c.d(), f && f.d(), u && u.d(), g && g.d(), v && l && l.end();
    },
  };
}
function sl(n) {
  var s;
  let t,
    e = ((s = n[14]) == null ? void 0 : s.slot) + '',
    i;
  return {
    c() {
      (t = new Ld(!1)), (i = ee()), (t.a = i);
    },
    m(o, r) {
      t.m(e, o, r), x(o, i, r);
    },
    p(o, r) {
      var l;
      r[0] & 16384 && e !== (e = ((l = o[14]) == null ? void 0 : l.slot) + '') && t.p(e);
    },
    d(o) {
      o && A(i), o && t.d();
    },
  };
}
function Fg(n) {
  var i;
  let t,
    e = ((i = n[14]) == null ? void 0 : i.slot) && sl(n);
  return {
    c() {
      e && e.c(), (t = ee());
    },
    m(s, o) {
      e && e.m(s, o), x(s, t, o);
    },
    p(s, o) {
      var r;
      (r = s[14]) != null && r.slot
        ? e
          ? e.p(s, o)
          : ((e = sl(s)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    d(s) {
      e && e.d(s), s && A(t);
    },
  };
}
function ol(n) {
  let t,
    e = n[12][0].title + '',
    i;
  return {
    c() {
      (t = C('header')), b(t, 'class', (i = 'modal-header ' + n[9]));
    },
    m(s, o) {
      x(s, t, o), (t.innerHTML = e);
    },
    p(s, o) {
      o[0] & 4096 && e !== (e = s[12][0].title + '') && (t.innerHTML = e),
        o[0] & 512 && i !== (i = 'modal-header ' + s[9]) && b(t, 'class', i);
    },
    d(s) {
      s && A(t);
    },
  };
}
function rl(n) {
  let t,
    e = n[12][0].body + '',
    i;
  return {
    c() {
      (t = C('article')), b(t, 'class', (i = 'modal-body ' + n[10]));
    },
    m(s, o) {
      x(s, t, o), (t.innerHTML = e);
    },
    p(s, o) {
      o[0] & 4096 && e !== (e = s[12][0].body + '') && (t.innerHTML = e),
        o[0] & 1024 && i !== (i = 'modal-body ' + s[10]) && b(t, 'class', i);
    },
    d(s) {
      s && A(t);
    },
  };
}
function ll(n) {
  let t, e;
  return {
    c() {
      var i;
      (t = C('img')),
        b(t, 'class', 'modal-image ' + Ng),
        ln(t.src, (e = (i = n[12][0]) == null ? void 0 : i.image)) || b(t, 'src', e),
        b(t, 'alt', 'Modal');
    },
    m(i, s) {
      x(i, t, s);
    },
    p(i, s) {
      var o;
      s[0] & 4096 && !ln(t.src, (e = (o = i[12][0]) == null ? void 0 : o.image)) && b(t, 'src', e);
    },
    d(i) {
      i && A(t);
    },
  };
}
function Eg(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m = [
      { class: 'modal-prompt-input input' },
      { name: 'prompt' },
      { type: 'text' },
      n[12][0].valueAttr,
    ],
    p = {};
  for (let _ = 0; _ < m.length; _ += 1) p = St(p, m[_]);
  return {
    c() {
      (t = C('form')),
        (e = C('input')),
        (i = B()),
        (s = C('footer')),
        (o = C('button')),
        (r = X(n[0])),
        (a = B()),
        (c = C('button')),
        (f = X(n[2])),
        Fe(e, p),
        b(o, 'type', 'button'),
        b(o, 'class', (l = 'btn ' + n[7])),
        b(c, 'type', 'submit'),
        b(c, 'class', (u = 'btn ' + n[8])),
        b(s, 'class', (d = 'modal-footer ' + n[11])),
        b(t, 'class', 'space-y-4');
    },
    m(_, y) {
      x(_, t, y),
        S(t, e),
        e.autofocus && e.focus(),
        Ie(e, n[13]),
        S(t, i),
        S(t, s),
        S(s, o),
        S(o, r),
        S(s, a),
        S(s, c),
        S(c, f),
        h || ((g = [R(e, 'input', n[39]), R(o, 'click', n[21]), R(t, 'submit', n[23])]), (h = !0));
    },
    p(_, y) {
      Fe(
        e,
        (p = Jn(m, [
          { class: 'modal-prompt-input input' },
          { name: 'prompt' },
          { type: 'text' },
          y[0] & 4096 && _[12][0].valueAttr,
        ])),
      ),
        y[0] & 8192 && e.value !== _[13] && Ie(e, _[13]),
        y[0] & 1 && mt(r, _[0]),
        y[0] & 128 && l !== (l = 'btn ' + _[7]) && b(o, 'class', l),
        y[0] & 4 && mt(f, _[2]),
        y[0] & 256 && u !== (u = 'btn ' + _[8]) && b(c, 'class', u),
        y[0] & 2048 && d !== (d = 'modal-footer ' + _[11]) && b(s, 'class', d);
    },
    d(_) {
      _ && A(t), (h = !1), Pt(g);
    },
  };
}
function Ig(n) {
  let t, e, i, s, o, r, l, a, c, f, u;
  return {
    c() {
      (t = C('footer')),
        (e = C('button')),
        (i = X(n[0])),
        (o = B()),
        (r = C('button')),
        (l = X(n[1])),
        b(e, 'type', 'button'),
        b(e, 'class', (s = 'btn ' + n[7])),
        b(r, 'type', 'button'),
        b(r, 'class', (a = 'btn ' + n[8])),
        b(t, 'class', (c = 'modal-footer ' + n[11]));
    },
    m(d, h) {
      x(d, t, h),
        S(t, e),
        S(e, i),
        S(t, o),
        S(t, r),
        S(r, l),
        f || ((u = [R(e, 'click', n[21]), R(r, 'click', n[22])]), (f = !0));
    },
    p(d, h) {
      h[0] & 1 && mt(i, d[0]),
        h[0] & 128 && s !== (s = 'btn ' + d[7]) && b(e, 'class', s),
        h[0] & 2 && mt(l, d[1]),
        h[0] & 256 && a !== (a = 'btn ' + d[8]) && b(r, 'class', a),
        h[0] & 2048 && c !== (c = 'modal-footer ' + d[11]) && b(t, 'class', c);
    },
    d(d) {
      d && A(t), (f = !1), Pt(u);
    },
  };
}
function Rg(n) {
  let t, e, i, s, o, r, l;
  return {
    c() {
      (t = C('footer')),
        (e = C('button')),
        (i = X(n[0])),
        b(e, 'type', 'button'),
        b(e, 'class', (s = 'btn ' + n[7])),
        b(t, 'class', (o = 'modal-footer ' + n[11]));
    },
    m(a, c) {
      x(a, t, c), S(t, e), S(e, i), r || ((l = R(e, 'click', n[21])), (r = !0));
    },
    p(a, c) {
      c[0] & 1 && mt(i, a[0]),
        c[0] & 128 && s !== (s = 'btn ' + a[7]) && b(e, 'class', s),
        c[0] & 2048 && o !== (o = 'modal-footer ' + a[11]) && b(t, 'class', o);
    },
    d(a) {
      a && A(t), (r = !1), l();
    },
  };
}
function al(n) {
  let t, e, i, s, o, r, l, a, c, f, u;
  const d = [Og, Lg],
    h = [];
  function g(m, p) {
    return m[12][0].type !== 'component' ? 0 : 1;
  }
  return (
    (i = g(n)),
    (s = h[i] = d[i](n)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          s.c(),
          b(e, 'class', (o = 'modal-transition ' + n[17])),
          b(t, 'class', (l = 'modal-backdrop ' + n[18])),
          b(t, 'data-testid', 'modal-backdrop');
      },
      m(m, p) {
        x(m, t, p),
          S(t, e),
          h[i].m(e, null),
          (c = !0),
          f ||
            ((u = [
              R(t, 'mousedown', n[19]),
              R(t, 'mouseup', n[20]),
              R(t, 'touchstart', n[37]),
              R(t, 'touchend', n[38]),
              Qn(Tu.call(null, t, !0)),
            ]),
            (f = !0));
      },
      p(m, p) {
        n = m;
        let _ = i;
        (i = g(n)),
          i === _
            ? h[i].p(n, p)
            : (vt(),
              F(h[_], 1, 1, () => {
                h[_] = null;
              }),
              wt(),
              (s = h[i]),
              s ? s.p(n, p) : ((s = h[i] = d[i](n)), s.c()),
              L(s, 1),
              s.m(e, null)),
          (!c || (p[0] & 131072 && o !== (o = 'modal-transition ' + n[17]))) && b(e, 'class', o),
          (!c || (p[0] & 262144 && l !== (l = 'modal-backdrop ' + n[18]))) && b(t, 'class', l);
      },
      i(m) {
        c ||
          (L(s),
          pt(() => {
            c &&
              (r || (r = ot(e, he, { duration: n[3], opacity: n[4], x: n[5], y: n[6] }, !0)),
              r.run(1));
          }),
          pt(() => {
            c && (a || (a = ot(t, bt, { duration: n[3] }, !0)), a.run(1));
          }),
          (c = !0));
      },
      o(m) {
        F(s),
          r || (r = ot(e, he, { duration: n[3], opacity: n[4], x: n[5], y: n[6] }, !1)),
          r.run(0),
          a || (a = ot(t, bt, { duration: n[3] }, !1)),
          a.run(0),
          (c = !1);
      },
      d(m) {
        m && A(t), h[i].d(), m && r && r.end(), m && a && a.end(), (f = !1), Pt(u);
      },
    }
  );
}
function Bg(n) {
  let t,
    e,
    i,
    s,
    o = n[12].length > 0 && il(n);
  return {
    c() {
      o && o.c(), (t = ee());
    },
    m(r, l) {
      o && o.m(r, l), x(r, t, l), (e = !0), i || ((s = R(window, 'keydown', n[24])), (i = !0));
    },
    p(r, l) {
      r[12].length > 0
        ? o
          ? (o.p(r, l), l[0] & 4096 && L(o, 1))
          : ((o = il(r)), o.c(), L(o, 1), o.m(t.parentNode, t))
        : o &&
          (vt(),
          F(o, 1, 1, () => {
            o = null;
          }),
          wt());
    },
    i(r) {
      e || (L(o), (e = !0));
    },
    o(r) {
      F(o), (e = !1);
    },
    d(r) {
      o && o.d(r), r && A(t), (i = !1), s();
    },
  };
}
const zg = 'fixed top-0 left-0 right-0 bottom-0',
  Hg = 'w-full h-full p-4 overflow-y-auto flex justify-center',
  Wg = 'block',
  Ng = 'w-full h-auto';
function Vg(n, t, e) {
  let i, s, o, r, l, a;
  Dt(n, Wt, (z) => e(12, (a = z)));
  const c = ke();
  let { position: f = 'items-center' } = t,
    { components: u = {} } = t,
    { duration: d = 150 } = t,
    { flyOpacity: h = 0 } = t,
    { flyX: g = 0 } = t,
    { flyY: m = 100 } = t,
    { background: p = 'bg-surface-100-800-token' } = t,
    { width: _ = 'w-modal' } = t,
    { height: y = 'h-auto' } = t,
    { padding: v = 'p-4' } = t,
    { spacing: k = 'space-y-4' } = t,
    { rounded: w = 'rounded-container-token' } = t,
    { shadow: M = 'shadow-xl' } = t,
    { zIndex: D = 'z-[999]' } = t,
    { buttonNeutral: T = 'variant-ghost-surface' } = t,
    { buttonPositive: P = 'variant-filled' } = t,
    { buttonTextCancel: E = 'Cancel' } = t,
    { buttonTextConfirm: O = 'Confirm' } = t,
    { buttonTextSubmit: H = 'Submit' } = t,
    { regionBackdrop: W = 'bg-surface-backdrop-token' } = t,
    { regionHeader: $ = 'text-2xl font-bold' } = t,
    { regionBody: tt = 'max-h-[200px] overflow-hidden' } = t,
    { regionFooter: Y = 'flex justify-end space-x-2' } = t,
    N;
  const q = { buttonTextCancel: E, buttonTextConfirm: O, buttonTextSubmit: H };
  let V,
    I = !1;
  Wt.subscribe((z) => {
    z.length &&
      (z[0].type === 'prompt' && e(13, (N = z[0].value)),
      e(0, (E = z[0].buttonTextCancel || q.buttonTextCancel)),
      e(1, (O = z[0].buttonTextConfirm || q.buttonTextConfirm)),
      e(2, (H = z[0].buttonTextSubmit || q.buttonTextSubmit)),
      e(14, (V = typeof z[0].component == 'string' ? u[z[0].component] : z[0].component)));
  });
  function K(z) {
    if (!(z.target instanceof Element)) return;
    const xt = z.target.classList;
    (xt.contains('modal-backdrop') || xt.contains('modal-transition')) && (I = !0);
  }
  function U(z) {
    if (!(z.target instanceof Element)) return;
    const xt = z.target.classList;
    (xt.contains('modal-backdrop') || xt.contains('modal-transition')) &&
      I &&
      (a[0].response && a[0].response(void 0), Wt.close(), c('backdrop', z)),
      (I = !1);
  }
  function ft() {
    a[0].response && a[0].response(!1), Wt.close();
  }
  function Mt() {
    a[0].response && a[0].response(!0), Wt.close();
  }
  function It(z) {
    z.preventDefault(), a[0].response && a[0].response(N), Wt.close();
  }
  function kt(z) {
    a.length && z.code === 'Escape' && ft();
  }
  function G(z) {
    ut.call(this, n, z);
  }
  function et(z) {
    ut.call(this, n, z);
  }
  function Lt() {
    (N = this.value), e(13, N);
  }
  return (
    (n.$$set = (z) => {
      e(43, (t = St(St({}, t), Rt(z)))),
        'position' in z && e(25, (f = z.position)),
        'components' in z && e(26, (u = z.components)),
        'duration' in z && e(3, (d = z.duration)),
        'flyOpacity' in z && e(4, (h = z.flyOpacity)),
        'flyX' in z && e(5, (g = z.flyX)),
        'flyY' in z && e(6, (m = z.flyY)),
        'background' in z && e(27, (p = z.background)),
        'width' in z && e(28, (_ = z.width)),
        'height' in z && e(29, (y = z.height)),
        'padding' in z && e(30, (v = z.padding)),
        'spacing' in z && e(31, (k = z.spacing)),
        'rounded' in z && e(32, (w = z.rounded)),
        'shadow' in z && e(33, (M = z.shadow)),
        'zIndex' in z && e(34, (D = z.zIndex)),
        'buttonNeutral' in z && e(7, (T = z.buttonNeutral)),
        'buttonPositive' in z && e(8, (P = z.buttonPositive)),
        'buttonTextCancel' in z && e(0, (E = z.buttonTextCancel)),
        'buttonTextConfirm' in z && e(1, (O = z.buttonTextConfirm)),
        'buttonTextSubmit' in z && e(2, (H = z.buttonTextSubmit)),
        'regionBackdrop' in z && e(35, (W = z.regionBackdrop)),
        'regionHeader' in z && e(9, ($ = z.regionHeader)),
        'regionBody' in z && e(10, (tt = z.regionBody)),
        'regionFooter' in z && e(11, (Y = z.regionFooter));
    }),
    (n.$$.update = () => {
      var z, xt, ht;
      n.$$.dirty[0] & 33558528 && e(36, (i = ((z = a[0]) == null ? void 0 : z.position) ?? f)),
        e(
          18,
          (s = `${zg} ${W} ${D} ${t.class ?? ''} ${
            ((xt = a[0]) == null ? void 0 : xt.backdropClasses) ?? ''
          }`),
        ),
        n.$$.dirty[1] & 32 && e(17, (o = `${Hg} ${i ?? ''}`)),
        (n.$$.dirty[0] & 2013270016) | (n.$$.dirty[1] & 7) &&
          e(
            16,
            (r = `${Wg} ${p} ${_} ${y} ${v} ${k} ${w} ${M} ${
              ((ht = a[0]) == null ? void 0 : ht.modalClasses) ?? ''
            }`),
          ),
        (n.$$.dirty[0] & 2046824447) | (n.$$.dirty[1] & 23) &&
          e(
            15,
            (l = {
              position: f,
              duration: d,
              flyOpacity: h,
              flyX: g,
              flyY: m,
              background: p,
              width: _,
              height: y,
              padding: v,
              spacing: k,
              rounded: w,
              shadow: M,
              buttonNeutral: T,
              buttonPositive: P,
              buttonTextCancel: E,
              buttonTextConfirm: O,
              buttonTextSubmit: H,
              regionBackdrop: W,
              regionHeader: $,
              regionBody: tt,
              regionFooter: Y,
              onClose: ft,
            }),
          );
    }),
    (t = Rt(t)),
    [
      E,
      O,
      H,
      d,
      h,
      g,
      m,
      T,
      P,
      $,
      tt,
      Y,
      a,
      N,
      V,
      l,
      r,
      o,
      s,
      K,
      U,
      ft,
      Mt,
      It,
      kt,
      f,
      u,
      p,
      _,
      y,
      v,
      k,
      w,
      M,
      D,
      W,
      i,
      G,
      et,
      Lt,
    ]
  );
}
class jg extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Vg,
        Bg,
        rt,
        {
          position: 25,
          components: 26,
          duration: 3,
          flyOpacity: 4,
          flyX: 5,
          flyY: 6,
          background: 27,
          width: 28,
          height: 29,
          padding: 30,
          spacing: 31,
          rounded: 32,
          shadow: 33,
          zIndex: 34,
          buttonNeutral: 7,
          buttonPositive: 8,
          buttonTextCancel: 0,
          buttonTextConfirm: 1,
          buttonTextSubmit: 2,
          regionBackdrop: 35,
          regionHeader: 9,
          regionBody: 10,
          regionFooter: 11,
        },
        null,
        [-1, -1],
      );
  }
}
const { window: Yg } = Od;
function cl(n) {
  let t, e, i, s, o, r, l, a, c, f;
  const u = n[29].default,
    d = Kt(u, n, n[28], null);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        d && d.c(),
        b(e, 'class', (i = 'drawer ' + n[6])),
        b(e, 'data-testid', 'drawer'),
        b(e, 'role', 'dialog'),
        b(e, 'aria-modal', 'true'),
        b(e, 'aria-labelledby', n[1]),
        b(e, 'aria-describedby', n[2]),
        b(t, 'class', (r = 'drawer-backdrop ' + n[7])),
        b(t, 'data-testid', 'drawer-backdrop');
    },
    m(h, g) {
      x(h, t, g),
        S(t, e),
        d && d.m(e, null),
        n[33](e),
        n[34](t),
        (a = !0),
        c ||
          ((f = [
            R(t, 'mousedown', n[9]),
            R(t, 'touchstart', n[30]),
            R(t, 'touchend', n[31]),
            R(t, 'keypress', n[32]),
            Qn(Tu.call(null, t, !0)),
          ]),
          (c = !0));
    },
    p(h, g) {
      (n = h),
        d &&
          d.p &&
          (!a || g[0] & 268435456) &&
          Gt(d, u, n, n[28], a ? Jt(u, n[28], g, null) : Zt(n[28]), null),
        (!a || (g[0] & 64 && i !== (i = 'drawer ' + n[6]))) && b(e, 'class', i),
        (!a || g[0] & 2) && b(e, 'aria-labelledby', n[1]),
        (!a || g[0] & 4) && b(e, 'aria-describedby', n[2]),
        (!a || (g[0] & 128 && r !== (r = 'drawer-backdrop ' + n[7]))) && b(t, 'class', r);
    },
    i(h) {
      a ||
        (L(d, h),
        h &&
          pt(() => {
            a &&
              (o && o.end(1), (s = $n(e, he, { x: n[5].x, y: n[5].y, duration: n[0] })), s.start());
          }),
        h &&
          pt(() => {
            a && (l || (l = ot(t, bt, { duration: n[0] }, !0)), l.run(1));
          }),
        (a = !0));
    },
    o(h) {
      F(d, h),
        s && s.invalidate(),
        h && (o = Yi(e, he, { x: n[5].x, y: n[5].y, duration: n[0] })),
        h && (l || (l = ot(t, bt, { duration: n[0] }, !1)), l.run(0)),
        (a = !1);
    },
    d(h) {
      h && A(t),
        d && d.d(h),
        n[33](null),
        h && o && o.end(),
        n[34](null),
        h && l && l.end(),
        (c = !1),
        Pt(f);
    },
  };
}
function Ug(n) {
  let t,
    e,
    i,
    s,
    o = n[8].open === !0 && cl(n);
  return {
    c() {
      o && o.c(), (t = ee());
    },
    m(r, l) {
      o && o.m(r, l), x(r, t, l), (e = !0), i || ((s = R(Yg, 'keydown', n[10])), (i = !0));
    },
    p(r, l) {
      r[8].open === !0
        ? o
          ? (o.p(r, l), l[0] & 256 && L(o, 1))
          : ((o = cl(r)), o.c(), L(o, 1), o.m(t.parentNode, t))
        : o &&
          (vt(),
          F(o, 1, 1, () => {
            o = null;
          }),
          wt());
    },
    i(r) {
      e || (L(o), (e = !0));
    },
    o(r) {
      F(o), (e = !1);
    },
    d(r) {
      o && o.d(r), r && A(t), (i = !1), s();
    },
  };
}
const qg = 'fixed top-0 left-0 right-0 bottom-0 flex',
  Xg = 'overflow-y-auto transition-transform';
function Kg(n, t, e) {
  let i, s, o, r, l, a, c;
  Dt(n, qe, (G) => e(8, (c = G)));
  let { $$slots: f = {}, $$scope: u } = t;
  const d = ke();
  let { position: h = 'left' } = t,
    { duration: g = 150 } = t,
    { bgBackdrop: m = 'bg-surface-backdrop-token' } = t,
    { blur: p = '' } = t,
    { padding: _ = '' } = t,
    { bgDrawer: y = 'bg-surface-100-800-token' } = t,
    { border: v = '' } = t,
    { rounded: k = '' } = t,
    { shadow: w = 'shadow-xl' } = t,
    { width: M = '' } = t,
    { height: D = '' } = t,
    { zIndex: T = 'z-40' } = t,
    { regionBackdrop: P = '' } = t,
    { regionDrawer: E = '' } = t,
    { labelledby: O = '' } = t,
    { describedby: H = '' } = t;
  const W = {
    top: {
      alignment: 'items-start',
      width: 'w-full',
      height: 'h-[50%]',
      rounded: 'rounded-bl-container-token rounded-br-container-token',
    },
    bottom: {
      alignment: 'items-end',
      width: 'w-full',
      height: ' h-[50%]',
      rounded: 'rounded-tl-container-token rounded-tr-container-token',
    },
    left: {
      alignment: 'justify-start',
      width: 'w-[90%]',
      height: 'h-full',
      rounded: 'rounded-tr-container-token rounded-br-container-token',
    },
    right: {
      alignment: 'justify-end',
      width: 'w-[90%]',
      height: 'h-full',
      rounded: 'rounded-tl-container-token rounded-bl-container-token',
    },
  };
  let $,
    tt,
    Y = { x: 0, y: 0 };
  const N = {
    position: h,
    duration: g,
    bgBackdrop: m,
    blur: p,
    padding: _,
    bgDrawer: y,
    border: v,
    rounded: k,
    shadow: w,
    width: M,
    height: D,
    labelledby: O,
    describedby: H,
    regionBackdrop: P,
    regionDrawer: E,
  };
  function q(G) {
    e(11, (h = G.position || N.position)),
      e(0, (g = G.duration || N.duration)),
      e(12, (m = G.bgBackdrop || N.bgBackdrop)),
      e(13, (p = G.blur || N.blur)),
      e(14, (_ = G.padding || N.padding)),
      e(15, (y = G.bgDrawer || N.bgDrawer)),
      e(16, (v = G.border || N.border)),
      e(17, (k = G.rounded || N.rounded)),
      e(18, (w = G.shadow || N.shadow)),
      e(19, (M = G.width || N.width)),
      e(20, (D = G.height || N.height)),
      e(21, (P = G.regionBackdrop || N.regionBackdrop)),
      e(22, (E = G.regionDrawer || N.regionDrawer)),
      e(1, (O = G.labelledby || N.labelledby)),
      e(2, (H = G.describedby || N.describedby));
  }
  function V() {
    switch (h) {
      case 'top':
        e(5, (Y = { x: 0, y: -window.innerWidth }));
        break;
      case 'bottom':
        e(5, (Y = { x: 0, y: window.innerWidth }));
        break;
      case 'left':
        e(5, (Y = { x: -window.innerHeight, y: 0 }));
        break;
      case 'right':
        e(5, (Y = { x: window.innerHeight, y: 0 }));
        break;
      default:
        console.error('Error: unknown position property value.');
        break;
    }
  }
  function I(G) {
    G.target === $ ? (qe.close(), d('backdrop', G)) : d('drawer', G);
  }
  function K(G) {
    c && G.code === 'Escape' && qe.close();
  }
  qe.subscribe((G) => {
    G.open === !0 && (q(G), V());
  });
  function U(G) {
    ut.call(this, n, G);
  }
  function ft(G) {
    ut.call(this, n, G);
  }
  function Mt(G) {
    ut.call(this, n, G);
  }
  function It(G) {
    dt[G ? 'unshift' : 'push'](() => {
      (tt = G), e(4, tt);
    });
  }
  function kt(G) {
    dt[G ? 'unshift' : 'push'](() => {
      ($ = G), e(3, $);
    });
  }
  return (
    (n.$$set = (G) => {
      e(40, (t = St(St({}, t), Rt(G)))),
        'position' in G && e(11, (h = G.position)),
        'duration' in G && e(0, (g = G.duration)),
        'bgBackdrop' in G && e(12, (m = G.bgBackdrop)),
        'blur' in G && e(13, (p = G.blur)),
        'padding' in G && e(14, (_ = G.padding)),
        'bgDrawer' in G && e(15, (y = G.bgDrawer)),
        'border' in G && e(16, (v = G.border)),
        'rounded' in G && e(17, (k = G.rounded)),
        'shadow' in G && e(18, (w = G.shadow)),
        'width' in G && e(19, (M = G.width)),
        'height' in G && e(20, (D = G.height)),
        'zIndex' in G && e(23, (T = G.zIndex)),
        'regionBackdrop' in G && e(21, (P = G.regionBackdrop)),
        'regionDrawer' in G && e(22, (E = G.regionDrawer)),
        'labelledby' in G && e(1, (O = G.labelledby)),
        'describedby' in G && e(2, (H = G.describedby)),
        '$$scope' in G && e(28, (u = G.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 2048 && e(27, (i = W[h].alignment)),
        n.$$.dirty[0] & 526336 && e(26, (s = M || W[h].width)),
        n.$$.dirty[0] & 1050624 && e(25, (o = D || W[h].height)),
        n.$$.dirty[0] & 133120 && e(24, (r = k || W[h].rounded)),
        e(7, (l = `${qg} ${m} ${_} ${p} ${i} ${P} ${T} ${t.class ?? ''}`)),
        n.$$.dirty[0] & 122126336 && e(6, (a = `${Xg} ${y} ${v} ${k} ${w} ${s} ${o} ${r} ${E}`));
    }),
    (t = Rt(t)),
    [
      g,
      O,
      H,
      $,
      tt,
      Y,
      a,
      l,
      c,
      I,
      K,
      h,
      m,
      p,
      _,
      y,
      v,
      k,
      w,
      M,
      D,
      P,
      E,
      T,
      r,
      o,
      s,
      i,
      u,
      f,
      U,
      ft,
      Mt,
      It,
      kt,
    ]
  );
}
class Gg extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Kg,
        Ug,
        rt,
        {
          position: 11,
          duration: 0,
          bgBackdrop: 12,
          blur: 13,
          padding: 14,
          bgDrawer: 15,
          border: 16,
          rounded: 17,
          shadow: 18,
          width: 19,
          height: 20,
          zIndex: 23,
          regionBackdrop: 21,
          regionDrawer: 22,
          labelledby: 1,
          describedby: 2,
        },
        null,
        [-1, -1],
      );
  }
}
function ul(n, t, e) {
  const i = n.slice();
  return (i[32] = t[e]), (i[34] = e), i;
}
function fl(n) {
  let t,
    e,
    i = [],
    s = new Map(),
    o,
    r,
    l,
    a = n[6];
  const c = (f) => f[32];
  for (let f = 0; f < a.length; f += 1) {
    let u = ul(n, a, f),
      d = c(u);
    s.set(d, (i[f] = ml(d, u)));
  }
  return {
    c() {
      (t = C('div')), (e = C('div'));
      for (let f = 0; f < i.length; f += 1) i[f].c();
      b(e, 'class', (o = 'snackbar ' + n[8])),
        b(t, 'class', (r = 'snackbar-wrapper ' + n[9])),
        b(t, 'data-testid', 'snackbar-wrapper');
    },
    m(f, u) {
      x(f, t, u), S(t, e);
      for (let d = 0; d < i.length; d += 1) i[d] && i[d].m(e, null);
      l = !0;
    },
    p(f, u) {
      if (u[0] & 7390) {
        (a = f[6]), vt();
        for (let d = 0; d < i.length; d += 1) i[d].r();
        i = Me(i, u, c, 1, f, a, s, e, Ns, ml, null, ul);
        for (let d = 0; d < i.length; d += 1) i[d].a();
        wt();
      }
      (!l || (u[0] & 256 && o !== (o = 'snackbar ' + f[8]))) && b(e, 'class', o),
        (!l || (u[0] & 512 && r !== (r = 'snackbar-wrapper ' + f[9]))) && b(t, 'class', r);
    },
    i(f) {
      if (!l) {
        for (let u = 0; u < a.length; u += 1) L(i[u]);
        l = !0;
      }
    },
    o(f) {
      for (let u = 0; u < i.length; u += 1) F(i[u]);
      l = !1;
    },
    d(f) {
      f && A(t);
      for (let u = 0; u < i.length; u += 1) i[u].d();
    },
  };
}
function dl(n) {
  let t,
    e,
    i = n[32].action && hl(n),
    s = !n[32].hideDismiss && gl(n);
  return {
    c() {
      (t = C('div')), i && i.c(), (e = B()), s && s.c(), b(t, 'class', 'toast-actions ' + tm);
    },
    m(o, r) {
      x(o, t, r), i && i.m(t, null), S(t, e), s && s.m(t, null);
    },
    p(o, r) {
      o[32].action ? (i ? i.p(o, r) : ((i = hl(o)), i.c(), i.m(t, e))) : i && (i.d(1), (i = null)),
        o[32].hideDismiss
          ? s && (s.d(1), (s = null))
          : s
          ? s.p(o, r)
          : ((s = gl(o)), s.c(), s.m(t, null));
    },
    d(o) {
      o && A(t), i && i.d(), s && s.d();
    },
  };
}
function hl(n) {
  let t,
    e = n[32].action.label + '',
    i,
    s;
  function o() {
    return n[26](n[34]);
  }
  return {
    c() {
      (t = C('button')), b(t, 'class', n[2]);
    },
    m(r, l) {
      x(r, t, l), (t.innerHTML = e), i || ((s = R(t, 'click', o)), (i = !0));
    },
    p(r, l) {
      (n = r),
        l[0] & 64 && e !== (e = n[32].action.label + '') && (t.innerHTML = e),
        l[0] & 4 && b(t, 'class', n[2]);
    },
    d(r) {
      r && A(t), (i = !1), s();
    },
  };
}
function gl(n) {
  let t, e, i, s;
  function o() {
    return n[27](n[32]);
  }
  return {
    c() {
      (t = C('button')), (e = X(n[4])), b(t, 'class', n[3]), b(t, 'aria-label', 'Dismiss toast');
    },
    m(r, l) {
      x(r, t, l), S(t, e), i || ((s = R(t, 'click', o)), (i = !0));
    },
    p(r, l) {
      (n = r), l[0] & 16 && mt(e, n[4]), l[0] & 8 && b(t, 'class', n[3]);
    },
    d(r) {
      r && A(t), (i = !1), s();
    },
  };
}
function ml(n, t) {
  let e,
    i,
    s,
    o = t[32].message + '',
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h = ct,
    g,
    m,
    p,
    _ = (t[32].action || !t[32].hideDismiss) && dl(t);
  function y() {
    return t[28](t[34]);
  }
  function v() {
    return t[29](t[34]);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('div')),
        (i = C('div')),
        (s = C('div')),
        (r = B()),
        _ && _.c(),
        (a = B()),
        b(s, 'class', 'text-base'),
        b(
          i,
          'class',
          (l = 'toast ' + t[7] + ' ' + (t[32].background ?? t[1]) + ' ' + (t[32].classes ?? '')),
        ),
        b(i, 'data-testid', 'toast'),
        b(e, 'role', (c = t[32].hideDismiss ? 'alert' : 'alertdialog')),
        b(e, 'aria-live', 'polite'),
        (this.first = e);
    },
    m(k, w) {
      x(k, e, w),
        S(e, i),
        S(i, s),
        (s.innerHTML = o),
        S(i, r),
        _ && _.m(i, null),
        S(e, a),
        (g = !0),
        m || ((p = [R(e, 'mouseenter', y), R(e, 'mouseleave', v)]), (m = !0));
    },
    p(k, w) {
      (t = k),
        (!g || w[0] & 64) && o !== (o = t[32].message + '') && (s.innerHTML = o),
        t[32].action || !t[32].hideDismiss
          ? _
            ? _.p(t, w)
            : ((_ = dl(t)), _.c(), _.m(i, null))
          : _ && (_.d(1), (_ = null)),
        (!g ||
          (w[0] & 194 &&
            l !==
              (l =
                'toast ' +
                t[7] +
                ' ' +
                (t[32].background ?? t[1]) +
                ' ' +
                (t[32].classes ?? '')))) &&
          b(i, 'class', l),
        (!g || (w[0] & 64 && c !== (c = t[32].hideDismiss ? 'alert' : 'alertdialog'))) &&
          b(e, 'role', c);
    },
    r() {
      d = e.getBoundingClientRect();
    },
    f() {
      Vi(e), h(), Fd(e, d);
    },
    a() {
      h(), (h = ji(e, d, Ui, { duration: t[0] }));
    },
    i(k) {
      g ||
        (pt(() => {
          g && (u && u.end(1), (f = $n(e, t[14], { key: t[32].id })), f.start());
        }),
        (g = !0));
    },
    o(k) {
      f && f.invalidate(), (u = Yi(e, t[13], { key: t[32].id })), (g = !1);
    },
    d(k) {
      k && A(e), _ && _.d(), k && u && u.end(), (m = !1), Pt(p);
    },
  };
}
function Zg(n) {
  let t,
    e,
    i = n[5].length && fl(n);
  return {
    c() {
      i && i.c(), (t = ee());
    },
    m(s, o) {
      i && i.m(s, o), x(s, t, o), (e = !0);
    },
    p(s, o) {
      s[5].length
        ? i
          ? (i.p(s, o), o[0] & 32 && L(i, 1))
          : ((i = fl(s)), i.c(), L(i, 1), i.m(t.parentNode, t))
        : i &&
          (vt(),
          F(i, 1, 1, () => {
            i = null;
          }),
          wt());
    },
    i(s) {
      e || (L(i), (e = !0));
    },
    o(s) {
      F(i), (e = !1);
    },
    d(s) {
      i && i.d(s), s && A(t);
    },
  };
}
const Jg = 'flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none',
  Qg = 'flex flex-col gap-y-2',
  $g = 'flex justify-between items-center pointer-events-auto',
  tm = 'flex items-center space-x-2';
function em(n, t, e) {
  let i, s, o, r, l;
  Dt(n, On, (q) => e(5, (l = q)));
  let { position: a = 'b' } = t,
    { max: c = 3 } = t,
    { duration: f = 250 } = t,
    { background: u = 'variant-filled-secondary' } = t,
    { width: d = 'max-w-[640px]' } = t,
    { color: h = '' } = t,
    { padding: g = 'p-4' } = t,
    { spacing: m = 'space-x-4' } = t,
    { rounded: p = 'rounded-container-token' } = t,
    { shadow: _ = 'shadow-lg' } = t,
    { zIndex: y = 'z-[888]' } = t,
    { buttonAction: v = 'btn variant-filled' } = t,
    { buttonDismiss: k = 'btn-icon btn-icon-sm variant-filled' } = t,
    { buttonDismissLabel: w = '✕' } = t,
    M,
    D,
    T = { x: 0, y: 0 };
  switch (a) {
    case 't':
      (M = 'justify-center items-start'), (D = 'items-center'), (T = { x: 0, y: -100 });
      break;
    case 'b':
      (M = 'justify-center items-end'), (D = 'items-center'), (T = { x: 0, y: 100 });
      break;
    case 'l':
      (M = 'justify-start items-center'), (D = 'items-start'), (T = { x: -100, y: 0 });
      break;
    case 'r':
      (M = 'justify-end items-center'), (D = 'items-end'), (T = { x: 100, y: 0 });
      break;
    case 'tl':
      (M = 'justify-start items-start'), (D = 'items-start'), (T = { x: -100, y: 0 });
      break;
    case 'tr':
      (M = 'justify-end items-start'), (D = 'items-end'), (T = { x: 100, y: 0 });
      break;
    case 'bl':
      (M = 'justify-start items-end'), (D = 'items-start'), (T = { x: -100, y: 0 });
      break;
    case 'br':
      (M = 'justify-end items-end'), (D = 'items-end'), (T = { x: 100, y: 0 });
      break;
  }
  function P(q) {
    var V, I;
    (I = (V = l[q]) == null ? void 0 : V.action) == null || I.response(), On.close(l[q].id);
  }
  function E(q) {
    var V;
    (V = l[q]) != null && V.hoverable && (On.freeze(q), e(8, (s += ' scale-[105%]')));
  }
  function O(q) {
    var V;
    (V = l[q]) != null &&
      V.hoverable &&
      (On.unfreeze(q), e(8, (s = s.replace(' scale-[105%]', ''))));
  }
  const [H, W] = sh({
      duration: (q) => Math.sqrt(q * f),
      fallback(q) {
        const V = getComputedStyle(q),
          I = V.transform === 'none' ? '' : V.transform;
        return {
          duration: f,
          easing: nh,
          css: (K, U) => `
					transform: ${I} scale(${K}) translate(${U * T.x}%, ${U * T.y}%);
					opacity: ${K}
				`,
        };
      },
    }),
    $ = (q) => P(q),
    tt = (q) => On.close(q.id),
    Y = (q) => E(q),
    N = (q) => O(q);
  return (
    (n.$$set = (q) => {
      e(31, (t = St(St({}, t), Rt(q)))),
        'position' in q && e(15, (a = q.position)),
        'max' in q && e(16, (c = q.max)),
        'duration' in q && e(0, (f = q.duration)),
        'background' in q && e(1, (u = q.background)),
        'width' in q && e(17, (d = q.width)),
        'color' in q && e(18, (h = q.color)),
        'padding' in q && e(19, (g = q.padding)),
        'spacing' in q && e(20, (m = q.spacing)),
        'rounded' in q && e(21, (p = q.rounded)),
        'shadow' in q && e(22, (_ = q.shadow)),
        'zIndex' in q && e(23, (y = q.zIndex)),
        'buttonAction' in q && e(2, (v = q.buttonAction)),
        'buttonDismiss' in q && e(3, (k = q.buttonDismiss)),
        'buttonDismissLabel' in q && e(4, (w = q.buttonDismissLabel));
    }),
    (n.$$.update = () => {
      e(9, (i = `${Jg} ${M} ${y} ${t.class || ''}`)),
        n.$$.dirty[0] & 34078720 && e(8, (s = `${Qg} ${D} ${g}`)),
        n.$$.dirty[0] & 8257536 && e(7, (o = `${$g} ${d} ${h} ${g} ${m} ${p} ${_}`)),
        n.$$.dirty[0] & 65568 && e(6, (r = Array.from(l).slice(0, c)));
    }),
    (t = Rt(t)),
    [f, u, v, k, w, l, r, o, s, i, P, E, O, H, W, a, c, d, h, g, m, p, _, y, M, D, $, tt, Y, N]
  );
}
class nm extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        em,
        Zg,
        rt,
        {
          position: 15,
          max: 16,
          duration: 0,
          background: 1,
          width: 17,
          color: 18,
          padding: 19,
          spacing: 20,
          rounded: 21,
          shadow: 22,
          zIndex: 23,
          buttonAction: 2,
          buttonDismiss: 3,
          buttonDismissLabel: 4,
        },
        null,
        [-1, -1],
      );
  }
}
const Lu = '/assets/plus-c099f4ea.svg';
function im(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        (e = C('div')),
        b(e, 'class', 'h-full w-full bg-white'),
        b(e, 'style', Re(Lu)),
        b(
          t,
          'class',
          'btn h-10 w-10 p-2 bg-cyan-400 hover:bg-cyan-500 hover:filter-none rounded-md active:scale-90 active:bg-cyan-500 focus:bg-cyan-500 active:filter-none',
        );
    },
    m(o, r) {
      x(o, t, r),
        S(t, e),
        i || ((s = [R(t, 'dragstart', Ae(n[1])), R(t, 'click', n[0])]), (i = !0));
    },
    p: ct,
    i: ct,
    o: ct,
    d(o) {
      o && A(t), (i = !1), Pt(s);
    },
  };
}
function sm(n, t, e) {
  let i;
  Dt(n, Wt, (u) => e(2, (i = u)));
  const s = {
      type: 'component',
      component: 'addWord',
      backdropClasses: '!bg-cyan-200 !bg-opacity-50 backdrop-blur-sm',
    },
    o = () =>
      i.length === 0
        ? !1
        : i.find((u) => (u.type !== 'component' ? !1 : s.component === 'addWord')),
    r = () => {
      o() || Wt.trigger(s);
    },
    l = ({ code: u }) => {
      u === 'NumpadAdd' && r();
    },
    a = () => {
      document.addEventListener('keypress', l);
    },
    c = () => {
      document.removeEventListener('keypress', l);
    };
  ze(a), jo(c);
  function f(u) {
    ut.call(this, n, u);
  }
  return [r, f];
}
class om extends lt {
  constructor(t) {
    super(), at(this, t, sm, im, rt, {});
  }
}
function pl(n) {
  let t, e, i, s, o;
  return {
    c() {
      (t = C('button')),
        (e = C('div')),
        b(e, 'class', n[7]),
        b(e, 'style', (i = Re(n[6]))),
        b(t, 'class', n[8]),
        (t.disabled = n[2]);
    },
    m(r, l) {
      x(r, t, l),
        S(t, e),
        s ||
          ((o = R(t, 'click', function () {
            Oe(n[9]) && n[9].apply(this, arguments);
          })),
          (s = !0));
    },
    p(r, l) {
      (n = r),
        l & 128 && b(e, 'class', n[7]),
        l & 64 && i !== (i = Re(n[6])) && b(e, 'style', i),
        l & 256 && b(t, 'class', n[8]),
        l & 4 && (t.disabled = n[2]);
    },
    d(r) {
      r && A(t), (s = !1), o();
    },
  };
}
function rm(n) {
  let t,
    e,
    i,
    s,
    o,
    r = n[6] && pl(n);
  return {
    c() {
      (t = C('div')),
        (e = C('input')),
        (i = B()),
        r && r.c(),
        b(e, 'placeholder', n[4]),
        b(e, 'class', n[5]),
        (e.disabled = n[2]),
        b(t, 'class', n[3]);
    },
    m(l, a) {
      x(l, t, a),
        S(t, e),
        n[10](e),
        Ie(e, n[0]),
        S(t, i),
        r && r.m(t, null),
        s || ((o = R(e, 'input', n[11])), (s = !0));
    },
    p(l, [a]) {
      a & 16 && b(e, 'placeholder', l[4]),
        a & 32 && b(e, 'class', l[5]),
        a & 4 && (e.disabled = l[2]),
        a & 1 && e.value !== l[0] && Ie(e, l[0]),
        l[6] ? (r ? r.p(l, a) : ((r = pl(l)), r.c(), r.m(t, null))) : r && (r.d(1), (r = null)),
        a & 8 && b(t, 'class', l[3]);
    },
    i: ct,
    o: ct,
    d(l) {
      l && A(t), n[10](null), r && r.d(), (s = !1), o();
    },
  };
}
function lm(n, t, e) {
  let { disabled: i = !1 } = t,
    { value: s = '' } = t,
    { wrapStyles: o = '' } = t,
    { placeholder: r = '' } = t,
    { inputStyles: l = '' } = t,
    { iconSrc: a = '' } = t,
    { iconStyles: c = '' } = t,
    { buttonStyles: f = '' } = t,
    { buttonClickHandler: u = void 0 } = t,
    { inputElem: d } = t;
  function h(m) {
    dt[m ? 'unshift' : 'push'](() => {
      (d = m), e(1, d);
    });
  }
  function g() {
    (s = this.value), e(0, s);
  }
  return (
    (n.$$set = (m) => {
      'disabled' in m && e(2, (i = m.disabled)),
        'value' in m && e(0, (s = m.value)),
        'wrapStyles' in m && e(3, (o = m.wrapStyles)),
        'placeholder' in m && e(4, (r = m.placeholder)),
        'inputStyles' in m && e(5, (l = m.inputStyles)),
        'iconSrc' in m && e(6, (a = m.iconSrc)),
        'iconStyles' in m && e(7, (c = m.iconStyles)),
        'buttonStyles' in m && e(8, (f = m.buttonStyles)),
        'buttonClickHandler' in m && e(9, (u = m.buttonClickHandler)),
        'inputElem' in m && e(1, (d = m.inputElem));
    }),
    [s, d, i, o, r, l, a, c, f, u, h, g]
  );
}
class am extends lt {
  constructor(t) {
    super(),
      at(this, t, lm, rm, rt, {
        disabled: 2,
        value: 0,
        wrapStyles: 3,
        placeholder: 4,
        inputStyles: 5,
        iconSrc: 6,
        iconStyles: 7,
        buttonStyles: 8,
        buttonClickHandler: 9,
        inputElem: 1,
      });
  }
}
const In = ae(''),
  Ou = '/assets/clear-8fa5d7d7.svg';
function cm(n) {
  let t, e, i, s;
  function o(a) {
    n[5](a);
  }
  function r(a) {
    n[6](a);
  }
  let l = {
    wrapStyles: 'max-w-md w-1/2 relative group',
    inputStyles:
      'text-cyan-900 rounded-md p-2 w-full border-b-2 border-cyan-400 bg-white bg-opacity-50 group-hover:bg-opacity-100 focus:bg-opacity-100 selection:bg-cyan-500 selection:text-white  pr-10 transition-all placeholder:text-cyan-700/70 disabled:bg-slate-400 disabled:bg-opacity-50 disabled:cursor-not-allowed',
    buttonStyles: 'rounded-md absolute top-2 right-2 ',
    buttonClickHandler: n[2],
    iconSrc: Ou,
    iconStyles: 'h-6 w-6 inline-block hover:scale-110 active:scale-90 bg-cyan-600 transition-all',
    placeholder: 'Search in dictionary...',
  };
  return (
    n[0] !== void 0 && (l.disabled = n[0]),
    n[1] !== void 0 && (l.inputElem = n[1]),
    (t = new am({ props: l })),
    dt.push(() => Ct(t, 'disabled', o)),
    dt.push(() => Ct(t, 'inputElem', r)),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(a, c) {
        J(t, a, c), (s = !0);
      },
      p(a, [c]) {
        const f = {};
        !e && c & 1 && ((e = !0), (f.disabled = a[0]), Tt(() => (e = !1))),
          !i && c & 2 && ((i = !0), (f.inputElem = a[1]), Tt(() => (i = !1))),
          t.$set(f);
      },
      i(a) {
        s || (L(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        F(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        Q(t, a);
      },
    }
  );
}
function um(n, t, e) {
  let i, s;
  Dt(n, In, (_) => e(3, (i = _))), Dt(n, re, (_) => e(4, (s = _)));
  let o;
  const r = ({ code: _ }) => {
      _ === 'Escape' && l();
    },
    l = () => {
      e(1, (o.value = ''), o), Si(In, (i = ''), i);
    },
    c = Ed(() => {
      Si(In, (i = o.value), i);
    }, 1e3),
    f = () => {
      document.addEventListener('keydown', r);
    },
    u = () => {
      document.removeEventListener('keydown', r);
    },
    d = () => {
      o.addEventListener('input', c), o.addEventListener('focus', f), o.addEventListener('blur', u);
    },
    h = () => {
      o.removeEventListener('focus', c),
        o.removeEventListener('focus', f),
        o.removeEventListener('blur', u);
    };
  ze(d), jo(h);
  let g;
  function m(_) {
    (g = _), e(0, g), e(4, s);
  }
  function p(_) {
    (o = _), e(1, o);
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 16 && e(0, (g = !s.size)), n.$$.dirty & 9 && Si(In, (i = g ? '' : i), i);
    }),
    [g, o, l, i, s, m, p]
  );
}
class fm extends lt {
  constructor(t) {
    super(), at(this, t, um, cm, rt, {});
  }
}
function dm(n) {
  let t, e, i;
  const s = n[2].default,
    o = Kt(s, n, n[1], null);
  return {
    c() {
      (t = C('div')),
        o && o.c(),
        b(
          t,
          'class',
          (e = `text-center text-slate-300 text-4xl cursor-default tracking-[2rem] m-sm:tracking-[1rem] translate-x-3 -translate-y-7 leading-loose break-words max-w-90wv ${n[0]}`),
        );
    },
    m(r, l) {
      x(r, t, l), o && o.m(t, null), (i = !0);
    },
    p(r, [l]) {
      o && o.p && (!i || l & 2) && Gt(o, s, r, r[1], i ? Jt(s, r[1], l, null) : Zt(r[1]), null),
        (!i ||
          (l & 1 &&
            e !==
              (e = `text-center text-slate-300 text-4xl cursor-default tracking-[2rem] m-sm:tracking-[1rem] translate-x-3 -translate-y-7 leading-loose break-words max-w-90wv ${r[0]}`))) &&
          b(t, 'class', e);
    },
    i(r) {
      i || (L(o, r), (i = !0));
    },
    o(r) {
      F(o, r), (i = !1);
    },
    d(r) {
      r && A(t), o && o.d(r);
    },
  };
}
function hm(n, t, e) {
  let { $$slots: i = {}, $$scope: s } = t,
    { additionalStyles: o = '' } = t;
  return (
    (n.$$set = (r) => {
      'additionalStyles' in r && e(0, (o = r.additionalStyles)),
        '$$scope' in r && e(1, (s = r.$$scope));
    }),
    [o, s, i]
  );
}
class qi extends lt {
  constructor(t) {
    super(), at(this, t, hm, dm, rt, { additionalStyles: 0 });
  }
}
const bl = wu([re, In], ([n, t]) =>
    [...n.values()].filter(
      ({ translations: e, variants: i, description: s }) =>
        i.some((o) => o.includes(t)) || e.some((o) => o.includes(t)) || s.includes(t),
    ),
  ),
  Fu = ae(null),
  Eu = ae(null),
  ko = ae(null),
  gm = '/assets/delete-19c9c2b1.svg',
  mm = '/assets/edit-5d9848c5.svg';
function _l(n, t, e) {
  const i = n.slice();
  return (i[4] = t[e]), i;
}
function yl(n, t, e) {
  const i = n.slice();
  return (i[7] = t[e]), i;
}
function kl(n) {
  let t,
    e = n[7] + '',
    i;
  return {
    c() {
      (t = C('span')),
        (i = X(e)),
        b(
          t,
          'class',
          'chip bg-orange-300 hover:filter-none grow break-all whitespace-normal cursor-default',
        );
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p(s, o) {
      o & 1 && e !== (e = s[7] + '') && mt(i, e);
    },
    d(s) {
      s && A(t);
    },
  };
}
function vl(n) {
  let t,
    e = n[4] + '',
    i;
  return {
    c() {
      (t = C('span')),
        (i = X(e)),
        b(
          t,
          'class',
          'chip bg-green-300 hover:filter-none grow break-all whitespace-normal cursor-default',
        );
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p(s, o) {
      o & 1 && e !== (e = s[4] + '') && mt(i, e);
    },
    d(s) {
      s && A(t);
    },
  };
}
function wl(n) {
  let t,
    e,
    i = n[0].description + '',
    s;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (s = X(i)),
        b(e, 'class', 'bg-sky-300 rounded-md text-xs p-2 cursor-default text-center'),
        b(
          t,
          'class',
          'max-h-24 overflow-auto w-full p-2 rounded-md bg-sky-300 bg-opacity-50 break-all',
        );
    },
    m(o, r) {
      x(o, t, r), S(t, e), S(e, s);
    },
    p(o, r) {
      r & 1 && i !== (i = o[0].description + '') && mt(s, i);
    },
    d(o) {
      o && A(t);
    },
  };
}
function pm(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f = n[0].learnSuccess + '',
    u,
    d,
    h,
    g,
    m,
    p,
    _,
    y,
    v,
    k,
    w,
    M = n[0].variants,
    D = [];
  for (let O = 0; O < M.length; O += 1) D[O] = kl(yl(n, M, O));
  let T = n[0].translations,
    P = [];
  for (let O = 0; O < T.length; O += 1) P[O] = vl(_l(n, T, O));
  let E = n[0].description && wl(n);
  return {
    c() {
      (t = C('div')), (e = C('div')), (i = C('div'));
      for (let O = 0; O < D.length; O += 1) D[O].c();
      (s = B()), (o = C('div'));
      for (let O = 0; O < P.length; O += 1) P[O].c();
      (r = B()),
        E && E.c(),
        (l = B()),
        (a = C('div')),
        (c = C('button')),
        (u = X(f)),
        (d = C('span')),
        (d.textContent = '%'),
        (g = B()),
        (m = C('button')),
        (p = C('div')),
        (_ = B()),
        (y = C('button')),
        (v = C('div')),
        b(
          i,
          'class',
          'flex flex-wrap gap-2 p-2 max-h-28 overflow-auto bg-orange-300 bg-opacity-50 rounded-md',
        ),
        b(
          o,
          'class',
          'flex flex-wrap gap-2 p-2 max-h-28 overflow-auto bg-green-300 bg-opacity-50 rounded-md',
        ),
        b(
          e,
          'class',
          'inline-flex flex-col justify-center grow gap-2 max-w-xs box-border rounded-md',
        ),
        b(d, 'class', 'text-xss pointer-events-none'),
        b(
          c,
          'class',
          (h =
            'rounded-md text-center text-xm px-2 leading-8 transition-all active:scale-90 ' +
            kr(n[0].learnSuccess)),
        ),
        b(p, 'class', 'h-1/2 w-1/2 m-auto bg-purple-500'),
        b(p, 'style', Re(mm)),
        b(m, 'type', 'button'),
        b(
          m,
          'class',
          'h-8 w-8 rounded-md bg-purple-200 hover:bg-purple-300 focus:bg-purple-300 transition-all active:scale-90',
        ),
        b(v, 'class', 'h-1/2 w-1/2 m-auto bg-red-500'),
        b(v, 'style', Re(gm)),
        b(y, 'type', 'button'),
        b(
          y,
          'class',
          'h-8 w-8 rounded-md bg-red-200 hover:bg-red-300 focus:bg-red-300 transition-all active:scale-90',
        ),
        b(a, 'class', 'flex flex-col items-center gap-2'),
        b(t, 'class', 'flex gap-2 wordCard bg-white bg-opacity-30 p-2 rounded-md');
    },
    m(O, H) {
      x(O, t, H), S(t, e), S(e, i);
      for (let W = 0; W < D.length; W += 1) D[W] && D[W].m(i, null);
      S(e, s), S(e, o);
      for (let W = 0; W < P.length; W += 1) P[W] && P[W].m(o, null);
      S(e, r),
        E && E.m(e, null),
        S(t, l),
        S(t, a),
        S(a, c),
        S(c, u),
        S(c, d),
        S(a, g),
        S(a, m),
        S(m, p),
        S(a, _),
        S(a, y),
        S(y, v),
        k || ((w = [R(c, 'click', n[3]), R(m, 'click', n[2]), R(y, 'click', n[1])]), (k = !0));
    },
    p(O, [H]) {
      if (H & 1) {
        M = O[0].variants;
        let W;
        for (W = 0; W < M.length; W += 1) {
          const $ = yl(O, M, W);
          D[W] ? D[W].p($, H) : ((D[W] = kl($)), D[W].c(), D[W].m(i, null));
        }
        for (; W < D.length; W += 1) D[W].d(1);
        D.length = M.length;
      }
      if (H & 1) {
        T = O[0].translations;
        let W;
        for (W = 0; W < T.length; W += 1) {
          const $ = _l(O, T, W);
          P[W] ? P[W].p($, H) : ((P[W] = vl($)), P[W].c(), P[W].m(o, null));
        }
        for (; W < P.length; W += 1) P[W].d(1);
        P.length = T.length;
      }
      O[0].description
        ? E
          ? E.p(O, H)
          : ((E = wl(O)), E.c(), E.m(e, null))
        : E && (E.d(1), (E = null)),
        H & 1 && f !== (f = O[0].learnSuccess + '') && mt(u, f),
        H & 1 &&
          h !==
            (h =
              'rounded-md text-center text-xm px-2 leading-8 transition-all active:scale-90 ' +
              kr(O[0].learnSuccess)) &&
          b(c, 'class', h);
    },
    i: ct,
    o: ct,
    d(O) {
      O && A(t), oe(D, O), oe(P, O), E && E.d(), (k = !1), Pt(w);
    },
  };
}
function bm(n, t, e) {
  let { word: i } = t;
  const s = () => {
      Eu.set(i),
        Wt.trigger({
          type: 'component',
          component: 'removeWord',
          backdropClasses: '!bg-red-200 !bg-opacity-50 backdrop-blur-sm',
        });
    },
    o = () => {
      Fu.set(i),
        Wt.trigger({
          type: 'component',
          component: 'editWord',
          backdropClasses: '!bg-purple-200 !bg-opacity-50 backdrop-blur-sm',
        });
    },
    r = () => {
      ko.set(i),
        Wt.trigger({
          type: 'component',
          component: 'wordPractice',
          backdropClasses: '!bg-pink-200 !bg-opacity-50 backdrop-blur-sm',
        });
    };
  return (
    (n.$$set = (l) => {
      'word' in l && e(0, (i = l.word));
    }),
    [i, s, o, r]
  );
}
class _m extends lt {
  constructor(t) {
    super(), at(this, t, bm, pm, rt, { word: 0 });
  }
}
function Sl(n, t, e) {
  const i = n.slice();
  return (i[6] = t[e]), i;
}
function Ml(n) {
  let t, e, i, s, o;
  return (
    (e = new qi({ props: { $$slots: { default: [vm] }, $$scope: { ctx: n } } })),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (i = B()),
          b(t, 'class', 'absolute h-90% flex flex-col items-center justify-center grow');
      },
      m(r, l) {
        x(r, t, l), J(e, t, null), S(t, i), (o = !0);
      },
      p(r, l) {
        const a = {};
        l & 514 && (a.$$scope = { dirty: l, ctx: r }), e.$set(a);
      },
      i(r) {
        o ||
          (L(e.$$.fragment, r),
          pt(() => {
            o && (s || (s = ot(t, bt, {}, !0)), s.run(1));
          }),
          (o = !0));
      },
      o(r) {
        F(e.$$.fragment, r), s || (s = ot(t, bt, {}, !1)), s.run(0), (o = !1);
      },
      d(r) {
        r && A(t), Q(e), r && s && s.end();
      },
    }
  );
}
function ym(n) {
  let t;
  return {
    c() {
      t = X('EMPTY');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function km(n) {
  let t;
  return {
    c() {
      t = X('NO RESULTS');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function vm(n) {
  let t;
  function e(o, r) {
    return o[1] ? km : ym;
  }
  let i = e(n),
    s = i(n);
  return {
    c() {
      s.c(), (t = ee());
    },
    m(o, r) {
      s.m(o, r), x(o, t, r);
    },
    p(o, r) {
      i !== (i = e(o)) && (s.d(1), (s = i(o)), s && (s.c(), s.m(t.parentNode, t)));
    },
    d(o) {
      s.d(o), o && A(t);
    },
  };
}
function Dl(n, t) {
  let e,
    i,
    s,
    o,
    r = ct,
    l;
  return (
    (i = new _m({ props: { word: t[6] } })),
    {
      key: n,
      first: null,
      c() {
        (e = C('div')), Z(i.$$.fragment), (s = B()), (this.first = e);
      },
      m(a, c) {
        x(a, e, c), J(i, e, null), S(e, s), (l = !0);
      },
      p(a, c) {
        t = a;
        const f = {};
        c & 1 && (f.word = t[6]), i.$set(f);
      },
      r() {
        o = e.getBoundingClientRect();
      },
      f() {
        Vi(e), r();
      },
      a() {
        r(), (r = ji(e, o, Ui, { duration: 300 }));
      },
      i(a) {
        l || (L(i.$$.fragment, a), (l = !0));
      },
      o(a) {
        F(i.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && A(e), Q(i);
      },
    }
  );
}
function wm(n) {
  let t = [],
    e = new Map(),
    i,
    s,
    o = n[0];
  const r = (a) => a[6].id;
  for (let a = 0; a < o.length; a += 1) {
    let c = Sl(n, o, a),
      f = r(c);
    e.set(f, (t[a] = Dl(f, c)));
  }
  let l = null;
  return (
    o.length || (l = Ml(n)),
    {
      c() {
        for (let a = 0; a < t.length; a += 1) t[a].c();
        (i = ee()), l && l.c();
      },
      m(a, c) {
        for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(a, c);
        x(a, i, c), l && l.m(a, c), (s = !0);
      },
      p(a, [c]) {
        if (c & 3) {
          (o = a[0]), vt();
          for (let f = 0; f < t.length; f += 1) t[f].r();
          t = Me(t, c, r, 1, a, o, e, i.parentNode, Ns, Dl, i, Sl);
          for (let f = 0; f < t.length; f += 1) t[f].a();
          wt(),
            !o.length && l
              ? l.p(a, c)
              : o.length
              ? l &&
                (vt(),
                F(l, 1, 1, () => {
                  l = null;
                }),
                wt())
              : ((l = Ml(a)), l.c(), L(l, 1), l.m(i.parentNode, i));
        }
      },
      i(a) {
        if (!s) {
          for (let c = 0; c < o.length; c += 1) L(t[c]);
          s = !0;
        }
      },
      o(a) {
        for (let c = 0; c < t.length; c += 1) F(t[c]);
        s = !1;
      },
      d(a) {
        for (let c = 0; c < t.length; c += 1) t[c].d(a);
        a && A(i), l && l.d(a);
      },
    }
  );
}
function Sm(n, t, e) {
  let i, s;
  Dt(n, bl, (c) => e(3, (i = c))), Dt(n, In, (c) => e(1, (s = c)));
  let { page: o = { offset: 0, limit: 10, amounts: [], size: i.length } } = t;
  const r = () => {
      e(2, (o.size = i.length), o);
    },
    l = bl.subscribe(r);
  let a;
  return (
    jo(() => {
      l();
    }),
    (n.$$set = (c) => {
      'page' in c && e(2, (o = c.page));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 12 && e(0, (a = i.slice(o.offset * o.limit, o.offset * o.limit + o.limit)));
    }),
    [a, s, o, i]
  );
}
class Mm extends lt {
  constructor(t) {
    super(), at(this, t, Sm, wm, rt, { page: 2 });
  }
}
function Dm(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m, p, _;
  (i = new om({})), (o = new fm({}));
  function y(M) {
    n[2](M);
  }
  let v = {};
  n[0] !== void 0 && (v.page = n[0]), (a = new Mm({ props: v })), dt.push(() => Ct(a, 'page', y));
  function k(M) {
    n[3](M);
  }
  let w = {
    class: '!flex-row space-y-0 [&_.paginator-label]:!hidden',
    text: 'cursor-default !mt-0',
    select: 'hidden',
    controlSeparator: 'gap-2',
    buttonClasses:
      'btn border-none bg-cyan-400 hover:!bg-cyan-600 focus:bg-cyan-600 disabled:bg-cyan-300 rounded-md text-white text-lg p-2 px-4 ',
    justify: 'justify-evenly',
  };
  return (
    n[0] !== void 0 && (w.settings = n[0]),
    (d = new eg({ props: w })),
    dt.push(() => Ct(d, 'settings', k)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          Z(i.$$.fragment),
          (s = B()),
          Z(o.$$.fragment),
          (r = B()),
          (l = C('div')),
          Z(a.$$.fragment),
          (f = B()),
          (u = C('div')),
          Z(d.$$.fragment),
          b(e, 'class', 'flex justify-center gap-3 w-full p-2 mt-4'),
          b(
            l,
            'class',
            'relative flex flex-wrap items-start justify-center gap-10 p-2 box-border w-full mt-7 overflow-auto grow',
          ),
          b(u, 'class', 'w-full p-2'),
          b(t, 'class', 'absolute flex flex-col h-screen w-screen');
      },
      m(M, D) {
        x(M, t, D),
          S(t, e),
          J(i, e, null),
          S(e, s),
          J(o, e, null),
          S(t, r),
          S(t, l),
          J(a, l, null),
          S(t, f),
          S(t, u),
          J(d, u, null),
          (m = !0),
          p || ((_ = R(l, 'dragstart', Ae(n[1]))), (p = !0));
      },
      p(M, [D]) {
        const T = {};
        !c && D & 1 && ((c = !0), (T.page = M[0]), Tt(() => (c = !1))), a.$set(T);
        const P = {};
        !h && D & 1 && ((h = !0), (P.settings = M[0]), Tt(() => (h = !1))), d.$set(P);
      },
      i(M) {
        m ||
          (L(i.$$.fragment, M),
          L(o.$$.fragment, M),
          L(a.$$.fragment, M),
          L(d.$$.fragment, M),
          pt(() => {
            m && (g || (g = ot(t, bt, {}, !0)), g.run(1));
          }),
          (m = !0));
      },
      o(M) {
        F(i.$$.fragment, M),
          F(o.$$.fragment, M),
          F(a.$$.fragment, M),
          F(d.$$.fragment, M),
          g || (g = ot(t, bt, {}, !1)),
          g.run(0),
          (m = !1);
      },
      d(M) {
        M && A(t), Q(i), Q(o), Q(a), Q(d), M && g && g.end(), (p = !1), _();
      },
    }
  );
}
function Cm(n, t, e) {
  let i;
  function s(l) {
    ut.call(this, n, l);
  }
  function o(l) {
    (i = l), e(0, i);
  }
  function r(l) {
    (i = l), e(0, i);
  }
  return [i, s, o, r];
}
class Tm extends lt {
  constructor(t) {
    super(), at(this, t, Cm, Dm, rt, {});
  }
}
const Iu = '/assets/infinity-white-3696f5a8.svg';
function Pm(n) {
  let t;
  return {
    c() {
      t = X('original');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function xm(n) {
  let t;
  return {
    c() {
      t = X('translation');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Am(n) {
  let t, e, i, s, o, r;
  function l(u) {
    n[4](u);
  }
  let a = {
    name: 'practiceTarget',
    rounded: 'rounded-md',
    value: 'original',
    class:
      'select-none border-b-2 bg-orange-400 bg-opacity-20 border-orange-400  text-orange-500 transition-all hover:text-white hover:bg-orange-400 focus:bg-orange-400 focus:text-white',
    fill: 'bg-orange-500 !text-white !bg-opacity-100',
    $$slots: { default: [Pm] },
    $$scope: { ctx: n },
  };
  n[0].practiceTarget !== void 0 && (a.group = n[0].practiceTarget),
    (t = new wn({ props: a })),
    dt.push(() => Ct(t, 'group', l));
  function c(u) {
    n[5](u);
  }
  let f = {
    name: 'practiceTarget',
    rounded: 'rounded-md',
    value: 'translation',
    class:
      'select-none border-b-2 bg-green-400 bg-opacity-20 border-green-400  text-green-500 transition-all hover:text-white hover:bg-green-400 focus:bg-green-400 focus:text-white',
    fill: 'bg-green-500 !text-white !bg-opacity-100',
    $$slots: { default: [xm] },
    $$scope: { ctx: n },
  };
  return (
    n[0].practiceTarget !== void 0 && (f.group = n[0].practiceTarget),
    (s = new wn({ props: f })),
    dt.push(() => Ct(s, 'group', c)),
    {
      c() {
        Z(t.$$.fragment), (i = B()), Z(s.$$.fragment);
      },
      m(u, d) {
        J(t, u, d), x(u, i, d), J(s, u, d), (r = !0);
      },
      p(u, d) {
        const h = {};
        d & 1024 && (h.$$scope = { dirty: d, ctx: u }),
          !e && d & 1 && ((e = !0), (h.group = u[0].practiceTarget), Tt(() => (e = !1))),
          t.$set(h);
        const g = {};
        d & 1024 && (g.$$scope = { dirty: d, ctx: u }),
          !o && d & 1 && ((o = !0), (g.group = u[0].practiceTarget), Tt(() => (o = !1))),
          s.$set(g);
      },
      i(u) {
        r || (L(t.$$.fragment, u), L(s.$$.fragment, u), (r = !0));
      },
      o(u) {
        F(t.$$.fragment, u), F(s.$$.fragment, u), (r = !1);
      },
      d(u) {
        Q(t, u), u && A(i), Q(s, u);
      },
    }
  );
}
function Lm(n) {
  let t, e, i;
  return {
    c() {
      (t = X(`random\r
          `)),
        (e = C('img')),
        b(e, 'class', 'h-5 inline'),
        ln(e.src, (i = Iu)) || b(e, 'src', i),
        b(e, 'alt', 'infinity icon');
    },
    m(s, o) {
      x(s, t, o), x(s, e, o);
    },
    p: ct,
    d(s) {
      s && A(t), s && A(e);
    },
  };
}
function Om(n) {
  let t, e, i;
  return {
    c() {
      (t = X(`worst\r
          `)),
        (e = C('img')),
        b(e, 'class', 'h-5 inline'),
        ln(e.src, (i = Iu)) || b(e, 'src', i),
        b(e, 'alt', 'infinity icon');
    },
    m(s, o) {
      x(s, t, o), x(s, e, o);
    },
    p: ct,
    d(s) {
      s && A(t), s && A(e);
    },
  };
}
function Fm(n) {
  let t, e, i, s, o;
  return {
    c() {
      (t = X(`section\r
          `)),
        (e = C('input')),
        b(e, 'maxlength', '3'),
        (e.value = i = n[0].sectionSize),
        b(
          e,
          'class',
          'bg-opacity-70 bg-white p-1 w-10 text-center rounded-md text-pink-600 selection:bg-pink-500 selection:text-white',
        );
    },
    m(r, l) {
      x(r, t, l), x(r, e, l), s || ((o = [R(e, 'input', n[1]), R(e, 'input', n[3])]), (s = !0));
    },
    p(r, l) {
      l & 1 && i !== (i = r[0].sectionSize) && e.value !== i && (e.value = i);
    },
    d(r) {
      r && A(t), r && A(e), (s = !1), Pt(o);
    },
  };
}
function Em(n) {
  let t, e, i, s, o, r, l, a, c;
  function f(p) {
    n[6](p);
  }
  let u = {
    name: 'practiceType',
    rounded: 'rounded-md',
    value: 'random',
    class:
      'select-none border-b-2 py-2 bg-purple-400 bg-opacity-20 border-purple-400  text-purple-500 transition-all hover:text-white hover:bg-purple-400 focus:bg-purple-400 focus:text-white',
    fill: 'bg-purple-500 !text-white !bg-opacity-100',
    $$slots: { default: [Lm] },
    $$scope: { ctx: n },
  };
  n[0].practiceType !== void 0 && (u.group = n[0].practiceType),
    (t = new wn({ props: u })),
    dt.push(() => Ct(t, 'group', f));
  function d(p) {
    n[7](p);
  }
  let h = {
    name: 'practiceType',
    rounded: 'rounded-md',
    value: 'worst',
    class:
      'select-none border-b-2 py-2 bg-blue-500 bg-opacity-20 border-blue-400  text-blue-500 transition-all hover:text-white hover:bg-blue-400 focus:bg-blue-400 focus:text-white',
    fill: 'bg-blue-500 !text-white !bg-opacity-100',
    $$slots: { default: [Om] },
    $$scope: { ctx: n },
  };
  n[0].practiceType !== void 0 && (h.group = n[0].practiceType),
    (s = new wn({ props: h })),
    dt.push(() => Ct(s, 'group', d));
  function g(p) {
    n[8](p);
  }
  let m = {
    name: 'practiceType',
    rounded: 'rounded-md',
    value: 'section',
    class:
      'select-none border-b-2 bg-pink-500 bg-opacity-20 border-pink-400  text-pink-500 transition-all hover:text-white hover:bg-pink-400 focus:bg-pink-400 focus:text-white',
    fill: 'bg-pink-500 !text-white !bg-opacity-100',
    $$slots: { default: [Fm] },
    $$scope: { ctx: n },
  };
  return (
    n[0].practiceType !== void 0 && (m.group = n[0].practiceType),
    (l = new wn({ props: m })),
    dt.push(() => Ct(l, 'group', g)),
    {
      c() {
        Z(t.$$.fragment), (i = B()), Z(s.$$.fragment), (r = B()), Z(l.$$.fragment);
      },
      m(p, _) {
        J(t, p, _), x(p, i, _), J(s, p, _), x(p, r, _), J(l, p, _), (c = !0);
      },
      p(p, _) {
        const y = {};
        _ & 1024 && (y.$$scope = { dirty: _, ctx: p }),
          !e && _ & 1 && ((e = !0), (y.group = p[0].practiceType), Tt(() => (e = !1))),
          t.$set(y);
        const v = {};
        _ & 1024 && (v.$$scope = { dirty: _, ctx: p }),
          !o && _ & 1 && ((o = !0), (v.group = p[0].practiceType), Tt(() => (o = !1))),
          s.$set(v);
        const k = {};
        _ & 1025 && (k.$$scope = { dirty: _, ctx: p }),
          !a && _ & 1 && ((a = !0), (k.group = p[0].practiceType), Tt(() => (a = !1))),
          l.$set(k);
      },
      i(p) {
        c || (L(t.$$.fragment, p), L(s.$$.fragment, p), L(l.$$.fragment, p), (c = !0));
      },
      o(p) {
        F(t.$$.fragment, p), F(s.$$.fragment, p), F(l.$$.fragment, p), (c = !1);
      },
      d(p) {
        Q(t, p), p && A(i), Q(s, p), p && A(r), Q(l, p);
      },
    }
  );
}
function Im(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g;
  return (
    (s = new yo({
      props: {
        border: 'border-none',
        class: 'gap-2',
        $$slots: { default: [Am] },
        $$scope: { ctx: n },
      },
    })),
    (l = new yo({
      props: {
        border: 'border-none',
        class: 'gap-2',
        $$slots: { default: [Em] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (i = C('div')),
          Z(s.$$.fragment),
          (o = B()),
          (r = C('div')),
          Z(l.$$.fragment),
          (a = B()),
          (c = C('div')),
          (f = C('button')),
          (f.textContent = 'start'),
          b(e, 'class', 'text-center'),
          b(
            f,
            'class',
            'btn text-white bg-zinc-500 border-b-2 rounded-md hover:filter-none hover:bg-zinc-400 focus:bg-zinc-400',
          ),
          b(c, 'class', 'text-center'),
          b(t, 'class', 'flex flex-col justify-evenly h-full absolute');
      },
      m(m, p) {
        x(m, t, p),
          S(t, e),
          S(e, i),
          J(s, i, null),
          S(e, o),
          S(e, r),
          J(l, r, null),
          S(t, a),
          S(t, c),
          S(c, f),
          (d = !0),
          h || ((g = R(f, 'click', n[2], { once: !0 })), (h = !0));
      },
      p(m, [p]) {
        const _ = {};
        p & 1025 && (_.$$scope = { dirty: p, ctx: m }), s.$set(_);
        const y = {};
        p & 1025 && (y.$$scope = { dirty: p, ctx: m }), l.$set(y);
      },
      i(m) {
        d ||
          (L(s.$$.fragment, m),
          L(l.$$.fragment, m),
          pt(() => {
            d && (u || (u = ot(t, bt, {}, !0)), u.run(1));
          }),
          (d = !0));
      },
      o(m) {
        F(s.$$.fragment, m), F(l.$$.fragment, m), u || (u = ot(t, bt, {}, !1)), u.run(0), (d = !1);
      },
      d(m) {
        m && A(t), Q(s), Q(l), m && u && u.end(), (h = !1), g();
      },
    }
  );
}
function Rm(n, t, e) {
  let i;
  Dt(n, fe, (h) => e(0, (i = h)));
  const s = Id({
      prevValue: String(i.sectionSize),
      checker: (h) => /^[1-9]\d*$/.test(h),
      resolveCallback: (h) => {
        fe.update((g) => ({ ...g, sectionSize: Number(h.curValue) }));
      },
    }),
    o = ke(),
    r = () => {
      o('start');
    },
    l = () => {
      Si(fe, (i.practiceType = 'section'), i);
    };
  function a(h) {
    n.$$.not_equal(i.practiceTarget, h) && ((i.practiceTarget = h), fe.set(i));
  }
  function c(h) {
    n.$$.not_equal(i.practiceTarget, h) && ((i.practiceTarget = h), fe.set(i));
  }
  function f(h) {
    n.$$.not_equal(i.practiceType, h) && ((i.practiceType = h), fe.set(i));
  }
  function u(h) {
    n.$$.not_equal(i.practiceType, h) && ((i.practiceType = h), fe.set(i));
  }
  function d(h) {
    n.$$.not_equal(i.practiceType, h) && ((i.practiceType = h), fe.set(i));
  }
  return [i, s, r, l, a, c, f, u, d];
}
let Bm = class extends lt {
  constructor(t) {
    super(), at(this, t, Rm, Im, rt, {});
  }
};
const Rn = (n, t) => {
    Ru.set({ successCount: t, totalCount: n });
  },
  Ru = ae();
function zm(n) {
  let t, e, i, s, o, r;
  return {
    c() {
      (t = C('div')),
        (e = C('span')),
        (i = X(n[1])),
        (s = X(`\r
  / `)),
        (o = X(n[2])),
        b(e, 'class', n[3]),
        b(
          t,
          'class',
          (r = `text-center text-4xl cursor-default tracking-[2rem] translate-x-3 mt-10 ${n[0]}`),
        );
    },
    m(l, a) {
      x(l, t, a), S(t, e), S(e, i), S(t, s), S(t, o);
    },
    p(l, [a]) {
      a & 2 && mt(i, l[1]),
        a & 8 && b(e, 'class', l[3]),
        a & 4 && mt(o, l[2]),
        a & 1 &&
          r !==
            (r = `text-center text-4xl cursor-default tracking-[2rem] translate-x-3 mt-10 ${l[0]}`) &&
          b(t, 'class', r);
    },
    i: ct,
    o: ct,
    d(l) {
      l && A(t);
    },
  };
}
function Hm(n, t, e) {
  let { styleClasses: i = '' } = t,
    s,
    o,
    r;
  const l = ({ totalCount: a, successCount: c }) => {
    e(2, (o = a)), e(1, (s = c));
    const f = s / (o === 1 ? o : o - 1);
    f < 0.4
      ? e(3, (r = 'text-red-300'))
      : f < 0.75
      ? e(3, (r = 'text-orange-300'))
      : e(3, (r = 'text-green-300'));
  };
  return (
    Ru.subscribe(l),
    (n.$$set = (a) => {
      'styleClasses' in a && e(0, (i = a.styleClasses));
    }),
    [i, s, o, r]
  );
}
class Bu extends lt {
  constructor(t) {
    super(), at(this, t, Hm, zm, rt, { styleClasses: 0 });
  }
}
function Cl(n, t, e) {
  const i = n.slice();
  return (i[7] = t[e]), (i[9] = e), i;
}
function Tl(n, t) {
  let e,
    i,
    s,
    o,
    r,
    l = t[7] + '',
    a,
    c;
  return {
    key: n,
    first: null,
    c() {
      (e = C('span')),
        (i = C('span')),
        (s = X('?')),
        (r = B()),
        (a = X(l)),
        (c = B()),
        b(i, 'class', (o = `${t[3]} ${t[6][t[9]]}`)),
        st(i, 'translate-y-full', t[5]),
        st(i, 'h-full', t[4]),
        st(i, 'hidden', !t[4]),
        b(e, 'class', t[2]),
        (this.first = e);
    },
    m(f, u) {
      x(f, e, u), S(e, i), S(i, s), S(e, r), S(e, a), S(e, c);
    },
    p(f, u) {
      (t = f),
        u & 9 && o !== (o = `${t[3]} ${t[6][t[9]]}`) && b(i, 'class', o),
        u & 41 && st(i, 'translate-y-full', t[5]),
        u & 25 && st(i, 'h-full', t[4]),
        u & 25 && st(i, 'hidden', !t[4]),
        u & 1 && l !== (l = t[7] + '') && mt(a, l),
        u & 4 && b(e, 'class', t[2]);
    },
    d(f) {
      f && A(e);
    },
  };
}
function Wm(n) {
  let t,
    e = [],
    i = new Map(),
    s = n[0];
  const o = (r) => r[7];
  for (let r = 0; r < s.length; r += 1) {
    let l = Cl(n, s, r),
      a = o(l);
    i.set(a, (e[r] = Tl(a, l)));
  }
  return {
    c() {
      t = C('div');
      for (let r = 0; r < e.length; r += 1) e[r].c();
      b(t, 'class', n[1]);
    },
    m(r, l) {
      x(r, t, l);
      for (let a = 0; a < e.length; a += 1) e[a] && e[a].m(t, null);
    },
    p(r, [l]) {
      l & 125 && ((s = r[0]), (e = Me(e, l, o, 1, r, s, i, t, Vs, Tl, null, Cl))),
        l & 2 && b(t, 'class', r[1]);
    },
    i: ct,
    o: ct,
    d(r) {
      r && A(t);
      for (let l = 0; l < e.length; l += 1) e[l].d();
    },
  };
}
function Nm(n, t, e) {
  let { data: i } = t,
    { wrapStyles: s } = t,
    { chipStyles: o } = t,
    { coverStyles: r } = t,
    { hide: l = !1 } = t,
    { show: a = !1 } = t;
  const c = [
    'delay-0',
    'delay-75',
    'delay-100',
    'delay-150',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-1000',
  ];
  return (
    (n.$$set = (f) => {
      'data' in f && e(0, (i = f.data)),
        'wrapStyles' in f && e(1, (s = f.wrapStyles)),
        'chipStyles' in f && e(2, (o = f.chipStyles)),
        'coverStyles' in f && e(3, (r = f.coverStyles)),
        'hide' in f && e(4, (l = f.hide)),
        'show' in f && e(5, (a = f.show));
    }),
    [i, s, o, r, l, a, c]
  );
}
class Pl extends lt {
  constructor(t) {
    super(),
      at(this, t, Nm, Wm, rt, {
        data: 0,
        wrapStyles: 1,
        chipStyles: 2,
        coverStyles: 3,
        hide: 4,
        show: 5,
      });
  }
}
function Vm(n) {
  let t, e, i, s, o, r, l, a;
  function c(u) {
    n[1](u);
  }
  let f = {
    name: 'slide',
    class: 'bg-slate-500 hover:brightness-95 focus:brightness-95 align-middle mx-2 ',
    active: 'bg-pink-500',
    size: 'sm',
  };
  return (
    n[0] !== void 0 && (f.checked = n[0]),
    (s = new ei({ props: f })),
    dt.push(() => Ct(s, 'checked', c)),
    {
      c() {
        (t = C('div')),
          (e = C('span')),
          (e.textContent = 'hide'),
          (i = B()),
          Z(s.$$.fragment),
          (r = B()),
          (l = C('span')),
          (l.textContent = 'show'),
          b(e, 'class', 'chip bg-slate-500 text-white cursor-default !filter-none'),
          st(e, 'bg-opacity-50', n[0]),
          b(l, 'class', 'chip bg-pink-500 text-white cursor-default !filter-none'),
          st(l, 'bg-opacity-50', !n[0]);
      },
      m(u, d) {
        x(u, t, d), S(t, e), S(t, i), J(s, t, null), S(t, r), S(t, l), (a = !0);
      },
      p(u, [d]) {
        (!a || d & 1) && st(e, 'bg-opacity-50', u[0]);
        const h = {};
        !o && d & 1 && ((o = !0), (h.checked = u[0]), Tt(() => (o = !1))),
          s.$set(h),
          (!a || d & 1) && st(l, 'bg-opacity-50', !u[0]);
      },
      i(u) {
        a || (L(s.$$.fragment, u), (a = !0));
      },
      o(u) {
        F(s.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && A(t), Q(s);
      },
    }
  );
}
function jm(n, t, e) {
  let { showPracticeTarget: i } = t;
  function s(o) {
    (i = o), e(0, i);
  }
  return (
    (n.$$set = (o) => {
      'showPracticeTarget' in o && e(0, (i = o.showPracticeTarget));
    }),
    [i, s]
  );
}
class Ym extends lt {
  constructor(t) {
    super(), at(this, t, jm, Vm, rt, { showPracticeTarget: 0 });
  }
}
function xl(n) {
  let t, e, i;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = X(n[3])),
        b(e, 'class', 'p-2 h-full max-h-28 overflow-auto bg-sky-300 rounded-md'),
        b(
          t,
          'class',
          'p-2 break-all whitespace-normal max-h-28 overflow-y-auto bg-sky-300 bg-opacity-50 rounded-md',
        );
    },
    m(s, o) {
      x(s, t, o), S(t, e), S(e, i);
    },
    p(s, o) {
      o & 8 && mt(i, s[3]);
    },
    d(s) {
      s && A(t);
    },
  };
}
function Um(n) {
  let t;
  return {
    c() {
      t = X('success');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function qm(n) {
  let t;
  return {
    c() {
      t = X('fail');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Xm(n) {
  let t, e, i, s, o, r;
  function l(u) {
    n[10](u);
  }
  let a = {
    name: 'curTaskResult',
    rounded: 'rounded-md',
    class:
      'border-b-2 border-slate-400  text-slate-400 transition-all hover:text-white hover:bg-slate-400 hover:bg-opacity-40 focus:bg-slate-400 focus:text-white',
    fill: '!bg-slate-500 !text-white',
    value: !0,
    $$slots: { default: [Um] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (a.group = n[0]), (t = new wn({ props: a })), dt.push(() => Ct(t, 'group', l));
  function c(u) {
    n[11](u);
  }
  let f = {
    name: 'curTaskResult',
    rounded: 'rounded-md',
    class:
      'border-b-2 border-slate-400  text-slate-400 transition-all hover:text-white hover:bg-slate-400 hover:bg-opacity-40 focus:bg-slate-400 focus:text-white',
    fill: '!bg-slate-500 !text-white',
    value: !1,
    $$slots: { default: [qm] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (s = new wn({ props: f })),
    dt.push(() => Ct(s, 'group', c)),
    {
      c() {
        Z(t.$$.fragment), (i = B()), Z(s.$$.fragment);
      },
      m(u, d) {
        J(t, u, d), x(u, i, d), J(s, u, d), (r = !0);
      },
      p(u, d) {
        const h = {};
        d & 4096 && (h.$$scope = { dirty: d, ctx: u }),
          !e && d & 1 && ((e = !0), (h.group = u[0]), Tt(() => (e = !1))),
          t.$set(h);
        const g = {};
        d & 4096 && (g.$$scope = { dirty: d, ctx: u }),
          !o && d & 1 && ((o = !0), (g.group = u[0]), Tt(() => (o = !1))),
          s.$set(g);
      },
      i(u) {
        r || (L(t.$$.fragment, u), L(s.$$.fragment, u), (r = !0));
      },
      o(u) {
        F(t.$$.fragment, u), F(s.$$.fragment, u), (r = !1);
      },
      d(u) {
        Q(t, u), u && A(i), Q(s, u);
      },
    }
  );
}
function Km(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m, p, _, y, v, k, w, M, D, T;
  e = new Pl({
    props: {
      show: n[6],
      coverStyles:
        'absolute bg-orange-400 w-full transition-all rounded-md font-bold text-orange-800 flex justify-center items-center',
      hide: n[7].practiceTarget === 'original',
      data: n[1],
      wrapStyles:
        'overflow-y-auto flex flex-wrap gap-2 p-2 max-h-28 bg-orange-300 bg-opacity-50 rounded-md',
      chipStyles:
        'overflow-hidden relative chip text-orange-800 bg-orange-300 hover:filter-none hover:bg-orange-400 grow break-all whitespace-normal cursor-default',
    },
  });
  function P(H) {
    n[9](H);
  }
  let E = {};
  n[6] !== void 0 && (E.showPracticeTarget = n[6]),
    (s = new Ym({ props: E })),
    dt.push(() => Ct(s, 'showPracticeTarget', P)),
    (l = new Pl({
      props: {
        show: n[6],
        coverStyles:
          'absolute bg-green-400 w-full transition-all rounded-md font-bold text-green-800 flex justify-center items-center',
        hide: n[7].practiceTarget === 'translation',
        data: n[2],
        wrapStyles:
          'flex flex-wrap gap-2 p-2 max-h-28 overflow-y-auto bg-green-300 bg-opacity-50 rounded-md',
        chipStyles:
          'overflow-hidden relative chip text-green-800 bg-green-300 hover:filter-none hover:bg-green-400 grow break-all whitespace-normal cursor-default',
      },
    }));
  let O = n[3] && xl(n);
  return (
    (u = new yo({
      props: {
        border: 'border-none',
        class: 'gap-2',
        $$slots: { default: [Xm] },
        $$scope: { ctx: n },
      },
    })),
    (k = new Bu({})),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (i = B()),
          Z(s.$$.fragment),
          (r = B()),
          Z(l.$$.fragment),
          (a = B()),
          O && O.c(),
          (c = B()),
          (f = C('div')),
          Z(u.$$.fragment),
          (d = B()),
          (h = C('div')),
          (g = C('button')),
          (m = X('next')),
          (_ = B()),
          (y = C('button')),
          (y.textContent = 'stop'),
          (v = B()),
          Z(k.$$.fragment),
          (g.disabled = p = n[0] === null),
          b(
            g,
            'class',
            'btn mr-2 text-white bg-zinc-500 border-b-2 rounded-md hover:filter-none hover:bg-zinc-400 focus:bg-zinc-400',
          ),
          b(
            y,
            'class',
            'btn text-white bg-zinc-500 border-b-2 rounded-md hover:filter-none hover:bg-zinc-400 focus:bg-zinc-400',
          ),
          b(
            t,
            'class',
            'flex flex-col justify-center items-center gap-[3vh] h-full w-90% p-2 absolute',
          );
      },
      m(H, W) {
        x(H, t, W),
          J(e, t, null),
          S(t, i),
          J(s, t, null),
          S(t, r),
          J(l, t, null),
          S(t, a),
          O && O.m(t, null),
          S(t, c),
          S(t, f),
          J(u, f, null),
          S(t, d),
          S(t, h),
          S(h, g),
          S(g, m),
          S(h, _),
          S(h, y),
          S(t, v),
          J(k, t, null),
          (M = !0),
          D ||
            ((T = [
              R(g, 'click', function () {
                Oe(n[4]) && n[4].apply(this, arguments);
              }),
              R(g, 'click', n[8]),
              R(
                y,
                'click',
                function () {
                  Oe(n[5]) && n[5].apply(this, arguments);
                },
                { once: !0 },
              ),
            ]),
            (D = !0));
      },
      p(H, [W]) {
        n = H;
        const $ = {};
        W & 64 && ($.show = n[6]),
          W & 128 && ($.hide = n[7].practiceTarget === 'original'),
          W & 2 && ($.data = n[1]),
          e.$set($);
        const tt = {};
        !o && W & 64 && ((o = !0), (tt.showPracticeTarget = n[6]), Tt(() => (o = !1))), s.$set(tt);
        const Y = {};
        W & 64 && (Y.show = n[6]),
          W & 128 && (Y.hide = n[7].practiceTarget === 'translation'),
          W & 4 && (Y.data = n[2]),
          l.$set(Y),
          n[3] ? (O ? O.p(n, W) : ((O = xl(n)), O.c(), O.m(t, c))) : O && (O.d(1), (O = null));
        const N = {};
        W & 4097 && (N.$$scope = { dirty: W, ctx: n }),
          u.$set(N),
          (!M || (W & 1 && p !== (p = n[0] === null))) && (g.disabled = p);
      },
      i(H) {
        M ||
          (L(e.$$.fragment, H),
          L(s.$$.fragment, H),
          L(l.$$.fragment, H),
          L(u.$$.fragment, H),
          L(k.$$.fragment, H),
          pt(() => {
            M && (w || (w = ot(t, bt, {}, !0)), w.run(1));
          }),
          (M = !0));
      },
      o(H) {
        F(e.$$.fragment, H),
          F(s.$$.fragment, H),
          F(l.$$.fragment, H),
          F(u.$$.fragment, H),
          F(k.$$.fragment, H),
          w || (w = ot(t, bt, {}, !1)),
          w.run(0),
          (M = !1);
      },
      d(H) {
        H && A(t), Q(e), Q(s), Q(l), O && O.d(), Q(u), Q(k), H && w && w.end(), (D = !1), Pt(T);
      },
    }
  );
}
function Gm(n, t, e) {
  let i;
  Dt(n, fe, (m) => e(7, (i = m)));
  let { variants: s } = t,
    { translations: o } = t,
    { description: r } = t,
    { selectedTaskResult: l = null } = t,
    { onNext: a } = t,
    { onSettings: c } = t;
  const f = () => {
    e(6, (u = !1));
  };
  let u = !1;
  function d(m) {
    (u = m), e(6, u);
  }
  function h(m) {
    (l = m), e(0, l);
  }
  function g(m) {
    (l = m), e(0, l);
  }
  return (
    (n.$$set = (m) => {
      'variants' in m && e(1, (s = m.variants)),
        'translations' in m && e(2, (o = m.translations)),
        'description' in m && e(3, (r = m.description)),
        'selectedTaskResult' in m && e(0, (l = m.selectedTaskResult)),
        'onNext' in m && e(4, (a = m.onNext)),
        'onSettings' in m && e(5, (c = m.onSettings));
    }),
    [l, s, o, r, a, c, u, i, f, d, h, g]
  );
}
class zu extends lt {
  constructor(t) {
    super(),
      at(this, t, Gm, Km, rt, {
        variants: 1,
        translations: 2,
        description: 3,
        selectedTaskResult: 0,
        onNext: 4,
        onSettings: 5,
      });
  }
}
function Zm(n) {
  let t;
  return {
    c() {
      t = X(n[0]);
    },
    m(e, i) {
      x(e, t, i);
    },
    p(e, i) {
      i & 1 && mt(t, e[0]);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Jm(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m;
  return (
    (e = new qi({
      props: { additionalStyles: '', $$slots: { default: [Zm] }, $$scope: { ctx: n } },
    })),
    (s = new Bu({ props: { styleClasses: 'm-0 mb-10' } })),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (i = B()),
          Z(s.$$.fragment),
          (o = B()),
          (r = C('div')),
          (l = C('button')),
          (a = X(n[1])),
          (c = B()),
          (f = C('button')),
          (u = X(n[2])),
          b(
            l,
            'class',
            'btn text-white bg-zinc-500 border-b-2 rounded-md hover:filter-none hover:bg-zinc-400 focus:bg-zinc-400',
          ),
          b(
            f,
            'class',
            'btn text-white bg-zinc-500 border-b-2 rounded-md hover:filter-none hover:bg-zinc-400 focus:bg-zinc-400',
          ),
          b(t, 'class', 'flex flex-col items-center gap-[3vh] w-full');
      },
      m(p, _) {
        x(p, t, _),
          J(e, t, null),
          S(t, i),
          J(s, t, null),
          S(t, o),
          S(t, r),
          S(r, l),
          S(l, a),
          S(r, c),
          S(r, f),
          S(f, u),
          (h = !0),
          g ||
            ((m = [
              R(l, 'click', function () {
                Oe(n[3]) && n[3].apply(this, arguments);
              }),
              R(f, 'click', function () {
                Oe(n[4]) && n[4].apply(this, arguments);
              }),
            ]),
            (g = !0));
      },
      p(p, [_]) {
        n = p;
        const y = {};
        _ & 33 && (y.$$scope = { dirty: _, ctx: n }),
          e.$set(y),
          (!h || _ & 2) && mt(a, n[1]),
          (!h || _ & 4) && mt(u, n[2]);
      },
      i(p) {
        h ||
          (L(e.$$.fragment, p),
          L(s.$$.fragment, p),
          pt(() => {
            h && (d || (d = ot(t, bt, {}, !0)), d.run(1));
          }),
          (h = !0));
      },
      o(p) {
        F(e.$$.fragment, p), F(s.$$.fragment, p), d || (d = ot(t, bt, {}, !1)), d.run(0), (h = !1);
      },
      d(p) {
        p && A(t), Q(e), Q(s), p && d && d.end(), (g = !1), Pt(m);
      },
    }
  );
}
function Qm(n, t, e) {
  let { title: i } = t,
    { restartBtnText: s } = t,
    { settingsBtnText: o } = t,
    { onRestart: r } = t,
    { onSettings: l } = t;
  return (
    (n.$$set = (a) => {
      'title' in a && e(0, (i = a.title)),
        'restartBtnText' in a && e(1, (s = a.restartBtnText)),
        'settingsBtnText' in a && e(2, (o = a.settingsBtnText)),
        'onRestart' in a && e(3, (r = a.onRestart)),
        'onSettings' in a && e(4, (l = a.onSettings));
    }),
    [i, s, o, r, l]
  );
}
class Hu extends lt {
  constructor(t) {
    super(),
      at(this, t, Qm, Jm, rt, {
        title: 0,
        restartBtnText: 1,
        settingsBtnText: 2,
        onRestart: 3,
        onSettings: 4,
      });
  }
}
let Wu = ae();
const $m = () => Bd(re.get().values()),
  t0 = () => [...re.get().values()].sort((n, t) => n.learnSuccess - t.learnSuccess),
  e0 = () => {
    const { sectionLastWordId: n, sectionSize: t } = zd(fe),
      e = [...re.get().values()];
    let i = n ? e.findIndex(({ id: o }) => o === n) + 1 : 0;
    i === e.length && (i = 0);
    const s = e.slice(i, i + t);
    return Wu.set(s.length), s;
  },
  n0 = { random: $m, worst: t0, section: e0 },
  Nu = ({ practiceTarget: n, practiceType: t, sectionSize: e }) => Rd(n0[t](n, e));
function i0(n) {
  let t, e;
  return (
    (t = new Hu({
      props: {
        title: "Passed all dictionary's words",
        restartBtnText: 'restart',
        settingsBtnText: 'settings',
        onRestart: n[8],
        onSettings: n[7],
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function s0(n) {
  let t, e, i;
  function s(r) {
    n[9](r);
  }
  let o = { onNext: n[6], onSettings: n[7], variants: n[2], translations: n[3], description: n[4] };
  return (
    n[5] !== void 0 && (o.selectedTaskResult = n[5]),
    (t = new zu({ props: o })),
    dt.push(() => Ct(t, 'selectedTaskResult', s)),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(r, l) {
        J(t, r, l), (i = !0);
      },
      p(r, l) {
        const a = {};
        l & 4 && (a.variants = r[2]),
          l & 8 && (a.translations = r[3]),
          l & 16 && (a.description = r[4]),
          !e && l & 32 && ((e = !0), (a.selectedTaskResult = r[5]), Tt(() => (e = !1))),
          t.$set(a);
      },
      i(r) {
        i || (L(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        F(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        Q(t, r);
      },
    }
  );
}
function o0(n) {
  let t, e, i, s;
  return (
    (e = new qi({
      props: { additionalStyles: 'animate-pulse', $$slots: { default: [r0] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment), b(t, 'class', 'absolute');
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, r) {
        const l = {};
        r & 65536 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, bt, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, bt, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function r0(n) {
  let t;
  return {
    c() {
      t = X('Loading');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function l0(n) {
  let t, e, i, s, o;
  const r = [o0, s0, i0],
    l = [];
  function a(c, f) {
    return c[0] ? 0 : c[1] ? 2 : 1;
  }
  return (
    (e = a(n)),
    (i = l[e] = r[e](n)),
    {
      c() {
        (t = C('div')),
          i.c(),
          b(
            t,
            'class',
            'flex justify-center items-center flex-col gap-5 h-full w-full text-center absolute',
          );
      },
      m(c, f) {
        x(c, t, f), l[e].m(t, null), (o = !0);
      },
      p(c, [f]) {
        let u = e;
        (e = a(c)),
          e === u
            ? l[e].p(c, f)
            : (vt(),
              F(l[u], 1, 1, () => {
                l[u] = null;
              }),
              wt(),
              (i = l[e]),
              i ? i.p(c, f) : ((i = l[e] = r[e](c)), i.c()),
              L(i, 1),
              i.m(t, null));
      },
      i(c) {
        o ||
          (L(i),
          pt(() => {
            o && (s || (s = ot(t, bt, {}, !0)), s.run(1));
          }),
          (o = !0));
      },
      o(c) {
        F(i), s || (s = ot(t, bt, {}, !1)), s.run(0), (o = !1);
      },
      d(c) {
        c && A(t), l[e].d(), c && s && s.end();
      },
    }
  );
}
function a0(n, t, e) {
  let i;
  Dt(n, fe, (v) => e(14, (i = v)));
  const s = ke();
  let o,
    r = !0,
    l = !1,
    a,
    c,
    f,
    u,
    d = null,
    h = 0,
    g = 0;
  const m = () => {
      const v = o.next();
      if (
        (d
          ? ((h += 1), re.onSuccessfulPractice(u), Cs.set('successful'))
          : (re.onUnsuccessfulPractice(u), Cs.set('unsuccessful')),
        v.done)
      ) {
        e(1, (l = !0)), Rn(g, h);
        return;
      }
      (g += 1),
        e(
          2,
          ({ variants: a, translations: c, description: f, id: u } = v.value),
          a,
          e(3, c),
          e(4, f),
        ),
        e(5, (d = null)),
        Rn(g, h);
    },
    p = () => {
      s('settings');
    },
    _ = () => {
      e(0, (r = !0)),
        e(1, (l = !1)),
        (o = Nu(i)),
        (g = 1),
        (h = 0),
        Rn(g, h),
        e(5, (d = null)),
        e(
          2,
          ({ variants: a, translations: c, description: f, id: u } = o.next().value),
          a,
          e(3, c),
          e(4, f),
        ),
        e(0, (r = !1));
    };
  ze(_);
  function y(v) {
    (d = v), e(5, d);
  }
  return [r, l, a, c, f, d, m, p, _, y];
}
class Al extends lt {
  constructor(t) {
    super(), at(this, t, a0, l0, rt, {});
  }
}
function c0(n) {
  let t, e;
  return (
    (t = new Hu({
      props: {
        title: 'Section complete',
        restartBtnText: 'next section',
        settingsBtnText: 'settings',
        onRestart: n[8],
        onSettings: n[7],
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function u0(n) {
  let t, e, i;
  function s(r) {
    n[9](r);
  }
  let o = { onNext: n[6], onSettings: n[7], variants: n[2], translations: n[3], description: n[4] };
  return (
    n[5] !== void 0 && (o.selectedTaskResult = n[5]),
    (t = new zu({ props: o })),
    dt.push(() => Ct(t, 'selectedTaskResult', s)),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(r, l) {
        J(t, r, l), (i = !0);
      },
      p(r, l) {
        const a = {};
        l & 4 && (a.variants = r[2]),
          l & 8 && (a.translations = r[3]),
          l & 16 && (a.description = r[4]),
          !e && l & 32 && ((e = !0), (a.selectedTaskResult = r[5]), Tt(() => (e = !1))),
          t.$set(a);
      },
      i(r) {
        i || (L(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        F(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        Q(t, r);
      },
    }
  );
}
function f0(n) {
  let t, e, i, s;
  return (
    (e = new qi({
      props: { additionalStyles: 'animate-pulse', $$slots: { default: [d0] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment), b(t, 'class', 'absolute');
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, r) {
        const l = {};
        r & 131072 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, bt, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, bt, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function d0(n) {
  let t;
  return {
    c() {
      t = X('Loading');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function h0(n) {
  let t, e, i, s, o;
  const r = [f0, u0, c0],
    l = [];
  function a(c, f) {
    return c[0] ? 0 : c[1] ? 2 : 1;
  }
  return (
    (e = a(n)),
    (i = l[e] = r[e](n)),
    {
      c() {
        (t = C('div')),
          i.c(),
          b(
            t,
            'class',
            'flex justify-center items-center flex-col gap-5 h-full w-full text-center absolute',
          );
      },
      m(c, f) {
        x(c, t, f), l[e].m(t, null), (o = !0);
      },
      p(c, [f]) {
        let u = e;
        (e = a(c)),
          e === u
            ? l[e].p(c, f)
            : (vt(),
              F(l[u], 1, 1, () => {
                l[u] = null;
              }),
              wt(),
              (i = l[e]),
              i ? i.p(c, f) : ((i = l[e] = r[e](c)), i.c()),
              L(i, 1),
              i.m(t, null));
      },
      i(c) {
        o ||
          (L(i),
          pt(() => {
            o && (s || (s = ot(t, bt, {}, !0)), s.run(1));
          }),
          (o = !0));
      },
      o(c) {
        F(i), s || (s = ot(t, bt, {}, !1)), s.run(0), (o = !1);
      },
      d(c) {
        c && A(t), l[e].d(), c && s && s.end();
      },
    }
  );
}
function g0(n, t, e) {
  let i, s;
  Dt(n, fe, (k) => e(14, (i = k))), Dt(n, Wu, (k) => e(15, (s = k)));
  const o = ke();
  let r,
    l = !0,
    a = !1,
    c,
    f,
    u,
    d,
    h = null,
    g = 0,
    m = 0;
  const p = () => {
      const k = r.next();
      if (
        (h
          ? ((g += 1), re.onSuccessfulPractice(d), Cs.set('successful'))
          : (re.onUnsuccessfulPractice(d), Cs.set('unsuccessful')),
        fe.update((w) => ({ ...w, sectionLastWordId: d })),
        k.done)
      ) {
        e(1, (a = !0)), Rn(m, g);
        return;
      }
      e(
        2,
        ({ variants: c, translations: f, description: u, id: d } = k.value),
        c,
        e(3, f),
        e(4, u),
      ),
        e(5, (h = null)),
        Rn(m, g);
    },
    _ = () => {
      o('settings');
    },
    y = () => {
      e(0, (l = !0)),
        e(1, (a = !1)),
        (r = Nu(i)),
        (m = s),
        m < i.sectionSize &&
          On.trigger({
            message: `It's last dictionary's section.
        No enough words`,
            background: Hd,
          }),
        (g = 0),
        Rn(m, g),
        e(5, (h = null)),
        e(
          2,
          ({ variants: c, translations: f, description: u, id: d } = r.next().value),
          c,
          e(3, f),
          e(4, u),
        ),
        e(0, (l = !1));
    };
  ze(y);
  function v(k) {
    (h = k), e(5, h);
  }
  return [l, a, c, f, u, h, p, _, y, v];
}
class m0 extends lt {
  constructor(t) {
    super(), at(this, t, g0, h0, rt, {});
  }
}
function p0(n) {
  let t, e, i;
  var s = n[1];
  function o(r) {
    return {};
  }
  return (
    s && ((t = jn(s, o())), t.$on('settings', n[4])),
    {
      c() {
        t && Z(t.$$.fragment), (e = ee());
      },
      m(r, l) {
        t && J(t, r, l), x(r, e, l), (i = !0);
      },
      p(r, l) {
        if (l & 2 && s !== (s = r[1])) {
          if (t) {
            vt();
            const a = t;
            F(a.$$.fragment, 1, 0, () => {
              Q(a, 1);
            }),
              wt();
          }
          s
            ? ((t = jn(s, o())),
              t.$on('settings', r[4]),
              Z(t.$$.fragment),
              L(t.$$.fragment, 1),
              J(t, e.parentNode, e))
            : (t = null);
        }
      },
      i(r) {
        i || (t && L(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        t && F(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && A(e), t && Q(t, r);
      },
    }
  );
}
function b0(n) {
  let t, e;
  return (
    (t = new Bm({})),
    t.$on('start', n[3]),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function _0(n) {
  let t, e, i, s;
  return (
    (e = new qi({ props: { $$slots: { default: [y0] }, $$scope: { ctx: n } } })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment), b(t, 'class', 'absolute');
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, r) {
        const l = {};
        r & 128 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, bt, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, bt, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function y0(n) {
  let t, e, i, s;
  return {
    c() {
      (t = X(`Dictionary is empty\r
        `)),
        (e = C('br')),
        (i = C('br')),
        (s = X(`\r
        Add some words for practice`));
    },
    m(o, r) {
      x(o, t, r), x(o, e, r), x(o, i, r), x(o, s, r);
    },
    p: ct,
    d(o) {
      o && A(t), o && A(e), o && A(i), o && A(s);
    },
  };
}
function k0(n) {
  let t, e, i, s, o;
  const r = [_0, b0, p0],
    l = [];
  function a(c, f) {
    return c[2].size === 0 ? 0 : c[0] === 'settings' ? 1 : 2;
  }
  return (
    (e = a(n)),
    (i = l[e] = r[e](n)),
    {
      c() {
        (t = C('div')),
          i.c(),
          b(t, 'class', 'absolute flex justify-center items-center w-screen h-screen');
      },
      m(c, f) {
        x(c, t, f), l[e].m(t, null), (o = !0);
      },
      p(c, [f]) {
        let u = e;
        (e = a(c)),
          e === u
            ? l[e].p(c, f)
            : (vt(),
              F(l[u], 1, 1, () => {
                l[u] = null;
              }),
              wt(),
              (i = l[e]),
              i ? i.p(c, f) : ((i = l[e] = r[e](c)), i.c()),
              L(i, 1),
              i.m(t, null));
      },
      i(c) {
        o ||
          (L(i),
          pt(() => {
            o && (s || (s = ot(t, bt, {}, !0)), s.run(1));
          }),
          (o = !0));
      },
      o(c) {
        F(i), s || (s = ot(t, bt, {}, !1)), s.run(0), (o = !1);
      },
      d(c) {
        c && A(t), l[e].d(), c && s && s.end();
      },
    }
  );
}
function v0(n, t, e) {
  let i, s, o;
  Dt(n, fe, (f) => e(5, (s = f))), Dt(n, re, (f) => e(2, (o = f)));
  let r = 'settings';
  const l = () => {
      e(0, (r = 'task'));
    },
    a = () => {
      e(0, (r = 'settings'));
    },
    c = { worst: Al, random: Al, section: m0 };
  return (
    (n.$$.update = () => {
      n.$$.dirty & 32 && e(1, (i = c[s.practiceType]));
    }),
    [r, i, o, l, a, s]
  );
}
class w0 extends lt {
  constructor(t) {
    super(), at(this, t, v0, k0, rt, {});
  }
}
const tn = ae('/dictionary');
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Xi(n) {
  return (n + 0.5) | 0;
}
const en = (n, t, e) => Math.max(Math.min(n, e), t);
function pi(n) {
  return en(Xi(n * 2.55), 0, 255);
}
function rn(n) {
  return en(Xi(n * 255), 0, 255);
}
function je(n) {
  return en(Xi(n / 2.55) / 100, 0, 1);
}
function Ll(n) {
  return en(Xi(n * 100), 0, 100);
}
const _e = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  vo = [...'0123456789ABCDEF'],
  S0 = (n) => vo[n & 15],
  M0 = (n) => vo[(n & 240) >> 4] + vo[n & 15],
  es = (n) => (n & 240) >> 4 === (n & 15),
  D0 = (n) => es(n.r) && es(n.g) && es(n.b) && es(n.a);
function C0(n) {
  var t = n.length,
    e;
  return (
    n[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (_e[n[1]] * 17),
            g: 255 & (_e[n[2]] * 17),
            b: 255 & (_e[n[3]] * 17),
            a: t === 5 ? _e[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (_e[n[1]] << 4) | _e[n[2]],
            g: (_e[n[3]] << 4) | _e[n[4]],
            b: (_e[n[5]] << 4) | _e[n[6]],
            a: t === 9 ? (_e[n[7]] << 4) | _e[n[8]] : 255,
          })),
    e
  );
}
const T0 = (n, t) => (n < 255 ? t(n) : '');
function P0(n) {
  var t = D0(n) ? S0 : M0;
  return n ? '#' + t(n.r) + t(n.g) + t(n.b) + T0(n.a, t) : void 0;
}
const x0 =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Vu(n, t, e) {
  const i = t * Math.min(e, 1 - e),
    s = (o, r = (o + n / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function A0(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function L0(n, t, e) {
  const i = Vu(n, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    (i[s] *= 1 - t - e), (i[s] += t);
  return i;
}
function O0(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function Yo(n) {
  const e = n.r / 255,
    i = n.g / 255,
    s = n.b / 255,
    o = Math.max(e, i, s),
    r = Math.min(e, i, s),
    l = (o + r) / 2;
  let a, c, f;
  return (
    o !== r &&
      ((f = o - r),
      (c = l > 0.5 ? f / (2 - o - r) : f / (o + r)),
      (a = O0(e, i, s, f, o)),
      (a = a * 60 + 0.5)),
    [a | 0, c || 0, l]
  );
}
function Uo(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(rn);
}
function qo(n, t, e) {
  return Uo(Vu, n, t, e);
}
function F0(n, t, e) {
  return Uo(L0, n, t, e);
}
function E0(n, t, e) {
  return Uo(A0, n, t, e);
}
function ju(n) {
  return ((n % 360) + 360) % 360;
}
function I0(n) {
  const t = x0.exec(n);
  let e = 255,
    i;
  if (!t) return;
  t[5] !== i && (e = t[6] ? pi(+t[5]) : rn(+t[5]));
  const s = ju(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === 'hwb' ? (i = F0(s, o, r)) : t[1] === 'hsv' ? (i = E0(s, o, r)) : (i = qo(s, o, r)),
    { r: i[0], g: i[1], b: i[2], a: e }
  );
}
function R0(n, t) {
  var e = Yo(n);
  (e[0] = ju(e[0] + t)), (e = qo(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
}
function B0(n) {
  if (!n) return;
  const t = Yo(n),
    e = t[0],
    i = Ll(t[1]),
    s = Ll(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${je(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const Ol = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  Fl = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
function z0() {
  const n = {},
    t = Object.keys(Fl),
    e = Object.keys(Ol);
  let i, s, o, r, l;
  for (i = 0; i < t.length; i++) {
    for (r = l = t[i], s = 0; s < e.length; s++) (o = e[s]), (l = l.replace(o, Ol[o]));
    (o = parseInt(Fl[r], 16)), (n[l] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return n;
}
let ns;
function H0(n) {
  ns || ((ns = z0()), (ns.transparent = [0, 0, 0, 0]));
  const t = ns[n.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const W0 =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function N0(n) {
  const t = W0.exec(n);
  let e = 255,
    i,
    s,
    o;
  if (t) {
    if (t[7] !== i) {
      const r = +t[7];
      e = t[8] ? pi(r) : en(r * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? pi(i) : en(i, 0, 255))),
      (s = 255 & (t[4] ? pi(s) : en(s, 0, 255))),
      (o = 255 & (t[6] ? pi(o) : en(o, 0, 255))),
      { r: i, g: s, b: o, a: e }
    );
  }
}
function V0(n) {
  return (
    n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${je(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const eo = (n) => (n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055),
  An = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function j0(n, t, e) {
  const i = An(je(n.r)),
    s = An(je(n.g)),
    o = An(je(n.b));
  return {
    r: rn(eo(i + e * (An(je(t.r)) - i))),
    g: rn(eo(s + e * (An(je(t.g)) - s))),
    b: rn(eo(o + e * (An(je(t.b)) - o))),
    a: n.a + e * (t.a - n.a),
  };
}
function is(n, t, e) {
  if (n) {
    let i = Yo(n);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
      (i = qo(i)),
      (n.r = i[0]),
      (n.g = i[1]),
      (n.b = i[2]);
  }
}
function Yu(n, t) {
  return n && Object.assign(t || {}, n);
}
function El(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((t = { r: n[0], g: n[1], b: n[2], a: 255 }), n.length > 3 && (t.a = rn(n[3])))
      : ((t = Yu(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = rn(t.a))),
    t
  );
}
function Y0(n) {
  return n.charAt(0) === 'r' ? N0(n) : I0(n);
}
class Li {
  constructor(t) {
    if (t instanceof Li) return t;
    const e = typeof t;
    let i;
    e === 'object' ? (i = El(t)) : e === 'string' && (i = C0(t) || H0(t) || Y0(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Yu(this._rgb);
    return t && (t.a = je(t.a)), t;
  }
  set rgb(t) {
    this._rgb = El(t);
  }
  rgbString() {
    return this._valid ? V0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? P0(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? B0(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb,
        s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e,
        l = 2 * r - 1,
        a = i.a - s.a,
        c = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
      (o = 1 - c),
        (i.r = 255 & (c * i.r + o * s.r + 0.5)),
        (i.g = 255 & (c * i.g + o * s.g + 0.5)),
        (i.b = 255 & (c * i.b + o * s.b + 0.5)),
        (i.a = r * i.a + (1 - r) * s.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = j0(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Li(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = rn(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = Xi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    const e = this._rgb;
    return (e.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return is(this._rgb, 2, t), this;
  }
  darken(t) {
    return is(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return is(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return is(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return R0(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function We() {}
const U0 = (() => {
  let n = 0;
  return () => n++;
})();
function Et(n) {
  return n === null || typeof n > 'u';
}
function Nt(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function At(n) {
  return n !== null && Object.prototype.toString.call(n) === '[object Object]';
}
function Ut(n) {
  return (typeof n == 'number' || n instanceof Number) && isFinite(+n);
}
function me(n, t) {
  return Ut(n) ? n : t;
}
function _t(n, t) {
  return typeof n > 'u' ? t : n;
}
const q0 = (n, t) => (typeof n == 'string' && n.endsWith('%') ? parseFloat(n) / 100 : +n / t),
  Uu = (n, t) => (typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n);
function Ht(n, t, e) {
  if (n && typeof n.call == 'function') return n.apply(e, t);
}
function Bt(n, t, e, i) {
  let s, o, r;
  if (Nt(n))
    if (((o = n.length), i)) for (s = o - 1; s >= 0; s--) t.call(e, n[s], s);
    else for (s = 0; s < o; s++) t.call(e, n[s], s);
  else if (At(n))
    for (r = Object.keys(n), o = r.length, s = 0; s < o; s++) t.call(e, n[r[s]], r[s]);
}
function Ps(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length) return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (((s = n[e]), (o = t[e]), s.datasetIndex !== o.datasetIndex || s.index !== o.index))
      return !1;
  return !0;
}
function xs(n) {
  if (Nt(n)) return n.map(xs);
  if (At(n)) {
    const t = Object.create(null),
      e = Object.keys(n),
      i = e.length;
    let s = 0;
    for (; s < i; ++s) t[e[s]] = xs(n[e[s]]);
    return t;
  }
  return n;
}
function qu(n) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1;
}
function X0(n, t, e, i) {
  if (!qu(n)) return;
  const s = t[n],
    o = e[n];
  At(s) && At(o) ? Oi(s, o, i) : (t[n] = xs(o));
}
function Oi(n, t, e) {
  const i = Nt(t) ? t : [t],
    s = i.length;
  if (!At(n)) return n;
  e = e || {};
  const o = e.merger || X0;
  let r;
  for (let l = 0; l < s; ++l) {
    if (((r = i[l]), !At(r))) continue;
    const a = Object.keys(r);
    for (let c = 0, f = a.length; c < f; ++c) o(a[c], n, r, e);
  }
  return n;
}
function Di(n, t) {
  return Oi(n, t, { merger: K0 });
}
function K0(n, t, e) {
  if (!qu(n)) return;
  const i = t[n],
    s = e[n];
  At(i) && At(s) ? Di(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = xs(s));
}
const Il = { '': (n) => n, x: (n) => n.x, y: (n) => n.y };
function G0(n) {
  const t = n.split('.'),
    e = [];
  let i = '';
  for (const s of t)
    (i += s), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (e.push(i), (i = ''));
  return e;
}
function Z0(n) {
  const t = G0(n);
  return (e) => {
    for (const i of t) {
      if (i === '') break;
      e = e && e[i];
    }
    return e;
  };
}
function an(n, t) {
  return (Il[t] || (Il[t] = Z0(t)))(n);
}
function Xo(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Fi = (n) => typeof n < 'u',
  cn = (n) => typeof n == 'function',
  Rl = (n, t) => {
    if (n.size !== t.size) return !1;
    for (const e of n) if (!t.has(e)) return !1;
    return !0;
  };
function J0(n) {
  return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu';
}
const jt = Math.PI,
  Vt = 2 * jt,
  Q0 = Vt + jt,
  As = Number.POSITIVE_INFINITY,
  $0 = jt / 180,
  qt = jt / 2,
  mn = jt / 4,
  Bl = (jt * 2) / 3,
  nn = Math.log10,
  Le = Math.sign;
function Ci(n, t, e) {
  return Math.abs(n - t) < e;
}
function zl(n) {
  const t = Math.round(n);
  n = Ci(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(nn(n))),
    i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function tp(n) {
  const t = [],
    e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++) n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function Un(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function ep(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Xu(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    (o = n[i][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function ve(n) {
  return n * (jt / 180);
}
function Ko(n) {
  return n * (180 / jt);
}
function Hl(n) {
  if (!Ut(n)) return;
  let t = 1,
    e = 0;
  for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
  return e;
}
function Ku(n, t) {
  const e = t.x - n.x,
    i = t.y - n.y,
    s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * jt && (o += Vt), { angle: o, distance: s };
}
function wo(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function np(n, t) {
  return ((n - t + Q0) % Vt) - jt;
}
function pe(n) {
  return ((n % Vt) + Vt) % Vt;
}
function Ei(n, t, e, i) {
  const s = pe(n),
    o = pe(t),
    r = pe(e),
    l = pe(o - s),
    a = pe(r - s),
    c = pe(s - o),
    f = pe(s - r);
  return s === o || s === r || (i && o === r) || (l > a && c < f);
}
function te(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function ip(n) {
  return te(n, -32768, 32767);
}
function Xe(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Go(n, t, e) {
  e = e || ((r) => n[r] < t);
  let i = n.length - 1,
    s = 0,
    o;
  for (; i - s > 1; ) (o = (s + i) >> 1), e(o) ? (s = o) : (i = o);
  return { lo: s, hi: i };
}
const Ke = (n, t, e, i) =>
    Go(
      n,
      e,
      i
        ? (s) => {
            const o = n[s][t];
            return o < e || (o === e && n[s + 1][t] === e);
          }
        : (s) => n[s][t] < e,
    ),
  sp = (n, t, e) => Go(n, e, (i) => n[i][t] >= e);
function op(n, t, e) {
  let i = 0,
    s = n.length;
  for (; i < s && n[i] < t; ) i++;
  for (; s > i && n[s - 1] > e; ) s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const Gu = ['push', 'pop', 'shift', 'splice', 'unshift'];
function rp(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Gu.forEach((e) => {
      const i = '_onData' + Xo(e),
        s = n[e];
      Object.defineProperty(n, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = s.apply(this, o);
          return (
            n._chartjs.listeners.forEach((l) => {
              typeof l[i] == 'function' && l[i](...o);
            }),
            r
          );
        },
      });
    });
}
function Wl(n, t) {
  const e = n._chartjs;
  if (!e) return;
  const i = e.listeners,
    s = i.indexOf(t);
  s !== -1 && i.splice(s, 1),
    !(i.length > 0) &&
      (Gu.forEach((o) => {
        delete n[o];
      }),
      delete n._chartjs);
}
function Zu(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Ju = (function () {
  return typeof window > 'u'
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Qu(n, t) {
  let e = [],
    i = !1;
  return function (...s) {
    (e = s),
      i ||
        ((i = !0),
        Ju.call(window, () => {
          (i = !1), n.apply(t, e);
        }));
  };
}
function lp(n, t) {
  let e;
  return function (...i) {
    return t ? (clearTimeout(e), (e = setTimeout(n, t, i))) : n.apply(this, i), t;
  };
}
const Zo = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
  ie = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2),
  ap = (n, t, e, i) => (n === (i ? 'left' : 'right') ? e : n === 'center' ? (t + e) / 2 : t);
function $u(n, t, e) {
  const i = t.length;
  let s = 0,
    o = i;
  if (n._sorted) {
    const { iScale: r, _parsed: l } = n,
      a = r.axis,
      { min: c, max: f, minDefined: u, maxDefined: d } = r.getUserBounds();
    u &&
      (s = te(Math.min(Ke(l, r.axis, c).lo, e ? i : Ke(t, a, r.getPixelForValue(c)).lo), 0, i - 1)),
      d
        ? (o =
            te(
              Math.max(
                Ke(l, r.axis, f, !0).hi + 1,
                e ? 0 : Ke(t, a, r.getPixelForValue(f), !0).hi + 1,
              ),
              s,
              i,
            ) - s)
        : (o = i - s);
  }
  return { start: s, count: o };
}
function tf(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!i) return (n._scaleRanges = s), !0;
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
  return Object.assign(i, s), o;
}
const ss = (n) => n === 0 || n === 1,
  Nl = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * Vt) / e)),
  Vl = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * Vt) / e) + 1,
  Ti = {
    linear: (n) => n,
    easeInQuad: (n) => n * n,
    easeOutQuad: (n) => -n * (n - 2),
    easeInOutQuad: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1)),
    easeInCubic: (n) => n * n * n,
    easeOutCubic: (n) => (n -= 1) * n * n + 1,
    easeInOutCubic: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2)),
    easeInQuart: (n) => n * n * n * n,
    easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
    easeInOutQuart: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
    easeInQuint: (n) => n * n * n * n * n,
    easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
    easeInOutQuint: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
    easeInSine: (n) => -Math.cos(n * qt) + 1,
    easeOutSine: (n) => Math.sin(n * qt),
    easeInOutSine: (n) => -0.5 * (Math.cos(jt * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      ss(n)
        ? n
        : n < 0.5
        ? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
    easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
    easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
    easeInOutCirc: (n) =>
      (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
    easeInElastic: (n) => (ss(n) ? n : Nl(n, 0.075, 0.3)),
    easeOutElastic: (n) => (ss(n) ? n : Vl(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return ss(n)
        ? n
        : n < 0.5
        ? 0.5 * Nl(n * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Vl(n * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(n) {
      return n * n * ((1.70158 + 1) * n - 1.70158);
    },
    easeOutBack(n) {
      return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
    },
    easeInOutBack(n) {
      let t = 1.70158;
      return (n /= 0.5) < 1
        ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
        : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
    },
    easeInBounce: (n) => 1 - Ti.easeOutBounce(1 - n),
    easeOutBounce(n) {
      return n < 1 / 2.75
        ? 7.5625 * n * n
        : n < 2 / 2.75
        ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
        : n < 2.5 / 2.75
        ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
        : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
    },
    easeInOutBounce: (n) =>
      n < 0.5 ? Ti.easeInBounce(n * 2) * 0.5 : Ti.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
  };
function Jo(n) {
  if (n && typeof n == 'object') {
    const t = n.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function jl(n) {
  return Jo(n) ? n : new Li(n);
}
function no(n) {
  return Jo(n) ? n : new Li(n).saturate(0.5).darken(0.1).hexString();
}
const cp = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  up = ['color', 'borderColor', 'backgroundColor'];
function fp(n) {
  n.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    n.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    n.set('animations', {
      colors: { type: 'color', properties: up },
      numbers: { type: 'number', properties: cp },
    }),
    n.describe('animations', { _fallback: 'animation' }),
    n.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
        },
      },
    });
}
function dp(n) {
  n.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
const Yl = new Map();
function hp(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = Yl.get(e);
  return i || ((i = new Intl.NumberFormat(n, t)), Yl.set(e, i)), i;
}
function Ki(n, t, e) {
  return hp(t, e).format(n);
}
const ef = {
  values(n) {
    return Nt(n) ? n : '' + n;
  },
  numeric(n, t, e) {
    if (n === 0) return '0';
    const i = this.chart.options.locale;
    let s,
      o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = 'scientific'), (o = gp(n, e));
    }
    const r = nn(Math.abs(o)),
      l = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      a = { notation: s, minimumFractionDigits: l, maximumFractionDigits: l };
    return Object.assign(a, this.options.ticks.format), Ki(n, i, a);
  },
  logarithmic(n, t, e) {
    if (n === 0) return '0';
    const i = e[t].significand || n / Math.pow(10, Math.floor(nn(n)));
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * e.length
      ? ef.numeric.call(this, n, t, e)
      : '';
  },
};
function gp(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var js = { formatters: ef };
function mp(n) {
  n.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: js.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    n.route('scale.ticks', 'color', '', 'color'),
    n.route('scale.grid', 'color', '', 'borderColor'),
    n.route('scale.border', 'color', '', 'borderColor'),
    n.route('scale.title', 'color', '', 'color'),
    n.describe('scale', {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
      _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    n.describe('scales', { _fallback: 'scale' }),
    n.describe('scale.ticks', {
      _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
      _indexable: (t) => t !== 'backdropPadding',
    });
}
const Cn = Object.create(null),
  So = Object.create(null);
function Pi(n, t) {
  if (!t) return n;
  const e = t.split('.');
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = Object.create(null));
  }
  return n;
}
function io(n, t, e) {
  return typeof t == 'string' ? Oi(Pi(n, t), e) : Oi(Pi(n, ''), t);
}
class pp {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, s) => no(s.backgroundColor)),
      (this.hoverBorderColor = (i, s) => no(s.borderColor)),
      (this.hoverColor = (i, s) => no(s.color)),
      (this.indexAxis = 'x'),
      (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return io(this, t, e);
  }
  get(t) {
    return Pi(this, t);
  }
  describe(t, e) {
    return io(So, t, e);
  }
  override(t, e) {
    return io(Cn, t, e);
  }
  route(t, e, i, s) {
    const o = Pi(this, t),
      r = Pi(this, i),
      l = '_' + e;
    Object.defineProperties(o, {
      [l]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const a = this[l],
            c = r[s];
          return At(a) ? Object.assign({}, c, a) : _t(a, c);
        },
        set(a) {
          this[l] = a;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var Xt = new pp(
  {
    _scriptable: (n) => !n.startsWith('on'),
    _indexable: (n) => n !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [fp, dp, mp],
);
function bp(n) {
  return !n || Et(n.size) || Et(n.family)
    ? null
    : (n.style ? n.style + ' ' : '') + (n.weight ? n.weight + ' ' : '') + n.size + 'px ' + n.family;
}
function Ls(n, t, e, i, s) {
  let o = t[s];
  return o || ((o = t[s] = n.measureText(s).width), e.push(s)), o > i && (i = o), i;
}
function _p(n, t, e, i) {
  i = i || {};
  let s = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t && ((s = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
    n.save(),
    (n.font = t);
  let r = 0;
  const l = e.length;
  let a, c, f, u, d;
  for (a = 0; a < l; a++)
    if (((u = e[a]), u != null && !Nt(u))) r = Ls(n, s, o, r, u);
    else if (Nt(u))
      for (c = 0, f = u.length; c < f; c++)
        (d = u[c]), d != null && !Nt(d) && (r = Ls(n, s, o, r, d));
  n.restore();
  const h = o.length / 2;
  if (h > e.length) {
    for (a = 0; a < h; a++) delete s[o[a]];
    o.splice(0, h);
  }
  return r;
}
function pn(n, t, e) {
  const i = n.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function Ul(n, t) {
  (t = t || n.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, n.width, n.height),
    t.restore();
}
function Mo(n, t, e, i) {
  nf(n, t, e, i, null);
}
function nf(n, t, e, i, s) {
  let o, r, l, a, c, f, u, d;
  const h = t.pointStyle,
    g = t.rotation,
    m = t.radius;
  let p = (g || 0) * $0;
  if (
    h &&
    typeof h == 'object' &&
    ((o = h.toString()), o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    n.save(),
      n.translate(e, i),
      n.rotate(p),
      n.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
      n.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch ((n.beginPath(), h)) {
      default:
        s ? n.ellipse(e, i, s / 2, m, 0, 0, Vt) : n.arc(e, i, m, 0, Vt), n.closePath();
        break;
      case 'triangle':
        (f = s ? s / 2 : m),
          n.moveTo(e + Math.sin(p) * f, i - Math.cos(p) * m),
          (p += Bl),
          n.lineTo(e + Math.sin(p) * f, i - Math.cos(p) * m),
          (p += Bl),
          n.lineTo(e + Math.sin(p) * f, i - Math.cos(p) * m),
          n.closePath();
        break;
      case 'rectRounded':
        (c = m * 0.516),
          (a = m - c),
          (r = Math.cos(p + mn) * a),
          (u = Math.cos(p + mn) * (s ? s / 2 - c : a)),
          (l = Math.sin(p + mn) * a),
          (d = Math.sin(p + mn) * (s ? s / 2 - c : a)),
          n.arc(e - u, i - l, c, p - jt, p - qt),
          n.arc(e + d, i - r, c, p - qt, p),
          n.arc(e + u, i + l, c, p, p + qt),
          n.arc(e - d, i + r, c, p + qt, p + jt),
          n.closePath();
        break;
      case 'rect':
        if (!g) {
          (a = Math.SQRT1_2 * m), (f = s ? s / 2 : a), n.rect(e - f, i - a, 2 * f, 2 * a);
          break;
        }
        p += mn;
      case 'rectRot':
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (l = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          n.moveTo(e - u, i - l),
          n.lineTo(e + d, i - r),
          n.lineTo(e + u, i + l),
          n.lineTo(e - d, i + r),
          n.closePath();
        break;
      case 'crossRot':
        p += mn;
      case 'cross':
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (l = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          n.moveTo(e - u, i - l),
          n.lineTo(e + u, i + l),
          n.moveTo(e + d, i - r),
          n.lineTo(e - d, i + r);
        break;
      case 'star':
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (l = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          n.moveTo(e - u, i - l),
          n.lineTo(e + u, i + l),
          n.moveTo(e + d, i - r),
          n.lineTo(e - d, i + r),
          (p += mn),
          (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (l = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          n.moveTo(e - u, i - l),
          n.lineTo(e + u, i + l),
          n.moveTo(e + d, i - r),
          n.lineTo(e - d, i + r);
        break;
      case 'line':
        (r = s ? s / 2 : Math.cos(p) * m),
          (l = Math.sin(p) * m),
          n.moveTo(e - r, i - l),
          n.lineTo(e + r, i + l);
        break;
      case 'dash':
        n.moveTo(e, i), n.lineTo(e + Math.cos(p) * (s ? s / 2 : m), i + Math.sin(p) * m);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function Ge(n, t, e) {
  return (
    (e = e || 0.5),
    !t || (n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e)
  );
}
function Ys(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Us(n) {
  n.restore();
}
function yp(n, t, e, i, s) {
  if (!t) return n.lineTo(e.x, e.y);
  if (s === 'middle') {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else (s === 'after') != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function kp(n, t, e, i) {
  if (!t) return n.lineTo(e.x, e.y);
  n.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? e.cp2x : e.cp1x,
    i ? e.cp2y : e.cp1y,
    e.x,
    e.y,
  );
}
function vp(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]),
    Et(t.rotation) || n.rotate(t.rotation),
    t.color && (n.fillStyle = t.color),
    t.textAlign && (n.textAlign = t.textAlign),
    t.textBaseline && (n.textBaseline = t.textBaseline);
}
function wp(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i),
      r = t - o.actualBoundingBoxLeft,
      l = t + o.actualBoundingBoxRight,
      a = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      f = s.strikethrough ? (a + c) / 2 : c;
    (n.strokeStyle = n.fillStyle),
      n.beginPath(),
      (n.lineWidth = s.decorationWidth || 2),
      n.moveTo(r, f),
      n.lineTo(l, f),
      n.stroke();
  }
}
function Sp(n, t) {
  const e = n.fillStyle;
  (n.fillStyle = t.color), n.fillRect(t.left, t.top, t.width, t.height), (n.fillStyle = e);
}
function Tn(n, t, e, i, s, o = {}) {
  const r = Nt(t) ? t : [t],
    l = o.strokeWidth > 0 && o.strokeColor !== '';
  let a, c;
  for (n.save(), n.font = s.string, vp(n, o), a = 0; a < r.length; ++a)
    (c = r[a]),
      o.backdrop && Sp(n, o.backdrop),
      l &&
        (o.strokeColor && (n.strokeStyle = o.strokeColor),
        Et(o.strokeWidth) || (n.lineWidth = o.strokeWidth),
        n.strokeText(c, e, i, o.maxWidth)),
      n.fillText(c, e, i, o.maxWidth),
      wp(n, e, i, c, o),
      (i += Number(s.lineHeight));
  n.restore();
}
function Ii(n, t) {
  const { x: e, y: i, w: s, h: o, radius: r } = t;
  n.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -qt, jt, !0),
    n.lineTo(e, i + o - r.bottomLeft),
    n.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, jt, qt, !0),
    n.lineTo(e + s - r.bottomRight, i + o),
    n.arc(e + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, qt, 0, !0),
    n.lineTo(e + s, i + r.topRight),
    n.arc(e + s - r.topRight, i + r.topRight, r.topRight, 0, -qt, !0),
    n.lineTo(e + r.topLeft, i);
}
const Mp = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Dp = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Cp(n, t) {
  const e = ('' + n).match(Mp);
  if (!e || e[1] === 'normal') return t * 1.2;
  switch (((n = +e[2]), e[3])) {
    case 'px':
      return n;
    case '%':
      n /= 100;
      break;
  }
  return t * n;
}
const Tp = (n) => +n || 0;
function Qo(n, t) {
  const e = {},
    i = At(t),
    s = i ? Object.keys(t) : t,
    o = At(n) ? (i ? (r) => _t(n[r], n[t[r]]) : (r) => n[r]) : () => n;
  for (const r of s) e[r] = Tp(o(r));
  return e;
}
function sf(n) {
  return Qo(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function Sn(n) {
  return Qo(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function le(n) {
  const t = sf(n);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function $t(n, t) {
  (n = n || {}), (t = t || Xt.font);
  let e = _t(n.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let i = _t(n.style, t.style);
  i &&
    !('' + i).match(Dp) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const s = {
    family: _t(n.family, t.family),
    lineHeight: Cp(_t(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: _t(n.weight, t.weight),
    string: '',
  };
  return (s.string = bp(s)), s;
}
function bi(n, t, e, i) {
  let s = !0,
    o,
    r,
    l;
  for (o = 0, r = n.length; o < r; ++o)
    if (
      ((l = n[o]),
      l !== void 0 &&
        (t !== void 0 && typeof l == 'function' && ((l = l(t)), (s = !1)),
        e !== void 0 && Nt(l) && ((l = l[e % l.length]), (s = !1)),
        l !== void 0))
    )
      return i && !s && (i.cacheable = !1), l;
}
function Pp(n, t, e) {
  const { min: i, max: s } = n,
    o = Uu(t, (s - i) / 2),
    r = (l, a) => (e && l === 0 ? 0 : l + a);
  return { min: r(i, -Math.abs(o)), max: r(s, o) };
}
function dn(n, t) {
  return Object.assign(Object.create(n), t);
}
function $o(n, t = [''], e, i, s = () => n[0]) {
  const o = e || n;
  typeof i > 'u' && (i = af('_fallback', n));
  const r = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: n,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (l) => $o([l, ...n], t, o, i),
  };
  return new Proxy(r, {
    deleteProperty(l, a) {
      return delete l[a], delete l._keys, delete n[0][a], !0;
    },
    get(l, a) {
      return rf(l, a, () => Rp(a, t, n, l));
    },
    getOwnPropertyDescriptor(l, a) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(l, a) {
      return Xl(l).includes(a);
    },
    ownKeys(l) {
      return Xl(l);
    },
    set(l, a, c) {
      const f = l._storage || (l._storage = s());
      return (l[a] = f[a] = c), delete l._keys, !0;
    },
  });
}
function qn(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: of(n, i),
    setContext: (o) => qn(n, o, e, i),
    override: (o) => qn(n.override(o), t, e, i),
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete n[r], !0;
    },
    get(o, r, l) {
      return rf(o, r, () => Ap(o, r, l));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(n, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(n, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    has(o, r) {
      return Reflect.has(n, r);
    },
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    set(o, r, l) {
      return (n[r] = l), delete o[r], !0;
    },
  });
}
function of(n, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: cn(e) ? e : () => e,
    isIndexable: cn(i) ? i : () => i,
  };
}
const xp = (n, t) => (n ? n + Xo(t) : t),
  tr = (n, t) =>
    At(t) && n !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function rf(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
  const i = e();
  return (n[t] = i), i;
}
function Ap(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = n;
  let l = i[t];
  return (
    cn(l) && r.isScriptable(t) && (l = Lp(t, l, n, e)),
    Nt(l) && l.length && (l = Op(t, l, n, r.isIndexable)),
    tr(t, l) && (l = qn(l, s, o && o[t], r)),
    l
  );
}
function Lp(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: l } = e;
  if (l.has(n)) throw new Error('Recursion detected: ' + Array.from(l).join('->') + '->' + n);
  l.add(n);
  let a = t(o, r || i);
  return l.delete(n), tr(n, a) && (a = er(s._scopes, s, n, a)), a;
}
function Op(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: l } = e;
  if (typeof o.index < 'u' && i(n)) return t[o.index % t.length];
  if (At(t[0])) {
    const a = t,
      c = s._scopes.filter((f) => f !== a);
    t = [];
    for (const f of a) {
      const u = er(c, s, n, f);
      t.push(qn(u, o, r && r[n], l));
    }
  }
  return t;
}
function lf(n, t, e) {
  return cn(n) ? n(t, e) : n;
}
const Fp = (n, t) => (n === !0 ? t : typeof n == 'string' ? an(t, n) : void 0);
function Ep(n, t, e, i, s) {
  for (const o of t) {
    const r = Fp(e, o);
    if (r) {
      n.add(r);
      const l = lf(r._fallback, e, s);
      if (typeof l < 'u' && l !== e && l !== i) return l;
    } else if (r === !1 && typeof i < 'u' && e !== i) return null;
  }
  return !1;
}
function er(n, t, e, i) {
  const s = t._rootScopes,
    o = lf(t._fallback, e, i),
    r = [...n, ...s],
    l = new Set();
  l.add(i);
  let a = ql(l, r, e, o || e, i);
  return a === null || (typeof o < 'u' && o !== e && ((a = ql(l, r, o, a, i)), a === null))
    ? !1
    : $o(Array.from(l), [''], s, o, () => Ip(t, e, i));
}
function ql(n, t, e, i, s) {
  for (; e; ) e = Ep(n, t, e, i, s);
  return e;
}
function Ip(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return Nt(s) && At(e) ? e : s || {};
}
function Rp(n, t, e, i) {
  let s;
  for (const o of t)
    if (((s = af(xp(o, n), e)), typeof s < 'u')) return tr(n, s) ? er(e, i, n, s) : s;
}
function af(n, t) {
  for (const e of t) {
    if (!e) continue;
    const i = e[n];
    if (typeof i < 'u') return i;
  }
}
function Xl(n) {
  let t = n._keys;
  return t || (t = n._keys = Bp(n._scopes)), t;
}
function Bp(n) {
  const t = new Set();
  for (const e of n) for (const i of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(i);
  return Array.from(t);
}
function cf(n, t, e, i) {
  const { iScale: s } = n,
    { key: o = 'r' } = this._parsing,
    r = new Array(i);
  let l, a, c, f;
  for (l = 0, a = i; l < a; ++l) (c = l + e), (f = t[c]), (r[l] = { r: s.parse(an(f, o), c) });
  return r;
}
const zp = Number.EPSILON || 1e-14,
  Xn = (n, t) => t < n.length && !n[t].skip && n[t],
  uf = (n) => (n === 'x' ? 'y' : 'x');
function Hp(n, t, e, i) {
  const s = n.skip ? t : n,
    o = t,
    r = e.skip ? t : e,
    l = wo(o, s),
    a = wo(r, o);
  let c = l / (l + a),
    f = a / (l + a);
  (c = isNaN(c) ? 0 : c), (f = isNaN(f) ? 0 : f);
  const u = i * c,
    d = i * f;
  return {
    previous: { x: o.x - u * (r.x - s.x), y: o.y - u * (r.y - s.y) },
    next: { x: o.x + d * (r.x - s.x), y: o.y + d * (r.y - s.y) },
  };
}
function Wp(n, t, e) {
  const i = n.length;
  let s,
    o,
    r,
    l,
    a,
    c = Xn(n, 0);
  for (let f = 0; f < i - 1; ++f)
    if (((a = c), (c = Xn(n, f + 1)), !(!a || !c))) {
      if (Ci(t[f], 0, zp)) {
        e[f] = e[f + 1] = 0;
        continue;
      }
      (s = e[f] / t[f]),
        (o = e[f + 1] / t[f]),
        (l = Math.pow(s, 2) + Math.pow(o, 2)),
        !(l <= 9) && ((r = 3 / Math.sqrt(l)), (e[f] = s * r * t[f]), (e[f + 1] = o * r * t[f]));
    }
}
function Np(n, t, e = 'x') {
  const i = uf(e),
    s = n.length;
  let o,
    r,
    l,
    a = Xn(n, 0);
  for (let c = 0; c < s; ++c) {
    if (((r = l), (l = a), (a = Xn(n, c + 1)), !l)) continue;
    const f = l[e],
      u = l[i];
    r && ((o = (f - r[e]) / 3), (l[`cp1${e}`] = f - o), (l[`cp1${i}`] = u - o * t[c])),
      a && ((o = (a[e] - f) / 3), (l[`cp2${e}`] = f + o), (l[`cp2${i}`] = u + o * t[c]));
  }
}
function Vp(n, t = 'x') {
  const e = uf(t),
    i = n.length,
    s = Array(i).fill(0),
    o = Array(i);
  let r,
    l,
    a,
    c = Xn(n, 0);
  for (r = 0; r < i; ++r)
    if (((l = a), (a = c), (c = Xn(n, r + 1)), !!a)) {
      if (c) {
        const f = c[t] - a[t];
        s[r] = f !== 0 ? (c[e] - a[e]) / f : 0;
      }
      o[r] = l ? (c ? (Le(s[r - 1]) !== Le(s[r]) ? 0 : (s[r - 1] + s[r]) / 2) : s[r - 1]) : s[r];
    }
  Wp(n, s, o), Np(n, o, t);
}
function os(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function jp(n, t) {
  let e,
    i,
    s,
    o,
    r,
    l = Ge(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    (r = o),
      (o = l),
      (l = e < i - 1 && Ge(n[e + 1], t)),
      o &&
        ((s = n[e]),
        r && ((s.cp1x = os(s.cp1x, t.left, t.right)), (s.cp1y = os(s.cp1y, t.top, t.bottom))),
        l && ((s.cp2x = os(s.cp2x, t.left, t.right)), (s.cp2y = os(s.cp2y, t.top, t.bottom))));
}
function Yp(n, t, e, i, s) {
  let o, r, l, a;
  if ((t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === 'monotone'))
    Vp(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, r = n.length; o < r; ++o)
      (l = n[o]),
        (a = Hp(c, l, n[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension)),
        (l.cp1x = a.previous.x),
        (l.cp1y = a.previous.y),
        (l.cp2x = a.next.x),
        (l.cp2y = a.next.y),
        (c = l);
  }
  t.capBezierPoints && jp(n, e);
}
function ff() {
  return typeof window < 'u' && typeof document < 'u';
}
function nr(n) {
  let t = n.parentNode;
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function Os(n, t, e) {
  let i;
  return (
    typeof n == 'string'
      ? ((i = parseInt(n, 10)), n.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[e]))
      : (i = n),
    i
  );
}
const qs = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function Up(n, t) {
  return qs(n).getPropertyValue(t);
}
const qp = ['top', 'right', 'bottom', 'left'];
function Mn(n, t, e) {
  const i = {};
  e = e ? '-' + e : '';
  for (let s = 0; s < 4; s++) {
    const o = qp[s];
    i[o] = parseFloat(n[t + '-' + o + e]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const Xp = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function Kp(n, t) {
  const e = n.touches,
    i = e && e.length ? e[0] : n,
    { offsetX: s, offsetY: o } = i;
  let r = !1,
    l,
    a;
  if (Xp(s, o, n.target)) (l = s), (a = o);
  else {
    const c = t.getBoundingClientRect();
    (l = i.clientX - c.left), (a = i.clientY - c.top), (r = !0);
  }
  return { x: l, y: a, box: r };
}
function yn(n, t) {
  if ('native' in n) return n;
  const { canvas: e, currentDevicePixelRatio: i } = t,
    s = qs(e),
    o = s.boxSizing === 'border-box',
    r = Mn(s, 'padding'),
    l = Mn(s, 'border', 'width'),
    { x: a, y: c, box: f } = Kp(n, e),
    u = r.left + (f && l.left),
    d = r.top + (f && l.top);
  let { width: h, height: g } = t;
  return (
    o && ((h -= r.width + l.width), (g -= r.height + l.height)),
    { x: Math.round((((a - u) / h) * e.width) / i), y: Math.round((((c - d) / g) * e.height) / i) }
  );
}
function Gp(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = nr(n);
    if (!o) (t = n.clientWidth), (e = n.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        l = qs(o),
        a = Mn(l, 'border', 'width'),
        c = Mn(l, 'padding');
      (t = r.width - c.width - a.width),
        (e = r.height - c.height - a.height),
        (i = Os(l.maxWidth, o, 'clientWidth')),
        (s = Os(l.maxHeight, o, 'clientHeight'));
    }
  }
  return { width: t, height: e, maxWidth: i || As, maxHeight: s || As };
}
const rs = (n) => Math.round(n * 10) / 10;
function Zp(n, t, e, i) {
  const s = qs(n),
    o = Mn(s, 'margin'),
    r = Os(s.maxWidth, n, 'clientWidth') || As,
    l = Os(s.maxHeight, n, 'clientHeight') || As,
    a = Gp(n, t, e);
  let { width: c, height: f } = a;
  if (s.boxSizing === 'content-box') {
    const d = Mn(s, 'border', 'width'),
      h = Mn(s, 'padding');
    (c -= h.width + d.width), (f -= h.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (f = Math.max(0, i ? c / i : f - o.height)),
    (c = rs(Math.min(c, r, a.maxWidth))),
    (f = rs(Math.min(f, l, a.maxHeight))),
    c && !f && (f = rs(c / 2)),
    (t !== void 0 || e !== void 0) &&
      i &&
      a.height &&
      f > a.height &&
      ((f = a.height), (c = rs(Math.floor(f * i)))),
    { width: c, height: f }
  );
}
function Kl(n, t, e) {
  const i = t || 1,
    s = Math.floor(n.height * i),
    o = Math.floor(n.width * i);
  (n.height = Math.floor(n.height)), (n.width = Math.floor(n.width));
  const r = n.canvas;
  return (
    r.style &&
      (e || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${n.height}px`), (r.style.width = `${n.width}px`)),
    n.currentDevicePixelRatio !== i || r.height !== s || r.width !== o
      ? ((n.currentDevicePixelRatio = i),
        (r.height = s),
        (r.width = o),
        n.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const Jp = (function () {
  let n = !1;
  try {
    const t = {
      get passive() {
        return (n = !0), !1;
      },
    };
    window.addEventListener('test', null, t), window.removeEventListener('test', null, t);
  } catch {}
  return n;
})();
function Gl(n, t) {
  const e = Up(n, t),
    i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function kn(n, t, e, i) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function Qp(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y:
      i === 'middle'
        ? e < 0.5
          ? n.y
          : t.y
        : i === 'after'
        ? e < 1
          ? n.y
          : t.y
        : e > 0
        ? t.y
        : n.y,
  };
}
function $p(n, t, e, i) {
  const s = { x: n.cp2x, y: n.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = kn(n, s, e),
    l = kn(s, o, e),
    a = kn(o, t, e),
    c = kn(r, l, e),
    f = kn(l, a, e);
  return kn(c, f, e);
}
const tb = function (n, t) {
    return {
      x(e) {
        return n + n + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === 'center' ? e : e === 'right' ? 'left' : 'right';
      },
      xPlus(e, i) {
        return e - i;
      },
      leftForLtr(e, i) {
        return e - i;
      },
    };
  },
  eb = function () {
    return {
      x(n) {
        return n;
      },
      setWidth(n) {},
      textAlign(n) {
        return n;
      },
      xPlus(n, t) {
        return n + t;
      },
      leftForLtr(n, t) {
        return n;
      },
    };
  };
function Bn(n, t, e) {
  return n ? tb(t, e) : eb();
}
function df(n, t) {
  let e, i;
  (t === 'ltr' || t === 'rtl') &&
    ((e = n.canvas.style),
    (i = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (n.prevTextDirection = i));
}
function hf(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty('direction', t[0], t[1]));
}
function gf(n) {
  return n === 'angle'
    ? { between: Ei, compare: np, normalize: pe }
    : { between: Xe, compare: (t, e) => t - e, normalize: (t) => t };
}
function Zl({ start: n, end: t, count: e, loop: i, style: s }) {
  return { start: n % e, end: t % e, loop: i && (t - n + 1) % e === 0, style: s };
}
function nb(n, t, e) {
  const { property: i, start: s, end: o } = e,
    { between: r, normalize: l } = gf(i),
    a = t.length;
  let { start: c, end: f, loop: u } = n,
    d,
    h;
  if (u) {
    for (c += a, f += a, d = 0, h = a; d < h && r(l(t[c % a][i]), s, o); ++d) c--, f--;
    (c %= a), (f %= a);
  }
  return f < c && (f += a), { start: c, end: f, loop: u, style: n.style };
}
function mf(n, t, e) {
  if (!e) return [n];
  const { property: i, start: s, end: o } = e,
    r = t.length,
    { compare: l, between: a, normalize: c } = gf(i),
    { start: f, end: u, loop: d, style: h } = nb(n, t, e),
    g = [];
  let m = !1,
    p = null,
    _,
    y,
    v;
  const k = () => a(s, v, _) && l(s, v) !== 0,
    w = () => l(o, _) === 0 || a(o, v, _),
    M = () => m || k(),
    D = () => !m || w();
  for (let T = f, P = f; T <= u; ++T)
    (y = t[T % r]),
      !y.skip &&
        ((_ = c(y[i])),
        _ !== v &&
          ((m = a(_, s, o)),
          p === null && M() && (p = l(_, s) === 0 ? T : P),
          p !== null &&
            D() &&
            (g.push(Zl({ start: p, end: T, loop: d, count: r, style: h })), (p = null)),
          (P = T),
          (v = _)));
  return p !== null && g.push(Zl({ start: p, end: u, loop: d, count: r, style: h })), g;
}
function pf(n, t) {
  const e = [],
    i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = mf(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function ib(n, t, e, i) {
  let s = 0,
    o = t - 1;
  if (e && !i) for (; s < t && !n[s].skip; ) s++;
  for (; s < t && n[s].skip; ) s++;
  for (s %= t, e && (o += s); o > s && n[o % t].skip; ) o--;
  return (o %= t), { start: s, end: o };
}
function sb(n, t, e, i) {
  const s = n.length,
    o = [];
  let r = t,
    l = n[t],
    a;
  for (a = t + 1; a <= e; ++a) {
    const c = n[a % s];
    c.skip || c.stop
      ? l.skip ||
        ((i = !1), o.push({ start: t % s, end: (a - 1) % s, loop: i }), (t = r = c.stop ? a : null))
      : ((r = a), l.skip && (t = a)),
      (l = c);
  }
  return r !== null && o.push({ start: t % s, end: r % s, loop: i }), o;
}
function ob(n, t) {
  const e = n.points,
    i = n.options.spanGaps,
    s = e.length;
  if (!s) return [];
  const o = !!n._loop,
    { start: r, end: l } = ib(e, s, o, i);
  if (i === !0) return Jl(n, [{ start: r, end: l, loop: o }], e, t);
  const a = l < r ? l + s : l,
    c = !!n._fullLoop && r === 0 && l === s - 1;
  return Jl(n, sb(e, r, a, c), e, t);
}
function Jl(n, t, e, i) {
  return !i || !i.setContext || !e ? t : rb(n, t, e, i);
}
function rb(n, t, e, i) {
  const s = n._chart.getContext(),
    o = Ql(n.options),
    {
      _datasetIndex: r,
      options: { spanGaps: l },
    } = n,
    a = e.length,
    c = [];
  let f = o,
    u = t[0].start,
    d = u;
  function h(g, m, p, _) {
    const y = l ? -1 : 1;
    if (g !== m) {
      for (g += a; e[g % a].skip; ) g -= y;
      for (; e[m % a].skip; ) m += y;
      g % a !== m % a &&
        (c.push({ start: g % a, end: m % a, loop: p, style: _ }), (f = _), (u = m % a));
    }
  }
  for (const g of t) {
    u = l ? u : g.start;
    let m = e[u % a],
      p;
    for (d = u + 1; d <= g.end; d++) {
      const _ = e[d % a];
      (p = Ql(
        i.setContext(
          dn(s, {
            type: 'segment',
            p0: m,
            p1: _,
            p0DataIndex: (d - 1) % a,
            p1DataIndex: d % a,
            datasetIndex: r,
          }),
        ),
      )),
        lb(p, f) && h(u, d - 1, g.loop, f),
        (m = _),
        (f = p);
    }
    u < d - 1 && h(u, d - 1, g.loop, f);
  }
  return c;
}
function Ql(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor,
  };
}
function lb(n, t) {
  if (!t) return !1;
  const e = [],
    i = function (s, o) {
      return Jo(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
    };
  return JSON.stringify(n, i) !== JSON.stringify(t, i);
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class ab {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s],
      r = e.duration;
    o.forEach((l) =>
      l({ chart: t, initial: e.initial, numSteps: r, currentStep: Math.min(i - e.start, r) }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Ju.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return;
      const o = i.items;
      let r = o.length - 1,
        l = !1,
        a;
      for (; r >= 0; --r)
        (a = o[r]),
          a._active
            ? (a._total > i.duration && (i.duration = a._total), a.tick(t), (l = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      l && (s.draw(), this._notify(s, i, t, 'progress')),
        o.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
        (e += o.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return (
      i ||
        ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
        e.set(t, i)),
      i
    );
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s) i[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), 'complete');
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Ne = new ab();
const $l = 'transparent',
  cb = {
    boolean(n, t, e) {
      return e > 0.5 ? t : n;
    },
    color(n, t, e) {
      const i = jl(n || $l),
        s = i.valid && jl(t || $l);
      return s && s.valid ? s.mix(i, e).hexString() : t;
    },
    number(n, t, e) {
      return n + (t - n) * e;
    },
  };
class ub {
  constructor(t, e, i, s) {
    const o = e[i];
    s = bi([t.to, s, o, t.from]);
    const r = bi([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || cb[t.type || typeof r]),
      (this._easing = Ti[t.easing] || Ti.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = i),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = i - this._start,
        r = this._duration - o;
      (this._start = i),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = bi([t.to, e, s, t.from])),
        (this._from = bi([t.from, s, e]));
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      i = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      l = this._to;
    let a;
    if (((this._active = o !== l && (r || e < i)), !this._active)) {
      (this._target[s] = l), this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    (a = (e / i) % 2),
      (a = r && a > 1 ? 2 - a : a),
      (a = this._easing(Math.min(1, Math.max(0, a)))),
      (this._target[s] = this._fn(o, l, a));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({ res: e, rej: i });
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      i = this._promises || [];
    for (let s = 0; s < i.length; s++) i[s][e]();
  }
}
class bf {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!At(t)) return;
    const e = Object.keys(Xt.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!At(o)) return;
      const r = {};
      for (const l of e) r[l] = o[l];
      ((Nt(o.properties) && o.properties) || [s]).forEach((l) => {
        (l === s || !i.has(l)) && i.set(l, r);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options,
      s = db(t, i);
    if (!s) return [];
    const o = this._createAnimations(s, i);
    return (
      i.$shared &&
        fb(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {},
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const i = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      l = Date.now();
    let a;
    for (a = r.length - 1; a >= 0; --a) {
      const c = r[a];
      if (c.charAt(0) === '$') continue;
      if (c === 'options') {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const f = e[c];
      let u = o[c];
      const d = i.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, f, l);
          continue;
        } else u.cancel();
      if (!d || !d.duration) {
        t[c] = f;
        continue;
      }
      (o[c] = u = new ub(d, t, c, f)), s.push(u);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length) return Ne.add(this._chart, i), !0;
  }
}
function fb(n, t) {
  const e = [],
    i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function db(n, t) {
  if (!t) return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e;
}
function ta(n, t) {
  const e = (n && n.options) || {},
    i = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: i ? o : s, end: i ? s : o };
}
function hb(n, t, e) {
  if (e === !1) return !1;
  const i = ta(n, e),
    s = ta(t, e);
  return { top: s.end, right: i.end, bottom: s.start, left: i.start };
}
function gb(n) {
  let t, e, i, s;
  return (
    At(n) ? ((t = n.top), (e = n.right), (i = n.bottom), (s = n.left)) : (t = e = i = s = n),
    { top: t, right: e, bottom: i, left: s, disabled: n === !1 }
  );
}
function _f(n, t) {
  const e = [],
    i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s) e.push(i[s].index);
  return e;
}
function ea(n, t, e, i = {}) {
  const s = n.keys,
    o = i.mode === 'single';
  let r, l, a, c;
  if (t !== null) {
    for (r = 0, l = s.length; r < l; ++r) {
      if (((a = +s[r]), a === e)) {
        if (i.all) continue;
        break;
      }
      (c = n.values[a]), Ut(c) && (o || t === 0 || Le(t) === Le(c)) && (t += c);
    }
    return t;
  }
}
function mb(n) {
  const t = Object.keys(n),
    e = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i) (o = t[i]), (e[i] = { x: o, y: n[o] });
  return e;
}
function na(n, t) {
  const e = n && n.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function pb(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function bb(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return { min: i ? t : Number.NEGATIVE_INFINITY, max: s ? e : Number.POSITIVE_INFINITY };
}
function _b(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function ia(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function sa(n, t) {
  const { chart: e, _cachedMeta: i } = n,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: r, index: l } = i,
    a = o.axis,
    c = r.axis,
    f = pb(o, r, i),
    u = t.length;
  let d;
  for (let h = 0; h < u; ++h) {
    const g = t[h],
      { [a]: m, [c]: p } = g,
      _ = g._stacks || (g._stacks = {});
    (d = _[c] = _b(s, f, m)),
      (d[l] = p),
      (d._top = ia(d, r, !0, i.type)),
      (d._bottom = ia(d, r, !1, i.type));
    const y = d._visualValues || (d._visualValues = {});
    y[l] = p;
  }
}
function so(n, t) {
  const e = n.scales;
  return Object.keys(e)
    .filter((i) => e[i].axis === t)
    .shift();
}
function yb(n, t) {
  return dn(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function kb(n, t, e) {
  return dn(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: 'default',
    type: 'data',
  });
}
function ui(n, t) {
  const e = n.controller.index,
    i = n.vScale && n.vScale.axis;
  if (i) {
    t = t || n._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][e] === void 0) return;
      delete o[i][e],
        o[i]._visualValues !== void 0 &&
          o[i]._visualValues[e] !== void 0 &&
          delete o[i]._visualValues[e];
    }
  }
}
const oo = (n) => n === 'reset' || n === 'none',
  oa = (n, t) => (t ? n : Object.assign({}, n)),
  vb = (n, t, e) => n && !t.hidden && t._stacked && { keys: _f(e, !0), values: null };
class we {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = na(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(t) {
    this.index !== t && ui(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      i = this.getDataset(),
      s = (u, d, h, g) => (u === 'x' ? d : u === 'r' ? g : h),
      o = (e.xAxisID = _t(i.xAxisID, so(t, 'x'))),
      r = (e.yAxisID = _t(i.yAxisID, so(t, 'y'))),
      l = (e.rAxisID = _t(i.rAxisID, so(t, 'r'))),
      a = e.indexAxis,
      c = (e.iAxisID = s(a, o, r, l)),
      f = (e.vAxisID = s(a, r, o, l));
    (e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(l)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(f));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Wl(this._data, this), t._stacked && ui(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      i = this._data;
    if (At(e)) this._data = mb(e);
    else if (i !== e) {
      if (i) {
        Wl(i, this);
        const s = this._cachedMeta;
        ui(s), (s._parsed = []);
      }
      e && Object.isExtensible(e) && rp(e, this), (this._syncList = []), (this._data = e);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    (e._stacked = na(e.vScale, e)),
      e.stack !== i.stack && ((s = !0), ui(e), (e.stack = i.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && sa(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: o, _stacked: r } = i,
      l = o.axis;
    let a = t === 0 && e === s.length ? !0 : i._sorted,
      c = t > 0 && i._parsed[t - 1],
      f,
      u,
      d;
    if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (d = s);
    else {
      Nt(s[t])
        ? (d = this.parseArrayData(i, s, t, e))
        : At(s[t])
        ? (d = this.parseObjectData(i, s, t, e))
        : (d = this.parsePrimitiveData(i, s, t, e));
      const h = () => u[l] === null || (c && u[l] < c[l]);
      for (f = 0; f < e; ++f) (i._parsed[f + t] = u = d[f]), a && (h() && (a = !1), (c = u));
      i._sorted = a;
    }
    r && sa(this, d);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: r } = t,
      l = o.axis,
      a = r.axis,
      c = o.getLabels(),
      f = o === r,
      u = new Array(s);
    let d, h, g;
    for (d = 0, h = s; d < h; ++d)
      (g = d + i), (u[d] = { [l]: f || o.parse(c[g], g), [a]: r.parse(e[g], g) });
    return u;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: r } = t,
      l = new Array(s);
    let a, c, f, u;
    for (a = 0, c = s; a < c; ++a)
      (f = a + i), (u = e[f]), (l[a] = { x: o.parse(u[0], f), y: r.parse(u[1], f) });
    return l;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: l = 'x', yAxisKey: a = 'y' } = this._parsing,
      c = new Array(s);
    let f, u, d, h;
    for (f = 0, u = s; f < u; ++f)
      (d = f + i), (h = e[d]), (c[f] = { x: o.parse(an(h, l), d), y: r.parse(an(h, a), d) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart,
      o = this._cachedMeta,
      r = e[t.axis],
      l = { keys: _f(s, !0), values: e._stacks[t.axis]._visualValues };
    return ea(l, r, o.index, { mode: i });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let r = o === null ? NaN : o;
    const l = s && i._stacks[e.axis];
    s && l && ((s.values = l), (r = ea(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const i = this._cachedMeta,
      s = i._parsed,
      o = i._sorted && t === i.iScale,
      r = s.length,
      l = this._getOtherScale(t),
      a = vb(e, i, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: f, max: u } = bb(l);
    let d, h;
    function g() {
      h = s[d];
      const m = h[l.axis];
      return !Ut(h[t.axis]) || f > m || u < m;
    }
    for (d = 0; d < r && !(!g() && (this.updateRangeFromParsed(c, t, h, a), o)); ++d);
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!g()) {
          this.updateRangeFromParsed(c, t, h, a);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      i = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s) (r = e[s][t.axis]), Ut(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: i ? '' + i.getLabelForValue(o[i.axis]) : '',
      value: s ? '' + s.getLabelForValue(o[s.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || 'default'),
      (e._clip = gb(_t(this.options.clip, hb(e.xScale, e.yScale, this.getMaxOverflow()))));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      o = e.chartArea,
      r = [],
      l = this._drawStart || 0,
      a = this._drawCount || s.length - l,
      c = this.options.drawActiveElementsOnTop;
    let f;
    for (i.dataset && i.dataset.draw(t, o, l, a), f = l; f < l + a; ++f) {
      const u = s[f];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (f = 0; f < r.length; ++f) r[f].draw(t, o);
  }
  getStyle(t, e) {
    const i = e ? 'active' : 'default';
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = kb(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o = this.$context || (this.$context = yb(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!e), (o.mode = i), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', i) {
    const s = e === 'active',
      o = this._cachedDataOpts,
      r = t + '-' + e,
      l = o[r],
      a = this.enableOptionSharing && Fi(i);
    if (l) return oa(l, a);
    const c = this.chart.config,
      f = c.datasetElementScopeKeys(this._type, t),
      u = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      d = c.getOptionScopes(this.getDataset(), f),
      h = Object.keys(Xt.elements[t]),
      g = () => this.getContext(i, s, e),
      m = c.resolveNamedOptions(d, h, g, u);
    return m.$shared && ((m.$shared = a), (o[r] = Object.freeze(oa(m, a)))), m;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${e}`,
      l = o[r];
    if (l) return l;
    let a;
    if (s.options.animation !== !1) {
      const f = this.chart.config,
        u = f.datasetAnimationScopeKeys(this._type, e),
        d = f.getOptionScopes(this.getDataset(), u);
      a = f.createResolver(d, this.getContext(t, i, e));
    }
    const c = new bf(s, a && a.animations);
    return a && a._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || oo(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(i),
      r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), { sharedOptions: o, includeOptions: r };
  }
  updateElement(t, e, i, s) {
    oo(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !oo(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, { options: (!s && this.getSharedOptions(o)) || o });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      i = this._cachedMeta.data;
    for (const [l, a, c] of this._syncList) this[l](a, c);
    this._syncList = [];
    const s = i.length,
      o = e.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + e;
    let l;
    const a = (c) => {
      for (c.length += e, l = c.length - 1; l >= r; l--) c[l] = c[l - e];
    };
    for (a(o), l = t; l < r; ++l) o[l] = new this.dataElementType();
    this._parsing && a(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, 'reset');
  }
  updateElements(t, e, i, s) {}
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && ui(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const i = arguments.length - 2;
    i && this._sync(['_insertElements', t, i]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
it(we, 'defaults', {}), it(we, 'datasetElementType', null), it(we, 'dataElementType', null);
function wb(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++) i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = Zu(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Sb(n) {
  const t = n.iScale,
    e = wb(t, n.type);
  let i = t._length,
    s,
    o,
    r,
    l;
  const a = () => {
    r === 32767 || r === -32768 || (Fi(l) && (i = Math.min(i, Math.abs(r - l) || i)), (l = r));
  };
  for (s = 0, o = e.length; s < o; ++s) (r = t.getPixelForValue(e[s])), a();
  for (l = void 0, s = 0, o = t.ticks.length; s < o; ++s) (r = t.getPixelForTick(s)), a();
  return i;
}
function Mb(n, t, e, i) {
  const s = e.barThickness;
  let o, r;
  return (
    Et(s) ? ((o = t.min * e.categoryPercentage), (r = e.barPercentage)) : ((o = s * i), (r = 1)),
    { chunk: o / i, ratio: r, start: t.pixels[n] - o / 2 }
  );
}
function Db(n, t, e, i) {
  const s = t.pixels,
    o = s[n];
  let r = n > 0 ? s[n - 1] : null,
    l = n < s.length - 1 ? s[n + 1] : null;
  const a = e.categoryPercentage;
  r === null && (r = o - (l === null ? t.end - t.start : l - o)), l === null && (l = o + o - r);
  const c = o - ((o - Math.min(r, l)) / 2) * a;
  return { chunk: ((Math.abs(l - r) / 2) * a) / i, ratio: e.barPercentage, start: c };
}
function Cb(n, t, e, i) {
  const s = e.parse(n[0], i),
    o = e.parse(n[1], i),
    r = Math.min(s, o),
    l = Math.max(s, o);
  let a = r,
    c = l;
  Math.abs(r) > Math.abs(l) && ((a = l), (c = r)),
    (t[e.axis] = c),
    (t._custom = { barStart: a, barEnd: c, start: s, end: o, min: r, max: l });
}
function yf(n, t, e, i) {
  return Nt(n) ? Cb(n, t, e, i) : (t[e.axis] = e.parse(n, i)), t;
}
function ra(n, t, e, i) {
  const s = n.iScale,
    o = n.vScale,
    r = s.getLabels(),
    l = s === o,
    a = [];
  let c, f, u, d;
  for (c = e, f = e + i; c < f; ++c)
    (d = t[c]), (u = {}), (u[s.axis] = l || s.parse(r[c], c)), a.push(yf(d, u, o, c));
  return a;
}
function ro(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Tb(n, t, e) {
  return n !== 0 ? Le(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Pb(n) {
  let t, e, i, s, o;
  return (
    n.horizontal
      ? ((t = n.base > n.x), (e = 'left'), (i = 'right'))
      : ((t = n.base < n.y), (e = 'bottom'), (i = 'top')),
    t ? ((s = 'end'), (o = 'start')) : ((s = 'start'), (o = 'end')),
    { start: e, end: i, reverse: t, top: s, bottom: o }
  );
}
function xb(n, t, e, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    n.borderSkipped = o;
    return;
  }
  if (s === !0) {
    n.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: r, end: l, reverse: a, top: c, bottom: f } = Pb(n);
  s === 'middle' &&
    e &&
    ((n.enableBorderRadius = !0),
    (e._top || 0) === i
      ? (s = c)
      : (e._bottom || 0) === i
      ? (s = f)
      : ((o[la(f, r, l, a)] = !0), (s = c))),
    (o[la(s, r, l, a)] = !0),
    (n.borderSkipped = o);
}
function la(n, t, e, i) {
  return i ? ((n = Ab(n, t, e)), (n = aa(n, e, t))) : (n = aa(n, t, e)), n;
}
function Ab(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function aa(n, t, e) {
  return n === 'start' ? t : n === 'end' ? e : n;
}
function Lb(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
class ps extends we {
  parsePrimitiveData(t, e, i, s) {
    return ra(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return ra(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: r } = t,
      { xAxisKey: l = 'x', yAxisKey: a = 'y' } = this._parsing,
      c = o.axis === 'x' ? l : a,
      f = r.axis === 'x' ? l : a,
      u = [];
    let d, h, g, m;
    for (d = i, h = i + s; d < h; ++d)
      (m = e[d]), (g = {}), (g[o.axis] = o.parse(an(m, c), d)), u.push(yf(an(m, f), g, r, d));
    return u;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const o = i._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: i, vScale: s } = e,
      o = this.getParsed(t),
      r = o._custom,
      l = ro(r) ? '[' + r.start + ', ' + r.end + ']' : '' + s.getLabelForValue(o[s.axis]);
    return { label: '' + i.getLabelForValue(o[i.axis]), value: l };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      {
        index: r,
        _cachedMeta: { vScale: l },
      } = this,
      a = l.getBasePixel(),
      c = l.isHorizontal(),
      f = this._getRuler(),
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, s);
    for (let h = e; h < e + i; h++) {
      const g = this.getParsed(h),
        m = o || Et(g[l.axis]) ? { base: a, head: a } : this._calculateBarValuePixels(h),
        p = this._calculateBarIndexPixels(h, f),
        _ = (g._stacks || {})[l.axis],
        y = {
          horizontal: c,
          base: m.base,
          enableBorderRadius: !_ || ro(g._custom) || r === _._top || r === _._bottom,
          x: c ? m.head : p.center,
          y: c ? p.center : m.head,
          height: c ? p.size : Math.abs(m.size),
          width: c ? Math.abs(m.size) : p.size,
        };
      d && (y.options = u || this.resolveDataElementOptions(h, t[h].active ? 'active' : s));
      const v = y.options || t[h].options;
      xb(y, v, _, r), Lb(y, v, f.ratio), this.updateElement(t[h], h, y, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta,
      s = i.getMatchingVisibleMetas(this._type).filter((a) => a.controller.options.grouped),
      o = i.options.stacked,
      r = [],
      l = (a) => {
        const c = a.controller.getParsed(e),
          f = c && c[a.vScale.axis];
        if (Et(f) || isNaN(f)) return !0;
      };
    for (const a of s)
      if (
        !(e !== void 0 && l(a)) &&
        ((o === !1 || r.indexOf(a.stack) === -1 || (o === void 0 && a.stack === void 0)) &&
          r.push(a.stack),
        a.index === t)
      )
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i),
      o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      i = e.iScale,
      s = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const l = t.barThickness;
    return {
      min: l || Sb(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: l ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: i, index: s },
        options: { base: o, minBarLength: r },
      } = this,
      l = o || 0,
      a = this.getParsed(t),
      c = a._custom,
      f = ro(c);
    let u = a[e.axis],
      d = 0,
      h = i ? this.applyStack(e, a, i) : u,
      g,
      m;
    h !== u && ((d = h - u), (h = u)),
      f &&
        ((u = c.barStart),
        (h = c.barEnd - c.barStart),
        u !== 0 && Le(u) !== Le(c.barEnd) && (d = 0),
        (d += u));
    const p = !Et(o) && !f ? o : d;
    let _ = e.getPixelForValue(p);
    if (
      (this.chart.getDataVisibility(t) ? (g = e.getPixelForValue(d + h)) : (g = _),
      (m = g - _),
      Math.abs(m) < r)
    ) {
      (m = Tb(m, e, l) * r), u === l && (_ -= m / 2);
      const y = e.getPixelForDecimal(0),
        v = e.getPixelForDecimal(1),
        k = Math.min(y, v),
        w = Math.max(y, v);
      (_ = Math.max(Math.min(_, w), k)),
        (g = _ + m),
        i &&
          !f &&
          (a._stacks[e.axis]._visualValues[s] = e.getValueForPixel(g) - e.getValueForPixel(_));
    }
    if (_ === e.getPixelForValue(l)) {
      const y = (Le(m) * e.getLineWidthForValue(l)) / 2;
      (_ += y), (m -= y);
    }
    return { size: m, base: _, head: g, center: g + m / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale,
      s = this.options,
      o = s.skipNull,
      r = _t(s.maxBarThickness, 1 / 0);
    let l, a;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount,
        f = s.barThickness === 'flex' ? Db(t, e, s, c) : Mb(t, e, s, c),
        u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      (l = f.start + f.chunk * u + f.chunk / 2), (a = Math.min(r, f.chunk * f.ratio));
    } else
      (l = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (a = Math.min(r, e.min * e.ratio));
    return { base: l - a / 2, head: l + a / 2, center: l, size: a };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      i = t.data,
      s = i.length;
    let o = 0;
    for (; o < s; ++o) this.getParsed(o)[e.axis] !== null && i[o].draw(this._ctx);
  }
}
it(ps, 'id', 'bar'),
  it(ps, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } },
  }),
  it(ps, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  });
class bs extends we {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, e, i, s) {
    const o = super.parsePrimitiveData(t, e, i, s);
    for (let r = 0; r < o.length; r++) o[r]._custom = this.resolveDataElementOptions(r + i).radius;
    return o;
  }
  parseArrayData(t, e, i, s) {
    const o = super.parseArrayData(t, e, i, s);
    for (let r = 0; r < o.length; r++) {
      const l = e[i + r];
      o[r]._custom = _t(l[2], this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  parseObjectData(t, e, i, s) {
    const o = super.parseObjectData(t, e, i, s);
    for (let r = 0; r < o.length; r++) {
      const l = e[i + r];
      o[r]._custom = _t(l && l.r && +l.r, this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let i = t.length - 1; i >= 0; --i)
      e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      r = this.getParsed(t),
      l = s.getLabelForValue(r.x),
      a = o.getLabelForValue(r.y),
      c = r._custom;
    return { label: i[t] || '', value: '(' + l + ', ' + a + (c ? ', ' + c : '') + ')' };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: r, vScale: l } = this._cachedMeta,
      { sharedOptions: a, includeOptions: c } = this._getSharedOptions(e, s),
      f = r.axis,
      u = l.axis;
    for (let d = e; d < e + i; d++) {
      const h = t[d],
        g = !o && this.getParsed(d),
        m = {},
        p = (m[f] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[f])),
        _ = (m[u] = o ? l.getBasePixel() : l.getPixelForValue(g[u]));
      (m.skip = isNaN(p) || isNaN(_)),
        c &&
          ((m.options = a || this.resolveDataElementOptions(d, h.active ? 'active' : s)),
          o && (m.options.radius = 0)),
        this.updateElement(h, d, m, s);
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
    const o = s.radius;
    return e !== 'active' && (s.radius = 0), (s.radius += _t(i && i._custom, o)), s;
  }
}
it(bs, 'id', 'bubble'),
  it(bs, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } },
  }),
  it(bs, 'overrides', { scales: { x: { type: 'linear' }, y: { type: 'linear' } } });
function Ob(n, t, e) {
  let i = 1,
    s = 1,
    o = 0,
    r = 0;
  if (t < Vt) {
    const l = n,
      a = l + t,
      c = Math.cos(l),
      f = Math.sin(l),
      u = Math.cos(a),
      d = Math.sin(a),
      h = (v, k, w) => (Ei(v, l, a, !0) ? 1 : Math.max(k, k * e, w, w * e)),
      g = (v, k, w) => (Ei(v, l, a, !0) ? -1 : Math.min(k, k * e, w, w * e)),
      m = h(0, c, u),
      p = h(qt, f, d),
      _ = g(jt, c, u),
      y = g(jt + qt, f, d);
    (i = (m - _) / 2), (s = (p - y) / 2), (o = -(m + _) / 2), (r = -(p + y) / 2);
  }
  return { ratioX: i, ratioY: s, offsetX: o, offsetY: r };
}
class vn extends we {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const i = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = i;
    else {
      let o = (a) => +i[a];
      if (At(i[t])) {
        const { key: a = 'value' } = this._parsing;
        o = (c) => +an(i[c], a);
      }
      let r, l;
      for (r = t, l = t + e; r < l; ++r) s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ve(this.options.rotation - 90);
  }
  _getCircumference() {
    return ve(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Vt,
      e = -Vt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller,
          o = s._getRotation(),
          r = s._getCircumference();
        (t = Math.min(t, o)), (e = Math.max(e, o + r));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: i } = e,
      s = this._cachedMeta,
      o = s.data,
      r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      l = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
      a = Math.min(q0(this.options.cutout, l), 1),
      c = this._getRingWeight(this.index),
      { circumference: f, rotation: u } = this._getRotationExtents(),
      { ratioX: d, ratioY: h, offsetX: g, offsetY: m } = Ob(u, f, a),
      p = (i.width - r) / d,
      _ = (i.height - r) / h,
      y = Math.max(Math.min(p, _) / 2, 0),
      v = Uu(this.options.radius, y),
      k = Math.max(v * a, 0),
      w = (v - k) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = g * v),
      (this.offsetY = m * v),
      (s.total = this.calculateTotal()),
      (this.outerRadius = v - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * c, 0)),
      this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options,
      s = this._cachedMeta,
      o = this._getCircumference();
    return (e && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / Vt);
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      r = this.chart,
      l = r.chartArea,
      c = r.options.animation,
      f = (l.left + l.right) / 2,
      u = (l.top + l.bottom) / 2,
      d = o && c.animateScale,
      h = d ? 0 : this.innerRadius,
      g = d ? 0 : this.outerRadius,
      { sharedOptions: m, includeOptions: p } = this._getSharedOptions(e, s);
    let _ = this._getRotation(),
      y;
    for (y = 0; y < e; ++y) _ += this._circumference(y, o);
    for (y = e; y < e + i; ++y) {
      const v = this._circumference(y, o),
        k = t[y],
        w = {
          x: f + this.offsetX,
          y: u + this.offsetY,
          startAngle: _,
          endAngle: _ + v,
          circumference: v,
          outerRadius: g,
          innerRadius: h,
        };
      p && (w.options = m || this.resolveDataElementOptions(y, k.active ? 'active' : s)),
        (_ += v),
        this.updateElement(k, y, w, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let i = 0,
      s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(s) &&
        !e[s].hidden &&
        (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? Vt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      o = Ki(e._parsed[t], i.options.locale);
    return { label: s[t] || '', value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const i = this.chart;
    let s, o, r, l, a;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          (r = i.getDatasetMeta(s)), (t = r.data), (l = r.controller);
          break;
        }
    }
    if (!t) return 0;
    for (s = 0, o = t.length; s < o; ++s)
      (a = l.resolveDataElementOptions(s)),
        a.borderAlign !== 'inner' && (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(_t(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
it(vn, 'id', 'doughnut'),
  it(vn, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }),
  it(vn, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) =>
      t !== 'spacing' && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
  }),
  it(vn, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const a = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: s,
                  lineWidth: a.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
    },
  });
class _s extends we {
  initialize() {
    (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: i, data: s = [], _dataset: o } = e,
      r = this.chart._animationsDisabled;
    let { start: l, count: a } = $u(e, s, r);
    (this._drawStart = l),
      (this._drawCount = a),
      tf(e) && ((l = 0), (a = s.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!o._decimated),
      (i.points = s);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !r, options: c }, t),
      this.updateElements(s, l, a, t);
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: r, vScale: l, _stacked: a, _dataset: c } = this._cachedMeta,
      { sharedOptions: f, includeOptions: u } = this._getSharedOptions(e, s),
      d = r.axis,
      h = l.axis,
      { spanGaps: g, segment: m } = this.options,
      p = Un(g) ? g : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || o || s === 'none',
      y = e + i,
      v = t.length;
    let k = e > 0 && this.getParsed(e - 1);
    for (let w = 0; w < v; ++w) {
      const M = t[w],
        D = _ ? M : {};
      if (w < e || w >= y) {
        D.skip = !0;
        continue;
      }
      const T = this.getParsed(w),
        P = Et(T[h]),
        E = (D[d] = r.getPixelForValue(T[d], w)),
        O = (D[h] =
          o || P ? l.getBasePixel() : l.getPixelForValue(a ? this.applyStack(l, T, a) : T[h], w));
      (D.skip = isNaN(E) || isNaN(O) || P),
        (D.stop = w > 0 && Math.abs(T[d] - k[d]) > p),
        m && ((D.parsed = T), (D.raw = c.data[w])),
        u && (D.options = f || this.resolveDataElementOptions(w, M.active ? 'active' : s)),
        _ || this.updateElement(M, w, D, s),
        (k = T);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      i = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return i;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
it(_s, 'id', 'line'),
  it(_s, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  it(_s, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
class xi extends we {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      o = Ki(e._parsed[t].r, i.options.locale);
    return { label: s[t] || '', value: o };
  }
  parseObjectData(t, e, i, s) {
    return cf.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((i, s) => {
        const o = this.getParsed(s).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(s) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      i = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      r = Math.max(i.cutoutPercentage ? (o / 100) * i.cutoutPercentage : 1, 0),
      l = (o - r) / t.getVisibleDatasetCount();
    (this.outerRadius = o - l * this.index), (this.innerRadius = this.outerRadius - l);
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      r = this.chart,
      a = r.options.animation,
      c = this._cachedMeta.rScale,
      f = c.xCenter,
      u = c.yCenter,
      d = c.getIndexAngle(0) - 0.5 * jt;
    let h = d,
      g;
    const m = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g) h += this._computeAngle(g, s, m);
    for (g = e; g < e + i; g++) {
      const p = t[g];
      let _ = h,
        y = h + this._computeAngle(g, s, m),
        v = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      (h = y), o && (a.animateScale && (v = 0), a.animateRotate && (_ = y = d));
      const k = {
        x: f,
        y: u,
        innerRadius: 0,
        outerRadius: v,
        startAngle: _,
        endAngle: y,
        options: this.resolveDataElementOptions(g, p.active ? 'active' : s),
      };
      this.updateElement(p, g, k, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((i, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t)
      ? ve(this.resolveDataElementOptions(t, e).angle || i)
      : 0;
  }
}
it(xi, 'id', 'polarArea'),
  it(xi, 'defaults', {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
      },
    },
    indexAxis: 'r',
    startAngle: 0,
  }),
  it(xi, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const a = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: s,
                  lineWidth: a.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
class Do extends vn {}
it(Do, 'id', 'pie'),
  it(Do, 'defaults', { cutout: 0, rotation: 0, circumference: 360, radius: '100%' });
class ys extends we {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      i = this.getParsed(t);
    return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) };
  }
  parseObjectData(t, e, i, s) {
    return cf.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta,
      i = e.dataset,
      s = e.data || [],
      o = e.iScale.getLabels();
    if (((i.points = s), t !== 'resize')) {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const l = { _loop: !0, _fullLoop: o.length === s.length, options: r };
      this.updateElement(i, void 0, l, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, i, s) {
    const o = this._cachedMeta.rScale,
      r = s === 'reset';
    for (let l = e; l < e + i; l++) {
      const a = t[l],
        c = this.resolveDataElementOptions(l, a.active ? 'active' : s),
        f = o.getPointPositionForValue(l, this.getParsed(l).r),
        u = r ? o.xCenter : f.x,
        d = r ? o.yCenter : f.y,
        h = { x: u, y: d, angle: f.angle, skip: isNaN(u) || isNaN(d), options: c };
      this.updateElement(a, l, h, s);
    }
  }
}
it(ys, 'id', 'radar'),
  it(ys, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  it(ys, 'overrides', { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } });
class ks extends we {
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      r = this.getParsed(t),
      l = s.getLabelForValue(r.x),
      a = o.getLabelForValue(r.y);
    return { label: i[t] || '', value: '(' + l + ', ' + a + ')' };
  }
  update(t) {
    const e = this._cachedMeta,
      { data: i = [] } = e,
      s = this.chart._animationsDisabled;
    let { start: o, count: r } = $u(e, i, s);
    if (
      ((this._drawStart = o),
      (this._drawCount = r),
      tf(e) && ((o = 0), (r = i.length)),
      this.options.showLine)
    ) {
      const { dataset: l, _dataset: a } = e;
      (l._chart = this.chart),
        (l._datasetIndex = this.index),
        (l._decimated = !!a._decimated),
        (l.points = i);
      const c = this.resolveDatasetElementOptions(t);
      (c.segment = this.options.segment),
        this.updateElement(l, void 0, { animated: !s, options: c }, t);
    }
    this.updateElements(i, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement('line')),
      super.addElements();
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: r, vScale: l, _stacked: a, _dataset: c } = this._cachedMeta,
      f = this.resolveDataElementOptions(e, s),
      u = this.getSharedOptions(f),
      d = this.includeOptions(s, u),
      h = r.axis,
      g = l.axis,
      { spanGaps: m, segment: p } = this.options,
      _ = Un(m) ? m : Number.POSITIVE_INFINITY,
      y = this.chart._animationsDisabled || o || s === 'none';
    let v = e > 0 && this.getParsed(e - 1);
    for (let k = e; k < e + i; ++k) {
      const w = t[k],
        M = this.getParsed(k),
        D = y ? w : {},
        T = Et(M[g]),
        P = (D[h] = r.getPixelForValue(M[h], k)),
        E = (D[g] =
          o || T ? l.getBasePixel() : l.getPixelForValue(a ? this.applyStack(l, M, a) : M[g], k));
      (D.skip = isNaN(P) || isNaN(E) || T),
        (D.stop = k > 0 && Math.abs(M[h] - v[h]) > _),
        p && ((D.parsed = M), (D.raw = c.data[k])),
        d && (D.options = u || this.resolveDataElementOptions(k, w.active ? 'active' : s)),
        y || this.updateElement(w, k, D, s),
        (v = M);
    }
    this.updateSharedOptions(u, s, f);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let l = 0;
      for (let a = e.length - 1; a >= 0; --a)
        l = Math.max(l, e[a].size(this.resolveDataElementOptions(a)) / 2);
      return l > 0 && l;
    }
    const i = t.dataset,
      s = (i.options && i.options.borderWidth) || 0;
    if (!e.length) return s;
    const o = e[0].size(this.resolveDataElementOptions(0)),
      r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, r) / 2;
  }
}
it(ks, 'id', 'scatter'),
  it(ks, 'defaults', { datasetElementType: !1, dataElementType: 'point', showLine: !1, fill: !1 }),
  it(ks, 'overrides', {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
var Fb = Object.freeze({
  __proto__: null,
  BarController: ps,
  BubbleController: bs,
  DoughnutController: vn,
  LineController: _s,
  PieController: Do,
  PolarAreaController: xi,
  RadarController: ys,
  ScatterController: ks,
});
function bn() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  );
}
class ir {
  constructor(t) {
    it(this, 'options');
    this.options = t || {};
  }
  static override(t) {
    Object.assign(ir.prototype, t);
  }
  init() {}
  formats() {
    return bn();
  }
  parse() {
    return bn();
  }
  format() {
    return bn();
  }
  add() {
    return bn();
  }
  diff() {
    return bn();
  }
  startOf() {
    return bn();
  }
  endOf() {
    return bn();
  }
}
var Eb = { _date: ir };
function Ib(n, t, e, i) {
  const { controller: s, data: o, _sorted: r } = n,
    l = s._cachedMeta.iScale;
  if (l && t === l.axis && t !== 'r' && r && o.length) {
    const a = l._reversePixels ? sp : Ke;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0],
          f = typeof c.getRange == 'function' && c.getRange(t);
        if (f) {
          const u = a(o, t, e - f),
            d = a(o, t, e + f);
          return { lo: u.lo, hi: d.hi };
        }
      }
    } else return a(o, t, e);
  }
  return { lo: 0, hi: o.length - 1 };
}
function Gi(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(),
    r = e[t];
  for (let l = 0, a = o.length; l < a; ++l) {
    const { index: c, data: f } = o[l],
      { lo: u, hi: d } = Ib(o[l], t, r, s);
    for (let h = u; h <= d; ++h) {
      const g = f[h];
      g.skip || i(g, c, h);
    }
  }
}
function Rb(n) {
  const t = n.indexOf('x') !== -1,
    e = n.indexOf('y') !== -1;
  return function (i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0,
      r = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function lo(n, t, e, i, s) {
  const o = [];
  return (
    (!s && !n.isPointInArea(t)) ||
      Gi(
        n,
        e,
        t,
        function (l, a, c) {
          (!s && !Ge(l, n.chartArea, 0)) ||
            (l.inRange(t.x, t.y, i) && o.push({ element: l, datasetIndex: a, index: c }));
        },
        !0,
      ),
    o
  );
}
function Bb(n, t, e, i) {
  let s = [];
  function o(r, l, a) {
    const { startAngle: c, endAngle: f } = r.getProps(['startAngle', 'endAngle'], i),
      { angle: u } = Ku(r, { x: t.x, y: t.y });
    Ei(u, c, f) && s.push({ element: r, datasetIndex: l, index: a });
  }
  return Gi(n, e, t, o), s;
}
function zb(n, t, e, i, s, o) {
  let r = [];
  const l = Rb(e);
  let a = Number.POSITIVE_INFINITY;
  function c(f, u, d) {
    const h = f.inRange(t.x, t.y, s);
    if (i && !h) return;
    const g = f.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(g)) && !h) return;
    const p = l(t, g);
    p < a
      ? ((r = [{ element: f, datasetIndex: u, index: d }]), (a = p))
      : p === a && r.push({ element: f, datasetIndex: u, index: d });
  }
  return Gi(n, e, t, c), r;
}
function ao(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === 'r' && !i ? Bb(n, t, e, s) : zb(n, t, e, i, s, o);
}
function ca(n, t, e, i, s) {
  const o = [],
    r = e === 'x' ? 'inXRange' : 'inYRange';
  let l = !1;
  return (
    Gi(n, e, t, (a, c, f) => {
      a[r](t[e], s) &&
        (o.push({ element: a, datasetIndex: c, index: f }), (l = l || a.inRange(t.x, t.y, s)));
    }),
    i && !l ? [] : o
  );
}
var Hb = {
  evaluateInteractionItems: Gi,
  modes: {
    index(n, t, e, i) {
      const s = yn(t, n),
        o = e.axis || 'x',
        r = e.includeInvisible || !1,
        l = e.intersect ? lo(n, s, o, i, r) : ao(n, s, o, !1, i, r),
        a = [];
      return l.length
        ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
            const f = l[0].index,
              u = c.data[f];
            u && !u.skip && a.push({ element: u, datasetIndex: c.index, index: f });
          }),
          a)
        : [];
    },
    dataset(n, t, e, i) {
      const s = yn(t, n),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      let l = e.intersect ? lo(n, s, o, i, r) : ao(n, s, o, !1, i, r);
      if (l.length > 0) {
        const a = l[0].datasetIndex,
          c = n.getDatasetMeta(a).data;
        l = [];
        for (let f = 0; f < c.length; ++f) l.push({ element: c[f], datasetIndex: a, index: f });
      }
      return l;
    },
    point(n, t, e, i) {
      const s = yn(t, n),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      return lo(n, s, o, i, r);
    },
    nearest(n, t, e, i) {
      const s = yn(t, n),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      return ao(n, s, o, e.intersect, i, r);
    },
    x(n, t, e, i) {
      const s = yn(t, n);
      return ca(n, s, 'x', e.intersect, i);
    },
    y(n, t, e, i) {
      const s = yn(t, n);
      return ca(n, s, 'y', e.intersect, i);
    },
  },
};
const kf = ['left', 'top', 'right', 'bottom'];
function fi(n, t) {
  return n.filter((e) => e.pos === t);
}
function ua(n, t) {
  return n.filter((e) => kf.indexOf(e.pos) === -1 && e.box.axis === t);
}
function di(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e,
      o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Wb(n) {
  const t = [];
  let e, i, s, o, r, l;
  for (e = 0, i = (n || []).length; e < i; ++e)
    (s = n[e]),
      ({
        position: o,
        options: { stack: r, stackWeight: l = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: r && o + r,
        stackWeight: l,
      });
  return t;
}
function Nb(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !kf.includes(s)) continue;
    const r = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function Vb(n, t) {
  const e = Nb(n),
    { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, l;
  for (o = 0, r = n.length; o < r; ++o) {
    l = n[o];
    const { fullSize: a } = l.box,
      c = e[l.stack],
      f = c && l.stackWeight / c.weight;
    l.horizontal
      ? ((l.width = f ? f * i : a && t.availableWidth), (l.height = s))
      : ((l.width = i), (l.height = f ? f * s : a && t.availableHeight));
  }
  return e;
}
function jb(n) {
  const t = Wb(n),
    e = di(
      t.filter((c) => c.box.fullSize),
      !0,
    ),
    i = di(fi(t, 'left'), !0),
    s = di(fi(t, 'right')),
    o = di(fi(t, 'top'), !0),
    r = di(fi(t, 'bottom')),
    l = ua(t, 'x'),
    a = ua(t, 'y');
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(a).concat(r).concat(l),
    chartArea: fi(t, 'chartArea'),
    vertical: i.concat(s).concat(a),
    horizontal: o.concat(r).concat(l),
  };
}
function fa(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function vf(n, t) {
  (n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right));
}
function Yb(n, t, e, i) {
  const { pos: s, box: o } = e,
    r = n.maxPadding;
  if (!At(s)) {
    e.size && (n[s] -= e.size);
    const u = i[e.stack] || { size: 0, count: 1 };
    (u.size = Math.max(u.size, e.horizontal ? o.height : o.width)),
      (e.size = u.size / u.count),
      (n[s] += e.size);
  }
  o.getPadding && vf(r, o.getPadding());
  const l = Math.max(0, t.outerWidth - fa(r, n, 'left', 'right')),
    a = Math.max(0, t.outerHeight - fa(r, n, 'top', 'bottom')),
    c = l !== n.w,
    f = a !== n.h;
  return (n.w = l), (n.h = a), e.horizontal ? { same: c, other: f } : { same: f, other: c };
}
function Ub(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return (n[i] += s), s;
  }
  (n.y += e('top')), (n.x += e('left')), e('right'), e('bottom');
}
function qb(n, t) {
  const e = t.maxPadding;
  function i(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], e[r]);
      }),
      o
    );
  }
  return i(n ? ['left', 'right'] : ['top', 'bottom']);
}
function _i(n, t, e, i) {
  const s = [];
  let o, r, l, a, c, f;
  for (o = 0, r = n.length, c = 0; o < r; ++o) {
    (l = n[o]), (a = l.box), a.update(l.width || t.w, l.height || t.h, qb(l.horizontal, t));
    const { same: u, other: d } = Yb(t, e, l, i);
    (c |= u && s.length), (f = f || d), a.fullSize || s.push(l);
  }
  return (c && _i(s, t, e, i)) || f;
}
function ls(n, t, e, i, s) {
  (n.top = e), (n.left = t), (n.right = t + i), (n.bottom = e + s), (n.width = i), (n.height = s);
}
function da(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const l of n) {
    const a = l.box,
      c = i[l.stack] || { count: 1, placed: 0, weight: 1 },
      f = l.stackWeight / c.weight || 1;
    if (l.horizontal) {
      const u = t.w * f,
        d = c.size || a.height;
      Fi(c.start) && (r = c.start),
        a.fullSize
          ? ls(a, s.left, r, e.outerWidth - s.right - s.left, d)
          : ls(a, t.left + c.placed, r, u, d),
        (c.start = r),
        (c.placed += u),
        (r = a.bottom);
    } else {
      const u = t.h * f,
        d = c.size || a.width;
      Fi(c.start) && (o = c.start),
        a.fullSize
          ? ls(a, o, s.top, d, e.outerHeight - s.bottom - s.top)
          : ls(a, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = a.right);
    }
  }
  (t.x = o), (t.y = r);
}
var se = {
  addBox(n, t) {
    n.boxes || (n.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(n, t, e, i) {
    if (!n) return;
    const s = le(n.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(e - s.height, 0),
      l = jb(n.boxes),
      a = l.vertical,
      c = l.horizontal;
    Bt(n.boxes, (m) => {
      typeof m.beforeLayout == 'function' && m.beforeLayout();
    });
    const f =
        a.reduce((m, p) => (p.box.options && p.box.options.display === !1 ? m : m + 1), 0) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / f,
        hBoxMaxHeight: r / 2,
      }),
      d = Object.assign({}, s);
    vf(d, le(i));
    const h = Object.assign({ maxPadding: d, w: o, h: r, x: s.left, y: s.top }, s),
      g = Vb(a.concat(c), u);
    _i(l.fullSize, h, u, g),
      _i(a, h, u, g),
      _i(c, h, u, g) && _i(a, h, u, g),
      Ub(h),
      da(l.leftAndTop, h, u, g),
      (h.x += h.w),
      (h.y += h.h),
      da(l.rightAndBottom, h, u, g),
      (n.chartArea = {
        left: h.left,
        top: h.top,
        right: h.left + h.w,
        bottom: h.top + h.h,
        height: h.h,
        width: h.w,
      }),
      Bt(l.chartArea, (m) => {
        const p = m.box;
        Object.assign(p, n.chartArea), p.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class wf {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {}
  removeEventListener(t, e, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (i = i || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Xb extends wf {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const vs = '$chartjs',
  Kb = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  ha = (n) => n === null || n === '';
function Gb(n, t) {
  const e = n.style,
    i = n.getAttribute('height'),
    s = n.getAttribute('width');
  if (
    ((n[vs] = {
      initial: {
        height: i,
        width: s,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    ha(s))
  ) {
    const o = Gl(n, 'width');
    o !== void 0 && (n.width = o);
  }
  if (ha(i))
    if (n.style.height === '') n.height = n.width / (t || 2);
    else {
      const o = Gl(n, 'height');
      o !== void 0 && (n.height = o);
    }
  return n;
}
const Sf = Jp ? { passive: !0 } : !1;
function Zb(n, t, e) {
  n.addEventListener(t, e, Sf);
}
function Jb(n, t, e) {
  n.canvas.removeEventListener(t, e, Sf);
}
function Qb(n, t) {
  const e = Kb[n.type] || n.type,
    { x: i, y: s } = yn(n, t);
  return { type: e, chart: t, native: n, x: i !== void 0 ? i : null, y: s !== void 0 ? s : null };
}
function Fs(n, t) {
  for (const e of n) if (e === t || e.contains(t)) return !0;
}
function $b(n, t, e) {
  const i = n.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const l of o) (r = r || Fs(l.addedNodes, i)), (r = r && !Fs(l.removedNodes, i));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function t1(n, t, e) {
  const i = n.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const l of o) (r = r || Fs(l.removedNodes, i)), (r = r && !Fs(l.addedNodes, i));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const Ri = new Map();
let ga = 0;
function Mf() {
  const n = window.devicePixelRatio;
  n !== ga &&
    ((ga = n),
    Ri.forEach((t, e) => {
      e.currentDevicePixelRatio !== n && t();
    }));
}
function e1(n, t) {
  Ri.size || window.addEventListener('resize', Mf), Ri.set(n, t);
}
function n1(n) {
  Ri.delete(n), Ri.size || window.removeEventListener('resize', Mf);
}
function i1(n, t, e) {
  const i = n.canvas,
    s = i && nr(i);
  if (!s) return;
  const o = Qu((l, a) => {
      const c = s.clientWidth;
      e(l, a), c < s.clientWidth && e();
    }, window),
    r = new ResizeObserver((l) => {
      const a = l[0],
        c = a.contentRect.width,
        f = a.contentRect.height;
      (c === 0 && f === 0) || o(c, f);
    });
  return r.observe(s), e1(n, o), r;
}
function co(n, t, e) {
  e && e.disconnect(), t === 'resize' && n1(n);
}
function s1(n, t, e) {
  const i = n.canvas,
    s = Qu((o) => {
      n.ctx !== null && e(Qb(o, n));
    }, n);
  return Zb(i, t, s), s;
}
class o1 extends wf {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext('2d');
    return i && i.canvas === t ? (Gb(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[vs]) return !1;
    const i = e[vs].initial;
    ['height', 'width'].forEach((o) => {
      const r = i[o];
      Et(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = i.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[vs],
      !0
    );
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      r = { attach: $b, detach: t1, resize: i1 }[e] || s1;
    s[e] = r(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[e];
    if (!s) return;
    (({ attach: co, detach: co, resize: co })[e] || Jb)(t, e, s), (i[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return Zp(t, e, i, s);
  }
  isAttached(t) {
    const e = nr(t);
    return !!(e && e.isConnected);
  }
}
function r1(n) {
  return !ff() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas) ? Xb : o1;
}
var ms;
let Qe =
  ((ms = class {
    constructor() {
      it(this, 'x');
      it(this, 'y');
      it(this, 'active', !1);
      it(this, 'options');
      it(this, '$animations');
    }
    tooltipPosition(t) {
      const { x: e, y: i } = this.getProps(['x', 'y'], t);
      return { x: e, y: i };
    }
    hasValue() {
      return Un(this.x) && Un(this.y);
    }
    getProps(t, e) {
      const i = this.$animations;
      if (!e || !i) return this;
      const s = {};
      return (
        t.forEach((o) => {
          s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
        }),
        s
      );
    }
  }),
  it(ms, 'defaults', {}),
  it(ms, 'defaultRoutes'),
  ms);
function l1(n, t) {
  const e = n.options.ticks,
    i = a1(n),
    s = Math.min(e.maxTicksLimit || i, i),
    o = e.major.enabled ? u1(t) : [],
    r = o.length,
    l = o[0],
    a = o[r - 1],
    c = [];
  if (r > s) return f1(t, c, o, r / s), c;
  const f = c1(o, t, s);
  if (r > 0) {
    let u, d;
    const h = r > 1 ? Math.round((a - l) / (r - 1)) : null;
    for (as(t, c, f, Et(h) ? 0 : l - h, l), u = 0, d = r - 1; u < d; u++)
      as(t, c, f, o[u], o[u + 1]);
    return as(t, c, f, a, Et(h) ? t.length : a + h), c;
  }
  return as(t, c, f), c;
}
function a1(n) {
  const t = n.options.offset,
    e = n._tickSize(),
    i = n._length / e + (t ? 0 : 1),
    s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function c1(n, t, e) {
  const i = d1(n),
    s = t.length / e;
  if (!i) return Math.max(s, 1);
  const o = tp(i);
  for (let r = 0, l = o.length - 1; r < l; r++) {
    const a = o[r];
    if (a > s) return a;
  }
  return Math.max(s, 1);
}
function u1(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++) n[e].major && t.push(e);
  return t;
}
function f1(n, t, e, i) {
  let s = 0,
    o = e[0],
    r;
  for (i = Math.ceil(i), r = 0; r < n.length; r++) r === o && (t.push(n[r]), s++, (o = e[s * i]));
}
function as(n, t, e, i, s) {
  const o = _t(i, 0),
    r = Math.min(_t(s, n.length), n.length);
  let l = 0,
    a,
    c,
    f;
  for (e = Math.ceil(e), s && ((a = s - i), (e = a / Math.floor(a / e))), f = o; f < 0; )
    l++, (f = Math.round(o + l * e));
  for (c = Math.max(o, 0); c < r; c++) c === f && (t.push(n[c]), l++, (f = Math.round(o + l * e)));
}
function d1(n) {
  const t = n.length;
  let e, i;
  if (t < 2) return !1;
  for (i = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== i) return !1;
  return i;
}
const h1 = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
  ma = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
  pa = (n, t) => Math.min(t || n, n);
function ba(n, t) {
  const e = [],
    i = n.length / t,
    s = n.length;
  let o = 0;
  for (; o < s; o += i) e.push(n[Math.floor(o)]);
  return e;
}
function g1(n, t, e) {
  const i = n.ticks.length,
    s = Math.min(t, i - 1),
    o = n._startPixel,
    r = n._endPixel,
    l = 1e-6;
  let a = n.getPixelForTick(s),
    c;
  if (
    !(
      e &&
      (i === 1
        ? (c = Math.max(a - o, r - a))
        : t === 0
        ? (c = (n.getPixelForTick(1) - a) / 2)
        : (c = (a - n.getPixelForTick(s - 1)) / 2),
      (a += s < t ? c : -c),
      a < o - l || a > r + l)
    )
  )
    return a;
}
function m1(n, t) {
  Bt(n, (e) => {
    const i = e.gc,
      s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function hi(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function _a(n, t) {
  if (!n.display) return 0;
  const e = $t(n.font, t),
    i = le(n.padding);
  return (Nt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function p1(n, t) {
  return dn(n, { scale: t, type: 'scale' });
}
function b1(n, t, e) {
  return dn(n, { tick: e, index: t, type: 'tick' });
}
function _1(n, t, e) {
  let i = Zo(n);
  return ((e && t !== 'right') || (!e && t === 'right')) && (i = h1(i)), i;
}
function y1(n, t, e, i) {
  const { top: s, left: o, bottom: r, right: l, chart: a } = n,
    { chartArea: c, scales: f } = a;
  let u = 0,
    d,
    h,
    g;
  const m = r - s,
    p = l - o;
  if (n.isHorizontal()) {
    if (((h = ie(i, o, l)), At(e))) {
      const _ = Object.keys(e)[0],
        y = e[_];
      g = f[_].getPixelForValue(y) + m - t;
    } else e === 'center' ? (g = (c.bottom + c.top) / 2 + m - t) : (g = ma(n, e, t));
    d = l - o;
  } else {
    if (At(e)) {
      const _ = Object.keys(e)[0],
        y = e[_];
      h = f[_].getPixelForValue(y) - p + t;
    } else e === 'center' ? (h = (c.left + c.right) / 2 - p + t) : (h = ma(n, e, t));
    (g = ie(i, r, s)), (u = e === 'left' ? -qt : qt);
  }
  return { titleX: h, titleY: g, maxWidth: d, rotation: u };
}
class xn extends Qe {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return (
      (t = me(t, Number.POSITIVE_INFINITY)),
      (e = me(e, Number.NEGATIVE_INFINITY)),
      (i = me(i, Number.POSITIVE_INFINITY)),
      (s = me(s, Number.NEGATIVE_INFINITY)),
      { min: me(t, i), max: me(e, s), minDefined: Ut(t), maxDefined: Ut(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(),
      r;
    if (s && o) return { min: e, max: i };
    const l = this.getMatchingVisibleMetas();
    for (let a = 0, c = l.length; a < c; ++a)
      (r = l[a].controller.getMinMax(this, t)),
        s || (e = Math.min(e, r.min)),
        o || (i = Math.max(i, r.max));
    return (
      (e = o && e > i ? i : e),
      (i = s && e > i ? e : i),
      { min: me(e, me(i, e)), max: me(i, me(e, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Ht(this.options.beforeUpdate, [this]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      l = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Pp(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const a = l < this.ticks.length;
    this._convertTicksToLabels(a ? ba(this.ticks, l) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === 'auto') &&
        ((this.ticks = l1(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      a && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      e,
      i;
    this.isHorizontal()
      ? ((e = this.left), (i = this.right))
      : ((e = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - e),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Ht(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Ht(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Ht(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ht(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    Ht(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      (o = t[i]), (o.label = Ht(e.callback, [o.value, i, t], this));
  }
  afterTickToLabelConversion() {
    Ht(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Ht(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      i = pa(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation;
    let r = s,
      l,
      a,
      c;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const f = this._getLabelSizes(),
      u = f.widest.width,
      d = f.highest.height,
      h = te(this.chart.width - u, 0, this.maxWidth);
    (l = t.offset ? this.maxWidth / i : h / (i - 1)),
      u + 6 > l &&
        ((l = h / (i - (t.offset ? 0.5 : 1))),
        (a = this.maxHeight - hi(t.grid) - e.padding - _a(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (r = Ko(
          Math.min(
            Math.asin(te((f.highest.height + 6) / l, -1, 1)),
            Math.asin(te(a / c, -1, 1)) - Math.asin(te(d / c, -1, 1)),
          ),
        )),
        (r = Math.max(s, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    Ht(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Ht(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: i, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      l = this.isHorizontal();
    if (r) {
      const a = _a(s, e.options.font);
      if (
        (l
          ? ((t.width = this.maxWidth), (t.height = hi(o) + a))
          : ((t.height = this.maxHeight), (t.width = hi(o) + a)),
        i.display && this.ticks.length)
      ) {
        const { first: c, last: f, widest: u, highest: d } = this._getLabelSizes(),
          h = i.padding * 2,
          g = ve(this.labelRotation),
          m = Math.cos(g),
          p = Math.sin(g);
        if (l) {
          const _ = i.mirror ? 0 : p * u.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + h);
        } else {
          const _ = i.mirror ? 0 : m * u.width + p * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + h);
        }
        this._calculatePadding(c, f, p, m);
      }
    }
    this._handleMargins(),
      l
        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, i, s) {
    const {
        ticks: { align: o, padding: r },
        position: l,
      } = this.options,
      a = this.labelRotation !== 0,
      c = l !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const f = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        h = 0;
      a
        ? c
          ? ((d = s * t.width), (h = i * e.height))
          : ((d = i * t.height), (h = s * e.width))
        : o === 'start'
        ? (h = e.width)
        : o === 'end'
        ? (d = t.width)
        : o !== 'inner' && ((d = t.width / 2), (h = e.width / 2)),
        (this.paddingLeft = Math.max(((d - f + r) * this.width) / (this.width - f), 0)),
        (this.paddingRight = Math.max(((h - u + r) * this.width) / (this.width - u), 0));
    } else {
      let f = e.height / 2,
        u = t.height / 2;
      o === 'start' ? ((f = 0), (u = t.height)) : o === 'end' && ((f = e.height), (u = 0)),
        (this.paddingTop = f + r),
        (this.paddingBottom = u + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
  }
  afterFit() {
    Ht(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === 'top' || e === 'bottom' || t === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++) Et(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = ba(i, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      l = [],
      a = Math.floor(e / pa(e, i));
    let c = 0,
      f = 0,
      u,
      d,
      h,
      g,
      m,
      p,
      _,
      y,
      v,
      k,
      w;
    for (u = 0; u < e; u += a) {
      if (
        ((g = t[u].label),
        (m = this._resolveTickFontOptions(u)),
        (s.font = p = m.string),
        (_ = o[p] = o[p] || { data: {}, gc: [] }),
        (y = m.lineHeight),
        (v = k = 0),
        !Et(g) && !Nt(g))
      )
        (v = Ls(s, _.data, _.gc, v, g)), (k = y);
      else if (Nt(g))
        for (d = 0, h = g.length; d < h; ++d)
          (w = g[d]), !Et(w) && !Nt(w) && ((v = Ls(s, _.data, _.gc, v, w)), (k += y));
      r.push(v), l.push(k), (c = Math.max(v, c)), (f = Math.max(k, f));
    }
    m1(o, e);
    const M = r.indexOf(c),
      D = l.indexOf(f),
      T = (P) => ({ width: r[P] || 0, height: l[P] || 0 });
    return { first: T(0), last: T(e - 1), widest: T(M), highest: T(D), widths: r, heights: l };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return ip(this._alignToPixels ? pn(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = b1(this.getContext(), t, i));
    }
    return this.$context || (this.$context = p1(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = ve(this.labelRotation),
      i = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      l = o ? o.widest.width + r : 0,
      a = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? (a * i > l * s ? l / i : a / s) : a * s < l * i ? a / i : l / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      i = this.chart,
      s = this.options,
      { grid: o, position: r, border: l } = s,
      a = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (a ? 1 : 0),
      d = hi(o),
      h = [],
      g = l.setContext(this.getContext()),
      m = g.display ? g.width : 0,
      p = m / 2,
      _ = function (Y) {
        return pn(i, Y, m);
      };
    let y, v, k, w, M, D, T, P, E, O, H, W;
    if (r === 'top')
      (y = _(this.bottom)), (D = this.bottom - d), (P = y - p), (O = _(t.top) + p), (W = t.bottom);
    else if (r === 'bottom')
      (y = _(this.top)), (O = t.top), (W = _(t.bottom) - p), (D = y + p), (P = this.top + d);
    else if (r === 'left')
      (y = _(this.right)), (M = this.right - d), (T = y - p), (E = _(t.left) + p), (H = t.right);
    else if (r === 'right')
      (y = _(this.left)), (E = t.left), (H = _(t.right) - p), (M = y + p), (T = this.left + d);
    else if (e === 'x') {
      if (r === 'center') y = _((t.top + t.bottom) / 2 + 0.5);
      else if (At(r)) {
        const Y = Object.keys(r)[0],
          N = r[Y];
        y = _(this.chart.scales[Y].getPixelForValue(N));
      }
      (O = t.top), (W = t.bottom), (D = y + p), (P = D + d);
    } else if (e === 'y') {
      if (r === 'center') y = _((t.left + t.right) / 2);
      else if (At(r)) {
        const Y = Object.keys(r)[0],
          N = r[Y];
        y = _(this.chart.scales[Y].getPixelForValue(N));
      }
      (M = y - p), (T = M - d), (E = t.left), (H = t.right);
    }
    const $ = _t(s.ticks.maxTicksLimit, u),
      tt = Math.max(1, Math.ceil(u / $));
    for (v = 0; v < u; v += tt) {
      const Y = this.getContext(v),
        N = o.setContext(Y),
        q = l.setContext(Y),
        V = N.lineWidth,
        I = N.color,
        K = q.dash || [],
        U = q.dashOffset,
        ft = N.tickWidth,
        Mt = N.tickColor,
        It = N.tickBorderDash || [],
        kt = N.tickBorderDashOffset;
      (k = g1(this, v, a)),
        k !== void 0 &&
          ((w = pn(i, k, V)),
          c ? (M = T = E = H = w) : (D = P = O = W = w),
          h.push({
            tx1: M,
            ty1: D,
            tx2: T,
            ty2: P,
            x1: E,
            y1: O,
            x2: H,
            y2: W,
            width: V,
            color: I,
            borderDash: K,
            borderDashOffset: U,
            tickWidth: ft,
            tickColor: Mt,
            tickBorderDash: It,
            tickBorderDashOffset: kt,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = y), h;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      i = this.options,
      { position: s, ticks: o } = i,
      r = this.isHorizontal(),
      l = this.ticks,
      { align: a, crossAlign: c, padding: f, mirror: u } = o,
      d = hi(i.grid),
      h = d + f,
      g = u ? -f : h,
      m = -ve(this.labelRotation),
      p = [];
    let _,
      y,
      v,
      k,
      w,
      M,
      D,
      T,
      P,
      E,
      O,
      H,
      W = 'middle';
    if (s === 'top') (M = this.bottom - g), (D = this._getXAxisLabelAlignment());
    else if (s === 'bottom') (M = this.top + g), (D = this._getXAxisLabelAlignment());
    else if (s === 'left') {
      const tt = this._getYAxisLabelAlignment(d);
      (D = tt.textAlign), (w = tt.x);
    } else if (s === 'right') {
      const tt = this._getYAxisLabelAlignment(d);
      (D = tt.textAlign), (w = tt.x);
    } else if (e === 'x') {
      if (s === 'center') M = (t.top + t.bottom) / 2 + h;
      else if (At(s)) {
        const tt = Object.keys(s)[0],
          Y = s[tt];
        M = this.chart.scales[tt].getPixelForValue(Y) + h;
      }
      D = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (s === 'center') w = (t.left + t.right) / 2 - h;
      else if (At(s)) {
        const tt = Object.keys(s)[0],
          Y = s[tt];
        w = this.chart.scales[tt].getPixelForValue(Y);
      }
      D = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === 'y' && (a === 'start' ? (W = 'top') : a === 'end' && (W = 'bottom'));
    const $ = this._getLabelSizes();
    for (_ = 0, y = l.length; _ < y; ++_) {
      (v = l[_]), (k = v.label);
      const tt = o.setContext(this.getContext(_));
      (T = this.getPixelForTick(_) + o.labelOffset),
        (P = this._resolveTickFontOptions(_)),
        (E = P.lineHeight),
        (O = Nt(k) ? k.length : 1);
      const Y = O / 2,
        N = tt.color,
        q = tt.textStrokeColor,
        V = tt.textStrokeWidth;
      let I = D;
      r
        ? ((w = T),
          D === 'inner' &&
            (_ === y - 1
              ? (I = this.options.reverse ? 'left' : 'right')
              : _ === 0
              ? (I = this.options.reverse ? 'right' : 'left')
              : (I = 'center')),
          s === 'top'
            ? c === 'near' || m !== 0
              ? (H = -O * E + E / 2)
              : c === 'center'
              ? (H = -$.highest.height / 2 - Y * E + E)
              : (H = -$.highest.height + E / 2)
            : c === 'near' || m !== 0
            ? (H = E / 2)
            : c === 'center'
            ? (H = $.highest.height / 2 - Y * E)
            : (H = $.highest.height - O * E),
          u && (H *= -1),
          m !== 0 && !tt.showLabelBackdrop && (w += (E / 2) * Math.sin(m)))
        : ((M = T), (H = ((1 - O) * E) / 2));
      let K;
      if (tt.showLabelBackdrop) {
        const U = le(tt.backdropPadding),
          ft = $.heights[_],
          Mt = $.widths[_];
        let It = H - U.top,
          kt = 0 - U.left;
        switch (W) {
          case 'middle':
            It -= ft / 2;
            break;
          case 'bottom':
            It -= ft;
            break;
        }
        switch (D) {
          case 'center':
            kt -= Mt / 2;
            break;
          case 'right':
            kt -= Mt;
            break;
        }
        K = {
          left: kt,
          top: It,
          width: Mt + U.width,
          height: ft + U.height,
          color: tt.backdropColor,
        };
      }
      p.push({
        label: k,
        font: P,
        textOffset: H,
        options: {
          rotation: m,
          color: N,
          strokeColor: q,
          strokeWidth: V,
          textAlign: I,
          textBaseline: W,
          translation: [w, M],
          backdrop: K,
        },
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ve(this.labelRotation)) return t === 'top' ? 'left' : 'right';
    let s = 'center';
    return (
      e.align === 'start'
        ? (s = 'left')
        : e.align === 'end'
        ? (s = 'right')
        : e.align === 'inner' && (s = 'inner'),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: i, mirror: s, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      l = t + o,
      a = r.widest.width;
    let c, f;
    return (
      e === 'left'
        ? s
          ? ((f = this.right + o),
            i === 'near'
              ? (c = 'left')
              : i === 'center'
              ? ((c = 'center'), (f += a / 2))
              : ((c = 'right'), (f += a)))
          : ((f = this.right - l),
            i === 'near'
              ? (c = 'right')
              : i === 'center'
              ? ((c = 'center'), (f -= a / 2))
              : ((c = 'left'), (f = this.left)))
        : e === 'right'
        ? s
          ? ((f = this.left + o),
            i === 'near'
              ? (c = 'right')
              : i === 'center'
              ? ((c = 'center'), (f -= a / 2))
              : ((c = 'left'), (f -= a)))
          : ((f = this.left + l),
            i === 'near'
              ? (c = 'left')
              : i === 'center'
              ? ((c = 'center'), (f += a / 2))
              : ((c = 'right'), (f = this.right)))
        : (c = 'right'),
      { textAlign: c, x: f }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === 'left' || e === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === 'top' || e === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: i,
      top: s,
      width: o,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      i = this.ctx,
      s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const l = (a, c, f) => {
      !f.width ||
        !f.color ||
        (i.save(),
        (i.lineWidth = f.width),
        (i.strokeStyle = f.color),
        i.setLineDash(f.borderDash || []),
        (i.lineDashOffset = f.borderDashOffset),
        i.beginPath(),
        i.moveTo(a.x, a.y),
        i.lineTo(c.x, c.y),
        i.stroke(),
        i.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const a = s[o];
        e.drawOnChartArea && l({ x: a.x1, y: a.y1 }, { x: a.x2, y: a.y2 }, a),
          e.drawTicks &&
            l(
              { x: a.tx1, y: a.ty1 },
              { x: a.tx2, y: a.ty2 },
              {
                color: a.tickColor,
                width: a.tickWidth,
                borderDash: a.tickBorderDash,
                borderDashOffset: a.tickBorderDashOffset,
              },
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: i, grid: s },
      } = this,
      o = i.setContext(this.getContext()),
      r = i.display ? o.width : 0;
    if (!r) return;
    const l = s.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let c, f, u, d;
    this.isHorizontal()
      ? ((c = pn(t, this.left, r) - r / 2), (f = pn(t, this.right, l) + l / 2), (u = d = a))
      : ((u = pn(t, this.top, r) - r / 2), (d = pn(t, this.bottom, l) + l / 2), (c = f = a)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(c, u),
      e.lineTo(f, d),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      s = this._computeLabelArea();
    s && Ys(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const l = r.options,
        a = r.font,
        c = r.label,
        f = r.textOffset;
      Tn(i, c, 0, f, a, l);
    }
    s && Us(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: i, reverse: s },
    } = this;
    if (!i.display) return;
    const o = $t(i.font),
      r = le(i.padding),
      l = i.align;
    let a = o.lineHeight / 2;
    e === 'bottom' || e === 'center' || At(e)
      ? ((a += r.bottom), Nt(i.text) && (a += o.lineHeight * (i.text.length - 1)))
      : (a += r.top);
    const { titleX: c, titleY: f, maxWidth: u, rotation: d } = y1(this, a, e, l);
    Tn(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: u,
      rotation: d,
      textAlign: _1(l, e, s),
      textBaseline: 'middle',
      translation: [c, f],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      i = _t(t.grid && t.grid.z, -1),
      s = _t(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== xn.prototype.draw
      ? [
          {
            z: e,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o];
      l[i] === this.id && (!t || l.type === t) && s.push(l);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return $t(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class cs {
  constructor(t, e, i) {
    (this.type = t), (this.scope = e), (this.override = i), (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    w1(e) && (i = this.register(e));
    const s = this.items,
      o = t.id,
      r = this.scope + '.' + o;
    if (!o) throw new Error('class does not have id: ' + t);
    return o in s || ((s[o] = t), k1(t, r, i), this.override && Xt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      i = t.id,
      s = this.scope;
    i in e && delete e[i], s && i in Xt[s] && (delete Xt[s][i], this.override && delete Cn[i]);
  }
}
function k1(n, t, e) {
  const i = Oi(Object.create(null), [e ? Xt.get(e) : {}, Xt.get(t), n.defaults]);
  Xt.set(t, i),
    n.defaultRoutes && v1(t, n.defaultRoutes),
    n.descriptors && Xt.describe(t, n.descriptors);
}
function v1(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split('.'),
      s = i.pop(),
      o = [n].concat(i).join('.'),
      r = t[e].split('.'),
      l = r.pop(),
      a = r.join('.');
    Xt.route(o, s, a, l);
  });
}
function w1(n) {
  return 'id' in n && 'defaults' in n;
}
class S1 {
  constructor() {
    (this.controllers = new cs(we, 'datasets', !0)),
      (this.elements = new cs(Qe, 'elements')),
      (this.plugins = new cs(Object, 'plugins')),
      (this.scales = new cs(xn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, i) {
    [...e].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : Bt(s, (r) => {
            const l = i || this._getRegistryForType(r);
            this._exec(t, l, r);
          });
    });
  }
  _exec(t, e, i) {
    const s = Xo(t);
    Ht(i['before' + s], [], i), e[t](i), Ht(i['after' + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (s === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.');
    return s;
  }
}
var Pe = new S1();
class M1 {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, s) {
    e === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, e, i);
    return (
      e === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      r
    );
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin,
        l = r[i],
        a = [e, s, o.options];
      if (Ht(l, a, r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Et(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config,
      s = _t(i.options && i.options.plugins, {}),
      o = D1(i);
    return s === !1 && !e ? [] : T1(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      i = this._cache,
      s = (o, r) => o.filter((l) => !r.some((a) => l.plugin.id === a.plugin.id));
    this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start');
  }
}
function D1(n) {
  const t = {},
    e = [],
    i = Object.keys(Pe.plugins.items);
  for (let o = 0; o < i.length; o++) e.push(Pe.getPlugin(i[o]));
  const s = n.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function C1(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function T1(n, { plugins: t, localIds: e }, i, s) {
  const o = [],
    r = n.getContext();
  for (const l of t) {
    const a = l.id,
      c = C1(i[a], s);
    c !== null && o.push({ plugin: l, options: P1(n.config, { plugin: l, local: e[a] }, c, r) });
  }
  return o;
}
function P1(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t),
    r = n.getOptionScopes(i, o);
  return (
    e && t.defaults && r.push(t.defaults),
    n.createResolver(r, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Co(n, t) {
  const e = Xt.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
}
function x1(n, t) {
  let e = n;
  return n === '_index_' ? (e = t) : n === '_value_' && (e = t === 'x' ? 'y' : 'x'), e;
}
function A1(n, t) {
  return n === t ? '_index_' : '_value_';
}
function ya(n) {
  if (n === 'x' || n === 'y' || n === 'r') return n;
}
function L1(n) {
  if (n === 'top' || n === 'bottom') return 'x';
  if (n === 'left' || n === 'right') return 'y';
}
function To(n, ...t) {
  if (ya(n)) return n;
  for (const e of t) {
    const i = e.axis || L1(e.position) || (n.length > 1 && ya(n[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function ka(n, t, e) {
  if (e[t + 'AxisID'] === n) return { axis: t };
}
function O1(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length) return ka(n, 'x', e[0]) || ka(n, 'y', e[0]);
  }
  return {};
}
function F1(n, t) {
  const e = Cn[n.type] || { scales: {} },
    i = t.scales || {},
    s = Co(n.type, t),
    o = Object.create(null);
  return (
    Object.keys(i).forEach((r) => {
      const l = i[r];
      if (!At(l)) return console.error(`Invalid scale configuration for scale: ${r}`);
      if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
      const a = To(r, l, O1(r, n), Xt.scales[l.type]),
        c = A1(a, s),
        f = e.scales || {};
      o[r] = Di(Object.create(null), [{ axis: a }, l, f[a], f[c]]);
    }),
    n.data.datasets.forEach((r) => {
      const l = r.type || n.type,
        a = r.indexAxis || Co(l, t),
        f = (Cn[l] || {}).scales || {};
      Object.keys(f).forEach((u) => {
        const d = x1(u, a),
          h = r[d + 'AxisID'] || d;
        (o[h] = o[h] || Object.create(null)), Di(o[h], [{ axis: d }, i[h], f[u]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const l = o[r];
      Di(l, [Xt.scales[l.type], Xt.scale]);
    }),
    o
  );
}
function Df(n) {
  const t = n.options || (n.options = {});
  (t.plugins = _t(t.plugins, {})), (t.scales = F1(n, t));
}
function Cf(n) {
  return (n = n || {}), (n.datasets = n.datasets || []), (n.labels = n.labels || []), n;
}
function E1(n) {
  return (n = n || {}), (n.data = Cf(n.data)), Df(n), n;
}
const va = new Map(),
  Tf = new Set();
function us(n, t) {
  let e = va.get(n);
  return e || ((e = t()), va.set(n, e), Tf.add(e)), e;
}
const gi = (n, t, e) => {
  const i = an(t, e);
  i !== void 0 && n.add(i);
};
class I1 {
  constructor(t) {
    (this._config = E1(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Cf(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Df(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return us(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return us(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return us(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      i = this.type;
    return us(`${i}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || e) && ((s = new Map()), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, i),
      l = r.get(e);
    if (l) return l;
    const a = new Set();
    e.forEach((f) => {
      t && (a.add(t), f.forEach((u) => gi(a, t, u))),
        f.forEach((u) => gi(a, s, u)),
        f.forEach((u) => gi(a, Cn[o] || {}, u)),
        f.forEach((u) => gi(a, Xt, u)),
        f.forEach((u) => gi(a, So, u));
    });
    const c = Array.from(a);
    return c.length === 0 && c.push(Object.create(null)), Tf.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, Cn[e] || {}, Xt.datasets[e] || {}, { type: e }, Xt, So];
  }
  resolveNamedOptions(t, e, i, s = ['']) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: l } = wa(this._resolverCache, t, s);
    let a = r;
    if (B1(r, e)) {
      (o.$shared = !1), (i = cn(i) ? i() : i);
      const c = this.createResolver(t, i, l);
      a = qn(r, i, c);
    }
    for (const c of e) o[c] = a[c];
    return o;
  }
  createResolver(t, e, i = [''], s) {
    const { resolver: o } = wa(this._resolverCache, t, i);
    return At(e) ? qn(o, e, void 0, s) : o;
  }
}
function wa(n, t, e) {
  let i = n.get(t);
  i || ((i = new Map()), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return (
    o ||
      ((o = {
        resolver: $o(t, e),
        subPrefixes: e.filter((l) => !l.toLowerCase().includes('hover')),
      }),
      i.set(s, o)),
    o
  );
}
const R1 = (n) => At(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || cn(n[e]), !1);
function B1(n, t) {
  const { isScriptable: e, isIndexable: i } = of(n);
  for (const s of t) {
    const o = e(s),
      r = i(s),
      l = (r || o) && n[s];
    if ((o && (cn(l) || R1(l))) || (r && Nt(l))) return !0;
  }
  return !1;
}
var z1 = '4.3.0';
const H1 = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Sa(n, t) {
  return n === 'top' || n === 'bottom' || (H1.indexOf(n) === -1 && t === 'x');
}
function Ma(n, t) {
  return function (e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function Da(n) {
  const t = n.chart,
    e = t.options.animation;
  t.notifyPlugins('afterRender'), Ht(e && e.onComplete, [n], t);
}
function W1(n) {
  const t = n.chart,
    e = t.options.animation;
  Ht(e && e.onProgress, [n], t);
}
function Pf(n) {
  return (
    ff() && typeof n == 'string' ? (n = document.getElementById(n)) : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const ws = {},
  Ca = (n) => {
    const t = Pf(n);
    return Object.values(ws)
      .filter((e) => e.canvas === t)
      .pop();
  };
function N1(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = r);
    }
  }
}
function V1(n, t, e, i) {
  return !e || n.type === 'mouseout' ? null : i ? t : n;
}
function j1(n) {
  const { xScale: t, yScale: e } = n;
  if (t && e) return { left: t.left, right: t.right, top: e.top, bottom: e.bottom };
}
class Ye {
  static register(...t) {
    Pe.add(...t), Ta();
  }
  static unregister(...t) {
    Pe.remove(...t), Ta();
  }
  constructor(t, e) {
    const i = (this.config = new I1(e)),
      s = Pf(t),
      o = Ca(s);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused.",
      );
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    (this.platform = new (i.platform || r1(s))()), this.platform.updateConfig(i);
    const l = this.platform.acquireContext(s, r.aspectRatio),
      a = l && l.canvas,
      c = a && a.height,
      f = a && a.width;
    if (
      ((this.id = U0()),
      (this.ctx = l),
      (this.canvas = a),
      (this.width = f),
      (this.height = c),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new M1()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = lp((u) => this.update(u), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (ws[this.id] = this),
      !l || !a)
    ) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ne.listen(this, 'complete', Da),
      Ne.listen(this, 'progress', W1),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: i,
      height: s,
      _aspectRatio: o,
    } = this;
    return Et(t) ? (e && o ? o : s ? i / s : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Pe;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive ? this.resize() : Kl(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return Ul(this.canvas, this.ctx), this;
  }
  stop() {
    return Ne.stop(this), this;
  }
  resize(t, e) {
    Ne.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options,
      s = this.canvas,
      o = i.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(s, t, e, o),
      l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      a = this.width ? 'resize' : 'attach';
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      Kl(this, l, !0) &&
        (this.notifyPlugins('resize', { size: r }),
        Ht(i.onResize, [this, r], this),
        this.attached && this._doResize(a) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    Bt(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      i = this.scales,
      s = Object.keys(i).reduce((r, l) => ((r[l] = !1), r), {});
    let o = [];
    e &&
      (o = o.concat(
        Object.keys(e).map((r) => {
          const l = e[r],
            a = To(r, l),
            c = a === 'r',
            f = a === 'x';
          return {
            options: l,
            dposition: c ? 'chartArea' : f ? 'bottom' : 'left',
            dtype: c ? 'radialLinear' : f ? 'category' : 'linear',
          };
        }),
      )),
      Bt(o, (r) => {
        const l = r.options,
          a = l.id,
          c = To(a, l),
          f = _t(l.type, r.dtype);
        (l.position === void 0 || Sa(l.position, c) !== Sa(r.dposition)) &&
          (l.position = r.dposition),
          (s[a] = !0);
        let u = null;
        if (a in i && i[a].type === f) u = i[a];
        else {
          const d = Pe.getScale(f);
          (u = new d({ id: a, type: f, ctx: this.ctx, chart: this })), (i[u.id] = u);
        }
        u.init(l, t);
      }),
      Bt(s, (r, l) => {
        r || delete i[l];
      }),
      Bt(i, (r) => {
        se.configure(this, r, r.options), se.addBox(this, r);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      i = t.length;
    if ((t.sort((s, o) => s.index - o.index), i > e)) {
      for (let s = e; s < i; ++s) this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(Ma('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((i, s) => {
        e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      let r = this.getDatasetMeta(i);
      const l = o.type || this.config.type;
      if (
        (r.type && r.type !== l && (this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
        (r.type = l),
        (r.indexAxis = o.indexAxis || Co(l, this.options)),
        (r.order = o.order || 0),
        (r.index = i),
        (r.label = '' + o.label),
        (r.visible = this.isDatasetVisible(i)),
        r.controller)
      )
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const a = Pe.getController(l),
          { datasetElementType: c, dataElementType: f } = Xt.datasets[l];
        Object.assign(a, {
          dataElementType: Pe.getElement(f),
          datasetElementType: c && Pe.getElement(c),
        }),
          (r.controller = new a(this, i)),
          t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Bt(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this,
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins('reset');
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
      s = (this._animationsDisabled = !i.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let r = 0;
    for (let c = 0, f = this.data.datasets.length; c < f; c++) {
      const { controller: u } = this.getDatasetMeta(c),
        d = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(d), (r = Math.max(+u.getMaxOverflow(), r));
    }
    (r = this._minPadding = i.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      s ||
        Bt(o, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(Ma('z', '_idx'));
    const { _active: l, _lastEvent: a } = this;
    a ? this._eventHandler(a, !0) : l.length && this._updateHoverStyles(l, l, !0), this.render();
  }
  _updateScales() {
    Bt(this.scales, (t) => {
      se.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      i = new Set(t.events);
    (!Rl(e, i) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const r = i === '_removeElements' ? -o : o;
      N1(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      i = (o) =>
        new Set(t.filter((r) => r[0] === o).map((r, l) => l + ',' + r.splice(1).join(','))),
      s = i(0);
    for (let o = 1; o < e; o++) if (!Rl(s, i(o))) return;
    return Array.from(s)
      .map((o) => o.split(','))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
    se.update(this, this.width, this.height, t);
    const e = this.chartArea,
      i = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      Bt(
        this.boxes,
        (s) => {
          (i && s.position === 'chartArea') ||
            (s.configure && s.configure(), this._layers.push(...s._layers()));
        },
        this,
      ),
      this._layers.forEach((s, o) => {
        s._idx = o;
      }),
      this.notifyPlugins('afterLayout');
  }
  _updateDatasets(t) {
    if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, cn(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins('afterDatasetsUpdate', { mode: t });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t),
      s = { meta: i, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
      (i.controller._update(e), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s));
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (Ne.has(this)
        ? this.attached && !Ne.running(this) && Ne.start(this)
        : (this.draw(), Da({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resize(i, s), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      i = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (!t || r.visible) && i.push(r);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(t) {
    const e = this.ctx,
      i = t._clip,
      s = !i.disabled,
      o = j1(t) || this.chartArea,
      r = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
      (s &&
        Ys(e, {
          left: i.left === !1 ? 0 : o.left - i.left,
          right: i.right === !1 ? this.width : o.right + i.right,
          top: i.top === !1 ? 0 : o.top - i.top,
          bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
        }),
      t.controller.draw(),
      s && Us(e),
      (r.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', r));
  }
  isPointInArea(t) {
    return Ge(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = Hb.modes[e];
    return typeof o == 'function' ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      i = this._metasets;
    let s = i.filter((o) => o && o._dataset === e).pop();
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(s)),
      s
    );
  }
  getContext() {
    return this.$context || (this.$context = dn(null, { chart: this, type: 'chart' }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == 'boolean' ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? 'show' : 'hide',
      o = this.getDatasetMeta(t),
      r = o.controller._resolveAnimations(void 0, s);
    Fi(e)
      ? ((o.data[e].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        r.update(o, { visible: i }),
        this.update((l) => (l.datasetIndex === t ? s : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Ne.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const { canvas: t, ctx: e } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        Ul(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete ws[this.id],
      this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      i = (o, r) => {
        e.addEventListener(this, o, r), (t[o] = r);
      },
      s = (o, r, l) => {
        (o.offsetX = r), (o.offsetY = l), this._eventHandler(o);
      };
    Bt(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      i = (a, c) => {
        e.addEventListener(this, a, c), (t[a] = c);
      },
      s = (a, c) => {
        t[a] && (e.removeEventListener(this, a, c), delete t[a]);
      },
      o = (a, c) => {
        this.canvas && this.resize(a, c);
      };
    let r;
    const l = () => {
      s('attach', l), (this.attached = !0), this.resize(), i('resize', o), i('detach', r);
    };
    (r = () => {
      (this.attached = !1), s('resize', o), this._stop(), this._resize(0, 0), i('attach', l);
    }),
      e.isAttached(this.canvas) ? l() : r();
  }
  unbindEvents() {
    Bt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      Bt(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, i) {
    const s = i ? 'set' : 'remove';
    let o, r, l, a;
    for (
      e === 'dataset' &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller['_' + s + 'DatasetHoverStyle']()),
        l = 0,
        a = t.length;
      l < a;
      ++l
    ) {
      r = t[l];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + 'HoverStyle'](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      i = t.map(({ datasetIndex: o, index: r }) => {
        const l = this.getDatasetMeta(o);
        if (!l) throw new Error('No dataset found at index ' + o);
        return { datasetIndex: o, element: l.data[r], index: r };
      });
    !Ps(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover,
      o = (a, c) =>
        a.filter((f) => !c.some((u) => f.datasetIndex === u.datasetIndex && f.index === u.index)),
      r = o(e, t),
      l = i ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1),
      l.length && s.mode && this.updateHoverStyle(l, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
      s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins('beforeEvent', i, s) === !1) return;
    const o = this._handleEvent(t, e, i.inChartArea);
    return (
      (i.cancelable = !1),
      this.notifyPlugins('afterEvent', i, s),
      (o || i.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this,
      r = e,
      l = this._getActiveElements(t, s, i, r),
      a = J0(t),
      c = V1(t, this._lastEvent, i, a);
    i &&
      ((this._lastEvent = null),
      Ht(o.onHover, [t, l, this], this),
      a && Ht(o.onClick, [t, l, this], this));
    const f = !Ps(l, s);
    return (
      (f || e) && ((this._active = l), this._updateHoverStyles(l, s, e)), (this._lastEvent = c), f
    );
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === 'mouseout') return [];
    if (!i) return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
it(Ye, 'defaults', Xt),
  it(Ye, 'instances', ws),
  it(Ye, 'overrides', Cn),
  it(Ye, 'registry', Pe),
  it(Ye, 'version', z1),
  it(Ye, 'getChart', Ca);
function Ta() {
  return Bt(Ye.instances, (n) => n._plugins.invalidate());
}
function Y1(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: l, innerRadius: a } = t;
  let c = s / l;
  n.beginPath(),
    n.arc(o, r, l, i - c, e + c),
    a > s ? ((c = s / a), n.arc(o, r, a, e + c, i - c, !0)) : n.arc(o, r, s, e + qt, i - qt),
    n.closePath(),
    n.clip();
}
function U1(n) {
  return Qo(n, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function q1(n, t, e, i) {
  const s = U1(n.options.borderRadius),
    o = (e - t) / 2,
    r = Math.min(o, (i * t) / 2),
    l = (a) => {
      const c = ((e - Math.min(o, a)) * i) / 2;
      return te(a, 0, Math.min(o, c));
    };
  return {
    outerStart: l(s.outerStart),
    outerEnd: l(s.outerEnd),
    innerStart: te(s.innerStart, 0, r),
    innerEnd: te(s.innerEnd, 0, r),
  };
}
function Ln(n, t, e, i) {
  return { x: e + n * Math.cos(t), y: i + n * Math.sin(t) };
}
function Es(n, t, e, i, s, o) {
  const { x: r, y: l, startAngle: a, pixelMargin: c, innerRadius: f } = t,
    u = Math.max(t.outerRadius + i + e - c, 0),
    d = f > 0 ? f + i + e + c : 0;
  let h = 0;
  const g = s - a;
  if (i) {
    const tt = f > 0 ? f - i : 0,
      Y = u > 0 ? u - i : 0,
      N = (tt + Y) / 2,
      q = N !== 0 ? (g * N) / (N + i) : g;
    h = (g - q) / 2;
  }
  const m = Math.max(0.001, g * u - e / jt) / u,
    p = (g - m) / 2,
    _ = a + p + h,
    y = s - p - h,
    { outerStart: v, outerEnd: k, innerStart: w, innerEnd: M } = q1(t, d, u, y - _),
    D = u - v,
    T = u - k,
    P = _ + v / D,
    E = y - k / T,
    O = d + w,
    H = d + M,
    W = _ + w / O,
    $ = y - M / H;
  if ((n.beginPath(), o)) {
    const tt = (P + E) / 2;
    if ((n.arc(r, l, u, P, tt), n.arc(r, l, u, tt, E), k > 0)) {
      const V = Ln(T, E, r, l);
      n.arc(V.x, V.y, k, E, y + qt);
    }
    const Y = Ln(H, y, r, l);
    if ((n.lineTo(Y.x, Y.y), M > 0)) {
      const V = Ln(H, $, r, l);
      n.arc(V.x, V.y, M, y + qt, $ + Math.PI);
    }
    const N = (y - M / d + (_ + w / d)) / 2;
    if ((n.arc(r, l, d, y - M / d, N, !0), n.arc(r, l, d, N, _ + w / d, !0), w > 0)) {
      const V = Ln(O, W, r, l);
      n.arc(V.x, V.y, w, W + Math.PI, _ - qt);
    }
    const q = Ln(D, _, r, l);
    if ((n.lineTo(q.x, q.y), v > 0)) {
      const V = Ln(D, P, r, l);
      n.arc(V.x, V.y, v, _ - qt, P);
    }
  } else {
    n.moveTo(r, l);
    const tt = Math.cos(P) * u + r,
      Y = Math.sin(P) * u + l;
    n.lineTo(tt, Y);
    const N = Math.cos(E) * u + r,
      q = Math.sin(E) * u + l;
    n.lineTo(N, q);
  }
  n.closePath();
}
function X1(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: l } = t;
  let a = t.endAngle;
  if (o) {
    Es(n, t, e, i, a, s);
    for (let c = 0; c < o; ++c) n.fill();
    isNaN(l) || (a = r + (l % Vt || Vt));
  }
  return Es(n, t, e, i, a, s), n.fill(), a;
}
function K1(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: l, options: a } = t,
    { borderWidth: c, borderJoinStyle: f, borderDash: u, borderDashOffset: d } = a,
    h = a.borderAlign === 'inner';
  if (!c) return;
  n.setLineDash(u || []),
    (n.lineDashOffset = d),
    h
      ? ((n.lineWidth = c * 2), (n.lineJoin = f || 'round'))
      : ((n.lineWidth = c), (n.lineJoin = f || 'bevel'));
  let g = t.endAngle;
  if (o) {
    Es(n, t, e, i, g, s);
    for (let m = 0; m < o; ++m) n.stroke();
    isNaN(l) || (g = r + (l % Vt || Vt));
  }
  h && Y1(n, t, g), o || (Es(n, t, e, i, g, s), n.stroke());
}
class yi extends Qe {
  constructor(e) {
    super();
    it(this, 'circumference');
    it(this, 'endAngle');
    it(this, 'fullCircles');
    it(this, 'innerRadius');
    it(this, 'outerRadius');
    it(this, 'pixelMargin');
    it(this, 'startAngle');
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      e && Object.assign(this, e);
  }
  inRange(e, i, s) {
    const o = this.getProps(['x', 'y'], s),
      { angle: r, distance: l } = Ku(o, { x: e, y: i }),
      {
        startAngle: a,
        endAngle: c,
        innerRadius: f,
        outerRadius: u,
        circumference: d,
      } = this.getProps(
        ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
        s,
      ),
      h = (this.options.spacing + this.options.borderWidth) / 2,
      m = _t(d, c - a) >= Vt || Ei(r, a, c),
      p = Xe(l, f + h, u + h);
    return m && p;
  }
  getCenterPoint(e) {
    const {
        x: i,
        y: s,
        startAngle: o,
        endAngle: r,
        innerRadius: l,
        outerRadius: a,
      } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], e),
      { offset: c, spacing: f } = this.options,
      u = (o + r) / 2,
      d = (l + a + f + c) / 2;
    return { x: i + Math.cos(u) * d, y: s + Math.sin(u) * d };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: i, circumference: s } = this,
      o = (i.offset || 0) / 4,
      r = (i.spacing || 0) / 2,
      l = i.circular;
    if (
      ((this.pixelMargin = i.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = s > Vt ? Math.floor(s / Vt) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    e.save();
    const a = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(a) * o, Math.sin(a) * o);
    const c = 1 - Math.sin(Math.min(jt, s || 0)),
      f = o * c;
    (e.fillStyle = i.backgroundColor),
      (e.strokeStyle = i.borderColor),
      X1(e, this, f, r, l),
      K1(e, this, f, r, l),
      e.restore();
  }
}
it(yi, 'id', 'arc'),
  it(yi, 'defaults', {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  it(yi, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  it(yi, 'descriptors', { _scriptable: !0, _indexable: (e) => e !== 'borderDash' });
function xf(n, t, e = t) {
  (n.lineCap = _t(e.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(_t(e.borderDash, t.borderDash)),
    (n.lineDashOffset = _t(e.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = _t(e.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = _t(e.borderWidth, t.borderWidth)),
    (n.strokeStyle = _t(e.borderColor, t.borderColor));
}
function G1(n, t, e) {
  n.lineTo(e.x, e.y);
}
function Z1(n) {
  return n.stepped ? yp : n.tension || n.cubicInterpolationMode === 'monotone' ? kp : G1;
}
function Af(n, t, e = {}) {
  const i = n.length,
    { start: s = 0, end: o = i - 1 } = e,
    { start: r, end: l } = t,
    a = Math.max(s, r),
    c = Math.min(o, l),
    f = (s < r && o < r) || (s > l && o > l);
  return { count: i, start: a, loop: t.loop, ilen: c < a && !f ? i + c - a : c - a };
}
function J1(n, t, e, i) {
  const { points: s, options: o } = t,
    { count: r, start: l, loop: a, ilen: c } = Af(s, e, i),
    f = Z1(o);
  let { move: u = !0, reverse: d } = i || {},
    h,
    g,
    m;
  for (h = 0; h <= c; ++h)
    (g = s[(l + (d ? c - h : h)) % r]),
      !g.skip && (u ? (n.moveTo(g.x, g.y), (u = !1)) : f(n, m, g, d, o.stepped), (m = g));
  return a && ((g = s[(l + (d ? c : 0)) % r]), f(n, m, g, d, o.stepped)), !!a;
}
function Q1(n, t, e, i) {
  const s = t.points,
    { count: o, start: r, ilen: l } = Af(s, e, i),
    { move: a = !0, reverse: c } = i || {};
  let f = 0,
    u = 0,
    d,
    h,
    g,
    m,
    p,
    _;
  const y = (k) => (r + (c ? l - k : k)) % o,
    v = () => {
      m !== p && (n.lineTo(f, p), n.lineTo(f, m), n.lineTo(f, _));
    };
  for (a && ((h = s[y(0)]), n.moveTo(h.x, h.y)), d = 0; d <= l; ++d) {
    if (((h = s[y(d)]), h.skip)) continue;
    const k = h.x,
      w = h.y,
      M = k | 0;
    M === g
      ? (w < m ? (m = w) : w > p && (p = w), (f = (u * f + k) / ++u))
      : (v(), n.lineTo(k, w), (g = M), (u = 0), (m = p = w)),
      (_ = w);
  }
  v();
}
function Po(n) {
  const t = n.options,
    e = t.borderDash && t.borderDash.length;
  return !n._decimated &&
    !n._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !e
    ? Q1
    : J1;
}
function $1(n) {
  return n.stepped ? Qp : n.tension || n.cubicInterpolationMode === 'monotone' ? $p : kn;
}
function t_(n, t, e, i) {
  let s = t._path;
  s || ((s = t._path = new Path2D()), t.path(s, e, i) && s.closePath()),
    xf(n, t.options),
    n.stroke(s);
}
function e_(n, t, e, i) {
  const { segments: s, options: o } = t,
    r = Po(t);
  for (const l of s)
    xf(n, o, l.style),
      n.beginPath(),
      r(n, t, l, { start: e, end: e + i - 1 }) && n.closePath(),
      n.stroke();
}
const n_ = typeof Path2D == 'function';
function i_(n, t, e, i) {
  n_ && !t.options.segment ? t_(n, t, e, i) : e_(n, t, e, i);
}
class sn extends Qe {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === 'monotone') &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      Yp(this._points, i, t, s, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ob(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options,
      s = t[e],
      o = this.points,
      r = pf(this, { property: e, start: s, end: s });
    if (!r.length) return;
    const l = [],
      a = $1(i);
    let c, f;
    for (c = 0, f = r.length; c < f; ++c) {
      const { start: u, end: d } = r[c],
        h = o[u],
        g = o[d];
      if (h === g) {
        l.push(h);
        continue;
      }
      const m = Math.abs((s - h[e]) / (g[e] - h[e])),
        p = a(h, g, m, i.stepped);
      (p[e] = t[e]), l.push(p);
    }
    return l.length === 1 ? l[0] : l;
  }
  pathSegment(t, e, i) {
    return Po(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments,
      o = Po(this);
    let r = this._loop;
    (e = e || 0), (i = i || this.points.length - e);
    for (const l of s) r &= o(t, this, l, { start: e, end: e + i - 1 });
    return !!r;
  }
  draw(t, e, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), i_(t, this, i, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
it(sn, 'id', 'line'),
  it(sn, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  it(sn, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
  it(sn, 'descriptors', { _scriptable: !0, _indexable: (t) => t !== 'borderDash' && t !== 'fill' });
function Pa(n, t, e, i) {
  const s = n.options,
    { [e]: o } = n.getProps([e], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Ss extends Qe {
  constructor(e) {
    super();
    it(this, 'parsed');
    it(this, 'skip');
    it(this, 'stop');
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, i, s) {
    const o = this.options,
      { x: r, y: l } = this.getProps(['x', 'y'], s);
    return Math.pow(e - r, 2) + Math.pow(i - l, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, i) {
    return Pa(this, e, 'x', i);
  }
  inYRange(e, i) {
    return Pa(this, e, 'y', i);
  }
  getCenterPoint(e) {
    const { x: i, y: s } = this.getProps(['x', 'y'], e);
    return { x: i, y: s };
  }
  size(e) {
    e = e || this.options || {};
    let i = e.radius || 0;
    i = Math.max(i, (i && e.hoverRadius) || 0);
    const s = (i && e.borderWidth) || 0;
    return (i + s) * 2;
  }
  draw(e, i) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Ge(this, i, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      Mo(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
it(Ss, 'id', 'point'),
  it(Ss, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  it(Ss, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
function Lf(n, t) {
  const {
    x: e,
    y: i,
    base: s,
    width: o,
    height: r,
  } = n.getProps(['x', 'y', 'base', 'width', 'height'], t);
  let l, a, c, f, u;
  return (
    n.horizontal
      ? ((u = r / 2), (l = Math.min(e, s)), (a = Math.max(e, s)), (c = i - u), (f = i + u))
      : ((u = o / 2), (l = e - u), (a = e + u), (c = Math.min(i, s)), (f = Math.max(i, s))),
    { left: l, top: c, right: a, bottom: f }
  );
}
function on(n, t, e, i) {
  return n ? 0 : te(t, e, i);
}
function s_(n, t, e) {
  const i = n.options.borderWidth,
    s = n.borderSkipped,
    o = sf(i);
  return {
    t: on(s.top, o.top, 0, e),
    r: on(s.right, o.right, 0, t),
    b: on(s.bottom, o.bottom, 0, e),
    l: on(s.left, o.left, 0, t),
  };
}
function o_(n, t, e) {
  const { enableBorderRadius: i } = n.getProps(['enableBorderRadius']),
    s = n.options.borderRadius,
    o = Sn(s),
    r = Math.min(t, e),
    l = n.borderSkipped,
    a = i || At(s);
  return {
    topLeft: on(!a || l.top || l.left, o.topLeft, 0, r),
    topRight: on(!a || l.top || l.right, o.topRight, 0, r),
    bottomLeft: on(!a || l.bottom || l.left, o.bottomLeft, 0, r),
    bottomRight: on(!a || l.bottom || l.right, o.bottomRight, 0, r),
  };
}
function r_(n) {
  const t = Lf(n),
    e = t.right - t.left,
    i = t.bottom - t.top,
    s = s_(n, e / 2, i / 2),
    o = o_(n, e / 2, i / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: i, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function uo(n, t, e, i) {
  const s = t === null,
    o = e === null,
    l = n && !(s && o) && Lf(n, i);
  return l && (s || Xe(t, l.left, l.right)) && (o || Xe(e, l.top, l.bottom));
}
function l_(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function a_(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function fo(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0,
    s = n.y !== e.y ? -t : 0,
    o = (n.x + n.w !== e.x + e.w ? t : 0) - i,
    r = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return { x: n.x + i, y: n.y + s, w: n.w + o, h: n.h + r, radius: n.radius };
}
class Ms extends Qe {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: i, backgroundColor: s },
      } = this,
      { inner: o, outer: r } = r_(this),
      l = l_(r.radius) ? Ii : a_;
    t.save(),
      (r.w !== o.w || r.h !== o.h) &&
        (t.beginPath(),
        l(t, fo(r, e, o)),
        t.clip(),
        l(t, fo(o, -e, r)),
        (t.fillStyle = i),
        t.fill('evenodd')),
      t.beginPath(),
      l(t, fo(o, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore();
  }
  inRange(t, e, i) {
    return uo(this, t, e, i);
  }
  inXRange(t, e) {
    return uo(this, t, null, e);
  }
  inYRange(t, e) {
    return uo(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: i,
      base: s,
      horizontal: o,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
    return { x: o ? (e + s) / 2 : e, y: o ? i : (i + s) / 2 };
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2;
  }
}
it(Ms, 'id', 'bar'),
  it(Ms, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  it(Ms, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
var c_ = Object.freeze({
  __proto__: null,
  ArcElement: yi,
  BarElement: Ms,
  LineElement: sn,
  PointElement: Ss,
});
const xo = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  xa = xo.map((n) => n.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function Of(n) {
  return xo[n % xo.length];
}
function Ff(n) {
  return xa[n % xa.length];
}
function u_(n, t) {
  return (n.borderColor = Of(t)), (n.backgroundColor = Ff(t)), ++t;
}
function f_(n, t) {
  return (n.backgroundColor = n.data.map(() => Of(t++))), t;
}
function d_(n, t) {
  return (n.backgroundColor = n.data.map(() => Ff(t++))), t;
}
function h_(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof vn ? (t = f_(e, t)) : s instanceof xi ? (t = d_(e, t)) : s && (t = u_(e, t));
  };
}
function Aa(n) {
  let t;
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
  return !1;
}
function g_(n) {
  return n && (n.borderColor || n.backgroundColor);
}
var m_ = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(n, t, e) {
    if (!e.enabled) return;
    const {
        data: { datasets: i },
        options: s,
      } = n.config,
      { elements: o } = s;
    if (!e.forceOverride && (Aa(i) || g_(s) || (o && Aa(o)))) return;
    const r = h_(n);
    i.forEach(r);
  },
};
function p_(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e) return n.slice(t, t + e);
  const r = [],
    l = (e - 2) / (o - 2);
  let a = 0;
  const c = t + e - 1;
  let f = t,
    u,
    d,
    h,
    g,
    m;
  for (r[a++] = n[f], u = 0; u < o - 2; u++) {
    let p = 0,
      _ = 0,
      y;
    const v = Math.floor((u + 1) * l) + 1 + t,
      k = Math.min(Math.floor((u + 2) * l) + 1, e) + t,
      w = k - v;
    for (y = v; y < k; y++) (p += n[y].x), (_ += n[y].y);
    (p /= w), (_ /= w);
    const M = Math.floor(u * l) + 1 + t,
      D = Math.min(Math.floor((u + 1) * l) + 1, e) + t,
      { x: T, y: P } = n[f];
    for (h = g = -1, y = M; y < D; y++)
      (g = 0.5 * Math.abs((T - p) * (n[y].y - P) - (T - n[y].x) * (_ - P))),
        g > h && ((h = g), (d = n[y]), (m = y));
    (r[a++] = d), (f = m);
  }
  return (r[a++] = n[c]), r;
}
function b_(n, t, e, i) {
  let s = 0,
    o = 0,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m;
  const p = [],
    _ = t + e - 1,
    y = n[t].x,
    k = n[_].x - y;
  for (r = t; r < t + e; ++r) {
    (l = n[r]), (a = ((l.x - y) / k) * i), (c = l.y);
    const w = a | 0;
    if (w === f)
      c < g ? ((g = c), (u = r)) : c > m && ((m = c), (d = r)), (s = (o * s + l.x) / ++o);
    else {
      const M = r - 1;
      if (!Et(u) && !Et(d)) {
        const D = Math.min(u, d),
          T = Math.max(u, d);
        D !== h && D !== M && p.push({ ...n[D], x: s }),
          T !== h && T !== M && p.push({ ...n[T], x: s });
      }
      r > 0 && M !== h && p.push(n[M]), p.push(l), (f = w), (o = 0), (g = m = c), (u = d = h = r);
    }
  }
  return p;
}
function Ef(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated,
      delete n._data,
      Object.defineProperty(n, 'data', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      });
  }
}
function La(n) {
  n.data.datasets.forEach((t) => {
    Ef(t);
  });
}
function __(n, t) {
  const e = t.length;
  let i = 0,
    s;
  const { iScale: o } = n,
    { min: r, max: l, minDefined: a, maxDefined: c } = o.getUserBounds();
  return (
    a && (i = te(Ke(t, o.axis, r).lo, 0, e - 1)),
    c ? (s = te(Ke(t, o.axis, l).hi + 1, i, e) - i) : (s = e - i),
    { start: i, count: s }
  );
}
var y_ = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      La(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: l } = s,
        a = n.getDatasetMeta(o),
        c = r || s.data;
      if (bi([l, n.options.indexAxis]) === 'y' || !a.controller.supportsDecimation) return;
      const f = n.scales[a.xAxisID];
      if ((f.type !== 'linear' && f.type !== 'time') || n.options.parsing) return;
      let { start: u, count: d } = __(a, c);
      const h = e.threshold || 4 * i;
      if (d <= h) {
        Ef(s);
        return;
      }
      Et(r) &&
        ((s._data = c),
        delete s.data,
        Object.defineProperty(s, 'data', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (m) {
            this._data = m;
          },
        }));
      let g;
      switch (e.algorithm) {
        case 'lttb':
          g = p_(c, u, d, i, e);
          break;
        case 'min-max':
          g = b_(c, u, d, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(n) {
    La(n);
  },
};
function k_(n, t, e) {
  const i = n.segments,
    s = n.points,
    o = t.points,
    r = [];
  for (const l of i) {
    let { start: a, end: c } = l;
    c = sr(a, c, s);
    const f = Ao(e, s[a], s[c], l.loop);
    if (!t.segments) {
      r.push({ source: l, target: f, start: s[a], end: s[c] });
      continue;
    }
    const u = pf(t, f);
    for (const d of u) {
      const h = Ao(e, o[d.start], o[d.end], d.loop),
        g = mf(l, s, h);
      for (const m of g)
        r.push({
          source: m,
          target: d,
          start: { [e]: Oa(f, h, 'start', Math.max) },
          end: { [e]: Oa(f, h, 'end', Math.min) },
        });
    }
  }
  return r;
}
function Ao(n, t, e, i) {
  if (i) return;
  let s = t[n],
    o = e[n];
  return n === 'angle' && ((s = pe(s)), (o = pe(o))), { property: n, start: s, end: o };
}
function v_(n, t) {
  const { x: e = null, y: i = null } = n || {},
    s = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: r, end: l }) => {
      l = sr(r, l, s);
      const a = s[r],
        c = s[l];
      i !== null
        ? (o.push({ x: a.x, y: i }), o.push({ x: c.x, y: i }))
        : e !== null && (o.push({ x: e, y: a.y }), o.push({ x: e, y: c.y }));
    }),
    o
  );
}
function sr(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y)) break;
  }
  return t;
}
function Oa(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function If(n, t) {
  let e = [],
    i = !1;
  return (
    Nt(n) ? ((i = !0), (e = n)) : (e = v_(n, t)),
    e.length ? new sn({ points: e, options: { tension: 0 }, _loop: i, _fullLoop: i }) : null
  );
}
function Fa(n) {
  return n && n.fill !== !1;
}
function w_(n, t, e) {
  let s = n[t].fill;
  const o = [t];
  let r;
  if (!e) return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!Ut(s)) return s;
    if (((r = n[s]), !r)) return !1;
    if (r.visible) return s;
    o.push(s), (s = r.fill);
  }
  return !1;
}
function S_(n, t, e) {
  const i = T_(n);
  if (At(i)) return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return Ut(s) && Math.floor(s) === s
    ? M_(i[0], t, s, e)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i;
}
function M_(n, t, e, i) {
  return (n === '-' || n === '+') && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function D_(n, t) {
  let e = null;
  return (
    n === 'start'
      ? (e = t.bottom)
      : n === 'end'
      ? (e = t.top)
      : At(n)
      ? (e = t.getPixelForValue(n.value))
      : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function C_(n, t, e) {
  let i;
  return (
    n === 'start'
      ? (i = e)
      : n === 'end'
      ? (i = t.options.reverse ? t.min : t.max)
      : At(n)
      ? (i = n.value)
      : (i = t.getBaseValue()),
    i
  );
}
function T_(n) {
  const t = n.options,
    e = t.fill;
  let i = _t(e && e.target, e);
  return (
    i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
  );
}
function P_(n) {
  const { scale: t, index: e, line: i } = n,
    s = [],
    o = i.segments,
    r = i.points,
    l = x_(t, e);
  l.push(If({ x: null, y: t.bottom }, i));
  for (let a = 0; a < o.length; a++) {
    const c = o[a];
    for (let f = c.start; f <= c.end; f++) A_(s, r[f], l);
  }
  return new sn({ points: s, options: {} });
}
function x_(n, t) {
  const e = [],
    i = n.getMatchingVisibleMetas('line');
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function A_(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: r, last: l, point: a } = L_(o, t, 'x');
    if (!(!a || (r && l))) {
      if (r) i.unshift(a);
      else if ((n.push(a), !l)) break;
    }
  }
  n.push(...i);
}
function L_(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i) return {};
  const s = i[e],
    o = n.segments,
    r = n.points;
  let l = !1,
    a = !1;
  for (let c = 0; c < o.length; c++) {
    const f = o[c],
      u = r[f.start][e],
      d = r[f.end][e];
    if (Xe(s, u, d)) {
      (l = s === u), (a = s === d);
      break;
    }
  }
  return { first: l, last: a, point: i };
}
class Rf {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: r } = this;
    return (e = e || { start: 0, end: Vt }), t.arc(s, o, r, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * s, y: i + Math.sin(o) * s, angle: o };
  }
}
function O_(n) {
  const { chart: t, fill: e, line: i } = n;
  if (Ut(e)) return F_(t, e);
  if (e === 'stack') return P_(n);
  if (e === 'shape') return !0;
  const s = E_(n);
  return s instanceof Rf ? s : If(s, i);
}
function F_(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function E_(n) {
  return (n.scale || {}).getPointPositionForValue ? R_(n) : I_(n);
}
function I_(n) {
  const { scale: t = {}, fill: e } = n,
    i = D_(e, t);
  if (Ut(i)) {
    const s = t.isHorizontal();
    return { x: s ? i : null, y: s ? null : i };
  }
  return null;
}
function R_(n) {
  const { scale: t, fill: e } = n,
    i = t.options,
    s = t.getLabels().length,
    o = i.reverse ? t.max : t.min,
    r = C_(e, t, o),
    l = [];
  if (i.grid.circular) {
    const a = t.getPointPositionForValue(0, o);
    return new Rf({ x: a.x, y: a.y, radius: t.getDistanceFromCenterForValue(r) });
  }
  for (let a = 0; a < s; ++a) l.push(t.getPointPositionForValue(a, r));
  return l;
}
function ho(n, t, e) {
  const i = O_(t),
    { line: s, scale: o, axis: r } = t,
    l = s.options,
    a = l.fill,
    c = l.backgroundColor,
    { above: f = c, below: u = c } = a || {};
  i &&
    s.points.length &&
    (Ys(n, e),
    B_(n, { line: s, target: i, above: f, below: u, area: e, scale: o, axis: r }),
    Us(n));
}
function B_(n, t) {
  const { line: e, target: i, above: s, below: o, area: r, scale: l } = t,
    a = e._loop ? 'angle' : t.axis;
  n.save(),
    a === 'x' &&
      o !== s &&
      (Ea(n, i, r.top),
      Ia(n, { line: e, target: i, color: s, scale: l, property: a }),
      n.restore(),
      n.save(),
      Ea(n, i, r.bottom)),
    Ia(n, { line: e, target: i, color: o, scale: l, property: a }),
    n.restore();
}
function Ea(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0,
    r = !1;
  n.beginPath();
  for (const l of i) {
    const { start: a, end: c } = l,
      f = s[a],
      u = s[sr(a, c, s)];
    o ? (n.moveTo(f.x, f.y), (o = !1)) : (n.lineTo(f.x, e), n.lineTo(f.x, f.y)),
      (r = !!t.pathSegment(n, l, { move: r })),
      r ? n.closePath() : n.lineTo(u.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Ia(n, t) {
  const { line: e, target: i, property: s, color: o, scale: r } = t,
    l = k_(e, i, s);
  for (const { source: a, target: c, start: f, end: u } of l) {
    const { style: { backgroundColor: d = o } = {} } = a,
      h = i !== !0;
    n.save(), (n.fillStyle = d), z_(n, r, h && Ao(s, f, u)), n.beginPath();
    const g = !!e.pathSegment(n, a);
    let m;
    if (h) {
      g ? n.closePath() : Ra(n, i, u, s);
      const p = !!i.pathSegment(n, c, { move: g, reverse: !0 });
      (m = g && p), m || Ra(n, i, f, s);
    }
    n.closePath(), n.fill(m ? 'evenodd' : 'nonzero'), n.restore();
  }
}
function z_(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea,
    { property: o, start: r, end: l } = e || {};
  o === 'x' && (n.beginPath(), n.rect(r, i, l - r, s - i), n.clip());
}
function Ra(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var H_ = {
  id: 'filler',
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length,
      s = [];
    let o, r, l, a;
    for (r = 0; r < i; ++r)
      (o = n.getDatasetMeta(r)),
        (l = o.dataset),
        (a = null),
        l &&
          l.options &&
          l instanceof sn &&
          (a = {
            visible: n.isDatasetVisible(r),
            index: r,
            fill: S_(l, r, i),
            chart: n,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: l,
          }),
        (o.$filler = a),
        s.push(a);
    for (r = 0; r < i; ++r) (a = s[r]), !(!a || a.fill === !1) && (a.fill = w_(s, r, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === 'beforeDraw',
      s = n.getSortedVisibleDatasetMetas(),
      o = n.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const l = s[r].$filler;
      l && (l.line.updateControlPoints(o, l.axis), i && l.fill && ho(n.ctx, l, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      Fa(o) && ho(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !Fa(i) || e.drawTime !== 'beforeDatasetDraw' || ho(n.ctx, i, n.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const Ba = (n, t) => {
    let { boxHeight: e = t, boxWidth: i = t } = n;
    return (
      n.usePointStyle && ((e = Math.min(e, t)), (i = n.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  W_ = (n, t) =>
    n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class za extends Qe {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, i) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = Ht(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      s = $t(i.font),
      o = s.size,
      r = this._computeTitleHeight(),
      { boxWidth: l, itemHeight: a } = Ba(i, o);
    let c, f;
    (e.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (f = this._fitRows(r, o, l, a) + 10))
        : ((f = this.maxHeight), (c = this._fitCols(r, s, l, a) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(f, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, i, s) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      f = s + l;
    let u = t;
    (o.textAlign = 'left'), (o.textBaseline = 'middle');
    let d = -1,
      h = -f;
    return (
      this.legendItems.forEach((g, m) => {
        const p = i + e / 2 + o.measureText(g.text).width;
        (m === 0 || c[c.length - 1] + p + 2 * l > r) &&
          ((u += f), (c[c.length - (m > 0 ? 0 : 1)] = 0), (h += f), d++),
          (a[m] = { left: 0, top: h, row: d, width: p, height: s }),
          (c[c.length - 1] += p + l);
      }),
      u
    );
  }
  _fitCols(t, e, i, s) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      f = r - t;
    let u = l,
      d = 0,
      h = 0,
      g = 0,
      m = 0;
    return (
      this.legendItems.forEach((p, _) => {
        const { itemWidth: y, itemHeight: v } = N_(i, e, o, p, s);
        _ > 0 &&
          h + v + 2 * l > f &&
          ((u += d + l), c.push({ width: d, height: h }), (g += d + l), m++, (d = h = 0)),
          (a[_] = { left: g, top: h, col: m, width: y, height: v }),
          (d = Math.max(d, y)),
          (h += v + l);
      }),
      (u += d),
      c.push({ width: d, height: h }),
      u
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: i,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      r = Bn(o, this.left, this.width);
    if (this.isHorizontal()) {
      let l = 0,
        a = ie(i, this.left + s, this.right - this.lineWidths[l]);
      for (const c of e)
        l !== c.row && ((l = c.row), (a = ie(i, this.left + s, this.right - this.lineWidths[l]))),
          (c.top += this.top + t + s),
          (c.left = r.leftForLtr(r.x(a), c.width)),
          (a += c.width + s);
    } else {
      let l = 0,
        a = ie(i, this.top + t + s, this.bottom - this.columnSizes[l].height);
      for (const c of e)
        c.col !== l &&
          ((l = c.col), (a = ie(i, this.top + t + s, this.bottom - this.columnSizes[l].height))),
          (c.top = a),
          (c.left += this.left + s),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (a += c.height + s);
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ys(t, this), this._draw(), Us(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
      { align: o, labels: r } = t,
      l = Xt.color,
      a = Bn(t.rtl, this.left, this.width),
      c = $t(r.font),
      { padding: f } = r,
      u = c.size,
      d = u / 2;
    let h;
    this.drawTitle(),
      (s.textAlign = a.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: g, boxHeight: m, itemHeight: p } = Ba(r, u),
      _ = function (M, D, T) {
        if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
        s.save();
        const P = _t(T.lineWidth, 1);
        if (
          ((s.fillStyle = _t(T.fillStyle, l)),
          (s.lineCap = _t(T.lineCap, 'butt')),
          (s.lineDashOffset = _t(T.lineDashOffset, 0)),
          (s.lineJoin = _t(T.lineJoin, 'miter')),
          (s.lineWidth = P),
          (s.strokeStyle = _t(T.strokeStyle, l)),
          s.setLineDash(_t(T.lineDash, [])),
          r.usePointStyle)
        ) {
          const E = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: T.pointStyle,
              rotation: T.rotation,
              borderWidth: P,
            },
            O = a.xPlus(M, g / 2),
            H = D + d;
          nf(s, E, O, H, r.pointStyleWidth && g);
        } else {
          const E = D + Math.max((u - m) / 2, 0),
            O = a.leftForLtr(M, g),
            H = Sn(T.borderRadius);
          s.beginPath(),
            Object.values(H).some((W) => W !== 0)
              ? Ii(s, { x: O, y: E, w: g, h: m, radius: H })
              : s.rect(O, E, g, m),
            s.fill(),
            P !== 0 && s.stroke();
        }
        s.restore();
      },
      y = function (M, D, T) {
        Tn(s, T.text, M, D + p / 2, c, {
          strikethrough: T.hidden,
          textAlign: a.textAlign(T.textAlign),
        });
      },
      v = this.isHorizontal(),
      k = this._computeTitleHeight();
    v
      ? (h = { x: ie(o, this.left + f, this.right - i[0]), y: this.top + f + k, line: 0 })
      : (h = { x: this.left + f, y: ie(o, this.top + k + f, this.bottom - e[0].height), line: 0 }),
      df(this.ctx, t.textDirection);
    const w = p + f;
    this.legendItems.forEach((M, D) => {
      (s.strokeStyle = M.fontColor), (s.fillStyle = M.fontColor);
      const T = s.measureText(M.text).width,
        P = a.textAlign(M.textAlign || (M.textAlign = r.textAlign)),
        E = g + d + T;
      let O = h.x,
        H = h.y;
      a.setWidth(this.width),
        v
          ? D > 0 &&
            O + E + f > this.right &&
            ((H = h.y += w), h.line++, (O = h.x = ie(o, this.left + f, this.right - i[h.line])))
          : D > 0 &&
            H + w > this.bottom &&
            ((O = h.x = O + e[h.line].width + f),
            h.line++,
            (H = h.y = ie(o, this.top + k + f, this.bottom - e[h.line].height)));
      const W = a.x(O);
      if ((_(W, H, M), (O = ap(P, O + g + d, v ? O + E : this.right, t.rtl)), y(a.x(O), H, M), v))
        h.x += E + f;
      else if (typeof M.text != 'string') {
        const $ = c.lineHeight;
        h.y += Bf(M, $);
      } else h.y += w;
    }),
      hf(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      i = $t(e.font),
      s = le(e.padding);
    if (!e.display) return;
    const o = Bn(t.rtl, this.left, this.width),
      r = this.ctx,
      l = e.position,
      a = i.size / 2,
      c = s.top + a;
    let f,
      u = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)), (f = this.top + c), (u = ie(t.align, u, this.right - d));
    else {
      const g = this.columnSizes.reduce((m, p) => Math.max(m, p.height), 0);
      f =
        c + ie(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const h = ie(l, u, u + d);
    (r.textAlign = o.textAlign(Zo(l))),
      (r.textBaseline = 'middle'),
      (r.strokeStyle = e.color),
      (r.fillStyle = e.color),
      (r.font = i.string),
      Tn(r, e.text, h, f, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = $t(t.font),
      i = le(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Xe(t, this.left, this.right) && Xe(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (((s = o[i]), Xe(t, s.left, s.left + s.width) && Xe(e, s.top, s.top + s.height)))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Y_(t.type, e)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const s = this._hoveredItem,
        o = W_(s, i);
      s && !o && Ht(e.onLeave, [t, s, this], this),
        (this._hoveredItem = i),
        i && !o && Ht(e.onHover, [t, i, this], this);
    } else i && Ht(e.onClick, [t, i, this], this);
  }
}
function N_(n, t, e, i, s) {
  const o = V_(i, n, t, e),
    r = j_(s, i, t.lineHeight);
  return { itemWidth: o, itemHeight: r };
}
function V_(n, t, e, i) {
  let s = n.text;
  return (
    s && typeof s != 'string' && (s = s.reduce((o, r) => (o.length > r.length ? o : r))),
    t + e.size / 2 + i.measureText(s).width
  );
}
function j_(n, t, e) {
  let i = n;
  return typeof t.text != 'string' && (i = Bf(t, e)), i;
}
function Bf(n, t) {
  const e = n.text ? n.text.length + 0.5 : 0;
  return t * e;
}
function Y_(n, t) {
  return !!(
    ((n === 'mousemove' || n === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (n === 'click' || n === 'mouseup'))
  );
}
var U_ = {
  id: 'legend',
  _element: za,
  start(n, t, e) {
    const i = (n.legend = new za({ ctx: n.ctx, options: e, chart: n }));
    se.configure(n, i, e), se.addBox(n, i);
  },
  stop(n) {
    se.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    se.configure(n, i, e), (i.options = e);
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex,
        s = e.chart;
      s.isDatasetVisible(i) ? (s.hide(i), (t.hidden = !0)) : (s.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets,
          {
            labels: {
              usePointStyle: e,
              pointStyle: i,
              textAlign: s,
              color: o,
              useBorderRadius: r,
              borderRadius: l,
            },
          } = n.legend.options;
        return n._getSortedDatasetMetas().map((a) => {
          const c = a.controller.getStyle(e ? 0 : void 0),
            f = le(c.borderWidth);
          return {
            text: t[a.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !a.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (f.width + f.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (l || c.borderRadius),
            datasetIndex: a.index,
          };
        }, this);
      },
    },
    title: { color: (n) => n.chart.options.color, display: !1, position: 'center', text: '' },
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith('on'),
    labels: { _scriptable: (n) => !['generateLabels', 'filter', 'sort'].includes(n) },
  },
};
class or extends Qe {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = Nt(i.text) ? i.text.length : 1;
    this._padding = le(i.padding);
    const o = s * $t(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === 'top' || t === 'bottom';
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: r } = this,
      l = r.align;
    let a = 0,
      c,
      f,
      u;
    return (
      this.isHorizontal()
        ? ((f = ie(l, i, o)), (u = e + t), (c = o - i))
        : (r.position === 'left'
            ? ((f = i + t), (u = ie(l, s, e)), (a = jt * -0.5))
            : ((f = o - t), (u = ie(l, e, s)), (a = jt * 0.5)),
          (c = s - e)),
      { titleX: f, titleY: u, maxWidth: c, rotation: a }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const i = $t(e.font),
      o = i.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: l, maxWidth: a, rotation: c } = this._drawArgs(o);
    Tn(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: a,
      rotation: c,
      textAlign: Zo(e.align),
      textBaseline: 'middle',
      translation: [r, l],
    });
  }
}
function q_(n, t) {
  const e = new or({ ctx: n.ctx, options: t, chart: n });
  se.configure(n, e, t), se.addBox(n, e), (n.titleBlock = e);
}
var X_ = {
  id: 'title',
  _element: or,
  start(n, t, e) {
    q_(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    se.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    se.configure(n, i, e), (i.options = e);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const fs = new WeakMap();
var K_ = {
  id: 'subtitle',
  start(n, t, e) {
    const i = new or({ ctx: n.ctx, options: e, chart: n });
    se.configure(n, i, e), se.addBox(n, i), fs.set(n, i);
  },
  stop(n) {
    se.removeBox(n, fs.get(n)), fs.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = fs.get(n);
    se.configure(n, i, e), (i.options = e);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'normal' },
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ki = {
  average(n) {
    if (!n.length) return !1;
    let t,
      e,
      i = 0,
      s = 0,
      o = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const r = n[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        (i += l.x), (s += l.y), ++o;
      }
    }
    return { x: i / o, y: s / o };
  },
  nearest(n, t) {
    if (!n.length) return !1;
    let e = t.x,
      i = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      r,
      l;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o].element;
      if (a && a.hasValue()) {
        const c = a.getCenterPoint(),
          f = wo(t, c);
        f < s && ((s = f), (l = a));
      }
    }
    if (l) {
      const a = l.tooltipPosition();
      (e = a.x), (i = a.y);
    }
    return { x: e, y: i };
  },
};
function Te(n, t) {
  return t && (Nt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Ve(n) {
  return (typeof n == 'string' || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n;
}
function G_(n, t) {
  const { element: e, datasetIndex: i, index: s } = t,
    o = n.getDatasetMeta(i).controller,
    { label: r, value: l } = o.getLabelAndValue(s);
  return {
    chart: n,
    label: r,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: l,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e,
  };
}
function Ha(n, t) {
  const e = n.chart.ctx,
    { body: i, footer: s, title: o } = n,
    { boxWidth: r, boxHeight: l } = t,
    a = $t(t.bodyFont),
    c = $t(t.titleFont),
    f = $t(t.footerFont),
    u = o.length,
    d = s.length,
    h = i.length,
    g = le(t.padding);
  let m = g.height,
    p = 0,
    _ = i.reduce((k, w) => k + w.before.length + w.lines.length + w.after.length, 0);
  if (
    ((_ += n.beforeBody.length + n.afterBody.length),
    u && (m += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    _)
  ) {
    const k = t.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
    m += h * k + (_ - h) * a.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (m += t.footerMarginTop + d * f.lineHeight + (d - 1) * t.footerSpacing);
  let y = 0;
  const v = function (k) {
    p = Math.max(p, e.measureText(k).width + y);
  };
  return (
    e.save(),
    (e.font = c.string),
    Bt(n.title, v),
    (e.font = a.string),
    Bt(n.beforeBody.concat(n.afterBody), v),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    Bt(i, (k) => {
      Bt(k.before, v), Bt(k.lines, v), Bt(k.after, v);
    }),
    (y = 0),
    (e.font = f.string),
    Bt(n.footer, v),
    e.restore(),
    (p += g.width),
    { width: p, height: m }
  );
}
function Z_(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? 'top' : e > n.height - i / 2 ? 'bottom' : 'center';
}
function J_(n, t, e, i) {
  const { x: s, width: o } = i,
    r = e.caretSize + e.caretPadding;
  if ((n === 'left' && s + o + r > t.width) || (n === 'right' && s - o - r < 0)) return !0;
}
function Q_(n, t, e, i) {
  const { x: s, width: o } = e,
    {
      width: r,
      chartArea: { left: l, right: a },
    } = n;
  let c = 'center';
  return (
    i === 'center'
      ? (c = s <= (l + a) / 2 ? 'left' : 'right')
      : s <= o / 2
      ? (c = 'left')
      : s >= r - o / 2 && (c = 'right'),
    J_(c, n, t, e) && (c = 'center'),
    c
  );
}
function Wa(n, t, e) {
  const i = e.yAlign || t.yAlign || Z_(n, e);
  return { xAlign: e.xAlign || t.xAlign || Q_(n, t, e, i), yAlign: i };
}
function $_(n, t) {
  let { x: e, width: i } = n;
  return t === 'right' ? (e -= i) : t === 'center' && (e -= i / 2), e;
}
function t2(n, t, e) {
  let { y: i, height: s } = n;
  return t === 'top' ? (i += e) : t === 'bottom' ? (i -= s + e) : (i -= s / 2), i;
}
function Na(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = n,
    { xAlign: l, yAlign: a } = e,
    c = s + o,
    { topLeft: f, topRight: u, bottomLeft: d, bottomRight: h } = Sn(r);
  let g = $_(t, l);
  const m = t2(t, a, c);
  return (
    a === 'center'
      ? l === 'left'
        ? (g += c)
        : l === 'right' && (g -= c)
      : l === 'left'
      ? (g -= Math.max(f, d) + s)
      : l === 'right' && (g += Math.max(u, h) + s),
    { x: te(g, 0, i.width - t.width), y: te(m, 0, i.height - t.height) }
  );
}
function ds(n, t, e) {
  const i = le(e.padding);
  return t === 'center'
    ? n.x + n.width / 2
    : t === 'right'
    ? n.x + n.width - i.right
    : n.x + i.left;
}
function Va(n) {
  return Te([], Ve(n));
}
function e2(n, t, e) {
  return dn(n, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function ja(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const zf = {
  beforeTitle: We,
  title(n) {
    if (n.length > 0) {
      const t = n[0],
        e = t.chart.data.labels,
        i = e ? e.length : 0;
      if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || '';
      if (t.label) return t.label;
      if (i > 0 && t.dataIndex < i) return e[t.dataIndex];
    }
    return '';
  },
  afterTitle: We,
  beforeBody: We,
  beforeLabel: We,
  label(n) {
    if (this && this.options && this.options.mode === 'dataset')
      return n.label + ': ' + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || '';
    t && (t += ': ');
    const e = n.formattedValue;
    return Et(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return { pointStyle: e.pointStyle, rotation: e.rotation };
  },
  afterLabel: We,
  afterBody: We,
  beforeFooter: We,
  footer: We,
  afterFooter: We,
};
function ce(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > 'u' ? zf[t].call(e, i) : s;
}
class Lo extends Qe {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && e.options.animation && i.animations,
      o = new bf(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = e2(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e,
      s = ce(i, 'beforeTitle', this, t),
      o = ce(i, 'title', this, t),
      r = ce(i, 'afterTitle', this, t);
    let l = [];
    return (l = Te(l, Ve(s))), (l = Te(l, Ve(o))), (l = Te(l, Ve(r))), l;
  }
  getBeforeBody(t, e) {
    return Va(ce(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e,
      s = [];
    return (
      Bt(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          l = ja(i, o);
        Te(r.before, Ve(ce(l, 'beforeLabel', this, o))),
          Te(r.lines, ce(l, 'label', this, o)),
          Te(r.after, Ve(ce(l, 'afterLabel', this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return Va(ce(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e,
      s = ce(i, 'beforeFooter', this, t),
      o = ce(i, 'footer', this, t),
      r = ce(i, 'afterFooter', this, t);
    let l = [];
    return (l = Te(l, Ve(s))), (l = Te(l, Ve(o))), (l = Te(l, Ve(r))), l;
  }
  _createItems(t) {
    const e = this._active,
      i = this.chart.data,
      s = [],
      o = [],
      r = [];
    let l = [],
      a,
      c;
    for (a = 0, c = e.length; a < c; ++a) l.push(G_(this.chart, e[a]));
    return (
      t.filter && (l = l.filter((f, u, d) => t.filter(f, u, d, i))),
      t.itemSort && (l = l.sort((f, u) => t.itemSort(f, u, i))),
      Bt(l, (f) => {
        const u = ja(t.callbacks, f);
        s.push(ce(u, 'labelColor', this, f)),
          o.push(ce(u, 'labelPointStyle', this, f)),
          r.push(ce(u, 'labelTextColor', this, f));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = l),
      l
    );
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const l = ki[i.position].call(this, s, this._eventPosition);
      (r = this._createItems(i)),
        (this.title = this.getTitle(r, i)),
        (this.beforeBody = this.getBeforeBody(r, i)),
        (this.body = this.getBody(r, i)),
        (this.afterBody = this.getAfterBody(r, i)),
        (this.footer = this.getFooter(r, i));
      const a = (this._size = Ha(this, i)),
        c = Object.assign({}, l, a),
        f = Wa(this.chart, i, c),
        u = Na(i, c, f, this.chart);
      (this.xAlign = f.xAlign),
        (this.yAlign = f.yAlign),
        (o = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: a.width,
          height: a.height,
          caretX: l.x,
          caretY: l.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: l } = i,
      { topLeft: a, topRight: c, bottomLeft: f, bottomRight: u } = Sn(l),
      { x: d, y: h } = t,
      { width: g, height: m } = e;
    let p, _, y, v, k, w;
    return (
      o === 'center'
        ? ((k = h + m / 2),
          s === 'left'
            ? ((p = d), (_ = p - r), (v = k + r), (w = k - r))
            : ((p = d + g), (_ = p + r), (v = k - r), (w = k + r)),
          (y = p))
        : (s === 'left'
            ? (_ = d + Math.max(a, f) + r)
            : s === 'right'
            ? (_ = d + g - Math.max(c, u) - r)
            : (_ = this.caretX),
          o === 'top'
            ? ((v = h), (k = v - r), (p = _ - r), (y = _ + r))
            : ((v = h + m), (k = v + r), (p = _ + r), (y = _ - r)),
          (w = v)),
      { x1: p, x2: _, x3: y, y1: v, y2: k, y3: w }
    );
  }
  drawTitle(t, e, i) {
    const s = this.title,
      o = s.length;
    let r, l, a;
    if (o) {
      const c = Bn(i.rtl, this.x, this.width);
      for (
        t.x = ds(this, i.titleAlign, i),
          e.textAlign = c.textAlign(i.titleAlign),
          e.textBaseline = 'middle',
          r = $t(i.titleFont),
          l = i.titleSpacing,
          e.fillStyle = i.titleColor,
          e.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        e.fillText(s[a], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + l),
          a + 1 === o && (t.y += i.titleMarginBottom - l);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const r = this.labelColors[i],
      l = this.labelPointStyles[i],
      { boxHeight: a, boxWidth: c } = o,
      f = $t(o.bodyFont),
      u = ds(this, 'left', o),
      d = s.x(u),
      h = a < f.lineHeight ? (f.lineHeight - a) / 2 : 0,
      g = e.y + h;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(c, a) / 2,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          borderWidth: 1,
        },
        p = s.leftForLtr(d, c) + c / 2,
        _ = g + a / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Mo(t, m, p, _),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        Mo(t, m, p, _);
    } else {
      (t.lineWidth = At(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const m = s.leftForLtr(d, c),
        p = s.leftForLtr(s.xPlus(d, 1), c - 2),
        _ = Sn(r.borderRadius);
      Object.values(_).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          Ii(t, { x: m, y: g, w: c, h: a, radius: _ }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          Ii(t, { x: p, y: g + 1, w: c - 2, h: a - 2, radius: _ }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, g, c, a),
          t.strokeRect(m, g, c, a),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(p, g + 1, c - 2, a - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: l,
        boxHeight: a,
        boxWidth: c,
        boxPadding: f,
      } = i,
      u = $t(i.bodyFont);
    let d = u.lineHeight,
      h = 0;
    const g = Bn(i.rtl, this.x, this.width),
      m = function (T) {
        e.fillText(T, g.x(t.x + h), t.y + d / 2), (t.y += d + o);
      },
      p = g.textAlign(r);
    let _, y, v, k, w, M, D;
    for (
      e.textAlign = r,
        e.textBaseline = 'middle',
        e.font = u.string,
        t.x = ds(this, p, i),
        e.fillStyle = i.bodyColor,
        Bt(this.beforeBody, m),
        h = l && p !== 'right' ? (r === 'center' ? c / 2 + f : c + 2 + f) : 0,
        k = 0,
        M = s.length;
      k < M;
      ++k
    ) {
      for (
        _ = s[k],
          y = this.labelTextColors[k],
          e.fillStyle = y,
          Bt(_.before, m),
          v = _.lines,
          l && v.length && (this._drawColorBox(e, t, k, g, i), (d = Math.max(u.lineHeight, a))),
          w = 0,
          D = v.length;
        w < D;
        ++w
      )
        m(v[w]), (d = u.lineHeight);
      Bt(_.after, m);
    }
    (h = 0), (d = u.lineHeight), Bt(this.afterBody, m), (t.y -= o);
  }
  drawFooter(t, e, i) {
    const s = this.footer,
      o = s.length;
    let r, l;
    if (o) {
      const a = Bn(i.rtl, this.x, this.width);
      for (
        t.x = ds(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          e.textAlign = a.textAlign(i.footerAlign),
          e.textBaseline = 'middle',
          r = $t(i.footerFont),
          e.fillStyle = i.footerColor,
          e.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        e.fillText(s[l], a.x(t.x), t.y + r.lineHeight / 2), (t.y += r.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: l, y: a } = t,
      { width: c, height: f } = i,
      { topLeft: u, topRight: d, bottomLeft: h, bottomRight: g } = Sn(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(l + u, a),
      r === 'top' && this.drawCaret(t, e, i, s),
      e.lineTo(l + c - d, a),
      e.quadraticCurveTo(l + c, a, l + c, a + d),
      r === 'center' && o === 'right' && this.drawCaret(t, e, i, s),
      e.lineTo(l + c, a + f - g),
      e.quadraticCurveTo(l + c, a + f, l + c - g, a + f),
      r === 'bottom' && this.drawCaret(t, e, i, s),
      e.lineTo(l + h, a + f),
      e.quadraticCurveTo(l, a + f, l, a + f - h),
      r === 'center' && o === 'left' && this.drawCaret(t, e, i, s),
      e.lineTo(l, a + u),
      e.quadraticCurveTo(l, a, l + u, a),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      i = this.$animations,
      s = i && i.x,
      o = i && i.y;
    if (s || o) {
      const r = ki[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const l = (this._size = Ha(this, t)),
        a = Object.assign({}, r, this._size),
        c = Wa(e, t, a),
        f = Na(t, a, c, e);
      (s._to !== f.x || o._to !== f.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = l.width),
        (this.height = l.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, f));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const r = le(e.padding),
      l =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      l &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, s, e),
      df(t, e.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      hf(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active,
      s = t.map(({ datasetIndex: l, index: a }) => {
        const c = this.chart.getDatasetMeta(l);
        if (!c) throw new Error('Cannot find a dataset at index ' + l);
        return { datasetIndex: l, element: c.data[a], index: a };
      }),
      o = !Ps(i, s),
      r = this._positionChanged(s, e);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, e, i),
      l = this._positionChanged(r, t),
      a = e || !Ps(r, o) || l;
    return (
      a &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      a
    );
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options;
    if (t.type === 'mouseout') return [];
    if (!s) return e;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this,
      r = ki[o.position].call(this, t, e);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
it(Lo, 'positioners', ki);
var n2 = {
    id: 'tooltip',
    _element: Lo,
    positioners: ki,
    afterInit(n, t, e) {
      e && (n.tooltip = new Lo({ chart: n, options: e }));
    },
    beforeUpdate(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    reset(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    afterDraw(n) {
      const t = n.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (n.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1) return;
        t.draw(n.ctx), n.notifyPlugins('afterTooltipDraw', e);
      }
    },
    afterEvent(n, t) {
      if (n.tooltip) {
        const e = t.replay;
        n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (n, t) => t.bodyFont.size,
      boxWidth: (n, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: zf,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (n) => n !== 'filter' && n !== 'itemSort' && n !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  },
  i2 = Object.freeze({
    __proto__: null,
    Colors: m_,
    Decimation: y_,
    Filler: H_,
    Legend: U_,
    SubTitle: K_,
    Title: X_,
    Tooltip: n2,
  });
const s2 = (n, t, e, i) => (
  typeof t == 'string'
    ? ((e = n.push(t) - 1), i.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function o2(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1) return s2(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const r2 = (n, t) => (n === null ? null : te(Math.round(n), 0, t));
function Ya(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Oo extends xn {
  constructor(t) {
    super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of e) i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (Et(t)) return null;
    const i = this.getLabels();
    return (
      (e = isFinite(e) && i[e] === t ? e : o2(i, t, _t(e, t), this._addedLabels)),
      r2(e, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === 'ticks' && (t || (i = 0), e || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      i = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let r = t; r <= e; r++) s.push({ value: r });
    return s;
  }
  getLabelForValue(t) {
    return Ya.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
it(Oo, 'id', 'category'), it(Oo, 'defaults', { ticks: { callback: Ya } });
function l2(n, t) {
  const e = [],
    {
      bounds: s,
      step: o,
      min: r,
      max: l,
      precision: a,
      count: c,
      maxTicks: f,
      maxDigits: u,
      includeBounds: d,
    } = n,
    h = o || 1,
    g = f - 1,
    { min: m, max: p } = t,
    _ = !Et(r),
    y = !Et(l),
    v = !Et(c),
    k = (p - m) / (u + 1);
  let w = zl((p - m) / g / h) * h,
    M,
    D,
    T,
    P;
  if (w < 1e-14 && !_ && !y) return [{ value: m }, { value: p }];
  (P = Math.ceil(p / w) - Math.floor(m / w)),
    P > g && (w = zl((P * w) / g / h) * h),
    Et(a) || ((M = Math.pow(10, a)), (w = Math.ceil(w * M) / M)),
    s === 'ticks' ? ((D = Math.floor(m / w) * w), (T = Math.ceil(p / w) * w)) : ((D = m), (T = p)),
    _ && y && o && ep((l - r) / o, w / 1e3)
      ? ((P = Math.round(Math.min((l - r) / w, f))), (w = (l - r) / P), (D = r), (T = l))
      : v
      ? ((D = _ ? r : D), (T = y ? l : T), (P = c - 1), (w = (T - D) / P))
      : ((P = (T - D) / w),
        Ci(P, Math.round(P), w / 1e3) ? (P = Math.round(P)) : (P = Math.ceil(P)));
  const E = Math.max(Hl(w), Hl(D));
  (M = Math.pow(10, Et(a) ? E : a)), (D = Math.round(D * M) / M), (T = Math.round(T * M) / M);
  let O = 0;
  for (
    _ &&
    (d && D !== r
      ? (e.push({ value: r }),
        D < r && O++,
        Ci(Math.round((D + O * w) * M) / M, r, Ua(r, k, n)) && O++)
      : D < r && O++);
    O < P;
    ++O
  ) {
    const H = Math.round((D + O * w) * M) / M;
    if (y && H > l) break;
    e.push({ value: H });
  }
  return (
    y && d && T !== l
      ? e.length && Ci(e[e.length - 1].value, l, Ua(l, k, n))
        ? (e[e.length - 1].value = l)
        : e.push({ value: l })
      : (!y || T === l) && e.push({ value: T }),
    e
  );
}
function Ua(n, t, { horizontal: e, minRotation: i }) {
  const s = ve(i),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    r = 0.75 * t * ('' + n).length;
  return Math.min(t / o, r);
}
class Is extends xn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return Et(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (a) => (s = e ? s : a),
      l = (a) => (o = i ? o : a);
    if (t) {
      const a = Le(s),
        c = Le(o);
      a < 0 && c < 0 ? l(0) : a > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let a = o === 0 ? 1 : Math.abs(o * 0.05);
      l(o + a), t || r(s - a);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: i } = t,
      s;
    return (
      i
        ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`,
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      r = l2(s, o);
    return (
      t.bounds === 'ticks' && Xu(r, this, 'value'),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (i += s);
    }
    (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
  }
  getLabelForValue(t) {
    return Ki(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Fo extends Is {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Ut(t) ? t : 0), (this.max = Ut(e) ? e : 1), this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      i = ve(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
it(Fo, 'id', 'linear'), it(Fo, 'defaults', { ticks: { callback: js.formatters.numeric } });
const Bi = (n) => Math.floor(nn(n)),
  _n = (n, t) => Math.pow(10, Bi(n) + t);
function qa(n) {
  return n / Math.pow(10, Bi(n)) === 1;
}
function Xa(n, t, e) {
  const i = Math.pow(10, e),
    s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function a2(n, t) {
  const e = t - n;
  let i = Bi(e);
  for (; Xa(n, t, i) > 10; ) i++;
  for (; Xa(n, t, i) < 10; ) i--;
  return Math.min(i, Bi(n));
}
function c2(n, { min: t, max: e }) {
  t = me(n.min, t);
  const i = [],
    s = Bi(t);
  let o = a2(t, e),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const l = Math.pow(10, o),
    a = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - a) * r) / r,
    f = Math.floor((t - a) / l / 10) * l * 10;
  let u = Math.floor((c - f) / Math.pow(10, o)),
    d = me(n.min, Math.round((a + f + u * Math.pow(10, o)) * r) / r);
  for (; d < e; )
    i.push({ value: d, major: qa(d), significand: u }),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (o++, (u = 2), (r = o >= 0 ? 1 : r)),
      (d = Math.round((a + f + u * Math.pow(10, o)) * r) / r);
  const h = me(n.max, d);
  return i.push({ value: h, major: qa(h), significand: u }), i;
}
class Eo extends xn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const i = Is.prototype.parse.apply(this, [t, e]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return Ut(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Ut(t) ? Math.max(0, t) : null),
      (this.max = Ut(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Ut(this._userMin) &&
        (this.min = t === _n(this.min, 0) ? _n(this.min, -1) : _n(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min,
      s = this.max;
    const o = (l) => (i = t ? i : l),
      r = (l) => (s = e ? s : l);
    i === s && (i <= 0 ? (o(1), r(10)) : (o(_n(i, -1)), r(_n(s, 1)))),
      i <= 0 && o(_n(s, -1)),
      s <= 0 && r(_n(i, 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      i = c2(e, this);
    return (
      t.bounds === 'ticks' && Xu(i, this, 'value'),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : Ki(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), (this._startValue = nn(t)), (this._valueRange = nn(this.max) - nn(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (nn(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
it(Eo, 'id', 'logarithmic'),
  it(Eo, 'defaults', { ticks: { callback: js.formatters.logarithmic, major: { enabled: !0 } } });
function Io(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = le(t.backdropPadding);
    return _t(t.font && t.font.size, Xt.font.size) + e.height;
  }
  return 0;
}
function u2(n, t, e) {
  return (e = Nt(e) ? e : [e]), { w: _p(n, t.string, e), h: e.length * t.lineHeight };
}
function Ka(n, t, e, i, s) {
  return n === i || n === s
    ? { start: t - e / 2, end: t + e / 2 }
    : n < i || n > s
    ? { start: t - e, end: t }
    : { start: t, end: t + e };
}
function f2(n) {
  const t = {
      l: n.left + n._padding.left,
      r: n.right - n._padding.right,
      t: n.top + n._padding.top,
      b: n.bottom - n._padding.bottom,
    },
    e = Object.assign({}, t),
    i = [],
    s = [],
    o = n._pointLabels.length,
    r = n.options.pointLabels,
    l = r.centerPointLabels ? jt / o : 0;
  for (let a = 0; a < o; a++) {
    const c = r.setContext(n.getPointLabelContext(a));
    s[a] = c.padding;
    const f = n.getPointPosition(a, n.drawingArea + s[a], l),
      u = $t(c.font),
      d = u2(n.ctx, u, n._pointLabels[a]);
    i[a] = d;
    const h = pe(n.getIndexAngle(a) + l),
      g = Math.round(Ko(h)),
      m = Ka(g, f.x, d.w, 0, 180),
      p = Ka(g, f.y, d.h, 90, 270);
    d2(e, t, h, m, p);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), (n._pointLabelItems = m2(n, i, s));
}
function d2(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)),
    r = Math.abs(Math.cos(e));
  let l = 0,
    a = 0;
  i.start < t.l
    ? ((l = (t.l - i.start) / o), (n.l = Math.min(n.l, t.l - l)))
    : i.end > t.r && ((l = (i.end - t.r) / o), (n.r = Math.max(n.r, t.r + l))),
    s.start < t.t
      ? ((a = (t.t - s.start) / r), (n.t = Math.min(n.t, t.t - a)))
      : s.end > t.b && ((a = (s.end - t.b) / r), (n.b = Math.max(n.b, t.b + a)));
}
function h2(n, t, e) {
  const i = n.drawingArea,
    { extra: s, additionalAngle: o, padding: r, size: l } = e,
    a = n.getPointPosition(t, i + s + r, o),
    c = Math.round(Ko(pe(a.angle + qt))),
    f = _2(a.y, l.h, c),
    u = p2(c),
    d = b2(a.x, l.w, u);
  return {
    visible: !0,
    x: a.x,
    y: f,
    textAlign: u,
    left: d,
    top: f,
    right: d + l.w,
    bottom: f + l.h,
  };
}
function g2(n, t) {
  if (!t) return !0;
  const { left: e, top: i, right: s, bottom: o } = n;
  return !(
    Ge({ x: e, y: i }, t) ||
    Ge({ x: e, y: o }, t) ||
    Ge({ x: s, y: i }, t) ||
    Ge({ x: s, y: o }, t)
  );
}
function m2(n, t, e) {
  const i = [],
    s = n._pointLabels.length,
    o = n.options,
    { centerPointLabels: r, display: l } = o.pointLabels,
    a = { extra: Io(o) / 2, additionalAngle: r ? jt / s : 0 };
  let c;
  for (let f = 0; f < s; f++) {
    (a.padding = e[f]), (a.size = t[f]);
    const u = h2(n, f, a);
    i.push(u), l === 'auto' && ((u.visible = g2(u, c)), u.visible && (c = u));
  }
  return i;
}
function p2(n) {
  return n === 0 || n === 180 ? 'center' : n < 180 ? 'left' : 'right';
}
function b2(n, t, e) {
  return e === 'right' ? (n -= t) : e === 'center' && (n -= t / 2), n;
}
function _2(n, t, e) {
  return e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n;
}
function y2(n, t, e) {
  const { left: i, top: s, right: o, bottom: r } = e,
    { backdropColor: l } = t;
  if (!Et(l)) {
    const a = Sn(t.borderRadius),
      c = le(t.backdropPadding);
    n.fillStyle = l;
    const f = i - c.left,
      u = s - c.top,
      d = o - i + c.width,
      h = r - s + c.height;
    Object.values(a).some((g) => g !== 0)
      ? (n.beginPath(), Ii(n, { x: f, y: u, w: d, h, radius: a }), n.fill())
      : n.fillRect(f, u, d, h);
  }
}
function k2(n, t) {
  const {
    ctx: e,
    options: { pointLabels: i },
  } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = n._pointLabelItems[s];
    if (!o.visible) continue;
    const r = i.setContext(n.getPointLabelContext(s));
    y2(e, r, o);
    const l = $t(r.font),
      { x: a, y: c, textAlign: f } = o;
    Tn(e, n._pointLabels[s], a, c + l.lineHeight / 2, l, {
      color: r.color,
      textAlign: f,
      textBaseline: 'middle',
    });
  }
}
function Hf(n, t, e, i) {
  const { ctx: s } = n;
  if (e) s.arc(n.xCenter, n.yCenter, t, 0, Vt);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++) (o = n.getPointPosition(r, t)), s.lineTo(o.x, o.y);
  }
}
function v2(n, t, e, i, s) {
  const o = n.ctx,
    r = t.circular,
    { color: l, lineWidth: a } = t;
  (!r && !i) ||
    !l ||
    !a ||
    e < 0 ||
    (o.save(),
    (o.strokeStyle = l),
    (o.lineWidth = a),
    o.setLineDash(s.dash),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    Hf(n, e, r, i),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function w2(n, t, e) {
  return dn(n, { label: e, index: t, type: 'pointLabel' });
}
class vi extends Is {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = le(Io(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = Ut(t) && !isNaN(t) ? t : 0),
      (this.max = Ut(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Io(this.options));
  }
  generateTickLabels(t) {
    Is.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, i) => {
          const s = Ht(this.options.pointLabels.callback, [e, i], this);
          return s || s === 0 ? s : '';
        })
        .filter((e, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? f2(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)));
  }
  getIndexAngle(t) {
    const e = Vt / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return pe(t * e + ve(i));
  }
  getDistanceFromCenterForValue(t) {
    if (Et(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (Et(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return w2(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - qt + i;
    return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: i, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        Hf(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: i, grid: s, border: o } = e,
      r = this._pointLabels.length;
    let l, a, c;
    if (
      (e.pointLabels.display && k2(this, r),
      s.display &&
        this.ticks.forEach((f, u) => {
          if (u !== 0) {
            a = this.getDistanceFromCenterForValue(f.value);
            const d = this.getContext(u),
              h = s.setContext(d),
              g = o.setContext(d);
            v2(this, h, a, r, g);
          }
        }),
      i.display)
    ) {
      for (t.save(), l = r - 1; l >= 0; l--) {
        const f = i.setContext(this.getPointLabelContext(l)),
          { color: u, lineWidth: d } = f;
        !d ||
          !u ||
          ((t.lineWidth = d),
          (t.strokeStyle = u),
          t.setLineDash(f.borderDash),
          (t.lineDashOffset = f.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
          (c = this.getPointPosition(l, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      i = e.ticks;
    if (!i.display) return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((l, a) => {
        if (a === 0 && !e.reverse) return;
        const c = i.setContext(this.getContext(a)),
          f = $t(c.font);
        if (((o = this.getDistanceFromCenterForValue(this.ticks[a].value)), c.showLabelBackdrop)) {
          (t.font = f.string), (r = t.measureText(l.label).width), (t.fillStyle = c.backdropColor);
          const u = le(c.backdropPadding);
          t.fillRect(-r / 2 - u.left, -o - f.size / 2 - u.top, r + u.width, f.size + u.height);
        }
        Tn(t, l.label, 0, -o, f, { color: c.color });
      }),
      t.restore();
  }
  drawTitle() {}
}
it(vi, 'id', 'radialLinear'),
  it(vi, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: js.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  it(vi, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  it(vi, 'descriptors', { angleLines: { _fallback: 'grid' } });
const Xs = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  de = Object.keys(Xs);
function S2(n, t) {
  return n - t;
}
function Ga(n, t) {
  if (Et(t)) return null;
  const e = n._adapter,
    { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let r = t;
  return (
    typeof i == 'function' && (r = i(r)),
    Ut(r) || (r = typeof i == 'string' ? e.parse(r, i) : e.parse(r)),
    r === null
      ? null
      : (s &&
          (r = s === 'week' && (Un(o) || o === !0) ? e.startOf(r, 'isoWeek', o) : e.startOf(r, s)),
        +r)
  );
}
function Za(n, t, e, i) {
  const s = de.length;
  for (let o = de.indexOf(n); o < s - 1; ++o) {
    const r = Xs[de[o]],
      l = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (l * r.size)) <= i) return de[o];
  }
  return de[s - 1];
}
function M2(n, t, e, i, s) {
  for (let o = de.length - 1; o >= de.indexOf(e); o--) {
    const r = de[o];
    if (Xs[r].common && n._adapter.diff(s, i, r) >= t - 1) return r;
  }
  return de[e ? de.indexOf(e) : 0];
}
function D2(n) {
  for (let t = de.indexOf(n) + 1, e = de.length; t < e; ++t) if (Xs[de[t]].common) return de[t];
}
function Ja(n, t, e) {
  if (!e) n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = Go(e, t),
      o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function C2(n, t, e, i) {
  const s = n._adapter,
    o = +s.startOf(t[0].value, i),
    r = t[t.length - 1].value;
  let l, a;
  for (l = o; l <= r; l = +s.add(l, 1, i)) (a = e[l]), a >= 0 && (t[a].major = !0);
  return t;
}
function Qa(n, t, e) {
  const i = [],
    s = {},
    o = t.length;
  let r, l;
  for (r = 0; r < o; ++r) (l = t[r]), (s[l] = r), i.push({ value: l, major: !1 });
  return o === 0 || !e ? i : C2(n, i, s, e);
}
class zi extends xn {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new Eb._date(t.adapters.date));
    s.init(e),
      Di(i.displayFormats, s.formats()),
      (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : Ga(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      i = t.time.unit || 'day';
    let { min: s, max: o, minDefined: r, maxDefined: l } = this.getUserBounds();
    function a(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !l && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !l) &&
      (a(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && a(this.getMinMax(!1))),
      (s = Ut(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
      (o = Ut(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      i = t.ticks,
      s = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    t.bounds === 'ticks' &&
      s.length &&
      ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = this.max,
      l = op(s, o, r);
    return (
      (this._unit =
        e.unit ||
        (i.autoSkip
          ? Za(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : M2(this, l.length, e.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : D2(this._unit)),
      this.initOffsets(s),
      t.reverse && l.reverse(),
      Qa(this, l, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0,
      i = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1 ? (e = 1 - s) : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (i = o) : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (e = te(e, 0, r)),
      (i = te(i, 0, r)),
      (this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      i = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || Za(o.minUnit, e, i, this._getLabelCapacity(e)),
      l = _t(s.ticks.stepSize, 1),
      a = r === 'week' ? o.isoWeekday : !1,
      c = Un(a) || a === !0,
      f = {};
    let u = e,
      d,
      h;
    if (
      (c && (u = +t.startOf(u, 'isoWeek', a)),
      (u = +t.startOf(u, c ? 'day' : r)),
      t.diff(i, e, r) > 1e5 * l)
    )
      throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + l + ' ' + r);
    const g = s.ticks.source === 'data' && this.getDataTimestamps();
    for (d = u, h = 0; d < i; d = +t.add(d, l, r), h++) Ja(f, d, g);
    return (
      (d === i || s.bounds === 'ticks' || h === 1) && Ja(f, d, g),
      Object.keys(f)
        .sort((m, p) => m - p)
        .map((m) => +m)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return Ht(r, [t, e, i], this);
    const l = o.time.displayFormats,
      a = this._unit,
      c = this._majorUnit,
      f = a && l[a],
      u = c && l[c],
      d = i[e],
      h = c && u && d && d.major;
    return this._adapter.format(t, s || (h ? u : f));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = ve(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      l = this._resolveTickFontOptions(0).size;
    return { w: i * o + l * r, h: i * r + l * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      i = e.displayFormats,
      s = i[e.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, Qa(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      l = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return l > 0 ? l : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      i;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (e = 0, i = s.length; e < i; ++e) t = t.concat(s[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e) t.push(Ga(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Zu(t.sort(S2));
  }
}
it(zi, 'id', 'time'),
  it(zi, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  });
function hs(n, t, e) {
  let i = 0,
    s = n.length - 1,
    o,
    r,
    l,
    a;
  e
    ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = Ke(n, 'pos', t)),
      ({ pos: o, time: l } = n[i]),
      ({ pos: r, time: a } = n[s]))
    : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = Ke(n, 'time', t)),
      ({ time: o, pos: l } = n[i]),
      ({ time: r, pos: a } = n[s]));
  const c = r - o;
  return c ? l + ((a - l) * (t - o)) / c : l;
}
class Ro extends zi {
  constructor(t) {
    super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = hs(e, this.min)),
      (this._tableRange = hs(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this,
      s = [],
      o = [];
    let r, l, a, c, f;
    for (r = 0, l = t.length; r < l; ++r) (c = t[r]), c >= e && c <= i && s.push(c);
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (r = 0, l = s.length; r < l; ++r)
      (f = s[r + 1]),
        (a = s[r - 1]),
        (c = s[r]),
        Math.round((f + a) / 2) !== c && o.push({ time: c, pos: r / (l - 1) });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      e.length && i.length ? (t = this.normalize(e.concat(i))) : (t = e.length ? e : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (hs(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end;
    return hs(this._table, i * this._tableRange + this._minPos, !0);
  }
}
it(Ro, 'id', 'timeseries'), it(Ro, 'defaults', zi.defaults);
var T2 = Object.freeze({
  __proto__: null,
  CategoryScale: Oo,
  LinearScale: Fo,
  LogarithmicScale: Eo,
  RadialLinearScale: vi,
  TimeScale: zi,
  TimeSeriesScale: Ro,
});
const P2 = [Fb, c_, i2, T2];
Ye.register(...P2);
const rr = ae();
class Wf {
  constructor(t, e) {
    it(this, 'label');
    it(this, 'borderColor');
    it(this, 'data', []);
    it(this, 'borderWidth', 1);
    it(this, 'tension', 0.1);
    (this.label = t), (this.borderColor = e);
  }
}
const Nf = {
    addedWordsAmount: 'red',
    deletedWordsAmount: 'black',
    totalWordsAmount: 'orange',
    wordTranslation: 'pink',
    averagePracticeSuccess: 'teal',
    successfulPracticeCount: 'deepskyblue',
    unsuccessfulPracticeCount: 'grey',
    wordOriginPracticeAmount: 'maroon',
    wordTranslationPracticeAmount: 'green',
    wordTotalPracticeAmount: 'blue',
  },
  xe = [
    'addedWordsAmount',
    'deletedWordsAmount',
    'totalWordsAmount',
    'averagePracticeSuccess',
    'successfulPracticeCount',
    'unsuccessfulPracticeCount',
    'wordOriginPracticeAmount',
    'wordTranslationPracticeAmount',
    'wordTotalPracticeAmount',
  ],
  x2 = [xe[0], xe[1], xe[2]],
  A2 = [xe[3], xe[4], xe[5], xe[6], xe[7], xe[8]],
  $a = { all: xe, words: x2, practice: A2 },
  L2 = ({ year: n, ...t }, e) => {
    const i = new Map();
    return (
      e.forEach((s) => {
        i.set(s, new Wf(s, Nf[s]));
      }),
      Object.values(t).forEach((s) => {
        e.forEach((o) => {
          i.get(o).data.push(s[o]);
        });
      }),
      [...i.values()]
    );
  },
  O2 = (n, t) => {
    const e = new Map();
    t.forEach((s) => {
      e.set(s, new Wf(s, Nf[s]));
    });
    const i = new Map();
    return (
      n.forEach(({ year: s, ...o }) => {
        Object.values(o).forEach((r) => {
          t.forEach((l) => {
            i.set(l, i.get(l) || 0 + r[l]);
          });
        }),
          t.forEach((r) => {
            e.get(r).data.push(i.get(r)), i.set(r, 0);
          });
      }),
      [...e.values()]
    );
  },
  F2 = (n, t, e) => (t === 'all' ? O2(e, $a[n]) : L2(e, $a[n])),
  E2 = () => (rr.set([...Ai.value.keys()]), [...Ai.value.values()]),
  I2 = (n) => (rr.set(Wd), Ai.value.get(n)),
  R2 = (n) => (n === 'all' ? E2() : I2(n)),
  tc = ['all', 'words', 'practice'],
  Bo = ae('words'),
  zo = ae(String(new Date().getFullYear())),
  ec = wu([zo, Bo], ([n, t]) => {
    let e, i;
    return (e = R2(n)), (i = F2(t, n, e)), i;
  });
function nc(n, t, e) {
  const i = n.slice();
  return (i[12] = t[e]), i;
}
function ic(n, t, e) {
  const i = n.slice();
  return (i[15] = t[e]), i;
}
function sc(n) {
  let t,
    e = n[15] + '',
    i,
    s;
  return {
    c() {
      (t = C('option')), (i = X(e)), (t.__value = s = n[15]), (t.value = t.__value);
    },
    m(o, r) {
      x(o, t, r), S(t, i);
    },
    p(o, r) {
      r & 4 && e !== (e = o[15] + '') && mt(i, e),
        r & 4 && s !== (s = o[15]) && ((t.__value = s), (t.value = t.__value));
    },
    d(o) {
      o && A(t);
    },
  };
}
function oc(n) {
  let t,
    e = n[12] + '',
    i;
  return {
    c() {
      (t = C('option')), (i = X(e)), (t.__value = n[12]), (t.value = t.__value);
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p: ct,
    d(s) {
      s && A(t);
    },
  };
}
function B2(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h = [...n[2].keys()],
    g = [];
  for (let _ = 0; _ < h.length; _ += 1) g[_] = sc(ic(n, h, _));
  let m = tc,
    p = [];
  for (let _ = 0; _ < m.length; _ += 1) p[_] = oc(nc(n, m, _));
  return {
    c() {
      (t = C('div')), (e = C('select')), (i = C('option')), (i.textContent = 'all time');
      for (let _ = 0; _ < g.length; _ += 1) g[_].c();
      (s = B()), (o = C('select'));
      for (let _ = 0; _ < p.length; _ += 1) p[_].c();
      (r = B()),
        (l = C('div')),
        (a = C('canvas')),
        (i.__value = 'all'),
        (i.value = i.__value),
        b(
          e,
          'class',
          'select mt-5 w-1/2 max-w-md rounded-md border-2 border-orange-300 bg-orange-200 text-orange-900 focus:border-orange-500',
        ),
        n[1] === void 0 && pt(() => n[4].call(e)),
        b(
          o,
          'class',
          'select w-1/2 max-w-md rounded-md border-2 border-orange-300 bg-orange-200 text-orange-900 focus:border-orange-500',
        ),
        n[3] === void 0 && pt(() => n[5].call(o)),
        b(a, 'class', 'h-full w-full'),
        b(l, 'class', 'h-[calc(100%-10rem)] w-90% flex flex-col justify-center items-center'),
        b(t, 'class', 'absolute flex flex-col justify-center items-center gap-5 h-screen w-screen');
    },
    m(_, y) {
      x(_, t, y), S(t, e), S(e, i);
      for (let v = 0; v < g.length; v += 1) g[v] && g[v].m(e, null);
      En(e, n[1], !0), S(t, s), S(t, o);
      for (let v = 0; v < p.length; v += 1) p[v] && p[v].m(o, null);
      En(o, n[3], !0),
        S(t, r),
        S(t, l),
        S(l, a),
        n[6](a),
        (f = !0),
        u || ((d = [R(e, 'change', n[4]), R(o, 'change', n[5])]), (u = !0));
    },
    p(_, [y]) {
      if (y & 4) {
        h = [..._[2].keys()];
        let v;
        for (v = 0; v < h.length; v += 1) {
          const k = ic(_, h, v);
          g[v] ? g[v].p(k, y) : ((g[v] = sc(k)), g[v].c(), g[v].m(e, null));
        }
        for (; v < g.length; v += 1) g[v].d(1);
        g.length = h.length;
      }
      if ((y & 6 && En(e, _[1]), y & 0)) {
        m = tc;
        let v;
        for (v = 0; v < m.length; v += 1) {
          const k = nc(_, m, v);
          p[v] ? p[v].p(k, y) : ((p[v] = oc(k)), p[v].c(), p[v].m(o, null));
        }
        for (; v < p.length; v += 1) p[v].d(1);
        p.length = m.length;
      }
      y & 8 && En(o, _[3]);
    },
    i(_) {
      f ||
        (pt(() => {
          f && (c || (c = ot(t, bt, {}, !0)), c.run(1));
        }),
        (f = !0));
    },
    o(_) {
      c || (c = ot(t, bt, {}, !1)), c.run(0), (f = !1);
    },
    d(_) {
      _ && A(t), oe(g, _), oe(p, _), n[6](null), _ && c && c.end(), (u = !1), Pt(d);
    },
  };
}
function z2(n, t, e) {
  let i, s, o, r, l;
  Dt(n, ec, (m) => e(9, (i = m))),
    Dt(n, rr, (m) => e(10, (s = m))),
    Dt(n, zo, (m) => e(1, (o = m))),
    Dt(n, Ai, (m) => e(2, (r = m))),
    Dt(n, Bo, (m) => e(3, (l = m)));
  let a, c, f;
  const u = (m) => {
    (f.data.labels = s), (f.data.datasets = m), f.update();
  };
  ze(
    () => (
      (c = a.getContext('2d')),
      (f = new Ye(c, {
        type: 'line',
        data: { labels: s, datasets: i },
        options: { plugins: { legend: { labels: { usePointStyle: !0 } } } },
      })),
      ec.subscribe(u)
    ),
  );
  function d() {
    (o = mo(this)), zo.set(o);
  }
  function h() {
    (l = mo(this)), Bo.set(l);
  }
  function g(m) {
    dt[m ? 'unshift' : 'push'](() => {
      (a = m), e(0, a);
    });
  }
  return [a, o, r, l, d, h, g];
}
class H2 extends lt {
  constructor(t) {
    super(), at(this, t, z2, B2, rt, {});
  }
}
function W2(n) {
  let t, e, i, s, o, r, l, a, c, f;
  function u(h) {
    n[1](h);
  }
  let d = {
    name: 'passivePractice',
    class: 'bg-gray-400  hover:!brightness-110 focus:brightness-110',
    active: 'bg-yellow-500',
  };
  return (
    n[0].startWithSystem !== void 0 && (d.checked = n[0].startWithSystem),
    (r = new ei({ props: d })),
    dt.push(() => Ct(r, 'checked', u)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (e.textContent = 'Start with system'),
          (i = B()),
          (s = C('span')),
          (s.textContent = 'off'),
          (o = B()),
          Z(r.$$.fragment),
          (a = B()),
          (c = C('span')),
          (c.textContent = 'On'),
          b(e, 'class', 'text-xs bg-white text-yellow-500 p-2 rounded-md cursor-default'),
          b(s, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-yellow-500'),
          st(s, 'opacity-50', n[0].startWithSystem),
          b(c, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-yellow-500'),
          st(c, 'opacity-50', !n[0].startWithSystem),
          b(t, 'class', 'flex gap-2 flex-wrap justify-center');
      },
      m(h, g) {
        x(h, t, g), S(t, e), S(t, i), S(t, s), S(t, o), J(r, t, null), S(t, a), S(t, c), (f = !0);
      },
      p(h, [g]) {
        (!f || g & 1) && st(s, 'opacity-50', h[0].startWithSystem);
        const m = {};
        !l && g & 1 && ((l = !0), (m.checked = h[0].startWithSystem), Tt(() => (l = !1))),
          r.$set(m),
          (!f || g & 1) && st(c, 'opacity-50', !h[0].startWithSystem);
      },
      i(h) {
        f || (L(r.$$.fragment, h), (f = !0));
      },
      o(h) {
        F(r.$$.fragment, h), (f = !1);
      },
      d(h) {
        h && A(t), Q(r);
      },
    }
  );
}
function N2(n, t, e) {
  let i;
  Dt(n, Ts, (o) => e(0, (i = o)));
  function s(o) {
    n.$$.not_equal(i.startWithSystem, o) && ((i.startWithSystem = o), Ts.set(i));
  }
  return [i, s];
}
class V2 extends lt {
  constructor(t) {
    super(), at(this, t, N2, W2, rt, {});
  }
}
function j2(n) {
  let t, e, i, s, o, r, l, a, c, f;
  function u(h) {
    n[1](h);
  }
  let d = {
    name: 'passivePractice',
    class: 'bg-gray-400  hover:!brightness-110 focus:brightness-110',
    active: 'bg-yellow-500',
  };
  return (
    n[0].startAppAsMinimized !== void 0 && (d.checked = n[0].startAppAsMinimized),
    (r = new ei({ props: d })),
    dt.push(() => Ct(r, 'checked', u)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (e.textContent = 'Start app as minimized'),
          (i = B()),
          (s = C('span')),
          (s.textContent = 'off'),
          (o = B()),
          Z(r.$$.fragment),
          (a = B()),
          (c = C('span')),
          (c.textContent = 'On'),
          b(e, 'class', 'text-xs bg-white text-yellow-500 p-2 rounded-md cursor-default'),
          b(s, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-yellow-500'),
          st(s, 'opacity-50', n[0].startAppAsMinimized),
          b(c, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-yellow-500'),
          st(c, 'opacity-50', !n[0].startAppAsMinimized),
          b(t, 'class', 'flex gap-2 flex-wrap justify-center');
      },
      m(h, g) {
        x(h, t, g), S(t, e), S(t, i), S(t, s), S(t, o), J(r, t, null), S(t, a), S(t, c), (f = !0);
      },
      p(h, [g]) {
        (!f || g & 1) && st(s, 'opacity-50', h[0].startAppAsMinimized);
        const m = {};
        !l && g & 1 && ((l = !0), (m.checked = h[0].startAppAsMinimized), Tt(() => (l = !1))),
          r.$set(m),
          (!f || g & 1) && st(c, 'opacity-50', !h[0].startAppAsMinimized);
      },
      i(h) {
        f || (L(r.$$.fragment, h), (f = !0));
      },
      o(h) {
        F(r.$$.fragment, h), (f = !1);
      },
      d(h) {
        h && A(t), Q(r);
      },
    }
  );
}
function Y2(n, t, e) {
  let i;
  Dt(n, Ts, (o) => e(0, (i = o)));
  function s(o) {
    n.$$.not_equal(i.startAppAsMinimized, o) && ((i.startAppAsMinimized = o), Ts.set(i));
  }
  return [i, s];
}
class U2 extends lt {
  constructor(t) {
    super(), at(this, t, Y2, j2, rt, {});
  }
}
function q2(n) {
  let t, e, i, s, o, r;
  return (
    (e = new V2({})),
    (s = new U2({})),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (i = B()),
          Z(s.$$.fragment),
          b(
            t,
            'class',
            'h-[calc(100%-85px)] w-full flex flex-col justify-evenly items-center text-center gap-5 absolute',
          );
      },
      m(l, a) {
        x(l, t, a), J(e, t, null), S(t, i), J(s, t, null), (r = !0);
      },
      p: ct,
      i(l) {
        r ||
          (L(e.$$.fragment, l),
          L(s.$$.fragment, l),
          pt(() => {
            r && (o || (o = ot(t, bt, {}, !0)), o.run(1));
          }),
          (r = !0));
      },
      o(l) {
        F(e.$$.fragment, l), F(s.$$.fragment, l), o || (o = ot(t, bt, {}, !1)), o.run(0), (r = !1);
      },
      d(l) {
        l && A(t), Q(e), Q(s), l && o && o.end();
      },
    }
  );
}
class X2 extends lt {
  constructor(t) {
    super(), at(this, t, null, q2, rt, {});
  }
}
const ni = ({
    backdropColor: n,
    backdropClasses: t = `!bg-${n}-200 !bg-opacity-50 backdrop-blur-sm`,
    title: e = 'Confirm to proceed',
    body: i,
    color: s,
    okBtnText: o,
    noBtnText: r,
    callback: l,
  }) => ({
    type: 'component',
    component: 'confirm',
    backdropClasses: t,
    meta: { title: e, body: i, color: s, okBtnText: o, noBtnText: r, callback: l },
  }),
  Vf = ae(),
  rc = {
    id: 'loading',
    bgDrawer: 'text-white',
    bgBackdrop: 'bg-opacity-50 !z-30',
    width: 'w-full',
    height: 'h-full',
    padding: '',
    rounded: 'rounded-md',
  },
  Hi = (n) => {
    Vf.set({ progressBarBgColor: n.progressBarBgColor }),
      Nd(),
      qe.open({ ...rc, bgBackdrop: `${rc.bgBackdrop} bg-${n.bgBackdropColor}-500` });
  },
  Wi = () => {
    qe.close(), Vd();
  },
  lr = { bgBackdropColor: 'red', progressBarBgColor: 'red' },
  jf = async () => {
    re.clear(), await Dn.get('onDictionaryClear')();
  },
  K2 = async (n) => {
    n && (Hi(lr), await jf(), Wi());
  },
  G2 = () => {
    Wt.trigger(
      ni({
        backdropColor: 'red',
        color: 'red',
        body: "All words in the dictionary and their data (e.g. practice) will be <i class='px-1 bg-white text-red-700 rounded-md'>deleted</i><br>This action doesn't affects app statistic",
        callback: K2,
      }),
    );
  },
  Yf = async () => {
    const n = jd();
    Ai.reInit(n), await Dn.get('onStatisticClear')(), await Dn.get('initStatisticData')(n[0]);
  },
  Z2 = async (n) => {
    n && (Hi(lr), await Yf(), Wi());
  },
  J2 = () => {
    Wt.trigger(
      ni({
        backdropColor: 'red',
        color: 'red',
        body: "All statistic data (e.g. number of practice per month etc.) will be <i class='px-1 bg-white text-red-700 rounded-md'>deleted</i>",
        callback: Z2,
      }),
    );
  },
  Q2 = async () => {
    const n = Yd();
    Ud.reInit(n),
      Su.reInit(n.practice.passive),
      Mu.reInit(n.practice.active),
      await Dn.get('onAppSettingsClear')(),
      await Dn.get('initAppSettingsData')(n);
  },
  $2 = async (n) => {
    n && (Hi(lr), await jf(), await Yf(), await Q2(), Wi());
  },
  ty = () => {
    Wt.trigger(
      ni({
        backdropColor: 'red',
        color: 'red',
        body: "All app data (e.g. dictionary, statistic etc.) will be <i class='px-1 bg-white text-red-700 rounded-md'>deleted</i>",
        callback: $2,
      }),
    );
  };
function ey(n) {
  let t, e, i, s, o, r, l, a, c, f, u;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (e.textContent = 'Reset'),
        (i = B()),
        (s = C('div')),
        (o = C('button')),
        (o.textContent = 'Dictionary reset'),
        (r = B()),
        (l = C('button')),
        (l.textContent = 'Statistic reset'),
        (a = B()),
        (c = C('button')),
        (c.textContent = 'App reset'),
        b(e, 'class', 'border-red-400 border-2 rounded-md p-2 cursor-default select-none'),
        b(o, 'class', 'btn bg-red-300 rounded-md grow focus:brightness-110'),
        b(l, 'class', 'btn bg-red-300 rounded-md grow focus:brightness-110'),
        b(c, 'class', 'btn bg-red-300 rounded-md grow focus:brightness-110'),
        b(s, 'class', 'flex gap-2 pt-2 flex-wrap justify-center'),
        b(t, 'class', 'max-w-lg p-2 border-2 rounded-md bg-red-200 bg-opacity-50 text-red-900');
    },
    m(d, h) {
      x(d, t, h),
        S(t, e),
        S(t, i),
        S(t, s),
        S(s, o),
        S(s, r),
        S(s, l),
        S(s, a),
        S(s, c),
        f || ((u = [R(o, 'click', G2), R(l, 'click', J2), R(c, 'click', ty)]), (f = !0));
    },
    p: ct,
    i: ct,
    o: ct,
    d(d) {
      d && A(t), (f = !1), Pt(u);
    },
  };
}
class ny extends lt {
  constructor(t) {
    super(), at(this, t, null, ey, rt, {});
  }
}
const iy = async () => {
    const n = await Dn.get('exportAppDBData')(),
      t = document.createElement('a');
    (t.download = 'dictionaryData.dic'), (t.href = URL.createObjectURL(n)), t.click();
  },
  lc = '/assets/file-remove-white-100c2f5a.svg',
  sy = '/assets/file-smile-white-4a5bd134.svg';
function oy(n) {
  let t, e, i, s, o;
  return {
    c() {
      (t = C('div')),
        (i = B()),
        (s = C('div')),
        (o = X(n[2])),
        b(t, 'class', 'h-10 w-10 m-auto bg-emerald-500'),
        b(t, 'style', (e = Re(n[1])));
    },
    m(r, l) {
      x(r, t, l), x(r, i, l), x(r, s, l), S(s, o);
    },
    p(r, l) {
      l & 2 && e !== (e = Re(r[1])) && b(t, 'style', e), l & 4 && mt(o, r[2]);
    },
    d(r) {
      r && A(t), r && A(i), r && A(s);
    },
  };
}
function ry(n) {
  let t;
  return {
    c() {
      t = X('Choose a file | drag & drop');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function ly(n) {
  let t;
  return {
    c() {
      (t = C('div')),
        (t.textContent = 'only DIC files allowed'),
        st(t, 'animate-pulse', n[3]),
        st(t, 'text-red-700', n[3]);
    },
    m(e, i) {
      x(e, t, i);
    },
    p(e, i) {
      i & 8 && st(t, 'animate-pulse', e[3]), i & 8 && st(t, 'text-red-700', e[3]);
    },
    d(e) {
      e && A(t);
    },
  };
}
function ay(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m;
  function p(y) {
    n[11](y);
  }
  let _ = {
    name: 'importData',
    rounded: 'rounded-md',
    class: n[0] && 'bg-emerald-300',
    accept: '.dic',
    $$slots: { meta: [ly], message: [ry], lead: [oy] },
    $$scope: { ctx: n },
  };
  return (
    n[5] !== void 0 && (_.files = n[5]),
    (o = new Dh({ props: _ })),
    dt.push(() => Ct(o, 'files', p)),
    o.$on('change', n[8]),
    o.$on('dragenter', n[6]),
    o.$on('dragleave', n[7]),
    o.$on('drop', n[7]),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (e.textContent = 'Transfer'),
          (i = B()),
          (s = C('div')),
          Z(o.$$.fragment),
          (l = B()),
          (a = C('div')),
          (c = C('button')),
          (f = X('Import app data')),
          (u = B()),
          (d = C('button')),
          (d.textContent = 'Export app data'),
          b(
            e,
            'class',
            'w-full border-emerald-400 border-2 rounded-md p-2 cursor-default select-none',
          ),
          (c.disabled = n[4]),
          b(c, 'class', 'btn grow bg-emerald-300 text-emerald-900 rounded-md focus:brightness-110'),
          b(d, 'class', 'btn grow bg-emerald-300 text-emerald-900 rounded-md focus:brightness-110'),
          b(a, 'class', 'flex flex-col gap-2 w-1/2'),
          b(s, 'class', 'flex gap-2 mt-2'),
          b(
            t,
            'class',
            'max-w-lg p-2 border-2 rounded-md bg-emerald-200 bg-opacity-50 text-emerald-900',
          );
      },
      m(y, v) {
        x(y, t, v),
          S(t, e),
          S(t, i),
          S(t, s),
          J(o, s, null),
          S(s, l),
          S(s, a),
          S(a, c),
          S(c, f),
          S(a, u),
          S(a, d),
          (h = !0),
          g || ((m = [R(c, 'click', n[10]), R(d, 'click', n[9])]), (g = !0));
      },
      p(y, [v]) {
        const k = {};
        v & 1 && (k.class = y[0] && 'bg-emerald-300'),
          v & 32782 && (k.$$scope = { dirty: v, ctx: y }),
          !r && v & 32 && ((r = !0), (k.files = y[5]), Tt(() => (r = !1))),
          o.$set(k),
          (!h || v & 16) && (c.disabled = y[4]);
      },
      i(y) {
        h || (L(o.$$.fragment, y), (h = !0));
      },
      o(y) {
        F(o.$$.fragment, y), (h = !1);
      },
      d(y) {
        y && A(t), Q(o), (g = !1), Pt(m);
      },
    }
  );
}
function cy(n, t, e) {
  const i = { bgBackdropColor: 'emerald', progressBarBgColor: 'emerald' };
  let s = !1,
    o,
    r = lc,
    l = 'empty',
    a = !1,
    c = !0,
    f;
  const u = () => {
      e(0, (s = !0));
    },
    d = () => {
      e(0, (s = !1));
    },
    h = (y) => {
      if (((o = y.target), f.length === 0))
        e(1, (r = lc)), e(2, (l = 'empty')), e(3, (a = !1)), e(4, (c = !0));
      else {
        const [v, k] = f[0].name.split('.');
        e(1, (r = sy)),
          e(2, (l = v.length > 10 ? v.slice(0, 10) + `... .${k}` : f[0].name)),
          k !== 'dic' ? (e(3, (a = !0)), e(4, (c = !0))) : (e(3, (a = !1)), e(4, (c = !1)));
      }
    },
    g = async (y) => {
      y &&
        (Hi(i),
        await Dn.get('importAppDBData')(f[0]),
        qd(),
        (o.value = ''),
        o.dispatchEvent(new CustomEvent('change')),
        Wi());
    },
    m = async () => {
      Hi(i), await iy(), Wi();
    },
    p = () => {
      Wt.trigger(
        ni({
          backdropColor: 'emerald',
          body: "Import data from file will <i class='text-red-300 bg-white px-1 rounded-md'>delete</i> all existing ones!",
          color: 'emerald',
          callback: g,
        }),
      );
    };
  function _(y) {
    (f = y), e(5, f);
  }
  return [s, r, l, a, c, f, u, d, h, m, p, _];
}
class uy extends lt {
  constructor(t) {
    super(), at(this, t, cy, ay, rt, {});
  }
}
function fy(n) {
  let t, e, i, s, o, r;
  return (
    (e = new uy({})),
    (s = new ny({})),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (i = B()),
          Z(s.$$.fragment),
          b(
            t,
            'class',
            'h-[calc(100%-85px)] w-full flex flex-col justify-evenly items-center text-center gap-5 absolute',
          );
      },
      m(l, a) {
        x(l, t, a), J(e, t, null), S(t, i), J(s, t, null), (r = !0);
      },
      p: ct,
      i(l) {
        r ||
          (L(e.$$.fragment, l),
          L(s.$$.fragment, l),
          pt(() => {
            r && (o || (o = ot(t, bt, {}, !0)), o.run(1));
          }),
          (r = !0));
      },
      o(l) {
        F(e.$$.fragment, l), F(s.$$.fragment, l), o || (o = ot(t, bt, {}, !1)), o.run(0), (r = !1);
      },
      d(l) {
        l && A(t), Q(e), Q(s), l && o && o.end();
      },
    }
  );
}
class dy extends lt {
  constructor(t) {
    super(), at(this, t, null, fy, rt, {});
  }
}
const hy = ae([]),
  gy = ae([]);
function ac(n, t, e) {
  const i = n.slice();
  return (i[6] = t[e]), i;
}
function cc(n) {
  let t,
    e = n[6] + '',
    i,
    s,
    o,
    r,
    l;
  function a() {
    return n[5](n[6]);
  }
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        (s = B()),
        b(
          t,
          'class',
          (o =
            'chip text-white select-none ' +
            (n[6] !== 'Sat' && n[6] !== 'Sun' ? n[3] : n[4]) +
            ' ' +
            (n[0].includes(n[6]) ? 'brightness-100' : 'brightness-75')),
        );
    },
    m(c, f) {
      x(c, t, f), S(t, i), S(t, s), r || ((l = R(t, 'click', a)), (r = !0));
    },
    p(c, f) {
      (n = c),
        f & 1 &&
          o !==
            (o =
              'chip text-white select-none ' +
              (n[6] !== 'Sat' && n[6] !== 'Sun' ? n[3] : n[4]) +
              ' ' +
              (n[0].includes(n[6]) ? 'brightness-100' : 'brightness-75')) &&
          b(t, 'class', o);
    },
    d(c) {
      c && A(t), (r = !1), l();
    },
  };
}
function my(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c = po,
    f = [];
  for (let u = 0; u < c.length; u += 1) f[u] = cc(ac(n, c, u));
  return {
    c() {
      (t = C('div')), (e = C('button')), (i = X('All')), (s = B());
      for (let u = 0; u < f.length; u += 1) f[u].c();
      b(e, 'class', 'chip text-white select-none bg-slate-500 ' + n[3]),
        b(t, 'class', 'mt-2 flex flex-wrap justify-center gap-2');
    },
    m(u, d) {
      x(u, t, d), S(t, e), S(e, i), S(t, s);
      for (let h = 0; h < f.length; h += 1) f[h] && f[h].m(t, null);
      (r = !0),
        l ||
          ((a = R(e, 'click', function () {
            Oe(n[2]) && n[2].apply(this, arguments);
          })),
          (l = !0));
    },
    p(u, [d]) {
      if (((n = u), d & 27)) {
        c = po;
        let h;
        for (h = 0; h < c.length; h += 1) {
          const g = ac(n, c, h);
          f[h] ? f[h].p(g, d) : ((f[h] = cc(g)), f[h].c(), f[h].m(t, null));
        }
        for (; h < f.length; h += 1) f[h].d(1);
        f.length = c.length;
      }
    },
    i(u) {
      r ||
        (pt(() => {
          r && (o || (o = ot(t, ge, {}, !0)), o.run(1));
        }),
        (r = !0));
    },
    o(u) {
      o || (o = ot(t, ge, {}, !1)), o.run(0), (r = !1);
    },
    d(u) {
      u && A(t), oe(f, u), u && o && o.end(), (l = !1), a();
    },
  };
}
function py(n, t, e) {
  let { chosenPracticeDays: i } = t,
    { onDayClick: s } = t,
    { onAllDaysClick: o } = t;
  const r = gt('weekdaysStyles'),
    l = gt('weekendsStyles'),
    a = (c) => s(c);
  return (
    (n.$$set = (c) => {
      'chosenPracticeDays' in c && e(0, (i = c.chosenPracticeDays)),
        'onDayClick' in c && e(1, (s = c.onDayClick)),
        'onAllDaysClick' in c && e(2, (o = c.onAllDaysClick));
    }),
    [i, s, o, r, l, a]
  );
}
class by extends lt {
  constructor(t) {
    super(), at(this, t, py, my, rt, { chosenPracticeDays: 0, onDayClick: 1, onAllDaysClick: 2 });
  }
}
function uc(n, t, e) {
  const i = n.slice();
  return (i[12] = t[e]), i;
}
function fc(n, t) {
  let e,
    i = t[12] + '',
    s,
    o,
    r,
    l,
    a = ct,
    c,
    f;
  function u() {
    return t[8](t[12]);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('button')),
        (s = X(i)),
        (o = B()),
        b(
          e,
          'class',
          (r = 'chip text-white select-none ' + (t[12] !== 'Sat' && t[12] !== 'Sun' ? t[3] : t[4])),
        ),
        (this.first = e);
    },
    m(d, h) {
      x(d, e, h), S(e, s), S(e, o), c || ((f = R(e, 'click', u)), (c = !0));
    },
    p(d, h) {
      (t = d),
        h & 1 && i !== (i = t[12] + '') && mt(s, i),
        h & 1 &&
          r !==
            (r =
              'chip text-white select-none ' +
              (t[12] !== 'Sat' && t[12] !== 'Sun' ? t[3] : t[4])) &&
          b(e, 'class', r);
    },
    r() {
      l = e.getBoundingClientRect();
    },
    f() {
      Vi(e), a();
    },
    a() {
      a(), (a = ji(e, l, Ui, { duration: 300 }));
    },
    d(d) {
      d && A(e), (c = !1), f();
    },
  };
}
function _y(n) {
  let t,
    e,
    i,
    s,
    o,
    r = [],
    l = new Map(),
    a,
    c,
    f = n[0];
  const u = (d) => d[12];
  for (let d = 0; d < f.length; d += 1) {
    let h = uc(n, f, d),
      g = u(h);
    l.set(g, (r[d] = fc(g, h)));
  }
  return {
    c() {
      (t = C('div')), (e = C('div')), (i = X('Copy settings from')), (s = B()), (o = C('div'));
      for (let d = 0; d < r.length; d += 1) r[d].c();
      b(
        e,
        'class',
        'cursor-default text-xs bg-white rounded-md p-2 text-' + n[2] + '-500 align-middle',
      ),
        b(o, 'class', 'my-2 flex flex-wrap justify-center gap-2');
    },
    m(d, h) {
      x(d, t, h), S(t, e), S(e, i), S(t, s), S(t, o);
      for (let g = 0; g < r.length; g += 1) r[g] && r[g].m(o, null);
      c = !0;
    },
    p(d, [h]) {
      if (h & 57) {
        f = d[0];
        for (let g = 0; g < r.length; g += 1) r[g].r();
        r = Me(r, h, u, 1, d, f, l, o, Xd, fc, null, uc);
        for (let g = 0; g < r.length; g += 1) r[g].a();
      }
    },
    i(d) {
      c ||
        (pt(() => {
          c && (a || (a = ot(t, ge, {}, !0)), a.run(1));
        }),
        (c = !0));
    },
    o(d) {
      a || (a = ot(t, ge, {}, !1)), a.run(0), (c = !1);
    },
    d(d) {
      d && A(t);
      for (let h = 0; h < r.length; h += 1) r[h].d();
      d && a && a.end();
    },
  };
}
function yy(n, t, e) {
  let i,
    { currentDay: s } = t;
  const { chosenPracticeDays: o } = gt('stores');
  Dt(n, o, (m) => e(7, (i = m)));
  let r, l;
  const { settingsStore: a } = gt('stores'),
    c = gt('mainColor'),
    f = gt('weekdaysStyles'),
    u = gt('weekendsStyles'),
    d = (m) => {
      m && a.copySettingsForDay(s, l);
    },
    h = (m) => {
      (l = m),
        Wt.trigger(
          ni({
            backdropColor: c,
            color: c,
            body: `Current day settings will be <i class='px-1 bg-white text-red-700 rounded-md'>overwritten</i><br> by <i class='px-1 mr-1 bg-white text-red-700 rounded-md'>${bo[l]}</i> settings`,
            callback: d,
          }),
        );
    },
    g = (m) => h(m);
  return (
    (n.$$set = (m) => {
      'currentDay' in m && e(6, (s = m.currentDay));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 192 && e(0, (r = i.filter((m) => m !== s)));
    }),
    [r, o, c, f, u, h, s, i, g]
  );
}
class ky extends lt {
  constructor(t) {
    super(), at(this, t, yy, _y, rt, { currentDay: 6 });
  }
}
const vy = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: [
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
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    meridiem: ['am', 'pm'],
    suffix: ['st', 'nd', 'rd', 'th'],
    todayBtn: 'Today',
    clearBtn: 'Clear',
    okBtn: 'Ok',
    cancelBtn: 'Cancel',
    timeView: 'Show time view',
    backToDate: 'Back to calendar view',
  },
  wy = {
    theme: 'sdt-calendar-colors',
    format: 'yyyy-mm-dd',
    formatType: 'standard',
    displayFormat: null,
    displayFormatType: null,
    minuteIncrement: 1,
    weekStart: 1,
    inputClasses: '',
    todayBtnClasses: 'sdt-action-btn sdt-today-btn',
    clearBtnClasses: 'sdt-action-btn sdt-clear-btn',
    todayBtn: !0,
    clearBtn: !0,
    autocommit: !0,
    i18n: vy,
  },
  Ue = 0,
  zn = 1,
  ye = 2,
  Sy = 3;
function wi(n, t, e, i) {
  var p, _;
  if (n instanceof Date) return n;
  const s =
    i === 'php'
      ? { date: 'Y-m-d', datetime: 'Y-m-d H:i', datetime_s: 'Y-m-d H:i:s' }
      : { date: 'yyyy-mm-dd', datetime: 'yyyy-mm-dd hh:ii', datetime_s: 'yyyy-mm-dd hh:ii:ss' };
  let o, r;
  /^\d{4}\-\d{1,2}\-\d{1,2}$/.test(n)
    ? (o = $e.parseFormat(s.date, i))
    : /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(n)
    ? (o = $e.parseFormat(s.datetime, i))
    : /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(n)
    ? (o = $e.parseFormat(s.datetime_s, i))
    : (/^([01]*\d|2[0-3])([0-5]\d)(?:[ ]([ap][m]|[AP][M]))?$/.test(n) &&
        (r =
          (p = n.match(/^([01]*\d|2[0-3])([0-5]\d)(?:[ ]([ap][m]|[AP][M]))?$/)) == null
            ? void 0
            : p.slice(1).filter((y) => y)),
      (o = $e.parseFormat(t, i)));
  const l = r || (n && n.toString().match($e.nonpunctuation)) || [];
  (n = new Date()), n.setHours(0, 0, 0, 0);
  const a = {},
    { setters_order: c, setters_map: f } = $e.setters(i);
  let u, d;
  if (l.length !== o.parts.length && o.parts.includes('S')) {
    const y =
      (_ = l[o.parts.indexOf('S') - 1].match(/(\d+)([a-zA-Z]+)/)) == null ? void 0 : _.slice(1, 3);
    l.splice(o.parts.indexOf('S') - 1, 1, ...y);
  }
  if (l.length === o.parts.length) {
    for (var h = 0, g = o.parts.length; h < g; h++) {
      if (((u = parseInt(l[h], 10)), (d = o.parts[h]), isNaN(u)))
        if (i === 'standard')
          switch (d) {
            case 'MM':
              u = e.months.indexOf(l[h]) + 1;
              break;
            case 'M':
              u = e.monthsShort.indexOf(l[h]) + 1;
              break;
            case 'p':
            case 'P':
              u = e.meridiem.indexOf(l[h].toLowerCase());
              break;
          }
        else
          switch (d) {
            case 'D':
              u = e.daysShort.indexOf(l[h]) + 1;
              break;
            case 'l':
              u = e.days.indexOf(l[h]) + 1;
              break;
            case 'F':
              u = e.months.indexOf(l[h]) + 1;
              break;
            case 'M':
              u = e.monthsShort.indexOf(l[h]) + 1;
              break;
            case 'a':
            case 'A':
              u = e.meridiem.indexOf(l[h].toLowerCase());
              break;
          }
      a[d] = u;
    }
    for (var h = 0, m; h < c.length; h++)
      (m = c[h]), m in a && !isNaN(a[m]) && f[`${m}`] && f[`${m}`](n, a[m]);
  }
  return n;
}
function Fn(n, t, e, i) {
  var f;
  if (n === null) return '';
  const s = n.getDate();
  let o;
  if (i === 'standard')
    (o = {
      t: n.getTime(),
      yy: n.getFullYear().toString().substring(2),
      yyyy: n.getFullYear(),
      m: n.getMonth() + 1,
      M: e.monthsShort[n.getMonth()],
      MM: e.months[n.getMonth()],
      d: s,
      D: e.daysShort[n.getDay()],
      DD: e.days[n.getDay()],
      S:
        s % 10 && s % 10 <= e.suffix.length
          ? e.suffix[(s % 10) - 1]
          : e.suffix[e.suffix.length - 1],
      p: e.meridiem.length === 2 ? e.meridiem[n.getHours() < 12 ? 0 : 1] : '',
      h: n.getHours(),
      ii: (n.getMinutes() < 10 ? '0' : '') + n.getMinutes(),
      ss: (n.getUTCSeconds() < 10 ? '0' : '') + n.getUTCSeconds(),
    }),
      e.meridiem.length === 2 ? (o.H = o.h % 12 === 0 ? 12 : o.h % 12) : (o.H = o.h),
      (o.HH = (o.H < 10 ? '0' : '') + o.H),
      (o.P = o.p.toUpperCase()),
      (o.hh = (o.h < 10 ? '0' : '') + o.h),
      (o.i = o.ii),
      (o.s = o.ss),
      (o.dd = (o.d < 10 ? '0' : '') + o.d),
      (o.mm = (o.m < 10 ? '0' : '') + o.m);
  else if (i === 'php')
    (o = {
      y: n.getFullYear().toString().substring(2),
      Y: n.getFullYear(),
      F: e.months[n.getMonth()],
      M: e.monthsShort[n.getMonth()],
      n: n.getMonth() + 1,
      t: Uf(n.getFullYear(), n.getMonth()),
      j: n.getDate(),
      l: e.days[n.getDay()],
      D: e.daysShort[n.getDay()],
      w: n.getDay(),
      N: n.getDay() === 0 ? 7 : n.getDay(),
      S:
        s % 10 && s % 10 <= e.suffix.length
          ? e.suffix[(s % 10) - 1]
          : e.suffix[e.suffix.length - 1],
      a: e.meridiem.length === 2 ? e.meridiem[n.getHours() < 12 ? 0 : 1] : '',
      g: n.getHours() % 12 === 0 ? 12 : n.getHours() % 12,
      G: n.getHours(),
      i: n.getMinutes(),
      s: n.getSeconds(),
      U: Math.floor(n.getTime() / 1e3),
    }),
      (o.m = (o.n < 10 ? '0' : '') + o.n),
      (o.d = (o.j < 10 ? '0' : '') + o.j),
      (o.A = o.a.toString().toUpperCase()),
      (o.h = (o.g < 10 ? '0' : '') + o.g),
      (o.H = (o.G < 10 ? '0' : '') + o.G),
      (o.i = (o.i < 10 ? '0' : '') + o.i),
      (o.s = (o.s < 10 ? '0' : '') + o.s);
  else throw new Error('Invalid format type.');
  let r = [];
  const l = $e.parseFormat(t, i);
  for (var a = 0, c = ((f = l.parts) == null ? void 0 : f.length) || 0; a < c; a++)
    l.separators.length && r.push(l.separators.shift()), r.push(o[l.parts[a]]);
  return l.separators.length && r.push(l.separators.shift()), r.join('');
}
function Uf(n, t) {
  return [
    31,
    (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ][t];
}
function My(n, t) {
  return n instanceof Date
    ? n.getFullYear() < t.getFullYear() || n.getMonth() < t.getMonth() || n.getDate() < t.getDate()
    : !1;
}
function Dy(n, t) {
  return n instanceof Date
    ? n.getFullYear() > t.getFullYear() || n.getMonth() > t.getMonth() || n.getDate() > t.getDate()
    : !1;
}
const $e = {
  validParts: function (n) {
    if (n === 'standard') return /t|hh?|HH?|p|P|z|ii?|ss?|dd?|DD?|S|mm?|MM?|yy(?:yy)?/g;
    if (n === 'php') return /[dDjlNwzFmMnStyYaABgGhHisU]/g;
    throw new Error('Invalid format type.');
  },
  nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
  parseFormat: function (n, t) {
    var e = n.replace(this.validParts(t), '\0').split('\0'),
      i = n.match(this.validParts(t)) || [];
    return (
      (!e || !e.length || !i || i.length === 0) && console.warn('invalid date format', e, i),
      { separators: e, parts: i }
    );
  },
  setters: function (n) {
    let t,
      e = {};
    return (
      n === 'standard'
        ? ((t = [
            'yyyy',
            'yy',
            'm',
            'mm',
            'M',
            'MM',
            'd',
            'dd',
            'D',
            'DD',
            'hh',
            'h',
            'HH',
            'H',
            'ii',
            'i',
            'ss',
            's',
            'S',
            'p',
            'P',
            't',
          ]),
          (e = {
            hh: (i, s) => i.setHours(s),
            h: (i, s) => i.setHours(s),
            HH: (i, s) => i.setHours(s === 12 ? 0 : s),
            H: (i, s) => i.setHours(s === 12 ? 0 : s),
            i: (i, s) => i.setMinutes(s),
            s: (i, s) => i.setSeconds(s),
            yyyy: (i, s) => i.setFullYear(s),
            yy: (i, s) => i.setFullYear((s < 50 ? 2e3 : 1900) + s),
            m: (i, s) => {
              for (s -= 1; s < 0; ) s += 12;
              for (s %= 12, i.setMonth(s); i.getMonth() !== s; ) {
                if (isNaN(i.getMonth())) return i;
                i.setDate(i.getDate() - 1);
              }
              return i;
            },
            d: (i, s) => i.setDate(s),
            p: (i, s) =>
              i.setHours(s === 1 && i.getHours() < 12 ? i.getHours() + 12 : i.getHours()),
            t: (i, s) => i.setTime(s),
            mm: () => {},
            M: () => {},
            MM: () => {},
            ii: () => {},
            ss: () => {},
            dd: () => {},
            D: () => {},
            DD: () => {},
            P: () => {},
          }),
          (e.mm = e.M = e.MM = e.m),
          (e.ii = e.i),
          (e.ss = e.s),
          (e.dd = e.D = e.DD = e.d),
          (e.P = e.p))
        : ((t = [
            'Y',
            'yy',
            'm',
            'M',
            'F',
            'n',
            'd',
            'D',
            'j',
            'l',
            'N',
            'S',
            'H',
            'G',
            'h',
            'g',
            'i',
            's',
            'p',
            'P',
            'U',
          ]),
          (e = {
            H: (i, s) => i.setHours(s),
            G: (i, s) => i.setHours(s),
            h: (i, s) => i.setHours(s === 12 ? 0 : s),
            g: (i, s) => i.setHours(s === 12 ? 0 : s),
            i: (i, s) => i.setMinutes(s),
            s: (i, s) => i.setSeconds(s),
            Y: (i, s) => i.setFullYear(s),
            yy: (i, s) => i.setFullYear((s < 50 ? 2e3 : 1900) + s),
            m: (i, s) => {
              for (s -= 1; s < 0; ) s += 12;
              for (s %= 12, i.setMonth(s); i.getMonth() !== s; ) {
                if (isNaN(i.getMonth())) return i;
                i.setDate(i.getDate() - 1);
              }
              return i;
            },
            n: (i, s) => i.setMonth(s - 1),
            d: (i, s) => i.setDate(s),
            a: (i, s) => i.setHours(s === 1 ? i.getHours() + 12 : i.getHours()),
            U: (i, s) => i.setTime(s * 1e3),
          }),
          (e.F = e.M = e.m),
          (e.D = e.j = e.l = e.N = e.d),
          (e.A = e.a)),
      { setters_order: t, setters_map: e }
    );
  },
};
function Cy(n, t, e, i, s) {
  if (e === Ue) {
    let k = 10,
      w = 20;
    const M = -1,
      D = [];
    let T = [],
      P = n.getFullYear() - (n.getFullYear() % 10);
    (P -= P % 20 ? 12 : 10), P % 10 && ((k = 12), (w = 22));
    for (let O = 0; O < 32; O++) T.push(P + O), T.length === 4 && (D.push(T), (T = []));
    let E = [];
    return (
      t[0] || (t[0] = new Date()),
      t[0].getFullYear() >= P && E.push(t[0].getFullYear() % P),
      { years: D, todayMark: M, nextFrom: w, prevTo: k, selectionMark: E }
    );
  }
  if (e === zn) {
    let k = [],
      w = [],
      M = 12,
      D = 24;
    const T = n.toISOString().split('T')[0].substring(0, 8),
      P = new Date(T + '01 00:00:00'),
      E = P.getFullYear() - 1;
    P.setFullYear(E);
    let O = 0;
    for (let W = 0; W < 3; W++) {
      for (let $ = 0; $ < 12; $++)
        P.setMonth($), w.push(i.monthsShort[$ % 12]), w.length === 4 && (k.push(w), (w = []));
      P.setFullYear(P.getFullYear() + 1);
    }
    let H = [];
    return (
      t[0] || (t[0] = new Date()),
      t[0].getFullYear() - E >= 0 &&
        t[0].getFullYear() - E <= 2 &&
        H.push(t[0].getMonth() + (t[0].getFullYear() - E || 0) * 12),
      { months: k, todayMark: O, nextFrom: D, prevTo: M, selectionMark: H }
    );
  }
  let o = n || new Date(),
    r = o.getFullYear(),
    l = o.getMonth();
  o.getDate(), o.getHours();
  let a = new Date(),
    c = new Date(r, l - 1, 28, 0, 0, 0, 0),
    f = Uf(c.getFullYear(), c.getMonth());
  c.setDate(f), c.setDate(f - ((c.getDay() - s + 7) % 7));
  let u = new Date(c);
  u.setDate(u.getDate() + 42);
  let d = u.valueOf(),
    h = [],
    g = [],
    m = -1,
    p = [],
    _ = 0,
    y = 42,
    v = 0;
  for (; c.valueOf() < d; )
    v++,
      g.push(new Date(c)),
      c.getFullYear() < r || (c.getFullYear() === r && c.getMonth() < l)
        ? (_ = v)
        : y === 42 &&
          (c.getFullYear() > r || (c.getFullYear() === r && c.getMonth() > l)) &&
          (y = v - 1),
      c.setDate(c.getDate() + 1),
      c.getFullYear() === a.getFullYear() &&
        c.getMonth() === a.getMonth() &&
        c.getDate() === a.getDate() &&
        (m = v),
      p.length !== t.length &&
        t.map((k) => {
          c.getFullYear() === k.getFullYear() &&
            c.getMonth() === k.getMonth() &&
            c.getDate() === k.getDate() &&
            p.push(v);
        }),
      g.length === 7 && (h.push(g), (g = []));
  return { grid: h, days: h, todayMark: m, prevTo: _, nextFrom: y, selectionMark: p };
}
function Ty(n, { duration: t = 400, start: e = 0, end: i = 1, opacity: s = 0 }) {
  const o = getComputedStyle(n),
    r = +o.opacity,
    l = o.transform === 'none' ? '' : o.transform,
    a = 1 - e,
    c = r * (1 - s);
  return (
    (i = i || 1),
    {
      delay: 0,
      duration: t,
      easing: ti,
      css: (f, u) => `
        transform: ${l} scale(${i !== 1 ? e + i * u : 1 - a * u});
        opacity: ${r - c * u};
      `,
    }
  );
}
function dc(n, t, e) {
  const i = n.slice();
  return (i[47] = t[e]), (i[49] = e), i;
}
function hc(n, t, e) {
  const i = n.slice();
  (i[50] = t[e]), (i[54] = e);
  const s = i[49] * 7 + i[54];
  i[51] = s;
  const o = i[50].getTime();
  return (i[52] = o), i;
}
function gc(n, t, e) {
  const i = n.slice();
  return (i[55] = t[e]), i;
}
function mc(n, t, e) {
  const i = n.slice();
  return (i[47] = t[e]), (i[49] = e), i;
}
function pc(n, t, e) {
  const i = n.slice();
  (i[59] = t[e]), (i[54] = e);
  const s = i[49] * 4 + i[54];
  return (i[51] = s), i;
}
function bc(n, t, e) {
  const i = n.slice();
  return (i[47] = t[e]), (i[49] = e), i;
}
function _c(n, t, e) {
  const i = n.slice();
  (i[62] = t[e]), (i[54] = e);
  const s = i[49] * 4 + i[54];
  return (i[51] = s), i;
}
function yc(n) {
  let t, e, i, s, o, r;
  return {
    c() {
      (t = C('button')),
        (e = Vn('svg')),
        (i = Vn('path')),
        b(i, 'fill-rule', 'evenodd'),
        b(
          i,
          'd',
          'M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z',
        ),
        b(e, 'class', 'sdt-svg svelte-1thdsng'),
        b(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        b(e, 'viewBox', '0 0 16 16'),
        b(e, 'width', '16'),
        b(e, 'height', '16'),
        b(t, 'class', 'std-btn std-btn-header icon-btn sdt-time-icon svelte-1thdsng'),
        b(t, 'title', (s = n[3].timeView));
    },
    m(l, a) {
      x(l, t, a), S(t, e), S(e, i), o || ((r = R(t, 'click', Ae(n[27]))), (o = !0));
    },
    p(l, a) {
      a[0] & 8 && s !== (s = l[3].timeView) && b(t, 'title', s);
    },
    d(l) {
      l && A(t), (o = !1), r();
    },
  };
}
function kc(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c = n[15].years,
    f = [];
  for (let u = 0; u < c.length; u += 1) f[u] = wc(bc(n, c, u));
  return {
    c() {
      (t = C('table')), (e = C('tbody'));
      for (let u = 0; u < f.length; u += 1) f[u].c();
      b(e, 'class', 'sdt-tbody-lg svelte-1thdsng'),
        b(e, 'style', (i = `transform: translateY(-${n[11]}px); color: red`)),
        st(e, 'animate-transition', !!n[12]),
        b(t, 'class', 'sdt-table svelte-1thdsng'),
        Ds(t, 'max-height', '221px'),
        Ds(t, 'height', '221px');
    },
    m(u, d) {
      x(u, t, d), S(t, e);
      for (let h = 0; h < f.length; h += 1) f[h] && f[h].m(e, null);
      (r = !0), l || ((a = [R(e, 'outroend', n[26]), R(e, 'transitionend', n[39])]), (l = !0));
    },
    p(u, d) {
      if (((n = u), d[0] & 39878784)) {
        c = n[15].years;
        let h;
        for (h = 0; h < c.length; h += 1) {
          const g = bc(n, c, h);
          f[h] ? f[h].p(g, d) : ((f[h] = wc(g)), f[h].c(), f[h].m(e, null));
        }
        for (; h < f.length; h += 1) f[h].d(1);
        f.length = c.length;
      }
      (!r || (d[0] & 2048 && i !== (i = `transform: translateY(-${n[11]}px); color: red`))) &&
        b(e, 'style', i),
        (!r || d[0] & 4096) && st(e, 'animate-transition', !!n[12]);
    },
    i(u) {
      r ||
        (pt(() => {
          r &&
            (o && o.end(1),
            (s = $n(e, n[18], { duration: Kn, start: n[20], opacity: 1 })),
            s.start());
        }),
        (r = !0));
    },
    o(u) {
      s && s.invalidate(),
        u && (o = Yi(e, n[18], { duration: Kn, end: n[19], start: 1 })),
        (r = !1);
    },
    d(u) {
      u && A(t), oe(f, u), u && o && o.end(), (l = !1), Pt(a);
    },
  };
}
function vc(n, t) {
  let e,
    i,
    s = t[62] + '',
    o,
    r,
    l,
    a;
  function c() {
    return t[38](t[62]);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('td')),
        (i = C('button')),
        (o = X(s)),
        b(i, 'class', 'std-btn svelte-1thdsng'),
        (i.disabled = r = t[22](new Date(t[62], t[7].getMonth(), t[7].getDate()))),
        st(i, 'not-current', !t[21](t[51])),
        b(e, 'class', 'sdt-cal-td svelte-1thdsng'),
        st(e, 'is-selected', t[15].selectionMark.includes(t[51])),
        (this.first = e);
    },
    m(f, u) {
      x(f, e, u), S(e, i), S(i, o), l || ((a = R(i, 'click', Ae(c))), (l = !0));
    },
    p(f, u) {
      (t = f),
        u[0] & 32768 && s !== (s = t[62] + '') && mt(o, s),
        u[0] & 32896 &&
          r !== (r = t[22](new Date(t[62], t[7].getMonth(), t[7].getDate()))) &&
          (i.disabled = r),
        u[0] & 2129920 && st(i, 'not-current', !t[21](t[51])),
        u[0] & 32768 && st(e, 'is-selected', t[15].selectionMark.includes(t[51]));
    },
    d(f) {
      f && A(e), (l = !1), a();
    },
  };
}
function wc(n) {
  let t,
    e = [],
    i = new Map(),
    s,
    o = n[47];
  const r = (l) => l[54];
  for (let l = 0; l < o.length; l += 1) {
    let a = _c(n, o, l),
      c = r(a);
    i.set(c, (e[l] = vc(c, a)));
  }
  return {
    c() {
      t = C('tr');
      for (let l = 0; l < e.length; l += 1) e[l].c();
      (s = B()), b(t, 'class', 'sdt-cal-td svelte-1thdsng');
    },
    m(l, a) {
      x(l, t, a);
      for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(t, null);
      S(t, s);
    },
    p(l, a) {
      a[0] & 39878784 && ((o = l[47]), (e = Me(e, a, r, 1, l, o, i, t, Vs, vc, s, _c)));
    },
    d(l) {
      l && A(t);
      for (let a = 0; a < e.length; a += 1) e[a].d();
    },
  };
}
function Sc(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c = n[15].months,
    f = [];
  for (let u = 0; u < c.length; u += 1) f[u] = Dc(mc(n, c, u));
  return {
    c() {
      (t = C('table')), (e = C('tbody'));
      for (let u = 0; u < f.length; u += 1) f[u].c();
      b(e, 'class', 'sdt-tbody-lg svelte-1thdsng'),
        b(e, 'style', (i = `transform: translateY(-${n[11]}px)`)),
        st(e, 'animate-transition', !!n[12]),
        b(t, 'class', 'sdt-table svelte-1thdsng');
    },
    m(u, d) {
      x(u, t, d), S(t, e);
      for (let h = 0; h < f.length; h += 1) f[h] && f[h].m(e, null);
      (r = !0), l || ((a = [R(e, 'outroend', n[26]), R(e, 'transitionend', n[41])]), (l = !0));
    },
    p(u, d) {
      if (((n = u), d[0] & 39878792)) {
        c = n[15].months;
        let h;
        for (h = 0; h < c.length; h += 1) {
          const g = mc(n, c, h);
          f[h] ? f[h].p(g, d) : ((f[h] = Dc(g)), f[h].c(), f[h].m(e, null));
        }
        for (; h < f.length; h += 1) f[h].d(1);
        f.length = c.length;
      }
      (!r || (d[0] & 2048 && i !== (i = `transform: translateY(-${n[11]}px)`))) && b(e, 'style', i),
        (!r || d[0] & 4096) && st(e, 'animate-transition', !!n[12]);
    },
    i(u) {
      r ||
        (pt(() => {
          r &&
            (o && o.end(1),
            (s = $n(e, n[18], { duration: Kn, start: n[20], opacity: 1 })),
            s.start());
        }),
        (r = !0));
    },
    o(u) {
      s && s.invalidate(),
        u && (o = Yi(e, n[18], { duration: Kn, end: n[19], start: 1 })),
        (r = !1);
    },
    d(u) {
      u && A(t), oe(f, u), u && o && o.end(), (l = !1), Pt(a);
    },
  };
}
function Mc(n, t) {
  let e,
    i,
    s = t[59] + '',
    o,
    r,
    l,
    a;
  function c() {
    return t[40](t[59]);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('td')),
        (i = C('button')),
        (o = X(s)),
        b(i, 'class', 'std-btn svelte-1thdsng'),
        (i.disabled = r =
          t[22](new Date(t[7].getFullYear(), t[3].monthsShort.indexOf(t[59]), t[7].getDate()))),
        st(i, 'not-current', !t[21](t[51])),
        b(e, 'class', 'sdt-cal-td svelte-1thdsng'),
        st(e, 'is-selected', t[51] === t[15].selectionMark[0]),
        (this.first = e);
    },
    m(f, u) {
      x(f, e, u), S(e, i), S(i, o), l || ((a = R(i, 'click', Ae(c))), (l = !0));
    },
    p(f, u) {
      (t = f),
        u[0] & 32768 && s !== (s = t[59] + '') && mt(o, s),
        u[0] & 32904 &&
          r !==
            (r = t[22](
              new Date(t[7].getFullYear(), t[3].monthsShort.indexOf(t[59]), t[7].getDate()),
            )) &&
          (i.disabled = r),
        u[0] & 2129920 && st(i, 'not-current', !t[21](t[51])),
        u[0] & 32768 && st(e, 'is-selected', t[51] === t[15].selectionMark[0]);
    },
    d(f) {
      f && A(e), (l = !1), a();
    },
  };
}
function Dc(n) {
  let t,
    e = [],
    i = new Map(),
    s,
    o = n[47];
  const r = (l) => l[54];
  for (let l = 0; l < o.length; l += 1) {
    let a = pc(n, o, l),
      c = r(a);
    i.set(c, (e[l] = Mc(c, a)));
  }
  return {
    c() {
      t = C('tr');
      for (let l = 0; l < e.length; l += 1) e[l].c();
      (s = B()), b(t, 'class', 'sdt-cal-td svelte-1thdsng');
    },
    m(l, a) {
      x(l, t, a);
      for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(t, null);
      S(t, s);
    },
    p(l, a) {
      a[0] & 39878792 && ((o = l[47]), (e = Me(e, a, r, 1, l, o, i, t, Vs, Mc, s, pc)));
    },
    d(l) {
      l && A(t);
      for (let a = 0; a < e.length; a += 1) e[a].d();
    },
  };
}
function Cc(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f = n[17],
    u = [];
  for (let g = 0; g < f.length; g += 1) u[g] = Tc(gc(n, f, g));
  let d = n[15].days,
    h = [];
  for (let g = 0; g < d.length; g += 1) h[g] = xc(dc(n, d, g));
  return {
    c() {
      (t = C('table')), (e = C('tbody')), (i = C('tr'));
      for (let g = 0; g < u.length; g += 1) u[g].c();
      s = B();
      for (let g = 0; g < h.length; g += 1) h[g].c();
      b(i, 'class', 'sdt-cal-td svelte-1thdsng'),
        b(t, 'class', 'sdt-table sdt-table-height svelte-1thdsng');
    },
    m(g, m) {
      x(g, t, m), S(t, e), S(e, i);
      for (let p = 0; p < u.length; p += 1) u[p] && u[p].m(i, null);
      S(e, s);
      for (let p = 0; p < h.length; p += 1) h[p] && h[p].m(e, null);
      (l = !0), a || ((c = R(e, 'outroend', n[26])), (a = !0));
    },
    p(g, m) {
      if (((n = g), m[0] & 131072)) {
        f = n[17];
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = gc(n, f, p);
          u[p] ? u[p].p(_, m) : ((u[p] = Tc(_)), u[p].c(), u[p].m(i, null));
        }
        for (; p < u.length; p += 1) u[p].d(1);
        u.length = f.length;
      }
      if (m[0] & 1919008869) {
        d = n[15].days;
        let p;
        for (p = 0; p < d.length; p += 1) {
          const _ = dc(n, d, p);
          h[p] ? h[p].p(_, m) : ((h[p] = xc(_)), h[p].c(), h[p].m(e, null));
        }
        for (; p < h.length; p += 1) h[p].d(1);
        h.length = d.length;
      }
    },
    i(g) {
      l ||
        (pt(() => {
          l &&
            (r && r.end(1),
            (o = $n(e, n[18], { duration: Kn, start: 0.5, opacity: 1 })),
            o.start());
        }),
        (l = !0));
    },
    o(g) {
      o && o.invalidate(),
        g && (r = Yi(e, n[18], { duration: Kn, start: Math.abs(n[9]) })),
        (l = !1);
    },
    d(g) {
      g && A(t), oe(u, g), oe(h, g), g && r && r.end(), (a = !1), c();
    },
  };
}
function Tc(n) {
  let t,
    e = n[55] + '',
    i;
  return {
    c() {
      (t = C('th')), (i = X(e)), b(t, 'class', 'sdt-cal-th svelte-1thdsng');
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p(s, o) {
      o[0] & 131072 && e !== (e = s[55] + '') && mt(i, e);
    },
    d(s) {
      s && A(t);
    },
  };
}
function Pc(n, t) {
  let e,
    i,
    s = t[50].getDate() + '',
    o,
    r,
    l,
    a;
  function c() {
    return t[42](t[50]);
  }
  return {
    key: n,
    first: null,
    c() {
      (e = C('td')),
        (i = C('button')),
        (o = X(s)),
        b(i, 'class', 'std-btn sdt-btn-day svelte-1thdsng'),
        (i.disabled = r = (t[16] || t[2] || t[6]) && t[22](t[50])),
        st(i, 'not-current', !t[21](t[49] * 7 + t[54])),
        b(e, 'class', 'sdt-cal-td svelte-1thdsng'),
        st(e, 'sdt-today', t[51] === t[15].todayMark),
        st(e, 'in-range', t[29](t[52])),
        st(e, 'is-selected', t[14].includes(t[52])),
        st(e, 'in-range-hover', t[5] && t[30](t[52], t[0])),
        (this.first = e);
    },
    m(f, u) {
      x(f, e, u),
        S(e, i),
        S(i, o),
        l ||
          ((a = [
            R(i, 'click', c),
            R(e, 'mouseover', function () {
              Oe(t[28](t[50])) && t[28](t[50]).apply(this, arguments);
            }),
            R(e, 'mouseout', t[28]()),
          ]),
          (l = !0));
    },
    p(f, u) {
      (t = f),
        u[0] & 32768 && s !== (s = t[50].getDate() + '') && mt(o, s),
        u[0] & 98372 && r !== (r = (t[16] || t[2] || t[6]) && t[22](t[50])) && (i.disabled = r),
        u[0] & 2129920 && st(i, 'not-current', !t[21](t[49] * 7 + t[54])),
        u[0] & 32768 && st(e, 'sdt-today', t[51] === t[15].todayMark),
        u[0] & 536903680 && st(e, 'in-range', t[29](t[52])),
        u[0] & 49152 && st(e, 'is-selected', t[14].includes(t[52])),
        u[0] & 1073774625 && st(e, 'in-range-hover', t[5] && t[30](t[52], t[0]));
    },
    d(f) {
      f && A(e), (l = !1), Pt(a);
    },
  };
}
function xc(n) {
  let t,
    e = [],
    i = new Map(),
    s,
    o = n[47];
  const r = (l) => l[54];
  for (let l = 0; l < o.length; l += 1) {
    let a = hc(n, o, l),
      c = r(a);
    i.set(c, (e[l] = Pc(c, a)));
  }
  return {
    c() {
      t = C('tr');
      for (let l = 0; l < e.length; l += 1) e[l].c();
      s = B();
    },
    m(l, a) {
      x(l, t, a);
      for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(t, null);
      S(t, s);
    },
    p(l, a) {
      a[0] & 1919008869 && ((o = l[47]), (e = Me(e, a, r, 1, l, o, i, t, Vs, Pc, s, hc)));
    },
    d(l) {
      l && A(t);
      for (let a = 0; a < e.length; a += 1) e[a].d();
    },
  };
}
function Py(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p,
    _ = n[4] && n[1].length && yc(n),
    y = n[8] === Ue && kc(n),
    v = n[8] === zn && Sc(n),
    k = n[8] === ye && Cc(n);
  return {
    c() {
      (t = C('div')),
        (e = C('button')),
        (i = X(n[13])),
        (s = B()),
        _ && _.c(),
        (o = B()),
        (r = C('button')),
        (r.innerHTML =
          '<svg class="sdt-svg svelte-1thdsng" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path d="M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z"></path></svg>'),
        (l = B()),
        (a = C('button')),
        (a.innerHTML =
          '<svg class="sdt-svg svelte-1thdsng" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path></svg>'),
        (c = B()),
        (f = C('div')),
        (u = B()),
        (d = C('div')),
        y && y.c(),
        (h = B()),
        v && v.c(),
        (g = B()),
        k && k.c(),
        b(e, 'class', 'std-btn std-btn-header sdt-toggle-btn svelte-1thdsng'),
        b(r, 'class', 'std-btn std-btn-header icon-btn svelte-1thdsng'),
        b(a, 'class', 'std-btn std-btn-header icon-btn svelte-1thdsng'),
        b(f, 'class', 'sdt-nav-btns svelte-1thdsng'),
        b(t, 'class', 'sdt-thead-nav svelte-1thdsng'),
        b(d, 'class', 'sdt-calendar svelte-1thdsng'),
        st(d, 'is-grid', n[10]);
    },
    m(w, M) {
      x(w, t, M),
        S(t, e),
        S(e, i),
        S(t, s),
        _ && _.m(t, null),
        S(t, o),
        S(t, r),
        S(t, l),
        S(t, a),
        S(t, c),
        S(t, f),
        x(w, u, M),
        x(w, d, M),
        y && y.m(d, null),
        S(d, h),
        v && v.m(d, null),
        S(d, g),
        k && k.m(d, null),
        m ||
          ((p = [R(e, 'click', Ae(n[24])), R(r, 'click', Ae(n[36])), R(a, 'click', Ae(n[37]))]),
          (m = !0));
    },
    p(w, M) {
      M[0] & 8192 && mt(i, w[13]),
        w[4] && w[1].length
          ? _
            ? _.p(w, M)
            : ((_ = yc(w)), _.c(), _.m(t, o))
          : _ && (_.d(1), (_ = null)),
        w[8] === Ue
          ? y
            ? (y.p(w, M), M[0] & 256 && L(y, 1))
            : ((y = kc(w)), y.c(), L(y, 1), y.m(d, h))
          : y &&
            (vt(),
            F(y, 1, 1, () => {
              y = null;
            }),
            wt()),
        w[8] === zn
          ? v
            ? (v.p(w, M), M[0] & 256 && L(v, 1))
            : ((v = Sc(w)), v.c(), L(v, 1), v.m(d, g))
          : v &&
            (vt(),
            F(v, 1, 1, () => {
              v = null;
            }),
            wt()),
        w[8] === ye
          ? k
            ? (k.p(w, M), M[0] & 256 && L(k, 1))
            : ((k = Cc(w)), k.c(), L(k, 1), k.m(d, null))
          : k &&
            (vt(),
            F(k, 1, 1, () => {
              k = null;
            }),
            wt()),
        M[0] & 1024 && st(d, 'is-grid', w[10]);
    },
    i(w) {
      L(y), L(v), L(k);
    },
    o(w) {
      F(y), F(v), F(k);
    },
    d(w) {
      w && A(t),
        _ && _.d(),
        w && A(u),
        w && A(d),
        y && y.d(),
        v && v.d(),
        k && k.d(),
        (m = !1),
        Pt(p);
    },
  };
}
let Kn = 400;
const Ce = 222,
  mi = 148;
function xy(n, t, e) {
  var zt;
  let i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    { wid: u } = t,
    { dates: d } = t,
    { startDate: h = null } = t,
    { endDate: g = null } = t,
    { weekStart: m = 1 } = t,
    { initialView: p = ye } = t,
    { i18n: _ } = t,
    { enableTimeToggle: y = !1 } = t,
    { isRange: v = !1 } = t,
    { hoverDate: k = null } = t,
    { additionalDisableFn: w } = t;
  function M(nt, yt) {
    if (E !== ye) {
      e(8, (E = ye)), e(9, (O = 1)), e(7, (T = new Date(D || new Date())));
      return;
    }
    if (!D) {
      I(new Date(), { keyboard: !0 });
      return;
    }
    let Ft = new Date(D);
    switch (nt) {
      case 'PageDown':
        yt = !0;
      case 'ArrowDown':
        yt ? Ft.setMonth(D.getMonth() + 1) : Ft.setDate(D.getDate() + 7),
          yt && Ft.getMonth() === D.getMonth() && Ft.setDate(0),
          I(Ft, { keyboard: !0 });
        break;
      case 'PageUp':
        yt = !0;
      case 'ArrowUp':
        yt ? Ft.setMonth(D.getMonth() - 1) : Ft.setDate(D.getDate() - 7),
          yt && Ft.getMonth() === D.getMonth() && Ft.setDate(0),
          I(Ft, { keyboard: !0 });
        break;
      case 'ArrowLeft':
        yt ? Ft.setFullYear(D.getFullYear() - 1) : Ft.setDate(D.getDate() - 1),
          I(Ft, { keyboard: !0 });
        break;
      case 'ArrowRight':
        yt ? Ft.setFullYear(D.getFullYear() + 1) : Ft.setDate(D.getDate() + 1),
          I(Ft, { keyboard: !0 });
        break;
    }
  }
  let D = d[u] || null,
    T =
      u === 1
        ? (() => {
            const nt = new Date(d[0] || new Date());
            return nt.setMonth(nt.getMonth() + 1), nt;
          })()
        : new Date(((zt = d[0]) == null ? void 0 : zt.valueOf()) || new Date());
  const P = ke();
  let E = p,
    O = -2,
    H = !1,
    W = Ce,
    $ = null;
  function tt(nt) {
    return a.prevTo <= nt && nt < a.nextFrom;
  }
  function Y(nt) {
    switch (E) {
      case ye:
        if ((i && i > nt) || (g && g <= nt) || (w && w(nt))) return !0;
        break;
      case zn:
        if (
          (i && i.getFullYear() === nt.getFullYear() && i.getMonth() > nt.getMonth()) ||
          (g && g.getFullYear() === nt.getFullYear() && g.getMonth() < nt.getMonth())
        )
          return !0;
        break;
      case Ue:
        if ((i && i.getFullYear() > nt.getFullYear()) || (g && g.getFullYear() < nt.getFullYear()))
          return !0;
        break;
    }
    return !1;
  }
  function N(nt) {
    const yt = E === Ue ? 120 : E === zn ? 12 : 1,
      Ft = new Date(T);
    Ft.setMonth(T.getMonth() + nt * yt),
      e(7, (T = Ft)),
      e(12, ($ = null)),
      e(11, (W = E === Ue ? (T.getFullYear() % 20 >= 10 ? Ce : mi) : Ce));
  }
  function q(nt) {
    if (E === ye) return N(nt);
    if (
      (e(
        12,
        ($ = () => {
          N(nt);
        }),
      ),
      E === Ue)
    ) {
      e(11, (W = W === mi ? (nt === -1 ? W - Ce : Ce + mi) : nt === -1 ? W - Ce : W + mi));
      return;
    }
    e(11, (W = nt === -1 ? W - Ce : W + Ce));
  }
  function V() {
    if ((e(9, (O = -1)), e(10, (H = !0)), E && e(8, E--, E), E === Ue)) {
      const nt = (Math.floor(T.getFullYear() / 10) * 10) % 20 === 0;
      e(11, (W = nt ? mi : Ce));
    }
  }
  function I(nt, { keyboard: yt } = {}) {
    switch ((e(9, (O = 1)), e(10, (H = !0)), E)) {
      case 0:
        T.setFullYear(nt), e(7, T);
        break;
      case 1:
        T.setMonth(_.monthsShort.indexOf(nt)), e(7, T);
        break;
      case 2:
        if ((h && My(nt, h)) || (g && Dy(nt, g)) || (w && w(nt))) return;
        const Ft = new Date(nt.getFullYear(), nt.getMonth(), nt.getDate());
        D && (Ft.setMinutes(D.getMinutes()), Ft.setHours(D.getHours())),
          (D = Ft),
          yt &&
            (T.getFullYear() !== Ft.getFullYear() ||
              (T.getFullYear() === Ft.getFullYear() && T.getMonth() !== Ft.getMonth())) &&
            (T.setFullYear(Ft.getFullYear()), T.setMonth(Ft.getMonth()), e(7, T)),
          P('date', { value: D, update: 'date', isKeyboard: yt });
        break;
    }
    E < ye && e(8, E++, E), e(11, (W = Ce));
  }
  function K() {
    e(10, (H = !1));
  }
  function U() {
    P('switch', 'time');
  }
  function ft(nt, yt) {
    switch (nt) {
      case Ue:
        const Ft = a.years[Math.floor(a.prevTo / 4)][a.prevTo % 4],
          hn = a.years[Math.floor(a.nextFrom / 4)][a.nextFrom % 4];
        return `${Ft} - ${hn}`;
      case zn:
        return yt.getFullYear();
      case ye:
        return _.months[yt.getMonth()] + ' ' + yt.getFullYear();
    }
  }
  function Mt(nt = null) {
    return function (yt) {
      e(0, (k = (nt == null ? void 0 : nt.getTime()) || null)), P('internal_hoverUpdate', k);
    };
  }
  function It(nt) {
    return l.length === 2 ? nt >= l[0] && nt < l[1] : !1;
  }
  function kt(nt, yt) {
    return yt && l.length === 1 && ((nt <= yt && l[0] <= nt) || (nt >= yt && l[0] >= nt));
  }
  const G = () => q(-1),
    et = () => q(1),
    Lt = (nt) => {
      I(nt);
    },
    z = () => $ && $(),
    xt = (nt) => {
      I(nt);
    },
    ht = () => $ && $(),
    Qt = (nt) => {
      I(nt);
    };
  return (
    (n.$$set = (nt) => {
      'wid' in nt && e(31, (u = nt.wid)),
        'dates' in nt && e(1, (d = nt.dates)),
        'startDate' in nt && e(32, (h = nt.startDate)),
        'endDate' in nt && e(2, (g = nt.endDate)),
        'weekStart' in nt && e(33, (m = nt.weekStart)),
        'initialView' in nt && e(34, (p = nt.initialView)),
        'i18n' in nt && e(3, (_ = nt.i18n)),
        'enableTimeToggle' in nt && e(4, (y = nt.enableTimeToggle)),
        'isRange' in nt && e(5, (v = nt.isRange)),
        'hoverDate' in nt && e(0, (k = nt.hoverDate)),
        'additionalDisableFn' in nt && e(6, (w = nt.additionalDisableFn));
    }),
    (n.$$.update = () => {
      n.$$.dirty[1] & 2 &&
        e(16, (i = h ? new Date(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0, 0) : null)),
        n.$$.dirty[0] & 512 && e(20, (s = O < 1 ? 1.5 : 0.5)),
        n.$$.dirty[0] & 512 && e(19, (o = O < 1 ? 1 : 1.5)),
        n.$$.dirty[0] & 512 && e(18, (r = O === -2 ? bt : O !== null ? Ty : () => ({}))),
        n.$$.dirty[0] & 2 &&
          e(14, (l = d.map((nt) => ((nt = new Date(nt)), nt.setHours(0, 0), nt.getTime())))),
        (n.$$.dirty[0] & 394) | (n.$$.dirty[1] & 4) && e(15, (a = Cy(T, d, E, _, m))),
        (n.$$.dirty[0] & 8) | (n.$$.dirty[1] & 4) &&
          e(17, (c = _.daysMin.concat(..._.daysMin.slice(1)).slice(m, 7 + m))),
        n.$$.dirty[0] & 2 && d.length === 0 && (D = null),
        n.$$.dirty[0] & 392 && e(13, (f = _ && ft(E, T)));
    }),
    [
      k,
      d,
      g,
      _,
      y,
      v,
      w,
      T,
      E,
      O,
      H,
      W,
      $,
      f,
      l,
      a,
      i,
      c,
      r,
      o,
      s,
      tt,
      Y,
      q,
      V,
      I,
      K,
      U,
      Mt,
      It,
      kt,
      u,
      h,
      m,
      p,
      M,
      G,
      et,
      Lt,
      z,
      xt,
      ht,
      Qt,
    ]
  );
}
class Ay extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        xy,
        Py,
        rt,
        {
          wid: 31,
          dates: 1,
          startDate: 32,
          endDate: 2,
          weekStart: 33,
          initialView: 34,
          i18n: 3,
          enableTimeToggle: 4,
          isRange: 5,
          hoverDate: 0,
          additionalDisableFn: 6,
          handleGridNav: 35,
        },
        null,
        [-1, -1, -1],
      );
  }
  get handleGridNav() {
    return this.$$.ctx[35];
  }
}
function Ac(n, t, e) {
  const i = n.slice();
  return (i[36] = t[e]), (i[38] = e), i;
}
function Lc(n, t, e) {
  const i = n.slice();
  return (i[36] = t[e]), (i[38] = e), i;
}
function Oc(n) {
  let t, e, i, s, o, r;
  return {
    c() {
      (t = C('button')),
        (e = Vn('svg')),
        (i = Vn('path')),
        b(i, 'fill-rule', 'evenodd'),
        b(
          i,
          'd',
          'M6.75 0a.75.75 0 01.75.75V3h9V.75a.75.75 0 011.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 016.75 0zm-3.5 4.5a.25.25 0 00-.25.25V8h18V4.75a.25.25 0 00-.25-.25H3.25zM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25V9.5z',
        ),
        b(e, 'class', 'sdt-svg svelte-1hcqdnx'),
        b(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        b(e, 'viewBox', '0 0 24 24'),
        b(e, 'width', '20'),
        b(e, 'height', '20'),
        b(t, 'type', 'button'),
        b(t, 'class', 'sdt-time-btn sdt-back-btn svelte-1hcqdnx'),
        b(t, 'title', (s = n[4].backToDate));
    },
    m(l, a) {
      x(l, t, a), S(t, e), S(e, i), o || ((r = R(t, 'click', n[20])), (o = !0));
    },
    p(l, a) {
      a[0] & 16 && s !== (s = l[4].backToDate) && b(t, 'title', s);
    },
    d(l) {
      l && A(t), (o = !1), r();
    },
  };
}
function Fc(n) {
  let t,
    e,
    i = n[11] ? 'PM' : 'AM',
    s,
    o,
    r,
    l;
  return {
    c() {
      (t = C('div')),
        (e = C('button')),
        (s = X(i)),
        b(e, 'type', 'button'),
        b(e, 'class', 'sdt-time-btn sdt-time-figure is-active svelte-1hcqdnx'),
        b(e, 'data-value', (o = n[11] ? n[7] % 12 : n[7] + 12)),
        b(t, 'class', 'sdt-meridian svelte-1hcqdnx');
    },
    m(a, c) {
      x(a, t, c), S(t, e), S(e, s), r || ((l = R(e, 'click', n[18])), (r = !0));
    },
    p(a, c) {
      c[0] & 2048 && i !== (i = a[11] ? 'PM' : 'AM') && mt(s, i),
        c[0] & 2176 && o !== (o = a[11] ? a[7] % 12 : a[7] + 12) && b(e, 'data-value', o);
    },
    d(a) {
      a && A(t), (r = !1), l();
    },
  };
}
function Ec(n, t) {
  let e,
    i = t[36].val + '',
    s,
    o,
    r,
    l,
    a,
    c;
  return {
    key: n,
    first: null,
    c() {
      (e = C('button')),
        (s = X(i)),
        b(e, 'type', 'button'),
        b(e, 'style', (o = `left:${t[36].x}px; top:${t[36].y}px`)),
        b(e, 'class', 'sdt-tick svelte-1hcqdnx'),
        b(e, 'data-value', (r = t[36].val)),
        (e.disabled = l = (t[0] || t[1]) && t[16](t[36].val, !1)),
        st(e, 'outer-tick', t[5]),
        st(e, 'is-selected', t[15](t[7], t[36].val, t[38])),
        (this.first = e);
    },
    m(f, u) {
      x(f, e, u), S(e, s), (c = !0);
    },
    p(f, u) {
      (t = f),
        (!c || u[0] & 8192) && i !== (i = t[36].val + '') && mt(s, i),
        (!c || (u[0] & 8192 && o !== (o = `left:${t[36].x}px; top:${t[36].y}px`))) &&
          b(e, 'style', o),
        (!c || (u[0] & 8192 && r !== (r = t[36].val))) && b(e, 'data-value', r),
        (!c || (u[0] & 8195 && l !== (l = (t[0] || t[1]) && t[16](t[36].val, !1)))) &&
          (e.disabled = l),
        (!c || u[0] & 32) && st(e, 'outer-tick', t[5]),
        (!c || u[0] & 41088) && st(e, 'is-selected', t[15](t[7], t[36].val, t[38]));
    },
    i(f) {
      c ||
        (f &&
          pt(() => {
            c && (a || (a = ot(e, bt, { duration: 200 }, !0)), a.run(1));
          }),
        (c = !0));
    },
    o(f) {
      f && (a || (a = ot(e, bt, { duration: 200 }, !1)), a.run(0)), (c = !1);
    },
    d(f) {
      f && A(e), f && a && a.end();
    },
  };
}
function Ic(n) {
  let t,
    e = n[36].val + '',
    i,
    s,
    o,
    r,
    l,
    a;
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        b(t, 'type', 'button'),
        b(t, 'style', (s = `left:${n[36].x}px; top:${n[36].y}px;`)),
        b(t, 'class', 'sdt-tick svelte-1hcqdnx'),
        b(t, 'data-value', (o = n[36].val)),
        (t.disabled = r = (n[0] || n[1]) && n[16](n[36].val, !1)),
        st(t, 'outer-tick', n[2] && !n[5]),
        st(t, 'is-selected', n[15](n[5] ? n[6] : n[7], n[36].val, n[38]));
    },
    m(c, f) {
      x(c, t, f), S(t, i), (a = !0);
    },
    p(c, f) {
      (!a || f[0] & 4096) && e !== (e = c[36].val + '') && mt(i, e),
        (!a || (f[0] & 4096 && s !== (s = `left:${c[36].x}px; top:${c[36].y}px;`))) &&
          b(t, 'style', s),
        (!a || (f[0] & 4096 && o !== (o = c[36].val))) && b(t, 'data-value', o),
        (!a || (f[0] & 4099 && r !== (r = (c[0] || c[1]) && c[16](c[36].val, !1)))) &&
          (t.disabled = r),
        (!a || f[0] & 36) && st(t, 'outer-tick', c[2] && !c[5]),
        (!a || f[0] & 37088) && st(t, 'is-selected', c[15](c[5] ? c[6] : c[7], c[36].val, c[38]));
    },
    i(c) {
      a ||
        (c &&
          pt(() => {
            a && (l || (l = ot(t, bt, { duration: 200 }, !0)), l.run(1));
          }),
        (a = !0));
    },
    o(c) {
      c && (l || (l = ot(t, bt, { duration: 200 }, !1)), l.run(0)), (a = !1);
    },
    d(c) {
      c && A(t), c && l && l.end();
    },
  };
}
function Ly(n) {
  let t,
    e,
    i,
    s,
    o = n[14](n[7], n[2]) + '',
    r,
    l,
    a,
    c,
    f,
    u = n[14](n[6], !1) + '',
    d,
    h,
    g,
    m,
    p,
    _,
    y,
    v,
    k,
    w = [],
    M = new Map(),
    D,
    T,
    P,
    E,
    O,
    H = n[3] && Oc(n),
    W = n[2] && Fc(n),
    $ = n[13];
  const tt = (V) => V[36].val;
  for (let V = 0; V < $.length; V += 1) {
    let I = Lc(n, $, V),
      K = tt(I);
    M.set(K, (w[V] = Ec(K, I)));
  }
  let Y = n[12],
    N = [];
  for (let V = 0; V < Y.length; V += 1) N[V] = Ic(Ac(n, Y, V));
  const q = (V) =>
    F(N[V], 1, 1, () => {
      N[V] = null;
    });
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        H && H.c(),
        (i = B()),
        (s = C('button')),
        (r = X(o)),
        (l = B()),
        (a = C('span')),
        (a.textContent = ':'),
        (c = B()),
        (f = C('button')),
        (d = X(u)),
        (h = B()),
        W && W.c(),
        (g = B()),
        (m = C('div')),
        (p = C('div')),
        (_ = B()),
        (y = C('div')),
        (v = C('div')),
        (k = B());
      for (let V = 0; V < w.length; V += 1) w[V].c();
      D = B();
      for (let V = 0; V < N.length; V += 1) N[V].c();
      b(s, 'type', 'button'),
        b(s, 'class', 'sdt-time-btn sdt-time-figure svelte-1hcqdnx'),
        st(s, 'is-active', !n[5]),
        b(f, 'type', 'button'),
        b(f, 'class', 'sdt-time-btn sdt-time-figure svelte-1hcqdnx'),
        st(f, 'is-active', n[5]),
        b(e, 'class', 'sdt-time-head svelte-1hcqdnx'),
        b(p, 'class', 'sdt-middle-dot svelte-1hcqdnx'),
        b(v, 'class', 'sdt-hand-circle svelte-1hcqdnx'),
        b(y, 'class', 'sdt-hand-pointer svelte-1hcqdnx'),
        b(y, 'style', n[10]),
        b(m, 'class', 'sdt-clock svelte-1hcqdnx'),
        b(t, 'class', 'sdt-timer svelte-1hcqdnx');
    },
    m(V, I) {
      x(V, t, I),
        S(t, e),
        H && H.m(e, null),
        S(e, i),
        S(e, s),
        S(s, r),
        S(e, l),
        S(e, a),
        S(e, c),
        S(e, f),
        S(f, d),
        S(e, h),
        W && W.m(e, null),
        S(t, g),
        S(t, m),
        S(m, p),
        S(m, _),
        S(m, y),
        S(y, v),
        S(m, k);
      for (let K = 0; K < w.length; K += 1) w[K] && w[K].m(m, null);
      S(m, D);
      for (let K = 0; K < N.length; K += 1) N[K] && N[K].m(m, null);
      n[30](m),
        (P = !0),
        E ||
          ((O = [
            R(s, 'click', n[27]),
            R(f, 'click', n[28]),
            R(m, 'click', Ae(n[17])),
            R(m, 'mousedown', n[19]),
            R(m, 'mousemove', n[29]),
            R(m, 'mouseup', n[19]),
          ]),
          (E = !0));
    },
    p(V, I) {
      if (
        (V[3] ? (H ? H.p(V, I) : ((H = Oc(V)), H.c(), H.m(e, i))) : H && (H.d(1), (H = null)),
        (!P || I[0] & 132) && o !== (o = V[14](V[7], V[2]) + '') && mt(r, o),
        (!P || I[0] & 32) && st(s, 'is-active', !V[5]),
        (!P || I[0] & 64) && u !== (u = V[14](V[6], !1) + '') && mt(d, u),
        (!P || I[0] & 32) && st(f, 'is-active', V[5]),
        V[2] ? (W ? W.p(V, I) : ((W = Fc(V)), W.c(), W.m(e, null))) : W && (W.d(1), (W = null)),
        (!P || I[0] & 1024) && b(y, 'style', V[10]),
        I[0] & 106659 &&
          (($ = V[13]), vt(), (w = Me(w, I, tt, 1, V, $, M, m, Du, Ec, D, Lc)), wt()),
        I[0] & 102631)
      ) {
        Y = V[12];
        let K;
        for (K = 0; K < Y.length; K += 1) {
          const U = Ac(V, Y, K);
          N[K]
            ? (N[K].p(U, I), L(N[K], 1))
            : ((N[K] = Ic(U)), N[K].c(), L(N[K], 1), N[K].m(m, null));
        }
        for (vt(), K = Y.length; K < N.length; K += 1) q(K);
        wt();
      }
    },
    i(V) {
      if (!P) {
        for (let I = 0; I < $.length; I += 1) L(w[I]);
        for (let I = 0; I < Y.length; I += 1) L(N[I]);
        T ||
          pt(() => {
            (T = $n(t, bt, { duration: 200 })), T.start();
          }),
          (P = !0);
      }
    },
    o(V) {
      for (let I = 0; I < w.length; I += 1) F(w[I]);
      N = N.filter(Boolean);
      for (let I = 0; I < N.length; I += 1) F(N[I]);
      P = !1;
    },
    d(V) {
      V && A(t), H && H.d(), W && W.d();
      for (let I = 0; I < w.length; I += 1) w[I].d();
      oe(N, V), n[30](null), (E = !1), Pt(O);
    },
  };
}
function Oy(n, t, e) {
  let i,
    s,
    o,
    r,
    l,
    a,
    c,
    { wid: f } = t,
    { date: u = null } = t,
    { startDate: d = null } = t,
    { endDate: h = null } = t,
    { minuteIncrement: g = 1 } = t,
    { showMeridian: m = !1 } = t,
    { hasDateComponent: p = !1 } = t,
    { i18n: _ } = t;
  function y() {
    e(5, (w = !0));
  }
  function v(U) {
    w
      ? ((U = U * 5 + o), U % 5 !== 0 && (U = U < o ? U + (5 - (U % 5)) : U - (U % 5)))
      : (U = i + U),
      $({ type: 'keyboard', target: { tagName: 'BUTTON', dataset: { value: U } } });
  }
  let k,
    w = !1,
    M = !1,
    D = u || new Date();
  u || ((u = D), u.setHours(0, 0, 0, 0));
  const T = ke();
  let P = '';
  function E(U, ft, Mt, It, kt) {
    const G = U / 2;
    ft = ft || G;
    const et = [0, 1 - 0.5, 1 - 0.134, 1, 1 - 0.134, 1 - 0.5],
      Lt = et.concat(et),
      z = et.slice(3).concat(et).concat(et.slice(0, 3)),
      xt = [];
    for (let ht = 0; ht < 12; ht++)
      xt.push({
        x: Math.abs(Lt[ht] * G + (ht <= 6 ? 1 : -1) * ft),
        y: Math.abs(z[ht] * G + (ht >= 9 || ht < 3 ? -1 : 1) * ft),
        val: It ? ht * 5 || Mt : ht ? ht + kt : Mt,
      });
    return xt;
  }
  function O(U, ft) {
    return ft
      ? s && U === 12
        ? 12
        : U < 10 || U % 12 < 10
        ? `0${U % 12}`
        : U % 12
      : U < 10
      ? `0${U}`
      : U;
  }
  function H(U, ft, Mt) {
    return w
      ? ft === U || (Mt === 0 && Mt === U)
      : m
      ? (s && ft == 12 && U === 12) || (!s && ft == 12 && U === 0)
        ? !0
        : ft === (U ? U % 12 : 12)
      : +ft > 12
      ? (Mt ? r * Mt + 12 : 0) === U
      : ft === '00' || ft === '12'
      ? (U === 12 && parseInt(ft) == 12) || (ft === '00' && U === 0)
      : ft === U;
  }
  function W(U, ft = !1) {
    return (
      typeof U == 'string' && (U = parseInt(U)),
      d && h && l
        ? w || ft
          ? (d.getHours() === D.getHours() && d.getMinutes() > U) ||
            (h.getHours() === D.getHours() && h.getMinutes() < U)
          : d.getHours() > U || h.getHours() < U
        : d &&
          d.getDate() === D.getDate() &&
          d.getMonth() === D.getMonth() &&
          d.getFullYear() === D.getFullYear()
        ? w || ft
          ? d.getHours() === D.getHours() && d.getMinutes() > U
          : d.getHours() > U
        : h &&
          h.getDate() === D.getDate() &&
          h.getMonth() === D.getMonth() &&
          h.getFullYear() === D.getFullYear()
        ? w || ft
          ? h.getHours() === D.getHours() && h.getMinutes() < U
          : h.getHours() < U
        : !1
    );
  }
  function $(U) {
    if (!U.target) return;
    let ft = 0,
      Mt = 0;
    if (U.target.tagName === 'BUTTON') {
      let It = parseInt(U.target.dataset.value);
      const kt = w ? 'setMinutes' : 'setHours';
      !w && s && (It += 12), w && g !== 1 && (It = It > o ? o + g : o - g), D[kt](It);
    } else if (w) {
      const It = k.getBoundingClientRect(),
        kt = U.clientX - It.left,
        G = U.clientY - It.top,
        et = 130,
        Lt = 130;
      let z = null;
      switch ((kt > et ? (z = G > Lt ? 2 : 1) : (z = G > Lt ? 3 : 4), z)) {
        case 1:
          (ft = kt - et), (Mt = Lt - G);
          break;
        case 2:
          (ft = kt - et), (Mt = G - Lt);
          break;
        case 3:
          (ft = et - kt), (Mt = G - Lt);
          break;
        case 4:
          (ft = et - kt), (Mt = Lt - G);
          break;
      }
      const xt = Math.sqrt(ft * ft + Mt * Mt),
        ht = 90 - Math.asin(ft / xt) * (180 / Math.PI);
      let Qt = 0;
      switch (z) {
        case 1:
          Qt = 90 - ht;
          break;
        case 2:
          Qt = ht + 90;
          break;
        case 3:
          Qt = 270 - ht;
          break;
        case 4:
          Qt = ht + 270;
          break;
      }
      (Qt = Math.round(Qt / 6 / g) * g), Qt >= 60 && (Qt = 0), D.setMinutes(Qt);
    }
    e(26, D),
      e(21, u),
      M ||
        (T(w ? 'minute' : 'hour', { value: D, isKeyboard: U.type === 'keyboard', dateIndex: f }),
        U.type !== 'keyboard' && !w && e(5, (w = !0)));
  }
  function tt(U) {
    const ft = parseInt(U.target.dataset.value);
    D.setHours(ft),
      e(26, D),
      e(21, u),
      T(w ? 'minute' : 'hour', { value: D, isKeyboard: U.type === 'keyboard' });
  }
  function Y(U) {
    e(9, (M = U.type === 'mousedown'));
  }
  function N() {
    T('switch', 'date');
  }
  const q = () => e(5, (w = !1)),
    V = () => e(5, (w = !0)),
    I = (U) => {
      M && $(U);
    };
  function K(U) {
    dt[U ? 'unshift' : 'push'](() => {
      (k = U), e(8, k);
    });
  }
  return (
    (n.$$set = (U) => {
      'wid' in U && e(22, (f = U.wid)),
        'date' in U && e(21, (u = U.date)),
        'startDate' in U && e(0, (d = U.startDate)),
        'endDate' in U && e(1, (h = U.endDate)),
        'minuteIncrement' in U && e(23, (g = U.minuteIncrement)),
        'showMeridian' in U && e(2, (m = U.showMeridian)),
        'hasDateComponent' in U && e(3, (p = U.hasDateComponent)),
        'i18n' in U && e(4, (_ = U.i18n));
    }),
    (n.$$.update = () => {
      if ((n.$$.dirty[0] & 69206016 && u !== D && u && e(26, (D = u)), n.$$.dirty[0] & 67108867)) {
        let U = !1;
        d &&
          d.toDateString() === D.toDateString() &&
          (W(D.getHours()) && (D.setHours(d.getHours()), (U = !0)),
          W(D.getMinutes(), !0) && (D.setMinutes(d.getMinutes()), (U = !0))),
          h &&
            h.toDateString() === D.toDateString() &&
            (W(D.getHours()) && (D.setHours(h.getHours()), (U = !0)),
            W(D.getMinutes(), !0) && (D.setMinutes(h.getMinutes()), (U = !0))),
          U && Cu().then(() => T('time', D));
      }
      if (
        (n.$$.dirty[0] & 67108864 && e(7, (i = D ? D.getHours() : 0)),
        n.$$.dirty[0] & 132 && e(11, (s = m ? i >= 12 : !1)),
        n.$$.dirty[0] & 67108864 && e(6, (o = D ? D.getMinutes() : 0)),
        n.$$.dirty[0] & 228)
      ) {
        let U = w ? o * 6 : (i % 12) * 30;
        e(
          10,
          (P =
            w || m || i < 12
              ? `transform: rotateZ(${U}deg);`
              : `transform: rotateZ(${U}deg); height: calc(25% + 1px)`),
        );
      }
      n.$$.dirty[0] & 32 && (r = w ? 5 : 1),
        n.$$.dirty[0] & 3 &&
          (l = d && h && ['getFullYear', 'getMonth', 'getDate'].every((U) => h[U]() === d[U]())),
        n.$$.dirty[0] & 32 && e(13, (a = E(w ? 220 : 180, 110, '00', !1, 0))),
        n.$$.dirty[0] & 32 && e(12, (c = E(w ? 180 : 120, 110, w ? '00' : '12', w, 12))),
        n.$$.dirty[0] & 32 && T('time-switch', w);
    }),
    [d, h, m, p, _, w, o, i, k, M, P, s, c, a, O, H, W, $, tt, Y, N, u, f, g, y, v, D, q, V, I, K]
  );
}
class Fy extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        Oy,
        Ly,
        rt,
        {
          wid: 22,
          date: 21,
          startDate: 0,
          endDate: 1,
          minuteIncrement: 23,
          showMeridian: 2,
          hasDateComponent: 3,
          i18n: 4,
          showMinuteView: 24,
          makeTick: 25,
        },
        null,
        [-1, -1],
      );
  }
  get showMinuteView() {
    return this.$$.ctx[24];
  }
  get makeTick() {
    return this.$$.ctx[25];
  }
}
function ar(n) {
  return n.split('-')[1];
}
function qf(n) {
  return n === 'y' ? 'height' : 'width';
}
function Hn(n) {
  return n.split('-')[0];
}
function cr(n) {
  return ['top', 'bottom'].includes(Hn(n)) ? 'x' : 'y';
}
function Rc(n, t, e) {
  let { reference: i, floating: s } = n;
  const o = i.x + i.width / 2 - s.width / 2,
    r = i.y + i.height / 2 - s.height / 2,
    l = cr(t),
    a = qf(l),
    c = i[a] / 2 - s[a] / 2,
    f = l === 'x';
  let u;
  switch (Hn(t)) {
    case 'top':
      u = { x: o, y: i.y - s.height };
      break;
    case 'bottom':
      u = { x: o, y: i.y + i.height };
      break;
    case 'right':
      u = { x: i.x + i.width, y: r };
      break;
    case 'left':
      u = { x: i.x - s.width, y: r };
      break;
    default:
      u = { x: i.x, y: i.y };
  }
  switch (ar(t)) {
    case 'start':
      u[l] -= c * (e && f ? -1 : 1);
      break;
    case 'end':
      u[l] += c * (e && f ? -1 : 1);
  }
  return u;
}
const Ey = async (n, t, e) => {
  const { placement: i = 'bottom', strategy: s = 'absolute', middleware: o = [], platform: r } = e,
    l = o.filter(Boolean),
    a = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let c = await r.getElementRects({ reference: n, floating: t, strategy: s }),
    { x: f, y: u } = Rc(c, i, a),
    d = i,
    h = {},
    g = 0;
  for (let m = 0; m < l.length; m++) {
    const { name: p, fn: _ } = l[m],
      {
        x: y,
        y: v,
        data: k,
        reset: w,
      } = await _({
        x: f,
        y: u,
        initialPlacement: i,
        placement: d,
        strategy: s,
        middlewareData: h,
        rects: c,
        platform: r,
        elements: { reference: n, floating: t },
      });
    (f = y ?? f),
      (u = v ?? u),
      (h = { ...h, [p]: { ...h[p], ...k } }),
      w &&
        g <= 50 &&
        (g++,
        typeof w == 'object' &&
          (w.placement && (d = w.placement),
          w.rects &&
            (c =
              w.rects === !0
                ? await r.getElementRects({ reference: n, floating: t, strategy: s })
                : w.rects),
          ({ x: f, y: u } = Rc(c, d, a))),
        (m = -1));
  }
  return { x: f, y: u, placement: d, strategy: s, middlewareData: h };
};
function ur(n, t) {
  return typeof n == 'function' ? n(t) : n;
}
function Iy(n) {
  return typeof n != 'number'
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      })(n)
    : { top: n, right: n, bottom: n, left: n };
}
function Rs(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function Xf(n, t) {
  var e;
  t === void 0 && (t = {});
  const { x: i, y: s, platform: o, rects: r, elements: l, strategy: a } = n,
    {
      boundary: c = 'clippingAncestors',
      rootBoundary: f = 'viewport',
      elementContext: u = 'floating',
      altBoundary: d = !1,
      padding: h = 0,
    } = ur(t, n),
    g = Iy(h),
    m = l[d ? (u === 'floating' ? 'reference' : 'floating') : u],
    p = Rs(
      await o.getClippingRect({
        element:
          (e = await (o.isElement == null ? void 0 : o.isElement(m))) == null || e
            ? m
            : m.contextElement ||
              (await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: f,
        strategy: a,
      }),
    ),
    _ = u === 'floating' ? { ...r.floating, x: i, y: s } : r.reference,
    y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)),
    v = ((await (o.isElement == null ? void 0 : o.isElement(y))) &&
      (await (o.getScale == null ? void 0 : o.getScale(y)))) || { x: 1, y: 1 },
    k = Rs(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: _,
            offsetParent: y,
            strategy: a,
          })
        : _,
    );
  return {
    top: (p.top - k.top + g.top) / v.y,
    bottom: (k.bottom - p.bottom + g.bottom) / v.y,
    left: (p.left - k.left + g.left) / v.x,
    right: (k.right - p.right + g.right) / v.x,
  };
}
const Ry = Math.min,
  By = Math.max;
function Bc(n, t, e) {
  return By(n, Ry(t, e));
}
const zy = ['top', 'right', 'bottom', 'left'];
zy.reduce((n, t) => n.concat(t, t + '-start', t + '-end'), []);
const Hy = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Bs(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Hy[t]);
}
function Wy(n, t, e) {
  e === void 0 && (e = !1);
  const i = ar(n),
    s = cr(n),
    o = qf(s);
  let r =
    s === 'x' ? (i === (e ? 'end' : 'start') ? 'right' : 'left') : i === 'start' ? 'bottom' : 'top';
  return t.reference[o] > t.floating[o] && (r = Bs(r)), { main: r, cross: Bs(r) };
}
const Ny = { start: 'end', end: 'start' };
function go(n) {
  return n.replace(/start|end/g, (t) => Ny[t]);
}
const Vy = function (n) {
  return (
    n === void 0 && (n = {}),
    {
      name: 'flip',
      options: n,
      async fn(t) {
        var e;
        const {
            placement: i,
            middlewareData: s,
            rects: o,
            initialPlacement: r,
            platform: l,
            elements: a,
          } = t,
          {
            mainAxis: c = !0,
            crossAxis: f = !0,
            fallbackPlacements: u,
            fallbackStrategy: d = 'bestFit',
            fallbackAxisSideDirection: h = 'none',
            flipAlignment: g = !0,
            ...m
          } = ur(n, t),
          p = Hn(i),
          _ = Hn(r) === r,
          y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
          v =
            u ||
            (_ || !g
              ? [Bs(r)]
              : (function (O) {
                  const H = Bs(O);
                  return [go(O), H, go(H)];
                })(r));
        u ||
          h === 'none' ||
          v.push(
            ...(function (O, H, W, $) {
              const tt = ar(O);
              let Y = (function (N, q, V) {
                const I = ['left', 'right'],
                  K = ['right', 'left'],
                  U = ['top', 'bottom'],
                  ft = ['bottom', 'top'];
                switch (N) {
                  case 'top':
                  case 'bottom':
                    return V ? (q ? K : I) : q ? I : K;
                  case 'left':
                  case 'right':
                    return q ? U : ft;
                  default:
                    return [];
                }
              })(Hn(O), W === 'start', $);
              return tt && ((Y = Y.map((N) => N + '-' + tt)), H && (Y = Y.concat(Y.map(go)))), Y;
            })(r, g, h, y),
          );
        const k = [r, ...v],
          w = await Xf(t, m),
          M = [];
        let D = ((e = s.flip) == null ? void 0 : e.overflows) || [];
        if ((c && M.push(w[p]), f)) {
          const { main: O, cross: H } = Wy(i, o, y);
          M.push(w[O], w[H]);
        }
        if (((D = [...D, { placement: i, overflows: M }]), !M.every((O) => O <= 0))) {
          var T, P;
          const O = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1,
            H = k[O];
          if (H) return { data: { index: O, overflows: D }, reset: { placement: H } };
          let W =
            (P = D.filter(($) => $.overflows[0] <= 0).sort(
              ($, tt) => $.overflows[1] - tt.overflows[1],
            )[0]) == null
              ? void 0
              : P.placement;
          if (!W)
            switch (d) {
              case 'bestFit': {
                var E;
                const $ =
                  (E = D.map((tt) => [
                    tt.placement,
                    tt.overflows.filter((Y) => Y > 0).reduce((Y, N) => Y + N, 0),
                  ]).sort((tt, Y) => tt[1] - Y[1])[0]) == null
                    ? void 0
                    : E[0];
                $ && (W = $);
                break;
              }
              case 'initialPlacement':
                W = r;
            }
          if (i !== W) return { reset: { placement: W } };
        }
        return {};
      },
    }
  );
};
function jy(n) {
  return n === 'x' ? 'y' : 'x';
}
const Yy = function (n) {
  return (
    n === void 0 && (n = {}),
    {
      name: 'shift',
      options: n,
      async fn(t) {
        const { x: e, y: i, placement: s } = t,
          {
            mainAxis: o = !0,
            crossAxis: r = !1,
            limiter: l = {
              fn: (p) => {
                let { x: _, y } = p;
                return { x: _, y };
              },
            },
            ...a
          } = ur(n, t),
          c = { x: e, y: i },
          f = await Xf(t, a),
          u = cr(Hn(s)),
          d = jy(u);
        let h = c[u],
          g = c[d];
        if (o) {
          const p = u === 'y' ? 'bottom' : 'right';
          h = Bc(h + f[u === 'y' ? 'top' : 'left'], h, h - f[p]);
        }
        if (r) {
          const p = d === 'y' ? 'bottom' : 'right';
          g = Bc(g + f[d === 'y' ? 'top' : 'left'], g, g - f[p]);
        }
        const m = l.fn({ ...t, [u]: h, [d]: g });
        return { ...m, data: { x: m.x - e, y: m.y - i } };
      },
    }
  );
};
function be(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Be(n) {
  return be(n).getComputedStyle(n);
}
function Kf(n) {
  return n instanceof be(n).Node;
}
function un(n) {
  return Kf(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Se(n) {
  return n instanceof HTMLElement || n instanceof be(n).HTMLElement;
}
function zc(n) {
  return typeof ShadowRoot < 'u' && (n instanceof be(n).ShadowRoot || n instanceof ShadowRoot);
}
function Ni(n) {
  const { overflow: t, overflowX: e, overflowY: i, display: s } = Be(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + e) && !['inline', 'contents'].includes(s);
}
function Uy(n) {
  return ['table', 'td', 'th'].includes(un(n));
}
function Ho(n) {
  const t = fr(),
    e = Be(n);
  return (
    e.transform !== 'none' ||
    e.perspective !== 'none' ||
    (!!e.containerType && e.containerType !== 'normal') ||
    (!t && !!e.backdropFilter && e.backdropFilter !== 'none') ||
    (!t && !!e.filter && e.filter !== 'none') ||
    ['transform', 'perspective', 'filter'].some((i) => (e.willChange || '').includes(i)) ||
    ['paint', 'layout', 'strict', 'content'].some((i) => (e.contain || '').includes(i))
  );
}
function fr() {
  return !(typeof CSS > 'u' || !CSS.supports) && CSS.supports('-webkit-backdrop-filter', 'none');
}
function Ks(n) {
  return ['html', 'body', '#document'].includes(un(n));
}
const Wo = Math.min,
  Wn = Math.max,
  zs = Math.round,
  gs = Math.floor,
  fn = (n) => ({ x: n, y: n });
function Gf(n) {
  const t = Be(n);
  let e = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const s = Se(n),
    o = s ? n.offsetWidth : e,
    r = s ? n.offsetHeight : i,
    l = zs(e) !== o || zs(i) !== r;
  return l && ((e = o), (i = r)), { width: e, height: i, $: l };
}
function Ze(n) {
  return n instanceof Element || n instanceof be(n).Element;
}
function dr(n) {
  return Ze(n) ? n : n.contextElement;
}
function Nn(n) {
  const t = dr(n);
  if (!Se(t)) return fn(1);
  const e = t.getBoundingClientRect(),
    { width: i, height: s, $: o } = Gf(t);
  let r = (o ? zs(e.width) : e.width) / i,
    l = (o ? zs(e.height) : e.height) / s;
  return (r && Number.isFinite(r)) || (r = 1), (l && Number.isFinite(l)) || (l = 1), { x: r, y: l };
}
const qy = fn(0);
function Zf(n) {
  const t = be(n);
  return fr() && t.visualViewport
    ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
    : qy;
}
function Pn(n, t, e, i) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const s = n.getBoundingClientRect(),
    o = dr(n);
  let r = fn(1);
  t && (i ? Ze(i) && (r = Nn(i)) : (r = Nn(n)));
  const l = (function (d, h, g) {
    return h === void 0 && (h = !1), !(!g || (h && g !== be(d))) && h;
  })(o, e, i)
    ? Zf(o)
    : fn(0);
  let a = (s.left + l.x) / r.x,
    c = (s.top + l.y) / r.y,
    f = s.width / r.x,
    u = s.height / r.y;
  if (o) {
    const d = be(o),
      h = i && Ze(i) ? be(i) : i;
    let g = d.frameElement;
    for (; g && i && h !== d; ) {
      const m = Nn(g),
        p = g.getBoundingClientRect(),
        _ = getComputedStyle(g),
        y = p.left + (g.clientLeft + parseFloat(_.paddingLeft)) * m.x,
        v = p.top + (g.clientTop + parseFloat(_.paddingTop)) * m.y;
      (a *= m.x), (c *= m.y), (f *= m.x), (u *= m.y), (a += y), (c += v), (g = be(g).frameElement);
    }
  }
  return Rs({ width: f, height: u, x: a, y: c });
}
function Gs(n) {
  return Ze(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function Je(n) {
  var t;
  return (t = (Kf(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Jf(n) {
  return Pn(Je(n)).left + Gs(n).scrollLeft;
}
function Gn(n) {
  if (un(n) === 'html') return n;
  const t = n.assignedSlot || n.parentNode || (zc(n) && n.host) || Je(n);
  return zc(t) ? t.host : t;
}
function Qf(n) {
  const t = Gn(n);
  return Ks(t) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : Se(t) && Ni(t) ? t : Qf(t);
}
function Hs(n, t) {
  var e;
  t === void 0 && (t = []);
  const i = Qf(n),
    s = i === ((e = n.ownerDocument) == null ? void 0 : e.body),
    o = be(i);
  return s ? t.concat(o, o.visualViewport || [], Ni(i) ? i : []) : t.concat(i, Hs(i));
}
function Hc(n, t, e) {
  let i;
  if (t === 'viewport')
    i = (function (s, o) {
      const r = be(s),
        l = Je(s),
        a = r.visualViewport;
      let c = l.clientWidth,
        f = l.clientHeight,
        u = 0,
        d = 0;
      if (a) {
        (c = a.width), (f = a.height);
        const h = fr();
        (!h || (h && o === 'fixed')) && ((u = a.offsetLeft), (d = a.offsetTop));
      }
      return { width: c, height: f, x: u, y: d };
    })(n, e);
  else if (t === 'document')
    i = (function (s) {
      const o = Je(s),
        r = Gs(s),
        l = s.ownerDocument.body,
        a = Wn(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth),
        c = Wn(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let f = -r.scrollLeft + Jf(s);
      const u = -r.scrollTop;
      return (
        Be(l).direction === 'rtl' && (f += Wn(o.clientWidth, l.clientWidth) - a),
        { width: a, height: c, x: f, y: u }
      );
    })(Je(n));
  else if (Ze(t))
    i = (function (s, o) {
      const r = Pn(s, !0, o === 'fixed'),
        l = r.top + s.clientTop,
        a = r.left + s.clientLeft,
        c = Se(s) ? Nn(s) : fn(1);
      return { width: s.clientWidth * c.x, height: s.clientHeight * c.y, x: a * c.x, y: l * c.y };
    })(t, e);
  else {
    const s = Zf(n);
    i = { ...t, x: t.x - s.x, y: t.y - s.y };
  }
  return Rs(i);
}
function $f(n, t) {
  const e = Gn(n);
  return !(e === t || !Ze(e) || Ks(e)) && (Be(e).position === 'fixed' || $f(e, t));
}
function Xy(n, t, e) {
  const i = Se(t),
    s = Je(t),
    o = e === 'fixed',
    r = Pn(n, !0, o, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = fn(0);
  if (i || (!i && !o))
    if (((un(t) !== 'body' || Ni(s)) && (l = Gs(t)), Se(t))) {
      const c = Pn(t, !0, o, t);
      (a.x = c.x + t.clientLeft), (a.y = c.y + t.clientTop);
    } else s && (a.x = Jf(s));
  return {
    x: r.left + l.scrollLeft - a.x,
    y: r.top + l.scrollTop - a.y,
    width: r.width,
    height: r.height,
  };
}
function Wc(n, t) {
  return Se(n) && Be(n).position !== 'fixed' ? (t ? t(n) : n.offsetParent) : null;
}
function Nc(n, t) {
  const e = be(n);
  if (!Se(n)) return e;
  let i = Wc(n, t);
  for (; i && Uy(i) && Be(i).position === 'static'; ) i = Wc(i, t);
  return i && (un(i) === 'html' || (un(i) === 'body' && Be(i).position === 'static' && !Ho(i)))
    ? e
    : i ||
        (function (s) {
          let o = Gn(s);
          for (; Se(o) && !Ks(o); ) {
            if (Ho(o)) return o;
            o = Gn(o);
          }
          return null;
        })(n) ||
        e;
}
const Ky = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (n) {
    let { rect: t, offsetParent: e, strategy: i } = n;
    const s = Se(e),
      o = Je(e);
    if (e === o) return t;
    let r = { scrollLeft: 0, scrollTop: 0 },
      l = fn(1);
    const a = fn(0);
    if ((s || (!s && i !== 'fixed')) && ((un(e) !== 'body' || Ni(o)) && (r = Gs(e)), Se(e))) {
      const c = Pn(e);
      (l = Nn(e)), (a.x = c.x + e.clientLeft), (a.y = c.y + e.clientTop);
    }
    return {
      width: t.width * l.x,
      height: t.height * l.y,
      x: t.x * l.x - r.scrollLeft * l.x + a.x,
      y: t.y * l.y - r.scrollTop * l.y + a.y,
    };
  },
  getDocumentElement: Je,
  getClippingRect: function (n) {
    let { element: t, boundary: e, rootBoundary: i, strategy: s } = n;
    const o = [
        ...(e === 'clippingAncestors'
          ? (function (a, c) {
              const f = c.get(a);
              if (f) return f;
              let u = Hs(a).filter((m) => Ze(m) && un(m) !== 'body'),
                d = null;
              const h = Be(a).position === 'fixed';
              let g = h ? Gn(a) : a;
              for (; Ze(g) && !Ks(g); ) {
                const m = Be(g),
                  p = Ho(g);
                p || m.position !== 'fixed' || (d = null),
                  (
                    h
                      ? !p && !d
                      : (!p &&
                          m.position === 'static' &&
                          d &&
                          ['absolute', 'fixed'].includes(d.position)) ||
                        (Ni(g) && !p && $f(a, g))
                  )
                    ? (u = u.filter((_) => _ !== g))
                    : (d = m),
                  (g = Gn(g));
              }
              return c.set(a, u), u;
            })(t, this._c)
          : [].concat(e)),
        i,
      ],
      r = o[0],
      l = o.reduce((a, c) => {
        const f = Hc(t, c, s);
        return (
          (a.top = Wn(f.top, a.top)),
          (a.right = Wo(f.right, a.right)),
          (a.bottom = Wo(f.bottom, a.bottom)),
          (a.left = Wn(f.left, a.left)),
          a
        );
      }, Hc(t, r, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  },
  getOffsetParent: Nc,
  getElementRects: async function (n) {
    let { reference: t, floating: e, strategy: i } = n;
    const s = this.getOffsetParent || Nc,
      o = this.getDimensions;
    return { reference: Xy(t, await s(e), i), floating: { x: 0, y: 0, ...(await o(e)) } };
  },
  getClientRects: function (n) {
    return Array.from(n.getClientRects());
  },
  getDimensions: function (n) {
    return Gf(n);
  },
  getScale: Nn,
  isElement: Ze,
  isRTL: function (n) {
    return getComputedStyle(n).direction === 'rtl';
  },
};
function Gy(n, t, e, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: o = !0,
      elementResize: r = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = i,
    c = dr(n),
    f = s || o ? [...(c ? Hs(c) : []), ...Hs(t)] : [];
  f.forEach((p) => {
    s && p.addEventListener('scroll', e, { passive: !0 }), o && p.addEventListener('resize', e);
  });
  const u =
    c && l
      ? (function (p, _) {
          let y,
            v = null;
          const k = Je(p);
          function w() {
            clearTimeout(y), v && v.disconnect(), (v = null);
          }
          return (
            (function M(D, T) {
              D === void 0 && (D = !1), T === void 0 && (T = 1), w();
              const { left: P, top: E, width: O, height: H } = p.getBoundingClientRect();
              if ((D || _(), !O || !H)) return;
              const W = {
                rootMargin:
                  -gs(E) +
                  'px ' +
                  -gs(k.clientWidth - (P + O)) +
                  'px ' +
                  -gs(k.clientHeight - (E + H)) +
                  'px ' +
                  -gs(P) +
                  'px',
                threshold: Wn(0, Wo(1, T)) || 1,
              };
              let $ = !0;
              function tt(Y) {
                const N = Y[0].intersectionRatio;
                if (N !== T) {
                  if (!$) return M();
                  N
                    ? M(!1, N)
                    : (y = setTimeout(() => {
                        M(!1, 1e-7);
                      }, 100));
                }
                $ = !1;
              }
              try {
                v = new IntersectionObserver(tt, { ...W, root: k.ownerDocument });
              } catch {
                v = new IntersectionObserver(tt, W);
              }
              v.observe(p);
            })(!0),
            w
          );
        })(c, e)
      : null;
  let d,
    h = -1,
    g = null;
  r &&
    ((g = new ResizeObserver((p) => {
      let [_] = p;
      _ &&
        _.target === c &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          g && g.observe(t);
        }))),
        e();
    })),
    c && !a && g.observe(c),
    g.observe(t));
  let m = a ? Pn(n) : null;
  return (
    a &&
      (function p() {
        const _ = Pn(n);
        !m || (_.x === m.x && _.y === m.y && _.width === m.width && _.height === m.height) || e(),
          (m = _),
          (d = requestAnimationFrame(p));
      })(),
    e(),
    () => {
      f.forEach((p) => {
        s && p.removeEventListener('scroll', e), o && p.removeEventListener('resize', e);
      }),
        u && u(),
        g && g.disconnect(),
        (g = null),
        a && cancelAnimationFrame(d);
    }
  );
}
const Zy = (n, t, e) => {
  const i = new Map(),
    s = { platform: Ky, ...e },
    o = { ...s.platform, _c: i };
  return Ey(n, t, { ...s, platform: o });
};
function Jy(n) {
  if ((n == null ? void 0 : n.previousElementSibling) === null) return;
  const t = n == null ? void 0 : n.previousElementSibling,
    e = Gy(t, n, () =>
      Zy(t, n, { placement: 'bottom-start', middleware: [Yy({ padding: 5 }), Vy()] }).then(
        ({ x: i, y: s }) => {
          Object.assign(n.style, { left: `${i}px`, top: `${s}px` });
        },
      ),
    );
  return {
    destroy() {
      e();
    },
  };
}
function Qy(n, t, e, i, s) {
  let o = n ? (Array.isArray(n) ? n : n.split(',')) : [];
  o = o.map((a) => a.replace(/(:\d+):\d+/, '$1'));
  let r = o,
    l = t ? (Array.isArray(t) ? t : [t]) : r.map((a) => wi(a, e, i, s));
  return (
    l && t && (o = l.map((a) => Fn(a, e, i, s))), { valueArray: o, prevValue: r, innerDates: l }
  );
}
function $y(n, t) {
  return n === 'auto'
    ? t.match(/g|hh?|ii?/i) && t.match(/y|m|d/i)
      ? 'datetime'
      : t.match(/g|hh?|ii?/i)
      ? 'time'
      : 'date'
    : n;
}
const tk = (n) => ({
    isTodayDisabled: n[1] & 1024,
    currentMode: n[0] & 33554432,
    i18n: n[0] & 8388608,
  }),
  Vc = (n) => ({
    onCancel: n[48],
    onConfirm: n[75],
    onClear: n[47],
    onToday: n[46],
    isTodayDisabled: n[41],
    currentMode: n[25],
    i18n: n[23],
  });
function jc(n, t, e) {
  const i = n.slice();
  return (i[95] = t[e]), (i[96] = t), (i[97] = e), i;
}
const ek = (n) => ({
    value: n[0] & 1,
    displayValue: n[0] & 1073741824,
    disabled: n[0] & 32,
    isDirty: n[1] & 64,
  }),
  Yc = (n) => ({
    value: n[0],
    displayValue: n[30],
    disabled: n[5],
    isDirty: n[37],
    onKeyDown: n[49],
    onInputFocus: n[52],
    onInputBlur: n[53],
  });
function Uc(n) {
  let t,
    e,
    i,
    s = !n[9] && qc(n);
  return {
    c() {
      (t = C('input')),
        (e = B()),
        s && s.c(),
        (i = ee()),
        b(t, 'type', 'hidden'),
        b(t, 'name', n[4]),
        (t.value = n[0]);
    },
    m(o, r) {
      x(o, t, r), x(o, e, r), s && s.m(o, r), x(o, i, r);
    },
    p(o, r) {
      r[0] & 16 && b(t, 'name', o[4]),
        r[0] & 1 && (t.value = o[0]),
        o[9]
          ? s && (s.d(1), (s = null))
          : s
          ? s.p(o, r)
          : ((s = qc(o)), s.c(), s.m(i.parentNode, i));
    },
    d(o) {
      o && A(t), o && A(e), s && s.d(o), o && A(i);
    },
  };
}
function qc(n) {
  let t, e, i, s, o, r;
  return {
    c() {
      (t = C('input')),
        b(t, 'type', 'text'),
        b(t, 'id', n[3]),
        b(t, 'tabindex', '0'),
        b(
          t,
          'name',
          (e = n[4].endsWith(']')
            ? n[4].substring(0, n[4].length - 1) + '_input]'
            : n[4] + '_input'),
        ),
        (t.value = n[30]),
        b(t, 'placeholder', n[6]),
        (t.disabled = n[5]),
        (t.required = n[7]),
        b(t, 'autocomplete', 'off'),
        b(t, 'inputmode', 'none'),
        b(t, 'class', (i = Yn(n[17]) + ' svelte-3mb4ax')),
        (t.readOnly = s = n[24] && !n[11] && !n[8]),
        st(t, 'value-dirty', !n[22] && n[37]);
    },
    m(l, a) {
      x(l, t, a),
        n[71](t),
        o ||
          ((r = [
            R(t, 'input', function () {
              Oe(n[11] ? n[50] : tu) && (n[11] ? n[50] : tu).apply(this, arguments);
            }),
            Qn(n[42].call(null, t, n[43])),
            R(t, 'focus', n[52]),
            R(t, 'blur', n[53]),
            R(t, 'click', n[72]),
            R(t, 'input', n[69]),
            R(t, 'change', n[70]),
            R(t, 'keydown', n[49]),
          ]),
          (o = !0));
    },
    p(l, a) {
      (n = l),
        a[0] & 8 && b(t, 'id', n[3]),
        a[0] & 16 &&
          e !==
            (e = n[4].endsWith(']')
              ? n[4].substring(0, n[4].length - 1) + '_input]'
              : n[4] + '_input') &&
          b(t, 'name', e),
        a[0] & 1073741824 && t.value !== n[30] && (t.value = n[30]),
        a[0] & 64 && b(t, 'placeholder', n[6]),
        a[0] & 32 && (t.disabled = n[5]),
        a[0] & 128 && (t.required = n[7]),
        a[0] & 131072 && i !== (i = Yn(n[17]) + ' svelte-3mb4ax') && b(t, 'class', i),
        a[0] & 16779520 && s !== (s = n[24] && !n[11] && !n[8]) && (t.readOnly = s),
        (a[0] & 4325376) | (a[1] & 64) && st(t, 'value-dirty', !n[22] && n[37]);
    },
    d(l) {
      l && A(t), n[71](null), (o = !1), Pt(r);
    },
  };
}
function nk(n) {
  let t,
    e = !n[1] && Uc(n);
  return {
    c() {
      e && e.c(), (t = ee());
    },
    m(i, s) {
      e && e.m(i, s), x(i, t, s);
    },
    p(i, s) {
      i[1] ? e && (e.d(1), (e = null)) : e ? e.p(i, s) : ((e = Uc(i)), e.c(), e.m(t.parentNode, t));
    },
    d(i) {
      e && e.d(i), i && A(t);
    },
  };
}
function Xc(n) {
  let t,
    e,
    i = [],
    s = new Map(),
    o,
    r,
    l,
    a,
    c,
    f,
    u = n[36];
  const d = (p) => p[97];
  for (let p = 0; p < u.length; p += 1) {
    let _ = jc(n, u, p),
      y = d(_);
    s.set(y, (i[p] = Kc(y, _)));
  }
  const h = n[67]['action-row'],
    g = Kt(h, n, n[66], Vc),
    m = g || ok(n);
  return {
    c() {
      (t = C('div')), (e = C('div'));
      for (let p = 0; p < i.length; p += 1) i[p].c();
      (o = B()),
        m && m.c(),
        b(e, 'class', 'sdt-widget-wrap svelte-3mb4ax'),
        b(t, 'class', (r = 'std-calendar-wrap ' + n[12] + ' svelte-3mb4ax')),
        st(t, 'is-popup', !n[39]),
        st(t, 'is-range-wrap', n[8]);
    },
    m(p, _) {
      x(p, t, _), S(t, e);
      for (let y = 0; y < i.length; y += 1) i[y] && i[y].m(e, null);
      S(t, o),
        m && m.m(t, null),
        (a = !0),
        c || ((f = [Qn(n[38].call(null, t)), R(t, 'mousedown', Ae(n[68]))]), (c = !0));
    },
    p(p, _) {
      (_[0] & 1048700164) | (_[1] & 26222629) &&
        ((u = p[36]), vt(), (i = Me(i, _, d, 1, p, u, s, e, Du, Kc, null, jc)), wt()),
        g
          ? g.p &&
            (!a || (_[0] & 41943040) | (_[1] & 1024) | (_[2] & 16)) &&
            Gt(g, h, p, p[66], a ? Jt(h, p[66], _, tk) : Zt(p[66]), Vc)
          : m &&
            m.p &&
            (!a || (_[0] & 45875200) | (_[1] & 1040)) &&
            m.p(p, a ? _ : [-1, -1, -1, -1]),
        (!a || (_[0] & 4096 && r !== (r = 'std-calendar-wrap ' + p[12] + ' svelte-3mb4ax'))) &&
          b(t, 'class', r),
        (!a || (_[0] & 4096) | (_[1] & 256)) && st(t, 'is-popup', !p[39]),
        (!a || _[0] & 4352) && st(t, 'is-range-wrap', p[8]);
    },
    i(p) {
      if (!a) {
        for (let _ = 0; _ < u.length; _ += 1) L(i[_]);
        L(m, p),
          p &&
            pt(() => {
              a && (l || (l = ot(t, n[40], { duration: 200 }, !0)), l.run(1));
            }),
          (a = !0);
      }
    },
    o(p) {
      for (let _ = 0; _ < i.length; _ += 1) F(i[_]);
      F(m, p), p && (l || (l = ot(t, n[40], { duration: 200 }, !1)), l.run(0)), (a = !1);
    },
    d(p) {
      p && A(t);
      for (let _ = 0; _ < i.length; _ += 1) i[_].d();
      m && m.d(p), p && l && l.end(), (c = !1), Pt(f);
    },
  };
}
function ik(n) {
  let t,
    e = n[96],
    i = n[97],
    s;
  const o = () => n[74](t, e, i),
    r = () => n[74](null, e, i);
  let l = {
    wid: n[97],
    date: n[29][n[97]],
    startDate: n[28],
    endDate: n[27],
    hasDateComponent: n[26] !== 'time',
    showMeridian: n[13].match(n[14] === 'php' ? 'a|A' : 'p|P') !== null,
    i18n: n[23],
    minuteIncrement: n[15],
  };
  return (
    (t = new Fy({ props: l })),
    o(),
    t.$on('hour', n[44]),
    t.$on('minute', n[44]),
    t.$on('switch', n[51]),
    t.$on('time-switch', n[55]),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(a, c) {
        J(t, a, c), (s = !0);
      },
      p(a, c) {
        (e !== a[96] || i !== a[97]) && (r(), (e = a[96]), (i = a[97]), o());
        const f = {};
        c[1] & 32 && (f.wid = a[97]),
          (c[0] & 536870912) | (c[1] & 32) && (f.date = a[29][a[97]]),
          c[0] & 268435456 && (f.startDate = a[28]),
          c[0] & 134217728 && (f.endDate = a[27]),
          c[0] & 67108864 && (f.hasDateComponent = a[26] !== 'time'),
          c[0] & 24576 && (f.showMeridian = a[13].match(a[14] === 'php' ? 'a|A' : 'p|P') !== null),
          c[0] & 8388608 && (f.i18n = a[23]),
          c[0] & 32768 && (f.minuteIncrement = a[15]),
          t.$set(f);
      },
      i(a) {
        s || (L(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        F(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        r(), Q(t, a);
      },
    }
  );
}
function sk(n) {
  var s;
  let t,
    e,
    i = {
      wid: n[97],
      dates: n[29],
      isRange: n[8],
      startDate: n[28],
      endDate: n[27],
      enableTimeToggle: (s = n[26]) == null ? void 0 : s.includes('time'),
      initialView: n[2] > 2 ? 2 : n[2],
      hoverDate: n[31],
      additionalDisableFn: n[10],
      i18n: n[23],
      weekStart: n[16],
    };
  return (
    (t = new Ay({ props: i })),
    n[73](t),
    t.$on('date', n[44]),
    t.$on('switch', n[51]),
    t.$on('internal_hoverUpdate', n[54]),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(o, r) {
        J(t, o, r), (e = !0);
      },
      p(o, r) {
        var a;
        const l = {};
        r[1] & 32 && (l.wid = o[97]),
          r[0] & 536870912 && (l.dates = o[29]),
          r[0] & 256 && (l.isRange = o[8]),
          r[0] & 268435456 && (l.startDate = o[28]),
          r[0] & 134217728 && (l.endDate = o[27]),
          r[0] & 67108864 &&
            (l.enableTimeToggle = (a = o[26]) == null ? void 0 : a.includes('time')),
          r[0] & 4 && (l.initialView = o[2] > 2 ? 2 : o[2]),
          r[1] & 1 && (l.hoverDate = o[31]),
          r[0] & 1024 && (l.additionalDisableFn = o[10]),
          r[0] & 8388608 && (l.i18n = o[23]),
          r[0] & 65536 && (l.weekStart = o[16]),
          t.$set(l);
      },
      i(o) {
        e || (L(t.$$.fragment, o), (e = !0));
      },
      o(o) {
        F(t.$$.fragment, o), (e = !1);
      },
      d(o) {
        n[73](null), Q(t, o);
      },
    }
  );
}
function Kc(n, t) {
  let e, i, s, o, r;
  const l = [sk, ik],
    a = [];
  function c(f, u) {
    return f[25] === 'date' ? 0 : 1;
  }
  return (
    (i = c(t)),
    (s = a[i] = l[i](t)),
    {
      key: n,
      first: null,
      c() {
        (e = C('div')),
          s.c(),
          (o = B()),
          b(e, 'class', 'sdt-widget svelte-3mb4ax'),
          (this.first = e);
      },
      m(f, u) {
        x(f, e, u), a[i].m(e, null), S(e, o), (r = !0);
      },
      p(f, u) {
        t = f;
        let d = i;
        (i = c(t)),
          i === d
            ? a[i].p(t, u)
            : (vt(),
              F(a[d], 1, 1, () => {
                a[d] = null;
              }),
              wt(),
              (s = a[i]),
              s ? s.p(t, u) : ((s = a[i] = l[i](t)), s.c()),
              L(s, 1),
              s.m(e, o));
      },
      i(f) {
        r || (L(s), (r = !0));
      },
      o(f) {
        F(s), (r = !1);
      },
      d(f) {
        f && A(e), a[i].d();
      },
    }
  );
}
function Gc(n) {
  let t,
    e,
    i = !n[35] && Zc(n),
    s = (n[20] || n[21]) && Jc(n);
  return {
    c() {
      (t = C('div')), i && i.c(), (e = B()), s && s.c(), b(t, 'class', 'sdt-btn-row svelte-3mb4ax');
    },
    m(o, r) {
      x(o, t, r), i && i.m(t, null), S(t, e), s && s.m(t, null);
    },
    p(o, r) {
      o[35] ? i && (i.d(1), (i = null)) : i ? i.p(o, r) : ((i = Zc(o)), i.c(), i.m(t, e)),
        o[20] || o[21]
          ? s
            ? s.p(o, r)
            : ((s = Jc(o)), s.c(), s.m(t, null))
          : s && (s.d(1), (s = null));
    },
    d(o) {
      o && A(t), i && i.d(), s && s.d();
    },
  };
}
function Zc(n) {
  let t,
    e,
    i = n[23].cancelBtn + '',
    s,
    o,
    r,
    l = n[23].okBtn + '',
    a,
    c,
    f;
  return {
    c() {
      (t = C('span')),
        (e = C('button')),
        (s = X(i)),
        (o = B()),
        (r = C('button')),
        (a = X(l)),
        b(e, 'type', 'button'),
        b(e, 'class', 'sdt-action-btn sdt-clear-btn svelte-3mb4ax'),
        b(r, 'type', 'button'),
        b(r, 'class', 'sdt-action-btn sdt-today-btn svelte-3mb4ax');
    },
    m(u, d) {
      x(u, t, d),
        S(t, e),
        S(e, s),
        S(t, o),
        S(t, r),
        S(r, a),
        c || ((f = [R(e, 'click', n[48]), R(r, 'click', n[76])]), (c = !0));
    },
    p(u, d) {
      d[0] & 8388608 && i !== (i = u[23].cancelBtn + '') && mt(s, i),
        d[0] & 8388608 && l !== (l = u[23].okBtn + '') && mt(a, l);
    },
    d(u) {
      u && A(t), (c = !1), Pt(f);
    },
  };
}
function Jc(n) {
  let t,
    e,
    i = n[20] && n[25] === 'date' && Qc(n),
    s = n[21] && $c(n);
  return {
    c() {
      (t = C('span')), i && i.c(), (e = B()), s && s.c();
    },
    m(o, r) {
      x(o, t, r), i && i.m(t, null), S(t, e), s && s.m(t, null);
    },
    p(o, r) {
      o[20] && o[25] === 'date'
        ? i
          ? i.p(o, r)
          : ((i = Qc(o)), i.c(), i.m(t, e))
        : i && (i.d(1), (i = null)),
        o[21] ? (s ? s.p(o, r) : ((s = $c(o)), s.c(), s.m(t, null))) : s && (s.d(1), (s = null));
    },
    d(o) {
      o && A(t), i && i.d(), s && s.d();
    },
  };
}
function Qc(n) {
  let t,
    e = n[23].todayBtn + '',
    i,
    s,
    o,
    r;
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        b(t, 'type', 'button'),
        b(t, 'class', (s = Yn(n[18]) + ' svelte-3mb4ax')),
        (t.disabled = n[41]);
    },
    m(l, a) {
      x(l, t, a), S(t, i), o || ((r = R(t, 'click', n[46])), (o = !0));
    },
    p(l, a) {
      a[0] & 8388608 && e !== (e = l[23].todayBtn + '') && mt(i, e),
        a[0] & 262144 && s !== (s = Yn(l[18]) + ' svelte-3mb4ax') && b(t, 'class', s),
        a[1] & 1024 && (t.disabled = l[41]);
    },
    d(l) {
      l && A(t), (o = !1), r();
    },
  };
}
function $c(n) {
  let t,
    e = n[23].clearBtn + '',
    i,
    s,
    o,
    r;
  return {
    c() {
      (t = C('button')),
        (i = X(e)),
        b(t, 'type', 'button'),
        b(t, 'class', (s = Yn(n[19]) + ' svelte-3mb4ax'));
    },
    m(l, a) {
      x(l, t, a), S(t, i), o || ((r = R(t, 'click', n[47])), (o = !0));
    },
    p(l, a) {
      a[0] & 8388608 && e !== (e = l[23].clearBtn + '') && mt(i, e),
        a[0] & 524288 && s !== (s = Yn(l[19]) + ' svelte-3mb4ax') && b(t, 'class', s);
    },
    d(l) {
      l && A(t), (o = !1), r();
    },
  };
}
function ok(n) {
  let t,
    e = (!n[35] || !0) && Gc(n);
  return {
    c() {
      e && e.c(), (t = ee());
    },
    m(i, s) {
      e && e.m(i, s), x(i, t, s);
    },
    p(i, s) {
      i[35], e ? e.p(i, s) : ((e = Gc(i)), e.c(), e.m(t.parentNode, t));
    },
    d(i) {
      e && e.d(i), i && A(t);
    },
  };
}
function rk(n) {
  let t, e, i;
  const s = n[67].inputs,
    o = Kt(s, n, n[66], Yc),
    r = o || nk(n);
  let l = n[34] && n[24] && Xc(n);
  return {
    c() {
      (t = C('span')),
        r && r.c(),
        (e = B()),
        l && l.c(),
        b(t, 'class', 'std-component-wrap svelte-3mb4ax');
    },
    m(a, c) {
      x(a, t, c), r && r.m(t, null), S(t, e), l && l.m(t, null), (i = !0);
    },
    p(a, c) {
      o
        ? o.p &&
          (!i || (c[0] & 1073741857) | (c[1] & 64) | (c[2] & 16)) &&
          Gt(o, s, a, a[66], i ? Jt(s, a[66], c, ek) : Zt(a[66]), Yc)
        : r && r.p && (!i || (c[0] & 1094847483) | (c[1] & 74)) && r.p(a, i ? c : [-1, -1, -1, -1]),
        a[34] && a[24]
          ? l
            ? (l.p(a, c), (c[0] & 16777216) | (c[1] & 8) && L(l, 1))
            : ((l = Xc(a)), l.c(), L(l, 1), l.m(t, null))
          : l &&
            (vt(),
            F(l, 1, 1, () => {
              l = null;
            }),
            wt());
    },
    i(a) {
      i || (L(r, a), L(l), (i = !0));
    },
    o(a) {
      F(r, a), F(l), (i = !1);
    },
    d(a) {
      a && A(t), r && r.d(a), l && l.d();
    },
  };
}
const ue = wy;
function lk(n) {
  return n ? [{ ref: null }, { ref: null }] : [{ ref: null }];
}
const tu = () => {};
function ak(n, t, e) {
  let i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    { $$slots: m = {}, $$scope: p } = t,
    { inputId: _ = '' } = t,
    { name: y = 'date' } = t,
    { disabled: v = !1 } = t,
    { placeholder: k = null } = t,
    { required: w = !1 } = t,
    { value: M = null } = t,
    { initialDate: D = null } = t,
    { isRange: T = !1 } = t,
    { startDate: P = null } = t,
    { endDate: E = null } = t,
    { pickerOnly: O = !1 } = t,
    { startView: H = ye } = t,
    { mode: W = 'auto' } = t,
    { disableDatesFn: $ = null } = t,
    { manualInput: tt = !1 } = t,
    { theme: Y = ue.theme } = t,
    { format: N = ue.format } = t,
    { formatType: q = ue.formatType } = t,
    { displayFormat: V = ue.displayFormat } = t,
    { displayFormatType: I = ue.displayFormatType } = t,
    { minuteIncrement: K = ue.minuteIncrement } = t,
    { weekStart: U = ue.weekStart } = t,
    { inputClasses: ft = ue.inputClasses } = t,
    { todayBtnClasses: Mt = ue.todayBtnClasses } = t,
    { clearBtnClasses: It = ue.clearBtnClasses } = t,
    { todayBtn: kt = ue.todayBtn } = t,
    { clearBtn: G = ue.clearBtn } = t,
    { autocommit: et = ue.autocommit } = t,
    { i18n: Lt = ue.i18n } = t,
    { validatorAction: z = null } = t,
    { ce_valueElement: xt = null } = t,
    { ce_displayElement: ht = null } = t;
  const Qt = ke();
  let { valueArray: zt, prevValue: nt, innerDates: yt } = Qy(M, D, N, Lt, q),
    Ft = N,
    hn = O,
    Zi = [...zt],
    gn = oi(),
    ii = Qi(),
    hr,
    De = H === Sy ? 'time' : 'date',
    si = !1,
    Zs = ht,
    nd = z ? z.shift() : () => {},
    id = z || [],
    Ji,
    Js;
  function sd(j, ne, Yt, li, ai) {
    return !j || (ne && (Yt === 'datetime' || ai.length !== 2)) ? !1 : li === 'minute' || Yt === li;
  }
  function od(j) {
    j.join('') !== nt.join('') &&
      (e(29, (yt = j.map((ne) => wi(ne, N, Lt, q)))), (nt = j), (gn = oi()), e(30, (ii = Qi())));
  }
  function rd(j) {
    gn !== j && (e(64, (zt = (j || '').split(','))), (Zi = zt));
  }
  function ld(j, ne) {
    Ft !== j &&
      yt.length &&
      (e(64, (zt = yt.map((Yt) => Fn(Yt, j, Lt, q)))),
      (nt = zt),
      e(30, (ii = Qi())),
      (Ft = j),
      W === 'auto' &&
        e(
          26,
          (c =
            j.match(/g|hh?|ii?/i) && j.match(/y|m|d/i)
              ? 'datetime'
              : j.match(/g|hh?|ii?/i)
              ? 'time'
              : 'date'),
        ),
      (gn = oi()),
      He(!0));
  }
  function Qi() {
    return yt
      .map((j) => Fn(j, V || N, Lt, I || q))
      .sort()
      .join(' - ');
  }
  function ad() {
    return T ? (zt.length === 2 ? zt : null) : zt[0] || null;
  }
  function oi() {
    return zt.join(',');
  }
  function gr(j) {
    return j.join(',') !== Zi.join(',');
  }
  function mr() {
    e(2, (H = ye)),
      (si = !1),
      c === 'datetime'
        ? setTimeout(
            () => {
              O || e(34, (i = !1)), e(25, (De = 'date'));
            },
            et ? 300 : 0,
          )
        : O || e(34, (i = !1));
  }
  function cd(j, ne) {
    j === 'date' && c === 'datetime' && ((T && zt.length === 2) || !T)
      ? e(25, (De = 'time'))
      : j === 'hour' && a[ne].ref.showMinuteView();
  }
  function Qs({ type: j, detail: ne }) {
    let { value: Yt, isKeyboard: li, dateIndex: ai } = ne;
    if (
      (Yt &&
        !T &&
        yt.length &&
        yt[0].getFullYear() === Yt.getFullYear() &&
        yt[0].getMonth() === Yt.getMonth() &&
        yt[0].getDate() === Yt.getDate() &&
        c === 'date' &&
        !w &&
        (Yt = null),
      T)
    ) {
      if (j === 'date')
        e(
          29,
          (yt = Yt
            ? (yt.length === 2 ? [Yt] : yt.concat(Yt))
                .map((ci) => ci.getTime())
                .sort()
                .map((ci) => new Date(ci))
            : []),
        );
      else if (Yt && ai !== void 0) e(29, (yt[ai] = Yt), yt);
      else throw new Error('Invalid event type');
      e(64, (zt = yt.map((ci) => Fn(ci, N, Lt, q))));
    } else e(29, (yt = Yt ? [Yt] : [])), e(64, (zt = Yt ? [Fn(Yt, N, Lt, q)] : []));
    li || (e(65, (Js = j)), cd(j, ai || 0)), Cu().then(() => u && He(!li));
  }
  function He(j) {
    e(0, (M = ad())),
      (gn = oi()),
      (Zi = [...zt]),
      e(30, (ii = Qi())),
      e(37, (g = gr(zt))),
      hd(!0),
      Qt('change', T ? zt : zt[0] || null),
      j && mr();
  }
  function ud() {
    const j = new Date(),
      ne = yt[0] || j;
    Qs(
      new CustomEvent(c, {
        detail: {
          value: new Date(
            j.getFullYear(),
            j.getMonth(),
            j.getDate(),
            ne.getHours(),
            ne.getMinutes(),
            0,
          ),
          isKeyboard: !1,
        },
      }),
    ),
      He(!0);
  }
  function $i() {
    e(64, (zt = [])), (nt = []), e(29, (yt = [])), (gn = ''), et && He();
  }
  function $s() {
    e(64, (zt = [...Zi])), (gn = oi()), mr();
  }
  function pr(j) {
    if (
      (i || (['Backspace', 'Delete'].includes(j.key) && !w && $i(), j.key === 'Enter' && ri()),
      !i && j.key !== 'Tab')
    ) {
      e(34, (i = j.key !== 'Shift')), j.preventDefault();
      return;
    }
    switch (j.key) {
      case 'PageDown':
      case 'PageUp':
      case 'ArrowDown':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
        if ((j.preventDefault(), T)) return;
        De === 'date'
          ? Ji.handleGridNav(j.key, j.shiftKey)
          : a[0].ref.makeTick(['ArrowDown', 'ArrowLeft', 'PageDown'].includes(j.key) ? -1 : 1);
        break;
      case 'Escape':
        et ? $i() : $s();
        break;
      case 'Backspace':
        if (tt && !T) return;
      case 'Delete':
        !w && $i();
        break;
      case 'Enter':
        if ((hn && j.preventDefault(), zt.length === 0)) {
          e(34, (i = !1));
          return;
        }
        if (De === 'time' && !si) return a[0].ref.showMinuteView();
        if (c === 'datetime' && De !== 'time') {
          e(25, (De = 'time'));
          return;
        }
        He(c === 'date' || (c.includes('time') && si));
        break;
      case 'Tab':
        i && (e(34, (i = !1)), j.preventDefault());
      case 'F5':
        break;
      default:
        !tt && j.preventDefault();
    }
  }
  function fd(j) {
    j.preventDefault(), j.stopPropagation();
    const ne = wi(j.target.value, V || N, Lt, I || q);
    Fn(ne, V || N, Lt, I || q) === j.target.value &&
      Qs(new CustomEvent('date', { detail: { value: ne, isKeyboard: !0 } }));
  }
  function dd(j) {
    e(2, (H = ye)), e(25, (De = j.detail)), (si = !1);
  }
  function ri() {
    e(24, (hn = !0)), e(34, (i = !0));
  }
  function br() {
    e(24, (hn = !1)), f ? He(!1) : $s(), !ht && Qt('blur');
  }
  function hd(j) {
    xt &&
      ht &&
      (e(56, (xt.value = zt.join(',') || ''), xt),
      e(1, (ht.value = ii), ht),
      xt.dispatchEvent(new Event('input')),
      ht.dispatchEvent(new Event('input'))),
      j && Qt('input', gn);
  }
  function gd({ detail: j }) {
    e(31, (hr = j));
  }
  function md(j) {
    si = j.detail;
  }
  ze(() => {
    ht &&
      (e(1, (ht.onfocus = ri), ht),
      e(1, (ht.onblur = br), ht),
      e(1, (ht.onclick = () => !i && ri()), ht),
      e(1, (ht.onkeydown = pr), ht));
  });
  function pd(j) {
    ut.call(this, n, j);
  }
  function bd(j) {
    ut.call(this, n, j);
  }
  function _d(j) {
    ut.call(this, n, j);
  }
  function yd(j) {
    dt[j ? 'unshift' : 'push'](() => {
      (Zs = j), e(32, Zs);
    });
  }
  const kd = () => {
    !i && ri();
  };
  function vd(j) {
    dt[j ? 'unshift' : 'push'](() => {
      (Ji = j), e(33, Ji);
    });
  }
  function wd(j, ne, Yt) {
    dt[j ? 'unshift' : 'push'](() => {
      (ne[Yt].ref = j), e(36, a), e(8, T);
    });
  }
  const Sd = () => He(!0),
    Md = () => He(!0);
  return (
    (n.$$set = (j) => {
      'inputId' in j && e(3, (_ = j.inputId)),
        'name' in j && e(4, (y = j.name)),
        'disabled' in j && e(5, (v = j.disabled)),
        'placeholder' in j && e(6, (k = j.placeholder)),
        'required' in j && e(7, (w = j.required)),
        'value' in j && e(0, (M = j.value)),
        'initialDate' in j && e(57, (D = j.initialDate)),
        'isRange' in j && e(8, (T = j.isRange)),
        'startDate' in j && e(58, (P = j.startDate)),
        'endDate' in j && e(59, (E = j.endDate)),
        'pickerOnly' in j && e(9, (O = j.pickerOnly)),
        'startView' in j && e(2, (H = j.startView)),
        'mode' in j && e(60, (W = j.mode)),
        'disableDatesFn' in j && e(10, ($ = j.disableDatesFn)),
        'manualInput' in j && e(11, (tt = j.manualInput)),
        'theme' in j && e(12, (Y = j.theme)),
        'format' in j && e(13, (N = j.format)),
        'formatType' in j && e(14, (q = j.formatType)),
        'displayFormat' in j && e(61, (V = j.displayFormat)),
        'displayFormatType' in j && e(62, (I = j.displayFormatType)),
        'minuteIncrement' in j && e(15, (K = j.minuteIncrement)),
        'weekStart' in j && e(16, (U = j.weekStart)),
        'inputClasses' in j && e(17, (ft = j.inputClasses)),
        'todayBtnClasses' in j && e(18, (Mt = j.todayBtnClasses)),
        'clearBtnClasses' in j && e(19, (It = j.clearBtnClasses)),
        'todayBtn' in j && e(20, (kt = j.todayBtn)),
        'clearBtn' in j && e(21, (G = j.clearBtn)),
        'autocommit' in j && e(22, (et = j.autocommit)),
        'i18n' in j && e(23, (Lt = j.i18n)),
        'validatorAction' in j && e(63, (z = j.validatorAction)),
        'ce_valueElement' in j && e(56, (xt = j.ce_valueElement)),
        'ce_displayElement' in j && e(1, (ht = j.ce_displayElement)),
        '$$scope' in j && e(66, (p = j.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 512 && e(34, (i = O)),
        (n.$$.dirty[0] & 8413184) | (n.$$.dirty[1] & 134217728) &&
          e(28, (s = P ? wi(P, N, Lt, q) : null)),
        (n.$$.dirty[0] & 8413184) | (n.$$.dirty[1] & 268435456) &&
          e(27, (o = E ? new Date(wi(E, N, Lt, q).setSeconds(1)) : null)),
        n.$$.dirty[0] & 402653184 && e(41, (r = (s && s > new Date()) || (o && o < new Date()))),
        n.$$.dirty[0] & 512 && e(40, (l = O ? () => ({}) : bt)),
        n.$$.dirty[0] & 256 && e(36, (a = lk(T))),
        (n.$$.dirty[0] & 8192) | (n.$$.dirty[1] & 536870912) && e(26, (c = $y(W, N))),
        n.$$.dirty[0] & 100663296 && c === 'time' && De !== c && e(25, (De = c)),
        n.$$.dirty[0] & 71303424 && e(35, (f = et && ((T && c === 'date') || !T))),
        (n.$$.dirty[0] & 71303424) | (n.$$.dirty[2] & 12) && (u = sd(et, T, c, Js, zt)),
        n.$$.dirty[0] & 16777218 && ht && e(1, (ht.readOnly = hn), ht),
        n.$$.dirty[0] & 512 && e(39, (d = !!O)),
        n.$$.dirty[0] & 512 && e(38, (h = O ? () => {} : Jy)),
        n.$$.dirty[2] & 4 && e(37, (g = gr(zt))),
        n.$$.dirty[0] & 1 && rd(M),
        n.$$.dirty[2] & 4 && od(zt),
        (n.$$.dirty[0] & 8192) | (n.$$.dirty[1] & 1073741824) && ld(N);
    }),
    [
      M,
      ht,
      H,
      _,
      y,
      v,
      k,
      w,
      T,
      O,
      $,
      tt,
      Y,
      N,
      q,
      K,
      U,
      ft,
      Mt,
      It,
      kt,
      G,
      et,
      Lt,
      hn,
      De,
      c,
      o,
      s,
      yt,
      ii,
      hr,
      Zs,
      Ji,
      i,
      f,
      a,
      g,
      h,
      d,
      l,
      r,
      nd,
      id,
      Qs,
      He,
      ud,
      $i,
      $s,
      pr,
      fd,
      dd,
      ri,
      br,
      gd,
      md,
      xt,
      D,
      P,
      E,
      W,
      V,
      I,
      z,
      zt,
      Js,
      p,
      m,
      pd,
      bd,
      _d,
      yd,
      kd,
      vd,
      wd,
      Sd,
      Md,
    ]
  );
}
class No extends lt {
  constructor(t) {
    super(),
      at(
        this,
        t,
        ak,
        rk,
        rt,
        {
          inputId: 3,
          name: 4,
          disabled: 5,
          placeholder: 6,
          required: 7,
          value: 0,
          initialDate: 57,
          isRange: 8,
          startDate: 58,
          endDate: 59,
          pickerOnly: 9,
          startView: 2,
          mode: 60,
          disableDatesFn: 10,
          manualInput: 11,
          theme: 12,
          format: 13,
          formatType: 14,
          displayFormat: 61,
          displayFormatType: 62,
          minuteIncrement: 15,
          weekStart: 16,
          inputClasses: 17,
          todayBtnClasses: 18,
          clearBtnClasses: 19,
          todayBtn: 20,
          clearBtn: 21,
          autocommit: 22,
          i18n: 23,
          validatorAction: 63,
          ce_valueElement: 56,
          ce_displayElement: 1,
        },
        null,
        [-1, -1, -1, -1],
      );
  }
}
const eu = { invalid: 'Time frame is invalid', overlap: 'Time frame is overlapping' },
  ck = ({ from: n, to: t, timeFrames: e }) =>
    e.findIndex(
      ({ from: i, to: s }) =>
        (n >= i && n <= s) || (t <= i && t >= s) || (n >= i && t <= s) || (n <= i && t >= s),
    ),
  uk = ({ from: n, to: t }) => !(n >= t);
function nu(n, t, e) {
  const i = n.slice();
  return (i[20] = t[e]), (i[21] = t), (i[22] = e), i;
}
function iu(n) {
  let t,
    e = n[3],
    i = [];
  for (let s = 0; s < e.length; s += 1) i[s] = su(nu(n, e, s));
  return {
    c() {
      t = C('div');
      for (let s = 0; s < i.length; s += 1) i[s].c();
      b(
        t,
        'class',
        'mt-2 flex p-2 flex-wrap justify-center gap-2 rounded-md border-dashed border-2 border-' +
          n[8] +
          '-500',
      );
    },
    m(s, o) {
      x(s, t, o);
      for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(t, null);
    },
    p(s, o) {
      if (o & 1308) {
        e = s[3];
        let r;
        for (r = 0; r < e.length; r += 1) {
          const l = nu(s, e, r);
          i[r] ? i[r].p(l, o) : ((i[r] = su(l)), i[r].c(), i[r].m(t, null));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = e.length;
      }
    },
    d(s) {
      s && A(t), oe(i, s);
    },
  };
}
function su(n) {
  let t,
    e,
    i = n[20].from + '',
    s,
    o,
    r = n[20].to + '',
    l,
    a,
    c,
    f,
    u,
    d = n[22],
    h,
    g;
  function m() {
    return n[14](n[20]);
  }
  const p = () => n[15](t, d),
    _ = () => n[15](null, d);
  return {
    c() {
      (t = C('span')),
        (e = C('span')),
        (s = X(i)),
        (o = X(' - ')),
        (l = X(r)),
        (a = B()),
        (c = C('button')),
        (f = C('span')),
        (u = B()),
        b(
          f,
          'class',
          'h-full w-full inline-block bg-white rounded-md group-hover:bg-' + n[8] + '-500',
        ),
        b(f, 'style', Re(Ou)),
        b(
          c,
          'class',
          'group h-5 w-5 rounded-md border-2 border-white hover:bg-white transition-all',
        ),
        b(
          t,
          'class',
          'chip bg-' + n[8] + '-500 text-white select-none cursor-default !filter-none',
        ),
        st(t, 'animate-pulse', n[22] === n[2]);
    },
    m(y, v) {
      x(y, t, v),
        S(t, e),
        S(e, s),
        S(e, o),
        S(e, l),
        S(t, a),
        S(t, c),
        S(c, f),
        S(t, u),
        p(),
        h || ((g = R(c, 'click', m)), (h = !0));
    },
    p(y, v) {
      (n = y),
        v & 8 && i !== (i = n[20].from + '') && mt(s, i),
        v & 8 && r !== (r = n[20].to + '') && mt(l, r),
        d !== n[22] && (_(), (d = n[22]), p()),
        v & 4 && st(t, 'animate-pulse', n[22] === n[2]);
    },
    d(y) {
      y && A(t), _(), (h = !1), g();
    },
  };
}
function fk(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m, p, _;
  function y(D) {
    n[12](D);
  }
  let v = {
    clearBtn: !1,
    format: 'hh:ii',
    inputClasses:
      'p-2 w-16 text-white text-center  rounded-md bg-' +
      n[8] +
      '-500 cursor-pointer hover:brightness-110 focus:brightness-110',
  };
  n[5] !== void 0 && (v.value = n[5]), (r = new No({ props: v })), dt.push(() => Ct(r, 'value', y));
  function k(D) {
    n[13](D);
  }
  let w = {
    clearBtn: !1,
    format: 'hh:ii',
    inputClasses:
      'p-2 w-16 text-white text-center  rounded-md bg-' +
      n[8] +
      '-500 cursor-pointer hover:brightness-110 focus:brightness-110',
  };
  n[6] !== void 0 && (w.value = n[6]), (c = new No({ props: w })), dt.push(() => Ct(c, 'value', k));
  let M = n[3].length > 0 && iu(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = C('button')),
        (s = X('Add time frame')),
        (o = B()),
        Z(r.$$.fragment),
        (a = X(`\r
    -\r
    `)),
        Z(c.$$.fragment),
        (u = B()),
        (d = C('div')),
        (h = X(n[1])),
        (g = B()),
        M && M.c(),
        b(i, 'class', 'btn bg-' + n[8] + '-500 text-white rounded-md focus:brightness-110'),
        b(d, 'class', 'w-max mt-2 px-2 mx-auto bg-red-500 text-white rounded-md'),
        (d.hidden = n[0]),
        b(t, 'class', 'my-2');
    },
    m(D, T) {
      x(D, t, T),
        S(t, e),
        S(e, i),
        S(i, s),
        S(e, o),
        J(r, e, null),
        S(e, a),
        J(c, e, null),
        S(e, u),
        S(e, d),
        S(d, h),
        S(t, g),
        M && M.m(t, null),
        (m = !0),
        p || ((_ = R(i, 'click', n[9])), (p = !0));
    },
    p(D, [T]) {
      const P = {};
      !l && T & 32 && ((l = !0), (P.value = D[5]), Tt(() => (l = !1))), r.$set(P);
      const E = {};
      !f && T & 64 && ((f = !0), (E.value = D[6]), Tt(() => (f = !1))),
        c.$set(E),
        (!m || T & 2) && mt(h, D[1]),
        (!m || T & 1) && (d.hidden = D[0]),
        D[3].length > 0
          ? M
            ? M.p(D, T)
            : ((M = iu(D)), M.c(), M.m(t, null))
          : M && (M.d(1), (M = null));
    },
    i(D) {
      m || (L(r.$$.fragment, D), L(c.$$.fragment, D), (m = !0));
    },
    o(D) {
      F(r.$$.fragment, D), F(c.$$.fragment, D), (m = !1);
    },
    d(D) {
      D && A(t), Q(r), Q(c), M && M.d(), (p = !1), _();
    },
  };
}
function dk(n, t, e) {
  let i,
    { settingKey: s } = t;
  const { settingsStore: o, updatedDay: r } = gt('stores');
  Dt(n, o, (D) => e(16, (i = D)));
  const l = gt('mainColor');
  let a = !0,
    c,
    f = null,
    u = i.daySettings[s].timeFrames,
    d = [],
    h = '00:00',
    g = '00:00';
  const m = () => {
      if (!uk({ from: h, to: g })) {
        e(1, (c = eu.invalid)), e(0, (a = !1));
        return;
      }
      const D = ck({ from: h, to: g, timeFrames: u });
      if (D !== -1) {
        e(1, (c = eu.overlap)), e(0, (a = !1)), e(2, (f = D));
        return;
      }
      p();
    },
    p = () => {
      e(0, (a = !0)),
        e(2, (f = null)),
        u.push({ from: h, to: g }),
        Kd(u),
        e(3, u),
        e(5, (h = '00:00')),
        e(6, (g = '00:00')),
        o.updateTimeFrames(s, u);
    },
    _ = (D) => {
      e(3, (u = u.filter(({ from: T }) => T !== D)));
    },
    y = (D) => {
      D === s && e(3, (u = i.daySettings[s].timeFrames));
    };
  ze(() => {
    const D = r.subscribe(y);
    return () => {
      D();
    };
  });
  function v(D) {
    (h = D), e(5, h);
  }
  function k(D) {
    (g = D), e(6, g);
  }
  const w = (D) => _(D.from);
  function M(D, T) {
    dt[D ? 'unshift' : 'push'](() => {
      (d[T] = D), e(4, d);
    });
  }
  return (
    (n.$$set = (D) => {
      'settingKey' in D && e(11, (s = D.settingKey));
    }),
    [a, c, f, u, d, h, g, o, l, m, _, s, v, k, w, M]
  );
}
class hk extends lt {
  constructor(t) {
    super(), at(this, t, dk, fk, rt, { settingKey: 11 });
  }
}
function gk(n) {
  let t, e, i, s, o, r, l, a, c, f;
  return (
    (r = new No({
      props: {
        value: n[1],
        clearBtn: !1,
        format: 'hh:ii',
        inputClasses:
          'align-middle p-2 w-16 text-white text-center  rounded-md bg-' +
          n[3] +
          '-500 cursor-pointer hover:brightness-110 focus:brightness-110',
      },
    })),
    r.$on('input', n[4]),
    (a = new hk({ props: { settingKey: n[0] } })),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (i = C('span')),
          (s = X('Interval')),
          (o = B()),
          Z(r.$$.fragment),
          (l = B()),
          Z(a.$$.fragment),
          b(
            i,
            'class',
            'cursor-default text-xs bg-white rounded-md p-2 text-' + n[3] + '-500 align-middle',
          );
      },
      m(u, d) {
        x(u, t, d),
          S(t, e),
          S(e, i),
          S(i, s),
          S(e, o),
          J(r, e, null),
          S(t, l),
          J(a, t, null),
          (f = !0);
      },
      p(u, [d]) {
        const h = {};
        d & 2 && (h.value = u[1]), r.$set(h);
        const g = {};
        d & 1 && (g.settingKey = u[0]), a.$set(g);
      },
      i(u) {
        f ||
          (L(r.$$.fragment, u),
          L(a.$$.fragment, u),
          pt(() => {
            f && (c || (c = ot(t, ge, {}, !0)), c.run(1));
          }),
          (f = !0));
      },
      o(u) {
        F(r.$$.fragment, u), F(a.$$.fragment, u), c || (c = ot(t, ge, {}, !1)), c.run(0), (f = !1);
      },
      d(u) {
        u && A(t), Q(r), Q(a), u && c && c.end();
      },
    }
  );
}
function mk(n, t, e) {
  let i,
    { settingKey: s } = t;
  const { settingsStore: o, updatedDay: r } = gt('stores');
  Dt(n, o, (d) => e(5, (i = d)));
  const l = gt('mainColor');
  let a = '00:00';
  const c = () => {
      e(1, (a = i.daySettings[s].interval));
    },
    f = (d) => {
      d === s && c();
    };
  ze(() => {
    const d = r.subscribe(f);
    return (
      c(),
      () => {
        d();
      }
    );
  });
  const u = ({ detail: d }) => {
    e(1, (a = d < '00:05' ? '00:05' : d)), o.updateSettingKeyIntervalProp(s, a);
  };
  return (
    (n.$$set = (d) => {
      'settingKey' in d && e(0, (s = d.settingKey));
    }),
    [s, a, o, l, u]
  );
}
class td extends lt {
  constructor(t) {
    super(), at(this, t, mk, gk, rt, { settingKey: 0 });
  }
}
function ou(n) {
  let t, e, i, s;
  return (
    (t = new td({ props: { settingKey: n[0] } })),
    (i = new ky({ props: { currentDay: n[0] } })),
    {
      c() {
        Z(t.$$.fragment), (e = B()), Z(i.$$.fragment);
      },
      m(o, r) {
        J(t, o, r), x(o, e, r), J(i, o, r), (s = !0);
      },
      p(o, r) {
        const l = {};
        r & 1 && (l.settingKey = o[0]), t.$set(l);
        const a = {};
        r & 1 && (a.currentDay = o[0]), i.$set(a);
      },
      i(o) {
        s || (L(t.$$.fragment, o), L(i.$$.fragment, o), (s = !0));
      },
      o(o) {
        F(t.$$.fragment, o), F(i.$$.fragment, o), (s = !1);
      },
      d(o) {
        Q(t, o), o && A(e), Q(i, o);
      },
    }
  );
}
function pk(n) {
  let t, e, i, s, o, r, l, a, c;
  (r = new ei({
    props: {
      name: 'passivePractice',
      class: 'bg-gray-400  hover:!brightness-110 focus:brightness-110 align-middle',
      active: 'bg-' + n[3] + '-500',
      checked: n[1],
    },
  })),
    r.$on('change', n[4]);
  let f = n[1] && ou(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = C('span')),
        (s = X('Custom day settings')),
        (o = B()),
        Z(r.$$.fragment),
        (l = B()),
        f && f.c(),
        b(
          i,
          'class',
          'cursor-default text-xs bg-white rounded-md p-2 text-' + n[3] + '-500 align-middle',
        ),
        st(i, 'opacity-50', !n[1]),
        b(e, 'class', 'my-2');
    },
    m(u, d) {
      x(u, t, d),
        S(t, e),
        S(e, i),
        S(i, s),
        S(e, o),
        J(r, e, null),
        S(t, l),
        f && f.m(t, null),
        (c = !0);
    },
    p(u, [d]) {
      (!c || d & 2) && st(i, 'opacity-50', !u[1]);
      const h = {};
      d & 2 && (h.checked = u[1]),
        r.$set(h),
        u[1]
          ? f
            ? (f.p(u, d), d & 2 && L(f, 1))
            : ((f = ou(u)), f.c(), L(f, 1), f.m(t, null))
          : f &&
            (vt(),
            F(f, 1, 1, () => {
              f = null;
            }),
            wt());
    },
    i(u) {
      c ||
        (L(r.$$.fragment, u),
        L(f),
        pt(() => {
          c && (a || (a = ot(t, ge, {}, !0)), a.run(1));
        }),
        (c = !0));
    },
    o(u) {
      F(r.$$.fragment, u), F(f), a || (a = ot(t, ge, {}, !1)), a.run(0), (c = !1);
    },
    d(u) {
      u && A(t), Q(r), f && f.d(), u && a && a.end();
    },
  };
}
function bk(n, t, e) {
  let i,
    { settingKey: s } = t;
  const { settingsStore: o, updatedDay: r } = gt('stores');
  Dt(n, o, (u) => e(5, (i = u)));
  const l = gt('mainColor');
  let a = i.daySettings[s].enabled;
  const c = (u) => {
    u === s && e(1, (a = i.daySettings[s].enabled));
  };
  ze(() => {
    const u = r.subscribe(c);
    return () => {
      u();
    };
  });
  const f = ({ currentTarget: u }) => {
    e(1, (a = u.checked)), o.updateSettingKeyEnabledProp(s, a);
  };
  return (
    (n.$$set = (u) => {
      'settingKey' in u && e(0, (s = u.settingKey));
    }),
    [s, a, o, l, f]
  );
}
class _k extends lt {
  constructor(t) {
    super(), at(this, t, bk, pk, rt, { settingKey: 0 });
  }
}
function yk(n) {
  let t,
    e = bo[n[0]] + '',
    i;
  return {
    c() {
      (t = C('div')), (i = X(e));
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p(s, o) {
      o & 1 && e !== (e = bo[s[0]] + '') && mt(i, e);
    },
    d(s) {
      s && A(t);
    },
  };
}
function kk(n) {
  let t, e, i;
  return (
    (e = new _k({ props: { settingKey: n[0] } })),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          b(t, 'class', 'p-2 bg-opacity-50 bg-' + n[2] + '-200 rounded-md');
      },
      m(s, o) {
        x(s, t, o), J(e, t, null), (i = !0);
      },
      p(s, o) {
        const r = {};
        o & 1 && (r.settingKey = s[0]), e.$set(r);
      },
      i(s) {
        i || (L(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        F(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && A(t), Q(e);
      },
    }
  );
}
function vk(n) {
  var i;
  let t, e;
  return (
    (t = new xu({
      props: {
        class:
          'bg-white rounded-md ' +
          ((i = n[1].daySettings[n[0]]) != null && i.enabled ? '' : '!bg-gray-300 '),
        $$slots: { content: [kk], summary: [yk] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(s, o) {
        J(t, s, o), (e = !0);
      },
      p(s, o) {
        var l;
        const r = {};
        o & 3 &&
          (r.class =
            'bg-white rounded-md ' +
            ((l = s[1].daySettings[s[0]]) != null && l.enabled ? '' : '!bg-gray-300 ')),
          o & 17 && (r.$$scope = { dirty: o, ctx: s }),
          t.$set(r);
      },
      i(s) {
        e || (L(t.$$.fragment, s), (e = !0));
      },
      o(s) {
        F(t.$$.fragment, s), (e = !1);
      },
      d(s) {
        Q(t, s);
      },
    }
  );
}
function wk(n) {
  let t, e, i, s;
  return (
    (e = new Pu({ props: { class: 'mt-2', $$slots: { default: [vk] }, $$scope: { ctx: n } } })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment);
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, [r]) {
        const l = {};
        r & 19 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, ge, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, ge, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function Sk(n, t, e) {
  let i,
    { chosenDay: s } = t;
  const o = gt('mainColor'),
    { settingsStore: r } = gt('stores');
  return (
    Dt(n, r, (l) => e(1, (i = l))),
    (n.$$set = (l) => {
      'chosenDay' in l && e(0, (s = l.chosenDay));
    }),
    [s, i, o, r]
  );
}
class Mk extends lt {
  constructor(t) {
    super(), at(this, t, Sk, wk, rt, { chosenDay: 0 });
  }
}
function Dk(n) {
  let t, e, i, s, o, r;
  return {
    c() {
      (t = C('div')),
        (e = X(`General\r
          `)),
        (i = C('span')),
        (s = X('?')),
        b(
          i,
          'class',
          'bg-' +
            n[0] +
            '-600 text-white px-[0.330rem] text-xs rounded-full border-white border-2 border-solid',
        );
    },
    m(l, a) {
      x(l, t, a), S(t, e), S(t, i), S(i, s), o || ((r = Qn(Gd.call(null, i, n[1]))), (o = !0));
    },
    p: ct,
    d(l) {
      l && A(t), (o = !1), r();
    },
  };
}
function Ck(n) {
  let t, e, i;
  return (
    (e = new td({ props: { settingKey: 'general' } })),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          b(t, 'class', 'p-2 bg-opacity-50 bg-' + n[0] + '-200 rounded-md');
      },
      m(s, o) {
        x(s, t, o), J(e, t, null), (i = !0);
      },
      p: ct,
      i(s) {
        i || (L(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        F(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && A(t), Q(e);
      },
    }
  );
}
function Tk(n) {
  let t, e;
  return (
    (t = new xu({
      props: {
        class: 'bg-white rounded-md',
        $$slots: { content: [Ck], summary: [Dk] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p(i, s) {
        const o = {};
        s & 4 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Pk(n) {
  let t, e, i, s;
  return (
    (e = new Pu({ props: { class: 'mt-2', $$slots: { default: [Tk] }, $$scope: { ctx: n } } })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment);
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, [r]) {
        const l = {};
        r & 4 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, he, { y: 10 }, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, he, { y: 10 }, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function xk(n) {
  const t = gt('mainColor'),
    e = {
      event: 'hover',
      target: `settingsPractice${gt('generalSettingsPopup')}General`,
      placement: 'top',
    };
  return [t, e];
}
class Ak extends lt {
  constructor(t) {
    super(), at(this, t, xk, Pk, rt, {});
  }
}
function Lk(n) {
  let t, e, i, s, o, r, l, a, c, f;
  function u(h) {
    n[3](h);
  }
  let d = {
    name: 'passivePractice',
    class: 'bg-gray-400  hover:!brightness-110 focus:brightness-110',
    active: 'bg-' + n[1] + '-500',
  };
  return (
    n[0].enabled !== void 0 && (d.checked = n[0].enabled),
    (o = new ei({ props: d })),
    dt.push(() => Ct(o, 'checked', u)),
    {
      c() {
        (t = C('div')),
          (e = C('span')),
          (i = X('off')),
          (s = B()),
          Z(o.$$.fragment),
          (l = B()),
          (a = C('span')),
          (c = X('On')),
          b(e, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-' + n[1] + '-500'),
          st(e, 'opacity-50', n[0].enabled),
          b(a, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-' + n[1] + '-500'),
          st(a, 'opacity-50', !n[0].enabled),
          b(t, 'class', 'flex gap-2 pt-2 flex-wrap justify-center items-center');
      },
      m(h, g) {
        x(h, t, g), S(t, e), S(e, i), S(t, s), J(o, t, null), S(t, l), S(t, a), S(a, c), (f = !0);
      },
      p(h, [g]) {
        (!f || g & 1) && st(e, 'opacity-50', h[0].enabled);
        const m = {};
        !r && g & 1 && ((r = !0), (m.checked = h[0].enabled), Tt(() => (r = !1))),
          o.$set(m),
          (!f || g & 1) && st(a, 'opacity-50', !h[0].enabled);
      },
      i(h) {
        f || (L(o.$$.fragment, h), (f = !0));
      },
      o(h) {
        F(o.$$.fragment, h), (f = !1);
      },
      d(h) {
        h && A(t), Q(o);
      },
    }
  );
}
function Ok(n, t, e) {
  let i;
  const s = gt('mainColor'),
    { settingsStore: o } = gt('stores');
  Dt(n, o, (l) => e(0, (i = l)));
  function r(l) {
    n.$$.not_equal(i.enabled, l) && ((i.enabled = l), o.set(i));
  }
  return [i, s, o, r];
}
class Fk extends lt {
  constructor(t) {
    super(), at(this, t, Ok, Lk, rt, {});
  }
}
function Ek(n) {
  let t, e, i, s, o, r, l, a;
  function c(u) {
    n[3](u);
  }
  let f = {
    name: 'passivePractice',
    class: 'bg-gray-400  hover:!brightness-110 focus:brightness-110',
    active: 'bg-' + n[2] + '-500',
  };
  return (
    n[0].soundNotification !== void 0 && (f.checked = n[0].soundNotification),
    (o = new ei({ props: f })),
    dt.push(() => Ct(o, 'checked', c)),
    {
      c() {
        (t = C('div')),
          (e = C('span')),
          (i = X('Sound alarm')),
          (s = B()),
          Z(o.$$.fragment),
          b(e, 'class', 'cursor-default text-xs bg-white rounded-md p-2 text-' + n[2] + '-500'),
          st(e, 'opacity-50', !n[0].soundNotification),
          b(t, 'class', 'flex gap-2 pt-2 flex-wrap justify-center');
      },
      m(u, d) {
        x(u, t, d), S(t, e), S(e, i), S(t, s), J(o, t, null), (a = !0);
      },
      p(u, [d]) {
        (!a || d & 1) && st(e, 'opacity-50', !u[0].soundNotification);
        const h = {};
        !r && d & 1 && ((r = !0), (h.checked = u[0].soundNotification), Tt(() => (r = !1))),
          o.$set(h);
      },
      i(u) {
        a ||
          (L(o.$$.fragment, u),
          pt(() => {
            a && (l || (l = ot(t, ge, {}, !0)), l.run(1));
          }),
          (a = !0));
      },
      o(u) {
        F(o.$$.fragment, u), l || (l = ot(t, ge, {}, !1)), l.run(0), (a = !1);
      },
      d(u) {
        u && A(t), Q(o), u && l && l.end();
      },
    }
  );
}
function Ik(n, t, e) {
  let i;
  const { settingsStore: s } = gt('stores');
  Dt(n, s, (l) => e(0, (i = l)));
  const o = gt('mainColor');
  function r(l) {
    n.$$.not_equal(i.soundNotification, l) && ((i.soundNotification = l), s.set(i));
  }
  return [i, s, o, r];
}
class Rk extends lt {
  constructor(t) {
    super(), at(this, t, Ik, Ek, rt, {});
  }
}
function ru(n, t, e) {
  const i = n.slice();
  return (i[11] = t[e]), i;
}
function lu(n) {
  let t,
    e,
    i,
    s,
    o,
    r = [],
    l = new Map(),
    a,
    c;
  (t = new Rk({})),
    (i = new by({ props: { chosenPracticeDays: n[2], onDayClick: n[5], onAllDaysClick: n[6] } }));
  let f = n[2].length > 0 && au(),
    u = n[2];
  const d = (h) => h[11];
  for (let h = 0; h < u.length; h += 1) {
    let g = ru(n, u, h),
      m = d(g);
    l.set(m, (r[h] = cu(m, g)));
  }
  return {
    c() {
      Z(t.$$.fragment), (e = B()), Z(i.$$.fragment), (s = B()), f && f.c(), (o = B());
      for (let h = 0; h < r.length; h += 1) r[h].c();
      a = ee();
    },
    m(h, g) {
      J(t, h, g), x(h, e, g), J(i, h, g), x(h, s, g), f && f.m(h, g), x(h, o, g);
      for (let m = 0; m < r.length; m += 1) r[m] && r[m].m(h, g);
      x(h, a, g), (c = !0);
    },
    p(h, g) {
      const m = {};
      if (
        (g & 4 && (m.chosenPracticeDays = h[2]),
        i.$set(m),
        h[2].length > 0
          ? f
            ? g & 4 && L(f, 1)
            : ((f = au()), f.c(), L(f, 1), f.m(o.parentNode, o))
          : f &&
            (vt(),
            F(f, 1, 1, () => {
              f = null;
            }),
            wt()),
        g & 4)
      ) {
        (u = h[2]), vt();
        for (let p = 0; p < r.length; p += 1) r[p].r();
        r = Me(r, g, d, 1, h, u, l, a.parentNode, Ns, cu, a, ru);
        for (let p = 0; p < r.length; p += 1) r[p].a();
        wt();
      }
    },
    i(h) {
      if (!c) {
        L(t.$$.fragment, h), L(i.$$.fragment, h), L(f);
        for (let g = 0; g < u.length; g += 1) L(r[g]);
        c = !0;
      }
    },
    o(h) {
      F(t.$$.fragment, h), F(i.$$.fragment, h), F(f);
      for (let g = 0; g < r.length; g += 1) F(r[g]);
      c = !1;
    },
    d(h) {
      Q(t, h), h && A(e), Q(i, h), h && A(s), f && f.d(h), h && A(o);
      for (let g = 0; g < r.length; g += 1) r[g].d(h);
      h && A(a);
    },
  };
}
function au(n) {
  let t, e;
  return (
    (t = new Ak({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function cu(n, t) {
  let e,
    i,
    s,
    o,
    r = ct,
    l;
  return (
    (i = new Mk({ props: { chosenDay: t[11] } })),
    {
      key: n,
      first: null,
      c() {
        (e = C('div')), Z(i.$$.fragment), (s = B()), (this.first = e);
      },
      m(a, c) {
        x(a, e, c), J(i, e, null), S(e, s), (l = !0);
      },
      p(a, c) {
        t = a;
        const f = {};
        c & 4 && (f.chosenDay = t[11]), i.$set(f);
      },
      r() {
        o = e.getBoundingClientRect();
      },
      f() {
        Vi(e), r();
      },
      a() {
        r(), (r = ji(e, o, Ui, { duration: 300 }));
      },
      i(a) {
        l || (L(i.$$.fragment, a), (l = !0));
      },
      o(a) {
        F(i.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && A(e), Q(i);
      },
    }
  );
}
function Bk(n) {
  let t, e, i, s, o, r, l, a, c, f;
  r = new Fk({});
  let u = n[3].enabled && lu(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = X(n[1])),
        (o = B()),
        Z(r.$$.fragment),
        (l = B()),
        u && u.c(),
        b(
          e,
          'class',
          (s = 'border-' + n[0] + '-400 border-2 rounded-md p-2 cursor-default select-none'),
        ),
        b(
          t,
          'class',
          (a =
            'absolute max-w-md w-90% left-1/2 -translate-x-1/2 max-h-[calc(100vh-160px)] overflow-auto p-2 border-2 rounded-md bg-' +
            n[0] +
            '-200 bg-opacity-50 text-' +
            n[0] +
            '-900'),
        );
    },
    m(d, h) {
      x(d, t, h), S(t, e), S(e, i), S(t, o), J(r, t, null), S(t, l), u && u.m(t, null), (f = !0);
    },
    p(d, [h]) {
      (!f || h & 2) && mt(i, d[1]),
        (!f ||
          (h & 1 &&
            s !==
              (s =
                'border-' + d[0] + '-400 border-2 rounded-md p-2 cursor-default select-none'))) &&
          b(e, 'class', s),
        d[3].enabled
          ? u
            ? (u.p(d, h), h & 8 && L(u, 1))
            : ((u = lu(d)), u.c(), L(u, 1), u.m(t, null))
          : u &&
            (vt(),
            F(u, 1, 1, () => {
              u = null;
            }),
            wt()),
        (!f ||
          (h & 1 &&
            a !==
              (a =
                'absolute max-w-md w-90% left-1/2 -translate-x-1/2 max-h-[calc(100vh-160px)] overflow-auto p-2 border-2 rounded-md bg-' +
                d[0] +
                '-200 bg-opacity-50 text-' +
                d[0] +
                '-900'))) &&
          b(t, 'class', a);
    },
    i(d) {
      f ||
        (L(r.$$.fragment, d),
        L(u),
        pt(() => {
          f && (c || (c = ot(t, bt, {}, !0)), c.run(1));
        }),
        (f = !0));
    },
    o(d) {
      F(r.$$.fragment, d), F(u), c || (c = ot(t, bt, {}, !1)), c.run(0), (f = !1);
    },
    d(d) {
      d && A(t), Q(r), u && u.d(), d && c && c.end();
    },
  };
}
const zk = 'bg-rose-500';
function Hk(n, t, e) {
  let i,
    { mainColor: s } = t,
    { header: o } = t,
    { generalSettingsPopup: r } = t,
    { stores: l } = t;
  const a = `bg-${s}-500`;
  Ot('stores', l),
    Ot('mainColor', s),
    Ot('generalSettingsPopup', r),
    Ot('weekdaysStyles', a),
    Ot('weekendsStyles', zk);
  const { settingsStore: c, chosenPracticeDays: f } = l;
  Dt(n, c, (g) => e(3, (i = g)));
  let u = Object.keys(i.daySettings);
  vr(u, 'general'), to(u), f.set(u);
  const d = (g) => {
      u.includes(g)
        ? (vr(u, g), l.settingsStore.removeSettingKey(g))
        : (u.push(g), to(u), l.settingsStore.addSettingKey(g)),
        e(2, u),
        f.set(u);
    },
    h = () => {
      po.forEach((g) => {
        u.includes(g) || (u.push(g), l.settingsStore.addSettingKey(g));
      }),
        to(u),
        e(2, u),
        f.set(u);
    };
  return (
    (n.$$set = (g) => {
      'mainColor' in g && e(0, (s = g.mainColor)),
        'header' in g && e(1, (o = g.header)),
        'generalSettingsPopup' in g && e(7, (r = g.generalSettingsPopup)),
        'stores' in g && e(8, (l = g.stores));
    }),
    [s, o, u, i, c, d, h, r, l]
  );
}
class ed extends lt {
  constructor(t) {
    super(),
      at(this, t, Hk, Bk, rt, { mainColor: 0, header: 1, generalSettingsPopup: 7, stores: 8 });
  }
}
function Wk(n) {
  let t;
  return {
    c() {
      t = X('Passive');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Nk(n) {
  let t;
  return {
    c() {
      t = X('Active');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Vk(n) {
  let t, e, i, s, o, r;
  function l(u) {
    n[3](u);
  }
  let a = {
    name: 'tab1',
    value: 0,
    class: 'select-none bg-blue-400 border-b-2 border-blue-400 bg-opacity-20 text-blue-900',
    $$slots: { default: [Wk] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (a.group = n[0]), (t = new Mi({ props: a })), dt.push(() => Ct(t, 'group', l));
  function c(u) {
    n[4](u);
  }
  let f = {
    name: 'tab2',
    value: 1,
    class:
      'select-none bg-fuchsia-400 border-b-2 border-fuchsia-400 bg-opacity-20 text-fuchsia-900',
    $$slots: { default: [Nk] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (s = new Mi({ props: f })),
    dt.push(() => Ct(s, 'group', c)),
    {
      c() {
        Z(t.$$.fragment), (i = B()), Z(s.$$.fragment);
      },
      m(u, d) {
        J(t, u, d), x(u, i, d), J(s, u, d), (r = !0);
      },
      p(u, d) {
        const h = {};
        d & 32 && (h.$$scope = { dirty: d, ctx: u }),
          !e && d & 1 && ((e = !0), (h.group = u[0]), Tt(() => (e = !1))),
          t.$set(h);
        const g = {};
        d & 32 && (g.$$scope = { dirty: d, ctx: u }),
          !o && d & 1 && ((o = !0), (g.group = u[0]), Tt(() => (o = !1))),
          s.$set(g);
      },
      i(u) {
        r || (L(t.$$.fragment, u), L(s.$$.fragment, u), (r = !0));
      },
      o(u) {
        F(t.$$.fragment, u), F(s.$$.fragment, u), (r = !1);
      },
      d(u) {
        Q(t, u), u && A(i), Q(s, u);
      },
    }
  );
}
function jk(n) {
  let t, e;
  return (
    (t = new ed({
      props: {
        header: 'Active',
        mainColor: 'fuchsia',
        generalSettingsPopup: 'Active',
        stores: n[2],
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Yk(n) {
  let t, e;
  return (
    (t = new ed({
      props: {
        header: 'Passive',
        mainColor: 'blue',
        generalSettingsPopup: 'Passive',
        stores: n[1],
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Uk(n) {
  let t, e, i, s;
  const o = [Yk, jk],
    r = [];
  function l(a, c) {
    return a[0] === 0 ? 0 : a[0] === 1 ? 1 : -1;
  }
  return (
    ~(t = l(n)) && (e = r[t] = o[t](n)),
    {
      c() {
        e && e.c(), (i = ee());
      },
      m(a, c) {
        ~t && r[t].m(a, c), x(a, i, c), (s = !0);
      },
      p(a, c) {
        let f = t;
        (t = l(a)),
          t === f
            ? ~t && r[t].p(a, c)
            : (e &&
                (vt(),
                F(r[f], 1, 1, () => {
                  r[f] = null;
                }),
                wt()),
              ~t
                ? ((e = r[t]),
                  e ? e.p(a, c) : ((e = r[t] = o[t](a)), e.c()),
                  L(e, 1),
                  e.m(i.parentNode, i))
                : (e = null));
      },
      i(a) {
        s || (L(e), (s = !0));
      },
      o(a) {
        F(e), (s = !1);
      },
      d(a) {
        ~t && r[t].d(a), a && A(i);
      },
    }
  );
}
function qk(n) {
  let t, e, i, s;
  return (
    (e = new Au({
      props: {
        justify: 'justify-center',
        active: '!bg-opacity-100 !text-white',
        hover: 'hover:brightness-110',
        rounded: 'rounded-md',
        border: '',
        class: 'w-full mt-5 [&_.tab-list]:gap-10 text-indigo-900 [&_.tab]:',
        $$slots: { panel: [Uk], default: [Vk] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          b(
            t,
            'class',
            'w-full flex flex-col justify-evenly items-center text-center gap-5 absolute',
          );
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, [r]) {
        const l = {};
        r & 33 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, bt, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, bt, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function Xk(n, t, e) {
  const i = { chosenPracticeDays: gy, settingsStore: Su, updatedDay: Zd },
    s = { chosenPracticeDays: hy, settingsStore: Mu, updatedDay: Jd };
  let o = 0;
  function r(a) {
    (o = a), e(0, o);
  }
  function l(a) {
    (o = a), e(0, o);
  }
  return [o, i, s, r, l];
}
class Kk extends lt {
  constructor(t) {
    super(), at(this, t, Xk, qk, rt, {});
  }
}
function Gk(n) {
  let t;
  return {
    c() {
      t = X('Data');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Zk(n) {
  let t;
  return {
    c() {
      t = X('Practice');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Jk(n) {
  let t;
  return {
    c() {
      t = X('Basic');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Qk(n) {
  let t, e, i, s, o, r, l, a, c;
  function f(p) {
    n[1](p);
  }
  let u = {
    name: 'tab1',
    value: 0,
    class: 'select-none bg-pink-400 border-b-2 border-pink-400 bg-opacity-20 text-pink-900',
    $$slots: { default: [Gk] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (u.group = n[0]), (t = new Mi({ props: u })), dt.push(() => Ct(t, 'group', f));
  function d(p) {
    n[2](p);
  }
  let h = {
    name: 'tab2',
    value: 1,
    class: 'select-none bg-green-400 border-b-2 border-green-400 bg-opacity-20 text-green-900',
    $$slots: { default: [Zk] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (h.group = n[0]), (s = new Mi({ props: h })), dt.push(() => Ct(s, 'group', d));
  function g(p) {
    n[3](p);
  }
  let m = {
    name: 'tab3',
    value: 2,
    class: 'select-none bg-cyan-400 border-b-2 border-cyan-400 bg-opacity-20 text-cyan-900',
    $$slots: { default: [Jk] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (m.group = n[0]),
    (l = new Mi({ props: m })),
    dt.push(() => Ct(l, 'group', g)),
    {
      c() {
        Z(t.$$.fragment), (i = B()), Z(s.$$.fragment), (r = B()), Z(l.$$.fragment);
      },
      m(p, _) {
        J(t, p, _), x(p, i, _), J(s, p, _), x(p, r, _), J(l, p, _), (c = !0);
      },
      p(p, _) {
        const y = {};
        _ & 16 && (y.$$scope = { dirty: _, ctx: p }),
          !e && _ & 1 && ((e = !0), (y.group = p[0]), Tt(() => (e = !1))),
          t.$set(y);
        const v = {};
        _ & 16 && (v.$$scope = { dirty: _, ctx: p }),
          !o && _ & 1 && ((o = !0), (v.group = p[0]), Tt(() => (o = !1))),
          s.$set(v);
        const k = {};
        _ & 16 && (k.$$scope = { dirty: _, ctx: p }),
          !a && _ & 1 && ((a = !0), (k.group = p[0]), Tt(() => (a = !1))),
          l.$set(k);
      },
      i(p) {
        c || (L(t.$$.fragment, p), L(s.$$.fragment, p), L(l.$$.fragment, p), (c = !0));
      },
      o(p) {
        F(t.$$.fragment, p), F(s.$$.fragment, p), F(l.$$.fragment, p), (c = !1);
      },
      d(p) {
        Q(t, p), p && A(i), Q(s, p), p && A(r), Q(l, p);
      },
    }
  );
}
function $k(n) {
  let t, e;
  return (
    (t = new X2({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function tv(n) {
  let t, e;
  return (
    (t = new Kk({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function ev(n) {
  let t, e;
  return (
    (t = new dy({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function nv(n) {
  let t, e, i, s;
  const o = [ev, tv, $k],
    r = [];
  function l(a, c) {
    return a[0] === 0 ? 0 : a[0] === 1 ? 1 : a[0] === 2 ? 2 : -1;
  }
  return (
    ~(t = l(n)) && (e = r[t] = o[t](n)),
    {
      c() {
        e && e.c(), (i = ee());
      },
      m(a, c) {
        ~t && r[t].m(a, c), x(a, i, c), (s = !0);
      },
      p(a, c) {
        let f = t;
        (t = l(a)),
          t !== f &&
            (e &&
              (vt(),
              F(r[f], 1, 1, () => {
                r[f] = null;
              }),
              wt()),
            ~t
              ? ((e = r[t]), e || ((e = r[t] = o[t](a)), e.c()), L(e, 1), e.m(i.parentNode, i))
              : (e = null));
      },
      i(a) {
        s || (L(e), (s = !0));
      },
      o(a) {
        F(e), (s = !1);
      },
      d(a) {
        ~t && r[t].d(a), a && A(i);
      },
    }
  );
}
function iv(n) {
  let t, e, i, s;
  return (
    (e = new Au({
      props: {
        justify: 'justify-center',
        active: '!bg-opacity-100 !text-white',
        hover: 'hover:brightness-110',
        rounded: 'rounded-md',
        border: '',
        class: 'w-full mt-5 [&_.tab-list]:gap-10 text-indigo-900 [&_.tab]:',
        $$slots: { panel: [nv], default: [Qk] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment), b(t, 'class', 'absolute h-screen w-screen');
      },
      m(o, r) {
        x(o, t, r), J(e, t, null), (s = !0);
      },
      p(o, [r]) {
        const l = {};
        r & 17 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
      },
      i(o) {
        s ||
          (L(e.$$.fragment, o),
          pt(() => {
            s && (i || (i = ot(t, bt, {}, !0)), i.run(1));
          }),
          (s = !0));
      },
      o(o) {
        F(e.$$.fragment, o), i || (i = ot(t, bt, {}, !1)), i.run(0), (s = !1);
      },
      d(o) {
        o && A(t), Q(e), o && i && i.end();
      },
    }
  );
}
function sv(n, t, e) {
  let i = 0;
  function s(l) {
    (i = l), e(0, i);
  }
  function o(l) {
    (i = l), e(0, i);
  }
  function r(l) {
    (i = l), e(0, i);
  }
  return [i, s, o, r];
}
class ov extends lt {
  constructor(t) {
    super(), at(this, t, sv, iv, rt, {});
  }
}
function rv(n) {
  let t, e, i;
  var s = n[0];
  function o(r) {
    return {};
  }
  return (
    s && (t = jn(s, o())),
    {
      c() {
        t && Z(t.$$.fragment), (e = ee());
      },
      m(r, l) {
        t && J(t, r, l), x(r, e, l), (i = !0);
      },
      p(r, [l]) {
        if (l & 1 && s !== (s = r[0])) {
          if (t) {
            vt();
            const a = t;
            F(a.$$.fragment, 1, 0, () => {
              Q(a, 1);
            }),
              wt();
          }
          s
            ? ((t = jn(s, o())), Z(t.$$.fragment), L(t.$$.fragment, 1), J(t, e.parentNode, e))
            : (t = null);
        }
      },
      i(r) {
        i || (t && L(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        t && F(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && A(e), t && Q(t, r);
      },
    }
  );
}
function lv(n, t, e) {
  let i, s;
  Dt(n, tn, (r) => e(1, (s = r)));
  const o = new Map([
    ['/dictionary', Tm],
    ['/practice', w0],
    ['/statistic', H2],
    ['/settings', ov],
  ]);
  return (
    (n.$$.update = () => {
      n.$$.dirty & 2 && e(0, (i = o.get(s)));
    }),
    [i, s]
  );
}
class av extends lt {
  constructor(t) {
    super(), at(this, t, lv, rv, rt, {});
  }
}
const cv = '/assets/octopus-white-14148693.svg';
function uv(n) {
  let t, e, i, s;
  return {
    c() {
      (t = C('button')),
        (e = C('div')),
        b(e, 'class', 'h-10 w-10 p-2 bg-teal-500'),
        b(e, 'style', Re(cv)),
        b(
          t,
          'class',
          'hover:opacity-100 focus:opacity-100 opacity-50 fixed top-6 left-5 z-20 active:scale-90 rounded-full transition-all',
        );
    },
    m(o, r) {
      x(o, t, r), S(t, e), i || ((s = R(t, 'click', n[1])), (i = !0));
    },
    p: ct,
    i: ct,
    o: ct,
    d(o) {
      o && A(t), (i = !1), s();
    },
  };
}
function fv(n) {
  const t = {
    id: 'mainMenu',
    bgDrawer: 'text-white',
    bgBackdrop: 'bg-teal-200 bg-opacity-50 !z-30',
    width: 'w-[150px] md:w-[250px]',
    height: 'h-max',
    padding: 'p-4',
    rounded: 'rounded-md',
  };
  return [t, () => qe.open(t)];
}
class dv extends lt {
  constructor(t) {
    super(), at(this, t, fv, uv, rt, {});
  }
}
function hv(n) {
  let t, e;
  return (
    (t = new dv({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
class gv extends lt {
  constructor(t) {
    super(), at(this, t, null, hv, rt, {});
  }
}
const mv = '/assets/book-white-fc3e47b2.svg',
  pv = '/assets/bow-white-476578a0.svg',
  bv = '/assets/settings-white-79aff8c4.svg',
  _v = '/assets/stats-white-3cec2e75.svg';
function yv(n) {
  let t;
  return {
    c() {
      t = X('Dictionary');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function kv(n) {
  let t, e;
  return {
    c() {
      (t = C('img')),
        ln(t.src, (e = mv)) || b(t, 'src', e),
        b(t, 'class', 'h-5'),
        b(t, 'alt', 'book icon');
    },
    m(i, s) {
      x(i, t, s);
    },
    p: ct,
    d(i) {
      i && A(t);
    },
  };
}
function vv(n) {
  let t;
  return {
    c() {
      t = X('Practice');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function wv(n) {
  let t, e;
  return {
    c() {
      (t = C('img')),
        ln(t.src, (e = pv)) || b(t, 'src', e),
        b(t, 'class', 'h-5'),
        b(t, 'alt', 'bow icon');
    },
    m(i, s) {
      x(i, t, s);
    },
    p: ct,
    d(i) {
      i && A(t);
    },
  };
}
function Sv(n) {
  let t;
  return {
    c() {
      t = X('Statistic');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Mv(n) {
  let t, e;
  return {
    c() {
      (t = C('img')),
        ln(t.src, (e = _v)) || b(t, 'src', e),
        b(t, 'class', 'h-5'),
        b(t, 'alt', 'bow icon');
    },
    m(i, s) {
      x(i, t, s);
    },
    p: ct,
    d(i) {
      i && A(t);
    },
  };
}
function Dv(n) {
  let t;
  return {
    c() {
      t = X('Settings');
    },
    m(e, i) {
      x(e, t, i);
    },
    d(e) {
      e && A(t);
    },
  };
}
function Cv(n) {
  let t, e;
  return {
    c() {
      (t = C('img')),
        ln(t.src, (e = bv)) || b(t, 'src', e),
        b(t, 'class', 'h-5'),
        b(t, 'alt', 'bow icon');
    },
    m(i, s) {
      x(i, t, s);
    },
    p: ct,
    d(i) {
      i && A(t);
    },
  };
}
function Tv(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d;
  function h(w) {
    n[1](w);
  }
  let g = {
    name: 'medium',
    value: '/dictionary',
    class: 'select-none bg-teal-700 hover:!bg-teal-400 focus:!bg-teal-400 transition-all ',
    $$slots: { lead: [kv], default: [yv] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (g.group = n[0]),
    (t = new ts({ props: g })),
    dt.push(() => Ct(t, 'group', h)),
    t.$on('click', n[2]);
  function m(w) {
    n[3](w);
  }
  let p = {
    name: 'medium',
    value: '/practice',
    class: 'select-none bg-teal-700 hover:!bg-teal-400 focus:!bg-teal-400 transition-all ',
    $$slots: { lead: [wv], default: [vv] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (p.group = n[0]),
    (s = new ts({ props: p })),
    dt.push(() => Ct(s, 'group', m)),
    s.$on('click', n[4]);
  function _(w) {
    n[5](w);
  }
  let y = {
    name: 'medium',
    value: '/statistic',
    class: 'select-none bg-teal-700 hover:!bg-teal-400 focus:!bg-teal-400 transition-all ',
    $$slots: { lead: [Mv], default: [Sv] },
    $$scope: { ctx: n },
  };
  n[0] !== void 0 && (y.group = n[0]),
    (l = new ts({ props: y })),
    dt.push(() => Ct(l, 'group', _)),
    l.$on('click', n[6]);
  function v(w) {
    n[7](w);
  }
  let k = {
    name: 'medium',
    value: '/settings',
    class: 'select-none bg-teal-700 hover:!bg-teal-400 focus:!bg-teal-400 transition-all ',
    $$slots: { lead: [Cv], default: [Dv] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (k.group = n[0]),
    (f = new ts({ props: k })),
    dt.push(() => Ct(f, 'group', v)),
    f.$on('click', n[8]),
    {
      c() {
        Z(t.$$.fragment),
          (i = B()),
          Z(s.$$.fragment),
          (r = B()),
          Z(l.$$.fragment),
          (c = B()),
          Z(f.$$.fragment);
      },
      m(w, M) {
        J(t, w, M),
          x(w, i, M),
          J(s, w, M),
          x(w, r, M),
          J(l, w, M),
          x(w, c, M),
          J(f, w, M),
          (d = !0);
      },
      p(w, M) {
        const D = {};
        M & 512 && (D.$$scope = { dirty: M, ctx: w }),
          !e && M & 1 && ((e = !0), (D.group = w[0]), Tt(() => (e = !1))),
          t.$set(D);
        const T = {};
        M & 512 && (T.$$scope = { dirty: M, ctx: w }),
          !o && M & 1 && ((o = !0), (T.group = w[0]), Tt(() => (o = !1))),
          s.$set(T);
        const P = {};
        M & 512 && (P.$$scope = { dirty: M, ctx: w }),
          !a && M & 1 && ((a = !0), (P.group = w[0]), Tt(() => (a = !1))),
          l.$set(P);
        const E = {};
        M & 512 && (E.$$scope = { dirty: M, ctx: w }),
          !u && M & 1 && ((u = !0), (E.group = w[0]), Tt(() => (u = !1))),
          f.$set(E);
      },
      i(w) {
        d ||
          (L(t.$$.fragment, w),
          L(s.$$.fragment, w),
          L(l.$$.fragment, w),
          L(f.$$.fragment, w),
          (d = !0));
      },
      o(w) {
        F(t.$$.fragment, w),
          F(s.$$.fragment, w),
          F(l.$$.fragment, w),
          F(f.$$.fragment, w),
          (d = !1);
      },
      d(w) {
        Q(t, w), w && A(i), Q(s, w), w && A(r), Q(l, w), w && A(c), Q(f, w);
      },
    }
  );
}
function Pv(n) {
  let t, e;
  return (
    (t = new Rh({
      props: {
        rounded: 'rounded-md',
        spacing: 'space-y-2',
        active: '!bg-teal-500',
        $$slots: { default: [Tv] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p(i, [s]) {
        const o = {};
        s & 513 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function xv(n, t, e) {
  let i;
  Dt(n, tn, (d) => e(0, (i = d)));
  function s(d) {
    (i = d), tn.set(i);
  }
  function o(d) {
    ut.call(this, n, d);
  }
  function r(d) {
    (i = d), tn.set(i);
  }
  function l(d) {
    ut.call(this, n, d);
  }
  function a(d) {
    (i = d), tn.set(i);
  }
  function c(d) {
    ut.call(this, n, d);
  }
  function f(d) {
    (i = d), tn.set(i);
  }
  function u(d) {
    ut.call(this, n, d);
  }
  return [i, s, o, r, l, a, c, f, u];
}
class Av extends lt {
  constructor(t) {
    super(), at(this, t, xv, Pv, rt, {});
  }
}
function Lv(n) {
  let t, e;
  return (
    (t = new Av({})),
    t.$on('click', n[0]),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p: ct,
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Ov(n) {
  return [() => qe.close()];
}
class Fv extends lt {
  constructor(t) {
    super(), at(this, t, Ov, Lv, rt, {});
  }
}
function Ev(n) {
  let t, e, i;
  return (
    (e = new rg({ props: { meter: `bg-${n[0].progressBarBgColor}-500`, value: void 0 } })),
    {
      c() {
        (t = C('div')), Z(e.$$.fragment), b(t, 'class', 'h-full w-full flex items-center');
      },
      m(s, o) {
        x(s, t, o), J(e, t, null), (i = !0);
      },
      p(s, [o]) {
        const r = {};
        o & 1 && (r.meter = `bg-${s[0].progressBarBgColor}-500`), e.$set(r);
      },
      i(s) {
        i || (L(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        F(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && A(t), Q(e);
      },
    }
  );
}
function Iv(n, t, e) {
  let i;
  return Dt(n, Vf, (s) => e(0, (i = s))), [i];
}
class Rv extends lt {
  constructor(t) {
    super(), at(this, t, Iv, Ev, rt, {});
  }
}
function Bv(n) {
  return { c: ct, m: ct, i: ct, o: ct, d: ct };
}
function zv(n) {
  let t, e;
  return (
    (t = new Rv({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Hv(n) {
  let t, e;
  return (
    (t = new Fv({})),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Wv(n) {
  let t, e, i, s;
  const o = [Hv, zv, Bv],
    r = [];
  function l(a, c) {
    return a[0].id === 'mainMenu' ? 0 : a[0].id === 'loading' ? 1 : 2;
  }
  return (
    (t = l(n)),
    (e = r[t] = o[t](n)),
    {
      c() {
        e.c(), (i = ee());
      },
      m(a, c) {
        r[t].m(a, c), x(a, i, c), (s = !0);
      },
      p(a, c) {
        let f = t;
        (t = l(a)),
          t !== f &&
            (vt(),
            F(r[f], 1, 1, () => {
              r[f] = null;
            }),
            wt(),
            (e = r[t]),
            e || ((e = r[t] = o[t](a)), e.c()),
            L(e, 1),
            e.m(i.parentNode, i));
      },
      i(a) {
        s || (L(e), (s = !0));
      },
      o(a) {
        F(e), (s = !1);
      },
      d(a) {
        r[t].d(a), a && A(i);
      },
    }
  );
}
function Nv(n) {
  let t, e;
  return (
    (t = new Gg({ props: { $$slots: { default: [Wv] }, $$scope: { ctx: n } } })),
    {
      c() {
        Z(t.$$.fragment);
      },
      m(i, s) {
        J(t, i, s), (e = !0);
      },
      p(i, [s]) {
        const o = {};
        s & 3 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
      },
      i(i) {
        e || (L(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        F(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Q(t, i);
      },
    }
  );
}
function Vv(n, t, e) {
  let i;
  return Dt(n, qe, (s) => e(0, (i = s))), [i];
}
class jv extends lt {
  constructor(t) {
    super(), at(this, t, Vv, Nv, rt, {});
  }
}
function Yv(n) {
  let t, e, i;
  return {
    c() {
      (t = C('div')),
        (t.innerHTML = `<p>Used for all chosen days with disabled config</p> 
	<div class="arrow bg-blue-600"></div>`),
        (e = B()),
        (i = C('div')),
        (i.innerHTML = `<p>Used for all chosen days with disabled config</p> 
	<div class="arrow bg-fuchsia-600"></div>`),
        b(t, 'class', 'card p-2 rounded-md bg-blue-600 text-white z-50 cursor-default'),
        b(t, 'data-popup', 'settingsPracticePassiveGeneral'),
        b(i, 'class', 'card p-2 rounded-md bg-fuchsia-600 text-white z-50 cursor-default'),
        b(i, 'data-popup', 'settingsPracticeActiveGeneral');
    },
    m(s, o) {
      x(s, t, o), x(s, e, o), x(s, i, o);
    },
    p: ct,
    i: ct,
    o: ct,
    d(s) {
      s && A(t), s && A(e), s && A(i);
    },
  };
}
class Uv extends lt {
  constructor(t) {
    super(), at(this, t, null, Yv, rt, {});
  }
}
function qv(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h;
  function g(y) {
    n[14](y);
  }
  function m(y) {
    n[15](y);
  }
  function p(y) {
    n[16](y);
  }
  let _ = { class: n[4], name: 'customChip', rounded: n[3], placeholder: n[2], validation: Xv };
  return (
    n[9] !== void 0 && (_.input = n[9]),
    n[0] !== void 0 && (_.value = n[0]),
    n[1] !== void 0 && (_.chips = n[1]),
    (e = new Oh({ props: _ })),
    dt.push(() => Ct(e, 'input', g)),
    dt.push(() => Ct(e, 'value', m)),
    dt.push(() => Ct(e, 'chips', p)),
    e.$on('input', n[12]),
    {
      c() {
        (t = C('div')),
          Z(e.$$.fragment),
          (r = B()),
          (l = C('button')),
          (a = C('div')),
          b(a, 'class', (c = 'h-4 w-4 m-auto ' + n[7] + ' ' + (n[10] && n[8]))),
          b(a, 'style', Re(Lu)),
          b(l, 'class', (f = n[5] + ' ' + (n[10] && n[6]))),
          b(t, 'class', 'relative');
      },
      m(y, v) {
        x(y, t, v),
          J(e, t, null),
          S(t, r),
          S(t, l),
          S(l, a),
          (u = !0),
          d || ((h = R(l, 'click', n[11])), (d = !0));
      },
      p(y, [v]) {
        const k = {};
        v & 16 && (k.class = y[4]),
          v & 8 && (k.rounded = y[3]),
          v & 4 && (k.placeholder = y[2]),
          !i && v & 512 && ((i = !0), (k.input = y[9]), Tt(() => (i = !1))),
          !s && v & 1 && ((s = !0), (k.value = y[0]), Tt(() => (s = !1))),
          !o && v & 2 && ((o = !0), (k.chips = y[1]), Tt(() => (o = !1))),
          e.$set(k),
          (!u || (v & 1408 && c !== (c = 'h-4 w-4 m-auto ' + y[7] + ' ' + (y[10] && y[8])))) &&
            b(a, 'class', c),
          (!u || (v & 1120 && f !== (f = y[5] + ' ' + (y[10] && y[6])))) && b(l, 'class', f);
      },
      i(y) {
        u || (L(e.$$.fragment, y), (u = !0));
      },
      o(y) {
        F(e.$$.fragment, y), (u = !1);
      },
      d(y) {
        y && A(t), Q(e), (d = !1), h();
      },
    }
  );
}
const Xv = (n) => n.trim() !== '';
function Kv(n, t, e) {
  let { placeholder: i = '' } = t,
    { rounded: s = '' } = t,
    { list: o = [] } = t,
    { chips: r = '' } = t,
    { InputChipStyles: l = '' } = t,
    { buttonBaseStyles: a = '' } = t,
    { buttonErrorStyles: c = '' } = t,
    { buttonImageBaseStyles: f = '' } = t,
    { buttonImageErrorStyles: u = '' } = t,
    d,
    h = !1;
  const g = () => {
      e(9, (d = '')), e(10, (h = !1)), e(0, (o = []));
    },
    m = () => {
      if ((e(9, (d = d.trim())), d === '')) {
        e(10, (h = !0));
        return;
      }
      if (o.includes(d)) {
        e(10, (h = !0));
        return;
      }
      e(10, (h = !1)), e(0, (o = [...o, d])), e(9, (d = ''));
    },
    p = () => {
      h && e(10, (h = !1));
    };
  function _(k) {
    (d = k), e(9, d);
  }
  function y(k) {
    (o = k), e(0, o);
  }
  function v(k) {
    (r = k), e(1, r);
  }
  return (
    (n.$$set = (k) => {
      'placeholder' in k && e(2, (i = k.placeholder)),
        'rounded' in k && e(3, (s = k.rounded)),
        'list' in k && e(0, (o = k.list)),
        'chips' in k && e(1, (r = k.chips)),
        'InputChipStyles' in k && e(4, (l = k.InputChipStyles)),
        'buttonBaseStyles' in k && e(5, (a = k.buttonBaseStyles)),
        'buttonErrorStyles' in k && e(6, (c = k.buttonErrorStyles)),
        'buttonImageBaseStyles' in k && e(7, (f = k.buttonImageBaseStyles)),
        'buttonImageErrorStyles' in k && e(8, (u = k.buttonImageErrorStyles));
    }),
    [o, r, i, s, l, a, c, f, u, d, h, m, p, g, _, y, v]
  );
}
class Ws extends lt {
  constructor(t) {
    super(),
      at(this, t, Kv, qv, rt, {
        placeholder: 2,
        rounded: 3,
        list: 0,
        chips: 1,
        InputChipStyles: 4,
        buttonBaseStyles: 5,
        buttonErrorStyles: 6,
        buttonImageBaseStyles: 7,
        buttonImageErrorStyles: 8,
        reset: 13,
      });
  }
  get reset() {
    return this.$$.ctx[13];
  }
}
function Gv(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m, p, _, y, v, k, w;
  function M(E) {
    n[8](E);
  }
  let D = {
    InputChipStyles:
      'text-cyan-900 [&_.input-chip-list]:justify-center [&_.input-chip-list]:rounded-md [&_.input-chip-list]:p-2 [&_.input-chip-list]:bg-cyan-400 [&_.input-chip-list]:bg-opacity-50 [&_.input-chip-list]:max-h-24 [&_.input-chip-list]:overflow-auto !border-cyan-300 border-2 !cursor-default hover:filter-none [&_input]: [&_input]:p-2 [&_input]:rounded-md [&_input]:bg-cyan-200 hover:[&_input]:bg-cyan-300 focus:[&_input]:bg-cyan-300 [&_input]:transition-all [&_input]:border-b-2 [&_input]:border-cyan-300 placeholder:[&_input]:!text-cyan-950',
    chips:
      'text-slate-950 bg-orange-300 hover:filter-none hover:bg-orange-400 focus:bg-orange-400  break-all whitespace-normal',
    buttonBaseStyles: uu,
    buttonErrorStyles: fu,
    buttonImageBaseStyles: du,
    buttonImageErrorStyles: hu,
    placeholder: 'Enter word variant...',
    rounded: 'rounded-md',
  };
  n[0] !== void 0 && (D.list = n[0]),
    (s = new Ws({ props: D })),
    n[7](s),
    dt.push(() => Ct(s, 'list', M));
  function T(E) {
    n[10](E);
  }
  let P = {
    InputChipStyles:
      'text-cyan-900 [&_.input-chip-list]:justify-center [&_.input-chip-list]:rounded-md [&_.input-chip-list]:p-2 [&_.input-chip-list]:bg-cyan-400 [&_.input-chip-list]:bg-opacity-50 [&_.input-chip-list]:max-h-24 [&_.input-chip-list]:overflow-auto !border-cyan-300 border-2 !cursor-default hover:filter-none [&_input]: [&_input]:p-2 [&_input]:rounded-md [&_input]:bg-cyan-200 hover:[&_input]:bg-cyan-300 focus:[&_input]:bg-cyan-300  [&_input]:transition-all [&_input]:border-b-2 [&_input]:border-cyan-300 placeholder:[&_input]:text-cyan-950',
    chips:
      'text-slate-950 bg-green-300 hover:filter-none hover:bg-green-400 focus:bg-green-400  break-all whitespace-normal',
    buttonBaseStyles: uu,
    buttonErrorStyles: fu,
    buttonImageBaseStyles: du,
    buttonImageErrorStyles: hu,
    placeholder: 'Enter word translation...',
    rounded: 'rounded-md',
  };
  return (
    n[1] !== void 0 && (P.list = n[1]),
    (l = new Ws({ props: P })),
    n[9](l),
    dt.push(() => Ct(l, 'list', T)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (e.textContent = 'Add word'),
          (i = B()),
          Z(s.$$.fragment),
          (r = B()),
          Z(l.$$.fragment),
          (c = B()),
          (f = C('div')),
          (u = C('textarea')),
          (d = B()),
          (h = C('div')),
          (g = C('button')),
          (m = X('add')),
          (_ = B()),
          (y = C('button')),
          (y.textContent = 'close'),
          b(e, 'class', 'select-none bg-cyan-400 text-white rounded-md p-2 cursor-default'),
          b(
            u,
            'class',
            'w-full text-cyan-900 resize-none p-2 rounded-md bg-cyan-400 bg-opacity-50 hover:bg-cyan-300 focus:bg-cyan-300 transition-all placeholder:text-cyan-950',
          ),
          b(u, 'rows', '3'),
          b(u, 'placeholder', 'Enter word description...'),
          b(f, 'class', 'p-2 border-2 border-cyan-300 rounded-md'),
          (g.disabled = p = n[0].length === 0 || n[1].length === 0),
          b(
            g,
            'class',
            'btn disabled:bg-cyan-300 bg-cyan-400 hover:bg-cyan-600 focus:bg-cyan-600 rounded-md text-white',
          ),
          b(
            y,
            'class',
            'btn bg-cyan-400 hover:bg-cyan-600 focus:bg-cyan-600 rounded-md text-white',
          ),
          b(
            t,
            'class',
            'max-w-90% gap-5 flex flex-col text-center selection:text-white selection:bg-cyan-500 overflow-hidden px-5',
          );
      },
      m(E, O) {
        x(E, t, O),
          S(t, e),
          S(t, i),
          J(s, t, null),
          S(t, r),
          J(l, t, null),
          S(t, c),
          S(t, f),
          S(f, u),
          n[11](u),
          Ie(u, n[2]),
          S(t, d),
          S(t, h),
          S(h, g),
          S(g, m),
          S(h, _),
          S(h, y),
          (v = !0),
          k || ((w = [R(u, 'input', n[12]), R(g, 'click', n[6]), R(y, 'click', n[13])]), (k = !0));
      },
      p(E, [O]) {
        const H = {};
        !o && O & 1 && ((o = !0), (H.list = E[0]), Tt(() => (o = !1))), s.$set(H);
        const W = {};
        !a && O & 2 && ((a = !0), (W.list = E[1]), Tt(() => (a = !1))),
          l.$set(W),
          O & 4 && Ie(u, E[2]),
          (!v || (O & 3 && p !== (p = E[0].length === 0 || E[1].length === 0))) && (g.disabled = p);
      },
      i(E) {
        v || (L(s.$$.fragment, E), L(l.$$.fragment, E), (v = !0));
      },
      o(E) {
        F(s.$$.fragment, E), F(l.$$.fragment, E), (v = !1);
      },
      d(E) {
        E && A(t), n[7](null), Q(s), n[9](null), Q(l), n[11](null), (k = !1), Pt(w);
      },
    }
  );
}
const uu =
    'bg-cyan-300 hover:bg-cyan-400 focus:bg-cyan-400 border-2 border-cyan-400 brightness-100 active:scale-90 p-2 leading-3 text-center absolute -top-2 -right-2 rounded-md  transition-all',
  fu = '!bg-red-300 border-red-400',
  du = 'bg-white',
  hu = '';
function Zv(n, t, e) {
  let i = [],
    s = [],
    o = '',
    r,
    l,
    a;
  const c = () => {
      e(2, (o = '')), r.reset(), l.reset(), e(5, (a.value = ''), a);
    },
    f = () => {
      re.addWord({ variants: i, translations: s, description: o.trim() }), c();
    };
  function u(y) {
    dt[y ? 'unshift' : 'push'](() => {
      (r = y), e(3, r);
    });
  }
  function d(y) {
    (i = y), e(0, i);
  }
  function h(y) {
    dt[y ? 'unshift' : 'push'](() => {
      (l = y), e(4, l);
    });
  }
  function g(y) {
    (s = y), e(1, s);
  }
  function m(y) {
    dt[y ? 'unshift' : 'push'](() => {
      (a = y), e(5, a);
    });
  }
  function p() {
    (o = this.value), e(2, o);
  }
  return [i, s, o, r, l, a, f, u, d, h, g, m, p, () => Wt.close()];
}
class Jv extends lt {
  constructor(t) {
    super(), at(this, t, Zv, Gv, rt, {});
  }
}
function gu(n, t, e) {
  const i = n.slice();
  return (i[7] = t[e]), i;
}
function mu(n, t, e) {
  const i = n.slice();
  return (i[7] = t[e]), i;
}
function pu(n) {
  let t,
    e = n[7] + '',
    i;
  return {
    c() {
      (t = C('span')),
        (i = X(e)),
        b(
          t,
          'class',
          'chip bg-orange-300 cursor-default hover:filter-none hover:bg-orange-400 focus:bg-orange-400 break-all whitespace-normal',
        );
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p: ct,
    d(s) {
      s && A(t);
    },
  };
}
function bu(n) {
  let t,
    e = n[7] + '',
    i;
  return {
    c() {
      (t = C('span')),
        (i = X(e)),
        b(
          t,
          'class',
          'chip bg-green-300 cursor-default hover:filter-none hover:bg-green-400 focus:bg-green-400 break-all whitespace-normal',
        );
    },
    m(s, o) {
      x(s, t, o), S(t, i);
    },
    p: ct,
    d(s) {
      s && A(t);
    },
  };
}
function Qv(n) {
  let t, e, i;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = C('div')),
        (i.textContent = `${n[2]}`),
        b(i, 'class', 'bg-sky-300 rounded-md text-xs p-2 cursor-default text-center'),
        b(
          e,
          'class',
          'w-full p-2 rounded-md bg-red-300 bg-opacity-50 break-all max-h-24 overflow-auto',
        ),
        b(t, 'class', 'p-2 rounded-md border-red-300 border-2');
    },
    m(s, o) {
      x(s, t, o), S(t, e), S(e, i);
    },
    p: ct,
    d(s) {
      s && A(t);
    },
  };
}
function $v(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g,
    m,
    p,
    _ = n[0],
    y = [];
  for (let M = 0; M < _.length; M += 1) y[M] = pu(mu(n, _, M));
  let v = n[1],
    k = [];
  for (let M = 0; M < v.length; M += 1) k[M] = bu(gu(n, v, M));
  let w = n[2] && Qv(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (e.textContent = 'Delete word'),
        (i = B()),
        (s = C('div')),
        (o = C('div'));
      for (let M = 0; M < y.length; M += 1) y[M].c();
      (r = B()), (l = C('div')), (a = C('div'));
      for (let M = 0; M < k.length; M += 1) k[M].c();
      (c = B()),
        w && w.c(),
        (f = B()),
        (u = C('div')),
        (d = C('button')),
        (d.textContent = 'delete'),
        (h = B()),
        (g = C('button')),
        (g.textContent = 'cancel'),
        b(e, 'class', 'select-none bg-red-400 rounded-md p-2 text-white cursor-default'),
        b(
          o,
          'class',
          'flex flex-wrap justify-center gap-2 p-2 bg-red-300 bg-opacity-50 rounded-md max-h-24 overflow-auto',
        ),
        b(s, 'class', 'p-2 rounded-md border-red-300 border-2'),
        b(
          a,
          'class',
          'flex flex-wrap justify-center gap-2 p-2 bg-red-300 bg-opacity-50 rounded-md max-h-24 overflow-auto',
        ),
        b(l, 'class', 'p-2 rounded-md border-red-300 border-2'),
        b(d, 'class', 'btn bg-red-400 hover:bg-red-500 focus:bg-red-500 rounded-md text-white'),
        b(g, 'class', 'btn bg-red-400 hover:bg-red-500 focus:bg-red-500 rounded-md text-white'),
        b(t, 'class', 'gap-5 max-w-90% flex flex-col text-center');
    },
    m(M, D) {
      x(M, t, D), S(t, e), S(t, i), S(t, s), S(s, o);
      for (let T = 0; T < y.length; T += 1) y[T] && y[T].m(o, null);
      S(t, r), S(t, l), S(l, a);
      for (let T = 0; T < k.length; T += 1) k[T] && k[T].m(a, null);
      S(t, c),
        w && w.m(t, null),
        S(t, f),
        S(t, u),
        S(u, d),
        S(u, h),
        S(u, g),
        m || ((p = [R(d, 'click', n[3]), R(g, 'click', n[4])]), (m = !0));
    },
    p(M, [D]) {
      if (D & 1) {
        _ = M[0];
        let T;
        for (T = 0; T < _.length; T += 1) {
          const P = mu(M, _, T);
          y[T] ? y[T].p(P, D) : ((y[T] = pu(P)), y[T].c(), y[T].m(o, null));
        }
        for (; T < y.length; T += 1) y[T].d(1);
        y.length = _.length;
      }
      if (D & 2) {
        v = M[1];
        let T;
        for (T = 0; T < v.length; T += 1) {
          const P = gu(M, v, T);
          k[T] ? k[T].p(P, D) : ((k[T] = bu(P)), k[T].c(), k[T].m(a, null));
        }
        for (; T < k.length; T += 1) k[T].d(1);
        k.length = v.length;
      }
      M[2] && w.p(M, D);
    },
    i: ct,
    o: ct,
    d(M) {
      M && A(t), oe(y, M), oe(k, M), w && w.d(), (m = !1), Pt(p);
    },
  };
}
function tw(n, t, e) {
  let i;
  Dt(n, Eu, (c) => e(6, (i = c)));
  const { variants: s, translations: o, description: r } = i;
  return [
    s,
    o,
    r,
    () => {
      re.removeWord(i.id), Wt.close();
    },
    () => Wt.close(),
  ];
}
class ew extends lt {
  constructor(t) {
    super(), at(this, t, tw, $v, rt, {});
  }
}
function nw(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d, h, g, m, p, _, y, v, k, w;
  function M(E) {
    n[4](E);
  }
  let D = {
    buttonBaseStyles: _u,
    buttonErrorStyles: yu,
    buttonImageBaseStyles: ku,
    buttonImageErrorStyles: vu,
    InputChipStyles:
      'text-purple-900 [&_.input-chip-list]:justify-center [&_.input-chip-list]:rounded-md [&_.input-chip-list]:p-2 [&_.input-chip-list]:bg-purple-400 [&_.input-chip-list]:bg-opacity-50 [&_.input-chip-list]:max-h-24 [&_.input-chip-list]:overflow-auto !border-purple-300 border-2 !cursor-default hover:filter-none [&_input]: [&_input]:p-2 [&_input]:rounded-md [&_input]:bg-purple-200 hover:[&_input]:bg-purple-300 focus:[&_input]:bg-purple-300 [&_input]:transition-all [&_input]:border-b-2 [&_input]:border-purple-300 placeholder:[&_input]:text-purple-950',
    chips:
      'text-slate-950 bg-orange-300 hover:filter-none hover:bg-orange-400 focus:bg-orange-400  break-all whitespace-normal',
    placeholder: 'Enter word variant...',
    rounded: 'rounded-md',
  };
  n[0] !== void 0 && (D.list = n[0]), (s = new Ws({ props: D })), dt.push(() => Ct(s, 'list', M));
  function T(E) {
    n[5](E);
  }
  let P = {
    buttonBaseStyles: _u,
    buttonErrorStyles: yu,
    buttonImageBaseStyles: ku,
    buttonImageErrorStyles: vu,
    InputChipStyles:
      'text-purple-900 [&_.input-chip-list]:justify-center [&_.input-chip-list]:rounded-md [&_.input-chip-list]:p-2 [&_.input-chip-list]:bg-purple-400 [&_.input-chip-list]:bg-opacity-50 [&_.input-chip-list]:max-h-24 [&_.input-chip-list]:overflow-auto !border-purple-300 border-2 !cursor-default hover:filter-none [&_input]: [&_input]:p-2 [&_input]:rounded-md [&_input]:bg-purple-200 hover:[&_input]:bg-purple-300 focus:[&_input]:bg-purple-300 [&_input]:transition-all [&_input]:border-b-2 [&_input]:border-purple-300 placeholder:[&_input]:text-purple-950',
    chips:
      'text-slate-950 bg-green-300 hover:filter-none hover:bg-green-400 focus:bg-green-400  break-all whitespace-normal',
    placeholder: 'Enter word translation...',
    rounded: 'rounded-md',
  };
  return (
    n[1] !== void 0 && (P.list = n[1]),
    (l = new Ws({ props: P })),
    dt.push(() => Ct(l, 'list', T)),
    {
      c() {
        (t = C('div')),
          (e = C('div')),
          (e.textContent = 'Edit word'),
          (i = B()),
          Z(s.$$.fragment),
          (r = B()),
          Z(l.$$.fragment),
          (c = B()),
          (f = C('div')),
          (u = C('textarea')),
          (d = B()),
          (h = C('div')),
          (g = C('button')),
          (m = X('save')),
          (_ = B()),
          (y = C('button')),
          (y.textContent = 'cancel'),
          b(e, 'class', 'select-none bg-purple-400 text-white rounded-md p-2 cursor-default'),
          b(
            u,
            'class',
            'w-full text-purple-800 resize-none p-2 rounded-md bg-purple-400 bg-opacity-50 focus:bg-purple-300 hover:bg-purple-300 transition-all placeholder:text-purple-950',
          ),
          b(u, 'rows', '3'),
          b(u, 'placeholder', 'Enter word description...'),
          b(f, 'class', 'p-2 border-2 border-purple-300 rounded-md'),
          (g.disabled = p = n[0].length === 0 || n[1].length === 0),
          b(
            g,
            'class',
            'btn disabled:bg-purple-300 bg-purple-400 hover:bg-purple-500 focus:bg-purple-500 rounded-md text-white',
          ),
          b(
            y,
            'class',
            'btn bg-purple-400 hover:bg-purple-500 focus:bg-purple-500 rounded-md text-white',
          ),
          b(
            t,
            'class',
            'max-w-90% gap-5 flex flex-col text-center selection:text-white selection:bg-purple-500 overflow-hidden px-5',
          );
      },
      m(E, O) {
        x(E, t, O),
          S(t, e),
          S(t, i),
          J(s, t, null),
          S(t, r),
          J(l, t, null),
          S(t, c),
          S(t, f),
          S(f, u),
          Ie(u, n[2]),
          S(t, d),
          S(t, h),
          S(h, g),
          S(g, m),
          S(h, _),
          S(h, y),
          (v = !0),
          k || ((w = [R(u, 'input', n[6]), R(g, 'click', n[3]), R(y, 'click', n[7])]), (k = !0));
      },
      p(E, [O]) {
        const H = {};
        !o && O & 1 && ((o = !0), (H.list = E[0]), Tt(() => (o = !1))), s.$set(H);
        const W = {};
        !a && O & 2 && ((a = !0), (W.list = E[1]), Tt(() => (a = !1))),
          l.$set(W),
          O & 4 && Ie(u, E[2]),
          (!v || (O & 3 && p !== (p = E[0].length === 0 || E[1].length === 0))) && (g.disabled = p);
      },
      i(E) {
        v || (L(s.$$.fragment, E), L(l.$$.fragment, E), (v = !0));
      },
      o(E) {
        F(s.$$.fragment, E), F(l.$$.fragment, E), (v = !1);
      },
      d(E) {
        E && A(t), Q(s), Q(l), (k = !1), Pt(w);
      },
    }
  );
}
const _u =
    'bg-purple-300 hover:bg-purple-400 focus:bg-purple-400 border-2 border-purple-400 p-2 hover:brightness-100 active:scale-90 leading-3 text-center absolute -top-2 -right-2 rounded-md  transition-all',
  yu = '!bg-red-300 border-red-400',
  ku = 'bg-white',
  vu = '';
function iw(n, t, e) {
  let i;
  Dt(n, Fu, (d) => e(8, (i = d)));
  let { variants: s, translations: o, description: r } = i;
  const l = () => {
    re.editWord(i, { variants: s, translations: o, description: r.trim() }), Wt.close();
  };
  function a(d) {
    (s = d), e(0, s);
  }
  function c(d) {
    (o = d), e(1, o);
  }
  function f() {
    (r = this.value), e(2, r);
  }
  return [s, o, r, l, a, c, f, () => Wt.close()];
}
class sw extends lt {
  constructor(t) {
    super(), at(this, t, iw, nw, rt, {});
  }
}
function ow(n) {
  let t, e, i, s, o, r, l, a, c, f, u;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (e.textContent = 'Confirm practice reset'),
        (i = B()),
        (s = C('div')),
        (o = C('button')),
        (o.textContent = 'Yes'),
        (r = B()),
        (l = C('button')),
        (l.textContent = 'No'),
        b(e, 'class', 'bg-pink-400 rounded-md p-2'),
        b(o, 'class', 'btn bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 rounded-md'),
        b(l, 'class', 'btn bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 rounded-md'),
        b(t, 'class', 'absolute flex flex-col gap-5 w-max');
    },
    m(d, h) {
      x(d, t, h),
        S(t, e),
        S(t, i),
        S(t, s),
        S(s, o),
        S(s, r),
        S(s, l),
        (c = !0),
        f || ((u = [R(o, 'click', n[4]), R(l, 'click', n[5])]), (f = !0));
    },
    p: ct,
    i(d) {
      c ||
        (pt(() => {
          c && (a || (a = ot(t, he, { y: 100, duration: 100 }, !0)), a.run(1));
        }),
        (c = !0));
    },
    o(d) {
      a || (a = ot(t, he, { y: 100, duration: 100 }, !1)), a.run(0), (c = !1);
    },
    d(d) {
      d && A(t), d && a && a.end(), (f = !1), Pt(u);
    },
  };
}
function rw(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l = n[0].learnSuccess + '',
    a,
    c,
    f,
    u,
    d,
    h,
    g = n[0].practiceCount + '',
    m,
    p,
    _,
    y,
    v = n[0].successfulPracticeCount + '',
    k,
    w,
    M,
    D,
    T,
    P,
    E;
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (e.textContent = 'Word practice data'),
        (i = B()),
        (s = C('div')),
        (o = X(`Learning success:\r
        `)),
        (r = C('span')),
        (a = X(l)),
        (c = X('%')),
        (u = B()),
        (d = C('div')),
        (h = X('Total practice count: ')),
        (m = X(g)),
        (p = B()),
        (_ = C('div')),
        (y = X('Successful practice count: ')),
        (k = X(v)),
        (w = B()),
        (M = C('button')),
        (M.textContent = 'reset'),
        b(e, 'class', 'bg-pink-400 rounded-md p-2'),
        b(r, 'class', (f = 'p-1 rounded-md ' + wr(n[0].learnSuccess))),
        b(s, 'class', 'bg-pink-400 rounded-md p-2 bg-opacity-50'),
        b(d, 'class', 'bg-pink-400 rounded-md p-2 bg-opacity-50'),
        b(_, 'class', 'bg-pink-400 rounded-md p-2 bg-opacity-50'),
        b(M, 'class', 'btn bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 rounded-md self-center'),
        b(t, 'class', 'absolute flex flex-col gap-5 w-max');
    },
    m(O, H) {
      x(O, t, H),
        S(t, e),
        S(t, i),
        S(t, s),
        S(s, o),
        S(s, r),
        S(r, a),
        S(r, c),
        S(t, u),
        S(t, d),
        S(d, h),
        S(d, m),
        S(t, p),
        S(t, _),
        S(_, y),
        S(_, k),
        S(t, w),
        S(t, M),
        (T = !0),
        P || ((E = R(M, 'click', n[2])), (P = !0));
    },
    p(O, H) {
      (!T || H & 1) && l !== (l = O[0].learnSuccess + '') && mt(a, l),
        (!T || (H & 1 && f !== (f = 'p-1 rounded-md ' + wr(O[0].learnSuccess)))) &&
          b(r, 'class', f),
        (!T || H & 1) && g !== (g = O[0].practiceCount + '') && mt(m, g),
        (!T || H & 1) && v !== (v = O[0].successfulPracticeCount + '') && mt(k, v);
    },
    i(O) {
      T ||
        (pt(() => {
          T && (D || (D = ot(t, he, { y: 100, duration: 100 }, !0)), D.run(1));
        }),
        (T = !0));
    },
    o(O) {
      D || (D = ot(t, he, { y: 100, duration: 100 }, !1)), D.run(0), (T = !1);
    },
    d(O) {
      O && A(t), O && D && D.end(), (P = !1), E();
    },
  };
}
function lw(n) {
  let t, e, i, s;
  const o = [rw, ow],
    r = [];
  function l(a, c) {
    return 0;
  }
  return (
    (e = l()),
    (i = r[e] = o[e](n)),
    {
      c() {
        (t = C('div')),
          i.c(),
          b(
            t,
            'class',
            'select-none max-w-90% flex justify-center items-center text-center cursor-default text-white relative',
          );
      },
      m(a, c) {
        x(a, t, c), r[e].m(t, null), (s = !0);
      },
      p(a, [c]) {
        i.p(a, c);
      },
      i(a) {
        s || (L(i), (s = !0));
      },
      o(a) {
        F(i), (s = !1);
      },
      d(a) {
        a && A(t), r[e].d();
      },
    }
  );
}
function aw(n, t, e) {
  let i;
  Dt(n, ko, (c) => e(3, (i = c)));
  let s;
  const o = (c) => {
      c && (re.resetWordPractice(s), ko.set(re.getById(s.id))),
        Wt.trigger({
          type: 'component',
          component: 'wordPractice',
          backdropClasses: '!bg-pink-200 !bg-opacity-50 backdrop-blur-sm',
        });
    },
    r = () => {
      Wt.close(),
        Wt.trigger(
          ni({
            backdropColor: 'pink',
            color: 'pink',
            body: "All words practice data will be <i class='px-1 bg-white text-red-700 rounded-md'>deleted</i><br>",
            callback: o,
          }),
        );
    },
    l = () => o(!0),
    a = () => o(!1);
  return (
    (n.$$.update = () => {
      n.$$.dirty & 8 && e(0, (s = i));
    }),
    [s, o, r, i, l, a]
  );
}
class cw extends lt {
  constructor(t) {
    super(), at(this, t, aw, lw, rt, {});
  }
}
const uw = (n) => {
  const t = (e) => {
    n &&
      !n.contains(e.target) &&
      !e.defaultPrevented &&
      n.dispatchEvent(new CustomEvent('backdropClick'));
  };
  return (
    document.addEventListener('click', t, !0),
    {
      destroy() {
        document.removeEventListener('click', t, !0);
      },
    }
  );
};
function fw(n) {
  let t;
  return {
    c() {
      (t = C('div')),
        b(
          t,
          'class',
          'bg-' + n[4] + '-400 bg-opacity-50 rounded-md p-2 text-center cursor-default select-none',
        );
    },
    m(e, i) {
      x(e, t, i), (t.innerHTML = n[1]);
    },
    p: ct,
    d(e) {
      e && A(t);
    },
  };
}
function dw(n) {
  let t,
    e,
    i,
    s,
    o,
    r,
    l,
    a,
    c,
    f,
    u,
    d,
    h,
    g = n[1] && fw(n);
  return {
    c() {
      (t = C('div')),
        (e = C('div')),
        (i = X(n[0])),
        (s = B()),
        g && g.c(),
        (o = B()),
        (r = C('div')),
        (l = C('button')),
        (a = X(n[2])),
        (c = B()),
        (f = C('button')),
        (u = X(n[3])),
        b(
          e,
          'class',
          'bg-' + n[4] + '-400 rounded-md p-2 text-center cursor-default select-none text-2xl',
        ),
        b(
          l,
          'class',
          'transition-all active:scale-90 p-2 grow bg-' +
            n[4] +
            '-400 hover:bg-' +
            n[4] +
            '-500 focus:bg-' +
            n[4] +
            '-500 rounded-md',
        ),
        b(
          f,
          'class',
          'transition-all active:scale-90 p-2 grow bg-' +
            n[4] +
            '-400 hover:bg-' +
            n[4] +
            '-500 focus:bg-' +
            n[4] +
            '-500 rounded-md',
        ),
        b(r, 'class', 'flex gap-2'),
        b(t, 'class', 'flex flex-col gap-5 text-white');
    },
    m(m, p) {
      x(m, t, p),
        S(t, e),
        S(e, i),
        S(t, s),
        g && g.m(t, null),
        S(t, o),
        S(t, r),
        S(r, l),
        S(l, a),
        S(r, c),
        S(r, f),
        S(f, u),
        d ||
          ((h = [
            R(l, 'click', n[6]),
            R(f, 'click', n[5]),
            Qn(uw.call(null, t)),
            R(t, 'backdropClick', n[5]),
          ]),
          (d = !0));
    },
    p(m, [p]) {
      m[1] && g.p(m, p);
    },
    i: ct,
    o: ct,
    d(m) {
      m && A(t), g && g.d(), (d = !1), Pt(h);
    },
  };
}
function hw(n, t, e) {
  let i;
  Dt(n, Wt, (h) => e(7, (i = h)));
  const {
      title: s = 'Confirm',
      body: o = '',
      okBtnText: r = 'Yes',
      noBtnText: l = 'No',
      color: a = 'slate',
      callback: c,
    } = i[0].meta,
    f = () => d(!1),
    u = () => d(!0),
    d = (h) => {
      c(h), Wt.close();
    };
  return [s, o, r, l, a, f, u];
}
class gw extends lt {
  constructor(t) {
    super(), at(this, t, hw, dw, rt, {});
  }
}
const mw = {
  addWord: { ref: Jv },
  removeWord: { ref: ew },
  editWord: { ref: sw },
  wordPractice: { ref: cw },
  confirm: { ref: gw, slot: '<span> Empty </span>' },
};
function pw(n) {
  let t, e, i, s, o, r, l, a, c, f, u, d;
  return (
    (t = new Uv({})),
    (i = new jv({})),
    (o = new gv({})),
    (l = new jg({ props: { components: mw } })),
    (c = new av({})),
    (u = new nm({})),
    {
      c() {
        Z(t.$$.fragment),
          (e = B()),
          Z(i.$$.fragment),
          (s = B()),
          Z(o.$$.fragment),
          (r = B()),
          Z(l.$$.fragment),
          (a = B()),
          Z(c.$$.fragment),
          (f = B()),
          Z(u.$$.fragment);
      },
      m(h, g) {
        J(t, h, g),
          x(h, e, g),
          J(i, h, g),
          x(h, s, g),
          J(o, h, g),
          x(h, r, g),
          J(l, h, g),
          x(h, a, g),
          J(c, h, g),
          x(h, f, g),
          J(u, h, g),
          (d = !0);
      },
      p: ct,
      i(h) {
        d ||
          (L(t.$$.fragment, h),
          L(i.$$.fragment, h),
          L(o.$$.fragment, h),
          L(l.$$.fragment, h),
          L(c.$$.fragment, h),
          L(u.$$.fragment, h),
          (d = !0));
      },
      o(h) {
        F(t.$$.fragment, h),
          F(i.$$.fragment, h),
          F(o.$$.fragment, h),
          F(l.$$.fragment, h),
          F(c.$$.fragment, h),
          F(u.$$.fragment, h),
          (d = !1);
      },
      d(h) {
        Q(t, h),
          h && A(e),
          Q(i, h),
          h && A(s),
          Q(o, h),
          h && A(r),
          Q(l, h),
          h && A(a),
          Q(c, h),
          h && A(f),
          Q(u, h);
      },
    }
  );
}
function bw(n, t, e) {
  let i;
  return Dt(n, tn, (s) => e(0, (i = s))), Si(tn, (i = '/dictionary'), i), [];
}
class ww extends lt {
  constructor(t) {
    super(), at(this, t, bw, pw, rt, {});
  }
}
export { ww as default };