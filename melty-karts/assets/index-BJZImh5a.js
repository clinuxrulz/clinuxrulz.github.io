(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Xe extends Error{source;constructor(t){super(),this.source=t}}class rl extends Error{source;constructor(t,e){super(e instanceof Error?e.message:String(e),{cause:e}),this.source=t}}const Uh=0,mr=1,Gs=2,na=4,si=8,Tr=16,Cn=32,wr=64,Ar=128,fc=256,ol=512,me=1,pn=2,ln=4,Ns=1,kn=2,kr=3,pe={},_d={},xd="sp",Fh={},vd=Symbol("refresh");function Oh(i,t){const e=(i.i?.t?i.i.u?.o:i.i?.o)??-1;e>=i.o&&(i.o=e+1);const n=i.o,s=t.l[n];if(s===void 0)t.l[n]=i;else{const r=s.T;r.S=i,i.T=r,s.T=i}n>t.R&&(t.R=n)}function ia(i,t){let e=i.O;e&(si|na)||(e&mr?i.O=e&-4|Gs|si:i.O=e|si,e&Tr||Oh(i,t))}function Bh(i,t){let e=i.O;e&(si|na|Tr)||(i.O=e|Tr,Oh(i,t))}function Vr(i,t){const e=i.O;if(!(e&(si|Tr)))return;i.O=e&-25;const n=i.o;if(i.T===i)t.l[n]=void 0;else{const s=i.S,r=t.l[n],o=s??r;i===r?t.l[n]=s:i.T.S=s,o.T=i.T}i.T=i,i.S=void 0}function yd(i){if(!i._){i._=!0;for(let t=0;t<=i.R;t++)for(let e=i.l[t];e!==void 0;e=e.S)e.O&si&&Go(e)}}function Go(i,t=Gs){const e=i.O;if(!((e&(mr|Gs))>=t)){i.O=e&-4|t;for(let n=i.I;n!==null;n=n.h)Go(n.p,mr);if(i.A!==null)for(let n=i.A;n!==null;n=n.N)for(let s=n.I;s!==null;s=s.h)Go(s.p,mr)}}function Io(i,t){for(i._=!1,i.P=0;i.P<=i.R;i.P++){let e=i.l[i.P];for(;e!==void 0;)e.O&si?t(e):Md(e,i),e=i.l[i.P]}i.R=0}function Md(i,t){Vr(i,t);let e=i.o;for(let n=i.C;n;n=n.D){const s=n.m,r=s.V||s;r.L&&r.o>=e&&(e=r.o+1)}if(i.o!==e){i.o=e;for(let n=i.I;n!==null;n=n.h)Bh(n.p,t)}}const jr=new Set,Ne={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},mn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Oe=0,Ht=null,Rr=!1,Gr=!1,Lo=null;function Sd(i){return!!Lo?.has(i)}function $r(i){for(const t of Ri){if(t.U||t.k.size>0)continue;const e=t.G[i-1];e.length&&(t.G[i-1]=[],Ho(e,i))}}function Ed(i){for(let t=i.I;t!==null;t=t.h){const e=t.p;if(!e.W)continue;if(e.W===kr){e.H||(e.H=!0,e.F.enqueue(kn,e.M));continue}const n=e.O&Cn?mn:Ne;n.P>e.o&&(n.P=e.o),ia(e,n)}}function mi(i){Gr=i}function bd(i,t){t.j=i,i.$.push(...t.$);for(const e of Ri)e.K===t&&(e.K=i);i.Y.push(...t.Y);for(const e of t.Z)i.Z.add(e);for(const[e,n]of t.B){let s=i.B.get(e);s||i.B.set(e,s=new Set);for(const r of n)s.add(r)}}function Td(i){for(let t=0;t<i.length;t++){const e=i[t];e.q=void 0,e.X!==pe&&(e.J=e.X,e.X=pe);const n=e.ee;e.ee=pe,n!==pe&&e.J!==n&&Hs(e,!0),e.K=null}i.length=0}function wd(i){for(const t of Ri)(i?t.K===i:!t.K)&&(t.U||(t.G[0].length&&Ho(t.G[0],Ns),t.G[1].length&&Ho(t.G[1],kn)),t.te.q===t&&(t.te.q=void 0),t.k.clear(),t.G[0].length=0,t.G[1].length=0,Ri.delete(t),Wo.delete(t.te))}function Ai(){Rr||(Rr=!0,!Se.ne&&!Gr&&queueMicrotask(al))}class Ad{i=null;ie=[[],[]];re=[];created=Oe;addChild(t){this.re.push(t),t.i=this}removeChild(t){const e=this.re.indexOf(t);e>=0&&(this.re.splice(e,1),t.i=null)}notify(t,e,n,s){return this.i?this.i.notify(t,e,n,s):!1}run(t){if(this.ie[t-1].length){const e=this.ie[t-1];this.ie[t-1]=[],Ho(e,t)}for(let e=0;e<this.re.length;e++)this.re[e].run?.(t)}enqueue(t,e){t&&(En?qe(En).G[t-1].push(e):this.ie[t-1].push(e)),Ai()}stashQueues(t){t.ie[0].push(...this.ie[0]),t.ie[1].push(...this.ie[1]),this.ie=[[],[]];for(let e=0;e<this.re.length;e++){let n=this.re[e],s=t.re[e];s||(s={ie:[[],[]],re:[]},t.re[e]=s),n.stashQueues(s)}}restoreQueues(t){this.ie[0].push(...t.ie[0]),this.ie[1].push(...t.ie[1]);for(let e=0;e<t.re.length;e++){const n=t.re[e];let s=this.re[e];s&&s.restoreQueues(n)}}}class ri extends Ad{ne=!1;se=[];Y=[];Z=new Set;static oe;static ue;static ce=null;flush(){if(!this.ne){this.ne=!0;try{if(Io(Ne,ri.oe),Ht){if(!Cd(Ht)){const n=Ht;if(Io(mn,ri.oe),this.se=[],this.Y=[],this.Z=new Set,$r(Ns),$r(kn),this.stashQueues(n.ae),Oe++,Rr=Ne.R>=Ne.P,Qc(n.se),Ht=null,!n.$.length&&n.Y.length){Lo=new Set;for(let s=0;s<n.Y.length;s++){const r=n.Y[s];r.L||r.le||(Lo.add(r),Ed(r))}}try{pa(null,!0)}finally{Lo=null}return}this.se!==Ht.se&&this.se.push(...Ht.se),this.restoreQueues(Ht.ae),jr.delete(Ht);const e=Ht;Ht=null,Qc(this.se),pa(e)}else jr.size&&Io(mn,ri.oe),pa();Oe++,Rr=Ne.R>=Ne.P,$r(Ns),this.run(Ns),$r(kn),this.run(kn)}finally{this.ne=!1}}}notify(t,e,n,s){if(e&me){if(n&me){const r=s!==void 0?s:t.fe;if(Ht&&r){const o=r.source;let a=Ht.B.get(o);a||Ht.B.set(o,a=new Set);const l=a.size;a.add(t),a.size!==l&&Ai()}}return!0}return!1}initTransition(t){if(t&&(t=Vh(t)),!(t&&t===Ht)&&!(!t&&Ht&&Ht.Ee===Oe)){if(!Ht)Ht=t??{Ee:Oe,se:[],B:new Map,Y:[],Z:new Set,$:[],ae:{ie:[[],[]],re:[]},j:!1};else if(t){const e=Ht;bd(t,e),jr.delete(e),Ht=t}if(jr.add(Ht),Ht.Ee=Oe,this.se!==Ht.se){for(let e=0;e<this.se.length;e++){const n=this.se[e];n.K=Ht,Ht.se.push(n)}this.se=Ht.se}if(this.Y!==Ht.Y){for(let e=0;e<this.Y.length;e++){const n=this.Y[e];n.K=Ht,Ht.Y.push(n)}this.Y=Ht.Y}for(const e of Ri)e.K||(e.K=Ht);if(this.Z!==Ht.Z){for(const e of this.Z)Ht.Z.add(e);this.Z=Ht.Z}}}}function Hs(i,t=!1){const e=i.q||En,n=i.de!==void 0;for(let s=i.I;s!==null;s=s.h){if(n&&s.p.Te){s.p.O|=fc;continue}t&&e?(s.p.O|=Ar,Hh(s.p,e)):t&&(s.p.O|=Ar,s.p.q=void 0);const r=s.p;if(r.W===kr){r.H||(r.H=!0,r.F.enqueue(kn,r.M));continue}const o=s.p.O&Cn?mn:Ne;o.P>s.p.o&&(o.P=s.p.o),ia(s.p,o)}}function Kc(){const i=Se.se;for(let t=0;t<i.length;t++){const e=i[t];e.X!==pe&&(e.J=e.X,e.X=pe,e.W&&e.W!==kr&&(e.H=!0)),e.Se&me||(e.Se&=~ln),e.L&&ri.ue(e,!1,!0)}i.length=0}function pa(i=null,t=!1){const e=!t;e&&Kc(),t||zh(Se),Ne.R>=Ne.P&&Io(Ne,ri.oe),e&&(Kc(),Td(i?i.Y:Se.Y),i?i.Z:Se.Z,wd(i))}function zh(i){for(const t of i.re)t.checkSources?.(),zh(t)}function kh(i){Se.Z.add(i),Ai()}function Qc(i){for(let t=0;t<i.length;t++)i[t].K=Ht}const Se=new ri;function al(){if(!Se.ne)for(;Rr||Ht;)Se.flush()}function Ho(i,t){for(let e=0;e<i.length;e++)i[e](t)}function Rd(i,t){if(i.O&(Cn|wr))return!1;if(i.Re===t||i.Oe?.has(t))return!0;for(let e=i.C;e;e=e.D){let n=e.m;for(;n;){if(n===t||n.V===t)return!0;n=n._e}}return!!(i.Se&me&&i.fe instanceof Xe&&i.fe.source===t)}function Cd(i){if(i.j)return!0;if(i.$.length)return!1;let t=!0;for(const[e,n]of i.B){let s=!1;for(const r of n){if(Rd(r,e)){s=!0;break}n.delete(r)}if(!s)i.B.delete(e);else if(e.Se&me&&e.fe?.source===e){t=!1;break}}if(t)for(let e=0;e<i.Y.length;e++){const n=i.Y[e];if(sa(n)&&"Se"in n&&n.Se&me&&n.fe instanceof Xe&&n.fe.source!==n){t=!1;break}}return t&&(i.j=!0),t}function Vh(i){for(;i.j&&typeof i.j=="object";)i=i.j;return i}function Pd(i,t){const e=Ht;try{return Ht=Vh(i),t()}finally{Ht=e}}const Wo=new WeakMap,Ri=new Set;function Id(i){let t=Wo.get(i);if(t)return qe(t);const e=i._e,n=e?.q?qe(e.q):null;return t={te:i,k:new Set,G:[[],[]],U:null,K:Ht,Ie:n},Wo.set(i,t),Ri.add(t),i.he=!1,t}function qe(i){for(;i.U;)i=i.U;return i}function Gh(i,t){if(i=qe(i),t=qe(t),i===t)return i;t.U=i;for(const e of t.k)i.k.add(e);return i.G[0].push(...t.G[0]),i.G[1].push(...t.G[1]),i}function Cr(i){const t=i.q;if(!t)return;const e=qe(t);if(Ri.has(e))return e;i.q=void 0}function cr(i){return Cr(i)?.K??i.K}function sa(i){return i.ee!==void 0&&i.ee!==pe}function Hh(i,t){const e=qe(t),n=i.q;if(n){if(n.U){i.q=t;return}const s=qe(n);if(Ri.has(s)){s!==e&&!sa(i)&&(e.Ie&&qe(e.Ie)===s?i.q=t:s.Ie&&qe(s.Ie)===e||Gh(e,s));return}}i.q=t}function dc(i){const t=i.m,e=i.D,n=i.h,s=i.pe;return n!==null?n.pe=s:t.Ae=s,s!==null?s.h=n:(t.I=n,n===null&&(t.Ne?.(),t.L&&!t.Pe&&!(t.O&Cn)&&Ld(t))),e}function Ld(i){Vr(i,i.O&Cn?mn:Ne);let t=i.C;for(;t!==null;)t=dc(t);i.C=null,Hr(i,!0)}function Zr(i,t){const e=t.ge;if(e!==null&&e.m===i)return;let n=null;const s=t.O&na;if(s&&(n=e!==null?e.D:t.C,n!==null&&n.m===i)){t.ge=n;return}const r=i.Ae;if(r!==null&&r.p===t&&(!s||Dd(r,t)))return;const o=t.ge=i.Ae={m:i,p:t,D:n,pe:r,h:null};e!==null?e.D=o:t.C=o,r!==null?r.h=o:i.I=o}function Dd(i,t){const e=t.ge;if(e!==null){let n=t.C;do{if(n===i)return!0;if(n===e)break;n=n.D}while(n!==null)}return!1}function Wh(i){let t=i.Ce;for(;t;)t.O|=Cn,t.O&si&&(Vr(t,Ne),ia(t,mn)),Wh(t),t=t.De}function Hr(i,t=!1,e){if(i.O&wr)return;t&&(i.O=wr),t&&i.L&&(i.ye=null);let n=e?i.ve:i.Ce;for(;n;){const s=n.De;if(n.C){const r=n;Vr(r,r.O&Cn?mn:Ne);let o=r.C;do o=dc(o);while(o!==null);r.C=null,r.ge=null}Hr(n,!0),n=s}e?i.ve=null:(i.Ce=null,i.me=0),Nd(i,e)}function Nd(i,t){let e=t?i.we:i.Ve;if(e){if(Array.isArray(e))for(let n=0;n<e.length;n++){const s=e[n];s.call(s)}else e.call(e);t?i.we=null:i.Ve=null}}function Ud(i,t){let e=i;for(;e.be&&e.i;)e=e.i;if(e.id!=null)return Fd(e.id,e.me++);throw new Error("Cannot get child id from owner without an id")}function Xh(i){return Ud(i)}function Fd(i,t){const e=t.toString(36),n=e.length-1;return i+(n?String.fromCharCode(64+n):"")+e}function Ye(){return je?ie:null}function Od(){return ie}function pc(i){return ie&&(ie.Ve?Array.isArray(ie.Ve)?ie.Ve.push(i):ie.Ve=[ie.Ve,i]:ie.Ve=i),i}function gr(i){const t=ie,e=i?.transparent??!1,n={id:i?.id??(e?t?.id:t?.id!=null?Xh(t):void 0),be:e||void 0,t:!0,u:t?.t?t.u:t,Ce:null,De:null,Ve:null,F:t?.F??Se,Le:t?.Le||Fh,me:0,we:null,ve:null,i:t,dispose(s=!0){Hr(n,s)}};if(t){const s=t.Ce;s===null||(n.De=s),t.Ce=n}return n}function mc(i,t){const e=gr(t);return Is(e,()=>i(e.dispose))}function Bd(i,t){return i.Re===t||i.Oe?.has(t)?!1:i.Re?(i.Oe?i.Oe.add(t):i.Oe=new Set([i.Re,t]),i.Re=void 0,!0):(i.Re=t,!0)}function zd(i,t){return i.Re?i.Re!==t?!1:(i.Re=void 0,!0):i.Oe?.delete(t)?(i.Oe.size===1?(i.Re=i.Oe.values().next().value,i.Oe=void 0):i.Oe.size===0&&(i.Oe=void 0),!0):!1}function qh(i){i.Re=void 0,i.Oe?.clear(),i.Oe=void 0}function Xo(i,t,e){if(!t){i.fe=null;return}if(e instanceof Xe&&e.source===t){i.fe=e;return}const n=i.fe;(!(n instanceof Xe)||n.source!==t)&&(i.fe=new Xe(t))}function ll(i,t){for(let e=i.I;e!==null;e=e.h)t(e.p);for(let e=i.A;e!==null;e=e.N)for(let n=e.I;n!==null;n=n.h)t(n.p)}function kd(i){let t=!1;const e=new Set,n=s=>{if(e.has(s)||!zd(s,i))return;e.add(s),s.Ee=Oe;const r=s.Re??s.Oe?.values().next().value;if(r)Xo(s,r),is(s);else{if(s.Se&=~me,Xo(s),is(s),s.Ue){if(s.W===kr){const o=s;o.H||(o.H=!0,o.F.enqueue(kn,o.M))}else{const o=s.O&Cn?mn:Ne;o.P>s.o&&(o.P=s.o),ia(s,o)}t=!0}s.Ue=!1}ll(s,n)};ll(i,n),t&&Ai()}function Yh(i,t,e){const n=typeof t=="object"&&t!==null,s=n&&on(()=>t[Symbol.asyncIterator]),r=!s&&n&&on(()=>typeof t.then=="function");if(!r&&!s)return i.ye=null,t;i.ye=t;let o;const a=c=>{i.ye===t&&(Se.initTransition(cr(i)),gc(i,c instanceof Xe?me:pn,c),i.Ee=Oe)},l=(c,u)=>{if(i.ye!==t||i.O&(Gs|Ar))return;Se.initTransition(cr(i));const f=!!(i.Se&ln);jh(i);const h=Cr(i);if(h&&h.k.delete(i),e)e(c);else if(i.ee!==void 0)i.ee!==void 0&&i.ee!==pe?i.X=c:(i.J=c,Hs(i)),i.Ee=Oe;else if(h){const d=i.W,g=i.J,y=i.ke;(!d&&f||!y||!y(c,g))&&(i.J=c,i.Ee=Oe,i.xe&&fe(i.xe,c),Hs(i,!0))}else fe(i,()=>c);kd(i),Ai(),al(),u?.()};if(r){let c=!1,u=!0;if(t.then(f=>{u?(o=f,c=!0):l(f)},f=>{u||a(f)}),u=!1,!c)throw Se.initTransition(cr(i)),new Xe(ie)}if(s){const c=t[Symbol.asyncIterator]();let u=!1,f=!1;pc(()=>{if(!f){f=!0;try{const g=c.return?.();g&&typeof g.then=="function"&&g.then(void 0,()=>{})}catch{}}});const h=()=>{let g,y=!1,m=!0;return c.next().then(p=>{if(m)g=p,y=!0,p.done&&(f=!0);else{if(i.ye!==t)return;p.done?(f=!0,Ai(),al()):l(p.value,h)}},p=>{!m&&i.ye===t&&(f=!0,a(p))}),m=!1,y&&!g.done?(o=g.value,u=!0,h()):y&&g.done},d=h();if(!u&&!d)throw Se.initTransition(cr(i)),new Xe(ie)}return o}function jh(i,t=!1){qh(i),i.Ue=!1,i.Se=t?0:i.Se&ln,Xo(i),is(i),i.Ge?.()}function gc(i,t,e,n,s){t===pn&&!(e instanceof rl)&&!(e instanceof Xe)&&(e=new rl(i,e));const r=t===me&&e instanceof Xe?e.source:void 0,o=r===i,a=t===me&&i.ee!==void 0&&!o,l=a&&sa(i);n||(t===me&&r?(Bd(i,r),i.Se=me|i.Se&ln,Xo(i,r,e)):(qh(i),i.Se=t|(t!==pn?i.Se&ln:0),i.fe=e),is(i)),s&&!n&&Hh(i,s);const c=n||l,u=n||a?void 0:s;if(i.Ge){if(n&&t===me)return;c?i.Ge(t,e):i.Ge();return}ll(i,f=>{f.Ee=Oe,(t===me&&r&&f.Re!==r&&!f.Oe?.has(r)||t!==me&&(f.fe!==e||f.Re||f.Oe))&&(!c&&!f.K&&Se.se.push(f),gc(f,t,e,c,u))})}let Vd=null;ri.oe=wi;ri.ue=Hr;let je=!1,Zi=!1,ie=null,En=null;function wi(i,t=!1){const e=i.W;t||(i.K&&(!e||Ht)&&Ht!==i.K&&Se.initTransition(i.K),Vr(i,i.O&Cn?mn:Ne),i.ye=null,i.K||e===kr?Hr(i):(Wh(i),i.we=i.Ve,i.ve=i.Ce,i.Ve=null,i.Ce=null,i.me=0));const n=!!(i.O&Ar),s=i.ee!==void 0&&i.ee!==pe,r=!!(i.Se&me),o=!!(i.Se&ln),a=ie;ie=i,i.ge=null,i.O=na,i.Ee=Oe;let l=i.X===pe?i.J:i.X,c=i.o,u=je,f=En;if(je=!0,n){const h=Cr(i);h&&(En=h)}try{l=Yh(i,i.L(l)),jh(i,t);const h=Cr(i);h&&(h.k.delete(i),is(h.te))}catch(h){if(h instanceof Xe&&En){const d=qe(En);d.te!==i&&(d.k.add(i),i.q=d,is(d.te))}h instanceof Xe&&(i.Ue=!0),gc(i,h instanceof Xe?me:pn,h,void 0,h instanceof Xe?i.q:void 0)}finally{je=u,i.O=Uh|(t?i.O&fc:0),ie=a}if(!i.fe){const h=i.ge;let d=h!==null?h.D:i.C;if(d!==null){do d=dc(d);while(d!==null);h!==null?h.D=null:i.C=null}const g=s?i.ee:i.X===pe?i.J:i.X;if(!e&&o||!i.ke||!i.ke(g,l)){const m=s?i.ee:void 0;t||e&&Ht!==i.K||n?(i.J=l,s&&n&&(i.ee=l,i.X=l)):i.X=l,s&&!n&&r&&!i.he&&(i.ee=l),(!s||n||i.ee!==m)&&Hs(i,n||s)}else if(s)i.X=l;else if(i.o!=c)for(let m=i.I;m!==null;m=m.h)Bh(m.p,m.p.O&Cn?mn:Ne)}En=f,(!t||i.Se&me)&&!i.K&&!(Ht&&s)&&Se.se.push(i),i.K&&e&&Ht!==i.K&&Pd(i.K,()=>wi(i))}function $h(i){if(i.O&mr)for(let t=i.C;t;t=t.D){const e=t.m,n=e.V||e;if(n.L&&$h(n),i.O&Gs)break}(i.O&(Gs|Ar)||i.fe&&i.Ee<Oe&&!i.ye)&&wi(i),i.O=i.O&(fc|si|Tr)}function ra(i,t,e){const n=e?.transparent??!1,s={id:e?.id??(n?ie?.id:ie?.id!=null?Xh(ie):void 0),be:n||void 0,ke:e?.equals!=null?e.equals:Pr,le:!!e?.pureWrite,Ne:e?.unobserved,Ve:null,F:ie?.F??Se,Le:ie?.Le??Fh,me:0,L:i,J:t,o:0,A:null,S:void 0,T:null,C:null,ge:null,I:null,Ae:null,i:ie,De:null,Ce:null,O:e?.lazy?ol:Uh,Se:ln,Ee:Oe,X:pe,we:null,ve:null,ye:null,K:null};s.T=s;const r=ie?.t?ie.u:ie;if(ie){const o=ie.Ce;o===null||(s.De=o),ie.Ce=s}return r&&(s.o=r.o+1),!e?.lazy&&wi(s,!0),s}function _r(i,t,e=null){const n={ke:t?.equals!=null?t.equals:Pr,le:!!t?.pureWrite,He:!!t?.He,Ne:t?.unobserved,J:i,I:null,Ae:null,Ee:Oe,V:e,N:e?.A||null,X:pe};return e&&(e.A=n),n}function Pr(i,t){return i===t}function on(i,t){if(!je)return i();const e=je;je=!1;try{return i()}finally{je=e}}function Ji(i){let t=ie;t?.t&&(t=t.u),i.O&ol&&(i.O&=~ol,wi(i,!0));const e=i.V||i;if(t&&je&&(i.L&&i.O&wr&&wi(i),Zr(i,t),e.L)){const n=i.O&Cn;e.o>=(n?mn.P:Ne.P)&&(Go(t),yd(n?mn:Ne),$h(e));const s=e.o;s>=t.o&&i.i!==t&&(t.o=s+1)}if(e.Se&me)if(t&&!(Zi&&e.K&&Ht!==e.K))if(En){const n=e.q,s=qe(En);if(n&&qe(n)===s&&!sa(e))throw!je&&i!==t&&Zr(i,t),e.fe}else throw!je&&i!==t&&Zr(i,t),e.fe;else{if(t&&e!==i&&e.Se&ln)throw!je&&i!==t&&Zr(i,t),e.fe;if(!t&&e.Se&ln)throw e.fe}if(i.L&&i.Se&pn){if(i.Ee<Oe)return wi(i),Ji(i);throw i.fe}return i.ee!==void 0&&i.ee!==pe?t&&Zi&&Sd(i)?i.J:i.ee:!t||En!==null&&(i.ee!==void 0||i.q||e===i&&Zi||e.Se&me)||i.X===pe||Zi&&i.K&&Ht!==i.K?i.J:i.X}function fe(i,t){i.K&&Ht!==i.K&&Se.initTransition(i.K);const e=i.ee!==void 0&&!Gr,n=i.ee!==void 0&&i.ee!==pe,s=e?n?i.ee:i.J:i.X===pe?i.J:i.X;if(typeof t=="function"&&(t=t(s)),!(!i.ke||!i.ke(s,t)||!!(i.Se&ln)))return e&&n&&i.L&&(Hs(i,!0),Ai()),t;if(e){const o=i.ee===pe;o||Se.initTransition(cr(i)),o&&(i.X=i.J,Se.Y.push(i)),i.he=!0;const a=Id(i);i.q=a,i.ee=t}else i.X===pe&&Se.se.push(i),i.X=t;return is(i),i.xe&&fe(i.xe,t),i.Ee=Oe,Hs(i,e),Ai(),t}function Is(i,t){const e=ie,n=je;ie=i,je=!1;try{return t()}finally{ie=e,je=n}}function Gd(i){const t=i,e=i.V;if(e&&i.X!==pe)return!e.ye&&!(e.Se&me);if(i.ee!==void 0&&i.ee!==pe){if(t.Se&me&&!(t.Se&ln))return!0;if(i._e){const n=i.q?qe(i.q):null;return!!(n&&n.k.size>0)}return!0}return i.ee!==void 0&&i.ee===pe&&!i._e?!1:i.X!==pe&&!(t.Se&ln)?!0:!!(t.Se&me&&!(t.Se&ln))}function is(i){if(i.Fe){const t=Gd(i),e=i.Fe;if(fe(e,t),!t&&e.q){const n=Cr(i);if(n&&n.k.size>0){const s=qe(e.q);s!==n&&Gh(n,s)}Wo.delete(e),e.q=void 0}}}function Hd(i,t=!0){const e=Zi;Zi=t;try{return i()}finally{Zi=e}}function Zh(i,t,e,n,s){let r=!1;const o=ra(s?.render?a=>Hd(()=>i(a)):i,n,{...s,equals:()=>(o.H=!o.fe,r&&o.F.enqueue(o.W,ma.bind(o)),!1),lazy:!0});o.Qe=n,o.Me=t,o.je=e,o.$e=void 0,o.W=s?.render?Ns:kn,o.Ge=(a,l)=>{const c=a!==void 0?a:o.Se,u=l!==void 0?l:o.fe;if(c&pn){let f=u;if(o.F.notify(o,me,0),o.W===kn)try{return o.je?o.je(f,()=>{o.$e?.(),o.$e=void 0}):console.error(f)}catch(h){f=h}if(!o.F.notify(o,pn,pn))throw f}else o.W===Ns&&o.F.notify(o,me|pn,c,u)},wi(o,!0),!s?.defer&&(o.W===kn?o.F.enqueue(o.W,ma.bind(o)):ma.call(o)),r=!0,pc(()=>o.$e?.())}function ma(){if(!(!this.H||this.O&wr)){this.$e?.(),this.$e=void 0;try{const i=this.Me(this.J,this.Qe);this.$e=i}catch(i){if(this.fe=new rl(this,i),this.Se|=pn,!this.F.notify(this,pn,pn))throw i}finally{this.Qe=this.J,this.H=!1}}}function oa(i){return pc(i)}function Us(i){const t=Ji.bind(null,i);return t.$r=!0,t}function Wd(i,t,e){if(typeof i=="function"){const s=ra(i,t,e);return[Us(s),fe.bind(null,s)]}const n=_r(i,t);return[Us(n),fe.bind(null,n)]}function _c(i,t,e){let n=ra(i,t,e);return Us(n)}function Xd(i,t,e,n){Zh(i,t.effect||t,t.error,e,n)}function qd(i,t,e,n){Zh(i,t,void 0,e,{render:!0,...n})}function tu(i){return i?.[Ki]?.[ge]??i}function fs(i,t,e,n,s){return s&&n in s?s[n]:t&&n in t?t[n]:i[n]}function Yd(i,t,e){const n=tf(i,t),s=Object.keys(e);return Array.from(new Set([...n,...s]))}function Rs(i,t,e){const n=t?.[Ki];if(!n)return;const s=n[Fe],r=n[he],o=n[le];let a=n[ge];if(!(i===s&&!r&&!o)){if((n[Jh]||cl).set(i,n[hn]),n[Fe]=i,n[he]=void 0,Array.isArray(s)){let l=!1;const c=fs(s,r,a,"length",o);if(i.length&&c&&i[0]&&e(i[0])!=null){let u,f,h,d,g,y,m,p;for(h=0,d=Math.min(c,i.length);h<d&&((y=fs(s,r,a,h,o))===i[h]||y&&i[h]&&e(y)===e(i[h]));h++)Rs(i[h],sn(y,n),e);const M=new Array(i.length),v=new Map;for(d=c-1,g=i.length-1;d>=h&&g>=h&&((y=fs(s,r,a,d,o))===i[g]||y&&i[g]&&e(y)===e(i[g]));d--,g--)M[g]=y;if(h>g||h>d){for(f=h;f<=g;f++)l=!0,n[ge][f]&&fe(n[ge][f],sn(i[f],n));for(;f<i.length;f++){l=!0;const x=sn(M[f],n);n[ge][f]&&fe(n[ge][f],x),Rs(i[f],x,e)}l&&n[ge][bn]&&fe(n[ge][bn],void 0),c!==i.length&&n[ge].length&&fe(n[ge].length,i.length);return}for(m=new Array(g+1),f=g;f>=h;f--)y=i[f],p=y&&e(y),u=v.get(p),m[f]=u===void 0?-1:u,v.set(p,f);for(u=h;u<=d;u++)y=fs(s,r,a,u,o),p=y&&e(y),f=v.get(p),f!==void 0&&f!==-1&&(M[f]=y,f=m[f],v.set(p,f));for(f=h;f<i.length;f++)if(f in M){const x=sn(M[f],n);n[ge][f]&&fe(n[ge][f],x),Rs(i[f],x,e)}else n[ge][f]&&fe(n[ge][f],sn(i[f],n));h<i.length&&(l=!0)}else if(i.length)for(let u=0,f=i.length;u<f;u++){const h=fs(s,r,a,u,o);Bn(h)?Rs(i[u],sn(h,n),e):n[ge][u]&&fe(n[ge][u],i[u])}c!==i.length&&(l=!0,n[ge].length&&fe(n[ge].length,i.length)),l&&n[ge][bn]&&fe(n[ge][bn],void 0);return}if(a){const l=a[bn],c=l?Yd(s,r,i):Object.keys(a);for(let u=0,f=c.length;u<f;u++){const h=c[u],d=a[h],g=tu(fs(s,r,a,h,o));let y=tu(i[h]);g!==y&&(!g||!Bn(g)||!Bn(y)||e(g)!=null&&e(g)!==e(y)?(l&&fe(l,void 0),d&&fe(d,Bn(y)?sn(y,n):y)):Rs(y,sn(g,n),e))}}if(a=n[qo]){const l=Object.keys(a);for(let c=0,u=l.length;c<u;c++){const f=l[c];fe(a[f],f in i)}}}}function eu(i,t){return e=>{if(e==null)throw new Error("Cannot reconcile null or undefined state");const n=typeof t=="string"?r=>r[t]:t;if(n(e)!==void 0&&n(i)!==n(e))throw new Error("Cannot reconcile states with different identity");Rs(i,e,n)}}function jd(i,t={},e){let n;const s=new WeakMap,r=l=>{l[Yo]=o,l[Jh]=s,Object.defineProperty(l,Fs,{get(){return n},configurable:!0})},o=l=>{if(s.has(l))return s.get(l);if(l[Ki]?.[Yo]===o)return l;const c=Kh(l,ef,r);return s.set(l,c),c},a=o(t);return n=ra(()=>{const l=Od();let c=!1,u;const f=new Proxy(a,$d(()=>!c||l.ye===u));hl(f,h=>{u=i(h),c=!0;const d=Yh(l,u,g=>{g!==h&&g!==void 0&&hl(a,eu(g,e?.key||"id"))});d!==h&&d!==void 0&&eu(d,e?.key||"id")(a)})}),n.Pe=!0,{store:a,node:n}}function $d(i){const t={get(e,n){let s;gi(!0),mi(!0);try{s=e[n]}finally{gi(!1),mi(!1)}return typeof s=="object"&&s!==null?new Proxy(s,t):s},has(e,n){let s;gi(!0),mi(!0);try{s=n in e}finally{gi(!1),mi(!1)}return s},set(e,n,s){if(i&&!i())return!0;gi(!0),mi(!0);try{e[n]=s}finally{gi(!1),mi(!1)}return!0},deleteProperty(e,n){if(i&&!i())return!0;gi(!0),mi(!0);try{delete e[n]}finally{gi(!1),mi(!1)}return!0}};return t}const bn=Symbol(0),Ki=Symbol(0),hn=Symbol(0),Mn=Symbol(0),Fe="v",he="o",le="x",ge="n",qo="h",Yo="w",Jh="l",Fs="f",Os="p";function Kh(i,t=ef,e){let n;return Array.isArray(i)?(n=[],n.v=i):n={v:i},e&&e(n),n[hn]=new Proxy(n,t)}const cl=new WeakMap;function sn(i,t){if(t?.[Yo])return t[Yo](i,t);let e=i[hn]||cl.get(i);return e||cl.set(i,e=Kh(i)),e}function Bn(i){return i!=null&&typeof i=="object"&&!Object.isFrozen(i)&&!(typeof Node<"u"&&i instanceof Node)}let Qh=!1;function gi(i){Qh=i}function Qs(i){return Qh||!!Yi?.has(i)}function xr(i,t){let e=i[t];return e||(i[t]=e=Object.create(null)),e}function ul(i,t,e,n,s=Pr,r,o){if(i[t])return i[t];const a=_r(e,{equals:s,unobserved(){delete i[t]}},n);if(r&&(a.ee=pe),o&&t in o){const l=o[t];a.de=l===void 0?_d:l}return i[t]=a}function nu(i,t=bn){Ye()&&Ji(ul(xr(i,ge),t,void 0,i[Fs],!1,i[Os]))}function tf(i,t,e=!0){const n=on(()=>e?Object.keys(i):Reflect.ownKeys(i));if(!t)return n;const s=new Set(n),r=Reflect.ownKeys(t);for(const o of r)t[o]!==Mn?s.add(o):s.delete(o);return Array.from(s)}function iu(i,t,e){if(t&&e in t){if(t[e]===Mn)return;const n=Reflect.getOwnPropertyDescriptor(t,e);if(n?.get||n?.set||!(e in i))return n}return Reflect.getOwnPropertyDescriptor(i,e)}function su(i,t,e){if(i[Os]){const a=i[Fs];a?.K&&Se.initTransition(a.K)}const n=i[Fe],s=n[e],r=i[Os]&&!Gr,o=r?le:he;return r&&kh(t),{base:s,overrideKey:o,state:n}}function ga(i,t,e,n){i[qo]?.[t]&&fe(i[qo][t],e!=="delete");const s=xr(i,ge);e==="set"?s[t]&&fe(s[t],()=>Bn(n)?sn(n,i):n):e==="invalidate"?s[t]&&(fe(s[t],{}),delete s[t]):s[t]&&fe(s[t],void 0),s[bn]&&fe(s[bn],void 0)}let Yi=null;const ef={get(i,t,e){if(t===Ki)return i;if(t===hn)return e;if(t===vd)return i[Fs];if(t===bn)return nu(i),e;const n=xr(i,ge),s=n[t],r=i[le]&&t in i[le],o=r||i[he]&&t in i[he],a=!!i[Fe][Ki],l=r?i[le]:i[he]&&t in i[he]?i[he]:i[Fe];if(!s){const u=Object.getOwnPropertyDescriptor(l,t);if(u&&u.get)return u.get.call(e)}if(Qs(e)){let u=s&&(o||!a)?s.ee!==void 0&&s.ee!==pe?s.ee:s.X!==pe?s.X:s.J:l[t];if(u===Mn&&(u=void 0),!Bn(u))return u;const f=sn(u,i);return Yi?.add(f),f}let c=s?o||!a?Ji(n[t]):(Ji(n[t]),l[t]):l[t];if(c===Mn&&(c=void 0),!s){if(!o&&typeof c=="function"&&!l.hasOwnProperty(t)){let u;return!Array.isArray(i[Fe])&&(u=Object.getPrototypeOf(i[Fe]))&&u!==Object.prototype?c.bind(l):c}else if(Ye())return Ji(ul(n,t,Bn(c)?sn(c,i):c,i[Fs],Pr,i[Os],i[xd]))}return Bn(c)?sn(c,i):c},has(i,t){if(t===hn||t===bn||t==="__proto__")return!0;const e=i[le]&&t in i[le]?i[le][t]!==Mn:i[he]&&t in i[he]?i[he][t]!==Mn:t in i[Fe];return Qs(i[hn])||Ye()&&Ji(ul(xr(i,qo),t,e,i[Fs],Pr,i[Os])),e},set(i,t,e){const n=i[hn];return Qs(n)&&on(()=>{const{base:s,overrideKey:r,state:o}=su(i,n,t),a=i[le]&&t in i[le]?i[le][t]:i[he]&&t in i[he]?i[he][t]:s,l=e?.[Ki]?.[Fe]??e,c=Array.isArray(o)&&t!=="length",u=c?parseInt(t)+1:0,f=c&&(i[le]&&"length"in i[le]?i[le].length:i[he]&&"length"in i[he]?i[he].length:o.length),h=c&&u>f?u:void 0;if(a===l&&h===void 0)return!0;if(l!==void 0&&l===s&&h===void 0)delete i[r]?.[t];else{const d=i[r]||(i[r]=Object.create(null));d[t]=l,h!==void 0&&(d.length=h)}if(ga(i,t,"set",l),Array.isArray(o)){const d=xr(i,ge),g=t==="length"?l:h;g!==void 0&&d.length&&fe(d.length,g)}}),!0},defineProperty(i,t,e){const n=i[hn];return Qs(n)&&on(()=>{const{base:s,overrideKey:r}=su(i,n,t),o="value"in e?{...e,value:e.value?.[Ki]?.[Fe]??e.value}:e;Object.defineProperty(i[r]||(i[r]=Object.create(null)),t,o),ga(i,t,"invalidate")}),!0},deleteProperty(i,t){const e=i[le]?.[t]===Mn,n=i[he]?.[t]===Mn;return Qs(i[hn])&&!e&&!n&&on(()=>{const s=i[Os]&&!Gr,r=s?le:he;s&&kh(i[hn]);const o=i[le]&&t in i[le]?i[le][t]:i[he]&&t in i[he]?i[he][t]:i[Fe][t];if(t in i[Fe]||i[he]&&t in i[he])(i[r]||(i[r]=Object.create(null)))[t]=Mn;else if(i[r]&&t in i[r])delete i[r][t];else return!0;ga(i,t,"delete")}),!0},ownKeys(i){nu(i);let t=tf(i[Fe],i[he],!1);if(i[le]){const e=new Set(t);for(const n of Reflect.ownKeys(i[le]))i[le][n]!==Mn?e.add(n):e.delete(n);t=Array.from(e)}return t},getOwnPropertyDescriptor(i,t){if(t===hn)return{value:i[hn],writable:!0,configurable:!0};if(i[le]&&t in i[le]){if(i[le][t]===Mn)return;const e=Reflect.getOwnPropertyDescriptor(i[le],t);if(e?.get||e?.set||!(t in i[Fe]))return e;const n=iu(i[Fe],i[he],t);return n?{...n,value:i[le][t]}:{value:i[le][t],writable:!0,enumerable:!0,configurable:!0}}return iu(i[Fe],i[he],t)},getPrototypeOf(i){return Object.getPrototypeOf(i[Fe])}};function hl(i,t){const e=Yi;Yi=new Set,Yi.add(i);try{const n=t(i);if(n!==i&&n!==void 0)if(Array.isArray(n)){for(let s=0,r=n.length;s<r;s++)i[s]=n[s];i.length=n.length}else new Set([...Object.keys(i),...Object.keys(n)]).forEach(r=>{r in n?i[r]=n[r]:delete i[r]})}finally{Yi.clear(),Yi=e}}function Zd(i,t,e){const n=typeof i=="function",s=n?jd(i,t,e).store:sn(i);return[s,r=>hl(s,r)]}const nf=Symbol(0);function ur(i,t,e=0){let n,s=i;if(e<t.length-1){n=t[e];const o=typeof n,a=Array.isArray(i);if(Array.isArray(n)){for(let l=0;l<n.length;l++)t[e]=n[l],ur(i,t,e);t[e]=n;return}else if(a&&o==="function"){for(let l=0;l<i.length;l++)n(i[l],l)&&(t[e]=l,ur(i,t,e));t[e]=n;return}else if(a&&o==="object"){const{from:l=0,to:c=i.length-1,by:u=1}=n;for(let f=l;f<=c;f+=u)t[e]=f,ur(i,t,e);t[e]=n;return}else if(e<t.length-2){ur(i[n],t,e+1);return}s=i[n]}let r=t[t.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(n===void 0&&r==null))if(r===nf)delete i[n];else if(n===void 0||Bn(s)&&Bn(r)&&!Array.isArray(r)){const o=n!==void 0?i[n]:i,a=Object.keys(r);for(let l=0;l<a.length;l++){const c=a[l],u=Object.getOwnPropertyDescriptor(r,c);u.get||u.set?Object.defineProperty(o,c,u):o[c]=u.value}}else i[n]=r}Object.assign(function(...t){return e=>{ur(e,t)}},{DELETE:nf});function Jd(i,t,e){const s=t.length>1,r=t;return _c(Kd.bind({Ye:gr(),Ze:0,Be:i,qe:[],Xe:r,ze:[],Je:[],et:void 0,tt:void 0,nt:s?[]:void 0,it:e?.fallback}))}const _a={pureWrite:!0};function Kd(){const i=this.Be()||[],t=i.length;return i[bn],Is(this.Ye,()=>{let e,n,s=this.tt?()=>(this.tt[n]=_r(i[n],_a),this.nt&&(this.nt[n]=_r(n,_a)),this.Xe(Us(this.tt[n]),this.nt?Us(this.nt[n]):void 0)):this.nt?()=>{const r=i[n];return this.nt[n]=_r(n,_a),this.Xe(()=>r,Us(this.nt[n]))}:()=>{const r=i[n];return this.Xe(()=>r)};if(t===0)this.Ze!==0&&(this.Ye.dispose(!1),this.Je=[],this.qe=[],this.ze=[],this.Ze=0,this.tt&&(this.tt=[]),this.nt&&(this.nt=[])),this.it&&!this.ze[0]&&(this.ze[0]=Is(this.Je[0]=gr(),this.it));else if(this.Ze===0){for(this.Je[0]&&this.Je[0].dispose(),this.ze=new Array(t),n=0;n<t;n++)this.qe[n]=i[n],this.ze[n]=Is(this.Je[n]=gr(),s);this.Ze=t}else{let r,o,a,l,c,u,f,h=new Array(t),d=new Array(t),g=this.tt?new Array(t):void 0,y=this.nt?new Array(t):void 0;for(r=0,o=Math.min(this.Ze,t);r<o&&(this.qe[r]===i[r]||this.tt&&ru(this.et,this.qe[r],i[r]));r++)this.tt&&fe(this.tt[r],i[r]);for(o=this.Ze-1,a=t-1;o>=r&&a>=r&&(this.qe[o]===i[a]||this.tt&&ru(this.et,this.qe[o],i[a]));o--,a--)h[a]=this.ze[o],d[a]=this.Je[o],g&&(g[a]=this.tt[o]),y&&(y[a]=this.nt[o]);for(u=new Map,f=new Array(a+1),n=a;n>=r;n--)l=i[n],c=this.et?this.et(l):l,e=u.get(c),f[n]=e===void 0?-1:e,u.set(c,n);for(e=r;e<=o;e++)l=this.qe[e],c=this.et?this.et(l):l,n=u.get(c),n!==void 0&&n!==-1?(h[n]=this.ze[e],d[n]=this.Je[e],g&&(g[n]=this.tt[e]),y&&(y[n]=this.nt[e]),n=f[n],u.set(c,n)):this.Je[e].dispose();for(n=r;n<t;n++)n in h?(this.ze[n]=h[n],this.Je[n]=d[n],g&&(this.tt[n]=g[n],fe(this.tt[n],i[n])),y&&(this.nt[n]=y[n],fe(this.nt[n],n))):this.ze[n]=Is(this.Je[n]=gr(),s);this.ze=this.ze.slice(0,this.Ze=t),this.qe=i.slice(0)}}),this.ze}function ru(i,t,e){return i?i(t)===i(e):!0}function sf(i,t){if(typeof i=="function"&&!i.length){if(t?.doNotUnwrap)return i;do i=i();while(typeof i=="function"&&!i.length)}if(!(t?.skipNonRendered&&(i==null||i===!0||i===!1||i===""))){if(Array.isArray(i)){let e=[];return fl(i,e,t)?()=>{let n=[];return fl(e,n,{...t,doNotUnwrap:!1}),n}:e}return i}}function fl(i,t=[],e){let n=null,s=!1;for(let r=0;r<i.length;r++)try{let o=i[r];if(typeof o=="function"&&!o.length){if(e?.doNotUnwrap){t.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=fl(o,t,e):e?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||t.push(o)}catch(o){if(!(o instanceof Xe))throw o;n=o}if(n)throw n;return s}const oi=(...i)=>_c(...i),_e=(...i)=>Wd(...i),Qd=(...i)=>Zd(...i),rf=(...i)=>qd(...i),Ls=(...i)=>Xd(...i);function dl(i,t){return on(()=>i(t||{}))}const aa=(i,t,e)=>rf(i,t,e,{transparent:!0}),tp=(i,t)=>t?i.$r?i:_c(()=>i(),void 0,{transparent:!0}):oi(()=>i());function ep(i,t,e){let n=e.length,s=t.length,r=n,o=0,a=0,l=t[s-1].nextSibling,c=null;for(;o<s||a<r;){if(t[o]===e[a]){o++,a++;continue}for(;t[s-1]===e[r-1];)s--,r--;if(s===o){const u=r<n?a?e[a-1].nextSibling:e[r-a]:l;for(;a<r;)i.insertBefore(e[a++],u)}else if(r===a)for(;o<s;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[r-1]&&e[a]===t[s-1]){const u=t[--s].nextSibling;i.insertBefore(e[a++],t[o++].nextSibling),i.insertBefore(e[--r],u),t[s]=e[r]}else{if(!c){c=new Map;let f=a;for(;f<r;)c.set(e[f],f++)}const u=c.get(t[o]);if(u!=null)if(a<u&&u<r){let f=o,h=1,d;for(;++f<s&&f<r&&!((d=c.get(t[f]))==null||d!==u+h);)h++;if(h>u-a){const g=t[o];for(;a<u;)i.insertBefore(e[a++],g)}else i.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const ou="_$DX_DELEGATE";function np(i,t,e,n={}){let s;return mc(r=>{s=r,t===document?sf(i):ml(t,i(),t.firstChild?null:void 0,e)},{id:n.renderId}),()=>{s(),t.textContent=""}}function xc(i,t,e,n){let s;const r=a=>{const l=document.createElement("template");return l.innerHTML=i,l.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function of(i,t=window.document){const e=t[ou]||(t[ou]=new Set);for(let n=0,s=i.length;n<s;n++){const r=i[n];e.has(r)||(e.add(r),t.addEventListener(r,sp))}}function Le(i,t,e){e!=null?i.style.setProperty(t,e):i.style.removeProperty(t)}function ip(i,t){Array.isArray(i)?i.flat(1/0).forEach(e=>e&&e(t)):i(t)}function pl(i,t){const e=on(i);Is(null,()=>ip(e,t))}function ml(i,t,e,n){const s=e!==void 0;if(s&&!n&&(n=[]),typeof t!="function"&&(t=lu(t,n,s,!0),typeof t!="function"))return au(i,t,n,e);if(t=tp(t,!0),s&&n.length===0){const r=document.createTextNode("");i.insertBefore(r,e),n=[r]}aa(r=>lu(t,r,s),(r,o)=>au(i,r,o,e),n)}function sp(i){let t=i.target;const e=`$$${i.type}`,n=i.target,s=i.currentTarget,r=l=>Object.defineProperty(i,"target",{configurable:!0,value:l}),o=()=>{const l=t[e];if(l&&!t.disabled){const c=t[`${e}Data`];if(c!==void 0?l.call(t,c,i):l.call(t,i),i.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(i.target)&&r(t.host),!0},a=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}}),i.composedPath){const l=i.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!o());c++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();r(n)}function au(i,t,e,n){if(t===e)return;const s=typeof t,r=n!==void 0;if(s==="string"||s==="number"){const o=typeof e;o==="string"||o==="number"?i.firstChild.data=t:i.textContent=t}else if(t===void 0)Jr(i,e,n);else if(t.nodeType)Array.isArray(e)?Jr(i,e,r?n:null,t):e===void 0||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);else if(Array.isArray(t)){const o=e&&Array.isArray(e);t.length===0?Jr(i,e,n):o?e.length===0?cu(i,t,n):ep(i,e,t):(e&&Jr(i),cu(i,t))}}function lu(i,t,e,n){if(i=sf(i,{skipNonRendered:!0,doNotUnwrap:n}),n&&typeof i=="function")return i;if(e&&!Array.isArray(i)&&(i=[i??""]),Array.isArray(i))for(let s=0,r=i.length;s<r;s++){const o=i[s],a=t&&t[s],l=typeof o;(l==="string"||l==="number")&&(i[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return i}function cu(i,t,e=null){for(let n=0,s=t.length;n<s;n++)i.insertBefore(t[n],e)}function Jr(i,t,e,n){if(e===void 0)return i.textContent="";if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const a=o.parentNode===i;n&&!s&&!r?a?i.replaceChild(n,o):i.insertBefore(n,e):a&&o.remove()}else s=!0}}else n&&i.insertBefore(n,e)}function rp(...i){return np(...i)}const vc="183",op=0,uu=1,ap=2,Do=1,af=2,hr=3,Ci=0,Ke=1,dn=2,ai=0,Bs=1,hu=2,fu=3,du=4,lp=5,ji=100,cp=101,up=102,hp=103,fp=104,dp=200,pp=201,mp=202,gp=203,gl=204,_l=205,_p=206,xp=207,vp=208,yp=209,Mp=210,Sp=211,Ep=212,bp=213,Tp=214,xl=0,vl=1,yl=2,Ws=3,Ml=4,Sl=5,El=6,bl=7,yc=0,wp=1,Ap=2,Vn=0,lf=1,cf=2,uf=3,hf=4,ff=5,df=6,pf=7,mf=300,ss=301,Xs=302,xa=303,va=304,la=306,Tl=1e3,ii=1001,wl=1002,Be=1003,Rp=1004,Kr=1005,Ge=1006,ya=1007,Qi=1008,an=1009,gf=1010,_f=1011,Ir=1012,Mc=1013,Wn=1014,wn=1015,ui=1016,Sc=1017,Ec=1018,Lr=1020,xf=35902,vf=35899,yf=1021,Mf=1022,An=1023,hi=1026,ts=1027,bc=1028,Tc=1029,qs=1030,wc=1031,Ac=1033,No=33776,Uo=33777,Fo=33778,Oo=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Dl=37496,Nl=37488,Ul=37489,Fl=37490,Ol=37491,Bl=37808,zl=37809,kl=37810,Vl=37811,Gl=37812,Hl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,$l=37819,Zl=37820,Jl=37821,Kl=36492,Ql=36494,tc=36495,ec=36283,nc=36284,ic=36285,sc=36286,Cp=3200,Rc=0,Pp=1,Ei="",rn="srgb",Ys="srgb-linear",jo="linear",re="srgb",ds=7680,pu=519,Ip=512,Lp=513,Dp=514,Cc=515,Np=516,Up=517,Pc=518,Fp=519,mu=35044,gu="300 es",zn=2e3,Dr=2001;function Op(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bp(){const i=$o("canvas");return i.style.display="block",i}const _u={};function xu(...i){const t="THREE."+i.shift();console.log(t,...i)}function Sf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Sf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Sf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zo(...i){const t=i.join(" ");t in _u||(_u[t]=!0,Gt(...i))}function zp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const kp={[xl]:vl,[yl]:El,[Ml]:bl,[Ws]:Sl,[vl]:xl,[El]:yl,[bl]:Ml,[Sl]:Ws};class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const vr=Math.PI/180,Nr=180/Math.PI;function os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ic(i,t){return(i%t+t)%t}function Vp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gp(i,t,e){return i!==t?(e-i)/(t-i):0}function yr(i,t,e){return(1-e)*i+e*t}function Hp(i,t,e,n){return yr(i,t,1-Math.exp(-e*n))}function Wp(i,t=1){return t-Math.abs(Ic(i,t*2)-t)}function Xp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jp(i,t){return i+Math.random()*(t-i)}function $p(i){return i*(.5-Math.random())}function Zp(i){i!==void 0&&(vu=i);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jp(i){return i*vr}function Kp(i){return i*Nr}function Qp(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yu={DEG2RAD:vr,RAD2DEG:Nr,generateUUID:os,clamp:Jt,euclideanModulo:Ic,mapLinear:Vp,inverseLerp:Gp,lerp:yr,damp:Hp,pingpong:Wp,smoothstep:Xp,smootherstep:qp,randInt:Yp,randFloat:jp,randFloatSpread:$p,seededRandom:Zp,degToRad:Jp,radToDeg:Kp,isPowerOfTwo:Qp,ceilPowerOfTwo:tm,floorPowerOfTwo:em,setQuaternionFromProperEuler:nm,normalize:He,denormalize:Cs};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new B,Mu=new Gn;class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],v=s[4],x=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*y+a*M+l*A,r[3]=o*m+a*v+l*T,r[6]=o*p+a*x+l*P,r[1]=c*y+u*M+f*A,r[4]=c*m+u*v+f*T,r[7]=c*p+u*x+f*P,r[2]=h*y+d*M+g*A,r[5]=h*m+d*v+g*T,r[8]=h*p+d*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=f*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Xt,Su=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){const i={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ys]:{primaries:t,whitePoint:n,transfer:jo,toXYZ:Su,fromXYZ:Eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Su,fromXYZ:Eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ee=im();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class sm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=$o("canvas")),ps.width=t.width,ps.height=t.height;const s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rm=0;class Lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let om=0;const ba=new B;class Ze extends Js{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ii,s=ii,r=Ge,o=Qi,a=An,l=an,c=Ze.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=os(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tl:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tl:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=mf;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(d+1)/2,A=(p+1)/2,T=(u+h)/4,P=(f+y)/4,_=(g+m)/4;return v>x&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=P/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class am extends Js{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends am{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ef extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ce{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,um)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(n,tn),_i.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(n,tn)),_i.normalize(),Qr.crossVectors(tn,_i),s[0]=_i.x,s[4]=Qr.x,s[8]=tn.x,s[1]=_i.y,s[5]=Qr.y,s[9]=tn.y,s[2]=_i.z,s[6]=Qr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],A=n[15],T=s[0],P=s[4],_=s[8],b=s[12],N=s[1],L=s[5],F=s[9],V=s[13],j=s[2],G=s[6],H=s[10],U=s[14],q=s[3],st=s[7],lt=s[11],_t=s[15];return r[0]=o*T+a*N+l*j+c*q,r[4]=o*P+a*L+l*G+c*st,r[8]=o*_+a*F+l*H+c*lt,r[12]=o*b+a*V+l*U+c*_t,r[1]=u*T+f*N+h*j+d*q,r[5]=u*P+f*L+h*G+d*st,r[9]=u*_+f*F+h*H+d*lt,r[13]=u*b+f*V+h*U+d*_t,r[2]=g*T+y*N+m*j+p*q,r[6]=g*P+y*L+m*G+p*st,r[10]=g*_+y*F+m*H+p*lt,r[14]=g*b+y*V+m*U+p*_t,r[3]=M*T+v*N+x*j+A*q,r[7]=M*P+v*L+x*G+A*st,r[11]=M*_+v*F+x*H+A*lt,r[15]=M*b+v*V+x*U+A*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=l*d-c*h,v=a*d-c*f,x=a*h-l*f,A=o*d-c*u,T=o*h-l*u,P=o*f-a*u;return e*(y*M-m*v+p*x)-n*(g*M-m*A+p*T)+s*(g*v-y*A+p*P)-r*(g*x-y*T+m*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=e*a-n*o,v=e*l-s*o,x=e*c-r*o,A=n*l-s*a,T=n*c-r*a,P=s*c-r*l,_=u*y-f*g,b=u*m-h*g,N=u*p-d*g,L=f*m-h*y,F=f*p-d*y,V=h*p-d*m,j=M*V-v*F+x*L+A*N-T*b+P*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/j;return t[0]=(a*V-l*F+c*L)*G,t[1]=(s*F-n*V-r*L)*G,t[2]=(y*P-m*T+p*A)*G,t[3]=(h*T-f*P-d*A)*G,t[4]=(l*N-o*V-c*b)*G,t[5]=(e*V-s*N+r*b)*G,t[6]=(m*x-g*P-p*v)*G,t[7]=(u*P-h*x+d*v)*G,t[8]=(o*F-a*N+c*_)*G,t[9]=(n*N-e*F-r*_)*G,t[10]=(g*T-y*x+p*M)*G,t[11]=(f*x-u*T-d*M)*G,t[12]=(a*b-o*L-l*_)*G,t[13]=(e*L-n*b+s*_)*G,t[14]=(y*v-g*A-m*M)*G,t[15]=(u*A-f*v+h*M)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,y=o*u,m=o*f,p=a*f,M=l*c,v=l*u,x=l*f,A=n.x,T=n.y,P=n.z;return s[0]=(1-(y+p))*A,s[1]=(d+x)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(h+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+v)*P,s[9]=(m-M)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(s[0],s[1],s[2]).length();const a=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);const c=1/o,u=1/a,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===zn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new B,xn=new ce,cm=new B(0,0,0),um=new B(1,1,1),_i=new B,Qr=new B,tn=new B,bu=new ce,Tu=new Gn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class bf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hm=0;const wu=new B,gs=new Gn,$n=new ce,to=new B,tr=new B,fm=new B,dm=new Gn,Au=new B(1,0,0),Ru=new B(0,1,0),Cu=new B(0,0,1),Pu={type:"added"},pm={type:"removed"},_s={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Ae extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new B,e=new gn,n=new Gn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Xt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(tr,to,this.up):$n.lookAt(to,tr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),gs.setFromRotationMatrix($n),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),_s.child=t,this.dispatchEvent(_s),_s.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,fm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new B(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ic(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Aa(o,r,t+1/3),this.g=Aa(o,r,t),this.b=Aa(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ee.workingToColorSpace(Ve.copy(this),t),Math.round(Jt(Ve.r*255,0,255))*65536+Math.round(Jt(Ve.g*255,0,255))*256+Math.round(Jt(Ve.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=rn){ee.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(eo);const n=yr(xi.h,eo.h,e),s=yr(xi.s,eo.s,e),r=yr(xi.l,eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Kt;Kt.NAMES=Tf;class gm extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vn=new B,Zn=new B,Ra=new B,Jn=new B,xs=new B,vs=new B,Iu=new B,Ca=new B,Pa=new B,Ia=new B,La=new Me,Da=new Me,Na=new Me;class Tn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Zn.subVectors(n,e),Ra.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Zn),l=vn.dot(Ra),c=Zn.dot(Zn),u=Zn.dot(Ra),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return La.setScalar(0),Da.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Zn.subVectors(t,e),vn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),vn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,n),vs.subVectors(r,n),Ca.subVectors(t,n);const l=xs.dot(Ca),c=vs.dot(Ca);if(l<=0&&c<=0)return e.copy(n);Pa.subVectors(t,s);const u=xs.dot(Pa),f=vs.dot(Pa);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(xs,o);Ia.subVectors(t,r);const d=xs.dot(Ia),g=vs.dot(Ia);if(g>=0&&d<=g)return e.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(vs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Iu.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Iu,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(n).addScaledVector(xs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),io.subVectors(this.max,er),ys.subVectors(t.a,er),Ms.subVectors(t.b,er),Ss.subVectors(t.c,er),vi.subVectors(Ms,ys),yi.subVectors(Ss,Ms),Ui.subVectors(ys,Ss);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Ua(e,ys,Ms,Ss,io)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,ys,Ms,Ss,io))?!1:(so.crossVectors(vi,yi),e=[so.x,so.y,so.z],Ua(e,ys,Ms,Ss,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new B,new B,new B,new B,new B,new B,new B,new B],yn=new B,no=new Ii,ys=new B,Ms=new B,Ss=new B,vi=new B,yi=new B,Ui=new B,er=new B,io=new B,so=new B,Fi=new B;function Ua(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Te=new B,ro=new ht;let _m=0;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mu&&(t.usage=this.usage),t}}class wf extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Af extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xm=new Ii,nr=new B,Fa=new B;class as{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Fa)),this.expandByPoint(nr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vm=0;const cn=new ce,Oa=new Ae,Es=new B,en=new Ii,ir=new Ii,Ie=new B;class be extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Op(t)?Af:wf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(en.min,ir.min),en.expandByPoint(Ie),Ie.addVectors(en.max,ir.max),en.expandByPoint(Ie)):(en.expandByPoint(ir.min),en.expandByPoint(ir.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ie.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),Ie.add(Es)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new B,l[_]=new B;const c=new B,u=new B,f=new B,h=new ht,d=new ht,g=new ht,y=new B,m=new B;function p(_,b,N){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,N),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[_].add(y),a[b].add(y),a[N].add(y),l[_].add(m),l[b].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,b=M.length;_<b;++_){const N=M[_],L=N.start,F=N.count;for(let V=L,j=L+F;V<j;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const v=new B,x=new B,A=new B,T=new B;function P(_){A.fromBufferAttribute(s,_),T.copy(A);const b=a[_];v.copy(b),v.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(T,b);const L=x.dot(l[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,L)}for(let _=0,b=M.length;_<b;++_){const N=M[_],L=N.start,F=N.count;for(let V=L,j=L+F;V<j;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Rn(h,u,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ym=0;class Pn extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Bs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new B,Ba=new B,oo=new B,Mi=new B,za=new B,ao=new B,ka=new B;class Dc{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ba.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=Mi.dot(this.direction),l=-Mi.dot(oo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ba).addScaledVector(oo,h),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){za.subVectors(e,t),ao.subVectors(n,t),ka.crossVectors(za,ao);let o=this.direction.dot(ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(ao.crossVectors(Mi,ao));if(l<0)return null;const c=a*this.direction.dot(za.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(ka);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nc extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Lu=new ce,Oi=new Dc,lo=new as,Du=new B,co=new B,uo=new B,ho=new B,Va=new B,fo=new B,Nu=new B,po=new B;class $t extends Ae{constructor(t=new be,e=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Va.fromBufferAttribute(f,t),o?fo.addScaledVector(Va,u):fo.addScaledVector(Va.sub(e),u))}e.add(fo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(lo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(lo,Du)===null||Oi.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,A=v;x<A;x+=3){const T=a.getX(x),P=a.getX(x+1),_=a.getX(x+2);s=mo(this,p,t,n,c,u,f,T,P,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=mo(this,o,t,n,c,u,f,M,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,A=v;x<A;x+=3){const T=x,P=x+1,_=x+2;s=mo(this,p,t,n,c,u,f,T,P,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const M=m,v=m+1,x=m+2;s=mo(this,o,t,n,c,u,f,M,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Mm(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,co),i.getVertexPosition(l,uo),i.getVertexPosition(c,ho);const u=Mm(i,t,e,n,co,uo,ho,Nu);if(u){const f=new B;Tn.getBarycoord(Nu,co,uo,ho,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,f,new ht)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,f,new ht)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Tn.getNormal(co,uo,ho,h.normal),u.face=h,u.barycoord=f}return u}class Rf extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,u=Be,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends Rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new ce,Fu=new ce,go=[],Ou=new Ii,Sm=new ce,sr=new $t,rr=new as;class Em extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uu(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Ou.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Ou)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),rr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Fu.multiplyMatrices(n,bs),sr.matrixWorld=Fu,sr.raycast(t,go);for(let o=0,a=go.length;o<a;o++){const l=go[o];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rf(new Float32Array(s*this.count),s,this.count,bc,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ga=new B,bm=new B,Tm=new Xt;class Gi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ga.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tm.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new as,wm=new ht(.5,.5),_o=new B;class Uc{constructor(t=new Gi,e=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],v=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,p-g,A-M).normalize(),s[1].setComponents(c+o,d+u,p+g,A+M).normalize(),s[2].setComponents(c+a,d+f,p+y,A+v).normalize(),s[3].setComponents(c-a,d-f,p-y,A-v).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,p-m,A-x).normalize();else if(s[4].setComponents(c-l,d-h,p-m,A-x).normalize(),e===zn)s[5].setComponents(c+l,d+h,p+m,A+x).normalize();else if(e===Dr)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);const e=wm.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bo extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jo=new B,Ko=new B,Bu=new ce,or=new Dc,xo=new as,Ha=new B,zu=new B;class Am extends Ae{constructor(t=new be,e=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jo.fromBufferAttribute(e,s-1),Ko.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jo.distanceTo(Ko);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Bu.copy(s).invert(),or.copy(t.ray).applyMatrix4(Bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=u.getX(y),M=u.getX(y+1),v=vo(this,t,or,l,p,M,y);v&&e.push(v)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(d),p=vo(this,t,or,l,y,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=vo(this,t,or,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=vo(this,t,or,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Jo.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),e.distanceSqToSegment(Jo,Ko,Ha,zu)>n)return;Ha.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ha);if(!(c<t.near||c>t.far))return{distance:c,point:zu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ku=new B,Vu=new B;class Gu extends Am{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ku.fromBufferAttribute(e,s),Vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ku.distanceTo(Vu);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fr extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hu=new ce,rc=new Dc,yo=new as,Mo=new B;class Wa extends Ae{constructor(t=new be,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;Hu.copy(s).invert(),rc.copy(t.ray).applyMatrix4(Hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,y=d;g<y;g++){const m=c.getX(g);Mo.fromBufferAttribute(f,m),Wu(Mo,m,l,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,y=d;g<y;g++)Mo.fromBufferAttribute(f,g),Wu(Mo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wu(i,t,e,n,s,r,o){const a=rc.distanceSqToPoint(i);if(a<e){const l=new B;rc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cf extends Ze{constructor(t=[],e=ss,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ur extends Ze{constructor(t,e,n=Wn,s,r,o,a=Be,l=Be,c,u=hi,f=1){if(u!==hi&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rm extends Ur{constructor(t,e=Wn,n=ss,s,r,o=Be,a=Be,l,c=hi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pf extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ls extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(y,m,p,M,v,x,A,T,P,_,b){const N=x/P,L=A/_,F=x/2,V=A/2,j=T/2,G=P+1,H=_+1;let U=0,q=0;const st=new B;for(let lt=0;lt<H;lt++){const _t=lt*L-V;for(let pt=0;pt<G;pt++){const Ut=pt*N-F;st[y]=Ut*M,st[m]=_t*v,st[p]=j,c.push(st.x,st.y,st.z),st[y]=0,st[m]=0,st[p]=T>0?1:-1,u.push(st.x,st.y,st.z),f.push(pt/P),f.push(1-lt/_),U+=1}}for(let lt=0;lt<_;lt++)for(let _t=0;_t<P;_t++){const pt=h+_t+G*lt,Ut=h+_t+G*(lt+1),J=h+(_t+1)+G*(lt+1),z=h+(_t+1)+G*lt;l.push(pt,Ut,z),l.push(Ut,J,z),q+=6}a.addGroup(d,q,b),d+=q,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class cs extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const y=[],m=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){const x=new B,A=new B;let T=0;const P=(e-t)/n;for(let _=0;_<=r;_++){const b=[],N=_/r,L=N*(e-t)+t;for(let F=0;F<=s;F++){const V=F/s,j=V*l+a,G=Math.sin(j),H=Math.cos(j);A.x=L*G,A.y=-N*n+m,A.z=L*H,f.push(A.x,A.y,A.z),x.set(G,P,H).normalize(),h.push(x.x,x.y,x.z),d.push(V,1-N),b.push(g++)}y.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const N=y[b][_],L=y[b+1][_],F=y[b+1][_+1],V=y[b][_+1];(t>0||b!==0)&&(u.push(N,L,V),T+=3),(e>0||b!==r-1)&&(u.push(L,F,V),T+=3)}c.addGroup(p,T,0),p+=T}function v(x){const A=g,T=new ht,P=new B;let _=0;const b=x===!0?t:e,N=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*N,0),h.push(0,N,0),d.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const j=F/s*l+a,G=Math.cos(j),H=Math.sin(j);P.x=b*H,P.y=m*N,P.z=b*G,f.push(P.x,P.y,P.z),h.push(0,N,0),T.x=G*.5+.5,T.y=H*.5*N+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){const V=A+F,j=L+F;x===!0?u.push(j,j+1,V):u.push(j+1,j,V),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends cs{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fc extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new B,x=new B,A=new B;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],x),d(e[T+2],A),l(v,x,A,M)}function l(M,v,x,A){const T=A+1,P=[];for(let _=0;_<=T;_++){P[_]=[];const b=M.clone().lerp(x,_/T),N=v.clone().lerp(x,_/T),L=T-_;for(let F=0;F<=L;F++)F===0&&_===T?P[_][F]=b:P[_][F]=b.clone().lerp(N,F/L)}for(let _=0;_<T;_++)for(let b=0;b<2*(T-_)-1;b++){const N=Math.floor(b/2);b%2===0?(h(P[_][N+1]),h(P[_+1][N]),h(P[_][N])):(h(P[_][N+1]),h(P[_+1][N+1]),h(P[_+1][N]))}}function c(M){const v=new B;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(M),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function u(){const M=new B;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const x=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(x,1-A)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const v=o[M+0],x=o[M+2],A=o[M+4],T=Math.max(v,x,A),P=Math.min(v,x,A);T>.9&&P<.1&&(v<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,v){const x=M*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const M=new B,v=new B,x=new B,A=new B,T=new ht,P=new ht,_=new ht;for(let b=0,N=0;b<r.length;b+=9,N+=6){M.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),T.set(o[N+0],o[N+1]),P.set(o[N+2],o[N+3]),_.set(o[N+4],o[N+5]),A.copy(M).add(v).add(x).divideScalar(3);const L=m(A);y(T,N+0,M,L),y(P,N+2,v,L),y(_,N+4,x,L)}}function y(M,v,x,A){A<0&&M.x===1&&(o[v]=M.x-1),x.x===0&&x.z===0&&(o[v]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.vertices,t.indices,t.radius,t.detail)}}class Qo extends Fc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],r=[],o=[],a=new B,l=new ce;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oc extends qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cm extends Oc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const So=new B,Xa=new Bc,qa=new Bc,Ya=new Bc;class zc extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=So),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Xa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,y,m),qa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,y,m),Ya.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),qa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ya.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Pm(i,t){const e=1-i;return e*e*t}function Im(i,t){return 2*(1-i)*i*t}function Lm(i,t){return i*i*t}function Mr(i,t,e,n){return Pm(i,t)+Im(i,e)+Lm(i,n)}function Dm(i,t){const e=1-i;return e*e*e*t}function Nm(i,t){const e=1-i;return 3*e*e*i*t}function Um(i,t){return 3*(1-i)*i*i*t}function Fm(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return Dm(i,t)+Nm(i,e)+Um(i,n)+Fm(i,s)}class If extends qn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Om extends qn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lf extends qn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bm extends qn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Df extends qn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends qn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Xu(a,l.x,c.x,u.x,f.x),Xu(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var ta=Object.freeze({__proto__:null,ArcCurve:Cm,CatmullRomCurve3:zc,CubicBezierCurve:If,CubicBezierCurve3:Om,EllipseCurve:Oc,LineCurve:Lf,LineCurve3:Bm,QuadraticBezierCurve:Df,QuadraticBezierCurve3:Nf,SplineCurve:Uf});class zm extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ta[s.type]().fromJSON(s))}return this}}class ks extends zm{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lf(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Df(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new If(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Oc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class es extends ks{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ks().fromJSON(s))}return this}}function km(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ff(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Xm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Fr(r,o,e,a,l,c,0),o}function Ff(i,t,e,n,s){let r;if(s===ng(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=qu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=qu(o/n|0,i[o],i[o+1],r);return r&&js(r,r.next)&&(Br(r),r=r.next),r}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(js(e,e.next)||xe(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Zm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Gm(i,n,s,r):Vm(i)){t.push(l.i,i.i,c.i),Br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Hm(rs(i),t),Fr(i,t,e,n,s,r,2)):o===2&&Wm(i,t,e,n,s,r):Fr(rs(i),t,e,n,s,r,1);break}}}function Vm(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&dr(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),y=Math.max(a,l,c),m=Math.max(u,f,h),p=oc(d,g,t,e,n),M=oc(y,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=M;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&dr(a,u,l,f,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&dr(a,u,l,f,c,h,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&dr(a,u,l,f,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&dr(a,u,l,f,c,h,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!js(n,s)&&Bf(n,e,e.next,s)&&Or(n,s)&&Or(s,n)&&(t.push(n.i,e.i,s.i),Br(e),Br(e.next),e=i=s),e=e.next}while(e!==i);return rs(e)}function Wm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qm(o,a)){let l=zf(o,a);o=rs(o,o.next),l=rs(l,l.next),Fr(o,t,e,n,s,r,0),Fr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ff(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Km(c))}s.sort(qm);for(let r=0;r<s.length;r++)e=Ym(s[r],e);return e}function qm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ym(i,t){const e=jm(i,t);if(!e)return t;const n=zf(e,i);return rs(n,n.next),rs(e,e.next)}function jm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(js(i,e))return e;do{if(js(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Of(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Or(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&$m(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function $m(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Zm(i,t,e,n){let s=i;do s.z===0&&(s.z=oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jm(s)}function Jm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Km(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Of(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function dr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Of(i,t,e,n,s,r,o,a)}function Qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tg(i,t)&&(Or(i,t)&&Or(t,i)&&eg(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||js(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function js(i,t){return i.x===t.x&&i.y===t.y}function Bf(i,t,e,n){const s=bo(xe(i,t,e)),r=bo(xe(i,t,n)),o=bo(xe(e,n,i)),a=bo(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function tg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Or(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function eg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zf(i,t){const e=ac(i.i,i.x,i.y),n=ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qu(i,t,e,n){const s=ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ng(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ig{static triangulate(t,e,n=2){return km(t,e,n)}}class bi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Yu(t),ju(n,t);let o=t.length;e.forEach(Yu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ju(n,e[l]);const a=ig.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Yu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ds extends be{constructor(t=new es([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:sg;let v,x=!1,A,T,P,_;if(p){v=p.getSpacedPoints(u),x=!0,h=!1;const k=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,k),T=new B,P=new B,_=new B}h||(m=0,d=0,g=0,y=0);const b=a.extractPoints(c);let N=b.shape;const L=b.holes;if(!bi.isClockWise(N)){N=N.reverse();for(let k=0,Y=L.length;k<Y;k++){const K=L[k];bi.isClockWise(K)&&(L[k]=K.reverse())}}function V(k){const K=10000000000000001e-36;let et=k[0];for(let E=1;E<=k.length;E++){const D=E%k.length,ct=k[D],yt=ct.x-et.x,mt=ct.y-et.y,I=yt*yt+mt*mt,S=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(et.x),Math.abs(et.y)),W=K*S*S;if(I<=W){k.splice(D,1),E--;continue}et=ct}}V(N),L.forEach(V);const j=L.length,G=N;for(let k=0;k<j;k++){const Y=L[k];N=N.concat(Y)}function H(k,Y,K){return Y||te("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(Y,K)}const U=N.length;function q(k,Y,K){let et,E,D;const ct=k.x-Y.x,yt=k.y-Y.y,mt=K.x-k.x,I=K.y-k.y,S=ct*ct+yt*yt,W=ct*I-yt*mt;if(Math.abs(W)>Number.EPSILON){const rt=Math.sqrt(S),dt=Math.sqrt(mt*mt+I*I),at=Y.x-yt/rt,Pt=Y.y+ct/rt,xt=K.x-I/dt,Lt=K.y+mt/dt,Ot=((xt-at)*I-(Lt-Pt)*mt)/(ct*I-yt*mt);et=at+ct*Ot-k.x,E=Pt+yt*Ot-k.y;const gt=et*et+E*E;if(gt<=2)return new ht(et,E);D=Math.sqrt(gt/2)}else{let rt=!1;ct>Number.EPSILON?mt>Number.EPSILON&&(rt=!0):ct<-Number.EPSILON?mt<-Number.EPSILON&&(rt=!0):Math.sign(yt)===Math.sign(I)&&(rt=!0),rt?(et=-yt,E=ct,D=Math.sqrt(S)):(et=ct,E=yt,D=Math.sqrt(S/2))}return new ht(et/D,E/D)}const st=[];for(let k=0,Y=G.length,K=Y-1,et=k+1;k<Y;k++,K++,et++)K===Y&&(K=0),et===Y&&(et=0),st[k]=q(G[k],G[K],G[et]);const lt=[];let _t,pt=st.concat();for(let k=0,Y=j;k<Y;k++){const K=L[k];_t=[];for(let et=0,E=K.length,D=E-1,ct=et+1;et<E;et++,D++,ct++)D===E&&(D=0),ct===E&&(ct=0),_t[et]=q(K[et],K[D],K[ct]);lt.push(_t),pt=pt.concat(_t)}let Ut;if(m===0)Ut=bi.triangulateShape(G,L);else{const k=[],Y=[];for(let K=0;K<m;K++){const et=K/m,E=d*Math.cos(et*Math.PI/2),D=g*Math.sin(et*Math.PI/2)+y;for(let ct=0,yt=G.length;ct<yt;ct++){const mt=H(G[ct],st[ct],D);nt(mt.x,mt.y,-E),et===0&&k.push(mt)}for(let ct=0,yt=j;ct<yt;ct++){const mt=L[ct];_t=lt[ct];const I=[];for(let S=0,W=mt.length;S<W;S++){const rt=H(mt[S],_t[S],D);nt(rt.x,rt.y,-E),et===0&&I.push(rt)}et===0&&Y.push(I)}}Ut=bi.triangulateShape(k,Y)}const J=Ut.length,z=g+y;for(let k=0;k<U;k++){const Y=h?H(N[k],pt[k],z):N[k];x?(P.copy(A.normals[0]).multiplyScalar(Y.x),T.copy(A.binormals[0]).multiplyScalar(Y.y),_.copy(v[0]).add(P).add(T),nt(_.x,_.y,_.z)):nt(Y.x,Y.y,0)}for(let k=1;k<=u;k++)for(let Y=0;Y<U;Y++){const K=h?H(N[Y],pt[Y],z):N[Y];x?(P.copy(A.normals[k]).multiplyScalar(K.x),T.copy(A.binormals[k]).multiplyScalar(K.y),_.copy(v[k]).add(P).add(T),nt(_.x,_.y,_.z)):nt(K.x,K.y,f/u*k)}for(let k=m-1;k>=0;k--){const Y=k/m,K=d*Math.cos(Y*Math.PI/2),et=g*Math.sin(Y*Math.PI/2)+y;for(let E=0,D=G.length;E<D;E++){const ct=H(G[E],st[E],et);nt(ct.x,ct.y,f+K)}for(let E=0,D=L.length;E<D;E++){const ct=L[E];_t=lt[E];for(let yt=0,mt=ct.length;yt<mt;yt++){const I=H(ct[yt],_t[yt],et);x?nt(I.x,I.y+v[u-1].y,v[u-1].x+K):nt(I.x,I.y,f+K)}}}w(),R();function w(){const k=s.length/3;if(h){let Y=0,K=U*Y;for(let et=0;et<J;et++){const E=Ut[et];$(E[2]+K,E[1]+K,E[0]+K)}Y=u+m*2,K=U*Y;for(let et=0;et<J;et++){const E=Ut[et];$(E[0]+K,E[1]+K,E[2]+K)}}else{for(let Y=0;Y<J;Y++){const K=Ut[Y];$(K[2],K[1],K[0])}for(let Y=0;Y<J;Y++){const K=Ut[Y];$(K[0]+U*u,K[1]+U*u,K[2]+U*u)}}n.addGroup(k,s.length/3-k,0)}function R(){const k=s.length/3;let Y=0;O(G,Y),Y+=G.length;for(let K=0,et=L.length;K<et;K++){const E=L[K];O(E,Y),Y+=E.length}n.addGroup(k,s.length/3-k,1)}function O(k,Y){let K=k.length;for(;--K>=0;){const et=K;let E=K-1;E<0&&(E=k.length-1);for(let D=0,ct=u+m*2;D<ct;D++){const yt=U*D,mt=U*(D+1),I=Y+et+yt,S=Y+E+yt,W=Y+E+mt,rt=Y+et+mt;it(I,S,W,rt)}}}function nt(k,Y,K){l.push(k),l.push(Y),l.push(K)}function $(k,Y,K){Mt(k),Mt(Y),Mt(K);const et=s.length/3,E=M.generateTopUV(n,s,et-3,et-2,et-1);ft(E[0]),ft(E[1]),ft(E[2])}function it(k,Y,K,et){Mt(k),Mt(Y),Mt(et),Mt(Y),Mt(K),Mt(et);const E=s.length/3,D=M.generateSideWallUV(n,s,E-6,E-3,E-2,E-1);ft(D[0]),ft(D[1]),ft(D[3]),ft(D[1]),ft(D[2]),ft(D[3])}function Mt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function ft(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ta[s.type]().fromJSON(s)),new Ds(n,t.options)}}const sg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-f),new ht(h,1-g),new ht(y,1-p)]:[new ht(a,1-l),new ht(u,1-f),new ht(d,1-g),new ht(m,1-p)]}};function rg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $s extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let v=0;v<c;v++){const x=v*f-r;g.push(x,-M,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,x=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;d.push(v,x,T),d.push(x,A,T)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}class zr extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const T=A/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(T+x,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=u[p][M+1],x=u[p][M],A=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&d.push(v,x,T),(p!==n-1||l<Math.PI)&&d.push(x,A,T)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kc extends be{constructor(t=new Nf(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new ht;let u=new B;const f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),p()}function m(v){u=t.getPointAt(v/e,u);const x=o.normals[v],A=o.binormals[v];for(let T=0;T<=s;T++){const P=T/s*Math.PI*2,_=Math.sin(P),b=-Math.cos(P);l.x=b*x.x+_*A.x,l.y=b*x.y+_*A.y,l.z=b*x.z+_*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const A=(s+1)*(v-1)+(x-1),T=(s+1)*v+(x-1),P=(s+1)*v+x,_=(s+1)*(v-1)+x;g.push(A,T,_),g.push(T,P,_)}}function M(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new kc(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function og(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ag={clone:Zs,merge:We};var lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ug extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class we extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hg extends Pn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Kt(16777215),this.specular=new Kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fg extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $u={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class pg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mg=new pg;class ca{constructor(t){this.manager=t!==void 0?t:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ca.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class gg extends Error{constructor(t,e){super(t),this.response=e}}class Vf extends ca{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=$u.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let y=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:v,value:x})=>{if(v)p.close();else{y+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let T=0,P=u.length;T<P;T++){const _=u[T];_.onProgress&&_.onProgress(A)}p.enqueue(x),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new gg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{$u.add(`file:${t}`,c);const u=ti[t];delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ti[t];if(u===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Gf extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ja=new ce,Ju=new B,Ku=new B;class _g{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Dr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const To=new B,wo=new Gn,Dn=new B;class Hf extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(To,wo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(To,wo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Si=new B,Qu=new ht,th=new ht;class fn extends Hf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,th),e.subVectors(th,Qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vc extends Hf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xg extends _g{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vg extends Gf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new xg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class yg extends Gf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ts=-90,ws=1;class Mg extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ts,ws,t,e);s.layers=this.layers,this.add(s);const r=new fn(Ts,ws,t,e);r.layers=this.layers,this.add(r);const o=new fn(Ts,ws,t,e);o.layers=this.layers,this.add(o);const a=new fn(Ts,ws,t,e);a.layers=this.layers,this.add(a);const l=new fn(Ts,ws,t,e);l.layers=this.layers,this.add(l);const c=new fn(Ts,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sg extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const eh=new ht;class Eg{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=eh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,eh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class zi{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ks,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let v=0,x=p.length;v<x;v++){const A=p[v],T=new es;T.curves=A.curves,M.push(T)}return M}function n(p,M){const v=M.length;let x=!1;for(let A=v-1,T=0;T<v;A=T++){let P=M[A],_=M[T],b=_.x-P.x,N=_.y-P.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(P=M[T],b=-b,_=M[A],N=-N),p.y<P.y||p.y>_.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const L=N*(p.x-P.x)-b*(p.y-P.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(p.y!==P.y)continue;if(_.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=_.x)return!0}}return x}const s=bi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new es,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const f=[],h=[];let d=[],g=0,y;h[g]=void 0,d[g]=[];for(let p=0,M=r.length;p<M;p++)a=r[p],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new es,p:y},h[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:y[0]});if(!h[0])return e(r);if(h.length>1){let p=!1,M=0;for(let v=0,x=h.length;v<x;v++)f[v]=[];for(let v=0,x=h.length;v<x;v++){const A=d[v];for(let T=0;T<A.length;T++){const P=A[T];let _=!0;for(let b=0;b<h.length;b++)n(P.p,h[b].p)&&(v!==b&&M++,_?(_=!1,f[b].push(P)):p=!0);_&&f[v].push(P)}}M>0&&p===!1&&(d=f)}let m;for(let p=0,M=h.length;p<M;p++){l=h[p].s,c.push(l),m=d[p];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}function nh(i,t,e,n){const s=bg(n);switch(e){case yf:return i*t;case bc:return i*t/s.components*s.byteLength;case Tc:return i*t/s.components*s.byteLength;case qs:return i*t*2/s.components*s.byteLength;case wc:return i*t*2/s.components*s.byteLength;case Mf:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Ac:return i*t*4/s.components*s.byteLength;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ll:case Nl:case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(i){switch(i){case an:case gf:return{byteLength:1,components:1};case Ir:case _f:case ui:return{byteLength:2,components:1};case Sc:case Ec:return{byteLength:2,components:4};case Wn:case Mc:case wn:return{byteLength:4,components:1};case xf:case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function Wf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tg(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,W0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:wg,alphahash_pars_fragment:Ag,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Pg,alphatest_pars_fragment:Ig,aomap_fragment:Lg,aomap_pars_fragment:Dg,batching_pars_vertex:Ng,batching_vertex:Ug,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:zg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:jg,common:$g,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Jg,displacementmap_pars_vertex:Kg,displacementmap_vertex:Qg,emissivemap_fragment:t_,emissivemap_pars_fragment:e_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:s_,envmap_common_pars_fragment:r_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:u_,fog_fragment:h_,fog_pars_fragment:f_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:v_,lights_toon_pars_fragment:y_,lights_phong_fragment:M_,lights_phong_pars_fragment:S_,lights_physical_fragment:E_,lights_physical_pars_fragment:b_,lights_fragment_begin:T_,lights_fragment_maps:w_,lights_fragment_end:A_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:I_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:N_,map_particle_pars_fragment:U_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:O_,morphinstance_vertex:B_,morphcolor_vertex:z_,morphnormal_vertex:k_,morphtarget_pars_vertex:V_,morphtarget_vertex:G_,normal_fragment_begin:H_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:K_,opaque_fragment:Q_,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:h0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:x0,transmission_fragment:v0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:E0,worldpos_vertex:b0,background_vert:T0,background_frag:w0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distance_vert:D0,distance_frag:N0,equirect_vert:U0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:k0,meshlambert_vert:V0,meshlambert_frag:G0,meshmatcap_vert:H0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:j0,meshphysical_vert:$0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:Q0,points_frag:tx,shadow_vert:ex,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},wt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Fn={basic:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([wt.points,wt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([wt.common,wt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([wt.sprite,wt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:We([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:We([wt.lights,wt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Fn.physical={uniforms:We([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ao={r:0,b:0,g:0},ki=new gn,rx=new ce;function ox(i,t,e,n,s,r){const o=new Kt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const x=M.backgroundBlurriness>0;v=t.get(v,x)}return v}function g(M){let v=!1;const x=d(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,v){const x=d(v);x&&(x.isCubeTexture||x.mapping===la)?(c===void 0&&(c=new $t(new ls(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Zs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ki.copy(v.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(ki)),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==re,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $t(new $s(2,2),new Xn({name:"BackgroundMaterial",uniforms:Zs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(Ao,kf(i)),e.buffers.color.setClear(Ao.r,Ao.g,Ao.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function ax(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(L,F,V,j,G){let H=!1;const U=f(L,j,V,F);r!==U&&(r=U,c(r.object)),H=d(L,j,V,G),H&&g(L,j,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(L,F,V,j),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,F,V,j){const G=j.wireframe===!0;let H=n[F.id];H===void 0&&(H={},n[F.id]=H);const U=L.isInstancedMesh===!0?L.id:0;let q=H[U];q===void 0&&(q={},H[U]=q);let st=q[V.id];st===void 0&&(st={},q[V.id]=st);let lt=st[G];return lt===void 0&&(lt=h(l()),st[G]=lt),lt}function h(L){const F=[],V=[],j=[];for(let G=0;G<e;G++)F[G]=0,V[G]=0,j[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function d(L,F,V,j){const G=r.attributes,H=F.attributes;let U=0;const q=V.getAttributes();for(const st in q)if(q[st].location>=0){const _t=G[st];let pt=H[st];if(pt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),_t===void 0||_t.attribute!==pt||pt&&_t.data!==pt.data)return!0;U++}return r.attributesNum!==U||r.index!==j}function g(L,F,V,j){const G={},H=F.attributes;let U=0;const q=V.getAttributes();for(const st in q)if(q[st].location>=0){let _t=H[st];_t===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor));const pt={};pt.attribute=_t,_t&&_t.data&&(pt.data=_t.data),G[st]=pt,U++}r.attributes=G,r.attributesNum=U,r.index=j}function y(){const L=r.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){const V=r.newAttributes,j=r.enabledAttributes,G=r.attributeDivisors;V[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),G[L]!==F&&(i.vertexAttribDivisor(L,F),G[L]=F)}function M(){const L=r.newAttributes,F=r.enabledAttributes;for(let V=0,j=F.length;V<j;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function v(L,F,V,j,G,H,U){U===!0?i.vertexAttribIPointer(L,F,V,G,H):i.vertexAttribPointer(L,F,V,j,G,H)}function x(L,F,V,j){y();const G=j.attributes,H=V.getAttributes(),U=F.defaultAttributeValues;for(const q in H){const st=H[q];if(st.location>=0){let lt=G[q];if(lt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),lt!==void 0){const _t=lt.normalized,pt=lt.itemSize,Ut=t.get(lt);if(Ut===void 0)continue;const J=Ut.buffer,z=Ut.type,w=Ut.bytesPerElement,R=z===i.INT||z===i.UNSIGNED_INT||lt.gpuType===Mc;if(lt.isInterleavedBufferAttribute){const O=lt.data,nt=O.stride,$=lt.offset;if(O.isInstancedInterleavedBuffer){for(let it=0;it<st.locationSize;it++)p(st.location+it,O.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let it=0;it<st.locationSize;it++)m(st.location+it);i.bindBuffer(i.ARRAY_BUFFER,J);for(let it=0;it<st.locationSize;it++)v(st.location+it,pt/st.locationSize,z,_t,nt*w,($+pt/st.locationSize*it)*w,R)}else{if(lt.isInstancedBufferAttribute){for(let O=0;O<st.locationSize;O++)p(st.location+O,lt.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let O=0;O<st.locationSize;O++)m(st.location+O);i.bindBuffer(i.ARRAY_BUFFER,J);for(let O=0;O<st.locationSize;O++)v(st.location+O,pt/st.locationSize,z,_t,pt*w,pt/st.locationSize*O*w,R)}}else if(U!==void 0){const _t=U[q];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(st.location,_t);break;case 3:i.vertexAttrib3fv(st.location,_t);break;case 4:i.vertexAttrib4fv(st.location,_t);break;default:i.vertexAttrib1fv(st.location,_t)}}}}M()}function A(){b();for(const L in n){const F=n[L];for(const V in F){const j=F[V];for(const G in j){const H=j[G];for(const U in H)u(H[U].object),delete H[U];delete j[G]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const V in F){const j=F[V];for(const G in j){const H=j[G];for(const U in H)u(H[U].object),delete H[U];delete j[G]}}delete n[L.id]}function P(L){for(const F in n){const V=n[F];for(const j in V){const G=V[j];if(G[L.id]===void 0)continue;const H=G[L.id];for(const U in H)u(H[U].object),delete H[U];delete G[L.id]}}}function _(L){for(const F in n){const V=n[F],j=L.isInstancedMesh===!0?L.id:0,G=V[j];if(G!==void 0){for(const H in G){const U=G[H];for(const q in U)u(U[q].object),delete U[q];delete G[H]}delete V[j],Object.keys(V).length===0&&delete n[F]}}}function b(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function lx(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y]*h[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!_)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,maxSamples:A,samples:T}}function ux(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Gi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,v=M*4;let x=p.clippingState||null;l.value=x,x=u(g,h,v,d);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==y;++v,x+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Ti=4,ih=[.125,.215,.35,.446,.526,.582],$i=20,hx=256,ar=new Vc,sh=new Kt;let $a=null,Za=0,Ja=0,Ka=!1;const fx=new B;class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=fx}=r;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ja),this._renderer.xr.enabled=Ka,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ui,format:An,colorSpace:Ys,depthBuffer:!1},s=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dx(r)),this._blurMaterial=mx(r,t,e),this._ggxMaterial=px(r,t,e)}return s}_compileMaterial(t){const e=new $t(new be,t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,s,r){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(sh),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new ls,new Nc({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(sh),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const A=this._cubeSize;As(s,x*A,v>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ti?n-g+Ti:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,As(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,As(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,ar)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):$i;m>$i&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let M=0;for(let P=0;P<$i;++P){const _=P/y,b=Math.exp(-_*_/2);p.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const x=this._sizeLods[s],A=3*x*(s>v-Ti?s-v+Ti:0),T=4*(this._cubeSize-x);As(e,A,T,3*x,2*x),l.setRenderTarget(e),l.render(f,ar)}}function dx(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+ih.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ti?l=ih[o-i+Ti-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,_=T>2?0:-1,b=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];M.set(b,y*g*T),v.set(h,m*g*T);const N=[T,T,T,T,T,T];x.set(N,p*g*T)}const A=new be;A.setAttribute("position",new Rn(M,y)),A.setAttribute("uv",new Rn(v,m)),A.setAttribute("faceIndex",new Rn(x,p)),n.push(new $t(A,null)),s>Ti&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function oh(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function px(i,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mx(i,t,e){const n=new Float32Array($i),s=new B(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ah(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}class Xf extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ls(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ai});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Ge),new Mg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function gx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===xa||d===va)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Xf(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===xa||d===va,y=d===ss||d===Xs;if(g||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new rh(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new rh(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===xa?h.mapping=ss:d===va&&(h.mapping=Xs),h}function l(h){let d=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function _x(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zo("WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const M=d.array;y=d.version;for(let v=0,x=M.length;v<x;v+=3){const A=M[v+0],T=M[v+1],P=M[v+2];h.push(A,T,T,P,P,A)}}else{const M=g.array;y=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const A=v+0,T=v+1,P=v+2;h.push(A,T,T,P,P,A)}}const m=new(g.count>=65535?Af:wf)(h,1);m.version=y;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,y,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*y[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var d=N;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*T*4*f),_=new Ef(P,A,T,f);_.type=wn,_.needsUpdate=!0;const b=x*4;for(let L=0;L<f;L++){const F=p[L],V=M[L],j=v[L],G=A*T*4*L;for(let H=0;H<F.count;H++){const U=H*b;g===!0&&(s.fromBufferAttribute(F,H),P[G+U+0]=s.x,P[G+U+1]=s.y,P[G+U+2]=s.z,P[G+U+3]=0),y===!0&&(s.fromBufferAttribute(V,H),P[G+U+4]=s.x,P[G+U+5]=s.y,P[G+U+6]=s.z,P[G+U+7]=0),m===!0&&(s.fromBufferAttribute(j,H),P[G+U+8]=s.x,P[G+U+9]=s.y,P[G+U+10]=s.z,P[G+U+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new ht(A,T)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sx(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Ex={[lf]:"LINEAR_TONE_MAPPING",[cf]:"REINHARD_TONE_MAPPING",[uf]:"CINEON_TONE_MAPPING",[hf]:"ACES_FILMIC_TONE_MAPPING",[df]:"AGX_TONE_MAPPING",[pf]:"NEUTRAL_TONE_MAPPING",[ff]:"CUSTOM_TONE_MAPPING"};function bx(i,t,e,n,s){const r=new Hn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Hn(t,e,{type:ui,depthBuffer:!1,stencilBuffer:!1}),a=new be;a.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new ug({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new $t(a,l),u=new Vc(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,y=null,m=[],p=!1;this.setSize=function(M,v){r.setSize(M,v),o.setSize(M,v);for(let x=0;x<m.length;x++){const A=m[x];A.setSize&&A.setSize(M,v)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const v=r.width,x=r.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(v,x)}},this.begin=function(M,v){if(d||M.toneMapping===Vn&&m.length===0)return!1;if(y=v,v!==null){const x=v.width,A=v.height;(r.width!==x||r.height!==A)&&this.setSize(x,A)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=g,d=!0;let x=r,A=o;for(let T=0;T<m.length;T++){const P=m[T];if(P.enabled!==!1&&(P.render(M,A,x,v),P.needsSwap!==!1)){const _=x;x=A,A=_}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},ee.getTransfer(f)===re&&(l.defines.SRGB_TRANSFER="");const T=Ex[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(c,u),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const qf=new Ze,lc=new Ur(1,1),Yf=new Ef,jf=new lm,$f=new Cf,ch=[],uh=[],hh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);function Ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Cx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Ce(e,n)}}function Px(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Ce(e,n)}}function Ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Ce(e,n)}}function Lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Fx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=e.isReversedDepthBuffer()?Pc:Cc,r=lc):r=qf,e.setTexture2D(t||r,s)}function Vx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jf,s)}function Gx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$f,s)}function Hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yf,s)}function Wx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Xx(i,t){i.uniform1fv(this.addr,t)}function qx(i,t){const e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Yx(i,t){const e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function jx(i,t){const e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function $x(i,t){const e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zx(i,t){const e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jx(i,t){const e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function Qx(i,t){i.uniform2iv(this.addr,t)}function tv(i,t){i.uniform3iv(this.addr,t)}function ev(i,t){i.uniform4iv(this.addr,t)}function nv(i,t){i.uniform1uiv(this.addr,t)}function iv(i,t){i.uniform2uiv(this.addr,t)}function sv(i,t){i.uniform3uiv(this.addr,t)}function rv(i,t){i.uniform4uiv(this.addr,t)}function ov(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lc:o=qf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function av(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jf,r[o])}function lv(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$f,r[o])}function cv(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yf,r[o])}function uv(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return jx;case 35674:return $x;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Qx;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}class hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}}class fv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uv(e.type)}}class dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function ph(i,t){i.seq.push(t),i.map[t.id]=t}function pv(i,t,e){const n=i.name,s=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),o=Qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ph(e,c===void 0?new hv(a,i,t):new fv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new dv(a),ph(e,f)),e=f}}}class zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function mh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mv=37297;let gv=0;function _v(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gh=new Xt;function xv(i){ee._getMatrix(gh,ee.workingColorSpace,i);const t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case jo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _h(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_v(i.getShaderSource(t),a)}else return r}function vv(i,t){const e=xv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const yv={[lf]:"Linear",[cf]:"Reinhard",[uf]:"Cineon",[hf]:"ACESFilmic",[df]:"AgX",[pf]:"Neutral",[ff]:"Custom"};function Mv(i,t){const e=yv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ro=new B;function Sv(){ee.getLuminanceCoefficients(Ro);const i=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function bv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(wv,Rv)}const Av=new Map;function Rv(i,t){let e=jt[t];if(e===void 0){const n=Av.get(t);if(n!==void 0)e=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Cv,Pv)}function Pv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Iv={[Do]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function Lv(i){return Iv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dv={[ss]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function Nv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Uv={[Xs]:"ENVMAP_MODE_REFRACTION"};function Fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ov={[yc]:"ENVMAP_BLENDING_MULTIPLY",[wp]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function zv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function kv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Lv(e),c=Nv(e),u=Fv(e),f=Bv(e),h=zv(e),d=Ev(e),g=bv(r),y=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=cc(o),o=xh(o,e),o=vh(o,e),a=cc(a),a=xh(a,e),a=vh(a,e),o=yh(o),a=yh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,A=mh(s,s.VERTEX_SHADER,v),T=mh(s,s.FRAGMENT_SHADER,x);s.attachShader(y,A),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",j=s.getShaderInfoLog(T)||"",G=F.trim(),H=V.trim(),U=j.trim();let q=!0,st=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{const lt=_h(s,A,"vertex"),_t=_h(s,T,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+lt+`
`+_t)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(H===""||U==="")&&(st=!1);st&&(L.diagnostics={runnable:q,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(A),s.deleteShader(T),_=new zo(s,y),b=Tv(s,y)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,mv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}let Vv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hv(t),e.set(t,n)),n}}class Hv{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}}function Wv(i,t,e,n,s,r){const o=new bf,a=new Gv,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,b,N,L,F){const V=L.fog,j=F.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||G,H),q=U&&U.mapping===la?U.image.height:null,st=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=lt!==void 0?lt.length:0;let pt=0;j.morphAttributes.position!==void 0&&(pt=1),j.morphAttributes.normal!==void 0&&(pt=2),j.morphAttributes.color!==void 0&&(pt=3);let Ut,J,z,w;if(st){const se=Fn[st];Ut=se.vertexShader,J=se.fragmentShader}else Ut=_.vertexShader,J=_.fragmentShader,a.update(_),z=a.getVertexShaderID(_),w=a.getFragmentShaderID(_);const R=i.getRenderTarget(),O=i.state.buffers.depth.getReversed(),nt=F.isInstancedMesh===!0,$=F.isBatchedMesh===!0,it=!!_.map,Mt=!!_.matcap,ft=!!U,k=!!_.aoMap,Y=!!_.lightMap,K=!!_.bumpMap,et=!!_.normalMap,E=!!_.displacementMap,D=!!_.emissiveMap,ct=!!_.metalnessMap,yt=!!_.roughnessMap,mt=_.anisotropy>0,I=_.clearcoat>0,S=_.dispersion>0,W=_.iridescence>0,rt=_.sheen>0,dt=_.transmission>0,at=mt&&!!_.anisotropyMap,Pt=I&&!!_.clearcoatMap,xt=I&&!!_.clearcoatNormalMap,Lt=I&&!!_.clearcoatRoughnessMap,Ot=W&&!!_.iridescenceMap,gt=W&&!!_.iridescenceThicknessMap,Et=rt&&!!_.sheenColorMap,Ft=rt&&!!_.sheenRoughnessMap,It=!!_.specularMap,At=!!_.specularColorMap,qt=!!_.specularIntensityMap,X=dt&&!!_.transmissionMap,bt=dt&&!!_.thicknessMap,St=!!_.gradientMap,Tt=!!_.alphaMap,vt=_.alphaTest>0,ut=!!_.alphaHash,Dt=!!_.extensions;let Wt=Vn;_.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const de={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:J,defines:_.defines,customVertexShaderID:z,customFragmentShaderID:w,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:$,batchingColor:$&&F._colorsTexture!==null,instancing:nt,instancingColor:nt&&F.instanceColor!==null,instancingMorph:nt&&F.morphTexture!==null,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ys,alphaToCoverage:!!_.alphaToCoverage,map:it,matcap:Mt,envMap:ft,envMapMode:ft&&U.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:Y,bumpMap:K,normalMap:et,displacementMap:E,emissiveMap:D,normalMapObjectSpace:et&&_.normalMapType===Pp,normalMapTangentSpace:et&&_.normalMapType===Rc,metalnessMap:ct,roughnessMap:yt,anisotropy:mt,anisotropyMap:at,clearcoat:I,clearcoatMap:Pt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Lt,dispersion:S,iridescence:W,iridescenceMap:Ot,iridescenceThicknessMap:gt,sheen:rt,sheenColorMap:Et,sheenRoughnessMap:Ft,specularMap:It,specularColorMap:At,specularIntensityMap:qt,transmission:dt,transmissionMap:X,thicknessMap:bt,gradientMap:St,opaque:_.transparent===!1&&_.blending===Bs&&_.alphaToCoverage===!1,alphaMap:Tt,alphaTest:vt,alphaHash:ut,combine:_.combine,mapUv:it&&g(_.map.channel),aoMapUv:k&&g(_.aoMap.channel),lightMapUv:Y&&g(_.lightMap.channel),bumpMapUv:K&&g(_.bumpMap.channel),normalMapUv:et&&g(_.normalMap.channel),displacementMapUv:E&&g(_.displacementMap.channel),emissiveMapUv:D&&g(_.emissiveMap.channel),metalnessMapUv:ct&&g(_.metalnessMap.channel),roughnessMapUv:yt&&g(_.roughnessMap.channel),anisotropyMapUv:at&&g(_.anisotropyMap.channel),clearcoatMapUv:Pt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(_.sheenRoughnessMap.channel),specularMapUv:It&&g(_.specularMap.channel),specularColorMapUv:At&&g(_.specularColorMap.channel),specularIntensityMapUv:qt&&g(_.specularIntensityMap.channel),transmissionMapUv:X&&g(_.transmissionMap.channel),thicknessMapUv:bt&&g(_.thicknessMap.channel),alphaMapUv:Tt&&g(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(et||mt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(it||Tt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||j.attributes.normal===void 0&&et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:O,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:it&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&_.extensions.multiDraw===!0||$)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(b,_),M(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){const b=d[_.type];let N;if(b){const L=Fn[b];N=ag.clone(L.uniforms)}else N=_.uniforms;return N}function x(_,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new kv(i,b,_,s),c.push(N),u.set(b,N)),N}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function Xv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,y,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,d,g,y,m,p){const M=a(h,d,g,y,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(h,d,g,y,m,p){const M=a(h,d,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||qv),n.length>1&&n.sort(d||Sh),s.length>1&&s.sort(d||Sh)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Yv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Eh,i.set(n,[o])):s>=r.length?(o=new Eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Kt};break;case"SpotLight":e={position:new B,direction:new B,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function $v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zv=0;function Jv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kv(i){const t=new jv,e=$v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ce,o=new ce;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,M=0,v=0,x=0,A=0,T=0,P=0;c.sort(Jv);for(let b=0,N=c.length;b<N;b++){const L=c[b],F=L.color,V=L.intensity,j=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qs?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*V,f+=F.g*V,h+=F.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);P++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,q=e.get(L);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=j,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[y]=H;const U=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,U.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[y]=U.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=G,x++}y++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const U=L.shadow,q=e.get(L);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,q.shadowCameraNear=U.camera.near,q.shadowCameraFar=U.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==d||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==v||_.numSpotShadows!==x||_.numSpotMaps!==A||_.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,_.directionalLength=d,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=v,_.numSpotShadows=x,_.numSpotMaps=A,_.numLightProbes=P,n.version=Zv++)}function l(c,u){let f=0,h=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=n.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function bh(i){const t=new Kv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bh(i),t.set(s,[a])):r>=o.length?(a=new bh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ny=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],iy=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Th=new ce,lr=new B,tl=new B;function sy(i,t,e){let n=new Uc;const s=new ht,r=new ht,o=new Me,a=new fg,l=new dg,c={},u=e.maxTextureSize,f={[Ci]:Ke,[Ke]:Ci,[dn]:dn},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ty,fragmentShader:ey}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(T,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===af&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Do);const b=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==this.type;V&&P.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(G=>G.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,G=T.length;j<G;j++){const H=T[j],U=H.shadow;if(U===void 0){Gt("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const q=U.getFrameExtents();s.multiply(q),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,U.mapSize.y=r.y));const st=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=st,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===hr){if(H.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Hn(s.x,s.y,{format:qs,type:ui,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new Ur(s.x,s.y,wn),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=hi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Be,U.map.depthTexture.magFilter=Be}else H.isPointLight?(U.map=new Xf(s.x),U.map.depthTexture=new Rm(s.x,Wn)):(U.map=new Hn(s.x,s.y),U.map.depthTexture=new Ur(s.x,s.y,Wn)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=hi,this.type===Do?(U.map.depthTexture.compareFunction=st?Pc:Cc,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Be,U.map.depthTexture.magFilter=Be);U.camera.updateProjectionMatrix()}const lt=U.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<lt;_t++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(U.map),i.clear());const pt=U.getViewport(_t);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),F.viewport(o)}if(H.isPointLight){const pt=U.camera,Ut=U.matrix,J=H.distance||pt.far;J!==pt.far&&(pt.far=J,pt.updateProjectionMatrix()),lr.setFromMatrixPosition(H.matrixWorld),pt.position.copy(lr),tl.copy(pt.position),tl.add(ny[_t]),pt.up.copy(iy[_t]),pt.lookAt(tl),pt.updateMatrixWorld(),Ut.makeTranslation(-lr.x,-lr.y,-lr.z),Th.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Th,pt.coordinateSystem,pt.reversedDepth)}else U.updateMatrices(H);n=U.getFrustum(),x(P,_,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===hr&&M(U,_),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,N,L)};function M(T,P){const _=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(s.x,s.y,{format:qs,type:ui})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,_,h,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,_,d,y,null)}function v(T,P,_,b){let N=null;const L=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)N=L;else if(N=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=N.uuid,V=P.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let G=j[V];G===void 0&&(G=N.clone(),j[V]=G,P.addEventListener("dispose",A)),N=G}if(N.visible=P.visible,N.wireframe=P.wireframe,b===hr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=i.properties.get(N);F.light=_}return N}function x(T,P,_,b,N){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===hr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const V=t.update(T),j=T.material;if(Array.isArray(j)){const G=V.groups;for(let H=0,U=G.length;H<U;H++){const q=G[H],st=j[q.materialIndex];if(st&&st.visible){const lt=v(T,st,b,N);T.onBeforeShadow(i,T,P,_,V,lt,q),i.renderBufferDirect(_,null,V,lt,T,q),T.onAfterShadow(i,T,P,_,V,lt,q)}}}else if(j.visible){const G=v(T,j,b,N);T.onBeforeShadow(i,T,P,_,V,G,null),i.renderBufferDirect(_,null,V,G,T,null),T.onAfterShadow(i,T,P,_,V,G,null)}}const F=T.children;for(let V=0,j=F.length;V<j;V++)x(F[V],P,_,b,N)}function A(T){T.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],N=T.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function ry(i,t){function e(){let X=!1;const bt=new Me;let St=null;const Tt=new Me(0,0,0,0);return{setMask:function(vt){St!==vt&&!X&&(i.colorMask(vt,vt,vt,vt),St=vt)},setLocked:function(vt){X=vt},setClear:function(vt,ut,Dt,Wt,de){de===!0&&(vt*=Wt,ut*=Wt,Dt*=Wt),bt.set(vt,ut,Dt,Wt),Tt.equals(bt)===!1&&(i.clearColor(vt,ut,Dt,Wt),Tt.copy(bt))},reset:function(){X=!1,St=null,Tt.set(-1,0,0,0)}}}function n(){let X=!1,bt=!1,St=null,Tt=null,vt=null;return{setReversed:function(ut){if(bt!==ut){const Dt=t.get("EXT_clip_control");ut?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),bt=ut;const Wt=vt;vt=null,this.setClear(Wt)}},getReversed:function(){return bt},setTest:function(ut){ut?R(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(ut){St!==ut&&!X&&(i.depthMask(ut),St=ut)},setFunc:function(ut){if(bt&&(ut=kp[ut]),Tt!==ut){switch(ut){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ut}},setLocked:function(ut){X=ut},setClear:function(ut){vt!==ut&&(vt=ut,bt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){X=!1,St=null,Tt=null,vt=null,bt=!1}}}function s(){let X=!1,bt=null,St=null,Tt=null,vt=null,ut=null,Dt=null,Wt=null,de=null;return{setTest:function(se){X||(se?R(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function(se){bt!==se&&!X&&(i.stencilMask(se),bt=se)},setFunc:function(se,Yn,jn){(St!==se||Tt!==Yn||vt!==jn)&&(i.stencilFunc(se,Yn,jn),St=se,Tt=Yn,vt=jn)},setOp:function(se,Yn,jn){(ut!==se||Dt!==Yn||Wt!==jn)&&(i.stencilOp(se,Yn,jn),ut=se,Dt=Yn,Wt=jn)},setLocked:function(se){X=se},setClear:function(se){de!==se&&(i.clearStencil(se),de=se)},reset:function(){X=!1,bt=null,St=null,Tt=null,vt=null,ut=null,Dt=null,Wt=null,de=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,y=!1,m=null,p=null,M=null,v=null,x=null,A=null,T=null,P=new Kt(0,0,0),_=0,b=!1,N=null,L=null,F=null,V=null,j=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=U>=2);let st=null,lt={};const _t=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Ut=new Me().fromArray(_t),J=new Me().fromArray(pt);function z(X,bt,St,Tt){const vt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(X,ut),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<St;Dt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(bt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return ut}const w={};w[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),w[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),w[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(i.DEPTH_TEST),o.setFunc(Ws),K(!1),et(uu),R(i.CULL_FACE),k(ai);function R(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function O(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function nt(X,bt){return f[X]!==bt?(i.bindFramebuffer(X,bt),f[X]=bt,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function $(X,bt){let St=d,Tt=!1;if(X){St=h.get(bt),St===void 0&&(St=[],h.set(bt,St));const vt=X.textures;if(St.length!==vt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Dt=vt.length;ut<Dt;ut++)St[ut]=i.COLOR_ATTACHMENT0+ut;St.length=vt.length,Tt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(St)}function it(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const Mt={[ji]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};Mt[hp]=i.MIN,Mt[fp]=i.MAX;const ft={[dp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[yp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Sp]:i.CONSTANT_COLOR,[Ep]:i.ONE_MINUS_CONSTANT_COLOR,[bp]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function k(X,bt,St,Tt,vt,ut,Dt,Wt,de,se){if(X===ai){y===!0&&(O(i.BLEND),y=!1);return}if(y===!1&&(R(i.BLEND),y=!0),X!==lp){if(X!==m||se!==b){if((p!==ji||x!==ji)&&(i.blendEquation(i.FUNC_ADD),p=ji,x=ji),se)switch(X){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hu:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fu:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",X);break}M=null,v=null,A=null,T=null,P.set(0,0,0),_=0,m=X,b=se}return}vt=vt||bt,ut=ut||St,Dt=Dt||Tt,(bt!==p||vt!==x)&&(i.blendEquationSeparate(Mt[bt],Mt[vt]),p=bt,x=vt),(St!==M||Tt!==v||ut!==A||Dt!==T)&&(i.blendFuncSeparate(ft[St],ft[Tt],ft[ut],ft[Dt]),M=St,v=Tt,A=ut,T=Dt),(Wt.equals(P)===!1||de!==_)&&(i.blendColor(Wt.r,Wt.g,Wt.b,de),P.copy(Wt),_=de),m=X,b=!1}function Y(X,bt){X.side===dn?O(i.CULL_FACE):R(i.CULL_FACE);let St=X.side===Ke;bt&&(St=!St),K(St),X.blending===Bs&&X.transparent===!1?k(ai):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Tt=X.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),D(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(X){N!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),N=X)}function et(X){X!==op?(R(i.CULL_FACE),X!==L&&(X===uu?i.cullFace(i.BACK):X===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),L=X}function E(X){X!==F&&(H&&i.lineWidth(X),F=X)}function D(X,bt,St){X?(R(i.POLYGON_OFFSET_FILL),(V!==bt||j!==St)&&(V=bt,j=St,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,St))):O(i.POLYGON_OFFSET_FILL)}function ct(X){X?R(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function yt(X){X===void 0&&(X=i.TEXTURE0+G-1),st!==X&&(i.activeTexture(X),st=X)}function mt(X,bt,St){St===void 0&&(st===null?St=i.TEXTURE0+G-1:St=st);let Tt=lt[St];Tt===void 0&&(Tt={type:void 0,texture:void 0},lt[St]=Tt),(Tt.type!==X||Tt.texture!==bt)&&(st!==St&&(i.activeTexture(St),st=St),i.bindTexture(X,bt||w[X]),Tt.type=X,Tt.texture=bt)}function I(){const X=lt[st];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(X){te("WebGLState:",X)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(X){te("WebGLState:",X)}}function rt(){try{i.texSubImage2D(...arguments)}catch(X){te("WebGLState:",X)}}function dt(){try{i.texSubImage3D(...arguments)}catch(X){te("WebGLState:",X)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(X){te("WebGLState:",X)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){te("WebGLState:",X)}}function xt(){try{i.texStorage2D(...arguments)}catch(X){te("WebGLState:",X)}}function Lt(){try{i.texStorage3D(...arguments)}catch(X){te("WebGLState:",X)}}function Ot(){try{i.texImage2D(...arguments)}catch(X){te("WebGLState:",X)}}function gt(){try{i.texImage3D(...arguments)}catch(X){te("WebGLState:",X)}}function Et(X){Ut.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ut.copy(X))}function Ft(X){J.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function It(X,bt){let St=c.get(bt);St===void 0&&(St=new WeakMap,c.set(bt,St));let Tt=St.get(X);Tt===void 0&&(Tt=i.getUniformBlockIndex(bt,X.name),St.set(X,Tt))}function At(X,bt){const Tt=c.get(bt).get(X);l.get(bt)!==Tt&&(i.uniformBlockBinding(bt,Tt,X.__bindingPointIndex),l.set(bt,Tt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,lt={},f={},h=new WeakMap,d=[],g=null,y=!1,m=null,p=null,M=null,v=null,x=null,A=null,T=null,P=new Kt(0,0,0),_=0,b=!1,N=null,L=null,F=null,V=null,j=null,Ut.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:O,bindFramebuffer:nt,drawBuffers:$,useProgram:it,setBlending:k,setMaterial:Y,setFlipSided:K,setCullFace:et,setLineWidth:E,setPolygonOffset:D,setScissorTest:ct,activeTexture:yt,bindTexture:mt,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Ot,texImage3D:gt,updateUBOMapping:It,uniformBlockBinding:At,texStorage2D:xt,texStorage3D:Lt,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:at,compressedTexSubImage3D:Pt,scissor:Et,viewport:Ft,reset:qt}}function oy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return d?new OffscreenCanvas(I,S):$o("canvas")}function y(I,S,W){let rt=1;const dt=mt(I);if((dt.width>W||dt.height>W)&&(rt=W/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const at=Math.floor(rt*dt.width),Pt=Math.floor(rt*dt.height);f===void 0&&(f=g(at,Pt));const xt=S?g(at,Pt):f;return xt.width=at,xt.height=Pt,xt.getContext("2d").drawImage(I,0,0,at,Pt),Gt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+at+"x"+Pt+")."),xt}else return"data"in I&&Gt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,S,W,rt,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=S;if(S===i.RED&&(W===i.FLOAT&&(at=i.R32F),W===i.HALF_FLOAT&&(at=i.R16F),W===i.UNSIGNED_BYTE&&(at=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.R8UI),W===i.UNSIGNED_SHORT&&(at=i.R16UI),W===i.UNSIGNED_INT&&(at=i.R32UI),W===i.BYTE&&(at=i.R8I),W===i.SHORT&&(at=i.R16I),W===i.INT&&(at=i.R32I)),S===i.RG&&(W===i.FLOAT&&(at=i.RG32F),W===i.HALF_FLOAT&&(at=i.RG16F),W===i.UNSIGNED_BYTE&&(at=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.RG8UI),W===i.UNSIGNED_SHORT&&(at=i.RG16UI),W===i.UNSIGNED_INT&&(at=i.RG32UI),W===i.BYTE&&(at=i.RG8I),W===i.SHORT&&(at=i.RG16I),W===i.INT&&(at=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.RGB8UI),W===i.UNSIGNED_SHORT&&(at=i.RGB16UI),W===i.UNSIGNED_INT&&(at=i.RGB32UI),W===i.BYTE&&(at=i.RGB8I),W===i.SHORT&&(at=i.RGB16I),W===i.INT&&(at=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),W===i.UNSIGNED_INT&&(at=i.RGBA32UI),W===i.BYTE&&(at=i.RGBA8I),W===i.SHORT&&(at=i.RGBA16I),W===i.INT&&(at=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),S===i.RGBA){const Pt=dt?jo:ee.getTransfer(rt);W===i.FLOAT&&(at=i.RGBA32F),W===i.HALF_FLOAT&&(at=i.RGBA16F),W===i.UNSIGNED_BYTE&&(at=Pt===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(I,S){let W;return I?S===null||S===Wn||S===Lr?W=i.DEPTH24_STENCIL8:S===wn?W=i.DEPTH32F_STENCIL8:S===Ir&&(W=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wn||S===Lr?W=i.DEPTH_COMPONENT24:S===wn?W=i.DEPTH_COMPONENT32F:S===Ir&&(W=i.DEPTH_COMPONENT16),W}function A(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Be&&I.minFilter!==Ge?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function T(I){const S=I.target;S.removeEventListener("dispose",T),_(S),S.isVideoTexture&&u.delete(S)}function P(I){const S=I.target;S.removeEventListener("dispose",P),N(S)}function _(I){const S=n.get(I);if(S.__webglInit===void 0)return;const W=I.source,rt=h.get(W);if(rt){const dt=rt[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&b(I),Object.keys(rt).length===0&&h.delete(W)}n.remove(I)}function b(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const W=I.source,rt=h.get(W);delete rt[S.__cacheKey],o.memory.textures--}function N(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let dt=0;dt<S.__webglFramebuffer[rt].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[rt][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=I.textures;for(let rt=0,dt=W.length;rt<dt;rt++){const at=n.get(W[rt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(W[rt])}n.remove(I)}let L=0;function F(){L=0}function V(){const I=L;return I>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function j(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){const W=n.get(I);if(I.isVideoTexture&&ct(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const rt=I.image;if(rt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{w(W,I,S);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function H(I,S){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){w(W,I,S);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function U(I,S){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){w(W,I,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function q(I,S){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){R(W,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const st={[Tl]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},lt={[Be]:i.NEAREST,[Rp]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},_t={[Ip]:i.NEVER,[Fp]:i.ALWAYS,[Lp]:i.LESS,[Cc]:i.LEQUAL,[Dp]:i.EQUAL,[Pc]:i.GEQUAL,[Np]:i.GREATER,[Up]:i.NOTEQUAL};function pt(I,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ge||S.magFilter===ya||S.magFilter===Kr||S.magFilter===Qi||S.minFilter===Ge||S.minFilter===ya||S.minFilter===Kr||S.minFilter===Qi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,lt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==Kr&&S.minFilter!==Qi||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ut(I,S){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",T));const rt=S.source;let dt=h.get(rt);dt===void 0&&(dt={},h.set(rt,dt));const at=j(S);if(at!==I.__cacheKey){dt[at]===void 0&&(dt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),dt[at].usedTimes++;const Pt=dt[I.__cacheKey];Pt!==void 0&&(dt[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(S)),I.__cacheKey=at,I.__webglTexture=dt[at].texture}return W}function J(I,S,W){return Math.floor(Math.floor(I/W)/S)}function z(I,S,W,rt){const at=I.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,rt,S.data);else{at.sort((gt,Et)=>gt.start-Et.start);let Pt=0;for(let gt=1;gt<at.length;gt++){const Et=at[Pt],Ft=at[gt],It=Et.start+Et.count,At=J(Ft.start,S.width,4),qt=J(Et.start,S.width,4);Ft.start<=It+1&&At===qt&&J(Ft.start+Ft.count-1,S.width,4)===At?Et.count=Math.max(Et.count,Ft.start+Ft.count-Et.start):(++Pt,at[Pt]=Ft)}at.length=Pt+1;const xt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let gt=0,Et=at.length;gt<Et;gt++){const Ft=at[gt],It=Math.floor(Ft.start/4),At=Math.ceil(Ft.count/4),qt=It%S.width,X=Math.floor(It/S.width),bt=At,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,qt,X,bt,St,W,rt,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ot)}}function w(I,S,W){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);const dt=Ut(I,S),at=S.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+W);const Pt=n.get(at);if(at.version!==Pt.__version||dt===!0){e.activeTexture(i.TEXTURE0+W);const xt=ee.getPrimaries(ee.workingColorSpace),Lt=S.colorSpace===Ei?null:ee.getPrimaries(S.colorSpace),Ot=S.colorSpace===Ei||xt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let gt=y(S.image,!1,s.maxTextureSize);gt=yt(S,gt);const Et=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let It=v(S.internalFormat,Et,Ft,S.colorSpace,S.isVideoTexture);pt(rt,S);let At;const qt=S.mipmaps,X=S.isVideoTexture!==!0,bt=Pt.__version===void 0||dt===!0,St=at.dataReady,Tt=A(S,gt);if(S.isDepthTexture)It=x(S.format===ts,S.type),bt&&(X?e.texStorage2D(i.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Et,Ft,null));else if(S.isDataTexture)if(qt.length>0){X&&bt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,qt[0].width,qt[0].height);for(let vt=0,ut=qt.length;vt<ut;vt++)At=qt[vt],X?St&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,vt,It,At.width,At.height,0,Et,Ft,At.data);S.generateMipmaps=!1}else X?(bt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,gt.width,gt.height),St&&z(S,gt,Et,Ft)):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Et,Ft,gt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,qt[0].width,qt[0].height,gt.depth);for(let vt=0,ut=qt.length;vt<ut;vt++)if(At=qt[vt],S.format!==An)if(Et!==null)if(X){if(St)if(S.layerUpdates.size>0){const Dt=nh(At.width,At.height,S.format,S.type);for(const Wt of S.layerUpdates){const de=At.data.subarray(Wt*Dt/At.data.BYTES_PER_ELEMENT,(Wt+1)*Dt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Wt,At.width,At.height,1,Et,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,At.width,At.height,gt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,It,At.width,At.height,gt.depth,0,At.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,At.width,At.height,gt.depth,Et,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,It,At.width,At.height,gt.depth,0,Et,Ft,At.data)}else{X&&bt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,qt[0].width,qt[0].height);for(let vt=0,ut=qt.length;vt<ut;vt++)At=qt[vt],S.format!==An?Et!==null?X?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,It,At.width,At.height,0,At.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?St&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,vt,It,At.width,At.height,0,Et,Ft,At.data)}else if(S.isDataArrayTexture)if(X){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,gt.width,gt.height,gt.depth),St)if(S.layerUpdates.size>0){const vt=nh(gt.width,gt.height,S.format,S.type);for(const ut of S.layerUpdates){const Dt=gt.data.subarray(ut*vt/gt.data.BYTES_PER_ELEMENT,(ut+1)*vt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,Et,Ft,Dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Et,Ft,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,Et,Ft,gt.data);else if(S.isData3DTexture)X?(bt&&e.texStorage3D(i.TEXTURE_3D,Tt,It,gt.width,gt.height,gt.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Et,Ft,gt.data)):e.texImage3D(i.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,Et,Ft,gt.data);else if(S.isFramebufferTexture){if(bt)if(X)e.texStorage2D(i.TEXTURE_2D,Tt,It,gt.width,gt.height);else{let vt=gt.width,ut=gt.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,It,vt,ut,0,Et,Ft,null),vt>>=1,ut>>=1}}else if(qt.length>0){if(X&&bt){const vt=mt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,It,vt.width,vt.height)}for(let vt=0,ut=qt.length;vt<ut;vt++)At=qt[vt],X?St&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Et,Ft,At):e.texImage2D(i.TEXTURE_2D,vt,It,Et,Ft,At);S.generateMipmaps=!1}else if(X){if(bt){const vt=mt(gt);e.texStorage2D(i.TEXTURE_2D,Tt,It,vt.width,vt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,gt)}else e.texImage2D(i.TEXTURE_2D,0,It,Et,Ft,gt);m(S)&&p(rt),Pt.__version=at.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function R(I,S,W){if(S.image.length!==6)return;const rt=Ut(I,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const at=n.get(dt);if(dt.version!==at.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);const Pt=ee.getPrimaries(ee.workingColorSpace),xt=S.colorSpace===Ei?null:ee.getPrimaries(S.colorSpace),Lt=S.colorSpace===Ei||Pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let ut=0;ut<6;ut++)!Ot&&!gt?Et[ut]=y(S.image[ut],!0,s.maxCubemapSize):Et[ut]=gt?S.image[ut].image:S.image[ut],Et[ut]=yt(S,Et[ut]);const Ft=Et[0],It=r.convert(S.format,S.colorSpace),At=r.convert(S.type),qt=v(S.internalFormat,It,At,S.colorSpace),X=S.isVideoTexture!==!0,bt=at.__version===void 0||rt===!0,St=dt.dataReady;let Tt=A(S,Ft);pt(i.TEXTURE_CUBE_MAP,S);let vt;if(Ot){X&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,Ft.width,Ft.height);for(let ut=0;ut<6;ut++){vt=Et[ut].mipmaps;for(let Dt=0;Dt<vt.length;Dt++){const Wt=vt[Dt];S.format!==An?It!==null?X?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Wt.width,Wt.height,It,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,qt,Wt.width,Wt.height,0,Wt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Wt.width,Wt.height,It,At,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,qt,Wt.width,Wt.height,0,It,At,Wt.data)}}}else{if(vt=S.mipmaps,X&&bt){vt.length>0&&Tt++;const ut=mt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){X?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Et[ut].width,Et[ut].height,It,At,Et[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,qt,Et[ut].width,Et[ut].height,0,It,At,Et[ut].data);for(let Dt=0;Dt<vt.length;Dt++){const de=vt[Dt].image[ut].image;X?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,de.width,de.height,It,At,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,qt,de.width,de.height,0,It,At,de.data)}}else{X?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,It,At,Et[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,qt,It,At,Et[ut]);for(let Dt=0;Dt<vt.length;Dt++){const Wt=vt[Dt];X?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,It,At,Wt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,qt,It,At,Wt.image[ut])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),at.__version=dt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function O(I,S,W,rt,dt,at){const Pt=r.convert(W.format,W.colorSpace),xt=r.convert(W.type),Lt=v(W.internalFormat,Pt,xt,W.colorSpace),Ot=n.get(S),gt=n.get(W);if(gt.__renderTarget=S,!Ot.__hasExternalTextures){const Et=Math.max(1,S.width>>at),Ft=Math.max(1,S.height>>at);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,Lt,Et,Ft,S.depth,0,Pt,xt,null):e.texImage2D(dt,at,Lt,Et,Ft,0,Pt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,dt,gt.__webglTexture,0,E(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,dt,gt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(I,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const rt=S.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,at=x(S.stencilBuffer,dt),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),at,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,I)}else{const rt=S.textures;for(let dt=0;dt<rt.length;dt++){const at=rt[dt],Pt=r.convert(at.format,at.colorSpace),xt=r.convert(at.type),Lt=v(at.internalFormat,Pt,xt,at.colorSpace);D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),Lt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),Lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(I,S,W){const rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(S.depthTexture);if(dt.__renderTarget=S,(!dt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S.depthTexture);const Ot=r.convert(S.depthTexture.format),gt=r.convert(S.depthTexture.type);let Et;S.depthTexture.format===hi?Et=i.DEPTH_COMPONENT24:S.depthTexture.format===ts&&(Et=i.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,S.width,S.height,0,Ot,gt,null)}}else G(S.depthTexture,0);const at=dt.__webglTexture,Pt=E(S),xt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Lt=S.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===hi)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Lt,xt,at,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Lt,xt,at,0);else if(S.depthTexture.format===ts)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Lt,xt,at,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Lt,xt,at,0);else throw new Error("Unknown depthTexture format")}function it(I){const S=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const rt=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){const dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=rt}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let rt=0;rt<6;rt++)$(S.__webglFramebuffer[rt],I,rt);else{const rt=I.texture.mipmaps;rt&&rt.length>0?$(S.__webglFramebuffer[0],I,0):$(S.__webglFramebuffer,I,0)}else if(W){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),nt(S.__webglDepthbuffer[rt],I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,at)}}else{const rt=I.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),nt(S.__webglDepthbuffer,I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(I,S,W){const rt=n.get(I);S!==void 0&&O(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&it(I)}function ft(I){const S=I.texture,W=n.get(I),rt=n.get(S);I.addEventListener("dispose",P);const dt=I.textures,at=I.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,o.memory.textures++),at){W.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[xt]=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)W.__webglFramebuffer[xt][Lt]=i.createFramebuffer()}else W.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)W.__webglFramebuffer[xt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let xt=0,Lt=dt.length;xt<Lt;xt++){const Ot=n.get(dt[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&D(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){const Lt=dt[xt];W.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[xt]);const Ot=r.convert(Lt.format,Lt.colorSpace),gt=r.convert(Lt.type),Et=v(Lt.internalFormat,Ot,gt,Lt.colorSpace,I.isXRRenderTarget===!0),Ft=E(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,W.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)O(W.__webglFramebuffer[xt][Lt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt);else O(W.__webglFramebuffer[xt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Lt=dt.length;xt<Lt;xt++){const Ot=dt[xt],gt=n.get(Ot);let Et=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,gt.__webglTexture),pt(Et,Ot),O(W.__webglFramebuffer,I,Ot,i.COLOR_ATTACHMENT0+xt,Et,0),m(Ot)&&p(Et)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,rt.__webglTexture),pt(xt,S),S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)O(W.__webglFramebuffer[Lt],I,S,i.COLOR_ATTACHMENT0,xt,Lt);else O(W.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,xt,0);m(S)&&p(xt),e.unbindTexture()}I.depthBuffer&&it(I)}function k(I){const S=I.textures;for(let W=0,rt=S.length;W<rt;W++){const dt=S[W];if(m(dt)){const at=M(I),Pt=n.get(dt).__webglTexture;e.bindTexture(at,Pt),p(at),e.unbindTexture()}}}const Y=[],K=[];function et(I){if(I.samples>0){if(D(I)===!1){const S=I.textures,W=I.width,rt=I.height;let dt=i.COLOR_BUFFER_BIT;const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(I),xt=S.length>1;if(xt)for(let Ot=0;Ot<S.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Lt=I.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ot=0;Ot<S.length;Ot++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const gt=n.get(S[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,W,rt,0,0,W,rt,dt,i.NEAREST),l===!0&&(Y.length=0,K.length=0,Y.push(i.COLOR_ATTACHMENT0+Ot),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Y.push(at),K.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Ot=0;Ot<S.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const gt=n.get(S[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function E(I){return Math.min(s.maxSamples,I.samples)}function D(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(I){const S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function yt(I,S){const W=I.colorSpace,rt=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Ys&&W!==Ei&&(ee.getTransfer(W)===re?(rt!==An||dt!==an)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),S}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=Mt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=O,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ay(i,t){function e(n,s=Ei){let r;const o=ee.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gf)return i.BYTE;if(n===_f)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===yf)return i.ALPHA;if(n===Mf)return i.RGB;if(n===An)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===qs)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===No||n===Uo||n===Fo||n===Oo)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Ll)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fl)return r.COMPRESSED_RG11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===$l||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hy extends Js{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new uy,p={},M=e.getContextAttributes();let v=null,x=null;const A=[],T=[],P=new ht;let _=null;const b=new fn;b.viewport=new Me;const N=new fn;N.viewport=new Me;const L=[b,N],F=new Sg;let V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=A[w];return R===void 0&&(R=new wa,A[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=A[w];return R===void 0&&(R=new wa,A[w]=R),R.getGripSpace()},this.getHand=function(w){let R=A[w];return R===void 0&&(R=new wa,A[w]=R),R.getHandSpace()};function G(w){const R=T.indexOf(w.inputSource);if(R===-1)return;const O=A[R];O!==void 0&&(O.update(w.inputSource,w.frame,c||o),O.dispatchEvent({type:w.type,data:w.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let w=0;w<A.length;w++){const R=T[w];R!==null&&(T[w]=null,A[w].disconnect(R))}V=null,j=null,m.reset();for(const w in p)delete p[w];t.setRenderTarget(v),d=null,h=null,f=null,s=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,nt=null,$=null;M.depth&&($=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=M.stencil?ts:hi,nt=M.stencil?Lr:Wn);const it={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(it),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Hn(h.textureWidth,h.textureHeight,{format:An,type:an,depthTexture:new Ur(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const O={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Hn(d.framebufferWidth,d.framebufferHeight,{format:An,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(w){for(let R=0;R<w.removed.length;R++){const O=w.removed[R],nt=T.indexOf(O);nt>=0&&(T[nt]=null,A[nt].disconnect(O))}for(let R=0;R<w.added.length;R++){const O=w.added[R];let nt=T.indexOf(O);if(nt===-1){for(let it=0;it<A.length;it++)if(it>=T.length){T.push(O),nt=it;break}else if(T[it]===null){T[it]=O,nt=it;break}if(nt===-1)break}const $=A[nt];$&&$.connect(O)}}const q=new B,st=new B;function lt(w,R,O){q.setFromMatrixPosition(R.matrixWorld),st.setFromMatrixPosition(O.matrixWorld);const nt=q.distanceTo(st),$=R.projectionMatrix.elements,it=O.projectionMatrix.elements,Mt=$[14]/($[10]-1),ft=$[14]/($[10]+1),k=($[9]+1)/$[5],Y=($[9]-1)/$[5],K=($[8]-1)/$[0],et=(it[8]+1)/it[0],E=Mt*K,D=Mt*et,ct=nt/(-K+et),yt=ct*-K;if(R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(yt),w.translateZ(ct),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),$[10]===-1)w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const mt=Mt+ct,I=ft+ct,S=E-yt,W=D+(nt-yt),rt=k*ft/I*mt,dt=Y*ft/I*mt;w.projectionMatrix.makePerspective(S,W,rt,dt,mt,I),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function _t(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let R=w.near,O=w.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(O=m.depthFar)),F.near=N.near=b.near=R,F.far=N.far=b.far=O,(V!==F.near||j!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,j=F.far),F.layers.mask=w.layers.mask|6,b.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const nt=w.parent,$=F.cameras;_t(F,nt);for(let it=0;it<$.length;it++)_t($[it],nt);$.length===2?lt(F,b,N):F.projectionMatrix.copy(b.projectionMatrix),pt(w,F,nt)};function pt(w,R,O){O===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(O.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Nr*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(w){l=w,h!==null&&(h.fixedFoveation=w),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=w)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(w){return p[w]};let Ut=null;function J(w,R){if(u=R.getViewerPose(c||o),g=R,u!==null){const O=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let nt=!1;O.length!==F.cameras.length&&(F.cameras.length=0,nt=!0);for(let ft=0;ft<O.length;ft++){const k=O[ft];let Y=null;if(d!==null)Y=d.getViewport(k);else{const et=f.getViewSubImage(h,k);Y=et.viewport,ft===0&&(t.setRenderTargetTextures(x,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(x))}let K=L[ft];K===void 0&&(K=new fn,K.layers.enable(ft),K.viewport=new Me,L[ft]=K),K.matrix.fromArray(k.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(k.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Y.x,Y.y,Y.width,Y.height),ft===0&&(F.matrix.copy(K.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),nt===!0&&F.cameras.push(K)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const ft=f.getDepthInformation(O[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,s.renderState)}if($&&$.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let ft=0;ft<O.length;ft++){const k=O[ft].camera;if(k){let Y=p[k];Y||(Y=new Pf,p[k]=Y);const K=f.getCameraImage(k);Y.sourceTexture=K}}}}for(let O=0;O<A.length;O++){const nt=T[O],$=A[O];nt!==null&&$!==void 0&&$.update(nt,R,c||o)}Ut&&Ut(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const z=new Wf;z.setAnimationLoop(J),this.setAnimationLoop=function(w){Ut=w},this.dispose=function(){}}}const Vi=new gn,fy=new ce;function dy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,x){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(Vi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function py(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(M,A);const T=t.render.frame;r[M.id]!==T&&(h(M),r[M.id]=T)}function u(M){const v=f();M.__bindingPointIndex=v;const x=i.createBuffer(),A=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=s[M.id],x=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,P=x.length;T<P;T++){const _=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,N=_.length;b<N;b++){const L=_[b];if(d(L,T,b,A)===!0){const F=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let G=0;G<V.length;G++){const H=V[G],U=y(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+j,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,x,A){const T=M.value,P=v+"_"+x;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const _=A[P];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return A[P]=T,!0}else if(_.equals(T)===!1)return _.copy(T),!0}return!1}function g(M){const v=M.uniforms;let x=0;const A=16;for(let P=0,_=v.length;P<_;P++){const b=Array.isArray(v[P])?v[P]:[v[P]];for(let N=0,L=b.length;N<L;N++){const F=b[N],V=Array.isArray(F.value)?F.value:[F.value];for(let j=0,G=V.length;j<G;j++){const H=V[j],U=y(H),q=x%A,st=q%U.boundary,lt=q+st;x+=st,lt!==0&&A-lt<U.storage&&(x+=A-lt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=U.storage}}}const T=x%A;return T>0&&(x+=A-T),M.__size=x,M.__cache={},this}function y(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Gt("WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function gy(){return Nn===null&&(Nn=new Rf(my,16,16,qs,ui),Nn.name="DFG_LUT",Nn.minFilter=Ge,Nn.magFilter=Ge,Nn.wrapS=ii,Nn.wrapT=ii,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class _y{constructor(t={}){const{canvas:e=Bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const y=d,m=new Set([Ac,wc,Tc]),p=new Set([an,Wn,Ir,Lr,Sc,Ec]),M=new Uint32Array(4),v=new Int32Array(4);let x=null,A=null;const T=[],P=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=rn;let L=0,F=0,V=null,j=-1,G=null;const H=new Me,U=new Me;let q=null;const st=new Kt(0);let lt=0,_t=e.width,pt=e.height,Ut=1,J=null,z=null;const w=new Me(0,0,_t,pt),R=new Me(0,0,_t,pt);let O=!1;const nt=new Uc;let $=!1,it=!1;const Mt=new ce,ft=new B,k=new Me,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function et(){return V===null?Ut:1}let E=n;function D(C,Z){return e.getContext(C,Z)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",de,!1),E===null){const Z="webgl2";if(E=D(Z,C),E===null)throw D(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw te("WebGLRenderer: "+C.message),C}let ct,yt,mt,I,S,W,rt,dt,at,Pt,xt,Lt,Ot,gt,Et,Ft,It,At,qt,X,bt,St,Tt;function vt(){ct=new _x(E),ct.init(),bt=new ay(E,ct),yt=new cx(E,ct,t,bt),mt=new ry(E,ct),yt.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),I=new yx(E),S=new Xv,W=new oy(E,ct,mt,S,yt,bt,I),rt=new gx(b),dt=new Tg(E),St=new ax(E,dt),at=new xx(E,dt,I,St),Pt=new Sx(E,at,dt,St,I),At=new Mx(E,yt,W),Et=new ux(S),xt=new Wv(b,rt,ct,yt,St,Et),Lt=new dy(b,S),Ot=new Yv,gt=new Qv(ct),It=new ox(b,rt,mt,Pt,g,l),Ft=new sy(b,Pt,yt),Tt=new py(E,I,yt,mt),qt=new lx(E,ct,I),X=new vx(E,ct,I),I.programs=xt.programs,b.capabilities=yt,b.extensions=ct,b.properties=S,b.renderLists=Ot,b.shadowMap=Ft,b.state=mt,b.info=I}vt(),y!==an&&(_=new bx(y,e.width,e.height,s,r));const ut=new hy(b,E);this.xr=ut,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(C){C!==void 0&&(Ut=C,this.setSize(_t,pt,!1))},this.getSize=function(C){return C.set(_t,pt)},this.setSize=function(C,Z,ot=!0){if(ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=C,pt=Z,e.width=Math.floor(C*Ut),e.height=Math.floor(Z*Ut),ot===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(_t*Ut,pt*Ut).floor()},this.setDrawingBufferSize=function(C,Z,ot){_t=C,pt=Z,Ut=ot,e.width=Math.floor(C*ot),e.height=Math.floor(Z*ot),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(y===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,Z,ot,tt){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,Z,ot,tt),mt.viewport(H.copy(w).multiplyScalar(Ut).round())},this.getScissor=function(C){return C.copy(R)},this.setScissor=function(C,Z,ot,tt){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,Z,ot,tt),mt.scissor(U.copy(R).multiplyScalar(Ut).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(C){mt.setScissorTest(O=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ot=!0){let tt=0;if(C){let Q=!1;if(V!==null){const Rt=V.texture.format;Q=m.has(Rt)}if(Q){const Rt=V.texture.type,Nt=p.has(Rt),Ct=It.getClearColor(),Bt=It.getClearAlpha(),kt=Ct.r,Yt=Ct.g,Zt=Ct.b;Nt?(M[0]=kt,M[1]=Yt,M[2]=Zt,M[3]=Bt,E.clearBufferuiv(E.COLOR,0,M)):(v[0]=kt,v[1]=Yt,v[2]=Zt,v[3]=Bt,E.clearBufferiv(E.COLOR,0,v))}else tt|=E.COLOR_BUFFER_BIT}Z&&(tt|=E.DEPTH_BUFFER_BIT),ot&&(tt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&E.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",de,!1),It.dispose(),Ot.dispose(),gt.dispose(),S.dispose(),rt.dispose(),Pt.dispose(),St.dispose(),Tt.dispose(),xt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Wc),ut.removeEventListener("sessionend",Xc),Di.stop()};function Dt(C){C.preventDefault(),xu("WebGLRenderer: Context Lost."),N=!0}function Wt(){xu("WebGLRenderer: Context Restored."),N=!1;const C=I.autoReset,Z=Ft.enabled,ot=Ft.autoUpdate,tt=Ft.needsUpdate,Q=Ft.type;vt(),I.autoReset=C,Ft.enabled=Z,Ft.autoUpdate=ot,Ft.needsUpdate=tt,Ft.type=Q}function de(C){te("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const Z=C.target;Z.removeEventListener("dispose",se),Yn(Z)}function Yn(C){jn(C),S.remove(C)}function jn(C){const Z=S.get(C).programs;Z!==void 0&&(Z.forEach(function(ot){xt.releaseProgram(ot)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ot,tt,Q,Rt){Z===null&&(Z=Y);const Nt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ct=hd(C,Z,ot,tt,Q);mt.setMaterial(tt,Nt);let Bt=ot.index,kt=1;if(tt.wireframe===!0){if(Bt=at.getWireframeAttribute(ot),Bt===void 0)return;kt=2}const Yt=ot.drawRange,Zt=ot.attributes.position;let Vt=Yt.start*kt,oe=(Yt.start+Yt.count)*kt;Rt!==null&&(Vt=Math.max(Vt,Rt.start*kt),oe=Math.min(oe,(Rt.start+Rt.count)*kt)),Bt!==null?(Vt=Math.max(Vt,0),oe=Math.min(oe,Bt.count)):Zt!=null&&(Vt=Math.max(Vt,0),oe=Math.min(oe,Zt.count));const Ee=oe-Vt;if(Ee<0||Ee===1/0)return;St.setup(Q,tt,Ct,ot,Bt);let ve,ae=qt;if(Bt!==null&&(ve=dt.get(Bt),ae=X,ae.setIndex(ve)),Q.isMesh)tt.wireframe===!0?(mt.setLineWidth(tt.wireframeLinewidth*et()),ae.setMode(E.LINES)):ae.setMode(E.TRIANGLES);else if(Q.isLine){let ze=tt.linewidth;ze===void 0&&(ze=1),mt.setLineWidth(ze*et()),Q.isLineSegments?ae.setMode(E.LINES):Q.isLineLoop?ae.setMode(E.LINE_LOOP):ae.setMode(E.LINE_STRIP)}else Q.isPoints?ae.setMode(E.POINTS):Q.isSprite&&ae.setMode(E.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ze=Q._multiDrawStarts,zt=Q._multiDrawCounts,Qe=Q._multiDrawCount,ne=Bt?dt.get(Bt).bytesPerElement:1,_n=S.get(tt).currentProgram.getUniforms();for(let Ln=0;Ln<Qe;Ln++)_n.setValue(E,"_gl_DrawID",Ln),ae.render(ze[Ln]/ne,zt[Ln])}else if(Q.isInstancedMesh)ae.renderInstances(Vt,Ee,Q.count);else if(ot.isInstancedBufferGeometry){const ze=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,zt=Math.min(ot.instanceCount,ze);ae.renderInstances(Vt,Ee,zt)}else ae.render(Vt,Ee)};function Hc(C,Z,ot){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Ke,C.needsUpdate=!0,Yr(C,Z,ot),C.side=Ci,C.needsUpdate=!0,Yr(C,Z,ot),C.side=dn):Yr(C,Z,ot)}this.compile=function(C,Z,ot=null){ot===null&&(ot=C),A=gt.get(ot),A.init(Z),P.push(A),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),C!==ot&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights();const tt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Ct=Rt[Nt];Hc(Ct,ot,Q),tt.add(Ct)}else Hc(Rt,ot,Q),tt.add(Rt)}),A=P.pop(),tt},this.compileAsync=function(C,Z,ot=null){const tt=this.compile(C,Z,ot);return new Promise(Q=>{function Rt(){if(tt.forEach(function(Nt){S.get(Nt).currentProgram.isReady()&&tt.delete(Nt)}),tt.size===0){Q(C);return}setTimeout(Rt,10)}ct.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let fa=null;function ud(C){fa&&fa(C)}function Wc(){Di.stop()}function Xc(){Di.start()}const Di=new Wf;Di.setAnimationLoop(ud),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){fa=C,ut.setAnimationLoop(C),C===null?Di.stop():Di.start()},ut.addEventListener("sessionstart",Wc),ut.addEventListener("sessionend",Xc),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ot=ut.enabled===!0&&ut.isPresenting===!0,tt=_!==null&&(V===null||ot)&&_.begin(b,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,Z,V),A=gt.get(C,P.length),A.init(Z),P.push(A),Mt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),nt.setFromProjectionMatrix(Mt,zn,Z.reversedDepth),it=this.localClippingEnabled,$=Et.init(this.clippingPlanes,it),x=Ot.get(C,T.length),x.init(),T.push(x),ut.enabled===!0&&ut.isPresenting===!0){const Nt=b.xr.getDepthSensingMesh();Nt!==null&&da(Nt,Z,-1/0,b.sortObjects)}da(C,Z,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(J,z),K=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,K&&It.addToRenderList(x,C),this.info.render.frame++,$===!0&&Et.beginShadows();const Q=A.state.shadowsArray;if(Ft.render(Q,C,Z),$===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&_.hasRenderPass())===!1){const Nt=x.opaque,Ct=x.transmissive;if(A.setupLights(),Z.isArrayCamera){const Bt=Z.cameras;if(Ct.length>0)for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const Zt=Bt[kt];Yc(Nt,Ct,C,Zt)}K&&It.render(C);for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const Zt=Bt[kt];qc(x,C,Zt,Zt.viewport)}}else Ct.length>0&&Yc(Nt,Ct,C,Z),K&&It.render(C),qc(x,C,Z)}V!==null&&F===0&&(W.updateMultisampleRenderTarget(V),W.updateRenderTargetMipmap(V)),tt&&_.end(b),C.isScene===!0&&C.onAfterRender(b,C,Z),St.resetDefaultState(),j=-1,G=null,P.pop(),P.length>0?(A=P[P.length-1],$===!0&&Et.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function da(C,Z,ot,tt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||nt.intersectsSprite(C)){tt&&k.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const Nt=Pt.update(C),Ct=C.material;Ct.visible&&x.push(C,Nt,Ct,ot,k.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||nt.intersectsObject(C))){const Nt=Pt.update(C),Ct=C.material;if(tt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),k.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),k.copy(Nt.boundingSphere.center)),k.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ct)){const Bt=Nt.groups;for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const Zt=Bt[kt],Vt=Ct[Zt.materialIndex];Vt&&Vt.visible&&x.push(C,Nt,Vt,ot,k.z,Zt)}}else Ct.visible&&x.push(C,Nt,Ct,ot,k.z,null)}}const Rt=C.children;for(let Nt=0,Ct=Rt.length;Nt<Ct;Nt++)da(Rt[Nt],Z,ot,tt)}function qc(C,Z,ot,tt){const{opaque:Q,transmissive:Rt,transparent:Nt}=C;A.setupLightsView(ot),$===!0&&Et.setGlobalState(b.clippingPlanes,ot),tt&&mt.viewport(H.copy(tt)),Q.length>0&&qr(Q,Z,ot),Rt.length>0&&qr(Rt,Z,ot),Nt.length>0&&qr(Nt,Z,ot),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Yc(C,Z,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[tt.id]===void 0){const Vt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[tt.id]=new Hn(1,1,{generateMipmaps:!0,type:Vt?ui:an,minFilter:Qi,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[tt.id],Nt=tt.viewport||H;Rt.setSize(Nt.z*b.transmissionResolutionScale,Nt.w*b.transmissionResolutionScale);const Ct=b.getRenderTarget(),Bt=b.getActiveCubeFace(),kt=b.getActiveMipmapLevel();b.setRenderTarget(Rt),b.getClearColor(st),lt=b.getClearAlpha(),lt<1&&b.setClearColor(16777215,.5),b.clear(),K&&It.render(ot);const Yt=b.toneMapping;b.toneMapping=Vn;const Zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),A.setupLightsView(tt),$===!0&&Et.setGlobalState(b.clippingPlanes,tt),qr(C,ot,tt),W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let oe=0,Ee=Z.length;oe<Ee;oe++){const ve=Z[oe],{object:ae,geometry:ze,material:zt,group:Qe}=ve;if(zt.side===dn&&ae.layers.test(tt.layers)){const ne=zt.side;zt.side=Ke,zt.needsUpdate=!0,jc(ae,ot,tt,ze,zt,Qe),zt.side=ne,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt))}b.setRenderTarget(Ct,Bt,kt),b.setClearColor(st,lt),Zt!==void 0&&(tt.viewport=Zt),b.toneMapping=Yt}function qr(C,Z,ot){const tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Rt=C.length;Q<Rt;Q++){const Nt=C[Q],{object:Ct,geometry:Bt,group:kt}=Nt;let Yt=Nt.material;Yt.allowOverride===!0&&tt!==null&&(Yt=tt),Ct.layers.test(ot.layers)&&jc(Ct,Z,ot,Bt,Yt,kt)}}function jc(C,Z,ot,tt,Q,Rt){C.onBeforeRender(b,Z,ot,tt,Q,Rt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(b,Z,ot,tt,C,Rt),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=Ke,Q.needsUpdate=!0,b.renderBufferDirect(ot,Z,tt,Q,C,Rt),Q.side=Ci,Q.needsUpdate=!0,b.renderBufferDirect(ot,Z,tt,Q,C,Rt),Q.side=dn):b.renderBufferDirect(ot,Z,tt,Q,C,Rt),C.onAfterRender(b,Z,ot,tt,Q,Rt)}function Yr(C,Z,ot){Z.isScene!==!0&&(Z=Y);const tt=S.get(C),Q=A.state.lights,Rt=A.state.shadowsArray,Nt=Q.state.version,Ct=xt.getParameters(C,Q.state,Rt,Z,ot),Bt=xt.getProgramCacheKey(Ct);let kt=tt.programs;tt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,tt.fog=Z.fog;const Yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;tt.envMap=rt.get(C.envMap||tt.environment,Yt),tt.envMapRotation=tt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,kt===void 0&&(C.addEventListener("dispose",se),kt=new Map,tt.programs=kt);let Zt=kt.get(Bt);if(Zt!==void 0){if(tt.currentProgram===Zt&&tt.lightsStateVersion===Nt)return Zc(C,Ct),Zt}else Ct.uniforms=xt.getUniforms(C),C.onBeforeCompile(Ct,b),Zt=xt.acquireProgram(Ct,Bt),kt.set(Bt,Zt),tt.uniforms=Ct.uniforms;const Vt=tt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=Et.uniform),Zc(C,Ct),tt.needsLights=dd(C),tt.lightsStateVersion=Nt,tt.needsLights&&(Vt.ambientLightColor.value=Q.state.ambient,Vt.lightProbe.value=Q.state.probe,Vt.directionalLights.value=Q.state.directional,Vt.directionalLightShadows.value=Q.state.directionalShadow,Vt.spotLights.value=Q.state.spot,Vt.spotLightShadows.value=Q.state.spotShadow,Vt.rectAreaLights.value=Q.state.rectArea,Vt.ltc_1.value=Q.state.rectAreaLTC1,Vt.ltc_2.value=Q.state.rectAreaLTC2,Vt.pointLights.value=Q.state.point,Vt.pointLightShadows.value=Q.state.pointShadow,Vt.hemisphereLights.value=Q.state.hemi,Vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Vt.spotLightMatrix.value=Q.state.spotLightMatrix,Vt.spotLightMap.value=Q.state.spotLightMap,Vt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=Zt,tt.uniformsList=null,Zt}function $c(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=zo.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Zc(C,Z){const ot=S.get(C);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function hd(C,Z,ot,tt,Q){Z.isScene!==!0&&(Z=Y),W.resetTextureUnits();const Rt=Z.fog,Nt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Z.environment:null,Ct=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ys,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,kt=rt.get(tt.envMap||Nt,Bt),Yt=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Zt=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Vt=!!ot.morphAttributes.position,oe=!!ot.morphAttributes.normal,Ee=!!ot.morphAttributes.color;let ve=Vn;tt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ve=b.toneMapping);const ae=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=ae!==void 0?ae.length:0,zt=S.get(tt),Qe=A.state.lights;if($===!0&&(it===!0||C!==G)){const Pe=C===G&&tt.id===j;Et.setState(tt,C,Pe)}let ne=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Qe.state.version||zt.outputColorSpace!==Ct||Q.isBatchedMesh&&zt.batching===!1||!Q.isBatchedMesh&&zt.batching===!0||Q.isBatchedMesh&&zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&zt.instancing===!1||!Q.isInstancedMesh&&zt.instancing===!0||Q.isSkinnedMesh&&zt.skinning===!1||!Q.isSkinnedMesh&&zt.skinning===!0||Q.isInstancedMesh&&zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&zt.instancingMorph===!1&&Q.morphTexture!==null||zt.envMap!==kt||tt.fog===!0&&zt.fog!==Rt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Et.numPlanes||zt.numIntersection!==Et.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==Zt||zt.morphTargets!==Vt||zt.morphNormals!==oe||zt.morphColors!==Ee||zt.toneMapping!==ve||zt.morphTargetsCount!==ze)&&(ne=!0):(ne=!0,zt.__version=tt.version);let _n=zt.currentProgram;ne===!0&&(_n=Yr(tt,Z,Q));let Ln=!1,Ni=!1,us=!1;const ue=_n.getUniforms(),Ue=zt.uniforms;if(mt.useProgram(_n.program)&&(Ln=!0,Ni=!0,us=!0),tt.id!==j&&(j=tt.id,Ni=!0),Ln||G!==C){mt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ue.setValue(E,"projectionMatrix",C.projectionMatrix),ue.setValue(E,"viewMatrix",C.matrixWorldInverse);const pi=ue.map.cameraPosition;pi!==void 0&&pi.setValue(E,ft.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&ue.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ue.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Ni=!0,us=!0)}if(zt.needsLights&&(Qe.state.directionalShadowMap.length>0&&ue.setValue(E,"directionalShadowMap",Qe.state.directionalShadowMap,W),Qe.state.spotShadowMap.length>0&&ue.setValue(E,"spotShadowMap",Qe.state.spotShadowMap,W),Qe.state.pointShadowMap.length>0&&ue.setValue(E,"pointShadowMap",Qe.state.pointShadowMap,W)),Q.isSkinnedMesh){ue.setOptional(E,Q,"bindMatrix"),ue.setOptional(E,Q,"bindMatrixInverse");const Pe=Q.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ue.setValue(E,"boneTexture",Pe.boneTexture,W))}Q.isBatchedMesh&&(ue.setOptional(E,Q,"batchingTexture"),ue.setValue(E,"batchingTexture",Q._matricesTexture,W),ue.setOptional(E,Q,"batchingIdTexture"),ue.setValue(E,"batchingIdTexture",Q._indirectTexture,W),ue.setOptional(E,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ue.setValue(E,"batchingColorTexture",Q._colorsTexture,W));const di=ot.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&At.update(Q,ot,_n),(Ni||zt.receiveShadow!==Q.receiveShadow)&&(zt.receiveShadow=Q.receiveShadow,ue.setValue(E,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Z.environment!==null&&(Ue.envMapIntensity.value=Z.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=gy()),Ni&&(ue.setValue(E,"toneMappingExposure",b.toneMappingExposure),zt.needsLights&&fd(Ue,us),Rt&&tt.fog===!0&&Lt.refreshFogUniforms(Ue,Rt),Lt.refreshMaterialUniforms(Ue,tt,Ut,pt,A.state.transmissionRenderTarget[C.id]),zo.upload(E,$c(zt),Ue,W)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(zo.upload(E,$c(zt),Ue,W),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ue.setValue(E,"center",Q.center),ue.setValue(E,"modelViewMatrix",Q.modelViewMatrix),ue.setValue(E,"normalMatrix",Q.normalMatrix),ue.setValue(E,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Pe=tt.uniformsGroups;for(let pi=0,hs=Pe.length;pi<hs;pi++){const Jc=Pe[pi];Tt.update(Jc,_n),Tt.bind(Jc,_n)}}return _n}function fd(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function dd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,Z,ot){const tt=S.get(C);tt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),S.get(C.texture).__webglTexture=Z,S.get(C.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ot=S.get(C);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const pd=E.createFramebuffer();this.setRenderTarget=function(C,Z=0,ot=0){V=C,L=Z,F=ot;let tt=null,Q=!1,Rt=!1;if(C){const Ct=S.get(C);if(Ct.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(E.FRAMEBUFFER,Ct.__webglFramebuffer),H.copy(C.viewport),U.copy(C.scissor),q=C.scissorTest,mt.viewport(H),mt.scissor(U),mt.setScissorTest(q),j=-1;return}else if(Ct.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Ct.__hasExternalTextures)W.rebindTextures(C,S.get(C.texture).__webglTexture,S.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Ct.__boundDepthTexture!==Yt){if(Yt!==null&&S.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);const kt=S.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?tt=kt[Z][ot]:tt=kt[Z],Q=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?tt=S.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?tt=kt[ot]:tt=kt,H.copy(C.viewport),U.copy(C.scissor),q=C.scissorTest}else H.copy(w).multiplyScalar(Ut).floor(),U.copy(R).multiplyScalar(Ut).floor(),q=O;if(ot!==0&&(tt=pd),mt.bindFramebuffer(E.FRAMEBUFFER,tt)&&mt.drawBuffers(C,tt),mt.viewport(H),mt.scissor(U),mt.setScissorTest(q),Q){const Ct=S.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,ot)}else if(Rt){const Ct=Z;for(let Bt=0;Bt<C.textures.length;Bt++){const kt=S.get(C.textures[Bt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Bt,kt.__webglTexture,ot,Ct)}}else if(C!==null&&ot!==0){const Ct=S.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ct.__webglTexture,ot)}j=-1},this.readRenderTargetPixels=function(C,Z,ot,tt,Q,Rt,Nt,Ct=0){if(!(C&&C.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){mt.bindFramebuffer(E.FRAMEBUFFER,Bt);try{const kt=C.textures[Ct],Yt=kt.format,Zt=kt.type;if(C.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!yt.textureFormatReadable(Yt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Zt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-tt&&ot>=0&&ot<=C.height-Q&&E.readPixels(Z,ot,tt,Q,bt.convert(Yt),bt.convert(Zt),Rt)}finally{const kt=V!==null?S.get(V).__webglFramebuffer:null;mt.bindFramebuffer(E.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ot,tt,Q,Rt,Nt,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt)if(Z>=0&&Z<=C.width-tt&&ot>=0&&ot<=C.height-Q){mt.bindFramebuffer(E.FRAMEBUFFER,Bt);const kt=C.textures[Ct],Yt=kt.format,Zt=kt.type;if(C.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!yt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.bufferData(E.PIXEL_PACK_BUFFER,Rt.byteLength,E.STREAM_READ),E.readPixels(Z,ot,tt,Q,bt.convert(Yt),bt.convert(Zt),0);const oe=V!==null?S.get(V).__webglFramebuffer:null;mt.bindFramebuffer(E.FRAMEBUFFER,oe);const Ee=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await zp(E,Ee,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Rt),E.deleteBuffer(Vt),E.deleteSync(Ee),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ot=0){const tt=Math.pow(2,-ot),Q=Math.floor(C.image.width*tt),Rt=Math.floor(C.image.height*tt),Nt=Z!==null?Z.x:0,Ct=Z!==null?Z.y:0;W.setTexture2D(C,0),E.copyTexSubImage2D(E.TEXTURE_2D,ot,0,0,Nt,Ct,Q,Rt),mt.unbindTexture()};const md=E.createFramebuffer(),gd=E.createFramebuffer();this.copyTextureToTexture=function(C,Z,ot=null,tt=null,Q=0,Rt=0){let Nt,Ct,Bt,kt,Yt,Zt,Vt,oe,Ee;const ve=C.isCompressedTexture?C.mipmaps[Rt]:C.image;if(ot!==null)Nt=ot.max.x-ot.min.x,Ct=ot.max.y-ot.min.y,Bt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,Yt=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const Ue=Math.pow(2,-Q);Nt=Math.floor(ve.width*Ue),Ct=Math.floor(ve.height*Ue),C.isDataArrayTexture?Bt=ve.depth:C.isData3DTexture?Bt=Math.floor(ve.depth*Ue):Bt=1,kt=0,Yt=0,Zt=0}tt!==null?(Vt=tt.x,oe=tt.y,Ee=tt.z):(Vt=0,oe=0,Ee=0);const ae=bt.convert(Z.format),ze=bt.convert(Z.type);let zt;Z.isData3DTexture?(W.setTexture3D(Z,0),zt=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),zt=E.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),zt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Qe=E.getParameter(E.UNPACK_ROW_LENGTH),ne=E.getParameter(E.UNPACK_IMAGE_HEIGHT),_n=E.getParameter(E.UNPACK_SKIP_PIXELS),Ln=E.getParameter(E.UNPACK_SKIP_ROWS),Ni=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Zt);const us=C.isDataArrayTexture||C.isData3DTexture,ue=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Ue=S.get(C),di=S.get(Z),Pe=S.get(Ue.__renderTarget),pi=S.get(di.__renderTarget);mt.bindFramebuffer(E.READ_FRAMEBUFFER,Pe.__webglFramebuffer),mt.bindFramebuffer(E.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let hs=0;hs<Bt;hs++)us&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(C).__webglTexture,Q,Zt+hs),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(Z).__webglTexture,Rt,Ee+hs)),E.blitFramebuffer(kt,Yt,Nt,Ct,Vt,oe,Nt,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST);mt.bindFramebuffer(E.READ_FRAMEBUFFER,null),mt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||S.has(C)){const Ue=S.get(C),di=S.get(Z);mt.bindFramebuffer(E.READ_FRAMEBUFFER,md),mt.bindFramebuffer(E.DRAW_FRAMEBUFFER,gd);for(let Pe=0;Pe<Bt;Pe++)us?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,Zt+Pe):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue.__webglTexture,Q),ue?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,di.__webglTexture,Rt,Ee+Pe):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,di.__webglTexture,Rt),Q!==0?E.blitFramebuffer(kt,Yt,Nt,Ct,Vt,oe,Nt,Ct,E.COLOR_BUFFER_BIT,E.NEAREST):ue?E.copyTexSubImage3D(zt,Rt,Vt,oe,Ee+Pe,kt,Yt,Nt,Ct):E.copyTexSubImage2D(zt,Rt,Vt,oe,kt,Yt,Nt,Ct);mt.bindFramebuffer(E.READ_FRAMEBUFFER,null),mt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ue?C.isDataTexture||C.isData3DTexture?E.texSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Bt,ae,ze,ve.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Bt,ae,ve.data):E.texSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Bt,ae,ze,ve):C.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,Nt,Ct,ae,ze,ve.data):C.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,ve.width,ve.height,ae,ve.data):E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,Nt,Ct,ae,ze,ve);E.pixelStorei(E.UNPACK_ROW_LENGTH,Qe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ne),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_n),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ln),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ni),Rt===0&&Z.generateMipmaps&&E.generateMipmap(zt),mt.unbindTexture()},this.initRenderTarget=function(C){S.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),mt.unbindTexture()},this.resetState=function(){L=0,F=0,V=null,mt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Pi=12;class Zf{perm=[];constructor(t=0){const e=[];for(let s=0;s<256;s++)e[s]=s;let n=t;for(let s=255;s>0;s--){n=n*1103515245+12345&2147483647;const r=n%(s+1);[e[s],e[r]]=[e[r],e[s]]}for(let s=0;s<512;s++)this.perm[s]=e[s&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return t+n*(e-t)}grad(t,e,n){const s=t&3,r=s<2?e:n,o=s<2?n:e;return((s&1)===0?r:-r)+((s&2)===0?o:-o)}noise(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const r=this.fade(t),o=this.fade(e),a=this.perm[n]+s,l=this.perm[n+1]+s;return this.lerp(this.lerp(this.grad(this.perm[a],t,e),this.grad(this.perm[l],t-1,e),r),this.lerp(this.grad(this.perm[a+1],t,e-1),this.grad(this.perm[l+1],t-1,e-1),r),o)}fbm(t,e,n=4){let s=0,r=1,o=1,a=0;for(let l=0;l<n;l++)s+=r*this.noise(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}}const xy=new Zf(54321);new Zf(12345);let Vs=null;function vy(i=12345){if(Vs)return Vs;const t=l=>{const c=Math.sin(i*9999+l*7919)*1e4;return c-Math.floor(c)},e=12+Math.floor(t(0)*6),n=15,s=15,r=160,o=[];for(let l=0;l<e;l++){const c=l/e*Math.PI*2,u=.7+t(l+1)*.6,f=n+Math.cos(c)*r*u,h=s+Math.sin(c)*r*u,d=l/e,g=.5,y=.08,m=6,p=Math.exp(-Math.pow(d-g,2)/(2*Math.pow(y,2))),M=On(f,h)+.1-p*m;o.push(new B(f,M,h))}const a=new zc(o);return a.closed=!0,a.curveType="centripetal",a.tension=.5,Vs=a,a}function On(i,t){return xy.fbm(i*.12,t*.12,4)*10}function yy(i=12345){const t=new $e,e=vy(i),n=800,s=e.getSpacedPoints(n),r=[],o=[],a=[],l=Pi/2,c=e.getLength(),u=10;for(let _=0;_<=n;_++){const b=_/n,N=s[_],L=e.getTangentAt(b),F=new ht(L.x,L.z).normalize(),V=new ht(-F.y,F.x),j=b*c/u;if(r.push(N.x+V.x*l,N.y+.05,N.z+V.y*l,N.x-V.x*l,N.y+.05,N.z-V.y*l),a.push(0,j,1,j),_<n){const G=_*2,H=_*2+1,U=(_+1)*2,q=(_+1)*2+1;o.push(G,U,H,H,U,q)}}const f=new be;f.setAttribute("position",new Qt(r,3)),f.setAttribute("uv",new Qt(a,2)),f.setIndex(o),f.computeVertexNormals();const h=new we({color:3355443,roughness:.8,side:dn}),d=new $t(f,h);d.receiveShadow=!0,t.add(d);for(let _=0;_<2;_++){const b=[];for(let G=0;G<=n;G++){const H=G/n,U=s[G],q=e.getTangentAt(H),st=new ht(q.x,q.z).normalize(),lt=new ht(-st.y,st.x),_t=_===0?-l-.2:l+.2,pt=U.x+lt.x*_t,Ut=U.z+lt.y*_t;b.push(new B(pt,U.y+.15,Ut))}const N=new zc(b);N.closed=!0;const L=new kc(N,n,.06,6,!0),F=new we({color:_===0?13369344:14540253,roughness:.3,metalness:.5}),V=new $t(L,F);V.castShadow=!0,t.add(V);const j=24;for(let G=0;G<j;G++){const H=G/j,U=Math.floor(H*n),q=b[U],st=e.getTangentAt(U/n),lt=new ht(st.x,st.z).normalize();new ht(-lt.y,lt.x);const _t=new ls(.12,.35,.12),pt=new $t(_t,F);pt.position.set(q.x,q.y+.175,q.z),pt.castShadow=!0,t.add(pt)}}for(let _=0;_<2;_++)for(let N=0;N<40;N++){const L=N/40,F=Math.floor(L*n),V=s[F],j=e.getTangentAt(F/n),G=new ht(j.x,j.z).normalize(),H=new ht(-G.y,G.x),U=_===0?-l-36-Math.random()*48:l+36+Math.random()*48,q=V.x+H.x*U,st=V.z+H.y*U,lt=On(q,st)+.1;if(Math.random()>.5){const Ut=new $t(new cs(.06999999999999999,.1,.6,8),new we({color:9127187}));Ut.position.set(q,lt+.6/2,st),Ut.castShadow=!0,t.add(Ut);const J=.35,z=.5,w=new $t(new Wr(J,z,8),new we({color:2263842}));w.position.set(q,lt+.6+z/2-.05,st),w.castShadow=!0,t.add(w)}else{const _t=.2+Math.random()*.3,pt=new $t(new Qo(_t,0),new we({color:8947848,roughness:.9}));pt.position.set(q,lt+_t*.5,st),pt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),pt.castShadow=!0,t.add(pt)}}const g=.5,y=.2,m=180,p=16,M=new we({color:1118481,roughness:1,flatShading:!0}),v=new Qo(1,0),x=(m+1)*p,A=new Em(v,M,x);A.castShadow=!0,A.receiveShadow=!0,t.add(A);const T=new Ae;let P=0;for(let _=0;_<=m;_++){const b=g-y+_/m*(y*2),N=e.getPointAt((b+1)%1),L=e.getTangentAt((b+1)%1),F=new ht(L.x,L.z).normalize(),V=new ht(-F.y,F.x),j=new B(V.x,0,V.y),G=new B(0,1,0);for(let H=0;H<p;H++){const U=-.2+H/(p-1)*(Math.PI+.4),q=3.5+Math.random()*2.5,lt=Pi/2+q*.9+.5+Math.random()*5,_t=N.clone().add(j.clone().multiplyScalar(Math.cos(U)*lt)).add(G.clone().multiplyScalar(Math.max(-.2,Math.sin(U))*lt*.8));T.position.copy(_t),T.scale.setScalar(q),T.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),T.updateMatrix(),A.setMatrixAt(P++,T.matrix)}}return{group:t,curve:e}}function My(i=12345){let t=yy(i);return Vs=t.curve,t}function Sy(){return Vs}function Ey(i,t){const e=Vs;if(!e)return 1/0;const n=800;let s=1/0;for(let r=0;r<=n;r++){const o=r/n,a=e.getPointAt(o),l=a.x-i,c=a.z-t,u=Math.sqrt(l*l+c*c);u<s&&(s=u)}return s}function by(i,t=0){const e=new $e,n=i.getPointAt(t),s=i.getTangentAt(t),r=new ht(s.x,s.z).normalize(),o=new ht(-r.y,r.x),a=Pi+.4,l=.6,c=.15,u=Math.ceil(a/c),f=Math.ceil(l/c);for(let A=0;A<u;A++)for(let T=0;T<f;T++){const P=(A+T)%2===0,_=new $s(c,c),b=new we({color:P?16777215:2236962,side:dn}),N=new $t(_,b),L=(A-u/2+.5)*c,F=(T-f/2+.5)*c;N.position.set(n.x+o.x*L-r.x*F,n.y+.06,n.z+o.y*L-r.y*F),N.rotation.x=-Math.PI/2,N.rotation.z=Math.atan2(s.x,s.z),e.add(N)}const h=2.5,d=new cs(.05,.05,h,8),g=new we({color:8947848,metalness:.5}),y=new $t(d,g);y.position.set(n.x-o.x*(a/2+.3),n.y+h/2,n.z-o.y*(a/2+.3)),y.castShadow=!0,e.add(y);const m=new $t(d,g);m.position.set(n.x+o.x*(a/2+.3),n.y+h/2,n.z+o.y*(a/2+.3)),m.castShadow=!0,e.add(m);const p=a+1,M=new $s(p,.4),v=new we({color:16711680,side:dn,metalness:.3}),x=new $t(M,v);return x.position.set(n.x,n.y+h,n.z),x.rotation.y=Math.atan2(s.x,s.z),e.add(x),e}class Ty extends Error{constructor(t,e,n){super(t),this.is_operational=e,this.context=n,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Jf=(i=>(i.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",i.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",i.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",i.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",i.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",i.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",i.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",i.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",i))(Jf||{});class wy extends Ty{constructor(t,e,n){super(e??t,!0,n),this.category=t}}function Xr(i,t,e){return i}const Un=-1,Sn=-1,Er=Object.freeze(Object.create(null)),Hi=5,Wi=31,Ay=2166136261,Ry=16777619,Cy=2654435769,Py=1367130551,fi=16,wh=2,Kf=1024,Co=0,Ah=0,Iy=31,Ly=1/60,Dy=4,Ny=0,Uy=4;class ci{_words;constructor(t){this._words=t??new Array(Uy).fill(0)}has(t){const e=t>>>Hi;return e>=this._words.length?!1:(this._words[e]&1<<(t&Wi))!==0}set(t){const e=t>>>Hi;e>=this._words.length&&this.grow(e+1),this._words[e]|=1<<(t&Wi)}clear(t){const e=t>>>Hi;e>=this._words.length||(this._words[e]&=~(1<<(t&Wi)))}overlaps(t){const e=this._words,n=t._words,s=e.length<n.length?e.length:n.length;for(let r=0;r<s;r++)if((e[r]&n[r])!==0)return!0;return!1}contains(t){const e=t._words,n=this._words,s=n.length;for(let r=0;r<e.length;r++){const o=e[r];if(o!==0&&(r>=s||(n[r]&o)!==o))return!1}return!0}equals(t){const e=this._words,n=t._words,s=e.length>n.length?e.length:n.length;for(let r=0;r<s;r++){const o=r<e.length?e[r]:0,a=r<n.length?n[r]:0;if(o!==a)return!1}return!0}copy(){return new ci(this._words.slice())}copy_with_set(t){const e=t>>>Hi,n=e+1,s=this._words.length>n?this._words.length:n,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[e]|=1<<(t&Wi),new ci(r)}copy_with_clear(t){const e=this._words.slice(),n=t>>>Hi;return n<e.length&&(e[n]&=~(1<<(t&Wi))),new ci(e)}hash(){let t=Ay;const e=this._words;let n=e.length-1;for(;n>=0&&e[n]===0;)n--;for(let s=0;s<=n;s++)t^=e[s],t=Math.imul(t,Ry);return t}for_each(t){const e=this._words;for(let n=0;n<e.length;n++){let s=e[n];if(s===0)continue;const r=n<<Hi;for(;s!==0;){const o=s&-s>>>0,a=Wi-Math.clz32(o);t(r+a),s^=o}}}grow(t){let e=this._words.length;for(;e<t;)e*=2;const n=new Array(e).fill(0);for(let s=0;s<this._words.length;s++)n[s]=this._words[s];this._words=n}}class Li{constructor(t,e=fi){this._ctor=t,this._buf=new t(e)}_buf;_len=0;get length(){return this._len}push(t){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=t}pop(){return this._buf[--this._len]}get(t){return this._buf[t]}set_at(t,e){this._buf[t]=e}swap_remove(t){const e=this._buf[t];return this._buf[t]=this._buf[--this._len],e}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let t=0;const e=this._buf,n=this._len;return{next(){return t<n?{value:e[t++],done:!1}:{value:0,done:!0}}}}ensure_capacity(t){if(t<=this._buf.length)return;let e=this._buf.length||1;for(;e<t;)e*=wh;const n=new this._ctor(e);n.set(this._buf.subarray(0,this._len)),this._buf=n}bulk_append(t,e,n){this.ensure_capacity(this._len+n),this._buf.set(t.subarray(e,e+n),this._len),this._len+=n}bulk_append_zeroes(t){this.ensure_capacity(this._len+t),this._buf.fill(0,this._len,this._len+t),this._len+=t}_grow(){const t=new this._ctor(this._buf.length*wh);t.set(this._buf),this._buf=t}}class Fy extends Li{constructor(t=fi){super(Float32Array,t)}}class Oy extends Li{constructor(t=fi){super(Float64Array,t)}}class By extends Li{constructor(t=fi){super(Int8Array,t)}}class zy extends Li{constructor(t=fi){super(Int16Array,t)}}class ky extends Li{constructor(t=fi){super(Int32Array,t)}}class Vy extends Li{constructor(t=fi){super(Uint8Array,t)}}class Gy extends Li{constructor(t=fi){super(Uint16Array,t)}}class Qf extends Li{constructor(t=fi){super(Uint32Array,t)}}const Hy={f32:Fy,f64:Oy,i8:By,i16:zy,i32:ky,u8:Vy,u16:Gy,u32:Qf},ns=20,ko=(1<<ns)-1,Wy=Iy-ns,Rh=(1<<Wy)-1,Xy=(i,t)=>t<<ns|i,nn=i=>i&ko,Ch=i=>i>>ns,qy=i=>Xr(i),Yy=i=>Xr(i);class jy{field_names;columns;reader;constructor(t){this.field_names=t,this.columns=[];for(let n=0;n<t.length;n++)this.columns.push([]);const e={length:0};for(let n=0;n<t.length;n++)e[t[n]]=this.columns[n];this.reader=e}emit(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)n[s].push(t[e[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const t=this.columns;for(let e=0;e<t.length;e++)t[e].length=0}}const $y=i=>Xr(i);class Zy{field_names;field_index;columns;reader;constructor(t,e){this.field_names=t,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<t.length;r++)this.field_index[t[r]]=r,this.columns.push([e[t[r]]??0]);const n=Object.create(null),s=this.columns;for(let r=0;r<t.length;r++){const o=s[r];Object.defineProperty(n,t[r],{get(){return o[Co]},enumerable:!0})}this.reader=n}write(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)e[s]in t&&(n[s][Co]=t[e[s]])}read_field(t){return this.columns[t][Co]}write_field(t,e){this.columns[t][Co]=e}}const Jy=i=>Xr(i);class Ky{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(t,e,n,s=Kf){if(this.id=t,this.mask=e,this._entity_ids=new Qf(s),n){let r=0;for(let o=0;o<n.length;o++){const a=n[o],l=a.component_id,c=new Array(a.field_names.length);this._col_offset[l]=r,this._field_count[l]=a.field_names.length,this._field_index[l]=a.field_index,this._field_names[l]=a.field_names;for(let u=0;u<a.field_names.length;u++){const f=new Hy[a.field_types[u]](s);c[u]=f,this._flat_columns[r++]=f}this.column_groups[l]={layout:a,columns:c},this._column_ids.push(l)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(t){return this.mask.has(t)}matches(t){return this.mask.contains(t)}get_column(t,e){const n=t,s=this._field_index[n][e];return this._flat_columns[this._col_offset[n]+s].buf}write_fields(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let l=0;l<o.length;l++)a[r+l].buf[t]=n[o[l]]}write_fields_positional(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<n.length;a++)o[r+a].buf[t]=n[a]}read_field(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][n];return o===void 0?NaN:this._flat_columns[r+o].buf[t]}copy_shared_from(t,e,n){const s=t._col_offset,r=t._field_count,o=t._flat_columns,a=this._flat_columns,l=this._column_ids;for(let c=0;c<l.length;c++){const u=l[c],f=s[u];if(f===void 0)continue;const h=this._col_offset[u],d=r[u];for(let g=0;g<d;g++)a[h+g].buf[n]=o[f+g].buf[e]}}add_entity(t){const e=this.length;this._entity_ids.push(t);const n=this._flat_columns;for(let s=0;s<n.length;s++)n[s].push(0);return this.length++,e}remove_entity(t){const e=this.length-1;let n=Sn;const s=this._flat_columns,r=this._entity_ids.buf;if(t!==e){r[t]=r[e],n=nn(r[t]);for(let o=0;o<s.length;o++)s[o].swap_remove(t)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,n}add_entity_tag(t){const e=this.length;return this._entity_ids.push(t),this.length++,e}remove_entity_tag(t){const e=this.length-1;let n=Sn;const s=this._entity_ids.buf;return t!==e&&(s[t]=s[e],n=nn(s[t])),this._entity_ids.pop(),this.length--,n}move_entity_from(t,e,n,s){const r=this.length;this._entity_ids.push(n);const o=this._flat_columns,a=t._flat_columns;for(let c=0;c<o.length;c++){const u=s[c];o[c].push(u>=0?a[u].buf[e]:0)}this.length++;const l=t.has_columns?t.remove_entity(e):t.remove_entity_tag(e);ye[0]=r,ye[1]=l}move_entity_from_tag(t,e,n){const s=this.length;this._entity_ids.push(n),this.length++;const r=t.remove_entity_tag(e);ye[0]=s,ye[1]=r}bulk_move_all_from(t,e){const n=t.length;if(n===0)return this.length;const s=this.length,r=this._flat_columns,o=t._flat_columns;this._entity_ids.bulk_append(t._entity_ids.buf,0,n);for(let a=0;a<r.length;a++){const l=e[a];l>=0?r[a].bulk_append(o[l].buf,0,n):r[a].bulk_append_zeroes(n)}this.length+=n,t.length=0,t._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(t){return this.edges[t]}set_edge(t,e){this.edges[t]=e}}const ye=[0,Sn];function Po(i,t){const e=t._flat_columns,n=new Int16Array(e.length),s=t._column_ids,r=i._col_offset,o=t._col_offset,a=t._field_count;for(let l=0;l<s.length;l++){const c=s[l],u=o[c],f=a[c],h=r[c];if(h!==void 0)for(let d=0;d<f;d++)n[u+d]=h+d;else for(let d=0;d<f;d++)n[u+d]=-1}return n}function td(i,t,e){const n=i.get(t);n!==void 0?n.push(e):i.set(t,[e])}class Qy{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(t){this.initial_capacity=t??Kf,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ci)}arch_get(t){return this.archetypes[t]}arch_get_or_create_from_mask(t){const e=t.hash(),n=this.archetype_map.get(e);if(n!==void 0){for(let l=0;l<n.length;l++)if(this.archetypes[n[l]].mask.equals(t))return n[l]}const s=Jy(this.next_archetype_id++),r=[];t.for_each(l=>{const c=l,u=this.component_metas[c];u&&u.field_names.length>0&&r.push({component_id:c,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new Ky(s,t,r,this.initial_capacity);this.archetypes.push(o),td(this.archetype_map,e,s),t.for_each(l=>{const c=l;let u=this.component_index.get(c);u||(u=new Set,this.component_index.set(c,u)),u.add(s)});const a=this.registered_queries;for(let l=0;l<a.length;l++){const c=a[l];o.matches(c.include_mask)&&(!c.exclude_mask||!o.mask.overlaps(c.exclude_mask))&&(!c.any_of_mask||o.mask.overlaps(c.any_of_mask))&&c.result.push(o)}return s}arch_resolve_add(t,e){const n=this.arch_get(t);if(n.mask.has(e))return t;const s=n.get_edge(e);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_set(e));return this.arch_cache_edge(n,this.arch_get(r),e),r}arch_resolve_remove(t,e){const n=this.arch_get(t);if(!n.mask.has(e))return t;const s=n.get_edge(e);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_clear(e));return this.arch_cache_edge(this.arch_get(r),n,e),r}arch_cache_edge(t,e,n){const s=t.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};s.add=e.id,s.add_map=Po(t,e),t.set_edge(n,s);const r=e.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=t.id,r.remove_map=Po(e,t),e.set_edge(n,r)}create_entity(){let t,e;this.entity_free_indices.length>0?(t=this.entity_free_indices.pop(),e=this.entity_generations[t]):(t=this.entity_high_water++,this.entity_generations[t]=Ah,e=Ah),this.entity_alive_count++;const n=Xy(t,e);return this.entity_archetype[t]=this.empty_archetype_id,this.entity_row[t]=Un,n}destroy_entity(t){if(!this.is_alive(t))return;const e=nn(t),n=this.entity_row[e];if(n!==Un){const r=this.arch_get(this.entity_archetype[e]).remove_entity(n);r!==Sn&&(this.entity_row[r]=n)}this.entity_archetype[e]=Un,this.entity_row[e]=Un;const s=Ch(t);this.entity_generations[e]=s+1&Rh,this.entity_free_indices.push(e),this.entity_alive_count--}is_alive(t){const e=nn(t);return e<this.entity_high_water&&this.entity_generations[e]===Ch(t)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(t){this.pending_destroy.push(t)}flush_destroyed(){const t=this.pending_destroy;if(t.length===0)return;const e=this.entity_archetype,n=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<t.length;a++){const l=t[a],c=l&ko,u=l>>ns;if(c>=o||s[c]!==u)continue;const f=n[c];if(f!==Un){const h=r[e[c]],d=h.has_columns?h.remove_entity(f):h.remove_entity_tag(f);d!==Sn&&(n[d]=f)}e[c]=Un,n[c]=Un,s[c]=u+1&Rh,this.entity_free_indices.push(c),this.entity_alive_count--}t.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(t,e,n){this.pending_add_ids.push(t),this.pending_add_defs.push(e),this.pending_add_values.push(n??Er)}remove_component_deferred(t,e){this.pending_remove_ids.push(t),this.pending_remove_defs.push(e)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const t=this.pending_add_ids,e=this.pending_add_defs,n=this.pending_add_values,s=t.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,l=this.archetypes,c=this.component_metas,u=this.entity_high_water;for(let f=0;f<s;f++){const h=t[f],d=h&ko,g=h>>ns;if(d>=u||a[d]!==g)continue;const y=r[d],m=e[f],p=l[y];if(p.mask.has(m)){c[m].field_names.length>0&&p.write_fields(o[d],m,n[f]);continue}const M=this.arch_resolve_add(y,m),v=l[M],x=o[d],A=!v.has_columns&&!p.has_columns;let T;if(x!==Un){if(A)v.move_entity_from_tag(p,x,h);else{const P=p.get_edge(m);v.move_entity_from(p,x,h,P.add_map)}T=ye[0],ye[1]!==Sn&&(o[ye[1]]=x)}else T=A?v.add_entity_tag(h):v.add_entity(h);c[m].field_names.length>0&&v.write_fields(T,m,n[f]),r[d]=M,o[d]=T}t.length=0,e.length=0,n.length=0}_flush_removes(){const t=this.pending_remove_ids,e=this.pending_remove_defs,n=t.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,l=this.entity_high_water;for(let c=0;c<n;c++){const u=t[c],f=u&ko,h=u>>ns;if(f>=l||o[f]!==h)continue;const d=s[f],g=e[c],y=a[d];if(!y.mask.has(g))continue;const m=this.arch_resolve_remove(d,g),p=a[m],M=r[f];if(!p.has_columns&&!y.has_columns)p.move_entity_from_tag(y,M,u);else{const v=y.get_edge(g);p.move_entity_from(y,M,u,v.remove_map)}ye[1]!==Sn&&(r[ye[1]]=M),s[f]=m,r[f]=ye[0]}t.length=0,e.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(t){const e=qy(this.component_count++),n=Object.keys(t),s=new Array(n.length),r=Object.create(null);for(let o=0;o<n.length;o++)r[n[o]]=o,s[o]=t[n[o]];return this.component_metas.push({field_names:n,field_index:r,field_types:s}),e}add_component(t,e,n){if(!this.is_alive(t))return;const s=nn(t),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(e)){o.write_fields(this.entity_row[s],e,n);return}const a=this.arch_resolve_add(r,e),l=this.arch_get(a),c=this.entity_row[s];let u;if(c!==Un){const f=o.get_edge(e);!l.has_columns&&!o.has_columns?l.move_entity_from_tag(o,c,t):l.move_entity_from(o,c,t,f.add_map),u=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=c)}else u=l.has_columns?l.add_entity(t):l.add_entity_tag(t);l.write_fields(u,e,n),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let o=0;o<e.length;o++)r=this.arch_resolve_add(r,e[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),l=this.entity_row[n];let c;if(l!==Un){const u=Po(o,a);a.move_entity_from(o,l,t,u),c=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=l)}else c=a.add_entity(t);for(let u=0;u<e.length;u++)a.write_fields(c,e[u].def,e[u].values??Er);this.entity_archetype[n]=r,this.entity_row[n]=c}else{const o=this.arch_get(s),a=this.entity_row[n];for(let l=0;l<e.length;l++)o.write_fields(a,e[l].def,e[l].values??Er)}}remove_component(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n],r=this.arch_get(s);if(!r.has_component(e))return;const o=this.arch_resolve_remove(s,e),a=this.arch_get(o),l=this.entity_row[n],c=r.get_edge(e);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,l,t):a.move_entity_from(r,l,t,c.remove_map),ye[1]!==Sn&&(this.entity_row[ye[1]]=l),this.entity_archetype[n]=o,this.entity_row[n]=ye[0]}remove_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let u=0;u<e.length;u++)r=this.arch_resolve_remove(r,e[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),l=this.entity_row[n],c=Po(o,a);a.move_entity_from(o,l,t,c),ye[1]!==Sn&&(this.entity_row[ye[1]]=l),this.entity_archetype[n]=r,this.entity_row[n]=ye[0]}has_component(t,e){if(!this.is_alive(t))return!1;const n=nn(t);return this.arch_get(this.entity_archetype[n]).has_component(e)}batch_add_component(t,e,n){if(t.length===0)return;const s=e;if(t.mask.has(s))return;const r=this.arch_resolve_add(t.id,s),o=this.arch_get(r),a=t.get_edge(s),l=t.length,c=this.entity_archetype,u=this.entity_row,f=o.bulk_move_all_from(t,a.add_map);for(let h=0;h<l;h++){const d=nn(o.entity_ids[f+h]);c[d]=r,u[d]=f+h}if(this.component_metas[s].field_names.length>0&&n)for(let h=0;h<l;h++)o.write_fields(f+h,s,n)}batch_remove_component(t,e){if(t.length===0)return;const n=e;if(!t.mask.has(n))return;const s=this.arch_resolve_remove(t.id,n),r=this.arch_get(s),o=t.get_edge(n),a=t.length,l=r.bulk_move_all_from(t,o.remove_map),c=this.entity_archetype,u=this.entity_row;for(let f=0;f<a;f++){const h=nn(r.entity_ids[l+f]);c[h]=s,u[h]=l+f}}get_entity_archetype(t){return this.arch_get(this.entity_archetype[nn(t)])}get_entity_row(t){return this.entity_row[nn(t)]}get_matching_archetypes(t,e,n){const s=t._words;let r=!1;for(let c=0;c<s.length;c++)if(s[c]!==0){r=!0;break}if(!r)return this.archetypes.filter(c=>(!e||!c.mask.overlaps(e))&&(!n||c.mask.overlaps(n)));let o,a=!1;for(let c=0;c<s.length;c++){let u=s[c];if(u===0)continue;const f=c<<Hi;for(;u!==0;){const h=u&-u>>>0,d=f+(Wi-Math.clz32(h));u^=h;const g=this.component_index.get(d);if(!g||g.size===0){a=!0;break}(!o||g.size<o.size)&&(o=g)}if(a)break}if(a||!o)return[];const l=[];for(const c of o){const u=this.arch_get(c);u.matches(t)&&(!e||!u.mask.overlaps(e))&&(!n||u.mask.overlaps(n))&&l.push(u)}return l}register_query(t,e,n){const s=this.get_matching_archetypes(t,e,n);return this.registered_queries.push({include_mask:t.copy(),exclude_mask:e?e.copy():null,any_of_mask:n?n.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(t){const e=Yy(this.event_count++),n=new jy(t);return this.event_channels.push(n),e}emit_event(t,e){this.event_channels[t].emit(e)}emit_signal(t){this.event_channels[t].emit_signal()}get_event_reader(t){return this.event_channels[t].reader}clear_events(){const t=this.event_channels;for(let e=0;e<t.length;e++)t[e].clear()}register_resource(t,e){const n=$y(this.resource_count++),s=new Zy(t,e);return this.resource_channels.push(s),n}get_resource_reader(t){return this.resource_channels[t].reader}get_resource_channel(t){return this.resource_channels[t]}}const el=["PRE_STARTUP","STARTUP","POST_STARTUP"],nl=["PRE_UPDATE","UPDATE","POST_UPDATE"];class tM{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let t=0;t<el.length;t++)this.label_systems.set(el[t],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let t=0;t<nl.length;t++)this.label_systems.set(nl[t],[])}add_systems(t,...e){for(const n of e){const s="system"in n?n.system:n,r="system"in n?n.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(t).push(o),this.system_index.set(s,t),this.sorted_cache.delete(t)}}remove_system(t){const e=this.system_index.get(t);if(e===void 0)return;const n=this.label_systems.get(e),s=n.findIndex(r=>r.descriptor===t);if(s!==-1){const r=n.length-1;s!==r&&(n[s]=n[r]),n.pop();for(const o of n)o.before.delete(t),o.after.delete(t)}this.system_index.delete(t),this.sorted_cache.delete(e)}run_startup(t){for(const e of el)this.run_label(e,t,Ny)}run_update(t,e){for(const n of nl)this.run_label(n,t,e)}run_fixed_update(t,e){this.run_label("FIXED_UPDATE",t,e)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const t=[];for(const e of this.label_systems.values())for(const n of e)t.push(n.descriptor);return t}has_system(t){return this.system_index.has(t)}clear(){for(const t of this.label_systems.values())t.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(t,e,n){const s=this.get_sorted(t);for(let r=0;r<s.length;r++)s[r].fn(e,n);e.flush()}get_sorted(t){const e=this.sorted_cache.get(t);if(e!==void 0)return e;const n=this.label_systems.get(t),s=this.topological_sort(n,t);return this.sorted_cache.set(t,s),s}topological_sort(t,e){if(t.length===0)return[];const n=new Map,s=new Map,r=new Map,o=new Set;for(const c of t)n.set(c.descriptor,new Set),s.set(c.descriptor,0),r.set(c.descriptor,c.insertion_order),o.add(c.descriptor);for(const c of t){for(const u of c.before)o.has(u)&&(n.get(c.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of c.after)o.has(u)&&(n.get(u).add(c.descriptor),s.set(c.descriptor,s.get(c.descriptor)+1))}let a=[];for(const c of t)s.get(c.descriptor)===0&&a.push(c.descriptor);a.sort((c,u)=>r.get(u)-r.get(c));const l=[];for(;a.length>0;){const c=a.pop();l.push(c);for(const u of n.get(c)){const f=s.get(u)-1;s.set(u,f),f===0&&a.push(u)}a.sort((u,f)=>r.get(f)-r.get(u))}if(l.length!==t.length){const c=new Set(l),u=t.filter(f=>!c.has(f.descriptor)).map(f=>f.descriptor.name??`system_${f.descriptor.id}`);throw new wy(Jf.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${e}: [${u.join(", ")}]`)}return l}}const Ph=new WeakMap;function eM(i,t){let e=Ph.get(i);if(!e){e=Object.create(null);const{field_names:r}=i.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(e,r[o],{get(){return this._columns[a][this._row]},set(l){this._columns[a][this._row]=l},enumerable:!0,configurable:!1})}Ph.set(i,e)}const n=Object.create(e),s=new Array(i.columns.length);for(let r=0;r<i.columns.length;r++)s[r]=i.columns[r].buf;return n._columns=s,n._row=t,n}class nM{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(t,e,n,s,r,o){this._archetypes=t,this._defs=e,this._resolver=n,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const t=this._archetypes;let e=0;for(let n=0;n<t.length;n++)e+=t[n].entity_count;return e}get archetypes(){return this._archetypes}*[Symbol.iterator](){const t=this._archetypes;for(let e=0;e<t.length;e++)t[e].entity_count>0&&(yield t[e])}and(...t){const e=this._include.copy(),n=this._defs.slice();for(let s=0;s<t.length;s++)e.has(t[s])||(e.set(t[s]),n.push(t[s]));return this._resolver._resolve_query(e,this._exclude,this._any_of,n)}not(...t){const e=this._exclude?this._exclude.copy():new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,e,this._any_of,this._defs)}any_of(...t){const e=this._any_of?this._any_of.copy():new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,this._exclude,e,this._defs)}}class iM{constructor(t){this._resolver=t}every(...t){const e=new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(e,null,null,t)}}class sM{store;constructor(t){this.store=t}create_entity(){return this.store.create_entity()}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}ref(t,e){const n=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return eM(n.column_groups[t],s)}destroy_entity(t){return this.store.destroy_entity_deferred(t),this}add_component(t,e,n){return this.store.add_component_deferred(t,e,n??Er),this}remove_component(t,e){return this.store.remove_component_deferred(t,e),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}read(t){return this.store.get_event_reader(t)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}}const rM=i=>Xr(i);class oM{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ci;constructor(t){this.store=new Qy(t?.initial_capacity),this.schedule=new tM,this.ctx=new sM(this.store),this._fixed_timestep=t?.fixed_timestep??Ly,this._max_fixed_steps=t?.max_fixed_steps??Dy}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(t){this._fixed_timestep=t}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(t,e){if(Array.isArray(t)){const n=e??"f64",s=Object.create(null);for(const r of t)s[r]=n;return this.store.register_component(s)}return this.store.register_component(t)}register_tag(){return this.store.register_component({})}register_event(t){return this.store.register_event(t)}register_signal(){return this.store.register_event([])}register_resource(t,e){return this.store.register_resource(t,e)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(t){this.store.destroy_entity_deferred(t)}is_alive(t){return this.store.is_alive(t)}get entity_count(){return this.store.entity_count}add_component(t,e,n){return this.store.add_component(t,e,n??Er),this}add_components(t,e){this.store.add_components(t,e)}remove_component(t,e){return this.store.remove_component(t,e),this}remove_components(t,...e){this.store.remove_components(t,e)}has_component(t,e){return this.store.has_component(t,e)}batch_add_component(t,e,n){this.store.batch_add_component(t,e,n)}batch_remove_component(t,e){this.store.batch_remove_component(t,e)}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}query(...t){const e=this.scratch_mask;e._words.fill(0);for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolve_query(e.copy(),null,null,t)}_resolve_query(t,e,n,s){const r=t.hash(),o=e?e.hash():0,a=n?n.hash():0,l=r^Math.imul(o,Cy)^Math.imul(a,Py)|0,c=this._find_cached(l,t,e,n);if(c!==void 0)return c.query;const u=this.store.register_query(t,e??void 0,n??void 0),f=new nM(u,s,this,t.copy(),e?.copy()??null,n?.copy()??null);return td(this.query_cache,l,{include_mask:t.copy(),exclude_mask:e?.copy()??null,any_of_mask:n?.copy()??null,query:f}),f}_find_cached(t,e,n,s){const r=this.query_cache.get(t);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(e)||!(n===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(n))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(t,e){let n;if(typeof t=="function")if(e!==void 0){const o=e(new iM(this)),a=this.ctx,l=t;n={fn:(c,u)=>l(o,a,u)}}else n={fn:t};else n=t;const s=rM(this.next_system_id++),r=Object.freeze(Object.assign({id:s},n));return this.systems.add(r),r}add_systems(t,...e){return this.schedule.add_systems(t,...e),this}remove_system(t){this.schedule.remove_system(t),t.on_removed?.(),this.systems.delete(t)}get system_count(){return this.systems.size}startup(){for(const t of this.systems.values())t.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(t){if(this.schedule.has_fixed_systems()){this._accumulator+=t;const e=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>e&&(this._accumulator=e);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,t),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const t of this.systems.values())t.dispose?.(),t.on_removed?.();this.systems.clear(),this.schedule.clear()}}class aM{#t;#n;constructor(){const[t,e]=Qd({});this.#t=t,this.#n=e}track(t){t in this.#t||queueMicrotask(()=>{this.#n(e=>(e[t]=0,e))}),this.#t[t]}untrack(t){this.#n(e=>(delete e[t],e))}dirty(t){t in this.#t&&this.#n(e=>(e[t]=1-e[t],e))}}class uc{#t;#n;#e;#s;#i=0;#r=!1;#o;constructor(t,e,n,s,r){this.#e=t,this.#s=e,this.#t=n,this.#n=s,this.#o=r}get value(){return this.#e.track(this.#s),Ye()!==null&&(this.#i++,this.#r||(this.#r=!0,oa(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#t()}dirty(){this.#n()}}class lM{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#i=`resource:${e.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(t){if(Ye()===null)return this.#e[t];const n=`${this.#i}:${t}`;let s=this.#s.get(t);return s===void 0&&(s=new uc(this.#t,n,()=>this.#e[t],()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(t)}),this.#s.set(t,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(t){return this.#r(t)}}class cM{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#s=new Map,this.#i=new Map}get id(){return this.#e}hasComponent(t){if(Ye()===null)return this.#n.has_component(this.#e,t);const n=`entity:${this.#e}:has:${t}`;let s=this.#s.get(n);return s===void 0&&(s=new uc(this.#t,n,()=>this.#n.has_component(this.#e,t),()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(n)}),this.#s.set(n,s)),s.value}getField(t,e){if(Ye()===null)return this.#n.get_field(this.#e,t,e);const s=`entity:${this.#e}:${t}:${e}`;let r=this.#i.get(s);return r===void 0&&(r=new uc(this.#t,s,()=>this.#n.get_field(this.#e,t,e),()=>this.#t.dirty(s),()=>{this.#t.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class br{#t;#n;#e;#s;#i;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#s=n,this.#i=s,this.#e=e.query(...n)}get queryKey(){return this.#i}get archetype_count(){return Ye()===null?this.#e.archetype_count:(this.#t.track(`${this.#i}:archetype_count`),this.#e.archetype_count)}count(){return Ye()===null?this.#e.count():(this.#t.track(`${this.#i}:count`),this.#t.track("world:entities"),this.#e.count())}get archetypes(){return Ye()===null?this.#e.archetypes:(this.#t.track(`${this.#i}:archetypes`),this.#t.track("world:entities"),this.#e.archetypes)}*[Symbol.iterator](){const t=Ye();if(this.#e.archetypes,t===null){for(const e of this.#e)yield e;return}this.#t.track(`${this.#i}:archetypes`);for(const e of this.#e)yield new uM(this.#t,this.#n,e,this.#i)}and(...t){return new br(this.#t,this.#n,[...this.#s,...t],`${this.#i}:and`)}not(...t){return new br(this.#t,this.#n,this.#s,`${this.#i}:not`)}any_of(...t){return new br(this.#t,this.#n,this.#s,`${this.#i}:any_of`)}}class uM{#t;#n;#e;#s;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#e=n,this.#s=s}get entity_ids(){if(Ye()===null)return this.#e.entity_ids;const e=`arch:${this.#e.id}:entity_ids`;return this.#t.track(e),this.#e.entity_ids}get entity_count(){if(Ye()===null)return this.#e.entity_count;const e=`arch:${this.#e.id}:count`;return this.#t.track(e),this.#e.entity_count}has_component(t){if(Ye()===null)return this.#e.has_component(t);const n=`arch:${this.#e.id}:has:${t}`;return this.#t.track(n),this.#e.has_component(t)}get_column(t,e){if(Ye()===null)return this.#e.get_column(t,e);const s=`arch:${this.#e.id}:col`;return this.#t.track(s),this.#e.get_column(t,e)}}class hM{#t;#n;constructor(t){this.#t=t,this.#n=new aM}get ecs(){return this.#t}dirty(t){this.#n.dirty(t)}query(...t){const e=`query:${t.map(n=>n.toString()).join(",")}`;return new br(this.#n,this.#t,t,e)}resource(t){return new lM(this.#n,t,this.#t.resource(t))}entity(t){return new cM(this.#n,this.#t,t)}create_entity(){const t=this.#t.create_entity();return on(()=>this.#n.dirty("world:entities")),t}destroy_entity_deferred(t){this.#t.destroy_entity_deferred(t),on(()=>this.#n.dirty("world:entities"))}add_component(t,e,n){const s=`entity:${t}:has:${e}`;return this.#t.add_component(t,e,n),on(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(t,e){const n=`entity:${t}:has:${e}`;return this.#t.remove_component(t,e),on(()=>{this.#n.dirty(n),this.#n.dirty("world:entities")}),this}set_field(t,e,n,s){const r=`entity:${t}:${e}:${n}`;this.#t.set_field(t,e,n,s),on(()=>this.#n.dirty(r))}set_resource(t,e){const n=this.#t.resource(t);this.#t.set_resource(t,e);for(const s of Object.keys(n))this.#n.dirty(`resource:${t.toString()}:${s}`)}}const fM={def:{x:"f64",y:"f64",z:"f64"}},dM={def:{x:"f64",y:"f64",z:"f64"}},pM={def:{x:"f64",y:"f64",z:"f64",w:"f64"}},mM={def:{playerType:"u8",facingForward:"u8"}},gM={def:[]},_M={def:{meshId:"u32"}},xM={def:{speed:"f64"}},vM={schema:{x:0,y:-10,z:0}},In=new oM,yM=new hM(In),Je=In.register_component(fM.def),Xi=In.register_component(dM.def),De=In.register_component(pM.def),Vo=In.register_component(mM.def);In.register_component(gM.def);In.register_component(_M.def);const hc=In.register_component(xM.def),ed=In.register_resource(["x","y","z"],vM.schema);function MM(){return In.startup(),In.set_resource(ed,{x:0,y:-10,z:0}),{ecs:yM}}function SM(i){const t=i.reactiveEcs,e=t.create_entity();return t.add_component(e,Je,{x:i.position.x,y:i.position.y,z:i.position.z}),t.add_component(e,Xi,{x:i.velocity.x,y:i.velocity.y,z:i.velocity.z}),t.add_component(e,De,{x:0,y:0,z:0,w:1}),t.add_component(e,Vo,{playerType:1,facingForward:1}),t.add_component(e,hc,{speed:0}),e}const EM=rn;class ea extends ca{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){const r=this,o=new Vf(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){const e=this;function n(J,z){if(J.nodeType!==1)return;const w=x(J);let R=!1,O=null;switch(J.nodeName){case"svg":z=g(J,z);break;case"style":r(J);break;case"g":z=g(J,z);break;case"path":z=g(J,z),J.hasAttribute("d")&&(O=s(J));break;case"rect":z=g(J,z),O=l(J);break;case"polygon":z=g(J,z),O=c(J);break;case"polyline":z=g(J,z),O=u(J);break;case"circle":z=g(J,z),O=f(J);break;case"ellipse":z=g(J,z),O=h(J);break;case"line":z=g(J,z),O=d(J);break;case"defs":R=!0;break;case"use":z=g(J,z);const it=(J.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Mt=J.viewportElement.getElementById(it);Mt?n(Mt,z):console.warn("SVGLoader: 'use node' references non-existent node id: "+it);break}O&&(z.fill!==void 0&&z.fill!=="none"&&O.color.setStyle(z.fill,EM),T(O,_t),F.push(O),O.userData={node:J,style:z});const nt=J.childNodes;for(let $=0;$<nt.length;$++){const it=nt[$];R&&it.nodeName!=="style"&&it.nodeName!=="defs"||n(it,z)}w&&(j.pop(),j.length>0?_t.copy(j[j.length-1]):_t.identity())}function s(J){const z=new zi,w=new ht,R=new ht,O=new ht;let nt=!0,$=!1;const it=J.getAttribute("d");if(it===""||it==="none")return null;const Mt=it.match(/[a-df-z][^a-df-z]*/ig);for(let ft=0,k=Mt.length;ft<k;ft++){const Y=Mt[ft],K=Y.charAt(0),et=Y.slice(1).trim();nt===!0&&($=!0,nt=!1);let E;switch(K){case"M":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,D===0?z.moveTo(w.x,w.y):z.lineTo(w.x,w.y),D===0&&O.copy(w);break;case"H":E=m(et);for(let D=0,ct=E.length;D<ct;D++)w.x=E[D],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"V":E=m(et);for(let D=0,ct=E.length;D<ct;D++)w.y=E[D],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"L":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"C":E=m(et);for(let D=0,ct=E.length;D<ct;D+=6)z.bezierCurveTo(E[D+0],E[D+1],E[D+2],E[D+3],E[D+4],E[D+5]),R.x=E[D+2],R.y=E[D+3],w.x=E[D+4],w.y=E[D+5],D===0&&$===!0&&O.copy(w);break;case"S":E=m(et);for(let D=0,ct=E.length;D<ct;D+=4)z.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&$===!0&&O.copy(w);break;case"Q":E=m(et);for(let D=0,ct=E.length;D<ct;D+=4)z.quadraticCurveTo(E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&$===!0&&O.copy(w);break;case"T":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2){const yt=y(w.x,R.x),mt=y(w.y,R.y);z.quadraticCurveTo(yt,mt,E[D+0],E[D+1]),R.x=yt,R.y=mt,w.x=E[D+0],w.y=E[D+1],D===0&&$===!0&&O.copy(w)}break;case"A":E=m(et,[3,4],7);for(let D=0,ct=E.length;D<ct;D+=7){if(E[D+5]==w.x&&E[D+6]==w.y)continue;const yt=w.clone();w.x=E[D+5],w.y=E[D+6],R.x=w.x,R.y=w.y,o(z,E[D],E[D+1],E[D+2],E[D+3],E[D+4],yt,w),D===0&&$===!0&&O.copy(w)}break;case"m":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,D===0?z.moveTo(w.x,w.y):z.lineTo(w.x,w.y),D===0&&O.copy(w);break;case"h":E=m(et);for(let D=0,ct=E.length;D<ct;D++)w.x+=E[D],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"v":E=m(et);for(let D=0,ct=E.length;D<ct;D++)w.y+=E[D],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"l":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,z.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"c":E=m(et);for(let D=0,ct=E.length;D<ct;D+=6)z.bezierCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3],w.x+E[D+4],w.y+E[D+5]),R.x=w.x+E[D+2],R.y=w.y+E[D+3],w.x+=E[D+4],w.y+=E[D+5],D===0&&$===!0&&O.copy(w);break;case"s":E=m(et);for(let D=0,ct=E.length;D<ct;D+=4)z.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&$===!0&&O.copy(w);break;case"q":E=m(et);for(let D=0,ct=E.length;D<ct;D+=4)z.quadraticCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&$===!0&&O.copy(w);break;case"t":E=m(et);for(let D=0,ct=E.length;D<ct;D+=2){const yt=y(w.x,R.x),mt=y(w.y,R.y);z.quadraticCurveTo(yt,mt,w.x+E[D+0],w.y+E[D+1]),R.x=yt,R.y=mt,w.x=w.x+E[D+0],w.y=w.y+E[D+1],D===0&&$===!0&&O.copy(w)}break;case"a":E=m(et,[3,4],7);for(let D=0,ct=E.length;D<ct;D+=7){if(E[D+5]==0&&E[D+6]==0)continue;const yt=w.clone();w.x+=E[D+5],w.y+=E[D+6],R.x=w.x,R.y=w.y,o(z,E[D],E[D+1],E[D+2],E[D+3],E[D+4],yt,w),D===0&&$===!0&&O.copy(w)}break;case"Z":case"z":z.currentPath.autoClose=!0,z.currentPath.curves.length>0&&(w.copy(O),z.currentPath.currentPoint.copy(w),nt=!0);break;default:console.warn(Y)}$=!1}return z}function r(J){if(!(!J.sheet||!J.sheet.cssRules||!J.sheet.cssRules.length))for(let z=0;z<J.sheet.cssRules.length;z++){const w=J.sheet.cssRules[z];if(w.type!==1)continue;const R=w.selectorText.split(/,/gm).filter(Boolean).map(O=>O.trim());for(let O=0;O<R.length;O++){const nt=Object.fromEntries(Object.entries(w.style).filter(([,$])=>$!==""));V[R[O]]=Object.assign(V[R[O]]||{},nt)}}}function o(J,z,w,R,O,nt,$,it){if(z==0||w==0){J.lineTo(it.x,it.y);return}R=R*Math.PI/180,z=Math.abs(z),w=Math.abs(w);const Mt=($.x-it.x)/2,ft=($.y-it.y)/2,k=Math.cos(R)*Mt+Math.sin(R)*ft,Y=-Math.sin(R)*Mt+Math.cos(R)*ft;let K=z*z,et=w*w;const E=k*k,D=Y*Y,ct=E/K+D/et;if(ct>1){const xt=Math.sqrt(ct);z=xt*z,w=xt*w,K=z*z,et=w*w}const yt=K*D+et*E,mt=(K*et-yt)/yt;let I=Math.sqrt(Math.max(0,mt));O===nt&&(I=-I);const S=I*z*Y/w,W=-I*w*k/z,rt=Math.cos(R)*S-Math.sin(R)*W+($.x+it.x)/2,dt=Math.sin(R)*S+Math.cos(R)*W+($.y+it.y)/2,at=a(1,0,(k-S)/z,(Y-W)/w),Pt=a((k-S)/z,(Y-W)/w,(-k-S)/z,(-Y-W)/w)%(Math.PI*2);J.currentPath.absellipse(rt,dt,z,w,at,at+Pt,nt===0,R)}function a(J,z,w,R){const O=J*w+z*R,nt=Math.sqrt(J*J+z*z)*Math.sqrt(w*w+R*R);let $=Math.acos(Math.max(-1,Math.min(1,O/nt)));return J*R-z*w<0&&($=-$),$}function l(J){const z=v(J.getAttribute("x")||0),w=v(J.getAttribute("y")||0),R=v(J.getAttribute("rx")||J.getAttribute("ry")||0),O=v(J.getAttribute("ry")||J.getAttribute("rx")||0),nt=v(J.getAttribute("width")),$=v(J.getAttribute("height")),it=1-.551915024494,Mt=new zi;return Mt.moveTo(z+R,w),Mt.lineTo(z+nt-R,w),(R!==0||O!==0)&&Mt.bezierCurveTo(z+nt-R*it,w,z+nt,w+O*it,z+nt,w+O),Mt.lineTo(z+nt,w+$-O),(R!==0||O!==0)&&Mt.bezierCurveTo(z+nt,w+$-O*it,z+nt-R*it,w+$,z+nt-R,w+$),Mt.lineTo(z+R,w+$),(R!==0||O!==0)&&Mt.bezierCurveTo(z+R*it,w+$,z,w+$-O*it,z,w+$-O),Mt.lineTo(z,w+O),(R!==0||O!==0)&&Mt.bezierCurveTo(z,w+O*it,z+R*it,w,z+R,w),Mt}function c(J){function z(nt,$,it){const Mt=v($),ft=v(it);O===0?R.moveTo(Mt,ft):R.lineTo(Mt,ft),O++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new zi;let O=0;return J.getAttribute("points").replace(w,z),R.currentPath.autoClose=!0,R}function u(J){function z(nt,$,it){const Mt=v($),ft=v(it);O===0?R.moveTo(Mt,ft):R.lineTo(Mt,ft),O++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new zi;let O=0;return J.getAttribute("points").replace(w,z),R.currentPath.autoClose=!1,R}function f(J){const z=v(J.getAttribute("cx")||0),w=v(J.getAttribute("cy")||0),R=v(J.getAttribute("r")||0),O=new ks;O.absarc(z,w,R,0,Math.PI*2);const nt=new zi;return nt.subPaths.push(O),nt}function h(J){const z=v(J.getAttribute("cx")||0),w=v(J.getAttribute("cy")||0),R=v(J.getAttribute("rx")||0),O=v(J.getAttribute("ry")||0),nt=new ks;nt.absellipse(z,w,R,O,0,Math.PI*2);const $=new zi;return $.subPaths.push(nt),$}function d(J){const z=v(J.getAttribute("x1")||0),w=v(J.getAttribute("y1")||0),R=v(J.getAttribute("x2")||0),O=v(J.getAttribute("y2")||0),nt=new zi;return nt.moveTo(z,w),nt.lineTo(R,O),nt.currentPath.autoClose=!1,nt}function g(J,z){z=Object.assign({},z);let w={};if(J.hasAttribute("class")){const $=J.getAttribute("class").split(/\s/).filter(Boolean).map(it=>it.trim());for(let it=0;it<$.length;it++)w=Object.assign(w,V["."+$[it]])}J.hasAttribute("id")&&(w=Object.assign(w,V["#"+J.getAttribute("id")]));function R($,it,Mt){Mt===void 0&&(Mt=function(k){return k.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),k}),J.hasAttribute($)&&(z[it]=Mt(J.getAttribute($))),w[it]&&(z[it]=Mt(w[it])),J.style&&J.style[$]!==""&&(z[it]=Mt(J.style[$]))}function O($){return Math.max(0,Math.min(1,v($)))}function nt($){return Math.max(0,v($))}return R("fill","fill"),R("fill-opacity","fillOpacity",O),R("fill-rule","fillRule"),R("opacity","opacity",O),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",O),R("stroke-width","strokeWidth",nt),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",nt),R("visibility","visibility"),z}function y(J,z){return J-(z-J)}function m(J,z,w){if(typeof J!="string")throw new TypeError("Invalid input: "+typeof J);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},O=0,nt=1,$=2,it=3;let Mt=O,ft=!0,k="",Y="";const K=[];function et(yt,mt,I){const S=new SyntaxError('Unexpected character "'+yt+'" at index '+mt+".");throw S.partial=I,S}function E(){k!==""&&(Y===""?K.push(Number(k)):K.push(Number(k)*Math.pow(10,Number(Y)))),k="",Y=""}let D;const ct=J.length;for(let yt=0;yt<ct;yt++){if(D=J[yt],Array.isArray(z)&&z.includes(K.length%w)&&R.FLAGS.test(D)){Mt=nt,k=D,E();continue}if(Mt===O){if(R.WHITESPACE.test(D))continue;if(R.DIGIT.test(D)||R.SIGN.test(D)){Mt=nt,k=D;continue}if(R.POINT.test(D)){Mt=$,k=D;continue}R.COMMA.test(D)&&(ft&&et(D,yt,K),ft=!0)}if(Mt===nt){if(R.DIGIT.test(D)){k+=D;continue}if(R.POINT.test(D)){k+=D,Mt=$;continue}if(R.EXP.test(D)){Mt=it;continue}R.SIGN.test(D)&&k.length===1&&R.SIGN.test(k[0])&&et(D,yt,K)}if(Mt===$){if(R.DIGIT.test(D)){k+=D;continue}if(R.EXP.test(D)){Mt=it;continue}R.POINT.test(D)&&k[k.length-1]==="."&&et(D,yt,K)}if(Mt===it){if(R.DIGIT.test(D)){Y+=D;continue}if(R.SIGN.test(D)){if(Y===""){Y+=D;continue}Y.length===1&&R.SIGN.test(Y)&&et(D,yt,K)}}R.WHITESPACE.test(D)?(E(),Mt=O,ft=!1):R.COMMA.test(D)?(E(),Mt=O,ft=!0):R.SIGN.test(D)?(E(),Mt=nt,k=D):R.POINT.test(D)?(E(),Mt=$,k=D):et(D,yt,K)}return E(),K}const p=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(J){let z="px";if(typeof J=="string"||J instanceof String)for(let R=0,O=p.length;R<O;R++){const nt=p[R];if(J.endsWith(nt)){z=nt,J=J.substring(0,J.length-nt.length);break}}let w;return z==="px"&&e.defaultUnit!=="px"?w=M.in[e.defaultUnit]/e.defaultDPI:(w=M[z][e.defaultUnit],w<0&&(w=M[z].in*e.defaultDPI)),w*parseFloat(J)}function x(J){if(!(J.hasAttribute("transform")||J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))))return null;const z=A(J);return j.length>0&&z.premultiply(j[j.length-1]),_t.copy(z),j.push(z),z}function A(J){const z=new Xt,w=G;if(J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))){const R=v(J.getAttribute("x")||0),O=v(J.getAttribute("y")||0);z.translate(R,O)}if(J.hasAttribute("transform")){const R=J.getAttribute("transform").split(")");for(let O=R.length-1;O>=0;O--){const nt=R[O].trim();if(nt==="")continue;const $=nt.indexOf("("),it=nt.length;if($>0&&$<it){const Mt=nt.slice(0,$),ft=m(nt.slice($+1));switch(w.identity(),Mt){case"translate":if(ft.length>=1){const k=ft[0];let Y=0;ft.length>=2&&(Y=ft[1]),w.translate(k,Y)}break;case"rotate":if(ft.length>=1){let k=0,Y=0,K=0;k=ft[0]*Math.PI/180,ft.length>=3&&(Y=ft[1],K=ft[2]),H.makeTranslation(-Y,-K),U.makeRotation(k),q.multiplyMatrices(U,H),H.makeTranslation(Y,K),w.multiplyMatrices(H,q)}break;case"scale":if(ft.length>=1){const k=ft[0];let Y=k;ft.length>=2&&(Y=ft[1]),w.scale(k,Y)}break;case"skewX":ft.length===1&&w.set(1,Math.tan(ft[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ft.length===1&&w.set(1,0,0,Math.tan(ft[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ft.length===6&&w.set(ft[0],ft[2],ft[4],ft[1],ft[3],ft[5],0,0,1);break}}z.premultiply(w)}}return z}function T(J,z){function w($){lt.set($.x,$.y,1).applyMatrix3(z),$.set(lt.x,lt.y)}function R($){const it=$.xRadius,Mt=$.yRadius,ft=Math.cos($.aRotation),k=Math.sin($.aRotation),Y=new B(it*ft,it*k,0),K=new B(-Mt*k,Mt*ft,0),et=Y.applyMatrix3(z),E=K.applyMatrix3(z),D=G.set(et.x,E.x,0,et.y,E.y,0,0,0,1),ct=H.copy(D).invert(),I=U.copy(ct).transpose().multiply(ct).elements,S=L(I[0],I[1],I[4]),W=Math.sqrt(S.rt1),rt=Math.sqrt(S.rt2);if($.xRadius=1/W,$.yRadius=1/rt,$.aRotation=Math.atan2(S.sn,S.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const at=H.set(W,0,0,0,rt,0,0,0,1),Pt=U.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),xt=at.multiply(Pt).multiply(D),Lt=Ot=>{const{x:gt,y:Et}=new B(Math.cos(Ot),Math.sin(Ot),0).applyMatrix3(xt);return Math.atan2(Et,gt)};$.aStartAngle=Lt($.aStartAngle),$.aEndAngle=Lt($.aEndAngle),P(z)&&($.aClockwise=!$.aClockwise)}}function O($){const it=b(z),Mt=N(z);$.xRadius*=it,$.yRadius*=Mt;const ft=it>Number.EPSILON?Math.atan2(z.elements[1],z.elements[0]):Math.atan2(-z.elements[3],z.elements[4]);$.aRotation+=ft,P(z)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const nt=J.subPaths;for(let $=0,it=nt.length;$<it;$++){const ft=nt[$].curves;for(let k=0;k<ft.length;k++){const Y=ft[k];Y.isLineCurve?(w(Y.v1),w(Y.v2)):Y.isCubicBezierCurve?(w(Y.v0),w(Y.v1),w(Y.v2),w(Y.v3)):Y.isQuadraticBezierCurve?(w(Y.v0),w(Y.v1),w(Y.v2)):Y.isEllipseCurve&&(st.set(Y.aX,Y.aY),w(st),Y.aX=st.x,Y.aY=st.y,_(z)?R(Y):O(Y))}}}function P(J){const z=J.elements;return z[0]*z[4]-z[1]*z[3]<0}function _(J){const z=J.elements,w=z[0]*z[3]+z[1]*z[4];if(w===0)return!1;const R=b(J),O=N(J);return Math.abs(w/(R*O))>Number.EPSILON}function b(J){const z=J.elements;return Math.sqrt(z[0]*z[0]+z[1]*z[1])}function N(J){const z=J.elements;return Math.sqrt(z[3]*z[3]+z[4]*z[4])}function L(J,z,w){let R,O,nt,$,it;const Mt=J+w,ft=J-w,k=Math.sqrt(ft*ft+4*z*z);return Mt>0?(R=.5*(Mt+k),it=1/R,O=J*it*w-z*it*z):Mt<0?O=.5*(Mt-k):(R=.5*k,O=-.5*k),ft>0?nt=ft+k:nt=ft-k,Math.abs(nt)>2*Math.abs(z)?(it=-2*z/nt,$=1/Math.sqrt(1+it*it),nt=it*$):Math.abs(z)===0?(nt=1,$=0):(it=-.5*nt/z,nt=1/Math.sqrt(1+it*it),$=it*nt),ft>0&&(it=nt,nt=-$,$=it),{rt1:R,rt2:O,cs:nt,sn:$}}const F=[],V={},j=[],G=new Xt,H=new Xt,U=new Xt,q=new Xt,st=new ht,lt=new B,_t=new Xt,pt=new DOMParser().parseFromString(t,"image/svg+xml");return n(pt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:pt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,m,p,M){const v=y.x,x=m.x,A=p.x,T=M.x,P=y.y,_=m.y,b=p.y,N=M.y,L=(T-A)*(P-b)-(N-b)*(v-A),F=(x-v)*(P-b)-(_-P)*(v-A),V=(N-b)*(x-v)-(T-A)*(_-P),j=L/V,G=F/V;if(V===0&&L!==0||j<=0||j>=1||G<0||G>1)return null;if(L===0&&V===0){for(let H=0;H<2;H++)if(o(H===0?p:M,y,m),s.loc==n.ORIGIN){const U=H===0?p:M;return{x:U.x,y:U.y,t:s.t}}else if(s.loc==n.BETWEEN){const U=+(v+s.t*(x-v)).toPrecision(10),q=+(P+s.t*(_-P)).toPrecision(10);return{x:U,y:q,t:s.t}}return null}else{for(let q=0;q<2;q++)if(o(q===0?p:M,y,m),s.loc==n.ORIGIN){const st=q===0?p:M;return{x:st.x,y:st.y,t:s.t}}const H=+(v+j*(x-v)).toPrecision(10),U=+(P+j*(_-P)).toPrecision(10);return{x:H,y:U,t:j}}}function o(y,m,p){const M=p.x-m.x,v=p.y-m.y,x=y.x-m.x,A=y.y-m.y,T=M*A-x*v;if(y.x===m.x&&y.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===p.x&&y.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=n.LEFT;return}if(T>Number.EPSILON){s.loc=n.RIGHT;return}if(M*x<0||v*A<0){s.loc=n.BEHIND;return}if(Math.sqrt(M*M+v*v)<Math.sqrt(x*x+A*A)){s.loc=n.BEYOND;return}let P;M!==0?P=x/M:P=A/v,s.loc=n.BETWEEN,s.t=P}function a(y,m){const p=[],M=[];for(let v=1;v<y.length;v++){const x=y[v-1],A=y[v];for(let T=1;T<m.length;T++){const P=m[T-1],_=m[T],b=r(x,A,P,_);b!==null&&p.find(N=>N.t<=b.t+Number.EPSILON&&N.t>=b.t-Number.EPSILON)===void 0&&(p.push(b),M.push(new ht(b.x,b.y)))}}return M}function l(y,m,p){const M=new ht;m.getCenter(M);const v=[];return p.forEach(x=>{x.boundingBox.containsPoint(M)&&a(y,x.points).forEach(T=>{v.push({identifier:x.identifier,isCW:x.isCW,point:T})})}),v.sort((x,A)=>x.point.x-A.point.x),v}function c(y,m,p,M,v){(v==null||v==="")&&(v="nonzero");const x=new ht;y.boundingBox.getCenter(x);const A=[new ht(p,x.y),new ht(M,x.y)],T=l(A,y.boundingBox,m);T.sort((F,V)=>F.point.x-V.point.x);const P=[],_=[];T.forEach(F=>{F.identifier===y.identifier?P.push(F):_.push(F)});const b=P[0].point.x,N=[];let L=0;for(;L<_.length&&_[L].point.x<b;)N.length>0&&N[N.length-1]===_[L].identifier?N.pop():N.push(_[L].identifier),L++;if(N.push(y.identifier),v==="evenodd"){const F=N.length%2===0,V=N[N.length-2];return{identifier:y.identifier,isHole:F,for:V}}else if(v==="nonzero"){let F=!0,V=null,j=null;for(let G=0;G<N.length;G++){const H=N[G];F?(j=m[H].isCW,F=!1,V=H):j!==m[H].isCW&&(j=m[H].isCW,F=!0)}return{identifier:y.identifier,isHole:F,for:V}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,f=-999999999,h=t.subPaths.map(y=>{const m=y.getPoints();let p=-999999999,M=999999999,v=-999999999,x=999999999;for(let A=0;A<m.length;A++){const T=m[A];T.y>p&&(p=T.y),T.y<M&&(M=T.y),T.x>v&&(v=T.x),T.x<x&&(x=T.x)}return f<=v&&(f=v+1),u>=x&&(u=x-1),{curves:y.curves,points:m,isCW:bi.isClockWise(m),identifier:-1,boundingBox:new Eg(new ht(x,M),new ht(v,p))}});h=h.filter(y=>y.points.length>1);for(let y=0;y<h.length;y++)h[y].identifier=y;const d=h.map(y=>c(y,h,u,f,t.userData?t.userData.style.fillRule:void 0)),g=[];return h.forEach(y=>{if(!d[y.identifier].isHole){const p=new es;p.curves=y.curves,d.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{const x=h[v.identifier],A=new ks;A.curves=x.curves,p.holes.push(A)}),g.push(p)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){const r=[],o=[],a=[];if(ea.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;const l=new be;return l.setAttribute("position",new Qt(r,3)),l.setAttribute("normal",new Qt(o,3)),l.setAttribute("uv",new Qt(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){const c=new ht,u=new ht,f=new ht,h=new ht,d=new ht,g=new ht,y=new ht,m=new ht,p=new ht,M=new ht,v=new ht,x=new ht,A=new ht,T=new ht,P=new ht,_=new ht,b=new ht;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=ft(t);const N=t.length;if(N<2)return 0;const L=t[0].equals(t[N-1]);let F,V=t[0],j;const G=e.strokeWidth/2,H=1/(N-1);let U=0,q,st,lt,_t,pt=!1,Ut=0,J=l*3,z=l*2;w(t[0],t[1],c).multiplyScalar(G),m.copy(t[0]).sub(c),p.copy(t[0]).add(c),M.copy(m),v.copy(p);for(let k=1;k<N;k++){F=t[k],k===N-1?L?j=t[1]:j=void 0:j=t[k+1];const Y=c;if(w(V,F,Y),f.copy(Y).multiplyScalar(G),x.copy(F).sub(f),A.copy(F).add(f),q=U+H,st=!1,j!==void 0){w(F,j,u),f.copy(u).multiplyScalar(G),T.copy(F).sub(f),P.copy(F).add(f),lt=!0,f.subVectors(j,V),Y.dot(f)<0&&(lt=!1),k===1&&(pt=lt),f.subVectors(j,F),f.normalize();const K=Math.abs(Y.dot(f));if(K>Number.EPSILON){const et=G/K;f.multiplyScalar(-et),h.subVectors(F,V),d.copy(h).setLength(et).add(f),_.copy(d).negate();const E=d.length(),D=h.length();h.divideScalar(D),g.subVectors(j,F);const ct=g.length();switch(g.divideScalar(ct),h.dot(_)<D&&g.dot(_)<ct&&(st=!0),b.copy(d).add(F),_.add(F),_t=!1,st?lt?(P.copy(_),A.copy(_)):(T.copy(_),x.copy(_)):nt(),e.strokeLineJoin){case"bevel":$(lt,st,q);break;case"round":it(lt,st),lt?O(F,x,T,q,0):O(F,P,A,q,1);break;default:const yt=G*e.strokeMiterLimit/E;if(yt<1)if(e.strokeLineJoin!=="miter-clip"){$(lt,st,q);break}else it(lt,st),lt?(g.subVectors(b,x).multiplyScalar(yt).add(x),y.subVectors(b,T).multiplyScalar(yt).add(T),R(x,q,0),R(g,q,0),R(F,q,.5),R(F,q,.5),R(g,q,0),R(y,q,0),R(F,q,.5),R(y,q,0),R(T,q,0)):(g.subVectors(b,A).multiplyScalar(yt).add(A),y.subVectors(b,P).multiplyScalar(yt).add(P),R(A,q,1),R(g,q,1),R(F,q,.5),R(F,q,.5),R(g,q,1),R(y,q,1),R(F,q,.5),R(y,q,1),R(P,q,1));else st?(lt?(R(p,U,1),R(m,U,0),R(b,q,0),R(p,U,1),R(b,q,0),R(_,q,1)):(R(p,U,1),R(m,U,0),R(b,q,1),R(m,U,0),R(_,q,0),R(b,q,1)),lt?T.copy(b):P.copy(b)):lt?(R(x,q,0),R(b,q,0),R(F,q,.5),R(F,q,.5),R(b,q,0),R(T,q,0)):(R(A,q,1),R(b,q,1),R(F,q,.5),R(F,q,.5),R(b,q,1),R(P,q,1)),_t=!0;break}}else nt()}else nt();!L&&k===N-1&&Mt(t[0],M,v,lt,!0,U),U=q,V=F,m.copy(T),p.copy(P)}if(!L)Mt(F,x,A,lt,!1,q);else if(st&&r){let k=b,Y=_;pt!==lt&&(k=_,Y=b),lt?(_t||pt)&&(Y.toArray(r,0),Y.toArray(r,9),_t&&k.toArray(r,3)):(_t||!pt)&&(Y.toArray(r,3),Y.toArray(r,9),_t&&k.toArray(r,0))}return Ut;function w(k,Y,K){return K.subVectors(Y,k),K.set(-K.y,K.x).normalize()}function R(k,Y,K){r&&(r[J]=k.x,r[J+1]=k.y,r[J+2]=0,o&&(o[J]=0,o[J+1]=0,o[J+2]=1),J+=3,a&&(a[z]=Y,a[z+1]=K,z+=2)),Ut+=3}function O(k,Y,K,et,E){c.copy(Y).sub(k).normalize(),u.copy(K).sub(k).normalize();let D=Math.PI;const ct=c.dot(u);Math.abs(ct)<1&&(D=Math.abs(Math.acos(ct))),D/=n,f.copy(Y);for(let yt=0,mt=n-1;yt<mt;yt++)h.copy(f).rotateAround(k,D),R(f,et,E),R(h,et,E),R(k,et,.5),f.copy(h);R(h,et,E),R(K,et,E),R(k,et,.5)}function nt(){R(p,U,1),R(m,U,0),R(x,q,0),R(p,U,1),R(x,q,0),R(A,q,1)}function $(k,Y,K){Y?k?(R(p,U,1),R(m,U,0),R(x,q,0),R(p,U,1),R(x,q,0),R(_,q,1),R(x,K,0),R(T,K,0),R(_,K,.5)):(R(p,U,1),R(m,U,0),R(A,q,1),R(m,U,0),R(_,q,0),R(A,q,1),R(A,K,1),R(_,K,0),R(P,K,1)):k?(R(x,K,0),R(T,K,0),R(F,K,.5)):(R(A,K,1),R(P,K,0),R(F,K,.5))}function it(k,Y){Y&&(k?(R(p,U,1),R(m,U,0),R(x,q,0),R(p,U,1),R(x,q,0),R(_,q,1),R(x,U,0),R(F,q,.5),R(_,q,1),R(F,q,.5),R(T,U,0),R(_,q,1)):(R(p,U,1),R(m,U,0),R(A,q,1),R(m,U,0),R(_,q,0),R(A,q,1),R(A,U,1),R(_,q,0),R(F,q,.5),R(F,q,.5),R(_,q,0),R(P,U,1)))}function Mt(k,Y,K,et,E,D){switch(e.strokeLineCap){case"round":E?O(k,K,Y,D,.5):O(k,Y,K,D,.5);break;case"square":if(E)c.subVectors(Y,k),u.set(c.y,-c.x),f.addVectors(c,u).add(k),h.subVectors(u,c).add(k),et?(f.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(f.toArray(r,3),a[7]===1?h.toArray(r,9):f.toArray(r,9),h.toArray(r,0));else{c.subVectors(K,k),u.set(c.y,-c.x),f.addVectors(c,u).add(k),h.subVectors(u,c).add(k);const ct=r.length;et?(f.toArray(r,ct-3),h.toArray(r,ct-6),h.toArray(r,ct-12)):(h.toArray(r,ct-6),f.toArray(r,ct-3),h.toArray(r,ct-12))}break}}function ft(k){let Y=!1;for(let et=1,E=k.length-1;et<E;et++)if(k[et].distanceTo(k[et+1])<s){Y=!0;break}if(!Y)return k;const K=[];K.push(k[0]);for(let et=1,E=k.length-1;et<E;et++)k[et].distanceTo(k[et+1])>=s&&K.push(k[et]);return K.push(k[k.length-1]),K}}}function bM(){let i=new $e;const t=new we({color:5343944}),e=new we({color:7779297}),n=new we({color:16768256}),s=new we({color:16777215}),r=new we({color:0}),o=50,c=new ea().parse('<svg><path d="m 135.55266,65.650453 a 45,45 0 0 0 -48.000001,-15 l -62,20 c 0,0 53,40.000007 94.000001,29.999997 l 3,-0.999997 c 17,-5 23,-21 13,-34 z"/></svg>'),f=ea.createShapes(c.paths[0])[0],h=.006,d=new Ds(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});d.center();const g=new $t(d,t);g.position.set(-.05,.16,0),g.scale.set(h,h,h),i.add(g);const y=new Ds(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});y.center();const m=new $t(y,e);m.position.set(.05,-.16,0),m.rotation.z=Math.PI,m.scale.set(h,h,h),i.add(m);const p=new es;p.moveTo(5,0),p.lineTo(-4,6),p.lineTo(-4,-3),p.closePath();const M=o+.8,v=new Ds(p,{bevelEnabled:!1,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:M});v.center(),i.rotation.x=Math.PI;let x=new $e;x.add(i);let A=new zr(.1),T=new $t(A,s);T.position.set(0,.16,.5*o*h),x.add(T);let P=new zr(.03),_=new $t(P,r);_.position.copy(T.position),_.position.z+=.1,x.add(_);let b=T.clone();b.position.z=-b.position.z,x.add(b);let N=_.clone();N.position.z=-N.position.z,x.add(N);let L=new $e,F=.03,V=new cs(F,F,.3),j=new $t(V,n);j.position.set(0,-.4,0);let G=new es;G.moveTo(-.14,0),G.lineTo(.2,.08),G.lineTo(.2,-.08),G.closePath();let H=new Ds(G,{bevelEnabled:!1,depth:.04}),U=new $t(H,n);U.rotateX(.5*Math.PI),U.position.set(0,-.51,0),L.add(j),L.add(U),L.position.set(0,0,.1),x.add(L);let q=L.clone();q.position.z=-q.position.z,x.add(q);const st=new $t(v,n);st.position.set(.375,.14,0),st.scale.set(h,h,h),x.add(st);let lt=new $e;return x.rotateY(-.5*Math.PI),x.position.set(0,.55,0),lt.add(x),lt}const TM=/^[og]\s*(.+)?/,wM=/^mtllib /,AM=/^usemtl /,RM=/^usemap /,Ih=new B,il=new B,Lh=new B,Dh=new B,un=new B;function CM(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;Ih.fromArray(s,t),il.fromArray(s,e),Lh.fromArray(s,n),un.subVectors(Lh,il),Dh.subVectors(Ih,il),un.cross(Dh),un.normalize(),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(n,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class PM extends ca{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,o=new Vf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new CM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s="",r="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let f=0,h=n.length;f<h;f++)if(s=n[f],s=l?s.trimLeft():s.trim(),o=s.length,o!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const d=s.split(/\s+/);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?e.colors.push(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(r==="f"){const g=s.substr(1).trim().split(/\s+/),y=[];for(let p=0,M=g.length;p<M;p++){const v=g[p];if(v.length>0){const x=v.split("/");y.push(x)}}const m=y[0];for(let p=1,M=y.length-1;p<M;p++){const v=y[p],x=y[p+1];e.addFace(m[0],v[0],x[0],m[1],v[1],x[1],m[2],v[2],x[2])}}else if(r==="l"){const d=s.substring(1).trim().split(" ");let g=[];const y=[];if(s.indexOf("/")===-1)g=d;else for(let m=0,p=d.length;m<p;m++){const M=d[m].split("/");M[0]!==""&&g.push(M[0]),M[1]!==""&&y.push(M[1])}e.addLineGeometry(g,y)}else if(r==="p"){const g=s.substr(1).trim().split(" ");e.addPointGeometry(g)}else if((a=TM.exec(s))!==null){const d=(" "+a[0].substr(1).trim()).substr(1);e.startObject(d)}else if(AM.test(s))e.object.startMaterial(s.substring(7).trim(),e.materialLibraries);else if(wM.test(s))e.materialLibraries.push(s.substring(7).trim());else if(RM.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(a=s.split(" "),a.length>1){const g=a[1].trim().toLowerCase();e.object.smooth=g!=="0"&&g!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}e.finalize();const c=new $e;if(c.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=e.objects.length;f<h;f++){const d=e.objects[f],g=d.geometry,y=d.materials,m=g.type==="Line",p=g.type==="Points";let M=!1;if(g.vertices.length===0)continue;const v=new be;v.setAttribute("position",new Qt(g.vertices,3)),g.normals.length>0&&v.setAttribute("normal",new Qt(g.normals,3)),g.colors.length>0&&(M=!0,v.setAttribute("color",new Qt(g.colors,3))),g.hasUVIndices===!0&&v.setAttribute("uv",new Qt(g.uvs,2));const x=[];for(let T=0,P=y.length;T<P;T++){const _=y[T],b=_.name+"_"+_.smooth+"_"+M;let N=e.materials[b];if(this.materials!==null){if(N=this.materials.create(_.name),m&&N&&!(N instanceof Bo)){const L=new Bo;Pn.prototype.copy.call(L,N),L.color.copy(N.color),N=L}else if(p&&N&&!(N instanceof fr)){const L=new fr({size:10,sizeAttenuation:!1});Pn.prototype.copy.call(L,N),L.color.copy(N.color),L.map=N.map,N=L}}N===void 0&&(m?N=new Bo:p?N=new fr({size:1,sizeAttenuation:!1}):N=new hg,N.name=_.name,N.flatShading=!_.smooth,N.vertexColors=M,e.materials[b]=N),x.push(N)}let A;if(x.length>1){for(let T=0,P=y.length;T<P;T++){const _=y[T];v.addGroup(_.groupStart,_.groupCount,T)}m?A=new Gu(v,x):p?A=new Wa(v,x):A=new $t(v,x)}else m?A=new Gu(v,x[0]):p?A=new Wa(v,x[0]):A=new $t(v,x[0]);A.name=d.name,c.add(A)}else if(e.vertices.length>0){const f=new fr({size:1,sizeAttenuation:!1}),h=new be;h.setAttribute("position",new Qt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(h.setAttribute("color",new Qt(e.colors,3)),f.vertexColors=!0);const d=new Wa(h,f);c.add(d)}return c}}const ei=.45,ni=.45,Ps=.25,nd=.15,IM=200,LM=10,id=.1;function DM(i){let{ecs:t,entityId:e,turnAmount:n,actionDown:s,driftDown:r}=i;const o=30,a=67.5,l=2,c=6,u=3,f=.98,h=.96,d=.92,g=[new B(-ei,Ps,ni),new B(ei,Ps,ni),new B(-ei,Ps,-ni),new B(ei,Ps,-ni)];let y=0,m=!1,p=0;return{update(M){t.resource(ed).get("y");const x=t.entity(e).getField(Je,"x"),A=t.entity(e).getField(Je,"y"),T=t.entity(e).getField(Je,"z"),P=t.entity(e).getField(Xi,"x"),_=t.entity(e).getField(Xi,"y"),b=t.entity(e).getField(Xi,"z"),N=t.entity(e).getField(De,"x"),L=t.entity(e).getField(De,"y"),F=t.entity(e).getField(De,"z"),V=t.entity(e).getField(De,"w"),j=t.entity(e).getField(hc,"speed"),G=new B(x,A,T),H=new B(P,_,b),U=new Gn(N,L,F,V);let q=new B(0,0,1).applyQuaternion(U);q.y=0,q.normalize();let st=new B(1,0,0).applyQuaternion(U);st.y=0,st.normalize();const lt=Math.sqrt(H.x*H.x+H.z*H.z);let _t=o;y>0&&(_t=a);let pt=j;s()?pt=Math.min(j+l*M,_t):pt=Math.max(j-c*M,0),t.set_field(e,hc,"speed",pt);let Ut=-n()*u*M,J=0;n()<-.1?J=-1:n()>.1&&(J=1);const z=r()&&J!==0&&lt>3;if(z&&!m?(m=!0,y=0):!z&&m&&(y>1.5&&(pt=Math.min(pt*1.5,a)),m=!1,y=0),m){y+=M;const xt=Ut*2.5,Lt=new Gn().setFromAxisAngle(new B(0,1,0),xt);U.multiply(Lt)}else if(lt>.1){const xt=Ut*(pt/o),Lt=new Gn().setFromAxisAngle(new B(0,1,0),xt);U.multiply(Lt)}U.normalize();const w=new B(0,0,1).applyQuaternion(U);w.y=0,w.normalize();let R=w.multiplyScalar(pt);const O=m?h:f,nt=w.clone().multiplyScalar(H.dot(w)),$=H.clone().sub(nt).multiplyScalar(d);let it=nt.add($);const Mt=it.length()>.01?O:1;it.multiplyScalar(Mt),it.x+=(R.x-it.x)*(1-O)*M*10,it.z+=(R.z-it.z)*(1-O)*M*10;const ft=m&&y>1.5?a:o,k=Math.sqrt(it.x*it.x+it.z*it.z);if(k>ft){const xt=ft/k;it.x*=xt,it.z*=xt}let Y=G.add(it.clone().multiplyScalar(M));const K=Sy();if(K){const xt=Pi/2,Lt=Ey(Y.x,Y.z),Ot=xt;if(Lt>Ot&&Lt<50&&Number.isFinite(Y.x)&&Number.isFinite(Y.z)){let Et=0,Ft=0,It=1/0;for(let bt=0;bt<=800;bt++){const St=bt/800,Tt=K.getPointAt(St),vt=Tt.x-Y.x,ut=Tt.z-Y.z,Dt=Math.sqrt(vt*vt+ut*ut);Dt<It&&(It=Dt,Et=Tt.x,Ft=Tt.z)}const At=(Y.x-Et)/It,qt=(Y.z-Ft)/It,X=Lt-Ot;Y.x-=At*X,Y.z-=qt*X}}let et=[];for(let xt=0;xt<4;xt++){const Lt=g[xt].clone();Lt.applyQuaternion(U);const Ot=new B(Y.x,Y.y,Y.z).add(Lt);let gt=On(Ot.x,Ot.z);if(K){let It=1/0,At=0;for(let St=0;St<=200;St++){const Tt=St/200,vt=K.getPointAt(Tt),ut=vt.x-Ot.x,Dt=vt.z-Ot.z,Wt=Math.sqrt(ut*ut+Dt*Dt);Wt<It&&(It=Wt,At=vt.y)}const qt=Pi/2,X=3;let bt=gt;if(It<=qt+X){const St=At;if(It<=qt)bt=St;else{const Tt=(It-qt)/X;bt=St*(1-Tt)+bt*Tt}}gt=Math.max(bt,At)}const Et=gt+id+nd;et.push(Et)}const E=(et[0]+et[1])/2,D=(et[2]+et[3])/2,ct=(et[0]+et[2])/2,yt=(et[1]+et[3])/2,W=((E+D)/2-Ps-Y.y)*IM-p*LM;p+=W*M,Y.y+=p*M;const rt=Math.atan2(D-E,ni*2),dt=Math.atan2(yt-ct,ei*2),at=new gn().setFromQuaternion(U,"YXZ"),Pt=Math.min(1,M*8);at.x=yu.lerp(at.x,rt,Pt),at.z=yu.lerp(at.z,dt,Pt),U.setFromEuler(at),t.set_field(e,De,"x",U.x),t.set_field(e,De,"y",U.y),t.set_field(e,De,"z",U.z),t.set_field(e,De,"w",U.w),t.set_field(e,Xi,"x",it.x),t.set_field(e,Xi,"y",it.y),t.set_field(e,Xi,"z",it.z),t.set_field(e,Je,"x",Y.x),t.set_field(e,Je,"y",Y.y),t.set_field(e,Je,"z",Y.z)}}}async function NM(){const i=new PM;try{const t=await fetch("./models/kart.obj");if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.text(),n=i.parse(e);n.traverse(p=>{if(p instanceof $t&&(p.castShadow=!0,p.receiveShadow=!0,p.material instanceof Pn)){const M=p.material;if(M.name?.includes("Blue"))M.color.setHex(3829413),M.roughness=.5,M.metalness=.2;else if(M.name?.includes("Grey")){const v=M.name.match(/Grey_-_(\d+)/);if(v){const x=parseInt(v[1])/100;M.color.setRGB(x,x,x)}M.roughness=.7,M.metalness=.3}}});const s=new Ii().setFromObject(n),r=new B;s.getSize(r);const l=1.5/Math.max(r.x,r.y,r.z);n.scale.setScalar(l);let c=new $e;s.setFromObject(n),n.rotateY(.5*Math.PI),n.position.set(0,-s.min.y,0),c.add(n);const u=Ps-nd,f=new zr(id,8,8),h=new Nc({color:16711680}),d=new $t(f,h);d.position.set(-ei,u,ni),c.add(d);const g=new $t(f,h);g.position.set(ei,u,ni),c.add(g);const y=new $t(f,h);y.position.set(-ei,u,-ni),c.add(y);const m=new $t(f,h);return m.position.set(ei,u,-ni),c.add(m),c}catch(t){throw console.error("Failed to load kart:",t),t}}function UM(i,t){return mc(e=>(oi(Jd(oi(()=>{let n=[];for(let s of i.query(Je,De,Vo)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)n.push(r[o])}return n}),n=>{let s=i.entity(n());s.getField(Vo,"playerType"),s.getField(Vo,"facingForward");const r=new $e;rf(async()=>await NM(),a=>{r.add(a)});const o=bM();o.position.set(0,.32,0),o.scale.setScalar(.5),r.add(o),t.add(r),oa(()=>{t.remove(r)}),oi(()=>{let a=s.getField(Je,"x"),l=s.getField(Je,"y"),c=s.getField(Je,"z"),u=s.getField(De,"x"),f=s.getField(De,"y"),h=s.getField(De,"z"),d=s.getField(De,"w");r.position.set(a,l,c),r.quaternion.set(u,f,h,d)})})),{update:()=>{},dispose:e}))}var FM=xc('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border-radius:50%;border:5px solid rgba(255,255,255,0.5);box-sizing:content-box"><div style=position:absolute;transform:translate(-50%,-50%);border-radius:50%;background-color:rgba(255,255,255,0.5)>');function OM(i){let t=_e(i.position()),e=_e(typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize),n=_e(i.outerRingSize()),s=_e(i.knobSize()),r=_e();Ls(()=>i.position(),l=>{t[1](l)}),Ls(()=>typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize,l=>{e[1](l)}),Ls(()=>i.outerRingSize(),l=>{n[1](l)}),Ls(()=>i.knobSize(),l=>{s[1](l)});let o=oi(()=>{let l=r[0]();return l==null?new ht:new ht().copy(l).multiplyScalar(1/n[0]())});return{position:t,hitAreaSize:e,outerRingSize:n,knobSize:s,dragOffset:r,value:o,UI:()=>{let[l,c]=_e(!1),[u,f]=_e(),[h,d]=r,[g,y]=_e(),m,p=x=>{let A=g();if(A==null)return;m=x.pointerId,A.setPointerCapture(m);let T=A.getBoundingClientRect();f(new ht(x.clientX-T.left,x.clientY-T.top)),d(new ht)},M=x=>{let A=g();if(A==null)return;let T=u();if(T==null)return;A.setPointerCapture(x.pointerId);let P=A.getBoundingClientRect(),_=new ht(x.clientX-P.left-T.x,x.clientY-P.top-T.y),b=_.length();b>.5*n[0]()&&_.multiplyScalar(.5*n[0]()/b),d(_)},v=x=>{g()!=null&&m!=null&&(f(void 0),d(void 0))};return(()=>{var x=FM(),A=x.firstChild,T=A.firstChild;x.$$contextmenu=_=>_.preventDefault(),x.$$pointerup=v,x.$$pointermove=M,x.$$pointerdown=p;var P=y;return typeof P=="function"||Array.isArray(P)?pl(()=>P,x):y=x,aa(()=>({e:`${t[0]().x}px`,t:`${t[0]().y}px`,a:`${e[0]()}px`,o:`${e[0]()}px`,i:`${u()?.x??.5*e[0]()}px`,n:`${u()?.y??.5*e[0]()}px`,s:`${n[0]()}px`,h:`${n[0]()}px`,r:`calc(50% + ${h()?.x??0}px)`,d:`calc(50% + ${h()?.y??0}px)`,l:`${s[0]()}px`,u:`${s[0]()}px`}),({e:_,t:b,a:N,o:L,i:F,n:V,s:j,h:G,r:H,d:U,l:q,u:st},lt={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0})=>{_!==lt.e&&Le(x,"left",_),b!==lt.t&&Le(x,"top",b),N!==lt.a&&Le(x,"width",N),L!==lt.o&&Le(x,"height",L),F!==lt.i&&Le(A,"left",F),V!==lt.n&&Le(A,"top",V),j!==lt.s&&Le(A,"width",j),G!==lt.h&&Le(A,"height",G),H!==lt.r&&Le(T,"left",H),U!==lt.d&&Le(T,"top",U),q!==lt.l&&Le(T,"width",q),st!==lt.u&&Le(T,"height",st)}),x})()}}}of(["pointerdown","pointermove","pointerup","contextmenu"]);var BM=xc("<div style=position:absolute;user-select:none;touch-action:none>");const zM=1;function kM(i){const[t,e]=_e(!1),[n,s]=_e(0),[r,o]=_e(!1),[a,l]=_e(0),[c,u]=_e(!1),f=i.externalPressed||(()=>!1);let h,d=!1;const g=()=>{h||(h=window.setInterval(()=>{l(T=>T+1)},50))},y=()=>{h&&(clearInterval(h),h=void 0)};oa(()=>y()),requestAnimationFrame(function T(){const P=f();P&&!d&&(s(performance.now()),g()),!P&&d&&u(!0),d=P,requestAnimationFrame(T)});const m=()=>t()||f(),p=oi(()=>{a();const T=m(),P=n();if(!T)return 0;const _=(performance.now()-P)/1e3;return Math.min(_/zM,1)}),M=T=>{T.currentTarget.setPointerCapture(T.pointerId),e(!0),s(performance.now()),g()},v=T=>{e(!1),y(),o(!0)},x=T=>{t()&&(e(!1),y(),o(!0))},A=()=>(()=>{var T=BM();return T.$$contextmenu=P=>P.preventDefault(),T.addEventListener("pointerleave",x),T.$$pointerup=v,T.$$pointerdown=M,aa(()=>({e:`${i.position().x}px`,t:`${i.position().y}px`,a:`${i.size()}px`,o:`${i.size()}px`,i:`${.5*i.size()}px`,n:m()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:P,t:_,a:b,o:N,i:L,n:F},V={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{P!==V.e&&Le(T,"left",P),_!==V.t&&Le(T,"top",_),b!==V.a&&Le(T,"width",b),N!==V.o&&Le(T,"height",N),L!==V.i&&Le(T,"border-radius",L),F!==V.n&&Le(T,"background-color",F)}),T})();return{position:i.position,size:i.size,pressed:m,power:p,justReleased:()=>r()?(o(!1),!0):!1,justReleasedExternal:()=>c()?(u(!1),!0):!1,UI:A}}of(["pointerdown","pointerup","contextmenu"]);var VM=xc("<div style=width:100%;height:100%><canvas style=width:100%;height:100%;display:block;touch-action:none></canvas><div style=position:absolute;top:10px;left:10px;z-index:100><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Orbit Camera");function GM(i){const t=new $e,e=new cs(.15,.2,i*.4,6),n=new we({color:4863784,roughness:.9}),s=new $t(e,n);s.position.y=i*.2,s.castShadow=!0,t.add(s);const r=new Wr(i*.4,i*.7,6),o=new we({color:2972199,roughness:.8}),a=new $t(r,o);return a.position.y=i*.6,a.castShadow=!0,t.add(a),t}function HM(i,t,e){const n=new $e,s=new ls(i,t,e),r=[9140069,10518640,10259580,8022618],o=new we({color:r[Math.floor(Math.random()*r.length)],roughness:.7}),a=new $t(s,o);a.position.y=t/2,a.castShadow=!0,a.receiveShadow=!0,n.add(a);const l=new Wr(Math.max(i,e)*.7,t*.3,4),c=new we({color:5917242,roughness:.8}),u=new $t(l,c);return u.position.y=t+t*.15,u.rotation.y=Math.PI/4,u.castShadow=!0,n.add(u),n}function WM(i,t){const r=o=>{const a=Math.sin(o*7919)*1e4;return a-Math.floor(a)};for(let o=0;o<210;o++){const a=r(o*13);if(Math.abs(a-.5)<.22)continue;const l=i.getPointAt(a),c=i.getTangentAt(a),u=-c.z,f=c.x,h=Math.sqrt(u*u+f*f),d=u/h,g=f/h,y=r(o*17)>.5?1:-1,m=Pi/2+4+r(o*19)*25,p=l.x+d*m*y,M=l.z+g*m*y,v=On(p,M),x=Pi/2,A=6;let T=v;if(m<=x+A){const P=l.y+.02,_=(m-x)/A;T=Math.min(v,P)*(1-_)+v*_}if(o<160){const P=GM(1.5+r(o*7)*2);P.position.set(p,T,M),t.add(P)}else{const P=1+r(o*3)*2,_=1.5+r(o*4)*3,b=1+r(o*5)*2,N=HM(P,_,b);let L=Math.min(T,On(p-.5*P,M-.5*b),On(p-.5*P,M+.5*b),On(p+.5*P,M-.5*b),On(p+.5*P,M+.5*b));N.position.set(p,L,M),N.lookAt(l.x,T,l.z),t.add(N)}}}function XM(i,t){const e=i.getSpacedPoints(800);let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const u of e)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),o=Math.max(o,u.z);const a=(n+s)/2,l=(r+o)/2,c=Math.max(s-n,o-r)/2+t+5;return{centerX:a,centerZ:l,size:c*2}}function qM(i){const t=XM(i,18),e=t.size,n=160,s=[],r=[],o=[],a=800,l=i.getSpacedPoints(a),c=e/2;for(let h=0;h<=n;h++)for(let d=0;d<=n;d++){const g=t.centerX-c+d/n*e,y=t.centerZ-c+h/n*e;let m=1/0,p=0;for(let A=0;A<a;A++){const T=l[A].x-g,P=l[A].z-y,_=Math.sqrt(T*T+P*P);_<m&&(m=_,p=l[A].y)}const M=Pi/2,v=3;let x=On(g,y);if(m<=M+v){const A=p-.2;if(m<=M)x=A;else{const T=(m-M)/v,P=On(g,y),_=A*(1-T)+P*T,b=A+T*1.5;x=Math.min(_,b)}}s.push(g,x,y),o.push(d/n*4,h/n*4)}for(let h=0;h<n;h++)for(let d=0;d<n;d++){const g=h*(n+1)+d,y=g+1,m=(h+1)*(n+1)+d,p=m+1;r.push(y,g,p),r.push(m,p,g)}const u=new be;u.setAttribute("position",new Qt(s,3)),u.setAttribute("uv",new Qt(o,2)),u.setIndex(r),u.computeVertexNormals();const f=new we({color:4881471,roughness:.9,flatShading:!0});return{mesh:new $t(u,f),bounds:t}}let[sl,YM]=_e(),[qi,sd]=_e(!1),[tS,rd]=_e(!1),[eS,od]=_e(!1),[jM,ad]=_e(!1),[$M,ld]=_e(!1),[ZM,Gc]=_e(!1),[JM,cd]=_e(!1);function KM(i,t,e){const n=new gm;n.background=new Kt(6006985);const s=new yg(16777215,.7);n.add(s);const r=new vg(16777215,1);r.position.set(20,50,20),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,n.add(r);const{curve:o,group:a}=My(42);a.position.set(0,0,0),n.add(a);const l=by(o,0);n.add(l);const{mesh:c,bounds:u}=qM(o),f=u.size/2;r.shadow.camera.left=u.centerX-f,r.shadow.camera.right=u.centerX+f,r.shadow.camera.top=u.centerZ+f,r.shadow.camera.bottom=u.centerZ-f,c.receiveShadow=!0,n.add(c),WM(o,n);const{ecs:h}=MM(),d=.01,g=o.getPointAt(d),y=d+.01,m=o.getPointAt(y);new B().subVectors(m,g).normalize();const p=new B(0,0,0),M=g.y+.1;g.y=M;const v=SM({position:g,velocity:p,reactiveEcs:h}),{dispose:x}=UM(h,n),A=oi(()=>{const O=e().x;return Math.abs(O)>.01?O*2:jM()?-1:$M()?1:0}),{update:T}=DM({ecs:h,entityId:v,turnAmount:A,actionDown:ZM,driftDown:JM}),P=new _y({antialias:!0,canvas:t});P.shadowMap.enabled=!0,P.shadowMap.type=af;const _=new fn(75,1,.1,1e3);let b=0,N=.5,L=5,F=!1,V=0,j=0,G=0;t.addEventListener("pointerdown",O=>{F=!0,V=O.clientX,j=O.clientY,t.setPointerCapture(O.pointerId)}),t.addEventListener("pointermove",O=>{if(!F||!qi())return;const nt=O.clientX-V,$=O.clientY-j;b-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+$*.01)),V=O.clientX,j=O.clientY}),t.addEventListener("pointerup",O=>{F=!1}),t.addEventListener("pointercancel",()=>{F=!1}),t.addEventListener("contextmenu",O=>O.preventDefault());let H=!1;t.addEventListener("touchstart",O=>{O.touches.length===1&&(H=!0,V=O.touches[0].clientX,j=O.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",O=>{if(qi()&&(O.preventDefault(),O.touches.length===1&&H)){const nt=O.touches[0].clientX-V,$=O.touches[0].clientY-j;b-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+$*.01)),V=O.touches[0].clientX,j=O.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",O=>{H=!1}),t.addEventListener("touchstart",O=>{if(O.touches.length===2){const nt=O.touches[0].clientX-O.touches[1].clientX,$=O.touches[0].clientY-O.touches[1].clientY;G=Math.sqrt(nt*nt+$*$)}}),t.addEventListener("touchmove",O=>{if(!qi()||O.touches.length!==2)return;O.preventDefault();const nt=O.touches[0].clientX-O.touches[1].clientX,$=O.touches[0].clientY-O.touches[1].clientY,it=Math.sqrt(nt*nt+$*$);L=Math.max(1,Math.min(20,L-(it-G)*.02)),G=it},{passive:!1}),t.addEventListener("wheel",O=>{qi()&&(L=Math.max(1,Math.min(20,L+O.deltaY*.01)))}),window.addEventListener("keydown",O=>{(O.key==="o"||O.key==="O")&&sd(!qi())});let U=new ResizeObserver(()=>{let O=i.getBoundingClientRect();YM(new ht(O.width,O.height)),P.setSize(O.width,O.height),_.aspect=O.width/O.height,_.updateProjectionMatrix(),P.render(n,_)});U.observe(i),oa(()=>{U.unobserve(i),U.disconnect()});const q=3,st=6;let lt=0,_t=new B,pt=new B;const Ut=12;let J=!0,z=performance.now(),w=!0;const R=()=>{if(!J)return;const O=performance.now(),nt=Math.min((O-z)/1e3,.1);z=O;const $=h.entity(v).getField(Je,"x"),it=h.entity(v).getField(Je,"y"),Mt=h.entity(v).getField(Je,"z"),ft=new B($,it,Mt),k=h.entity(v).getField(De,"x"),Y=h.entity(v).getField(De,"y"),K=h.entity(v).getField(De,"z"),et=h.entity(v).getField(De,"w"),E=new Gn(k,Y,K,et),D=new B(0,0,1).applyQuaternion(E);D.y=0;let ct=0;if(D.length()>.001&&(D.normalize(),ct=Math.atan2(D.x,D.z)),T(nt),w&&(w=!1,_t.copy(ft),pt.copy(ft),lt=ct),qi()){const yt=ct+b,mt=ft;_.position.set(mt.x+L*Math.sin(yt)*Math.cos(N),mt.y+L*Math.sin(N),mt.z+L*Math.cos(yt)*Math.cos(N)),_.lookAt(mt)}else{let yt=ct-lt;for(;yt>Math.PI;)yt-=Math.PI*2;for(;yt<-Math.PI;)yt+=Math.PI*2;lt+=yt*Math.min(1,Ut*nt);const mt=new B(-Math.sin(lt)*st,q,-Math.cos(lt)*st),I=ft.clone().add(mt),S=ft.clone().add(new B(Math.sin(lt)*2,.3,Math.cos(lt)*2));_t.lerp(I,1-Math.exp(-Ut*nt*3)),pt.lerp(S,1-Math.exp(-Ut*nt*3)),_.position.copy(_t),_.lookAt(pt)}P.render(n,_),requestAnimationFrame(R)};return R(),()=>{J=!1,x(),P.dispose()}}function QM(){let[i,t]=_e(),[e,n]=_e(),s=150,r=OM({position:oi(()=>new ht(50,(sl()?.y??0)-50-s)),hitAreaSize:s,outerRingSize:()=>.8*s,knobSize:()=>70}),o=100,a=kM({position:oi(()=>new ht((sl()?.x??0)-50-o,(sl()?.y??0)-50-o)),size:()=>o});return Ls(()=>a.pressed(),l=>{Gc(l)}),Ls(()=>[i(),e()],([l,c])=>{l!=null&&c!==void 0&&mc(u=>(KM(l,c,r.value),u))}),(()=>{var l=VM(),c=l.firstChild,u=c.nextSibling,f=u.firstChild,h=f.firstChild,d=t;typeof d=="function"||Array.isArray(d)?pl(()=>d,l):t=l;var g=n;return typeof g=="function"||Array.isArray(g)?pl(()=>g,c):n=c,h.addEventListener("change",y=>sd(y.target.checked)),ml(l,dl(r.UI,{}),null),ml(l,dl(a.UI,{}),null),aa(qi,y=>{h.checked=y}),l})()}const Nh=document.getElementById("root");Nh&&rp(()=>dl(QM,{}),Nh);document.addEventListener("keydown",i=>{switch(i.key){case"ArrowUp":rd(!0);break;case"ArrowDown":od(!0);break;case"ArrowLeft":ad(!0);break;case"ArrowRight":ld(!0);break;case" ":Gc(!0);break;case"z":case"Z":cd(!0);break}});document.addEventListener("keyup",i=>{switch(i.key){case"ArrowUp":rd(!1);break;case"ArrowDown":od(!1);break;case"ArrowLeft":ad(!1);break;case"ArrowRight":ld(!1);break;case" ":Gc(!1);break;case"z":case"Z":cd(!1);break}});
