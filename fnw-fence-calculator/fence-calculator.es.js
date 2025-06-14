const wn = {};
function Sh(i) {
  wn.context = i;
}
const wh = (i, e) => i === e, Pn = Symbol("solid-proxy"), ys = Symbol("solid-track"), _s = {
  equals: wh
};
let dc = yc;
const qn = 1, vs = 2, uc = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var st = null;
let hi = null, ht = null, It = null, Un = null, ta = 0;
function di(i, e) {
  const t = ht, n = st, r = i.length === 0, s = r ? uc : {
    owned: null,
    cleanups: null,
    context: null,
    owner: e || n
  }, o = r ? i : () => i(() => sn(() => sa(s)));
  st = s, ht = null;
  try {
    return jn(o, !0);
  } finally {
    ht = t, st = n;
  }
}
function Ut(i, e) {
  e = e ? Object.assign({}, _s, e) : _s;
  const t = {
    value: i,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (r) => (typeof r == "function" && (r = r(t.value)), xc(t, r));
  return [mc.bind(t), n];
}
function Te(i, e, t) {
  const n = ra(i, e, !1, qn);
  Ar(n);
}
function vt(i, e, t) {
  dc = Eh;
  const n = ra(i, e, !1, qn);
  n.user = !0, Un ? Un.push(n) : Ar(n);
}
function te(i, e, t) {
  t = t ? Object.assign({}, _s, t) : _s;
  const n = ra(i, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = t.equals || void 0, Ar(n), mc.bind(n);
}
function dn(i) {
  return jn(i, !1);
}
function sn(i) {
  const e = ht;
  ht = null;
  try {
    return i();
  } finally {
    ht = e;
  }
}
function fc(i, e, t) {
  const n = Array.isArray(i);
  let r, s = t && t.defer;
  return (o) => {
    let a;
    if (n) {
      a = Array(i.length);
      for (let l = 0; l < i.length; l++)
        a[l] = i[l]();
    } else
      a = i();
    if (s) {
      s = !1;
      return;
    }
    const c = sn(() => e(a, r, o));
    return r = a, c;
  };
}
function na(i) {
  vt(() => sn(i));
}
function ot(i) {
  return st === null || (st.cleanups === null ? st.cleanups = [i] : st.cleanups.push(i)), i;
}
function pc() {
  return ht;
}
function Mh() {
  return st;
}
function Ch(i, e) {
  const t = st;
  st = i;
  try {
    return jn(e, !0);
  } catch (n) {
    oa(n);
  } finally {
    st = t;
  }
}
function Ph(i) {
  const e = ht, t = st;
  return Promise.resolve().then(() => {
    ht = e, st = t;
    let n;
    return jn(i, !1), ht = st = null, n ? n.done : void 0;
  });
}
function gc(i, e) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: zh(t),
    defaultValue: i
  };
}
function ia(i) {
  let e;
  return (e = vc(st, i.id)) !== void 0 ? e : i.defaultValue;
}
function Es(i) {
  const e = te(i), t = te(() => Bo(e()));
  return t.toArray = () => {
    const n = t();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, t;
}
function mc() {
  const i = hi;
  if (this.sources && (this.state || i))
    if (this.state === qn || i)
      Ar(this);
    else {
      const e = It;
      It = null, jn(() => Ss(this), !1), It = e;
    }
  if (ht) {
    const e = this.observers ? this.observers.length : 0;
    ht.sources ? (ht.sources.push(this), ht.sourceSlots.push(e)) : (ht.sources = [this], ht.sourceSlots = [e]), this.observers ? (this.observers.push(ht), this.observerSlots.push(ht.sources.length - 1)) : (this.observers = [ht], this.observerSlots = [ht.sources.length - 1]);
  }
  return this.value;
}
function xc(i, e, t) {
  let n = i.value;
  return (!i.comparator || !i.comparator(n, e)) && (i.value = e, i.observers && i.observers.length && jn(() => {
    for (let r = 0; r < i.observers.length; r += 1) {
      const s = i.observers[r], o = hi && hi.running;
      o && hi.disposed.has(s), (o && !s.tState || !o && !s.state) && (s.pure ? It.push(s) : Un.push(s), s.observers && _c(s)), o || (s.state = qn);
    }
    if (It.length > 1e6)
      throw It = [], new Error();
  }, !1)), e;
}
function Ar(i) {
  if (!i.fn)
    return;
  sa(i);
  const e = st, t = ht, n = ta;
  ht = st = i, Th(i, i.value, n), ht = t, st = e;
}
function Th(i, e, t) {
  let n;
  try {
    n = i.fn(e);
  } catch (r) {
    i.pure && (i.state = qn), oa(r);
  }
  (!i.updatedAt || i.updatedAt <= t) && (i.updatedAt != null && "observers" in i ? xc(i, n) : i.value = n, i.updatedAt = t);
}
function ra(i, e, t, n = qn, r) {
  const s = {
    fn: i,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: st,
    context: null,
    pure: t
  };
  return st === null || st !== uc && (st.owned ? st.owned.push(s) : st.owned = [s]), s;
}
function bs(i) {
  const e = hi;
  if (i.state === 0 || e)
    return;
  if (i.state === vs || e)
    return Ss(i);
  if (i.suspense && sn(i.suspense.inFallback))
    return i.suspense.effects.push(i);
  const t = [i];
  for (; (i = i.owner) && (!i.updatedAt || i.updatedAt < ta); )
    (i.state || e) && t.push(i);
  for (let n = t.length - 1; n >= 0; n--)
    if (i = t[n], i.state === qn || e)
      Ar(i);
    else if (i.state === vs || e) {
      const r = It;
      It = null, jn(() => Ss(i, t[0]), !1), It = r;
    }
}
function jn(i, e) {
  if (It)
    return i();
  let t = !1;
  e || (It = []), Un ? t = !0 : Un = [], ta++;
  try {
    const n = i();
    return Ah(t), n;
  } catch (n) {
    It || (Un = null), oa(n);
  }
}
function Ah(i) {
  if (It && (yc(It), It = null), i)
    return;
  const e = Un;
  Un = null, e.length && jn(() => dc(e), !1);
}
function yc(i) {
  for (let e = 0; e < i.length; e++)
    bs(i[e]);
}
function Eh(i) {
  let e, t = 0;
  for (e = 0; e < i.length; e++) {
    const n = i[e];
    n.user ? i[t++] = n : bs(n);
  }
  for (wn.context && Sh(), e = 0; e < t; e++)
    bs(i[e]);
}
function Ss(i, e) {
  const t = hi;
  i.state = 0;
  for (let n = 0; n < i.sources.length; n += 1) {
    const r = i.sources[n];
    r.sources && (r.state === qn || t ? r !== e && bs(r) : (r.state === vs || t) && Ss(r, e));
  }
}
function _c(i) {
  const e = hi;
  for (let t = 0; t < i.observers.length; t += 1) {
    const n = i.observers[t];
    (!n.state || e) && (n.state = vs, n.pure ? It.push(n) : Un.push(n), n.observers && _c(n));
  }
}
function sa(i) {
  let e;
  if (i.sources)
    for (; i.sources.length; ) {
      const t = i.sources.pop(), n = i.sourceSlots.pop(), r = t.observers;
      if (r && r.length) {
        const s = r.pop(), o = t.observerSlots.pop();
        n < r.length && (s.sourceSlots[o] = n, r[n] = s, t.observerSlots[n] = o);
      }
    }
  if (i.owned) {
    for (e = 0; e < i.owned.length; e++)
      sa(i.owned[e]);
    i.owned = null;
  }
  if (i.cleanups) {
    for (e = 0; e < i.cleanups.length; e++)
      i.cleanups[e]();
    i.cleanups = null;
  }
  i.state = 0, i.context = null;
}
function Lh(i) {
  return i instanceof Error || typeof i == "string" ? i : new Error("Unknown error");
}
function oa(i) {
  throw i = Lh(i), i;
}
function vc(i, e) {
  return i ? i.context && i.context[e] !== void 0 ? i.context[e] : vc(i.owner, e) : void 0;
}
function Bo(i) {
  if (typeof i == "function" && !i.length)
    return Bo(i());
  if (Array.isArray(i)) {
    const e = [];
    for (let t = 0; t < i.length; t++) {
      const n = Bo(i[t]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return i;
}
function zh(i, e) {
  return function(n) {
    let r;
    return Te(() => r = sn(() => (st.context = {
      [i]: n.value
    }, Es(() => n.children))), void 0), r;
  };
}
const Go = Symbol("fallback");
function ws(i) {
  for (let e = 0; e < i.length; e++)
    i[e]();
}
function Rh(i, e, t = {}) {
  let n = [], r = [], s = [], o = 0, a = e.length > 1 ? [] : null;
  return ot(() => ws(s)), () => {
    let c = i() || [], l, h;
    return c[ys], sn(() => {
      let d = c.length, p, m, g, f, v, w, x, _, y;
      if (d === 0)
        o !== 0 && (ws(s), s = [], n = [], r = [], o = 0, a && (a = [])), t.fallback && (n = [Go], r[0] = di((P) => (s[0] = P, t.fallback())), o = 1);
      else if (o === 0) {
        for (r = new Array(d), h = 0; h < d; h++)
          n[h] = c[h], r[h] = di(u);
        o = d;
      } else {
        for (g = new Array(d), f = new Array(d), a && (v = new Array(d)), w = 0, x = Math.min(o, d); w < x && n[w] === c[w]; w++)
          ;
        for (x = o - 1, _ = d - 1; x >= w && _ >= w && n[x] === c[_]; x--, _--)
          g[_] = r[x], f[_] = s[x], a && (v[_] = a[x]);
        for (p = /* @__PURE__ */ new Map(), m = new Array(_ + 1), h = _; h >= w; h--)
          y = c[h], l = p.get(y), m[h] = l === void 0 ? -1 : l, p.set(y, h);
        for (l = w; l <= x; l++)
          y = n[l], h = p.get(y), h !== void 0 && h !== -1 ? (g[h] = r[l], f[h] = s[l], a && (v[h] = a[l]), h = m[h], p.set(y, h)) : s[l]();
        for (h = w; h < d; h++)
          h in g ? (r[h] = g[h], s[h] = f[h], a && (a[h] = v[h], a[h](h))) : r[h] = di(u);
        r = r.slice(0, o = d), n = c.slice(0);
      }
      return r;
    });
    function u(d) {
      if (s[h] = d, a) {
        const [p, m] = Ut(h);
        return a[h] = m, e(c[h], p);
      }
      return e(c[h]);
    }
  };
}
function Ih(i, e, t = {}) {
  let n = [], r = [], s = [], o = [], a = 0, c;
  return ot(() => ws(s)), () => {
    const l = i() || [];
    return l[ys], sn(() => {
      if (l.length === 0)
        return a !== 0 && (ws(s), s = [], n = [], r = [], a = 0, o = []), t.fallback && (n = [Go], r[0] = di((u) => (s[0] = u, t.fallback())), a = 1), r;
      for (n[0] === Go && (s[0](), s = [], n = [], r = [], a = 0), c = 0; c < l.length; c++)
        c < n.length && n[c] !== l[c] ? o[c](() => l[c]) : c >= n.length && (r[c] = di(h));
      for (; c < n.length; c++)
        s[c]();
      return a = o.length = s.length = l.length, n = l.slice(0), r = r.slice(0, a);
    });
    function h(u) {
      s[c] = u;
      const [d, p] = Ut(l[c]);
      return o[c] = p, e(d, c);
    }
  };
}
function be(i, e) {
  return sn(() => i(e || {}));
}
function Ir() {
  return !0;
}
const Dh = {
  get(i, e, t) {
    return e === Pn ? t : i.get(e);
  },
  has(i, e) {
    return e === Pn ? !0 : i.has(e);
  },
  set: Ir,
  deleteProperty: Ir,
  getOwnPropertyDescriptor(i, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return i.get(e);
      },
      set: Ir,
      deleteProperty: Ir
    };
  },
  ownKeys(i) {
    return i.keys();
  }
};
function Hs(i) {
  return (i = typeof i == "function" ? i() : i) ? i : {};
}
function Nh(...i) {
  let e = !1;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    e = e || !!r && Pn in r, i[n] = typeof r == "function" ? (e = !0, te(r)) : r;
  }
  if (e)
    return new Proxy({
      get(n) {
        for (let r = i.length - 1; r >= 0; r--) {
          const s = Hs(i[r])[n];
          if (s !== void 0)
            return s;
        }
      },
      has(n) {
        for (let r = i.length - 1; r >= 0; r--)
          if (n in Hs(i[r]))
            return !0;
        return !1;
      },
      keys() {
        const n = [];
        for (let r = 0; r < i.length; r++)
          n.push(...Object.keys(Hs(i[r])));
        return [...new Set(n)];
      }
    }, Dh);
  const t = {};
  for (let n = i.length - 1; n >= 0; n--)
    if (i[n]) {
      const r = Object.getOwnPropertyDescriptors(i[n]);
      for (const s in r)
        s in t || Object.defineProperty(t, s, {
          enumerable: !0,
          get() {
            for (let o = i.length - 1; o >= 0; o--) {
              const a = (i[o] || {})[s];
              if (a !== void 0)
                return a;
            }
          }
        });
    }
  return t;
}
function Ot(i) {
  const e = "fallback" in i && {
    fallback: () => i.fallback
  };
  return te(Ih(() => i.each, i.children, e || void 0));
}
function en(i) {
  let e = !1;
  const t = i.keyed, n = te(() => i.when, void 0, {
    equals: (r, s) => e ? r === s : !r == !s
  });
  return te(() => {
    const r = n();
    if (r) {
      const s = i.children, o = typeof s == "function" && s.length > 0;
      return e = t || o, o ? sn(() => s(r)) : s;
    }
    return i.fallback;
  }, void 0, void 0);
}
function Er(i) {
  let e = !1, t = !1;
  const n = (o, a) => o[0] === a[0] && (e ? o[1] === a[1] : !o[1] == !a[1]) && o[2] === a[2], r = Es(() => i.children), s = te(() => {
    let o = r();
    Array.isArray(o) || (o = [o]);
    for (let a = 0; a < o.length; a++) {
      const c = o[a].when;
      if (c)
        return t = !!o[a].keyed, [a, c, o[a]];
    }
    return [-1];
  }, void 0, {
    equals: n
  });
  return te(() => {
    const [o, a, c] = s();
    if (o < 0)
      return i.fallback;
    const l = c.children, h = typeof l == "function" && l.length > 0;
    return e = t || h, h ? sn(() => l(a)) : l;
  }, void 0, void 0);
}
function tn(i) {
  return i;
}
function Fh(i, e, t) {
  let n = t.length, r = e.length, s = n, o = 0, a = 0, c = e[r - 1].nextSibling, l = null;
  for (; o < r || a < s; ) {
    if (e[o] === t[a]) {
      o++, a++;
      continue;
    }
    for (; e[r - 1] === t[s - 1]; )
      r--, s--;
    if (r === o) {
      const h = s < n ? a ? t[a - 1].nextSibling : t[s - a] : c;
      for (; a < s; )
        i.insertBefore(t[a++], h);
    } else if (s === a)
      for (; o < r; )
        (!l || !l.has(e[o])) && e[o].remove(), o++;
    else if (e[o] === t[s - 1] && t[a] === e[r - 1]) {
      const h = e[--r].nextSibling;
      i.insertBefore(t[a++], e[o++].nextSibling), i.insertBefore(t[--s], h), e[r] = t[s];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let u = a;
        for (; u < s; )
          l.set(t[u], u++);
      }
      const h = l.get(e[o]);
      if (h != null)
        if (a < h && h < s) {
          let u = o, d = 1, p;
          for (; ++u < r && u < s && !((p = l.get(e[u])) == null || p !== h + d); )
            d++;
          if (d > h - a) {
            const m = e[o];
            for (; a < h; )
              i.insertBefore(t[a++], m);
          } else
            i.replaceChild(t[a++], e[o++]);
        } else
          o++;
      else
        e[o++].remove();
    }
  }
}
const Ma = "_$DX_DELEGATE";
function kh(i, e, t, n = {}) {
  let r;
  return di((s) => {
    r = s, e === document ? i() : ue(e, i(), e.firstChild ? null : void 0, t);
  }, n.owner), () => {
    r(), e.textContent = "";
  };
}
function Ce(i, e, t) {
  const n = document.createElement("template");
  n.innerHTML = i;
  let r = n.content.firstChild;
  return t && (r = r.firstChild), r;
}
function Yt(i, e = window.document) {
  const t = e[Ma] || (e[Ma] = /* @__PURE__ */ new Set());
  for (let n = 0, r = i.length; n < r; n++) {
    const s = i[n];
    t.has(s) || (t.add(s), e.addEventListener(s, Uh));
  }
}
function ce(i, e, t) {
  t == null ? i.removeAttribute(e) : i.setAttribute(e, t);
}
function Ms(i, e) {
  e == null ? i.removeAttribute("class") : i.className = e;
}
function aa(i, e, t, n) {
  if (n)
    Array.isArray(t) ? (i[`$$${e}`] = t[0], i[`$$${e}Data`] = t[1]) : i[`$$${e}`] = t;
  else if (Array.isArray(t)) {
    const r = t[0];
    i.addEventListener(e, t[0] = (s) => r.call(i, t[1], s));
  } else
    i.addEventListener(e, t);
}
function Oh(i, e, t) {
  if (!e)
    return t ? ce(i, "style") : e;
  const n = i.style;
  if (typeof e == "string")
    return n.cssText = e;
  typeof t == "string" && (n.cssText = t = void 0), t || (t = {}), e || (e = {});
  let r, s;
  for (s in t)
    e[s] == null && n.removeProperty(s), delete t[s];
  for (s in e)
    r = e[s], r !== t[s] && (n.setProperty(s, r), t[s] = r);
  return t;
}
function Ls(i, e, t) {
  return sn(() => i(e, t));
}
function ue(i, e, t, n) {
  if (t !== void 0 && !n && (n = []), typeof e != "function")
    return Cs(i, e, n, t);
  Te((r) => Cs(i, e(), r, t), n);
}
function Uh(i) {
  const e = `$$${i.type}`;
  let t = i.composedPath && i.composedPath()[0] || i.target;
  for (i.target !== t && Object.defineProperty(i, "target", {
    configurable: !0,
    value: t
  }), Object.defineProperty(i, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), wn.registry && !wn.done && (wn.done = !0, document.querySelectorAll("[id^=pl-]").forEach((n) => n.remove())); t; ) {
    const n = t[e];
    if (n && !t.disabled) {
      const r = t[`${e}Data`];
      if (r !== void 0 ? n.call(t, r, i) : n.call(t, i), i.cancelBubble)
        return;
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function Cs(i, e, t, n, r) {
  for (wn.context && !t && (t = [...i.childNodes]); typeof t == "function"; )
    t = t();
  if (e === t)
    return t;
  const s = typeof e, o = n !== void 0;
  if (i = o && t[0] && t[0].parentNode || i, s === "string" || s === "number") {
    if (wn.context)
      return t;
    if (s === "number" && (e = e.toString()), o) {
      let a = t[0];
      a && a.nodeType === 3 ? a.data = e : a = document.createTextNode(e), t = Si(i, t, n, a);
    } else
      t !== "" && typeof t == "string" ? t = i.firstChild.data = e : t = i.textContent = e;
  } else if (e == null || s === "boolean") {
    if (wn.context)
      return t;
    t = Si(i, t, n);
  } else {
    if (s === "function")
      return Te(() => {
        let a = e();
        for (; typeof a == "function"; )
          a = a();
        t = Cs(i, a, t, n);
      }), () => t;
    if (Array.isArray(e)) {
      const a = [], c = t && Array.isArray(t);
      if (Wo(a, e, t, r))
        return Te(() => t = Cs(i, a, t, n, !0)), () => t;
      if (wn.context) {
        if (!a.length)
          return t;
        for (let l = 0; l < a.length; l++)
          if (a[l].parentNode)
            return t = a;
      }
      if (a.length === 0) {
        if (t = Si(i, t, n), o)
          return t;
      } else
        c ? t.length === 0 ? Ca(i, a, n) : Fh(i, t, a) : (t && Si(i), Ca(i, a));
      t = a;
    } else if (e instanceof Node) {
      if (wn.context && e.parentNode)
        return t = o ? [e] : e;
      if (Array.isArray(t)) {
        if (o)
          return t = Si(i, t, n, e);
        Si(i, t, null, e);
      } else
        t == null || t === "" || !i.firstChild ? i.appendChild(e) : i.replaceChild(e, i.firstChild);
      t = e;
    }
  }
  return t;
}
function Wo(i, e, t, n) {
  let r = !1;
  for (let s = 0, o = e.length; s < o; s++) {
    let a = e[s], c = t && t[s];
    if (a instanceof Node)
      i.push(a);
    else if (!(a == null || a === !0 || a === !1))
      if (Array.isArray(a))
        r = Wo(i, a, c) || r;
      else if (typeof a == "function")
        if (n) {
          for (; typeof a == "function"; )
            a = a();
          r = Wo(i, Array.isArray(a) ? a : [a], Array.isArray(c) ? c : [c]) || r;
        } else
          i.push(a), r = !0;
      else {
        const l = String(a);
        c && c.nodeType === 3 && c.data === l ? i.push(c) : i.push(document.createTextNode(l));
      }
  }
  return r;
}
function Ca(i, e, t = null) {
  for (let n = 0, r = e.length; n < r; n++)
    i.insertBefore(e[n], t);
}
function Si(i, e, t, n) {
  if (t === void 0)
    return i.textContent = "";
  const r = n || document.createTextNode("");
  if (e.length) {
    let s = !1;
    for (let o = e.length - 1; o >= 0; o--) {
      const a = e[o];
      if (r !== a) {
        const c = a.parentNode === i;
        !s && !o ? c ? i.replaceChild(r, a) : i.insertBefore(r, t) : c && a.remove();
      } else
        s = !0;
    }
  } else
    i.insertBefore(r, t);
  return [r];
}
const Bh = !1, Gh = `:root{--cookie-banner-primary-color: #fff;--cookie-banner-secondary-color: #000;--cookie-banner-font-family: HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif;--cookie-banner-font-size: 14px;--color_0: 255,255,255;--color_27: 147,190,218;--color_1: 255,255,255;--color_2: 0,0,0;--color_3: 237,28,36;--color_4: 0,136,203;--color_5: 255,203,5;--color_6: 114,114,114;--color_7: 176,176,176;--color_8: 255,255,255;--color_28: 69,149,199;--color_9: 114,114,114;--color_10: 176,176,176;--color_11: 246,249,245;--color_12: 197,199,196;--color_13: 148,149,147;--color_14: 98,100,98;--color_15: 9,20,5;--color_16: 179,200,212;--color_17: 136,157,169;--color_18: 93,114,126;--color_29: 46,99,133;--color_19: 51,72,83;--color_20: 9,29,40;--color_21: 185,217,236;--color_22: 147,190,218;--color_23: 69,149,199;--color_24: 46,99,133;--color_25: 23,50,66;--color_30: 23,50,66;--color_31: 179,200,212;--color_32: 136,157,169;--color_33: 93,114,126;--color_34: 51,72,83;--color_35: 9,29,40;--font_0: normal normal normal 88px/1.2em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_1: normal normal normal 14px/1.79em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;--font_2: normal normal normal 72px/1.25em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_3: normal normal normal 50px/1.34em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_4: normal normal normal 40px/1.35em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_5: normal normal normal 28px/1.375em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_6: normal normal normal 22px/1.41em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_7: normal normal normal 20px/1.67em futura-lt-w01-light,futura-lt-w05-light,sans-serif;--font_8: normal normal normal 18px/1.75em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_9: normal normal normal 15px/1.88em futura-lt-w01-light,futura-lt-w05-light,sans-serif;--font_10: normal normal normal 14px/1.79em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;--wix-ads-height: 0px;--wix-ads-top-height: 0px;--site-width: 980px;--above-all-z-index: 100000;--portals-z-index: 100001;--minViewportSize: 320;--color_26: 185,217,236;--maxViewportSize: 1920;--pinned-layers-in-page: 0;--pinned-layer-in-container: 50;--above-all-in-container: 49;--transition-duration: 0ms;--param_boolean_previewHover: false;--display: flex;--padding: 0px;--firstChildMarginTop: -1px;--lastChildMarginBottom: -1px;--column-width: 980px;--column-flex: 980;--brw: 0px;--brd: 50,65,88;--bg: 61,155,233;--rd: 0px;--shd: none;--alpha-bg: 0;--alpha-brd: 0;--boxShadowToggleOn-shd: none;--direction: ltr;--justify-content: center;--margin: -20px -20px;--item-margin: 20px 20px;--docked-margin: 20px;--bg-overlay-color: transparent;--bg-gradient: none;--scale: 1}h3{color:#000;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:20pt;text-align:left}h1{color:#000;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:30pt;text-align:left}body{color:#000;font-weight:lighter;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:16pt}.calc-table{color:#000;font-weight:lighter;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:13pt}.grid-element{font-family:Arial,Helvetica,sans-serif;font-size:10px;direction:ltr;pointer-events:none;background:transparent;border:0;margin:-1px 0 0;outline:0;padding:0;vertical-align:baseline;position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:min-content 1fr;grid-template-columns:100%}.img-container-div{font-family:Arial,Helvetica,sans-serif;font-size:10px;direction:ltr;background:transparent;border:0;outline:0;padding:0;vertical-align:baseline;pointer-events:auto;top:var(--top,auto);z-index:var(--z-index,auto);cursor:pointer;width:269px;height:323px;position:relative;margin:0 0 -35px;left:1px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start}.fence-style-img-container-div{font-family:Arial,Helvetica,sans-serif;font-size:10px;direction:ltr;background:transparent;border:0;outline:0;padding:0;vertical-align:baseline;pointer-events:auto;top:var(--top,auto);z-index:var(--z-index,auto);cursor:pointer;width:269px;height:260px;position:relative;margin:0 0 -35px;left:1px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start}.img-label-container-div{--cookie-banner-primary-color: #fff;--cookie-banner-secondary-color: #000;--cookie-banner-font-family: HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif;--cookie-banner-font-size: 14px;--color_0: 255,255,255;--color_27: 147,190,218;--color_1: 255,255,255;--color_2: 0,0,0;--color_3: 237,28,36;--color_4: 0,136,203;--color_5: 255,203,5;--color_6: 114,114,114;--color_7: 176,176,176;--color_8: 255,255,255;--color_28: 69,149,199;--color_9: 114,114,114;--color_10: 176,176,176;--color_11: 246,249,245;--color_12: 197,199,196;--color_13: 148,149,147;--color_14: 98,100,98;--color_15: 9,20,5;--color_16: 179,200,212;--color_17: 136,157,169;--color_18: 93,114,126;--color_29: 46,99,133;--color_19: 51,72,83;--color_20: 9,29,40;--color_21: 185,217,236;--color_22: 147,190,218;--color_23: 69,149,199;--color_24: 46,99,133;--color_25: 23,50,66;--color_30: 23,50,66;--color_31: 179,200,212;--color_32: 136,157,169;--color_33: 93,114,126;--color_34: 51,72,83;--color_35: 9,29,40;--font_0: normal normal normal 88px/1.2em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_1: normal normal normal 14px/1.79em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;--font_2: normal normal normal 72px/1.25em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_3: normal normal normal 50px/1.34em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_4: normal normal normal 40px/1.35em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_5: normal normal normal 28px/1.375em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_6: normal normal normal 22px/1.41em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_7: normal normal normal 20px/1.67em futura-lt-w01-light,futura-lt-w05-light,sans-serif;--font_8: normal normal normal 18px/1.75em futura-lt-w01-book,futura-lt-w05-book,sans-serif;--font_9: normal normal normal 15px/1.88em futura-lt-w01-light,futura-lt-w05-light,sans-serif;--font_10: normal normal normal 14px/1.79em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;--wix-ads-height: 0px;--wix-ads-top-height: 0px;--site-width: 980px;--above-all-z-index: 100000;--portals-z-index: 100001;--minViewportSize: 320;--color_26: 185,217,236;--maxViewportSize: 1920;font-family:Arial,Helvetica,sans-serif;font-size:10px;--pinned-layers-in-page: 0;--pinned-layer-in-container: 50;--above-all-in-container: 49;--transition-duration: 0ms;--param_boolean_previewHover: false;--display: flex;--padding: 0px;--firstChildMarginTop: -1px;--lastChildMarginBottom: -1px;--column-width: 980px;--column-flex: 980;--direction: ltr;--justify-content: center;--margin: -20px -20px;--item-margin: 20px 20px;--docked-margin: 20px;direction:ltr;--bg-overlay-color: transparent;--bg-gradient: none;--scale: 1;background:transparent;border:0;outline:0;padding:0;vertical-align:baseline;pointer-events:auto;--container-corvid-border-color: rgba(var(--brd,var(--color_15)),var(--alpha-brd,1));--container-corvid-border-size: var(--brw,1px);--container-corvid-background-color: rgba(var(--bg,var(--color_11)),var(--alpha-bg,1));width:214px;--brw: 0px;--brd: var(--color_15);--bg: var(--color_21);--rd: 20px 20px 20px 20px;--shd: none;--alpha-brd: 1;--alpha-bg: 1;--boxShadowToggleOn-shd: none;--shc-mutated-brightness: 93,109,118;position:relative;margin:0 0 62px;left:79px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start}.img-label-bg-div{font-family:Arial,Helvetica,sans-serif;font-size:10px;direction:ltr;pointer-events:auto;background:transparent;margin:0;outline:0;padding:0;vertical-align:baseline;background-color:var(--container-corvid-background-color,rgba(var(--bg,var(--color_11)),var(--alpha-bg,1)));border:var(--container-corvid-border-width,var(--brw,1px)) solid var(--container-corvid-border-color,rgba(var(--brd,var(--color_15)),var(--alpha-brd,1)));border-radius:var(--rd,5px);box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6));inset:0;position:absolute}.img-label{font-family:Arial,Helvetica,sans-serif;font-size:10px;direction:ltr;background:transparent;border:0;margin:0;outline:0;padding:0;vertical-align:baseline;pointer-events:none;position:relative;height:auto;width:214px}button{color:#fff;background-color:#4595c7;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;text-align:center;padding:10pt;border-color:#4595c7;border-radius:10pt;cursor:pointer}.btn-greyed-out{background-color:#a5bac7;border-color:transparent;cursor:not-allowed}
`;
function bc(i, e, t) {
  return i.addEventListener(e, t), () => i.removeEventListener(e, t);
}
function Wh([i, e], t, n) {
  return [t ? () => t(i()) : i, n ? (r) => e(n(r)) : e];
}
function $h(i) {
  try {
    return document.querySelector(i);
  } catch {
    return null;
  }
}
function Sc(i, e) {
  const t = $h(`#${i}`);
  t ? t.scrollIntoView() : e && window.scrollTo(0, 0);
}
function wc(i, e, t, n) {
  let r = !1;
  const s = (a) => typeof a == "string" ? { value: a } : a, o = Wh(Ut(s(i()), { equals: (a, c) => a.value === c.value }), void 0, (a) => (!r && e(a), a));
  return t && ot(t((a = i()) => {
    r = !0, o[1](s(a)), r = !1;
  })), {
    signal: o,
    utils: n
  };
}
function Hh(i) {
  if (i) {
    if (Array.isArray(i))
      return {
        signal: i
      };
  } else
    return {
      signal: Ut({ value: "" })
    };
  return i;
}
function Vh() {
  return wc(() => ({
    value: window.location.pathname + window.location.search + window.location.hash,
    state: history.state
  }), ({ value: i, replace: e, scroll: t, state: n }) => {
    e ? window.history.replaceState(n, "", i) : window.history.pushState(n, "", i), Sc(window.location.hash.slice(1), t);
  }, (i) => bc(window, "popstate", () => i()), {
    go: (i) => window.history.go(i)
  });
}
function Xh() {
  return wc(() => window.location.hash.slice(1), ({ value: i, replace: e, scroll: t, state: n }) => {
    e ? window.history.replaceState(n, "", "#" + i) : window.location.hash = i;
    const r = i.indexOf("#"), s = r >= 0 ? i.slice(r + 1) : "";
    Sc(s, t);
  }, (i) => bc(window, "hashchange", () => i()), {
    go: (i) => window.history.go(i),
    renderPath: (i) => `#${i}`,
    parsePath: (i) => {
      const e = i.replace(/^.*?#/, "");
      if (!e.startsWith("/")) {
        const [, t = "/"] = window.location.hash.split("#", 2);
        return `${t}#${e}`;
      }
      return e;
    }
  });
}
function Yh() {
  let i = /* @__PURE__ */ new Set();
  function e(r) {
    return i.add(r), () => i.delete(r);
  }
  let t = !1;
  function n(r, s) {
    if (t)
      return !(t = !1);
    const o = {
      to: r,
      options: s,
      defaultPrevented: !1,
      preventDefault: () => o.defaultPrevented = !0
    };
    for (const a of i)
      a.listener({
        ...o,
        from: a.location,
        retry: (c) => {
          c && (t = !0), a.navigate(r, s);
        }
      });
    return !o.defaultPrevented;
  }
  return {
    subscribe: e,
    confirm: n
  };
}
const qh = /^(?:[a-z0-9]+:)?\/\//i, jh = /^\/+|\/+$/g;
function mr(i, e = !1) {
  const t = i.replace(jh, "");
  return t ? e || /^[?#]/.test(t) ? t : "/" + t : "";
}
function ps(i, e, t) {
  if (qh.test(e))
    return;
  const n = mr(i), r = t && mr(t);
  let s = "";
  return !r || e.startsWith("/") ? s = n : r.toLowerCase().indexOf(n.toLowerCase()) !== 0 ? s = n + r : s = r, (s || "/") + mr(e, !s);
}
function Zh(i, e) {
  if (i == null)
    throw new Error(e);
  return i;
}
function Mc(i, e) {
  return mr(i).replace(/\/*(\*.*)?$/g, "") + mr(e);
}
function Jh(i) {
  const e = {};
  return i.searchParams.forEach((t, n) => {
    e[n] = t;
  }), e;
}
function Kh(i, e) {
  const [t, n] = i.split("/*", 2), r = t.split("/").filter(Boolean), s = r.length;
  return (o) => {
    const a = o.split("/").filter(Boolean), c = a.length - s;
    if (c < 0 || c > 0 && n === void 0 && !e)
      return null;
    const l = {
      path: s ? "" : "/",
      params: {}
    };
    for (let h = 0; h < s; h++) {
      const u = r[h], d = a[h];
      if (u[0] === ":")
        l.params[u.slice(1)] = d;
      else if (u.localeCompare(d, void 0, { sensitivity: "base" }) !== 0)
        return null;
      l.path += `/${d}`;
    }
    return n && (l.params[n] = c ? a.slice(-c).join("/") : ""), l;
  };
}
function Qh(i) {
  const [e, t] = i.pattern.split("/*", 2), n = e.split("/").filter(Boolean);
  return n.reduce((r, s) => r + (s.startsWith(":") ? 2 : 3), n.length - (t === void 0 ? 0 : 1));
}
function Cc(i) {
  const e = /* @__PURE__ */ new Map(), t = Mh();
  return new Proxy({}, {
    get(n, r) {
      return e.has(r) || Ch(t, () => e.set(r, te(() => i()[r]))), e.get(r)();
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    },
    ownKeys() {
      return Reflect.ownKeys(i());
    }
  });
}
function Pc(i) {
  let e = /(\/?\:[^\/]+)\?/.exec(i);
  if (!e)
    return [i];
  let t = i.slice(0, e.index), n = i.slice(e.index + e[0].length);
  const r = [t, t += e[1]];
  for (; e = /^(\/\:[^\/]+)\?/.exec(n); )
    r.push(t += e[1]), n = n.slice(e[0].length);
  return Pc(n).reduce((s, o) => [...s, ...r.map((a) => a + o)], []);
}
const ed = 100, Tc = gc(), zs = gc(), la = () => Zh(ia(Tc), "Make sure your app is wrapped in a <Router />");
let _r;
const ca = () => _r || ia(zs) || la().base, td = () => la().navigatorFactory(), Pa = () => ca().params;
function nd(i, e = "", t) {
  const { component: n, data: r, children: s } = i, o = !s || Array.isArray(s) && !s.length, a = {
    key: i,
    element: n ? () => be(n, {}) : () => {
      const { element: c } = i;
      return c === void 0 && t ? be(t, {}) : c;
    },
    preload: i.component ? n.preload : i.preload,
    data: r
  };
  return Ac(i.path).reduce((c, l) => {
    for (const h of Pc(l)) {
      const u = Mc(e, h), d = o ? u : u.split("/*", 1)[0];
      c.push({
        ...a,
        originalPath: h,
        pattern: d,
        matcher: Kh(d, !o)
      });
    }
    return c;
  }, []);
}
function id(i, e = 0) {
  return {
    routes: i,
    score: Qh(i[i.length - 1]) * 1e4 - e,
    matcher(t) {
      const n = [];
      for (let r = i.length - 1; r >= 0; r--) {
        const s = i[r], o = s.matcher(t);
        if (!o)
          return null;
        n.unshift({
          ...o,
          route: s
        });
      }
      return n;
    }
  };
}
function Ac(i) {
  return Array.isArray(i) ? i : [i];
}
function Ec(i, e = "", t, n = [], r = []) {
  const s = Ac(i);
  for (let o = 0, a = s.length; o < a; o++) {
    const c = s[o];
    if (c && typeof c == "object" && c.hasOwnProperty("path")) {
      const l = nd(c, e, t);
      for (const h of l) {
        n.push(h);
        const u = Array.isArray(c.children) && c.children.length === 0;
        if (c.children && !u)
          Ec(c.children, h.pattern, t, n, r);
        else {
          const d = id([...n], r.length);
          r.push(d);
        }
        n.pop();
      }
    }
  }
  return n.length ? r : r.sort((o, a) => a.score - o.score);
}
function rd(i, e) {
  for (let t = 0, n = i.length; t < n; t++) {
    const r = i[t].matcher(e);
    if (r)
      return r;
  }
  return [];
}
function sd(i, e) {
  const t = new URL("http://sar"), n = te((c) => {
    const l = i();
    try {
      return new URL(l, t);
    } catch {
      return console.error(`Invalid path ${l}`), c;
    }
  }, t, {
    equals: (c, l) => c.href === l.href
  }), r = te(() => n().pathname), s = te(() => n().search, !0), o = te(() => n().hash), a = te(() => "");
  return {
    get pathname() {
      return r();
    },
    get search() {
      return s();
    },
    get hash() {
      return o();
    },
    get state() {
      return e();
    },
    get key() {
      return a();
    },
    query: Cc(fc(s, () => Jh(n())))
  };
}
function od(i, e = "", t, n) {
  const { signal: [r, s], utils: o = {} } = Hh(i), a = o.parsePath || ((R) => R), c = o.renderPath || ((R) => R), l = o.beforeLeave || Yh(), h = ps("", e), u = void 0;
  if (h === void 0)
    throw new Error(`${h} is not a valid base path`);
  h && !r().value && s({ value: h, replace: !0, scroll: !1 });
  const [d, p] = Ut(!1), m = async (R) => {
    p(!0);
    try {
      await Ph(R);
    } finally {
      p(!1);
    }
  }, [g, f] = Ut(r().value), [v, w] = Ut(r().state), x = sd(g, v), _ = [], y = {
    pattern: h,
    params: {},
    path: () => h,
    outlet: () => null,
    resolvePath(R) {
      return ps(h, R);
    }
  };
  if (t)
    try {
      _r = y, y.data = t({
        data: void 0,
        params: {},
        location: x,
        navigate: z(y)
      });
    } finally {
      _r = void 0;
    }
  function P(R, W, V) {
    sn(() => {
      if (typeof W == "number") {
        W && (o.go ? l.confirm(W, V) && o.go(W) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const { replace: F, resolve: k, scroll: D, state: G } = {
        replace: !1,
        resolve: !0,
        scroll: !0,
        ...V
      }, E = k ? R.resolvePath(W) : ps("", W);
      if (E === void 0)
        throw new Error(`Path '${W}' is not a routable path`);
      if (_.length >= ed)
        throw new Error("Too many redirects");
      const M = g();
      if ((E !== M || G !== v()) && !Bh) {
        if (l.confirm(E, V)) {
          const X = _.push({ value: M, replace: F, scroll: D, state: v() });
          m(() => {
            f(E), w(G);
          }).then(() => {
            _.length === X && b({
              value: E,
              state: G
            });
          });
        }
      }
    });
  }
  function z(R) {
    return R = R || ia(zs) || y, (W, V) => P(R, W, V);
  }
  function b(R) {
    const W = _[0];
    W && ((R.value !== W.value || R.state !== W.state) && s({
      ...R,
      replace: W.replace,
      scroll: W.scroll
    }), _.length = 0);
  }
  Te(() => {
    const { value: R, state: W } = r();
    sn(() => {
      R !== g() && m(() => {
        f(R), w(W);
      });
    });
  });
  {
    let R = function(W) {
      if (W.defaultPrevented || W.button !== 0 || W.metaKey || W.altKey || W.ctrlKey || W.shiftKey)
        return;
      const V = W.composedPath().find((M) => M instanceof Node && M.nodeName.toUpperCase() === "A");
      if (!V || !V.hasAttribute("link"))
        return;
      const F = V.href;
      if (V.target || !F && !V.hasAttribute("state"))
        return;
      const k = (V.getAttribute("rel") || "").split(/\s+/);
      if (V.hasAttribute("download") || k && k.includes("external"))
        return;
      const D = new URL(F);
      if (D.origin !== window.location.origin || h && D.pathname && !D.pathname.toLowerCase().startsWith(h.toLowerCase()))
        return;
      const G = a(D.pathname + D.search + D.hash), E = V.getAttribute("state");
      W.preventDefault(), P(y, G, {
        resolve: !1,
        replace: V.hasAttribute("replace"),
        scroll: !V.hasAttribute("noscroll"),
        state: E && JSON.parse(E)
      });
    };
    var L = R;
    Yt(["click"]), document.addEventListener("click", R), ot(() => document.removeEventListener("click", R));
  }
  return {
    base: y,
    out: u,
    location: x,
    isRouting: d,
    renderPath: c,
    parsePath: a,
    navigatorFactory: z,
    beforeLeave: l
  };
}
function ad(i, e, t, n) {
  const { base: r, location: s, navigatorFactory: o } = i, { pattern: a, element: c, preload: l, data: h } = n().route, u = te(() => n().path), d = Cc(() => n().params);
  l && l();
  const p = {
    parent: e,
    pattern: a,
    get child() {
      return t();
    },
    path: u,
    params: d,
    data: e.data,
    outlet: c,
    resolvePath(m) {
      return ps(r.path(), m, u());
    }
  };
  if (h)
    try {
      _r = p, p.data = h({ data: e.data, params: d, location: s, navigate: o(p) });
    } finally {
      _r = void 0;
    }
  return p;
}
const ld = (i) => {
  const {
    source: e,
    url: t,
    base: n,
    data: r,
    out: s
  } = i, o = e || Vh(), a = od(o, n, r);
  return be(Tc.Provider, {
    value: a,
    get children() {
      return i.children;
    }
  });
}, cd = (i) => {
  const e = la(), t = ca(), n = Es(() => i.children), r = te(() => Ec(n(), Mc(t.pattern, i.base || ""), hd)), s = te(() => rd(r(), e.location.pathname));
  e.out && e.out.matches.push(s().map(({
    route: l,
    path: h,
    params: u
  }) => ({
    originalPath: l.originalPath,
    pattern: l.pattern,
    path: h,
    params: u
  })));
  const o = [];
  let a;
  const c = te(fc(s, (l, h, u) => {
    let d = h && l.length === h.length;
    const p = [];
    for (let m = 0, g = l.length; m < g; m++) {
      const f = h && h[m], v = l[m];
      u && f && v.route.key === f.route.key ? p[m] = u[m] : (d = !1, o[m] && o[m](), di((w) => {
        o[m] = w, p[m] = ad(e, p[m - 1] || t, () => c()[m + 1], () => s()[m]);
      }));
    }
    return o.splice(l.length).forEach((m) => m()), u && d ? u : (a = p[0], p);
  }));
  return be(en, {
    get when() {
      return c() && a;
    },
    children: (l) => be(zs.Provider, {
      value: l,
      get children() {
        return l.outlet();
      }
    })
  });
}, Vs = (i) => {
  const e = Es(() => i.children);
  return Nh(i, {
    get children() {
      return e();
    }
  });
}, hd = () => {
  const i = ca();
  return be(en, {
    get when() {
      return i.child;
    },
    children: (e) => be(zs.Provider, {
      value: e,
      get children() {
        return e.outlet();
      }
    })
  });
}, $o = Symbol("store-raw"), vr = Symbol("store-node"), dd = Symbol("store-name");
function Lc(i, e) {
  let t = i[Pn];
  if (!t && (Object.defineProperty(i, Pn, {
    value: t = new Proxy(i, pd)
  }), !Array.isArray(i))) {
    const n = Object.keys(i), r = Object.getOwnPropertyDescriptors(i);
    for (let s = 0, o = n.length; s < o; s++) {
      const a = n[s];
      r[a].get && Object.defineProperty(i, a, {
        enumerable: r[a].enumerable,
        get: r[a].get.bind(t)
      });
    }
  }
  return t;
}
function Xn(i) {
  let e;
  return i != null && typeof i == "object" && (i[Pn] || !(e = Object.getPrototypeOf(i)) || e === Object.prototype || Array.isArray(i));
}
function Yi(i, e = /* @__PURE__ */ new Set()) {
  let t, n, r, s;
  if (t = i != null && i[$o])
    return t;
  if (!Xn(i) || e.has(i))
    return i;
  if (Array.isArray(i)) {
    Object.isFrozen(i) ? i = i.slice(0) : e.add(i);
    for (let o = 0, a = i.length; o < a; o++)
      r = i[o], (n = Yi(r, e)) !== r && (i[o] = n);
  } else {
    Object.isFrozen(i) ? i = Object.assign({}, i) : e.add(i);
    const o = Object.keys(i), a = Object.getOwnPropertyDescriptors(i);
    for (let c = 0, l = o.length; c < l; c++)
      s = o[c], !a[s].get && (r = i[s], (n = Yi(r, e)) !== r && (i[s] = n));
  }
  return i;
}
function ha(i) {
  let e = i[vr];
  return e || Object.defineProperty(i, vr, {
    value: e = {}
  }), e;
}
function Ho(i, e, t) {
  return i[e] || (i[e] = Rc(t));
}
function ud(i, e) {
  const t = Reflect.getOwnPropertyDescriptor(i, e);
  return !t || t.get || !t.configurable || e === Pn || e === vr || e === dd || (delete t.value, delete t.writable, t.get = () => i[Pn][e]), t;
}
function zc(i) {
  if (pc()) {
    const e = ha(i);
    (e._ || (e._ = Rc()))();
  }
}
function fd(i) {
  return zc(i), Reflect.ownKeys(i);
}
function Rc(i) {
  const [e, t] = Ut(i, {
    equals: !1,
    internal: !0
  });
  return e.$ = t, e;
}
const pd = {
  get(i, e, t) {
    if (e === $o)
      return i;
    if (e === Pn)
      return t;
    if (e === ys)
      return zc(i), t;
    const n = ha(i), r = n.hasOwnProperty(e);
    let s = r ? n[e]() : i[e];
    if (e === vr || e === "__proto__")
      return s;
    if (!r) {
      const o = Object.getOwnPropertyDescriptor(i, e);
      pc() && (typeof s != "function" || i.hasOwnProperty(e)) && !(o && o.get) && (s = Ho(n, e, s)());
    }
    return Xn(s) ? Lc(s) : s;
  },
  has(i, e) {
    return e === $o || e === Pn || e === ys || e === vr || e === "__proto__" ? !0 : (this.get(i, e, i), e in i);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: fd,
  getOwnPropertyDescriptor: ud
};
function cn(i, e, t, n = !1) {
  if (!n && i[e] === t)
    return;
  const r = i[e], s = i.length;
  t === void 0 ? delete i[e] : i[e] = t;
  let o = ha(i), a;
  (a = Ho(o, e, r)) && a.$(() => t), Array.isArray(i) && i.length !== s && (a = Ho(o, "length", s)) && a.$(i.length), (a = o._) && a.$();
}
function Ic(i, e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1) {
    const r = t[n];
    cn(i, r, e[r]);
  }
}
function gd(i, e) {
  if (typeof e == "function" && (e = e(i)), e = Yi(e), Array.isArray(e)) {
    if (i === e)
      return;
    let t = 0, n = e.length;
    for (; t < n; t++) {
      const r = e[t];
      i[t] !== r && cn(i, t, r);
    }
    cn(i, "length", n);
  } else
    Ic(i, e);
}
function fr(i, e, t = []) {
  let n, r = i;
  if (e.length > 1) {
    n = e.shift();
    const o = typeof n, a = Array.isArray(i);
    if (Array.isArray(n)) {
      for (let c = 0; c < n.length; c++)
        fr(i, [n[c]].concat(e), t);
      return;
    } else if (a && o === "function") {
      for (let c = 0; c < i.length; c++)
        n(i[c], c) && fr(i, [c].concat(e), t);
      return;
    } else if (a && o === "object") {
      const {
        from: c = 0,
        to: l = i.length - 1,
        by: h = 1
      } = n;
      for (let u = c; u <= l; u += h)
        fr(i, [u].concat(e), t);
      return;
    } else if (e.length > 1) {
      fr(i[n], e, [n].concat(t));
      return;
    }
    r = i[n], t = [n].concat(t);
  }
  let s = e[0];
  typeof s == "function" && (s = s(r, t), s === r) || n === void 0 && s == null || (s = Yi(s), n === void 0 || Xn(r) && Xn(s) && !Array.isArray(s) ? Ic(r, s) : cn(i, n, s));
}
function Zn(...[i, e]) {
  const t = Yi(i || {}), n = Array.isArray(t), r = Lc(t);
  function s(...o) {
    dn(() => {
      n && o.length === 1 ? gd(t, o[0]) : fr(t, o);
    });
  }
  return [r, s];
}
const Vo = Symbol("store-root");
function Bi(i, e, t, n, r) {
  const s = e[t];
  if (i === s)
    return;
  if (!Xn(i) || !Xn(s) || r && i[r] !== s[r]) {
    if (i !== s) {
      if (t === Vo)
        return i;
      cn(e, t, i);
    }
    return;
  }
  if (Array.isArray(i)) {
    if (i.length && s.length && (!n || r && i[0] && i[0][r] != null)) {
      let c, l, h, u, d, p, m, g;
      for (h = 0, u = Math.min(s.length, i.length); h < u && (s[h] === i[h] || r && s[h] && i[h] && s[h][r] === i[h][r]); h++)
        Bi(i[h], s, h, n, r);
      const f = new Array(i.length), v = /* @__PURE__ */ new Map();
      for (u = s.length - 1, d = i.length - 1; u >= h && d >= h && (s[u] === i[d] || r && s[h] && i[h] && s[u][r] === i[d][r]); u--, d--)
        f[d] = s[u];
      if (h > d || h > u) {
        for (l = h; l <= d; l++)
          cn(s, l, i[l]);
        for (; l < i.length; l++)
          cn(s, l, f[l]), Bi(i[l], s, l, n, r);
        s.length > i.length && cn(s, "length", i.length);
        return;
      }
      for (m = new Array(d + 1), l = d; l >= h; l--)
        p = i[l], g = r && p ? p[r] : p, c = v.get(g), m[l] = c === void 0 ? -1 : c, v.set(g, l);
      for (c = h; c <= u; c++)
        p = s[c], g = r && p ? p[r] : p, l = v.get(g), l !== void 0 && l !== -1 && (f[l] = s[c], l = m[l], v.set(g, l));
      for (l = h; l < i.length; l++)
        l in f ? (cn(s, l, f[l]), Bi(i[l], s, l, n, r)) : cn(s, l, i[l]);
    } else
      for (let c = 0, l = i.length; c < l; c++)
        Bi(i[c], s, c, n, r);
    s.length > i.length && cn(s, "length", i.length);
    return;
  }
  const o = Object.keys(i);
  for (let c = 0, l = o.length; c < l; c++)
    Bi(i[o[c]], s, o[c], n, r);
  const a = Object.keys(s);
  for (let c = 0, l = a.length; c < l; c++)
    i[a[c]] === void 0 && cn(s, a[c], void 0);
}
function Ta(i, e = {}) {
  const {
    merge: t,
    key: n = "id"
  } = e, r = Yi(i);
  return (s) => {
    if (!Xn(s) || !Xn(r))
      return r;
    const o = Bi(r, {
      [Vo]: s
    }, Vo, t, n);
    return o === void 0 ? s : o;
  };
}
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const da = "148", wi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Mi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, md = 0, Aa = 1, xd = 2, Dc = 1, yd = 2, pr = 3, gi = 0, un = 1, ua = 2, Dr = 3, Vn = 0, Hi = 1, Ea = 2, La = 3, za = 4, _d = 5, Gi = 100, vd = 101, bd = 102, Ra = 103, Ia = 104, Sd = 200, wd = 201, Md = 202, Cd = 203, Nc = 204, Fc = 205, Pd = 206, Td = 207, Ad = 208, Ed = 209, Ld = 210, zd = 0, Rd = 1, Id = 2, Xo = 3, Dd = 4, Nd = 5, Fd = 6, kd = 7, kc = 0, Od = 1, Ud = 2, Bn = 0, Bd = 1, Gd = 2, Wd = 3, $d = 4, Hd = 5, Oc = 300, qi = 301, ji = 302, Yo = 303, qo = 304, Rs = 306, Ps = 1e3, xn = 1001, jo = 1002, kt = 1003, Da = 1004, Xs = 1005, hn = 1006, Vd = 1007, br = 1008, mi = 1009, Xd = 1010, Yd = 1011, Uc = 1012, qd = 1013, ai = 1014, li = 1015, Sr = 1016, jd = 1017, Zd = 1018, Vi = 1020, Jd = 1021, Kd = 1022, yn = 1023, Qd = 1024, eu = 1025, ui = 1026, Zi = 1027, tu = 1028, nu = 1029, iu = 1030, ru = 1031, su = 1033, Ys = 33776, qs = 33777, js = 33778, Zs = 33779, Na = 35840, Fa = 35841, ka = 35842, Oa = 35843, ou = 36196, Ua = 37492, Ba = 37496, Ga = 37808, Wa = 37809, $a = 37810, Ha = 37811, Va = 37812, Xa = 37813, Ya = 37814, qa = 37815, ja = 37816, Za = 37817, Ja = 37818, Ka = 37819, Qa = 37820, el = 37821, tl = 36492, xi = 3e3, rt = 3001, au = 3200, lu = 3201, Bc = 0, cu = 1, bn = "srgb", wr = "srgb-linear", Js = 7680, hu = 519, nl = 35044, il = "300 es", Zo = 1035;
class bi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], gs = Math.PI / 180, rl = 180 / Math.PI;
function Qi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Rt[i & 255] + Rt[i >> 8 & 255] + Rt[i >> 16 & 255] + Rt[i >> 24 & 255] + "-" + Rt[e & 255] + Rt[e >> 8 & 255] + "-" + Rt[e >> 16 & 15 | 64] + Rt[e >> 24 & 255] + "-" + Rt[t & 63 | 128] + Rt[t >> 8 & 255] + "-" + Rt[t >> 16 & 255] + Rt[t >> 24 & 255] + Rt[n & 255] + Rt[n >> 8 & 255] + Rt[n >> 16 & 255] + Rt[n >> 24 & 255]).toLowerCase();
}
function Et(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function du(i, e) {
  return (i % e + e) % e;
}
function Ks(i, e, t) {
  return (1 - t) * i + t * e;
}
function sl(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Jo(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Nr(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Zt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ye {
  constructor(e = 0, t = 0) {
    ye.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class _t {
  constructor() {
    _t.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, r, s, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], p = n[5], m = n[8], g = r[0], f = r[3], v = r[6], w = r[1], x = r[4], _ = r[7], y = r[2], P = r[5], z = r[8];
    return s[0] = o * g + a * w + c * y, s[3] = o * f + a * x + c * P, s[6] = o * v + a * _ + c * z, s[1] = l * g + h * w + u * y, s[4] = l * f + h * x + u * P, s[7] = l * v + h * _ + u * z, s[2] = d * g + p * w + m * y, s[5] = d * f + p * x + m * P, s[8] = d * v + p * _ + m * z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * s * h + n * a * c + r * s * l - r * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * s, p = l * s - o * c, m = t * u + n * d + r * p;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / m;
    return e[0] = u * g, e[1] = (r * l - h * n) * g, e[2] = (a * n - r * o) * g, e[3] = d * g, e[4] = (h * t - r * c) * g, e[5] = (r * s - a * t) * g, e[6] = p * g, e[7] = (n * c - l * t) * g, e[8] = (o * t - n * s) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -r * l,
      r * c,
      -r * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Qs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Qs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Qs.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Qs = /* @__PURE__ */ new _t();
function Gc(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function Mr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function fi(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ms(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const eo = {
  [bn]: { [wr]: fi },
  [wr]: { [bn]: ms }
}, Nt = {
  legacyMode: !0,
  get workingColorSpace() {
    return wr;
  },
  set workingColorSpace(i) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(i, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return i;
    if (eo[e] && eo[e][t] !== void 0) {
      const n = eo[e][t];
      return i.r = n(i.r), i.g = n(i.g), i.b = n(i.b), i;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this.workingColorSpace);
  }
}, Wc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, bt = { r: 0, g: 0, b: 0 }, pn = { h: 0, s: 0, l: 0 }, Fr = { h: 0, s: 0, l: 0 };
function to(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
function kr(i, e) {
  return e.r = i.r, e.g = i.g, e.b = i.b, e;
}
class tt {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = bn) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Nt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Nt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Nt.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Nt.workingColorSpace) {
    if (e = du(e, 1), t = Et(t, 0, 1), n = Et(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = to(o, s, e + 1 / 3), this.g = to(o, s, e), this.b = to(o, s, e - 1 / 3);
    }
    return Nt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = bn) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, Nt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, Nt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const c = parseFloat(s[1]) / 360, l = parseFloat(s[2]) / 100, h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, h, t);
          }
          break;
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, Nt.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, Nt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = bn) {
    const n = Wc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = fi(e.r), this.g = fi(e.g), this.b = fi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ms(e.r), this.g = ms(e.g), this.b = ms(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = bn) {
    return Nt.fromWorkingColorSpace(kr(this, bt), e), Et(bt.r * 255, 0, 255) << 16 ^ Et(bt.g * 255, 0, 255) << 8 ^ Et(bt.b * 255, 0, 255) << 0;
  }
  getHexString(e = bn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Nt.workingColorSpace) {
    Nt.fromWorkingColorSpace(kr(this, bt), t);
    const n = bt.r, r = bt.g, s = bt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - r) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Nt.workingColorSpace) {
    return Nt.fromWorkingColorSpace(kr(this, bt), t), e.r = bt.r, e.g = bt.g, e.b = bt.b, e;
  }
  getStyle(e = bn) {
    return Nt.fromWorkingColorSpace(kr(this, bt), e), e !== bn ? `color(${e} ${bt.r} ${bt.g} ${bt.b})` : `rgb(${bt.r * 255 | 0},${bt.g * 255 | 0},${bt.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(pn), pn.h += e, pn.s += t, pn.l += n, this.setHSL(pn.h, pn.s, pn.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(pn), e.getHSL(Fr);
    const n = Ks(pn.h, Fr.h, t), r = Ks(pn.s, Fr.s, t), s = Ks(pn.l, Fr.l, t);
    return this.setHSL(n, r, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
tt.NAMES = Wc;
let Ci;
class $c {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ci === void 0 && (Ci = Mr("canvas")), Ci.width = e.width, Ci.height = e.height;
      const n = Ci.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ci;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Mr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = fi(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(fi(t[n] / 255) * 255) : t[n] = fi(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Hc {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Qi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(no(r[o].image)) : s.push(no(r[o]));
      } else
        s = no(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function no(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? $c.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let uu = 0;
class Xt extends bi {
  constructor(e = Xt.DEFAULT_IMAGE, t = Xt.DEFAULT_MAPPING, n = xn, r = xn, s = hn, o = br, a = yn, c = mi, l = Xt.DEFAULT_ANISOTROPY, h = xi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: uu++ }), this.uuid = Qi(), this.name = "", this.source = new Hc(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new ye(0, 0), this.repeat = new ye(1, 1), this.center = new ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new _t(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Oc)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ps:
          e.x = e.x - Math.floor(e.x);
          break;
        case xn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case jo:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ps:
          e.y = e.y - Math.floor(e.y);
          break;
        case xn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case jo:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
Xt.DEFAULT_IMAGE = null;
Xt.DEFAULT_MAPPING = Oc;
Xt.DEFAULT_ANISOTROPY = 1;
class lt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    lt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], p = c[5], m = c[9], g = c[2], f = c[6], v = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(m - f) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(m + f) < 0.1 && Math.abs(l + p + v - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (l + 1) / 2, _ = (p + 1) / 2, y = (v + 1) / 2, P = (h + d) / 4, z = (u + g) / 4, b = (m + f) / 4;
      return x > _ && x > y ? x < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), r = P / n, s = z / n) : _ > y ? _ < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(_), n = P / r, s = b / r) : y < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(y), n = z / s, r = b / s), this.set(n, r, s, t), this;
    }
    let w = Math.sqrt((f - m) * (f - m) + (u - g) * (u - g) + (d - h) * (d - h));
    return Math.abs(w) < 1e-3 && (w = 1), this.x = (f - m) / w, this.y = (u - g) / w, this.z = (d - h) / w, this.w = Math.acos((l + p + v - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class yi extends bi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new lt(0, 0, e, t), this.scissorTest = !1, this.viewport = new lt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    this.texture = new Xt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : hn, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Hc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vc extends Xt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = kt, this.minFilter = kt, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class fu extends Xt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = kt, this.minFilter = kt, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
let Yn = class {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let c = n[r + 0], l = n[r + 1], h = n[r + 2], u = n[r + 3];
    const d = s[o + 0], p = s[o + 1], m = s[o + 2], g = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = m, e[t + 3] = g;
      return;
    }
    if (u !== g || c !== d || l !== p || h !== m) {
      let f = 1 - a;
      const v = c * d + l * p + h * m + u * g, w = v >= 0 ? 1 : -1, x = 1 - v * v;
      if (x > Number.EPSILON) {
        const y = Math.sqrt(x), P = Math.atan2(y, v * w);
        f = Math.sin(f * P) / y, a = Math.sin(a * P) / y;
      }
      const _ = a * w;
      if (c = c * f + d * _, l = l * f + p * _, h = h * f + m * _, u = u * f + g * _, f === 1 - a) {
        const y = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= y, l *= y, h *= y, u *= y;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], c = n[r + 1], l = n[r + 2], h = n[r + 3], u = s[o], d = s[o + 1], p = s[o + 2], m = s[o + 3];
    return e[t] = a * m + h * u + c * p - l * d, e[t + 1] = c * m + h * d + l * u - a * p, e[t + 2] = l * m + h * p + a * d - c * u, e[t + 3] = h * m - a * u - c * d - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(r / 2), u = a(s / 2), d = c(n / 2), p = c(r / 2), m = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * p * m, this._y = l * p * u - d * h * m, this._z = l * h * m + d * p * u, this._w = l * h * u - d * p * m;
        break;
      case "YXZ":
        this._x = d * h * u + l * p * m, this._y = l * p * u - d * h * m, this._z = l * h * m - d * p * u, this._w = l * h * u + d * p * m;
        break;
      case "ZXY":
        this._x = d * h * u - l * p * m, this._y = l * p * u + d * h * m, this._z = l * h * m + d * p * u, this._w = l * h * u - d * p * m;
        break;
      case "ZYX":
        this._x = d * h * u - l * p * m, this._y = l * p * u + d * h * m, this._z = l * h * m - d * p * u, this._w = l * h * u + d * p * m;
        break;
      case "YZX":
        this._x = d * h * u + l * p * m, this._y = l * p * u + d * h * m, this._z = l * h * m - d * p * u, this._w = l * h * u - d * p * m;
        break;
      case "XZY":
        this._x = d * h * u - l * p * m, this._y = l * p * u - d * h * m, this._z = l * h * m + d * p * u, this._w = l * h * u + d * p * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (o - r) * p;
    } else if (n > a && n > u) {
      const p = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (r + o) / p, this._z = (s + l) / p;
    } else if (a > u) {
      const p = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / p, this._x = (r + o) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - r) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Et(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + r * l - s * c, this._y = r * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - r * a, this._w = o * h - n * a - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = r * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
};
class J {
  constructor(e = 0, t = 0, n = 0) {
    J.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ol.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ol.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * r - a * n, h = c * n + a * t - s * r, u = c * r + s * n - o * t, d = -s * t - o * n - a * r;
    return this.x = l * c + d * -s + h * -a - u * -o, this.y = h * c + d * -o + u * -s - l * -a, this.z = u * c + d * -a + l * -o - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return io.copy(this).projectOnVector(e), this.sub(io);
  }
  reflect(e) {
    return this.sub(io.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const io = /* @__PURE__ */ new J(), ol = /* @__PURE__ */ new Yn();
class Lr {
  constructor(e = new J(1 / 0, 1 / 0, 1 / 0), t = new J(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, r = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], u = e[c + 1], d = e[c + 2];
      h < t && (t = h), u < n && (n = u), d < r && (r = d), h > s && (s = h), u > o && (o = u), d > a && (a = d);
    }
    return this.min.set(t, n, r), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, r = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), u = e.getY(c), d = e.getZ(c);
      h < t && (t = h), u < n && (n = u), d < r && (r = d), h > s && (s = h), u > o && (o = u), d > a && (a = d);
    }
    return this.min.set(t, n, r), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ei.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, a = s.count; o < a; o++)
          ei.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(ei);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ro.copy(n.boundingBox), ro.applyMatrix4(e.matrixWorld), this.union(ro);
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, ei), ei.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(rr), Or.subVectors(this.max, rr), Pi.subVectors(e.a, rr), Ti.subVectors(e.b, rr), Ai.subVectors(e.c, rr), Gn.subVectors(Ti, Pi), Wn.subVectors(Ai, Ti), ti.subVectors(Pi, Ai);
    let t = [
      0,
      -Gn.z,
      Gn.y,
      0,
      -Wn.z,
      Wn.y,
      0,
      -ti.z,
      ti.y,
      Gn.z,
      0,
      -Gn.x,
      Wn.z,
      0,
      -Wn.x,
      ti.z,
      0,
      -ti.x,
      -Gn.y,
      Gn.x,
      0,
      -Wn.y,
      Wn.x,
      0,
      -ti.y,
      ti.x,
      0
    ];
    return !so(t, Pi, Ti, Ai, Or) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !so(t, Pi, Ti, Ai, Or)) ? !1 : (Ur.crossVectors(Gn, Wn), t = [Ur.x, Ur.y, Ur.z], so(t, Pi, Ti, Ai, Or));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return ei.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(ei).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Rn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Rn = [
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J(),
  /* @__PURE__ */ new J()
], ei = /* @__PURE__ */ new J(), ro = /* @__PURE__ */ new Lr(), Pi = /* @__PURE__ */ new J(), Ti = /* @__PURE__ */ new J(), Ai = /* @__PURE__ */ new J(), Gn = /* @__PURE__ */ new J(), Wn = /* @__PURE__ */ new J(), ti = /* @__PURE__ */ new J(), rr = /* @__PURE__ */ new J(), Or = /* @__PURE__ */ new J(), Ur = /* @__PURE__ */ new J(), ni = /* @__PURE__ */ new J();
function so(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    ni.fromArray(i, s);
    const a = r.x * Math.abs(ni.x) + r.y * Math.abs(ni.y) + r.z * Math.abs(ni.z), c = e.dot(ni), l = t.dot(ni), h = n.dot(ni);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const pu = /* @__PURE__ */ new Lr(), sr = /* @__PURE__ */ new J(), oo = /* @__PURE__ */ new J();
class Is {
  constructor(e = new J(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : pu.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    sr.subVectors(e, this.center);
    const t = sr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(sr, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (oo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(sr.copy(e.center).add(oo)), this.expandByPoint(sr.copy(e.center).sub(oo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = /* @__PURE__ */ new J(), ao = /* @__PURE__ */ new J(), Br = /* @__PURE__ */ new J(), $n = /* @__PURE__ */ new J(), lo = /* @__PURE__ */ new J(), Gr = /* @__PURE__ */ new J(), co = /* @__PURE__ */ new J();
class Xc {
  constructor(e = new J(), t = new J(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, In)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = In.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (In.copy(this.direction).multiplyScalar(t).add(this.origin), In.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    ao.copy(e).add(t).multiplyScalar(0.5), Br.copy(t).sub(e).normalize(), $n.copy(this.origin).sub(ao);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Br), a = $n.dot(this.direction), c = -$n.dot(Br), l = $n.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, p, m;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, m = s * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const g = 1 / h;
            u *= g, d *= g, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * c) + l;
      else
        d <= -m ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(Br).multiplyScalar(d).add(ao), p;
  }
  intersectSphere(e, t) {
    In.subVectors(e.center, this.origin);
    const n = In.dot(this.direction), r = In.dot(In) - n * n, s = e.radius * e.radius;
    if (r > s)
      return null;
    const o = Math.sqrt(s - r), a = n - o, c = n + o;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, r = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, r = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, In) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    lo.subVectors(t, e), Gr.subVectors(n, e), co.crossVectors(lo, Gr);
    let o = this.direction.dot(co), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    $n.subVectors(this.origin, e);
    const c = a * this.direction.dot(Gr.crossVectors($n, Gr));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(lo.cross($n));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * $n.dot(co);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ut {
  constructor() {
    ut.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, r, s, o, a, c, l, h, u, d, p, m, g, f) {
    const v = this.elements;
    return v[0] = e, v[4] = t, v[8] = n, v[12] = r, v[1] = s, v[5] = o, v[9] = a, v[13] = c, v[2] = l, v[6] = h, v[10] = u, v[14] = d, v[3] = p, v[7] = m, v[11] = g, v[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ut().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Ei.setFromMatrixColumn(e, 0).length(), s = 1 / Ei.setFromMatrixColumn(e, 1).length(), o = 1 / Ei.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, p = o * u, m = a * h, g = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = p + m * l, t[5] = d - g * l, t[9] = -a * c, t[2] = g - d * l, t[6] = m + p * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, p = c * u, m = l * h, g = l * u;
      t[0] = d + g * a, t[4] = m * a - p, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - m, t[6] = g + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, p = c * u, m = l * h, g = l * u;
      t[0] = d - g * a, t[4] = -o * u, t[8] = m + p * a, t[1] = p + m * a, t[5] = o * h, t[9] = g - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, p = o * u, m = a * h, g = a * u;
      t[0] = c * h, t[4] = m * l - p, t[8] = d * l + g, t[1] = c * u, t[5] = g * l + d, t[9] = p * l - m, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, p = o * l, m = a * c, g = a * l;
      t[0] = c * h, t[4] = g - d * u, t[8] = m * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = p * u + m, t[10] = d - g * u;
    } else if (e.order === "XZY") {
      const d = o * c, p = o * l, m = a * c, g = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + g, t[5] = o * h, t[9] = p * u - m, t[2] = m * u - p, t[6] = a * h, t[10] = g * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(gu, e, mu);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Jt.subVectors(e, t), Jt.lengthSq() === 0 && (Jt.z = 1), Jt.normalize(), Hn.crossVectors(n, Jt), Hn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Jt.x += 1e-4 : Jt.z += 1e-4, Jt.normalize(), Hn.crossVectors(n, Jt)), Hn.normalize(), Wr.crossVectors(Jt, Hn), r[0] = Hn.x, r[4] = Wr.x, r[8] = Jt.x, r[1] = Hn.y, r[5] = Wr.y, r[9] = Jt.y, r[2] = Hn.z, r[6] = Wr.z, r[10] = Jt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], p = n[13], m = n[2], g = n[6], f = n[10], v = n[14], w = n[3], x = n[7], _ = n[11], y = n[15], P = r[0], z = r[4], b = r[8], L = r[12], R = r[1], W = r[5], V = r[9], F = r[13], k = r[2], D = r[6], G = r[10], E = r[14], M = r[3], X = r[7], ee = r[11], ne = r[15];
    return s[0] = o * P + a * R + c * k + l * M, s[4] = o * z + a * W + c * D + l * X, s[8] = o * b + a * V + c * G + l * ee, s[12] = o * L + a * F + c * E + l * ne, s[1] = h * P + u * R + d * k + p * M, s[5] = h * z + u * W + d * D + p * X, s[9] = h * b + u * V + d * G + p * ee, s[13] = h * L + u * F + d * E + p * ne, s[2] = m * P + g * R + f * k + v * M, s[6] = m * z + g * W + f * D + v * X, s[10] = m * b + g * V + f * G + v * ee, s[14] = m * L + g * F + f * E + v * ne, s[3] = w * P + x * R + _ * k + y * M, s[7] = w * z + x * W + _ * D + y * X, s[11] = w * b + x * V + _ * G + y * ee, s[15] = w * L + x * F + _ * E + y * ne, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], p = e[14], m = e[3], g = e[7], f = e[11], v = e[15];
    return m * (+s * c * u - r * l * u - s * a * d + n * l * d + r * a * p - n * c * p) + g * (+t * c * p - t * l * d + s * o * d - r * o * p + r * l * h - s * c * h) + f * (+t * l * u - t * a * p - s * o * u + n * o * p + s * a * h - n * l * h) + v * (-r * a * h - t * c * u + t * a * d + r * o * u - n * o * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], p = e[11], m = e[12], g = e[13], f = e[14], v = e[15], w = u * f * l - g * d * l + g * c * p - a * f * p - u * c * v + a * d * v, x = m * d * l - h * f * l - m * c * p + o * f * p + h * c * v - o * d * v, _ = h * g * l - m * u * l + m * a * p - o * g * p - h * a * v + o * u * v, y = m * u * c - h * g * c - m * a * d + o * g * d + h * a * f - o * u * f, P = t * w + n * x + r * _ + s * y;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const z = 1 / P;
    return e[0] = w * z, e[1] = (g * d * s - u * f * s - g * r * p + n * f * p + u * r * v - n * d * v) * z, e[2] = (a * f * s - g * c * s + g * r * l - n * f * l - a * r * v + n * c * v) * z, e[3] = (u * c * s - a * d * s - u * r * l + n * d * l + a * r * p - n * c * p) * z, e[4] = x * z, e[5] = (h * f * s - m * d * s + m * r * p - t * f * p - h * r * v + t * d * v) * z, e[6] = (m * c * s - o * f * s - m * r * l + t * f * l + o * r * v - t * c * v) * z, e[7] = (o * d * s - h * c * s + h * r * l - t * d * l - o * r * p + t * c * p) * z, e[8] = _ * z, e[9] = (m * u * s - h * g * s - m * n * p + t * g * p + h * n * v - t * u * v) * z, e[10] = (o * g * s - m * a * s + m * n * l - t * g * l - o * n * v + t * a * v) * z, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * p - t * a * p) * z, e[12] = y * z, e[13] = (h * g * r - m * u * r + m * n * d - t * g * d - h * n * f + t * u * f) * z, e[14] = (m * a * r - o * g * r - m * n * c + t * g * c + o * n * f - t * a * f) * z, e[15] = (o * u * r - h * a * r + h * n * c - t * u * c - o * n * d + t * a * d) * z, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - r * c,
      l * c + r * a,
      0,
      l * a + r * c,
      h * a + n,
      h * c - r * o,
      0,
      l * c - r * a,
      h * c + r * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, d = s * l, p = s * h, m = s * u, g = o * h, f = o * u, v = a * u, w = c * l, x = c * h, _ = c * u, y = n.x, P = n.y, z = n.z;
    return r[0] = (1 - (g + v)) * y, r[1] = (p + _) * y, r[2] = (m - x) * y, r[3] = 0, r[4] = (p - _) * P, r[5] = (1 - (d + v)) * P, r[6] = (f + w) * P, r[7] = 0, r[8] = (m + x) * z, r[9] = (f - w) * z, r[10] = (1 - (d + g)) * z, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Ei.set(r[0], r[1], r[2]).length();
    const o = Ei.set(r[4], r[5], r[6]).length(), a = Ei.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], gn.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return gn.elements[0] *= l, gn.elements[1] *= l, gn.elements[2] *= l, gn.elements[4] *= h, gn.elements[5] *= h, gn.elements[6] *= h, gn.elements[8] *= u, gn.elements[9] *= u, gn.elements[10] *= u, t.setFromRotationMatrix(gn), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - r), h = (t + e) / (t - e), u = (n + r) / (n - r), d = -(o + s) / (o - s), p = -2 * o * s / (o - s);
    return a[0] = c, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - r), h = 1 / (o - s), u = (t + e) * c, d = (n + r) * l, p = (o + s) * h;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ei = /* @__PURE__ */ new J(), gn = /* @__PURE__ */ new ut(), gu = /* @__PURE__ */ new J(0, 0, 0), mu = /* @__PURE__ */ new J(1, 1, 1), Hn = /* @__PURE__ */ new J(), Wr = /* @__PURE__ */ new J(), Jt = /* @__PURE__ */ new J(), al = /* @__PURE__ */ new ut(), ll = /* @__PURE__ */ new Yn();
class zr {
  constructor(e = 0, t = 0, n = 0, r = zr.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], h = r[9], u = r[2], d = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Et(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Et(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Et(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Et(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(Et(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-Et(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return al.makeRotationFromQuaternion(e), this.setFromRotationMatrix(al, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ll.setFromEuler(this), this.setFromQuaternion(ll, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  // @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
zr.DefaultOrder = "XYZ";
zr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Yc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let xu = 0;
const cl = /* @__PURE__ */ new J(), Li = /* @__PURE__ */ new Yn(), Dn = /* @__PURE__ */ new ut(), $r = /* @__PURE__ */ new J(), or = /* @__PURE__ */ new J(), yu = /* @__PURE__ */ new J(), _u = /* @__PURE__ */ new Yn(), hl = /* @__PURE__ */ new J(1, 0, 0), dl = /* @__PURE__ */ new J(0, 1, 0), ul = /* @__PURE__ */ new J(0, 0, 1), vu = { type: "added" }, fl = { type: "removed" };
class zt extends bi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: xu++ }), this.uuid = Qi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = zt.DefaultUp.clone();
    const e = new J(), t = new zr(), n = new Yn(), r = new J(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new ut()
      },
      normalMatrix: {
        value: new _t()
      }
    }), this.matrix = new ut(), this.matrixWorld = new ut(), this.matrixAutoUpdate = zt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = zt.DefaultMatrixWorldAutoUpdate, this.layers = new Yc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Li.setFromAxisAngle(e, t), this.quaternion.multiply(Li), this;
  }
  rotateOnWorldAxis(e, t) {
    return Li.setFromAxisAngle(e, t), this.quaternion.premultiply(Li), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(hl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(dl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ul, e);
  }
  translateOnAxis(e, t) {
    return cl.copy(e).applyQuaternion(this.quaternion), this.position.add(cl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(hl, e);
  }
  translateY(e) {
    return this.translateOnAxis(dl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ul, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Dn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? $r.copy(e) : $r.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), or.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Dn.lookAt(or, $r, this.up) : Dn.lookAt($r, or, this.up), this.quaternion.setFromRotationMatrix(Dn), r && (Dn.extractRotation(r.matrixWorld), Li.setFromRotationMatrix(Dn), this.quaternion.premultiply(Li.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(vu)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(fl)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(fl);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Dn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Dn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Dn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(or, e, yu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(or, _u, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), p = o(e.animations), m = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), m.length > 0 && (n.nodes = m);
    }
    return n.object = r, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
zt.DefaultUp = /* @__PURE__ */ new J(0, 1, 0);
zt.DefaultMatrixAutoUpdate = !0;
zt.DefaultMatrixWorldAutoUpdate = !0;
const mn = /* @__PURE__ */ new J(), Nn = /* @__PURE__ */ new J(), ho = /* @__PURE__ */ new J(), Fn = /* @__PURE__ */ new J(), zi = /* @__PURE__ */ new J(), Ri = /* @__PURE__ */ new J(), pl = /* @__PURE__ */ new J(), uo = /* @__PURE__ */ new J(), fo = /* @__PURE__ */ new J(), po = /* @__PURE__ */ new J();
class Mn {
  constructor(e = new J(), t = new J(), n = new J()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), mn.subVectors(e, t), r.cross(mn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    mn.subVectors(r, t), Nn.subVectors(n, t), ho.subVectors(e, t);
    const o = mn.dot(mn), a = mn.dot(Nn), c = mn.dot(ho), l = Nn.dot(Nn), h = Nn.dot(ho), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, p = (l * c - a * h) * d, m = (o * h - a * c) * d;
    return s.set(1 - p - m, m, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Fn), Fn.x >= 0 && Fn.y >= 0 && Fn.x + Fn.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, c) {
    return this.getBarycoord(e, t, n, r, Fn), c.set(0, 0), c.addScaledVector(s, Fn.x), c.addScaledVector(o, Fn.y), c.addScaledVector(a, Fn.z), c;
  }
  static isFrontFacing(e, t, n, r) {
    return mn.subVectors(n, t), Nn.subVectors(e, t), mn.cross(Nn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return mn.subVectors(this.c, this.b), Nn.subVectors(this.a, this.b), mn.cross(Nn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Mn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Mn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Mn.getUV(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Mn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Mn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    zi.subVectors(r, n), Ri.subVectors(s, n), uo.subVectors(e, n);
    const c = zi.dot(uo), l = Ri.dot(uo);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    fo.subVectors(e, r);
    const h = zi.dot(fo), u = Ri.dot(fo);
    if (h >= 0 && u <= h)
      return t.copy(r);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(zi, o);
    po.subVectors(e, s);
    const p = zi.dot(po), m = Ri.dot(po);
    if (m >= 0 && p <= m)
      return t.copy(s);
    const g = p * l - c * m;
    if (g <= 0 && l >= 0 && m <= 0)
      return a = l / (l - m), t.copy(n).addScaledVector(Ri, a);
    const f = h * m - p * u;
    if (f <= 0 && u - h >= 0 && p - m >= 0)
      return pl.subVectors(s, r), a = (u - h) / (u - h + (p - m)), t.copy(r).addScaledVector(pl, a);
    const v = 1 / (f + g + d);
    return o = g * v, a = d * v, t.copy(n).addScaledVector(zi, o).addScaledVector(Ri, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let bu = 0;
class er extends bi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: bu++ }), this.uuid = Qi(), this.name = "", this.type = "Material", this.blending = Hi, this.side = gi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Nc, this.blendDst = Fc, this.blendEquation = Gi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Xo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = hu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Js, this.stencilZFail = Js, this.stencilZPass = Js, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Hi && (n.blending = this.blending), this.side !== gi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class fa extends er {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new tt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = kc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const yt = /* @__PURE__ */ new J(), Hr = /* @__PURE__ */ new ye();
class Ht {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = nl, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Hr.fromBufferAttribute(this, t), Hr.applyMatrix3(e), this.setXY(t, Hr.x, Hr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        yt.fromBufferAttribute(this, t), yt.applyMatrix3(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.applyMatrix4(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.applyNormalMatrix(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.transformDirection(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Nr(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Zt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Nr(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Zt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Nr(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Zt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Nr(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Zt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Zt(t, this.array), n = Zt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Zt(t, this.array), n = Zt(n, this.array), r = Zt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Zt(t, this.array), n = Zt(n, this.array), r = Zt(r, this.array), s = Zt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== nl && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class qc extends Ht {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class jc extends Ht {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Tt extends Ht {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Su = 0;
const ln = /* @__PURE__ */ new ut(), go = /* @__PURE__ */ new zt(), Ii = /* @__PURE__ */ new J(), Kt = /* @__PURE__ */ new Lr(), ar = /* @__PURE__ */ new Lr(), Pt = /* @__PURE__ */ new J();
class on extends bi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Su++ }), this.uuid = Qi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Gc(e) ? jc : qc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new _t().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return ln.makeRotationFromQuaternion(e), this.applyMatrix4(ln), this;
  }
  rotateX(e) {
    return ln.makeRotationX(e), this.applyMatrix4(ln), this;
  }
  rotateY(e) {
    return ln.makeRotationY(e), this.applyMatrix4(ln), this;
  }
  rotateZ(e) {
    return ln.makeRotationZ(e), this.applyMatrix4(ln), this;
  }
  translate(e, t, n) {
    return ln.makeTranslation(e, t, n), this.applyMatrix4(ln), this;
  }
  scale(e, t, n) {
    return ln.makeScale(e, t, n), this.applyMatrix4(ln), this;
  }
  lookAt(e) {
    return go.lookAt(e), go.updateMatrix(), this.applyMatrix4(go.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ii).negate(), this.translate(Ii.x, Ii.y, Ii.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Tt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Lr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new J(-1 / 0, -1 / 0, -1 / 0),
        new J(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Kt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Pt.addVectors(this.boundingBox.min, Kt.min), this.boundingBox.expandByPoint(Pt), Pt.addVectors(this.boundingBox.max, Kt.max), this.boundingBox.expandByPoint(Pt)) : (this.boundingBox.expandByPoint(Kt.min), this.boundingBox.expandByPoint(Kt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Is());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new J(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Kt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ar.setFromBufferAttribute(a), this.morphTargetsRelative ? (Pt.addVectors(Kt.min, ar.min), Kt.expandByPoint(Pt), Pt.addVectors(Kt.max, ar.max), Kt.expandByPoint(Pt)) : (Kt.expandByPoint(ar.min), Kt.expandByPoint(ar.max));
        }
      Kt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Pt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Pt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            Pt.fromBufferAttribute(a, l), c && (Ii.fromBufferAttribute(e, l), Pt.add(Ii)), r = Math.max(r, n.distanceToSquared(Pt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ht(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let R = 0; R < a; R++)
      l[R] = new J(), h[R] = new J();
    const u = new J(), d = new J(), p = new J(), m = new ye(), g = new ye(), f = new ye(), v = new J(), w = new J();
    function x(R, W, V) {
      u.fromArray(r, R * 3), d.fromArray(r, W * 3), p.fromArray(r, V * 3), m.fromArray(o, R * 2), g.fromArray(o, W * 2), f.fromArray(o, V * 2), d.sub(u), p.sub(u), g.sub(m), f.sub(m);
      const F = 1 / (g.x * f.y - f.x * g.y);
      isFinite(F) && (v.copy(d).multiplyScalar(f.y).addScaledVector(p, -g.y).multiplyScalar(F), w.copy(p).multiplyScalar(g.x).addScaledVector(d, -f.x).multiplyScalar(F), l[R].add(v), l[W].add(v), l[V].add(v), h[R].add(w), h[W].add(w), h[V].add(w));
    }
    let _ = this.groups;
    _.length === 0 && (_ = [{
      start: 0,
      count: n.length
    }]);
    for (let R = 0, W = _.length; R < W; ++R) {
      const V = _[R], F = V.start, k = V.count;
      for (let D = F, G = F + k; D < G; D += 3)
        x(
          n[D + 0],
          n[D + 1],
          n[D + 2]
        );
    }
    const y = new J(), P = new J(), z = new J(), b = new J();
    function L(R) {
      z.fromArray(s, R * 3), b.copy(z);
      const W = l[R];
      y.copy(W), y.sub(z.multiplyScalar(z.dot(W))).normalize(), P.crossVectors(b, W);
      const F = P.dot(h[R]) < 0 ? -1 : 1;
      c[R * 4] = y.x, c[R * 4 + 1] = y.y, c[R * 4 + 2] = y.z, c[R * 4 + 3] = F;
    }
    for (let R = 0, W = _.length; R < W; ++R) {
      const V = _[R], F = V.start, k = V.count;
      for (let D = F, G = F + k; D < G; D += 3)
        L(n[D + 0]), L(n[D + 1]), L(n[D + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ht(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new J(), s = new J(), o = new J(), a = new J(), c = new J(), l = new J(), h = new J(), u = new J();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const m = e.getX(d + 0), g = e.getX(d + 1), f = e.getX(d + 2);
          r.fromBufferAttribute(t, m), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, f), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), a.fromBufferAttribute(n, m), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, f), a.add(h), c.add(h), l.add(h), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Pt.fromBufferAttribute(e, t), Pt.normalize(), e.setXYZ(t, Pt.x, Pt.y, Pt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let p = 0, m = 0;
      for (let g = 0, f = c.length; g < f; g++) {
        a.isInterleavedBufferAttribute ? p = c[g] * a.data.stride + a.offset : p = c[g] * h;
        for (let v = 0; v < h; v++)
          d[m++] = l[p++];
      }
      return new Ht(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new on(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const c = r[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (r[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const l in r) {
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, p = u.length; d < p; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const gl = /* @__PURE__ */ new ut(), Di = /* @__PURE__ */ new Xc(), mo = /* @__PURE__ */ new Is(), lr = /* @__PURE__ */ new J(), cr = /* @__PURE__ */ new J(), hr = /* @__PURE__ */ new J(), xo = /* @__PURE__ */ new J(), Vr = /* @__PURE__ */ new J(), Xr = /* @__PURE__ */ new ye(), Yr = /* @__PURE__ */ new ye(), qr = /* @__PURE__ */ new ye(), yo = /* @__PURE__ */ new J(), jr = /* @__PURE__ */ new J();
class Ye extends zt {
  constructor(e = new on(), t = new fa()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Vr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (xo.fromBufferAttribute(u, e), o ? Vr.addScaledVector(xo, h) : Vr.addScaledVector(xo.sub(t), h));
      }
      t.add(Vr);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    if (r === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), mo.copy(n.boundingSphere), mo.applyMatrix4(s), e.ray.intersectsSphere(mo) === !1) || (gl.copy(s).invert(), Di.copy(e.ray).applyMatrix4(gl), n.boundingBox !== null && Di.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const a = n.index, c = n.attributes.position, l = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
    if (a !== null)
      if (Array.isArray(r))
        for (let p = 0, m = u.length; p < m; p++) {
          const g = u[p], f = r[g.materialIndex], v = Math.max(g.start, d.start), w = Math.min(a.count, Math.min(g.start + g.count, d.start + d.count));
          for (let x = v, _ = w; x < _; x += 3) {
            const y = a.getX(x), P = a.getX(x + 1), z = a.getX(x + 2);
            o = Zr(this, f, e, Di, l, h, y, P, z), o && (o.faceIndex = Math.floor(x / 3), o.face.materialIndex = g.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, d.start), m = Math.min(a.count, d.start + d.count);
        for (let g = p, f = m; g < f; g += 3) {
          const v = a.getX(g), w = a.getX(g + 1), x = a.getX(g + 2);
          o = Zr(this, r, e, Di, l, h, v, w, x), o && (o.faceIndex = Math.floor(g / 3), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(r))
        for (let p = 0, m = u.length; p < m; p++) {
          const g = u[p], f = r[g.materialIndex], v = Math.max(g.start, d.start), w = Math.min(c.count, Math.min(g.start + g.count, d.start + d.count));
          for (let x = v, _ = w; x < _; x += 3) {
            const y = x, P = x + 1, z = x + 2;
            o = Zr(this, f, e, Di, l, h, y, P, z), o && (o.faceIndex = Math.floor(x / 3), o.face.materialIndex = g.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, d.start), m = Math.min(c.count, d.start + d.count);
        for (let g = p, f = m; g < f; g += 3) {
          const v = g, w = g + 1, x = g + 2;
          o = Zr(this, r, e, Di, l, h, v, w, x), o && (o.faceIndex = Math.floor(g / 3), t.push(o));
        }
      }
  }
}
function wu(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === un ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === gi, a), c === null)
    return null;
  jr.copy(a), jr.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(jr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: jr.clone(),
    object: i
  };
}
function Zr(i, e, t, n, r, s, o, a, c) {
  i.getVertexPosition(o, lr), i.getVertexPosition(a, cr), i.getVertexPosition(c, hr);
  const l = wu(i, e, t, n, lr, cr, hr, yo);
  if (l) {
    r && (Xr.fromBufferAttribute(r, o), Yr.fromBufferAttribute(r, a), qr.fromBufferAttribute(r, c), l.uv = Mn.getUV(yo, lr, cr, hr, Xr, Yr, qr, new ye())), s && (Xr.fromBufferAttribute(s, o), Yr.fromBufferAttribute(s, a), qr.fromBufferAttribute(s, c), l.uv2 = Mn.getUV(yo, lr, cr, hr, Xr, Yr, qr, new ye()));
    const h = {
      a: o,
      b: a,
      c,
      normal: new J(),
      materialIndex: 0
    };
    Mn.getNormal(lr, cr, hr, h.normal), l.face = h;
  }
  return l;
}
class nn extends on {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, p = 0;
    m("z", "y", "x", -1, -1, n, t, e, o, s, 0), m("z", "y", "x", 1, -1, n, t, -e, o, s, 1), m("x", "z", "y", 1, 1, e, n, t, r, o, 2), m("x", "z", "y", 1, -1, e, n, -t, r, o, 3), m("x", "y", "z", 1, -1, e, t, n, r, s, 4), m("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Tt(l, 3)), this.setAttribute("normal", new Tt(h, 3)), this.setAttribute("uv", new Tt(u, 2));
    function m(g, f, v, w, x, _, y, P, z, b, L) {
      const R = _ / z, W = y / b, V = _ / 2, F = y / 2, k = P / 2, D = z + 1, G = b + 1;
      let E = 0, M = 0;
      const X = new J();
      for (let ee = 0; ee < G; ee++) {
        const ne = ee * W - F;
        for (let Q = 0; Q < D; Q++) {
          const de = Q * R - V;
          X[g] = de * w, X[f] = ne * x, X[v] = k, l.push(X.x, X.y, X.z), X[g] = 0, X[f] = 0, X[v] = P > 0 ? 1 : -1, h.push(X.x, X.y, X.z), u.push(Q / z), u.push(1 - ee / b), E += 1;
        }
      }
      for (let ee = 0; ee < b; ee++)
        for (let ne = 0; ne < z; ne++) {
          const Q = d + ne + D * ee, de = d + ne + D * (ee + 1), T = d + (ne + 1) + D * (ee + 1), C = d + (ne + 1) + D * ee;
          c.push(Q, de, C), c.push(de, T, C), M += 6;
        }
      a.addGroup(p, M, L), p += M, d += E;
    }
  }
  static fromJSON(e) {
    return new nn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ji(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function Ft(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Ji(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Mu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Zc(i) {
  return i.getRenderTarget() === null && i.outputEncoding === rt ? bn : wr;
}
const Cu = { clone: Ji, merge: Ft };
var Pu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Tu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _i extends er {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Pu, this.fragmentShader = Tu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ji(e.uniforms), this.uniformsGroups = Mu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Jc extends zt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ut(), this.projectionMatrix = new ut(), this.projectionMatrixInverse = new ut();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class $t extends Jc {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = rl * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(gs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return rl * 2 * Math.atan(
      Math.tan(gs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(gs * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * r / c, t -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ni = -90, Fi = 1;
class Au extends zt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const r = new $t(Ni, Fi, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(1, 0, 0), this.add(r);
    const s = new $t(Ni, Fi, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new $t(Ni, Fi, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new $t(Ni, Fi, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new $t(Ni, Fi, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new $t(Ni, Fi, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [r, s, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = Bn, e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Kc extends Xt {
  constructor(e, t, n, r, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : qi, super(e, t, n, r, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Eu extends yi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Kc(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : hn;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new nn(5, 5, 5), s = new _i({
      name: "CubemapFromEquirect",
      uniforms: Ji(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: un,
      blending: Vn
    });
    s.uniforms.tEquirect.value = t;
    const o = new Ye(r, s), a = t.minFilter;
    return t.minFilter === br && (t.minFilter = hn), new Au(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const _o = /* @__PURE__ */ new J(), Lu = /* @__PURE__ */ new J(), zu = /* @__PURE__ */ new _t();
let ri = class {
  constructor(e = new J(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = _o.subVectors(n, t).cross(Lu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(_o), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || zu.getNormalMatrix(e), r = this.coplanarPoint(_o).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const ki = /* @__PURE__ */ new Is(), Jr = /* @__PURE__ */ new J();
class pa {
  constructor(e = new ri(), t = new ri(), n = new ri(), r = new ri(), s = new ri(), o = new ri()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, r = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], h = n[6], u = n[7], d = n[8], p = n[9], m = n[10], g = n[11], f = n[12], v = n[13], w = n[14], x = n[15];
    return t[0].setComponents(a - r, u - c, g - d, x - f).normalize(), t[1].setComponents(a + r, u + c, g + d, x + f).normalize(), t[2].setComponents(a + s, u + l, g + p, x + v).normalize(), t[3].setComponents(a - s, u - l, g - p, x - v).normalize(), t[4].setComponents(a - o, u - h, g - m, x - w).normalize(), t[5].setComponents(a + o, u + h, g + m, x + w).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ki);
  }
  intersectsSprite(e) {
    return ki.center.set(0, 0, 0), ki.radius = 0.7071067811865476, ki.applyMatrix4(e.matrixWorld), this.intersectsSphere(ki);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Jr.x = r.normal.x > 0 ? e.max.x : e.min.x, Jr.y = r.normal.y > 0 ? e.max.y : e.min.y, Jr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Jr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Qc() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Ru(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(l, h) {
    const u = l.array, d = l.usage, p = i.createBuffer();
    i.bindBuffer(h, p), i.bufferData(h, u, d), l.onUploadCallback();
    let m;
    if (u instanceof Float32Array)
      m = 5126;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          m = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        m = 5123;
    else if (u instanceof Int16Array)
      m = 5122;
    else if (u instanceof Uint32Array)
      m = 5125;
    else if (u instanceof Int32Array)
      m = 5124;
    else if (u instanceof Int8Array)
      m = 5120;
    else if (u instanceof Uint8Array)
      m = 5121;
    else if (u instanceof Uint8ClampedArray)
      m = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: p,
      type: m,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, p = h.updateRange;
    i.bindBuffer(u, l), p.count === -1 ? i.bufferSubData(u, 0, d) : (t ? i.bufferSubData(
      u,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : i.bufferSubData(
      u,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (i.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, r(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class Ds extends on {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, h = c + 1, u = e / a, d = t / c, p = [], m = [], g = [], f = [];
    for (let v = 0; v < h; v++) {
      const w = v * d - o;
      for (let x = 0; x < l; x++) {
        const _ = x * u - s;
        m.push(_, -w, 0), g.push(0, 0, 1), f.push(x / a), f.push(1 - v / c);
      }
    }
    for (let v = 0; v < c; v++)
      for (let w = 0; w < a; w++) {
        const x = w + l * v, _ = w + l * (v + 1), y = w + 1 + l * (v + 1), P = w + 1 + l * v;
        p.push(x, _, P), p.push(_, y, P);
      }
    this.setIndex(p), this.setAttribute("position", new Tt(m, 3)), this.setAttribute("normal", new Tt(g, 3)), this.setAttribute("uv", new Tt(f, 2));
  }
  static fromJSON(e) {
    return new Ds(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Iu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Du = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Fu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ku = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Ou = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Uu = "vec3 transformed = vec3( position );", Bu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Gu = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Wu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, $u = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Hu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Vu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Xu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Yu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, qu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, ju = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Zu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ju = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ku = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Qu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, ef = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, tf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, nf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, rf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, sf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, of = "gl_FragColor = linearToOutputTexel( gl_FragColor );", af = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, lf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, cf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, hf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, df = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, uf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ff = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, pf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, gf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, mf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, xf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, yf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, _f = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, vf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, bf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Sf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, wf = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, Mf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Cf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Pf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Tf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Af = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Ef = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Lf = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, zf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Rf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, If = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Df = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Nf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ff = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, kf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Of = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Uf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Bf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Gf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Wf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, $f = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Hf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Vf = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Xf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Yf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, qf = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, jf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Jf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Kf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Qf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, ep = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, tp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, np = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, ip = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, rp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, sp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, op = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ap = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, dp = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, up = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, fp = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, pp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, gp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, mp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, xp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, yp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, _p = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, vp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, bp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Sp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, wp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, Mp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, Cp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Pp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Tp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Ap = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Ep = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Lp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, zp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Rp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ip = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Dp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Np = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Fp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, kp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Op = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Up = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Bp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Gp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Wp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, $p = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Hp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Vp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Xp = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Yp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Jp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Qp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, e0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, t0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, n0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, i0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, r0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, s0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, o0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, a0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, l0 = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, c0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, h0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, d0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, We = {
  alphamap_fragment: Iu,
  alphamap_pars_fragment: Du,
  alphatest_fragment: Nu,
  alphatest_pars_fragment: Fu,
  aomap_fragment: ku,
  aomap_pars_fragment: Ou,
  begin_vertex: Uu,
  beginnormal_vertex: Bu,
  bsdfs: Gu,
  iridescence_fragment: Wu,
  bumpmap_pars_fragment: $u,
  clipping_planes_fragment: Hu,
  clipping_planes_pars_fragment: Vu,
  clipping_planes_pars_vertex: Xu,
  clipping_planes_vertex: Yu,
  color_fragment: qu,
  color_pars_fragment: ju,
  color_pars_vertex: Zu,
  color_vertex: Ju,
  common: Ku,
  cube_uv_reflection_fragment: Qu,
  defaultnormal_vertex: ef,
  displacementmap_pars_vertex: tf,
  displacementmap_vertex: nf,
  emissivemap_fragment: rf,
  emissivemap_pars_fragment: sf,
  encodings_fragment: of,
  encodings_pars_fragment: af,
  envmap_fragment: lf,
  envmap_common_pars_fragment: cf,
  envmap_pars_fragment: hf,
  envmap_pars_vertex: df,
  envmap_physical_pars_fragment: wf,
  envmap_vertex: uf,
  fog_vertex: ff,
  fog_pars_vertex: pf,
  fog_fragment: gf,
  fog_pars_fragment: mf,
  gradientmap_pars_fragment: xf,
  lightmap_fragment: yf,
  lightmap_pars_fragment: _f,
  lights_lambert_fragment: vf,
  lights_lambert_pars_fragment: bf,
  lights_pars_begin: Sf,
  lights_toon_fragment: Mf,
  lights_toon_pars_fragment: Cf,
  lights_phong_fragment: Pf,
  lights_phong_pars_fragment: Tf,
  lights_physical_fragment: Af,
  lights_physical_pars_fragment: Ef,
  lights_fragment_begin: Lf,
  lights_fragment_maps: zf,
  lights_fragment_end: Rf,
  logdepthbuf_fragment: If,
  logdepthbuf_pars_fragment: Df,
  logdepthbuf_pars_vertex: Nf,
  logdepthbuf_vertex: Ff,
  map_fragment: kf,
  map_pars_fragment: Of,
  map_particle_fragment: Uf,
  map_particle_pars_fragment: Bf,
  metalnessmap_fragment: Gf,
  metalnessmap_pars_fragment: Wf,
  morphcolor_vertex: $f,
  morphnormal_vertex: Hf,
  morphtarget_pars_vertex: Vf,
  morphtarget_vertex: Xf,
  normal_fragment_begin: Yf,
  normal_fragment_maps: qf,
  normal_pars_fragment: jf,
  normal_pars_vertex: Zf,
  normal_vertex: Jf,
  normalmap_pars_fragment: Kf,
  clearcoat_normal_fragment_begin: Qf,
  clearcoat_normal_fragment_maps: ep,
  clearcoat_pars_fragment: tp,
  iridescence_pars_fragment: np,
  output_fragment: ip,
  packing: rp,
  premultiplied_alpha_fragment: sp,
  project_vertex: op,
  dithering_fragment: ap,
  dithering_pars_fragment: lp,
  roughnessmap_fragment: cp,
  roughnessmap_pars_fragment: hp,
  shadowmap_pars_fragment: dp,
  shadowmap_pars_vertex: up,
  shadowmap_vertex: fp,
  shadowmask_pars_fragment: pp,
  skinbase_vertex: gp,
  skinning_pars_vertex: mp,
  skinning_vertex: xp,
  skinnormal_vertex: yp,
  specularmap_fragment: _p,
  specularmap_pars_fragment: vp,
  tonemapping_fragment: bp,
  tonemapping_pars_fragment: Sp,
  transmission_fragment: wp,
  transmission_pars_fragment: Mp,
  uv_pars_fragment: Cp,
  uv_pars_vertex: Pp,
  uv_vertex: Tp,
  uv2_pars_fragment: Ap,
  uv2_pars_vertex: Ep,
  uv2_vertex: Lp,
  worldpos_vertex: zp,
  background_vert: Rp,
  background_frag: Ip,
  backgroundCube_vert: Dp,
  backgroundCube_frag: Np,
  cube_vert: Fp,
  cube_frag: kp,
  depth_vert: Op,
  depth_frag: Up,
  distanceRGBA_vert: Bp,
  distanceRGBA_frag: Gp,
  equirect_vert: Wp,
  equirect_frag: $p,
  linedashed_vert: Hp,
  linedashed_frag: Vp,
  meshbasic_vert: Xp,
  meshbasic_frag: Yp,
  meshlambert_vert: qp,
  meshlambert_frag: jp,
  meshmatcap_vert: Zp,
  meshmatcap_frag: Jp,
  meshnormal_vert: Kp,
  meshnormal_frag: Qp,
  meshphong_vert: e0,
  meshphong_frag: t0,
  meshphysical_vert: n0,
  meshphysical_frag: i0,
  meshtoon_vert: r0,
  meshtoon_frag: s0,
  points_vert: o0,
  points_frag: a0,
  shadow_vert: l0,
  shadow_frag: c0,
  sprite_vert: h0,
  sprite_frag: d0
}, Le = {
  common: {
    diffuse: { value: /* @__PURE__ */ new tt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new _t() },
    uv2Transform: { value: /* @__PURE__ */ new _t() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new ye(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new tt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new tt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new _t() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new tt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ye(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new _t() }
  }
}, Sn = {
  basic: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.specularmap,
      Le.envmap,
      Le.aomap,
      Le.lightmap,
      Le.fog
    ]),
    vertexShader: We.meshbasic_vert,
    fragmentShader: We.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.specularmap,
      Le.envmap,
      Le.aomap,
      Le.lightmap,
      Le.emissivemap,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      Le.fog,
      Le.lights,
      {
        emissive: { value: /* @__PURE__ */ new tt(0) }
      }
    ]),
    vertexShader: We.meshlambert_vert,
    fragmentShader: We.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.specularmap,
      Le.envmap,
      Le.aomap,
      Le.lightmap,
      Le.emissivemap,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      Le.fog,
      Le.lights,
      {
        emissive: { value: /* @__PURE__ */ new tt(0) },
        specular: { value: /* @__PURE__ */ new tt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: We.meshphong_vert,
    fragmentShader: We.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.envmap,
      Le.aomap,
      Le.lightmap,
      Le.emissivemap,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      Le.roughnessmap,
      Le.metalnessmap,
      Le.fog,
      Le.lights,
      {
        emissive: { value: /* @__PURE__ */ new tt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: We.meshphysical_vert,
    fragmentShader: We.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.aomap,
      Le.lightmap,
      Le.emissivemap,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      Le.gradientmap,
      Le.fog,
      Le.lights,
      {
        emissive: { value: /* @__PURE__ */ new tt(0) }
      }
    ]),
    vertexShader: We.meshtoon_vert,
    fragmentShader: We.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      Le.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: We.meshmatcap_vert,
    fragmentShader: We.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ft([
      Le.points,
      Le.fog
    ]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: We.linedashed_vert,
    fragmentShader: We.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.displacementmap
    ]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.bumpmap,
      Le.normalmap,
      Le.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.meshnormal_vert,
    fragmentShader: We.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ft([
      Le.sprite,
      Le.fog
    ]),
    vertexShader: We.sprite_vert,
    fragmentShader: We.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new _t() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.background_vert,
    fragmentShader: We.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.backgroundCube_vert,
    fragmentShader: We.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: We.cube_vert,
    fragmentShader: We.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: We.equirect_vert,
    fragmentShader: We.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ft([
      Le.common,
      Le.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new J() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distanceRGBA_vert,
    fragmentShader: We.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ft([
      Le.lights,
      Le.fog,
      {
        color: { value: /* @__PURE__ */ new tt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.shadow_vert,
    fragmentShader: We.shadow_frag
  }
};
Sn.physical = {
  uniforms: /* @__PURE__ */ Ft([
    Sn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ye(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new tt(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ye() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new tt(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new tt(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag
};
const Kr = { r: 0, b: 0, g: 0 };
function u0(i, e, t, n, r, s, o) {
  const a = new tt(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, p = null;
  function m(f, v) {
    let w = !1, x = v.isScene === !0 ? v.background : null;
    x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x));
    const _ = i.xr, y = _.getSession && _.getSession();
    y && y.environmentBlendMode === "additive" && (x = null), x === null ? g(a, c) : x && x.isColor && (g(x, 1), w = !0), (i.autoClear || w) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), x && (x.isCubeTexture || x.mapping === Rs) ? (h === void 0 && (h = new Ye(
      new nn(1, 1, 1),
      new _i({
        name: "BackgroundCubeMaterial",
        uniforms: Ji(Sn.backgroundCube.uniforms),
        vertexShader: Sn.backgroundCube.vertexShader,
        fragmentShader: Sn.backgroundCube.fragmentShader,
        side: un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(P, z, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, h.material.toneMapped = x.encoding !== rt, (u !== x || d !== x.version || p !== i.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, p = i.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new Ye(
      new Ds(2, 2),
      new _i({
        name: "BackgroundMaterial",
        uniforms: Ji(Sn.background.uniforms),
        vertexShader: Sn.background.vertexShader,
        fragmentShader: Sn.background.fragmentShader,
        side: gi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, l.material.toneMapped = x.encoding !== rt, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, p = i.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(f, v) {
    f.getRGB(Kr, Zc(i)), n.buffers.color.setClear(Kr.r, Kr.g, Kr.b, v, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(f, v = 1) {
      a.set(f), c = v, g(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, g(a, c);
    },
    render: m
  };
}
function f0(i, e, t, n) {
  const r = i.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = f(null);
  let l = c, h = !1;
  function u(k, D, G, E, M) {
    let X = !1;
    if (o) {
      const ee = g(E, G, D);
      l !== ee && (l = ee, p(l.object)), X = v(k, E, G, M), X && w(k, E, G, M);
    } else {
      const ee = D.wireframe === !0;
      (l.geometry !== E.id || l.program !== G.id || l.wireframe !== ee) && (l.geometry = E.id, l.program = G.id, l.wireframe = ee, X = !0);
    }
    M !== null && t.update(M, 34963), (X || h) && (h = !1, b(k, D, G, E), M !== null && i.bindBuffer(34963, t.get(M).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function p(k) {
    return n.isWebGL2 ? i.bindVertexArray(k) : s.bindVertexArrayOES(k);
  }
  function m(k) {
    return n.isWebGL2 ? i.deleteVertexArray(k) : s.deleteVertexArrayOES(k);
  }
  function g(k, D, G) {
    const E = G.wireframe === !0;
    let M = a[k.id];
    M === void 0 && (M = {}, a[k.id] = M);
    let X = M[D.id];
    X === void 0 && (X = {}, M[D.id] = X);
    let ee = X[E];
    return ee === void 0 && (ee = f(d()), X[E] = ee), ee;
  }
  function f(k) {
    const D = [], G = [], E = [];
    for (let M = 0; M < r; M++)
      D[M] = 0, G[M] = 0, E[M] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: G,
      attributeDivisors: E,
      object: k,
      attributes: {},
      index: null
    };
  }
  function v(k, D, G, E) {
    const M = l.attributes, X = D.attributes;
    let ee = 0;
    const ne = G.getAttributes();
    for (const Q in ne)
      if (ne[Q].location >= 0) {
        const T = M[Q];
        let C = X[Q];
        if (C === void 0 && (Q === "instanceMatrix" && k.instanceMatrix && (C = k.instanceMatrix), Q === "instanceColor" && k.instanceColor && (C = k.instanceColor)), T === void 0 || T.attribute !== C || C && T.data !== C.data)
          return !0;
        ee++;
      }
    return l.attributesNum !== ee || l.index !== E;
  }
  function w(k, D, G, E) {
    const M = {}, X = D.attributes;
    let ee = 0;
    const ne = G.getAttributes();
    for (const Q in ne)
      if (ne[Q].location >= 0) {
        let T = X[Q];
        T === void 0 && (Q === "instanceMatrix" && k.instanceMatrix && (T = k.instanceMatrix), Q === "instanceColor" && k.instanceColor && (T = k.instanceColor));
        const C = {};
        C.attribute = T, T && T.data && (C.data = T.data), M[Q] = C, ee++;
      }
    l.attributes = M, l.attributesNum = ee, l.index = E;
  }
  function x() {
    const k = l.newAttributes;
    for (let D = 0, G = k.length; D < G; D++)
      k[D] = 0;
  }
  function _(k) {
    y(k, 0);
  }
  function y(k, D) {
    const G = l.newAttributes, E = l.enabledAttributes, M = l.attributeDivisors;
    G[k] = 1, E[k] === 0 && (i.enableVertexAttribArray(k), E[k] = 1), M[k] !== D && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](k, D), M[k] = D);
  }
  function P() {
    const k = l.newAttributes, D = l.enabledAttributes;
    for (let G = 0, E = D.length; G < E; G++)
      D[G] !== k[G] && (i.disableVertexAttribArray(G), D[G] = 0);
  }
  function z(k, D, G, E, M, X) {
    n.isWebGL2 === !0 && (G === 5124 || G === 5125) ? i.vertexAttribIPointer(k, D, G, M, X) : i.vertexAttribPointer(k, D, G, E, M, X);
  }
  function b(k, D, G, E) {
    if (n.isWebGL2 === !1 && (k.isInstancedMesh || E.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const M = E.attributes, X = G.getAttributes(), ee = D.defaultAttributeValues;
    for (const ne in X) {
      const Q = X[ne];
      if (Q.location >= 0) {
        let de = M[ne];
        if (de === void 0 && (ne === "instanceMatrix" && k.instanceMatrix && (de = k.instanceMatrix), ne === "instanceColor" && k.instanceColor && (de = k.instanceColor)), de !== void 0) {
          const T = de.normalized, C = de.itemSize, S = t.get(de);
          if (S === void 0)
            continue;
          const A = S.buffer, U = S.type, Z = S.bytesPerElement;
          if (de.isInterleavedBufferAttribute) {
            const $ = de.data, fe = $.stride, q = de.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let K = 0; K < Q.locationSize; K++)
                y(Q.location + K, $.meshPerAttribute);
              k.isInstancedMesh !== !0 && E._maxInstanceCount === void 0 && (E._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let K = 0; K < Q.locationSize; K++)
                _(Q.location + K);
            i.bindBuffer(34962, A);
            for (let K = 0; K < Q.locationSize; K++)
              z(
                Q.location + K,
                C / Q.locationSize,
                U,
                T,
                fe * Z,
                (q + C / Q.locationSize * K) * Z
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let $ = 0; $ < Q.locationSize; $++)
                y(Q.location + $, de.meshPerAttribute);
              k.isInstancedMesh !== !0 && E._maxInstanceCount === void 0 && (E._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let $ = 0; $ < Q.locationSize; $++)
                _(Q.location + $);
            i.bindBuffer(34962, A);
            for (let $ = 0; $ < Q.locationSize; $++)
              z(
                Q.location + $,
                C / Q.locationSize,
                U,
                T,
                C * Z,
                C / Q.locationSize * $ * Z
              );
          }
        } else if (ee !== void 0) {
          const T = ee[ne];
          if (T !== void 0)
            switch (T.length) {
              case 2:
                i.vertexAttrib2fv(Q.location, T);
                break;
              case 3:
                i.vertexAttrib3fv(Q.location, T);
                break;
              case 4:
                i.vertexAttrib4fv(Q.location, T);
                break;
              default:
                i.vertexAttrib1fv(Q.location, T);
            }
        }
      }
    }
    P();
  }
  function L() {
    V();
    for (const k in a) {
      const D = a[k];
      for (const G in D) {
        const E = D[G];
        for (const M in E)
          m(E[M].object), delete E[M];
        delete D[G];
      }
      delete a[k];
    }
  }
  function R(k) {
    if (a[k.id] === void 0)
      return;
    const D = a[k.id];
    for (const G in D) {
      const E = D[G];
      for (const M in E)
        m(E[M].object), delete E[M];
      delete D[G];
    }
    delete a[k.id];
  }
  function W(k) {
    for (const D in a) {
      const G = a[D];
      if (G[k.id] === void 0)
        continue;
      const E = G[k.id];
      for (const M in E)
        m(E[M].object), delete E[M];
      delete G[k.id];
    }
  }
  function V() {
    F(), h = !0, l !== c && (l = c, p(l.object));
  }
  function F() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: V,
    resetDefaultState: F,
    dispose: L,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: W,
    initAttributes: x,
    enableAttribute: _,
    disableUnusedAttributes: P
  };
}
function p0(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    i.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, p;
    if (r)
      d = i, p = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[p](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function g0(i, e, t) {
  let n;
  function r() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const z = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(z) {
    if (z === "highp") {
      if (i.getShaderPrecisionFormat(35633, 36338).precision > 0 && i.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      z = "mediump";
    }
    return z === "mediump" && i.getShaderPrecisionFormat(35633, 36337).precision > 0 && i.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && i instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = i.getParameter(34930), d = i.getParameter(35660), p = i.getParameter(3379), m = i.getParameter(34076), g = i.getParameter(34921), f = i.getParameter(36347), v = i.getParameter(36348), w = i.getParameter(36349), x = d > 0, _ = o || e.has("OES_texture_float"), y = x && _, P = o ? i.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: m,
    maxAttributes: g,
    maxVertexUniforms: f,
    maxVaryings: v,
    maxFragmentUniforms: w,
    vertexTextures: x,
    floatFragmentTextures: _,
    floatVertexTextures: y,
    maxSamples: P
  };
}
function m0(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new ri(), a = new _t(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, p) {
    const m = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, t = h(u, p, 0), n = u.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(u, d, p) {
    const m = u.clippingPlanes, g = u.clipIntersection, f = u.clipShadows, v = i.get(u);
    if (!r || m === null || m.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const w = s ? 0 : n, x = w * 4;
      let _ = v.clippingState || null;
      c.value = _, _ = h(m, d, x, p);
      for (let y = 0; y !== x; ++y)
        _[y] = t[y];
      v.clippingState = _, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += w;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, m) {
    const g = u !== null ? u.length : 0;
    let f = null;
    if (g !== 0) {
      if (f = c.value, m !== !0 || f === null) {
        const v = p + g * 4, w = d.matrixWorldInverse;
        a.getNormalMatrix(w), (f === null || f.length < v) && (f = new Float32Array(v));
        for (let x = 0, _ = p; x !== g; ++x, _ += 4)
          o.copy(u[x]).applyMatrix4(w, a), o.normal.toArray(f, _), f[_ + 3] = o.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, f;
  }
}
function x0(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Yo ? o.mapping = qi : a === qo && (o.mapping = ji), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Yo || a === qo)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Eu(c.height / 2);
            return l.fromEquirectangularTexture(i, o), e.set(o, l), o.addEventListener("dispose", r), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class eh extends Jc {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Wi = 4, ml = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], oi = 20, vo = /* @__PURE__ */ new eh(), xl = /* @__PURE__ */ new tt();
let bo = null;
const si = (1 + Math.sqrt(5)) / 2, Oi = 1 / si, yl = [
  /* @__PURE__ */ new J(1, 1, 1),
  /* @__PURE__ */ new J(-1, 1, 1),
  /* @__PURE__ */ new J(1, 1, -1),
  /* @__PURE__ */ new J(-1, 1, -1),
  /* @__PURE__ */ new J(0, si, Oi),
  /* @__PURE__ */ new J(0, si, -Oi),
  /* @__PURE__ */ new J(Oi, 0, si),
  /* @__PURE__ */ new J(-Oi, 0, si),
  /* @__PURE__ */ new J(si, Oi, 0),
  /* @__PURE__ */ new J(-si, Oi, 0)
];
class _l {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    bo = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Sl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = bl(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(bo), e.scissorTest = !1, Qr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === qi || e.mapping === ji ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), bo = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: hn,
      minFilter: hn,
      generateMipmaps: !1,
      type: Sr,
      format: yn,
      encoding: xi,
      depthBuffer: !1
    }, r = vl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = vl(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = y0(s)), this._blurMaterial = _0(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ye(this._lodPlanes[0], e);
    this._renderer.compile(t, vo);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new $t(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(xl), h.toneMapping = Bn, h.autoClear = !1;
    const p = new fa({
      name: "PMREM.Background",
      side: un,
      depthWrite: !1,
      depthTest: !1
    }), m = new Ye(new nn(), p);
    let g = !1;
    const f = e.background;
    f ? f.isColor && (p.color.copy(f), e.background = null, g = !0) : (p.color.copy(xl), g = !0);
    for (let v = 0; v < 6; v++) {
      const w = v % 3;
      w === 0 ? (a.up.set(0, c[v], 0), a.lookAt(l[v], 0, 0)) : w === 1 ? (a.up.set(0, 0, c[v]), a.lookAt(0, l[v], 0)) : (a.up.set(0, c[v], 0), a.lookAt(0, 0, l[v]));
      const x = this._cubeSize;
      Qr(r, w * x, v > 2 ? x : 0, x, x), h.setRenderTarget(r), g && h.render(m, a), h.render(e, a);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === qi || e.mapping === ji;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Sl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = bl());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Ye(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Qr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, vo);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = yl[(r - 1) % yl.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Ye(this._lodPlanes[r], l), d = l.uniforms, p = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * oi - 1), g = s / m, f = isFinite(s) ? 1 + Math.floor(h * g) : oi;
    f > oi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${oi}`);
    const v = [];
    let w = 0;
    for (let z = 0; z < oi; ++z) {
      const b = z / g, L = Math.exp(-b * b / 2);
      v.push(L), z === 0 ? w += L : z < f && (w += 2 * L);
    }
    for (let z = 0; z < v.length; z++)
      v[z] = v[z] / w;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = v, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: x } = this;
    d.dTheta.value = m, d.mipInt.value = x - n;
    const _ = this._sizeLods[r], y = 3 * _ * (r > x - Wi ? r - x + Wi : 0), P = 4 * (this._cubeSize - _);
    Qr(t, y, P, 3 * _, 2 * _), c.setRenderTarget(t), c.render(u, vo);
  }
}
function y0(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Wi + 1 + ml.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let c = 1 / a;
    o > i - Wi ? c = ml[o - i + Wi - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, m = 6, g = 3, f = 2, v = 1, w = new Float32Array(g * m * p), x = new Float32Array(f * m * p), _ = new Float32Array(v * m * p);
    for (let P = 0; P < p; P++) {
      const z = P % 3 * 2 / 3 - 1, b = P > 2 ? 0 : -1, L = [
        z,
        b,
        0,
        z + 2 / 3,
        b,
        0,
        z + 2 / 3,
        b + 1,
        0,
        z,
        b,
        0,
        z + 2 / 3,
        b + 1,
        0,
        z,
        b + 1,
        0
      ];
      w.set(L, g * m * P), x.set(d, f * m * P);
      const R = [P, P, P, P, P, P];
      _.set(R, v * m * P);
    }
    const y = new on();
    y.setAttribute("position", new Ht(w, g)), y.setAttribute("uv", new Ht(x, f)), y.setAttribute("faceIndex", new Ht(_, v)), e.push(y), r > Wi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function vl(i, e, t) {
  const n = new yi(i, e, t);
  return n.texture.mapping = Rs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Qr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function _0(i, e, t) {
  const n = new Float32Array(oi), r = new J(0, 1, 0);
  return new _i({
    name: "SphericalGaussianBlur",
    defines: {
      n: oi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: ga(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function bl() {
  return new _i({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ga(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Sl() {
  return new _i({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ga(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ga() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function v0(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Yo || c === qo, h = c === qi || c === ji;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new _l(i)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && r(u)) {
              t === null && (t = new _l(i));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function b0(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function S0(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes)
      e.remove(d.attributes[m]);
    d.removeEventListener("dispose", o), delete r[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const m in d)
      e.update(d[m], 34962);
    const p = u.morphAttributes;
    for (const m in p) {
      const g = p[m];
      for (let f = 0, v = g.length; f < v; f++)
        e.update(g[f], 34962);
    }
  }
  function l(u) {
    const d = [], p = u.index, m = u.attributes.position;
    let g = 0;
    if (p !== null) {
      const w = p.array;
      g = p.version;
      for (let x = 0, _ = w.length; x < _; x += 3) {
        const y = w[x + 0], P = w[x + 1], z = w[x + 2];
        d.push(y, P, P, z, z, y);
      }
    } else {
      const w = m.array;
      g = m.version;
      for (let x = 0, _ = w.length / 3 - 1; x < _; x += 3) {
        const y = x + 0, P = x + 1, z = x + 2;
        d.push(y, P, P, z, z, y);
      }
    }
    const f = new (Gc(d) ? jc : qc)(d, 1);
    f.version = g;
    const v = s.get(u);
    v && e.remove(v), s.set(u, f);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function w0(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, p) {
    i.drawElements(s, p, a, d * c), t.update(p, s, 1);
  }
  function u(d, p, m) {
    if (m === 0)
      return;
    let g, f;
    if (r)
      g = i, f = "drawElementsInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", g === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[f](s, p, a, d * c, m), t.update(p, s, m);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function M0(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function C0(i, e) {
  return i[0] - e[0];
}
function P0(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function T0(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new lt(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u, d) {
    const p = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, f = g !== void 0 ? g.length : 0;
      let v = s.get(h);
      if (v === void 0 || v.count !== f) {
        let G = function() {
          k.dispose(), s.delete(h), h.removeEventListener("dispose", G);
        };
        var m = G;
        v !== void 0 && v.texture.dispose();
        const _ = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, P = h.morphAttributes.color !== void 0, z = h.morphAttributes.position || [], b = h.morphAttributes.normal || [], L = h.morphAttributes.color || [];
        let R = 0;
        _ === !0 && (R = 1), y === !0 && (R = 2), P === !0 && (R = 3);
        let W = h.attributes.position.count * R, V = 1;
        W > e.maxTextureSize && (V = Math.ceil(W / e.maxTextureSize), W = e.maxTextureSize);
        const F = new Float32Array(W * V * 4 * f), k = new Vc(F, W, V, f);
        k.type = li, k.needsUpdate = !0;
        const D = R * 4;
        for (let E = 0; E < f; E++) {
          const M = z[E], X = b[E], ee = L[E], ne = W * V * 4 * E;
          for (let Q = 0; Q < M.count; Q++) {
            const de = Q * D;
            _ === !0 && (o.fromBufferAttribute(M, Q), F[ne + de + 0] = o.x, F[ne + de + 1] = o.y, F[ne + de + 2] = o.z, F[ne + de + 3] = 0), y === !0 && (o.fromBufferAttribute(X, Q), F[ne + de + 4] = o.x, F[ne + de + 5] = o.y, F[ne + de + 6] = o.z, F[ne + de + 7] = 0), P === !0 && (o.fromBufferAttribute(ee, Q), F[ne + de + 8] = o.x, F[ne + de + 9] = o.y, F[ne + de + 10] = o.z, F[ne + de + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        v = {
          count: f,
          texture: k,
          size: new ye(W, V)
        }, s.set(h, v), h.addEventListener("dispose", G);
      }
      let w = 0;
      for (let _ = 0; _ < p.length; _++)
        w += p[_];
      const x = h.morphTargetsRelative ? 1 : 1 - w;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", x), d.getUniforms().setValue(i, "morphTargetInfluences", p), d.getUniforms().setValue(i, "morphTargetsTexture", v.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", v.size);
    } else {
      const g = p === void 0 ? 0 : p.length;
      let f = n[h.id];
      if (f === void 0 || f.length !== g) {
        f = [];
        for (let y = 0; y < g; y++)
          f[y] = [y, 0];
        n[h.id] = f;
      }
      for (let y = 0; y < g; y++) {
        const P = f[y];
        P[0] = y, P[1] = p[y];
      }
      f.sort(P0);
      for (let y = 0; y < 8; y++)
        y < g && f[y][1] ? (a[y][0] = f[y][0], a[y][1] = f[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(C0);
      const v = h.morphAttributes.position, w = h.morphAttributes.normal;
      let x = 0;
      for (let y = 0; y < 8; y++) {
        const P = a[y], z = P[0], b = P[1];
        z !== Number.MAX_SAFE_INTEGER && b ? (v && h.getAttribute("morphTarget" + y) !== v[z] && h.setAttribute("morphTarget" + y, v[z]), w && h.getAttribute("morphNormal" + y) !== w[z] && h.setAttribute("morphNormal" + y, w[z]), r[y] = b, x += b) : (v && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), w && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), r[y] = 0);
      }
      const _ = h.morphTargetsRelative ? 1 : 1 - x;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", _), d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: c
  };
}
function A0(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return r.get(u) !== l && (e.update(u), r.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), u;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const th = /* @__PURE__ */ new Xt(), nh = /* @__PURE__ */ new Vc(), ih = /* @__PURE__ */ new fu(), rh = /* @__PURE__ */ new Kc(), wl = [], Ml = [], Cl = new Float32Array(16), Pl = new Float32Array(9), Tl = new Float32Array(4);
function tr(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = wl[r];
  if (s === void 0 && (s = new Float32Array(r), wl[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function St(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function wt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ns(i, e) {
  let t = Ml[e];
  t === void 0 && (t = new Int32Array(e), Ml[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function E0(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function L0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e))
      return;
    i.uniform2fv(this.addr, e), wt(t, e);
  }
}
function z0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (St(t, e))
      return;
    i.uniform3fv(this.addr, e), wt(t, e);
  }
}
function R0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e))
      return;
    i.uniform4fv(this.addr, e), wt(t, e);
  }
}
function I0(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Tl.set(n), i.uniformMatrix2fv(this.addr, !1, Tl), wt(t, n);
  }
}
function D0(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Pl.set(n), i.uniformMatrix3fv(this.addr, !1, Pl), wt(t, n);
  }
}
function N0(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Cl.set(n), i.uniformMatrix4fv(this.addr, !1, Cl), wt(t, n);
  }
}
function F0(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function k0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e))
      return;
    i.uniform2iv(this.addr, e), wt(t, e);
  }
}
function O0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e))
      return;
    i.uniform3iv(this.addr, e), wt(t, e);
  }
}
function U0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e))
      return;
    i.uniform4iv(this.addr, e), wt(t, e);
  }
}
function B0(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function G0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e))
      return;
    i.uniform2uiv(this.addr, e), wt(t, e);
  }
}
function W0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e))
      return;
    i.uniform3uiv(this.addr, e), wt(t, e);
  }
}
function $0(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e))
      return;
    i.uniform4uiv(this.addr, e), wt(t, e);
  }
}
function H0(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || th, r);
}
function V0(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ih, r);
}
function X0(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || rh, r);
}
function Y0(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || nh, r);
}
function q0(i) {
  switch (i) {
    case 5126:
      return E0;
    case 35664:
      return L0;
    case 35665:
      return z0;
    case 35666:
      return R0;
    case 35674:
      return I0;
    case 35675:
      return D0;
    case 35676:
      return N0;
    case 5124:
    case 35670:
      return F0;
    case 35667:
    case 35671:
      return k0;
    case 35668:
    case 35672:
      return O0;
    case 35669:
    case 35673:
      return U0;
    case 5125:
      return B0;
    case 36294:
      return G0;
    case 36295:
      return W0;
    case 36296:
      return $0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return H0;
    case 35679:
    case 36299:
    case 36307:
      return V0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return X0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Y0;
  }
}
function j0(i, e) {
  i.uniform1fv(this.addr, e);
}
function Z0(i, e) {
  const t = tr(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function J0(i, e) {
  const t = tr(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function K0(i, e) {
  const t = tr(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Q0(i, e) {
  const t = tr(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function eg(i, e) {
  const t = tr(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function tg(i, e) {
  const t = tr(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ng(i, e) {
  i.uniform1iv(this.addr, e);
}
function ig(i, e) {
  i.uniform2iv(this.addr, e);
}
function rg(i, e) {
  i.uniform3iv(this.addr, e);
}
function sg(i, e) {
  i.uniform4iv(this.addr, e);
}
function og(i, e) {
  i.uniform1uiv(this.addr, e);
}
function ag(i, e) {
  i.uniform2uiv(this.addr, e);
}
function lg(i, e) {
  i.uniform3uiv(this.addr, e);
}
function cg(i, e) {
  i.uniform4uiv(this.addr, e);
}
function hg(i, e, t) {
  const n = this.cache, r = e.length, s = Ns(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), wt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || th, s[o]);
}
function dg(i, e, t) {
  const n = this.cache, r = e.length, s = Ns(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), wt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || ih, s[o]);
}
function ug(i, e, t) {
  const n = this.cache, r = e.length, s = Ns(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), wt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || rh, s[o]);
}
function fg(i, e, t) {
  const n = this.cache, r = e.length, s = Ns(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), wt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || nh, s[o]);
}
function pg(i) {
  switch (i) {
    case 5126:
      return j0;
    case 35664:
      return Z0;
    case 35665:
      return J0;
    case 35666:
      return K0;
    case 35674:
      return Q0;
    case 35675:
      return eg;
    case 35676:
      return tg;
    case 5124:
    case 35670:
      return ng;
    case 35667:
    case 35671:
      return ig;
    case 35668:
    case 35672:
      return rg;
    case 35669:
    case 35673:
      return sg;
    case 5125:
      return og;
    case 36294:
      return ag;
    case 36295:
      return lg;
    case 36296:
      return cg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hg;
    case 35679:
    case 36299:
    case 36307:
      return dg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ug;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return fg;
  }
}
class gg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = q0(t.type);
  }
}
class mg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = pg(t.type);
  }
}
class xg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const So = /(\w+)(\])?(\[|\.)?/g;
function Al(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function yg(i, e, t) {
  const n = i.name, r = n.length;
  for (So.lastIndex = 0; ; ) {
    const s = So.exec(n), o = So.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      Al(t, l === void 0 ? new gg(a, i, e) : new mg(a, i, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new xg(a), Al(t, u)), t = u;
    }
  }
}
class xs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      yg(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function El(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let _g = 0;
function vg(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function bg(i) {
  switch (i) {
    case xi:
      return ["Linear", "( value )"];
    case rt:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", i), ["Linear", "( value )"];
  }
}
function Ll(i, e, t) {
  const n = i.getShaderParameter(e, 35713), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + vg(i.getShaderSource(e), o);
  } else
    return r;
}
function Sg(i, e) {
  const t = bg(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function wg(i, e) {
  let t;
  switch (e) {
    case Bd:
      t = "Linear";
      break;
    case Gd:
      t = "Reinhard";
      break;
    case Wd:
      t = "OptimizedCineon";
      break;
    case $d:
      t = "ACESFilmic";
      break;
    case Hd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Mg(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.tangentSpaceNormalMap || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(gr).join(`
`);
}
function Cg(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Pg(i, e) {
  const t = {}, n = i.getProgramParameter(e, 35721);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function gr(i) {
  return i !== "";
}
function zl(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Rl(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Tg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ko(i) {
  return i.replace(Tg, Ag);
}
function Ag(i, e) {
  const t = We[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ko(t);
}
const Eg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Il(i) {
  return i.replace(Eg, Lg);
}
function Lg(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Dl(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function zg(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Dc ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === yd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === pr && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Rg(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case qi:
      case ji:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Rs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ig(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ji:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Dg(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case kc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Od:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ud:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Ng(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Fg(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = zg(t), l = Rg(t), h = Ig(t), u = Dg(t), d = Ng(t), p = t.isWebGL2 ? "" : Mg(t), m = Cg(s), g = r.createProgram();
  let f, v, w = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    m
  ].filter(gr).join(`
`), f.length > 0 && (f += `
`), v = [
    p,
    m
  ].filter(gr).join(`
`), v.length > 0 && (v += `
`)) : (f = [
    Dl(t),
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(gr).join(`
`), v = [
    p,
    Dl(t),
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Bn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Bn ? We.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Bn ? wg("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    We.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Sg("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(gr).join(`
`)), o = Ko(o), o = zl(o, t), o = Rl(o, t), a = Ko(a), a = zl(a, t), a = Rl(a, t), o = Il(o), a = Il(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (w = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, v = [
    "#define varying in",
    t.glslVersion === il ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === il ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + v);
  const x = w + f + o, _ = w + v + a, y = El(r, 35633, x), P = El(r, 35632, _);
  if (r.attachShader(g, y), r.attachShader(g, P), t.index0AttributeName !== void 0 ? r.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(g, 0, "position"), r.linkProgram(g), i.debug.checkShaderErrors) {
    const L = r.getProgramInfoLog(g).trim(), R = r.getShaderInfoLog(y).trim(), W = r.getShaderInfoLog(P).trim();
    let V = !0, F = !0;
    if (r.getProgramParameter(g, 35714) === !1) {
      V = !1;
      const k = Ll(r, y, "vertex"), D = Ll(r, P, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(g, 35715) + `

Program Info Log: ` + L + `
` + k + `
` + D
      );
    } else
      L !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", L) : (R === "" || W === "") && (F = !1);
    F && (this.diagnostics = {
      runnable: V,
      programLog: L,
      vertexShader: {
        log: R,
        prefix: f
      },
      fragmentShader: {
        log: W,
        prefix: v
      }
    });
  }
  r.deleteShader(y), r.deleteShader(P);
  let z;
  this.getUniforms = function() {
    return z === void 0 && (z = new xs(r, g)), z;
  };
  let b;
  return this.getAttributes = function() {
    return b === void 0 && (b = Pg(r, g)), b;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(g), this.program = void 0;
  }, this.name = t.shaderName, this.id = _g++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = y, this.fragmentShader = P, this;
}
let kg = 0;
class Og {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Ug(e), t.set(e, n)), n;
  }
}
class Ug {
  constructor(e) {
    this.id = kg++, this.code = e, this.usedTimes = 0;
  }
}
function Bg(i, e, t, n, r, s, o) {
  const a = new Yc(), c = new Og(), l = [], h = r.isWebGL2, u = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let p = r.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(b, L, R, W, V) {
    const F = W.fog, k = V.geometry, D = b.isMeshStandardMaterial ? W.environment : null, G = (b.isMeshStandardMaterial ? t : e).get(b.envMap || D), E = G && G.mapping === Rs ? G.image.height : null, M = m[b.type];
    b.precision !== null && (p = r.getMaxPrecision(b.precision), p !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", p, "instead."));
    const X = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, ee = X !== void 0 ? X.length : 0;
    let ne = 0;
    k.morphAttributes.position !== void 0 && (ne = 1), k.morphAttributes.normal !== void 0 && (ne = 2), k.morphAttributes.color !== void 0 && (ne = 3);
    let Q, de, T, C;
    if (M) {
      const fe = Sn[M];
      Q = fe.vertexShader, de = fe.fragmentShader;
    } else
      Q = b.vertexShader, de = b.fragmentShader, c.update(b), T = c.getVertexShaderID(b), C = c.getFragmentShaderID(b);
    const S = i.getRenderTarget(), A = b.alphaTest > 0, U = b.clearcoat > 0, Z = b.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: M,
      shaderName: b.type,
      vertexShader: Q,
      fragmentShader: de,
      defines: b.defines,
      customVertexShaderID: T,
      customFragmentShaderID: C,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: p,
      instancing: V.isInstancedMesh === !0,
      instancingColor: V.isInstancedMesh === !0 && V.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: S === null ? i.outputEncoding : S.isXRRenderTarget === !0 ? S.texture.encoding : xi,
      map: !!b.map,
      matcap: !!b.matcap,
      envMap: !!G,
      envMapMode: G && G.mapping,
      envMapCubeUVHeight: E,
      lightMap: !!b.lightMap,
      aoMap: !!b.aoMap,
      emissiveMap: !!b.emissiveMap,
      bumpMap: !!b.bumpMap,
      normalMap: !!b.normalMap,
      objectSpaceNormalMap: b.normalMapType === cu,
      tangentSpaceNormalMap: b.normalMapType === Bc,
      decodeVideoTexture: !!b.map && b.map.isVideoTexture === !0 && b.map.encoding === rt,
      clearcoat: U,
      clearcoatMap: U && !!b.clearcoatMap,
      clearcoatRoughnessMap: U && !!b.clearcoatRoughnessMap,
      clearcoatNormalMap: U && !!b.clearcoatNormalMap,
      iridescence: Z,
      iridescenceMap: Z && !!b.iridescenceMap,
      iridescenceThicknessMap: Z && !!b.iridescenceThicknessMap,
      displacementMap: !!b.displacementMap,
      roughnessMap: !!b.roughnessMap,
      metalnessMap: !!b.metalnessMap,
      specularMap: !!b.specularMap,
      specularIntensityMap: !!b.specularIntensityMap,
      specularColorMap: !!b.specularColorMap,
      opaque: b.transparent === !1 && b.blending === Hi,
      alphaMap: !!b.alphaMap,
      alphaTest: A,
      gradientMap: !!b.gradientMap,
      sheen: b.sheen > 0,
      sheenColorMap: !!b.sheenColorMap,
      sheenRoughnessMap: !!b.sheenRoughnessMap,
      transmission: b.transmission > 0,
      transmissionMap: !!b.transmissionMap,
      thicknessMap: !!b.thicknessMap,
      combine: b.combine,
      vertexTangents: !!b.normalMap && !!k.attributes.tangent,
      vertexColors: b.vertexColors,
      vertexAlphas: b.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
      vertexUvs: !!b.map || !!b.bumpMap || !!b.normalMap || !!b.specularMap || !!b.alphaMap || !!b.emissiveMap || !!b.roughnessMap || !!b.metalnessMap || !!b.clearcoatMap || !!b.clearcoatRoughnessMap || !!b.clearcoatNormalMap || !!b.iridescenceMap || !!b.iridescenceThicknessMap || !!b.displacementMap || !!b.transmissionMap || !!b.thicknessMap || !!b.specularIntensityMap || !!b.specularColorMap || !!b.sheenColorMap || !!b.sheenRoughnessMap,
      uvsVertexOnly: !(b.map || b.bumpMap || b.normalMap || b.specularMap || b.alphaMap || b.emissiveMap || b.roughnessMap || b.metalnessMap || b.clearcoatNormalMap || b.iridescenceMap || b.iridescenceThicknessMap || b.transmission > 0 || b.transmissionMap || b.thicknessMap || b.specularIntensityMap || b.specularColorMap || b.sheen > 0 || b.sheenColorMap || b.sheenRoughnessMap) && !!b.displacementMap,
      fog: !!F,
      useFog: b.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: !!b.flatShading,
      sizeAttenuation: b.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: ee,
      morphTextureStride: ne,
      numDirLights: L.directional.length,
      numPointLights: L.point.length,
      numSpotLights: L.spot.length,
      numSpotLightMaps: L.spotLightMap.length,
      numRectAreaLights: L.rectArea.length,
      numHemiLights: L.hemi.length,
      numDirLightShadows: L.directionalShadowMap.length,
      numPointLightShadows: L.pointShadowMap.length,
      numSpotLightShadows: L.spotShadowMap.length,
      numSpotLightShadowsWithMaps: L.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: i.shadowMap.enabled && R.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: b.toneMapped ? i.toneMapping : Bn,
      physicallyCorrectLights: i.physicallyCorrectLights,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === ua,
      flipSided: b.side === un,
      useDepthPacking: !!b.depthPacking,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionDerivatives: b.extensions && b.extensions.derivatives,
      extensionFragDepth: b.extensions && b.extensions.fragDepth,
      extensionDrawBuffers: b.extensions && b.extensions.drawBuffers,
      extensionShaderTextureLOD: b.extensions && b.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: b.customProgramCacheKey()
    };
  }
  function f(b) {
    const L = [];
    if (b.shaderID ? L.push(b.shaderID) : (L.push(b.customVertexShaderID), L.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (const R in b.defines)
        L.push(R), L.push(b.defines[R]);
    return b.isRawShaderMaterial === !1 && (v(L, b), w(L, b), L.push(i.outputEncoding)), L.push(b.customProgramCacheKey), L.join();
  }
  function v(b, L) {
    b.push(L.precision), b.push(L.outputEncoding), b.push(L.envMapMode), b.push(L.envMapCubeUVHeight), b.push(L.combine), b.push(L.vertexUvs), b.push(L.fogExp2), b.push(L.sizeAttenuation), b.push(L.morphTargetsCount), b.push(L.morphAttributeCount), b.push(L.numDirLights), b.push(L.numPointLights), b.push(L.numSpotLights), b.push(L.numSpotLightMaps), b.push(L.numHemiLights), b.push(L.numRectAreaLights), b.push(L.numDirLightShadows), b.push(L.numPointLightShadows), b.push(L.numSpotLightShadows), b.push(L.numSpotLightShadowsWithMaps), b.push(L.shadowMapType), b.push(L.toneMapping), b.push(L.numClippingPlanes), b.push(L.numClipIntersection), b.push(L.depthPacking);
  }
  function w(b, L) {
    a.disableAll(), L.isWebGL2 && a.enable(0), L.supportsVertexTextures && a.enable(1), L.instancing && a.enable(2), L.instancingColor && a.enable(3), L.map && a.enable(4), L.matcap && a.enable(5), L.envMap && a.enable(6), L.lightMap && a.enable(7), L.aoMap && a.enable(8), L.emissiveMap && a.enable(9), L.bumpMap && a.enable(10), L.normalMap && a.enable(11), L.objectSpaceNormalMap && a.enable(12), L.tangentSpaceNormalMap && a.enable(13), L.clearcoat && a.enable(14), L.clearcoatMap && a.enable(15), L.clearcoatRoughnessMap && a.enable(16), L.clearcoatNormalMap && a.enable(17), L.iridescence && a.enable(18), L.iridescenceMap && a.enable(19), L.iridescenceThicknessMap && a.enable(20), L.displacementMap && a.enable(21), L.specularMap && a.enable(22), L.roughnessMap && a.enable(23), L.metalnessMap && a.enable(24), L.gradientMap && a.enable(25), L.alphaMap && a.enable(26), L.alphaTest && a.enable(27), L.vertexColors && a.enable(28), L.vertexAlphas && a.enable(29), L.vertexUvs && a.enable(30), L.vertexTangents && a.enable(31), L.uvsVertexOnly && a.enable(32), b.push(a.mask), a.disableAll(), L.fog && a.enable(0), L.useFog && a.enable(1), L.flatShading && a.enable(2), L.logarithmicDepthBuffer && a.enable(3), L.skinning && a.enable(4), L.morphTargets && a.enable(5), L.morphNormals && a.enable(6), L.morphColors && a.enable(7), L.premultipliedAlpha && a.enable(8), L.shadowMapEnabled && a.enable(9), L.physicallyCorrectLights && a.enable(10), L.doubleSided && a.enable(11), L.flipSided && a.enable(12), L.useDepthPacking && a.enable(13), L.dithering && a.enable(14), L.specularIntensityMap && a.enable(15), L.specularColorMap && a.enable(16), L.transmission && a.enable(17), L.transmissionMap && a.enable(18), L.thicknessMap && a.enable(19), L.sheen && a.enable(20), L.sheenColorMap && a.enable(21), L.sheenRoughnessMap && a.enable(22), L.decodeVideoTexture && a.enable(23), L.opaque && a.enable(24), b.push(a.mask);
  }
  function x(b) {
    const L = m[b.type];
    let R;
    if (L) {
      const W = Sn[L];
      R = Cu.clone(W.uniforms);
    } else
      R = b.uniforms;
    return R;
  }
  function _(b, L) {
    let R;
    for (let W = 0, V = l.length; W < V; W++) {
      const F = l[W];
      if (F.cacheKey === L) {
        R = F, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new Fg(i, L, b, s), l.push(R)), R;
  }
  function y(b) {
    if (--b.usedTimes === 0) {
      const L = l.indexOf(b);
      l[L] = l[l.length - 1], l.pop(), b.destroy();
    }
  }
  function P(b) {
    c.remove(b);
  }
  function z() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: f,
    getUniforms: x,
    acquireProgram: _,
    releaseProgram: y,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: z
  };
}
function Gg() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function Wg(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Nl(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Fl() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(u, d, p, m, g, f) {
    let v = i[e];
    return v === void 0 ? (v = {
      id: u.id,
      object: u,
      geometry: d,
      material: p,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: g,
      group: f
    }, i[e] = v) : (v.id = u.id, v.object = u, v.geometry = d, v.material = p, v.groupOrder = m, v.renderOrder = u.renderOrder, v.z = g, v.group = f), e++, v;
  }
  function a(u, d, p, m, g, f) {
    const v = o(u, d, p, m, g, f);
    p.transmission > 0 ? n.push(v) : p.transparent === !0 ? r.push(v) : t.push(v);
  }
  function c(u, d, p, m, g, f) {
    const v = o(u, d, p, m, g, f);
    p.transmission > 0 ? n.unshift(v) : p.transparent === !0 ? r.unshift(v) : t.unshift(v);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Wg), n.length > 1 && n.sort(d || Nl), r.length > 1 && r.sort(d || Nl);
  }
  function h() {
    for (let u = e, d = i.length; u < d; u++) {
      const p = i[u];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function $g() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Fl(), i.set(n, [o])) : r >= s.length ? (o = new Fl(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Hg() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new J(),
            color: new tt()
          };
          break;
        case "SpotLight":
          t = {
            position: new J(),
            direction: new J(),
            color: new tt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new J(),
            color: new tt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new J(),
            skyColor: new tt(),
            groundColor: new tt()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new tt(),
            position: new J(),
            halfWidth: new J(),
            halfHeight: new J()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Vg() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Xg = 0;
function Yg(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function qg(i, e) {
  const t = new Hg(), n = Vg(), r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    r.probe.push(new J());
  const s = new J(), o = new ut(), a = new ut();
  function c(h, u) {
    let d = 0, p = 0, m = 0;
    for (let W = 0; W < 9; W++)
      r.probe[W].set(0, 0, 0);
    let g = 0, f = 0, v = 0, w = 0, x = 0, _ = 0, y = 0, P = 0, z = 0, b = 0;
    h.sort(Yg);
    const L = u !== !0 ? Math.PI : 1;
    for (let W = 0, V = h.length; W < V; W++) {
      const F = h[W], k = F.color, D = F.intensity, G = F.distance, E = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        d += k.r * D * L, p += k.g * D * L, m += k.b * D * L;
      else if (F.isLightProbe)
        for (let M = 0; M < 9; M++)
          r.probe[M].addScaledVector(F.sh.coefficients[M], D);
      else if (F.isDirectionalLight) {
        const M = t.get(F);
        if (M.color.copy(F.color).multiplyScalar(F.intensity * L), F.castShadow) {
          const X = F.shadow, ee = n.get(F);
          ee.shadowBias = X.bias, ee.shadowNormalBias = X.normalBias, ee.shadowRadius = X.radius, ee.shadowMapSize = X.mapSize, r.directionalShadow[g] = ee, r.directionalShadowMap[g] = E, r.directionalShadowMatrix[g] = F.shadow.matrix, _++;
        }
        r.directional[g] = M, g++;
      } else if (F.isSpotLight) {
        const M = t.get(F);
        M.position.setFromMatrixPosition(F.matrixWorld), M.color.copy(k).multiplyScalar(D * L), M.distance = G, M.coneCos = Math.cos(F.angle), M.penumbraCos = Math.cos(F.angle * (1 - F.penumbra)), M.decay = F.decay, r.spot[v] = M;
        const X = F.shadow;
        if (F.map && (r.spotLightMap[z] = F.map, z++, X.updateMatrices(F), F.castShadow && b++), r.spotLightMatrix[v] = X.matrix, F.castShadow) {
          const ee = n.get(F);
          ee.shadowBias = X.bias, ee.shadowNormalBias = X.normalBias, ee.shadowRadius = X.radius, ee.shadowMapSize = X.mapSize, r.spotShadow[v] = ee, r.spotShadowMap[v] = E, P++;
        }
        v++;
      } else if (F.isRectAreaLight) {
        const M = t.get(F);
        M.color.copy(k).multiplyScalar(D), M.halfWidth.set(F.width * 0.5, 0, 0), M.halfHeight.set(0, F.height * 0.5, 0), r.rectArea[w] = M, w++;
      } else if (F.isPointLight) {
        const M = t.get(F);
        if (M.color.copy(F.color).multiplyScalar(F.intensity * L), M.distance = F.distance, M.decay = F.decay, F.castShadow) {
          const X = F.shadow, ee = n.get(F);
          ee.shadowBias = X.bias, ee.shadowNormalBias = X.normalBias, ee.shadowRadius = X.radius, ee.shadowMapSize = X.mapSize, ee.shadowCameraNear = X.camera.near, ee.shadowCameraFar = X.camera.far, r.pointShadow[f] = ee, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = F.shadow.matrix, y++;
        }
        r.point[f] = M, f++;
      } else if (F.isHemisphereLight) {
        const M = t.get(F);
        M.skyColor.copy(F.color).multiplyScalar(D * L), M.groundColor.copy(F.groundColor).multiplyScalar(D * L), r.hemi[x] = M, x++;
      }
    }
    w > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Le.LTC_FLOAT_1, r.rectAreaLTC2 = Le.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = Le.LTC_HALF_1, r.rectAreaLTC2 = Le.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = p, r.ambient[2] = m;
    const R = r.hash;
    (R.directionalLength !== g || R.pointLength !== f || R.spotLength !== v || R.rectAreaLength !== w || R.hemiLength !== x || R.numDirectionalShadows !== _ || R.numPointShadows !== y || R.numSpotShadows !== P || R.numSpotMaps !== z) && (r.directional.length = g, r.spot.length = v, r.rectArea.length = w, r.point.length = f, r.hemi.length = x, r.directionalShadow.length = _, r.directionalShadowMap.length = _, r.pointShadow.length = y, r.pointShadowMap.length = y, r.spotShadow.length = P, r.spotShadowMap.length = P, r.directionalShadowMatrix.length = _, r.pointShadowMatrix.length = y, r.spotLightMatrix.length = P + z - b, r.spotLightMap.length = z, r.numSpotLightShadowsWithMaps = b, R.directionalLength = g, R.pointLength = f, R.spotLength = v, R.rectAreaLength = w, R.hemiLength = x, R.numDirectionalShadows = _, R.numPointShadows = y, R.numSpotShadows = P, R.numSpotMaps = z, r.version = Xg++);
  }
  function l(h, u) {
    let d = 0, p = 0, m = 0, g = 0, f = 0;
    const v = u.matrixWorldInverse;
    for (let w = 0, x = h.length; w < x; w++) {
      const _ = h[w];
      if (_.isDirectionalLight) {
        const y = r.directional[d];
        y.direction.setFromMatrixPosition(_.matrixWorld), s.setFromMatrixPosition(_.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(v), d++;
      } else if (_.isSpotLight) {
        const y = r.spot[m];
        y.position.setFromMatrixPosition(_.matrixWorld), y.position.applyMatrix4(v), y.direction.setFromMatrixPosition(_.matrixWorld), s.setFromMatrixPosition(_.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(v), m++;
      } else if (_.isRectAreaLight) {
        const y = r.rectArea[g];
        y.position.setFromMatrixPosition(_.matrixWorld), y.position.applyMatrix4(v), a.identity(), o.copy(_.matrixWorld), o.premultiply(v), a.extractRotation(o), y.halfWidth.set(_.width * 0.5, 0, 0), y.halfHeight.set(0, _.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (_.isPointLight) {
        const y = r.point[p];
        y.position.setFromMatrixPosition(_.matrixWorld), y.position.applyMatrix4(v), p++;
      } else if (_.isHemisphereLight) {
        const y = r.hemi[f];
        y.direction.setFromMatrixPosition(_.matrixWorld), y.direction.transformDirection(v), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: r
  };
}
function kl(i, e) {
  const t = new qg(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    r.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function jg(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new kl(i, e), t.set(s, [c])) : o >= a.length ? (c = new kl(i, e), a.push(c)) : c = a[o], c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Zg extends er {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = au, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Jg extends er {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new J(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Kg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Qg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function em(i, e, t) {
  let n = new pa();
  const r = new ye(), s = new ye(), o = new lt(), a = new Zg({ depthPacking: lu }), c = new Jg(), l = {}, h = t.maxTextureSize, u = { 0: un, 1: gi, 2: ua }, d = new _i({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ye() },
      radius: { value: 4 }
    },
    vertexShader: Kg,
    fragmentShader: Qg
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const m = new on();
  m.setAttribute(
    "position",
    new Ht(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Ye(m, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Dc, this.render = function(_, y, P) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || _.length === 0)
      return;
    const z = i.getRenderTarget(), b = i.getActiveCubeFace(), L = i.getActiveMipmapLevel(), R = i.state;
    R.setBlending(Vn), R.buffers.color.setClear(1, 1, 1, 1), R.buffers.depth.setTest(!0), R.setScissorTest(!1);
    for (let W = 0, V = _.length; W < V; W++) {
      const F = _[W], k = F.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", F, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1)
        continue;
      r.copy(k.mapSize);
      const D = k.getFrameExtents();
      if (r.multiply(D), s.copy(k.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / D.x), r.x = s.x * D.x, k.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / D.y), r.y = s.y * D.y, k.mapSize.y = s.y)), k.map === null) {
        const E = this.type !== pr ? { minFilter: kt, magFilter: kt } : {};
        k.map = new yi(r.x, r.y, E), k.map.texture.name = F.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const G = k.getViewportCount();
      for (let E = 0; E < G; E++) {
        const M = k.getViewport(E);
        o.set(
          s.x * M.x,
          s.y * M.y,
          s.x * M.z,
          s.y * M.w
        ), R.viewport(o), k.updateMatrices(F, E), n = k.getFrustum(), x(y, P, k.camera, F, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === pr && v(k, P), k.needsUpdate = !1;
    }
    f.needsUpdate = !1, i.setRenderTarget(z, b, L);
  };
  function v(_, y) {
    const P = e.update(g);
    d.defines.VSM_SAMPLES !== _.blurSamples && (d.defines.VSM_SAMPLES = _.blurSamples, p.defines.VSM_SAMPLES = _.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), _.mapPass === null && (_.mapPass = new yi(r.x, r.y)), d.uniforms.shadow_pass.value = _.map.texture, d.uniforms.resolution.value = _.mapSize, d.uniforms.radius.value = _.radius, i.setRenderTarget(_.mapPass), i.clear(), i.renderBufferDirect(y, null, P, d, g, null), p.uniforms.shadow_pass.value = _.mapPass.texture, p.uniforms.resolution.value = _.mapSize, p.uniforms.radius.value = _.radius, i.setRenderTarget(_.map), i.clear(), i.renderBufferDirect(y, null, P, p, g, null);
  }
  function w(_, y, P, z, b, L) {
    let R = null;
    const W = P.isPointLight === !0 ? _.customDistanceMaterial : _.customDepthMaterial;
    if (W !== void 0)
      R = W;
    else if (R = P.isPointLight === !0 ? c : a, i.localClippingEnabled && y.clipShadows === !0 && Array.isArray(y.clippingPlanes) && y.clippingPlanes.length !== 0 || y.displacementMap && y.displacementScale !== 0 || y.alphaMap && y.alphaTest > 0 || y.map && y.alphaTest > 0) {
      const V = R.uuid, F = y.uuid;
      let k = l[V];
      k === void 0 && (k = {}, l[V] = k);
      let D = k[F];
      D === void 0 && (D = R.clone(), k[F] = D), R = D;
    }
    return R.visible = y.visible, R.wireframe = y.wireframe, L === pr ? R.side = y.shadowSide !== null ? y.shadowSide : y.side : R.side = y.shadowSide !== null ? y.shadowSide : u[y.side], R.alphaMap = y.alphaMap, R.alphaTest = y.alphaTest, R.map = y.map, R.clipShadows = y.clipShadows, R.clippingPlanes = y.clippingPlanes, R.clipIntersection = y.clipIntersection, R.displacementMap = y.displacementMap, R.displacementScale = y.displacementScale, R.displacementBias = y.displacementBias, R.wireframeLinewidth = y.wireframeLinewidth, R.linewidth = y.linewidth, P.isPointLight === !0 && R.isMeshDistanceMaterial === !0 && (R.referencePosition.setFromMatrixPosition(P.matrixWorld), R.nearDistance = z, R.farDistance = b), R;
  }
  function x(_, y, P, z, b) {
    if (_.visible === !1)
      return;
    if (_.layers.test(y.layers) && (_.isMesh || _.isLine || _.isPoints) && (_.castShadow || _.receiveShadow && b === pr) && (!_.frustumCulled || n.intersectsObject(_))) {
      _.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, _.matrixWorld);
      const W = e.update(_), V = _.material;
      if (Array.isArray(V)) {
        const F = W.groups;
        for (let k = 0, D = F.length; k < D; k++) {
          const G = F[k], E = V[G.materialIndex];
          if (E && E.visible) {
            const M = w(_, E, z, P.near, P.far, b);
            i.renderBufferDirect(P, null, W, M, _, G);
          }
        }
      } else if (V.visible) {
        const F = w(_, V, z, P.near, P.far, b);
        i.renderBufferDirect(P, null, W, F, _, null);
      }
    }
    const R = _.children;
    for (let W = 0, V = R.length; W < V; W++)
      x(R[W], y, P, z, b);
  }
}
function tm(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let ie = !1;
    const pe = new lt();
    let we = null;
    const De = new lt(0, 0, 0, 0);
    return {
      setMask: function(Ue) {
        we !== Ue && !ie && (i.colorMask(Ue, Ue, Ue, Ue), we = Ue);
      },
      setLocked: function(Ue) {
        ie = Ue;
      },
      setClear: function(Ue, Je, gt, Mt, Ln) {
        Ln === !0 && (Ue *= Mt, Je *= Mt, gt *= Mt), pe.set(Ue, Je, gt, Mt), De.equals(pe) === !1 && (i.clearColor(Ue, Je, gt, Mt), De.copy(pe));
      },
      reset: function() {
        ie = !1, we = null, De.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let ie = !1, pe = null, we = null, De = null;
    return {
      setTest: function(Ue) {
        Ue ? A(2929) : U(2929);
      },
      setMask: function(Ue) {
        pe !== Ue && !ie && (i.depthMask(Ue), pe = Ue);
      },
      setFunc: function(Ue) {
        if (we !== Ue) {
          switch (Ue) {
            case zd:
              i.depthFunc(512);
              break;
            case Rd:
              i.depthFunc(519);
              break;
            case Id:
              i.depthFunc(513);
              break;
            case Xo:
              i.depthFunc(515);
              break;
            case Dd:
              i.depthFunc(514);
              break;
            case Nd:
              i.depthFunc(518);
              break;
            case Fd:
              i.depthFunc(516);
              break;
            case kd:
              i.depthFunc(517);
              break;
            default:
              i.depthFunc(515);
          }
          we = Ue;
        }
      },
      setLocked: function(Ue) {
        ie = Ue;
      },
      setClear: function(Ue) {
        De !== Ue && (i.clearDepth(Ue), De = Ue);
      },
      reset: function() {
        ie = !1, pe = null, we = null, De = null;
      }
    };
  }
  function o() {
    let ie = !1, pe = null, we = null, De = null, Ue = null, Je = null, gt = null, Mt = null, Ln = null;
    return {
      setTest: function(Ie) {
        ie || (Ie ? A(2960) : U(2960));
      },
      setMask: function(Ie) {
        pe !== Ie && !ie && (i.stencilMask(Ie), pe = Ie);
      },
      setFunc: function(Ie, an, Bt) {
        (we !== Ie || De !== an || Ue !== Bt) && (i.stencilFunc(Ie, an, Bt), we = Ie, De = an, Ue = Bt);
      },
      setOp: function(Ie, an, Bt) {
        (Je !== Ie || gt !== an || Mt !== Bt) && (i.stencilOp(Ie, an, Bt), Je = Ie, gt = an, Mt = Bt);
      },
      setLocked: function(Ie) {
        ie = Ie;
      },
      setClear: function(Ie) {
        Ln !== Ie && (i.clearStencil(Ie), Ln = Ie);
      },
      reset: function() {
        ie = !1, pe = null, we = null, De = null, Ue = null, Je = null, gt = null, Mt = null, Ln = null;
      }
    };
  }
  const a = new r(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), g = [], f = null, v = !1, w = null, x = null, _ = null, y = null, P = null, z = null, b = null, L = !1, R = null, W = null, V = null, F = null, k = null;
  const D = i.getParameter(35661);
  let G = !1, E = 0;
  const M = i.getParameter(7938);
  M.indexOf("WebGL") !== -1 ? (E = parseFloat(/^WebGL (\d)/.exec(M)[1]), G = E >= 1) : M.indexOf("OpenGL ES") !== -1 && (E = parseFloat(/^OpenGL ES (\d)/.exec(M)[1]), G = E >= 2);
  let X = null, ee = {};
  const ne = i.getParameter(3088), Q = i.getParameter(2978), de = new lt().fromArray(ne), T = new lt().fromArray(Q);
  function C(ie, pe, we) {
    const De = new Uint8Array(4), Ue = i.createTexture();
    i.bindTexture(ie, Ue), i.texParameteri(ie, 10241, 9728), i.texParameteri(ie, 10240, 9728);
    for (let Je = 0; Je < we; Je++)
      i.texImage2D(pe + Je, 0, 6408, 1, 1, 0, 6408, 5121, De);
    return Ue;
  }
  const S = {};
  S[3553] = C(3553, 3553, 1), S[34067] = C(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), A(2929), c.setFunc(Xo), le(!1), _e(Aa), A(2884), j(Vn);
  function A(ie) {
    d[ie] !== !0 && (i.enable(ie), d[ie] = !0);
  }
  function U(ie) {
    d[ie] !== !1 && (i.disable(ie), d[ie] = !1);
  }
  function Z(ie, pe) {
    return p[ie] !== pe ? (i.bindFramebuffer(ie, pe), p[ie] = pe, n && (ie === 36009 && (p[36160] = pe), ie === 36160 && (p[36009] = pe)), !0) : !1;
  }
  function $(ie, pe) {
    let we = g, De = !1;
    if (ie)
      if (we = m.get(pe), we === void 0 && (we = [], m.set(pe, we)), ie.isWebGLMultipleRenderTargets) {
        const Ue = ie.texture;
        if (we.length !== Ue.length || we[0] !== 36064) {
          for (let Je = 0, gt = Ue.length; Je < gt; Je++)
            we[Je] = 36064 + Je;
          we.length = Ue.length, De = !0;
        }
      } else
        we[0] !== 36064 && (we[0] = 36064, De = !0);
    else
      we[0] !== 1029 && (we[0] = 1029, De = !0);
    De && (t.isWebGL2 ? i.drawBuffers(we) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we));
  }
  function fe(ie) {
    return f !== ie ? (i.useProgram(ie), f = ie, !0) : !1;
  }
  const q = {
    [Gi]: 32774,
    [vd]: 32778,
    [bd]: 32779
  };
  if (n)
    q[Ra] = 32775, q[Ia] = 32776;
  else {
    const ie = e.get("EXT_blend_minmax");
    ie !== null && (q[Ra] = ie.MIN_EXT, q[Ia] = ie.MAX_EXT);
  }
  const K = {
    [Sd]: 0,
    [wd]: 1,
    [Md]: 768,
    [Nc]: 770,
    [Ld]: 776,
    [Ad]: 774,
    [Pd]: 772,
    [Cd]: 769,
    [Fc]: 771,
    [Ed]: 775,
    [Td]: 773
  };
  function j(ie, pe, we, De, Ue, Je, gt, Mt) {
    if (ie === Vn) {
      v === !0 && (U(3042), v = !1);
      return;
    }
    if (v === !1 && (A(3042), v = !0), ie !== _d) {
      if (ie !== w || Mt !== L) {
        if ((x !== Gi || P !== Gi) && (i.blendEquation(32774), x = Gi, P = Gi), Mt)
          switch (ie) {
            case Hi:
              i.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Ea:
              i.blendFunc(1, 1);
              break;
            case La:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case za:
              i.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", ie);
              break;
          }
        else
          switch (ie) {
            case Hi:
              i.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Ea:
              i.blendFunc(770, 1);
              break;
            case La:
              i.blendFuncSeparate(0, 769, 0, 1);
              break;
            case za:
              i.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", ie);
              break;
          }
        _ = null, y = null, z = null, b = null, w = ie, L = Mt;
      }
      return;
    }
    Ue = Ue || pe, Je = Je || we, gt = gt || De, (pe !== x || Ue !== P) && (i.blendEquationSeparate(q[pe], q[Ue]), x = pe, P = Ue), (we !== _ || De !== y || Je !== z || gt !== b) && (i.blendFuncSeparate(K[we], K[De], K[Je], K[gt]), _ = we, y = De, z = Je, b = gt), w = ie, L = !1;
  }
  function se(ie, pe) {
    ie.side === ua ? U(2884) : A(2884);
    let we = ie.side === un;
    pe && (we = !we), le(we), ie.blending === Hi && ie.transparent === !1 ? j(Vn) : j(ie.blending, ie.blendEquation, ie.blendSrc, ie.blendDst, ie.blendEquationAlpha, ie.blendSrcAlpha, ie.blendDstAlpha, ie.premultipliedAlpha), c.setFunc(ie.depthFunc), c.setTest(ie.depthTest), c.setMask(ie.depthWrite), a.setMask(ie.colorWrite);
    const De = ie.stencilWrite;
    l.setTest(De), De && (l.setMask(ie.stencilWriteMask), l.setFunc(ie.stencilFunc, ie.stencilRef, ie.stencilFuncMask), l.setOp(ie.stencilFail, ie.stencilZFail, ie.stencilZPass)), O(ie.polygonOffset, ie.polygonOffsetFactor, ie.polygonOffsetUnits), ie.alphaToCoverage === !0 ? A(32926) : U(32926);
  }
  function le(ie) {
    R !== ie && (ie ? i.frontFace(2304) : i.frontFace(2305), R = ie);
  }
  function _e(ie) {
    ie !== md ? (A(2884), ie !== W && (ie === Aa ? i.cullFace(1029) : ie === xd ? i.cullFace(1028) : i.cullFace(1032))) : U(2884), W = ie;
  }
  function Y(ie) {
    ie !== V && (G && i.lineWidth(ie), V = ie);
  }
  function O(ie, pe, we) {
    ie ? (A(32823), (F !== pe || k !== we) && (i.polygonOffset(pe, we), F = pe, k = we)) : U(32823);
  }
  function Se(ie) {
    ie ? A(3089) : U(3089);
  }
  function Ae(ie) {
    ie === void 0 && (ie = 33984 + D - 1), X !== ie && (i.activeTexture(ie), X = ie);
  }
  function N(ie, pe, we) {
    we === void 0 && (X === null ? we = 33984 + D - 1 : we = X);
    let De = ee[we];
    De === void 0 && (De = { type: void 0, texture: void 0 }, ee[we] = De), (De.type !== ie || De.texture !== pe) && (X !== we && (i.activeTexture(we), X = we), i.bindTexture(ie, pe || S[ie]), De.type = ie, De.texture = pe);
  }
  function I() {
    const ie = ee[X];
    ie !== void 0 && ie.type !== void 0 && (i.bindTexture(ie.type, null), ie.type = void 0, ie.texture = void 0);
  }
  function oe() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function me() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function ve() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function Pe() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function Me() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function H() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function re() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function Ee() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function Re() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function ze() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (ie) {
      console.error("THREE.WebGLState:", ie);
    }
  }
  function Fe(ie) {
    de.equals(ie) === !1 && (i.scissor(ie.x, ie.y, ie.z, ie.w), de.copy(ie));
  }
  function ke(ie) {
    T.equals(ie) === !1 && (i.viewport(ie.x, ie.y, ie.z, ie.w), T.copy(ie));
  }
  function $e(ie, pe) {
    let we = u.get(pe);
    we === void 0 && (we = /* @__PURE__ */ new WeakMap(), u.set(pe, we));
    let De = we.get(ie);
    De === void 0 && (De = i.getUniformBlockIndex(pe, ie.name), we.set(ie, De));
  }
  function Xe(ie, pe) {
    const De = u.get(pe).get(ie);
    h.get(pe) !== De && (i.uniformBlockBinding(pe, De, ie.__bindingPointIndex), h.set(pe, De));
  }
  function et() {
    i.disable(3042), i.disable(2884), i.disable(2929), i.disable(32823), i.disable(3089), i.disable(2960), i.disable(32926), i.blendEquation(32774), i.blendFunc(1, 0), i.blendFuncSeparate(1, 0, 1, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(513), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(519, 0, 4294967295), i.stencilOp(7680, 7680, 7680), i.clearStencil(0), i.cullFace(1029), i.frontFace(2305), i.polygonOffset(0, 0), i.activeTexture(33984), i.bindFramebuffer(36160, null), n === !0 && (i.bindFramebuffer(36009, null), i.bindFramebuffer(36008, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, X = null, ee = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), g = [], f = null, v = !1, w = null, x = null, _ = null, y = null, P = null, z = null, b = null, L = !1, R = null, W = null, V = null, F = null, k = null, de.set(0, 0, i.canvas.width, i.canvas.height), T.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: A,
    disable: U,
    bindFramebuffer: Z,
    drawBuffers: $,
    useProgram: fe,
    setBlending: j,
    setMaterial: se,
    setFlipSided: le,
    setCullFace: _e,
    setLineWidth: Y,
    setPolygonOffset: O,
    setScissorTest: Se,
    activeTexture: Ae,
    bindTexture: N,
    unbindTexture: I,
    compressedTexImage2D: oe,
    compressedTexImage3D: me,
    texImage2D: Re,
    texImage3D: ze,
    updateUBOMapping: $e,
    uniformBlockBinding: Xe,
    texStorage2D: re,
    texStorage3D: Ee,
    texSubImage2D: ve,
    texSubImage3D: Pe,
    compressedTexSubImage2D: Me,
    compressedTexSubImage3D: H,
    scissor: Fe,
    viewport: ke,
    reset: et
  };
}
function nm(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, c = r.maxTextures, l = r.maxCubemapSize, h = r.maxTextureSize, u = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap();
  let g;
  const f = /* @__PURE__ */ new WeakMap();
  let v = !1;
  try {
    v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function w(N, I) {
    return v ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(N, I)
    ) : Mr("canvas");
  }
  function x(N, I, oe, me) {
    let ve = 1;
    if ((N.width > me || N.height > me) && (ve = me / Math.max(N.width, N.height)), ve < 1 || I === !0)
      if (typeof HTMLImageElement < "u" && N instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && N instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && N instanceof ImageBitmap) {
        const Pe = I ? Jo : Math.floor, Me = Pe(ve * N.width), H = Pe(ve * N.height);
        g === void 0 && (g = w(Me, H));
        const re = oe ? w(Me, H) : g;
        return re.width = Me, re.height = H, re.getContext("2d").drawImage(N, 0, 0, Me, H), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + N.width + "x" + N.height + ") to (" + Me + "x" + H + ")."), re;
      } else
        return "data" in N && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + N.width + "x" + N.height + ")."), N;
    return N;
  }
  function _(N) {
    return sl(N.width) && sl(N.height);
  }
  function y(N) {
    return a ? !1 : N.wrapS !== xn || N.wrapT !== xn || N.minFilter !== kt && N.minFilter !== hn;
  }
  function P(N, I) {
    return N.generateMipmaps && I && N.minFilter !== kt && N.minFilter !== hn;
  }
  function z(N) {
    i.generateMipmap(N);
  }
  function b(N, I, oe, me, ve = !1) {
    if (a === !1)
      return I;
    if (N !== null) {
      if (i[N] !== void 0)
        return i[N];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + N + "'");
    }
    let Pe = I;
    return I === 6403 && (oe === 5126 && (Pe = 33326), oe === 5131 && (Pe = 33325), oe === 5121 && (Pe = 33321)), I === 33319 && (oe === 5126 && (Pe = 33328), oe === 5131 && (Pe = 33327), oe === 5121 && (Pe = 33323)), I === 6408 && (oe === 5126 && (Pe = 34836), oe === 5131 && (Pe = 34842), oe === 5121 && (Pe = me === rt && ve === !1 ? 35907 : 32856), oe === 32819 && (Pe = 32854), oe === 32820 && (Pe = 32855)), (Pe === 33325 || Pe === 33326 || Pe === 33327 || Pe === 33328 || Pe === 34842 || Pe === 34836) && e.get("EXT_color_buffer_float"), Pe;
  }
  function L(N, I, oe) {
    return P(N, oe) === !0 || N.isFramebufferTexture && N.minFilter !== kt && N.minFilter !== hn ? Math.log2(Math.max(I.width, I.height)) + 1 : N.mipmaps !== void 0 && N.mipmaps.length > 0 ? N.mipmaps.length : N.isCompressedTexture && Array.isArray(N.image) ? I.mipmaps.length : 1;
  }
  function R(N) {
    return N === kt || N === Da || N === Xs ? 9728 : 9729;
  }
  function W(N) {
    const I = N.target;
    I.removeEventListener("dispose", W), F(I), I.isVideoTexture && m.delete(I);
  }
  function V(N) {
    const I = N.target;
    I.removeEventListener("dispose", V), D(I);
  }
  function F(N) {
    const I = n.get(N);
    if (I.__webglInit === void 0)
      return;
    const oe = N.source, me = f.get(oe);
    if (me) {
      const ve = me[I.__cacheKey];
      ve.usedTimes--, ve.usedTimes === 0 && k(N), Object.keys(me).length === 0 && f.delete(oe);
    }
    n.remove(N);
  }
  function k(N) {
    const I = n.get(N);
    i.deleteTexture(I.__webglTexture);
    const oe = N.source, me = f.get(oe);
    delete me[I.__cacheKey], o.memory.textures--;
  }
  function D(N) {
    const I = N.texture, oe = n.get(N), me = n.get(I);
    if (me.__webglTexture !== void 0 && (i.deleteTexture(me.__webglTexture), o.memory.textures--), N.depthTexture && N.depthTexture.dispose(), N.isWebGLCubeRenderTarget)
      for (let ve = 0; ve < 6; ve++)
        i.deleteFramebuffer(oe.__webglFramebuffer[ve]), oe.__webglDepthbuffer && i.deleteRenderbuffer(oe.__webglDepthbuffer[ve]);
    else {
      if (i.deleteFramebuffer(oe.__webglFramebuffer), oe.__webglDepthbuffer && i.deleteRenderbuffer(oe.__webglDepthbuffer), oe.__webglMultisampledFramebuffer && i.deleteFramebuffer(oe.__webglMultisampledFramebuffer), oe.__webglColorRenderbuffer)
        for (let ve = 0; ve < oe.__webglColorRenderbuffer.length; ve++)
          oe.__webglColorRenderbuffer[ve] && i.deleteRenderbuffer(oe.__webglColorRenderbuffer[ve]);
      oe.__webglDepthRenderbuffer && i.deleteRenderbuffer(oe.__webglDepthRenderbuffer);
    }
    if (N.isWebGLMultipleRenderTargets)
      for (let ve = 0, Pe = I.length; ve < Pe; ve++) {
        const Me = n.get(I[ve]);
        Me.__webglTexture && (i.deleteTexture(Me.__webglTexture), o.memory.textures--), n.remove(I[ve]);
      }
    n.remove(I), n.remove(N);
  }
  let G = 0;
  function E() {
    G = 0;
  }
  function M() {
    const N = G;
    return N >= c && console.warn("THREE.WebGLTextures: Trying to use " + N + " texture units while this GPU supports only " + c), G += 1, N;
  }
  function X(N) {
    const I = [];
    return I.push(N.wrapS), I.push(N.wrapT), I.push(N.wrapR || 0), I.push(N.magFilter), I.push(N.minFilter), I.push(N.anisotropy), I.push(N.internalFormat), I.push(N.format), I.push(N.type), I.push(N.generateMipmaps), I.push(N.premultiplyAlpha), I.push(N.flipY), I.push(N.unpackAlignment), I.push(N.encoding), I.join();
  }
  function ee(N, I) {
    const oe = n.get(N);
    if (N.isVideoTexture && Se(N), N.isRenderTargetTexture === !1 && N.version > 0 && oe.__version !== N.version) {
      const me = N.image;
      if (me === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (me.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        U(oe, N, I);
        return;
      }
    }
    t.bindTexture(3553, oe.__webglTexture, 33984 + I);
  }
  function ne(N, I) {
    const oe = n.get(N);
    if (N.version > 0 && oe.__version !== N.version) {
      U(oe, N, I);
      return;
    }
    t.bindTexture(35866, oe.__webglTexture, 33984 + I);
  }
  function Q(N, I) {
    const oe = n.get(N);
    if (N.version > 0 && oe.__version !== N.version) {
      U(oe, N, I);
      return;
    }
    t.bindTexture(32879, oe.__webglTexture, 33984 + I);
  }
  function de(N, I) {
    const oe = n.get(N);
    if (N.version > 0 && oe.__version !== N.version) {
      Z(oe, N, I);
      return;
    }
    t.bindTexture(34067, oe.__webglTexture, 33984 + I);
  }
  const T = {
    [Ps]: 10497,
    [xn]: 33071,
    [jo]: 33648
  }, C = {
    [kt]: 9728,
    [Da]: 9984,
    [Xs]: 9986,
    [hn]: 9729,
    [Vd]: 9985,
    [br]: 9987
  };
  function S(N, I, oe) {
    if (oe ? (i.texParameteri(N, 10242, T[I.wrapS]), i.texParameteri(N, 10243, T[I.wrapT]), (N === 32879 || N === 35866) && i.texParameteri(N, 32882, T[I.wrapR]), i.texParameteri(N, 10240, C[I.magFilter]), i.texParameteri(N, 10241, C[I.minFilter])) : (i.texParameteri(N, 10242, 33071), i.texParameteri(N, 10243, 33071), (N === 32879 || N === 35866) && i.texParameteri(N, 32882, 33071), (I.wrapS !== xn || I.wrapT !== xn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(N, 10240, R(I.magFilter)), i.texParameteri(N, 10241, R(I.minFilter)), I.minFilter !== kt && I.minFilter !== hn && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const me = e.get("EXT_texture_filter_anisotropic");
      if (I.magFilter === kt || I.minFilter !== Xs && I.minFilter !== br || I.type === li && e.has("OES_texture_float_linear") === !1 || a === !1 && I.type === Sr && e.has("OES_texture_half_float_linear") === !1)
        return;
      (I.anisotropy > 1 || n.get(I).__currentAnisotropy) && (i.texParameterf(N, me.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(I.anisotropy, r.getMaxAnisotropy())), n.get(I).__currentAnisotropy = I.anisotropy);
    }
  }
  function A(N, I) {
    let oe = !1;
    N.__webglInit === void 0 && (N.__webglInit = !0, I.addEventListener("dispose", W));
    const me = I.source;
    let ve = f.get(me);
    ve === void 0 && (ve = {}, f.set(me, ve));
    const Pe = X(I);
    if (Pe !== N.__cacheKey) {
      ve[Pe] === void 0 && (ve[Pe] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, oe = !0), ve[Pe].usedTimes++;
      const Me = ve[N.__cacheKey];
      Me !== void 0 && (ve[N.__cacheKey].usedTimes--, Me.usedTimes === 0 && k(I)), N.__cacheKey = Pe, N.__webglTexture = ve[Pe].texture;
    }
    return oe;
  }
  function U(N, I, oe) {
    let me = 3553;
    (I.isDataArrayTexture || I.isCompressedArrayTexture) && (me = 35866), I.isData3DTexture && (me = 32879);
    const ve = A(N, I), Pe = I.source;
    t.bindTexture(me, N.__webglTexture, 33984 + oe);
    const Me = n.get(Pe);
    if (Pe.version !== Me.__version || ve === !0) {
      t.activeTexture(33984 + oe), i.pixelStorei(37440, I.flipY), i.pixelStorei(37441, I.premultiplyAlpha), i.pixelStorei(3317, I.unpackAlignment), i.pixelStorei(37443, 0);
      const H = y(I) && _(I.image) === !1;
      let re = x(I.image, H, !1, h);
      re = Ae(I, re);
      const Ee = _(re) || a, Re = s.convert(I.format, I.encoding);
      let ze = s.convert(I.type), Fe = b(I.internalFormat, Re, ze, I.encoding, I.isVideoTexture);
      S(me, I, Ee);
      let ke;
      const $e = I.mipmaps, Xe = a && I.isVideoTexture !== !0, et = Me.__version === void 0 || ve === !0, ie = L(I, re, Ee);
      if (I.isDepthTexture)
        Fe = 6402, a ? I.type === li ? Fe = 36012 : I.type === ai ? Fe = 33190 : I.type === Vi ? Fe = 35056 : Fe = 33189 : I.type === li && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), I.format === ui && Fe === 6402 && I.type !== Uc && I.type !== ai && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), I.type = ai, ze = s.convert(I.type)), I.format === Zi && Fe === 6402 && (Fe = 34041, I.type !== Vi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), I.type = Vi, ze = s.convert(I.type))), et && (Xe ? t.texStorage2D(3553, 1, Fe, re.width, re.height) : t.texImage2D(3553, 0, Fe, re.width, re.height, 0, Re, ze, null));
      else if (I.isDataTexture)
        if ($e.length > 0 && Ee) {
          Xe && et && t.texStorage2D(3553, ie, Fe, $e[0].width, $e[0].height);
          for (let pe = 0, we = $e.length; pe < we; pe++)
            ke = $e[pe], Xe ? t.texSubImage2D(3553, pe, 0, 0, ke.width, ke.height, Re, ze, ke.data) : t.texImage2D(3553, pe, Fe, ke.width, ke.height, 0, Re, ze, ke.data);
          I.generateMipmaps = !1;
        } else
          Xe ? (et && t.texStorage2D(3553, ie, Fe, re.width, re.height), t.texSubImage2D(3553, 0, 0, 0, re.width, re.height, Re, ze, re.data)) : t.texImage2D(3553, 0, Fe, re.width, re.height, 0, Re, ze, re.data);
      else if (I.isCompressedTexture)
        if (I.isCompressedArrayTexture) {
          Xe && et && t.texStorage3D(35866, ie, Fe, $e[0].width, $e[0].height, re.depth);
          for (let pe = 0, we = $e.length; pe < we; pe++)
            ke = $e[pe], I.format !== yn ? Re !== null ? Xe ? t.compressedTexSubImage3D(35866, pe, 0, 0, 0, ke.width, ke.height, re.depth, Re, ke.data, 0, 0) : t.compressedTexImage3D(35866, pe, Fe, ke.width, ke.height, re.depth, 0, ke.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Xe ? t.texSubImage3D(35866, pe, 0, 0, 0, ke.width, ke.height, re.depth, Re, ze, ke.data) : t.texImage3D(35866, pe, Fe, ke.width, ke.height, re.depth, 0, Re, ze, ke.data);
        } else {
          Xe && et && t.texStorage2D(3553, ie, Fe, $e[0].width, $e[0].height);
          for (let pe = 0, we = $e.length; pe < we; pe++)
            ke = $e[pe], I.format !== yn ? Re !== null ? Xe ? t.compressedTexSubImage2D(3553, pe, 0, 0, ke.width, ke.height, Re, ke.data) : t.compressedTexImage2D(3553, pe, Fe, ke.width, ke.height, 0, ke.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Xe ? t.texSubImage2D(3553, pe, 0, 0, ke.width, ke.height, Re, ze, ke.data) : t.texImage2D(3553, pe, Fe, ke.width, ke.height, 0, Re, ze, ke.data);
        }
      else if (I.isDataArrayTexture)
        Xe ? (et && t.texStorage3D(35866, ie, Fe, re.width, re.height, re.depth), t.texSubImage3D(35866, 0, 0, 0, 0, re.width, re.height, re.depth, Re, ze, re.data)) : t.texImage3D(35866, 0, Fe, re.width, re.height, re.depth, 0, Re, ze, re.data);
      else if (I.isData3DTexture)
        Xe ? (et && t.texStorage3D(32879, ie, Fe, re.width, re.height, re.depth), t.texSubImage3D(32879, 0, 0, 0, 0, re.width, re.height, re.depth, Re, ze, re.data)) : t.texImage3D(32879, 0, Fe, re.width, re.height, re.depth, 0, Re, ze, re.data);
      else if (I.isFramebufferTexture) {
        if (et)
          if (Xe)
            t.texStorage2D(3553, ie, Fe, re.width, re.height);
          else {
            let pe = re.width, we = re.height;
            for (let De = 0; De < ie; De++)
              t.texImage2D(3553, De, Fe, pe, we, 0, Re, ze, null), pe >>= 1, we >>= 1;
          }
      } else if ($e.length > 0 && Ee) {
        Xe && et && t.texStorage2D(3553, ie, Fe, $e[0].width, $e[0].height);
        for (let pe = 0, we = $e.length; pe < we; pe++)
          ke = $e[pe], Xe ? t.texSubImage2D(3553, pe, 0, 0, Re, ze, ke) : t.texImage2D(3553, pe, Fe, Re, ze, ke);
        I.generateMipmaps = !1;
      } else
        Xe ? (et && t.texStorage2D(3553, ie, Fe, re.width, re.height), t.texSubImage2D(3553, 0, 0, 0, Re, ze, re)) : t.texImage2D(3553, 0, Fe, Re, ze, re);
      P(I, Ee) && z(me), Me.__version = Pe.version, I.onUpdate && I.onUpdate(I);
    }
    N.__version = I.version;
  }
  function Z(N, I, oe) {
    if (I.image.length !== 6)
      return;
    const me = A(N, I), ve = I.source;
    t.bindTexture(34067, N.__webglTexture, 33984 + oe);
    const Pe = n.get(ve);
    if (ve.version !== Pe.__version || me === !0) {
      t.activeTexture(33984 + oe), i.pixelStorei(37440, I.flipY), i.pixelStorei(37441, I.premultiplyAlpha), i.pixelStorei(3317, I.unpackAlignment), i.pixelStorei(37443, 0);
      const Me = I.isCompressedTexture || I.image[0].isCompressedTexture, H = I.image[0] && I.image[0].isDataTexture, re = [];
      for (let pe = 0; pe < 6; pe++)
        !Me && !H ? re[pe] = x(I.image[pe], !1, !0, l) : re[pe] = H ? I.image[pe].image : I.image[pe], re[pe] = Ae(I, re[pe]);
      const Ee = re[0], Re = _(Ee) || a, ze = s.convert(I.format, I.encoding), Fe = s.convert(I.type), ke = b(I.internalFormat, ze, Fe, I.encoding), $e = a && I.isVideoTexture !== !0, Xe = Pe.__version === void 0 || me === !0;
      let et = L(I, Ee, Re);
      S(34067, I, Re);
      let ie;
      if (Me) {
        $e && Xe && t.texStorage2D(34067, et, ke, Ee.width, Ee.height);
        for (let pe = 0; pe < 6; pe++) {
          ie = re[pe].mipmaps;
          for (let we = 0; we < ie.length; we++) {
            const De = ie[we];
            I.format !== yn ? ze !== null ? $e ? t.compressedTexSubImage2D(34069 + pe, we, 0, 0, De.width, De.height, ze, De.data) : t.compressedTexImage2D(34069 + pe, we, ke, De.width, De.height, 0, De.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : $e ? t.texSubImage2D(34069 + pe, we, 0, 0, De.width, De.height, ze, Fe, De.data) : t.texImage2D(34069 + pe, we, ke, De.width, De.height, 0, ze, Fe, De.data);
          }
        }
      } else {
        ie = I.mipmaps, $e && Xe && (ie.length > 0 && et++, t.texStorage2D(34067, et, ke, re[0].width, re[0].height));
        for (let pe = 0; pe < 6; pe++)
          if (H) {
            $e ? t.texSubImage2D(34069 + pe, 0, 0, 0, re[pe].width, re[pe].height, ze, Fe, re[pe].data) : t.texImage2D(34069 + pe, 0, ke, re[pe].width, re[pe].height, 0, ze, Fe, re[pe].data);
            for (let we = 0; we < ie.length; we++) {
              const Ue = ie[we].image[pe].image;
              $e ? t.texSubImage2D(34069 + pe, we + 1, 0, 0, Ue.width, Ue.height, ze, Fe, Ue.data) : t.texImage2D(34069 + pe, we + 1, ke, Ue.width, Ue.height, 0, ze, Fe, Ue.data);
            }
          } else {
            $e ? t.texSubImage2D(34069 + pe, 0, 0, 0, ze, Fe, re[pe]) : t.texImage2D(34069 + pe, 0, ke, ze, Fe, re[pe]);
            for (let we = 0; we < ie.length; we++) {
              const De = ie[we];
              $e ? t.texSubImage2D(34069 + pe, we + 1, 0, 0, ze, Fe, De.image[pe]) : t.texImage2D(34069 + pe, we + 1, ke, ze, Fe, De.image[pe]);
            }
          }
      }
      P(I, Re) && z(34067), Pe.__version = ve.version, I.onUpdate && I.onUpdate(I);
    }
    N.__version = I.version;
  }
  function $(N, I, oe, me, ve) {
    const Pe = s.convert(oe.format, oe.encoding), Me = s.convert(oe.type), H = b(oe.internalFormat, Pe, Me, oe.encoding);
    n.get(I).__hasExternalTextures || (ve === 32879 || ve === 35866 ? t.texImage3D(ve, 0, H, I.width, I.height, I.depth, 0, Pe, Me, null) : t.texImage2D(ve, 0, H, I.width, I.height, 0, Pe, Me, null)), t.bindFramebuffer(36160, N), O(I) ? d.framebufferTexture2DMultisampleEXT(36160, me, ve, n.get(oe).__webglTexture, 0, Y(I)) : (ve === 3553 || ve >= 34069 && ve <= 34074) && i.framebufferTexture2D(36160, me, ve, n.get(oe).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function fe(N, I, oe) {
    if (i.bindRenderbuffer(36161, N), I.depthBuffer && !I.stencilBuffer) {
      let me = 33189;
      if (oe || O(I)) {
        const ve = I.depthTexture;
        ve && ve.isDepthTexture && (ve.type === li ? me = 36012 : ve.type === ai && (me = 33190));
        const Pe = Y(I);
        O(I) ? d.renderbufferStorageMultisampleEXT(36161, Pe, me, I.width, I.height) : i.renderbufferStorageMultisample(36161, Pe, me, I.width, I.height);
      } else
        i.renderbufferStorage(36161, me, I.width, I.height);
      i.framebufferRenderbuffer(36160, 36096, 36161, N);
    } else if (I.depthBuffer && I.stencilBuffer) {
      const me = Y(I);
      oe && O(I) === !1 ? i.renderbufferStorageMultisample(36161, me, 35056, I.width, I.height) : O(I) ? d.renderbufferStorageMultisampleEXT(36161, me, 35056, I.width, I.height) : i.renderbufferStorage(36161, 34041, I.width, I.height), i.framebufferRenderbuffer(36160, 33306, 36161, N);
    } else {
      const me = I.isWebGLMultipleRenderTargets === !0 ? I.texture : [I.texture];
      for (let ve = 0; ve < me.length; ve++) {
        const Pe = me[ve], Me = s.convert(Pe.format, Pe.encoding), H = s.convert(Pe.type), re = b(Pe.internalFormat, Me, H, Pe.encoding), Ee = Y(I);
        oe && O(I) === !1 ? i.renderbufferStorageMultisample(36161, Ee, re, I.width, I.height) : O(I) ? d.renderbufferStorageMultisampleEXT(36161, Ee, re, I.width, I.height) : i.renderbufferStorage(36161, re, I.width, I.height);
      }
    }
    i.bindRenderbuffer(36161, null);
  }
  function q(N, I) {
    if (I && I.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, N), !(I.depthTexture && I.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(I.depthTexture).__webglTexture || I.depthTexture.image.width !== I.width || I.depthTexture.image.height !== I.height) && (I.depthTexture.image.width = I.width, I.depthTexture.image.height = I.height, I.depthTexture.needsUpdate = !0), ee(I.depthTexture, 0);
    const me = n.get(I.depthTexture).__webglTexture, ve = Y(I);
    if (I.depthTexture.format === ui)
      O(I) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, me, 0, ve) : i.framebufferTexture2D(36160, 36096, 3553, me, 0);
    else if (I.depthTexture.format === Zi)
      O(I) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, me, 0, ve) : i.framebufferTexture2D(36160, 33306, 3553, me, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function K(N) {
    const I = n.get(N), oe = N.isWebGLCubeRenderTarget === !0;
    if (N.depthTexture && !I.__autoAllocateDepthBuffer) {
      if (oe)
        throw new Error("target.depthTexture not supported in Cube render targets");
      q(I.__webglFramebuffer, N);
    } else if (oe) {
      I.__webglDepthbuffer = [];
      for (let me = 0; me < 6; me++)
        t.bindFramebuffer(36160, I.__webglFramebuffer[me]), I.__webglDepthbuffer[me] = i.createRenderbuffer(), fe(I.__webglDepthbuffer[me], N, !1);
    } else
      t.bindFramebuffer(36160, I.__webglFramebuffer), I.__webglDepthbuffer = i.createRenderbuffer(), fe(I.__webglDepthbuffer, N, !1);
    t.bindFramebuffer(36160, null);
  }
  function j(N, I, oe) {
    const me = n.get(N);
    I !== void 0 && $(me.__webglFramebuffer, N, N.texture, 36064, 3553), oe !== void 0 && K(N);
  }
  function se(N) {
    const I = N.texture, oe = n.get(N), me = n.get(I);
    N.addEventListener("dispose", V), N.isWebGLMultipleRenderTargets !== !0 && (me.__webglTexture === void 0 && (me.__webglTexture = i.createTexture()), me.__version = I.version, o.memory.textures++);
    const ve = N.isWebGLCubeRenderTarget === !0, Pe = N.isWebGLMultipleRenderTargets === !0, Me = _(N) || a;
    if (ve) {
      oe.__webglFramebuffer = [];
      for (let H = 0; H < 6; H++)
        oe.__webglFramebuffer[H] = i.createFramebuffer();
    } else {
      if (oe.__webglFramebuffer = i.createFramebuffer(), Pe)
        if (r.drawBuffers) {
          const H = N.texture;
          for (let re = 0, Ee = H.length; re < Ee; re++) {
            const Re = n.get(H[re]);
            Re.__webglTexture === void 0 && (Re.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && N.samples > 0 && O(N) === !1) {
        const H = Pe ? I : [I];
        oe.__webglMultisampledFramebuffer = i.createFramebuffer(), oe.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, oe.__webglMultisampledFramebuffer);
        for (let re = 0; re < H.length; re++) {
          const Ee = H[re];
          oe.__webglColorRenderbuffer[re] = i.createRenderbuffer(), i.bindRenderbuffer(36161, oe.__webglColorRenderbuffer[re]);
          const Re = s.convert(Ee.format, Ee.encoding), ze = s.convert(Ee.type), Fe = b(Ee.internalFormat, Re, ze, Ee.encoding, N.isXRRenderTarget === !0), ke = Y(N);
          i.renderbufferStorageMultisample(36161, ke, Fe, N.width, N.height), i.framebufferRenderbuffer(36160, 36064 + re, 36161, oe.__webglColorRenderbuffer[re]);
        }
        i.bindRenderbuffer(36161, null), N.depthBuffer && (oe.__webglDepthRenderbuffer = i.createRenderbuffer(), fe(oe.__webglDepthRenderbuffer, N, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ve) {
      t.bindTexture(34067, me.__webglTexture), S(34067, I, Me);
      for (let H = 0; H < 6; H++)
        $(oe.__webglFramebuffer[H], N, I, 36064, 34069 + H);
      P(I, Me) && z(34067), t.unbindTexture();
    } else if (Pe) {
      const H = N.texture;
      for (let re = 0, Ee = H.length; re < Ee; re++) {
        const Re = H[re], ze = n.get(Re);
        t.bindTexture(3553, ze.__webglTexture), S(3553, Re, Me), $(oe.__webglFramebuffer, N, Re, 36064 + re, 3553), P(Re, Me) && z(3553);
      }
      t.unbindTexture();
    } else {
      let H = 3553;
      (N.isWebGL3DRenderTarget || N.isWebGLArrayRenderTarget) && (a ? H = N.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(H, me.__webglTexture), S(H, I, Me), $(oe.__webglFramebuffer, N, I, 36064, H), P(I, Me) && z(H), t.unbindTexture();
    }
    N.depthBuffer && K(N);
  }
  function le(N) {
    const I = _(N) || a, oe = N.isWebGLMultipleRenderTargets === !0 ? N.texture : [N.texture];
    for (let me = 0, ve = oe.length; me < ve; me++) {
      const Pe = oe[me];
      if (P(Pe, I)) {
        const Me = N.isWebGLCubeRenderTarget ? 34067 : 3553, H = n.get(Pe).__webglTexture;
        t.bindTexture(Me, H), z(Me), t.unbindTexture();
      }
    }
  }
  function _e(N) {
    if (a && N.samples > 0 && O(N) === !1) {
      const I = N.isWebGLMultipleRenderTargets ? N.texture : [N.texture], oe = N.width, me = N.height;
      let ve = 16384;
      const Pe = [], Me = N.stencilBuffer ? 33306 : 36096, H = n.get(N), re = N.isWebGLMultipleRenderTargets === !0;
      if (re)
        for (let Ee = 0; Ee < I.length; Ee++)
          t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(36160, 36064 + Ee, 36161, null), t.bindFramebuffer(36160, H.__webglFramebuffer), i.framebufferTexture2D(36009, 36064 + Ee, 3553, null, 0);
      t.bindFramebuffer(36008, H.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, H.__webglFramebuffer);
      for (let Ee = 0; Ee < I.length; Ee++) {
        Pe.push(36064 + Ee), N.depthBuffer && Pe.push(Me);
        const Re = H.__ignoreDepthValues !== void 0 ? H.__ignoreDepthValues : !1;
        if (Re === !1 && (N.depthBuffer && (ve |= 256), N.stencilBuffer && (ve |= 1024)), re && i.framebufferRenderbuffer(36008, 36064, 36161, H.__webglColorRenderbuffer[Ee]), Re === !0 && (i.invalidateFramebuffer(36008, [Me]), i.invalidateFramebuffer(36009, [Me])), re) {
          const ze = n.get(I[Ee]).__webglTexture;
          i.framebufferTexture2D(36009, 36064, 3553, ze, 0);
        }
        i.blitFramebuffer(0, 0, oe, me, 0, 0, oe, me, ve, 9728), p && i.invalidateFramebuffer(36008, Pe);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), re)
        for (let Ee = 0; Ee < I.length; Ee++) {
          t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(36160, 36064 + Ee, 36161, H.__webglColorRenderbuffer[Ee]);
          const Re = n.get(I[Ee]).__webglTexture;
          t.bindFramebuffer(36160, H.__webglFramebuffer), i.framebufferTexture2D(36009, 36064 + Ee, 3553, Re, 0);
        }
      t.bindFramebuffer(36009, H.__webglMultisampledFramebuffer);
    }
  }
  function Y(N) {
    return Math.min(u, N.samples);
  }
  function O(N) {
    const I = n.get(N);
    return a && N.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && I.__useRenderToTexture !== !1;
  }
  function Se(N) {
    const I = o.render.frame;
    m.get(N) !== I && (m.set(N, I), N.update());
  }
  function Ae(N, I) {
    const oe = N.encoding, me = N.format, ve = N.type;
    return N.isCompressedTexture === !0 || N.isVideoTexture === !0 || N.format === Zo || oe !== xi && (oe === rt ? a === !1 ? e.has("EXT_sRGB") === !0 && me === yn ? (N.format = Zo, N.minFilter = hn, N.generateMipmaps = !1) : I = $c.sRGBToLinear(I) : (me !== yn || ve !== mi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", oe)), I;
  }
  this.allocateTextureUnit = M, this.resetTextureUnits = E, this.setTexture2D = ee, this.setTexture2DArray = ne, this.setTexture3D = Q, this.setTextureCube = de, this.rebindTextures = j, this.setupRenderTarget = se, this.updateRenderTargetMipmap = le, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = K, this.setupFrameBufferTexture = $, this.useMultisampledRTT = O;
}
function im(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = null) {
    let a;
    if (s === mi)
      return 5121;
    if (s === jd)
      return 32819;
    if (s === Zd)
      return 32820;
    if (s === Xd)
      return 5120;
    if (s === Yd)
      return 5122;
    if (s === Uc)
      return 5123;
    if (s === qd)
      return 5124;
    if (s === ai)
      return 5125;
    if (s === li)
      return 5126;
    if (s === Sr)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Jd)
      return 6406;
    if (s === yn)
      return 6408;
    if (s === Qd)
      return 6409;
    if (s === eu)
      return 6410;
    if (s === ui)
      return 6402;
    if (s === Zi)
      return 34041;
    if (s === Kd)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Zo)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === tu)
      return 6403;
    if (s === nu)
      return 36244;
    if (s === iu)
      return 33319;
    if (s === ru)
      return 33320;
    if (s === su)
      return 36249;
    if (s === Ys || s === qs || s === js || s === Zs)
      if (o === rt)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === Ys)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === qs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === js)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Zs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === Ys)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === qs)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === js)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Zs)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Na || s === Fa || s === ka || s === Oa)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === Na)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Fa)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ka)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Oa)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === ou)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Ua || s === Ba)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Ua)
          return o === rt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Ba)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Ga || s === Wa || s === $a || s === Ha || s === Va || s === Xa || s === Ya || s === qa || s === ja || s === Za || s === Ja || s === Ka || s === Qa || s === el)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === Ga)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Wa)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === $a)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ha)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Va)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Xa)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ya)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === qa)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === ja)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Za)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ja)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ka)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Qa)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === el)
          return o === rt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === tl)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === tl)
          return o === rt ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === Vi ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class rm extends $t {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class _n extends zt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const sm = { type: "move" };
class wo {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new _n(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new _n(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new J(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new J()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new _n(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new J(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new J()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const f = t.getJointPose(g, n), v = this._getHandJoint(l, g);
          f !== null && (v.matrix.fromArray(f.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.jointRadius = f.radius), v.visible = f !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, m = 5e-3;
        l.inputState.pinching && d > p + m ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= p - m && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(sm)));
    }
    return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new _n();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class om extends Xt {
  constructor(e, t, n, r, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : ui, h !== ui && h !== Zi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ui && (n = ai), n === void 0 && h === Zi && (n = Vi), super(null, r, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : kt, this.minFilter = c !== void 0 ? c : kt, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class am extends bi {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", c = null, l = null, h = null, u = null, d = null, p = null;
    const m = t.getContextAttributes();
    let g = null, f = null;
    const v = [], w = [], x = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), y = new $t();
    y.layers.enable(1), y.viewport = new lt();
    const P = new $t();
    P.layers.enable(2), P.viewport = new lt();
    const z = [y, P], b = new rm();
    b.layers.enable(1), b.layers.enable(2);
    let L = null, R = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(ne) {
      let Q = v[ne];
      return Q === void 0 && (Q = new wo(), v[ne] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(ne) {
      let Q = v[ne];
      return Q === void 0 && (Q = new wo(), v[ne] = Q), Q.getGripSpace();
    }, this.getHand = function(ne) {
      let Q = v[ne];
      return Q === void 0 && (Q = new wo(), v[ne] = Q), Q.getHandSpace();
    };
    function W(ne) {
      const Q = w.indexOf(ne.inputSource);
      if (Q === -1)
        return;
      const de = v[Q];
      de !== void 0 && de.dispatchEvent({ type: ne.type, data: ne.inputSource });
    }
    function V() {
      r.removeEventListener("select", W), r.removeEventListener("selectstart", W), r.removeEventListener("selectend", W), r.removeEventListener("squeeze", W), r.removeEventListener("squeezestart", W), r.removeEventListener("squeezeend", W), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", F);
      for (let ne = 0; ne < v.length; ne++) {
        const Q = w[ne];
        Q !== null && (w[ne] = null, v[ne].disconnect(Q));
      }
      L = null, R = null, e.setRenderTarget(g), d = null, u = null, h = null, r = null, f = null, ee.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(ne) {
      s = ne, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(ne) {
      a = ne, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(ne) {
      c = ne;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return p;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(ne) {
      if (r = ne, r !== null) {
        if (g = e.getRenderTarget(), r.addEventListener("select", W), r.addEventListener("selectstart", W), r.addEventListener("selectend", W), r.addEventListener("squeeze", W), r.addEventListener("squeezestart", W), r.addEventListener("squeezeend", W), r.addEventListener("end", V), r.addEventListener("inputsourceschange", F), m.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Q = {
            antialias: r.renderState.layers === void 0 ? m.antialias : !0,
            alpha: m.alpha,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(r, t, Q), r.updateRenderState({ baseLayer: d }), f = new yi(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: yn,
              type: mi,
              encoding: e.outputEncoding,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let Q = null, de = null, T = null;
          m.depth && (T = m.stencil ? 35056 : 33190, Q = m.stencil ? Zi : ui, de = m.stencil ? Vi : ai);
          const C = {
            colorFormat: 32856,
            depthFormat: T,
            scaleFactor: s
          };
          h = new XRWebGLBinding(r, t), u = h.createProjectionLayer(C), r.updateRenderState({ layers: [u] }), f = new yi(
            u.textureWidth,
            u.textureHeight,
            {
              format: yn,
              type: mi,
              depthTexture: new om(u.textureWidth, u.textureHeight, de, void 0, void 0, void 0, void 0, void 0, void 0, Q),
              stencilBuffer: m.stencil,
              encoding: e.outputEncoding,
              samples: m.antialias ? 4 : 0
            }
          );
          const S = e.properties.get(f);
          S.__ignoreDepthValues = u.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await r.requestReferenceSpace(a), ee.setContext(r), ee.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function F(ne) {
      for (let Q = 0; Q < ne.removed.length; Q++) {
        const de = ne.removed[Q], T = w.indexOf(de);
        T >= 0 && (w[T] = null, v[T].disconnect(de));
      }
      for (let Q = 0; Q < ne.added.length; Q++) {
        const de = ne.added[Q];
        let T = w.indexOf(de);
        if (T === -1) {
          for (let S = 0; S < v.length; S++)
            if (S >= w.length) {
              w.push(de), T = S;
              break;
            } else if (w[S] === null) {
              w[S] = de, T = S;
              break;
            }
          if (T === -1)
            break;
        }
        const C = v[T];
        C && C.connect(de);
      }
    }
    const k = new J(), D = new J();
    function G(ne, Q, de) {
      k.setFromMatrixPosition(Q.matrixWorld), D.setFromMatrixPosition(de.matrixWorld);
      const T = k.distanceTo(D), C = Q.projectionMatrix.elements, S = de.projectionMatrix.elements, A = C[14] / (C[10] - 1), U = C[14] / (C[10] + 1), Z = (C[9] + 1) / C[5], $ = (C[9] - 1) / C[5], fe = (C[8] - 1) / C[0], q = (S[8] + 1) / S[0], K = A * fe, j = A * q, se = T / (-fe + q), le = se * -fe;
      Q.matrixWorld.decompose(ne.position, ne.quaternion, ne.scale), ne.translateX(le), ne.translateZ(se), ne.matrixWorld.compose(ne.position, ne.quaternion, ne.scale), ne.matrixWorldInverse.copy(ne.matrixWorld).invert();
      const _e = A + se, Y = U + se, O = K - le, Se = j + (T - le), Ae = Z * U / Y * _e, N = $ * U / Y * _e;
      ne.projectionMatrix.makePerspective(O, Se, Ae, N, _e, Y);
    }
    function E(ne, Q) {
      Q === null ? ne.matrixWorld.copy(ne.matrix) : ne.matrixWorld.multiplyMatrices(Q.matrixWorld, ne.matrix), ne.matrixWorldInverse.copy(ne.matrixWorld).invert();
    }
    this.updateCamera = function(ne) {
      if (r === null)
        return;
      b.near = P.near = y.near = ne.near, b.far = P.far = y.far = ne.far, (L !== b.near || R !== b.far) && (r.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), L = b.near, R = b.far);
      const Q = ne.parent, de = b.cameras;
      E(b, Q);
      for (let C = 0; C < de.length; C++)
        E(de[C], Q);
      b.matrixWorld.decompose(b.position, b.quaternion, b.scale), ne.matrix.copy(b.matrix), ne.matrix.decompose(ne.position, ne.quaternion, ne.scale);
      const T = ne.children;
      for (let C = 0, S = T.length; C < S; C++)
        T[C].updateMatrixWorld(!0);
      de.length === 2 ? G(b, y, P) : b.projectionMatrix.copy(y.projectionMatrix);
    }, this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(ne) {
      u !== null && (u.fixedFoveation = ne), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = ne);
    }, this.getPlanes = function() {
      return x;
    };
    let M = null;
    function X(ne, Q) {
      if (l = Q.getViewerPose(c || o), p = Q, l !== null) {
        const de = l.views;
        d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
        let T = !1;
        de.length !== b.cameras.length && (b.cameras.length = 0, T = !0);
        for (let C = 0; C < de.length; C++) {
          const S = de[C];
          let A = null;
          if (d !== null)
            A = d.getViewport(S);
          else {
            const Z = h.getViewSubImage(u, S);
            A = Z.viewport, C === 0 && (e.setRenderTargetTextures(
              f,
              Z.colorTexture,
              u.ignoreDepthValues ? void 0 : Z.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let U = z[C];
          U === void 0 && (U = new $t(), U.layers.enable(C), U.viewport = new lt(), z[C] = U), U.matrix.fromArray(S.transform.matrix), U.projectionMatrix.fromArray(S.projectionMatrix), U.viewport.set(A.x, A.y, A.width, A.height), C === 0 && b.matrix.copy(U.matrix), T === !0 && b.cameras.push(U);
        }
      }
      for (let de = 0; de < v.length; de++) {
        const T = w[de], C = v[de];
        T !== null && C !== void 0 && C.update(T, Q, c || o);
      }
      if (M && M(ne, Q), Q.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: Q.detectedPlanes });
        let de = null;
        for (const T of x)
          Q.detectedPlanes.has(T) || (de === null && (de = []), de.push(T));
        if (de !== null)
          for (const T of de)
            x.delete(T), _.delete(T), n.dispatchEvent({ type: "planeremoved", data: T });
        for (const T of Q.detectedPlanes)
          if (!x.has(T))
            x.add(T), _.set(T, Q.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: T });
          else {
            const C = _.get(T);
            T.lastChangedTime > C && (_.set(T, T.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: T }));
          }
      }
      p = null;
    }
    const ee = new Qc();
    ee.setAnimationLoop(X), this.setAnimationLoop = function(ne) {
      M = ne;
    }, this.dispose = function() {
    };
  }
}
function lm(i, e) {
  function t(g, f) {
    f.color.getRGB(g.fogColor.value, Zc(i)), f.isFog ? (g.fogNear.value = f.near, g.fogFar.value = f.far) : f.isFogExp2 && (g.fogDensity.value = f.density);
  }
  function n(g, f, v, w, x) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(g, f) : f.isMeshToonMaterial ? (r(g, f), h(g, f)) : f.isMeshPhongMaterial ? (r(g, f), l(g, f)) : f.isMeshStandardMaterial ? (r(g, f), u(g, f), f.isMeshPhysicalMaterial && d(g, f, x)) : f.isMeshMatcapMaterial ? (r(g, f), p(g, f)) : f.isMeshDepthMaterial ? r(g, f) : f.isMeshDistanceMaterial ? (r(g, f), m(g, f)) : f.isMeshNormalMaterial ? r(g, f) : f.isLineBasicMaterial ? (s(g, f), f.isLineDashedMaterial && o(g, f)) : f.isPointsMaterial ? a(g, f, v, w) : f.isSpriteMaterial ? c(g, f) : f.isShadowMaterial ? (g.color.value.copy(f.color), g.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function r(g, f) {
    g.opacity.value = f.opacity, f.color && g.diffuse.value.copy(f.color), f.emissive && g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (g.map.value = f.map), f.alphaMap && (g.alphaMap.value = f.alphaMap), f.bumpMap && (g.bumpMap.value = f.bumpMap, g.bumpScale.value = f.bumpScale, f.side === un && (g.bumpScale.value *= -1)), f.displacementMap && (g.displacementMap.value = f.displacementMap, g.displacementScale.value = f.displacementScale, g.displacementBias.value = f.displacementBias), f.emissiveMap && (g.emissiveMap.value = f.emissiveMap), f.normalMap && (g.normalMap.value = f.normalMap, g.normalScale.value.copy(f.normalScale), f.side === un && g.normalScale.value.negate()), f.specularMap && (g.specularMap.value = f.specularMap), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (v && (g.envMap.value = v, g.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = f.reflectivity, g.ior.value = f.ior, g.refractionRatio.value = f.refractionRatio), f.lightMap) {
      g.lightMap.value = f.lightMap;
      const _ = i.physicallyCorrectLights !== !0 ? Math.PI : 1;
      g.lightMapIntensity.value = f.lightMapIntensity * _;
    }
    f.aoMap && (g.aoMap.value = f.aoMap, g.aoMapIntensity.value = f.aoMapIntensity);
    let w;
    f.map ? w = f.map : f.specularMap ? w = f.specularMap : f.displacementMap ? w = f.displacementMap : f.normalMap ? w = f.normalMap : f.bumpMap ? w = f.bumpMap : f.roughnessMap ? w = f.roughnessMap : f.metalnessMap ? w = f.metalnessMap : f.alphaMap ? w = f.alphaMap : f.emissiveMap ? w = f.emissiveMap : f.clearcoatMap ? w = f.clearcoatMap : f.clearcoatNormalMap ? w = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? w = f.clearcoatRoughnessMap : f.iridescenceMap ? w = f.iridescenceMap : f.iridescenceThicknessMap ? w = f.iridescenceThicknessMap : f.specularIntensityMap ? w = f.specularIntensityMap : f.specularColorMap ? w = f.specularColorMap : f.transmissionMap ? w = f.transmissionMap : f.thicknessMap ? w = f.thicknessMap : f.sheenColorMap ? w = f.sheenColorMap : f.sheenRoughnessMap && (w = f.sheenRoughnessMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), g.uvTransform.value.copy(w.matrix));
    let x;
    f.aoMap ? x = f.aoMap : f.lightMap && (x = f.lightMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), g.uv2Transform.value.copy(x.matrix));
  }
  function s(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity;
  }
  function o(g, f) {
    g.dashSize.value = f.dashSize, g.totalSize.value = f.dashSize + f.gapSize, g.scale.value = f.scale;
  }
  function a(g, f, v, w) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.size.value = f.size * v, g.scale.value = w * 0.5, f.map && (g.map.value = f.map), f.alphaMap && (g.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
    let x;
    f.map ? x = f.map : f.alphaMap && (x = f.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), g.uvTransform.value.copy(x.matrix));
  }
  function c(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.rotation.value = f.rotation, f.map && (g.map.value = f.map), f.alphaMap && (g.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
    let v;
    f.map ? v = f.map : f.alphaMap && (v = f.alphaMap), v !== void 0 && (v.matrixAutoUpdate === !0 && v.updateMatrix(), g.uvTransform.value.copy(v.matrix));
  }
  function l(g, f) {
    g.specular.value.copy(f.specular), g.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(g, f) {
    f.gradientMap && (g.gradientMap.value = f.gradientMap);
  }
  function u(g, f) {
    g.roughness.value = f.roughness, g.metalness.value = f.metalness, f.roughnessMap && (g.roughnessMap.value = f.roughnessMap), f.metalnessMap && (g.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (g.envMapIntensity.value = f.envMapIntensity);
  }
  function d(g, f, v) {
    g.ior.value = f.ior, f.sheen > 0 && (g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), g.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (g.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (g.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (g.clearcoat.value = f.clearcoat, g.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (g.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), g.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === un && g.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (g.iridescence.value = f.iridescence, g.iridescenceIOR.value = f.iridescenceIOR, g.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (g.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (g.transmission.value = f.transmission, g.transmissionSamplerMap.value = v.texture, g.transmissionSamplerSize.value.set(v.width, v.height), f.transmissionMap && (g.transmissionMap.value = f.transmissionMap), g.thickness.value = f.thickness, f.thicknessMap && (g.thicknessMap.value = f.thicknessMap), g.attenuationDistance.value = f.attenuationDistance, g.attenuationColor.value.copy(f.attenuationColor)), g.specularIntensity.value = f.specularIntensity, g.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (g.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (g.specularColorMap.value = f.specularColorMap);
  }
  function p(g, f) {
    f.matcap && (g.matcap.value = f.matcap);
  }
  function m(g, f) {
    g.referencePosition.value.copy(f.referencePosition), g.nearDistance.value = f.nearDistance, g.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function cm(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(35375) : 0;
  function c(w, x) {
    const _ = x.program;
    n.uniformBlockBinding(w, _);
  }
  function l(w, x) {
    let _ = r[w.id];
    _ === void 0 && (m(w), _ = h(w), r[w.id] = _, w.addEventListener("dispose", f));
    const y = x.program;
    n.updateUBOMapping(w, y);
    const P = e.render.frame;
    s[w.id] !== P && (d(w), s[w.id] = P);
  }
  function h(w) {
    const x = u();
    w.__bindingPointIndex = x;
    const _ = i.createBuffer(), y = w.__size, P = w.usage;
    return i.bindBuffer(35345, _), i.bufferData(35345, y, P), i.bindBuffer(35345, null), i.bindBufferBase(35345, x, _), _;
  }
  function u() {
    for (let w = 0; w < a; w++)
      if (o.indexOf(w) === -1)
        return o.push(w), w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(w) {
    const x = r[w.id], _ = w.uniforms, y = w.__cache;
    i.bindBuffer(35345, x);
    for (let P = 0, z = _.length; P < z; P++) {
      const b = _[P];
      if (p(b, P, y) === !0) {
        const L = b.__offset, R = Array.isArray(b.value) ? b.value : [b.value];
        let W = 0;
        for (let V = 0; V < R.length; V++) {
          const F = R[V], k = g(F);
          typeof F == "number" ? (b.__data[0] = F, i.bufferSubData(35345, L + W, b.__data)) : F.isMatrix3 ? (b.__data[0] = F.elements[0], b.__data[1] = F.elements[1], b.__data[2] = F.elements[2], b.__data[3] = F.elements[0], b.__data[4] = F.elements[3], b.__data[5] = F.elements[4], b.__data[6] = F.elements[5], b.__data[7] = F.elements[0], b.__data[8] = F.elements[6], b.__data[9] = F.elements[7], b.__data[10] = F.elements[8], b.__data[11] = F.elements[0]) : (F.toArray(b.__data, W), W += k.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(35345, L, b.__data);
      }
    }
    i.bindBuffer(35345, null);
  }
  function p(w, x, _) {
    const y = w.value;
    if (_[x] === void 0) {
      if (typeof y == "number")
        _[x] = y;
      else {
        const P = Array.isArray(y) ? y : [y], z = [];
        for (let b = 0; b < P.length; b++)
          z.push(P[b].clone());
        _[x] = z;
      }
      return !0;
    } else if (typeof y == "number") {
      if (_[x] !== y)
        return _[x] = y, !0;
    } else {
      const P = Array.isArray(_[x]) ? _[x] : [_[x]], z = Array.isArray(y) ? y : [y];
      for (let b = 0; b < P.length; b++) {
        const L = P[b];
        if (L.equals(z[b]) === !1)
          return L.copy(z[b]), !0;
      }
    }
    return !1;
  }
  function m(w) {
    const x = w.uniforms;
    let _ = 0;
    const y = 16;
    let P = 0;
    for (let z = 0, b = x.length; z < b; z++) {
      const L = x[z], R = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, W = Array.isArray(L.value) ? L.value : [L.value];
      for (let V = 0, F = W.length; V < F; V++) {
        const k = W[V], D = g(k);
        R.boundary += D.boundary, R.storage += D.storage;
      }
      if (L.__data = new Float32Array(R.storage / Float32Array.BYTES_PER_ELEMENT), L.__offset = _, z > 0) {
        P = _ % y;
        const V = y - P;
        P !== 0 && V - R.boundary < 0 && (_ += y - P, L.__offset = _);
      }
      _ += R.storage;
    }
    return P = _ % y, P > 0 && (_ += y - P), w.__size = _, w.__cache = {}, this;
  }
  function g(w) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof w == "number" ? (x.boundary = 4, x.storage = 4) : w.isVector2 ? (x.boundary = 8, x.storage = 8) : w.isVector3 || w.isColor ? (x.boundary = 16, x.storage = 12) : w.isVector4 ? (x.boundary = 16, x.storage = 16) : w.isMatrix3 ? (x.boundary = 48, x.storage = 48) : w.isMatrix4 ? (x.boundary = 64, x.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), x;
  }
  function f(w) {
    const x = w.target;
    x.removeEventListener("dispose", f);
    const _ = o.indexOf(x.__bindingPointIndex);
    o.splice(_, 1), i.deleteBuffer(r[x.id]), delete r[x.id], delete s[x.id];
  }
  function v() {
    for (const w in r)
      i.deleteBuffer(r[w]);
    o = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: v
  };
}
function hm() {
  const i = Mr("canvas");
  return i.style.display = "block", i;
}
function ma(i = {}) {
  this.isWebGLRenderer = !0;
  const e = i.canvas !== void 0 ? i.canvas : hm(), t = i.context !== void 0 ? i.context : null, n = i.depth !== void 0 ? i.depth : !0, r = i.stencil !== void 0 ? i.stencil : !0, s = i.antialias !== void 0 ? i.antialias : !1, o = i.premultipliedAlpha !== void 0 ? i.premultipliedAlpha : !0, a = i.preserveDrawingBuffer !== void 0 ? i.preserveDrawingBuffer : !1, c = i.powerPreference !== void 0 ? i.powerPreference : "default", l = i.failIfMajorPerformanceCaveat !== void 0 ? i.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = i.alpha !== void 0 ? i.alpha : !1;
  let u = null, d = null;
  const p = [], m = [];
  this.domElement = e, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = xi, this.physicallyCorrectLights = !1, this.toneMapping = Bn, this.toneMappingExposure = 1;
  const g = this;
  let f = !1, v = 0, w = 0, x = null, _ = -1, y = null;
  const P = new lt(), z = new lt();
  let b = null, L = e.width, R = e.height, W = 1, V = null, F = null;
  const k = new lt(0, 0, L, R), D = new lt(0, 0, L, R);
  let G = !1;
  const E = new pa();
  let M = !1, X = !1, ee = null;
  const ne = new ut(), Q = new ye(), de = new J(), T = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function C() {
    return x === null ? W : 1;
  }
  let S = t;
  function A(B, he) {
    for (let ge = 0; ge < B.length; ge++) {
      const ae = B[ge], xe = e.getContext(ae, he);
      if (xe !== null)
        return xe;
    }
    return null;
  }
  try {
    const B = {
      alpha: !0,
      depth: n,
      stencil: r,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${da}`), e.addEventListener("webglcontextlost", Fe, !1), e.addEventListener("webglcontextrestored", ke, !1), e.addEventListener("webglcontextcreationerror", $e, !1), S === null) {
      const he = ["webgl2", "webgl", "experimental-webgl"];
      if (g.isWebGL1Renderer === !0 && he.shift(), S = A(he, B), S === null)
        throw A(he) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    S.getShaderPrecisionFormat === void 0 && (S.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (B) {
    throw console.error("THREE.WebGLRenderer: " + B.message), B;
  }
  let U, Z, $, fe, q, K, j, se, le, _e, Y, O, Se, Ae, N, I, oe, me, ve, Pe, Me, H, re, Ee;
  function Re() {
    U = new b0(S), Z = new g0(S, U, i), U.init(Z), H = new im(S, U, Z), $ = new tm(S, U, Z), fe = new M0(), q = new Gg(), K = new nm(S, U, $, q, Z, H, fe), j = new x0(g), se = new v0(g), le = new Ru(S, Z), re = new f0(S, U, le, Z), _e = new S0(S, le, fe, re), Y = new A0(S, _e, le, fe), ve = new T0(S, Z, K), I = new m0(q), O = new Bg(g, j, se, U, Z, re, I), Se = new lm(g, q), Ae = new $g(), N = new jg(U, Z), me = new u0(g, j, se, $, Y, h, o), oe = new em(g, Y, Z), Ee = new cm(S, fe, Z, $), Pe = new p0(S, U, fe, Z), Me = new w0(S, U, fe, Z), fe.programs = O.programs, g.capabilities = Z, g.extensions = U, g.properties = q, g.renderLists = Ae, g.shadowMap = oe, g.state = $, g.info = fe;
  }
  Re();
  const ze = new am(g, S);
  this.xr = ze, this.getContext = function() {
    return S;
  }, this.getContextAttributes = function() {
    return S.getContextAttributes();
  }, this.forceContextLoss = function() {
    const B = U.get("WEBGL_lose_context");
    B && B.loseContext();
  }, this.forceContextRestore = function() {
    const B = U.get("WEBGL_lose_context");
    B && B.restoreContext();
  }, this.getPixelRatio = function() {
    return W;
  }, this.setPixelRatio = function(B) {
    B !== void 0 && (W = B, this.setSize(L, R, !1));
  }, this.getSize = function(B) {
    return B.set(L, R);
  }, this.setSize = function(B, he, ge) {
    if (ze.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    L = B, R = he, e.width = Math.floor(B * W), e.height = Math.floor(he * W), ge !== !1 && (e.style.width = B + "px", e.style.height = he + "px"), this.setViewport(0, 0, B, he);
  }, this.getDrawingBufferSize = function(B) {
    return B.set(L * W, R * W).floor();
  }, this.setDrawingBufferSize = function(B, he, ge) {
    L = B, R = he, W = ge, e.width = Math.floor(B * ge), e.height = Math.floor(he * ge), this.setViewport(0, 0, B, he);
  }, this.getCurrentViewport = function(B) {
    return B.copy(P);
  }, this.getViewport = function(B) {
    return B.copy(k);
  }, this.setViewport = function(B, he, ge, ae) {
    B.isVector4 ? k.set(B.x, B.y, B.z, B.w) : k.set(B, he, ge, ae), $.viewport(P.copy(k).multiplyScalar(W).floor());
  }, this.getScissor = function(B) {
    return B.copy(D);
  }, this.setScissor = function(B, he, ge, ae) {
    B.isVector4 ? D.set(B.x, B.y, B.z, B.w) : D.set(B, he, ge, ae), $.scissor(z.copy(D).multiplyScalar(W).floor());
  }, this.getScissorTest = function() {
    return G;
  }, this.setScissorTest = function(B) {
    $.setScissorTest(G = B);
  }, this.setOpaqueSort = function(B) {
    V = B;
  }, this.setTransparentSort = function(B) {
    F = B;
  }, this.getClearColor = function(B) {
    return B.copy(me.getClearColor());
  }, this.setClearColor = function() {
    me.setClearColor.apply(me, arguments);
  }, this.getClearAlpha = function() {
    return me.getClearAlpha();
  }, this.setClearAlpha = function() {
    me.setClearAlpha.apply(me, arguments);
  }, this.clear = function(B = !0, he = !0, ge = !0) {
    let ae = 0;
    B && (ae |= 16384), he && (ae |= 256), ge && (ae |= 1024), S.clear(ae);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", Fe, !1), e.removeEventListener("webglcontextrestored", ke, !1), e.removeEventListener("webglcontextcreationerror", $e, !1), Ae.dispose(), N.dispose(), q.dispose(), j.dispose(), se.dispose(), Y.dispose(), re.dispose(), Ee.dispose(), O.dispose(), ze.dispose(), ze.removeEventListener("sessionstart", De), ze.removeEventListener("sessionend", Ue), ee && (ee.dispose(), ee = null), Je.stop();
  };
  function Fe(B) {
    B.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function ke() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const B = fe.autoReset, he = oe.enabled, ge = oe.autoUpdate, ae = oe.needsUpdate, xe = oe.type;
    Re(), fe.autoReset = B, oe.enabled = he, oe.autoUpdate = ge, oe.needsUpdate = ae, oe.type = xe;
  }
  function $e(B) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", B.statusMessage);
  }
  function Xe(B) {
    const he = B.target;
    he.removeEventListener("dispose", Xe), et(he);
  }
  function et(B) {
    ie(B), q.remove(B);
  }
  function ie(B) {
    const he = q.get(B).programs;
    he !== void 0 && (he.forEach(function(ge) {
      O.releaseProgram(ge);
    }), B.isShaderMaterial && O.releaseShaderCache(B));
  }
  this.renderBufferDirect = function(B, he, ge, ae, xe, Be) {
    he === null && (he = T);
    const Ge = xe.isMesh && xe.matrixWorld.determinant() < 0, He = Us(B, he, ge, ae, xe);
    $.setMaterial(ae, Ge);
    let Ve = ge.index, Ke = 1;
    ae.wireframe === !0 && (Ve = _e.getWireframeAttribute(ge), Ke = 2);
    const qe = ge.drawRange, je = ge.attributes.position;
    let mt = qe.start * Ke, qt = (qe.start + qe.count) * Ke;
    Be !== null && (mt = Math.max(mt, Be.start * Ke), qt = Math.min(qt, (Be.start + Be.count) * Ke)), Ve !== null ? (mt = Math.max(mt, 0), qt = Math.min(qt, Ve.count)) : je != null && (mt = Math.max(mt, 0), qt = Math.min(qt, je.count));
    const zn = qt - mt;
    if (zn < 0 || zn === 1 / 0)
      return;
    re.setup(xe, ae, He, ge, Ve);
    let Jn, xt = Pe;
    if (Ve !== null && (Jn = le.get(Ve), xt = Me, xt.setIndex(Jn)), xe.isMesh)
      ae.wireframe === !0 ? ($.setLineWidth(ae.wireframeLinewidth * C()), xt.setMode(1)) : xt.setMode(4);
    else if (xe.isLine) {
      let Ze = ae.linewidth;
      Ze === void 0 && (Ze = 1), $.setLineWidth(Ze * C()), xe.isLineSegments ? xt.setMode(1) : xe.isLineLoop ? xt.setMode(2) : xt.setMode(3);
    } else
      xe.isPoints ? xt.setMode(0) : xe.isSprite && xt.setMode(4);
    if (xe.isInstancedMesh)
      xt.renderInstances(mt, zn, xe.count);
    else if (ge.isInstancedBufferGeometry) {
      const Ze = ge._maxInstanceCount !== void 0 ? ge._maxInstanceCount : 1 / 0, Bs = Math.min(ge.instanceCount, Ze);
      xt.renderInstances(mt, zn, Bs);
    } else
      xt.render(mt, zn);
  }, this.compile = function(B, he) {
    function ge(ae, xe, Be) {
      ae.transparent === !0 && ae.side === Dr ? (ae.side = un, ae.needsUpdate = !0, Bt(ae, xe, Be), ae.side = gi, ae.needsUpdate = !0, Bt(ae, xe, Be), ae.side = Dr) : Bt(ae, xe, Be);
    }
    d = N.get(B), d.init(), m.push(d), B.traverseVisible(function(ae) {
      ae.isLight && ae.layers.test(he.layers) && (d.pushLight(ae), ae.castShadow && d.pushShadow(ae));
    }), d.setupLights(g.physicallyCorrectLights), B.traverse(function(ae) {
      const xe = ae.material;
      if (xe)
        if (Array.isArray(xe))
          for (let Be = 0; Be < xe.length; Be++) {
            const Ge = xe[Be];
            ge(Ge, B, ae);
          }
        else
          ge(xe, B, ae);
    }), m.pop(), d = null;
  };
  let pe = null;
  function we(B) {
    pe && pe(B);
  }
  function De() {
    Je.stop();
  }
  function Ue() {
    Je.start();
  }
  const Je = new Qc();
  Je.setAnimationLoop(we), typeof self < "u" && Je.setContext(self), this.setAnimationLoop = function(B) {
    pe = B, ze.setAnimationLoop(B), B === null ? Je.stop() : Je.start();
  }, ze.addEventListener("sessionstart", De), ze.addEventListener("sessionend", Ue), this.render = function(B, he) {
    if (he !== void 0 && he.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    B.matrixWorldAutoUpdate === !0 && B.updateMatrixWorld(), he.parent === null && he.matrixWorldAutoUpdate === !0 && he.updateMatrixWorld(), ze.enabled === !0 && ze.isPresenting === !0 && (ze.cameraAutoUpdate === !0 && ze.updateCamera(he), he = ze.getCamera()), B.isScene === !0 && B.onBeforeRender(g, B, he, x), d = N.get(B, m.length), d.init(), m.push(d), ne.multiplyMatrices(he.projectionMatrix, he.matrixWorldInverse), E.setFromProjectionMatrix(ne), X = this.localClippingEnabled, M = I.init(this.clippingPlanes, X, he), u = Ae.get(B, p.length), u.init(), p.push(u), gt(B, he, 0, g.sortObjects), u.finish(), g.sortObjects === !0 && u.sort(V, F), M === !0 && I.beginShadows();
    const ge = d.state.shadowsArray;
    if (oe.render(ge, B, he), M === !0 && I.endShadows(), this.info.autoReset === !0 && this.info.reset(), me.render(u, B), d.setupLights(g.physicallyCorrectLights), he.isArrayCamera) {
      const ae = he.cameras;
      for (let xe = 0, Be = ae.length; xe < Be; xe++) {
        const Ge = ae[xe];
        Mt(u, B, Ge, Ge.viewport);
      }
    } else
      Mt(u, B, he);
    x !== null && (K.updateMultisampleRenderTarget(x), K.updateRenderTargetMipmap(x)), B.isScene === !0 && B.onAfterRender(g, B, he), re.resetDefaultState(), _ = -1, y = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null, p.pop(), p.length > 0 ? u = p[p.length - 1] : u = null;
  };
  function gt(B, he, ge, ae) {
    if (B.visible === !1)
      return;
    if (B.layers.test(he.layers)) {
      if (B.isGroup)
        ge = B.renderOrder;
      else if (B.isLOD)
        B.autoUpdate === !0 && B.update(he);
      else if (B.isLight)
        d.pushLight(B), B.castShadow && d.pushShadow(B);
      else if (B.isSprite) {
        if (!B.frustumCulled || E.intersectsSprite(B)) {
          ae && de.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ne);
          const Ge = Y.update(B), He = B.material;
          He.visible && u.push(B, Ge, He, ge, de.z, null);
        }
      } else if ((B.isMesh || B.isLine || B.isPoints) && (B.isSkinnedMesh && B.skeleton.frame !== fe.render.frame && (B.skeleton.update(), B.skeleton.frame = fe.render.frame), !B.frustumCulled || E.intersectsObject(B))) {
        ae && de.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ne);
        const Ge = Y.update(B), He = B.material;
        if (Array.isArray(He)) {
          const Ve = Ge.groups;
          for (let Ke = 0, qe = Ve.length; Ke < qe; Ke++) {
            const je = Ve[Ke], mt = He[je.materialIndex];
            mt && mt.visible && u.push(B, Ge, mt, ge, de.z, je);
          }
        } else
          He.visible && u.push(B, Ge, He, ge, de.z, null);
      }
    }
    const Be = B.children;
    for (let Ge = 0, He = Be.length; Ge < He; Ge++)
      gt(Be[Ge], he, ge, ae);
  }
  function Mt(B, he, ge, ae) {
    const xe = B.opaque, Be = B.transmissive, Ge = B.transparent;
    d.setupLightsView(ge), Be.length > 0 && Ln(xe, he, ge), ae && $.viewport(P.copy(ae)), xe.length > 0 && Ie(xe, he, ge), Be.length > 0 && Ie(Be, he, ge), Ge.length > 0 && Ie(Ge, he, ge), $.buffers.depth.setTest(!0), $.buffers.depth.setMask(!0), $.buffers.color.setMask(!0), $.setPolygonOffset(!1);
  }
  function Ln(B, he, ge) {
    const ae = Z.isWebGL2;
    ee === null && (ee = new yi(1, 1, {
      generateMipmaps: !0,
      type: U.has("EXT_color_buffer_half_float") ? Sr : mi,
      minFilter: br,
      samples: ae && s === !0 ? 4 : 0
    })), g.getDrawingBufferSize(Q), ae ? ee.setSize(Q.x, Q.y) : ee.setSize(Jo(Q.x), Jo(Q.y));
    const xe = g.getRenderTarget();
    g.setRenderTarget(ee), g.clear();
    const Be = g.toneMapping;
    g.toneMapping = Bn, Ie(B, he, ge), g.toneMapping = Be, K.updateMultisampleRenderTarget(ee), K.updateRenderTargetMipmap(ee), g.setRenderTarget(xe);
  }
  function Ie(B, he, ge) {
    const ae = he.isScene === !0 ? he.overrideMaterial : null;
    for (let xe = 0, Be = B.length; xe < Be; xe++) {
      const Ge = B[xe], He = Ge.object, Ve = Ge.geometry, Ke = ae === null ? Ge.material : ae, qe = Ge.group;
      He.layers.test(ge.layers) && an(He, he, ge, Ve, Ke, qe);
    }
  }
  function an(B, he, ge, ae, xe, Be) {
    B.onBeforeRender(g, he, ge, ae, xe, Be), B.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse, B.matrixWorld), B.normalMatrix.getNormalMatrix(B.modelViewMatrix), xe.onBeforeRender(g, he, ge, ae, B, Be), xe.transparent === !0 && xe.side === Dr ? (xe.side = un, xe.needsUpdate = !0, g.renderBufferDirect(ge, he, ae, xe, B, Be), xe.side = gi, xe.needsUpdate = !0, g.renderBufferDirect(ge, he, ae, xe, B, Be), xe.side = Dr) : g.renderBufferDirect(ge, he, ae, xe, B, Be), B.onAfterRender(g, he, ge, ae, xe, Be);
  }
  function Bt(B, he, ge) {
    he.isScene !== !0 && (he = T);
    const ae = q.get(B), xe = d.state.lights, Be = d.state.shadowsArray, Ge = xe.state.version, He = O.getParameters(B, xe.state, Be, he, ge), Ve = O.getProgramCacheKey(He);
    let Ke = ae.programs;
    ae.environment = B.isMeshStandardMaterial ? he.environment : null, ae.fog = he.fog, ae.envMap = (B.isMeshStandardMaterial ? se : j).get(B.envMap || ae.environment), Ke === void 0 && (B.addEventListener("dispose", Xe), Ke = /* @__PURE__ */ new Map(), ae.programs = Ke);
    let qe = Ke.get(Ve);
    if (qe !== void 0) {
      if (ae.currentProgram === qe && ae.lightsStateVersion === Ge)
        return Rr(B, He), qe;
    } else
      He.uniforms = O.getUniforms(B), B.onBuild(ge, He, g), B.onBeforeCompile(He, g), qe = O.acquireProgram(He, Ve), Ke.set(Ve, qe), ae.uniforms = He.uniforms;
    const je = ae.uniforms;
    (!B.isShaderMaterial && !B.isRawShaderMaterial || B.clipping === !0) && (je.clippingPlanes = I.uniform), Rr(B, He), ae.needsLights = vh(B), ae.lightsStateVersion = Ge, ae.needsLights && (je.ambientLightColor.value = xe.state.ambient, je.lightProbe.value = xe.state.probe, je.directionalLights.value = xe.state.directional, je.directionalLightShadows.value = xe.state.directionalShadow, je.spotLights.value = xe.state.spot, je.spotLightShadows.value = xe.state.spotShadow, je.rectAreaLights.value = xe.state.rectArea, je.ltc_1.value = xe.state.rectAreaLTC1, je.ltc_2.value = xe.state.rectAreaLTC2, je.pointLights.value = xe.state.point, je.pointLightShadows.value = xe.state.pointShadow, je.hemisphereLights.value = xe.state.hemi, je.directionalShadowMap.value = xe.state.directionalShadowMap, je.directionalShadowMatrix.value = xe.state.directionalShadowMatrix, je.spotShadowMap.value = xe.state.spotShadowMap, je.spotLightMatrix.value = xe.state.spotLightMatrix, je.spotLightMap.value = xe.state.spotLightMap, je.pointShadowMap.value = xe.state.pointShadowMap, je.pointShadowMatrix.value = xe.state.pointShadowMatrix);
    const mt = qe.getUniforms(), qt = xs.seqWithValue(mt.seq, je);
    return ae.currentProgram = qe, ae.uniformsList = qt, qe;
  }
  function Rr(B, he) {
    const ge = q.get(B);
    ge.outputEncoding = he.outputEncoding, ge.instancing = he.instancing, ge.skinning = he.skinning, ge.morphTargets = he.morphTargets, ge.morphNormals = he.morphNormals, ge.morphColors = he.morphColors, ge.morphTargetsCount = he.morphTargetsCount, ge.numClippingPlanes = he.numClippingPlanes, ge.numIntersection = he.numClipIntersection, ge.vertexAlphas = he.vertexAlphas, ge.vertexTangents = he.vertexTangents, ge.toneMapping = he.toneMapping;
  }
  function Us(B, he, ge, ae, xe) {
    he.isScene !== !0 && (he = T), K.resetTextureUnits();
    const Be = he.fog, Ge = ae.isMeshStandardMaterial ? he.environment : null, He = x === null ? g.outputEncoding : x.isXRRenderTarget === !0 ? x.texture.encoding : xi, Ve = (ae.isMeshStandardMaterial ? se : j).get(ae.envMap || Ge), Ke = ae.vertexColors === !0 && !!ge.attributes.color && ge.attributes.color.itemSize === 4, qe = !!ae.normalMap && !!ge.attributes.tangent, je = !!ge.morphAttributes.position, mt = !!ge.morphAttributes.normal, qt = !!ge.morphAttributes.color, zn = ae.toneMapped ? g.toneMapping : Bn, Jn = ge.morphAttributes.position || ge.morphAttributes.normal || ge.morphAttributes.color, xt = Jn !== void 0 ? Jn.length : 0, Ze = q.get(ae), Bs = d.state.lights;
    if (M === !0 && (X === !0 || B !== y)) {
      const jt = B === y && ae.id === _;
      I.setState(ae, B, jt);
    }
    let Ct = !1;
    ae.version === Ze.__version ? (Ze.needsLights && Ze.lightsStateVersion !== Bs.state.version || Ze.outputEncoding !== He || xe.isInstancedMesh && Ze.instancing === !1 || !xe.isInstancedMesh && Ze.instancing === !0 || xe.isSkinnedMesh && Ze.skinning === !1 || !xe.isSkinnedMesh && Ze.skinning === !0 || Ze.envMap !== Ve || ae.fog === !0 && Ze.fog !== Be || Ze.numClippingPlanes !== void 0 && (Ze.numClippingPlanes !== I.numPlanes || Ze.numIntersection !== I.numIntersection) || Ze.vertexAlphas !== Ke || Ze.vertexTangents !== qe || Ze.morphTargets !== je || Ze.morphNormals !== mt || Ze.morphColors !== qt || Ze.toneMapping !== zn || Z.isWebGL2 === !0 && Ze.morphTargetsCount !== xt) && (Ct = !0) : (Ct = !0, Ze.__version = ae.version);
    let Kn = Ze.currentProgram;
    Ct === !0 && (Kn = Bt(ae, he, xe));
    let Sa = !1, ir = !1, Gs = !1;
    const Dt = Kn.getUniforms(), Qn = Ze.uniforms;
    if ($.useProgram(Kn.program) && (Sa = !0, ir = !0, Gs = !0), ae.id !== _ && (_ = ae.id, ir = !0), Sa || y !== B) {
      if (Dt.setValue(S, "projectionMatrix", B.projectionMatrix), Z.logarithmicDepthBuffer && Dt.setValue(
        S,
        "logDepthBufFC",
        2 / (Math.log(B.far + 1) / Math.LN2)
      ), y !== B && (y = B, ir = !0, Gs = !0), ae.isShaderMaterial || ae.isMeshPhongMaterial || ae.isMeshToonMaterial || ae.isMeshStandardMaterial || ae.envMap) {
        const jt = Dt.map.cameraPosition;
        jt !== void 0 && jt.setValue(
          S,
          de.setFromMatrixPosition(B.matrixWorld)
        );
      }
      (ae.isMeshPhongMaterial || ae.isMeshToonMaterial || ae.isMeshLambertMaterial || ae.isMeshBasicMaterial || ae.isMeshStandardMaterial || ae.isShaderMaterial) && Dt.setValue(S, "isOrthographic", B.isOrthographicCamera === !0), (ae.isMeshPhongMaterial || ae.isMeshToonMaterial || ae.isMeshLambertMaterial || ae.isMeshBasicMaterial || ae.isMeshStandardMaterial || ae.isShaderMaterial || ae.isShadowMaterial || xe.isSkinnedMesh) && Dt.setValue(S, "viewMatrix", B.matrixWorldInverse);
    }
    if (xe.isSkinnedMesh) {
      Dt.setOptional(S, xe, "bindMatrix"), Dt.setOptional(S, xe, "bindMatrixInverse");
      const jt = xe.skeleton;
      jt && (Z.floatVertexTextures ? (jt.boneTexture === null && jt.computeBoneTexture(), Dt.setValue(S, "boneTexture", jt.boneTexture, K), Dt.setValue(S, "boneTextureSize", jt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Ws = ge.morphAttributes;
    if ((Ws.position !== void 0 || Ws.normal !== void 0 || Ws.color !== void 0 && Z.isWebGL2 === !0) && ve.update(xe, ge, ae, Kn), (ir || Ze.receiveShadow !== xe.receiveShadow) && (Ze.receiveShadow = xe.receiveShadow, Dt.setValue(S, "receiveShadow", xe.receiveShadow)), ae.isMeshGouraudMaterial && ae.envMap !== null && (Qn.envMap.value = Ve, Qn.flipEnvMap.value = Ve.isCubeTexture && Ve.isRenderTargetTexture === !1 ? -1 : 1), ir && (Dt.setValue(S, "toneMappingExposure", g.toneMappingExposure), Ze.needsLights && nr(Qn, Gs), Be && ae.fog === !0 && Se.refreshFogUniforms(Qn, Be), Se.refreshMaterialUniforms(Qn, ae, W, R, ee), xs.upload(S, Ze.uniformsList, Qn, K)), ae.isShaderMaterial && ae.uniformsNeedUpdate === !0 && (xs.upload(S, Ze.uniformsList, Qn, K), ae.uniformsNeedUpdate = !1), ae.isSpriteMaterial && Dt.setValue(S, "center", xe.center), Dt.setValue(S, "modelViewMatrix", xe.modelViewMatrix), Dt.setValue(S, "normalMatrix", xe.normalMatrix), Dt.setValue(S, "modelMatrix", xe.matrixWorld), ae.isShaderMaterial || ae.isRawShaderMaterial) {
      const jt = ae.uniformsGroups;
      for (let $s = 0, bh = jt.length; $s < bh; $s++)
        if (Z.isWebGL2) {
          const wa = jt[$s];
          Ee.update(wa, Kn), Ee.bind(wa, Kn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Kn;
  }
  function nr(B, he) {
    B.ambientLightColor.needsUpdate = he, B.lightProbe.needsUpdate = he, B.directionalLights.needsUpdate = he, B.directionalLightShadows.needsUpdate = he, B.pointLights.needsUpdate = he, B.pointLightShadows.needsUpdate = he, B.spotLights.needsUpdate = he, B.spotLightShadows.needsUpdate = he, B.rectAreaLights.needsUpdate = he, B.hemisphereLights.needsUpdate = he;
  }
  function vh(B) {
    return B.isMeshLambertMaterial || B.isMeshToonMaterial || B.isMeshPhongMaterial || B.isMeshStandardMaterial || B.isShadowMaterial || B.isShaderMaterial && B.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return v;
  }, this.getActiveMipmapLevel = function() {
    return w;
  }, this.getRenderTarget = function() {
    return x;
  }, this.setRenderTargetTextures = function(B, he, ge) {
    q.get(B.texture).__webglTexture = he, q.get(B.depthTexture).__webglTexture = ge;
    const ae = q.get(B);
    ae.__hasExternalTextures = !0, ae.__hasExternalTextures && (ae.__autoAllocateDepthBuffer = ge === void 0, ae.__autoAllocateDepthBuffer || U.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), ae.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(B, he) {
    const ge = q.get(B);
    ge.__webglFramebuffer = he, ge.__useDefaultFramebuffer = he === void 0;
  }, this.setRenderTarget = function(B, he = 0, ge = 0) {
    x = B, v = he, w = ge;
    let ae = !0, xe = null, Be = !1, Ge = !1;
    if (B) {
      const Ve = q.get(B);
      Ve.__useDefaultFramebuffer !== void 0 ? ($.bindFramebuffer(36160, null), ae = !1) : Ve.__webglFramebuffer === void 0 ? K.setupRenderTarget(B) : Ve.__hasExternalTextures && K.rebindTextures(B, q.get(B.texture).__webglTexture, q.get(B.depthTexture).__webglTexture);
      const Ke = B.texture;
      (Ke.isData3DTexture || Ke.isDataArrayTexture || Ke.isCompressedArrayTexture) && (Ge = !0);
      const qe = q.get(B).__webglFramebuffer;
      B.isWebGLCubeRenderTarget ? (xe = qe[he], Be = !0) : Z.isWebGL2 && B.samples > 0 && K.useMultisampledRTT(B) === !1 ? xe = q.get(B).__webglMultisampledFramebuffer : xe = qe, P.copy(B.viewport), z.copy(B.scissor), b = B.scissorTest;
    } else
      P.copy(k).multiplyScalar(W).floor(), z.copy(D).multiplyScalar(W).floor(), b = G;
    if ($.bindFramebuffer(36160, xe) && Z.drawBuffers && ae && $.drawBuffers(B, xe), $.viewport(P), $.scissor(z), $.setScissorTest(b), Be) {
      const Ve = q.get(B.texture);
      S.framebufferTexture2D(36160, 36064, 34069 + he, Ve.__webglTexture, ge);
    } else if (Ge) {
      const Ve = q.get(B.texture), Ke = he || 0;
      S.framebufferTextureLayer(36160, 36064, Ve.__webglTexture, ge || 0, Ke);
    }
    _ = -1;
  }, this.readRenderTargetPixels = function(B, he, ge, ae, xe, Be, Ge) {
    if (!(B && B.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let He = q.get(B).__webglFramebuffer;
    if (B.isWebGLCubeRenderTarget && Ge !== void 0 && (He = He[Ge]), He) {
      $.bindFramebuffer(36160, He);
      try {
        const Ve = B.texture, Ke = Ve.format, qe = Ve.type;
        if (Ke !== yn && H.convert(Ke) !== S.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const je = qe === Sr && (U.has("EXT_color_buffer_half_float") || Z.isWebGL2 && U.has("EXT_color_buffer_float"));
        if (qe !== mi && H.convert(qe) !== S.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(qe === li && (Z.isWebGL2 || U.has("OES_texture_float") || U.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !je) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        he >= 0 && he <= B.width - ae && ge >= 0 && ge <= B.height - xe && S.readPixels(he, ge, ae, xe, H.convert(Ke), H.convert(qe), Be);
      } finally {
        const Ve = x !== null ? q.get(x).__webglFramebuffer : null;
        $.bindFramebuffer(36160, Ve);
      }
    }
  }, this.copyFramebufferToTexture = function(B, he, ge = 0) {
    const ae = Math.pow(2, -ge), xe = Math.floor(he.image.width * ae), Be = Math.floor(he.image.height * ae);
    K.setTexture2D(he, 0), S.copyTexSubImage2D(3553, ge, 0, 0, B.x, B.y, xe, Be), $.unbindTexture();
  }, this.copyTextureToTexture = function(B, he, ge, ae = 0) {
    const xe = he.image.width, Be = he.image.height, Ge = H.convert(ge.format), He = H.convert(ge.type);
    K.setTexture2D(ge, 0), S.pixelStorei(37440, ge.flipY), S.pixelStorei(37441, ge.premultiplyAlpha), S.pixelStorei(3317, ge.unpackAlignment), he.isDataTexture ? S.texSubImage2D(3553, ae, B.x, B.y, xe, Be, Ge, He, he.image.data) : he.isCompressedTexture ? S.compressedTexSubImage2D(3553, ae, B.x, B.y, he.mipmaps[0].width, he.mipmaps[0].height, Ge, he.mipmaps[0].data) : S.texSubImage2D(3553, ae, B.x, B.y, Ge, He, he.image), ae === 0 && ge.generateMipmaps && S.generateMipmap(3553), $.unbindTexture();
  }, this.copyTextureToTexture3D = function(B, he, ge, ae, xe = 0) {
    if (g.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const Be = B.max.x - B.min.x + 1, Ge = B.max.y - B.min.y + 1, He = B.max.z - B.min.z + 1, Ve = H.convert(ae.format), Ke = H.convert(ae.type);
    let qe;
    if (ae.isData3DTexture)
      K.setTexture3D(ae, 0), qe = 32879;
    else if (ae.isDataArrayTexture)
      K.setTexture2DArray(ae, 0), qe = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    S.pixelStorei(37440, ae.flipY), S.pixelStorei(37441, ae.premultiplyAlpha), S.pixelStorei(3317, ae.unpackAlignment);
    const je = S.getParameter(3314), mt = S.getParameter(32878), qt = S.getParameter(3316), zn = S.getParameter(3315), Jn = S.getParameter(32877), xt = ge.isCompressedTexture ? ge.mipmaps[0] : ge.image;
    S.pixelStorei(3314, xt.width), S.pixelStorei(32878, xt.height), S.pixelStorei(3316, B.min.x), S.pixelStorei(3315, B.min.y), S.pixelStorei(32877, B.min.z), ge.isDataTexture || ge.isData3DTexture ? S.texSubImage3D(qe, xe, he.x, he.y, he.z, Be, Ge, He, Ve, Ke, xt.data) : ge.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), S.compressedTexSubImage3D(qe, xe, he.x, he.y, he.z, Be, Ge, He, Ve, xt.data)) : S.texSubImage3D(qe, xe, he.x, he.y, he.z, Be, Ge, He, Ve, Ke, xt), S.pixelStorei(3314, je), S.pixelStorei(32878, mt), S.pixelStorei(3316, qt), S.pixelStorei(3315, zn), S.pixelStorei(32877, Jn), xe === 0 && ae.generateMipmaps && S.generateMipmap(qe), $.unbindTexture();
  }, this.initTexture = function(B) {
    B.isCubeTexture ? K.setTextureCube(B, 0) : B.isData3DTexture ? K.setTexture3D(B, 0) : B.isDataArrayTexture || B.isCompressedArrayTexture ? K.setTexture2DArray(B, 0) : K.setTexture2D(B, 0), $.unbindTexture();
  }, this.resetState = function() {
    v = 0, w = 0, x = null, $.reset(), re.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class dm extends ma {
}
dm.prototype.isWebGL1Renderer = !0;
class sh extends zt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class vn extends er {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new tt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ol = /* @__PURE__ */ new J(), Ul = /* @__PURE__ */ new J(), Bl = /* @__PURE__ */ new ut(), Mo = /* @__PURE__ */ new Xc(), es = /* @__PURE__ */ new Is();
class um extends zt {
  constructor(e = new on(), t = new vn()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Ol.fromBufferAttribute(t, r - 1), Ul.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Ol.distanceTo(Ul);
      e.setAttribute("lineDistance", new Tt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(r), es.radius += s, e.ray.intersectsSphere(es) === !1)
      return;
    Bl.copy(r).invert(), Mo.copy(e.ray).applyMatrix4(Bl);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new J(), h = new J(), u = new J(), d = new J(), p = this.isLineSegments ? 2 : 1, m = n.index, f = n.attributes.position;
    if (m !== null) {
      const v = Math.max(0, o.start), w = Math.min(m.count, o.start + o.count);
      for (let x = v, _ = w - 1; x < _; x += p) {
        const y = m.getX(x), P = m.getX(x + 1);
        if (l.fromBufferAttribute(f, y), h.fromBufferAttribute(f, P), Mo.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const b = e.ray.origin.distanceTo(d);
        b < e.near || b > e.far || t.push({
          distance: b,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const v = Math.max(0, o.start), w = Math.min(f.count, o.start + o.count);
      for (let x = v, _ = w - 1; x < _; x += p) {
        if (l.fromBufferAttribute(f, x), h.fromBufferAttribute(f, x + 1), Mo.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const P = e.ray.origin.distanceTo(d);
        P < e.near || P > e.far || t.push({
          distance: P,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Gl = /* @__PURE__ */ new J(), Wl = /* @__PURE__ */ new J();
class Tn extends um {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Gl.fromBufferAttribute(t, r), Wl.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Gl.distanceTo(Wl);
      e.setAttribute("lineDistance", new Tt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class An {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, r = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), s += n.distanceTo(r), t.push(s), r = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (r = Math.floor(a + (c - a) / 2), l = n[r] - o, l < 0)
        a = r + 1;
      else if (l > 0)
        c = r - 1;
      else {
        c = r;
        break;
      }
    if (r = c, n[r] === o)
      return r / (s - 1);
    const h = n[r], d = n[r + 1] - h, p = (o - h) / d;
    return (r + p) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let r = e - 1e-4, s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r), a = this.getPoint(s), c = t || (o.isVector2 ? new ye() : new J());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new J(), r = [], s = [], o = [], a = new J(), c = new ut();
    for (let p = 0; p <= e; p++) {
      const m = p / e;
      r[p] = this.getTangentAt(m, new J());
    }
    s[0] = new J(), o[0] = new J();
    let l = Number.MAX_VALUE;
    const h = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], a), o[0].crossVectors(r[0], s[0]);
    for (let p = 1; p <= e; p++) {
      if (s[p] = s[p - 1].clone(), o[p] = o[p - 1].clone(), a.crossVectors(r[p - 1], r[p]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(Et(r[p - 1].dot(r[p]), -1, 1));
        s[p].applyMatrix4(c.makeRotationAxis(a, m));
      }
      o[p].crossVectors(r[p], s[p]);
    }
    if (t === !0) {
      let p = Math.acos(Et(s[0].dot(s[e]), -1, 1));
      p /= e, r[0].dot(a.crossVectors(s[0], s[e])) > 0 && (p = -p);
      for (let m = 1; m <= e; m++)
        s[m].applyMatrix4(c.makeRotationAxis(r[m], p * m)), o[m].crossVectors(r[m], s[m]);
    }
    return {
      tangents: r,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class xa extends An {
  constructor(e = 0, t = 0, n = 1, r = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new ye(), r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; )
      s += r;
    for (; s > r; )
      s -= r;
    s < Number.EPSILON && (o ? s = 0 : s = r), this.aClockwise === !0 && !o && (s === r ? s = -r : s = s - r);
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, p = l - this.aY;
      c = d * h - p * u + this.aX, l = d * u + p * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class fm extends xa {
  constructor(e, t, n, r, s, o) {
    super(e, t, n, n, r, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function ya() {
  let i = 0, e = 0, t = 0, n = 0;
  function r(s, o, a, c) {
    i = s, e = a, t = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      r(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let d = (o - s) / l - (a - s) / (l + h) + (a - o) / h, p = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, p *= h, r(o, a, d, p);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return i + e * s + t * o + n * a;
    }
  };
}
const ts = /* @__PURE__ */ new J(), Co = /* @__PURE__ */ new ya(), Po = /* @__PURE__ */ new ya(), To = /* @__PURE__ */ new ya();
class pm extends An {
  constructor(e = [], t = !1, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
  }
  getPoint(e, t = new J()) {
    const n = t, r = this.points, s = r.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = r[(a - 1) % s] : (ts.subVectors(r[0], r[1]).add(r[0]), l = ts);
    const u = r[a % s], d = r[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = r[(a + 2) % s] : (ts.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), h = ts), this.curveType === "centripetal" || this.curveType === "chordal") {
      const p = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), p), g = Math.pow(u.distanceToSquared(d), p), f = Math.pow(d.distanceToSquared(h), p);
      g < 1e-4 && (g = 1), m < 1e-4 && (m = g), f < 1e-4 && (f = g), Co.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, g, f), Po.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, g, f), To.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, g, f);
    } else
      this.curveType === "catmullrom" && (Co.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Po.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), To.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Co.calc(c),
      Po.calc(c),
      To.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new J().fromArray(r));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function $l(i, e, t, n, r) {
  const s = (n - e) * 0.5, o = (r - t) * 0.5, a = i * i, c = i * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * i + t;
}
function gm(i, e) {
  const t = 1 - i;
  return t * t * e;
}
function mm(i, e) {
  return 2 * (1 - i) * i * e;
}
function xm(i, e) {
  return i * i * e;
}
function xr(i, e, t, n) {
  return gm(i, e) + mm(i, t) + xm(i, n);
}
function ym(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function _m(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function vm(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function bm(i, e) {
  return i * i * i * e;
}
function yr(i, e, t, n, r) {
  return ym(i, e) + _m(i, t) + vm(i, n) + bm(i, r);
}
class oh extends An {
  constructor(e = new ye(), t = new ye(), n = new ye(), r = new ye()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new ye()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      yr(e, r.x, s.x, o.x, a.x),
      yr(e, r.y, s.y, o.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Sm extends An {
  constructor(e = new J(), t = new J(), n = new J(), r = new J()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new J()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      yr(e, r.x, s.x, o.x, a.x),
      yr(e, r.y, s.y, o.y, a.y),
      yr(e, r.z, s.z, o.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class _a extends An {
  constructor(e = new ye(), t = new ye()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new ye()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const n = t || new ye();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class wm extends An {
  constructor(e = new J(), t = new J()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new J()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class ah extends An {
  constructor(e = new ye(), t = new ye(), n = new ye()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new ye()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      xr(e, r.x, s.x, o.x),
      xr(e, r.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Mm extends An {
  constructor(e = new J(), t = new J(), n = new J()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new J()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      xr(e, r.x, s.x, o.x),
      xr(e, r.y, s.y, o.y),
      xr(e, r.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class lh extends An {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new ye()) {
    const n = t, r = this.points, s = (r.length - 1) * e, o = Math.floor(s), a = s - o, c = r[o === 0 ? o : o - 1], l = r[o], h = r[o > r.length - 2 ? r.length - 1 : o + 1], u = r[o > r.length - 3 ? r.length - 1 : o + 2];
    return n.set(
      $l(a, c.x, l.x, h.x, u.x),
      $l(a, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new ye().fromArray(r));
    }
    return this;
  }
}
var ch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: fm,
  CatmullRomCurve3: pm,
  CubicBezierCurve: oh,
  CubicBezierCurve3: Sm,
  EllipseCurve: xa,
  LineCurve: _a,
  LineCurve3: wm,
  QuadraticBezierCurve: ah,
  QuadraticBezierCurve3: Mm,
  SplineCurve: lh
});
class Cm extends An {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new _a(t, e));
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length; ) {
      if (r[s] >= n) {
        const o = r[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, r = this.curves.length; n < r; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const o = s[r], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(r.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(new ch[r.type]().fromJSON(r));
    }
    return this;
  }
}
class Xi extends Cm {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new ye(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new _a(this.currentPoint.clone(), new ye(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, r) {
    const s = new ah(
      this.currentPoint.clone(),
      new ye(e, t),
      new ye(n, r)
    );
    return this.curves.push(s), this.currentPoint.set(n, r), this;
  }
  bezierCurveTo(e, t, n, r, s, o) {
    const a = new oh(
      this.currentPoint.clone(),
      new ye(e, t),
      new ye(n, r),
      new ye(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new lh(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, r, s, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + c,
      n,
      r,
      s,
      o
    ), this;
  }
  absarc(e, t, n, r, s, o) {
    return this.absellipse(e, t, n, n, r, s, o), this;
  }
  ellipse(e, t, n, r, s, o, a, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, r, s, o, a, c), this;
  }
  absellipse(e, t, n, r, s, o, a, c) {
    const l = new xa(e, t, n, r, s, o, a, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class va extends on {
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, o = !1, a = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    r = Math.floor(r), s = Math.floor(s);
    const h = [], u = [], d = [], p = [];
    let m = 0;
    const g = [], f = n / 2;
    let v = 0;
    w(), o === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(h), this.setAttribute("position", new Tt(u, 3)), this.setAttribute("normal", new Tt(d, 3)), this.setAttribute("uv", new Tt(p, 2));
    function w() {
      const _ = new J(), y = new J();
      let P = 0;
      const z = (t - e) / n;
      for (let b = 0; b <= s; b++) {
        const L = [], R = b / s, W = R * (t - e) + e;
        for (let V = 0; V <= r; V++) {
          const F = V / r, k = F * c + a, D = Math.sin(k), G = Math.cos(k);
          y.x = W * D, y.y = -R * n + f, y.z = W * G, u.push(y.x, y.y, y.z), _.set(D, z, G).normalize(), d.push(_.x, _.y, _.z), p.push(F, 1 - R), L.push(m++);
        }
        g.push(L);
      }
      for (let b = 0; b < r; b++)
        for (let L = 0; L < s; L++) {
          const R = g[L][b], W = g[L + 1][b], V = g[L + 1][b + 1], F = g[L][b + 1];
          h.push(R, W, F), h.push(W, V, F), P += 6;
        }
      l.addGroup(v, P, 0), v += P;
    }
    function x(_) {
      const y = m, P = new ye(), z = new J();
      let b = 0;
      const L = _ === !0 ? e : t, R = _ === !0 ? 1 : -1;
      for (let V = 1; V <= r; V++)
        u.push(0, f * R, 0), d.push(0, R, 0), p.push(0.5, 0.5), m++;
      const W = m;
      for (let V = 0; V <= r; V++) {
        const k = V / r * c + a, D = Math.cos(k), G = Math.sin(k);
        z.x = L * G, z.y = f * R, z.z = L * D, u.push(z.x, z.y, z.z), d.push(0, R, 0), P.x = D * 0.5 + 0.5, P.y = G * 0.5 * R + 0.5, p.push(P.x, P.y), m++;
      }
      for (let V = 0; V < r; V++) {
        const F = y + V, k = W + V;
        _ === !0 ? h.push(k, k + 1, F) : h.push(k + 1, k, F), b += 3;
      }
      l.addGroup(v, b, _ === !0 ? 1 : 2), v += b;
    }
  }
  static fromJSON(e) {
    return new va(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
const ns = /* @__PURE__ */ new J(), is = /* @__PURE__ */ new J(), Ao = /* @__PURE__ */ new J(), rs = /* @__PURE__ */ new Mn();
class En extends on {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const r = Math.pow(10, 4), s = Math.cos(gs * t), o = e.getIndex(), a = e.getAttribute("position"), c = o ? o.count : a.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, p = [];
      for (let m = 0; m < c; m += 3) {
        o ? (l[0] = o.getX(m), l[1] = o.getX(m + 1), l[2] = o.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: g, b: f, c: v } = rs;
        if (g.fromBufferAttribute(a, l[0]), f.fromBufferAttribute(a, l[1]), v.fromBufferAttribute(a, l[2]), rs.getNormal(Ao), u[0] = `${Math.round(g.x * r)},${Math.round(g.y * r)},${Math.round(g.z * r)}`, u[1] = `${Math.round(f.x * r)},${Math.round(f.y * r)},${Math.round(f.z * r)}`, u[2] = `${Math.round(v.x * r)},${Math.round(v.y * r)},${Math.round(v.z * r)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let w = 0; w < 3; w++) {
            const x = (w + 1) % 3, _ = u[w], y = u[x], P = rs[h[w]], z = rs[h[x]], b = `${_}_${y}`, L = `${y}_${_}`;
            L in d && d[L] ? (Ao.dot(d[L].normal) <= s && (p.push(P.x, P.y, P.z), p.push(z.x, z.y, z.z)), d[L] = null) : b in d || (d[b] = {
              index0: l[w],
              index1: l[x],
              normal: Ao.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: g, index1: f } = d[m];
          ns.fromBufferAttribute(a, g), is.fromBufferAttribute(a, f), p.push(ns.x, ns.y, ns.z), p.push(is.x, is.y, is.z);
        }
      this.setAttribute("position", new Tt(p, 3));
    }
  }
}
class rn extends Xi {
  constructor(e) {
    super(e), this.uuid = Qi(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, r = this.holes.length; n < r; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const r = e.holes[t];
      this.holes.push(new Xi().fromJSON(r));
    }
    return this;
  }
}
const Pm = {
  triangulate: function(i, e, t = 2) {
    const n = e && e.length, r = n ? e[0] * t : i.length;
    let s = hh(i, 0, r, t, !0);
    const o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, h, u, d, p;
    if (n && (s = zm(i, e, s, t)), i.length > 80 * t) {
      a = l = i[0], c = h = i[1];
      for (let m = t; m < r; m += t)
        u = i[m], d = i[m + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      p = Math.max(l - a, h - c), p = p !== 0 ? 32767 / p : 0;
    }
    return Cr(s, o, t, a, c, p, 0), o;
  }
};
function hh(i, e, t, n, r) {
  let s, o;
  if (r === Wm(i, e, t, n) > 0)
    for (s = e; s < t; s += n)
      o = Hl(s, i[s], i[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n)
      o = Hl(s, i[s], i[s + 1], o);
  return o && Fs(o, o.next) && (Tr(o), o = o.next), o;
}
function vi(i, e) {
  if (!i)
    return i;
  e || (e = i);
  let t = i, n;
  do
    if (n = !1, !t.steiner && (Fs(t, t.next) || dt(t.prev, t, t.next) === 0)) {
      if (Tr(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Cr(i, e, t, n, r, s, o) {
  if (!i)
    return;
  !o && s && Fm(i, n, r, s);
  let a = i, c, l;
  for (; i.prev !== i.next; ) {
    if (c = i.prev, l = i.next, s ? Am(i, n, r, s) : Tm(i)) {
      e.push(c.i / t | 0), e.push(i.i / t | 0), e.push(l.i / t | 0), Tr(i), i = l.next, a = l.next;
      continue;
    }
    if (i = l, i === a) {
      o ? o === 1 ? (i = Em(vi(i), e, t), Cr(i, e, t, n, r, s, 2)) : o === 2 && Lm(i, e, t, n, r, s) : Cr(vi(i), e, t, n, r, s, 1);
      break;
    }
  }
}
function Tm(i) {
  const e = i.prev, t = i, n = i.next;
  if (dt(e, t, n) >= 0)
    return !1;
  const r = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = r < s ? r < o ? r : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = r > s ? r > o ? r : o : s > o ? s : o, p = a > c ? a > l ? a : l : c > l ? c : l;
  let m = n.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= p && $i(r, a, s, c, o, l, m.x, m.y) && dt(m.prev, m, m.next) >= 0)
      return !1;
    m = m.next;
  }
  return !0;
}
function Am(i, e, t, n) {
  const r = i.prev, s = i, o = i.next;
  if (dt(r, s, o) >= 0)
    return !1;
  const a = r.x, c = s.x, l = o.x, h = r.y, u = s.y, d = o.y, p = a < c ? a < l ? a : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, g = a > c ? a > l ? a : l : c > l ? c : l, f = h > u ? h > d ? h : d : u > d ? u : d, v = Qo(p, m, e, t, n), w = Qo(g, f, e, t, n);
  let x = i.prevZ, _ = i.nextZ;
  for (; x && x.z >= v && _ && _.z <= w; ) {
    if (x.x >= p && x.x <= g && x.y >= m && x.y <= f && x !== r && x !== o && $i(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0 || (x = x.prevZ, _.x >= p && _.x <= g && _.y >= m && _.y <= f && _ !== r && _ !== o && $i(a, h, c, u, l, d, _.x, _.y) && dt(_.prev, _, _.next) >= 0))
      return !1;
    _ = _.nextZ;
  }
  for (; x && x.z >= v; ) {
    if (x.x >= p && x.x <= g && x.y >= m && x.y <= f && x !== r && x !== o && $i(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0)
      return !1;
    x = x.prevZ;
  }
  for (; _ && _.z <= w; ) {
    if (_.x >= p && _.x <= g && _.y >= m && _.y <= f && _ !== r && _ !== o && $i(a, h, c, u, l, d, _.x, _.y) && dt(_.prev, _, _.next) >= 0)
      return !1;
    _ = _.nextZ;
  }
  return !0;
}
function Em(i, e, t) {
  let n = i;
  do {
    const r = n.prev, s = n.next.next;
    !Fs(r, s) && dh(r, n, n.next, s) && Pr(r, s) && Pr(s, r) && (e.push(r.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Tr(n), Tr(n.next), n = i = s), n = n.next;
  } while (n !== i);
  return vi(n);
}
function Lm(i, e, t, n, r, s) {
  let o = i;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Um(o, a)) {
        let c = uh(o, a);
        o = vi(o, o.next), c = vi(c, c.next), Cr(o, e, t, n, r, s, 0), Cr(c, e, t, n, r, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== i);
}
function zm(i, e, t, n) {
  const r = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : i.length, l = hh(i, a, c, n, !1), l === l.next && (l.steiner = !0), r.push(Om(l));
  for (r.sort(Rm), s = 0; s < r.length; s++)
    t = Im(r[s], t);
  return t;
}
function Rm(i, e) {
  return i.x - e.x;
}
function Im(i, e) {
  const t = Dm(i, e);
  if (!t)
    return e;
  const n = uh(t, i);
  return vi(n, n.next), vi(t, t.next);
}
function Dm(i, e) {
  let t = e, n = -1 / 0, r;
  const s = i.x, o = i.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, r = t.x < t.next.x ? t : t.next, d === s))
        return r;
    }
    t = t.next;
  } while (t !== e);
  if (!r)
    return null;
  const a = r, c = r.x, l = r.y;
  let h = 1 / 0, u;
  t = r;
  do
    s >= t.x && t.x >= c && s !== t.x && $i(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), Pr(t, i) && (u < h || u === h && (t.x > r.x || t.x === r.x && Nm(r, t))) && (r = t, h = u)), t = t.next;
  while (t !== a);
  return r;
}
function Nm(i, e) {
  return dt(i.prev, i, e.prev) < 0 && dt(e.next, i, i.next) < 0;
}
function Fm(i, e, t, n) {
  let r = i;
  do
    r.z === 0 && (r.z = Qo(r.x, r.y, e, t, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== i);
  r.prevZ.nextZ = null, r.prevZ = null, km(r);
}
function km(i) {
  let e, t, n, r, s, o, a, c, l = 1;
  do {
    for (t = i, i = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || t.z <= n.z) ? (r = t, t = t.nextZ, a--) : (r = n, n = n.nextZ, c--), s ? s.nextZ = r : i = r, r.prevZ = s, s = r;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return i;
}
function Qo(i, e, t, n, r) {
  return i = (i - t) * r | 0, e = (e - n) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, i | e << 1;
}
function Om(i) {
  let e = i, t = i;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== i);
  return t;
}
function $i(i, e, t, n, r, s, o, a) {
  return (r - o) * (e - a) >= (i - o) * (s - a) && (i - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (r - o) * (n - a);
}
function Um(i, e) {
  return i.next.i !== e.i && i.prev.i !== e.i && !Bm(i, e) && // dones't intersect other edges
  (Pr(i, e) && Pr(e, i) && Gm(i, e) && // locally visible
  (dt(i.prev, i, e.prev) || dt(i, e.prev, e)) || // does not create opposite-facing sectors
  Fs(i, e) && dt(i.prev, i, i.next) > 0 && dt(e.prev, e, e.next) > 0);
}
function dt(i, e, t) {
  return (e.y - i.y) * (t.x - e.x) - (e.x - i.x) * (t.y - e.y);
}
function Fs(i, e) {
  return i.x === e.x && i.y === e.y;
}
function dh(i, e, t, n) {
  const r = os(dt(i, e, t)), s = os(dt(i, e, n)), o = os(dt(t, n, i)), a = os(dt(t, n, e));
  return !!(r !== s && o !== a || r === 0 && ss(i, t, e) || s === 0 && ss(i, n, e) || o === 0 && ss(t, i, n) || a === 0 && ss(t, e, n));
}
function ss(i, e, t) {
  return e.x <= Math.max(i.x, t.x) && e.x >= Math.min(i.x, t.x) && e.y <= Math.max(i.y, t.y) && e.y >= Math.min(i.y, t.y);
}
function os(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function Bm(i, e) {
  let t = i;
  do {
    if (t.i !== i.i && t.next.i !== i.i && t.i !== e.i && t.next.i !== e.i && dh(t, t.next, i, e))
      return !0;
    t = t.next;
  } while (t !== i);
  return !1;
}
function Pr(i, e) {
  return dt(i.prev, i, i.next) < 0 ? dt(i, e, i.next) >= 0 && dt(i, i.prev, e) >= 0 : dt(i, e, i.prev) < 0 || dt(i, i.next, e) < 0;
}
function Gm(i, e) {
  let t = i, n = !1;
  const r = (i.x + e.x) / 2, s = (i.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && r < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== i);
  return n;
}
function uh(i, e) {
  const t = new ea(i.i, i.x, i.y), n = new ea(e.i, e.x, e.y), r = i.next, s = e.prev;
  return i.next = e, e.prev = i, t.next = r, r.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Hl(i, e, t, n) {
  const r = new ea(i, e, t);
  return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
}
function Tr(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function ea(i, e, t) {
  this.i = i, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Wm(i, e, t, n) {
  let r = 0;
  for (let s = e, o = t - n; s < t; s += n)
    r += (i[o] - i[s]) * (i[s + 1] + i[o + 1]), o = s;
  return r;
}
class pi {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let r = t - 1, s = 0; s < t; r = s++)
      n += e[r].x * e[s].y - e[s].x * e[r].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return pi.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], r = [], s = [];
    Vl(e), Xl(n, e);
    let o = e.length;
    t.forEach(Vl);
    for (let c = 0; c < t.length; c++)
      r.push(o), o += t[c].length, Xl(n, t[c]);
    const a = Pm.triangulate(n, r);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function Vl(i) {
  const e = i.length;
  e > 2 && i[e - 1].equals(i[0]) && i.pop();
}
function Xl(i, e) {
  for (let t = 0; t < e.length; t++)
    i.push(e[t].x), i.push(e[t].y);
}
class fn extends on {
  constructor(e = new rn([new ye(0.5, 0.5), new ye(-0.5, 0.5), new ye(-0.5, -0.5), new ye(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, r = [], s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new Tt(r, 3)), this.setAttribute("uv", new Tt(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, p = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : p - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, f = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const v = t.extrudePath, w = t.UVGenerator !== void 0 ? t.UVGenerator : $m;
      let x, _ = !1, y, P, z, b;
      v && (x = v.getSpacedPoints(h), _ = !0, d = !1, y = v.computeFrenetFrames(h, !1), P = new J(), z = new J(), b = new J()), d || (f = 0, p = 0, m = 0, g = 0);
      const L = a.extractPoints(l);
      let R = L.shape;
      const W = L.holes;
      if (!pi.isClockWise(R)) {
        R = R.reverse();
        for (let q = 0, K = W.length; q < K; q++) {
          const j = W[q];
          pi.isClockWise(j) && (W[q] = j.reverse());
        }
      }
      const F = pi.triangulateShape(R, W), k = R;
      for (let q = 0, K = W.length; q < K; q++) {
        const j = W[q];
        R = R.concat(j);
      }
      function D(q, K, j) {
        return K || console.error("THREE.ExtrudeGeometry: vec does not exist"), K.clone().multiplyScalar(j).add(q);
      }
      const G = R.length, E = F.length;
      function M(q, K, j) {
        let se, le, _e;
        const Y = q.x - K.x, O = q.y - K.y, Se = j.x - q.x, Ae = j.y - q.y, N = Y * Y + O * O, I = Y * Ae - O * Se;
        if (Math.abs(I) > Number.EPSILON) {
          const oe = Math.sqrt(N), me = Math.sqrt(Se * Se + Ae * Ae), ve = K.x - O / oe, Pe = K.y + Y / oe, Me = j.x - Ae / me, H = j.y + Se / me, re = ((Me - ve) * Ae - (H - Pe) * Se) / (Y * Ae - O * Se);
          se = ve + Y * re - q.x, le = Pe + O * re - q.y;
          const Ee = se * se + le * le;
          if (Ee <= 2)
            return new ye(se, le);
          _e = Math.sqrt(Ee / 2);
        } else {
          let oe = !1;
          Y > Number.EPSILON ? Se > Number.EPSILON && (oe = !0) : Y < -Number.EPSILON ? Se < -Number.EPSILON && (oe = !0) : Math.sign(O) === Math.sign(Ae) && (oe = !0), oe ? (se = -O, le = Y, _e = Math.sqrt(N)) : (se = Y, le = O, _e = Math.sqrt(N / 2));
        }
        return new ye(se / _e, le / _e);
      }
      const X = [];
      for (let q = 0, K = k.length, j = K - 1, se = q + 1; q < K; q++, j++, se++)
        j === K && (j = 0), se === K && (se = 0), X[q] = M(k[q], k[j], k[se]);
      const ee = [];
      let ne, Q = X.concat();
      for (let q = 0, K = W.length; q < K; q++) {
        const j = W[q];
        ne = [];
        for (let se = 0, le = j.length, _e = le - 1, Y = se + 1; se < le; se++, _e++, Y++)
          _e === le && (_e = 0), Y === le && (Y = 0), ne[se] = M(j[se], j[_e], j[Y]);
        ee.push(ne), Q = Q.concat(ne);
      }
      for (let q = 0; q < f; q++) {
        const K = q / f, j = p * Math.cos(K * Math.PI / 2), se = m * Math.sin(K * Math.PI / 2) + g;
        for (let le = 0, _e = k.length; le < _e; le++) {
          const Y = D(k[le], X[le], se);
          A(Y.x, Y.y, -j);
        }
        for (let le = 0, _e = W.length; le < _e; le++) {
          const Y = W[le];
          ne = ee[le];
          for (let O = 0, Se = Y.length; O < Se; O++) {
            const Ae = D(Y[O], ne[O], se);
            A(Ae.x, Ae.y, -j);
          }
        }
      }
      const de = m + g;
      for (let q = 0; q < G; q++) {
        const K = d ? D(R[q], Q[q], de) : R[q];
        _ ? (z.copy(y.normals[0]).multiplyScalar(K.x), P.copy(y.binormals[0]).multiplyScalar(K.y), b.copy(x[0]).add(z).add(P), A(b.x, b.y, b.z)) : A(K.x, K.y, 0);
      }
      for (let q = 1; q <= h; q++)
        for (let K = 0; K < G; K++) {
          const j = d ? D(R[K], Q[K], de) : R[K];
          _ ? (z.copy(y.normals[q]).multiplyScalar(j.x), P.copy(y.binormals[q]).multiplyScalar(j.y), b.copy(x[q]).add(z).add(P), A(b.x, b.y, b.z)) : A(j.x, j.y, u / h * q);
        }
      for (let q = f - 1; q >= 0; q--) {
        const K = q / f, j = p * Math.cos(K * Math.PI / 2), se = m * Math.sin(K * Math.PI / 2) + g;
        for (let le = 0, _e = k.length; le < _e; le++) {
          const Y = D(k[le], X[le], se);
          A(Y.x, Y.y, u + j);
        }
        for (let le = 0, _e = W.length; le < _e; le++) {
          const Y = W[le];
          ne = ee[le];
          for (let O = 0, Se = Y.length; O < Se; O++) {
            const Ae = D(Y[O], ne[O], se);
            _ ? A(Ae.x, Ae.y + x[h - 1].y, x[h - 1].x + j) : A(Ae.x, Ae.y, u + j);
          }
        }
      }
      T(), C();
      function T() {
        const q = r.length / 3;
        if (d) {
          let K = 0, j = G * K;
          for (let se = 0; se < E; se++) {
            const le = F[se];
            U(le[2] + j, le[1] + j, le[0] + j);
          }
          K = h + f * 2, j = G * K;
          for (let se = 0; se < E; se++) {
            const le = F[se];
            U(le[0] + j, le[1] + j, le[2] + j);
          }
        } else {
          for (let K = 0; K < E; K++) {
            const j = F[K];
            U(j[2], j[1], j[0]);
          }
          for (let K = 0; K < E; K++) {
            const j = F[K];
            U(j[0] + G * h, j[1] + G * h, j[2] + G * h);
          }
        }
        n.addGroup(q, r.length / 3 - q, 0);
      }
      function C() {
        const q = r.length / 3;
        let K = 0;
        S(k, K), K += k.length;
        for (let j = 0, se = W.length; j < se; j++) {
          const le = W[j];
          S(le, K), K += le.length;
        }
        n.addGroup(q, r.length / 3 - q, 1);
      }
      function S(q, K) {
        let j = q.length;
        for (; --j >= 0; ) {
          const se = j;
          let le = j - 1;
          le < 0 && (le = q.length - 1);
          for (let _e = 0, Y = h + f * 2; _e < Y; _e++) {
            const O = G * _e, Se = G * (_e + 1), Ae = K + se + O, N = K + le + O, I = K + le + Se, oe = K + se + Se;
            Z(Ae, N, I, oe);
          }
        }
      }
      function A(q, K, j) {
        c.push(q), c.push(K), c.push(j);
      }
      function U(q, K, j) {
        $(q), $(K), $(j);
        const se = r.length / 3, le = w.generateTopUV(n, r, se - 3, se - 2, se - 1);
        fe(le[0]), fe(le[1]), fe(le[2]);
      }
      function Z(q, K, j, se) {
        $(q), $(K), $(se), $(K), $(j), $(se);
        const le = r.length / 3, _e = w.generateSideWallUV(n, r, le - 6, le - 3, le - 2, le - 1);
        fe(_e[0]), fe(_e[1]), fe(_e[3]), fe(_e[1]), fe(_e[2]), fe(_e[3]);
      }
      function $(q) {
        r.push(c[q * 3 + 0]), r.push(c[q * 3 + 1]), r.push(c[q * 3 + 2]);
      }
      function fe(q) {
        s.push(q.x), s.push(q.y);
      }
    }
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Hm(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const r = e.options.extrudePath;
    return r !== void 0 && (e.options.extrudePath = new ch[r.type]().fromJSON(r)), new fn(n, e.options);
  }
}
const $m = {
  generateTopUV: function(i, e, t, n, r) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[r * 3], h = e[r * 3 + 1];
    return [
      new ye(s, o),
      new ye(a, c),
      new ye(l, h)
    ];
  },
  generateSideWallUV: function(i, e, t, n, r, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[r * 3], p = e[r * 3 + 1], m = e[r * 3 + 2], g = e[s * 3], f = e[s * 3 + 1], v = e[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new ye(o, 1 - c),
      new ye(l, 1 - u),
      new ye(d, 1 - m),
      new ye(g, 1 - v)
    ] : [
      new ye(a, 1 - c),
      new ye(h, 1 - u),
      new ye(p, 1 - m),
      new ye(f, 1 - v)
    ];
  }
};
function Hm(i, e, t) {
  if (t.shapes = [], Array.isArray(i))
    for (let n = 0, r = i.length; n < r; n++) {
      const s = i[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(i.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Lt extends er {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new tt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new tt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Bc, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Vm extends Lt {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ye(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Et(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new tt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new tt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new tt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
const Ts = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class Xm {
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, r.onProgress !== void 0 && r.onProgress(h, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const p = l[u], m = l[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return m;
      }
      return null;
    };
  }
}
const Ym = /* @__PURE__ */ new Xm();
class ks {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ym, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const kn = {};
class qm extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class jm extends ks {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Ts.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (kn[e] !== void 0) {
      kn[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    kn[e] = [], kn[e].push({
      onLoad: t,
      onProgress: n,
      onError: r
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = kn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = d ? parseInt(d) : 0, m = p !== 0;
        let g = 0;
        const f = new ReadableStream({
          start(v) {
            w();
            function w() {
              u.read().then(({ done: x, value: _ }) => {
                if (x)
                  v.close();
                else {
                  g += _.byteLength;
                  const y = new ProgressEvent("progress", { lengthComputable: m, loaded: g, total: p });
                  for (let P = 0, z = h.length; P < z; P++) {
                    const b = h[P];
                    b.onProgress && b.onProgress(y);
                  }
                  v.enqueue(_), w();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new qm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return l.arrayBuffer().then((m) => p.decode(m));
          }
      }
    }).then((l) => {
      Ts.add(e, l);
      const h = kn[e];
      delete kn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const h = kn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete kn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Zm extends ks {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ts.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = Mr("img");
    function c() {
      h(), Ts.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), r && r(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class Jm extends ks {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new Xt(), o = new Zm(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class fh extends zt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new tt(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Eo = /* @__PURE__ */ new ut(), Yl = /* @__PURE__ */ new J(), ql = /* @__PURE__ */ new J();
class ph {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ye(512, 512), this.map = null, this.mapPass = null, this.matrix = new ut(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new pa(), this._frameExtents = new ye(1, 1), this._viewportCount = 1, this._viewports = [
      new lt(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Yl.setFromMatrixPosition(e.matrixWorld), t.position.copy(Yl), ql.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ql), t.updateMatrixWorld(), Eo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Eo), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Eo);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const jl = /* @__PURE__ */ new ut(), dr = /* @__PURE__ */ new J(), Lo = /* @__PURE__ */ new J();
class Km extends ph {
  constructor() {
    super(new $t(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ye(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new lt(2, 1, 1, 1),
      // negative X
      new lt(0, 1, 1, 1),
      // positive Z
      new lt(3, 1, 1, 1),
      // negative Z
      new lt(1, 1, 1, 1),
      // positive Y
      new lt(3, 0, 1, 1),
      // negative Y
      new lt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new J(1, 0, 0),
      new J(-1, 0, 0),
      new J(0, 0, 1),
      new J(0, 0, -1),
      new J(0, 1, 0),
      new J(0, -1, 0)
    ], this._cubeUps = [
      new J(0, 1, 0),
      new J(0, 1, 0),
      new J(0, 1, 0),
      new J(0, 1, 0),
      new J(0, 0, 1),
      new J(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, r = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), dr.setFromMatrixPosition(e.matrixWorld), n.position.copy(dr), Lo.copy(n.position), Lo.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Lo), n.updateMatrixWorld(), r.makeTranslation(-dr.x, -dr.y, -dr.z), jl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(jl);
  }
}
class Qm extends fh {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Km();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ex extends ph {
  constructor() {
    super(new eh(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class tx extends fh {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(zt.DefaultUp), this.updateMatrix(), this.target = new zt(), this.shadow = new ex();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Zl {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Et(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Jl = /* @__PURE__ */ new ye();
class nx {
  constructor(e = new ye(1 / 0, 1 / 0), t = new ye(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Jl.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Jl.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
class ii {
  constructor() {
    this.type = "ShapePath", this.color = new tt(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new Xi(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, r) {
    return this.currentPath.quadraticCurveTo(e, t, n, r), this;
  }
  bezierCurveTo(e, t, n, r, s, o) {
    return this.currentPath.bezierCurveTo(e, t, n, r, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(v) {
      const w = [];
      for (let x = 0, _ = v.length; x < _; x++) {
        const y = v[x], P = new rn();
        P.curves = y.curves, w.push(P);
      }
      return w;
    }
    function n(v, w) {
      const x = w.length;
      let _ = !1;
      for (let y = x - 1, P = 0; P < x; y = P++) {
        let z = w[y], b = w[P], L = b.x - z.x, R = b.y - z.y;
        if (Math.abs(R) > Number.EPSILON) {
          if (R < 0 && (z = w[P], L = -L, b = w[y], R = -R), v.y < z.y || v.y > b.y)
            continue;
          if (v.y === z.y) {
            if (v.x === z.x)
              return !0;
          } else {
            const W = R * (v.x - z.x) - L * (v.y - z.y);
            if (W === 0)
              return !0;
            if (W < 0)
              continue;
            _ = !_;
          }
        } else {
          if (v.y !== z.y)
            continue;
          if (b.x <= v.x && v.x <= z.x || z.x <= v.x && v.x <= b.x)
            return !0;
        }
      }
      return _;
    }
    const r = pi.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new rn(), c.curves = a.curves, l.push(c), l;
    let h = !r(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let p = [], m = 0, g;
    d[m] = void 0, p[m] = [];
    for (let v = 0, w = s.length; v < w; v++)
      a = s[v], g = a.getPoints(), o = r(g), o = e ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new rn(), p: g }, d[m].s.curves = a.curves, h && m++, p[m] = []) : p[m].push({ h: a, p: g[0] });
    if (!d[0])
      return t(s);
    if (d.length > 1) {
      let v = !1, w = 0;
      for (let x = 0, _ = d.length; x < _; x++)
        u[x] = [];
      for (let x = 0, _ = d.length; x < _; x++) {
        const y = p[x];
        for (let P = 0; P < y.length; P++) {
          const z = y[P];
          let b = !0;
          for (let L = 0; L < d.length; L++)
            n(z.p, d[L].p) && (x !== L && w++, b ? (b = !1, u[L].push(z)) : v = !0);
          b && u[x].push(z);
        }
      }
      w > 0 && v === !1 && (p = u);
    }
    let f;
    for (let v = 0, w = d.length; v < w; v++) {
      c = d[v].s, l.push(c), f = p[v];
      for (let x = 0, _ = f.length; x < _; x++)
        c.holes.push(f[x].h);
    }
    return l;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: da
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = da);
const zo = {
  "garden-fence": {
    displayName: "Garden",
    imgUrl: "https://static.wixstatic.com/media/a144a8_ff9c45c783ac4f518a04054b98a172b1~mv2.jpg/v1/fill/w_536,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
    //"https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/237/default",
    styles: [
      "budget-flat-top",
      "flat-top",
      "arched-spear",
      "continuous-scroll",
      "cross-top",
      "double-flat",
      "heritage-picket",
      "hi-low-spear",
      "intermitten-ring",
      "loop-and-spear",
      "loop-top",
      "lorraine",
      "macintyre",
      "oakwood",
      "open-rail",
      "open-rail-scroll",
      "oxley-ring",
      "ring-and-scroll",
      "rod-top",
      "sapphire",
      "spear-top",
      "stonnington-picket",
      "windsor-ring"
    ]
  },
  "pool-fence": {
    displayName: "Pool",
    isPoolFence: !0,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/237/default",
    styles: [
      "budget-flat-top",
      "flat-top",
      "arched-spear",
      "continuous-scroll",
      "cross-top",
      "double-flat",
      "hi-low-spear",
      "intermitten-ring",
      "loop-and-spear",
      "loop-top",
      "lorraine",
      "macintyre",
      "oakwood",
      "open-rail",
      "open-rail-scroll",
      "oxley-ring",
      "ring-and-scroll",
      "rod-top",
      "sapphire",
      "spear-top",
      "windsor-ring"
    ]
  },
  "security-fence": {
    displayName: "Security",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316806/attachments/Category/239/default",
    styles: [
      "titan"
    ]
  },
  "colorbond-fence": {
    displayName: "Style Choice Colorbond® Steel Fencing",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/232/default",
    styles: [
      "corrugated",
      "steelclad",
      "supersaw",
      "unirib"
    ]
  }
  /*
  "mesh-fence": {
      displayName: "Wire Mesh Fencing",
      imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/238/default",
      styles: [
          "banksia",
          "yardmesh-acacia",
          "yardmesh-boulevard",
      ],
  },
  */
}, as = [
  {
    height: 1200,
    width: 915,
    prontoCode: "20K30"
  },
  {
    height: 1200,
    width: 1480,
    prontoCode: "20K70"
  },
  {
    height: 1200,
    width: 1550,
    prontoCode: "2FJY0"
  },
  {
    height: 1500,
    width: 915,
    prontoCode: "20KB0"
  },
  {
    height: 1500,
    width: 1480,
    prontoCode: "20KF0"
  },
  {
    height: 1500,
    width: 1550,
    prontoCode: "2FK30"
  },
  {
    height: 1800,
    width: 915,
    prontoCode: "20KN0"
  },
  {
    height: 1800,
    width: 1480,
    prontoCode: "20KS0"
  },
  {
    height: 1800,
    width: 1550,
    prontoCode: "2FK80"
  },
  {
    height: 2100,
    width: 915,
    prontoCode: "20KX0"
  },
  {
    height: 2100,
    width: 1480,
    prontoCode: "20L00"
  },
  {
    height: 2100,
    width: 1550,
    prontoCode: "2FKD0"
  }
], Gt = {
  "arched-spear": {
    displayName: "Arched Spear",
    isArchedSpear: !0,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/266/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21FK0"
      },
      {
        height: 900,
        width: 3e3,
        prontoCode: "21FL0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21FN0"
      },
      {
        height: 1200,
        width: 3e3,
        prontoCode: "21FP0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21FR0"
      },
      {
        height: 1500,
        width: 3e3,
        prontoCode: "21FS0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21FU0"
      },
      {
        height: 1800,
        width: 3e3,
        prontoCode: "21FV0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21510"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21520"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21540"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21550"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "21570"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "21580"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "215A0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "215B0"
      }
    ]
  },
  "continuous-scroll": {
    displayName: "Continuous Scroll",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/267/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21JZ0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21K20"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21K50"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21K80"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "218F0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "218G0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "218J0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "218K0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "218M0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "218N0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "218Q0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "218R0"
      }
    ]
  },
  "cross-top": {
    displayName: "Cross Top",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/268/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21JM0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21JQ0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21JT0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21JW0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21830"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21840"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21860"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21870"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "21890"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "218A0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "218C0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "218D0"
      }
    ]
  },
  "double-flat": {
    displayName: "Double Flat",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/289/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21CZ0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21D20"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21D50"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21D80"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "212F0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "212G0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "212J0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "212K0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "212M0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "212N0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "212Q0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "212R0"
      }
    ]
  },
  "budget-flat-top": {
    displayName: "*Budget Flat Top",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/265/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21B00"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21B70"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 950,
        prontoCode: "210E0"
      },
      {
        height: 900,
        width: 1475,
        prontoCode: "210H0"
      },
      {
        height: 1200,
        width: 950,
        prontoCode: "210M0"
      },
      {
        height: 1200,
        width: 1200,
        prontoCode: "210P0"
      },
      {
        height: 1200,
        width: 1475,
        prontoCode: "210S0"
      }
    ]
  },
  "flat-top": {
    displayName: "Flat Top",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/265/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21AZ0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21B60"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21BD0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21BG0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "210D0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "210G0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "210L0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "210R0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "210V0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "210W0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "210Y0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "210Z0"
      }
    ]
  },
  "heritage-picket": {
    displayName: "Heritage Picket",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/270/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21070"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "210A0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 950,
        prontoCode: "20ZV0"
      },
      {
        height: 900,
        width: 1475,
        prontoCode: "20ZY0"
      },
      {
        height: 1200,
        width: 950,
        prontoCode: "21010"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21040"
      }
    ]
  },
  "hi-low-spear": {
    displayName: "Hi-Low Spear",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/272/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21ER0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21EU0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21EX0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21F00"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21470"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21480"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "214A0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "214B0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "214D0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "214E0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "214G0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "214H0"
      }
    ]
  },
  "intermitten-ring": {
    displayName: "Intermitten Ring",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/273/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "20PX0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "20PZ0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21HR0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21HU0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "216X0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "216Z0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21720"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21740"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "21770"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "21780"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "217A0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "217B0"
      }
    ]
  },
  "loop-and-spear": {
    displayName: "Loop & Spear",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/274/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "20PF0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "20PH0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21FD0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21FG0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "214K0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "214M0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "214Q0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "214S0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "214V0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "214W0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "214Y0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "214Z0"
      }
    ]
  },
  "loop-top": {
    displayName: "Loop Top",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/275/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "20P70"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "20P90"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21BZ0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21C20"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21110"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21140"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21180"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "211B0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "211F0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "211G0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "211J0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "211K0"
      }
    ]
  },
  lorraine: {
    displayName: "Lorraine",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/276/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21GM0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21GQ0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21GT0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21GW0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21630"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21640"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21660"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21670"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "21690"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "216A0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "216C0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "216D0"
      }
    ]
  },
  macintyre: {
    displayName: "Macintyre",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/277/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21DB0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21DE0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21DH0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21DL0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "212T0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "212U0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "212W0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "212X0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "212Z0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "21300"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "21320"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "21330"
      }
    ]
  },
  oakwood: {
    displayName: "Oakwood",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/278/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21DP0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21DS0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21DV0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21DY0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21350"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21360"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21380"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21390"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "213B0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "213C0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "213E0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "213F0"
      }
    ]
  },
  "open-rail": {
    displayName: "Open Rail",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/280/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21E10"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21E40"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21E70"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21EA0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "213H0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "213J0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "213L0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "213M0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "213P0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "213Q0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "213S0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "213T0"
      }
    ]
  },
  "open-rail-scroll": {
    displayName: "Open Rail Scroll",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/279/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21J90"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21JC0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21JF0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21JJ0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "217R0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "217S0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "217U0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "217V0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "217X0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "217Y0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "21800"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "21810"
      }
    ]
  },
  "oxley-ring": {
    displayName: "Oxley Ring",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/282/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21HX0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21J00"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21J30"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21J60"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "217D0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "217E0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "217G0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "217H0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "217K0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "217L0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "217N0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "217P0"
      }
    ]
  },
  "ring-and-scroll": {
    displayName: "Ring & Scroll",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/284/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "20PP0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "20PR0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21H90"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21HC0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "216F0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "216H0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "216L0"
      },
      /*
      {
          height: 1200.0,
          width: 1500.0,
          prontoCode: "",
      },*/
      {
        height: 1500,
        width: 1e3,
        prontoCode: "216R0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "216S0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "216U0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "216V0"
      }
    ]
  },
  "rod-top": {
    displayName: "Rod Top",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/285/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21C50"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21CA0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21CF0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21CJ0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "211M0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "211P0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "211S0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "211U0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "211X0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "211Y0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "21200"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "21210"
      }
    ]
  },
  sapphire: {
    displayName: "Sapphire",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/286/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21G90"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21GC0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21GF0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21GJ0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "215R0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "215S0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "215U0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "215V0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "215X0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "215Y0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "21600"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "21610"
      }
    ]
  },
  "spear-top": {
    displayName: "Spear Top",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/287/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21ED0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21EG0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21EK0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21EN0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "213V0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "213W0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "213Y0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "213Z0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "21410"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "21420"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "21440"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "21450"
      }
    ]
  },
  "stonnington-picket": {
    displayName: "Stonnington Picket",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/288/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21FX0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21G00"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21G30"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21G60"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "215D0"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "215E0"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "215G0"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "215H0"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "215K0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "215L0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "215N0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "215P0"
      }
    ]
  },
  "windsor-ring": {
    displayName: "Windsor Ring",
    numRails: 3,
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/291/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "21KP0"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "21KS0"
      },
      {
        height: 1500,
        width: 2400,
        prontoCode: "21KV0"
      },
      {
        height: 1800,
        width: 2400,
        prontoCode: "21KY0"
      }
    ],
    gateSizes: [
      {
        height: 900,
        width: 1e3,
        prontoCode: "21950"
      },
      {
        height: 900,
        width: 1500,
        prontoCode: "21960"
      },
      {
        height: 1200,
        width: 1e3,
        prontoCode: "21980"
      },
      {
        height: 1200,
        width: 1500,
        prontoCode: "21990"
      },
      {
        height: 1500,
        width: 1e3,
        prontoCode: "219B0"
      },
      {
        height: 1500,
        width: 1500,
        prontoCode: "219C0"
      },
      {
        height: 1800,
        width: 1e3,
        prontoCode: "219E0"
      },
      {
        height: 1800,
        width: 1500,
        prontoCode: "219F0"
      }
    ]
  },
  titan: {
    displayName: "Titan Security Panel",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673397823/images/rp_234x234/Product/24900/default",
    sizes: [
      {
        height: 1800,
        width: 2400,
        prontoCode: "209M0"
      },
      {
        height: 2100,
        width: 2400,
        prontoCode: "209S0"
      }
    ],
    gateSizes: [
      {
        height: 1800,
        width: 1e3,
        prontoCode: "2GRV0"
      },
      {
        height: 2100,
        width: 1e3,
        prontoCode: "2GRW0"
      }
    ],
    type: "Security Fence"
  },
  corrugated: {
    displayName: "Corrugated",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/235/default",
    sizes: [],
    gateSizes: as,
    type: "Sheeted Fence"
  },
  steelclad: {
    displayName: "Steelclad",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/234/default",
    sizes: [],
    gateSizes: as,
    type: "Sheeted Fence"
  },
  supersaw: {
    displayName: "Supersaw",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316807/attachments/Category/233/default",
    sizes: [],
    gateSizes: as,
    type: "Sheeted Fence"
  },
  unirib: {
    displayName: "UniRib",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673316702/attachments/Category/236/default",
    sizes: [],
    gateSizes: as,
    type: "Sheeted Fence"
  },
  banksia: {
    displayName: "Banksia Mesh",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673322238/images/rp_234x234/Product/5219/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "22210"
      },
      {
        height: 900,
        width: 3e3,
        prontoCode: "22220"
      },
      {
        height: 1200,
        width: 2400,
        prontoCode: "22230"
      },
      {
        height: 1200,
        width: 3e3,
        prontoCode: "22240"
      }
    ],
    gateSizes: [
      {
        height: 915,
        width: 960,
        prontoCode: "221V0"
      },
      {
        height: 910,
        width: 1480,
        prontoCode: "221W0"
      },
      {
        height: 1215,
        width: 960,
        prontoCode: "221X0"
      },
      {
        height: 1215,
        width: 1480,
        prontoCode: "221Y0"
      },
      {
        height: 1500,
        width: 960,
        prontoCode: "221Z0"
      },
      {
        height: 1500,
        width: 1480,
        prontoCode: "22200"
      }
    ],
    type: "Mesh Fence"
  },
  "yardmesh-acacia": {
    displayName: "Yardmesh Acacia",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673322238/images/rp_234x234/Product/5250/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "222Z0"
      }
    ],
    gateSizes: [
      {
        height: 915,
        width: 960,
        prontoCode: "221V0"
      },
      {
        height: 910,
        width: 1480,
        prontoCode: "221W0"
      }
    ],
    type: "Mesh Fence"
  },
  "yardmesh-boulevard": {
    displayName: "Yardmesh Boulevard",
    imgUrl: "https://d5i9rflggd9ua.cloudfront.net/ts1673322238/images/rp_234x234/Product/5250/default",
    sizes: [
      {
        height: 900,
        width: 2400,
        prontoCode: "22300"
      }
    ],
    gateSizes: [
      {
        height: 915,
        width: 960,
        prontoCode: "221V0"
      },
      {
        height: 910,
        width: 1480,
        prontoCode: "221W0"
      }
    ],
    type: "Mesh Fence"
  }
};
let Oe = () => {
  let i = () => Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i();
};
const ix = /* @__PURE__ */ Ce("<div></div>");
let rx = "https://static.wixstatic.com/media/a144a8_40da128f12f44f34bab26d7ebc4fa697~mv2.png";
const ls = (i) => {
  let e = te(() => {
    let d = Gt[i.fenceStyle];
    if (d != null)
      return d.imgUrl;
  }), t;
  {
    let [d, p] = Ut({
      type: "pending"
    });
    t = d, ot(() => {
    });
    let m = new Jm(), g = "";
    vt(() => {
      if (e() == null) {
        p({
          type: "error",
          message: "No img url found for fence style"
        });
        return;
      }
      g = Oe();
      let v = g;
      p({
        type: "pending"
      }), m.loadAsync(rx).then((w) => {
        v == g && (w.repeat.set(2, 1), w.wrapS = Ps, p({
          type: "success",
          value: w
        }));
      }).catch((w) => {
        v == g && p({
          type: "error",
          message: "Failed to load image"
        });
      });
    });
  }
  let n, r = document.createElement("canvas"), s = new ma({
    canvas: r,
    alpha: !0,
    antialias: !0
  }), o = new $t(45, 4 / 3, 0.1, 100);
  o.position.set(-4, 1, 3).multiply(new J(0.7, 1, 1)), o.lookAt(1, -0.5, 0.5), na(() => {
    if (n == null)
      return;
    let d = n.clientWidth, p = n.clientHeight;
    r.width = d, r.height = p, s.setSize(d, p), s.setPixelRatio(window.devicePixelRatio), o.aspect = d / p, o.updateProjectionMatrix();
  });
  let a = new Ds(2, 1, 1, 1), c = new fa({
    transparent: !0
  });
  ot(() => {
    a.dispose(), c.dispose();
  });
  let l = () => {
    s.render(u, o);
  };
  vt(() => {
    let d = t();
    if (d.type != "success") {
      c.map = null, c.needsUpdate = !0, l();
      return;
    }
    c.map = d.value, c.needsUpdate = !0, l();
  });
  let h = new Ye(a, c), u = new sh();
  return u.add(h), vt(() => {
    let d;
    if (i.fenceShape != "LShape" && i.fenceShape != "UShape" && i.fenceShape != "Enclosed") {
      d != null && (u.remove(d), d = void 0);
      return;
    }
    d = new Ye(a, c), d.rotateY(-0.5 * Math.PI), d.position.set(1, 0, 1), u.add(d);
  }), vt(() => {
    let d;
    if (i.fenceShape != "UShape" && i.fenceShape != "Enclosed") {
      d != null && (u.remove(d), d = void 0);
      return;
    }
    d = new Ye(a, c), d.rotateY(-0.5 * Math.PI), d.position.set(-1, 0, 1), u.add(d);
  }), vt(() => {
    let d;
    if (i.fenceShape != "Enclosed") {
      d != null && (u.remove(d), d = void 0);
      return;
    }
    d = new Ye(a, c), d.position.set(0, 0, 2), u.add(d);
  }), (() => {
    const d = ix.cloneNode(!0);
    aa(d, "click", i.onClick, !0);
    const p = n;
    return typeof p == "function" ? Ls(p, d) : n = d, ue(d, r), Te((m) => Oh(d, i.style, m)), d;
  })();
};
Yt(["click"]);
const sx = /* @__PURE__ */ Ce("<h2>SELECT FENCE SHAPE</h2>"), ox = /* @__PURE__ */ Ce("<hr>"), ax = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: row;"><div style="flex-grow: 1"></div><div style="display: grid; grid-template-columns: auto auto; gap: 20px;"><div style="display: flex; flex-direction: column; align-items: center;"><div style="margin-top: 5px;">Inline</div></div><div style="display: flex; flex-direction: column; align-items: center;"><div style="margin-top: 5px;">L Shape</div></div><div style="display: flex; flex-direction: column; align-items: center;"><div style="margin-top: 5px;">U Shape</div></div><div style="display: flex; flex-direction: column; align-items: center;"><div style="margin-top: 5px;">Enclosed</div></div></div><div style="flex-grow: 1"></div></div>'), lx = /* @__PURE__ */ Ce("<br>"), gh = (i) => {
  let e = {
    width: 360,
    height: 210
  }, t = {
    width: e.width.toFixed(0) + "px",
    height: e.height.toFixed(0) + "px"
  };
  return [sx.cloneNode(!0), ox.cloneNode(!0), (() => {
    const n = ax.cloneNode(!0), r = n.firstChild, s = r.nextSibling, o = s.firstChild, a = o.firstChild, c = o.nextSibling, l = c.firstChild, h = c.nextSibling, u = h.firstChild, d = h.nextSibling, p = d.firstChild;
    return ue(o, be(ls, {
      fenceShape: "Inline",
      fenceStyle: "arched-spear",
      get style() {
        return {
          ...t,
          border: "2px solid black",
          cursor: "pointer",
          "background-color": i.fenceShape == "Inline" ? "#e6e4e2" : "inherit"
        };
      },
      onClick: () => i.onFenceShapeSelected("Inline")
    }), a), ue(c, be(ls, {
      fenceShape: "LShape",
      fenceStyle: "arched-spear",
      get style() {
        return {
          ...t,
          border: "2px solid black",
          cursor: "pointer",
          "background-color": i.fenceShape == "LShape" ? "#e6e4e2" : "inherit"
        };
      },
      onClick: () => i.onFenceShapeSelected("LShape")
    }), l), ue(h, be(ls, {
      fenceShape: "UShape",
      fenceStyle: "arched-spear",
      get style() {
        return {
          ...t,
          border: "2px solid black",
          cursor: "pointer",
          "background-color": i.fenceShape == "UShape" ? "#e6e4e2" : "inherit"
        };
      },
      onClick: () => i.onFenceShapeSelected("UShape")
    }), u), ue(d, be(ls, {
      fenceShape: "Enclosed",
      fenceStyle: "arched-spear",
      get style() {
        return {
          ...t,
          border: "2px solid black",
          cursor: "pointer",
          "background-color": i.fenceShape == "Enclosed" ? "#e6e4e2" : "inherit"
        };
      },
      onClick: () => i.onFenceShapeSelected("Enclosed")
    }), p), n;
  })(), lx.cloneNode(!0)];
};
function Qe(i) {
  let [e, t] = Ut({
    type: "pending"
  }), n = "";
  return vt(() => {
    let r = i();
    n = Oe();
    let s;
    switch (r.type) {
      case "success": {
        s = r.prontoCode;
        break;
      }
      case "error":
        return t({ type: "error", message: r.message });
    }
    let o = "https://cselke1.wixsite.com/test/_functions/prontoPrice?pronto_code=" + s;
    t({ type: "pending" });
    let a = n;
    fetch(o).then((c) => c.json()).then((c) => {
      a == n && (c.type == "success" ? t({ type: "success", value: c.value }) : t({ type: "error", message: c.value }));
    }).catch((c) => {
      a == n && t({ type: "error", message: c.toString() });
    });
  }), e;
}
class cx {
  numPanels;
  totalPanelPrice;
  numBrackets;
  totalBracketPrice;
  numGates;
  totalGatesPrice;
  numPostsInground;
  numPostsIngroundWithLatch;
  ingroundPostLength;
  totalPostsIngroundPrice;
  numPostsBaseplated;
  numPostsBaseplatedWithLatch;
  basePlatedPostLength;
  totalPostsBaseplatedPrice;
  numPostCaps;
  totalPostCapPrice;
  numScrews;
  totalScrewPrice;
  totalPrice;
  productDescription;
  constructor(e) {
    let t = te(() => {
      let E = e.fenceSize();
      if (E == null)
        return;
      let M = e.isPoolFence() && E.height >= 1500;
      return e.numRailsIfGardenFence() + (M ? 1 : 0);
    }), n = Qe(te(() => {
      let E = e.fenceSize();
      return E == null ? { type: "error", message: "no fence size selected" } : { type: "success", prontoCode: E.prontoCode };
    })), r = Qe(te(() => {
      let E = e.gateSize();
      return E == null ? { type: "error", message: "no gate size selected" } : { type: "success", prontoCode: E.prontoCode };
    })), s = te(() => {
      let E = e.fenceSize();
      if (E != null)
        return Math.max(1300, E.height + 100);
    }), o = te(() => {
      let E = e.fenceSize();
      if (E != null)
        return E.height + 600;
    }), a = Qe(() => ({ type: "success", prontoCode: "20QB0" })), c = Qe(() => ({ type: "success", prontoCode: "226Z0" })), l = Qe(te(() => {
      let E = s();
      if (E == null)
        return { type: "error", message: "Unknown post length for Flange Post" };
      switch (e.postMaterial()) {
        case "Alum":
          switch (e.postSize()) {
            case "50": {
              let M;
              if (E == 1300)
                M = "20T50";
              else if (E == 1600)
                M = "2ELK0";
              else if (E == 1900)
                M = "2EM60";
              else
                return { type: "error", message: "Failed to find pricing for Alum Flange Post 50x50x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
            case "65": {
              let M;
              if (E == 1300)
                M = "2EMW0";
              else if (E == 1600)
                M = "2ENG0";
              else if (E == 1900)
                M = "2EP60";
              else if (E == 2200)
                M = "2EPV0";
              else
                return { type: "error", message: "Failed to find pricing for Alum Flange Post 65x65x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
          }
        case "Galv":
          switch (e.postSize()) {
            case "50": {
              let M;
              if (E == 1300)
                M = "2EH30";
              else if (E == 1600)
                M = "2EHS0";
              else if (E == 1900)
                M = "2EJF0";
              else if (E == 2200)
                M = "2EK50";
              else if (E == 2500)
                M = "2EKV0";
              else
                return { type: "error", message: "Failed to find pricing for Galv Flange Post 50x50x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
            case "65": {
              let M;
              if (E == 1300)
                M = "2EGF0";
              else if (E == 1600)
                M = "2EFS0";
              else if (E == 1900)
                M = "2EF30";
              else if (E == 2200)
                M = "2EEE0";
              else if (E == 2500)
                M = "2EDR0";
              else
                return { type: "error", message: "Failed to find pricing for Galv Flange Post 65x65x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
          }
      }
    })), h = l, u;
    {
      let E = te(() => {
        switch (e.postCapType()) {
          case "None":
            return () => ({ type: "success", value: "0.0" });
          case "Plastic":
            switch (e.postSize()) {
              case "50":
                return Qe(() => ({ type: "success", prontoCode: "22HC0" }));
              case "65":
                return Qe(() => ({ type: "success", prontoCode: "22HF0" }));
            }
          case "Steel":
            switch (e.postSize()) {
              case "50":
                return Qe(() => ({ type: "success", prontoCode: "2F4N0" }));
              case "65":
                return Qe(() => ({ type: "success", prontoCode: "22HY0" }));
            }
        }
      });
      u = te(() => E()());
    }
    let d = Qe(te(() => {
      let E = o();
      if (E == null)
        return { type: "error", message: "Unknown post length for Post" };
      switch (e.postMaterial()) {
        case "Alum":
          switch (e.postSize()) {
            case "50": {
              let M;
              if (E == 1500)
                M = "20U70";
              else if (E == 1800)
                M = "20UV0";
              else if (E == 2100)
                M = "20VK0";
              else if (E == 2400)
                M = "20W70";
              else if (E == 3e3)
                M = "2ERB0";
              else
                return { type: "error", message: "Failed to find pricing for Alum Post 50x50x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
            case "65": {
              let M;
              if (E == 1500)
                M = "20WZ0";
              else if (E == 1800)
                M = "20XN0";
              else if (E == 2100)
                M = "20YC0";
              else if (E == 2400)
                M = "20Z10";
              else if (E == 2700)
                M = "2ESJ0";
              else if (E == 3e3)
                M = "2ET70";
              else
                return { type: "error", message: "Failed to find pricing for Alum Post 65x65x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
          }
        case "Galv":
          switch (e.postSize()) {
            case "50": {
              let M;
              if (E == 1500)
                M = "21PE0";
              else if (E == 1800)
                M = "21Q30";
              else if (E == 2100)
                M = "21QS0";
              else if (E == 2400)
                M = "21RE0";
              else if (E == 2700)
                M = "2E2Q0";
              else if (E == 3e3)
                M = "2E3D0";
              else
                return { type: "error", message: "Failed to find pricing for Galv Post 50x50x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
            case "65": {
              let M;
              if (E == 1500)
                M = "2E420";
              else if (E == 1800)
                M = "21S50";
              else if (E == 2100)
                M = "21SU0";
              else if (E == 2400)
                M = "21TG0";
              else if (E == 2700)
                M = "2E4S0";
              else if (E == 3e3)
                M = "21U70";
              else
                return { type: "error", message: "Failed to find pricing for Galv Post 50x50x" + E.toFixed(0) };
              return { type: "success", prontoCode: M };
            }
          }
      }
    })), p = d, m = Qe(() => ({ type: "success", prontoCode: "26MF0" })), g = te(() => {
      let E = e.fenceSize(), M = e.gateSize();
      if (E == null || M == null)
        return 0;
      let X = 0;
      for (let ee of e.walls())
        ee.length != null && (X += Math.ceil((ee.length - (ee.hasGate ? M.width : 0)) / E.width));
      return X;
    }), f = te(() => {
      let E = t();
      if (E != null)
        return 2 * E * g();
    }), v = te(() => {
      let E = e.fenceSize(), M = e.gateSize();
      if (E == null || M == null)
        return 0;
      let X = 0;
      for (let ee of e.walls())
        ee.length != null && ee.postType == "Inground" && (X += Math.ceil((ee.length - (ee.hasGate ? M.width : 0)) / E.width) + 1);
      return X;
    }), w = te(() => {
      let E = 0;
      for (let M of e.walls())
        M.postType == "Inground" && M.hasGate && ++E;
      return E;
    }), x = te(() => {
      let E = e.fenceSize(), M = e.gateSize();
      if (E == null || M == null)
        return 0;
      let X = 0;
      for (let ee of e.walls())
        ee.length != null && ee.postType == "Baseplated" && (X += Math.ceil((ee.length - (ee.hasGate ? M.width : 0)) / E.width) + 1);
      return X;
    }), _ = te(() => {
      let E = 0;
      for (let M of e.walls())
        M.postType == "Baseplated" && M.hasGate && ++E;
      return E;
    }), y = te(() => e.postCapType() == "None" ? 0 : x() + _() + v() + w()), P = te(() => {
      let E = 0;
      for (let M of e.walls())
        M.hasGate && ++E;
      return E;
    }), z = te(() => {
      let E = f();
      if (E != null)
        return E * 4 + P() * 20;
    }), b = te(() => {
      if (g() == 0)
        return { type: "success", value: 0 };
      let E = n(), M;
      switch (E.type) {
        case "success":
          M = Number.parseFloat(E.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: E.message };
      }
      return { type: "success", value: g() * M };
    }), L = te(() => {
      let E = f();
      if (E == null)
        return { type: "error", message: "Failed to work out number of brackets per panel" };
      if (E == 0)
        return { type: "success", value: 0 };
      let M = a(), X;
      switch (M.type) {
        case "success":
          X = Number.parseFloat(M.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: M.message };
      }
      return { type: "success", value: E * X };
    }), R = te(() => {
      if (P() == 0)
        return { type: "success", value: 0 };
      let E = r(), M;
      switch (E.type) {
        case "success":
          M = Number.parseFloat(E.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: E.message };
      }
      return { type: "success", value: P() * M };
    }), W = te(() => {
      if (v() == 0 && w() == 0)
        return { type: "success", value: 0 };
      let E = d(), M;
      switch (E.type) {
        case "success":
          M = Number.parseFloat(E.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: E.message };
      }
      let X = p(), ee;
      switch (X.type) {
        case "success":
          ee = Number.parseFloat(X.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: X.message };
      }
      let ne;
      if (e.includeMagneticLatch()) {
        let Q = c();
        switch (Q.type) {
          case "success":
            ne = w() * Number.parseFloat(Q.value);
            break;
          case "pending":
            return { type: "pending" };
          case "error":
            return { type: "error", message: Q.message };
        }
      } else
        ne = 0;
      return { type: "success", value: v() * M + w() * ee + ne };
    }), V = te(() => {
      if (x() == 0 && _() == 0)
        return { type: "success", value: 0 };
      let E = l(), M;
      switch (E.type) {
        case "success":
          M = Number.parseFloat(E.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: E.message };
      }
      let X = h(), ee;
      switch (X.type) {
        case "success":
          ee = Number.parseFloat(X.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: X.message };
      }
      let ne;
      if (e.includeMagneticLatch()) {
        let Q = c();
        switch (Q.type) {
          case "success":
            ne = _() * Number.parseFloat(Q.value);
            break;
          case "pending":
            return { type: "pending" };
          case "error":
            return { type: "error", message: Q.message };
        }
      } else
        ne = 0;
      return { type: "success", value: x() * M + _() * ee + ne };
    }), F = te(() => {
      let E = y();
      if (E == 0)
        return { type: "success", value: 0 };
      let M = u(), X;
      switch (M.type) {
        case "success":
          X = Number.parseFloat(M.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: M.message };
      }
      return { type: "success", value: E * X };
    }), k = te(() => {
      let E = z();
      if (E == null)
        return { type: "error", message: "Failed to work out number of screws" };
      if (E == 0)
        return { type: "success", value: 0 };
      let M = m(), X;
      switch (M.type) {
        case "success":
          X = Number.parseFloat(M.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: M.message };
      }
      return { type: "success", value: E * X };
    }), D = te(() => {
      let E = [
        b,
        L,
        R,
        W,
        V,
        F,
        k
      ], M = 0;
      for (let X of E) {
        let ee = X();
        switch (ee.type) {
          case "success":
            M += ee.value;
            break;
          case "pending":
            return { type: "pending" };
          case "error":
            return { type: "error", message: ee.message };
        }
      }
      return { type: "success", value: M };
    }), G = te(() => {
      let E = e.fenceSize();
      if (E == null)
        return "";
      let M = "";
      M += "Panel Size: " + E.height + "h x " + E.width + "w (pronto code: " + E.prontoCode + `)\r
`;
      let X = e.gateSize();
      switch (X != null && P() != 0 && (M += "Gate Size: " + X.height + "h x " + X.width + "w (pronto code: " + X.prontoCode + `)\r
`), e.includeMagneticLatch() && (M += `Gates all have a magnetic latch\r
`), M += "Post Material: ", e.postMaterial()) {
        case "Alum":
          M += `Aluminium\r
`;
          break;
        case "Galv":
          M += `Galv\r
`;
          break;
      }
      switch (M += "Post Size: ", e.postSize()) {
        case "50":
          M += `50mm\r
`;
          break;
        case "65":
          M += `65mm\r
`;
          break;
      }
      M += "Caps: " + e.postCapType() + `\r
`;
      let ee = 0;
      for (let de of e.walls())
        de.length != null && (M += "Side " + ee + ": Length is " + de.length + "mm, " + (de.hasGate ? "has a gate, " : "") + (de.postType == "Inground" ? "posts are in ground" : "posts are baseplated") + `.\r
`, ++ee);
      let ne = D(), Q;
      switch (ne.type) {
        case "success":
          Q = "$" + ne.value.toFixed(2);
          break;
        case "pending":
          Q = "was still pending (slow connection?)";
          break;
        case "error":
          Q = "Error: " + ne.message;
          break;
      }
      return M += "Estimators Total Price: " + Q, M;
    });
    this.numPanels = g, this.totalPanelPrice = b, this.numBrackets = f, this.totalBracketPrice = L, this.numGates = P, this.totalGatesPrice = R, this.numPostsInground = v, this.numPostsIngroundWithLatch = w, this.ingroundPostLength = o, this.totalPostsIngroundPrice = W, this.numPostsBaseplated = x, this.numPostsBaseplatedWithLatch = _, this.basePlatedPostLength = s, this.totalPostsBaseplatedPrice = V, this.numPostCaps = y, this.totalPostCapPrice = F, this.numScrews = z, this.totalScrewPrice = k, this.totalPrice = D, this.productDescription = G;
  }
}
const hx = /* @__PURE__ */ Ce("<h1>Send Quote Request</h1>"), dx = /* @__PURE__ */ Ce('<div class="calc-table"><b>Note: </b> The information from the calculator above will get included in your quote request.</div>'), ux = /* @__PURE__ */ Ce("<br>"), fx = /* @__PURE__ */ Ce('<table><thead></thead><tbody><tr><td class="calc-table">First Name:</td><td><input type="text"></td></tr><tr><td class="calc-table">Surname:</td><td><input type="text"></td></tr><tr><td class="calc-table">Closest Store:</td><td><select></select></td></tr><tr><td class="calc-table">Email:</td><td><input type="text"></td></tr><tr><td class="calc-table">Mobile:</td><td><input type="text"></td></tr><tr><td class="calc-table" style="vertical-align: top;">Notes:</td><td><textarea rows="6" cols="60"></textarea></td></tr><tr><td></td><td><button>Send</button></td></tr></tbody></table>'), px = /* @__PURE__ */ Ce("<option></option>"), Os = (i) => {
  let [e, t] = Zn({
    first_name: "",
    surname: "",
    location: "",
    email: "",
    mobile: "",
    notes: ""
  });
  return [hx.cloneNode(!0), dx.cloneNode(!0), ux.cloneNode(!0), (() => {
    const n = fx.cloneNode(!0), r = n.firstChild, s = r.nextSibling, o = s.firstChild, a = o.firstChild, c = a.nextSibling, l = c.firstChild, h = o.nextSibling, u = h.firstChild, d = u.nextSibling, p = d.firstChild, m = h.nextSibling, g = m.firstChild, f = g.nextSibling, v = f.firstChild, w = m.nextSibling, x = w.firstChild, _ = x.nextSibling, y = _.firstChild, P = w.nextSibling, z = P.firstChild, b = z.nextSibling, L = b.firstChild, R = P.nextSibling, W = R.firstChild, V = W.nextSibling, F = V.firstChild, k = R.nextSibling, D = k.firstChild, G = D.nextSibling, E = G.firstChild;
    return l.$$input = (M) => {
      t("first_name", M.currentTarget.value);
    }, p.$$input = (M) => {
      t("surname", M.currentTarget.value);
    }, v.addEventListener("change", (M) => {
      let X = M.currentTarget.selectedOptions;
      if (X.length == 0)
        return;
      let ee = X[0];
      t("location", ee.value);
    }), ue(v, () => te(() => ["", "Brisbane", "Toowoomba", "Inverell", "Grafton"].map((M) => (() => {
      const X = px.cloneNode(!0);
      return X.value = M, ue(X, M), X;
    })()))), y.$$input = (M) => {
      t("email", M.currentTarget.value);
    }, L.$$input = (M) => {
      t("mobile", M.currentTarget.value);
    }, F.$$input = (M) => {
      t("notes", M.currentTarget.value);
    }, E.$$click = () => {
      i.onRequestQuote({
        first_name: e.first_name,
        surname: e.surname,
        location: e.location,
        email: e.email,
        mobile: e.mobile,
        product_description: i.productDescription,
        notes: e.notes
      }), alert("Quote has been sent.");
    }, Te(() => l.value = e.first_name), Te(() => p.value = e.surname), Te(() => y.value = e.email), Te(() => L.value = e.mobile), Te(() => F.value = e.notes), n;
  })()];
};
Yt(["input", "click"]);
const Ro = /* @__PURE__ */ Ce('<svg><line stroke="black"></line></svg>', 4, !0), gx = /* @__PURE__ */ Ce('<svg><text text-anchor="middle" dominant-baseline="central" font-size="12pt"></text></svg>', 4, !0), cs = /* @__PURE__ */ Ce('<svg><rect fill="black"></rect></svg>', 4, !0), mx = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: row; gap: 20px;"><div><h2>PLAN VIEW</h2><hr><svg width="500" height="500" style="border: 1px solid black;"></svg></div><div><h2>COMPONENTS LIST</h2><hr><table style="border-spacing: 0px;" class="calc-table"><thead></thead><tbody><tr><td style="border: 1px solid black;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid;">Panels</td><td style="border-width: 1px 1px 1px 0px; border-style: solid;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Brackets</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 2 brackets for every horizontal rail to fix to the posts.</td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Gates</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Posts Inground</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 50mm square <!> x <!>m.</td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Baseplated Posts</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 50mm square <!> x <!>m.</td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Screws</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 2 screws per bracket and 20 per gate.</td></tr></tbody></table><div class="calc-table" style="padding-top: 5px;"><b>Estimated Total Price: </b></div><hr></div></div>'), xx = /* @__PURE__ */ Ce('<tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Post Caps</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 1 per post.</td></tr>'), yx = (i) => {
  let e = te(() => {
    if (i.selectedFenceSizeIdx != null && !(i.selectedFenceSizeIdx < 0 || i.selectedFenceSizeIdx >= i.fenceSizes.length))
      return i.fenceSizes[i.selectedFenceSizeIdx];
  }), t = te(() => {
    if (i.selectedGateSizeIdx != null && !(i.selectedGateSizeIdx < 0 || i.selectedGateSizeIdx >= i.gateSizes.length))
      return i.gateSizes[i.selectedGateSizeIdx];
  }), n = new cx({
    isPoolFence: () => i.isPoolFence,
    numRailsIfGardenFence: () => i.numRailsIfGardenFence,
    fenceSize: e,
    gateSize: t,
    includeMagneticLatch: () => i.includeMagneticLatch,
    postMaterial: () => i.postMaterial,
    postSize: () => i.postSize,
    postCapType: () => i.postCapType,
    walls: () => i.walls
  }), r = 15, s = (w) => {
    let x = w.flipLabelSide ?? !1, _ = w.toX - w.fromX, y = w.toY - w.fromY, P = Math.sqrt(_ * _ + y * y), z = _ / P, b = y / P, L = -b, R = z, W = r, V = 0.5 * (w.fromX + w.toX) + 0.7 * W * L * (x ? -1 : 1), F = 0.5 * (w.fromY + w.toY) - 0.7 * W * R * (x ? -1 : 1), k = -Math.atan2(b, z) * 180 / Math.PI;
    return [(() => {
      const D = Ro.cloneNode(!0);
      return Te((G) => {
        const E = w.fromX, M = w.fromY, X = w.toX, ee = w.toY;
        return E !== G._v$ && ce(D, "x1", G._v$ = E), M !== G._v$2 && ce(D, "y1", G._v$2 = M), X !== G._v$3 && ce(D, "x2", G._v$3 = X), ee !== G._v$4 && ce(D, "y2", G._v$4 = ee), G;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), D;
    })(), (() => {
      const D = Ro.cloneNode(!0);
      return Te((G) => {
        const E = w.fromX - 0.5 * L * W, M = w.fromY - 0.5 * R * W, X = w.fromX + 0.5 * L * W, ee = w.fromY + 0.5 * R * W;
        return E !== G._v$5 && ce(D, "x1", G._v$5 = E), M !== G._v$6 && ce(D, "y1", G._v$6 = M), X !== G._v$7 && ce(D, "x2", G._v$7 = X), ee !== G._v$8 && ce(D, "y2", G._v$8 = ee), G;
      }, {
        _v$5: void 0,
        _v$6: void 0,
        _v$7: void 0,
        _v$8: void 0
      }), D;
    })(), (() => {
      const D = Ro.cloneNode(!0);
      return Te((G) => {
        const E = w.toX - 0.5 * L * W, M = w.toY - 0.5 * R * W, X = w.toX + 0.5 * L * W, ee = w.toY + 0.5 * R * W;
        return E !== G._v$9 && ce(D, "x1", G._v$9 = E), M !== G._v$10 && ce(D, "y1", G._v$10 = M), X !== G._v$11 && ce(D, "x2", G._v$11 = X), ee !== G._v$12 && ce(D, "y2", G._v$12 = ee), G;
      }, {
        _v$9: void 0,
        _v$10: void 0,
        _v$11: void 0,
        _v$12: void 0
      }), D;
    })(), (() => {
      const D = gx.cloneNode(!0);
      return ce(D, "transform", "translate(" + V + "," + F + ") rotate(" + k + ")"), ue(D, () => w.dimension), D;
    })()];
  }, o = 500, a = 500, c = 30, l = o - 2 * c, h = a - 2 * c, u = 20, d;
  {
    let w = l - 2 * u, x = h - 2 * u, _;
    i.walls.length == 0 ? _ = 1 : (_ = x / i.walls[0].length, i.walls.length >= 2 && (_ = Math.min(_, w / i.walls[1].length)), i.walls.length >= 3 && (_ = Math.min(_, x / i.walls[2].length)), i.walls.length == 4 && (_ = Math.min(_, w / i.walls[3].length))), d = _;
  }
  let p = 0.5 * o - Math.max(i.walls.length >= 2 ? 0.5 * i.walls[1].length * d : 0, i.walls.length == 4 ? 0.5 * i.walls[3].length * d : 0), m = 0.5 * a - Math.max(i.walls.length >= 1 ? 0.5 * i.walls[0].length * d : 0, i.walls.length >= 3 ? 0.5 * i.walls[2].length * d : 0), g = 0.5 * o + Math.max(i.walls.length >= 2 ? 0.5 * i.walls[1].length * d : 0, i.walls.length == 4 ? 0.5 * i.walls[3].length * d : 0), f = 0.5 * a + Math.max(i.walls.length >= 1 ? 0.5 * i.walls[0].length * d : 0, i.walls.length >= 3 ? 0.5 * i.walls[2].length * d : 0), v = 80 * d;
  return (() => {
    const w = mx.cloneNode(!0), x = w.firstChild, _ = x.firstChild, y = _.nextSibling, P = y.nextSibling, z = x.nextSibling, b = z.firstChild, L = b.nextSibling, R = L.nextSibling, W = R.firstChild, V = W.nextSibling, F = V.firstChild, k = F.firstChild, D = k.nextSibling, G = D.nextSibling, E = F.nextSibling, M = E.firstChild, X = E.nextSibling, ee = X.firstChild, ne = ee.nextSibling, Q = ne.nextSibling, de = X.nextSibling, T = de.firstChild, C = T.nextSibling, S = C.nextSibling, A = S.firstChild, U = A.nextSibling, Z = U.nextSibling, $ = Z.nextSibling;
    $.nextSibling;
    const fe = de.nextSibling, q = fe.firstChild, K = q.nextSibling, j = K.nextSibling, se = j.firstChild, le = se.nextSibling, _e = le.nextSibling, Y = _e.nextSibling;
    Y.nextSibling;
    const O = fe.nextSibling, Se = O.firstChild, Ae = R.nextSibling;
    return Ae.firstChild, Ae.nextSibling, ue(P, be(en, {
      get when() {
        return i.walls.length >= 1;
      },
      get children() {
        return [be(s, {
          fromX: p - u,
          fromY: m,
          toX: p - u,
          get toY() {
            return m + i.walls[0].length * d;
          },
          get dimension() {
            return i.walls[0].length.toFixed(0) + "mm";
          }
        }), (() => {
          const N = cs.cloneNode(!0);
          return ce(N, "x", p), ce(N, "y", m), ce(N, "width", v), Te(() => ce(N, "height", i.walls[0].length * d)), N;
        })()];
      }
    }), null), ue(P, be(en, {
      get when() {
        return i.walls.length >= 2;
      },
      get children() {
        return [be(s, {
          fromX: p,
          fromY: m - u,
          get toX() {
            return p + i.walls[1].length * d;
          },
          toY: m - u,
          get dimension() {
            return i.walls[1].length.toFixed(0) + "mm";
          }
        }), (() => {
          const N = cs.cloneNode(!0);
          return ce(N, "x", p), ce(N, "y", m), ce(N, "height", v), Te(() => ce(N, "width", i.walls[1].length * d)), N;
        })()];
      }
    }), null), ue(P, be(en, {
      get when() {
        return i.walls.length >= 3;
      },
      get children() {
        return [be(s, {
          fromX: g + u,
          fromY: m,
          toX: g + u,
          get toY() {
            return m + i.walls[2].length * d;
          },
          get dimension() {
            return i.walls[2].length.toFixed(0) + "mm";
          },
          flipLabelSide: !0
        }), (() => {
          const N = cs.cloneNode(!0);
          return ce(N, "x", g - v), ce(N, "y", m), ce(N, "width", v), Te(() => ce(N, "height", i.walls[2].length * d)), N;
        })()];
      }
    }), null), ue(P, be(en, {
      get when() {
        return i.walls.length == 4;
      },
      get children() {
        return [be(s, {
          fromX: p,
          fromY: f + u,
          get toX() {
            return p + i.walls[3].length * d;
          },
          toY: f + u,
          get dimension() {
            return i.walls[3].length.toFixed(0) + "mm";
          },
          flipLabelSide: !0
        }), (() => {
          const N = cs.cloneNode(!0);
          return ce(N, "x", p), ce(N, "y", f - v), ce(N, "height", v), Te(() => ce(N, "width", i.walls[3].length * d)), N;
        })()];
      }
    }), null), ue(k, () => n.numPanels()), ue(G, () => {
      let N = e();
      return N == null ? "No panel size selected." : "Panels are " + N.width.toFixed(0) + "mm wide x " + N.height.toFixed(0) + "mm high.";
    }), ue(M, () => n.numBrackets()), ue(ee, () => n.numGates()), ue(Q, () => {
      let N = t();
      return N == null ? "No gate size selected." : "Gates are " + N.width + "mm wide x " + N.height + "mm high.";
    }), ue(T, () => n.numPostsInground() + n.numPostsIngroundWithLatch()), ue(S, () => i.postMaterial == "Alum" ? "aluminium" : "galv", U), ue(S, () => {
      let N = n.ingroundPostLength();
      return N == null ? "?" : (N / 1e3).toFixed(1);
    }, $), ue(q, () => n.numPostsBaseplated() + n.numPostsBaseplatedWithLatch()), ue(j, () => i.postMaterial == "Alum" ? "aluminium" : "galv", le), ue(j, () => {
      let N = n.basePlatedPostLength();
      return N == null ? "?" : (N / 1e3).toFixed(1);
    }, Y), ue(V, () => {
      if (i.postCapType != "None")
        return (() => {
          const N = xx.cloneNode(!0), I = N.firstChild;
          return ue(I, () => n.numPostCaps()), N;
        })();
    }, O), ue(Se, () => n.numScrews()), ue(Ae, () => {
      let N = n.totalPrice();
      switch (N.type) {
        case "success":
          return "$" + N.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + N.message + ")";
      }
    }, null), ue(z, be(Os, {
      get productDescription() {
        return n.productDescription();
      },
      get onRequestQuote() {
        return i.onRequestQuote;
      }
    }), null), w;
  })();
}, _x = /* @__PURE__ */ Ce('<div style="display: inline; border-radius: 50%; width: 12px; height: 12px; padding: 4px; background-color: #fff; border: none; color: #000; text-align: center; font: 12px Arial, sans-serif; font-weight: bold;"></div>'), vx = /* @__PURE__ */ Ce('<div><div style="display: flex; flex-direction: row; height: 32px; align-items: center;"><div style="flex-grow: 1;"></div><div style="flex-grow: 1;"></div></div></div>'), bx = /* @__PURE__ */ Ce('<div><canvas width="162" height="162"></canvas><br><div style="display: flex; flex-direction: row; gap: 5px;"></div><div style="font-size: 16px; width: 160px;">Select side by clicking on requred box</div><br></div>'), hs = (i) => {
  let e = (t) => (() => {
    const n = _x.cloneNode(!0);
    return ue(n, t), n;
  })();
  return (() => {
    const t = vx.cloneNode(!0), n = t.firstChild, r = n.firstChild, s = r.nextSibling;
    return t.$$click = () => i.onSelected(), t.style.setProperty("width", "32px"), t.style.setProperty("cursor", "pointer"), ue(n, () => e(i.letter), s), Te(() => t.style.setProperty("background-color", i.selected ? "rgb(69,149,199)" : "#e6e4e2")), t;
  })();
}, mh = (i) => {
  let e, t = 162, n = 162, [r, s] = Ut([]);
  vt(() => {
    let l = [];
    if (e == null) {
      s(l);
      return;
    }
    let h = e.getContext("2d");
    if (h == null) {
      s(l);
      return;
    }
    h.clearRect(0, 0, t, n);
    let u = 10, d = 3, p = 20, m = 20, g = t - 20, f = n - 20;
    i.selectedWall == "A" ? h.fillStyle = "rgb(69,149,199)" : h.fillStyle = "rgb(211,211,211)", h.fillRect(p, m + u + d, u, f - m - 2 * (u + d)), l.push({
      x: p,
      y: m + u + d,
      width: u,
      height: f - m - 2 * (u + d)
    }), h.fillStyle = "white", h.beginPath(), h.ellipse(p + 0.5 * u, 0.5 * (m + f), 0.5 * u, 0.5 * u, 0, 0, 2 * Math.PI), h.fill(), h.fillStyle = "black", h.textAlign = "center", h.textBaseline = "middle", h.fillText("A", p + 0.5 * u, 0.5 * (m + f)), (i.fenceShape == "LShape" || i.fenceShape == "UShape" || i.fenceShape == "Enclosed") && (i.selectedWall == "B" ? h.fillStyle = "rgb(69,149,199)" : h.fillStyle = "rgb(211,211,211)", h.fillRect(p, m, g - p, u), l.push({
      x: p,
      y: m,
      width: g - p,
      height: u
    }), h.fillStyle = "white", h.beginPath(), h.ellipse(0.5 * (p + g), m + 0.5 * u, 0.5 * u, 0.5 * u, 0, 0, 2 * Math.PI), h.fill(), h.fillStyle = "black", h.textAlign = "center", h.textBaseline = "middle", h.fillText("B", 0.5 * (p + g), m + 0.5 * u)), (i.fenceShape == "UShape" || i.fenceShape == "Enclosed") && (i.selectedWall == "C" ? h.fillStyle = "rgb(69,149,199)" : h.fillStyle = "rgb(211,211,211)", h.fillRect(g - u, m + u + d, u, f - m - 2 * (u + d)), l.push({
      x: g - u,
      y: m + u + d,
      width: u,
      height: f - m - 2 * (u + d)
    }), h.fillStyle = "white", h.beginPath(), h.ellipse(f - 0.5 * u, 0.5 * (m + f), 0.5 * u, 0.5 * u, 0, 0, 2 * Math.PI), h.fill(), h.fillStyle = "black", h.textAlign = "center", h.textBaseline = "middle", h.fillText("C", g - 0.5 * u, 0.5 * (m + f))), i.fenceShape == "Enclosed" && (i.selectedWall == "D" ? h.fillStyle = "rgb(69,149,199)" : h.fillStyle = "rgb(211,211,211)", h.fillRect(p, f - u, g - p, u), l.push({
      x: p,
      y: f - u,
      width: g - p,
      height: u
    }), h.fillStyle = "white", h.beginPath(), h.ellipse(0.5 * (p + f), f - 0.5 * u, 0.5 * u, 0.5 * u, 0, 0, 2 * Math.PI), h.fill(), h.fillStyle = "black", h.textAlign = "center", h.textBaseline = "middle", h.fillText("D", 0.5 * (p + g), f - 0.5 * u)), h.fillStyle = "black", s(l);
  });
  let [o, a] = Ut(void 0), c = te(() => {
    let l = o();
    if (l == null)
      return;
    let h = r(), u;
    for (let d = 0; d < h.length; ++d) {
      let p = h[d];
      if (l.x >= p.x && l.x < p.x + p.width && l.y >= p.y && l.y < p.y + p.height) {
        u = d;
        break;
      }
    }
    if (u != null)
      switch (u) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        default:
          return;
      }
  });
  return (() => {
    const l = bx.cloneNode(!0), h = l.firstChild, u = h.nextSibling, d = u.nextSibling;
    h.$$click = () => {
      let m = c();
      m != null && i.onWallSelected(m);
    }, h.addEventListener("mouseleave", () => {
      a(void 0);
    }), h.$$mousemove = (m) => {
      let g = m.currentTarget.getBoundingClientRect(), f = m.clientX - g.left, v = m.clientY - g.top;
      a({
        x: f,
        y: v
      });
    };
    const p = e;
    return typeof p == "function" ? Ls(p, h) : e = h, h.style.setProperty("border", "1px solid black"), ue(d, be(hs, {
      letter: "A",
      get selected() {
        return i.selectedWall == "A";
      },
      onSelected: () => i.onWallSelected("A")
    }), null), ue(d, be(en, {
      get when() {
        return i.fenceShape == "LShape" || i.fenceShape == "UShape" || i.fenceShape == "Enclosed";
      },
      get children() {
        return be(hs, {
          letter: "B",
          get selected() {
            return i.selectedWall == "B";
          },
          onSelected: () => i.onWallSelected("B")
        });
      }
    }), null), ue(d, be(en, {
      get when() {
        return i.fenceShape == "UShape" || i.fenceShape == "Enclosed";
      },
      get children() {
        return be(hs, {
          letter: "C",
          get selected() {
            return i.selectedWall == "C";
          },
          onSelected: () => i.onWallSelected("C")
        });
      }
    }), null), ue(d, be(en, {
      get when() {
        return i.fenceShape == "Enclosed";
      },
      get children() {
        return be(hs, {
          letter: "D",
          get selected() {
            return i.selectedWall == "D";
          },
          onSelected: () => i.onWallSelected("D")
        });
      }
    }), null), Te(() => h.style.setProperty("cursor", c() != null ? "pointer" : "default")), l;
  })();
};
Yt(["click", "mousemove"]);
const Sx = /* @__PURE__ */ Ce('<div style="display: inline; border-radius: 50%; width: 12px; height: 12px; padding: 4px; background-color: #fff; border: none; color: #000; text-align: center; font: 12px Arial, sans-serif; font-weight: bold;"></div>'), wx = /* @__PURE__ */ Ce("<h2>SPECIFY SPANS & GATES</h2>"), Mx = /* @__PURE__ */ Ce("<hr>"), Cx = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: row; align-items: top; gap: 30px"><div style="flex-grow: 1; background-color: #e6e4e2; display: grid; grid-template-columns: auto auto auto; gap: 10px; padding: 10px;"><div style="grid-column: span 3;"><div style="display: flex; flex-direction: row; height: 32px; align-items: center; background-color: rgb(69,149,199);"><div style="flex-grow: 1;"></div><div style="display: inline; color: white; margin-right: 10px;">SPANS</div><div style="flex-grow: 1;"></div></div><div style="padding-top: 10px; padding-bottom: 10px;"><div class="calc-table">Panel Size:</div><div class="calc-table">Gate Size:</div><div class="calc-table">Post Options:</div></div><div style="display: flex; flex-direction: row; height: 32px; align-items: center; background-color: rgb(69,149,199);"><div style="flex-grow: 1;"></div><div style="display: inline; color: white; margin-right: 10px;">SPAN</div><div style="flex-grow: 1;"></div></div><div style="display: flex; flex-direction: row; gap: 10px;"><div style="background: white;"></div><div style="margin-top: 10px;"><div class="calc-table" style="display: inline;">Length (mm): </div><input type="text"><br><input type="checkbox"><label class="calc-table">Has Gate?</label><br><div class="calc-table" style="display: inline;">Post Style:</div><input type="radio"><label class="calc-table">Inground</label><input type="radio"><label class="calc-table">Base Plated</label></div></div></div></div></div>'), Kl = /* @__PURE__ */ Ce('<input type="radio">'), Ql = /* @__PURE__ */ Ce('<label class="calc-table"></label>'), Px = /* @__PURE__ */ Ce('<div class="calc-table"><input type="checkbox"><label></label></div>'), Tx = /* @__PURE__ */ Ce('<div class="calc-table"><input type="radio"><label>Aluminium</label><input type="radio"><label>Galv</label></div>'), Ax = /* @__PURE__ */ Ce('<div class="calc-table"><input type="radio"><label>50mm posts</label><input type="radio"><label>65mm posts</label></div>'), Ex = /* @__PURE__ */ Ce('<div class="calc-table">Caps:<input type="radio"><label>None</label><input type="radio"><label>Plastic</label></div>'), Lx = (i) => {
  let e = te(() => {
    if (i.selectedFenceSizeIdx != null && !(i.selectedFenceSizeIdx < 0 || i.selectedFenceSizeIdx >= i.fenceSizes.length))
      return i.fenceSizes[i.selectedFenceSizeIdx];
  }), t = te(() => {
    if (i.selectedGateSizeIdx != null && !(i.selectedGateSizeIdx < 0 || i.selectedGateSizeIdx >= i.gateSizes.length))
      return i.gateSizes[i.selectedGateSizeIdx];
  }), n = te(() => {
    let f = i.fenceSizes.flatMap((v, w) => {
      if (v.width != 2400)
        return [];
      if (i.isPoolFence) {
        if (v.height < 1200)
          return [];
        if (i.isArchedSpear && v.height < 1500)
          return [];
      }
      return [{
        fenceSize: v,
        index: w
      }];
    });
    return f.length != 0 ? f.some((v) => v.index == i.selectedFenceSizeIdx) || i.onSelectedFenceSizeIdxChanged(f[0].index) : i.onSelectedFenceSizeIdxChanged(void 0), f;
  }), r = te(() => {
    let f = e();
    if (f == null)
      return [];
    let v = f, w = i.gateSizes.flatMap((x, _) => x.height != v.height ? [] : [{
      gateSize: x,
      index: _
    }]);
    if (w.length != 0) {
      let x = t();
      if (x != null) {
        let _ = !1;
        for (let y of w)
          if (y.gateSize.width == x.width) {
            _ = !0, i.onSelectedGateSizeIdxChanged(y.index);
            break;
          }
        _ || i.onSelectedGateSizeIdxChanged(w[0].index);
      } else
        i.onSelectedGateSizeIdxChanged(w[0].index);
    } else
      i.onSelectedGateSizeIdxChanged(void 0);
    return w;
  }), s = (f) => (() => {
    const v = Sx.cloneNode(!0);
    return ue(v, f), v;
  })(), o = te(() => {
    switch (i.selectedWall) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
    }
  }), a = te(() => {
    let f = o();
    if (!(f >= i.walls.length))
      return i.walls[f].length;
  }), c = te(() => {
    let f = o();
    if (!(f >= i.walls.length))
      return i.walls[f].hasGate;
  }), l = te(() => {
    let f = o();
    if (!(f >= i.walls.length))
      return i.walls[f].postType;
  }), h = Oe(), u = Oe(), d = Oe(), p = Oe(), m = Oe(), g = Oe();
  return [wx.cloneNode(!0), Mx.cloneNode(!0), (() => {
    const f = Cx.cloneNode(!0), v = f.firstChild, w = v.firstChild, x = w.firstChild, _ = x.nextSibling, y = _.firstChild, P = y.nextSibling, z = P.nextSibling, b = _.nextSibling, L = b.firstChild, R = L.nextSibling, W = R.nextSibling, V = b.nextSibling, F = V.firstChild, k = F.nextSibling, D = k.firstChild, G = D.nextSibling, E = G.nextSibling, M = E.nextSibling, X = M.nextSibling, ee = X.nextSibling, ne = ee.nextSibling, Q = ne.nextSibling, de = Q.nextSibling, T = de.nextSibling, C = T.nextSibling;
    return ue(_, be(Ot, {
      get each() {
        return n();
      },
      children: (S) => {
        let A = Oe();
        return [(() => {
          const U = Kl.cloneNode(!0);
          return U.addEventListener("change", (Z) => {
            Z.currentTarget.checked && i.onSelectedFenceSizeIdxChanged(S().index);
          }), ce(U, "id", A), ce(U, "name", h), Te(() => U.checked = i.selectedFenceSizeIdx == S().index), U;
        })(), (() => {
          const U = Ql.cloneNode(!0);
          return ce(U, "for", A), ue(U, () => S().fenceSize.height + "h"), U;
        })()];
      }
    }), P), ue(_, be(Ot, {
      get each() {
        return r();
      },
      children: (S) => {
        let A = Oe();
        return [(() => {
          const U = Kl.cloneNode(!0);
          return U.addEventListener("change", (Z) => {
            Z.currentTarget.checked && i.onSelectedGateSizeIdxChanged(S().index);
          }), ce(U, "id", A), ce(U, "name", u), Te(() => U.checked = i.selectedGateSizeIdx == S().index), U;
        })(), (() => {
          const U = Ql.cloneNode(!0);
          return ce(U, "for", A), ue(U, () => S().gateSize.width + "w"), U;
        })()];
      }
    }), z), ue(_, () => {
      let S = Oe();
      return (() => {
        const A = Px.cloneNode(!0), U = A.firstChild, Z = U.nextSibling;
        return U.addEventListener("change", ($) => {
          i.onIncludeMagneticLatchChanged($.currentTarget.checked);
        }), ce(U, "id", S), ce(Z, "for", S), ue(Z, be(Er, {
          get fallback() {
            return "Include Magnetic Latch?";
          },
          get children() {
            return be(tn, {
              get when() {
                return i.isPoolFence;
              },
              children: "Includes Magnetic Latch."
            });
          }
        })), Te(() => U.disabled = i.isPoolFence), Te(() => U.checked = i.includeMagneticLatch), A;
      })();
    }, z), ue(_, () => {
      let S = Oe(), A = Oe(), U = Oe();
      return (() => {
        const Z = Tx.cloneNode(!0), $ = Z.firstChild, fe = $.nextSibling, q = fe.nextSibling, K = q.nextSibling;
        return $.addEventListener("change", (j) => {
          j.currentTarget.checked && i.onPostMaterialChanged("Alum");
        }), ce($, "id", S), ce($, "name", U), ce(fe, "for", S), q.addEventListener("change", (j) => {
          j.currentTarget.checked && i.onPostMaterialChanged("Galv");
        }), ce(q, "id", A), ce(q, "name", U), ce(K, "for", A), Te(() => $.checked = i.postMaterial == "Alum"), Te(() => q.checked = i.postMaterial == "Galv"), Z;
      })();
    }, null), ue(_, () => {
      let S = Oe(), A = Oe(), U = Oe();
      return (() => {
        const Z = Ax.cloneNode(!0), $ = Z.firstChild, fe = $.nextSibling, q = fe.nextSibling, K = q.nextSibling;
        return $.addEventListener("change", (j) => {
          j.currentTarget.checked && i.onPostSizeChanged("50");
        }), ce($, "id", S), ce($, "name", U), ce(fe, "for", S), q.addEventListener("change", (j) => {
          j.currentTarget.checked && i.onPostSizeChanged("65");
        }), ce(q, "id", A), ce(q, "name", U), ce(K, "for", A), Te(() => $.checked = i.postSize == "50"), Te(() => q.checked = i.postSize == "65"), Z;
      })();
    }, null), ue(_, () => {
      let S = Oe(), A = Oe();
      Oe();
      let U = Oe();
      return (() => {
        const Z = Ex.cloneNode(!0), $ = Z.firstChild, fe = $.nextSibling, q = fe.nextSibling, K = q.nextSibling, j = K.nextSibling;
        return fe.addEventListener("change", (se) => {
          se.currentTarget.checked && i.onPostCapTypeChanged("None");
        }), ce(fe, "id", S), ce(fe, "name", U), ce(q, "for", S), K.addEventListener("change", (se) => {
          se.currentTarget.checked && i.onPostCapTypeChanged("Plastic");
        }), ce(K, "id", A), ce(K, "name", U), ce(j, "for", A), Te(() => fe.checked = i.postCapType == "None"), Te(() => K.checked = i.postCapType == "Plastic"), Z;
      })();
    }, null), ue(b, () => s(i.selectedWall), W), ue(F, be(mh, {
      get fenceShape() {
        return i.fenceShape;
      },
      get selectedWall() {
        return i.selectedWall;
      },
      get onWallSelected() {
        return i.onWallSelected;
      }
    })), G.$$input = (S) => {
      let A = Number.parseFloat(S.currentTarget.value);
      Number.isFinite(A) && i.onWallLengthChanged(o(), A);
    }, M.addEventListener("change", (S) => {
      i.onWallHasGateChanged(o(), S.currentTarget.checked);
    }), ce(M, "id", d), ce(X, "for", d), Q.addEventListener("change", (S) => {
      S.currentTarget.checked && i.onWallPostTypeChanged(o(), "Inground");
    }), ce(Q, "id", m), ce(Q, "name", p), ce(de, "for", m), T.addEventListener("change", (S) => {
      S.currentTarget.checked && i.onWallPostTypeChanged(o(), "Baseplated");
    }), ce(T, "id", g), ce(T, "name", p), ce(C, "for", g), Te(() => G.value = a()), Te(() => M.checked = c()), Te(() => Q.checked = l() == "Inground"), Te(() => T.checked = l() == "Baseplated"), f;
  })()];
};
Yt(["input"]);
const zx = /* @__PURE__ */ Ce('<div style="display: inline; border-radius: 50%; width: 12px; height: 12px; padding: 4px; background-color: #fff; border: none; color: #000; text-align: center; font: 12px Arial, sans-serif; font-weight: bold;"></div>'), Rx = /* @__PURE__ */ Ce('<div><div style="display: flex; flex-direction: row; height: 50px; align-items: center;"><div style="flex-grow: 1;"></div><div></div><div style="flex-grow: 1;"></div></div></div>'), Ix = /* @__PURE__ */ Ce('<div style="display: grid; grid-template-columns: auto auto auto; grid-gap: 20px;"></div>'), Dx = /* @__PURE__ */ Ce("<button>BACK</button>"), Nx = /* @__PURE__ */ Ce('<button style="margin-left: 20px;">NEXT</button>'), Io = (i) => {
  let e = (t) => (() => {
    const n = zx.cloneNode(!0);
    return ue(n, t), n;
  })();
  return (() => {
    const t = Rx.cloneNode(!0), n = t.firstChild, r = n.firstChild, s = r.nextSibling;
    return aa(t, "click", i.onClick, !0), t.style.setProperty("width", "250px"), t.style.setProperty("cursor", "pointer"), t.style.setProperty("border-radius", "20px"), ue(n, () => e(i.number), s), s.style.setProperty("padding-left", "10px"), s.style.setProperty("font-size", "18px"), ue(s, () => i.label), Te((o) => {
      const a = i.selected ? "rgb(69,149,199)" : "#e6e4e2", c = i.selected ? "white" : "black";
      return a !== o._v$ && t.style.setProperty("background-color", o._v$ = a), c !== o._v$2 && s.style.setProperty("color", o._v$2 = c), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), t;
  })();
}, Fx = (i) => {
  let [e, t] = Zn({
    selectedTab: "FenceShape",
    selectedFenceShape: "Inline",
    spansAndGatesSelectedWall: "A",
    walls: [{
      length: 6e3,
      hasGate: !1,
      postType: "Inground"
    }],
    selectedFenceSizeIdx: void 0,
    selectedGateSizeIdx: void 0,
    includeMagneticLatch: !!i.isPoolFence,
    postMaterial: "Alum",
    postSize: "50",
    postCapType: "None"
  });
  {
    let r = te(() => {
      switch (e.selectedFenceShape) {
        case "Inline":
          return 1;
        case "LShape":
          return 2;
        case "UShape":
          return 3;
        case "Enclosed":
          return 4;
      }
    });
    vt(() => {
      let s = r();
      e.walls.length < s && t("walls", [...e.walls, ...Array(s - e.walls.length).fill(void 0).map((o) => ({
        length: 6e3,
        hasGate: !1,
        postType: "Inground"
      }))]), e.walls.length > s && t("walls", e.walls.slice(0, s));
    });
  }
  let n = te(() => Gt[i.fenceStyle]);
  return [(() => {
    const r = Ix.cloneNode(!0);
    return ue(r, be(Io, {
      number: "1",
      label: "Fence Shape",
      get selected() {
        return e.selectedTab == "FenceShape";
      },
      onClick: () => t("selectedTab", "FenceShape")
    }), null), ue(r, be(Io, {
      number: "2",
      label: "Spans & Gates",
      get selected() {
        return e.selectedTab == "SpansAndGates";
      },
      onClick: () => {
        dn(() => {
          t("selectedTab", "SpansAndGates"), t("spansAndGatesSelectedWall", "A");
        });
      }
    }), null), ue(r, be(Io, {
      number: "3",
      label: "Plan & Component List",
      get selected() {
        return e.selectedTab == "PlanAndComponentList";
      },
      onClick: () => t("selectedTab", "PlanAndComponentList")
    }), null), r;
  })(), be(Er, {
    get children() {
      return [be(tn, {
        get when() {
          return e.selectedTab == "FenceShape";
        },
        get children() {
          return be(gh, {
            get fenceShape() {
              return e.selectedFenceShape;
            },
            onFenceShapeSelected: (r) => {
              t("selectedFenceShape", r);
            }
          });
        }
      }), be(tn, {
        get when() {
          return e.selectedTab == "SpansAndGates";
        },
        get children() {
          return be(Lx, {
            get fenceShape() {
              return e.selectedFenceShape;
            },
            get isPoolFence() {
              return i.isPoolFence;
            },
            get isArchedSpear() {
              return i.isArchedSpear;
            },
            get selectedWall() {
              return e.spansAndGatesSelectedWall;
            },
            onWallSelected: (r) => t("spansAndGatesSelectedWall", r),
            get walls() {
              return e.walls;
            },
            onWallLengthChanged: (r, s) => {
              t("walls", r, "length", s);
            },
            onWallHasGateChanged: (r, s) => {
              t("walls", r, "hasGate", s);
            },
            onWallPostTypeChanged: (r, s) => {
              t("walls", r, "postType", s);
            },
            get fenceSizes() {
              return n().sizes;
            },
            get gateSizes() {
              return n().gateSizes;
            },
            get selectedFenceSizeIdx() {
              return e.selectedFenceSizeIdx;
            },
            get selectedGateSizeIdx() {
              return e.selectedGateSizeIdx;
            },
            get includeMagneticLatch() {
              return e.includeMagneticLatch;
            },
            onIncludeMagneticLatchChanged: (r) => t("includeMagneticLatch", r),
            onSelectedFenceSizeIdxChanged: (r) => t("selectedFenceSizeIdx", r),
            onSelectedGateSizeIdxChanged: (r) => t("selectedGateSizeIdx", r),
            get postMaterial() {
              return e.postMaterial;
            },
            get postSize() {
              return e.postSize;
            },
            get postCapType() {
              return e.postCapType;
            },
            onPostMaterialChanged: (r) => {
              t("postMaterial", r);
            },
            onPostSizeChanged: (r) => {
              t("postSize", r);
            },
            onPostCapTypeChanged: (r) => {
              t("postCapType", r);
            }
          });
        }
      }), be(tn, {
        get when() {
          return e.selectedTab == "PlanAndComponentList";
        },
        get children() {
          return be(yx, {
            get isPoolFence() {
              return i.isPoolFence;
            },
            get numRailsIfGardenFence() {
              return i.numRails;
            },
            get fenceSizes() {
              return n().sizes;
            },
            get gateSizes() {
              return n().gateSizes;
            },
            get selectedFenceSizeIdx() {
              return e.selectedFenceSizeIdx;
            },
            get selectedGateSizeIdx() {
              return e.selectedGateSizeIdx;
            },
            get includeMagneticLatch() {
              return e.includeMagneticLatch;
            },
            get postMaterial() {
              return e.postMaterial;
            },
            get postSize() {
              return e.postSize;
            },
            get postCapType() {
              return e.postCapType;
            },
            get walls() {
              return e.walls;
            },
            get onRequestQuote() {
              return i.onRequestQuote;
            }
          });
        }
      })];
    }
  }), (() => {
    const r = Dx.cloneNode(!0);
    return r.$$click = () => {
      switch (e.selectedTab) {
        case "FenceShape":
          break;
        case "SpansAndGates":
          switch (e.spansAndGatesSelectedWall) {
            case "B":
              t("spansAndGatesSelectedWall", "A");
              break;
            case "C":
              t("spansAndGatesSelectedWall", "B");
              break;
            case "D":
              t("spansAndGatesSelectedWall", "C");
              break;
            default:
              t("selectedTab", "FenceShape");
              break;
          }
          break;
        case "PlanAndComponentList":
          dn(() => {
            switch (t("selectedTab", "SpansAndGates"), e.selectedFenceShape) {
              case "Inline":
                t("spansAndGatesSelectedWall", "A");
                break;
              case "LShape":
                t("spansAndGatesSelectedWall", "B");
                break;
              case "UShape":
                t("spansAndGatesSelectedWall", "C");
                break;
              case "Enclosed":
                t("spansAndGatesSelectedWall", "D");
                break;
            }
          });
          break;
      }
    }, Te(() => Ms(r, e.selectedTab == "FenceShape" ? "btn-greyed-out" : void 0)), r;
  })(), (() => {
    const r = Nx.cloneNode(!0);
    return r.$$click = () => {
      switch (e.selectedTab) {
        case "FenceShape":
          dn(() => {
            t("selectedTab", "SpansAndGates"), t("spansAndGatesSelectedWall", "A");
          });
          break;
        case "SpansAndGates":
          switch (e.spansAndGatesSelectedWall) {
            case "A":
              switch (e.selectedFenceShape) {
                case "LShape":
                case "UShape":
                case "Enclosed":
                  t("spansAndGatesSelectedWall", "B");
                  break;
                default:
                  t("selectedTab", "PlanAndComponentList");
                  break;
              }
              break;
            case "B":
              switch (e.selectedFenceShape) {
                case "UShape":
                case "Enclosed":
                  t("spansAndGatesSelectedWall", "C");
                  break;
                default:
                  t("selectedTab", "PlanAndComponentList");
                  break;
              }
              break;
            case "C":
              e.selectedFenceShape == "Enclosed" ? t("spansAndGatesSelectedWall", "D") : t("selectedTab", "PlanAndComponentList");
              break;
            default:
              t("selectedTab", "PlanAndComponentList");
              break;
          }
          break;
      }
    }, Te(() => Ms(r, e.selectedTab == "PlanAndComponentList" ? "btn-greyed-out" : void 0)), r;
  })()];
};
Yt(["click"]);
const kx = /* @__PURE__ */ Ce("<h3>Select a style:</h3>"), Ox = /* @__PURE__ */ Ce("<div></div>"), Ux = /* @__PURE__ */ Ce('<div class="grid-element"><div class="fence-style-img-container-div"></div><div class="img-label-container-div"><div class="img-label-bg-div"></div><div class="img-label" style="margin-left: 14px; margin-top: 14px; margin-bottom: 14px;"><p><span style="font-size: 20px;"></span></p></div></div></div>'), Bx = (i) => [kx.cloneNode(!0), (() => {
  const e = Ox.cloneNode(!0);
  return e.style.setProperty("display", "grid"), e.style.setProperty("gap", "10px"), ue(e, be(Ot, {
    get each() {
      return i.avaliableFenceStyles;
    },
    children: (t) => {
      let n = te(() => i.fenceStyles[t()]);
      return (() => {
        const r = Ux.cloneNode(!0), s = r.firstChild, o = s.nextSibling, a = o.firstChild, c = a.nextSibling, l = c.firstChild, h = l.firstChild;
        return r.$$click = () => i.onFenceStyleSelected(t()), r.style.setProperty("display", "flex"), r.style.setProperty("flex-direction", "column"), r.style.setProperty("cursor", "pointer"), s.style.setProperty("background-size", "contain"), s.style.setProperty("background-repeat", "no-repeat"), s.style.setProperty("background-position", "center"), s.style.setProperty("background-color", "white"), ue(h, () => n().displayName), Te(() => s.style.setProperty("background-image", "url(" + n().imgUrl + ")")), r;
      })();
    }
  })), Te(() => e.style.setProperty("grid-template-columns", Array(i.numColumns).fill("auto").join(" "))), e;
})()];
Yt(["click"]);
const Gx = /* @__PURE__ */ Ce("<h3>Select a type:</h3>"), Wx = /* @__PURE__ */ Ce("<div></div>"), $x = /* @__PURE__ */ Ce('<div class="grid-element"><div class="img-container-div"></div><div class="img-label-container-div"><div class="img-label-bg-div"></div><div class="img-label" style="margin-left: 14px; margin-top: 14px; margin-bottom: 14px;"><p><span style="font-size: 20px;"></span></p></div></div></div>'), Hx = (i) => [Gx.cloneNode(!0), (() => {
  const e = Wx.cloneNode(!0);
  return e.style.setProperty("display", "grid"), e.style.setProperty("gap", "10px"), ue(e, be(Ot, {
    get each() {
      return Object.keys(i.fenceTypes);
    },
    children: (t, n) => {
      let r = te(() => i.fenceTypes[t()]);
      return (() => {
        const s = $x.cloneNode(!0), o = s.firstChild, a = o.nextSibling, c = a.firstChild, l = c.nextSibling, h = l.firstChild, u = h.firstChild;
        return s.$$click = () => i.onFenceTypeSelected(t()), s.style.setProperty("display", "flex"), s.style.setProperty("flex-direction", "column"), s.style.setProperty("cursor", "pointer"), o.style.setProperty("background-size", "cover"), o.style.setProperty("background-position", "center"), ue(u, () => r().displayName), Te(() => o.style.setProperty("background-image", "url(" + r().imgUrl + ")")), s;
      })();
    }
  })), Te(() => e.style.setProperty("grid-template-columns", Array(i.numColumns).fill("auto").join(" "))), e;
})()];
Yt(["click"]);
const ur = /* @__PURE__ */ Ce("<hr>"), Vx = /* @__PURE__ */ Ce('<div class="calc-table">Panel Size: </div>'), Xx = /* @__PURE__ */ Ce('<div class="calc-table">Gate Size: </div>'), Yx = /* @__PURE__ */ Ce('<table style="margin-top: 20pt;"><thead></thead><tbody class="calc-table"></tbody></table>'), qx = /* @__PURE__ */ Ce('<table style="border-spacing: 0px;" class="calc-table"><thead></thead><tbody><tr><td style="border: 1px solid black;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid;">Panels</td><td style="border-width: 1px 1px 1px 0px; border-style: solid;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">U-Clips</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 8 U-Clips per panel.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Gates</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Posts Inground</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 42.4mm outside diameter round galv x <!>m.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Screws</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 2 screws per bracket and 20 per gate.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td colspan="3" style="border-width: 0px 1px 1px 1px; border-style: solid; text-align: right;"><b>Estimated Total Price</b></td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr></tbody></table>'), ec = /* @__PURE__ */ Ce('<input type="radio">'), tc = /* @__PURE__ */ Ce('<label class="calc-table"></label>'), jx = /* @__PURE__ */ Ce('<tr><td>Side <input type="text"></td><td><label>Gate in this side?</label><input type="checkbox"></td></tr>'), Zx = (i) => {
  let [e, t] = Zn({
    sides: [{
      length: void 0,
      hasGate: !1
    }, {
      length: void 0,
      hasGate: !1
    }, {
      length: void 0,
      hasGate: !1
    }, {
      length: void 0,
      hasGate: !1
    }]
  }), n = Oe(), r = Oe(), s = te(() => {
    if (e.selectedPanelSizeIdx != null)
      return i.fenceSizes[e.selectedPanelSizeIdx];
  }), o = te(() => {
    if (e.selectedGateSizeIdx != null)
      return i.gateSizes[e.selectedGateSizeIdx];
  }), a = te(() => {
    let D = i.fenceSizes.flatMap((G, E) => G.width != 2400 ? [] : [{
      fenceSize: G,
      index: E
    }]);
    return D.length != 0 ? t("selectedPanelSizeIdx", D[0].index) : t("selectedPanelSizeIdx", void 0), D;
  }), c = te(() => {
    let D = s();
    if (D == null)
      return [];
    let G = D, E = i.gateSizes.flatMap((M, X) => Math.abs(M.height - G.height) > 100 ? [] : [{
      gateSize: M,
      index: X
    }]);
    if (E.length != 0) {
      let M = o();
      if (M != null) {
        let X = !1;
        for (let ee of E)
          if (ee.gateSize.width == M.width) {
            X = !0, t("selectedGateSizeIdx", ee.index);
            break;
          }
        X || t("selectedGateSizeIdx", E[0].index);
      } else
        t("selectedGateSizeIdx", E[0].index);
    } else
      t("selectedGateSizeIdx", void 0);
    return E;
  }), l = Qe(te(() => {
    let D = s();
    return D == null ? {
      type: "error",
      message: "no fence size selected"
    } : {
      type: "success",
      prontoCode: D.prontoCode
    };
  })), h = Qe(te(() => {
    let D = o();
    return D == null ? {
      type: "error",
      message: "no gate size selected"
    } : {
      type: "success",
      prontoCode: D.prontoCode
    };
  })), u = te(() => {
    let D = s();
    if (D != null)
      return D.height + 600;
  });
  te(() => {
    let D = s();
    if (D != null)
      return D.height >= 1800 ? 3 : 2;
  });
  let d = Qe(() => ({
    type: "success",
    prontoCode: "22NV0"
  })), p = Qe(() => ({
    type: "success",
    prontoCode: "22FX0"
  })), m = Qe(() => ({
    type: "success",
    prontoCode: "236VM"
  })), g = te(() => {
    let D = u();
    if (D == null)
      return {
        type: "error",
        message: "Unknown post length for Post"
      };
    let G = m(), E;
    switch (G.type) {
      case "success":
        E = Number.parseFloat(G.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: G.message
        };
    }
    let M = p(), X;
    switch (M.type) {
      case "success":
        X = Number.parseFloat(M.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: M.message
        };
    }
    return {
      type: "success",
      value: D / 1e3 * E + X
    };
  }), f = g, v = Qe(() => ({
    type: "success",
    prontoCode: "26MF0"
  })), w = te(() => {
    let D = s(), G = o();
    if (D == null)
      return 0;
    let E;
    G != null ? E = G.width : E = 0;
    let M = 0;
    for (let X of e.sides)
      X.length != null && (M += Math.ceil((X.length * 1e3 - (X.hasGate ? E : 0)) / D.width));
    return M;
  }), x = te(() => 8 * w()), _ = te(() => {
    let D = s(), G = o();
    if (D == null)
      return 0;
    let E;
    G != null ? E = G.width : E = 0;
    let M = 0;
    for (let X of e.sides)
      X.length != null && (M += Math.ceil((X.length * 1e3 - (X.hasGate ? E : 0)) / D.width) + 1);
    return M;
  }), y = te(() => {
    let D = 0;
    for (let G of e.sides)
      G.hasGate && ++D;
    return D;
  }), P = te(() => {
    let D = 0;
    for (let G of e.sides)
      G.hasGate && ++D;
    return D;
  }), z = te(() => {
    let D = x();
    if (D != null)
      return D * 4 + P() * 20;
  }), b = te(() => {
    if (w() == 0)
      return {
        type: "success",
        value: 0
      };
    let D = l(), G;
    switch (D.type) {
      case "success":
        G = Number.parseFloat(D.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: D.message
        };
    }
    return {
      type: "success",
      value: w() * G
    };
  }), L = te(() => {
    let D = x();
    if (D == null)
      return {
        type: "error",
        message: "Failed to work out number of brackets per panel"
      };
    if (D == 0)
      return {
        type: "success",
        value: 0
      };
    let G = d(), E;
    switch (G.type) {
      case "success":
        E = Number.parseFloat(G.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: G.message
        };
    }
    return {
      type: "success",
      value: D * E
    };
  }), R = te(() => {
    if (P() == 0)
      return {
        type: "success",
        value: 0
      };
    let D = h(), G;
    switch (D.type) {
      case "success":
        G = Number.parseFloat(D.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: D.message
        };
    }
    return {
      type: "success",
      value: P() * G
    };
  }), W = te(() => {
    if (_() == 0 && y() == 0)
      return {
        type: "success",
        value: 0
      };
    let D = g(), G;
    switch (D.type) {
      case "success":
        G = D.value;
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: D.message
        };
    }
    let E = f(), M;
    switch (E.type) {
      case "success":
        M = E.value;
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: E.message
        };
    }
    return {
      type: "success",
      value: _() * G + y() * M
    };
  }), V = te(() => {
    let D = z();
    if (D == null)
      return {
        type: "error",
        message: "Failed to work out number of screws"
      };
    if (D == 0)
      return {
        type: "success",
        value: 0
      };
    let G = v(), E;
    switch (G.type) {
      case "success":
        E = Number.parseFloat(G.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: G.message
        };
    }
    return {
      type: "success",
      value: D * E
    };
  }), F = te(() => {
    let D = [b, L, R, W, V], G = 0;
    for (let E of D) {
      let M = E();
      switch (M.type) {
        case "success":
          G += M.value;
          break;
        case "pending":
          return {
            type: "pending"
          };
        case "error":
          return {
            type: "error",
            message: M.message
          };
      }
    }
    return {
      type: "success",
      value: G
    };
  }), k = te(() => {
    let D = s();
    if (D == null)
      return "";
    let G = "";
    G += "Panel Size: " + D.height + "h x " + D.width + "w (pronto code: " + D.prontoCode + `)\r
`;
    let E = o();
    E != null && P() != 0 && (G += "Gate Size: " + E.height + "h x " + E.width + "w (pronto code: " + E.prontoCode + `)\r
`), G += "Post Material: Pipe 32NB H BLK";
    let M = 0;
    for (let ne of e.sides)
      ne.length != null && (G += "Side " + M + ": Length is " + ne.length + "m, " + (ne.hasGate ? "has a gate, " : "") + `.\r
`, ++M);
    let X = F(), ee;
    switch (X.type) {
      case "success":
        ee = "$" + X.value.toFixed(2);
        break;
      case "pending":
        ee = "was still pending (slow connection?)";
        break;
      case "error":
        ee = "Error: " + X.message;
        break;
    }
    return G += "Estimators Total Price: " + ee, G;
  });
  return [ur.cloneNode(!0), Vx.cloneNode(!0), be(Ot, {
    get each() {
      return a();
    },
    children: (D) => {
      let G = Oe();
      return [(() => {
        const E = ec.cloneNode(!0);
        return E.addEventListener("change", (M) => {
          M.currentTarget.checked && t("selectedPanelSizeIdx", D().index);
        }), ce(E, "id", G), ce(E, "name", n), Te(() => E.checked = e.selectedPanelSizeIdx == D().index), E;
      })(), (() => {
        const E = tc.cloneNode(!0);
        return ce(E, "for", G), ue(E, () => D().fenceSize.height + "h"), E;
      })()];
    }
  }), ur.cloneNode(!0), Xx.cloneNode(!0), be(Ot, {
    get each() {
      return c();
    },
    children: (D) => {
      let G = Oe();
      return [(() => {
        const E = ec.cloneNode(!0);
        return E.addEventListener("change", (M) => {
          M.currentTarget.checked && t("selectedGateSizeIdx", D().index);
        }), ce(E, "id", G), ce(E, "name", r), Te(() => E.checked = e.selectedGateSizeIdx == D().index), E;
      })(), (() => {
        const E = tc.cloneNode(!0);
        return ce(E, "for", G), ue(E, () => D().gateSize.width + "w"), E;
      })()];
    }
  }), ur.cloneNode(!0), (() => {
    const D = Yx.cloneNode(!0), G = D.firstChild, E = G.nextSibling;
    return ue(E, be(Ot, {
      get each() {
        return e.sides;
      },
      children: (M, X) => {
        let ee = Oe();
        return (() => {
          const ne = jx.cloneNode(!0), Q = ne.firstChild, de = Q.firstChild, T = de.nextSibling, C = Q.nextSibling, S = C.firstChild, A = S.nextSibling;
          return ue(Q, () => (X + 1).toString() + " (m) ", T), T.$$input = (U) => {
            let Z = Number.parseFloat(U.currentTarget.value);
            Number.isFinite(Z) ? t("sides", X, "length", Z) : t("sides", X, "length", void 0);
          }, ce(S, "for", ee), A.addEventListener("change", (U) => {
            t("sides", X, "hasGate", U.currentTarget.checked);
          }), ce(A, "id", ee), Te(() => T.value = M().length == null ? "" : M().length), Te(() => A.checked = M().hasGate), ne;
        })();
      }
    })), D;
  })(), ur.cloneNode(!0), (() => {
    const D = qx.cloneNode(!0), G = D.firstChild, E = G.nextSibling, M = E.firstChild, X = M.firstChild, ee = X.nextSibling, ne = ee.nextSibling, Q = ne.nextSibling, de = M.nextSibling, T = de.firstChild, C = T.nextSibling, S = C.nextSibling, A = S.nextSibling, U = de.nextSibling, Z = U.firstChild, $ = Z.nextSibling, fe = $.nextSibling, q = fe.nextSibling, K = U.nextSibling, j = K.firstChild, se = j.nextSibling, le = se.nextSibling, _e = le.firstChild, Y = _e.nextSibling;
    Y.nextSibling;
    const O = le.nextSibling, Se = K.nextSibling, Ae = Se.firstChild, N = Ae.nextSibling, I = N.nextSibling, oe = I.nextSibling, me = Se.nextSibling, ve = me.firstChild, Pe = ve.nextSibling;
    return ue(X, w), ue(ne, () => {
      let Me = s();
      return Me == null ? "No panel size selected." : "Panels are " + Me.width.toFixed(0) + "mm wide x " + Me.height.toFixed(0) + "mm high.";
    }), ue(Q, () => {
      let Me = b();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), ue(T, x), ue(A, () => {
      let Me = L();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), ue(Z, P), ue(fe, () => {
      let Me = o();
      return Me == null ? "No gate size selected." : "Gates are " + Me.width + "mm wide x " + Me.height + "mm high.";
    }), ue(q, () => {
      let Me = R();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), ue(j, () => _() + y()), ue(le, () => {
      let Me = u();
      return Me == null ? "?" : (Me / 1e3).toFixed(1);
    }, Y), ue(O, () => {
      let Me = W();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), ue(Ae, z), ue(oe, () => {
      let Me = V();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), ue(Pe, () => {
      let Me = F();
      switch (Me.type) {
        case "success":
          return "$" + Me.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Me.message + ")";
      }
    }), D;
  })(), ur.cloneNode(!0), be(Os, {
    get productDescription() {
      return k();
    },
    get onRequestQuote() {
      return i.onRequestQuote;
    }
  })];
};
Yt(["input"]);
const Ui = /* @__PURE__ */ Ce("<hr>"), Jx = /* @__PURE__ */ Ce('<div class="calc-table">Panel Size: </div>'), Kx = /* @__PURE__ */ Ce('<div class="calc-table">Gate Size: </div>'), Qx = /* @__PURE__ */ Ce('<div class="calc-table">Post Options: </div>'), e1 = /* @__PURE__ */ Ce('<table style="margin-top: 20pt;"><thead></thead><tbody class="calc-table"></tbody></table>'), t1 = /* @__PURE__ */ Ce('<table style="border-spacing: 0px;" class="calc-table"><thead></thead><tbody><tr><td style="border: 1px solid black;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid;">Panels</td><td style="border-width: 1px 1px 1px 0px; border-style: solid;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Brackets</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 2 brackets for every horizontal rail to fix to the posts.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Gates</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Posts Inground</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 50mm square <!> x <!>m.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Baseplated Posts</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 50mm square <!> x <!>m.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Screws</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 2 screws per bracket and 20 per gate.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr><tr><td colspan="3" style="border-width: 0px 1px 1px 1px; border-style: solid; text-align: right;"><b>Estimated Total Price</b></td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr></tbody></table>'), nc = /* @__PURE__ */ Ce('<input type="radio">'), ic = /* @__PURE__ */ Ce('<label class="calc-table"></label>'), n1 = /* @__PURE__ */ Ce('<div class="calc-table"><input type="checkbox"><label>Include Magnetic Latch? (Required for pool fence.)</label></div>'), i1 = /* @__PURE__ */ Ce('<div class="calc-table"><input type="radio"><label>Aluminium</label><input type="radio"><label>Galv</label> (Galv is usually used for boundary fences.)</div>'), r1 = /* @__PURE__ */ Ce('<div class="calc-table">Caps:<input type="radio"><label>None</label><input type="radio"><label>Plastic</label><input type="radio"><label>Steel</label></div>'), s1 = /* @__PURE__ */ Ce('<tr><td>Side <input type="text"></td><td><label>Gate in this side?</label><input type="checkbox"></td><td><label>Posts inground?</label><input type="checkbox"></td><td><label>OR Baseplated?</label><input type="checkbox"></td></tr>'), o1 = /* @__PURE__ */ Ce('<tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Post Caps</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">There are 1 per post.</td><td style="border-width: 0px 1px 1px 0px; border-style: solid; text-align: right;"></td></tr>'), a1 = (i) => {
  let [e, t] = Zn({
    includeMagneticLatch: !0,
    postMaterial: "Alum",
    postCapType: "None",
    sides: [{
      length: void 0,
      hasGate: !1,
      postType: "Inground"
    }, {
      length: void 0,
      hasGate: !1,
      postType: "Inground"
    }, {
      length: void 0,
      hasGate: !1,
      postType: "Inground"
    }, {
      length: void 0,
      hasGate: !1,
      postType: "Inground"
    }]
  }), n = Oe(), r = Oe(), s = te(() => {
    if (e.selectedPanelSizeIdx != null)
      return i.fenceSizes[e.selectedPanelSizeIdx];
  }), o = te(() => {
    if (e.selectedGateSizeIdx != null)
      return i.gateSizes[e.selectedGateSizeIdx];
  }), a = te(() => {
    let T = i.fenceSizes.flatMap((C, S) => C.width != 2400 ? [] : [{
      fenceSize: C,
      index: S
    }]);
    return T.length != 0 ? t("selectedPanelSizeIdx", T[0].index) : t("selectedPanelSizeIdx", void 0), T;
  }), c = te(() => {
    let T = s();
    if (T == null)
      return [];
    let C = T, S = i.gateSizes.flatMap((A, U) => A.height != C.height ? [] : [{
      gateSize: A,
      index: U
    }]);
    if (S.length != 0) {
      let A = o();
      if (A != null) {
        let U = !1;
        for (let Z of S)
          if (Z.gateSize.width == A.width) {
            U = !0, t("selectedGateSizeIdx", Z.index);
            break;
          }
        U || t("selectedGateSizeIdx", S[0].index);
      } else
        t("selectedGateSizeIdx", S[0].index);
    } else
      t("selectedGateSizeIdx", void 0);
    return S;
  }), l = Qe(te(() => {
    let T = s();
    return T == null ? {
      type: "error",
      message: "no fence size selected"
    } : {
      type: "success",
      prontoCode: T.prontoCode
    };
  })), h = Qe(te(() => {
    let T = o();
    return T == null ? {
      type: "error",
      message: "no gate size selected"
    } : {
      type: "success",
      prontoCode: T.prontoCode
    };
  })), u = te(() => {
    let T = s();
    if (T != null)
      return Math.max(1300, T.height + 100);
  }), d = te(() => {
    let T = s();
    if (T != null)
      return T.height + 600;
  }), p = () => 2, m = Qe(() => ({
    type: "success",
    prontoCode: "20QB0"
  })), g = Qe(() => ({
    type: "success",
    prontoCode: "226Z0"
  })), f = Qe(te(() => {
    let T = u();
    if (T == null)
      return {
        type: "error",
        message: "Unknown post length for Flange Post"
      };
    switch (e.postMaterial) {
      case "Alum": {
        let C;
        if (T == 1300)
          C = "2EMW0";
        else if (T == 1600)
          C = "2ENG0";
        else if (T == 1900)
          C = "2EP60";
        else if (T == 2200)
          C = "2EPV0";
        else
          return {
            type: "error",
            message: "Failed to find pricing for Alum Flange Post 65x65x" + T.toFixed(0)
          };
        return {
          type: "success",
          prontoCode: C
        };
      }
      case "Galv": {
        let C;
        if (T == 1300)
          C = "2EGF0";
        else if (T == 1600)
          C = "2EFS0";
        else if (T == 1900)
          C = "2EF30";
        else if (T == 2200)
          C = "2EEE0";
        else if (T == 2500)
          C = "2EDR0";
        else
          return {
            type: "error",
            message: "Failed to find pricing for Galv Flange Post 65x65x" + T.toFixed(0)
          };
        return {
          type: "success",
          prontoCode: C
        };
      }
    }
  })), v = f, w;
  {
    let T = te(() => {
      switch (e.postCapType) {
        case "None":
          return () => ({
            type: "success",
            value: "0.0"
          });
        case "Plastic":
          return Qe(() => ({
            type: "success",
            prontoCode: "22HF0"
          }));
        case "Steel":
          return Qe(() => ({
            type: "success",
            prontoCode: "22HY0"
          }));
      }
    });
    w = te(() => T()());
  }
  let x = Qe(te(() => {
    let T = d();
    if (T == null)
      return {
        type: "error",
        message: "Unknown post length for Post"
      };
    switch (e.postMaterial) {
      case "Alum": {
        let C;
        if (T == 1500)
          C = "20WZ0";
        else if (T == 1800)
          C = "20XN0";
        else if (T == 2100)
          C = "20YC0";
        else if (T == 2400)
          C = "20Z10";
        else if (T == 2700)
          C = "2ESJ0";
        else if (T == 3e3)
          C = "2ET70";
        else
          return {
            type: "error",
            message: "Failed to find pricing for Alum Post 65x65x" + T.toFixed(0)
          };
        return {
          type: "success",
          prontoCode: C
        };
      }
      case "Galv": {
        let C;
        if (T == 1500)
          C = "2E420";
        else if (T == 1800)
          C = "21S50";
        else if (T == 2100)
          C = "21SU0";
        else if (T == 2400)
          C = "21TG0";
        else if (T == 2700)
          C = "2E4S0";
        else if (T == 3e3)
          C = "21U70";
        else
          return {
            type: "error",
            message: "Failed to find pricing for Galv Post 50x50x" + T.toFixed(0)
          };
        return {
          type: "success",
          prontoCode: C
        };
      }
    }
  })), _ = x, y = Qe(() => ({
    type: "success",
    prontoCode: "26MF0"
  })), P = te(() => {
    let T = s(), C = o();
    if (T == null)
      return 0;
    let S;
    C == null ? S = 0 : S = C.width;
    let A = 0;
    for (let U of e.sides)
      U.length != null && (A += Math.ceil((U.length * 1e3 - (U.hasGate ? S : 0)) / T.width));
    return A;
  }), z = te(() => 2 * p() * P()), b = te(() => {
    let T = s(), C = o();
    if (T == null)
      return 0;
    let S;
    C == null ? S = 0 : S = C.width;
    let A = 0;
    for (let U of e.sides)
      U.length != null && U.postType == "Inground" && (A += Math.ceil((U.length * 1e3 - (U.hasGate ? S : 0)) / T.width) + 1);
    return A;
  }), L = te(() => {
    let T = 0;
    for (let C of e.sides)
      C.postType == "Inground" && C.hasGate && ++T;
    return T;
  }), R = te(() => {
    let T = s(), C = o();
    if (T == null)
      return 0;
    let S;
    C == null ? S = 0 : S = C.width;
    let A = 0;
    for (let U of e.sides)
      U.length != null && U.postType == "Baseplated" && (A += Math.ceil((U.length * 1e3 - (U.hasGate ? S : 0)) / T.width) + 1);
    return A;
  }), W = te(() => {
    let T = 0;
    for (let C of e.sides)
      C.postType == "Baseplated" && C.hasGate && ++T;
    return T;
  }), V = te(() => e.postCapType == "None" ? 0 : R() + W() + b() + L()), F = te(() => {
    let T = 0;
    for (let C of e.sides)
      C.hasGate && ++T;
    return T;
  }), k = te(() => {
    let T = z();
    if (T != null)
      return T * 4 + F() * 20;
  }), D = te(() => {
    if (P() == 0)
      return {
        type: "success",
        value: 0
      };
    let T = l(), C;
    switch (T.type) {
      case "success":
        C = Number.parseFloat(T.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: T.message
        };
    }
    return {
      type: "success",
      value: P() * C
    };
  }), G = te(() => {
    let T = z();
    if (T == null)
      return {
        type: "error",
        message: "Failed to work out number of brackets per panel"
      };
    if (T == 0)
      return {
        type: "success",
        value: 0
      };
    let C = m(), S;
    switch (C.type) {
      case "success":
        S = Number.parseFloat(C.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: C.message
        };
    }
    return {
      type: "success",
      value: T * S
    };
  }), E = te(() => {
    if (F() == 0)
      return {
        type: "success",
        value: 0
      };
    let T = h(), C;
    switch (T.type) {
      case "success":
        C = Number.parseFloat(T.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: T.message
        };
    }
    return {
      type: "success",
      value: F() * C
    };
  }), M = te(() => {
    if (b() == 0 && L() == 0)
      return {
        type: "success",
        value: 0
      };
    let T = x(), C;
    switch (T.type) {
      case "success":
        C = Number.parseFloat(T.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: T.message
        };
    }
    let S = _(), A;
    switch (S.type) {
      case "success":
        A = Number.parseFloat(S.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: S.message
        };
    }
    let U;
    if (e.includeMagneticLatch) {
      let Z = g();
      switch (Z.type) {
        case "success":
          U = L() * Number.parseFloat(Z.value);
          break;
        case "pending":
          return {
            type: "pending"
          };
        case "error":
          return {
            type: "error",
            message: Z.message
          };
      }
    } else
      U = 0;
    return {
      type: "success",
      value: b() * C + L() * A + U
    };
  }), X = te(() => {
    if (R() == 0 && W() == 0)
      return {
        type: "success",
        value: 0
      };
    let T = f(), C;
    switch (T.type) {
      case "success":
        C = Number.parseFloat(T.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: T.message
        };
    }
    let S = v(), A;
    switch (S.type) {
      case "success":
        A = Number.parseFloat(S.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: S.message
        };
    }
    let U;
    if (e.includeMagneticLatch) {
      let Z = g();
      switch (Z.type) {
        case "success":
          U = W() * Number.parseFloat(Z.value);
          break;
        case "pending":
          return {
            type: "pending"
          };
        case "error":
          return {
            type: "error",
            message: Z.message
          };
      }
    } else
      U = 0;
    return {
      type: "success",
      value: R() * C + W() * A + U
    };
  }), ee = te(() => {
    let T = V();
    if (T == 0)
      return {
        type: "success",
        value: 0
      };
    let C = w(), S;
    switch (C.type) {
      case "success":
        S = Number.parseFloat(C.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: C.message
        };
    }
    return {
      type: "success",
      value: T * S
    };
  }), ne = te(() => {
    let T = k();
    if (T == null)
      return {
        type: "error",
        message: "Failed to work out number of screws"
      };
    if (T == 0)
      return {
        type: "success",
        value: 0
      };
    let C = y(), S;
    switch (C.type) {
      case "success":
        S = Number.parseFloat(C.value);
        break;
      case "pending":
        return {
          type: "pending"
        };
      case "error":
        return {
          type: "error",
          message: C.message
        };
    }
    return {
      type: "success",
      value: T * S
    };
  }), Q = te(() => {
    let T = [D, G, E, M, X, ee, ne], C = 0;
    for (let S of T) {
      let A = S();
      switch (A.type) {
        case "success":
          C += A.value;
          break;
        case "pending":
          return {
            type: "pending"
          };
        case "error":
          return {
            type: "error",
            message: A.message
          };
      }
    }
    return {
      type: "success",
      value: C
    };
  }), de = te(() => {
    let T = s();
    if (T == null)
      return "";
    let C = "";
    C += "Panel Size: " + T.height + "h x " + T.width + "w (pronto code: " + T.prontoCode + `)\r
`;
    let S = o();
    switch (S != null && F() != 0 && (C += "Gate Size: " + S.height + "h x " + S.width + "w (pronto code: " + S.prontoCode + `)\r
`), e.includeMagneticLatch && (C += `Gates all have a magnetic latch\r
`), C += "Post Material: ", e.postMaterial) {
      case "Alum":
        C += `Aluminium\r
`;
        break;
      case "Galv":
        C += `Galv\r
`;
        break;
    }
    C += `Post Size: 65mm\r
`, C += "Caps: " + e.postCapType + `\r
`;
    let A = 0;
    for (let $ of e.sides)
      $.length != null && (C += "Side " + A + ": Length is " + $.length + "m, " + ($.hasGate ? "has a gate, " : "") + ($.postType == "Inground" ? "posts are in ground" : "posts are baseplated") + `.\r
`, ++A);
    let U = Q(), Z;
    switch (U.type) {
      case "success":
        Z = "$" + U.value.toFixed(2);
        break;
      case "pending":
        Z = "was still pending (slow connection?)";
        break;
      case "error":
        Z = "Error: " + U.message;
        break;
    }
    return C += "Estimators Total Price: " + Z, C;
  });
  return [Ui.cloneNode(!0), Jx.cloneNode(!0), be(Ot, {
    get each() {
      return a();
    },
    children: (T) => {
      let C = Oe();
      return [(() => {
        const S = nc.cloneNode(!0);
        return S.addEventListener("change", (A) => {
          A.currentTarget.checked && t("selectedPanelSizeIdx", T().index);
        }), ce(S, "id", C), ce(S, "name", n), Te(() => S.checked = e.selectedPanelSizeIdx == T().index), S;
      })(), (() => {
        const S = ic.cloneNode(!0);
        return ce(S, "for", C), ue(S, () => T().fenceSize.height + "h"), S;
      })()];
    }
  }), Ui.cloneNode(!0), Kx.cloneNode(!0), be(Ot, {
    get each() {
      return c();
    },
    children: (T) => {
      let C = Oe();
      return [(() => {
        const S = nc.cloneNode(!0);
        return S.addEventListener("change", (A) => {
          A.currentTarget.checked && t("selectedGateSizeIdx", T().index);
        }), ce(S, "id", C), ce(S, "name", r), Te(() => S.checked = e.selectedGateSizeIdx == T().index), S;
      })(), (() => {
        const S = ic.cloneNode(!0);
        return ce(S, "for", C), ue(S, () => T().gateSize.width + "w"), S;
      })()];
    }
  }), () => {
    let T = Oe();
    return (() => {
      const C = n1.cloneNode(!0), S = C.firstChild, A = S.nextSibling;
      return S.addEventListener("change", (U) => {
        t("includeMagneticLatch", U.currentTarget.checked);
      }), ce(S, "id", T), ce(A, "for", T), Te(() => S.checked = e.includeMagneticLatch), C;
    })();
  }, Ui.cloneNode(!0), Qx.cloneNode(!0), () => {
    let T = Oe(), C = Oe(), S = Oe();
    return (() => {
      const A = i1.cloneNode(!0), U = A.firstChild, Z = U.nextSibling, $ = Z.nextSibling, fe = $.nextSibling;
      return U.addEventListener("change", (q) => {
        q.currentTarget.checked && t("postMaterial", "Alum");
      }), ce(U, "id", T), ce(U, "name", S), ce(Z, "for", T), $.addEventListener("change", (q) => {
        q.currentTarget.checked && t("postMaterial", "Galv");
      }), ce($, "id", C), ce($, "name", S), ce(fe, "for", C), Te(() => U.checked = e.postMaterial == "Alum"), Te(() => $.checked = e.postMaterial == "Galv"), A;
    })();
  }, () => {
    let T = Oe(), C = Oe(), S = Oe(), A = Oe();
    return (() => {
      const U = r1.cloneNode(!0), Z = U.firstChild, $ = Z.nextSibling, fe = $.nextSibling, q = fe.nextSibling, K = q.nextSibling, j = K.nextSibling, se = j.nextSibling;
      return $.addEventListener("change", (le) => {
        le.currentTarget.checked && t("postCapType", "None");
      }), ce($, "id", T), ce($, "name", A), ce(fe, "for", T), q.addEventListener("change", (le) => {
        le.currentTarget.checked && t("postCapType", "Plastic");
      }), ce(q, "id", C), ce(q, "name", A), ce(K, "for", C), j.addEventListener("change", (le) => {
        le.currentTarget.checked && t("postCapType", "Steel");
      }), ce(j, "id", S), ce(j, "name", A), ce(se, "for", S), Te(() => $.checked = e.postCapType == "None"), Te(() => q.checked = e.postCapType == "Plastic"), Te(() => j.checked = e.postCapType == "Steel"), U;
    })();
  }, Ui.cloneNode(!0), (() => {
    const T = e1.cloneNode(!0), C = T.firstChild, S = C.nextSibling;
    return ue(S, be(Ot, {
      get each() {
        return e.sides;
      },
      children: (A, U) => {
        let Z = Oe(), $ = Oe(), fe = Oe();
        return (() => {
          const q = s1.cloneNode(!0), K = q.firstChild, j = K.firstChild, se = j.nextSibling, le = K.nextSibling, _e = le.firstChild, Y = _e.nextSibling, O = le.nextSibling, Se = O.firstChild, Ae = Se.nextSibling, N = O.nextSibling, I = N.firstChild, oe = I.nextSibling;
          return ue(K, () => (U + 1).toString() + " (m) ", se), se.$$input = (me) => {
            let ve = Number.parseFloat(me.currentTarget.value);
            Number.isFinite(ve) ? t("sides", U, "length", ve) : t("sides", U, "length", void 0);
          }, ce(_e, "for", Z), Y.addEventListener("change", (me) => {
            t("sides", U, "hasGate", me.currentTarget.checked);
          }), ce(Y, "id", Z), ce(Se, "for", $), Ae.addEventListener("change", (me) => {
            dn(() => {
              me.currentTarget.checked ? t("sides", U, "postType", "Inground") : me.currentTarget.checked = !0;
            });
          }), ce(Ae, "id", $), ce(I, "for", fe), oe.addEventListener("change", (me) => {
            dn(() => {
              me.currentTarget.checked ? t("sides", U, "postType", "Baseplated") : me.currentTarget.checked = !0;
            });
          }), ce(oe, "id", fe), Te(() => se.value = A().length == null ? "" : A().length), Te(() => Y.checked = A().hasGate), Te(() => Ae.checked = A().postType == "Inground"), Te(() => oe.checked = A().postType == "Baseplated"), q;
        })();
      }
    })), T;
  })(), Ui.cloneNode(!0), (() => {
    const T = t1.cloneNode(!0), C = T.firstChild, S = C.nextSibling, A = S.firstChild, U = A.firstChild, Z = U.nextSibling, $ = Z.nextSibling, fe = $.nextSibling, q = A.nextSibling, K = q.firstChild, j = K.nextSibling, se = j.nextSibling, le = se.nextSibling, _e = q.nextSibling, Y = _e.firstChild, O = Y.nextSibling, Se = O.nextSibling, Ae = Se.nextSibling, N = _e.nextSibling, I = N.firstChild, oe = I.nextSibling, me = oe.nextSibling, ve = me.firstChild, Pe = ve.nextSibling, Me = Pe.nextSibling, H = Me.nextSibling;
    H.nextSibling;
    const re = me.nextSibling, Ee = N.nextSibling, Re = Ee.firstChild, ze = Re.nextSibling, Fe = ze.nextSibling, ke = Fe.firstChild, $e = ke.nextSibling, Xe = $e.nextSibling, et = Xe.nextSibling;
    et.nextSibling;
    const ie = Fe.nextSibling, pe = Ee.nextSibling, we = pe.firstChild, De = we.nextSibling, Ue = De.nextSibling, Je = Ue.nextSibling, gt = pe.nextSibling, Mt = gt.firstChild, Ln = Mt.nextSibling;
    return ue(U, P), ue($, () => {
      let Ie = s();
      return Ie == null ? "No panel size selected." : "Panels are " + Ie.width.toFixed(0) + "mm wide x " + Ie.height.toFixed(0) + "mm high.";
    }), ue(fe, () => {
      let Ie = D();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(K, z), ue(le, () => {
      let Ie = G();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(Y, F), ue(Se, () => {
      let Ie = o();
      return Ie == null ? "No gate size selected." : "Gates are " + Ie.width + "mm wide x " + Ie.height + "mm high.";
    }), ue(Ae, () => {
      let Ie = E();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(I, () => b() + L()), ue(me, () => e.postMaterial == "Alum" ? "aluminium" : "galv", Pe), ue(me, () => {
      let Ie = d();
      return Ie == null ? "?" : (Ie / 1e3).toFixed(1);
    }, H), ue(re, () => {
      let Ie = M();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(Re, () => R() + W()), ue(Fe, () => e.postMaterial == "Alum" ? "aluminium" : "galv", $e), ue(Fe, () => {
      let Ie = u();
      return Ie == null ? "?" : (Ie / 1e3).toFixed(1);
    }, et), ue(ie, () => {
      let Ie = X();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(S, () => {
      if (e.postCapType != "None")
        return (() => {
          const Ie = o1.cloneNode(!0), an = Ie.firstChild, Bt = an.nextSibling, Rr = Bt.nextSibling, Us = Rr.nextSibling;
          return ue(an, V), ue(Us, () => {
            let nr = ee();
            switch (nr.type) {
              case "success":
                return "$" + nr.value.toFixed(2);
              case "pending":
                return "Loading...";
              case "error":
                return "Error (" + nr.message + ")";
            }
          }), Ie;
        })();
    }, pe), ue(we, k), ue(Je, () => {
      let Ie = ne();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), ue(Ln, () => {
      let Ie = Q();
      switch (Ie.type) {
        case "success":
          return "$" + Ie.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Ie.message + ")";
      }
    }), T;
  })(), Ui.cloneNode(!0), be(Os, {
    get productDescription() {
      return de();
    },
    get onRequestQuote() {
      return i.onRequestQuote;
    }
  })];
};
Yt(["input"]);
const rc = { type: "change" }, Do = { type: "start" }, sc = { type: "end" };
class l1 extends bi {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new J(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: wi.ROTATE, MIDDLE: wi.DOLLY, RIGHT: wi.PAN }, this.touches = { ONE: Mi.ROTATE, TWO: Mi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(H) {
      H.addEventListener("keydown", Ae), this._domElementKeyEvents = H;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(rc), n.update(), s = r.NONE;
    }, this.update = function() {
      const H = new J(), re = new Yn().setFromUnitVectors(e.up, new J(0, 1, 0)), Ee = re.clone().invert(), Re = new J(), ze = new Yn(), Fe = 2 * Math.PI;
      return function() {
        const $e = n.object.position;
        H.copy($e).sub(n.target), H.applyQuaternion(re), a.setFromVector3(H), n.autoRotate && s === r.NONE && L(z()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let Xe = n.minAzimuthAngle, et = n.maxAzimuthAngle;
        return isFinite(Xe) && isFinite(et) && (Xe < -Math.PI ? Xe += Fe : Xe > Math.PI && (Xe -= Fe), et < -Math.PI ? et += Fe : et > Math.PI && (et -= Fe), Xe <= et ? a.theta = Math.max(Xe, Math.min(et, a.theta)) : a.theta = a.theta > (Xe + et) / 2 ? Math.max(Xe, a.theta) : Math.min(et, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), H.setFromSpherical(a), H.applyQuaternion(Ee), $e.copy(n.target).add(H), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || Re.distanceToSquared(n.object.position) > o || 8 * (1 - ze.dot(n.object.quaternion)) > o ? (n.dispatchEvent(rc), Re.copy(n.object.position), ze.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", oe), n.domElement.removeEventListener("pointerdown", j), n.domElement.removeEventListener("pointercancel", _e), n.domElement.removeEventListener("wheel", Se), n.domElement.removeEventListener("pointermove", se), n.domElement.removeEventListener("pointerup", le), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", Ae);
    };
    const n = this, r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = r.NONE;
    const o = 1e-6, a = new Zl(), c = new Zl();
    let l = 1;
    const h = new J();
    let u = !1;
    const d = new ye(), p = new ye(), m = new ye(), g = new ye(), f = new ye(), v = new ye(), w = new ye(), x = new ye(), _ = new ye(), y = [], P = {};
    function z() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function b() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function L(H) {
      c.theta -= H;
    }
    function R(H) {
      c.phi -= H;
    }
    const W = function() {
      const H = new J();
      return function(Ee, Re) {
        H.setFromMatrixColumn(Re, 0), H.multiplyScalar(-Ee), h.add(H);
      };
    }(), V = function() {
      const H = new J();
      return function(Ee, Re) {
        n.screenSpacePanning === !0 ? H.setFromMatrixColumn(Re, 1) : (H.setFromMatrixColumn(Re, 0), H.crossVectors(n.object.up, H)), H.multiplyScalar(Ee), h.add(H);
      };
    }(), F = function() {
      const H = new J();
      return function(Ee, Re) {
        const ze = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Fe = n.object.position;
          H.copy(Fe).sub(n.target);
          let ke = H.length();
          ke *= Math.tan(n.object.fov / 2 * Math.PI / 180), W(2 * Ee * ke / ze.clientHeight, n.object.matrix), V(2 * Re * ke / ze.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (W(Ee * (n.object.right - n.object.left) / n.object.zoom / ze.clientWidth, n.object.matrix), V(Re * (n.object.top - n.object.bottom) / n.object.zoom / ze.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function k(H) {
      n.object.isPerspectiveCamera ? l /= H : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * H)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function D(H) {
      n.object.isPerspectiveCamera ? l *= H : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / H)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function G(H) {
      d.set(H.clientX, H.clientY);
    }
    function E(H) {
      w.set(H.clientX, H.clientY);
    }
    function M(H) {
      g.set(H.clientX, H.clientY);
    }
    function X(H) {
      p.set(H.clientX, H.clientY), m.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      L(2 * Math.PI * m.x / re.clientHeight), R(2 * Math.PI * m.y / re.clientHeight), d.copy(p), n.update();
    }
    function ee(H) {
      x.set(H.clientX, H.clientY), _.subVectors(x, w), _.y > 0 ? k(b()) : _.y < 0 && D(b()), w.copy(x), n.update();
    }
    function ne(H) {
      f.set(H.clientX, H.clientY), v.subVectors(f, g).multiplyScalar(n.panSpeed), F(v.x, v.y), g.copy(f), n.update();
    }
    function Q(H) {
      H.deltaY < 0 ? D(b()) : H.deltaY > 0 && k(b()), n.update();
    }
    function de(H) {
      let re = !1;
      switch (H.code) {
        case n.keys.UP:
          H.ctrlKey || H.metaKey || H.shiftKey ? R(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(0, n.keyPanSpeed), re = !0;
          break;
        case n.keys.BOTTOM:
          H.ctrlKey || H.metaKey || H.shiftKey ? R(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(0, -n.keyPanSpeed), re = !0;
          break;
        case n.keys.LEFT:
          H.ctrlKey || H.metaKey || H.shiftKey ? L(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(n.keyPanSpeed, 0), re = !0;
          break;
        case n.keys.RIGHT:
          H.ctrlKey || H.metaKey || H.shiftKey ? L(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(-n.keyPanSpeed, 0), re = !0;
          break;
      }
      re && (H.preventDefault(), n.update());
    }
    function T() {
      if (y.length === 1)
        d.set(y[0].pageX, y[0].pageY);
      else {
        const H = 0.5 * (y[0].pageX + y[1].pageX), re = 0.5 * (y[0].pageY + y[1].pageY);
        d.set(H, re);
      }
    }
    function C() {
      if (y.length === 1)
        g.set(y[0].pageX, y[0].pageY);
      else {
        const H = 0.5 * (y[0].pageX + y[1].pageX), re = 0.5 * (y[0].pageY + y[1].pageY);
        g.set(H, re);
      }
    }
    function S() {
      const H = y[0].pageX - y[1].pageX, re = y[0].pageY - y[1].pageY, Ee = Math.sqrt(H * H + re * re);
      w.set(0, Ee);
    }
    function A() {
      n.enableZoom && S(), n.enablePan && C();
    }
    function U() {
      n.enableZoom && S(), n.enableRotate && T();
    }
    function Z(H) {
      if (y.length == 1)
        p.set(H.pageX, H.pageY);
      else {
        const Ee = Me(H), Re = 0.5 * (H.pageX + Ee.x), ze = 0.5 * (H.pageY + Ee.y);
        p.set(Re, ze);
      }
      m.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      L(2 * Math.PI * m.x / re.clientHeight), R(2 * Math.PI * m.y / re.clientHeight), d.copy(p);
    }
    function $(H) {
      if (y.length === 1)
        f.set(H.pageX, H.pageY);
      else {
        const re = Me(H), Ee = 0.5 * (H.pageX + re.x), Re = 0.5 * (H.pageY + re.y);
        f.set(Ee, Re);
      }
      v.subVectors(f, g).multiplyScalar(n.panSpeed), F(v.x, v.y), g.copy(f);
    }
    function fe(H) {
      const re = Me(H), Ee = H.pageX - re.x, Re = H.pageY - re.y, ze = Math.sqrt(Ee * Ee + Re * Re);
      x.set(0, ze), _.set(0, Math.pow(x.y / w.y, n.zoomSpeed)), k(_.y), w.copy(x);
    }
    function q(H) {
      n.enableZoom && fe(H), n.enablePan && $(H);
    }
    function K(H) {
      n.enableZoom && fe(H), n.enableRotate && Z(H);
    }
    function j(H) {
      n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(H.pointerId), n.domElement.addEventListener("pointermove", se), n.domElement.addEventListener("pointerup", le)), me(H), H.pointerType === "touch" ? N(H) : Y(H));
    }
    function se(H) {
      n.enabled !== !1 && (H.pointerType === "touch" ? I(H) : O(H));
    }
    function le(H) {
      ve(H), y.length === 0 && (n.domElement.releasePointerCapture(H.pointerId), n.domElement.removeEventListener("pointermove", se), n.domElement.removeEventListener("pointerup", le)), n.dispatchEvent(sc), s = r.NONE;
    }
    function _e(H) {
      ve(H);
    }
    function Y(H) {
      let re;
      switch (H.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case wi.DOLLY:
          if (n.enableZoom === !1)
            return;
          E(H), s = r.DOLLY;
          break;
        case wi.ROTATE:
          if (H.ctrlKey || H.metaKey || H.shiftKey) {
            if (n.enablePan === !1)
              return;
            M(H), s = r.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            G(H), s = r.ROTATE;
          }
          break;
        case wi.PAN:
          if (H.ctrlKey || H.metaKey || H.shiftKey) {
            if (n.enableRotate === !1)
              return;
            G(H), s = r.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            M(H), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Do);
    }
    function O(H) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1)
            return;
          X(H);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1)
            return;
          ee(H);
          break;
        case r.PAN:
          if (n.enablePan === !1)
            return;
          ne(H);
          break;
      }
    }
    function Se(H) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (H.preventDefault(), n.dispatchEvent(Do), Q(H), n.dispatchEvent(sc));
    }
    function Ae(H) {
      n.enabled === !1 || n.enablePan === !1 || de(H);
    }
    function N(H) {
      switch (Pe(H), y.length) {
        case 1:
          switch (n.touches.ONE) {
            case Mi.ROTATE:
              if (n.enableRotate === !1)
                return;
              T(), s = r.TOUCH_ROTATE;
              break;
            case Mi.PAN:
              if (n.enablePan === !1)
                return;
              C(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Mi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              A(), s = r.TOUCH_DOLLY_PAN;
              break;
            case Mi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              U(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Do);
    }
    function I(H) {
      switch (Pe(H), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Z(H), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          $(H), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          q(H), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          K(H), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function oe(H) {
      n.enabled !== !1 && H.preventDefault();
    }
    function me(H) {
      y.push(H);
    }
    function ve(H) {
      delete P[H.pointerId];
      for (let re = 0; re < y.length; re++)
        if (y[re].pointerId == H.pointerId) {
          y.splice(re, 1);
          return;
        }
    }
    function Pe(H) {
      let re = P[H.pointerId];
      re === void 0 && (re = new ye(), P[H.pointerId] = re), re.set(H.pageX, H.pageY);
    }
    function Me(H) {
      const re = H.pointerId === y[0].pointerId ? y[1] : y[0];
      return P[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", oe), n.domElement.addEventListener("pointerdown", j), n.domElement.addEventListener("pointercancel", _e), n.domElement.addEventListener("wheel", Se, { passive: !1 }), this.update();
  }
}
class At {
  _x;
  _y;
  static zero = At.create(0, 0);
  static unitX = At.create(1, 0);
  static unitY = At.create(0, 1);
  static negUnitX = At.create(-1, 0);
  static negUnitY = At.create(0, -1);
  constructor(e, t) {
    this._x = e, this._y = t;
  }
  static create(e, t) {
    return new At(e, t);
  }
  toVec3() {
    return Ne.create(this.x, this.y, 0);
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  add(e) {
    return At.create(this.x + e.x, this.y + e.y);
  }
  sub(e) {
    return At.create(this.x - e.x, this.y - e.y);
  }
  scale(e) {
    return At.create(this.x * e, this.y * e);
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  normalize() {
    return this.scale(1 / this.length());
  }
  lengthSquared() {
    return this.dot(this);
  }
  length() {
    return Math.sqrt(this.lengthSquared());
  }
  distanceSquared(e) {
    var t = e.x - this.x, n = e.y - this.y;
    return t * t + n * n;
  }
  distance(e) {
    return Math.sqrt(this.distanceSquared(e));
  }
  toString() {
    return "(" + /* toString */
    ("" + this.x) + ", " + /* toString */
    ("" + this.y) + ")";
  }
  toJSON() {
    return { x: this.x, y: this.y };
  }
  static fromJSON(e) {
    return At.create(e.x, e.y);
  }
}
class Ne {
  _x;
  _y;
  _z;
  static zero;
  static zero_$LI$() {
    return Ne.zero == null && (Ne.zero = Ne.create(0, 0, 0)), Ne.zero;
  }
  static unitX;
  static unitX_$LI$() {
    return Ne.unitX == null && (Ne.unitX = Ne.create(1, 0, 0)), Ne.unitX;
  }
  static unitY;
  static unitY_$LI$() {
    return Ne.unitY == null && (Ne.unitY = Ne.create(0, 1, 0)), Ne.unitY;
  }
  static unitZ;
  static unitZ_$LI$() {
    return Ne.unitZ == null && (Ne.unitZ = Ne.create(0, 0, 1)), Ne.unitZ;
  }
  static negUnitX;
  static negUnitX_$LI$() {
    return Ne.negUnitX == null && (Ne.negUnitX = Ne.create(-1, 0, 0)), Ne.negUnitX;
  }
  static negUnitY;
  static negUnitY_$LI$() {
    return Ne.negUnitY == null && (Ne.negUnitY = Ne.create(0, -1, 0)), Ne.negUnitY;
  }
  static negUnitZ;
  static negUnitZ_$LI$() {
    return Ne.negUnitZ == null && (Ne.negUnitZ = Ne.create(0, 0, -1)), Ne.negUnitZ;
  }
  constructor(e, t, n) {
    this._x = e, this._y = t, this._z = n;
  }
  static create(e, t, n) {
    return new Ne(e, t, n);
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }
  xy() {
    return At.create(this._x, this._y);
  }
  xz() {
    return At.create(this._x, this._z);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  add(e) {
    return Ne.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  sub(e) {
    return Ne.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  scale(e) {
    return Ne.create(this.x * e, this.y * e, this.z * e);
  }
  negate() {
    return Ne.create(-this.x, -this.y, -this.z);
  }
  cross(e) {
    return Ne.create(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x);
  }
  normalize() {
    let e = this.length();
    return Ne.create(this.x / e, this.y / e, this.z / e);
  }
  lengthSquared() {
    return this.dot(this);
  }
  length() {
    return Math.sqrt(this.lengthSquared());
  }
  distanceSquared(e) {
    let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  distance(e) {
    return Math.sqrt(this.distanceSquared(e));
  }
  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
  static fromJSON(e) {
    return Ne.create(e.x, e.y, e.z);
  }
  /**
   * 
   * @return {string}
   */
  toString() {
    return "(" + /* toString */
    ("" + this.x) + ", " + /* toString */
    ("" + this.y) + ", " + /* toString */
    ("" + this.z) + ")";
  }
}
Ne.negUnitZ_$LI$();
Ne.negUnitY_$LI$();
Ne.negUnitX_$LI$();
Ne.unitZ_$LI$();
Ne.unitY_$LI$();
Ne.unitX_$LI$();
Ne.zero_$LI$();
class it {
  _w;
  _x;
  _y;
  _z;
  static identity;
  static identity_$LI$() {
    return it.identity == null && (it.identity = it.Builder.fromWXYZ().setWXYZ(1, 0, 0, 0).build()), it.identity;
  }
  constructor(e, t, n, r) {
    this._w = e, this._x = t, this._y = n, this._z = r;
  }
  static fromAxisAngle(e, t) {
    return it.Builder.fromAxisAngle().setAxis(e).setAngle(t).build();
  }
  static fromUV(e, t) {
    return it.Builder.fromUVW().setU(e).setV(t).setW(e.cross(t)).build();
  }
  static fromVW(e, t) {
    return it.Builder.fromUVW().setU(e.cross(t)).setV(e).setW(t).build();
  }
  static fromWU(e, t) {
    return it.Builder.fromUVW().setU(t).setV(e.cross(t)).setW(e).build();
  }
  get w() {
    return this._w;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }
  getLengthSquared() {
    return this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
  }
  getLength() {
    return Math.sqrt(this.getLengthSquared());
  }
  normalize() {
    let e = this.getLength();
    return new it(this.w / e, this.x / e, this.y / e, this.z / e);
  }
  times(e) {
    let t = this;
    return new it(t.w * e.w - t.x * e.x - t.y * e.y - t.z * e.z, t.w * e.x + t.x * e.w + t.y * e.z - t.z * e.y, t.w * e.y - t.x * e.z + t.y * e.w + t.z * e.x, t.w * e.z + t.x * e.y - t.y * e.x + t.z * e.w);
  }
  dotProduct(e) {
    let t = this;
    return t.w * e.w + t.x * e.x + t.y * e.y + t.z * e.z;
  }
  conjugate() {
    return new it(this.w, -this.x, -this.y, -this.z);
  }
  rotate$Quaternion(e) {
    return this.times(e).times(this.conjugate());
  }
  rotate(e) {
    if (e != null && e instanceof it || e === null)
      return this.rotate$Quaternion(e);
    if (e != null && e instanceof Ne || e === null)
      return this.rotate$Vec3(e);
    throw new Error("invalid overload");
  }
  rotate$Vec3(e) {
    let t = this.times(it.Builder.fromWXYZ().setWXYZ(0, e.x, e.y, e.z).build()).times(this.conjugate());
    return Ne.create(t.x, t.y, t.z);
  }
  slerp(e, t, n) {
    let r = this, s = e, o = r.dotProduct(s), a, c;
    if (1 - Math.abs(o) < 0.01)
      a = 1 - t, c = t;
    else {
      let l = Math.acos(Math.abs(o)), h = Math.sin(l);
      a = Math.sin(l * (1 - t)) / h, c = Math.sin(l * t) / h;
    }
    return n && o < 0 && (a = -a), new it(a * r.w + c * s.w, a * r.x + c * s.x, a * r.y + c * s.y, a * r.z + c * s.z);
  }
  toJSON() {
    return {
      w: this.w,
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
  static fromJSON(e) {
    return new it(e.w, e.x, e.y, e.z);
  }
  /**
   * 
   * @return {string}
   */
  toString() {
    return "Quaternion " + this.w + " " + this.x + " " + this.y + " " + this.z;
  }
}
it.__class = "Quaternion";
((i) => {
  class e {
    w;
    x;
    y;
    z;
    /**
     * 
     * @param {number} w
     * @return {*}
     */
    setW(o) {
      return this.w = o, this;
    }
    /**
     * 
     * @param {number} w
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {*}
     */
    setWXYZ(o, a, c, l) {
      return this.w = o, this.x = a, this.y = c, this.z = l, this;
    }
    /**
     * 
     * @param {number} x
     * @return {*}
     */
    setX(o) {
      return this.x = o, this;
    }
    /**
     * 
     * @param {number} y
     * @return {*}
     */
    setY(o) {
      return this.y = o, this;
    }
    /**
     * 
     * @param {number} z
     * @return {*}
     */
    setZ(o) {
      return this.z = o, this;
    }
    /**
     * 
     * @return {Quaternion}
     */
    build() {
      return new i(this.w, this.x, this.y, this.z);
    }
    constructor() {
      this.w = 0, this.x = 0, this.y = 0, this.z = 0;
    }
  }
  i.FromWXYZBuilder = e, e.__class = "Quaternion.FromWXYZBuilder", e.__interfaces = ["Quaternion.BuildStep", "Quaternion.FromWXYZSetWStep", "Quaternion.FromWXYZSetXStep", "Quaternion.FromWXYZSetZStep", "Quaternion.FromWXYZSetYStep"];
  class t {
    axisX;
    axisY;
    axisZ;
    angle;
    /**
     * 
     * @param {number} axisX
     * @return {*}
     */
    setAxisX(o) {
      return this.axisX = o, this;
    }
    /**
     * 
     * @param {number} axisX
     * @param {number} axisY
     * @param {number} axisZ
     * @return {*}
     */
    setAxisXYZ(o, a, c) {
      return this.axisX = o, this.axisY = a, this.axisZ = c, this;
    }
    /**
     * 
     * @param {Vec3} axis
     * @return {*}
     */
    setAxis(o) {
      return this.axisX = o.x, this.axisY = o.y, this.axisZ = o.z, this;
    }
    /**
     * 
     * @param {number} axisY
     * @return {*}
     */
    setAxisY(o) {
      return this.axisY = o, this;
    }
    /**
     * 
     * @param {number} axisZ
     * @return {*}
     */
    setAxisZ(o) {
      return this.axisZ = o, this;
    }
    /**
     * 
     * @param {number} angle
     * @return {*}
     */
    setAngle(o) {
      return this.angle = o, this;
    }
    /**
     * 
     * @return {Quaternion}
     */
    build() {
      let o = Math.sqrt(this.axisX * this.axisX + this.axisY * this.axisY + this.axisZ * this.axisZ);
      this.axisX /= o, this.axisY /= o, this.axisZ /= o;
      let a = Math.cos(
        /* toRadians */
        ((l) => l * Math.PI / 180)(0.5 * this.angle)
      ), c = Math.sin(
        /* toRadians */
        ((l) => l * Math.PI / 180)(0.5 * this.angle)
      );
      return new i(a, c * this.axisX, c * this.axisY, c * this.axisZ);
    }
    constructor() {
      this.axisX = 0, this.axisY = 0, this.axisZ = 0, this.angle = 0;
    }
  }
  i.FromAxisAngleBuilder = t, t.__class = "Quaternion.FromAxisAngleBuilder", t.__interfaces = ["Quaternion.FromAxisAngleSetAxisYStep", "Quaternion.FromAxisAngleSetAngleStep", "Quaternion.FromAxisAngleSetAxisXStep", "Quaternion.BuildStep", "Quaternion.FromAxisAngleSetAxisZStep"];
  class n {
    u;
    v;
    w;
    /**
     * 
     * @param {Vec3} u
     * @return {*}
     */
    setU(o) {
      return this.u = o, this;
    }
    /**
     * 
     * @param {Vec3} v
     * @return {*}
     */
    setV(o) {
      return this.v = o, this;
    }
    /**
     * 
     * @param {Vec3} w
     * @return {*}
     */
    setW(o) {
      return this.w = o, this;
    }
    /**
     * 
     * @return {Quaternion}
     */
    build() {
      if (this.u == null || this.v == null || this.w == null)
        throw "Fields not all set";
      let o = this.u.x, a = this.u.y, c = this.u.z, l = this.v.x, h = this.v.y, u = this.v.z, d = this.w.x, p = this.w.y, m = this.w.z, g = o + h + m, f, v, w, x;
      if (g > 0) {
        let _ = Math.sqrt(g + 1) * 2;
        f = 0.25 * _, v = (u - p) / _, w = (d - c) / _, x = (a - l) / _;
      } else if (((_, y) => _ && y)(o > h, o > m)) {
        let _ = Math.sqrt(1 + o - h - m) * 2;
        f = (u - p) / _, v = 0.25 * _, w = (l + a) / _, x = (d + c) / _;
      } else if (h > m) {
        let _ = Math.sqrt(1 + h - o - m) * 2;
        f = (d - c) / _, v = (l + a) / _, w = 0.25 * _, x = (p + u) / _;
      } else {
        let _ = Math.sqrt(1 + m - o - h) * 2;
        f = (a - l) / _, v = (d + c) / _, w = (p + u) / _, x = 0.25 * _;
      }
      return new i(f, v, w, x);
    }
    constructor() {
      this.u = null, this.v = null, this.w = null;
    }
  }
  i.FromUVWBuilder = n, n.__class = "Quaternion.FromUVWBuilder", n.__interfaces = ["Quaternion.FromUVWSetUStep", "Quaternion.BuildStep", "Quaternion.FromUVWSetWStep", "Quaternion.FromUVWSetVStep"];
  class r {
    static fromWXYZ() {
      return new i.FromWXYZBuilder();
    }
    static fromAxisAngle() {
      return new i.FromAxisAngleBuilder();
    }
    static fromUVW() {
      return new i.FromUVWBuilder();
    }
    constructor() {
    }
  }
  i.Builder = r, r.__class = "Quaternion.Builder";
})(it || (it = {}));
it.identity_$LI$();
class pt {
  _origin;
  _orientation;
  static identity;
  static identity_$LI$() {
    return pt.identity == null && (pt.identity = pt.Builder.fromOriginOrientation().setOrigin(Ne.zero_$LI$()).setOrientation(it.identity_$LI$()).build()), pt.identity;
  }
  constructor(e, t) {
    this._origin = e, this._orientation = t;
  }
  static create(e, t) {
    return new pt(e, t);
  }
  get origin() {
    return this._origin;
  }
  get orientation() {
    return this._orientation;
  }
  get o() {
    return this.origin;
  }
  get u() {
    return this.orientation.rotate$Vec3(Ne.unitX_$LI$());
  }
  get v() {
    return this.orientation.rotate$Vec3(Ne.unitY_$LI$());
  }
  get w() {
    return this.orientation.rotate$Vec3(Ne.unitZ_$LI$());
  }
  pointToThisSpace(e) {
    return this.orientation.conjugate().rotate$Vec3(e.sub(this.origin));
  }
  vectorToThisSpace(e) {
    return this.orientation.conjugate().rotate$Vec3(e);
  }
  toThisSpace(e) {
    return pt.Builder.fromOriginOrientation().setOrigin(this.pointToThisSpace(e.origin)).setOrientation(this.orientation.conjugate().times(e.orientation)).build();
  }
  pointFromThisSpace(e) {
    return this.orientation.rotate$Vec3(e).add(this.origin);
  }
  vectorFromThisSpace(e) {
    return this.orientation.rotate$Vec3(e);
  }
  fromThisSpace(e) {
    return pt.Builder.fromOriginOrientation().setOrigin(this.pointFromThisSpace(e.origin)).setOrientation(this.orientation.times(e.orientation)).build();
  }
  invert() {
    return pt.Builder.fromOriginOrientation().setOrigin(this.orientation.conjugate().rotate$Vec3(this.origin.scale(-1))).setOrientation(this.orientation.conjugate()).build();
  }
  times(e) {
    return this.fromThisSpace(e);
  }
  toJSON() {
    return {
      origin: this.origin,
      orientation: this.orientation
    };
  }
  static fromJSON(e) {
    return pt.create(
      Ne.fromJSON(e.origin),
      it.fromJSON(e.orientation)
    );
  }
  /**
   * 
   * @return {string}
   */
  toString() {
    return "(origin:" + this.origin.toString() + ", orientation: " + this.orientation.toString() + ")";
  }
}
pt.__class = "Transform3D";
((i) => {
  class e {
    originX;
    originY;
    originZ;
    orientation;
    /**
     * 
     * @param {Vec3} origin
     * @return {*}
     */
    setOrigin(r) {
      return this.originX = r.x, this.originY = r.y, this.originZ = r.z, this;
    }
    /**
     * 
     * @param {number} originX
     * @return {*}
     */
    setOriginX(r) {
      return this.originX = r, this;
    }
    /**
     * 
     * @param {number} originX
     * @param {number} originY
     * @param {number} originZ
     * @return {*}
     */
    setOriginXYZ(r, s, o) {
      return this.originX = r, this.originY = s, this.originZ = o, this;
    }
    /**
     * 
     * @param {number} originY
     * @return {*}
     */
    setOriginY(r) {
      return this.originY = r, this;
    }
    /**
     * 
     * @param {number} originZ
     * @return {*}
     */
    setOriginZ(r) {
      return this.originZ = r, this;
    }
    /**
     * 
     * @param {Quaternion} orientation
     * @return {*}
     */
    setOrientation(r) {
      return this.orientation = r, this;
    }
    /**
     * 
     * @return {Transform3D}
     */
    build() {
      if (this.orientation == null)
        throw "Fields not all set";
      return new i(Ne.create(this.originX, this.originY, this.originZ), this.orientation);
    }
    constructor() {
      this.originX = 0, this.originY = 0, this.originZ = 0, this.orientation = null;
    }
  }
  i.FromOriginOrientationBuilder = e, e.__class = "Transform3D.FromOriginOrientationBuilder", e.__interfaces = ["Transform3D.FromOriginOrientationSetOriginYStep", "Transform3D.FromOriginOrientationSetOrientationStep", "Transform3D.FromOriginOrientationSetOriginXStep", "Transform3D.BuildStep", "Transform3D.FromOriginOrientationSetOriginZStep"];
  class t {
    static fromOriginOrientation() {
      return new i.FromOriginOrientationBuilder();
    }
    constructor() {
    }
  }
  i.Builder = t, t.__class = "Transform3D.Builder";
})(pt || (pt = {}));
pt.identity_$LI$();
const c1 = {
  Cladding: "Cladding"
};
class Cn {
  children;
  transform;
  itemName;
  colour;
  description;
  usage;
  layers;
  qty;
  length;
  hasLabel;
  openingProperties;
  ceeProperties;
  ubProperties;
  shsProperties;
  rhsProperties;
  topHatProperties;
  timberProperties;
  frontBackCutAngle;
  backBackCutAngle;
  panelMemberProperties;
  flatProperties;
  webPunches;
  flangePunches;
  webNotchRanges;
  mkObject3d;
  flashingProfile;
  wireProperties;
  constructor(e) {
    for (let t in e)
      this[t] = e[t];
  }
}
class at {
  _webSize;
  _flangeSize;
  _lipSize;
  _thickness;
  get webSize() {
    return this._webSize;
  }
  get flangeSize() {
    return this._flangeSize;
  }
  get lipSize() {
    return this._lipSize;
  }
  get thickness() {
    return this._thickness;
  }
  constructor(e) {
    this._webSize = e.webSize, this._flangeSize = e.flangeSize, this._lipSize = e.lipSize, this._thickness = e.thickness;
  }
  static create(e) {
    return new at(e);
  }
}
class Qt {
  width;
  height;
  topWidth;
  constructor(e) {
    this.width = e.width, this.height = e.height, this.topWidth = e.topWidth;
  }
}
class nt {
  webSize;
  flangeSize;
  thickness;
  kgPerM;
  constructor(e) {
    this.webSize = e.webSize, this.flangeSize = e.flangeSize, this.thickness = e.thickness, this.kgPerM = e.kgPerM;
  }
}
class ft {
  webSize;
  flangeSize1;
  flangeSize2;
  lipSize;
  thickness;
  constructor(e) {
    this.webSize = e.webSize, this.flangeSize1 = e.flangeSize1, this.flangeSize2 = e.flangeSize2, this.lipSize = e.lipSize, this.thickness = e.thickness;
  }
}
const Wt = {
  Basalt: { code: "BA", colourHex: "#656669" },
  Bushland: { code: "BD", colourHex: "#7B7F72" },
  "Blue Gum": { code: "BG", colourHex: "#969799" },
  "Classic Cream": { code: "CC", colourHex: "#E9DCB8" },
  "Cottage Green": { code: "CG", colourHex: "#084A39" },
  Domain: { code: "DM", colourHex: "#ECD7A9" },
  "Deep Ocean": { code: "DO", colourHex: "#263B50" },
  Dune: { code: "DU", colourHex: "#A9A69C" },
  "Evening Haze": { code: "EH", colourHex: "#BFBAA0" },
  Harvest: { code: "HA", colourHex: "#C9A983" },
  Ironstone: { code: "IS", colourHex: "#343E4C" },
  Jasper: { code: "JP", colourHex: "#685D50" },
  Loft: { code: "LO", colourHex: "#44393D" },
  Monument: { code: "MO", colourHex: "#2D2E32" },
  "Manor Red": { code: "MR", colourHex: "#67120C" },
  "Night Sky": { code: "NS", colourHex: "#000000" },
  Paperbark: { code: "PB", colourHex: "#C6B69A" },
  "Pale Eucalypt": { code: "PE", colourHex: "#73826A" },
  Riversand: { code: "RS", colourHex: "#9D8E81" },
  "Shale Grey": { code: "SH", colourHex: "#B1B6B1" },
  Surfmist: { code: "SM", colourHex: "#DDDACC" },
  Southerly: { code: "ST", colourHex: "#D2D2CB" },
  Wallaby: { code: "WA", colourHex: "#767572" },
  "Woodland Grey": { code: "WG", colourHex: "#414440" },
  Wilderness: { code: "WL", colourHex: "#5E7567" },
  Wollemi: { code: "WO", colourHex: "#101E12" },
  Windspray: { code: "WS", colourHex: "#7B8181" }
};
new at({ webSize: 102, flangeSize: 51, lipSize: 12.5, thickness: 1 }), new at({ webSize: 102, flangeSize: 51, lipSize: 12.5, thickness: 1.2 }), new at({ webSize: 102, flangeSize: 51, lipSize: 13.5, thickness: 1.5 }), new at({ webSize: 102, flangeSize: 51, lipSize: 14.5, thickness: 1.9 }), new at({ webSize: 152, flangeSize: 64, lipSize: 14.5, thickness: 1.2 }), new at({ webSize: 152, flangeSize: 64, lipSize: 15.5, thickness: 1.5 }), new at({ webSize: 152, flangeSize: 64, lipSize: 16.5, thickness: 1.9 }), new at({ webSize: 152, flangeSize: 64, lipSize: 18.5, thickness: 2.4 }), new at({ webSize: 203, flangeSize: 76, lipSize: 15, thickness: 1.2 }), new at({ webSize: 203, flangeSize: 76, lipSize: 15.5, thickness: 1.5 }), new at({ webSize: 203, flangeSize: 76, lipSize: 19, thickness: 1.9 }), new at({ webSize: 203, flangeSize: 76, lipSize: 21, thickness: 2.4 }), new at({ webSize: 254, flangeSize: 76, lipSize: 18, thickness: 1.5 }), new at({ webSize: 254, flangeSize: 76, lipSize: 18.5, thickness: 1.9 }), new at({ webSize: 254, flangeSize: 76, lipSize: 20.5, thickness: 2.4 }), new at({ webSize: 300, flangeSize: 96, lipSize: 26.5, thickness: 1.9 }), new at({ webSize: 300, flangeSize: 96, lipSize: 27.5, thickness: 2.4 }), new at({ webSize: 300, flangeSize: 96, lipSize: 31.5, thickness: 3 }), new at({ webSize: 350, flangeSize: 125, lipSize: 29, thickness: 2.4 }), new at({ webSize: 350, flangeSize: 125, lipSize: 30, thickness: 3 }), new at({ webSize: 400, flangeSize: 125, lipSize: 28, thickness: 2.4 }), new at({ webSize: 400, flangeSize: 125, lipSize: 30, thickness: 3 });
new ft({ webSize: 102, flangeSize1: 53, flangeSize2: 49, lipSize: 12.5, thickness: 1 }), new ft({ webSize: 102, flangeSize1: 53, flangeSize2: 49, lipSize: 12.5, thickness: 1.2 }), new ft({ webSize: 102, flangeSize1: 53, flangeSize2: 49, lipSize: 13.5, thickness: 1.5 }), new ft({ webSize: 102, flangeSize1: 53, flangeSize2: 49, lipSize: 14.5, thickness: 1.9 }), new ft({ webSize: 152, flangeSize1: 65, flangeSize2: 61, lipSize: 15.5, thickness: 1.2 }), new ft({ webSize: 152, flangeSize1: 65, flangeSize2: 61, lipSize: 16.5, thickness: 1.5 }), new ft({ webSize: 152, flangeSize1: 65, flangeSize2: 61, lipSize: 17.5, thickness: 1.9 }), new ft({ webSize: 152, flangeSize1: 66, flangeSize2: 60, lipSize: 19.5, thickness: 2.4 }), new ft({ webSize: 203, flangeSize1: 79, flangeSize2: 74, lipSize: 15, thickness: 1.2 }), new ft({ webSize: 203, flangeSize1: 79, flangeSize2: 74, lipSize: 15, thickness: 1.5 }), new ft({ webSize: 203, flangeSize1: 79, flangeSize2: 74, lipSize: 18.5, thickness: 1.9 }), new ft({ webSize: 203, flangeSize1: 79, flangeSize2: 73, lipSize: 21.5, thickness: 2.4 }), new ft({ webSize: 254, flangeSize1: 79, flangeSize2: 74, lipSize: 18, thickness: 1.5 }), new ft({ webSize: 254, flangeSize1: 79, flangeSize2: 74, lipSize: 18, thickness: 1.9 }), new ft({ webSize: 254, flangeSize1: 79, flangeSize2: 73, lipSize: 21, thickness: 2.4 }), new ft({ webSize: 300, flangeSize1: 100, flangeSize2: 93, lipSize: 27, thickness: 1.9 }), new ft({ webSize: 300, flangeSize1: 100, flangeSize2: 93, lipSize: 27, thickness: 2.4 }), new ft({ webSize: 300, flangeSize1: 100, flangeSize2: 93, lipSize: 31, thickness: 3 }), new ft({ webSize: 350, flangeSize1: 129, flangeSize2: 121, lipSize: 30, thickness: 2.4 }), new ft({ webSize: 350, flangeSize1: 129, flangeSize2: 121, lipSize: 30, thickness: 3 }), new ft({ webSize: 400, flangeSize1: 129, flangeSize2: 121, lipSize: 30, thickness: 2.4 }), new ft({ webSize: 400, flangeSize1: 129, flangeSize2: 121, lipSize: 30, thickness: 3 });
new nt({ webSize: 150, flangeSize: 75, thickness: 7, kgPerM: 14 }), new nt({ webSize: 155, flangeSize: 75, thickness: 9.5, kgPerM: 18 }), new nt({ webSize: 173, flangeSize: 90, thickness: 7, kgPerM: 16.1 }), new nt({ webSize: 175, flangeSize: 90, thickness: 8, kgPerM: 18.1 }), new nt({ webSize: 179, flangeSize: 90, thickness: 10, kgPerM: 22.2 }), new nt({ webSize: 198, flangeSize: 99, thickness: 7, kgPerM: 18.2 }), new nt({ webSize: 202, flangeSize: 133, thickness: 7, kgPerM: 22.2 }), new nt({ webSize: 203, flangeSize: 133, thickness: 7.8, kgPerM: 25.4 }), new nt({ webSize: 207, flangeSize: 134, thickness: 9.6, kgPerM: 29.8 }), new nt({ webSize: 248, flangeSize: 124, thickness: 8, kgPerM: 25.7 }), new nt({ webSize: 252, flangeSize: 146, thickness: 8.6, kgPerM: 31.4 }), new nt({ webSize: 256, flangeSize: 146, thickness: 10.9, kgPerM: 37.3 }), new nt({ webSize: 298, flangeSize: 149, thickness: 8, kgPerM: 32 }), new nt({ webSize: 304, flangeSize: 165, thickness: 10.2, kgPerM: 40.4 }), new nt({ webSize: 307, flangeSize: 166, thickness: 11.8, kgPerM: 46.2 }), new nt({ webSize: 352, flangeSize: 171, thickness: 9.7, kgPerM: 44.7 }), new nt({ webSize: 356, flangeSize: 171, thickness: 11.5, kgPerM: 50.7 }), new nt({ webSize: 359, flangeSize: 172, thickness: 13, kgPerM: 56.7 }), new nt({ webSize: 403, flangeSize: 178, thickness: 10.9, kgPerM: 53.7 }), new nt({ webSize: 406, flangeSize: 178, thickness: 12.8, kgPerM: 59.7 }), new nt({ webSize: 454, flangeSize: 190, thickness: 12.7, kgPerM: 67.1 }), new nt({ webSize: 457, flangeSize: 190, thickness: 14.5, kgPerM: 74.6 }), new nt({ webSize: 460, flangeSize: 191, thickness: 16, kgPerM: 82.1 }), new nt({ webSize: 528, flangeSize: 209, thickness: 13.2, kgPerM: 82 }), new nt({ webSize: 533, flangeSize: 209, thickness: 15.6, kgPerM: 92.4 }), new nt({ webSize: 602, flangeSize: 228, thickness: 14.8, kgPerM: 101 }), new nt({ webSize: 607, flangeSize: 228, thickness: 17.3, kgPerM: 113 }), new nt({ webSize: 612, flangeSize: 229, thickness: 19.6, kgPerM: 125 });
new Qt({ width: 97, height: 64, topWidth: 36 }), new Qt({ width: 97, height: 64, topWidth: 36 }), new Qt({ width: 97, height: 64, topWidth: 36 }), new Qt({ width: 109, height: 96, topWidth: 36 }), new Qt({ width: 109, height: 96, topWidth: 36 }), new Qt({ width: 109, height: 96, topWidth: 36 }), new Qt({ width: 150, height: 120, topWidth: 36 }), new Qt({ width: 150, height: 120, topWidth: 36 }), new Qt({ width: 150, height: 120, topWidth: 36 }), new Qt({ width: 64, height: 22, topWidth: 36 }), new Qt({ width: 64, height: 22, topWidth: 36 }), new Qt({ width: 90, height: 40, topWidth: 36 }), new Qt({ width: 90, height: 40, topWidth: 36 });
class ba extends ks {
  constructor(e) {
    super(e), this.defaultDPI = 90, this.defaultUnit = "px";
  }
  load(e, t, n, r) {
    const s = this, o = new jm(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(a));
      } catch (c) {
        r ? r(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, r);
  }
  parse(e) {
    const t = this;
    function n(T, C) {
      if (T.nodeType !== 1)
        return;
      const S = _(T);
      let A = !1, U = null;
      switch (T.nodeName) {
        case "svg":
          C = m(T, C);
          break;
        case "style":
          s(T);
          break;
        case "g":
          C = m(T, C);
          break;
        case "path":
          C = m(T, C), T.hasAttribute("d") && (U = r(T));
          break;
        case "rect":
          C = m(T, C), U = c(T);
          break;
        case "polygon":
          C = m(T, C), U = l(T);
          break;
        case "polyline":
          C = m(T, C), U = h(T);
          break;
        case "circle":
          C = m(T, C), U = u(T);
          break;
        case "ellipse":
          C = m(T, C), U = d(T);
          break;
        case "line":
          C = m(T, C), U = p(T);
          break;
        case "defs":
          A = !0;
          break;
        case "use":
          C = m(T, C);
          const fe = (T.getAttributeNS("http://www.w3.org/1999/xlink", "href") || "").substring(1), q = T.viewportElement.getElementById(fe);
          q ? n(q, C) : console.warn("SVGLoader: 'use node' references non-existent node id: " + fe);
          break;
      }
      U && (C.fill !== void 0 && C.fill !== "none" && U.color.setStyle(C.fill), P(U, ne), V.push(U), U.userData = { node: T, style: C });
      const Z = T.childNodes;
      for (let $ = 0; $ < Z.length; $++) {
        const fe = Z[$];
        A && fe.nodeName !== "style" && fe.nodeName !== "defs" || n(fe, C);
      }
      S && (k.pop(), k.length > 0 ? ne.copy(k[k.length - 1]) : ne.identity());
    }
    function r(T) {
      const C = new ii(), S = new ye(), A = new ye(), U = new ye();
      let Z = !0, $ = !1;
      const q = T.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);
      for (let K = 0, j = q.length; K < j; K++) {
        const se = q[K], le = se.charAt(0), _e = se.slice(1).trim();
        Z === !0 && ($ = !0, Z = !1);
        let Y;
        switch (le) {
          case "M":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2)
              S.x = Y[O + 0], S.y = Y[O + 1], A.x = S.x, A.y = S.y, O === 0 ? C.moveTo(S.x, S.y) : C.lineTo(S.x, S.y), O === 0 && U.copy(S);
            break;
          case "H":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O++)
              S.x = Y[O], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "V":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O++)
              S.y = Y[O], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "L":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2)
              S.x = Y[O + 0], S.y = Y[O + 1], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "C":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 6)
              C.bezierCurveTo(
                Y[O + 0],
                Y[O + 1],
                Y[O + 2],
                Y[O + 3],
                Y[O + 4],
                Y[O + 5]
              ), A.x = Y[O + 2], A.y = Y[O + 3], S.x = Y[O + 4], S.y = Y[O + 5], O === 0 && $ === !0 && U.copy(S);
            break;
          case "S":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 4)
              C.bezierCurveTo(
                g(S.x, A.x),
                g(S.y, A.y),
                Y[O + 0],
                Y[O + 1],
                Y[O + 2],
                Y[O + 3]
              ), A.x = Y[O + 0], A.y = Y[O + 1], S.x = Y[O + 2], S.y = Y[O + 3], O === 0 && $ === !0 && U.copy(S);
            break;
          case "Q":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 4)
              C.quadraticCurveTo(
                Y[O + 0],
                Y[O + 1],
                Y[O + 2],
                Y[O + 3]
              ), A.x = Y[O + 0], A.y = Y[O + 1], S.x = Y[O + 2], S.y = Y[O + 3], O === 0 && $ === !0 && U.copy(S);
            break;
          case "T":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2) {
              const Ae = g(S.x, A.x), N = g(S.y, A.y);
              C.quadraticCurveTo(
                Ae,
                N,
                Y[O + 0],
                Y[O + 1]
              ), A.x = Ae, A.y = N, S.x = Y[O + 0], S.y = Y[O + 1], O === 0 && $ === !0 && U.copy(S);
            }
            break;
          case "A":
            Y = f(_e, [3, 4], 7);
            for (let O = 0, Se = Y.length; O < Se; O += 7) {
              if (Y[O + 5] == S.x && Y[O + 6] == S.y)
                continue;
              const Ae = S.clone();
              S.x = Y[O + 5], S.y = Y[O + 6], A.x = S.x, A.y = S.y, o(
                C,
                Y[O],
                Y[O + 1],
                Y[O + 2],
                Y[O + 3],
                Y[O + 4],
                Ae,
                S
              ), O === 0 && $ === !0 && U.copy(S);
            }
            break;
          case "m":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2)
              S.x += Y[O + 0], S.y += Y[O + 1], A.x = S.x, A.y = S.y, O === 0 ? C.moveTo(S.x, S.y) : C.lineTo(S.x, S.y), O === 0 && U.copy(S);
            break;
          case "h":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O++)
              S.x += Y[O], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "v":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O++)
              S.y += Y[O], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "l":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2)
              S.x += Y[O + 0], S.y += Y[O + 1], A.x = S.x, A.y = S.y, C.lineTo(S.x, S.y), O === 0 && $ === !0 && U.copy(S);
            break;
          case "c":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 6)
              C.bezierCurveTo(
                S.x + Y[O + 0],
                S.y + Y[O + 1],
                S.x + Y[O + 2],
                S.y + Y[O + 3],
                S.x + Y[O + 4],
                S.y + Y[O + 5]
              ), A.x = S.x + Y[O + 2], A.y = S.y + Y[O + 3], S.x += Y[O + 4], S.y += Y[O + 5], O === 0 && $ === !0 && U.copy(S);
            break;
          case "s":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 4)
              C.bezierCurveTo(
                g(S.x, A.x),
                g(S.y, A.y),
                S.x + Y[O + 0],
                S.y + Y[O + 1],
                S.x + Y[O + 2],
                S.y + Y[O + 3]
              ), A.x = S.x + Y[O + 0], A.y = S.y + Y[O + 1], S.x += Y[O + 2], S.y += Y[O + 3], O === 0 && $ === !0 && U.copy(S);
            break;
          case "q":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 4)
              C.quadraticCurveTo(
                S.x + Y[O + 0],
                S.y + Y[O + 1],
                S.x + Y[O + 2],
                S.y + Y[O + 3]
              ), A.x = S.x + Y[O + 0], A.y = S.y + Y[O + 1], S.x += Y[O + 2], S.y += Y[O + 3], O === 0 && $ === !0 && U.copy(S);
            break;
          case "t":
            Y = f(_e);
            for (let O = 0, Se = Y.length; O < Se; O += 2) {
              const Ae = g(S.x, A.x), N = g(S.y, A.y);
              C.quadraticCurveTo(
                Ae,
                N,
                S.x + Y[O + 0],
                S.y + Y[O + 1]
              ), A.x = Ae, A.y = N, S.x = S.x + Y[O + 0], S.y = S.y + Y[O + 1], O === 0 && $ === !0 && U.copy(S);
            }
            break;
          case "a":
            Y = f(_e, [3, 4], 7);
            for (let O = 0, Se = Y.length; O < Se; O += 7) {
              if (Y[O + 5] == 0 && Y[O + 6] == 0)
                continue;
              const Ae = S.clone();
              S.x += Y[O + 5], S.y += Y[O + 6], A.x = S.x, A.y = S.y, o(
                C,
                Y[O],
                Y[O + 1],
                Y[O + 2],
                Y[O + 3],
                Y[O + 4],
                Ae,
                S
              ), O === 0 && $ === !0 && U.copy(S);
            }
            break;
          case "Z":
          case "z":
            C.currentPath.autoClose = !0, C.currentPath.curves.length > 0 && (S.copy(U), C.currentPath.currentPoint.copy(S), Z = !0);
            break;
          default:
            console.warn(se);
        }
        $ = !1;
      }
      return C;
    }
    function s(T) {
      if (!(!T.sheet || !T.sheet.cssRules || !T.sheet.cssRules.length))
        for (let C = 0; C < T.sheet.cssRules.length; C++) {
          const S = T.sheet.cssRules[C];
          if (S.type !== 1)
            continue;
          const A = S.selectorText.split(/,/gm).filter(Boolean).map((U) => U.trim());
          for (let U = 0; U < A.length; U++) {
            const Z = Object.fromEntries(
              Object.entries(S.style).filter(([, $]) => $ !== "")
            );
            F[A[U]] = Object.assign(
              F[A[U]] || {},
              Z
            );
          }
        }
    }
    function o(T, C, S, A, U, Z, $, fe) {
      if (C == 0 || S == 0) {
        T.lineTo(fe.x, fe.y);
        return;
      }
      A = A * Math.PI / 180, C = Math.abs(C), S = Math.abs(S);
      const q = ($.x - fe.x) / 2, K = ($.y - fe.y) / 2, j = Math.cos(A) * q + Math.sin(A) * K, se = -Math.sin(A) * q + Math.cos(A) * K;
      let le = C * C, _e = S * S;
      const Y = j * j, O = se * se, Se = Y / le + O / _e;
      if (Se > 1) {
        const re = Math.sqrt(Se);
        C = re * C, S = re * S, le = C * C, _e = S * S;
      }
      const Ae = le * O + _e * Y, N = (le * _e - Ae) / Ae;
      let I = Math.sqrt(Math.max(0, N));
      U === Z && (I = -I);
      const oe = I * C * se / S, me = -I * S * j / C, ve = Math.cos(A) * oe - Math.sin(A) * me + ($.x + fe.x) / 2, Pe = Math.sin(A) * oe + Math.cos(A) * me + ($.y + fe.y) / 2, Me = a(1, 0, (j - oe) / C, (se - me) / S), H = a((j - oe) / C, (se - me) / S, (-j - oe) / C, (-se - me) / S) % (Math.PI * 2);
      T.currentPath.absellipse(ve, Pe, C, S, Me, Me + H, Z === 0, A);
    }
    function a(T, C, S, A) {
      const U = T * S + C * A, Z = Math.sqrt(T * T + C * C) * Math.sqrt(S * S + A * A);
      let $ = Math.acos(Math.max(-1, Math.min(1, U / Z)));
      return T * A - C * S < 0 && ($ = -$), $;
    }
    function c(T) {
      const C = x(T.getAttribute("x") || 0), S = x(T.getAttribute("y") || 0), A = x(T.getAttribute("rx") || T.getAttribute("ry") || 0), U = x(T.getAttribute("ry") || T.getAttribute("rx") || 0), Z = x(T.getAttribute("width")), $ = x(T.getAttribute("height")), fe = 1 - 0.551915024494, q = new ii();
      return q.moveTo(C + A, S), q.lineTo(C + Z - A, S), (A !== 0 || U !== 0) && q.bezierCurveTo(
        C + Z - A * fe,
        S,
        C + Z,
        S + U * fe,
        C + Z,
        S + U
      ), q.lineTo(C + Z, S + $ - U), (A !== 0 || U !== 0) && q.bezierCurveTo(
        C + Z,
        S + $ - U * fe,
        C + Z - A * fe,
        S + $,
        C + Z - A,
        S + $
      ), q.lineTo(C + A, S + $), (A !== 0 || U !== 0) && q.bezierCurveTo(
        C + A * fe,
        S + $,
        C,
        S + $ - U * fe,
        C,
        S + $ - U
      ), q.lineTo(C, S + U), (A !== 0 || U !== 0) && q.bezierCurveTo(C, S + U * fe, C + A * fe, S, C + A, S), q;
    }
    function l(T) {
      function C(Z, $, fe) {
        const q = x($), K = x(fe);
        U === 0 ? A.moveTo(q, K) : A.lineTo(q, K), U++;
      }
      const S = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, A = new ii();
      let U = 0;
      return T.getAttribute("points").replace(S, C), A.currentPath.autoClose = !0, A;
    }
    function h(T) {
      function C(Z, $, fe) {
        const q = x($), K = x(fe);
        U === 0 ? A.moveTo(q, K) : A.lineTo(q, K), U++;
      }
      const S = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, A = new ii();
      let U = 0;
      return T.getAttribute("points").replace(S, C), A.currentPath.autoClose = !1, A;
    }
    function u(T) {
      const C = x(T.getAttribute("cx") || 0), S = x(T.getAttribute("cy") || 0), A = x(T.getAttribute("r") || 0), U = new Xi();
      U.absarc(C, S, A, 0, Math.PI * 2);
      const Z = new ii();
      return Z.subPaths.push(U), Z;
    }
    function d(T) {
      const C = x(T.getAttribute("cx") || 0), S = x(T.getAttribute("cy") || 0), A = x(T.getAttribute("rx") || 0), U = x(T.getAttribute("ry") || 0), Z = new Xi();
      Z.absellipse(C, S, A, U, 0, Math.PI * 2);
      const $ = new ii();
      return $.subPaths.push(Z), $;
    }
    function p(T) {
      const C = x(T.getAttribute("x1") || 0), S = x(T.getAttribute("y1") || 0), A = x(T.getAttribute("x2") || 0), U = x(T.getAttribute("y2") || 0), Z = new ii();
      return Z.moveTo(C, S), Z.lineTo(A, U), Z.currentPath.autoClose = !1, Z;
    }
    function m(T, C) {
      C = Object.assign({}, C);
      let S = {};
      if (T.hasAttribute("class")) {
        const $ = T.getAttribute("class").split(/\s/).filter(Boolean).map((fe) => fe.trim());
        for (let fe = 0; fe < $.length; fe++)
          S = Object.assign(S, F["." + $[fe]]);
      }
      T.hasAttribute("id") && (S = Object.assign(S, F["#" + T.getAttribute("id")]));
      function A($, fe, q) {
        q === void 0 && (q = function(j) {
          return j.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), j;
        }), T.hasAttribute($) && (C[fe] = q(T.getAttribute($))), S[$] && (C[fe] = q(S[$])), T.style && T.style[$] !== "" && (C[fe] = q(T.style[$]));
      }
      function U($) {
        return Math.max(0, Math.min(1, x($)));
      }
      function Z($) {
        return Math.max(0, x($));
      }
      return A("fill", "fill"), A("fill-opacity", "fillOpacity", U), A("fill-rule", "fillRule"), A("opacity", "opacity", U), A("stroke", "stroke"), A("stroke-opacity", "strokeOpacity", U), A("stroke-width", "strokeWidth", Z), A("stroke-linejoin", "strokeLineJoin"), A("stroke-linecap", "strokeLineCap"), A("stroke-miterlimit", "strokeMiterLimit", Z), A("visibility", "visibility"), C;
    }
    function g(T, C) {
      return T - (C - T);
    }
    function f(T, C, S) {
      if (typeof T != "string")
        throw new TypeError("Invalid input: " + typeof T);
      const A = {
        SEPARATOR: /[ \t\r\n\,.\-+]/,
        WHITESPACE: /[ \t\r\n]/,
        DIGIT: /[\d]/,
        SIGN: /[-+]/,
        POINT: /\./,
        COMMA: /,/,
        EXP: /e/i,
        FLAGS: /[01]/
      }, U = 0, Z = 1, $ = 2, fe = 3;
      let q = U, K = !0, j = "", se = "";
      const le = [];
      function _e(Ae, N, I) {
        const oe = new SyntaxError('Unexpected character "' + Ae + '" at index ' + N + ".");
        throw oe.partial = I, oe;
      }
      function Y() {
        j !== "" && (se === "" ? le.push(Number(j)) : le.push(Number(j) * Math.pow(10, Number(se)))), j = "", se = "";
      }
      let O;
      const Se = T.length;
      for (let Ae = 0; Ae < Se; Ae++) {
        if (O = T[Ae], Array.isArray(C) && C.includes(le.length % S) && A.FLAGS.test(O)) {
          q = Z, j = O, Y();
          continue;
        }
        if (q === U) {
          if (A.WHITESPACE.test(O))
            continue;
          if (A.DIGIT.test(O) || A.SIGN.test(O)) {
            q = Z, j = O;
            continue;
          }
          if (A.POINT.test(O)) {
            q = $, j = O;
            continue;
          }
          A.COMMA.test(O) && (K && _e(O, Ae, le), K = !0);
        }
        if (q === Z) {
          if (A.DIGIT.test(O)) {
            j += O;
            continue;
          }
          if (A.POINT.test(O)) {
            j += O, q = $;
            continue;
          }
          if (A.EXP.test(O)) {
            q = fe;
            continue;
          }
          A.SIGN.test(O) && j.length === 1 && A.SIGN.test(j[0]) && _e(O, Ae, le);
        }
        if (q === $) {
          if (A.DIGIT.test(O)) {
            j += O;
            continue;
          }
          if (A.EXP.test(O)) {
            q = fe;
            continue;
          }
          A.POINT.test(O) && j[j.length - 1] === "." && _e(O, Ae, le);
        }
        if (q === fe) {
          if (A.DIGIT.test(O)) {
            se += O;
            continue;
          }
          if (A.SIGN.test(O)) {
            if (se === "") {
              se += O;
              continue;
            }
            se.length === 1 && A.SIGN.test(se) && _e(O, Ae, le);
          }
        }
        A.WHITESPACE.test(O) ? (Y(), q = U, K = !1) : A.COMMA.test(O) ? (Y(), q = U, K = !0) : A.SIGN.test(O) ? (Y(), q = Z, j = O) : A.POINT.test(O) ? (Y(), q = $, j = O) : _e(O, Ae, le);
      }
      return Y(), le;
    }
    const v = ["mm", "cm", "in", "pt", "pc", "px"], w = {
      mm: {
        mm: 1,
        cm: 0.1,
        in: 1 / 25.4,
        pt: 72 / 25.4,
        pc: 6 / 25.4,
        px: -1
      },
      cm: {
        mm: 10,
        cm: 1,
        in: 1 / 2.54,
        pt: 72 / 2.54,
        pc: 6 / 2.54,
        px: -1
      },
      in: {
        mm: 25.4,
        cm: 2.54,
        in: 1,
        pt: 72,
        pc: 6,
        px: -1
      },
      pt: {
        mm: 25.4 / 72,
        cm: 2.54 / 72,
        in: 1 / 72,
        pt: 1,
        pc: 6 / 72,
        px: -1
      },
      pc: {
        mm: 25.4 / 6,
        cm: 2.54 / 6,
        in: 1 / 6,
        pt: 72 / 6,
        pc: 1,
        px: -1
      },
      px: {
        px: 1
      }
    };
    function x(T) {
      let C = "px";
      if (typeof T == "string" || T instanceof String)
        for (let A = 0, U = v.length; A < U; A++) {
          const Z = v[A];
          if (T.endsWith(Z)) {
            C = Z, T = T.substring(0, T.length - Z.length);
            break;
          }
        }
      let S;
      return C === "px" && t.defaultUnit !== "px" ? S = w.in[t.defaultUnit] / t.defaultDPI : (S = w[C][t.defaultUnit], S < 0 && (S = w[C].in * t.defaultDPI)), S * parseFloat(T);
    }
    function _(T) {
      if (!(T.hasAttribute("transform") || T.nodeName === "use" && (T.hasAttribute("x") || T.hasAttribute("y"))))
        return null;
      const C = y(T);
      return k.length > 0 && C.premultiply(k[k.length - 1]), ne.copy(C), k.push(C), C;
    }
    function y(T) {
      const C = new _t(), S = D;
      if (T.nodeName === "use" && (T.hasAttribute("x") || T.hasAttribute("y"))) {
        const A = x(T.getAttribute("x")), U = x(T.getAttribute("y"));
        C.translate(A, U);
      }
      if (T.hasAttribute("transform")) {
        const A = T.getAttribute("transform").split(")");
        for (let U = A.length - 1; U >= 0; U--) {
          const Z = A[U].trim();
          if (Z === "")
            continue;
          const $ = Z.indexOf("("), fe = Z.length;
          if ($ > 0 && $ < fe) {
            const q = Z.slice(0, $), K = f(Z.slice($ + 1));
            switch (S.identity(), q) {
              case "translate":
                if (K.length >= 1) {
                  const j = K[0];
                  let se = 0;
                  K.length >= 2 && (se = K[1]), S.translate(j, se);
                }
                break;
              case "rotate":
                if (K.length >= 1) {
                  let j = 0, se = 0, le = 0;
                  j = K[0] * Math.PI / 180, K.length >= 3 && (se = K[1], le = K[2]), G.makeTranslation(-se, -le), E.makeRotation(j), M.multiplyMatrices(E, G), G.makeTranslation(se, le), S.multiplyMatrices(G, M);
                }
                break;
              case "scale":
                if (K.length >= 1) {
                  const j = K[0];
                  let se = j;
                  K.length >= 2 && (se = K[1]), S.scale(j, se);
                }
                break;
              case "skewX":
                K.length === 1 && S.set(
                  1,
                  Math.tan(K[0] * Math.PI / 180),
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  1
                );
                break;
              case "skewY":
                K.length === 1 && S.set(
                  1,
                  0,
                  0,
                  Math.tan(K[0] * Math.PI / 180),
                  1,
                  0,
                  0,
                  0,
                  1
                );
                break;
              case "matrix":
                K.length === 6 && S.set(
                  K[0],
                  K[2],
                  K[4],
                  K[1],
                  K[3],
                  K[5],
                  0,
                  0,
                  1
                );
                break;
            }
          }
          C.premultiply(S);
        }
      }
      return C;
    }
    function P(T, C) {
      function S($) {
        ee.set($.x, $.y, 1).applyMatrix3(C), $.set(ee.x, ee.y);
      }
      function A($) {
        const fe = $.xRadius, q = $.yRadius, K = Math.cos($.aRotation), j = Math.sin($.aRotation), se = new J(fe * K, fe * j, 0), le = new J(-q * j, q * K, 0), _e = se.applyMatrix3(C), Y = le.applyMatrix3(C), O = D.set(
          _e.x,
          Y.x,
          0,
          _e.y,
          Y.y,
          0,
          0,
          0,
          1
        ), Se = G.copy(O).invert(), I = E.copy(Se).transpose().multiply(Se).elements, oe = W(I[0], I[1], I[4]), me = Math.sqrt(oe.rt1), ve = Math.sqrt(oe.rt2);
        if ($.xRadius = 1 / me, $.yRadius = 1 / ve, $.aRotation = Math.atan2(oe.sn, oe.cs), !(($.aEndAngle - $.aStartAngle) % (2 * Math.PI) < Number.EPSILON)) {
          const Me = G.set(
            me,
            0,
            0,
            0,
            ve,
            0,
            0,
            0,
            1
          ), H = E.set(
            oe.cs,
            oe.sn,
            0,
            -oe.sn,
            oe.cs,
            0,
            0,
            0,
            1
          ), re = Me.multiply(H).multiply(O), Ee = (Re) => {
            const { x: ze, y: Fe } = new J(Math.cos(Re), Math.sin(Re), 0).applyMatrix3(re);
            return Math.atan2(Fe, ze);
          };
          $.aStartAngle = Ee($.aStartAngle), $.aEndAngle = Ee($.aEndAngle), z(C) && ($.aClockwise = !$.aClockwise);
        }
      }
      function U($) {
        const fe = L(C), q = R(C);
        $.xRadius *= fe, $.yRadius *= q;
        const K = fe > Number.EPSILON ? Math.atan2(C.elements[1], C.elements[0]) : Math.atan2(-C.elements[3], C.elements[4]);
        $.aRotation += K, z(C) && ($.aStartAngle *= -1, $.aEndAngle *= -1, $.aClockwise = !$.aClockwise);
      }
      const Z = T.subPaths;
      for (let $ = 0, fe = Z.length; $ < fe; $++) {
        const K = Z[$].curves;
        for (let j = 0; j < K.length; j++) {
          const se = K[j];
          se.isLineCurve ? (S(se.v1), S(se.v2)) : se.isCubicBezierCurve ? (S(se.v0), S(se.v1), S(se.v2), S(se.v3)) : se.isQuadraticBezierCurve ? (S(se.v0), S(se.v1), S(se.v2)) : se.isEllipseCurve && (X.set(se.aX, se.aY), S(X), se.aX = X.x, se.aY = X.y, b(C) ? A(se) : U(se));
        }
      }
    }
    function z(T) {
      const C = T.elements;
      return C[0] * C[4] - C[1] * C[3] < 0;
    }
    function b(T) {
      const C = T.elements, S = C[0] * C[3] + C[1] * C[4];
      if (S === 0)
        return !1;
      const A = L(T), U = R(T);
      return Math.abs(S / (A * U)) > Number.EPSILON;
    }
    function L(T) {
      const C = T.elements;
      return Math.sqrt(C[0] * C[0] + C[1] * C[1]);
    }
    function R(T) {
      const C = T.elements;
      return Math.sqrt(C[3] * C[3] + C[4] * C[4]);
    }
    function W(T, C, S) {
      let A, U, Z, $, fe;
      const q = T + S, K = T - S, j = Math.sqrt(K * K + 4 * C * C);
      return q > 0 ? (A = 0.5 * (q + j), fe = 1 / A, U = T * fe * S - C * fe * C) : q < 0 ? U = 0.5 * (q - j) : (A = 0.5 * j, U = -0.5 * j), K > 0 ? Z = K + j : Z = K - j, Math.abs(Z) > 2 * Math.abs(C) ? (fe = -2 * C / Z, $ = 1 / Math.sqrt(1 + fe * fe), Z = fe * $) : Math.abs(C) === 0 ? (Z = 1, $ = 0) : (fe = -0.5 * Z / C, Z = 1 / Math.sqrt(1 + fe * fe), $ = fe * Z), K > 0 && (fe = Z, Z = -$, $ = fe), { rt1: A, rt2: U, cs: Z, sn: $ };
    }
    const V = [], F = {}, k = [], D = new _t(), G = new _t(), E = new _t(), M = new _t(), X = new ye(), ee = new J(), ne = new _t(), Q = new DOMParser().parseFromString(e, "image/svg+xml");
    return n(Q.documentElement, {
      fill: "#000",
      fillOpacity: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
      strokeLineJoin: "miter",
      strokeLineCap: "butt",
      strokeMiterLimit: 4
    }), { paths: V, xml: Q.documentElement };
  }
  static createShapes(e) {
    const n = {
      ORIGIN: 0,
      DESTINATION: 1,
      BETWEEN: 2,
      LEFT: 3,
      RIGHT: 4,
      BEHIND: 5,
      BEYOND: 6
    }, r = {
      loc: n.ORIGIN,
      t: 0
    };
    function s(g, f, v, w) {
      const x = g.x, _ = f.x, y = v.x, P = w.x, z = g.y, b = f.y, L = v.y, R = w.y, W = (P - y) * (z - L) - (R - L) * (x - y), V = (_ - x) * (z - L) - (b - z) * (x - y), F = (R - L) * (_ - x) - (P - y) * (b - z), k = W / F, D = V / F;
      if (F === 0 && W !== 0 || k <= 0 || k >= 1 || D < 0 || D > 1)
        return null;
      if (W === 0 && F === 0) {
        for (let G = 0; G < 2; G++)
          if (o(G === 0 ? v : w, g, f), r.loc == n.ORIGIN) {
            const E = G === 0 ? v : w;
            return { x: E.x, y: E.y, t: r.t };
          } else if (r.loc == n.BETWEEN) {
            const E = +(x + r.t * (_ - x)).toPrecision(10), M = +(z + r.t * (b - z)).toPrecision(10);
            return { x: E, y: M, t: r.t };
          }
        return null;
      } else {
        for (let M = 0; M < 2; M++)
          if (o(M === 0 ? v : w, g, f), r.loc == n.ORIGIN) {
            const X = M === 0 ? v : w;
            return { x: X.x, y: X.y, t: r.t };
          }
        const G = +(x + k * (_ - x)).toPrecision(10), E = +(z + k * (b - z)).toPrecision(10);
        return { x: G, y: E, t: k };
      }
    }
    function o(g, f, v) {
      const w = v.x - f.x, x = v.y - f.y, _ = g.x - f.x, y = g.y - f.y, P = w * y - _ * x;
      if (g.x === f.x && g.y === f.y) {
        r.loc = n.ORIGIN, r.t = 0;
        return;
      }
      if (g.x === v.x && g.y === v.y) {
        r.loc = n.DESTINATION, r.t = 1;
        return;
      }
      if (P < -Number.EPSILON) {
        r.loc = n.LEFT;
        return;
      }
      if (P > Number.EPSILON) {
        r.loc = n.RIGHT;
        return;
      }
      if (w * _ < 0 || x * y < 0) {
        r.loc = n.BEHIND;
        return;
      }
      if (Math.sqrt(w * w + x * x) < Math.sqrt(_ * _ + y * y)) {
        r.loc = n.BEYOND;
        return;
      }
      let z;
      w !== 0 ? z = _ / w : z = y / x, r.loc = n.BETWEEN, r.t = z;
    }
    function a(g, f) {
      const v = [], w = [];
      for (let x = 1; x < g.length; x++) {
        const _ = g[x - 1], y = g[x];
        for (let P = 1; P < f.length; P++) {
          const z = f[P - 1], b = f[P], L = s(_, y, z, b);
          L !== null && v.find((R) => R.t <= L.t + Number.EPSILON && R.t >= L.t - Number.EPSILON) === void 0 && (v.push(L), w.push(new ye(L.x, L.y)));
        }
      }
      return w;
    }
    function c(g, f, v) {
      const w = new ye();
      f.getCenter(w);
      const x = [];
      return v.forEach((_) => {
        _.boundingBox.containsPoint(w) && a(g, _.points).forEach((P) => {
          x.push({ identifier: _.identifier, isCW: _.isCW, point: P });
        });
      }), x.sort((_, y) => _.point.x - y.point.x), x;
    }
    function l(g, f, v, w, x) {
      (x == null || x === "") && (x = "nonzero");
      const _ = new ye();
      g.boundingBox.getCenter(_);
      const y = [new ye(v, _.y), new ye(w, _.y)], P = c(y, g.boundingBox, f);
      P.sort((V, F) => V.point.x - F.point.x);
      const z = [], b = [];
      P.forEach((V) => {
        V.identifier === g.identifier ? z.push(V) : b.push(V);
      });
      const L = z[0].point.x, R = [];
      let W = 0;
      for (; W < b.length && b[W].point.x < L; )
        R.length > 0 && R[R.length - 1] === b[W].identifier ? R.pop() : R.push(b[W].identifier), W++;
      if (R.push(g.identifier), x === "evenodd") {
        const V = R.length % 2 === 0, F = R[R.length - 2];
        return { identifier: g.identifier, isHole: V, for: F };
      } else if (x === "nonzero") {
        let V = !0, F = null, k = null;
        for (let D = 0; D < R.length; D++) {
          const G = R[D];
          V ? (k = f[G].isCW, V = !1, F = G) : k !== f[G].isCW && (k = f[G].isCW, V = !0);
        }
        return { identifier: g.identifier, isHole: V, for: F };
      } else
        console.warn('fill-rule: "' + x + '" is currently not implemented.');
    }
    let h = 999999999, u = -999999999, d = e.subPaths.map((g) => {
      const f = g.getPoints();
      let v = -999999999, w = 999999999, x = -999999999, _ = 999999999;
      for (let y = 0; y < f.length; y++) {
        const P = f[y];
        P.y > v && (v = P.y), P.y < w && (w = P.y), P.x > x && (x = P.x), P.x < _ && (_ = P.x);
      }
      return u <= x && (u = x + 1), h >= _ && (h = _ - 1), { curves: g.curves, points: f, isCW: pi.isClockWise(f), identifier: -1, boundingBox: new nx(new ye(_, w), new ye(x, v)) };
    });
    d = d.filter((g) => g.points.length > 1);
    for (let g = 0; g < d.length; g++)
      d[g].identifier = g;
    const p = d.map((g) => l(g, d, h, u, e.userData?.style.fillRule)), m = [];
    return d.forEach((g) => {
      if (!p[g.identifier].isHole) {
        const v = new rn();
        v.curves = g.curves, p.filter((x) => x.isHole && x.for === g.identifier).forEach((x) => {
          const _ = d[x.identifier], y = new Xi();
          y.curves = _.curves, v.holes.push(y);
        }), m.push(v);
      }
    }), m;
  }
  static getStrokeStyle(e, t, n, r, s) {
    return e = e !== void 0 ? e : 1, t = t !== void 0 ? t : "#000", n = n !== void 0 ? n : "miter", r = r !== void 0 ? r : "butt", s = s !== void 0 ? s : 4, {
      strokeColor: t,
      strokeWidth: e,
      strokeLineJoin: n,
      strokeLineCap: r,
      strokeMiterLimit: s
    };
  }
  static pointsToStroke(e, t, n, r) {
    const s = [], o = [], a = [];
    if (ba.pointsToStrokeWithBuffers(e, t, n, r, s, o, a) === 0)
      return null;
    const c = new on();
    return c.setAttribute("position", new Tt(s, 3)), c.setAttribute("normal", new Tt(o, 3)), c.setAttribute("uv", new Tt(a, 2)), c;
  }
  static pointsToStrokeWithBuffers(e, t, n, r, s, o, a, c) {
    const l = new ye(), h = new ye(), u = new ye(), d = new ye(), p = new ye(), m = new ye(), g = new ye(), f = new ye(), v = new ye(), w = new ye(), x = new ye(), _ = new ye(), y = new ye(), P = new ye(), z = new ye(), b = new ye(), L = new ye();
    n = n !== void 0 ? n : 12, r = r !== void 0 ? r : 1e-3, c = c !== void 0 ? c : 0, e = K(e);
    const R = e.length;
    if (R < 2)
      return 0;
    const W = e[0].equals(e[R - 1]);
    let V, F = e[0], k;
    const D = t.strokeWidth / 2, G = 1 / (R - 1);
    let E = 0, M, X, ee, ne, Q = !1, de = 0, T = c * 3, C = c * 2;
    S(e[0], e[1], l).multiplyScalar(D), f.copy(e[0]).sub(l), v.copy(e[0]).add(l), w.copy(f), x.copy(v);
    for (let j = 1; j < R; j++) {
      V = e[j], j === R - 1 ? W ? k = e[1] : k = void 0 : k = e[j + 1];
      const se = l;
      if (S(F, V, se), u.copy(se).multiplyScalar(D), _.copy(V).sub(u), y.copy(V).add(u), M = E + G, X = !1, k !== void 0) {
        S(V, k, h), u.copy(h).multiplyScalar(D), P.copy(V).sub(u), z.copy(V).add(u), ee = !0, u.subVectors(k, F), se.dot(u) < 0 && (ee = !1), j === 1 && (Q = ee), u.subVectors(k, V), u.normalize();
        const le = Math.abs(se.dot(u));
        if (le > Number.EPSILON) {
          const _e = D / le;
          u.multiplyScalar(-_e), d.subVectors(V, F), p.copy(d).setLength(_e).add(u), b.copy(p).negate();
          const Y = p.length(), O = d.length();
          d.divideScalar(O), m.subVectors(k, V);
          const Se = m.length();
          switch (m.divideScalar(Se), d.dot(b) < O && m.dot(b) < Se && (X = !0), L.copy(p).add(V), b.add(V), ne = !1, X ? ee ? (z.copy(b), y.copy(b)) : (P.copy(b), _.copy(b)) : Z(), t.strokeLineJoin) {
            case "bevel":
              $(ee, X, M);
              break;
            case "round":
              fe(ee, X), ee ? U(V, _, P, M, 0) : U(V, z, y, M, 1);
              break;
            case "miter":
            case "miter-clip":
            default:
              const Ae = D * t.strokeMiterLimit / Y;
              if (Ae < 1)
                if (t.strokeLineJoin !== "miter-clip") {
                  $(ee, X, M);
                  break;
                } else
                  fe(ee, X), ee ? (m.subVectors(L, _).multiplyScalar(Ae).add(_), g.subVectors(L, P).multiplyScalar(Ae).add(P), A(_, M, 0), A(m, M, 0), A(V, M, 0.5), A(V, M, 0.5), A(m, M, 0), A(g, M, 0), A(V, M, 0.5), A(g, M, 0), A(P, M, 0)) : (m.subVectors(L, y).multiplyScalar(Ae).add(y), g.subVectors(L, z).multiplyScalar(Ae).add(z), A(y, M, 1), A(m, M, 1), A(V, M, 0.5), A(V, M, 0.5), A(m, M, 1), A(g, M, 1), A(V, M, 0.5), A(g, M, 1), A(z, M, 1));
              else
                X ? (ee ? (A(v, E, 1), A(f, E, 0), A(L, M, 0), A(v, E, 1), A(L, M, 0), A(b, M, 1)) : (A(v, E, 1), A(f, E, 0), A(L, M, 1), A(f, E, 0), A(b, M, 0), A(L, M, 1)), ee ? P.copy(L) : z.copy(L)) : ee ? (A(_, M, 0), A(L, M, 0), A(V, M, 0.5), A(V, M, 0.5), A(L, M, 0), A(P, M, 0)) : (A(y, M, 1), A(L, M, 1), A(V, M, 0.5), A(V, M, 0.5), A(L, M, 1), A(z, M, 1)), ne = !0;
              break;
          }
        } else
          Z();
      } else
        Z();
      !W && j === R - 1 && q(e[0], w, x, ee, !0, E), E = M, F = V, f.copy(P), v.copy(z);
    }
    if (!W)
      q(V, _, y, ee, !1, M);
    else if (X && s) {
      let j = L, se = b;
      Q !== ee && (j = b, se = L), ee ? (ne || Q) && (se.toArray(s, 0 * 3), se.toArray(s, 3 * 3), ne && j.toArray(s, 1 * 3)) : (ne || !Q) && (se.toArray(s, 1 * 3), se.toArray(s, 3 * 3), ne && j.toArray(s, 0 * 3));
    }
    return de;
    function S(j, se, le) {
      return le.subVectors(se, j), le.set(-le.y, le.x).normalize();
    }
    function A(j, se, le) {
      s && (s[T] = j.x, s[T + 1] = j.y, s[T + 2] = 0, o && (o[T] = 0, o[T + 1] = 0, o[T + 2] = 1), T += 3, a && (a[C] = se, a[C + 1] = le, C += 2)), de += 3;
    }
    function U(j, se, le, _e, Y) {
      l.copy(se).sub(j).normalize(), h.copy(le).sub(j).normalize();
      let O = Math.PI;
      const Se = l.dot(h);
      Math.abs(Se) < 1 && (O = Math.abs(Math.acos(Se))), O /= n, u.copy(se);
      for (let Ae = 0, N = n - 1; Ae < N; Ae++)
        d.copy(u).rotateAround(j, O), A(u, _e, Y), A(d, _e, Y), A(j, _e, 0.5), u.copy(d);
      A(d, _e, Y), A(le, _e, Y), A(j, _e, 0.5);
    }
    function Z() {
      A(v, E, 1), A(f, E, 0), A(_, M, 0), A(v, E, 1), A(_, M, 1), A(y, M, 0);
    }
    function $(j, se, le) {
      se ? j ? (A(v, E, 1), A(f, E, 0), A(_, M, 0), A(v, E, 1), A(_, M, 0), A(b, M, 1), A(_, le, 0), A(P, le, 0), A(b, le, 0.5)) : (A(v, E, 1), A(f, E, 0), A(y, M, 1), A(f, E, 0), A(b, M, 0), A(y, M, 1), A(y, le, 1), A(z, le, 0), A(b, le, 0.5)) : j ? (A(_, le, 0), A(P, le, 0), A(V, le, 0.5)) : (A(y, le, 1), A(z, le, 0), A(V, le, 0.5));
    }
    function fe(j, se) {
      se && (j ? (A(v, E, 1), A(f, E, 0), A(_, M, 0), A(v, E, 1), A(_, M, 0), A(b, M, 1), A(_, E, 0), A(V, M, 0.5), A(b, M, 1), A(V, M, 0.5), A(P, E, 0), A(b, M, 1)) : (A(v, E, 1), A(f, E, 0), A(y, M, 1), A(f, E, 0), A(b, M, 0), A(y, M, 1), A(y, E, 1), A(b, M, 0), A(V, M, 0.5), A(V, M, 0.5), A(b, M, 0), A(z, E, 1)));
    }
    function q(j, se, le, _e, Y, O) {
      switch (t.strokeLineCap) {
        case "round":
          Y ? U(j, le, se, O, 0.5) : U(j, se, le, O, 0.5);
          break;
        case "square":
          if (Y)
            l.subVectors(se, j), h.set(l.y, -l.x), u.addVectors(l, h).add(j), d.subVectors(h, l).add(j), _e ? (u.toArray(s, 1 * 3), d.toArray(s, 0 * 3), d.toArray(s, 3 * 3)) : (u.toArray(s, 1 * 3), u.toArray(s, 3 * 3), d.toArray(s, 0 * 3));
          else {
            l.subVectors(le, j), h.set(l.y, -l.x), u.addVectors(l, h).add(j), d.subVectors(h, l).add(j);
            const Se = s.length;
            _e ? (u.toArray(s, Se - 1 * 3), d.toArray(s, Se - 2 * 3), d.toArray(s, Se - 4 * 3)) : (u.toArray(s, Se - 2 * 3), d.toArray(s, Se - 1 * 3), d.toArray(s, Se - 4 * 3));
          }
          break;
      }
    }
    function K(j) {
      let se = !1;
      for (let _e = 1, Y = j.length - 1; _e < Y; _e++)
        if (j[_e].distanceTo(j[_e + 1]) < r) {
          se = !0;
          break;
        }
      if (!se)
        return j;
      const le = [];
      le.push(j[0]);
      for (let _e = 1, Y = j.length - 1; _e < Y; _e++)
        j[_e].distanceTo(j[_e + 1]) >= r && le.push(j[_e]);
      return le.push(j[j.length - 1]), le;
    }
  }
}
const h1 = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="50.87159205mm"
   height="53.65397943mm"
   viewBox="0 0 50.87159205 53.65397943"
   version="1.1"
   id="svg184"
   sodipodi:docname="rail.svg"
   inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:lc="http://www.librecad.org">
  <path
     id="line180"
     style="fill:none;stroke:#000000"
     d="m 38.57159,4.9000001 h 0.800003 m -27.871593,0 h 0.8 M 41.771592,0.8 a 2.4,2.4 0 0 0 -2.4,2.4 m 2.399999,-2.39999999 h 5.900002 M 41.771591,0 h 5.900002 m -5.900001,0 a 3.2,3.2 0 0 0 -3.2,3.2 M 50.871593,37.294998 V 44.02 M 50.07159,37.294998 V 44.02 m 0.800003,-25.125 v 13 m -0.800003,-13 v 13 M 32.286345,53.653979 a 1.4,1.4 0 0 0 0.40932,-0.06117 m -0.40932,-0.73883 a 0.6,0.6 0 0 0 0.175423,-0.02622 m -0.175422,0.826221 h -6.850549 m 6.850549,-0.799999 h -6.850549 m 23.029859,-5.582546 -15.769989,6.321373 m 15.536091,-7.086415 -15.769989,6.32137 M 50.07159,3.2 V 13.495 M 50.871593,3.2 v 10.295 m -11.5,-8.5949999 V 3.2 M 38.57159,4.9000001 V 3.2 M 9.1000004,0 H 3.2 M 9.1000004,0.80000001 H 3.2 M 12.3,3.2 A 3.2,3.2 0 0 0 9.1,0 m 2.4,3.2 A 2.4,2.4 0 0 0 9.1,0.8 m 9.309824,52.027762 a 0.6,0.6 0 0 0 0.175423,0.02622 m -0.40932,0.738824 a 1.4,1.4 0 0 0 0.40932,0.06117 M 0.80000001,37.294998 V 44.02 M 0,37.294998 V 44.02 M 0.80000001,18.895 v 13 M 0,18.895 v 13 m 2.6398337,14.611393 15.7699903,6.32137 M 2.4059362,47.271435 18.175926,53.592808 M 12.3,4.9000001 V 3.2 M 11.5,4.9000001 V 3.2 M 0,3.2 V 13.495 M 0.80000001,3.2 V 13.495 M 18.585247,52.853981 h 6.85055 m -6.85055,0.799999 h 6.85055 m 24.498575,-37.748734 0.804974,-1.803469 m -0.8057,1.805084 a 0.7,0.7 0 0 0 0,0.576278 m 0.8057,1.805084 -0.804974,-1.803468 m -0.729808,-0.907196 a 1.5,1.5 0 0 0 0,1.234882 m 0.804248,1.801853 -0.804974,-1.803469 m 0,-1.231651 0.804974,-1.803469 m -0.07444,20.529539 0.804974,-1.803466 m 0,4.186447 -0.804974,-1.803471 m -7.26e-4,-0.577893 a 0.7,0.7 0 0 0 0,0.576278 m -0.729082,-0.90558 a 1.5,1.5 0 0 0 0,1.234882 m -7.26e-4,-1.233265 0.804974,-1.803471 m 0,4.838589 -0.804974,-1.803467 M 1.6677535,15.579174 0.86277878,13.775705 m 0.0751677,2.707434 a 0.7,0.7 0 0 0 0,-0.576278 m -0.0751677,2.707433 0.80497472,-1.803469 m -7.253e-4,0.0016 a 1.5,1.5 0 0 0 0,-1.234882 M 0.93722123,15.905246 0.13224657,14.101777 m 0,4.186446 0.80497466,-1.803468 M 0.86277878,37.014294 1.6677535,35.210827 m -7.253e-4,0.0016 a 1.5,1.5 0 0 0 0,-1.234882 m -0.72908172,0.90558 a 0.7,0.7 0 0 0 0,-0.576278 M 1.6677535,33.979176 0.86277878,32.175705 m -0.73053221,4.51252 0.80497466,-1.803471 m 0,-0.57951 -0.80497466,-1.803466 M 50.071592,3.2 a 2.4,2.4 0 0 0 -2.4,-2.4 m 3.2,2.4 a 3.2,3.2 0 0 0 -3.2,-3.2 m 3.067042,14.103361 a 1.5008812,1.5008812 0 0 0 0.132944,-0.604972 m -0.862054,0.275732 a 0.70088125,0.70088125 0 0 0 0.06208,-0.28251 m 0.799974,5.4 a 1.5008812,1.5008812 0 0 0 -0.132944,-0.604972 m -0.667028,0.61175 a 0.70088125,0.70088125 0 0 0 -0.06208,-0.28251 m 0.862052,18.675732 a 1.5008812,1.5008812 0 0 0 -0.132944,-0.604972 m 0,-4.183278 a 1.5008812,1.5008812 0 0 0 0.132944,-0.604972 m -0.799972,5.4 a 0.70088125,0.70088125 0 0 0 -0.06208,-0.28251 m -2e-6,-4.841758 a 0.70088125,0.70088125 0 0 0 0.06208,-0.28251 M 48.465656,47.271436 A 3.4,3.4 0 0 0 50.871592,44.02 m -2.639834,2.486392 A 2.6,2.6 0 0 0 50.071592,44.02 M 3.2,0 A 3.2,3.2 0 0 0 0,3.2 M 3.2,0.8 A 2.4,2.4 0 0 0 0.8,3.2 m -1.435e-5,10.291611 a 0.70088125,0.70088125 0 0 0 0.0620819,0.28251 m 0,4.841758 a 0.70088125,0.70088125 0 0 0 -0.0620819,0.28251 m -0.7999713,-5.4 a 1.5008812,1.5008812 0 0 0 0.13294344,0.604972 m 0,4.183278 A 1.5008812,1.5008812 0 0 0 1.435e-5,18.891611 m 0.7999713,13 a 0.70088125,0.70088125 0 0 0 0.0620819,0.28251 m 0,4.841758 a 0.70088125,0.70088125 0 0 0 -0.0620819,0.28251 m -0.7999713,-5.4 a 1.5008812,1.5008812 0 0 0 0.13294344,0.604972 m 0,4.183278 A 1.5008812,1.5008812 0 0 0 1.435e-5,37.291611 M 0.8,44.02 a 2.6,2.6 0 0 0 1.8398336,2.486392 M 0,44.02 a 3.4,3.4 0 0 0 2.4059362,3.251436" />
</svg>
`, d1 = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="68.6mm"
   height="46.00211506mm"
   viewBox="0 0 68.6 46.00211506"
   version="1.1"
   id="svg120"
   sodipodi:docname="post.svg"
   inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:lc="http://www.librecad.org">
  <path
     id="path116"
     style="fill:none;stroke:#000000;stroke-width:1"
     d="M 62.581736,10.0687 A 5.2,5.2 0 0 0 60.302119,0.01978757 M 62.300751,9.319669 A 4.4,4.4 0 0 0 60.371844,0.81674333 M 62.29861,9.3204814 A 4.05,4.05 0 0 0 59.7,13.101482 m 2.885304,-3.034136 A 3.25,3.25 0 0 0 60.5,13.101482 m 8.1,19.100633 A 4.8,4.8 0 0 0 67.268892,28.884467 M 67.8,32.202115 A 4,4 0 0 0 66.690743,29.437408 M 63.8,46.002115 a 4.8,4.8 0 0 0 4.8,-4.8 m -4.8,4 a 4,4 0 0 0 4,-4 m 0.799998,-10e-7 v -9 m -0.799995,9 v -9 M 59.7,20.202115 a 4.8,4.8 0 0 0 1.331108,3.317648 M 60.5,20.202115 a 4,4 0 0 0 1.109257,2.764707 m -9.770304,21.944384 a 4,4 0 0 0 -5.077906,0 m 5.585696,-0.618182 a 4.8,4.8 0 0 0 -6.093486,0 m 5.585696,0.618182 a 4.8,4.8 0 0 0 3.046743,1.090909 m -2.538953,-1.709091 a 4,4 0 0 0 2.538953,0.909091 m 8.914303,0.799998 h -8.914303 m 8.914303,-0.799999 H 54.885696 M 67.26889,28.884466 61.609257,22.966822 m 5.081485,6.470586 -5.659633,-5.917644 M 60.5,20.202116 v -7.100634 m -0.799999,7.100634 V 13.101482 M 43.714306,46.002113 h -9.414307 m 9.414307,-0.799999 h -9.414307 m -11.953256,-0.90909 a 4,4 0 0 0 2.538953,0.909091 m -3.046743,-0.290909 a 4.8,4.8 0 0 0 3.046743,1.090909 m -11.171392,-0.8 a 4,4 0 0 0 2.538953,-0.909091 m -2.538953,1.709091 a 4.8,4.8 0 0 0 3.046743,-1.090909 m 5.585696,-0.618182 a 4.8,4.8 0 0 0 -6.093486,0 m 5.585696,0.618182 a 4,4 0 0 0 -5.077906,0 m 8.124649,0.290908 h 9.414303 m -9.414303,0.799999 h 9.414303 m 9.414305,2e-6 a 4.8,4.8 0 0 0 3.046743,-1.090909 m -3.046743,0.290909 a 4,4 0 0 0 2.538953,-0.909091 M 8.1,13.101482 A 3.25,3.25 0 0 0 6.0146958,10.067346 M 8.9,13.101482 A 4.05,4.05 0 0 0 6.3013902,9.3204814 M 8.2281561,0.81674333 A 4.4,4.4 0 0 0 6.2992494,9.319669 M 8.2978807,0.01978757 A 5.2,5.2 0 0 0 6.0182637,10.0687 M 6.9907434,22.966822 A 4,4 0 0 0 8.1,20.202115 M 7.568892,23.519763 A 4.8,4.8 0 0 0 8.9,20.202115 M 1.9092566,29.437408 A 4,4 0 0 0 0.8,32.202115 M 1.331108,28.884467 A 4.8,4.8 0 0 0 0,32.202115 m 0.8,9 a 4,4 0 0 0 4,4 m -4.8,-4 a 4.8,4.8 0 0 0 4.8,4.8 M 0.80000001,41.202114 v -9 M 0,41.202114 v -9 M 1.9092566,29.437408 7.568892,23.519764 M 1.331108,28.884466 6.9907432,22.966822 M 8.8999996,20.202116 V 13.101482 M 8.1000004,20.202116 V 13.101482 M 4.8000002,45.202114 H 13.714304 M 4.8000002,46.002113 H 13.714304 M 60.371845,0.81674331 60.30212,0.01978757 M 8.2281561,0.81674331 8.2978811,0.01978757" />
</svg>
`, u1 = "data:text/svg;base64," + window.btoa(h1), f1 = "data:text/svg;base64," + window.btoa(d1);
let oc = new ba(), xh = [], yh = [], [p1, g1] = Ut(!1), ds = p1;
(async () => (xh = (await oc.loadAsync(u1)).paths.flatMap((t) => t.toShapes(!0)), yh = (await oc.loadAsync(f1)).paths.flatMap((t) => t.toShapes(!0)), g1(!0)))();
function ac(i) {
  let e = new fn(
    xh,
    {
      depth: i,
      bevelEnabled: !1
    }
  ), t = 1e-3;
  e.scale(t, t, t), e.rotateY(-0.5 * Math.PI), e.rotateX(-0.5 * Math.PI);
  const n = e.attributes.position;
  let r;
  for (let s = 0; s < n.array.length; s += 3) {
    let o = n.array[s + 2];
    (r == null || o < r) && (r = o);
  }
  return r != null && e.translate(i * t, 0, -r), e;
}
function lc(i) {
  let e = new fn(
    yh,
    {
      depth: i,
      bevelEnabled: !1
    }
  ), t = 1e-3;
  e.scale(t, t, t), e.rotateY(-0.5 * Math.PI), e.rotateX(-0.5 * Math.PI);
  const n = e.attributes.position;
  let r;
  for (let s = 0; s < n.array.length; s += 3) {
    let o = n.array[s + 2];
    (r == null || o < r) && (r = o);
  }
  return r != null && e.translate(i * t, 0, -r), e;
}
function m1() {
  let i = 28, e = 762, t = 4, n = e / t, r = i, s = i, o = 5, a = 5, c = (n - 2 * r - 2 * o) / 4, l = c, h = c, u = c, d = c, p = o, m = a, g = r, f = s, v = [
    { x: 0, y: i }
  ], w = (x, _) => {
    let y = v[v.length - 1];
    v.push({
      x: y.x + x,
      y: y.y + _
    });
  };
  for (let x = 0; x < t; ++x)
    w(l, 0), w(r, -s), w(h, 0), w(o, o), w(u, 0), w(p, -m), w(d, 0), w(g, f);
  return v;
}
const x1 = m1();
function y1() {
  let i = 16, e = [], t = 762, n = 10, r = 8;
  for (let s = 0; s < n; ++s) {
    let o = t * s / n;
    for (let a = 0; a < r; ++a) {
      let c = o + t / n * a / r, l = 2 * Math.PI * a / r, h = Math.sin(l);
      e.push({
        x: c,
        y: 0.5 * (i + i * h)
      });
    }
  }
  return e;
}
const _1 = y1();
function v1() {
  let i = 27, e = 7, t = 4, n = 14, r = 6, s = 4, o = 27, a = 7, c = 14, l = 20, h = [
    { x: 0, y: 0 }
  ], u = (m, g) => {
    let f = h[h.length - 1];
    h.push({
      x: f.x + m,
      y: f.y + g
    });
  }, d = 6;
  for (let m = 0; m < d; ++m)
    u(i, e), u(t, 0), u(n, r), u(s, 0), u(o, a), u(c, -l);
  let p = 762 / h[h.length - 1].x;
  for (let m = 0; m < h.length; ++m)
    h[m].x *= p;
  return h;
}
const b1 = v1();
function S1() {
  let i = 14, e = 19, t = 55, n = 14, r = 19, s = 55, o = [
    { x: 0, y: e }
  ], a = (h, u) => {
    let d = o[o.length - 1];
    o.push({
      x: d.x + h,
      y: d.y + u
    });
  }, c = 4;
  for (let h = 0; h < c; ++h)
    a(i, -e), a(t, 0), a(n, r), a(s, 0);
  let l = 762 / o[o.length - 1].x;
  for (let h = 0; h < o.length; ++h)
    o[h].x *= l;
  return o;
}
const w1 = S1();
class No {
  constructor(e) {
    this.top = 0, this.array = new Float32Array(e);
  }
  write(e) {
    this.array[this.top++] = e.x, this.array[this.top++] = e.y, this.array[this.top++] = e.z;
  }
}
class M1 {
  constructor(e) {
    this.top = 0, this.array = new Float32Array(e);
  }
  write(e) {
    this.array[this.top++] = e.x, this.array[this.top++] = e.y;
  }
}
let On = class {
  constructor(e) {
    this.plane = null, this.front = null, this.back = null, this.polygons = [], e && this.build(e);
  }
  clone() {
    const e = new On();
    return e.plane = this.plane && this.plane.clone(), e.front = this.front && this.front.clone(), e.back = this.back && this.back.clone(), e.polygons = this.polygons.map((t) => t.clone()), e;
  }
  // Convert solid space to empty space and empty space to solid space.
  invert() {
    for (let t = 0; t < this.polygons.length; t++)
      this.polygons[t].flip();
    this.plane && this.plane.flip(), this.front && this.front.invert(), this.back && this.back.invert();
    const e = this.front;
    this.front = this.back, this.back = e;
  }
  // Recursively remove all polygons in `polygons` that are inside this BSP
  // tree.
  clipPolygons(e) {
    if (!this.plane)
      return e.slice();
    let t = new Array(), n = new Array();
    for (let r = 0; r < e.length; r++)
      this.plane.splitPolygon(e[r], t, n, t, n);
    return this.front && (t = this.front.clipPolygons(t)), this.back ? n = this.back.clipPolygons(n) : n = [], t.concat(n);
  }
  // Remove all polygons in this BSP tree that are inside the other BSP tree
  // `bsp`.
  clipTo(e) {
    this.polygons = e.clipPolygons(this.polygons), this.front && this.front.clipTo(e), this.back && this.back.clipTo(e);
  }
  // Return a list of all polygons in this BSP tree.
  allPolygons() {
    let e = this.polygons.slice();
    return this.front && (e = e.concat(this.front.allPolygons())), this.back && (e = e.concat(this.back.allPolygons())), e;
  }
  // Build a BSP tree out of `polygons`. When called on an existing tree, the
  // new polygons are filtered down to the bottom of the tree and become new
  // nodes there. Each set of polygons is partitioned using the first polygon
  // (no heuristic is used to pick a good split).
  build(e) {
    if (!e.length)
      return;
    this.plane || (this.plane = e[0].plane.clone());
    const t = [], n = [];
    for (let r = 0; r < e.length; r++)
      this.plane.splitPolygon(e[r], this.polygons, this.polygons, t, n);
    t.length && (this.front || (this.front = new On()), this.front.build(t)), n.length && (this.back || (this.back = new On()), this.back.build(n));
  }
};
class Vt {
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  clone() {
    return new Vt(this.x, this.y, this.z);
  }
  negate() {
    return this.x *= -1, this.y *= -1, this.z *= -1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  times(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  dividedBy(e) {
    return this.x /= e, this.y /= e, this.z /= e, this;
  }
  lerp(e, t) {
    return this.add(new Vt().copy(e).sub(this).times(t));
  }
  unit() {
    return this.dividedBy(this.length());
  }
  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
  }
  normalize() {
    return this.unit();
  }
  cross(e) {
    const t = this.clone(), n = t.x, r = t.y, s = t.z, o = e.x, a = e.y, c = e.z;
    return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  toVector3() {
    return new J(this.x, this.y, this.z);
  }
}
class ci {
  constructor(e, t) {
    this.normal = e, this.w = t, this.normal = e, this.w = t;
  }
  clone() {
    return new ci(this.normal.clone(), this.w);
  }
  flip() {
    this.normal.negate(), this.w = -this.w;
  }
  // Split `polygon` by this plane if needed, then put the polygon or polygon
  // fragments in the appropriate lists. Coplanar polygons go into either
  // `coplanarFront` or `coplanarBack` depending on their orientation with
  // respect to this plane. Polygons in front or in back of this plane go into
  // either `front` or `back`.
  splitPolygon(e, t, n, r, s) {
    let h = 0;
    const u = [];
    for (let d = 0; d < e.vertices.length; d++) {
      const p = this.normal.dot(e.vertices[d].pos) - this.w, m = p < -ci.EPSILON ? 2 : p > ci.EPSILON ? 1 : 0;
      h |= m, u.push(m);
    }
    switch (h) {
      case 0:
        (this.normal.dot(e.plane.normal) > 0 ? t : n).push(e);
        break;
      case 1:
        r.push(e);
        break;
      case 2:
        s.push(e);
        break;
      case 3: {
        const d = [], p = [];
        for (let m = 0; m < e.vertices.length; m++) {
          const g = (m + 1) % e.vertices.length, f = u[m], v = u[g], w = e.vertices[m], x = e.vertices[g];
          if (f != 2 && d.push(w), f != 1 && p.push(f != 2 ? w.clone() : w), (f | v) == 3) {
            const _ = (this.w - this.normal.dot(w.pos)) / this.normal.dot(new Vt().copy(x.pos).sub(w.pos)), y = w.interpolate(x, _);
            d.push(y), p.push(y.clone());
          }
        }
        d.length >= 3 && r.push(new Ki(d, e.shared)), p.length >= 3 && s.push(new Ki(p, e.shared));
        break;
      }
    }
  }
  static fromPoints(e, t, n) {
    const r = new Vt().copy(t).sub(e).cross(new Vt().copy(n).sub(e)).normalize();
    return new ci(r.clone(), r.dot(e));
  }
}
ci.EPSILON = 1e-5;
class Ki {
  constructor(e, t) {
    this.vertices = e, this.shared = t, this.plane = ci.fromPoints(e[0].pos, e[1].pos, e[2].pos);
  }
  clone() {
    return new Ki(this.vertices.map((e) => e.clone()), this.shared);
  }
  flip() {
    this.vertices.reverse().map((e) => e.flip()), this.plane.flip();
  }
}
class As {
  constructor(e, t, n, r) {
    this.pos = new Vt().copy(e), this.normal = new Vt().copy(t), this.uv = new Vt().copy(n), this.uv.z = 0, r && (this.color = new Vt().copy(r));
  }
  clone() {
    return new As(this.pos, this.normal, this.uv, this.color);
  }
  // Invert all orientation-specific data (e.g. vertex normal). Called when the
  // orientation of a polygon is flipped.
  flip() {
    this.normal.negate();
  }
  // Create a new vertex between this vertex and `other` by linearly
  // interpolating all properties using a parameter of `t`. Subclasses should
  // override this to interpolate additional properties.
  interpolate(e, t) {
    return new As(this.pos.clone().lerp(e.pos, t), this.normal.clone().lerp(e.normal, t), this.uv.clone().lerp(e.uv, t), this.color && e.color && this.color.clone().lerp(e.color, t));
  }
}
class ct {
  constructor() {
    this.polygons = new Array();
  }
  static fromPolygons(e) {
    const t = new ct();
    return t.polygons = e, t;
  }
  static fromGeometry(e, t) {
    let n = [];
    const r = e.attributes.position, s = e.attributes.normal, o = e.attributes.uv, a = e.attributes.color, c = e.groups;
    let l;
    if (e.index)
      l = e.index.array;
    else {
      l = new Array(r.array.length / r.itemSize | 0);
      for (let u = 0; u < l.length; u++)
        l[u] = u;
    }
    const h = l.length / 3 | 0;
    n = new Array(h);
    for (let u = 0, d = 0, p = l.length; u < p; u += 3, d++) {
      const m = new Array(3);
      for (let g = 0; g < 3; g++) {
        const f = l[u + g], v = f * 3, w = f * 2, x = r.array[v], _ = r.array[v + 1], y = r.array[v + 2], P = s.array[v], z = s.array[v + 1], b = s.array[v + 2], L = o?.array[w], R = o?.array[w + 1];
        m[g] = new As(new Vt(x, _, y), new Vt(P, z, b), new Vt(L, R, 0), a && new Vt(a.array[w], a.array[w + 1], a.array[w + 2]));
      }
      if (t === void 0 && c && c.length > 0)
        for (const g of c)
          u >= g.start && u < g.start + g.count && (n[d] = new Ki(m, g.materialIndex));
      else
        n[d] = new Ki(m, t);
    }
    return ct.fromPolygons(n.filter((u) => !isNaN(u.plane.normal.x)));
  }
  static toGeometry(e, t) {
    let n = 0;
    const r = e.polygons;
    for (const p of r)
      n += p.vertices.length - 2;
    const s = new on(), o = new No(n * 3 * 3), a = new No(n * 3 * 3), c = new M1(n * 2 * 3);
    let l;
    const h = [], u = [];
    for (const p of r) {
      const m = p.vertices, g = m.length;
      p.shared !== void 0 && (h[p.shared] || (h[p.shared] = [])), g && m[0].color !== void 0 && (l || (l = new No(n * 3 * 3)));
      for (let f = 3; f <= g; f++)
        (p.shared === void 0 ? u : h[p.shared]).push(o.top / 3, o.top / 3 + 1, o.top / 3 + 2), o.write(m[0].pos), o.write(m[f - 2].pos), o.write(m[f - 1].pos), a.write(m[0].normal), a.write(m[f - 2].normal), a.write(m[f - 1].normal), c && (c.write(m[0].uv), c.write(m[f - 2].uv), c.write(m[f - 1].uv)), l && (l.write(m[0].color), l.write(m[f - 2].color), l.write(m[f - 1].color));
    }
    s.setAttribute("position", new Ht(o.array, 3)), s.setAttribute("normal", new Ht(a.array, 3)), c && s.setAttribute("uv", new Ht(c.array, 2)), l && s.setAttribute("color", new Ht(l.array, 3));
    for (let p = 0; p < h.length; p++)
      h[p] === void 0 && (h[p] = []);
    if (h.length) {
      let p = [], m = 0;
      for (let g = 0; g < h.length; g++)
        s.addGroup(m, h[g].length, g), m += h[g].length, p = p.concat(h[g]);
      s.addGroup(m, u.length, h.length), p = p.concat(u), s.setIndex(p);
    }
    const d = new ut().copy(t).invert();
    return s.applyMatrix4(d), s.computeBoundingSphere(), s.computeBoundingBox(), s;
  }
  static fromMesh(e, t) {
    const n = ct.fromGeometry(e.geometry, t), r = new J(), s = new _t();
    s.getNormalMatrix(e.matrix);
    for (let o = 0; o < n.polygons.length; o++) {
      const a = n.polygons[o];
      for (let c = 0; c < a.vertices.length; c++) {
        const l = a.vertices[c];
        l.pos.copy(r.copy(l.pos.toVector3()).applyMatrix4(e.matrix)), l.normal.copy(r.copy(l.normal.toVector3()).applyMatrix3(s));
      }
    }
    return n;
  }
  static toMesh(e, t, n) {
    const r = ct.toGeometry(e, t), s = new Ye(r, n);
    return s.matrix.copy(t), s.matrix.decompose(s.position, s.quaternion, s.scale), s.rotation.setFromQuaternion(s.quaternion), s.updateMatrixWorld(), s.castShadow = s.receiveShadow = !0, s;
  }
  static union(e, t) {
    const n = ct.fromMesh(e), r = ct.fromMesh(t);
    return ct.toMesh(n.union(r), e.matrix, e.material);
  }
  static subtract(e, t) {
    const n = ct.fromMesh(e), r = ct.fromMesh(t);
    return ct.toMesh(n.subtract(r), e.matrix, e.material);
  }
  static intersect(e, t) {
    const n = ct.fromMesh(e), r = ct.fromMesh(t);
    return ct.toMesh(n.intersect(r), e.matrix, e.material);
  }
  clone() {
    const e = new ct();
    return e.polygons = this.polygons.map((t) => t.clone()).filter((t) => Number.isFinite(t.plane.w)), e;
  }
  toPolygons() {
    return this.polygons;
  }
  union(e) {
    const t = new On(this.clone().polygons), n = new On(e.clone().polygons);
    return t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), ct.fromPolygons(t.allPolygons());
  }
  subtract(e) {
    const t = new On(this.clone().polygons), n = new On(e.clone().polygons);
    return t.invert(), t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), t.invert(), ct.fromPolygons(t.allPolygons());
  }
  intersect(e) {
    const t = new On(this.clone().polygons), n = new On(e.clone().polygons);
    return t.invert(), n.clipTo(t), n.invert(), t.clipTo(n), n.clipTo(t), t.build(n.allPolygons()), t.invert(), ct.fromPolygons(t.allPolygons());
  }
  // Return a new CSG solid with solid and empty space switched. This solid is
  // not modified.
  inverse() {
    const e = this.clone();
    for (const t of e.polygons)
      t.flip();
    return e;
  }
  toMesh(e, t) {
    return ct.toMesh(this, e, t);
  }
  toGeometry(e) {
    return ct.toGeometry(this, e);
  }
}
class C1 {
  components;
  fullSheetedAreaMesh;
  constructor(e) {
    let t = te(() => {
      let x, _, y, P;
      for (let z of e.outline())
        (x == null || z.x < x) && (x = z.x), (_ == null || z.x > _) && (_ = z.x), (y == null || z.y < y) && (y = z.y), (P == null || z.y > P) && (P = z.y);
      if (!(x == null || _ == null || y == null || P == null))
        return {
          minX: x,
          minY: y,
          maxX: _,
          maxY: P
        };
    }), n = te(() => {
      let x = 0;
      for (let y = 0; y < e.outline().length; ++y) {
        let P = e.outline()[y], z = e.outline()[(y + 1) % e.outline().length];
        x += P.cross(z);
      }
      return Math.abs(0.5 * x);
    }), r = (x, _) => {
      _.minY = void 0, _.maxY = void 0;
      let y = e.outline();
      for (let P = 0; P < y.length; ++P) {
        let z = y[P], b = y[(P + 1) % y.length], L = Math.min(z.x, b.x), R = Math.max(z.x, b.x);
        if (L <= x && x <= R) {
          let W = b.x - z.x, V = b.y - z.y, F = z.y + (x - z.x) * V / W;
          if (!Number.isFinite(F))
            continue;
          _.minY == null || _.maxY == null ? (_.minY = F, _.maxY = F) : (F < _.minY && (_.minY = F), F > _.maxY && (_.maxY = F));
        }
      }
    }, s = (x, _) => {
      _.minX = void 0, _.maxX = void 0;
      let y = e.outline();
      for (let P = 0; P < y.length; ++P) {
        let z = y[P], b = y[(P + 1) % y.length], L = Math.min(z.y, b.y), R = Math.max(z.y, b.y);
        if (L <= x && x <= R) {
          let W = b.x - z.x, V = b.y - z.y, F = z.x + (x - z.y) * W / V;
          if (!Number.isFinite(F))
            continue;
          _.minX == null || _.maxX == null ? (_.minX = F, _.maxX = F) : (F < _.minX && (_.minX = F), F > _.maxX && (_.maxX = F));
        }
      }
    }, o = e.sheetingType ?? (() => "Corrugated 0.42"), a = e.sheetingDirection ?? (() => "Vertical"), c = e.startSheetingAtOppositeEnd ?? (() => !1), l = e.sheetingLowPoly ?? (() => !1), h = () => {
      switch (o()) {
        case "Long Line 305":
          return 305;
        default:
          return 762;
      }
    }, u = () => {
      let x = [], _ = t();
      if (_ == null)
        return x;
      let y = _.minY, P = { minX: void 0, maxX: void 0 };
      for (; y < _.maxY; ) {
        let z, b;
        s(y, P), z = P.minX, b = P.maxX, s(y + h(), P), (z == null || P.minX != null && P.minX < z) && (z = P.minX), (b == null || P.maxX != null && P.maxX > b) && (b = P.maxX);
        for (let L of e.outline())
          y < L.y && L.y < y + h() && ((z == null || L.x < z) && (z = L.x), (b == null || L.x > b) && (b = L.x));
        if (z != null && b != null) {
          let L = [
            {
              minX: z,
              maxX: b
            }
          ], R = [], W = y, V = y + h();
          for (let F of e.openings()) {
            let k = F.pos.x, D = F.pos.x + F.width, G = F.pos.y, E = F.pos.y + F.height;
            if (G <= W && E >= V) {
              for (let M of L)
                if (k < M.maxX && D > M.minX) {
                  let X = M.minX, ee = k;
                  X < ee && R.push({ minX: X, maxX: ee });
                  let ne = D, Q = M.maxX;
                  ne < Q && R.push({ minX: ne, maxX: Q });
                } else
                  R.push(M);
              {
                let M = L;
                L = R, R = M, R.splice(0, R.length);
              }
            }
          }
          for (let F of L) {
            let k = F.minX, D = F.maxX;
            x.push(new Cn({
              itemName: o,
              length: () => D - k
            }));
          }
        }
        y += h();
      }
      return x;
    }, d = () => {
      let x = [], _ = t();
      if (_ == null)
        return x;
      let y = c(), P = y ? _.maxX : _.minX, z = { minY: void 0, maxY: void 0 };
      for (; y ? P > _.minX : P < _.maxX; ) {
        let b, L;
        r(y ? P - h() : P, z), b = z.minY, L = z.maxY, r(y ? P : P + h(), z), (b == null || z.minY != null && z.minY < b) && (b = z.minY), (L == null || z.maxY != null && z.maxY > L) && (L = z.maxY);
        for (let R of e.outline())
          P < R.x && R.x < P + h() && ((b == null || R.y < b) && (b = R.y), (L == null || R.y > L) && (L = R.y));
        if (b != null && L != null) {
          let R = [
            {
              minY: b,
              maxY: L
            }
          ], W = [], V = P, F = P + h();
          for (let k of e.openings()) {
            let D = k.pos.x, G = k.pos.x + k.width, E = k.pos.y, M = k.pos.y + k.height;
            if (D < V && G > F) {
              for (let X of R)
                if (E < X.maxY && M > X.minY) {
                  let ee = X.minY, ne = E;
                  ee < ne && W.push({ minY: ee, maxY: ne });
                  let Q = M, de = X.maxY;
                  Q < de && W.push({ minY: Q, maxY: de });
                } else
                  W.push(X);
              {
                let X = R;
                R = W, W = X, W.splice(0, W.length);
              }
            }
          }
          for (let k of R) {
            let D = k.minY, G = k.maxY;
            x.push(new Cn({
              itemName: o,
              length: () => G - D
            }));
          }
        }
        P += y ? -h() : h();
      }
      return x;
    }, p = te(() => {
      switch (a()) {
        case "Vertical":
          return d();
        case "Horizontal":
          return u();
      }
    }), m = () => {
      switch (e.type()) {
        default:
        case "Wall Sheeting":
          return "Tek Screw Hex W/seal 10x16 Colorbond";
        case "Roof Sheeting":
          return "50mm Multi Purpose Roof Screw Colorbond";
      }
    }, g = te(() => {
      let x = Math.round(n() * (200 / (18e6 / Math.cos(15 * Math.PI / 180))));
      return [
        new Cn({
          itemName: m,
          qty: () => x
        })
      ];
    }), f = te(() => {
      let x = t();
      if (x == null)
        return;
      let _ = [], y = 762, P;
      switch (o()) {
        case "Corrugated 0.42":
          P = _1;
          break;
        case "Supersaw":
          P = b1;
          break;
        case "Unirib":
          P = w1;
          break;
        default:
        case "Steelclad 0.42":
          P = x1;
          break;
      }
      switch (a()) {
        case "Vertical": {
          let z = x.minX;
          for (_.push(P[0]); ; ) {
            let b = !1;
            for (let L = 1; L < P.length; ++L) {
              let R = P[L];
              if (z + R.x >= x.maxX) {
                b = !0;
                break;
              }
              _.push({
                x: z + R.x,
                y: R.y
              });
            }
            if (b)
              break;
            z += y;
          }
          break;
        }
        case "Horizontal": {
          let z = x.minY;
          for (_.push(P[0]); ; ) {
            let b = !1;
            for (let L = 1; L < P.length; ++L) {
              let R = P[L];
              if (z + R.x >= x.maxY) {
                b = !0;
                break;
              }
              _.push({
                x: z + R.x,
                y: R.y
              });
            }
            if (b)
              break;
            z += y;
          }
          break;
        }
      }
      return _;
    });
    const v = new Lt({
      color: "#808080",
      polygonOffset: !0,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });
    this.fullSheetedAreaMesh = te(() => {
      let x = t();
      if (x == null)
        return;
      if (l() || o() == "Long Line 305") {
        let z = new rn(), b = 1 / 1e3;
        z.moveTo(e.outline()[0].x * b, e.outline()[0].y * b);
        for (let W = 1; W < e.outline().length; ++W)
          z.lineTo(e.outline()[W].x * b, e.outline()[W].y * b);
        z.closePath();
        let L = new fn(
          z,
          {
            depth: 16 * b,
            bevelEnabled: !1
          }
        );
        L.rotateX(90 * Math.PI / 180);
        let R = new Ye(L, v);
        for (let W of e.openings()) {
          let V = new nn(W.width / 1e3, 1, W.height / 1e3);
          V.translate(
            W.pos.x / 1e3 + 0.5 * (W.width / 1e3),
            0,
            W.pos.y / 1e3 + 0.5 * (W.height / 1e3)
          ), R = ct.subtract(R, new Ye(V));
        }
        return R;
      }
      let _ = x, y = f();
      if (y == null)
        return;
      let P;
      switch (a()) {
        case "Vertical": {
          let z = _.maxY - _.minY, b = 3, L = new rn();
          L.moveTo(
            y[0].x / 1e3,
            y[0].y / 1e3
          );
          for (let F = 1; F < y.length; ++F)
            L.lineTo(
              y[F].x / 1e3,
              y[F].y / 1e3
            );
          for (let F = y.length - 1; F >= 0; --F)
            L.lineTo(
              y[F].x / 1e3,
              (y[F].y + b) / 1e3
            );
          L.closePath();
          let R = new fn(
            L,
            {
              depth: z / 1e3,
              bevelEnabled: !1
            }
          );
          R.translate(0, b / 1e3, -z / 1e3), R.rotateX(Math.PI);
          let W = R.attributes.position, V = { minY: void 0, maxY: void 0 };
          for (let F = 0; F < W.count; ++F) {
            let k = W.getX(F), D = W.getZ(F);
            r(k * 1e3, V);
            let G = V.minY, E = V.maxY;
            Math.abs(D) < 1e-3 && G != null && W.setZ(F, G / 1e3), Math.abs(D - z / 1e3) < 1e-3 && E != null && W.setZ(F, E / 1e3);
          }
          P = new Ye(R, v);
          break;
        }
        case "Horizontal": {
          let z = _.maxX - _.minX, b = 3, L = new rn();
          L.moveTo(
            y[0].x / 1e3,
            y[0].y / 1e3
          );
          for (let F = 1; F < y.length; ++F)
            L.lineTo(
              y[F].x / 1e3,
              y[F].y / 1e3
            );
          for (let F = y.length - 1; F >= 0; --F)
            L.lineTo(
              y[F].x / 1e3,
              (y[F].y + b) / 1e3
            );
          L.closePath();
          let R = new fn(
            L,
            {
              depth: z / 1e3,
              bevelEnabled: !1
            }
          );
          R.rotateX(Math.PI), R.rotateY(-0.5 * Math.PI);
          let W = R.attributes.position, V = { minX: void 0, maxX: void 0 };
          for (let F = 0; F < W.count; ++F) {
            let k = W.getX(F), D = W.getZ(F);
            s(D * 1e3, V);
            let G = V.minX, E = V.maxX;
            Math.abs(k) < 1e-3 && G != null && W.setX(F, G / 1e3), Math.abs(k - z / 1e3) < 1e-3 && E != null && W.setX(F, E / 1e3);
          }
          P = new Ye(R, v);
          break;
        }
      }
      for (let z of e.openings()) {
        let b = new nn(z.width / 1e3, 1, z.height / 1e3);
        b.translate(
          z.pos.x / 1e3 + 0.5 * (z.width / 1e3),
          0,
          z.pos.y / 1e3 + 0.5 * (z.height / 1e3)
        ), P = ct.subtract(P, new Ye(b));
      }
      return P;
    });
    let w = te(() => {
      let x = this.fullSheetedAreaMesh();
      if (x == null)
        return new Ye();
      let _ = e.previewOpening();
      if (_ == null)
        return x;
      let y = new nn(_.width / 1e3, 1, _.height / 1e3);
      return y.translate(
        _.pos.x / 1e3 + 0.5 * (_.width / 1e3),
        0,
        _.pos.y / 1e3 + 0.5 * (_.height / 1e3)
      ), ct.subtract(x, new Ye(y));
    });
    this.components = te(() => [
      new Cn({
        transform: () => pt.identity,
        layers: () => [c1.Cladding],
        mkObject3d: () => {
          let x = w(), _ = e.colour(), y;
          Wt[_] != null && (y = new Vm({
            color: Wt[_].colourHex,
            ...l() && e.textures != null ? {
              normalMap: o().indexOf("Corrugated") != -1 ? a() == "Vertical" ? e.textures().corroNormalMap : e.textures().horizontalCorroNormalMap : a() == "Vertical" ? e.textures().steelCladNormalMap : e.textures().horizontalSteelCladNormalMap
            } : {},
            metalness: 0.1,
            roughness: 0.5,
            reflectivity: 0.8
          }));
          let P = y ?? x.material;
          return () => new Ye(x.geometry, P);
        },
        colour: e.colour
      }),
      ...p(),
      ...g()
    ]);
  }
}
class P1 {
  components;
  constructor(e) {
    let t = () => 68.6, n = () => 50.9, r = te(() => {
      switch (e.sheetingType()) {
        case "Corrugated 0.42":
          return 16;
        case "Steelclad 0.42":
        case "Supersaw":
        case "Unirib":
          return 35;
        default:
          return 30;
      }
    }), s = () => 5, o = () => 5, a = te(
      () => new Cn({
        itemName: () => "Rail",
        length: () => e.width() - 2 * o(),
        transform: te(
          () => pt.create(
            Ne.create(
              o(),
              0.5 * (t() - n()),
              0
            ),
            it.identity
          )
        ),
        mkObject3d: te(() => {
          let g = e.width() - 2 * o();
          return (f) => {
            if (!ds())
              return new _n();
            let v = ac(g), w = new Lt({ color: "#808080" });
            return vt(() => {
              let x = Wt[e.postRailColour()], _;
              x == null ? _ = "#808080" : _ = x.colourHex, w.color.setStyle(_), f();
            }), ot(() => {
              v.dispose(), w.dispose();
            }), new Ye(v, w);
          };
        })
      })
    ), c = te(
      () => new Cn({
        itemName: () => "Rail",
        length: () => e.width() - 2 * o(),
        transform: te(
          () => pt.create(
            Ne.create(
              e.width() - o(),
              0.5 * (t() - n()),
              e.height()
            ),
            it.fromUV(
              Ne.negUnitX,
              Ne.unitY
            )
          )
        ),
        mkObject3d: te(() => {
          let g = e.width() - 2 * o();
          return (f) => {
            if (!ds())
              return new _n();
            let v = ac(g), w = new Lt({ color: "#808080" });
            return vt(() => {
              let x = Wt[e.postRailColour()], _;
              x == null ? _ = "#808080" : _ = x.colourHex, w.color.setStyle(_), f();
            }), ot(() => {
              v.dispose(), w.dispose();
            }), new Ye(v, w);
          };
        })
      })
    ), l = te(() => e.height() + 600), h = te(
      () => new Cn({
        itemName: () => "Post",
        length: l,
        transform: te(
          () => pt.create(
            Ne.create(
              0,
              0,
              e.height()
            ),
            it.fromUV(
              Ne.negUnitZ,
              Ne.unitY
            )
          )
        ),
        mkObject3d: te(() => {
          let g = l();
          return (f) => {
            if (!ds())
              return new _n();
            let v = lc(g), w = new Lt({ color: "#808080" });
            return vt(() => {
              let x = Wt[e.postRailColour()], _;
              x == null ? _ = "#808080" : _ = x.colourHex, w.color.setStyle(_), f();
            }), ot(() => {
              v.dispose(), w.dispose();
            }), new Ye(v, w);
          };
        })
      })
    ), u = te(
      () => new Cn({
        itemName: () => "Post",
        length: l,
        transform: te(
          () => pt.create(
            Ne.create(
              e.width(),
              0,
              e.height() - l()
            ),
            it.fromUV(
              Ne.unitZ,
              Ne.unitY
            )
          )
        ),
        mkObject3d: te(() => {
          let g = l();
          return (f) => {
            if (!ds())
              return new _n();
            let v = lc(g), w = new Lt({ color: "#808080" });
            return vt(() => {
              let x = Wt[e.postRailColour()], _;
              x == null ? _ = "#808080" : _ = x.colourHex, w.color.setStyle(_), f();
            }), ot(() => {
              v.dispose(), w.dispose();
            }), new Ye(v, w);
          };
        })
      })
    ), d = new C1({
      type: () => "Wall Sheeting",
      outline: te(() => [
        At.create(0, 0),
        At.create(e.width() - 2 * s(), 0),
        At.create(e.width() - 2 * s(), e.height() - 2 * s()),
        At.create(0, e.height() - 2 * s())
      ]),
      openings: () => [],
      colour: e.sheetingColour,
      sheetingType: e.sheetingType,
      previewOpening: () => {
      }
    }), p = te(
      () => pt.create(
        Ne.create(
          s(),
          0.5 * (t() + r()),
          s()
        ),
        it.identity
      )
    ), m = te(
      () => new Cn({
        children: d.components,
        transform: p
      })
    );
    this.components = te(() => [
      a(),
      c(),
      h(),
      u(),
      m()
    ]);
  }
}
function T1(i, e) {
  if (i.start == null)
    return;
  let t = { ...i.start }, n = 0, r = [];
  r.push({ ...t });
  for (let a of i.segments) {
    for (n += a.turnAngle; n < -180; )
      n += 360;
    for (; n > 180; )
      n -= 360;
    let c = n * Math.PI / 180, l = Math.cos(c), h = Math.sin(c);
    t.x += a.length * l, t.y += a.length * h, r.push({ ...t });
  }
  let s = [];
  for (let a = 0; a < r.length; ++a) {
    let c, l;
    if (a > 0) {
      let g = r[a].x - r[a - 1].x, f = r[a].y - r[a - 1].y, v = Math.sqrt(g * g + f * f), w = g / v;
      c = -(f / v), l = w;
    } else
      c = void 0, l = void 0;
    let h, u;
    if (a < r.length - 1) {
      let g = r[a + 1].x - r[a].x, f = r[a + 1].y - r[a].y, v = Math.sqrt(g * g + f * f), w = g / v;
      h = -(f / v), u = w;
    } else
      h = void 0, u = void 0;
    if (h == null || u == null) {
      if (c == null || l == null)
        continue;
      h = c, u = l;
    }
    (c == null || l == null) && (c = h, l = u);
    let d = (h * c + u * l) / (c * c + l * l), p = c * d, m = l * d;
    s.push({
      x: r[a].x + (c + h - p) * e,
      y: r[a].y + (l + u - m) * e
    });
  }
  let o = [];
  for (let a of r)
    o.push(a);
  for (let a = s.length - 1; a >= 0; --a)
    o.push(s[a]);
  return o;
}
function A1(i, e, t, n) {
  let [r, s] = Ut(!0);
  _h(
    i,
    e,
    () => s(!0),
    n
  ), vt(() => {
    r() && (t?.(), s(!1));
  });
}
function _h(i, e, t, n) {
  vt(() => {
    Rh(
      e,
      (r) => {
        E1(i, r, t, n);
      }
    )();
  });
}
function E1(i, e, t, n) {
  let r = te(() => e.transform != null ? e.transform() : pt.identity), s = [];
  for (let o of L1) {
    let a, c = o(e, t, n);
    vt(() => {
      a != null && (a(), a = void 0);
      let l = c();
      l.length != 0 && (e.layers != null && n != null ? (e.layers().some((h) => n(h)) && (i.add(...l), a = () => {
        i.remove(...l);
      }), t?.()) : (i.add(...l), a = () => {
        i.remove(...l);
      }));
    }), vt(() => {
      for (let l of c())
        l.position.set(r().o.x / 1e3, r().o.y / 1e3, r().o.z / 1e3), l.setRotationFromQuaternion(
          new Yn(
            r().orientation.x,
            r().orientation.y,
            r().orientation.z,
            r().orientation.w
          )
        ), l.updateMatrix();
      t?.();
    }), s.push(() => {
      a?.();
    });
  }
  ot(() => s.forEach((o) => o()));
}
let L1 = [
  z1,
  R1,
  I1,
  D1,
  N1,
  F1,
  k1,
  O1,
  U1,
  B1,
  G1,
  W1,
  $1
];
function z1(i, e, t) {
  return te(() => {
    if (i.children == null)
      return [];
    let n = new _n();
    return _h(n, i.children, e, t), [n];
  });
}
function R1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.ceeProperties != null && i.length != null) {
      let r = 1e-3, s = new rn();
      {
        let d = i.ceeProperties().webSize * r, p = i.ceeProperties().flangeSize * r, m = i.ceeProperties().thickness * r;
        s.moveTo(0, 0), s.lineTo(d, 0), s.lineTo(d, p), s.lineTo(d - m, p), s.lineTo(d - m, m), s.lineTo(m, m), s.lineTo(m, p), s.lineTo(0, p), s.closePath();
      }
      let o = new fn(
        s,
        {
          depth: i.length() / 1e3,
          bevelEnabled: !1
        }
      );
      o.rotateZ(90 * Math.PI / 180), o.rotateY(90 * Math.PI / 180);
      const a = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), c = new vn({
        color: "#000000"
      }), l = new Ye(o, a);
      let h = new En(o);
      const u = new Tn(h, c);
      return t = () => {
        o.dispose(), h.dispose(), a.dispose(), c.dispose();
      }, [l, u];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function I1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.panelMemberProperties != null && i.length != null) {
      let r = 1e-3, s = new rn();
      {
        let d = i.panelMemberProperties().webSize * r, p = i.panelMemberProperties().flangeSize * r, m = 1 * r;
        s.moveTo(0, 0), s.lineTo(d, 0), s.lineTo(d, p), s.lineTo(d - m, p), s.lineTo(d - m, m), s.lineTo(m, m), s.lineTo(m, p), s.lineTo(0, p), s.closePath();
      }
      let o = new fn(
        s,
        {
          depth: i.length() / 1e3,
          bevelEnabled: !1
        }
      );
      o.rotateZ(90 * Math.PI / 180), o.rotateY(90 * Math.PI / 180);
      const a = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), c = new vn({
        color: "#000000"
      });
      let l = new Ye(o, a), h = new En(o);
      const u = new Tn(h, c);
      return t = () => {
        o.dispose(), h.dispose(), a.dispose(), c.dispose();
      }, [l, u];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function D1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.flatProperties != null && i.length != null) {
      const r = new nn(
        i.length() / 1e3,
        i.flatProperties().width / 1e3,
        i.flatProperties().thickness / 1e3
      ), s = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), o = new vn({
        color: "#000000"
      });
      r.translate(
        0.5 * i.length() / 1e3,
        0.5 * i.flatProperties().width / 1e3,
        0.5 * i.flatProperties().thickness / 1e3
      );
      const a = new Ye(r, s);
      let c = new En(r);
      const l = new Tn(c, o);
      return t = () => {
        r.dispose(), c.dispose(), s.dispose(), o.dispose();
      }, [a, l];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function N1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.ubProperties != null && i.length != null) {
      let r = 1e-3, s = new rn();
      {
        let d = i.ubProperties().webSize * r, p = i.ubProperties().flangeSize * r, m = i.ubProperties().thickness * r;
        s.moveTo(0, 0), s.lineTo(
          m,
          0
        ), s.lineTo(
          m,
          0.5 * p - 0.5 * m
        ), s.lineTo(
          d - m,
          0.5 * p - 0.5 * m
        ), s.lineTo(
          d - m,
          0
        ), s.lineTo(
          d,
          0
        ), s.lineTo(
          d,
          p
        ), s.lineTo(
          d - m,
          p
        ), s.lineTo(
          d - m,
          0.5 * p + 0.5 * m
        ), s.lineTo(
          m,
          0.5 * p + 0.5 * m
        ), s.lineTo(
          m,
          p
        ), s.lineTo(
          0,
          p
        ), s.closePath();
      }
      let o = new fn(
        s,
        {
          depth: i.length() / 1e3,
          bevelEnabled: !1
        }
      );
      o.rotateZ(90 * Math.PI / 180), o.rotateY(90 * Math.PI / 180);
      const a = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), c = new vn({
        color: "#000000"
      }), l = new Ye(o, a), h = new En(o), u = new Tn(h, c);
      return t = () => {
        o.dispose(), h.dispose(), a.dispose(), c.dispose();
      }, [l, u];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function F1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.shsProperties != null && i.length != null) {
      const r = new nn(
        i.length() / 1e3,
        i.shsProperties().size / 1e3,
        i.shsProperties().size / 1e3
      ), s = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), o = new vn({
        color: "#000000"
      });
      r.translate(
        0.5 * i.length() / 1e3,
        0.5 * i.shsProperties().size / 1e3,
        0.5 * i.shsProperties().size / 1e3
      );
      const a = new Ye(r, s);
      let c = new En(r);
      const l = new Tn(c, o);
      return t = () => {
        r.dispose(), c.dispose(), s.dispose(), o.dispose();
      }, [a, l];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function k1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.rhsProperties != null && i.length != null) {
      const r = new nn(
        i.length() / 1e3,
        i.rhsProperties().webSize / 1e3,
        i.rhsProperties().flangeSize / 1e3
      ), s = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), o = new vn({
        color: "#000000"
      });
      r.translate(
        0.5 * i.length() / 1e3,
        0.5 * i.rhsProperties().webSize / 1e3,
        0.5 * i.rhsProperties().flangeSize / 1e3
      );
      const a = new Ye(r, s);
      let c = new En(r);
      const l = new Tn(c, o);
      return t = () => {
        r.dispose(), c.dispose(), s.dispose(), o.dispose();
      }, [a, l];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function O1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.topHatProperties != null && i.length != null) {
      let r = 1e-3, s = new rn();
      {
        let d = i.topHatProperties().width * r, p = i.topHatProperties().height * r, m = i.topHatProperties().topWidth * r, g = 0.5 * m, f = 1 * r;
        s.moveTo(0, 0), s.lineTo(g, 0), s.lineTo(0.5 * d - 0.5 * m, p - f), s.lineTo(0.5 * d + 0.5 * m, p - f), s.lineTo(d - g, 0), s.lineTo(d, 0), s.lineTo(d, f), s.lineTo(d - g, f), s.lineTo(0.5 * d + 0.5 * m, p), s.lineTo(0.5 * d - 0.5 * m, p), s.lineTo(g, f), s.lineTo(0, f), s.closePath();
      }
      let o = new fn(
        s,
        {
          depth: i.length() / 1e3,
          bevelEnabled: !1
        }
      );
      o.rotateZ(90 * Math.PI / 180), o.rotateY(90 * Math.PI / 180);
      const a = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), c = new vn({
        color: "#000000"
      }), l = new Ye(o, a), h = new En(o), u = new Tn(h, c);
      return t = () => {
        o.dispose(), h.dispose(), a.dispose(), c.dispose();
      }, [l, u];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function U1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.timberProperties != null && i.length != null) {
      const r = new nn(
        i.length() / 1e3,
        i.timberProperties().webSize / 1e3,
        i.timberProperties().flangeSize / 1e3
      ), s = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#C08000"
      }), o = new vn({
        color: "#000000"
      });
      r.translate(
        0.5 * i.length() / 1e3,
        0.5 * i.timberProperties().webSize / 1e3,
        0.5 * i.timberProperties().flangeSize / 1e3
      );
      const a = new Ye(r, s);
      let c = new En(r);
      const l = new Tn(c, o);
      return t = () => {
        r.dispose(), c.dispose(), s.dispose(), o.dispose();
      }, [a, l];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function B1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.flashingProfile != null && i.flashingProfile().start != null && i.length != null) {
      let r = T1(i.flashingProfile(), 1);
      if (r != null) {
        let s = 1e-3, o = new rn();
        o.moveTo(
          r[0].x * s,
          r[0].y * s
        );
        for (let p of r)
          o.lineTo(
            p.x * s,
            p.y * s
          );
        o.closePath();
        let a = new fn(
          o,
          {
            depth: i.length() / 1e3,
            bevelEnabled: !1
          }
        );
        a.rotateZ(90 * Math.PI / 180), a.rotateY(90 * Math.PI / 180);
        const c = new Lt({
          polygonOffset: !0,
          polygonOffsetFactor: 1,
          polygonOffsetUnits: 1,
          color: "#808080"
        }), l = new vn({
          color: "#000000"
        }), h = new Ye(a, c), u = new En(a), d = new Tn(u, l);
        return t = () => {
          a.dispose(), u.dispose(), c.dispose(), l.dispose();
        }, [h, d];
      } else
        return [];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function G1(i, e) {
  let t = te(() => i.mkObject3d != null ? [i.mkObject3d()(e ?? (() => {
  }))] : []);
  return ot(() => {
  }), t;
}
function W1(i, e) {
  let t, n = te(() => {
    if (t != null && (t(), t = void 0), i.openingProperties != null) {
      const r = new nn(
        i.openingProperties().width / 1e3,
        0.1,
        i.openingProperties().height / 1e3
      ), s = new Lt({
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        color: "#808080"
      }), o = new vn({
        color: "#000000"
      });
      r.translate(
        0.5 * i.openingProperties().width / 1e3,
        0.05,
        0.5 * i.openingProperties().height / 1e3
      );
      const a = new Ye(r, s);
      let c = new En(r);
      const l = new Tn(c, o);
      return t = () => {
        r.dispose(), c.dispose(), s.dispose(), o.dispose();
      }, [a, l];
    } else
      return [];
  });
  return ot(() => {
    t?.();
  }), n;
}
function $1(i, e) {
  return i.wireProperties == null || i.length == null ? () => [] : te(() => {
    if (i.wireProperties == null || i.length == null)
      return [];
    let n = 1e-3, r = 0.5 * i.wireProperties().diameter, s = new va(
      r * n,
      r * n,
      i.length() * n,
      8
    );
    s.rotateZ(0.5 * Math.PI), s.translate(0.5 * i.length() * n, 0, 0);
    let o = new Lt({ color: "#808080" });
    return ot(() => {
      s.dispose(), o.dispose();
    }), [new Ye(s, o)];
  });
}
const H1 = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: column;"><div><div class="calc-table"><br>Height:<br></div><br><div class="calc-table">Width:<br></div><br><div class="calc-table">Post/Rail Colour:<br><select></select><br><br></div><div class="calc-table">Sheeting Colour<br><select></select><br><br></div><button>Next</button><br><div class="calc-table">(Side posts get embedded into the ground, so they are longer than the frame height.)</div></div><div></div></div>'), cc = /* @__PURE__ */ Ce('<input type="radio">'), V1 = /* @__PURE__ */ Ce('<label class="calc-table"></label>'), X1 = /* @__PURE__ */ Ce("<label></label>"), hc = /* @__PURE__ */ Ce("<option></option>");
function Y1(i) {
  var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);
  if (e != null)
    return {
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16)
    };
}
function us(i) {
  let e = Y1(i);
  return e == null || (e.r + e.g + e.b) / 3 < 128 ? "white" : "black";
}
const q1 = (i) => {
  let e = document.createElement("canvas");
  e.width = 600, e.height = 400, e.style.setProperty("border", "1px solid black");
  let t = new sh(), n = new $t(45, e.width / e.height, 0.01, 100);
  n.position.set(2, 0.5, 2);
  let r = new l1(n, e);
  r.target.set(0, 0, 0), n.lookAt(0, 0, 0), r.maxPolarAngle = 0.5 * Math.PI, r.addEventListener("change", () => {
    o.render(t, n);
  }), r.update();
  const s = [];
  s[0] = new Qm(16777215, 1, 0), s[0].position.set(200, 300, 500), s[1] = new tx(16777215, 1), s[1].position.set(100, 100, -100), t.add(s[0]), t.add(s[1]);
  let o = new ma({
    canvas: e,
    antialias: !0,
    alpha: !0
  });
  o.setPixelRatio(window.devicePixelRatio);
  let a = new _n(), c = new _n();
  c.rotateX(-90 * Math.PI / 180), c.position.setY(100 / 1e3), c.add(a), t.add(c);
  let l = te(() => {
    switch (i.profile) {
      case "Corrugated":
        return "Corrugated 0.42";
      case "Steelclad":
        return "Steelclad 0.42";
      case "Supersaw":
        return "Supersaw";
      case "UniRib":
        return "Unirib";
    }
  }), h = [1200, 1500, 1800, 2100], u = [2370, 3100], [d, p] = Zn({
    selectedHeight: i.initHeight ?? h[0],
    selectedWidth: i.initWidth ?? u[0],
    selectedPostRailColour: i.initPostRailColour ?? "Basalt",
    selectedSheetingColour: i.initSheetingColour ?? "Deep Ocean"
  }), m = new P1({
    width: () => d.selectedWidth,
    height: () => d.selectedHeight,
    sheetingType: l,
    postRailColour: () => d.selectedPostRailColour,
    sheetingColour: () => d.selectedSheetingColour
  }), g = new Cn({
    children: m.components,
    transform: () => pt.create(Ne.create(-0.5 * d.selectedWidth, 0, -0.5 * d.selectedHeight), it.identity)
  });
  A1(a, () => [g], () => o.render(t, n));
  let f, v = () => {
    if (f == null)
      return;
    let w = Math.min(600, f.clientWidth - 2), x = Math.round(400 * w / 600);
    e.width != w && (e.width = w, e.height = x, n.aspect = e.width / e.height, o.setSize(w, x), n.updateProjectionMatrix(), o.render(t, n));
  };
  return na(() => {
    window.addEventListener("resize", v), v();
  }), ot(() => {
    window.removeEventListener("resize", v);
  }), (() => {
    const w = H1.cloneNode(!0), x = w.firstChild, _ = x.firstChild;
    _.firstChild.nextSibling.nextSibling;
    const z = _.nextSibling, b = z.nextSibling;
    b.firstChild.nextSibling;
    const R = b.nextSibling, W = R.nextSibling, V = W.firstChild, F = V.nextSibling, k = F.nextSibling, D = W.nextSibling, G = D.firstChild, E = G.nextSibling, M = E.nextSibling, X = D.nextSibling, ee = x.nextSibling;
    ue(_, () => {
      let Q = Oe();
      return be(Ot, {
        each: h,
        children: (de) => {
          let T = Oe();
          return [(() => {
            const C = cc.cloneNode(!0);
            return C.addEventListener("change", (S) => {
              S.currentTarget.checked && p("selectedHeight", de());
            }), ce(C, "id", T), ce(C, "name", Q), Te(() => C.checked = d.selectedHeight == de()), C;
          })(), (() => {
            const C = V1.cloneNode(!0);
            return ce(C, "for", T), ue(C, () => de().toString() + "mm"), C;
          })()];
        }
      });
    }, null), ue(b, () => {
      let Q = Oe();
      return be(Ot, {
        each: u,
        children: (de) => {
          let T = Oe();
          return [(() => {
            const C = cc.cloneNode(!0);
            return C.addEventListener("change", (S) => {
              S.currentTarget.checked && p("selectedWidth", de());
            }), ce(C, "id", T), ce(C, "name", Q), Te(() => C.checked = d.selectedWidth == de()), C;
          })(), (() => {
            const C = X1.cloneNode(!0);
            return ce(C, "for", T), ue(C, () => de().toString() + "mm"), C;
          })()];
        }
      });
    }, null), k.addEventListener("change", (Q) => {
      let de = Q.currentTarget.selectedOptions;
      de.length != 0 && p("selectedPostRailColour", de[0].value);
    }), k.style.setProperty("font-weight", "bold"), ue(k, be(Ot, {
      get each() {
        return Object.keys(Wt);
      },
      children: (Q) => {
        let de = te(() => Wt[Q()]);
        return (() => {
          const T = hc.cloneNode(!0);
          return T.style.setProperty("font-weight", "bold"), ue(T, () => Q() + " (" + de().code + ")"), Te((C) => {
            const S = us(de().colourHex), A = de().colourHex, U = d.selectedPostRailColour == Q();
            return S !== C._v$5 && T.style.setProperty("color", C._v$5 = S), A !== C._v$6 && T.style.setProperty("background-color", C._v$6 = A), U !== C._v$7 && (T.selected = C._v$7 = U), C;
          }, {
            _v$5: void 0,
            _v$6: void 0,
            _v$7: void 0
          }), Te(() => T.value = Q()), T;
        })();
      }
    })), M.addEventListener("change", (Q) => {
      let de = Q.currentTarget.selectedOptions;
      de.length != 0 && p("selectedSheetingColour", de[0].value);
    }), M.style.setProperty("font-weight", "bold"), ue(M, be(Ot, {
      get each() {
        return Object.keys(Wt);
      },
      children: (Q) => {
        let de = te(() => Wt[Q()]);
        return (() => {
          const T = hc.cloneNode(!0);
          return T.style.setProperty("font-weight", "bold"), ue(T, () => Q() + " (" + de().code + ")"), Te((C) => {
            const S = us(de().colourHex), A = de().colourHex, U = d.selectedSheetingColour == Q();
            return S !== C._v$8 && T.style.setProperty("color", C._v$8 = S), A !== C._v$9 && T.style.setProperty("background-color", C._v$9 = A), U !== C._v$10 && (T.selected = C._v$10 = U), C;
          }, {
            _v$8: void 0,
            _v$9: void 0,
            _v$10: void 0
          }), Te(() => T.value = Q()), T;
        })();
      }
    })), X.$$click = () => {
      i.onNext({
        height: d.selectedHeight,
        width: d.selectedWidth,
        postRailColour: d.selectedPostRailColour,
        sheetingColour: d.selectedSheetingColour
      });
    };
    const ne = f;
    return typeof ne == "function" ? Ls(ne, ee) : f = ee, ue(ee, e), Te((Q) => {
      const de = us(Wt[d.selectedPostRailColour].colourHex), T = Wt[d.selectedPostRailColour].colourHex, C = us(Wt[d.selectedSheetingColour].colourHex), S = Wt[d.selectedSheetingColour].colourHex;
      return de !== Q._v$ && k.style.setProperty("color", Q._v$ = de), T !== Q._v$2 && k.style.setProperty("background-color", Q._v$2 = T), C !== Q._v$3 && M.style.setProperty("color", Q._v$3 = C), S !== Q._v$4 && M.style.setProperty("background-color", Q._v$4 = S), Q;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), w;
  })();
};
Yt(["click"]);
const j1 = /* @__PURE__ */ Ce('<div style="display: inline; border-radius: 50%; width: 12px; height: 12px; padding: 4px; background-color: #fff; border: none; color: #000; text-align: center; font: 12px Arial, sans-serif; font-weight: bold;"></div>'), Z1 = /* @__PURE__ */ Ce("<h2>SPECIFY SPANS & GATES</h2>"), J1 = /* @__PURE__ */ Ce("<hr>"), K1 = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: row; align-items: top; gap: 30px"><div style="flex-grow: 1; background-color: #e6e4e2; display: grid; grid-template-columns: auto auto auto; gap: 10px; padding: 10px;"><div style="grid-column: span 3;"><div style="display: flex; flex-direction: row; height: 32px; align-items: center; background-color: rgb(69,149,199);"><div style="flex-grow: 1;"></div><div style="display: inline; color: white; margin-right: 10px;">SPANS</div><div style="flex-grow: 1;"></div></div><div style="padding-top: 10px; padding-bottom: 10px;"><div class="calc-table">Gate Size:</div><div class="calc-table">Corner Post Options:</div></div><div style="display: flex; flex-direction: row; height: 32px; align-items: center; background-color: rgb(69,149,199);"><div style="flex-grow: 1;"></div><div style="display: inline; color: white; margin-right: 10px;">SPAN</div><div style="flex-grow: 1;"></div></div><div style="display: flex; flex-direction: row; gap: 10px;"><div style="background: white;"></div><div style="margin-top: 10px;"><div class="calc-table" style="display: inline;">Length (mm): </div><input type="text"><br><input type="checkbox"><label class="calc-table">Has Gate?</label><br></div></div></div></div></div>'), Q1 = /* @__PURE__ */ Ce('<input type="radio">'), ey = /* @__PURE__ */ Ce('<label class="calc-table"></label>'), ty = /* @__PURE__ */ Ce('<div class="calc-table"><input type="radio"><label>Aluminium</label><input type="radio"><label>Galv</label></div>'), ny = /* @__PURE__ */ Ce('<div class="calc-table"><input type="radio"><label>50mm posts</label><input type="radio"><label>65mm posts</label></div>'), iy = (i) => {
  let e = te(() => {
    if (i.selectedGateSizeIdx != null && !(i.selectedGateSizeIdx < 0 || i.selectedGateSizeIdx >= i.gateSizes.length))
      return i.gateSizes[i.selectedGateSizeIdx];
  }), t = te(() => {
    let l = i.gateSizes.flatMap((h, u) => h.height != i.panelHeight ? [] : [{
      gateSize: h,
      index: u
    }]);
    if (l.length != 0) {
      let h = e();
      if (h != null) {
        let u = !1;
        for (let d of l)
          if (d.gateSize.width == h.width) {
            u = !0, i.onSelectedGateSizeIdxChanged(d.index);
            break;
          }
        u || i.onSelectedGateSizeIdxChanged(l[0].index);
      } else
        i.onSelectedGateSizeIdxChanged(l[0].index);
    } else
      i.onSelectedGateSizeIdxChanged(void 0);
    return l;
  }), n = (l) => (() => {
    const h = j1.cloneNode(!0);
    return ue(h, l), h;
  })(), r = te(() => {
    switch (i.selectedWall) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
    }
  }), s = te(() => {
    let l = r();
    if (!(l >= i.walls.length))
      return i.walls[l].length;
  }), o = te(() => {
    let l = r();
    if (!(l >= i.walls.length))
      return i.walls[l].hasGate;
  });
  Oe();
  let a = Oe(), c = Oe();
  return Oe(), Oe(), Oe(), [Z1.cloneNode(!0), J1.cloneNode(!0), (() => {
    const l = K1.cloneNode(!0), h = l.firstChild, u = h.firstChild, d = u.firstChild, p = d.nextSibling, m = p.firstChild, g = m.nextSibling, f = p.nextSibling, v = f.firstChild, w = v.nextSibling, x = w.nextSibling, _ = f.nextSibling, y = _.firstChild, P = y.nextSibling, z = P.firstChild, b = z.nextSibling, L = b.nextSibling, R = L.nextSibling, W = R.nextSibling;
    return ue(p, be(Ot, {
      get each() {
        return t();
      },
      children: (V) => {
        let F = Oe();
        return [(() => {
          const k = Q1.cloneNode(!0);
          return k.addEventListener("change", (D) => {
            D.currentTarget.checked && i.onSelectedGateSizeIdxChanged(V().index);
          }), ce(k, "id", F), ce(k, "name", a), Te(() => k.checked = i.selectedGateSizeIdx == V().index), k;
        })(), (() => {
          const k = ey.cloneNode(!0);
          return ce(k, "for", F), ue(k, () => V().gateSize.width + "w"), k;
        })()];
      }
    }), g), ue(p, () => {
      let V = Oe(), F = Oe(), k = Oe();
      return (() => {
        const D = ty.cloneNode(!0), G = D.firstChild, E = G.nextSibling, M = E.nextSibling, X = M.nextSibling;
        return G.addEventListener("change", (ee) => {
          ee.currentTarget.checked && i.onPostMaterialChanged("Alum");
        }), ce(G, "id", V), ce(G, "name", k), ce(E, "for", V), M.addEventListener("change", (ee) => {
          ee.currentTarget.checked && i.onPostMaterialChanged("Galv");
        }), ce(M, "id", F), ce(M, "name", k), ce(X, "for", F), Te(() => G.checked = i.postMaterial == "Alum"), Te(() => M.checked = i.postMaterial == "Galv"), D;
      })();
    }, null), ue(p, () => {
      let V = Oe(), F = Oe(), k = Oe();
      return (() => {
        const D = ny.cloneNode(!0), G = D.firstChild, E = G.nextSibling, M = E.nextSibling, X = M.nextSibling;
        return G.addEventListener("change", (ee) => {
          ee.currentTarget.checked && i.onPostSizeChanged("50");
        }), ce(G, "id", V), ce(G, "name", k), ce(E, "for", V), M.addEventListener("change", (ee) => {
          ee.currentTarget.checked && i.onPostSizeChanged("65");
        }), ce(M, "id", F), ce(M, "name", k), ce(X, "for", F), Te(() => G.checked = i.postSize == "50"), Te(() => M.checked = i.postSize == "65"), D;
      })();
    }, null), ue(f, () => n(i.selectedWall), x), ue(y, be(mh, {
      get fenceShape() {
        return i.fenceShape;
      },
      get selectedWall() {
        return i.selectedWall;
      },
      get onWallSelected() {
        return i.onWallSelected;
      }
    })), b.$$input = (V) => {
      let F = Number.parseFloat(V.currentTarget.value);
      Number.isFinite(F) && i.onWallLengthChanged(r(), F);
    }, R.addEventListener("change", (V) => {
      i.onWallHasGateChanged(r(), V.currentTarget.checked);
    }), ce(R, "id", c), ce(W, "for", c), Te(() => b.value = s()), Te(() => R.checked = o()), l;
  })()];
};
Yt(["input"]);
class ry {
  numPanels;
  numGates;
  numCornerPosts;
  cornerPostLength;
  totalPrice;
  productDescription;
  constructor(e) {
    let t = te(() => {
      let y = 0, P, z = e.gateSize();
      z != null ? P = z.width : P = 0;
      for (let b of e.walls())
        b.length != null && (y += Math.ceil((b.length - (b.hasGate ? P : 0)) / e.panelWidth()));
      return y;
    }), n = Qe(() => ({ type: "success", prontoCode: "2HT00" })), r = Qe(() => ({ type: "success", prontoCode: "206RL" })), s = Qe(() => ({ type: "success", prontoCode: "2098L" })), o = te(() => e.panelHeight() + 600), a = Qe(te(() => {
      let y = o(), P;
      if (y == 1500)
        P = "2E420";
      else if (y == 1800)
        P = "21S50";
      else if (y == 2100)
        P = "21SU0";
      else if (y == 2400)
        P = "21TG0";
      else if (y == 2700)
        P = "2E4S0";
      else if (y == 3e3)
        P = "21U70";
      else
        return { type: "error", message: "Failed to find pricing for Galv Post 65x65x" + y.toFixed(0) };
      return { type: "success", prontoCode: P };
    })), c = Qe(te(() => {
      let y;
      switch (e.profile()) {
        case "Corrugated":
          y = "20A4L";
          break;
        case "Steelclad":
          y = "20DDL";
          break;
        case "Supersaw":
          y = "2FH5L";
          break;
        case "UniRib":
          y = "2GCLL";
          break;
      }
      return { type: "success", prontoCode: y };
    })), l = te(() => Math.round(e.panelWidth() / 762)), h = te(() => {
      let y = e.gateSize();
      if (y == null)
        return;
      let P = y.width;
      return P == 915 ? 1 : P == 1480 || P == 1550 ? 2 : Math.ceil(P / 762);
    }), u = te(() => {
      let y = r(), P;
      switch (y.type) {
        case "success":
          P = Number.parseFloat(y.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: y.message };
      }
      let z = s(), b;
      switch (z.type) {
        case "success":
          b = Number.parseFloat(z.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: z.message };
      }
      let L = c(), R;
      switch (L.type) {
        case "success":
          R = Number.parseFloat(L.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: L.message };
      }
      let W = n(), V;
      switch (W.type) {
        case "success":
          V = Number.parseFloat(W.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: W.message };
      }
      return {
        type: "success",
        value: 2 * (e.panelWidth() / 1e3) * b + 2 * ((e.panelHeight() + 600) / 1e3) * P + l() * (e.panelHeight() / 1e3) * R + 18 * V
      };
    }), d = Qe(te(() => {
      let y = e.gateSize();
      return y == null ? { type: "error", message: "No gate size selected" } : { type: "success", prontoCode: y.prontoCode };
    })), p = te(() => {
      let y = e.gateSize();
      if (y == null)
        return { type: "error", message: "No gate size selected" };
      let P = h();
      if (P == null)
        return { type: "error", message: "Failed to determine number of sheets for selected gate" };
      let z = d(), b;
      switch (z.type) {
        case "success":
          b = Number.parseFloat(z.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: z.message };
      }
      let L = c(), R;
      switch (L.type) {
        case "success":
          R = Number.parseFloat(L.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: L.message };
      }
      return { type: "success", value: b + y.height / 1e3 * R * P };
    }), m = te(() => {
      let y = 0;
      for (let P of e.walls())
        P.length != null && (y += 1);
      switch (y) {
        case 0:
          return 0;
        case 1:
          return 2;
        default:
          return 4;
      }
    }), g = te(() => {
      let y = 0;
      for (let P of e.walls())
        P.hasGate && ++y;
      return y;
    }), f = te(() => {
      if (t() == 0)
        return { type: "success", value: 0 };
      let y = u(), P;
      switch (y.type) {
        case "success":
          P = y.value;
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: y.message };
      }
      return { type: "success", value: P * t() };
    }), v = te(() => {
      if (g() == 0)
        return { type: "success", value: 0 };
      let y = p(), P;
      switch (y.type) {
        case "success": {
          P = y.value;
          break;
        }
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: y.message };
      }
      return { type: "success", value: g() * P };
    }), w = te(() => {
      if (m() == 0)
        return { type: "success", value: 0 };
      let y = a(), P;
      switch (y.type) {
        case "success":
          P = Number.parseFloat(y.value);
          break;
        case "pending":
          return { type: "pending" };
        case "error":
          return { type: "error", message: y.message };
      }
      return { type: "success", value: m() * P };
    }), x = te(() => {
      let y = [
        f,
        v,
        w
      ], P = 0;
      for (let z of y) {
        let b = z();
        switch (b.type) {
          case "success":
            P += b.value;
            break;
          case "pending":
            return { type: "pending" };
          case "error":
            return { type: "error", message: b.message };
        }
      }
      return { type: "success", value: P };
    }), _ = te(() => {
      let y = "";
      y += "Panel Size: " + e.panelHeight() + "h x " + e.panelWidth() + `w\r
`, y += "Post/Rail Colour: " + e.postRailColour() + `\r
`, y += "Sheeting Colour: " + e.sheetingColour() + `\r
`;
      let P = 0;
      for (let L of e.walls())
        L.length != null && (y += "Side " + P + ": Length is " + L.length / 1e3 + "m" + (L.hasGate ? `, has gate in this side.\r
` : `.\r
`), ++P);
      let z = x(), b;
      switch (z.type) {
        case "success":
          b = "$" + z.value.toFixed(2);
          break;
        case "pending":
          b = "was still pending (slow connection?)";
          break;
        case "error":
          b = "Error: " + z.message;
          break;
      }
      return y += "Estimators Total Price: " + b, y;
    });
    this.numPanels = t, this.numGates = g, this.numCornerPosts = m, this.cornerPostLength = o, this.totalPrice = x, this.productDescription = _;
  }
}
const Fo = /* @__PURE__ */ Ce('<svg><line stroke="black"></line></svg>', 4, !0), sy = /* @__PURE__ */ Ce('<svg><text text-anchor="middle" dominant-baseline="central" font-size="12pt"></text></svg>', 4, !0), fs = /* @__PURE__ */ Ce('<svg><rect fill="black"></rect></svg>', 4, !0), oy = /* @__PURE__ */ Ce('<div style="display: flex; flex-direction: row; gap: 20px;"><div><h2>PLAN VIEW</h2><hr><svg width="500" height="500" style="border: 1px solid black;"></svg></div><div><h2>COMPONENTS LIST</h2><hr><table style="border-spacing: 0px;" class="calc-table"><thead></thead><tbody><tr><td style="border: 1px solid black;"></td><td style="border-width: 1px 1px 1px 0px; border-style: solid;">Panels</td><td style="border-width: 1px 1px 1px 0px; border-style: solid;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Gates</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;"></td></tr><tr><td style="border-width: 0px 1px 1px 1px; border-style: solid;"></td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">Corner Posts</td><td style="border-width: 0px 1px 1px 0px; border-style: solid;">The posts are 50mm square <!> x <!>m.</td></tr></tbody></table><div class="calc-table" style="padding-top: 5px;"><b>Estimated Total Price: </b></div><hr></div></div>'), ay = (i) => {
  let e = te(() => {
    if (i.selectedGateSizeIdx != null && !(i.selectedGateSizeIdx < 0 || i.selectedGateSizeIdx >= i.gateSizes.length))
      return i.gateSizes[i.selectedGateSizeIdx];
  }), t = new ry({
    profile: () => i.profile,
    panelWidth: () => i.panelWidth,
    panelHeight: () => i.panelHeight,
    gateSize: e,
    postRailColour: () => i.postRailColour,
    sheetingColour: () => i.sheetingColour,
    walls: () => i.walls
  }), n = 15, r = (v) => {
    let w = v.flipLabelSide ?? !1, x = v.toX - v.fromX, _ = v.toY - v.fromY, y = Math.sqrt(x * x + _ * _), P = x / y, z = _ / y, b = -z, L = P, R = n, W = 0.5 * (v.fromX + v.toX) + 0.7 * R * b * (w ? -1 : 1), V = 0.5 * (v.fromY + v.toY) - 0.7 * R * L * (w ? -1 : 1), F = -Math.atan2(z, P) * 180 / Math.PI;
    return [(() => {
      const k = Fo.cloneNode(!0);
      return Te((D) => {
        const G = v.fromX, E = v.fromY, M = v.toX, X = v.toY;
        return G !== D._v$ && ce(k, "x1", D._v$ = G), E !== D._v$2 && ce(k, "y1", D._v$2 = E), M !== D._v$3 && ce(k, "x2", D._v$3 = M), X !== D._v$4 && ce(k, "y2", D._v$4 = X), D;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), k;
    })(), (() => {
      const k = Fo.cloneNode(!0);
      return Te((D) => {
        const G = v.fromX - 0.5 * b * R, E = v.fromY - 0.5 * L * R, M = v.fromX + 0.5 * b * R, X = v.fromY + 0.5 * L * R;
        return G !== D._v$5 && ce(k, "x1", D._v$5 = G), E !== D._v$6 && ce(k, "y1", D._v$6 = E), M !== D._v$7 && ce(k, "x2", D._v$7 = M), X !== D._v$8 && ce(k, "y2", D._v$8 = X), D;
      }, {
        _v$5: void 0,
        _v$6: void 0,
        _v$7: void 0,
        _v$8: void 0
      }), k;
    })(), (() => {
      const k = Fo.cloneNode(!0);
      return Te((D) => {
        const G = v.toX - 0.5 * b * R, E = v.toY - 0.5 * L * R, M = v.toX + 0.5 * b * R, X = v.toY + 0.5 * L * R;
        return G !== D._v$9 && ce(k, "x1", D._v$9 = G), E !== D._v$10 && ce(k, "y1", D._v$10 = E), M !== D._v$11 && ce(k, "x2", D._v$11 = M), X !== D._v$12 && ce(k, "y2", D._v$12 = X), D;
      }, {
        _v$9: void 0,
        _v$10: void 0,
        _v$11: void 0,
        _v$12: void 0
      }), k;
    })(), (() => {
      const k = sy.cloneNode(!0);
      return ce(k, "transform", "translate(" + W + "," + V + ") rotate(" + F + ")"), ue(k, () => v.dimension), k;
    })()];
  }, s = 500, o = 500, a = 30, c = s - 2 * a, l = o - 2 * a, h = 20, u;
  {
    let v = c - 2 * h, w = l - 2 * h, x;
    i.walls.length == 0 ? x = 1 : (x = w / i.walls[0].length, i.walls.length >= 2 && (x = Math.min(x, v / i.walls[1].length)), i.walls.length >= 3 && (x = Math.min(x, w / i.walls[2].length)), i.walls.length == 4 && (x = Math.min(x, v / i.walls[3].length))), u = x;
  }
  let d = 0.5 * s - Math.max(i.walls.length >= 2 ? 0.5 * i.walls[1].length * u : 0, i.walls.length == 4 ? 0.5 * i.walls[3].length * u : 0), p = 0.5 * o - Math.max(i.walls.length >= 1 ? 0.5 * i.walls[0].length * u : 0, i.walls.length >= 3 ? 0.5 * i.walls[2].length * u : 0), m = 0.5 * s + Math.max(i.walls.length >= 2 ? 0.5 * i.walls[1].length * u : 0, i.walls.length == 4 ? 0.5 * i.walls[3].length * u : 0), g = 0.5 * o + Math.max(i.walls.length >= 1 ? 0.5 * i.walls[0].length * u : 0, i.walls.length >= 3 ? 0.5 * i.walls[2].length * u : 0), f = 80 * u;
  return (() => {
    const v = oy.cloneNode(!0), w = v.firstChild, x = w.firstChild, _ = x.nextSibling, y = _.nextSibling, P = w.nextSibling, z = P.firstChild, b = z.nextSibling, L = b.nextSibling, R = L.firstChild, W = R.nextSibling, V = W.firstChild, F = V.firstChild, k = F.nextSibling, D = k.nextSibling, G = V.nextSibling, E = G.firstChild, M = E.nextSibling, X = M.nextSibling, ee = G.nextSibling, ne = ee.firstChild, Q = ne.nextSibling, de = Q.nextSibling, T = de.firstChild, C = T.nextSibling, S = C.nextSibling, A = S.nextSibling;
    A.nextSibling;
    const U = L.nextSibling;
    return U.firstChild, U.nextSibling, ue(y, be(en, {
      get when() {
        return i.walls.length >= 1;
      },
      get children() {
        return [be(r, {
          fromX: d - h,
          fromY: p,
          toX: d - h,
          get toY() {
            return p + i.walls[0].length * u;
          },
          get dimension() {
            return i.walls[0].length.toFixed(0) + "mm";
          }
        }), (() => {
          const Z = fs.cloneNode(!0);
          return ce(Z, "x", d), ce(Z, "y", p), ce(Z, "width", f), Te(() => ce(Z, "height", i.walls[0].length * u)), Z;
        })()];
      }
    }), null), ue(y, be(en, {
      get when() {
        return i.walls.length >= 2;
      },
      get children() {
        return [be(r, {
          fromX: d,
          fromY: p - h,
          get toX() {
            return d + i.walls[1].length * u;
          },
          toY: p - h,
          get dimension() {
            return i.walls[1].length.toFixed(0) + "mm";
          }
        }), (() => {
          const Z = fs.cloneNode(!0);
          return ce(Z, "x", d), ce(Z, "y", p), ce(Z, "height", f), Te(() => ce(Z, "width", i.walls[1].length * u)), Z;
        })()];
      }
    }), null), ue(y, be(en, {
      get when() {
        return i.walls.length >= 3;
      },
      get children() {
        return [be(r, {
          fromX: m + h,
          fromY: p,
          toX: m + h,
          get toY() {
            return p + i.walls[2].length * u;
          },
          get dimension() {
            return i.walls[2].length.toFixed(0) + "mm";
          },
          flipLabelSide: !0
        }), (() => {
          const Z = fs.cloneNode(!0);
          return ce(Z, "x", m - f), ce(Z, "y", p), ce(Z, "width", f), Te(() => ce(Z, "height", i.walls[2].length * u)), Z;
        })()];
      }
    }), null), ue(y, be(en, {
      get when() {
        return i.walls.length == 4;
      },
      get children() {
        return [be(r, {
          fromX: d,
          fromY: g + h,
          get toX() {
            return d + i.walls[3].length * u;
          },
          toY: g + h,
          get dimension() {
            return i.walls[3].length.toFixed(0) + "mm";
          },
          flipLabelSide: !0
        }), (() => {
          const Z = fs.cloneNode(!0);
          return ce(Z, "x", d), ce(Z, "y", g - f), ce(Z, "height", f), Te(() => ce(Z, "width", i.walls[3].length * u)), Z;
        })()];
      }
    }), null), ue(F, () => t.numPanels()), ue(D, () => "Panels are " + i.panelWidth.toFixed(0) + "mm wide x " + i.panelHeight.toFixed(0) + "mm high."), ue(E, () => t.numGates()), ue(X, () => {
      let Z = e();
      return Z == null ? "No gate size selected." : "Gates are " + Z.width + "mm wide x " + Z.height + "mm high.";
    }), ue(ne, () => t.numCornerPosts()), ue(de, () => i.postMaterial == "Alum" ? "aluminium" : "galv", C), ue(de, () => (t.cornerPostLength() / 1e3).toFixed(1), A), ue(U, () => {
      let Z = t.totalPrice();
      switch (Z.type) {
        case "success":
          return "$" + Z.value.toFixed(2);
        case "pending":
          return "Loading...";
        case "error":
          return "Error (" + Z.message + ")";
      }
    }, null), ue(P, be(Os, {
      get productDescription() {
        return t.productDescription();
      },
      get onRequestQuote() {
        return i.onRequestQuote;
      }
    }), null), v;
  })();
}, ly = /* @__PURE__ */ Ce('<div style="display: inline; border-radius: 50%; width: 12px; height: 12px; padding: 4px; background-color: #fff; border: none; color: #000; text-align: center; font: 12px Arial, sans-serif; font-weight: bold;"></div>'), cy = /* @__PURE__ */ Ce('<div><div style="display: flex; flex-direction: row; height: 50px; align-items: center;"><div style="flex-grow: 1;"></div><div></div><div style="flex-grow: 1;"></div></div></div>'), hy = /* @__PURE__ */ Ce('<div style="display: grid; grid-template-columns: auto auto auto; grid-gap: 20px;"></div>'), dy = /* @__PURE__ */ Ce("<button>BACK</button>"), uy = /* @__PURE__ */ Ce('<button style="margin-left: 20px;">NEXT</button>'), ko = (i) => {
  let e = (t) => (() => {
    const n = ly.cloneNode(!0);
    return ue(n, t), n;
  })();
  return (() => {
    const t = cy.cloneNode(!0), n = t.firstChild, r = n.firstChild, s = r.nextSibling;
    return aa(t, "click", i.onClick, !0), t.style.setProperty("width", "250px"), t.style.setProperty("cursor", "pointer"), t.style.setProperty("border-radius", "20px"), ue(n, () => e(i.number), s), s.style.setProperty("padding-left", "10px"), s.style.setProperty("font-size", "18px"), ue(s, () => i.label), Te((o) => {
      const a = i.selected ? "rgb(69,149,199)" : "#e6e4e2", c = i.selected ? "white" : "black";
      return a !== o._v$ && t.style.setProperty("background-color", o._v$ = a), c !== o._v$2 && s.style.setProperty("color", o._v$2 = c), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), t;
  })();
}, fy = (i) => {
  let [e, t] = Zn({
    selectedTab: "FenceShape",
    selectedFenceShape: "Inline",
    spansAndGatesSelectedWall: "A",
    walls: [{
      length: 6e3,
      hasGate: !1
    }],
    selectedGateSizeIdx: void 0,
    postMaterial: "Alum",
    postSize: "50"
  });
  {
    let n = te(() => {
      switch (e.selectedFenceShape) {
        case "Inline":
          return 1;
        case "LShape":
          return 2;
        case "UShape":
          return 3;
        case "Enclosed":
          return 4;
      }
    });
    vt(() => {
      let r = n();
      e.walls.length < r && t("walls", [...e.walls, ...Array(r - e.walls.length).fill(void 0).map((s) => ({
        length: 6e3,
        hasGate: !1,
        postType: "Inground"
      }))]), e.walls.length > r && t("walls", e.walls.slice(0, r));
    });
  }
  return [(() => {
    const n = hy.cloneNode(!0);
    return ue(n, be(ko, {
      number: "1",
      label: "Fence Shape",
      get selected() {
        return e.selectedTab == "FenceShape";
      },
      onClick: () => t("selectedTab", "FenceShape")
    }), null), ue(n, be(ko, {
      number: "2",
      label: "Spans & Gates",
      get selected() {
        return e.selectedTab == "SpansAndGates";
      },
      onClick: () => {
        dn(() => {
          t("selectedTab", "SpansAndGates"), t("spansAndGatesSelectedWall", "A");
        });
      }
    }), null), ue(n, be(ko, {
      number: "3",
      label: "Plan & Component List",
      get selected() {
        return e.selectedTab == "PlanAndComponentList";
      },
      onClick: () => t("selectedTab", "PlanAndComponentList")
    }), null), n;
  })(), be(Er, {
    get children() {
      return [be(tn, {
        get when() {
          return e.selectedTab == "FenceShape";
        },
        get children() {
          return be(gh, {
            get fenceShape() {
              return e.selectedFenceShape;
            },
            onFenceShapeSelected: (n) => {
              t("selectedFenceShape", n);
            }
          });
        }
      }), be(tn, {
        get when() {
          return e.selectedTab == "SpansAndGates";
        },
        get children() {
          return be(iy, {
            get panelWidth() {
              return i.panelWidth;
            },
            get panelHeight() {
              return i.panelHeight;
            },
            get fenceShape() {
              return e.selectedFenceShape;
            },
            get selectedWall() {
              return e.spansAndGatesSelectedWall;
            },
            onWallSelected: (n) => t("spansAndGatesSelectedWall", n),
            get walls() {
              return e.walls;
            },
            onWallLengthChanged: (n, r) => {
              t("walls", n, "length", r);
            },
            onWallHasGateChanged: (n, r) => {
              t("walls", n, "hasGate", r);
            },
            get gateSizes() {
              return i.gateSizes;
            },
            get selectedGateSizeIdx() {
              return e.selectedGateSizeIdx;
            },
            onSelectedGateSizeIdxChanged: (n) => t("selectedGateSizeIdx", n),
            get postMaterial() {
              return e.postMaterial;
            },
            get postSize() {
              return e.postSize;
            },
            onPostMaterialChanged: (n) => {
              t("postMaterial", n);
            },
            onPostSizeChanged: (n) => {
              t("postSize", n);
            }
          });
        }
      }), be(tn, {
        get when() {
          return e.selectedTab == "PlanAndComponentList";
        },
        get children() {
          return be(ay, {
            get profile() {
              return i.profile;
            },
            get panelWidth() {
              return i.panelWidth;
            },
            get panelHeight() {
              return i.panelHeight;
            },
            get gateSizes() {
              return i.gateSizes;
            },
            get postRailColour() {
              return i.postRailColour;
            },
            get sheetingColour() {
              return i.sheetingColour;
            },
            get selectedGateSizeIdx() {
              return e.selectedGateSizeIdx;
            },
            get postMaterial() {
              return e.postMaterial;
            },
            get postSize() {
              return e.postSize;
            },
            get walls() {
              return e.walls;
            },
            get onRequestQuote() {
              return i.onRequestQuote;
            }
          });
        }
      })];
    }
  }), (() => {
    const n = dy.cloneNode(!0);
    return n.$$click = () => {
      switch (e.selectedTab) {
        case "FenceShape":
          break;
        case "SpansAndGates":
          switch (e.spansAndGatesSelectedWall) {
            case "B":
              t("spansAndGatesSelectedWall", "A");
              break;
            case "C":
              t("spansAndGatesSelectedWall", "B");
              break;
            case "D":
              t("spansAndGatesSelectedWall", "C");
              break;
            default:
              t("selectedTab", "FenceShape");
              break;
          }
          break;
        case "PlanAndComponentList":
          dn(() => {
            switch (t("selectedTab", "SpansAndGates"), e.selectedFenceShape) {
              case "Inline":
                t("spansAndGatesSelectedWall", "A");
                break;
              case "LShape":
                t("spansAndGatesSelectedWall", "B");
                break;
              case "UShape":
                t("spansAndGatesSelectedWall", "C");
                break;
              case "Enclosed":
                t("spansAndGatesSelectedWall", "D");
                break;
            }
          });
          break;
      }
    }, Te(() => Ms(n, e.selectedTab == "FenceShape" ? "btn-greyed-out" : void 0)), n;
  })(), (() => {
    const n = uy.cloneNode(!0);
    return n.$$click = () => {
      switch (e.selectedTab) {
        case "FenceShape":
          dn(() => {
            t("selectedTab", "SpansAndGates"), t("spansAndGatesSelectedWall", "A");
          });
          break;
        case "SpansAndGates":
          switch (e.spansAndGatesSelectedWall) {
            case "A":
              switch (e.selectedFenceShape) {
                case "LShape":
                case "UShape":
                case "Enclosed":
                  t("spansAndGatesSelectedWall", "B");
                  break;
                default:
                  t("selectedTab", "PlanAndComponentList");
                  break;
              }
              break;
            case "B":
              switch (e.selectedFenceShape) {
                case "UShape":
                case "Enclosed":
                  t("spansAndGatesSelectedWall", "C");
                  break;
                default:
                  t("selectedTab", "PlanAndComponentList");
                  break;
              }
              break;
            case "C":
              e.selectedFenceShape == "Enclosed" ? t("spansAndGatesSelectedWall", "D") : t("selectedTab", "PlanAndComponentList");
              break;
            default:
              t("selectedTab", "PlanAndComponentList");
              break;
          }
          break;
      }
    }, Te(() => Ms(n, e.selectedTab == "PlanAndComponentList" ? "btn-greyed-out" : void 0)), n;
  })()];
};
Yt(["click"]);
const py = /* @__PURE__ */ Ce("<br>"), gy = (i) => {
  let [e, t] = Zn({
    screen: "Panel Dims Colours"
  });
  return vt(() => {
    if (i.onScreenChange == null)
      return;
    let n = i.onScreenChange;
    vt(() => {
      switch (e.screen) {
        case "Panel Dims Colours": {
          n({
            screen: "Panel Dims Colours"
          });
          break;
        }
        case "Boundary Size": {
          let r = e;
          n({
            screen: "Boundary Size",
            goBack: () => {
              t(Ta({
                screen: "Panel Dims Colours",
                panelHeight: r.panelHeight,
                panelWidth: r.panelWidth,
                postRailColour: r.postRailColour,
                sheetingColour: r.sheetingColour
              }));
            }
          });
          break;
        }
      }
    });
  }), be(Er, {
    get children() {
      return [be(tn, {
        get when() {
          return e.screen == "Panel Dims Colours";
        },
        get children() {
          return be(q1, {
            get profile() {
              return i.profile;
            },
            get initWidth() {
              return e.panelWidth;
            },
            get initHeight() {
              return e.panelHeight;
            },
            get initPostRailColour() {
              return e.postRailColour;
            },
            get initSheetingColour() {
              return e.sheetingColour;
            },
            onNext: ({
              height: n,
              width: r,
              postRailColour: s,
              sheetingColour: o
            }) => {
              t(Ta({
                screen: "Boundary Size",
                panelHeight: n,
                panelWidth: r,
                postRailColour: s,
                sheetingColour: o
              }));
            }
          });
        }
      }), be(tn, {
        get when() {
          return e.screen == "Boundary Size";
        },
        get children() {
          return te(() => {
            if (e.screen == "Boundary Size")
              return [py.cloneNode(!0), be(fy, {
                get profile() {
                  return i.profile;
                },
                get gateSizes() {
                  return i.gateSizes;
                },
                get panelWidth() {
                  return e.panelWidth;
                },
                get panelHeight() {
                  return e.panelHeight;
                },
                get postRailColour() {
                  return e.postRailColour;
                },
                get sheetingColour() {
                  return e.sheetingColour;
                },
                get onRequestQuote() {
                  return i.onRequestQuote;
                }
              })];
          });
        }
      })];
    }
  });
}, my = /* @__PURE__ */ Ce("<div><h1> Estimator</h1><hr></div>"), Oo = /* @__PURE__ */ Ce("<hr>"), xy = /* @__PURE__ */ Ce("<button> &lt;- Go Back to Type</button>"), Uo = /* @__PURE__ */ Ce("<br>"), yy = /* @__PURE__ */ Ce("<button> &lt;- Go Back to Style</button>"), _y = /* @__PURE__ */ Ce("<button> &lt;- Go Back to Sheeted Fence Panel Dims / Colours</button>"), vy = (i) => {
  let e, [t, n] = Zn({}), r = () => {
    e != null && n("appDivWidth", e.clientWidth);
  };
  na(() => {
    e != null && n("appDivWidth", e.clientWidth), window.addEventListener("resize", r);
  }), ot(() => {
    window.removeEventListener("resize", r);
  });
  let s = te(() => {
    if (t.selectedType != null)
      return zo[t.selectedType].styles;
  }), o = td();
  return (() => {
    const a = my.cloneNode(!0), c = a.firstChild, l = c.firstChild, h = c.nextSibling, u = e;
    return typeof u == "function" ? Ls(u, a) : e = a, ue(c, () => t.selectedStyle == null ? "Fence" : Gt[t.selectedStyle].displayName, l), ue(a, be(cd, {
      get children() {
        return [be(Vs, {
          path: "/",
          get element() {
            return te(() => {
              dn(() => {
                n("selectedType", void 0), n("selectedStyle", void 0);
              });
              let d = te(() => t.appDivWidth == null ? 5 : Math.floor(t.appDivWidth / 300));
              return [Oo.cloneNode(!0), be(Hx, {
                fenceTypes: zo,
                get numColumns() {
                  return d();
                },
                onFenceTypeSelected: (p) => {
                  o("/" + p);
                }
              })];
            });
          }
        }), be(Vs, {
          path: "/:fenceType",
          get element() {
            return te(() => {
              let p = Pa().fenceType;
              dn(() => {
                n("selectedType", p), n("selectedStyle", void 0);
              });
              let m = s();
              if (m == null)
                return;
              let g = m, f = te(() => t.appDivWidth == null ? 5 : Math.floor(t.appDivWidth / 300));
              return [Oo.cloneNode(!0), (() => {
                const v = xy.cloneNode(!0);
                return v.$$click = () => {
                  o("/");
                }, v;
              })(), Uo.cloneNode(!0), be(Bx, {
                fenceStyles: Gt,
                avaliableFenceStyles: g,
                get numColumns() {
                  return f();
                },
                onFenceStyleSelected: (v) => {
                  o("/" + p + "/" + v);
                }
              })];
            });
          }
        }), be(Vs, {
          path: "/:fenceType/:fenceStyle",
          get element() {
            return te(() => {
              const d = Pa();
              let p = d.fenceType, m = d.fenceStyle, g = Gt[m]?.sizes ?? [], f = Gt[m]?.gateSizes ?? [];
              dn(() => {
                n("selectedType", p), n("selectedStyle", m);
              });
              let v = te(() => {
                switch (m) {
                  default:
                  case "corrugated":
                    return "Corrugated";
                  case "steelclad":
                    return "Steelclad";
                  case "supersaw":
                    return "Supersaw";
                  case "unirib":
                    return "UniRib";
                }
              }), [w, x] = Ut({
                x: void 0
              });
              return [Oo.cloneNode(!0), () => {
                let _ = w().x;
                if (_ == null)
                  return (() => {
                    const y = yy.cloneNode(!0);
                    return y.$$click = () => {
                      o("/" + p);
                    }, y;
                  })();
                {
                  let y = _;
                  return (() => {
                    const P = _y.cloneNode(!0);
                    return P.$$click = () => {
                      y();
                    }, P;
                  })();
                }
              }, Uo.cloneNode(!0), be(Er, {
                get children() {
                  return [be(tn, {
                    get when() {
                      return Gt[m].type == null || Gt[m].type == "Fence" || Gt[m].type == "Security Fence";
                    },
                    get children() {
                      return [Uo.cloneNode(!0), be(Fx, {
                        fenceType: p,
                        fenceStyle: m,
                        get isPoolFence() {
                          return zo[p].isPoolFence ?? !1;
                        },
                        get isArchedSpear() {
                          return Gt[m].isArchedSpear ?? !1;
                        },
                        get numRails() {
                          return Gt[m].numRails ?? 2;
                        },
                        fenceSizes: g,
                        gateSizes: f,
                        get onRequestQuote() {
                          return i.onRequestQuote;
                        }
                      })];
                    }
                  }), be(tn, {
                    get when() {
                      return Gt[m].type == "Sheeted Fence";
                    },
                    get children() {
                      return be(gy, {
                        get profile() {
                          return v();
                        },
                        gateSizes: f,
                        onScreenChange: (_) => {
                          switch (_.screen) {
                            case "Panel Dims Colours":
                              x({
                                x: void 0
                              });
                              break;
                            case "Boundary Size":
                              x({
                                x: _.goBack
                              });
                              break;
                          }
                        },
                        get onRequestQuote() {
                          return i.onRequestQuote;
                        }
                      });
                    }
                  }), be(tn, {
                    get when() {
                      return Gt[m].type == "Security Fence";
                    },
                    get children() {
                      return be(a1, {
                        fenceType: p,
                        fenceStyle: m,
                        fenceSizes: g,
                        gateSizes: f,
                        get onRequestQuote() {
                          return i.onRequestQuote;
                        }
                      });
                    }
                  }), be(tn, {
                    get when() {
                      return Gt[m].type == "Mesh Fence";
                    },
                    get children() {
                      return be(Zx, {
                        fenceType: p,
                        fenceStyle: m,
                        fenceSizes: g,
                        gateSizes: f,
                        get onRequestQuote() {
                          return i.onRequestQuote;
                        }
                      });
                    }
                  })];
                }
              })];
            });
          }
        })];
      }
    }), h), a;
  })();
};
Yt(["click"]);
class by extends HTMLElement {
  cleanup = void 0;
  connectedCallback() {
    let e = this.attachShadow({
      mode: "open"
    }), t = document.createElement("div");
    e.appendChild(t);
    let n = document.createElement("style");
    n.innerText = Gh, e.appendChild(n);
    const r = this;
    this.cleanup = kh(() => be(ld, {
      get source() {
        return Xh();
      },
      get children() {
        return be(vy, {
          onRequestQuote: (s) => {
            r.dispatchEvent(new CustomEvent("requestQuote", {
              detail: s
            }));
          }
        });
      }
    }), t);
  }
  disconnectedCallback() {
    this.cleanup != null && (this.cleanup(), this.cleanup = void 0);
  }
}
customElements.define("fence-calculator", by);
