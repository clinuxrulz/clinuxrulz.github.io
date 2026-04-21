(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class Ut extends Error{source;constructor(e){super(),this.source=e}}class ja extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const yf=0,ls=1,Lr=2,Xo=4,Jn=8,_s=16,wn=32,Dr=64,gs=128,Kl=256,Za=512,st=1,Xt=2,on=4,wr=1,Nn=2,Is=3,_t={},Sf={};function Mf(i,e){const t=(i.i?.t?i.i.u?.o:i.i?.o)??-1;t>=i.o&&(i.o=t+1);const n=i.o,r=e.l[n];if(r===void 0)e.l[n]=i;else{const s=r.T;s.S=i,i.T=s,r.T=i}n>e.R&&(e.R=n)}function qo(i,e){let t=i.O;t&(Jn|Xo)||(t&ls?i.O=t&-4|Lr|Jn:i.O=t|Jn,t&_s||Mf(i,e))}function bf(i,e){let t=i.O;t&(Jn|Xo|_s)||(i.O=t|_s,Mf(i,e))}function Ls(i,e){const t=i.O;if(!(t&(Jn|_s)))return;i.O=t&-25;const n=i.o;if(i.T===i)e.l[n]=void 0;else{const r=i.S,s=e.l[n],o=r??s;i===s?e.l[n]=r:i.T.S=r,o.T=i.T}i.T=i,i.S=void 0}function ed(i){if(!i._){i._=!0;for(let e=0;e<=i.R;e++)for(let t=i.l[e];t!==void 0;t=t.S)t.O&Jn&&Lo(t)}}function Lo(i,e=Lr){const t=i.O;if(!((t&(ls|Lr))>=e)){i.O=t&-4|e;for(let n=i.I;n!==null;n=n.h)Lo(n.p,ls);if(i.A!==null)for(let n=i.A;n!==null;n=n.N)for(let r=n.I;r!==null;r=r.h)Lo(r.p,ls)}}function So(i,e){for(i._=!1,i.P=0;i.P<=i.R;i.P++){let t=i.l[i.P];for(;t!==void 0;)t.O&Jn?e(t):td(t,i),t=i.l[i.P]}i.R=0}function td(i,e){Ls(i,e);let t=i.o;for(let n=i.C;n;n=n.D){const r=n.m,s=r.V||r;s.L&&s.o>=t&&(t=s.o+1)}if(i.o!==t){i.o=t;for(let n=i.I;n!==null;n=n.h)bf(n.p,e)}}const Bs=new Set,It={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},un={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Dt=0,We=null,xs=!1,Mo=null;function nd(i){return!!Mo?.has(i)}function ks(i){for(const e of wi){if(e.U||e.k.size>0)continue;const t=e.G[i-1];t.length&&(e.G[i-1]=[],Do(t,i))}}function id(i){for(let e=i.I;e!==null;e=e.h){const t=e.p;if(!t.W)continue;if(t.W===Is){t.H||(t.H=!0,t.F.enqueue(Nn,t.M));continue}const n=t.O&wn?un:It;n.P>t.o&&(n.P=t.o),qo(t,n)}}function rd(i,e){e.j=i,i.$.push(...e.$);for(const t of wi)t.K===e&&(t.K=i);i.Y.push(...e.Y);for(const t of e.Z)i.Z.add(t);for(const[t,n]of e.B){let r=i.B.get(t);r||i.B.set(t,r=new Set);for(const s of n)r.add(s)}}function sd(i){for(let e=0;e<i.length;e++){const t=i[e];t.q=void 0,t.X!==_t&&(t.J=t.X,t.X=_t);const n=t.ee;t.ee=_t,n!==_t&&t.J!==n&&Nr(t,!0),t.K=null}i.length=0}function od(i){for(const e of wi)(i?e.K===i:!e.K)&&(e.U||(e.G[0].length&&Do(e.G[0],wr),e.G[1].length&&Do(e.G[1],Nn)),e.te.q===e&&(e.te.q=void 0),e.k.clear(),e.G[0].length=0,e.G[1].length=0,wi.delete(e),No.delete(e.te))}function Ki(){xs||(xs=!0,bt.ne||queueMicrotask(Ka))}class Ef{i=null;ie=[[],[]];re=[];created=Dt;addChild(e){this.re.push(e),e.i=this}removeChild(e){const t=this.re.indexOf(e);t>=0&&(this.re.splice(t,1),e.i=null)}notify(e,t,n,r){return this.i?this.i.notify(e,t,n,r):!1}run(e){if(this.ie[e-1].length){const t=this.ie[e-1];this.ie[e-1]=[],Do(t,e)}for(let t=0;t<this.re.length;t++)this.re[t].run?.(e)}enqueue(e,t){e&&(xn?qt(xn).G[e-1].push(t):this.ie[e-1].push(t)),Ki()}stashQueues(e){e.ie[0].push(...this.ie[0]),e.ie[1].push(...this.ie[1]),this.ie=[[],[]];for(let t=0;t<this.re.length;t++){let n=this.re[t],r=e.re[t];r||(r={ie:[[],[]],re:[]},e.re[t]=r),n.stashQueues(r)}}restoreQueues(e){this.ie[0].push(...e.ie[0]),this.ie[1].push(...e.ie[1]);for(let t=0;t<e.re.length;t++){const n=e.re[t];let r=this.re[t];r&&r.restoreQueues(n)}}}class Qn extends Ef{ne=!1;se=[];Y=[];Z=new Set;static oe;static ue;static ce=null;flush(){if(!this.ne){this.ne=!0;try{if(So(It,Qn.oe),We){if(!ld(We)){const n=We;if(So(un,Qn.oe),this.se=[],this.Y=[],this.Z=new Set,ks(wr),ks(Nn),this.stashQueues(n.ae),Dt++,xs=It.R>=It.P,Uc(n.se),We=null,!n.$.length&&n.Y.length){Mo=new Set;for(let r=0;r<n.Y.length;r++){const s=n.Y[r];s.L||s.le||(Mo.add(s),id(s))}}try{ia(null,!0)}finally{Mo=null}return}this.se!==We.se&&this.se.push(...We.se),this.restoreQueues(We.ae),Bs.delete(We);const t=We;We=null,Uc(this.se),ia(t)}else Bs.size&&So(un,Qn.oe),ia();Dt++,xs=It.R>=It.P,ks(wr),this.run(wr),ks(Nn),this.run(Nn)}finally{this.ne=!1}}}notify(e,t,n,r){if(t&st){if(n&st){const s=r!==void 0?r:e.fe;if(We&&s){const o=s.source;let c=We.B.get(o);c||We.B.set(o,c=new Set);const f=c.size;c.add(e),c.size!==f&&Ki()}}return!0}return!1}initTransition(e){if(e&&(e=Tf(e)),!(e&&e===We)&&!(!e&&We&&We.Ee===Dt)){if(!We)We=e??{Ee:Dt,se:[],B:new Map,Y:[],Z:new Set,$:[],ae:{ie:[[],[]],re:[]},j:!1};else if(e){const t=We;rd(e,t),Bs.delete(t),We=e}if(Bs.add(We),We.Ee=Dt,this.se!==We.se){for(let t=0;t<this.se.length;t++){const n=this.se[t];n.K=We,We.se.push(n)}this.se=We.se}if(this.Y!==We.Y){for(let t=0;t<this.Y.length;t++){const n=this.Y[t];n.K=We,We.Y.push(n)}this.Y=We.Y}for(const t of wi)t.K||(t.K=We);if(this.Z!==We.Z){for(const t of this.Z)We.Z.add(t);this.Z=We.Z}}}}function Nr(i,e=!1){const t=i.q||xn,n=i.de!==void 0;for(let r=i.I;r!==null;r=r.h){if(n&&r.p.Te){r.p.O|=Kl;continue}e&&t?(r.p.O|=gs,Cf(r.p,t)):e&&(r.p.O|=gs,r.p.q=void 0);const s=r.p;if(s.W===Is){s.H||(s.H=!0,s.F.enqueue(Nn,s.M));continue}const o=r.p.O&wn?un:It;o.P>r.p.o&&(o.P=r.p.o),qo(r.p,o)}}function Nc(){const i=bt.se;for(let e=0;e<i.length;e++){const t=i[e];t.X!==_t&&(t.J=t.X,t.X=_t,t.W&&t.W!==Is&&(t.H=!0)),t.Se&st||(t.Se&=~on),t.L&&Qn.ue(t,!1,!0)}i.length=0}function ia(i=null,e=!1){const t=!e;t&&Nc(),e||wf(bt),It.R>=It.P&&So(It,Qn.oe),t&&(Nc(),sd(i?i.Y:bt.Y),i?i.Z:bt.Z,od(i))}function wf(i){for(const e of i.re)e.checkSources?.(),wf(e)}function Uc(i){for(let e=0;e<i.length;e++)i[e].K=We}const bt=new Qn;function Ka(){if(!bt.ne)for(;xs||We;)bt.flush()}function Do(i,e){for(let t=0;t<i.length;t++)i[t](e)}function ad(i,e){if(i.O&(wn|Dr))return!1;if(i.Re===e||i.Oe?.has(e))return!0;for(let t=i.C;t;t=t.D){let n=t.m;for(;n;){if(n===e||n.V===e)return!0;n=n._e}}return!!(i.Se&st&&i.fe instanceof Ut&&i.fe.source===e)}function ld(i){if(i.j)return!0;if(i.$.length)return!1;let e=!0;for(const[t,n]of i.B){let r=!1;for(const s of n){if(ad(s,t)){r=!0;break}n.delete(s)}if(!r)i.B.delete(t);else if(t.Se&st&&t.fe?.source===t){e=!1;break}}if(e)for(let t=0;t<i.Y.length;t++){const n=i.Y[t];if(Yo(n)&&"Se"in n&&n.Se&st&&n.fe instanceof Ut&&n.fe.source!==n){e=!1;break}}return e&&(i.j=!0),e}function Tf(i){for(;i.j&&typeof i.j=="object";)i=i.j;return i}function cd(i,e){const t=We;try{return We=Tf(i),e()}finally{We=t}}const No=new WeakMap,wi=new Set;function ud(i){let e=No.get(i);if(e)return qt(e);const t=i._e,n=t?.q?qt(t.q):null;return e={te:i,k:new Set,G:[[],[]],U:null,K:We,Ie:n},No.set(i,e),wi.add(e),i.he=!1,e}function qt(i){for(;i.U;)i=i.U;return i}function Af(i,e){if(i=qt(i),e=qt(e),i===e)return i;e.U=i;for(const t of e.k)i.k.add(t);return i.G[0].push(...e.G[0]),i.G[1].push(...e.G[1]),i}function vs(i){const e=i.q;if(!e)return;const t=qt(e);if(wi.has(t))return t;i.q=void 0}function ns(i){return vs(i)?.K??i.K}function Yo(i){return i.ee!==void 0&&i.ee!==_t}function Cf(i,e){const t=qt(e),n=i.q;if(n){if(n.U){i.q=e;return}const r=qt(n);if(wi.has(r)){r!==t&&!Yo(i)&&(t.Ie&&qt(t.Ie)===r?i.q=e:r.Ie&&qt(r.Ie)===t||Af(t,r));return}}i.q=e}function Jl(i){const e=i.m,t=i.D,n=i.h,r=i.pe;return n!==null?n.pe=r:e.Ae=r,r!==null?r.h=n:(e.I=n,n===null&&(e.Ne?.(),e.L&&!e.Pe&&!(e.O&wn)&&fd(e))),t}function fd(i){Ls(i,i.O&wn?un:It);let e=i.C;for(;e!==null;)e=Jl(e);i.C=null,Ds(i,!0)}function zs(i,e){const t=e.ge;if(t!==null&&t.m===i)return;let n=null;const r=e.O&Xo;if(r&&(n=t!==null?t.D:e.C,n!==null&&n.m===i)){e.ge=n;return}const s=i.Ae;if(s!==null&&s.p===e&&(!r||hd(s,e)))return;const o=e.ge=i.Ae={m:i,p:e,D:n,pe:s,h:null};t!==null?t.D=o:e.C=o,s!==null?s.h=o:i.I=o}function hd(i,e){const t=e.ge;if(t!==null){let n=e.C;do{if(n===i)return!0;if(n===t)break;n=n.D}while(n!==null)}return!1}function Rf(i){let e=i.Ce;for(;e;)e.O|=wn,e.O&Jn&&(Ls(e,It),qo(e,un)),Rf(e),e=e.De}function Ds(i,e=!1,t){if(i.O&Dr)return;e&&(i.O=Dr),e&&i.L&&(i.ye=null);let n=t?i.ve:i.Ce;for(;n;){const r=n.De;if(n.C){const s=n;Ls(s,s.O&wn?un:It);let o=s.C;do o=Jl(o);while(o!==null);s.C=null,s.ge=null}Ds(n,!0),n=r}t?i.ve=null:(i.Ce=null,i.me=0),dd(i,t)}function dd(i,e){let t=e?i.we:i.Ve;if(t){if(Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];r.call(r)}else t.call(t);e?i.we=null:i.Ve=null}}function pd(i,e){let t=i;for(;t.be&&t.i;)t=t.i;if(t.id!=null)return md(t.id,t.me++);throw new Error("Cannot get child id from owner without an id")}function Pf(i){return pd(i)}function md(i,e){const t=e.toString(36),n=t.length-1;return i+(n?String.fromCharCode(64+n):"")+t}function sn(){return Yt?it:null}function $o(i){return it&&(it.Ve?Array.isArray(it.Ve)?it.Ve.push(i):it.Ve=[it.Ve,i]:it.Ve=i),i}function Tr(i){const e=it,t=i?.transparent??!1,n={id:i?.id??(t?e?.id:e?.id!=null?Pf(e):void 0),be:t||void 0,t:!0,u:e?.t?e.u:e,Ce:null,De:null,Ve:null,F:e?.F??bt,Le:e?.Le||Sf,me:0,we:null,ve:null,i:e,dispose(r=!0){Ds(n,r)}};if(e){const r=e.Ce;r===null||(n.De=r),e.Ce=n}return n}function If(i,e){const t=Tr(e);return Xi(t,()=>i(t.dispose))}function _d(i,e){return i.Re===e||i.Oe?.has(e)?!1:i.Re?(i.Oe?i.Oe.add(e):i.Oe=new Set([i.Re,e]),i.Re=void 0,!0):(i.Re=e,!0)}function gd(i,e){return i.Re?i.Re!==e?!1:(i.Re=void 0,!0):i.Oe?.delete(e)?(i.Oe.size===1?(i.Re=i.Oe.values().next().value,i.Oe=void 0):i.Oe.size===0&&(i.Oe=void 0),!0):!1}function Lf(i){i.Re=void 0,i.Oe?.clear(),i.Oe=void 0}function Uo(i,e,t){if(!e){i.fe=null;return}if(t instanceof Ut&&t.source===e){i.fe=t;return}const n=i.fe;(!(n instanceof Ut)||n.source!==e)&&(i.fe=new Ut(e))}function Ja(i,e){for(let t=i.I;t!==null;t=t.h)e(t.p);for(let t=i.A;t!==null;t=t.N)for(let n=t.I;n!==null;n=n.h)e(n.p)}function xd(i){let e=!1;const t=new Set,n=r=>{if(t.has(r)||!gd(r,i))return;t.add(r),r.Ee=Dt;const s=r.Re??r.Oe?.values().next().value;if(s)Uo(r,s),Ji(r);else{if(r.Se&=~st,Uo(r),Ji(r),r.Ue){if(r.W===Is){const o=r;o.H||(o.H=!0,o.F.enqueue(Nn,o.M))}else{const o=r.O&wn?un:It;o.P>r.o&&(o.P=r.o),qo(r,o)}e=!0}r.Ue=!1}Ja(r,n)};Ja(i,n),e&&Ki()}function vd(i,e,t){const n=typeof e=="object"&&e!==null,r=n&&Nt(()=>e[Symbol.asyncIterator]),s=!r&&n&&Nt(()=>typeof e.then=="function");if(!s&&!r)return i.ye=null,e;i.ye=e;let o;const c=u=>{i.ye===e&&(bt.initTransition(ns(i)),Ql(i,u instanceof Ut?st:Xt,u),i.Ee=Dt)},f=(u,d)=>{if(i.ye!==e||i.O&(Lr|gs))return;bt.initTransition(ns(i));const a=!!(i.Se&on);Df(i);const l=vs(i);if(l&&l.k.delete(i),i.ee!==void 0)i.ee!==void 0&&i.ee!==_t?i.X=u:(i.J=u,Nr(i)),i.Ee=Dt;else if(l){const h=i.W,m=i.J,g=i.ke;(!h&&a||!g||!g(u,m))&&(i.J=u,i.Ee=Dt,i.xe&&Mn(i.xe,u),Nr(i,!0))}else Mn(i,()=>u);xd(i),Ki(),Ka(),d?.()};if(s){let u=!1,d=!0;if(e.then(a=>{d?(o=a,u=!0):f(a)},a=>{d||c(a)}),d=!1,!u)throw bt.initTransition(ns(i)),new Ut(it)}if(r){const u=e[Symbol.asyncIterator]();let d=!1,a=!1;$o(()=>{if(!a){a=!0;try{const m=u.return?.();m&&typeof m.then=="function"&&m.then(void 0,()=>{})}catch{}}});const l=()=>{let m,g=!1,_=!0;return u.next().then(p=>{if(_)m=p,g=!0,p.done&&(a=!0);else{if(i.ye!==e)return;p.done?(a=!0,Ki(),Ka()):f(p.value,l)}},p=>{!_&&i.ye===e&&(a=!0,c(p))}),_=!1,g&&!m.done?(o=m.value,d=!0,l()):g&&m.done},h=l();if(!d&&!h)throw bt.initTransition(ns(i)),new Ut(it)}return o}function Df(i,e=!1){Lf(i),i.Ue=!1,i.Se=e?0:i.Se&on,Uo(i),Ji(i),i.Ge?.()}function Ql(i,e,t,n,r){e===Xt&&!(t instanceof ja)&&!(t instanceof Ut)&&(t=new ja(i,t));const s=e===st&&t instanceof Ut?t.source:void 0,o=s===i,c=e===st&&i.ee!==void 0&&!o,f=c&&Yo(i);n||(e===st&&s?(_d(i,s),i.Se=st|i.Se&on,Uo(i,s,t)):(Lf(i),i.Se=e|(e!==Xt?i.Se&on:0),i.fe=t),Ji(i)),r&&!n&&Cf(i,r);const u=n||f,d=n||c?void 0:r;if(i.Ge){if(n&&e===st)return;u?i.Ge(e,t):i.Ge();return}Ja(i,a=>{a.Ee=Dt,(e===st&&s&&a.Re!==s&&!a.Oe?.has(s)||e!==st&&(a.fe!==t||a.Re||a.Oe))&&(!u&&!a.K&&bt.se.push(a),Ql(a,e,t,u,d))})}let yd=null;Qn.oe=ei;Qn.ue=Ds;let Yt=!1,Wi=!1,it=null,xn=null;function ei(i,e=!1){const t=i.W;e||(i.K&&(!t||We)&&We!==i.K&&bt.initTransition(i.K),Ls(i,i.O&wn?un:It),i.ye=null,i.K||t===Is?Ds(i):(Rf(i),i.we=i.Ve,i.ve=i.Ce,i.Ve=null,i.Ce=null,i.me=0));const n=!!(i.O&gs),r=i.ee!==void 0&&i.ee!==_t,s=!!(i.Se&st),o=!!(i.Se&on),c=it;it=i,i.ge=null,i.O=Xo,i.Ee=Dt;let f=i.X===_t?i.J:i.X,u=i.o,d=Yt,a=xn;if(Yt=!0,n){const l=vs(i);l&&(xn=l)}try{f=vd(i,i.L(f)),Df(i,e);const l=vs(i);l&&(l.k.delete(i),Ji(l.te))}catch(l){if(l instanceof Ut&&xn){const h=qt(xn);h.te!==i&&(h.k.add(i),i.q=h,Ji(h.te))}l instanceof Ut&&(i.Ue=!0),Ql(i,l instanceof Ut?st:Xt,l,void 0,l instanceof Ut?i.q:void 0)}finally{Yt=d,i.O=yf|(e?i.O&Kl:0),it=c}if(!i.fe){const l=i.ge;let h=l!==null?l.D:i.C;if(h!==null){do h=Jl(h);while(h!==null);l!==null?l.D=null:i.C=null}const m=r?i.ee:i.X===_t?i.J:i.X;if(!t&&o||!i.ke||!i.ke(m,f)){const _=r?i.ee:void 0;e||t&&We!==i.K||n?(i.J=f,r&&n&&(i.ee=f,i.X=f)):i.X=f,r&&!n&&s&&!i.he&&(i.ee=f),(!r||n||i.ee!==_)&&Nr(i,n||r)}else if(r)i.X=f;else if(i.o!=u)for(let _=i.I;_!==null;_=_.h)bf(_.p,_.p.O&wn?un:It)}xn=a,(!e||i.Se&st)&&!i.K&&!(We&&r)&&bt.se.push(i),i.K&&t&&We!==i.K&&cd(i.K,()=>ei(i))}function Nf(i){if(i.O&ls)for(let e=i.C;e;e=e.D){const t=e.m,n=t.V||t;if(n.L&&Nf(n),i.O&Lr)break}(i.O&(Lr|gs)||i.fe&&i.Ee<Dt&&!i.ye)&&ei(i),i.O=i.O&(Kl|Jn|_s)}function Hr(i,e,t){const n=t?.transparent??!1,r={id:t?.id??(n?it?.id:it?.id!=null?Pf(it):void 0),be:n||void 0,ke:t?.equals!=null?t.equals:Uf,le:!!t?.pureWrite,Ne:t?.unobserved,Ve:null,F:it?.F??bt,Le:it?.Le??Sf,me:0,L:i,J:e,o:0,A:null,S:void 0,T:null,C:null,ge:null,I:null,Ae:null,i:it,De:null,Ce:null,O:t?.lazy?Za:yf,Se:on,Ee:Dt,X:_t,we:null,ve:null,ye:null,K:null};r.T=r;const s=it?.t?it.u:it;if(it){const o=it.Ce;o===null||(r.De=o),it.Ce=r}return s&&(r.o=s.o+1),!t?.lazy&&ei(r,!0),r}function Ar(i,e,t=null){const n={ke:e?.equals!=null?e.equals:Uf,le:!!e?.pureWrite,He:!!e?.He,Ne:e?.unobserved,J:i,I:null,Ae:null,Ee:Dt,V:t,N:t?.A||null,X:_t};return t&&(t.A=n),n}function Uf(i,e){return i===e}function Nt(i,e){if(!Yt)return i();const t=Yt;Yt=!1;try{return i()}finally{Yt=t}}function vi(i){let e=it;e?.t&&(e=e.u),i.O&Za&&(i.O&=~Za,ei(i,!0));const t=i.V||i;if(e&&Yt&&(i.L&&i.O&Dr&&ei(i),zs(i,e),t.L)){const n=i.O&wn;t.o>=(n?un.P:It.P)&&(Lo(e),ed(n?un:It),Nf(t));const r=t.o;r>=e.o&&i.i!==e&&(e.o=r+1)}if(t.Se&st)if(e&&!(Wi&&t.K&&We!==t.K))if(xn){const n=t.q,r=qt(xn);if(n&&qt(n)===r&&!Yo(t))throw!Yt&&i!==e&&zs(i,e),t.fe}else throw!Yt&&i!==e&&zs(i,e),t.fe;else{if(e&&t!==i&&t.Se&on)throw!Yt&&i!==e&&zs(i,e),t.fe;if(!e&&t.Se&on)throw t.fe}if(i.L&&i.Se&Xt){if(i.Ee<Dt)return ei(i),vi(i);throw i.fe}return i.ee!==void 0&&i.ee!==_t?e&&Wi&&nd(i)?i.J:i.ee:!e||xn!==null&&(i.ee!==void 0||i.q||t===i&&Wi||t.Se&st)||i.X===_t||Wi&&i.K&&We!==i.K?i.J:i.X}function Mn(i,e){i.K&&We!==i.K&&bt.initTransition(i.K);const t=i.ee!==void 0&&!0,n=i.ee!==void 0&&i.ee!==_t,r=t?n?i.ee:i.J:i.X===_t?i.J:i.X;if(typeof e=="function"&&(e=e(r)),!(!i.ke||!i.ke(r,e)||!!(i.Se&on)))return t&&n&&i.L&&(Nr(i,!0),Ki()),e;if(t){const o=i.ee===_t;o||bt.initTransition(ns(i)),o&&(i.X=i.J,bt.Y.push(i)),i.he=!0;const c=ud(i);i.q=c,i.ee=e}else i.X===_t&&bt.se.push(i),i.X=e;return Ji(i),i.xe&&Mn(i.xe,e),i.Ee=Dt,Nr(i,t),Ki(),e}function Xi(i,e){const t=it,n=Yt;it=i,Yt=!1;try{return e()}finally{it=t,Yt=n}}function Sd(i){const e=i,t=i.V;if(t&&i.X!==_t)return!t.ye&&!(t.Se&st);if(i.ee!==void 0&&i.ee!==_t){if(e.Se&st&&!(e.Se&on))return!0;if(i._e){const n=i.q?qt(i.q):null;return!!(n&&n.k.size>0)}return!0}return i.ee!==void 0&&i.ee===_t&&!i._e?!1:i.X!==_t&&!(e.Se&on)?!0:!!(e.Se&st&&!(e.Se&on))}function Ji(i){if(i.Fe){const e=Sd(i),t=i.Fe;if(Mn(t,e),!e&&t.q){const n=vs(i);if(n&&n.k.size>0){const r=qt(t.q);r!==n&&Af(n,r)}No.delete(t),t.q=void 0}}}function Ff(i,e=!0){const t=Wi;Wi=e;try{return i()}finally{Wi=t}}function Of(i,e,t,n,r){let s=!1;const o=Hr(r?.render?c=>Ff(()=>i(c)):i,n,{...r,equals:()=>(o.H=!o.fe,s&&o.F.enqueue(o.W,ra.bind(o)),!1),lazy:!0});o.Qe=n,o.Me=e,o.je=t,o.$e=void 0,o.W=r?.render?wr:Nn,o.Ge=(c,f)=>{const u=c!==void 0?c:o.Se,d=f!==void 0?f:o.fe;if(u&Xt){let a=d;if(o.F.notify(o,st,0),o.W===Nn)try{return o.je?o.je(a,()=>{o.$e?.(),o.$e=void 0}):console.error(a)}catch(l){a=l}if(!o.F.notify(o,Xt,Xt))throw a}else o.W===wr&&o.F.notify(o,st|Xt,u,d)},ei(o,!0),!r?.defer&&(o.W===Nn?o.F.enqueue(o.W,ra.bind(o)):ra.call(o)),s=!0,$o(()=>o.$e?.())}function ra(){if(!(!this.H||this.O&Dr)){this.$e?.(),this.$e=void 0;try{const i=this.Me(this.J,this.Qe);this.$e=i}catch(i){if(this.fe=new ja(this,i),this.Se|=Xt,!this.F.notify(this,Xt,Xt))throw i}finally{this.Qe=this.J,this.H=!1}}}function bn(i){return $o(i)}function $i(i){const e=vi.bind(null,i);return e.$r=!0,e}function Md(i,e,t){if(typeof i=="function"){const r=Hr(i,e,t);return[$i(r),Mn.bind(null,r)]}const n=Ar(i,e);return[$i(n),Mn.bind(null,n)]}function ec(i,e,t){let n=Hr(i,e,t);return $i(n)}function bd(i,e,t,n){Of(i,e.effect||e,e.error,t,n)}function Ed(i,e,t,n){Of(i,e,void 0,t,{render:!0,...n})}const wd=Symbol(0);function Fc(i){return i!=null&&typeof i=="object"&&!Object.isFrozen(i)&&!(typeof Node<"u"&&i instanceof Node)}const Bf=Symbol(0);function is(i,e,t=0){let n,r=i;if(t<e.length-1){n=e[t];const o=typeof n,c=Array.isArray(i);if(Array.isArray(n)){for(let f=0;f<n.length;f++)e[t]=n[f],is(i,e,t);e[t]=n;return}else if(c&&o==="function"){for(let f=0;f<i.length;f++)n(i[f],f)&&(e[t]=f,is(i,e,t));e[t]=n;return}else if(c&&o==="object"){const{from:f=0,to:u=i.length-1,by:d=1}=n;for(let a=f;a<=u;a+=d)e[t]=a,is(i,e,t);e[t]=n;return}else if(t<e.length-2){is(i[n],e,t+1);return}r=i[n]}let s=e[e.length-1];if(!(typeof s=="function"&&(s=s(r),s===r))&&!(n===void 0&&s==null))if(s===Bf)delete i[n];else if(n===void 0||Fc(r)&&Fc(s)&&!Array.isArray(s)){const o=n!==void 0?i[n]:i,c=Object.keys(s);for(let f=0;f<c.length;f++){const u=c[f],d=Object.getOwnPropertyDescriptor(s,u);d.get||d.set?Object.defineProperty(o,u,d):o[u]=d.value}}else i[n]=s}Object.assign(function(...e){return t=>{is(t,e)}},{DELETE:Bf});function kf(i,e,t){const n=typeof t?.keyed=="function"?t.keyed:void 0,r=e.length>1,s=e;return ec(Td.bind({Ye:Tr(),Ze:0,Be:i,qe:[],Xe:s,ze:[],Je:[],et:n,tt:n||t?.keyed===!1?[]:void 0,nt:r?[]:void 0,it:t?.fallback}))}const sa={pureWrite:!0};function Td(){const i=this.Be()||[],e=i.length;return i[wd],Xi(this.Ye,()=>{let t,n,r=this.tt?()=>(this.tt[n]=Ar(i[n],sa),this.nt&&(this.nt[n]=Ar(n,sa)),this.Xe($i(this.tt[n]),this.nt?$i(this.nt[n]):void 0)):this.nt?()=>{const s=i[n];return this.nt[n]=Ar(n,sa),this.Xe(()=>s,$i(this.nt[n]))}:()=>{const s=i[n];return this.Xe(()=>s)};if(e===0)this.Ze!==0&&(this.Ye.dispose(!1),this.Je=[],this.qe=[],this.ze=[],this.Ze=0,this.tt&&(this.tt=[]),this.nt&&(this.nt=[])),this.it&&!this.ze[0]&&(this.ze[0]=Xi(this.Je[0]=Tr(),this.it));else if(this.Ze===0){for(this.Je[0]&&this.Je[0].dispose(),this.ze=new Array(e),n=0;n<e;n++)this.qe[n]=i[n],this.ze[n]=Xi(this.Je[n]=Tr(),r);this.Ze=e}else{let s,o,c,f,u,d,a,l=new Array(e),h=new Array(e),m=this.tt?new Array(e):void 0,g=this.nt?new Array(e):void 0;for(s=0,o=Math.min(this.Ze,e);s<o&&(this.qe[s]===i[s]||this.tt&&Oc(this.et,this.qe[s],i[s]));s++)this.tt&&Mn(this.tt[s],i[s]);for(o=this.Ze-1,c=e-1;o>=s&&c>=s&&(this.qe[o]===i[c]||this.tt&&Oc(this.et,this.qe[o],i[c]));o--,c--)l[c]=this.ze[o],h[c]=this.Je[o],m&&(m[c]=this.tt[o]),g&&(g[c]=this.nt[o]);for(d=new Map,a=new Array(c+1),n=c;n>=s;n--)f=i[n],u=this.et?this.et(f):f,t=d.get(u),a[n]=t===void 0?-1:t,d.set(u,n);for(t=s;t<=o;t++)f=this.qe[t],u=this.et?this.et(f):f,n=d.get(u),n!==void 0&&n!==-1?(l[n]=this.ze[t],h[n]=this.Je[t],m&&(m[n]=this.tt[t]),g&&(g[n]=this.nt[t]),n=a[n],d.set(u,n)):this.Je[t].dispose();for(n=s;n<e;n++)n in l?(this.ze[n]=l[n],this.Je[n]=h[n],m&&(this.tt[n]=m[n],Mn(this.tt[n],i[n])),g&&(this.nt[n]=g[n],Mn(this.nt[n],n))):this.ze[n]=Xi(this.Je[n]=Tr(),r);this.ze=this.ze.slice(0,this.Ze=e),this.qe=i.slice(0)}}),this.ze}function Oc(i,e,t){return i?i(e)===i(t):!0}function Ad(i,e){const t=Hr(i,void 0,{lazy:!0});return t.Ge=(n,r)=>{const s=n!==void 0?n:t.Se,o=r!==void 0?r:t.fe;t.Se&=~t.ut,t.F.notify(t,t.ut,s,o)},t.ut=e,t.Pe=!0,ei(t,!0),t}function Cd(i,e,t,n){const r=i.F;return r.addChild(i.F=t),$o(()=>r.removeChild(i.F)),Xi(i,()=>{const s=Hr(e);return Ad(()=>Ff(()=>tc(vi(s))),n)})}const Bc=Symbol();class Rd extends Ef{Nt;ct=new Set;Pt;lt=!0;ft=Ar(!1,{pureWrite:!0,He:!0});Et=Ar(!1,{pureWrite:!0,He:!0});Tt;St=!1;gt;Ct=Bc;constructor(e){super(),this.Nt=e}run(e){if(!(!e||vi(this.ft)))return super.run(e)}notify(e,t,n,r){if(!(t&this.Nt))return super.notify(e,t,n,r);if(this.St&&this.gt){const s=Nt(()=>{try{return this.gt()}catch{return Bc}});s!==this.Ct&&(this.Ct=s,this.St=!1,this.ct.clear())}if(this.Nt&st&&this.St)return super.notify(e,t,n,r);if(this.Nt&st&&n&Xt)return super.notify(e,Xt,n,r);if(n&this.Nt){this.lt=!0;const s=r?.source||e.fe?.source;if(s){const o=this.ct.size===0;this.ct.add(s),o&&Mn(this.ft,!0)}}return t&=~this.Nt,t?super.notify(e,t,n,r):!0}checkSources(){for(const e of this.ct)(e.O&Dr||!(e.Se&this.Nt)&&!(this.Nt&Xt&&e.Se&st))&&this.ct.delete(e);if(!this.ct.size&&(this.Nt&st&&this.lt&&!this.St&&this.Pt?this.lt=!!(this.Pt.Se&this.Nt):this.lt=!1,!this.lt&&(Mn(this.ft,!1),this.gt)))try{this.Ct=Nt(()=>this.gt())}catch{}}}function Pd(i,e,t,n){const r=Tr(),s=new Rd(i);n&&(s.gt=n);const o=s.Pt=Cd(r,e,s,i);Nt(()=>{let f=!1;try{vi(o)}catch(u){if(u instanceof Ut)f=!0;else throw u}s.lt=f||!!(o.Se&i)||o.fe instanceof Ut});const c=Hr(()=>{if(!vi(s.ft)){const f=vi(o);if(!Nt(()=>vi(s.ft)))return s.St=!0,f}return t(s)});return $i(c)}function Id(i,e,t){return Pd(st,i,()=>e(),t?.on)}function tc(i,e){if(typeof i=="function"&&!i.length){if(e?.doNotUnwrap)return i;do i=i();while(typeof i=="function"&&!i.length)}if(!(e?.skipNonRendered&&(i==null||i===!0||i===!1||i===""))){if(Array.isArray(i)){let t=[];return Qa(i,t,e)?()=>{let n=[];return Qa(t,n,{...e,doNotUnwrap:!1}),n}:t}return i}}function Qa(i,e=[],t){let n=null,r=!1;for(let s=0;s<i.length;s++)try{let o=i[s];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),r=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?r=Qa(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Ut))throw o;n=o}if(n)throw n;return r}const rt=(...i)=>ec(...i),ut=(...i)=>Md(...i),zf=(...i)=>Ed(...i),yi=(...i)=>bd(...i);function Ld(i){const e=i.on?{on:()=>i.on()}:void 0;return Id(()=>i.children,()=>i.fallback,e)}function ti(i,e){return Nt(()=>i(e||{}))}function Dd(i){const e="fallback"in i?{keyed:i.keyed,fallback:()=>i.fallback}:{keyed:i.keyed};return kf(()=>i.each,i.children,e)}const bi=(i,e,t)=>zf(i,e,t,{transparent:!0}),jo=(i,e)=>e?i.$r?i:ec(()=>i(),void 0,{transparent:!0}):rt(()=>i());function Nd(i,e,t){let n=t.length,r=e.length,s=n,o=0,c=0,f=e[r-1].nextSibling,u=null;for(;o<r||c<s;){if(e[o]===t[c]){o++,c++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const d=s<n?c?t[c-1].nextSibling:t[s-c]:f;for(;c<s;)i.insertBefore(t[c++],d)}else if(s===c)for(;o<r;)(!u||!u.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[c]===e[r-1]){const d=e[--r].nextSibling;i.insertBefore(t[c++],e[o++].nextSibling),i.insertBefore(t[--s],d),e[r]=t[s]}else{if(!u){u=new Map;let a=c;for(;a<s;)u.set(t[a],a++)}const d=u.get(e[o]);if(d!=null)if(c<d&&d<s){let a=o,l=1,h;for(;++a<r&&a<s&&!((h=u.get(e[a]))==null||h!==d+l);)l++;if(l>d-c){const m=e[o];for(;c<d;)i.insertBefore(t[c++],m)}else i.replaceChild(t[c++],e[o++])}else o++;else e[o++].remove()}}}const kc="_$DX_DELEGATE";function Ud(i,e,t,n={}){let r;return If(s=>{r=s,e===document?tc(i):Ur(e,i(),e.firstChild?null:void 0,t)},{id:n.renderId}),()=>{r(),e.textContent=""}}function hn(i,e,t,n){let r;const s=c=>{const f=document.createElement("template");return f.innerHTML=i,f.content.firstChild};return c=>(r||(r=s())).cloneNode(!0)}function Zo(i,e=window.document){const t=e[kc]||(e[kc]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];t.has(s)||(t.add(s),e.addEventListener(s,Od))}}function oa(i,e,t,n){if(e==null||e===!1){n&&i.removeAttribute("class");return}if(typeof e=="string"){e!==n&&(t?i.setAttribute("class",e):i.className=e);return}typeof n=="string"?(n={},i.removeAttribute("class")):n=Vc(n||{}),e=Vc(e);const r=Object.keys(e||{}),s=Object.keys(n);let o,c;for(o=0,c=s.length;o<c;o++){const f=s[o];!f||f==="undefined"||e[f]||zc(i,f,!1)}for(o=0,c=r.length;o<c;o++){const f=r[o],u=!!e[f];!f||f==="undefined"||n[f]===u||!u||zc(i,f,!0)}}function pt(i,e,t){t!=null?i.style.setProperty(e,t):i.style.removeProperty(e)}function Fd(i,e){Array.isArray(i)?i.flat(1/0).forEach(t=>t&&t(e)):i(e)}function ys(i,e){const t=Nt(i);Xi(null,()=>Fd(t,e))}function Ur(i,e,t,n){const r=t!==void 0;if(r&&!n&&(n=[]),typeof e!="function"&&(e=Hc(e,n,r,!0),typeof e!="function"))return Gc(i,e,n,t);if(e=jo(e,!0),r&&n.length===0){const s=document.createTextNode("");i.insertBefore(s,t),n=[s]}bi(s=>Hc(e,s,r),(s,o)=>Gc(i,s,o,t),n)}function zc(i,e,t){const n=e.trim().split(/\s+/);for(let r=0,s=n.length;r<s;r++)i.classList.toggle(n[r],t)}function Vc(i){if(Array.isArray(i)){const e={};return Vf(i,e),e}return i}function Vf(i,e){for(let t=0,n=i.length;t<n;t++){const r=i[t];Array.isArray(r)?Vf(r,e):typeof r=="object"&&r!=null?Object.assign(e,r):(r||r===0)&&(e[r]=!0)}}function Od(i){let e=i.target;const t=`$$${i.type}`,n=i.target,r=i.currentTarget,s=f=>Object.defineProperty(i,"target",{configurable:!0,value:f}),o=()=>{const f=e[t];if(f&&!e.disabled){const u=e[`${t}Data`];if(u!==void 0?f.call(e,u,i):f.call(e,i),i.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(i.target)&&s(e.host),!0},c=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),i.composedPath){const f=i.composedPath();s(f[0]);for(let u=0;u<f.length-2&&(e=f[u],!!o());u++){if(e._$host){e=e._$host,c();break}if(e.parentNode===r)break}}else c();s(n)}function Gc(i,e,t,n){if(e===t)return;const r=typeof e,s=n!==void 0;if(r==="string"||r==="number"){const o=typeof t;o==="string"||o==="number"?i.firstChild.data=e:i.textContent=e}else if(e===void 0)Vs(i,t,n);else if(e.nodeType)Array.isArray(t)?Vs(i,t,s?n:null,e):t===void 0||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?Vs(i,t,n):o?t.length===0?Wc(i,e,n):Nd(i,t,e):(t&&Vs(i),Wc(i,e))}}function Hc(i,e,t,n){if(i=tc(i,{skipNonRendered:!0,doNotUnwrap:n}),n&&typeof i=="function")return i;if(t&&!Array.isArray(i)&&(i=[i??""]),Array.isArray(i))for(let r=0,s=i.length;r<s;r++){const o=i[r],c=e&&e[r],f=typeof o;(f==="string"||f==="number")&&(i[r]=c&&c.nodeType===3&&c.data===""+o?c:document.createTextNode(o))}return i}function Wc(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function Vs(i,e,t,n){if(t===void 0)return i.textContent="";if(e.length){let r=!1;for(let s=e.length-1;s>=0;s--){const o=e[s];if(n!==o){const c=o.parentNode===i;n&&!r&&!s?c?i.replaceChild(n,o):i.insertBefore(n,t):c&&o.remove()}else r=!0}}else n&&i.insertBefore(n,t)}function Bd(...i){return Ud(...i)}class kd extends Error{constructor(e,t,n){super(e),this.is_operational=t,this.context=n,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Gf=(i=>(i.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",i.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",i.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",i.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",i.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",i.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",i.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",i.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",i))(Gf||{});class zd extends kd{constructor(e,t,n){super(t??e,!0,n),this.category=e}}function Ns(i,e,t){return i}const Cn=-1,gn=-1,cs=Object.freeze(Object.create(null)),Bi=5,ki=31,Vd=2166136261,Gd=16777619,Hd=2654435769,Wd=1367130551,ai=16,Xc=2,Hf=1024,Gs=0,qc=0,Xd=31,qd=1/60,Yd=4,$d=0,jd=4;class ni{_words;constructor(e){this._words=e??new Array(jd).fill(0)}has(e){const t=e>>>Bi;return t>=this._words.length?!1:(this._words[t]&1<<(e&ki))!==0}set(e){const t=e>>>Bi;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&ki)}clear(e){const t=e>>>Bi;t>=this._words.length||(this._words[t]&=~(1<<(e&ki)))}overlaps(e){const t=this._words,n=e._words,r=t.length<n.length?t.length:n.length;for(let s=0;s<r;s++)if((t[s]&n[s])!==0)return!0;return!1}contains(e){const t=e._words,n=this._words,r=n.length;for(let s=0;s<t.length;s++){const o=t[s];if(o!==0&&(s>=r||(n[s]&o)!==o))return!1}return!0}equals(e){const t=this._words,n=e._words,r=t.length>n.length?t.length:n.length;for(let s=0;s<r;s++){const o=s<t.length?t[s]:0,c=s<n.length?n[s]:0;if(o!==c)return!1}return!0}copy(){return new ni(this._words.slice())}copy_with_set(e){const t=e>>>Bi,n=t+1,r=this._words.length>n?this._words.length:n,s=new Array(r).fill(0);for(let o=0;o<this._words.length;o++)s[o]=this._words[o];return s[t]|=1<<(e&ki),new ni(s)}copy_with_clear(e){const t=this._words.slice(),n=e>>>Bi;return n<t.length&&(t[n]&=~(1<<(e&ki))),new ni(t)}hash(){let e=Vd;const t=this._words;let n=t.length-1;for(;n>=0&&t[n]===0;)n--;for(let r=0;r<=n;r++)e^=t[r],e=Math.imul(e,Gd);return e}for_each(e){const t=this._words;for(let n=0;n<t.length;n++){let r=t[n];if(r===0)continue;const s=n<<Bi;for(;r!==0;){const o=r&-r>>>0,c=ki-Math.clz32(o);e(s+c),r^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const n=new Array(t).fill(0);for(let r=0;r<this._words.length;r++)n[r]=this._words[r];this._words=n}}class Ci{constructor(e,t=ai){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,n=this._len;return{next(){return e<n?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=Xc;const n=new this._ctor(t);n.set(this._buf.subarray(0,this._len)),this._buf=n}bulk_append(e,t,n){this.ensure_capacity(this._len+n),this._buf.set(e.subarray(t,t+n),this._len),this._len+=n}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*Xc);e.set(this._buf),this._buf=e}}class Zd extends Ci{constructor(e=ai){super(Float32Array,e)}}class Kd extends Ci{constructor(e=ai){super(Float64Array,e)}}class Jd extends Ci{constructor(e=ai){super(Int8Array,e)}}class Qd extends Ci{constructor(e=ai){super(Int16Array,e)}}class ep extends Ci{constructor(e=ai){super(Int32Array,e)}}class tp extends Ci{constructor(e=ai){super(Uint8Array,e)}}class np extends Ci{constructor(e=ai){super(Uint16Array,e)}}class Wf extends Ci{constructor(e=ai){super(Uint32Array,e)}}const ip={f32:Zd,f64:Kd,i8:Jd,i16:Qd,i32:ep,u8:tp,u16:np,u32:Wf},ji=20,bo=(1<<ji)-1,rp=Xd-ji,Yc=(1<<rp)-1,sp=(i,e)=>e<<ji|i,en=i=>i&bo,$c=i=>i>>ji,op=i=>Ns(i),ap=i=>Ns(i);class lp{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let n=0;n<e.length;n++)this.columns.push([]);const t={length:0};for(let n=0;n<e.length;n++)t[e[n]]=this.columns[n];this.reader=t}emit(e){const t=this.field_names,n=this.columns;for(let r=0;r<t.length;r++)n[r].push(e[t[r]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const cp=i=>Ns(i);class up{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let s=0;s<e.length;s++)this.field_index[e[s]]=s,this.columns.push([t[e[s]]??0]);const n=Object.create(null),r=this.columns;for(let s=0;s<e.length;s++){const o=r[s];Object.defineProperty(n,e[s],{get(){return o[Gs]},enumerable:!0})}this.reader=n}write(e){const t=this.field_names,n=this.columns;for(let r=0;r<t.length;r++)t[r]in e&&(n[r][Gs]=e[t[r]])}read_field(e){return this.columns[e][Gs]}write_field(e,t){this.columns[e][Gs]=t}}const fp=i=>Ns(i);class hp{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,n,r=Hf){if(this.id=e,this.mask=t,this._entity_ids=new Wf(r),n){let s=0;for(let o=0;o<n.length;o++){const c=n[o],f=c.component_id,u=new Array(c.field_names.length);this._col_offset[f]=s,this._field_count[f]=c.field_names.length,this._field_index[f]=c.field_index,this._field_names[f]=c.field_names;for(let d=0;d<c.field_names.length;d++){const a=new ip[c.field_types[d]](r);u[d]=a,this._flat_columns[s++]=a}this.column_groups[f]={layout:c,columns:u},this._column_ids.push(f)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const n=e,r=this._field_index[n][t];return this._flat_columns[this._col_offset[n]+r].buf}write_fields(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return;const o=this._field_names[r],c=this._flat_columns;for(let f=0;f<o.length;f++)c[s+f].buf[e]=n[o[f]]}write_fields_positional(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return;const o=this._flat_columns;for(let c=0;c<n.length;c++)o[s+c].buf[e]=n[c]}read_field(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return NaN;const o=this._field_index[r][n];return o===void 0?NaN:this._flat_columns[s+o].buf[e]}copy_shared_from(e,t,n){const r=e._col_offset,s=e._field_count,o=e._flat_columns,c=this._flat_columns,f=this._column_ids;for(let u=0;u<f.length;u++){const d=f[u],a=r[d];if(a===void 0)continue;const l=this._col_offset[d],h=s[d];for(let m=0;m<h;m++)c[l+m].buf[n]=o[a+m].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const n=this._flat_columns;for(let r=0;r<n.length;r++)n[r].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let n=gn;const r=this._flat_columns,s=this._entity_ids.buf;if(e!==t){s[e]=s[t],n=en(s[e]);for(let o=0;o<r.length;o++)r[o].swap_remove(e)}else for(let o=0;o<r.length;o++)r[o].pop();return this._entity_ids.pop(),this.length--,n}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let n=gn;const r=this._entity_ids.buf;return e!==t&&(r[e]=r[t],n=en(r[e])),this._entity_ids.pop(),this.length--,n}move_entity_from(e,t,n,r){const s=this.length;this._entity_ids.push(n);const o=this._flat_columns,c=e._flat_columns;for(let u=0;u<o.length;u++){const d=r[u];o[u].push(d>=0?c[d].buf[t]:0)}this.length++;const f=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);xt[0]=s,xt[1]=f}move_entity_from_tag(e,t,n){const r=this.length;this._entity_ids.push(n),this.length++;const s=e.remove_entity_tag(t);xt[0]=r,xt[1]=s}bulk_move_all_from(e,t){const n=e.length;if(n===0)return this.length;const r=this.length,s=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,n);for(let c=0;c<s.length;c++){const f=t[c];f>=0?s[c].bulk_append(o[f].buf,0,n):s[c].bulk_append_zeroes(n)}this.length+=n,e.length=0,e._entity_ids.clear();for(let c=0;c<o.length;c++)o[c].clear();return r}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const xt=[0,gn];function Hs(i,e){const t=e._flat_columns,n=new Int16Array(t.length),r=e._column_ids,s=i._col_offset,o=e._col_offset,c=e._field_count;for(let f=0;f<r.length;f++){const u=r[f],d=o[u],a=c[u],l=s[u];if(l!==void 0)for(let h=0;h<a;h++)n[d+h]=l+h;else for(let h=0;h<a;h++)n[d+h]=-1}return n}function Xf(i,e,t){const n=i.get(e);n!==void 0?n.push(t):i.set(e,[t])}class dp{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Hf,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ni)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),n=this.archetype_map.get(t);if(n!==void 0){for(let f=0;f<n.length;f++)if(this.archetypes[n[f]].mask.equals(e))return n[f]}const r=fp(this.next_archetype_id++),s=[];e.for_each(f=>{const u=f,d=this.component_metas[u];d&&d.field_names.length>0&&s.push({component_id:u,field_names:d.field_names,field_index:d.field_index,field_types:d.field_types})});const o=new hp(r,e,s,this.initial_capacity);this.archetypes.push(o),Xf(this.archetype_map,t,r),e.for_each(f=>{const u=f;let d=this.component_index.get(u);d||(d=new Set,this.component_index.set(u,d)),d.add(r)});const c=this.registered_queries;for(let f=0;f<c.length;f++){const u=c[f];o.matches(u.include_mask)&&(!u.exclude_mask||!o.mask.overlaps(u.exclude_mask))&&(!u.any_of_mask||o.mask.overlaps(u.any_of_mask))&&u.result.push(o)}return r}arch_resolve_add(e,t){const n=this.arch_get(e);if(n.mask.has(t))return e;const r=n.get_edge(t);if(r?.add!=null)return r.add;const s=this.arch_get_or_create_from_mask(n.mask.copy_with_set(t));return this.arch_cache_edge(n,this.arch_get(s),t),s}arch_resolve_remove(e,t){const n=this.arch_get(e);if(!n.mask.has(t))return e;const r=n.get_edge(t);if(r?.remove!=null)return r.remove;const s=this.arch_get_or_create_from_mask(n.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(s),n,t),s}arch_cache_edge(e,t,n){const r=e.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};r.add=t.id,r.add_map=Hs(e,t),e.set_edge(n,r);const s=t.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};s.remove=e.id,s.remove_map=Hs(t,e),t.set_edge(n,s)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=qc,t=qc),this.entity_alive_count++;const n=sp(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Cn,n}destroy_entity(e){if(!this.is_alive(e))return;const t=en(e),n=this.entity_row[t];if(n!==Cn){const s=this.arch_get(this.entity_archetype[t]).remove_entity(n);s!==gn&&(this.entity_row[s]=n)}this.entity_archetype[t]=Cn,this.entity_row[t]=Cn;const r=$c(e);this.entity_generations[t]=r+1&Yc,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=en(e);return t<this.entity_high_water&&this.entity_generations[t]===$c(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,n=this.entity_row,r=this.entity_generations,s=this.archetypes,o=this.entity_high_water;for(let c=0;c<e.length;c++){const f=e[c],u=f&bo,d=f>>ji;if(u>=o||r[u]!==d)continue;const a=n[u];if(a!==Cn){const l=s[t[u]],h=l.has_columns?l.remove_entity(a):l.remove_entity_tag(a);h!==gn&&(n[h]=a)}t[u]=Cn,n[u]=Cn,r[u]=d+1&Yc,this.entity_free_indices.push(u),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,n){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(n??cs)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,n=this.pending_add_values,r=e.length,s=this.entity_archetype,o=this.entity_row,c=this.entity_generations,f=this.archetypes,u=this.component_metas,d=this.entity_high_water;for(let a=0;a<r;a++){const l=e[a],h=l&bo,m=l>>ji;if(h>=d||c[h]!==m)continue;const g=s[h],_=t[a],p=f[g];if(p.mask.has(_)){u[_].field_names.length>0&&p.write_fields(o[h],_,n[a]);continue}const y=this.arch_resolve_add(g,_),v=f[y],S=o[h],A=!v.has_columns&&!p.has_columns;let M;if(S!==Cn){if(A)v.move_entity_from_tag(p,S,l);else{const R=p.get_edge(_);v.move_entity_from(p,S,l,R.add_map)}M=xt[0],xt[1]!==gn&&(o[xt[1]]=S)}else M=A?v.add_entity_tag(l):v.add_entity(l);u[_].field_names.length>0&&v.write_fields(M,_,n[a]),s[h]=y,o[h]=M}e.length=0,t.length=0,n.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,n=e.length,r=this.entity_archetype,s=this.entity_row,o=this.entity_generations,c=this.archetypes,f=this.entity_high_water;for(let u=0;u<n;u++){const d=e[u],a=d&bo,l=d>>ji;if(a>=f||o[a]!==l)continue;const h=r[a],m=t[u],g=c[h];if(!g.mask.has(m))continue;const _=this.arch_resolve_remove(h,m),p=c[_],y=s[a];if(!p.has_columns&&!g.has_columns)p.move_entity_from_tag(g,y,d);else{const v=g.get_edge(m);p.move_entity_from(g,y,d,v.remove_map)}xt[1]!==gn&&(s[xt[1]]=y),r[a]=_,s[a]=xt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=op(this.component_count++),n=Object.keys(e),r=new Array(n.length),s=Object.create(null);for(let o=0;o<n.length;o++)s[n[o]]=o,r[o]=e[n[o]];return this.component_metas.push({field_names:n,field_index:s,field_types:r}),t}add_component(e,t,n){if(!this.is_alive(e))return;const r=en(e),s=this.entity_archetype[r],o=this.arch_get(s);if(o.has_component(t)){o.write_fields(this.entity_row[r],t,n);return}const c=this.arch_resolve_add(s,t),f=this.arch_get(c),u=this.entity_row[r];let d;if(u!==Cn){const a=o.get_edge(t);!f.has_columns&&!o.has_columns?f.move_entity_from_tag(o,u,e):f.move_entity_from(o,u,e,a.add_map),d=xt[0],xt[1]!==gn&&(this.entity_row[xt[1]]=u)}else d=f.has_columns?f.add_entity(e):f.add_entity_tag(e);f.write_fields(d,t,n),this.entity_archetype[r]=c,this.entity_row[r]=d}add_components(e,t){if(!this.is_alive(e))return;const n=en(e),r=this.entity_archetype[n];let s=r;for(let o=0;o<t.length;o++)s=this.arch_resolve_add(s,t[o].def);if(s!==r){const o=this.arch_get(r),c=this.arch_get(s),f=this.entity_row[n];let u;if(f!==Cn){const d=Hs(o,c);c.move_entity_from(o,f,e,d),u=xt[0],xt[1]!==gn&&(this.entity_row[xt[1]]=f)}else u=c.add_entity(e);for(let d=0;d<t.length;d++)c.write_fields(u,t[d].def,t[d].values??cs);this.entity_archetype[n]=s,this.entity_row[n]=u}else{const o=this.arch_get(r),c=this.entity_row[n];for(let f=0;f<t.length;f++)o.write_fields(c,t[f].def,t[f].values??cs)}}remove_component(e,t){if(!this.is_alive(e))return;const n=en(e),r=this.entity_archetype[n],s=this.arch_get(r);if(!s.has_component(t))return;const o=this.arch_resolve_remove(r,t),c=this.arch_get(o),f=this.entity_row[n],u=s.get_edge(t);!c.has_columns&&!s.has_columns?c.move_entity_from_tag(s,f,e):c.move_entity_from(s,f,e,u.remove_map),xt[1]!==gn&&(this.entity_row[xt[1]]=f),this.entity_archetype[n]=o,this.entity_row[n]=xt[0]}remove_components(e,t){if(!this.is_alive(e))return;const n=en(e),r=this.entity_archetype[n];let s=r;for(let d=0;d<t.length;d++)s=this.arch_resolve_remove(s,t[d]);if(s===r)return;const o=this.arch_get(r),c=this.arch_get(s),f=this.entity_row[n],u=Hs(o,c);c.move_entity_from(o,f,e,u),xt[1]!==gn&&(this.entity_row[xt[1]]=f),this.entity_archetype[n]=s,this.entity_row[n]=xt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const n=en(e);return this.arch_get(this.entity_archetype[n]).has_component(t)}batch_add_component(e,t,n){if(e.length===0)return;const r=t;if(e.mask.has(r))return;const s=this.arch_resolve_add(e.id,r),o=this.arch_get(s),c=e.get_edge(r),f=e.length,u=this.entity_archetype,d=this.entity_row,a=o.bulk_move_all_from(e,c.add_map);for(let l=0;l<f;l++){const h=en(o.entity_ids[a+l]);u[h]=s,d[h]=a+l}if(this.component_metas[r].field_names.length>0&&n)for(let l=0;l<f;l++)o.write_fields(a+l,r,n)}batch_remove_component(e,t){if(e.length===0)return;const n=t;if(!e.mask.has(n))return;const r=this.arch_resolve_remove(e.id,n),s=this.arch_get(r),o=e.get_edge(n),c=e.length,f=s.bulk_move_all_from(e,o.remove_map),u=this.entity_archetype,d=this.entity_row;for(let a=0;a<c;a++){const l=en(s.entity_ids[f+a]);u[l]=r,d[l]=f+a}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[en(e)])}get_entity_row(e){return this.entity_row[en(e)]}get_matching_archetypes(e,t,n){const r=e._words;let s=!1;for(let u=0;u<r.length;u++)if(r[u]!==0){s=!0;break}if(!s)return this.archetypes.filter(u=>(!t||!u.mask.overlaps(t))&&(!n||u.mask.overlaps(n)));let o,c=!1;for(let u=0;u<r.length;u++){let d=r[u];if(d===0)continue;const a=u<<Bi;for(;d!==0;){const l=d&-d>>>0,h=a+(ki-Math.clz32(l));d^=l;const m=this.component_index.get(h);if(!m||m.size===0){c=!0;break}(!o||m.size<o.size)&&(o=m)}if(c)break}if(c||!o)return[];const f=[];for(const u of o){const d=this.arch_get(u);d.matches(e)&&(!t||!d.mask.overlaps(t))&&(!n||d.mask.overlaps(n))&&f.push(d)}return f}register_query(e,t,n){const r=this.get_matching_archetypes(e,t,n);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:n?n.copy():null,result:r}),r}get archetype_count(){return this.archetypes.length}register_event(e){const t=ap(this.event_count++),n=new lp(e);return this.event_channels.push(n),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const n=cp(this.resource_count++),r=new up(e,t);return this.resource_channels.push(r),n}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const aa=["PRE_STARTUP","STARTUP","POST_STARTUP"],la=["PRE_UPDATE","UPDATE","POST_UPDATE"];class pp{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<aa.length;e++)this.label_systems.set(aa[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<la.length;e++)this.label_systems.set(la[e],[])}add_systems(e,...t){for(const n of t){const r="system"in n?n.system:n,s="system"in n?n.ordering:void 0,o={descriptor:r,insertion_order:this.next_insertion_order++,before:new Set(s?.before??[]),after:new Set(s?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(r,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const n=this.label_systems.get(t),r=n.findIndex(s=>s.descriptor===e);if(r!==-1){const s=n.length-1;r!==s&&(n[r]=n[s]),n.pop();for(const o of n)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of aa)this.run_label(t,e,$d)}run_update(e,t){for(const n of la)this.run_label(n,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const n of t)e.push(n.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,n){const r=this.get_sorted(e);for(let s=0;s<r.length;s++)r[s].fn(t,n);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const n=this.label_systems.get(e),r=this.topological_sort(n,e);return this.sorted_cache.set(e,r),r}topological_sort(e,t){if(e.length===0)return[];const n=new Map,r=new Map,s=new Map,o=new Set;for(const u of e)n.set(u.descriptor,new Set),r.set(u.descriptor,0),s.set(u.descriptor,u.insertion_order),o.add(u.descriptor);for(const u of e){for(const d of u.before)o.has(d)&&(n.get(u.descriptor).add(d),r.set(d,r.get(d)+1));for(const d of u.after)o.has(d)&&(n.get(d).add(u.descriptor),r.set(u.descriptor,r.get(u.descriptor)+1))}let c=[];for(const u of e)r.get(u.descriptor)===0&&c.push(u.descriptor);c.sort((u,d)=>s.get(d)-s.get(u));const f=[];for(;c.length>0;){const u=c.pop();f.push(u);for(const d of n.get(u)){const a=r.get(d)-1;r.set(d,a),a===0&&c.push(d)}c.sort((d,a)=>s.get(a)-s.get(d))}if(f.length!==e.length){const u=new Set(f),d=e.filter(a=>!u.has(a.descriptor)).map(a=>a.descriptor.name??`system_${a.descriptor.id}`);throw new zd(Gf.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${d.join(", ")}]`)}return f}}const jc=new WeakMap;function mp(i,e){let t=jc.get(i);if(!t){t=Object.create(null);const{field_names:s}=i.layout;for(let o=0;o<s.length;o++){const c=o;Object.defineProperty(t,s[o],{get(){return this._columns[c][this._row]},set(f){this._columns[c][this._row]=f},enumerable:!0,configurable:!1})}jc.set(i,t)}const n=Object.create(t),r=new Array(i.columns.length);for(let s=0;s<i.columns.length;s++)r[s]=i.columns[s].buf;return n._columns=r,n._row=e,n}class _p{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,n,r,s,o){this._archetypes=e,this._defs=t,this._resolver=n,this._include=r,this._exclude=s,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let n=0;n<e.length;n++)t+=e[n].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),n=this._defs.slice();for(let r=0;r<e.length;r++)t.has(e[r])||(t.set(e[r]),n.push(e[r]));return this._resolver._resolve_query(t,this._exclude,this._any_of,n)}not(...e){const t=this._exclude?this._exclude.copy():new ni;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new ni;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class gp{constructor(e){this._resolver=e}every(...e){const t=new ni;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(t,null,null,e)}}class xp{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,n){const r=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return r.read_field(s,t,n)}set_field(e,t,n,r){const s=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),c=s.get_column(t,n);c[o]=r}ref(e,t){const n=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return mp(n.column_groups[e],r)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,n){return this.store.add_component_deferred(e,t,n??cs),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const vp=i=>Ns(i);class yp{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ni;constructor(e){this.store=new dp(e?.initial_capacity),this.schedule=new pp,this.ctx=new xp(this.store),this._fixed_timestep=e?.fixed_timestep??qd,this._max_fixed_steps=e?.max_fixed_steps??Yd}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const n=t??"f64",r=Object.create(null);for(const s of e)r[s]=n;return this.store.register_component(r)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,n){return this.store.add_component(e,t,n??cs),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,n){this.store.batch_add_component(e,t,n)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,n){const r=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return r.read_field(s,t,n)}set_field(e,t,n,r){const s=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),c=s.get_column(t,n);c[o]=r}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,n,r){const s=e.hash(),o=t?t.hash():0,c=n?n.hash():0,f=s^Math.imul(o,Hd)^Math.imul(c,Wd)|0,u=this._find_cached(f,e,t,n);if(u!==void 0)return u.query;const d=this.store.register_query(e,t??void 0,n??void 0),a=new _p(d,r,this,e.copy(),t?.copy()??null,n?.copy()??null);return Xf(this.query_cache,f,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:n?.copy()??null,query:a}),a}_find_cached(e,t,n,r){const s=this.query_cache.get(e);if(s)for(let o=0;o<s.length;o++){const c=s[o];if(!(!c.include_mask.equals(t)||!(n===null?c.exclude_mask===null:c.exclude_mask!==null&&c.exclude_mask.equals(n))||!(r===null?c.any_of_mask===null:c.any_of_mask!==null&&c.any_of_mask.equals(r))))return c}}register_system(e,t){let n;if(typeof e=="function")if(t!==void 0){const o=t(new gp(this)),c=this.ctx,f=e;n={fn:(u,d)=>f(o,c,d)}}else n={fn:e};else n=e;const r=vp(this.next_system_id++),s=Object.freeze(Object.assign({id:r},n));return this.systems.add(s),s}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Sp{#e=new Map;track(e){if(sn()==null)return;let t=this.#e.get(e);t===void 0?(t={signal:ut(0,{pureWrite:!0}),refCount:1},this.#e.set(e,t)):t.refCount++,bn(()=>{t.refCount--,t.refCount===0&&queueMicrotask(()=>{t.refCount===0&&this.#e.delete(e)})}),t.signal[0]()}dirty(e){let t=this.#e.get(e);t!==void 0&&t.signal[1](n=>n^1)}}class el{#e;#n;#t;#r;#i=0;#s;constructor(e,t,n,r,s){this.#t=e,this.#r=t,this.#e=n,this.#n=r,this.#s=s}get value(){if(this.#t.track(this.#r),sn()!==null){this.#i++;let t=!1;bn(()=>{if(t){console.warn("onCleanup overexecuted");return}t=!0,this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&this.#s?.()})})}return this.#e()}dirty(){this.#n()}}class Mp{#e;#n;#t;#r;#i;constructor(e,t,n){this.#e=e,this.#n=t,this.#t=n,this.#i=`resource:${t.toString()}`,this.#r=new Map}get resourceKey(){return this.#i}#s(e){if(sn()===null)return this.#t[e];const n=`${this.#i}:${e}`;let r=this.#r.get(e);return r===void 0&&(r=new el(this.#e,n,()=>this.#t[e],()=>this.#e.dirty(n),()=>{this.#r.delete(e)}),this.#r.set(e,r)),r.value}get delta(){return this.#s("delta")}get elapsed(){return this.#s("elapsed")}get(e){return this.#s(e)}}class bp{#e;#n;#t;#r;#i;constructor(e,t,n){this.#e=e,this.#n=t,this.#t=n,this.#r=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(sn()===null)return this.#n.has_component(this.#t,e);const n=`entity:${this.#t}:has:${e}`;let r=this.#r.get(n);return r===void 0&&(r=new el(this.#e,n,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(n),()=>{this.#r.delete(n)}),this.#r.set(n,r)),r.value}getField(e,t){if(sn()===null)return this.#n.get_field(this.#t,e,t);const r=`entity:${this.#t}:${e}:${t}`;let s=this.#i.get(r);return s===void 0&&(s=new el(this.#e,r,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(r),()=>{this.#i.delete(r)}),this.#i.set(r,s)),s.value}}class us{#e;#n;#t;#r;#i;constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=n,this.#i=r,this.#t=t.query(...n)}get queryKey(){return this.#i}get archetype_count(){return sn()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return sn()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return sn()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=sn();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new Ep(this.#e,this.#n,t,this.#i)}and(...e){return new us(this.#e,this.#n,[...this.#r,...e],`${this.#i}:and`)}not(...e){return new us(this.#e,this.#n,this.#r,`${this.#i}:not`)}any_of(...e){return new us(this.#e,this.#n,this.#r,`${this.#i}:any_of`)}}class Ep{#e;#n;#t;#r;constructor(e,t,n,r){this.#e=e,this.#n=t,this.#t=n,this.#r=r}get entity_ids(){if(sn()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(sn()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(sn()===null)return this.#t.has_component(e);const n=`arch:${this.#t.id}:has:${e}`;return this.#e.track(n),this.#t.has_component(e)}get_column(e,t){if(sn()===null)return this.#t.get_column(e,t);const r=`arch:${this.#t.id}:col`;return this.#e.track(r),this.#t.get_column(e,t)}}class wp{#e;#n;constructor(e){this.#e=e,this.#n=new Sp}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(n=>n.toString()).join(",")}`;return new us(this.#n,this.#e,e,t)}resource(e){return new Mp(this.#n,e,this.#e.resource(e))}entity(e){return new bp(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return Nt(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),Nt(()=>this.#n.dirty("world:entities"))}add_component(e,t,n){const r=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,n),Nt(()=>{this.#n.dirty(r),this.#n.dirty("world:entities")}),this}remove_component(e,t){const n=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),Nt(()=>{this.#n.dirty(n),this.#n.dirty("world:entities")}),this}set_field(e,t,n,r){const s=`entity:${e}:${t}:${n}`;this.#e.set_field(e,t,n,r),Nt(()=>this.#n.dirty(s))}set_resource(e,t){const n=this.#e.resource(e);this.#e.set_resource(e,t);for(const r of Object.keys(n))this.#n.dirty(`resource:${e.toString()}:${r}`)}}const Tp={def:{x:"f64",y:"f64",z:"f64"}},Ap={def:{x:"f64",y:"f64",z:"f64"}},Cp={def:{x:"f64",y:"f64",z:"f64",w:"f64"}},Rp={def:{playerType:"u8",facingForward:"u8"}},Pp={def:[]},Ip={def:{meshId:"u32"}},Lp={def:{speed:"f64"}},Dp={schema:{x:0,y:-10,z:0}},Ot=new yp,Np=new wp(Ot);var Ei=(i=>(i[i.INTRO_SCREEN=0]="INTRO_SCREEN",i[i.CHARACTER_SELECTION_SCREEN=1]="CHARACTER_SELECTION_SCREEN",i[i.IN_GAME=2]="IN_GAME",i))(Ei||{});const Ss=Ot.register_resource(["masterState"],{masterState:0}),jt=Ot.register_component(Tp.def),zi=Ot.register_component(Ap.def),Pt=Ot.register_component(Cp.def),Eo=Ot.register_component(Rp.def);Ot.register_component(Pp.def);Ot.register_component(Ip.def);const fs=Ot.register_component(Lp.def),qf=Ot.register_resource(["x","y","z"],Dp.schema),tl=Ot.register_resource(["enabled"],{enabled:1}),nl=Ot.register_resource(["enabled"],{enabled:0}),gi=Ot.register_resource(["upDown","downDown","leftDown","rightDown","actionDown","driftDown"],{upDown:0,downDown:0,leftDown:0,rightDown:0,actionDown:0,driftDown:0}),Fo=Ot.register_resource(["joystickX","joystickY"],{joystickX:0,joystickY:0});function Up(){return Ot.startup(),Ot.set_resource(qf,{x:0,y:-10,z:0}),Ot.set_resource(Fo,{joystickX:0,joystickY:0}),{ecs:Np}}var Fp=hn('<div tabindex=0 style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;font-family:Arial, sans-serif;font-size:24px;text-shadow:0 0 10px rgba(255, 255, 255, 0.5)"><div style="font-size:72px;font-weight:bold;margin-bottom:20px;text-shadow:4px 4px 8px rgba(0, 0, 0, 0.7);background:linear-gradient(45deg, #ff00ff, #00ffff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Melty Karts'),Op=hn('<div style="font-size:24px;color:#ffffff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5)">Press any key or tap to continue');function Bp(i){const[e,t]=ut(!0),n=o=>{(o.code==="Space"||o.code==="Enter"||o.code==="KeyK")&&(t(!1),i.set_resource(Ss,{masterState:Ei.CHARACTER_SELECTION_SCREEN}))},r=()=>{e()&&(t(!1),i.set_resource(Ss,{masterState:Ei.CHARACTER_SELECTION_SCREEN}))};window.addEventListener("keydown",n),window.addEventListener("click",r),window.addEventListener("touchstart",r),bn(()=>{window.removeEventListener("keydown",n),window.removeEventListener("click",r),window.removeEventListener("touchstart",r)});const s=()=>{const[o,c]=ut(!1),f=()=>{c(!0),setTimeout(()=>c(!1),100)},u=d=>{(d.code==="Space"||d.code==="Enter")&&f()};return(()=>{var d=Fp();return d.firstChild,d.$$keydown=u,d.$$pointerdown=f,Ur(d,(()=>{var a=jo(()=>!!e());return()=>a()&&Op()})(),null),bi(()=>({e:o()?"#ffff00":"#ffffff",t:o()?"none":"auto"}),({e:a,t:l},h={e:void 0,t:void 0})=>{a!==h.e&&pt(d,"color",a),l!==h.t&&pt(d,"pointer-events",l)}),d})()};return{ui:()=>s}}Zo(["pointerdown","keydown"]);const kp="modulepreload",zp=function(i,e){return new URL(i,e).href},Zc={},ca=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let u=function(d){return Promise.all(d.map(a=>Promise.resolve(a).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");r=u(t.map(d=>{if(d=zp(d,n),d in Zc)return;Zc[d]=!0;const a=d.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(n)for(let m=o.length-1;m>=0;m--){const g=o[m];if(g.href===d&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${l}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":kp,a||(h.as="script"),h.crossOrigin="",h.href=d,f&&h.setAttribute("nonce",f),document.head.appendChild(h),a)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};const nc="183",Vp=0,Kc=1,Gp=2,wo=1,Yf=2,rs=3,Ti=0,Zt=1,cn=2,ii=0,Cr=1,Jc=2,Qc=3,eu=4,Hp=5,Gi=100,Wp=101,Xp=102,qp=103,Yp=104,$p=200,jp=201,Zp=202,Kp=203,il=204,rl=205,Jp=206,Qp=207,em=208,tm=209,nm=210,im=211,rm=212,sm=213,om=214,sl=0,ol=1,al=2,Fr=3,ll=4,cl=5,ul=6,fl=7,ic=0,am=1,lm=2,Un=0,$f=1,jf=2,Zf=3,Kf=4,Jf=5,Qf=6,eh=7,th=300,Qi=301,Or=302,ua=303,fa=304,Ko=306,hl=1e3,Kn=1001,dl=1002,Ft=1003,cm=1004,Ws=1005,Vt=1006,ha=1007,qi=1008,rn=1009,nh=1010,ih=1011,Ms=1012,rc=1013,Bn=1014,yn=1015,si=1016,sc=1017,oc=1018,bs=1020,rh=35902,sh=35899,oh=1021,ah=1022,Sn=1023,oi=1026,Yi=1027,ac=1028,lc=1029,Br=1030,cc=1031,uc=1033,To=33776,Ao=33777,Co=33778,Ro=33779,pl=35840,ml=35841,_l=35842,gl=35843,xl=36196,vl=37492,yl=37496,Sl=37488,Ml=37489,bl=37490,El=37491,wl=37808,Tl=37809,Al=37810,Cl=37811,Rl=37812,Pl=37813,Il=37814,Ll=37815,Dl=37816,Nl=37817,Ul=37818,Fl=37819,Ol=37820,Bl=37821,kl=36492,zl=36494,Vl=36495,Gl=36283,Hl=36284,Wl=36285,Xl=36286,um=3200,fc=0,fm=1,xi="",tn="srgb",kr="srgb-linear",Oo="linear",at="srgb",ar=7680,tu=519,hm=512,dm=513,pm=514,hc=515,mm=516,_m=517,dc=518,gm=519,nu=35044,iu="300 es",Dn=2e3,Es=2001;function xm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vm(){const i=Bo("canvas");return i.style.display="block",i}const ru={};function su(...i){const e="THREE."+i.shift();console.log(e,...i)}function lh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=lh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=lh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ko(...i){const e=i.join(" ");e in ru||(ru[e]=!0,He(...i))}function ym(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Sm={[sl]:ol,[al]:ul,[ll]:fl,[Fr]:cl,[ol]:sl,[ul]:al,[fl]:ll,[cl]:Fr};class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const hs=Math.PI/180,ws=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function pc(i,e){return(i%e+e)%e}function Mm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bm(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function Em(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function wm(i,e=1){return e-Math.abs(pc(i,e*2)-e)}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Am(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rm(i,e){return i+Math.random()*(e-i)}function Pm(i){return i*(.5-Math.random())}function Im(i){i!==void 0&&(ou=i);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lm(i){return i*hs}function Dm(i){return i*ws}function Nm(i){return(i&i-1)===0&&i!==0}function Um(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Om(i,e,t,n,r){const s=Math.cos,o=Math.sin,c=s(t/2),f=o(t/2),u=s((e+n)/2),d=o((e+n)/2),a=s((e-n)/2),l=o((e-n)/2),h=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(c*d,f*a,f*l,c*u);break;case"YZY":i.set(f*l,c*d,f*a,c*u);break;case"ZXZ":i.set(f*a,f*l,c*d,c*u);break;case"XZX":i.set(c*d,f*m,f*h,c*u);break;case"YXY":i.set(f*h,c*d,f*m,c*u);break;case"ZYZ":i.set(f*m,f*h,c*d,c*u);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const au={DEG2RAD:hs,RAD2DEG:ws,generateUUID:tr,clamp:Ke,euclideanModulo:pc,mapLinear:Mm,inverseLerp:bm,lerp:ds,damp:Em,pingpong:wm,smoothstep:Tm,smootherstep:Am,randInt:Cm,randFloat:Rm,randFloatSpread:Pm,seededRandom:Im,degToRad:Lm,radToDeg:Dm,isPowerOfTwo:Nm,ceilPowerOfTwo:Um,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Om,normalize:Ht,denormalize:Mr};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,c){let f=n[r+0],u=n[r+1],d=n[r+2],a=n[r+3],l=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];if(a!==g||f!==l||u!==h||d!==m){let _=f*l+u*h+d*m+a*g;_<0&&(l=-l,h=-h,m=-m,g=-g,_=-_);let p=1-c;if(_<.9995){const y=Math.acos(_),v=Math.sin(y);p=Math.sin(p*y)/v,c=Math.sin(c*y)/v,f=f*p+l*c,u=u*p+h*c,d=d*p+m*c,a=a*p+g*c}else{f=f*p+l*c,u=u*p+h*c,d=d*p+m*c,a=a*p+g*c;const y=1/Math.sqrt(f*f+u*u+d*d+a*a);f*=y,u*=y,d*=y,a*=y}}e[t]=f,e[t+1]=u,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,r,s,o){const c=n[r],f=n[r+1],u=n[r+2],d=n[r+3],a=s[o],l=s[o+1],h=s[o+2],m=s[o+3];return e[t]=c*m+d*a+f*h-u*l,e[t+1]=f*m+d*l+u*a-c*h,e[t+2]=u*m+d*h+c*l-f*a,e[t+3]=d*m-c*a-f*l-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,f=Math.sin,u=c(n/2),d=c(r/2),a=c(s/2),l=f(n/2),h=f(r/2),m=f(s/2);switch(o){case"XYZ":this._x=l*d*a+u*h*m,this._y=u*h*a-l*d*m,this._z=u*d*m+l*h*a,this._w=u*d*a-l*h*m;break;case"YXZ":this._x=l*d*a+u*h*m,this._y=u*h*a-l*d*m,this._z=u*d*m-l*h*a,this._w=u*d*a+l*h*m;break;case"ZXY":this._x=l*d*a-u*h*m,this._y=u*h*a+l*d*m,this._z=u*d*m+l*h*a,this._w=u*d*a-l*h*m;break;case"ZYX":this._x=l*d*a-u*h*m,this._y=u*h*a+l*d*m,this._z=u*d*m-l*h*a,this._w=u*d*a+l*h*m;break;case"YZX":this._x=l*d*a+u*h*m,this._y=u*h*a+l*d*m,this._z=u*d*m-l*h*a,this._w=u*d*a-l*h*m;break;case"XZY":this._x=l*d*a-u*h*m,this._y=u*h*a-l*d*m,this._z=u*d*m+l*h*a,this._w=u*d*a+l*h*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],c=t[5],f=t[9],u=t[2],d=t[6],a=t[10],l=n+c+a;if(l>0){const h=.5/Math.sqrt(l+1);this._w=.25/h,this._x=(d-f)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(n>c&&n>a){const h=2*Math.sqrt(1+n-c-a);this._w=(d-f)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(c>a){const h=2*Math.sqrt(1+c-n-a);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(f+d)/h}else{const h=2*Math.sqrt(1+a-n-c);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(f+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,c=t._x,f=t._y,u=t._z,d=t._w;return this._x=n*d+o*c+r*u-s*f,this._y=r*d+o*f+s*c-n*u,this._z=s*d+o*u+n*f-r*c,this._w=o*d-n*c-r*f-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,s=-s,o=-o,c=-c);let f=1-t;if(c<.9995){const u=Math.acos(c),d=Math.sin(u);f=Math.sin(f*u)/d,t=Math.sin(t*u)/d,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+o*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,c=e.z,f=e.w,u=2*(o*r-c*n),d=2*(c*t-s*r),a=2*(s*n-o*t);return this.x=t+f*u+o*a-c*d,this.y=n+f*d+c*u-s*a,this.z=r+f*a+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,c=t.y,f=t.z;return this.x=r*f-s*c,this.y=s*o-n*f,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new B,lu=new Fn;class qe{constructor(e,t,n,r,s,o,c,f,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,f,u)}set(e,t,n,r,s,o,c,f,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=s,d[5]=f,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[3],f=n[6],u=n[1],d=n[4],a=n[7],l=n[2],h=n[5],m=n[8],g=r[0],_=r[3],p=r[6],y=r[1],v=r[4],S=r[7],A=r[2],M=r[5],R=r[8];return s[0]=o*g+c*y+f*A,s[3]=o*_+c*v+f*M,s[6]=o*p+c*S+f*R,s[1]=u*g+d*y+a*A,s[4]=u*_+d*v+a*M,s[7]=u*p+d*S+a*R,s[2]=l*g+h*y+m*A,s[5]=l*_+h*v+m*M,s[8]=l*p+h*S+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8];return t*o*d-t*c*u-n*s*d+n*c*f+r*s*u-r*o*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8],a=d*o-c*u,l=c*f-d*s,h=u*s-o*f,m=t*a+n*l+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=a*g,e[1]=(r*u-d*n)*g,e[2]=(c*n-r*o)*g,e[3]=l*g,e[4]=(d*t-r*f)*g,e[5]=(r*s-c*t)*g,e[6]=h*g,e[7]=(n*f-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,c){const f=Math.cos(s),u=Math.sin(s);return this.set(n*f,n*u,-n*(f*o+u*c)+o+e,-r*u,r*f,-r*(-u*o+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new qe,cu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){const i={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?Oo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kr]:{primaries:e,whitePoint:n,transfer:Oo,toXYZ:cu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:at,toXYZ:cu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const tt=Bm();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let lr;class km{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lr===void 0&&(lr=Bo("canvas")),lr.width=e.width,lr.height=e.height;const r=lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zm=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(ma(r[o].image)):s.push(ma(r[o]))}else s=ma(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?km.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Vm=0;const _a=new B;class $t extends Wr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Kn,r=Kn,s=Vt,o=qi,c=Sn,f=rn,u=$t.DEFAULT_ANISOTROPY,d=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=tr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=f,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=th;$t.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const f=e.elements,u=f[0],d=f[4],a=f[8],l=f[1],h=f[5],m=f[9],g=f[2],_=f[6],p=f[10];if(Math.abs(d-l)<.01&&Math.abs(a-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(d+l)<.1&&Math.abs(a+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(h+1)/2,A=(p+1)/2,M=(d+l)/4,R=(a+g)/4,x=(m+_)/4;return v>S&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=M/n,s=R/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=x/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((_-m)*(_-m)+(a-g)*(a-g)+(l-d)*(l-d));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(a-g)/y,this.z=(l-d)/y,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends Wr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new $t(r),o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Gm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ch extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ft{constructor(e,t,n,r,s,o,c,f,u,d,a,l,h,m,g,_){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,f,u,d,a,l,h,m,g,_)}set(e,t,n,r,s,o,c,f,u,d,a,l,h,m,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=c,p[13]=f,p[2]=u,p[6]=d,p[10]=a,p[14]=l,p[3]=h,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),f=Math.cos(r),u=Math.sin(r),d=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const l=o*d,h=o*a,m=c*d,g=c*a;t[0]=f*d,t[4]=-f*a,t[8]=u,t[1]=h+m*u,t[5]=l-g*u,t[9]=-c*f,t[2]=g-l*u,t[6]=m+h*u,t[10]=o*f}else if(e.order==="YXZ"){const l=f*d,h=f*a,m=u*d,g=u*a;t[0]=l+g*c,t[4]=m*c-h,t[8]=o*u,t[1]=o*a,t[5]=o*d,t[9]=-c,t[2]=h*c-m,t[6]=g+l*c,t[10]=o*f}else if(e.order==="ZXY"){const l=f*d,h=f*a,m=u*d,g=u*a;t[0]=l-g*c,t[4]=-o*a,t[8]=m+h*c,t[1]=h+m*c,t[5]=o*d,t[9]=g-l*c,t[2]=-o*u,t[6]=c,t[10]=o*f}else if(e.order==="ZYX"){const l=o*d,h=o*a,m=c*d,g=c*a;t[0]=f*d,t[4]=m*u-h,t[8]=l*u+g,t[1]=f*a,t[5]=g*u+l,t[9]=h*u-m,t[2]=-u,t[6]=c*f,t[10]=o*f}else if(e.order==="YZX"){const l=o*f,h=o*u,m=c*f,g=c*u;t[0]=f*d,t[4]=g-l*a,t[8]=m*a+h,t[1]=a,t[5]=o*d,t[9]=-c*d,t[2]=-u*d,t[6]=h*a+m,t[10]=l-g*a}else if(e.order==="XZY"){const l=o*f,h=o*u,m=c*f,g=c*u;t[0]=f*d,t[4]=-a,t[8]=u*d,t[1]=l*a+g,t[5]=o*d,t[9]=h*a-m,t[2]=m*a-h,t[6]=c*d,t[10]=g*a+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),fi.crossVectors(n,Jt),fi.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),fi.crossVectors(n,Jt)),fi.normalize(),Xs.crossVectors(Jt,fi),r[0]=fi.x,r[4]=Xs.x,r[8]=Jt.x,r[1]=fi.y,r[5]=Xs.y,r[9]=Jt.y,r[2]=fi.z,r[6]=Xs.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[4],f=n[8],u=n[12],d=n[1],a=n[5],l=n[9],h=n[13],m=n[2],g=n[6],_=n[10],p=n[14],y=n[3],v=n[7],S=n[11],A=n[15],M=r[0],R=r[4],x=r[8],w=r[12],N=r[1],L=r[5],U=r[9],V=r[13],k=r[2],z=r[6],O=r[10],F=r[14],W=r[3],te=r[7],ae=r[11],de=r[15];return s[0]=o*M+c*N+f*k+u*W,s[4]=o*R+c*L+f*z+u*te,s[8]=o*x+c*U+f*O+u*ae,s[12]=o*w+c*V+f*F+u*de,s[1]=d*M+a*N+l*k+h*W,s[5]=d*R+a*L+l*z+h*te,s[9]=d*x+a*U+l*O+h*ae,s[13]=d*w+a*V+l*F+h*de,s[2]=m*M+g*N+_*k+p*W,s[6]=m*R+g*L+_*z+p*te,s[10]=m*x+g*U+_*O+p*ae,s[14]=m*w+g*V+_*F+p*de,s[3]=y*M+v*N+S*k+A*W,s[7]=y*R+v*L+S*z+A*te,s[11]=y*x+v*U+S*O+A*ae,s[15]=y*w+v*V+S*F+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],c=e[5],f=e[9],u=e[13],d=e[2],a=e[6],l=e[10],h=e[14],m=e[3],g=e[7],_=e[11],p=e[15],y=f*h-u*l,v=c*h-u*a,S=c*l-f*a,A=o*h-u*d,M=o*l-f*d,R=o*a-c*d;return t*(g*y-_*v+p*S)-n*(m*y-_*A+p*M)+r*(m*v-g*A+p*R)-s*(m*S-g*M+_*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8],a=e[9],l=e[10],h=e[11],m=e[12],g=e[13],_=e[14],p=e[15],y=t*c-n*o,v=t*f-r*o,S=t*u-s*o,A=n*f-r*c,M=n*u-s*c,R=r*u-s*f,x=d*g-a*m,w=d*_-l*m,N=d*p-h*m,L=a*_-l*g,U=a*p-h*g,V=l*p-h*_,k=y*V-v*U+S*L+A*N-M*w+R*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=(c*V-f*U+u*L)*z,e[1]=(r*U-n*V-s*L)*z,e[2]=(g*R-_*M+p*A)*z,e[3]=(l*M-a*R-h*A)*z,e[4]=(f*N-o*V-u*w)*z,e[5]=(t*V-r*N+s*w)*z,e[6]=(_*S-m*R-p*v)*z,e[7]=(d*R-l*S+h*v)*z,e[8]=(o*U-c*N+u*x)*z,e[9]=(n*N-t*U-s*x)*z,e[10]=(m*M-g*S+p*y)*z,e[11]=(a*S-d*M-h*y)*z,e[12]=(c*w-o*L-f*x)*z,e[13]=(t*L-n*w+r*x)*z,e[14]=(g*v-m*A-_*y)*z,e[15]=(d*A-a*v+l*y)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,c=e.y,f=e.z,u=s*o,d=s*c;return this.set(u*o+n,u*c-r*f,u*f+r*c,0,u*c+r*f,d*c+n,d*f-r*o,0,u*f-r*c,d*f+r*o,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,c=t._z,f=t._w,u=s+s,d=o+o,a=c+c,l=s*u,h=s*d,m=s*a,g=o*d,_=o*a,p=c*a,y=f*u,v=f*d,S=f*a,A=n.x,M=n.y,R=n.z;return r[0]=(1-(g+p))*A,r[1]=(h+S)*A,r[2]=(m-v)*A,r[3]=0,r[4]=(h-S)*M,r[5]=(1-(l+p))*M,r[6]=(_+y)*M,r[7]=0,r[8]=(m+v)*R,r[9]=(_-y)*R,r[10]=(1-(l+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=cr.set(r[0],r[1],r[2]).length();const c=cr.set(r[4],r[5],r[6]).length(),f=cr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),pn.copy(this);const u=1/o,d=1/c,a=1/f;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=a,pn.elements[9]*=a,pn.elements[10]*=a,t.setFromRotationMatrix(pn),n.x=o,n.y=c,n.z=f,this}makePerspective(e,t,n,r,s,o,c=Dn,f=!1){const u=this.elements,d=2*s/(t-e),a=2*s/(n-r),l=(t+e)/(t-e),h=(n+r)/(n-r);let m,g;if(f)m=s/(o-s),g=o*s/(o-s);else if(c===Dn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(c===Es)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=a,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,c=Dn,f=!1){const u=this.elements,d=2/(t-e),a=2/(n-r),l=-(t+e)/(t-e),h=-(n+r)/(n-r);let m,g;if(f)m=1/(o-s),g=o/(o-s);else if(c===Dn)m=-2/(o-s),g=-(o+s)/(o-s);else if(c===Es)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=0,u[12]=l,u[1]=0,u[5]=a,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new B,pn=new ft,Wm=new B(0,0,0),Xm=new B(1,1,1),fi=new B,Xs=new B,Jt=new B,fu=new ft,hu=new Fn;class fn{constructor(e=0,t=0,n=0,r=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],f=r[1],u=r[5],d=r[9],a=r[2],l=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,h),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(c,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qm=0;const du=new B,ur=new Fn,Hn=new ft,qs=new B,qr=new B,Ym=new B,$m=new Fn,pu=new B(1,0,0),mu=new B(0,1,0),_u=new B(0,0,1),gu={type:"added"},jm={type:"removed"},fr={type:"childadded",child:null},ga={type:"childremoved",child:null};class wt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new B,t=new fn,n=new Fn,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(qr,qs,this.up):Hn.lookAt(qs,qr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Hn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),fr.child=e,this.dispatchEvent(fr),fr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let u=0,d=f.length;u<d;u++){const a=f[u];s(e.shapes,a)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,u=this.material.length;f<u;f++)c.push(s(e.materials,this.material[f]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(s(e.animations,f))}}if(t){const c=o(e.geometries),f=o(e.materials),u=o(e.textures),d=o(e.images),a=o(e.shapes),l=o(e.skeletons),h=o(e.animations),m=o(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),l.length>0&&(n.skeletons=l),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(c){const f=[];for(const u in c){const d=c[u];delete d.metadata,f.push(d)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const c=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],l=d.position.distanceTo(a.position),h=.02,m=.005;u.inputState.pinching&&l>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&l<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=pc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=va(o,s,e+1/3),this.g=va(o,s,e),this.b=va(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return tt.workingToColorSpace(zt.copy(this),e),Math.round(Ke(zt.r*255,0,255))*65536+Math.round(Ke(zt.g*255,0,255))*256+Math.round(Ke(zt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),c=Math.min(n,r,s);let f,u;const d=(c+o)/2;if(c===o)f=0,u=0;else{const a=o-c;switch(u=d<=.5?a/(o+c):a/(2-o-c),o){case n:f=(r-s)/a+(r<s?6:0);break;case r:f=(s-n)/a+2;break;case s:f=(n-r)/a+4;break}f/=6}return e.h=f,e.s=u,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=tn){tt.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Ys);const n=ds(hi.h,Ys.h,t),r=ds(hi.s,Ys.s,t),s=ds(hi.l,Ys.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Je;Je.NAMES=fh;class hh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new B,Wn=new B,ya=new B,Xn=new B,hr=new B,dr=new B,xu=new B,Sa=new B,Ma=new B,ba=new B,Ea=new vt,wa=new vt,Ta=new vt;class vn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mn.subVectors(r,t),Wn.subVectors(n,t),ya.subVectors(e,t);const o=mn.dot(mn),c=mn.dot(Wn),f=mn.dot(ya),u=Wn.dot(Wn),d=Wn.dot(ya),a=o*u-c*c;if(a===0)return s.set(0,0,0),null;const l=1/a,h=(u*f-c*d)*l,m=(o*d-c*f)*l;return s.set(1-h-m,m,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,o,c,f){return this.getBarycoord(e,t,n,r,Xn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(s,Xn.x),f.addScaledVector(o,Xn.y),f.addScaledVector(c,Xn.z),f)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ea,s.x),o.addScaledVector(wa,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),Wn.subVectors(e,t),mn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,c;hr.subVectors(r,n),dr.subVectors(s,n),Sa.subVectors(e,n);const f=hr.dot(Sa),u=dr.dot(Sa);if(f<=0&&u<=0)return t.copy(n);Ma.subVectors(e,r);const d=hr.dot(Ma),a=dr.dot(Ma);if(d>=0&&a<=d)return t.copy(r);const l=f*a-d*u;if(l<=0&&f>=0&&d<=0)return o=f/(f-d),t.copy(n).addScaledVector(hr,o);ba.subVectors(e,s);const h=hr.dot(ba),m=dr.dot(ba);if(m>=0&&h<=m)return t.copy(s);const g=h*u-f*m;if(g<=0&&u>=0&&m<=0)return c=u/(u-m),t.copy(n).addScaledVector(dr,c);const _=d*m-h*a;if(_<=0&&a-d>=0&&h-m>=0)return xu.subVectors(s,r),c=(a-d)/(a-d+(h-m)),t.copy(r).addScaledVector(xu,c);const p=1/(_+g+l);return o=g*p,c=l*p,t.copy(n).addScaledVector(hr,o).addScaledVector(dr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class li{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),js.subVectors(this.max,Yr),pr.subVectors(e.a,Yr),mr.subVectors(e.b,Yr),_r.subVectors(e.c,Yr),di.subVectors(mr,pr),pi.subVectors(_r,mr),Ii.subVectors(pr,_r);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,di.z,0,-di.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!Aa(t,pr,mr,_r,js)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,pr,mr,_r,js))?!1:(Zs.crossVectors(di,pi),t=[Zs.x,Zs.y,Zs.z],Aa(t,pr,mr,_r,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new B,new B,new B,new B,new B,new B,new B,new B],_n=new B,$s=new li,pr=new B,mr=new B,_r=new B,di=new B,pi=new B,Ii=new B,Yr=new B,js=new B,Zs=new B,Li=new B;function Aa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Li.fromArray(i,s);const c=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),f=e.dot(Li),u=t.dot(Li),d=n.dot(Li);if(Math.max(-Math.max(f,u,d),Math.min(f,u,d))>c)return!1}return!0}const Mt=new B,Ks=new fe;let Km=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class dh extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Jm=new li,$r=new B,Ca=new B;class nr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Ca)),this.expandByPoint($r.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qm=0;const an=new ft,Ra=new wt,gr=new B,Qt=new li,jr=new li,Rt=new B;class St extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xm(e)?ph:dh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];jr.setFromBufferAttribute(c),this.morphTargetsRelative?(Rt.addVectors(Qt.min,jr.min),Qt.expandByPoint(Rt),Rt.addVectors(Qt.max,jr.max),Qt.expandByPoint(Rt)):(Qt.expandByPoint(jr.min),Qt.expandByPoint(jr.max))}Qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],f=this.morphTargetsRelative;for(let u=0,d=c.count;u<d;u++)Rt.fromBufferAttribute(c,u),f&&(gr.fromBufferAttribute(e,u),Rt.add(gr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],f=[];for(let x=0;x<n.count;x++)c[x]=new B,f[x]=new B;const u=new B,d=new B,a=new B,l=new fe,h=new fe,m=new fe,g=new B,_=new B;function p(x,w,N){u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),a.fromBufferAttribute(n,N),l.fromBufferAttribute(s,x),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,N),d.sub(u),a.sub(u),h.sub(l),m.sub(l);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(g.copy(d).multiplyScalar(m.y).addScaledVector(a,-h.y).multiplyScalar(L),_.copy(a).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(L),c[x].add(g),c[w].add(g),c[N].add(g),f[x].add(_),f[w].add(_),f[N].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const N=y[x],L=N.start,U=N.count;for(let V=L,k=L+U;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new B,S=new B,A=new B,M=new B;function R(x){A.fromBufferAttribute(r,x),M.copy(A);const w=c[x];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(M,w);const L=S.dot(f[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,L)}for(let x=0,w=y.length;x<w;++x){const N=y[x],L=N.start,U=N.count;for(let V=L,k=L+U;V<k;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,h=n.count;l<h;l++)n.setXYZ(l,0,0,0);const r=new B,s=new B,o=new B,c=new B,f=new B,u=new B,d=new B,a=new B;if(e)for(let l=0,h=e.count;l<h;l+=3){const m=e.getX(l+0),g=e.getX(l+1),_=e.getX(l+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),d.subVectors(o,s),a.subVectors(r,s),d.cross(a),c.fromBufferAttribute(n,m),f.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),c.add(d),f.add(d),u.add(d),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,f.x,f.y,f.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let l=0,h=t.count;l<h;l+=3)r.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),d.subVectors(o,s),a.subVectors(r,s),d.cross(a),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(c,f){const u=c.array,d=c.itemSize,a=c.normalized,l=new u.constructor(f.length*d);let h=0,m=0;for(let g=0,_=f.length;g<_;g++){c.isInterleavedBufferAttribute?h=f[g]*c.data.stride+c.offset:h=f[g]*d;for(let p=0;p<d;p++)l[m++]=u[h++]}return new En(l,d,a)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],u=e(f,n);t.setAttribute(c,u)}const s=this.morphAttributes;for(const c in s){const f=[],u=s[c];for(let d=0,a=u.length;d<a;d++){const l=u[d],h=e(l,n);f.push(h)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],d=[];for(let a=0,l=u.length;a<l;a++){const h=u[a];d.push(h.toJSON(e.data))}d.length>0&&(r[f]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],a=s[u];for(let l=0,h=a.length;l<h;l++)d.push(a[l].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let e_=0;class Tn extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Cr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const c in s){const f=s[c];delete f.metadata,o.push(f)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yn=new B,Pa=new B,Js=new B,mi=new B,Ia=new B,Qs=new B,La=new B;class _c{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pa.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Pa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Js),c=mi.dot(this.direction),f=-mi.dot(Js),u=mi.lengthSq(),d=Math.abs(1-o*o);let a,l,h,m;if(d>0)if(a=o*f-c,l=o*c-f,m=s*d,a>=0)if(l>=-m)if(l<=m){const g=1/d;a*=g,l*=g,h=a*(a+o*l+2*c)+l*(o*a+l+2*f)+u}else l=s,a=Math.max(0,-(o*l+c)),h=-a*a+l*(l+2*f)+u;else l=-s,a=Math.max(0,-(o*l+c)),h=-a*a+l*(l+2*f)+u;else l<=-m?(a=Math.max(0,-(-o*s+c)),l=a>0?-s:Math.min(Math.max(-s,-f),s),h=-a*a+l*(l+2*f)+u):l<=m?(a=0,l=Math.min(Math.max(-s,-f),s),h=l*(l+2*f)+u):(a=Math.max(0,-(o*s+c)),l=a>0?s:Math.min(Math.max(-s,-f),s),h=-a*a+l*(l+2*f)+u);else l=o>0?-s:s,a=Math.max(0,-(o*l+c)),h=-a*a+l*(l+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(Pa).addScaledVector(Js,l),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=n-o,f=n+o;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,c,f;const u=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,l=this.origin;return u>=0?(n=(e.min.x-l.x)*u,r=(e.max.x-l.x)*u):(n=(e.max.x-l.x)*u,r=(e.min.x-l.x)*u),d>=0?(s=(e.min.y-l.y)*d,o=(e.max.y-l.y)*d):(s=(e.max.y-l.y)*d,o=(e.min.y-l.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),a>=0?(c=(e.min.z-l.z)*a,f=(e.max.z-l.z)*a):(c=(e.max.z-l.z)*a,f=(e.min.z-l.z)*a),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){Ia.subVectors(t,e),Qs.subVectors(n,e),La.crossVectors(Ia,Qs);let o=this.direction.dot(La),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;mi.subVectors(this.origin,e);const f=c*this.direction.dot(Qs.crossVectors(mi,Qs));if(f<0)return null;const u=c*this.direction.dot(Ia.cross(mi));if(u<0||f+u>o)return null;const d=-c*mi.dot(La);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gc extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vu=new ft,Di=new _c,eo=new nr,yu=new B,to=new B,no=new B,io=new B,Da=new B,ro=new B,Su=new B,so=new B;class je extends wt{constructor(e=new St,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){ro.set(0,0,0);for(let f=0,u=s.length;f<u;f++){const d=c[f],a=s[f];d!==0&&(Da.fromBufferAttribute(a,e),o?ro.addScaledVector(Da,d):ro.addScaledVector(Da.sub(t),d))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(eo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(eo,yu)===null||Di.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(vu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,c=s.index,f=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,a=s.attributes.normal,l=s.groups,h=s.drawRange;if(c!==null)if(Array.isArray(o))for(let m=0,g=l.length;m<g;m++){const _=l[m],p=o[_.materialIndex],y=Math.max(_.start,h.start),v=Math.min(c.count,Math.min(_.start+_.count,h.start+h.count));for(let S=y,A=v;S<A;S+=3){const M=c.getX(S),R=c.getX(S+1),x=c.getX(S+2);r=oo(this,p,e,n,u,d,a,M,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let _=m,p=g;_<p;_+=3){const y=c.getX(_),v=c.getX(_+1),S=c.getX(_+2);r=oo(this,o,e,n,u,d,a,y,v,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(o))for(let m=0,g=l.length;m<g;m++){const _=l[m],p=o[_.materialIndex],y=Math.max(_.start,h.start),v=Math.min(f.count,Math.min(_.start+_.count,h.start+h.count));for(let S=y,A=v;S<A;S+=3){const M=S,R=S+1,x=S+2;r=oo(this,p,e,n,u,d,a,M,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(f.count,h.start+h.count);for(let _=m,p=g;_<p;_+=3){const y=_,v=_+1,S=_+2;r=oo(this,o,e,n,u,d,a,y,v,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function t_(i,e,t,n,r,s,o,c){let f;if(e.side===Zt?f=n.intersectTriangle(o,s,r,!0,c):f=n.intersectTriangle(r,s,o,e.side===Ti,c),f===null)return null;so.copy(c),so.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(so);return u<t.near||u>t.far?null:{distance:u,point:so.clone(),object:i}}function oo(i,e,t,n,r,s,o,c,f,u){i.getVertexPosition(c,to),i.getVertexPosition(f,no),i.getVertexPosition(u,io);const d=t_(i,e,t,n,to,no,io,Su);if(d){const a=new B;vn.getBarycoord(Su,to,no,io,a),r&&(d.uv=vn.getInterpolatedAttribute(r,c,f,u,a,new fe)),s&&(d.uv1=vn.getInterpolatedAttribute(s,c,f,u,a,new fe)),o&&(d.normal=vn.getInterpolatedAttribute(o,c,f,u,a,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const l={a:c,b:f,c:u,normal:new B,materialIndex:0};vn.getNormal(to,no,io,l.normal),d.face=l,d.barycoord=a}return d}class mh extends $t{constructor(e=null,t=1,n=1,r,s,o,c,f,u=Ft,d=Ft,a,l){super(null,o,c,f,u,d,r,s,a,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu extends En{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new ft,bu=new ft,ao=[],Eu=new li,n_=new ft,Zr=new je,Kr=new nr;class i_ extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mu(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,n_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Eu.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Eu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Kr.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=r[o+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xr),bu.multiplyMatrices(n,xr),Zr.matrixWorld=bu,Zr.raycast(e,ao);for(let o=0,c=ao.length;o<c;o++){const f=ao[o];f.instanceId=s,f.object=this,t.push(f)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mh(new Float32Array(r*this.count),r,this.count,ac,yn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const c=this.geometry.morphTargetsRelative?1:1-o,f=r*e;s[f]=c,s.set(n,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Na=new B,r_=new B,s_=new qe;class Vi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Na.subVectors(n,t).cross(r_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||s_.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new nr,o_=new fe(.5,.5),lo=new B;class xc{constructor(e=new Vi,t=new Vi,n=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],f=s[2],u=s[3],d=s[4],a=s[5],l=s[6],h=s[7],m=s[8],g=s[9],_=s[10],p=s[11],y=s[12],v=s[13],S=s[14],A=s[15];if(r[0].setComponents(u-o,h-d,p-m,A-y).normalize(),r[1].setComponents(u+o,h+d,p+m,A+y).normalize(),r[2].setComponents(u+c,h+a,p+g,A+v).normalize(),r[3].setComponents(u-c,h-a,p-g,A-v).normalize(),n)r[4].setComponents(f,l,_,S).normalize(),r[5].setComponents(u-f,h-l,p-_,A-S).normalize();else if(r[4].setComponents(u-f,h-l,p-_,A-S).normalize(),t===Dn)r[5].setComponents(u+f,h+l,p+_,A+S).normalize();else if(t===Es)r[5].setComponents(f,l,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=o_.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Po extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new B,Vo=new B,wu=new ft,Jr=new _c,co=new nr,Ua=new B,Tu=new B;class a_ extends wt{constructor(e=new St,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)zo.fromBufferAttribute(t,r-1),Vo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=zo.distanceTo(Vo);e.setAttribute("lineDistance",new Qe(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;wu.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(wu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,u=this.isLineSegments?2:1,d=n.index,l=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,_=m-1;g<_;g+=u){const p=d.getX(g),y=d.getX(g+1),v=uo(this,e,Jr,f,p,y,g);v&&t.push(v)}if(this.isLineLoop){const g=d.getX(m-1),_=d.getX(h),p=uo(this,e,Jr,f,g,_,m-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=h,_=m-1;g<_;g+=u){const p=uo(this,e,Jr,f,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=uo(this,e,Jr,f,m-1,h,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function uo(i,e,t,n,r,s,o){const c=i.geometry.attributes.position;if(zo.fromBufferAttribute(c,r),Vo.fromBufferAttribute(c,s),t.distanceSqToSegment(zo,Vo,Ua,Tu)>n)return;Ua.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Ua);if(!(u<e.near||u>e.far))return{distance:u,point:Tu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Au=new B,Cu=new B;class Ru extends a_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Au.fromBufferAttribute(t,r),Cu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Au.distanceTo(Cu);e.setAttribute("lineDistance",new Qe(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ss extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new ft,ql=new _c,fo=new nr,ho=new B;class Fa extends wt{constructor(e=new St,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;Pu.copy(r).invert(),ql.copy(e.ray).applyMatrix4(Pu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,u=n.index,a=n.attributes.position;if(u!==null){const l=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let m=l,g=h;m<g;m++){const _=u.getX(m);ho.fromBufferAttribute(a,_),Iu(ho,_,f,r,e,t,this)}}else{const l=Math.max(0,o.start),h=Math.min(a.count,o.start+o.count);for(let m=l,g=h;m<g;m++)ho.fromBufferAttribute(a,m),Iu(ho,m,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Iu(i,e,t,n,r,s,o){const c=ql.distanceSqToPoint(i);if(c<t){const f=new B;ql.closestPointToPoint(i,f),f.applyMatrix4(n);const u=r.ray.origin.distanceTo(f);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _h extends $t{constructor(e=[],t=Qi,n,r,s,o,c,f,u,d){super(e,t,n,r,s,o,c,f,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ts extends $t{constructor(e,t,n=Bn,r,s,o,c=Ft,f=Ft,u,d=oi,a=1){if(d!==oi&&d!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:e,height:t,depth:a};super(l,r,s,o,c,f,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class l_ extends Ts{constructor(e,t=Bn,n=Qi,r,s,o=Ft,c=Ft,f,u=oi){const d={width:e,height:e,depth:1},a=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,c,f,u),this.image=a,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gh extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ir extends St{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const f=[],u=[],d=[],a=[];let l=0,h=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(f),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(a,2));function m(g,_,p,y,v,S,A,M,R,x,w){const N=S/R,L=A/x,U=S/2,V=A/2,k=M/2,z=R+1,O=x+1;let F=0,W=0;const te=new B;for(let ae=0;ae<O;ae++){const de=ae*L-V;for(let pe=0;pe<z;pe++){const De=pe*N-U;te[g]=De*y,te[_]=de*v,te[p]=k,u.push(te.x,te.y,te.z),te[g]=0,te[_]=0,te[p]=M>0?1:-1,d.push(te.x,te.y,te.z),a.push(pe/R),a.push(1-ae/x),F+=1}}for(let ae=0;ae<x;ae++)for(let de=0;de<R;de++){const pe=l+de+z*ae,De=l+de+z*(ae+1),K=l+(de+1)+z*(ae+1),G=l+(de+1)+z*ae;f.push(pe,De,G),f.push(De,K,G),W+=6}c.addGroup(h,W,w),h+=W,l+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rr extends St{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,c=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:f};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],a=[],l=[],h=[];let m=0;const g=[],_=n/2;let p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2));function y(){const S=new B,A=new B;let M=0;const R=(t-e)/n;for(let x=0;x<=s;x++){const w=[],N=x/s,L=N*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,k=V*f+c,z=Math.sin(k),O=Math.cos(k);A.x=L*z,A.y=-N*n+_,A.z=L*O,a.push(A.x,A.y,A.z),S.set(z,R,O).normalize(),l.push(S.x,S.y,S.z),h.push(V,1-N),w.push(m++)}g.push(w)}for(let x=0;x<r;x++)for(let w=0;w<s;w++){const N=g[w][x],L=g[w+1][x],U=g[w+1][x+1],V=g[w][x+1];(e>0||w!==0)&&(d.push(N,L,V),M+=3),(t>0||w!==s-1)&&(d.push(L,U,V),M+=3)}u.addGroup(p,M,0),p+=M}function v(S){const A=m,M=new fe,R=new B;let x=0;const w=S===!0?e:t,N=S===!0?1:-1;for(let U=1;U<=r;U++)a.push(0,_*N,0),l.push(0,N,0),h.push(.5,.5),m++;const L=m;for(let U=0;U<=r;U++){const k=U/r*f+c,z=Math.cos(k),O=Math.sin(k);R.x=w*O,R.y=_*N,R.z=w*z,a.push(R.x,R.y,R.z),l.push(0,N,0),M.x=z*.5+.5,M.y=O*.5*N+.5,h.push(M.x,M.y),m++}for(let U=0;U<r;U++){const V=A+U,k=L+U;S===!0?d.push(k,k+1,V):d.push(k+1,k,V),x+=3}u.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends rr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,r,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new Us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends St{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];c(r),u(n),d(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(y){const v=new B,S=new B,A=new B;for(let M=0;M<t.length;M+=3)h(t[M+0],v),h(t[M+1],S),h(t[M+2],A),f(v,S,A,y)}function f(y,v,S,A){const M=A+1,R=[];for(let x=0;x<=M;x++){R[x]=[];const w=y.clone().lerp(S,x/M),N=v.clone().lerp(S,x/M),L=M-x;for(let U=0;U<=L;U++)U===0&&x===M?R[x][U]=w:R[x][U]=w.clone().lerp(N,U/L)}for(let x=0;x<M;x++)for(let w=0;w<2*(M-x)-1;w++){const N=Math.floor(w/2);w%2===0?(l(R[x][N+1]),l(R[x+1][N]),l(R[x][N])):(l(R[x][N+1]),l(R[x+1][N+1]),l(R[x+1][N]))}}function u(y){const v=new B;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(y),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const y=new B;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const S=_(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(S,1-A)}m(),a()}function a(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],A=o[y+4],M=Math.max(v,S,A),R=Math.min(v,S,A);M>.9&&R<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function l(y){s.push(y.x,y.y,y.z)}function h(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function m(){const y=new B,v=new B,S=new B,A=new B,M=new fe,R=new fe,x=new fe;for(let w=0,N=0;w<s.length;w+=9,N+=6){y.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),M.set(o[N+0],o[N+1]),R.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),A.copy(y).add(v).add(S).divideScalar(3);const L=_(A);g(M,N+0,y,L),g(R,N+2,v,L),g(x,N+4,S,L)}}function g(y,v,S,A){A<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=A/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.vertices,e.indices,e.radius,e.detail)}}class Go extends vc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Go(e.radius,e.detail)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,f=s-1,u;for(;c<=f;)if(r=Math.floor(c+(f-c)/2),u=n[r]-o,u<0)c=r+1;else if(u>0)f=r-1;else{f=r;break}if(r=f,n[r]===o)return r/(s-1);const d=n[r],l=n[r+1]-d,h=(o-d)/l;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),c=this.getPoint(s),f=t||(o.isVector2?new fe:new B);return f.copy(c).sub(o).normalize(),f}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,r=[],s=[],o=[],c=new B,f=new ft;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let u=Number.MAX_VALUE;const d=Math.abs(r[0].x),a=Math.abs(r[0].y),l=Math.abs(r[0].z);d<=u&&(u=d,n.set(1,0,0)),a<=u&&(u=a,n.set(0,1,0)),l<=u&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],c),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),c.crossVectors(r[h-1],r[h]),c.length()>Number.EPSILON){c.normalize();const m=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(f.makeRotationAxis(c,m))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(c.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(f.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yc extends zn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,c=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=f}getPoint(e,t=new fe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const c=this.aStartAngle+e*s;let f=this.aX+this.xRadius*Math.cos(c),u=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),a=Math.sin(this.aRotation),l=f-this.aX,h=u-this.aY;f=l*d-h*a+this.aX,u=l*a+h*d+this.aY}return n.set(f,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends yc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let i=0,e=0,t=0,n=0;function r(s,o,c,f){i=s,e=c,t=-3*s+3*o-2*c-f,n=2*s-2*o+c+f}return{initCatmullRom:function(s,o,c,f,u){r(o,c,u*(c-s),u*(f-o))},initNonuniformCatmullRom:function(s,o,c,f,u,d,a){let l=(o-s)/u-(c-s)/(u+d)+(c-o)/d,h=(c-o)/d-(f-o)/(d+a)+(f-c)/a;l*=d,h*=d,r(o,c,l,h)},calc:function(s){const o=s*s,c=o*s;return i+e*s+t*o+n*c}}}const po=new B,Oa=new Sc,Ba=new Sc,ka=new Sc;class Mc extends zn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),f=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:f===0&&c===s-1&&(c=s-2,f=1);let u,d;this.closed||c>0?u=r[(c-1)%s]:(po.subVectors(r[0],r[1]).add(r[0]),u=po);const a=r[c%s],l=r[(c+1)%s];if(this.closed||c+2<s?d=r[(c+2)%s]:(po.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=po),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(a),h),g=Math.pow(a.distanceToSquared(l),h),_=Math.pow(l.distanceToSquared(d),h);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),Oa.initNonuniformCatmullRom(u.x,a.x,l.x,d.x,m,g,_),Ba.initNonuniformCatmullRom(u.y,a.y,l.y,d.y,m,g,_),ka.initNonuniformCatmullRom(u.z,a.z,l.z,d.z,m,g,_)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(u.x,a.x,l.x,d.x,this.tension),Ba.initCatmullRom(u.y,a.y,l.y,d.y,this.tension),ka.initCatmullRom(u.z,a.z,l.z,d.z,this.tension));return n.set(Oa.calc(f),Ba.calc(f),ka.calc(f)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,c=i*i,f=i*c;return(2*t-2*n+s+o)*f+(-3*t+3*n-2*s-o)*c+s*i+t}function u_(i,e){const t=1-i;return t*t*e}function f_(i,e){return 2*(1-i)*i*e}function h_(i,e){return i*i*e}function ps(i,e,t,n){return u_(i,e)+f_(i,t)+h_(i,n)}function d_(i,e){const t=1-i;return t*t*t*e}function p_(i,e){const t=1-i;return 3*t*t*i*e}function m_(i,e){return 3*(1-i)*i*i*e}function __(i,e){return i*i*i*e}function ms(i,e,t,n,r){return d_(i,e)+p_(i,t)+m_(i,n)+__(i,r)}class xh extends zn{constructor(e=new fe,t=new fe,n=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(ms(e,r.x,s.x,o.x,c.x),ms(e,r.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g_ extends zn{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(ms(e,r.x,s.x,o.x,c.x),ms(e,r.y,s.y,o.y,c.y),ms(e,r.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vh extends zn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends zn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends zn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ps(e,r.x,s.x,o.x),ps(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends zn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ps(e,r.x,s.x,o.x),ps(e,r.y,s.y,o.y),ps(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mh extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),c=s-o,f=r[o===0?o:o-1],u=r[o],d=r[o>r.length-2?r.length-1:o+1],a=r[o>r.length-3?r.length-1:o+2];return n.set(Lu(c,f.x,u.x,d.x,a.x),Lu(c,f.y,u.y,d.y,a.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var Ho=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:Mc,CubicBezierCurve:xh,CubicBezierCurve3:g_,EllipseCurve:yc,LineCurve:vh,LineCurve3:x_,QuadraticBezierCurve:yh,QuadraticBezierCurve3:Sh,SplineCurve:Mh});class v_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,c=this.curves[s],f=c.getLength(),u=f===0?0:1-o/f;return c.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,f=o.getPoints(c);for(let u=0;u<f.length;u++){const d=f[u];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ho[r.type]().fromJSON(r))}return this}}class Pr extends v_{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vh(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new yh(this.currentPoint.clone(),new fe(e,t),new fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const c=new xh(this.currentPoint.clone(),new fe(e,t),new fe(n,r),new fe(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Mh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+c,t+f,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,c,f){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+u,t+d,n,r,s,o,c,f),this}absellipse(e,t,n,r,s,o,c,f){const u=new yc(e,t,n,r,s,o,c,f);if(this.curves.length>0){const a=u.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(u);const d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zi extends Pr{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Pr().fromJSON(r))}return this}}function y_(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=bh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,f,u;if(n&&(s=w_(i,e,s,t)),i.length>80*t){c=i[0],f=i[1];let d=c,a=f;for(let l=t;l<r;l+=t){const h=i[l],m=i[l+1];h<c&&(c=h),m<f&&(f=m),h>d&&(d=h),m>a&&(a=m)}u=Math.max(d-c,a-f),u=u!==0?32767/u:0}return As(s,o,t,c,f,u,0),o}function bh(i,e,t,n,r){let s;if(r===F_(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Du(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Du(o/n|0,i[o],i[o+1],s);return s&&zr(s,s.next)&&(Rs(s),s=s.next),s}function er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||mt(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(i,e,t,n,r,s,o){if(!i)return;!o&&s&&P_(i,n,r,s);let c=i;for(;i.prev!==i.next;){const f=i.prev,u=i.next;if(s?M_(i,n,r,s):S_(i)){e.push(f.i,i.i,u.i),Rs(i),i=u.next,c=u.next;continue}if(i=u,i===c){o?o===1?(i=b_(er(i),e),As(i,e,t,n,r,s,2)):o===2&&E_(i,e,t,n,r,s):As(er(i),e,t,n,r,s,1);break}}}function S_(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,c=e.y,f=t.y,u=n.y,d=Math.min(r,s,o),a=Math.min(c,f,u),l=Math.max(r,s,o),h=Math.max(c,f,u);let m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=l&&m.y>=a&&m.y<=h&&os(r,c,s,f,o,u,m.x,m.y)&&mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function M_(i,e,t,n){const r=i.prev,s=i,o=i.next;if(mt(r,s,o)>=0)return!1;const c=r.x,f=s.x,u=o.x,d=r.y,a=s.y,l=o.y,h=Math.min(c,f,u),m=Math.min(d,a,l),g=Math.max(c,f,u),_=Math.max(d,a,l),p=Yl(h,m,e,t,n),y=Yl(g,_,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=p&&S&&S.z<=y;){if(v.x>=h&&v.x<=g&&v.y>=m&&v.y<=_&&v!==r&&v!==o&&os(c,d,f,a,u,l,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=h&&S.x<=g&&S.y>=m&&S.y<=_&&S!==r&&S!==o&&os(c,d,f,a,u,l,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=h&&v.x<=g&&v.y>=m&&v.y<=_&&v!==r&&v!==o&&os(c,d,f,a,u,l,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=h&&S.x<=g&&S.y>=m&&S.y<=_&&S!==r&&S!==o&&os(c,d,f,a,u,l,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function b_(i,e){let t=i;do{const n=t.prev,r=t.next.next;!zr(n,r)&&wh(n,t,t.next,r)&&Cs(n,r)&&Cs(r,n)&&(e.push(n.i,t.i,r.i),Rs(t),Rs(t.next),t=i=r),t=t.next}while(t!==i);return er(t)}function E_(i,e,t,n,r,s){let o=i;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&D_(o,c)){let f=Th(o,c);o=er(o,o.next),f=er(f,f.next),As(o,e,t,n,r,s,0),As(f,e,t,n,r,s,0);return}c=c.next}o=o.next}while(o!==i)}function w_(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const c=e[s]*n,f=s<o-1?e[s+1]*n:i.length,u=bh(i,c,f,n,!1);u===u.next&&(u.steiner=!0),r.push(L_(u))}r.sort(T_);for(let s=0;s<r.length;s++)t=A_(r[s],t);return t}function T_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function A_(i,e){const t=C_(i,e);if(!t)return e;const n=Th(t,i);return er(n,n.next),er(t,t.next)}function C_(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const a=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;const c=o,f=o.x,u=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=f&&n!==t.x&&Eh(r<u?n:s,r,f,u,r<u?s:n,r,t.x,t.y)){const a=Math.abs(r-t.y)/(n-t.x);Cs(t,i)&&(a<d||a===d&&(t.x>o.x||t.x===o.x&&R_(o,t)))&&(o=t,d=a)}t=t.next}while(t!==c);return o}function R_(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function P_(i,e,t,n){let r=i;do r.z===0&&(r.z=Yl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,I_(r)}function I_(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,c=0;for(let u=0;u<t&&(c++,o=o.nextZ,!!o);u++);let f=t;for(;c>0||f>0&&o;)c!==0&&(f===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,c--):(r=o,o=o.nextZ,f--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Yl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function L_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Eh(i,e,t,n,r,s,o,c){return(r-o)*(e-c)>=(i-o)*(s-c)&&(i-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(r-o)*(n-c)}function os(i,e,t,n,r,s,o,c){return!(i===o&&e===c)&&Eh(i,e,t,n,r,s,o,c)}function D_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!N_(i,e)&&(Cs(i,e)&&Cs(e,i)&&U_(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||zr(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function wh(i,e,t,n){const r=_o(mt(i,e,t)),s=_o(mt(i,e,n)),o=_o(mt(t,n,i)),c=_o(mt(t,n,e));return!!(r!==s&&o!==c||r===0&&mo(i,t,e)||s===0&&mo(i,n,e)||o===0&&mo(t,i,n)||c===0&&mo(t,e,n))}function mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function N_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cs(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function U_(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Th(i,e){const t=$l(i.i,i.x,i.y),n=$l(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Du(i,e,t,n){const r=$l(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function F_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class O_{static triangulate(e,t,n=2){return y_(e,t,n)}}class Si{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Nu(e),Uu(n,e);let o=e.length;t.forEach(Nu);for(let f=0;f<t.length;f++)r.push(o),o+=t[f].length,Uu(n,t[f]);const c=O_.triangulate(n,r);for(let f=0;f<c.length;f+=3)s.push(c.slice(f,f+3));return s}}function Nu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Er extends St{constructor(e=new Zi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let c=0,f=e.length;c<f;c++){const u=e[c];o(u)}this.setAttribute("position",new Qe(r,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function o(c){const f=[],u=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,a=t.depth!==void 0?t.depth:1;let l=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:h-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:B_;let v,S=!1,A,M,R,x;if(p){v=p.getSpacedPoints(d),S=!0,l=!1;const H=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(d,H),M=new B,R=new B,x=new B}l||(_=0,h=0,m=0,g=0);const w=c.extractPoints(u);let N=w.shape;const L=w.holes;if(!Si.isClockWise(N)){N=N.reverse();for(let H=0,Y=L.length;H<Y;H++){const Q=L[H];Si.isClockWise(Q)&&(L[H]=Q.reverse())}}function V(H){const Q=10000000000000001e-36;let $=H[0];for(let b=1;b<=H.length;b++){const D=b%H.length,ce=H[D],be=ce.x-$.x,xe=ce.y-$.y,I=be*be+xe*xe,E=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs($.x),Math.abs($.y)),X=Q*E*E;if(I<=X){H.splice(D,1),b--;continue}$=ce}}V(N),L.forEach(V);const k=L.length,z=N;for(let H=0;H<k;H++){const Y=L[H];N=N.concat(Y)}function O(H,Y,Q){return Y||et("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(Y,Q)}const F=N.length;function W(H,Y,Q){let $,b,D;const ce=H.x-Y.x,be=H.y-Y.y,xe=Q.x-H.x,I=Q.y-H.y,E=ce*ce+be*be,X=ce*I-be*xe;if(Math.abs(X)>Number.EPSILON){const se=Math.sqrt(E),he=Math.sqrt(xe*xe+I*I),re=Y.x-be/se,Te=Y.y+ce/se,_e=Q.x-I/he,we=Q.y+xe/he,Oe=((_e-re)*I-(we-Te)*xe)/(ce*I-be*xe);$=re+ce*Oe-H.x,b=Te+be*Oe-H.y;const ge=$*$+b*b;if(ge<=2)return new fe($,b);D=Math.sqrt(ge/2)}else{let se=!1;ce>Number.EPSILON?xe>Number.EPSILON&&(se=!0):ce<-Number.EPSILON?xe<-Number.EPSILON&&(se=!0):Math.sign(be)===Math.sign(I)&&(se=!0),se?($=-be,b=ce,D=Math.sqrt(E)):($=ce,b=be,D=Math.sqrt(E/2))}return new fe($/D,b/D)}const te=[];for(let H=0,Y=z.length,Q=Y-1,$=H+1;H<Y;H++,Q++,$++)Q===Y&&(Q=0),$===Y&&($=0),te[H]=W(z[H],z[Q],z[$]);const ae=[];let de,pe=te.concat();for(let H=0,Y=k;H<Y;H++){const Q=L[H];de=[];for(let $=0,b=Q.length,D=b-1,ce=$+1;$<b;$++,D++,ce++)D===b&&(D=0),ce===b&&(ce=0),de[$]=W(Q[$],Q[D],Q[ce]);ae.push(de),pe=pe.concat(de)}let De;if(_===0)De=Si.triangulateShape(z,L);else{const H=[],Y=[];for(let Q=0;Q<_;Q++){const $=Q/_,b=h*Math.cos($*Math.PI/2),D=m*Math.sin($*Math.PI/2)+g;for(let ce=0,be=z.length;ce<be;ce++){const xe=O(z[ce],te[ce],D);le(xe.x,xe.y,-b),$===0&&H.push(xe)}for(let ce=0,be=k;ce<be;ce++){const xe=L[ce];de=ae[ce];const I=[];for(let E=0,X=xe.length;E<X;E++){const se=O(xe[E],de[E],D);le(se.x,se.y,-b),$===0&&I.push(se)}$===0&&Y.push(I)}}De=Si.triangulateShape(H,Y)}const K=De.length,G=m+g;for(let H=0;H<F;H++){const Y=l?O(N[H],pe[H],G):N[H];S?(R.copy(A.normals[0]).multiplyScalar(Y.x),M.copy(A.binormals[0]).multiplyScalar(Y.y),x.copy(v[0]).add(R).add(M),le(x.x,x.y,x.z)):le(Y.x,Y.y,0)}for(let H=1;H<=d;H++)for(let Y=0;Y<F;Y++){const Q=l?O(N[Y],pe[Y],G):N[Y];S?(R.copy(A.normals[H]).multiplyScalar(Q.x),M.copy(A.binormals[H]).multiplyScalar(Q.y),x.copy(v[H]).add(R).add(M),le(x.x,x.y,x.z)):le(Q.x,Q.y,a/d*H)}for(let H=_-1;H>=0;H--){const Y=H/_,Q=h*Math.cos(Y*Math.PI/2),$=m*Math.sin(Y*Math.PI/2)+g;for(let b=0,D=z.length;b<D;b++){const ce=O(z[b],te[b],$);le(ce.x,ce.y,a+Q)}for(let b=0,D=L.length;b<D;b++){const ce=L[b];de=ae[b];for(let be=0,xe=ce.length;be<xe;be++){const I=O(ce[be],de[be],$);S?le(I.x,I.y+v[d-1].y,v[d-1].x+Q):le(I.x,I.y,a+Q)}}}T(),C();function T(){const H=r.length/3;if(l){let Y=0,Q=F*Y;for(let $=0;$<K;$++){const b=De[$];J(b[2]+Q,b[1]+Q,b[0]+Q)}Y=d+_*2,Q=F*Y;for(let $=0;$<K;$++){const b=De[$];J(b[0]+Q,b[1]+Q,b[2]+Q)}}else{for(let Y=0;Y<K;Y++){const Q=De[Y];J(Q[2],Q[1],Q[0])}for(let Y=0;Y<K;Y++){const Q=De[Y];J(Q[0]+F*d,Q[1]+F*d,Q[2]+F*d)}}n.addGroup(H,r.length/3-H,0)}function C(){const H=r.length/3;let Y=0;j(z,Y),Y+=z.length;for(let Q=0,$=L.length;Q<$;Q++){const b=L[Q];j(b,Y),Y+=b.length}n.addGroup(H,r.length/3-H,1)}function j(H,Y){let Q=H.length;for(;--Q>=0;){const $=Q;let b=Q-1;b<0&&(b=H.length-1);for(let D=0,ce=d+_*2;D<ce;D++){const be=F*D,xe=F*(D+1),I=Y+$+be,E=Y+b+be,X=Y+b+xe,se=Y+$+xe;ie(I,E,X,se)}}}function le(H,Y,Q){f.push(H),f.push(Y),f.push(Q)}function J(H,Y,Q){Se(H),Se(Y),Se(Q);const $=r.length/3,b=y.generateTopUV(n,r,$-3,$-2,$-1);me(b[0]),me(b[1]),me(b[2])}function ie(H,Y,Q,$){Se(H),Se(Y),Se($),Se(Y),Se(Q),Se($);const b=r.length/3,D=y.generateSideWallUV(n,r,b-6,b-3,b-2,b-1);me(D[0]),me(D[1]),me(D[3]),me(D[1]),me(D[2]),me(D[3])}function Se(H){r.push(f[H*3+0]),r.push(f[H*3+1]),r.push(f[H*3+2])}function me(H){s.push(H.x),s.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return k_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ho[r.type]().fromJSON(r)),new Er(n,e.options)}}const B_={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],c=e[n*3],f=e[n*3+1],u=e[r*3],d=e[r*3+1];return[new fe(s,o),new fe(c,f),new fe(u,d)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],c=e[t*3+1],f=e[t*3+2],u=e[n*3],d=e[n*3+1],a=e[n*3+2],l=e[r*3],h=e[r*3+1],m=e[r*3+2],g=e[s*3],_=e[s*3+1],p=e[s*3+2];return Math.abs(c-d)<Math.abs(o-u)?[new fe(o,1-f),new fe(u,1-a),new fe(l,1-m),new fe(g,1-p)]:[new fe(c,1-f),new fe(d,1-a),new fe(h,1-m),new fe(_,1-p)]}};function k_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vr extends St{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(n),f=Math.floor(r),u=c+1,d=f+1,a=e/c,l=t/f,h=[],m=[],g=[],_=[];for(let p=0;p<d;p++){const y=p*l-o;for(let v=0;v<u;v++){const S=v*a-s;m.push(S,-y,0),g.push(0,0,1),_.push(v/c),_.push(1-p/f)}}for(let p=0;p<f;p++)for(let y=0;y<c;y++){const v=y+u*p,S=y+u*(p+1),A=y+1+u*(p+1),M=y+1+u*p;h.push(v,S,M),h.push(S,A,M)}this.setIndex(h),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ps extends St{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(o+c,Math.PI);let u=0;const d=[],a=new B,l=new B,h=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&f===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const M=A/t;a.x=-e*Math.cos(r+M*s)*Math.sin(o+v*c),a.y=e*Math.cos(o+v*c),a.z=e*Math.sin(r+M*s)*Math.sin(o+v*c),m.push(a.x,a.y,a.z),l.copy(a).normalize(),g.push(l.x,l.y,l.z),_.push(M+S,1-v),y.push(u++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const v=d[p][y+1],S=d[p][y],A=d[p+1][y],M=d[p+1][y+1];(p!==0||o>0)&&h.push(v,S,M),(p!==n-1||f<Math.PI)&&h.push(S,A,M)}this.setIndex(h),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bc extends St{constructor(e=new Sh(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new B,f=new B,u=new fe;let d=new B;const a=[],l=[],h=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2));function g(){for(let v=0;v<t;v++)_(v);_(s===!1?t:0),y(),p()}function _(v){d=e.getPointAt(v/t,d);const S=o.normals[v],A=o.binormals[v];for(let M=0;M<=r;M++){const R=M/r*Math.PI*2,x=Math.sin(R),w=-Math.cos(R);f.x=w*S.x+x*A.x,f.y=w*S.y+x*A.y,f.z=w*S.z+x*A.z,f.normalize(),l.push(f.x,f.y,f.z),c.x=d.x+n*f.x,c.y=d.y+n*f.y,c.z=d.z+n*f.z,a.push(c.x,c.y,c.z)}}function p(){for(let v=1;v<=t;v++)for(let S=1;S<=r;S++){const A=(r+1)*(v-1)+(S-1),M=(r+1)*v+(S-1),R=(r+1)*v+S,x=(r+1)*(v-1)+S;m.push(A,M,x),m.push(M,R,x)}}function y(){for(let v=0;v<=t;v++)for(let S=0;S<=r;S++)u.x=v/t,u.y=S/r,h.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bc(new Ho[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Gr(i[t]);for(const r in n)e[r]=n[r]}return e}function z_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const V_={clone:Gr,merge:Wt};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class W_ extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Et extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X_ extends Tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class q_ extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ou(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ou(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ou(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $_{constructor(e,t,n){const r=this;let s=!1,o=0,c=0,f;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){c++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,c),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return f?f(d):d},this.setURLModifier=function(d){return f=d,this},this.addHandler=function(d,a){return u.push(d,a),this},this.removeHandler=function(d){const a=u.indexOf(d);return a!==-1&&u.splice(a,2),this},this.getHandler=function(d){for(let a=0,l=u.length;a<l;a+=2){const h=u[a],m=u[a+1];if(h.global&&(h.lastIndex=0),h.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j_=new $_;class Jo{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class Ch extends Jo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fu.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:r});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=$n[e],a=u.body.getReader(),l=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),h=l?parseInt(l):0,m=h!==0;let g=0;const _=new ReadableStream({start(p){y();function y(){a.read().then(({done:v,value:S})=>{if(v)p.close();else{g+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:h});for(let M=0,R=d.length;M<R;M++){const x=d[M];x.onProgress&&x.onProgress(A)}p.enqueue(S),y()}},v=>{p.error(v)})}}});return new Response(_)}else throw new Z_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(f){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return u.json();default:if(c==="")return u.text();{const a=/charset="?([^;"\s]*)"?/i.exec(c),l=a&&a[1]?a[1].toLowerCase():void 0,h=new TextDecoder(l);return u.arrayBuffer().then(m=>h.decode(m))}}}).then(u=>{Fu.add(`file:${e}`,u);const d=$n[e];delete $n[e];for(let a=0,l=d.length;a<l;a++){const h=d[a];h.onLoad&&h.onLoad(u)}}).catch(u=>{const d=$n[e];if(d===void 0)throw this.manager.itemError(e),u;delete $n[e];for(let a=0,l=d.length;a<l;a++){const h=d[a];h.onError&&h.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Rh extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const za=new ft,Bu=new B,ku=new B;class K_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Es||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const go=new B,xo=new Fn,Rn=new B;class Ph extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(go,xo,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(go,xo,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new B,zu=new fe,Vu=new fe;class nn extends Ph{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,zu,Vu),t.subVectors(Vu,zu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const f=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/f,t-=o.offsetY*n/u,r*=o.width/f,n*=o.height/u}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ec extends Ph{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,c-=d*this.view.offsetY,f=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class J_ extends K_{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ih extends Rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new J_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lh extends Rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const vr=-90,yr=1;class Q_ extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(vr,yr,e,t);r.layers=this.layers,this.add(r);const s=new nn(vr,yr,e,t);s.layers=this.layers,this.add(s);const o=new nn(vr,yr,e,t);o.layers=this.layers,this.add(o);const c=new nn(vr,yr,e,t);c.layers=this.layers,this.add(c);const f=new nn(vr,yr,e,t);f.layers=this.layers,this.add(f);const u=new nn(vr,yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,c,f]=t;for(const u of t)this.remove(u);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,f,u,d]=this.children,a=e.getRenderTarget(),l=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,l,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class eg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gu=new fe;class tg{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ui{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let v=0,S=p.length;v<S;v++){const A=p[v],M=new Zi;M.curves=A.curves,y.push(M)}return y}function n(p,y){const v=y.length;let S=!1;for(let A=v-1,M=0;M<v;A=M++){let R=y[A],x=y[M],w=x.x-R.x,N=x.y-R.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(R=y[M],w=-w,x=y[A],N=-N),p.y<R.y||p.y>x.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const L=N*(p.x-R.x)-w*(p.y-R.y);if(L===0)return!0;if(L<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(x.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=x.x)return!0}}return S}const r=Si.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,f;const u=[];if(s.length===1)return c=s[0],f=new Zi,f.curves=c.curves,u.push(f),u;let d=!r(s[0].getPoints());d=e?!d:d;const a=[],l=[];let h=[],m=0,g;l[m]=void 0,h[m]=[];for(let p=0,y=s.length;p<y;p++)c=s[p],g=c.getPoints(),o=r(g),o=e?!o:o,o?(!d&&l[m]&&m++,l[m]={s:new Zi,p:g},l[m].s.curves=c.curves,d&&m++,h[m]=[]):h[m].push({h:c,p:g[0]});if(!l[0])return t(s);if(l.length>1){let p=!1,y=0;for(let v=0,S=l.length;v<S;v++)a[v]=[];for(let v=0,S=l.length;v<S;v++){const A=h[v];for(let M=0;M<A.length;M++){const R=A[M];let x=!0;for(let w=0;w<l.length;w++)n(R.p,l[w].p)&&(v!==w&&y++,x?(x=!1,a[w].push(R)):p=!0);x&&a[v].push(R)}}y>0&&p===!1&&(h=a)}let _;for(let p=0,y=l.length;p<y;p++){f=l[p].s,u.push(f),_=h[p];for(let v=0,S=_.length;v<S;v++)f.holes.push(_[v].h)}return u}}function Hu(i,e,t,n){const r=ng(n);switch(t){case oh:return i*e;case ac:return i*e/r.components*r.byteLength;case lc:return i*e/r.components*r.byteLength;case Br:return i*e*2/r.components*r.byteLength;case cc:return i*e*2/r.components*r.byteLength;case ah:return i*e*3/r.components*r.byteLength;case Sn:return i*e*4/r.components*r.byteLength;case uc:return i*e*4/r.components*r.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:case gl:return Math.max(i,16)*Math.max(e,8)/4;case pl:case _l:return Math.max(i,8)*Math.max(e,8)/2;case xl:case vl:case Sl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yl:case bl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kl:case zl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(i){switch(i){case rn:case nh:return{byteLength:1,components:1};case Ms:case ih:case si:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Bn:case rc:case yn:return{byteLength:4,components:1};case rh:case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function Dh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ig(i){const e=new WeakMap;function t(c,f){const u=c.array,d=c.usage,a=u.byteLength,l=i.createBuffer();i.bindBuffer(f,l),i.bufferData(f,u,d),c.onUploadCallback();let h;if(u instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=i.SHORT;else if(u instanceof Uint32Array)h=i.UNSIGNED_INT;else if(u instanceof Int32Array)h=i.INT;else if(u instanceof Int8Array)h=i.BYTE;else if(u instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:a}}function n(c,f,u){const d=f.array,a=f.updateRanges;if(i.bindBuffer(u,c),a.length===0)i.bufferSubData(u,0,d);else{a.sort((h,m)=>h.start-m.start);let l=0;for(let h=1;h<a.length;h++){const m=a[l],g=a[h];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++l,a[l]=g)}a.length=l+1;for(let h=0,m=a.length;h<m;h++){const g=a[h];i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function o(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,f));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,f),u.version=c.version}}return{get:r,remove:s,update:o}}var rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gg=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,n0=`uniform sampler2D dfgLUT;
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
}`,i0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,yx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Rx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:rg,alphahash_pars_fragment:sg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:ug,aomap_pars_fragment:fg,batching_pars_vertex:hg,batching_vertex:dg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:_g,iridescence_fragment:gg,bumpmap_pars_fragment:xg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Mg,color_fragment:bg,color_pars_fragment:Eg,color_pars_vertex:wg,color_vertex:Tg,common:Ag,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Ig,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Fg,envmap_common_pars_fragment:Og,envmap_pars_fragment:Bg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:Zg,envmap_vertex:zg,fog_vertex:Vg,fog_pars_vertex:Gg,fog_fragment:Hg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:$g,lights_pars_begin:jg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:e0,lights_physical_fragment:t0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:r0,lights_fragment_end:s0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:u0,map_pars_fragment:f0,map_particle_fragment:h0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:_0,morphcolor_vertex:g0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:S0,normal_fragment_maps:M0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:z0,shadowmap_vertex:V0,shadowmask_pars_fragment:G0,skinbase_vertex:H0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:$0,tonemapping_fragment:j0,tonemapping_pars_fragment:Z0,transmission_fragment:K0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:rx,backgroundCube_vert:sx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:ux,distance_vert:fx,distance_frag:hx,equirect_vert:dx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:_x,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:vx,meshlambert_frag:yx,meshmatcap_vert:Sx,meshmatcap_frag:Mx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Cx,meshtoon_vert:Rx,meshtoon_frag:Px,points_vert:Ix,points_frag:Lx,shadow_vert:Dx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Fx},Re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},In={basic:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([Re.points,Re.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([Re.common,Re.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([Re.sprite,Re.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Wt([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Wt([Re.lights,Re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};In.physical={uniforms:Wt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const vo={r:0,b:0,g:0},Fi=new fn,Ox=new ft;function Bx(i,e,t,n,r,s){const o=new Je(0);let c=r===!0?0:1,f,u,d=null,a=0,l=null;function h(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){const S=y.backgroundBlurriness>0;v=e.get(v,S)}return v}function m(y){let v=!1;const S=h(y);S===null?_(o,c):S&&S.isColor&&(_(S,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){const S=h(v);S&&(S.isCubeTexture||S.mapping===Ko)?(u===void 0&&(u=new je(new ir(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Gr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Fi)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,(d!==S||a!==S.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,a=S.version,l=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(f===void 0&&(f=new je(new Vr(2,2),new kn({name:"BackgroundMaterial",uniforms:Gr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=S,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),f.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||a!==S.version||l!==i.toneMapping)&&(f.material.needsUpdate=!0,d=S,a=S.version,l=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function _(y,v){y.getRGB(vo,Ah(i)),t.buffers.color.setClear(vo.r,vo.g,vo.b,v,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,_(o,c)},render:m,addToRenderList:g,dispose:p}}function kx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null);let s=r,o=!1;function c(L,U,V,k,z){let O=!1;const F=a(L,k,V,U);s!==F&&(s=F,u(s.object)),O=h(L,k,V,z),O&&m(L,k,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,S(L,U,V,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function f(){return i.createVertexArray()}function u(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function a(L,U,V,k){const z=k.wireframe===!0;let O=n[U.id];O===void 0&&(O={},n[U.id]=O);const F=L.isInstancedMesh===!0?L.id:0;let W=O[F];W===void 0&&(W={},O[F]=W);let te=W[V.id];te===void 0&&(te={},W[V.id]=te);let ae=te[z];return ae===void 0&&(ae=l(f()),te[z]=ae),ae}function l(L){const U=[],V=[],k=[];for(let z=0;z<t;z++)U[z]=0,V[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:k,object:L,attributes:{},index:null}}function h(L,U,V,k){const z=s.attributes,O=U.attributes;let F=0;const W=V.getAttributes();for(const te in W)if(W[te].location>=0){const de=z[te];let pe=O[te];if(pe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function m(L,U,V,k){const z={},O=U.attributes;let F=0;const W=V.getAttributes();for(const te in W)if(W[te].location>=0){let de=O[te];de===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),z[te]=pe,F++}s.attributes=z,s.attributesNum=F,s.index=k}function g(){const L=s.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function _(L){p(L,0)}function p(L,U){const V=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;V[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),z[L]!==U&&(i.vertexAttribDivisor(L,U),z[L]=U)}function y(){const L=s.newAttributes,U=s.enabledAttributes;for(let V=0,k=U.length;V<k;V++)U[V]!==L[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function v(L,U,V,k,z,O,F){F===!0?i.vertexAttribIPointer(L,U,V,z,O):i.vertexAttribPointer(L,U,V,k,z,O)}function S(L,U,V,k){g();const z=k.attributes,O=V.getAttributes(),F=U.defaultAttributeValues;for(const W in O){const te=O[W];if(te.location>=0){let ae=z[W];if(ae===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ae!==void 0){const de=ae.normalized,pe=ae.itemSize,De=e.get(ae);if(De===void 0)continue;const K=De.buffer,G=De.type,T=De.bytesPerElement,C=G===i.INT||G===i.UNSIGNED_INT||ae.gpuType===rc;if(ae.isInterleavedBufferAttribute){const j=ae.data,le=j.stride,J=ae.offset;if(j.isInstancedInterleavedBuffer){for(let ie=0;ie<te.locationSize;ie++)p(te.location+ie,j.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<te.locationSize;ie++)_(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ie=0;ie<te.locationSize;ie++)v(te.location+ie,pe/te.locationSize,G,de,le*T,(J+pe/te.locationSize*ie)*T,C)}else{if(ae.isInstancedBufferAttribute){for(let j=0;j<te.locationSize;j++)p(te.location+j,ae.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let j=0;j<te.locationSize;j++)_(te.location+j);i.bindBuffer(i.ARRAY_BUFFER,K);for(let j=0;j<te.locationSize;j++)v(te.location+j,pe/te.locationSize,G,de,pe*T,pe/te.locationSize*j*T,C)}}else if(F!==void 0){const de=F[W];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(te.location,de);break;case 3:i.vertexAttrib3fv(te.location,de);break;case 4:i.vertexAttrib4fv(te.location,de);break;default:i.vertexAttrib1fv(te.location,de)}}}}y()}function A(){w();for(const L in n){const U=n[L];for(const V in U){const k=U[V];for(const z in k){const O=k[z];for(const F in O)d(O[F].object),delete O[F];delete k[z]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const V in U){const k=U[V];for(const z in k){const O=k[z];for(const F in O)d(O[F].object),delete O[F];delete k[z]}}delete n[L.id]}function R(L){for(const U in n){const V=n[U];for(const k in V){const z=V[k];if(z[L.id]===void 0)continue;const O=z[L.id];for(const F in O)d(O[F].object),delete O[F];delete z[L.id]}}}function x(L){for(const U in n){const V=n[U],k=L.isInstancedMesh===!0?L.id:0,z=V[k];if(z!==void 0){for(const O in z){const F=z[O];for(const W in F)d(F[W].object),delete F[W];delete z[O]}delete V[k],Object.keys(V).length===0&&delete n[U]}}}function w(){N(),o=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:w,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function zx(i,e,t){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function o(u,d,a){a!==0&&(i.drawArraysInstanced(n,u,d,a),t.update(d,n,a))}function c(u,d,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,a);let h=0;for(let m=0;m<a;m++)h+=d[m];t.update(h,n,1)}function f(u,d,a,l){if(a===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)o(u[m],d[m],l[m]);else{h.multiDrawArraysInstancedWEBGL(n,u,0,d,0,l,0,a);let m=0;for(let g=0;g<a;g++)m+=d[g]*l[g];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Vx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const x=R===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!x)}function f(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=f(u);d!==u&&(He("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const a=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:a,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:S,maxSamples:A,samples:M}}function Gx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Vi,c=new qe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(a,l){const h=a.length!==0||l||n!==0||r;return r=l,n=a.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,l){t=d(a,l,0)},this.setState=function(a,l,h){const m=a.clippingPlanes,g=a.clipIntersection,_=a.clipShadows,p=i.get(a);if(!r||m===null||m.length===0||s&&!_)s?d(null):u();else{const y=s?0:n,v=y*4;let S=p.clippingState||null;f.value=S,S=d(m,l,v,h);for(let A=0;A!==v;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,l,h,m){const g=a!==null?a.length:0;let _=null;if(g!==0){if(_=f.value,m!==!0||_===null){const p=h+g*4,y=l.matrixWorldInverse;c.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,S=h;v!==g;++v,S+=4)o.copy(a[v]).applyMatrix4(y,c),o.normal.toArray(_,S),_[S+3]=o.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}const Mi=4,Wu=[.125,.215,.35,.446,.526,.582],Hi=20,Hx=256,Qr=new Ec,Xu=new Je;let Va=null,Ga=0,Ha=0,Wa=!1;const Wx=new B;class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:c=Wx}=s;Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ga,Ha),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:si,format:Sn,colorSpace:kr,depthBuffer:!1},r=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xx(s)),this._blurMaterial=Yx(s,e,t),this._ggxMaterial=qx(s,e,t)}return r}_compileMaterial(e){const t=new je(new St,e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,r,s){const f=new nn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],a=this._renderer,l=a.autoClear,h=a.toneMapping;a.getClearColor(Xu),a.toneMapping=Un,a.autoClear=!1,a.state.buffers.depth.getReversed()&&(a.setRenderTarget(r),a.clearDepth(),a.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new ir,new gc({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Xu),p=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(f.up.set(0,u[v],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+d[v],s.y,s.z)):S===1?(f.up.set(0,0,u[v]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+d[v],s.z)):(f.up.set(0,u[v],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+d[v]));const A=this._cubeSize;Sr(r,S*A,v>2?A:0,A,A),a.setRenderTarget(r),p&&a.render(g,f),a.render(e,f)}a.toneMapping=h,a.autoClear=l,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qi||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const f=this._cubeSize;Sr(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const f=o.uniforms,u=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),a=Math.sqrt(u*u-d*d),l=0+u*1.25,h=a*l,{_lodMax:m}=this,g=this._sizeLods[n],_=3*g*(n>m-Mi?n-m+Mi:0),p=4*(this._cubeSize-g);f.envMap.value=e.texture,f.roughness.value=h,f.mipInt.value=m-t,Sr(s,_,p,3*g,2*g),r.setRenderTarget(s),r.render(c,Qr),f.envMap.value=s.texture,f.roughness.value=0,f.mipInt.value=m-n,Sr(e,_,p,3*g,2*g),r.setRenderTarget(e),r.render(c,Qr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,c){const f=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,a=this._lodMeshes[r];a.material=u;const l=u.uniforms,h=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Hi-1),g=s/m,_=isFinite(s)?1+Math.floor(d*g):Hi;_>Hi&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hi}`);const p=[];let y=0;for(let R=0;R<Hi;++R){const x=R/g,w=Math.exp(-x*x/2);p.push(w),R===0?y+=w:R<_&&(y+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;l.envMap.value=e.texture,l.samples.value=_,l.weights.value=p,l.latitudinal.value=o==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:v}=this;l.dTheta.value=m,l.mipInt.value=v-n;const S=this._sizeLods[r],A=3*S*(r>v-Mi?r-v+Mi:0),M=4*(this._cubeSize-S);Sr(t,A,M,3*S,2*S),f.setRenderTarget(t),f.render(a,Qr)}}function Xx(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+Wu.length;for(let o=0;o<s;o++){const c=Math.pow(2,r);e.push(c);let f=1/c;o>i-Mi?f=Wu[o-i+Mi-1]:o===0&&(f=0),t.push(f);const u=1/(c-2),d=-u,a=1+u,l=[d,d,a,d,a,a,d,d,a,a,d,a],h=6,m=6,g=3,_=2,p=1,y=new Float32Array(g*m*h),v=new Float32Array(_*m*h),S=new Float32Array(p*m*h);for(let M=0;M<h;M++){const R=M%3*2/3-1,x=M>2?0:-1,w=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];y.set(w,g*m*M),v.set(l,_*m*M);const N=[M,M,M,M,M,M];S.set(N,p*m*M)}const A=new St;A.setAttribute("position",new En(y,g)),A.setAttribute("uv",new En(v,_)),A.setAttribute("faceIndex",new En(S,p)),n.push(new je(A,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yu(i,e,t){const n=new On(i,e,t);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qx(i,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yx(i,e,t){const n=new Float32Array(Hi),r=new B(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function $u(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ju(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}class Nh extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _h(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ii});s.uniforms.tEquirect.value=t;const o=new je(r,s),c=t.minFilter;return t.minFilter===qi&&(t.minFilter=Vt),new Q_(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function $x(i){let e=new WeakMap,t=new WeakMap,n=null;function r(l,h=!1){return l==null?null:h?o(l):s(l)}function s(l){if(l&&l.isTexture){const h=l.mapping;if(h===ua||h===fa)if(e.has(l)){const m=e.get(l).texture;return c(m,l.mapping)}else{const m=l.image;if(m&&m.height>0){const g=new Nh(m.height);return g.fromEquirectangularTexture(i,l),e.set(l,g),l.addEventListener("dispose",u),c(g.texture,l.mapping)}else return null}}return l}function o(l){if(l&&l.isTexture){const h=l.mapping,m=h===ua||h===fa,g=h===Qi||h===Or;if(m||g){let _=t.get(l);const p=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new qu(i)),_=m?n.fromEquirectangular(l,_):n.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,t.set(l,_),_.texture;if(_!==void 0)return _.texture;{const y=l.image;return m&&y&&y.height>0||g&&y&&f(y)?(n===null&&(n=new qu(i)),_=m?n.fromEquirectangular(l):n.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,t.set(l,_),l.addEventListener("dispose",d),_.texture):null}}}return l}function c(l,h){return h===ua?l.mapping=Qi:h===fa&&(l.mapping=Or),l}function f(l){let h=0;const m=6;for(let g=0;g<m;g++)l[g]!==void 0&&h++;return h===m}function u(l){const h=l.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(l){const h=l.target;h.removeEventListener("dispose",d);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function a(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ko("WebGLRenderer: "+n+" extension not supported."),r}}}function Zx(i,e,t,n){const r={},s=new WeakMap;function o(a){const l=a.target;l.index!==null&&e.remove(l.index);for(const m in l.attributes)e.remove(l.attributes[m]);l.removeEventListener("dispose",o),delete r[l.id];const h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(a,l){return r[l.id]===!0||(l.addEventListener("dispose",o),r[l.id]=!0,t.memory.geometries++),l}function f(a){const l=a.attributes;for(const h in l)e.update(l[h],i.ARRAY_BUFFER)}function u(a){const l=[],h=a.index,m=a.attributes.position;let g=0;if(m===void 0)return;if(h!==null){const y=h.array;g=h.version;for(let v=0,S=y.length;v<S;v+=3){const A=y[v+0],M=y[v+1],R=y[v+2];l.push(A,M,M,R,R,A)}}else{const y=m.array;g=m.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const A=v+0,M=v+1,R=v+2;l.push(A,M,M,R,R,A)}}const _=new(m.count>=65535?ph:dh)(l,1);_.version=g;const p=s.get(a);p&&e.remove(p),s.set(a,_)}function d(a){const l=s.get(a);if(l){const h=a.index;h!==null&&l.version<h.version&&u(a)}else u(a);return s.get(a)}return{get:c,update:f,getWireframeAttribute:d}}function Kx(i,e,t){let n;function r(l){n=l}let s,o;function c(l){s=l.type,o=l.bytesPerElement}function f(l,h){i.drawElements(n,h,s,l*o),t.update(h,n,1)}function u(l,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,l*o,m),t.update(h,n,m))}function d(l,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,l,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];t.update(_,n,1)}function a(l,h,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<l.length;p++)u(l[p]/o,h[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,h,0,s,l,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=h[y]*g[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=a}function Jx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qx(i,e,t){const n=new WeakMap,r=new vt;function s(o,c,f){const u=o.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,a=d!==void 0?d.length:0;let l=n.get(c);if(l===void 0||l.count!==a){let w=function(){R.dispose(),n.delete(c),c.removeEventListener("dispose",w)};l!==void 0&&l.texture.dispose();const h=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,g=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],y=c.morphAttributes.color||[];let v=0;h===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let S=c.attributes.position.count*v,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const M=new Float32Array(S*A*4*a),R=new ch(M,S,A,a);R.type=yn,R.needsUpdate=!0;const x=v*4;for(let N=0;N<a;N++){const L=_[N],U=p[N],V=y[N],k=S*A*4*N;for(let z=0;z<L.count;z++){const O=z*x;h===!0&&(r.fromBufferAttribute(L,z),M[k+O+0]=r.x,M[k+O+1]=r.y,M[k+O+2]=r.z,M[k+O+3]=0),m===!0&&(r.fromBufferAttribute(U,z),M[k+O+4]=r.x,M[k+O+5]=r.y,M[k+O+6]=r.z,M[k+O+7]=0),g===!0&&(r.fromBufferAttribute(V,z),M[k+O+8]=r.x,M[k+O+9]=r.y,M[k+O+10]=r.z,M[k+O+11]=V.itemSize===4?r.w:1)}}l={count:a,texture:R,size:new fe(S,A)},n.set(c,l),c.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let g=0;g<u.length;g++)h+=u[g];const m=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",u)}f.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:s}}function ev(i,e,t,n,r){let s=new WeakMap;function o(u){const d=r.render.frame,a=u.geometry,l=e.get(u,a);if(s.get(l)!==d&&(e.update(l),s.set(l,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",f)===!1&&u.addEventListener("dispose",f),s.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return l}function c(){s=new WeakMap}function f(u){const d=u.target;d.removeEventListener("dispose",f),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}const tv={[$f]:"LINEAR_TONE_MAPPING",[jf]:"REINHARD_TONE_MAPPING",[Zf]:"CINEON_TONE_MAPPING",[Kf]:"ACES_FILMIC_TONE_MAPPING",[Qf]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Jf]:"CUSTOM_TONE_MAPPING"};function nv(i,e,t,n,r){const s=new On(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new On(e,t,{type:si,depthBuffer:!1,stencilBuffer:!1}),c=new St;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));const f=new W_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new je(c,f),d=new Ec(-1,1,1,-1,0,1);let a=null,l=null,h=!1,m,g=null,_=[],p=!1;this.setSize=function(y,v){s.setSize(y,v),o.setSize(y,v);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){_=y,p=_.length>0&&_[0].isRenderPass===!0;const v=s.width,S=s.height;for(let A=0;A<_.length;A++){const M=_[A];M.setSize&&M.setSize(v,S)}},this.begin=function(y,v){if(h||y.toneMapping===Un&&_.length===0)return!1;if(g=v,v!==null){const S=v.width,A=v.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return p===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return p},this.end=function(y,v){y.toneMapping=m,h=!0;let S=s,A=o;for(let M=0;M<_.length;M++){const R=_[M];if(R.enabled!==!1&&(R.render(y,A,S,v),R.needsSwap!==!1)){const x=S;S=A,A=x}}if(a!==y.outputColorSpace||l!==y.toneMapping){a=y.outputColorSpace,l=y.toneMapping,f.defines={},tt.getTransfer(a)===at&&(f.defines.SRGB_TRANSFER="");const M=tv[l];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(u,d),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),c.dispose(),f.dispose()}}const Uh=new $t,jl=new Ts(1,1),Fh=new ch,Oh=new Hm,Bh=new _h,Zu=[],Ku=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zu[r];if(s===void 0&&(s=new Float32Array(r),Zu[r]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(s,c)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ea(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function av(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),At(t,n)}}function lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),At(t,n)}}function cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),At(t,n)}}function uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function xv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=t.isReversedDepthBuffer()?dc:hc,s=jl):s=Uh,t.setTexture2D(e||s,r)}function vv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Oh,r)}function yv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bh,r)}function Sv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fh,r)}function Mv(i){switch(i){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Sv}}function bv(i,e){i.uniform1fv(this.addr,e)}function Ev(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function wv(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cv(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Dv(i,e){i.uniform4iv(this.addr,e)}function Nv(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Bv(i,e,t){const n=this.cache,r=e.length,s=ea(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=jl:o=Uh;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function kv(i,e,t){const n=this.cache,r=e.length,s=ea(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Oh,s[o])}function zv(i,e,t){const n=this.cache,r=e.length,s=ea(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bh,s[o])}function Vv(i,e,t){const n=this.cache,r=e.length,s=ea(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fh,s[o])}function Gv(i){switch(i){case 5126:return bv;case 35664:return Ev;case 35665:return wv;case 35666:return Tv;case 35674:return Av;case 35675:return Cv;case 35676:return Rv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Vv}}class Hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}}class Xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function tf(i,e){i.seq.push(e),i.map[e.id]=e}function qv(i,e,t){const n=i.name,r=n.length;for(Xa.lastIndex=0;;){const s=Xa.exec(n),o=Xa.lastIndex;let c=s[1];const f=s[2]==="]",u=s[3];if(f&&(c=c|0),u===void 0||u==="["&&o+2===r){tf(t,u===void 0?new Hv(c,i,e):new Wv(c,i,e));break}else{let a=t.map[c];a===void 0&&(a=new Xv(c),tf(t,a)),t=a}}}class Io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),f=e.getUniformLocation(t,c.name);qv(c,f,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yv=37297;let $v=0;function jv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const rf=new qe;function Zv(i){tt._getMatrix(rf,tt.workingColorSpace,i);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+jv(i.getShaderSource(e),c)}else return s}function Kv(i,e){const t=Zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jv={[$f]:"Linear",[jf]:"Reinhard",[Zf]:"Cineon",[Kf]:"ACESFilmic",[Qf]:"AgX",[eh]:"Neutral",[Jf]:"Custom"};function Qv(i,e){const t=Jv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new B;function ey(){tt.getLuminanceCoefficients(yo);const i=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function as(i){return i!==""}function of(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(ry,oy)}const sy=new Map;function oy(i,e){let t=$e[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=$e[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(i){return i.replace(ay,ly)}function ly(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cy={[wo]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function uy(i){return cy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fy={[Qi]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Ko]:"ENVMAP_TYPE_CUBE_UV"};function hy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const dy={[Or]:"ENVMAP_MODE_REFRACTION"};function py(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const my={[ic]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function _y(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":my[i.combine]||"ENVMAP_BLENDING_NONE"}function gy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const f=uy(t),u=hy(t),d=py(t),a=_y(t),l=gy(t),h=ty(t),m=ny(s),g=r.createProgram();let _,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(as).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(as).join(`
`),p.length>0&&(p+=`
`)):(_=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=Zl(o),o=of(o,t),o=af(o,t),c=Zl(c),c=of(c,t),c=af(c,t),o=lf(o),c=lf(c),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+_+o,S=y+p+c,A=nf(r,r.VERTEX_SHADER,v),M=nf(r,r.FRAGMENT_SHADER,S);r.attachShader(g,A),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(L){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",V=r.getShaderInfoLog(A)||"",k=r.getShaderInfoLog(M)||"",z=U.trim(),O=V.trim(),F=k.trim();let W=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,M);else{const ae=sf(r,A,"vertex"),de=sf(r,M,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ae+`
`+de)}else z!==""?He("WebGLProgram: Program Info Log:",z):(O===""||F==="")&&(te=!1);te&&(L.diagnostics={runnable:W,programLog:z,vertexShader:{log:O,prefix:_},fragmentShader:{log:F,prefix:p}})}r.deleteShader(A),r.deleteShader(M),x=new Io(r,g),w=iy(r,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(g,Yv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=M,this}let vy=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sy(e),t.set(e,n)),n}}class Sy{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}}function My(i,e,t,n,r,s){const o=new uh,c=new yy,f=new Set,u=[],d=new Map,a=n.logarithmicDepthBuffer;let l=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return f.add(x),x===0?"uv":`uv${x}`}function g(x,w,N,L,U){const V=L.fog,k=U.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||z,O),W=F&&F.mapping===Ko?F.image.height:null,te=h[x.type];x.precision!==null&&(l=n.getMaxPrecision(x.precision),l!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",l,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=ae!==void 0?ae.length:0;let pe=0;k.morphAttributes.position!==void 0&&(pe=1),k.morphAttributes.normal!==void 0&&(pe=2),k.morphAttributes.color!==void 0&&(pe=3);let De,K,G,T;if(te){const ot=In[te];De=ot.vertexShader,K=ot.fragmentShader}else De=x.vertexShader,K=x.fragmentShader,c.update(x),G=c.getVertexShaderID(x),T=c.getFragmentShaderID(x);const C=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),le=U.isInstancedMesh===!0,J=U.isBatchedMesh===!0,ie=!!x.map,Se=!!x.matcap,me=!!F,H=!!x.aoMap,Y=!!x.lightMap,Q=!!x.bumpMap,$=!!x.normalMap,b=!!x.displacementMap,D=!!x.emissiveMap,ce=!!x.metalnessMap,be=!!x.roughnessMap,xe=x.anisotropy>0,I=x.clearcoat>0,E=x.dispersion>0,X=x.iridescence>0,se=x.sheen>0,he=x.transmission>0,re=xe&&!!x.anisotropyMap,Te=I&&!!x.clearcoatMap,_e=I&&!!x.clearcoatNormalMap,we=I&&!!x.clearcoatRoughnessMap,Oe=X&&!!x.iridescenceMap,ge=X&&!!x.iridescenceThicknessMap,Me=se&&!!x.sheenColorMap,Fe=se&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Ae=!!x.specularColorMap,Xe=!!x.specularIntensityMap,q=he&&!!x.transmissionMap,Ee=he&&!!x.thicknessMap,ye=!!x.gradientMap,Ce=!!x.alphaMap,ve=x.alphaTest>0,ue=!!x.alphaHash,Ne=!!x.extensions;let Ge=Un;x.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const dt={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:K,defines:x.defines,customVertexShaderID:G,customFragmentShaderID:T,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:l,batching:J,batchingColor:J&&U._colorsTexture!==null,instancing:le,instancingColor:le&&U.instanceColor!==null,instancingMorph:le&&U.morphTexture!==null,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kr,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:Se,envMap:me,envMapMode:me&&F.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Y,bumpMap:Q,normalMap:$,displacementMap:b,emissiveMap:D,normalMapObjectSpace:$&&x.normalMapType===fm,normalMapTangentSpace:$&&x.normalMapType===fc,metalnessMap:ce,roughnessMap:be,anisotropy:xe,anisotropyMap:re,clearcoat:I,clearcoatMap:Te,clearcoatNormalMap:_e,clearcoatRoughnessMap:we,dispersion:E,iridescence:X,iridescenceMap:Oe,iridescenceThicknessMap:ge,sheen:se,sheenColorMap:Me,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:Ae,specularIntensityMap:Xe,transmission:he,transmissionMap:q,thicknessMap:Ee,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Cr&&x.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ve,alphaHash:ue,combine:x.combine,mapUv:ie&&m(x.map.channel),aoMapUv:H&&m(x.aoMap.channel),lightMapUv:Y&&m(x.lightMap.channel),bumpMapUv:Q&&m(x.bumpMap.channel),normalMapUv:$&&m(x.normalMap.channel),displacementMapUv:b&&m(x.displacementMap.channel),emissiveMapUv:D&&m(x.emissiveMap.channel),metalnessMapUv:ce&&m(x.metalnessMap.channel),roughnessMapUv:be&&m(x.roughnessMap.channel),anisotropyMapUv:re&&m(x.anisotropyMap.channel),clearcoatMapUv:Te&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&m(x.sheenRoughnessMap.channel),specularMapUv:Le&&m(x.specularMap.channel),specularColorMapUv:Ae&&m(x.specularColorMap.channel),specularIntensityMapUv:Xe&&m(x.specularIntensityMap.channel),transmissionMapUv:q&&m(x.transmissionMap.channel),thicknessMapUv:Ee&&m(x.thicknessMap.channel),alphaMapUv:Ce&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($||xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(ie||Ce),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&$===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:a,reversedDepthBuffer:j,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&x.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=f.has(1),dt.vertexUv2s=f.has(2),dt.vertexUv3s=f.has(3),f.clear(),dt}function _(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)w.push(N),w.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const w=h[x.type];let N;if(w){const L=In[w];N=V_.clone(L.uniforms)}else N=x.uniforms;return N}function S(x,w){let N=d.get(w);return N!==void 0?++N.usedTimes:(N=new xy(i,w,x,r),u.push(N),d.set(w,N)),N}function A(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function M(x){c.remove(x)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:R}}function by(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,f){i.get(o)[c]=f}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ey(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ff(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(l){let h=0;return l.isInstancedMesh&&(h+=2),l.isSkinnedMesh&&(h+=1),h}function c(l,h,m,g,_,p){let y=i[e];return y===void 0?(y={id:l.id,object:l,geometry:h,material:m,materialVariant:o(l),groupOrder:g,renderOrder:l.renderOrder,z:_,group:p},i[e]=y):(y.id=l.id,y.object=l,y.geometry=h,y.material=m,y.materialVariant=o(l),y.groupOrder=g,y.renderOrder=l.renderOrder,y.z=_,y.group=p),e++,y}function f(l,h,m,g,_,p){const y=c(l,h,m,g,_,p);m.transmission>0?n.push(y):m.transparent===!0?r.push(y):t.push(y)}function u(l,h,m,g,_,p){const y=c(l,h,m,g,_,p);m.transmission>0?n.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function d(l,h){t.length>1&&t.sort(l||Ey),n.length>1&&n.sort(h||uf),r.length>1&&r.sort(h||uf)}function a(){for(let l=e,h=i.length;l<h;l++){const m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:f,unshift:u,finish:a,sort:d}}function wy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ff,i.set(n,[o])):r>=s.length?(o=new ff,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Ay(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cy=0;function Ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Py(i){const e=new Ty,t=Ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);const r=new B,s=new ft,o=new ft;function c(u){let d=0,a=0,l=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let h=0,m=0,g=0,_=0,p=0,y=0,v=0,S=0,A=0,M=0,R=0;u.sort(Ry);for(let w=0,N=u.length;w<N;w++){const L=u[w],U=L.color,V=L.intensity,k=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Br?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=U.r*V,a+=U.g*V,l+=U.b*V;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],V);R++}else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,W=t.get(L);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.directionalShadow[h]=W,n.directionalShadowMap[h]=z,n.directionalShadowMatrix[h]=L.shadow.matrix,y++}n.directional[h]=O,h++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(U).multiplyScalar(V),O.distance=k,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[g]=O;const F=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,F.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[g]=F.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=z,S++}g++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(U).multiplyScalar(V),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=O,_++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const F=L.shadow,W=t.get(L);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=O,m++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(V),O.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=O,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=a,n.ambient[2]=l;const x=n.hash;(x.directionalLength!==h||x.pointLength!==m||x.spotLength!==g||x.rectAreaLength!==_||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==v||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,x.directionalLength=h,x.pointLength=m,x.spotLength=g,x.rectAreaLength=_,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=v,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=R,n.version=Cy++)}function f(u,d){let a=0,l=0,h=0,m=0,g=0;const _=d.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){const v=u[p];if(v.isDirectionalLight){const S=n.directional[a];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),a++}else if(v.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(v.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=n.point[l];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),l++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:c,setupView:f,state:n}}function hf(i){const e=new Py(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:o}}function Iy(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new hf(i),e.set(r,[c])):s>=o.length?(c=new hf(i),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
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
}`,Ny=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Uy=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],df=new ft,es=new B,qa=new B;function Fy(i,e,t){let n=new xc;const r=new fe,s=new fe,o=new vt,c=new q_,f=new Y_,u={},d=t.maxTextureSize,a={[Ti]:Zt,[Zt]:Ti,[cn]:cn},l=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Ly,fragmentShader:Dy}),h=l.clone();h.defines.HORIZONTAL_PASS=1;const m=new St;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new je(m,l),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(M,R,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;this.type===Yf&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const w=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=M.length;k<z;k++){const O=M[k],F=O.shadow;if(F===void 0){He("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const W=F.getFrameExtents();r.multiply(W),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,F.mapSize.y=s.y));const te=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=te,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===rs){if(O.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new On(r.x,r.y,{format:Br,type:si,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Ts(r.x,r.y,yn),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=oi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft}else O.isPointLight?(F.map=new Nh(r.x),F.map.depthTexture=new l_(r.x,Bn)):(F.map=new On(r.x,r.y),F.map.depthTexture=new Ts(r.x,r.y,Bn)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=oi,this.type===wo?(F.map.depthTexture.compareFunction=te?dc:hc,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft);F.camera.updateProjectionMatrix()}const ae=F.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ae;de++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,de),i.clear();else{de===0&&(i.setRenderTarget(F.map),i.clear());const pe=F.getViewport(de);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),U.viewport(o)}if(O.isPointLight){const pe=F.camera,De=F.matrix,K=O.distance||pe.far;K!==pe.far&&(pe.far=K,pe.updateProjectionMatrix()),es.setFromMatrixPosition(O.matrixWorld),pe.position.copy(es),qa.copy(pe.position),qa.add(Ny[de]),pe.up.copy(Uy[de]),pe.lookAt(qa),pe.updateMatrixWorld(),De.makeTranslation(-es.x,-es.y,-es.z),df.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(df,pe.coordinateSystem,pe.reversedDepth)}else F.updateMatrices(O);n=F.getFrustum(),S(R,x,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===rs&&y(F,x),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,N,L)};function y(M,R){const x=e.update(g);l.defines.VSM_SAMPLES!==M.blurSamples&&(l.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,l.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new On(r.x,r.y,{format:Br,type:si})),l.uniforms.shadow_pass.value=M.map.depthTexture,l.uniforms.resolution.value=M.mapSize,l.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,x,l,g,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,x,h,g,null)}function v(M,R,x,w){let N=null;const L=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?f:c,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=N.uuid,V=R.uuid;let k=u[U];k===void 0&&(k={},u[U]=k);let z=k[V];z===void 0&&(z=N.clone(),k[V]=z,R.addEventListener("dispose",A)),N=z}if(N.visible=R.visible,N.wireframe=R.wireframe,w===rs?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:a[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=i.properties.get(N);U.light=x}return N}function S(M,R,x,w,N){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===rs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const V=e.update(M),k=M.material;if(Array.isArray(k)){const z=V.groups;for(let O=0,F=z.length;O<F;O++){const W=z[O],te=k[W.materialIndex];if(te&&te.visible){const ae=v(M,te,w,N);M.onBeforeShadow(i,M,R,x,V,ae,W),i.renderBufferDirect(x,null,V,ae,M,W),M.onAfterShadow(i,M,R,x,V,ae,W)}}}else if(k.visible){const z=v(M,k,w,N);M.onBeforeShadow(i,M,R,x,V,z,null),i.renderBufferDirect(x,null,V,z,M,null),M.onAfterShadow(i,M,R,x,V,z,null)}}const U=M.children;for(let V=0,k=U.length;V<k;V++)S(U[V],R,x,w,N)}function A(M){M.target.removeEventListener("dispose",A);for(const x in u){const w=u[x],N=M.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function Oy(i,e){function t(){let q=!1;const Ee=new vt;let ye=null;const Ce=new vt(0,0,0,0);return{setMask:function(ve){ye!==ve&&!q&&(i.colorMask(ve,ve,ve,ve),ye=ve)},setLocked:function(ve){q=ve},setClear:function(ve,ue,Ne,Ge,dt){dt===!0&&(ve*=Ge,ue*=Ge,Ne*=Ge),Ee.set(ve,ue,Ne,Ge),Ce.equals(Ee)===!1&&(i.clearColor(ve,ue,Ne,Ge),Ce.copy(Ee))},reset:function(){q=!1,ye=null,Ce.set(-1,0,0,0)}}}function n(){let q=!1,Ee=!1,ye=null,Ce=null,ve=null;return{setReversed:function(ue){if(Ee!==ue){const Ne=e.get("EXT_clip_control");ue?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Ee=ue;const Ge=ve;ve=null,this.setClear(Ge)}},getReversed:function(){return Ee},setTest:function(ue){ue?C(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ue){ye!==ue&&!q&&(i.depthMask(ue),ye=ue)},setFunc:function(ue){if(Ee&&(ue=Sm[ue]),Ce!==ue){switch(ue){case sl:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=ue}},setLocked:function(ue){q=ue},setClear:function(ue){ve!==ue&&(ve=ue,Ee&&(ue=1-ue),i.clearDepth(ue))},reset:function(){q=!1,ye=null,Ce=null,ve=null,Ee=!1}}}function r(){let q=!1,Ee=null,ye=null,Ce=null,ve=null,ue=null,Ne=null,Ge=null,dt=null;return{setTest:function(ot){q||(ot?C(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ot){Ee!==ot&&!q&&(i.stencilMask(ot),Ee=ot)},setFunc:function(ot,Vn,Gn){(ye!==ot||Ce!==Vn||ve!==Gn)&&(i.stencilFunc(ot,Vn,Gn),ye=ot,Ce=Vn,ve=Gn)},setOp:function(ot,Vn,Gn){(ue!==ot||Ne!==Vn||Ge!==Gn)&&(i.stencilOp(ot,Vn,Gn),ue=ot,Ne=Vn,Ge=Gn)},setLocked:function(ot){q=ot},setClear:function(ot){dt!==ot&&(i.clearStencil(ot),dt=ot)},reset:function(){q=!1,Ee=null,ye=null,Ce=null,ve=null,ue=null,Ne=null,Ge=null,dt=null}}}const s=new t,o=new n,c=new r,f=new WeakMap,u=new WeakMap;let d={},a={},l=new WeakMap,h=[],m=null,g=!1,_=null,p=null,y=null,v=null,S=null,A=null,M=null,R=new Je(0,0,0),x=0,w=!1,N=null,L=null,U=null,V=null,k=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=F>=2);let te=null,ae={};const de=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),De=new vt().fromArray(de),K=new vt().fromArray(pe);function G(q,Ee,ye,Ce){const ve=new Uint8Array(4),ue=i.createTexture();i.bindTexture(q,ue),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ye;Ne++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Ee+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ue}const T={};T[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),C(i.DEPTH_TEST),o.setFunc(Fr),Q(!1),$(Kc),C(i.CULL_FACE),H(ii);function C(q){d[q]!==!0&&(i.enable(q),d[q]=!0)}function j(q){d[q]!==!1&&(i.disable(q),d[q]=!1)}function le(q,Ee){return a[q]!==Ee?(i.bindFramebuffer(q,Ee),a[q]=Ee,q===i.DRAW_FRAMEBUFFER&&(a[i.FRAMEBUFFER]=Ee),q===i.FRAMEBUFFER&&(a[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function J(q,Ee){let ye=h,Ce=!1;if(q){ye=l.get(Ee),ye===void 0&&(ye=[],l.set(Ee,ye));const ve=q.textures;if(ye.length!==ve.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ne=ve.length;ue<Ne;ue++)ye[ue]=i.COLOR_ATTACHMENT0+ue;ye.length=ve.length,Ce=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ye)}function ie(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const Se={[Gi]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};Se[qp]=i.MIN,Se[Yp]=i.MAX;const me={[$p]:i.ZERO,[jp]:i.ONE,[Zp]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function H(q,Ee,ye,Ce,ve,ue,Ne,Ge,dt,ot){if(q===ii){g===!0&&(j(i.BLEND),g=!1);return}if(g===!1&&(C(i.BLEND),g=!0),q!==Hp){if(q!==_||ot!==w){if((p!==Gi||S!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,S=Gi),ot)switch(q){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",q);break}else switch(q){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",q);break}y=null,v=null,A=null,M=null,R.set(0,0,0),x=0,_=q,w=ot}return}ve=ve||Ee,ue=ue||ye,Ne=Ne||Ce,(Ee!==p||ve!==S)&&(i.blendEquationSeparate(Se[Ee],Se[ve]),p=Ee,S=ve),(ye!==y||Ce!==v||ue!==A||Ne!==M)&&(i.blendFuncSeparate(me[ye],me[Ce],me[ue],me[Ne]),y=ye,v=Ce,A=ue,M=Ne),(Ge.equals(R)===!1||dt!==x)&&(i.blendColor(Ge.r,Ge.g,Ge.b,dt),R.copy(Ge),x=dt),_=q,w=!1}function Y(q,Ee){q.side===cn?j(i.CULL_FACE):C(i.CULL_FACE);let ye=q.side===Zt;Ee&&(ye=!ye),Q(ye),q.blending===Cr&&q.transparent===!1?H(ii):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);const Ce=q.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),D(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function $(q){q!==Vp?(C(i.CULL_FACE),q!==L&&(q===Kc?i.cullFace(i.BACK):q===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=q}function b(q){q!==U&&(O&&i.lineWidth(q),U=q)}function D(q,Ee,ye){q?(C(i.POLYGON_OFFSET_FILL),(V!==Ee||k!==ye)&&(V=Ee,k=ye,o.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,ye))):j(i.POLYGON_OFFSET_FILL)}function ce(q){q?C(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function be(q){q===void 0&&(q=i.TEXTURE0+z-1),te!==q&&(i.activeTexture(q),te=q)}function xe(q,Ee,ye){ye===void 0&&(te===null?ye=i.TEXTURE0+z-1:ye=te);let Ce=ae[ye];Ce===void 0&&(Ce={type:void 0,texture:void 0},ae[ye]=Ce),(Ce.type!==q||Ce.texture!==Ee)&&(te!==ye&&(i.activeTexture(ye),te=ye),i.bindTexture(q,Ee||T[q]),Ce.type=q,Ce.texture=Ee)}function I(){const q=ae[te];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function se(){try{i.texSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function he(){try{i.texSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function re(){try{i.compressedTexSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function _e(){try{i.texStorage2D(...arguments)}catch(q){et("WebGLState:",q)}}function we(){try{i.texStorage3D(...arguments)}catch(q){et("WebGLState:",q)}}function Oe(){try{i.texImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function ge(){try{i.texImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function Me(q){De.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),De.copy(q))}function Fe(q){K.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),K.copy(q))}function Le(q,Ee){let ye=u.get(Ee);ye===void 0&&(ye=new WeakMap,u.set(Ee,ye));let Ce=ye.get(q);Ce===void 0&&(Ce=i.getUniformBlockIndex(Ee,q.name),ye.set(q,Ce))}function Ae(q,Ee){const Ce=u.get(Ee).get(q);f.get(Ee)!==Ce&&(i.uniformBlockBinding(Ee,Ce,q.__bindingPointIndex),f.set(Ee,Ce))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,ae={},a={},l=new WeakMap,h=[],m=null,g=!1,_=null,p=null,y=null,v=null,S=null,A=null,M=null,R=new Je(0,0,0),x=0,w=!1,N=null,L=null,U=null,V=null,k=null,De.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:C,disable:j,bindFramebuffer:le,drawBuffers:J,useProgram:ie,setBlending:H,setMaterial:Y,setFlipSided:Q,setCullFace:$,setLineWidth:b,setPolygonOffset:D,setScissorTest:ce,activeTexture:be,bindTexture:xe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Oe,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:Ae,texStorage2D:_e,texStorage3D:we,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:re,compressedTexSubImage3D:Te,scissor:Me,viewport:Fe,reset:Xe}}function By(i,e,t,n,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new fe,d=new WeakMap;let a;const l=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return h?new OffscreenCanvas(I,E):Bo("canvas")}function g(I,E,X){let se=1;const he=xe(I);if((he.width>X||he.height>X)&&(se=X/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const re=Math.floor(se*he.width),Te=Math.floor(se*he.height);a===void 0&&(a=m(re,Te));const _e=E?m(re,Te):a;return _e.width=re,_e.height=Te,_e.getContext("2d").drawImage(I,0,0,re,Te),He("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+re+"x"+Te+")."),_e}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,E,X,se,he=!1){if(I!==null){if(i[I]!==void 0)return i[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let re=E;if(E===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),E===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),E===i.RGBA){const Te=he?Oo:tt.getTransfer(se);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=Te===at?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(I,E){let X;return I?E===null||E===Bn||E===bs?X=i.DEPTH24_STENCIL8:E===yn?X=i.DEPTH32F_STENCIL8:E===Ms&&(X=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bn||E===bs?X=i.DEPTH_COMPONENT24:E===yn?X=i.DEPTH_COMPONENT32F:E===Ms&&(X=i.DEPTH_COMPONENT16),X}function A(I,E){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ft&&I.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function M(I){const E=I.target;E.removeEventListener("dispose",M),x(E),E.isVideoTexture&&d.delete(E)}function R(I){const E=I.target;E.removeEventListener("dispose",R),N(E)}function x(I){const E=n.get(I);if(E.__webglInit===void 0)return;const X=I.source,se=l.get(X);if(se){const he=se[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(I),Object.keys(se).length===0&&l.delete(X)}n.remove(I)}function w(I){const E=n.get(I);i.deleteTexture(E.__webglTexture);const X=I.source,se=l.get(X);delete se[E.__cacheKey],o.memory.textures--}function N(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let he=0;he<E.__webglFramebuffer[se].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[se][he]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let se=0,he=X.length;se<he;se++){const re=n.get(X[se]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[se])}n.remove(I)}let L=0;function U(){L=0}function V(){const I=L;return I>=r.maxTextures&&He("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),L+=1,I}function k(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function z(I,E){const X=n.get(I);if(I.isVideoTexture&&ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const se=I.image;if(se===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{T(X,I,E);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function O(I,E){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){T(X,I,E);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function F(I,E){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){T(X,I,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function W(I,E){const X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){C(X,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const te={[hl]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},ae={[Ft]:i.NEAREST,[cm]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},de={[hm]:i.NEVER,[gm]:i.ALWAYS,[dm]:i.LESS,[hc]:i.LEQUAL,[pm]:i.EQUAL,[dc]:i.GEQUAL,[mm]:i.GREATER,[_m]:i.NOTEQUAL};function pe(I,E){if(E.type===yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vt||E.magFilter===ha||E.magFilter===Ws||E.magFilter===qi||E.minFilter===Vt||E.minFilter===ha||E.minFilter===Ws||E.minFilter===qi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,te[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ae[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ft||E.minFilter!==Ws&&E.minFilter!==qi||E.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function De(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",M));const se=E.source;let he=l.get(se);he===void 0&&(he={},l.set(se,he));const re=k(E);if(re!==I.__cacheKey){he[re]===void 0&&(he[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),he[re].usedTimes++;const Te=he[I.__cacheKey];Te!==void 0&&(he[I.__cacheKey].usedTimes--,Te.usedTimes===0&&w(E)),I.__cacheKey=re,I.__webglTexture=he[re].texture}return X}function K(I,E,X){return Math.floor(Math.floor(I/X)/E)}function G(I,E,X,se){const re=I.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,se,E.data);else{re.sort((ge,Me)=>ge.start-Me.start);let Te=0;for(let ge=1;ge<re.length;ge++){const Me=re[Te],Fe=re[ge],Le=Me.start+Me.count,Ae=K(Fe.start,E.width,4),Xe=K(Me.start,E.width,4);Fe.start<=Le+1&&Ae===Xe&&K(Fe.start+Fe.count-1,E.width,4)===Ae?Me.count=Math.max(Me.count,Fe.start+Fe.count-Me.start):(++Te,re[Te]=Fe)}re.length=Te+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ge=0,Me=re.length;ge<Me;ge++){const Fe=re[ge],Le=Math.floor(Fe.start/4),Ae=Math.ceil(Fe.count/4),Xe=Le%E.width,q=Math.floor(Le/E.width),Ee=Ae,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Xe,q,Ee,ye,X,se,E.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function T(I,E,X){let se=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=i.TEXTURE_3D);const he=De(I,E),re=E.source;t.bindTexture(se,I.__webglTexture,i.TEXTURE0+X);const Te=n.get(re);if(re.version!==Te.__version||he===!0){t.activeTexture(i.TEXTURE0+X);const _e=tt.getPrimaries(tt.workingColorSpace),we=E.colorSpace===xi?null:tt.getPrimaries(E.colorSpace),Oe=E.colorSpace===xi||_e===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ge=g(E.image,!1,r.maxTextureSize);ge=be(E,ge);const Me=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type);let Le=v(E.internalFormat,Me,Fe,E.colorSpace,E.isVideoTexture);pe(se,E);let Ae;const Xe=E.mipmaps,q=E.isVideoTexture!==!0,Ee=Te.__version===void 0||he===!0,ye=re.dataReady,Ce=A(E,ge);if(E.isDepthTexture)Le=S(E.format===Yi,E.type),Ee&&(q?t.texStorage2D(i.TEXTURE_2D,1,Le,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Le,ge.width,ge.height,0,Me,Fe,null));else if(E.isDataTexture)if(Xe.length>0){q&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,Xe[0].width,Xe[0].height);for(let ve=0,ue=Xe.length;ve<ue;ve++)Ae=Xe[ve],q?ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Me,Fe,Ae.data):t.texImage2D(i.TEXTURE_2D,ve,Le,Ae.width,Ae.height,0,Me,Fe,Ae.data);E.generateMipmaps=!1}else q?(Ee&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,ge.width,ge.height),ye&&G(E,ge,Me,Fe)):t.texImage2D(i.TEXTURE_2D,0,Le,ge.width,ge.height,0,Me,Fe,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Le,Xe[0].width,Xe[0].height,ge.depth);for(let ve=0,ue=Xe.length;ve<ue;ve++)if(Ae=Xe[ve],E.format!==Sn)if(Me!==null)if(q){if(ye)if(E.layerUpdates.size>0){const Ne=Hu(Ae.width,Ae.height,E.format,E.type);for(const Ge of E.layerUpdates){const dt=Ae.data.subarray(Ge*Ne/Ae.data.BYTES_PER_ELEMENT,(Ge+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Ge,Ae.width,Ae.height,1,Me,dt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ge.depth,Me,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Le,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ge.depth,Me,Fe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Le,Ae.width,Ae.height,ge.depth,0,Me,Fe,Ae.data)}else{q&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ce,Le,Xe[0].width,Xe[0].height);for(let ve=0,ue=Xe.length;ve<ue;ve++)Ae=Xe[ve],E.format!==Sn?Me!==null?q?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Le,Ae.width,Ae.height,0,Ae.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Me,Fe,Ae.data):t.texImage2D(i.TEXTURE_2D,ve,Le,Ae.width,Ae.height,0,Me,Fe,Ae.data)}else if(E.isDataArrayTexture)if(q){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Le,ge.width,ge.height,ge.depth),ye)if(E.layerUpdates.size>0){const ve=Hu(ge.width,ge.height,E.format,E.type);for(const ue of E.layerUpdates){const Ne=ge.data.subarray(ue*ve/ge.data.BYTES_PER_ELEMENT,(ue+1)*ve/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ge.width,ge.height,1,Me,Fe,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Me,Fe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Me,Fe,ge.data);else if(E.isData3DTexture)q?(Ee&&t.texStorage3D(i.TEXTURE_3D,Ce,Le,ge.width,ge.height,ge.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Me,Fe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Me,Fe,ge.data);else if(E.isFramebufferTexture){if(Ee)if(q)t.texStorage2D(i.TEXTURE_2D,Ce,Le,ge.width,ge.height);else{let ve=ge.width,ue=ge.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Le,ve,ue,0,Me,Fe,null),ve>>=1,ue>>=1}}else if(Xe.length>0){if(q&&Ee){const ve=xe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Le,ve.width,ve.height)}for(let ve=0,ue=Xe.length;ve<ue;ve++)Ae=Xe[ve],q?ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Me,Fe,Ae):t.texImage2D(i.TEXTURE_2D,ve,Le,Me,Fe,Ae);E.generateMipmaps=!1}else if(q){if(Ee){const ve=xe(ge);t.texStorage2D(i.TEXTURE_2D,Ce,Le,ve.width,ve.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Fe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Le,Me,Fe,ge);_(E)&&p(se),Te.__version=re.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function C(I,E,X){if(E.image.length!==6)return;const se=De(I,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const re=n.get(he);if(he.version!==re.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const Te=tt.getPrimaries(tt.workingColorSpace),_e=E.colorSpace===xi?null:tt.getPrimaries(E.colorSpace),we=E.colorSpace===xi||Te===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,ge=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let ue=0;ue<6;ue++)!Oe&&!ge?Me[ue]=g(E.image[ue],!0,r.maxCubemapSize):Me[ue]=ge?E.image[ue].image:E.image[ue],Me[ue]=be(E,Me[ue]);const Fe=Me[0],Le=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Xe=v(E.internalFormat,Le,Ae,E.colorSpace),q=E.isVideoTexture!==!0,Ee=re.__version===void 0||se===!0,ye=he.dataReady;let Ce=A(E,Fe);pe(i.TEXTURE_CUBE_MAP,E);let ve;if(Oe){q&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,Fe.width,Fe.height);for(let ue=0;ue<6;ue++){ve=Me[ue].mipmaps;for(let Ne=0;Ne<ve.length;Ne++){const Ge=ve[Ne];E.format!==Sn?Le!==null?q?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,Xe,Ge.width,Ge.height,0,Ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,Ge.width,Ge.height,Le,Ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,Xe,Ge.width,Ge.height,0,Le,Ae,Ge.data)}}}else{if(ve=E.mipmaps,q&&Ee){ve.length>0&&Ce++;const ue=xe(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ge){q?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Me[ue].width,Me[ue].height,Le,Ae,Me[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Me[ue].width,Me[ue].height,0,Le,Ae,Me[ue].data);for(let Ne=0;Ne<ve.length;Ne++){const dt=ve[Ne].image[ue].image;q?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,dt.width,dt.height,Le,Ae,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,Xe,dt.width,dt.height,0,Le,Ae,dt.data)}}else{q?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le,Ae,Me[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Le,Ae,Me[ue]);for(let Ne=0;Ne<ve.length;Ne++){const Ge=ve[Ne];q?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,Le,Ae,Ge.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,Xe,Le,Ae,Ge.image[ue])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),re.__version=he.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function j(I,E,X,se,he,re){const Te=s.convert(X.format,X.colorSpace),_e=s.convert(X.type),we=v(X.internalFormat,Te,_e,X.colorSpace),Oe=n.get(E),ge=n.get(X);if(ge.__renderTarget=E,!Oe.__hasExternalTextures){const Me=Math.max(1,E.width>>re),Fe=Math.max(1,E.height>>re);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,re,we,Me,Fe,E.depth,0,Te,_e,null):t.texImage2D(he,re,we,Me,Fe,0,Te,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),D(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,he,ge.__webglTexture,0,b(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,he,ge.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){const se=E.depthTexture,he=se&&se.isDepthTexture?se.type:null,re=S(E.stencilBuffer,he),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(E),re,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{const se=E.textures;for(let he=0;he<se.length;he++){const re=se[he],Te=s.convert(re.format,re.colorSpace),_e=s.convert(re.type),we=v(re.internalFormat,Te,_e,re.colorSpace);D(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(E),we,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(E),we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(I,E,X){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",M)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),pe(i.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=s.convert(E.depthTexture.format),ge=s.convert(E.depthTexture.type);let Me;E.depthTexture.format===oi?Me=i.DEPTH_COMPONENT24:E.depthTexture.format===Yi&&(Me=i.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Me,E.width,E.height,0,Oe,ge,null)}}else z(E.depthTexture,0);const re=he.__webglTexture,Te=b(E),_e=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,we=E.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===oi)D(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,_e,re,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,we,_e,re,0);else if(E.depthTexture.format===Yi)D(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,_e,re,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,we,_e,re,0);else throw new Error("Unknown depthTexture format")}function ie(I){const E=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const se=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=se}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)J(E.__webglFramebuffer[se],I,se);else{const se=I.texture.mipmaps;se&&se.length>0?J(E.__webglFramebuffer[0],I,0):J(E.__webglFramebuffer,I,0)}else if(X){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=i.createRenderbuffer(),le(E.__webglDepthbuffer[se],I,!1);else{const he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}}else{const se=I.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),le(E.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(I,E,X){const se=n.get(I);E!==void 0&&j(se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ie(I)}function me(I){const E=I.texture,X=n.get(I),se=n.get(E);I.addEventListener("dispose",R);const he=I.textures,re=I.isWebGLCubeRenderTarget===!0,Te=he.length>1;if(Te||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=E.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[_e]=[];for(let we=0;we<E.mipmaps.length;we++)X.__webglFramebuffer[_e][we]=i.createFramebuffer()}else X.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)X.__webglFramebuffer[_e]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Te)for(let _e=0,we=he.length;_e<we;_e++){const Oe=n.get(he[_e]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&D(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const we=he[_e];X.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const Oe=s.convert(we.format,we.colorSpace),ge=s.convert(we.type),Me=v(we.internalFormat,Oe,ge,we.colorSpace,I.isXRRenderTarget===!0),Fe=b(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),le(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),pe(i.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)j(X.__webglFramebuffer[_e][we],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,we);else j(X.__webglFramebuffer[_e],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let _e=0,we=he.length;_e<we;_e++){const Oe=he[_e],ge=n.get(Oe);let Me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ge.__webglTexture),pe(Me,Oe),j(X.__webglFramebuffer,I,Oe,i.COLOR_ATTACHMENT0+_e,Me,0),_(Oe)&&p(Me)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),pe(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)j(X.__webglFramebuffer[we],I,E,i.COLOR_ATTACHMENT0,_e,we);else j(X.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,_e,0);_(E)&&p(_e),t.unbindTexture()}I.depthBuffer&&ie(I)}function H(I){const E=I.textures;for(let X=0,se=E.length;X<se;X++){const he=E[X];if(_(he)){const re=y(I),Te=n.get(he).__webglTexture;t.bindTexture(re,Te),p(re),t.unbindTexture()}}}const Y=[],Q=[];function $(I){if(I.samples>0){if(D(I)===!1){const E=I.textures,X=I.width,se=I.height;let he=i.COLOR_BUFFER_BIT;const re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),_e=E.length>1;if(_e)for(let Oe=0;Oe<E.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const we=I.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ge=n.get(E[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,he,i.NEAREST),f===!0&&(Y.length=0,Q.length=0,Y.push(i.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Y.push(re),Q.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Oe=0;Oe<E.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ge=n.get(E[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function b(I){return Math.min(r.maxSamples,I.samples)}function D(I){const E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(I){const E=o.render.frame;d.get(I)!==E&&(d.set(I,E),I.update())}function be(I,E){const X=I.colorSpace,se=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==kr&&X!==xi&&(tt.getTransfer(X)===at?(se!==Sn||he!==rn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",X)),E}function xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=Se,this.setupRenderTarget=me,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=j,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ky(i,e){function t(n,r=xi){let s;const o=tt.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===Sn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Br)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===To||n===Ao||n===Co||n===Ro)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===_l||n===gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===vl||n===yl||n===Sl||n===Ml||n===bl||n===El)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xl||n===vl)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sl)return s.COMPRESSED_R11_EAC;if(n===Ml)return s.COMPRESSED_SIGNED_R11_EAC;if(n===bl)return s.COMPRESSED_RG11_EAC;if(n===El)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===zl||n===Vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===kl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
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

}`;class Gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:zy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hy extends Wr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,c="local-floor",f=1,u=null,d=null,a=null,l=null,h=null,m=null;const g=typeof XRWebGLBinding<"u",_=new Gy,p={},y=t.getContextAttributes();let v=null,S=null;const A=[],M=[],R=new fe;let x=null;const w=new nn;w.viewport=new vt;const N=new nn;N.viewport=new vt;const L=[w,N],U=new eg;let V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=A[T];return C===void 0&&(C=new xa,A[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=A[T];return C===void 0&&(C=new xa,A[T]=C),C.getGripSpace()},this.getHand=function(T){let C=A[T];return C===void 0&&(C=new xa,A[T]=C),C.getHandSpace()};function z(T){const C=M.indexOf(T.inputSource);if(C===-1)return;const j=A[C];j!==void 0&&(j.update(T.inputSource,T.frame,u||o),j.dispatchEvent({type:T.type,data:T.inputSource}))}function O(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let T=0;T<A.length;T++){const C=M[T];C!==null&&(M[T]=null,A[T].disconnect(C))}V=null,k=null,_.reset();for(const T in p)delete p[T];e.setRenderTarget(v),h=null,l=null,a=null,r=null,S=null,G.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){s=T,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){c=T,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(T){u=T},this.getBaseLayer=function(){return l!==null?l:h},this.getBinding=function(){return a===null&&g&&(a=new XRWebGLBinding(r,t)),a},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(T){if(r=T,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,le=null,J=null;y.depth&&(J=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?Yi:oi,le=y.stencil?bs:Bn);const ie={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};a=this.getBinding(),l=a.createProjectionLayer(ie),r.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),S=new On(l.textureWidth,l.textureHeight,{format:Sn,type:rn,depthTexture:new Ts(l.textureWidth,l.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new On(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(f),u=null,o=await r.requestReferenceSpace(c),G.setContext(r),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(T){for(let C=0;C<T.removed.length;C++){const j=T.removed[C],le=M.indexOf(j);le>=0&&(M[le]=null,A[le].disconnect(j))}for(let C=0;C<T.added.length;C++){const j=T.added[C];let le=M.indexOf(j);if(le===-1){for(let ie=0;ie<A.length;ie++)if(ie>=M.length){M.push(j),le=ie;break}else if(M[ie]===null){M[ie]=j,le=ie;break}if(le===-1)break}const J=A[le];J&&J.connect(j)}}const W=new B,te=new B;function ae(T,C,j){W.setFromMatrixPosition(C.matrixWorld),te.setFromMatrixPosition(j.matrixWorld);const le=W.distanceTo(te),J=C.projectionMatrix.elements,ie=j.projectionMatrix.elements,Se=J[14]/(J[10]-1),me=J[14]/(J[10]+1),H=(J[9]+1)/J[5],Y=(J[9]-1)/J[5],Q=(J[8]-1)/J[0],$=(ie[8]+1)/ie[0],b=Se*Q,D=Se*$,ce=le/(-Q+$),be=ce*-Q;if(C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(be),T.translateZ(ce),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),J[10]===-1)T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const xe=Se+ce,I=me+ce,E=b-be,X=D+(le-be),se=H*me/I*xe,he=Y*me/I*xe;T.projectionMatrix.makePerspective(E,X,se,he,xe,I),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function de(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(r===null)return;let C=T.near,j=T.far;_.texture!==null&&(_.depthNear>0&&(C=_.depthNear),_.depthFar>0&&(j=_.depthFar)),U.near=N.near=w.near=C,U.far=N.far=w.far=j,(V!==U.near||k!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,k=U.far),U.layers.mask=T.layers.mask|6,w.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const le=T.parent,J=U.cameras;de(U,le);for(let ie=0;ie<J.length;ie++)de(J[ie],le);J.length===2?ae(U,w,N):U.projectionMatrix.copy(w.projectionMatrix),pe(T,U,le)};function pe(T,C,j){j===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(j.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=ws*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(l===null&&h===null))return f},this.setFoveation=function(T){f=T,l!==null&&(l.fixedFoveation=T),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=T)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(T){return p[T]};let De=null;function K(T,C){if(d=C.getViewerPose(u||o),m=C,d!==null){const j=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let le=!1;j.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let me=0;me<j.length;me++){const H=j[me];let Y=null;if(h!==null)Y=h.getViewport(H);else{const $=a.getViewSubImage(l,H);Y=$.viewport,me===0&&(e.setRenderTargetTextures(S,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(S))}let Q=L[me];Q===void 0&&(Q=new nn,Q.layers.enable(me),Q.viewport=new vt,L[me]=Q),Q.matrix.fromArray(H.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(H.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Y.x,Y.y,Y.width,Y.height),me===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(Q)}const J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){a=n.getBinding();const me=a.getDepthInformation(j[0]);me&&me.isValid&&me.texture&&_.init(me,r.renderState)}if(J&&J.includes("camera-access")&&g){e.state.unbindTexture(),a=n.getBinding();for(let me=0;me<j.length;me++){const H=j[me].camera;if(H){let Y=p[H];Y||(Y=new gh,p[H]=Y);const Q=a.getCameraImage(H);Y.sourceTexture=Q}}}}for(let j=0;j<A.length;j++){const le=M[j],J=A[j];le!==null&&J!==void 0&&J.update(le,C,u||o)}De&&De(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),m=null}const G=new Dh;G.setAnimationLoop(K),this.setAnimationLoop=function(T){De=T},this.dispose=function(){}}}const Oi=new fn,Wy=new ft;function Xy(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Ah(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,y,v,S){p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),a(_,p)):p.isMeshPhongMaterial?(s(_,p),d(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),l(_,p),p.isMeshPhysicalMaterial&&h(_,p,S)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&c(_,p)):p.isPointsMaterial?f(_,p,y,v):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Zt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Zt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,S=y.envMapRotation;v&&(_.envMap.value=v,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),_.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(Oi)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function c(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function f(_,p,y,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*y,_.scale.value=v*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function a(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function l(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,y){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const y=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qy(i,e,t,n){let r={},s={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function u(y,v){let S=r[y.id];S===void 0&&(m(y),S=d(y),r[y.id]=S,y.addEventListener("dispose",_));const A=v.program;n.updateUBOMapping(y,A);const M=e.render.frame;s[y.id]!==M&&(l(y),s[y.id]=M)}function d(y){const v=a();y.__bindingPointIndex=v;const S=i.createBuffer(),A=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function a(){for(let y=0;y<c;y++)if(o.indexOf(y)===-1)return o.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(y){const v=r[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,R=S.length;M<R;M++){const x=Array.isArray(S[M])?S[M]:[S[M]];for(let w=0,N=x.length;w<N;w++){const L=x[w];if(h(L,M,w,A)===!0){const U=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let z=0;z<V.length;z++){const O=V[z],F=g(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,U+k,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,v,S,A){const M=y.value,R=v+"_"+S;if(A[R]===void 0)return typeof M=="number"||typeof M=="boolean"?A[R]=M:A[R]=M.clone(),!0;{const x=A[R];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return A[R]=M,!0}else if(x.equals(M)===!1)return x.copy(M),!0}return!1}function m(y){const v=y.uniforms;let S=0;const A=16;for(let R=0,x=v.length;R<x;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let N=0,L=w.length;N<L;N++){const U=w[N],V=Array.isArray(U.value)?U.value:[U.value];for(let k=0,z=V.length;k<z;k++){const O=V[k],F=g(O),W=S%A,te=W%F.boundary,ae=W+te;S+=te,ae!==0&&A-ae<F.storage&&(S+=A-ae),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=F.storage}}}const M=S%A;return M>0&&(S+=A-M),y.__size=S,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",y),v}function _(y){const v=y.target;v.removeEventListener("dispose",_);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:f,update:u,dispose:p}}const Yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function $y(){return Pn===null&&(Pn=new mh(Yy,16,16,Br,si),Pn.name="DFG_LUT",Pn.minFilter=Vt,Pn.magFilter=Vt,Pn.wrapS=Kn,Pn.wrapT=Kn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class kh{constructor(e={}){const{canvas:t=vm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1,reversedDepthBuffer:l=!1,outputBufferType:h=rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=h,_=new Set([uc,cc,lc]),p=new Set([rn,Bn,Ms,bs,sc,oc]),y=new Uint32Array(4),v=new Int32Array(4);let S=null,A=null;const M=[],R=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=tn;let L=0,U=0,V=null,k=-1,z=null;const O=new vt,F=new vt;let W=null;const te=new Je(0);let ae=0,de=t.width,pe=t.height,De=1,K=null,G=null;const T=new vt(0,0,de,pe),C=new vt(0,0,de,pe);let j=!1;const le=new xc;let J=!1,ie=!1;const Se=new ft,me=new B,H=new vt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function $(){return V===null?De:1}let b=n;function D(P,Z){return t.getContext(P,Z)}try{const P={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",dt,!1),b===null){const Z="webgl2";if(b=D(Z,P),b===null)throw D(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw et("WebGLRenderer: "+P.message),P}let ce,be,xe,I,E,X,se,he,re,Te,_e,we,Oe,ge,Me,Fe,Le,Ae,Xe,q,Ee,ye,Ce;function ve(){ce=new jx(b),ce.init(),Ee=new ky(b,ce),be=new Vx(b,ce,e,Ee),xe=new Oy(b,ce),be.reversedDepthBuffer&&l&&xe.buffers.depth.setReversed(!0),I=new Jx(b),E=new by,X=new By(b,ce,xe,E,be,Ee,I),se=new $x(w),he=new ig(b),ye=new kx(b,he),re=new Zx(b,he,I,ye),Te=new ev(b,re,he,ye,I),Ae=new Qx(b,be,X),Me=new Gx(E),_e=new My(w,se,ce,be,ye,Me),we=new Xy(w,E),Oe=new wy,ge=new Iy(ce),Le=new Bx(w,se,xe,Te,m,f),Fe=new Fy(w,Te,be),Ce=new qy(b,I,be,xe),Xe=new zx(b,ce,I),q=new Kx(b,ce,I),I.programs=_e.programs,w.capabilities=be,w.extensions=ce,w.properties=E,w.renderLists=Oe,w.shadowMap=Fe,w.state=xe,w.info=I}ve(),g!==rn&&(x=new nv(g,t.width,t.height,r,s));const ue=new Hy(w,b);this.xr=ue,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const P=ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(P){P!==void 0&&(De=P,this.setSize(de,pe,!1))},this.getSize=function(P){return P.set(de,pe)},this.setSize=function(P,Z,oe=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,pe=Z,t.width=Math.floor(P*De),t.height=Math.floor(Z*De),oe===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(de*De,pe*De).floor()},this.setDrawingBufferSize=function(P,Z,oe){de=P,pe=Z,De=oe,t.width=Math.floor(P*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,P,Z)},this.setEffects=function(P){if(g===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Z=0;Z<P.length;Z++)if(P[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(T)},this.setViewport=function(P,Z,oe,ne){P.isVector4?T.set(P.x,P.y,P.z,P.w):T.set(P,Z,oe,ne),xe.viewport(O.copy(T).multiplyScalar(De).round())},this.getScissor=function(P){return P.copy(C)},this.setScissor=function(P,Z,oe,ne){P.isVector4?C.set(P.x,P.y,P.z,P.w):C.set(P,Z,oe,ne),xe.scissor(F.copy(C).multiplyScalar(De).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(P){xe.setScissorTest(j=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){G=P},this.getClearColor=function(P){return P.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,oe=!0){let ne=0;if(P){let ee=!1;if(V!==null){const Pe=V.texture.format;ee=_.has(Pe)}if(ee){const Pe=V.texture.type,Ue=p.has(Pe),Ie=Le.getClearColor(),Be=Le.getClearAlpha(),ze=Ie.r,Ye=Ie.g,Ze=Ie.b;Ue?(y[0]=ze,y[1]=Ye,y[2]=Ze,y[3]=Be,b.clearBufferuiv(b.COLOR,0,y)):(v[0]=ze,v[1]=Ye,v[2]=Ze,v[3]=Be,b.clearBufferiv(b.COLOR,0,v))}else ne|=b.COLOR_BUFFER_BIT}Z&&(ne|=b.DEPTH_BUFFER_BIT),oe&&(ne|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&b.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Le.dispose(),Oe.dispose(),ge.dispose(),E.dispose(),se.dispose(),Te.dispose(),ye.dispose(),Ce.dispose(),_e.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Tc),ue.removeEventListener("sessionend",Ac),Ri.stop()};function Ne(P){P.preventDefault(),su("WebGLRenderer: Context Lost."),N=!0}function Ge(){su("WebGLRenderer: Context Restored."),N=!1;const P=I.autoReset,Z=Fe.enabled,oe=Fe.autoUpdate,ne=Fe.needsUpdate,ee=Fe.type;ve(),I.autoReset=P,Fe.enabled=Z,Fe.autoUpdate=oe,Fe.needsUpdate=ne,Fe.type=ee}function dt(P){et("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ot(P){const Z=P.target;Z.removeEventListener("dispose",ot),Vn(Z)}function Vn(P){Gn(P),E.remove(P)}function Gn(P){const Z=E.get(P).programs;Z!==void 0&&(Z.forEach(function(oe){_e.releaseProgram(oe)}),P.isShaderMaterial&&_e.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,oe,ne,ee,Pe){Z===null&&(Z=Y);const Ue=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=$h(P,Z,oe,ne,ee);xe.setMaterial(ne,Ue);let Be=oe.index,ze=1;if(ne.wireframe===!0){if(Be=re.getWireframeAttribute(oe),Be===void 0)return;ze=2}const Ye=oe.drawRange,Ze=oe.attributes.position;let Ve=Ye.start*ze,lt=(Ye.start+Ye.count)*ze;Pe!==null&&(Ve=Math.max(Ve,Pe.start*ze),lt=Math.min(lt,(Pe.start+Pe.count)*ze)),Be!==null?(Ve=Math.max(Ve,0),lt=Math.min(lt,Be.count)):Ze!=null&&(Ve=Math.max(Ve,0),lt=Math.min(lt,Ze.count));const yt=lt-Ve;if(yt<0||yt===1/0)return;ye.setup(ee,ne,Ie,oe,Be);let gt,ct=Xe;if(Be!==null&&(gt=he.get(Be),ct=q,ct.setIndex(gt)),ee.isMesh)ne.wireframe===!0?(xe.setLineWidth(ne.wireframeLinewidth*$()),ct.setMode(b.LINES)):ct.setMode(b.TRIANGLES);else if(ee.isLine){let Bt=ne.linewidth;Bt===void 0&&(Bt=1),xe.setLineWidth(Bt*$()),ee.isLineSegments?ct.setMode(b.LINES):ee.isLineLoop?ct.setMode(b.LINE_LOOP):ct.setMode(b.LINE_STRIP)}else ee.isPoints?ct.setMode(b.POINTS):ee.isSprite&&ct.setMode(b.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Bt=ee._multiDrawStarts,ke=ee._multiDrawCounts,Kt=ee._multiDrawCount,nt=Be?he.get(Be).bytesPerElement:1,dn=E.get(ne).currentProgram.getUniforms();for(let An=0;An<Kt;An++)dn.setValue(b,"_gl_DrawID",An),ct.render(Bt[An]/nt,ke[An])}else if(ee.isInstancedMesh)ct.renderInstances(Ve,yt,ee.count);else if(oe.isInstancedBufferGeometry){const Bt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,Bt);ct.renderInstances(Ve,yt,ke)}else ct.render(Ve,yt)};function wc(P,Z,oe){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Zt,P.needsUpdate=!0,Os(P,Z,oe),P.side=Ti,P.needsUpdate=!0,Os(P,Z,oe),P.side=cn):Os(P,Z,oe)}this.compile=function(P,Z,oe=null){oe===null&&(oe=P),A=ge.get(oe),A.init(Z),R.push(A),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),P!==oe&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();const ne=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Ie=Pe[Ue];wc(Ie,oe,ee),ne.add(Ie)}else wc(Pe,oe,ee),ne.add(Pe)}),A=R.pop(),ne},this.compileAsync=function(P,Z,oe=null){const ne=this.compile(P,Z,oe);return new Promise(ee=>{function Pe(){if(ne.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){ee(P);return}setTimeout(Pe,10)}ce.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ta=null;function Yh(P){ta&&ta(P)}function Tc(){Ri.stop()}function Ac(){Ri.start()}const Ri=new Dh;Ri.setAnimationLoop(Yh),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(P){ta=P,ue.setAnimationLoop(P),P===null?Ri.stop():Ri.start()},ue.addEventListener("sessionstart",Tc),ue.addEventListener("sessionend",Ac),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const oe=ue.enabled===!0&&ue.isPresenting===!0,ne=x!==null&&(V===null||oe)&&x.begin(w,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Z),Z=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,Z,V),A=ge.get(P,R.length),A.init(Z),R.push(A),Se.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(Se,Dn,Z.reversedDepth),ie=this.localClippingEnabled,J=Me.init(this.clippingPlanes,ie),S=Oe.get(P,M.length),S.init(),M.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Ue=w.xr.getDepthSensingMesh();Ue!==null&&na(Ue,Z,-1/0,w.sortObjects)}na(P,Z,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(K,G),Q=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Q&&Le.addToRenderList(S,P),this.info.render.frame++,J===!0&&Me.beginShadows();const ee=A.state.shadowsArray;if(Fe.render(ee,P,Z),J===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&x.hasRenderPass())===!1){const Ue=S.opaque,Ie=S.transmissive;if(A.setupLights(),Z.isArrayCamera){const Be=Z.cameras;if(Ie.length>0)for(let ze=0,Ye=Be.length;ze<Ye;ze++){const Ze=Be[ze];Rc(Ue,Ie,P,Ze)}Q&&Le.render(P);for(let ze=0,Ye=Be.length;ze<Ye;ze++){const Ze=Be[ze];Cc(S,P,Ze,Ze.viewport)}}else Ie.length>0&&Rc(Ue,Ie,P,Z),Q&&Le.render(P),Cc(S,P,Z)}V!==null&&U===0&&(X.updateMultisampleRenderTarget(V),X.updateRenderTargetMipmap(V)),ne&&x.end(w),P.isScene===!0&&P.onAfterRender(w,P,Z),ye.resetDefaultState(),k=-1,z=null,R.pop(),R.length>0?(A=R[R.length-1],J===!0&&Me.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function na(P,Z,oe,ne){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||le.intersectsSprite(P)){ne&&H.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Se);const Ue=Te.update(P),Ie=P.material;Ie.visible&&S.push(P,Ue,Ie,oe,H.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||le.intersectsObject(P))){const Ue=Te.update(P),Ie=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),H.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),H.copy(Ue.boundingSphere.center)),H.applyMatrix4(P.matrixWorld).applyMatrix4(Se)),Array.isArray(Ie)){const Be=Ue.groups;for(let ze=0,Ye=Be.length;ze<Ye;ze++){const Ze=Be[ze],Ve=Ie[Ze.materialIndex];Ve&&Ve.visible&&S.push(P,Ue,Ve,oe,H.z,Ze)}}else Ie.visible&&S.push(P,Ue,Ie,oe,H.z,null)}}const Pe=P.children;for(let Ue=0,Ie=Pe.length;Ue<Ie;Ue++)na(Pe[Ue],Z,oe,ne)}function Cc(P,Z,oe,ne){const{opaque:ee,transmissive:Pe,transparent:Ue}=P;A.setupLightsView(oe),J===!0&&Me.setGlobalState(w.clippingPlanes,oe),ne&&xe.viewport(O.copy(ne)),ee.length>0&&Fs(ee,Z,oe),Pe.length>0&&Fs(Pe,Z,oe),Ue.length>0&&Fs(Ue,Z,oe),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Rc(P,Z,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ne.id]===void 0){const Ve=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ne.id]=new On(1,1,{generateMipmaps:!0,type:Ve?si:rn,minFilter:qi,samples:Math.max(4,be.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Pe=A.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||O;Pe.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);const Ie=w.getRenderTarget(),Be=w.getActiveCubeFace(),ze=w.getActiveMipmapLevel();w.setRenderTarget(Pe),w.getClearColor(te),ae=w.getClearAlpha(),ae<1&&w.setClearColor(16777215,.5),w.clear(),Q&&Le.render(oe);const Ye=w.toneMapping;w.toneMapping=Un;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),A.setupLightsView(ne),J===!0&&Me.setGlobalState(w.clippingPlanes,ne),Fs(P,oe,ne),X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let lt=0,yt=Z.length;lt<yt;lt++){const gt=Z[lt],{object:ct,geometry:Bt,material:ke,group:Kt}=gt;if(ke.side===cn&&ct.layers.test(ne.layers)){const nt=ke.side;ke.side=Zt,ke.needsUpdate=!0,Pc(ct,oe,ne,Bt,ke,Kt),ke.side=nt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe))}w.setRenderTarget(Ie,Be,ze),w.setClearColor(te,ae),Ze!==void 0&&(ne.viewport=Ze),w.toneMapping=Ye}function Fs(P,Z,oe){const ne=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Pe=P.length;ee<Pe;ee++){const Ue=P[ee],{object:Ie,geometry:Be,group:ze}=Ue;let Ye=Ue.material;Ye.allowOverride===!0&&ne!==null&&(Ye=ne),Ie.layers.test(oe.layers)&&Pc(Ie,Z,oe,Be,Ye,ze)}}function Pc(P,Z,oe,ne,ee,Pe){P.onBeforeRender(w,Z,oe,ne,ee,Pe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(w,Z,oe,ne,P,Pe),ee.transparent===!0&&ee.side===cn&&ee.forceSinglePass===!1?(ee.side=Zt,ee.needsUpdate=!0,w.renderBufferDirect(oe,Z,ne,ee,P,Pe),ee.side=Ti,ee.needsUpdate=!0,w.renderBufferDirect(oe,Z,ne,ee,P,Pe),ee.side=cn):w.renderBufferDirect(oe,Z,ne,ee,P,Pe),P.onAfterRender(w,Z,oe,ne,ee,Pe)}function Os(P,Z,oe){Z.isScene!==!0&&(Z=Y);const ne=E.get(P),ee=A.state.lights,Pe=A.state.shadowsArray,Ue=ee.state.version,Ie=_e.getParameters(P,ee.state,Pe,Z,oe),Be=_e.getProgramCacheKey(Ie);let ze=ne.programs;ne.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Z.environment:null,ne.fog=Z.fog;const Ye=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ne.envMap=se.get(P.envMap||ne.environment,Ye),ne.envMapRotation=ne.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,ze===void 0&&(P.addEventListener("dispose",ot),ze=new Map,ne.programs=ze);let Ze=ze.get(Be);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Ue)return Lc(P,Ie),Ze}else Ie.uniforms=_e.getUniforms(P),P.onBeforeCompile(Ie,w),Ze=_e.acquireProgram(Ie,Be),ze.set(Be,Ze),ne.uniforms=Ie.uniforms;const Ve=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),Lc(P,Ie),ne.needsLights=Zh(P),ne.lightsStateVersion=Ue,ne.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Ic(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Io.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Lc(P,Z){const oe=E.get(P);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function $h(P,Z,oe,ne,ee){Z.isScene!==!0&&(Z=Y),X.resetTextureUnits();const Pe=Z.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Z.environment:null,Ie=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:kr,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ze=se.get(ne.envMap||Ue,Be),Ye=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ze=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!oe.morphAttributes.position,lt=!!oe.morphAttributes.normal,yt=!!oe.morphAttributes.color;let gt=Un;ne.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(gt=w.toneMapping);const ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Bt=ct!==void 0?ct.length:0,ke=E.get(ne),Kt=A.state.lights;if(J===!0&&(ie===!0||P!==z)){const Ct=P===z&&ne.id===k;Me.setState(ne,P,Ct)}let nt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Kt.state.version||ke.outputColorSpace!==Ie||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==ze||ne.fog===!0&&ke.fog!==Pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==Ye||ke.vertexTangents!==Ze||ke.morphTargets!==Ve||ke.morphNormals!==lt||ke.morphColors!==yt||ke.toneMapping!==gt||ke.morphTargetsCount!==Bt)&&(nt=!0):(nt=!0,ke.__version=ne.version);let dn=ke.currentProgram;nt===!0&&(dn=Os(ne,Z,ee));let An=!1,Pi=!1,sr=!1;const ht=dn.getUniforms(),Lt=ke.uniforms;if(xe.useProgram(dn.program)&&(An=!0,Pi=!0,sr=!0),ne.id!==k&&(k=ne.id,Pi=!0),An||z!==P){xe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ht.setValue(b,"projectionMatrix",P.projectionMatrix),ht.setValue(b,"viewMatrix",P.matrixWorldInverse);const ui=ht.map.cameraPosition;ui!==void 0&&ui.setValue(b,me.setFromMatrixPosition(P.matrixWorld)),be.logarithmicDepthBuffer&&ht.setValue(b,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ht.setValue(b,"isOrthographic",P.isOrthographicCamera===!0),z!==P&&(z=P,Pi=!0,sr=!0)}if(ke.needsLights&&(Kt.state.directionalShadowMap.length>0&&ht.setValue(b,"directionalShadowMap",Kt.state.directionalShadowMap,X),Kt.state.spotShadowMap.length>0&&ht.setValue(b,"spotShadowMap",Kt.state.spotShadowMap,X),Kt.state.pointShadowMap.length>0&&ht.setValue(b,"pointShadowMap",Kt.state.pointShadowMap,X)),ee.isSkinnedMesh){ht.setOptional(b,ee,"bindMatrix"),ht.setOptional(b,ee,"bindMatrixInverse");const Ct=ee.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ht.setValue(b,"boneTexture",Ct.boneTexture,X))}ee.isBatchedMesh&&(ht.setOptional(b,ee,"batchingTexture"),ht.setValue(b,"batchingTexture",ee._matricesTexture,X),ht.setOptional(b,ee,"batchingIdTexture"),ht.setValue(b,"batchingIdTexture",ee._indirectTexture,X),ht.setOptional(b,ee,"batchingColorTexture"),ee._colorsTexture!==null&&ht.setValue(b,"batchingColorTexture",ee._colorsTexture,X));const ci=oe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Ae.update(ee,oe,dn),(Pi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,ht.setValue(b,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Z.environment!==null&&(Lt.envMapIntensity.value=Z.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=$y()),Pi&&(ht.setValue(b,"toneMappingExposure",w.toneMappingExposure),ke.needsLights&&jh(Lt,sr),Pe&&ne.fog===!0&&we.refreshFogUniforms(Lt,Pe),we.refreshMaterialUniforms(Lt,ne,De,pe,A.state.transmissionRenderTarget[P.id]),Io.upload(b,Ic(ke),Lt,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Io.upload(b,Ic(ke),Lt,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ht.setValue(b,"center",ee.center),ht.setValue(b,"modelViewMatrix",ee.modelViewMatrix),ht.setValue(b,"normalMatrix",ee.normalMatrix),ht.setValue(b,"modelMatrix",ee.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Ct=ne.uniformsGroups;for(let ui=0,or=Ct.length;ui<or;ui++){const Dc=Ct[ui];Ce.update(Dc,dn),Ce.bind(Dc,dn)}}return dn}function jh(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Zh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,Z,oe){const ne=E.get(P);ne.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(P.texture).__webglTexture=Z,E.get(P.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const oe=E.get(P);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};const Kh=b.createFramebuffer();this.setRenderTarget=function(P,Z=0,oe=0){V=P,L=Z,U=oe;let ne=null,ee=!1,Pe=!1;if(P){const Ie=E.get(P);if(Ie.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(b.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(P.viewport),F.copy(P.scissor),W=P.scissorTest,xe.viewport(O),xe.scissor(F),xe.setScissorTest(W),k=-1;return}else if(Ie.__webglFramebuffer===void 0)X.setupRenderTarget(P);else if(Ie.__hasExternalTextures)X.rebindTextures(P,E.get(P.texture).__webglTexture,E.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ye=P.depthTexture;if(Ie.__boundDepthTexture!==Ye){if(Ye!==null&&E.has(Ye)&&(P.width!==Ye.image.width||P.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(P)}}const Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Pe=!0);const ze=E.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ze[Z])?ne=ze[Z][oe]:ne=ze[Z],ee=!0):P.samples>0&&X.useMultisampledRTT(P)===!1?ne=E.get(P).__webglMultisampledFramebuffer:Array.isArray(ze)?ne=ze[oe]:ne=ze,O.copy(P.viewport),F.copy(P.scissor),W=P.scissorTest}else O.copy(T).multiplyScalar(De).floor(),F.copy(C).multiplyScalar(De).floor(),W=j;if(oe!==0&&(ne=Kh),xe.bindFramebuffer(b.FRAMEBUFFER,ne)&&xe.drawBuffers(P,ne),xe.viewport(O),xe.scissor(F),xe.setScissorTest(W),ee){const Ie=E.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,oe)}else if(Pe){const Ie=Z;for(let Be=0;Be<P.textures.length;Be++){const ze=E.get(P.textures[Be]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Be,ze.__webglTexture,oe,Ie)}}else if(P!==null&&oe!==0){const Ie=E.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ie.__webglTexture,oe)}k=-1},this.readRenderTargetPixels=function(P,Z,oe,ne,ee,Pe,Ue,Ie=0){if(!(P&&P.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){xe.bindFramebuffer(b.FRAMEBUFFER,Be);try{const ze=P.textures[Ie],Ye=ze.format,Ze=ze.type;if(P.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ie),!be.textureFormatReadable(Ye)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ze)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ne&&oe>=0&&oe<=P.height-ee&&b.readPixels(Z,oe,ne,ee,Ee.convert(Ye),Ee.convert(Ze),Pe)}finally{const ze=V!==null?E.get(V).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(P,Z,oe,ne,ee,Pe,Ue,Ie=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(Z>=0&&Z<=P.width-ne&&oe>=0&&oe<=P.height-ee){xe.bindFramebuffer(b.FRAMEBUFFER,Be);const ze=P.textures[Ie],Ye=ze.format,Ze=ze.type;if(P.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ie),!be.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ve),b.bufferData(b.PIXEL_PACK_BUFFER,Pe.byteLength,b.STREAM_READ),b.readPixels(Z,oe,ne,ee,Ee.convert(Ye),Ee.convert(Ze),0);const lt=V!==null?E.get(V).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,lt);const yt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await ym(b,yt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ve),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Pe),b.deleteBuffer(Ve),b.deleteSync(yt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,oe=0){const ne=Math.pow(2,-oe),ee=Math.floor(P.image.width*ne),Pe=Math.floor(P.image.height*ne),Ue=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;X.setTexture2D(P,0),b.copyTexSubImage2D(b.TEXTURE_2D,oe,0,0,Ue,Ie,ee,Pe),xe.unbindTexture()};const Jh=b.createFramebuffer(),Qh=b.createFramebuffer();this.copyTextureToTexture=function(P,Z,oe=null,ne=null,ee=0,Pe=0){let Ue,Ie,Be,ze,Ye,Ze,Ve,lt,yt;const gt=P.isCompressedTexture?P.mipmaps[Pe]:P.image;if(oe!==null)Ue=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,ze=oe.min.x,Ye=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Lt=Math.pow(2,-ee);Ue=Math.floor(gt.width*Lt),Ie=Math.floor(gt.height*Lt),P.isDataArrayTexture?Be=gt.depth:P.isData3DTexture?Be=Math.floor(gt.depth*Lt):Be=1,ze=0,Ye=0,Ze=0}ne!==null?(Ve=ne.x,lt=ne.y,yt=ne.z):(Ve=0,lt=0,yt=0);const ct=Ee.convert(Z.format),Bt=Ee.convert(Z.type);let ke;Z.isData3DTexture?(X.setTexture3D(Z,0),ke=b.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(X.setTexture2DArray(Z,0),ke=b.TEXTURE_2D_ARRAY):(X.setTexture2D(Z,0),ke=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment);const Kt=b.getParameter(b.UNPACK_ROW_LENGTH),nt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),dn=b.getParameter(b.UNPACK_SKIP_PIXELS),An=b.getParameter(b.UNPACK_SKIP_ROWS),Pi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ze);const sr=P.isDataArrayTexture||P.isData3DTexture,ht=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const Lt=E.get(P),ci=E.get(Z),Ct=E.get(Lt.__renderTarget),ui=E.get(ci.__renderTarget);xe.bindFramebuffer(b.READ_FRAMEBUFFER,Ct.__webglFramebuffer),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let or=0;or<Be;or++)sr&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,E.get(P).__webglTexture,ee,Ze+or),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Pe,yt+or)),b.blitFramebuffer(ze,Ye,Ue,Ie,Ve,lt,Ue,Ie,b.DEPTH_BUFFER_BIT,b.NEAREST);xe.bindFramebuffer(b.READ_FRAMEBUFFER,null),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||E.has(P)){const Lt=E.get(P),ci=E.get(Z);xe.bindFramebuffer(b.READ_FRAMEBUFFER,Jh),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Qh);for(let Ct=0;Ct<Be;Ct++)sr?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Lt.__webglTexture,ee,Ze+Ct):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Lt.__webglTexture,ee),ht?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ci.__webglTexture,Pe,yt+Ct):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ci.__webglTexture,Pe),ee!==0?b.blitFramebuffer(ze,Ye,Ue,Ie,Ve,lt,Ue,Ie,b.COLOR_BUFFER_BIT,b.NEAREST):ht?b.copyTexSubImage3D(ke,Pe,Ve,lt,yt+Ct,ze,Ye,Ue,Ie):b.copyTexSubImage2D(ke,Pe,Ve,lt,ze,Ye,Ue,Ie);xe.bindFramebuffer(b.READ_FRAMEBUFFER,null),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ht?P.isDataTexture||P.isData3DTexture?b.texSubImage3D(ke,Pe,Ve,lt,yt,Ue,Ie,Be,ct,Bt,gt.data):Z.isCompressedArrayTexture?b.compressedTexSubImage3D(ke,Pe,Ve,lt,yt,Ue,Ie,Be,ct,gt.data):b.texSubImage3D(ke,Pe,Ve,lt,yt,Ue,Ie,Be,ct,Bt,gt):P.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Pe,Ve,lt,Ue,Ie,ct,Bt,gt.data):P.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Pe,Ve,lt,gt.width,gt.height,ct,gt.data):b.texSubImage2D(b.TEXTURE_2D,Pe,Ve,lt,Ue,Ie,ct,Bt,gt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Kt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,nt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,dn),b.pixelStorei(b.UNPACK_SKIP_ROWS,An),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pi),Pe===0&&Z.generateMipmaps&&b.generateMipmap(ke),xe.unbindTexture()},this.initRenderTarget=function(P){E.get(P).__webglFramebuffer===void 0&&X.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?X.setTextureCube(P,0):P.isData3DTexture?X.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?X.setTexture2DArray(P,0):X.setTexture2D(P,0),xe.unbindTexture()},this.resetState=function(){L=0,U=0,V=null,xe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}var jy=hn('<div style="width:min(300px, 60vw);height:min(300px, 60vw);border-radius:50%;border:4px solid;background:linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);margin:0 auto;position:relative;box-shadow:0 0 20px rgba(0, 0, 0, 0.5);overflow:hidden"><canvas style=width:100%;height:100%>'),Zy=hn('<div tabindex=0 style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;font-family:Arial, sans-serif;font-size:clamp(16px, 4vw, 24px);text-shadow:0 0 10px rgba(255, 255, 255, 0.5);width:100%;max-width:800px;padding:20px;box-sizing:border-box">'),Ky=hn('<div style=display:flex;flex-direction:column;align-items:center;gap:20px;margin-bottom:20px><div class=confirm-button style="padding:10px 30px;font-size:clamp(20px, 5vw, 28px);font-weight:bold;border:3px solid #00ff00;border-radius:10px;cursor:pointer;background:linear-gradient(135deg, #00ff00, #00cc00);color:#ffffff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5);transition:all 0.3s ease;text-transform:uppercase">Confirm'),Jy=hn('<div style=display:flex;gap:10px;justify-content:center;flex-wrap:wrap><div style="padding:10px;border:3px solid;border-radius:15px;cursor:pointer;width:110px;height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255, 255, 255, 0.1);backdrop-filter:blur(10px);transition:all 0.3s ease"><div style="width:50px;height:50px;border-radius:50%;background-color:#ff0000;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;color:white;margin-bottom:5px;box-shadow:0 0 20px rgba(255, 0, 0, 0.5)">Melty</div><div style=font-size:12px;font-weight:bold;color:#ffcccc>Speed</div></div><div style="padding:10px;border:3px solid;border-radius:15px;cursor:pointer;width:110px;height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255, 255, 255, 0.1);backdrop-filter:blur(10px);transition:all 0.3s ease"><div style="width:50px;height:50px;border-radius:50%;background-color:#00bbff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;color:white;margin-bottom:5px;box-shadow:0 0 20px rgba(0, 187, 255, 0.5)">Cubey</div><div style=font-size:12px;font-weight:bold;color:#ccf0ff>Balanced</div></div><div style="padding:10px;border:3px solid;border-radius:15px;cursor:pointer;width:110px;height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255, 255, 255, 0.1);backdrop-filter:blur(10px);transition:all 0.3s ease"><div style="width:50px;height:50px;border-radius:50%;background-color:#518ac8;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;color:white;margin-bottom:5px;box-shadow:0 0 20px rgba(81, 138, 200, 0.5)">Solid</div><div style=font-size:12px;font-weight:bold;color:#cce8ff>Handling'),Qy=hn('<div style="margin-top:20px;font-size:clamp(14px, 3.5vw, 18px);color:#cccccc">Tap to select, then <strong>Confirm</strong> to race'),eS=hn("<div style=color:white>Loading..."),tS=hn("<div><div style=margin-bottom:20px;font-size:28px>Press any key or tap to continue");let zh,Vh,Gh;typeof window<"u"&&(rt(()=>{let i;[zh,i]=ut(),ca(()=>import("./melty-B2dLUcZ1.js"),[],import.meta.url).then(i)}),rt(()=>{let i;[Vh,i]=ut(),ca(()=>import("./cubey-aSZSRTeR.js"),[],import.meta.url).then(i)}),rt(()=>{let i;[Gh,i]=ut(),ca(()=>Promise.resolve().then(()=>yS),void 0,import.meta.url).then(i)}));function nS(){return rt(()=>{try{let i=zh?.();return i?.createMelty()}catch(i){if(i?.message?.includes("NotReadyYet"))return;throw i}})}function iS(){return rt(()=>{try{let i=Vh?.();return i?.createCubey()}catch(i){if(i?.message?.includes("NotReadyYet"))return;throw i}})}function rS(){return rt(()=>{try{let i=Gh?.();return i?.createSolidLogo()}catch(i){if(i?.message?.includes("NotReadyYet"))return;throw i}})}function sS(i){const[e,t]=ut(0),[n,r]=ut(!0),[s,o]=ut(!1),[c,f]=ut(0);let u,d,a,l;const h=nS(),m=iS(),g=rS(),_=()=>h?.(),p=()=>m?.(),y=()=>g?.(),v=(x,w)=>{let N=new nn(75,1,.1,1e3);N.position.z=1.5,d=new hh;const L=new Lh(16777215,.6);d.add(L);const U=new Ih(16777215,1);U.position.set(5,10,7),d.add(U),a=new Gt,d.add(a),u=new kh({canvas:x,alpha:!0,antialias:!0});const V=new ResizeObserver(()=>{const O=w.getBoundingClientRect();O.width===0||O.height===0||(u.setSize(O.width,O.height),N.aspect=O.width/O.height,N.updateProjectionMatrix())});V.observe(w),bn(()=>V.disconnect());const k=O=>{if(!a)return;for(;a.children.length>0;)a.remove(a.children[0]);let F;switch(O){case 0:F=_();break;case 1:F=p();break;case 2:F=y();break}if(F){let W=new li;W.setFromObject(F),N.position.y=.5*(W.min.y+W.max.y),a.add(F)}};yi(()=>e(),O=>{Nt(()=>{k(O)})}),k(0);const z=()=>{l=requestAnimationFrame(z),a&&(a.rotation.y+=.01),u&&N&&d&&u.render(d,N)};z()};bn(()=>{l!==void 0&&cancelAnimationFrame(l),u&&u.dispose()});const A=x=>{if(!(!n()||s()))switch(x.code){case"Space":case"Enter":case"KeyK":o(!0),i.set_resource(Ss,{masterState:Ei.IN_GAME});break;case"ArrowLeft":t(w=>(w-1+3)%3);break;case"ArrowRight":t(w=>(w+1)%3);break}};window.addEventListener("keydown",A),bn(()=>{window.removeEventListener("keydown",A)});const M=()=>{let x,w=!1;const N=U=>{x=U};return ti(()=>(()=>{var U=jy(),V=U.firstChild;return ys(()=>N,U),ys(()=>k=>{!w&&k&&x&&(v(k,x),w=!0)},V),bi(()=>e()===1?"#00bbff":e()===0?"#ff0000":"#518ac8",k=>{pt(U,"border-color",k)}),U})(),{})},R=()=>{const[x,w]=ut(!1),N=U=>{U.target.closest(".character-slot")||U.target.closest(".confirm-button")||(w(!0),setTimeout(()=>w(!1),100))},L=U=>{(U.code==="Space"||U.code==="Enter")&&N(U)};return(()=>{var U=Zy();return U.$$keydown=L,U.$$pointerdown=N,Ur(U,(()=>{var V=jo(()=>!!n());return()=>V()?[(()=>{var k=Ky(),z=k.firstChild;return Ur(k,ti(Ld,{get fallback(){return eS()},get children(){return ti(M,{})}}),z),z.addEventListener("mouseleave",O=>{O.currentTarget.style.transform="scale(1)",O.currentTarget.style.boxShadow="none"}),z.addEventListener("mouseenter",O=>{O.currentTarget.style.transform="scale(1.1)",O.currentTarget.style.boxShadow="0 0 30px rgba(0, 255, 0, 0.6)"}),z.$$click=O=>{O.stopPropagation(),o(!0),i.set_resource(Ss,{masterState:Ei.IN_GAME})},k})(),(()=>{var k=Jy(),z=k.firstChild,O=z.firstChild;O.nextSibling;var F=z.nextSibling,W=F.firstChild;W.nextSibling;var te=F.nextSibling,ae=te.firstChild;return ae.nextSibling,z.$$click=de=>{de.stopPropagation(),t(0)},F.$$click=de=>{de.stopPropagation(),t(1)},te.$$click=de=>{de.stopPropagation(),t(2)},bi(()=>({e:`character-slot ${e()===0?"selected":""}`,t:e()===0?"#ff0000":"#ffffff",a:`character-slot ${e()===1?"selected":""}`,o:e()===1?"#00bbff":"#ffffff",i:`character-slot ${e()===2?"selected":""}`,n:e()===2?"#518ac8":"#ffffff"}),({e:de,t:pe,a:De,o:K,i:G,n:T},C={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{oa(z,de,C.e),pe!==C.t&&pt(z,"border-color",pe),oa(F,De,C.a),K!==C.o&&pt(F,"border-color",K),oa(te,G,C.i),T!==C.n&&pt(te,"border-color",T)}),k})(),Qy()]:(()=>{var k=tS();return k.firstChild,k})()})()),bi(()=>({e:x()?"#ffff00":"#ffffff",t:x()?"none":"auto"}),({e:V,t:k},z={e:void 0,t:void 0})=>{V!==z.e&&pt(U,"color",V),k!==z.t&&pt(U,"pointer-events",k)}),U})()};return{ui:()=>R}}Zo(["pointerdown","keydown","click"]);var oS=hn('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border-radius:50%;border:5px solid rgba(255,255,255,0.5);box-sizing:content-box"><div style=position:absolute;transform:translate(-50%,-50%);border-radius:50%;background-color:rgba(255,255,255,0.5)>');function aS(i){let e=ut(i.position()),t=ut(typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize),n=ut(i.outerRingSize()),r=ut(i.knobSize()),s=ut();yi(()=>i.position(),f=>{e[1](f)}),yi(()=>typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize,f=>{t[1](f)}),yi(()=>i.outerRingSize(),f=>{n[1](f)}),yi(()=>i.knobSize(),f=>{r[1](f)});let o=rt(()=>{let f=s[0]();return f==null?new fe:new fe().copy(f).multiplyScalar(1/n[0]())});return{position:e,hitAreaSize:t,outerRingSize:n,knobSize:r,dragOffset:s,value:o,UI:()=>{let[f,u]=ut(!1),[d,a]=ut(),[l,h]=s,[m,g]=ut(),_,p=S=>{let A=m();if(A==null)return;_=S.pointerId,A.setPointerCapture(_);let M=A.getBoundingClientRect();a(new fe(S.clientX-M.left,S.clientY-M.top)),h(new fe)},y=S=>{let A=m();if(A==null)return;let M=d();if(M==null)return;A.setPointerCapture(S.pointerId);let R=A.getBoundingClientRect(),x=new fe(S.clientX-R.left-M.x,S.clientY-R.top-M.y),w=x.length();w>.5*n[0]()&&x.multiplyScalar(.5*n[0]()/w),h(x)},v=S=>{m()!=null&&_!=null&&(a(void 0),h(void 0))};return(()=>{var S=oS(),A=S.firstChild,M=A.firstChild;S.$$contextmenu=x=>x.preventDefault(),S.$$pointerup=v,S.$$pointermove=y,S.$$pointerdown=p;var R=g;return typeof R=="function"||Array.isArray(R)?ys(()=>R,S):g=S,bi(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${d()?.x??.5*t[0]()}px`,n:`${d()?.y??.5*t[0]()}px`,s:`${n[0]()}px`,h:`${n[0]()}px`,r:`calc(50% + ${l()?.x??0}px)`,d:`calc(50% + ${l()?.y??0}px)`,l:`${r[0]()}px`,u:`${r[0]()}px`}),({e:x,t:w,a:N,o:L,i:U,n:V,s:k,h:z,r:O,d:F,l:W,u:te},ae={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0})=>{x!==ae.e&&pt(S,"left",x),w!==ae.t&&pt(S,"top",w),N!==ae.a&&pt(S,"width",N),L!==ae.o&&pt(S,"height",L),U!==ae.i&&pt(A,"left",U),V!==ae.n&&pt(A,"top",V),k!==ae.s&&pt(A,"width",k),z!==ae.h&&pt(A,"height",z),O!==ae.r&&pt(M,"left",O),F!==ae.d&&pt(M,"top",F),W!==ae.l&&pt(M,"width",W),te!==ae.u&&pt(M,"height",te)}),S})()}}}Zo(["pointerdown","pointermove","pointerup","contextmenu"]);var lS=hn("<div style=position:absolute;user-select:none;touch-action:none>");const cS=1;function uS(i){const[e,t]=ut(!1),[n,r]=ut(0),[s,o]=ut(!1),[c,f]=ut(0),[u,d]=ut(!1),a=i.externalPressed||(()=>!1);let l,h=!1;const m=()=>{l||(l=window.setInterval(()=>{f(M=>M+1)},50))},g=()=>{l&&(clearInterval(l),l=void 0)};bn(()=>g()),requestAnimationFrame(function M(){const R=a();R&&!h&&(r(performance.now()),m()),!R&&h&&d(!0),h=R,requestAnimationFrame(M)});const _=()=>e()||a(),p=rt(()=>{c();const M=_(),R=n();if(!M)return 0;const x=(performance.now()-R)/1e3;return Math.min(x/cS,1)}),y=M=>{M.currentTarget.setPointerCapture(M.pointerId),t(!0),r(performance.now()),m()},v=M=>{t(!1),g(),o(!0)},S=M=>{e()&&(t(!1),g(),o(!0))},A=()=>(()=>{var M=lS();return M.$$contextmenu=R=>R.preventDefault(),M.addEventListener("pointerleave",S),M.$$pointerup=v,M.$$pointerdown=y,bi(()=>({e:`${i.position().x}px`,t:`${i.position().y}px`,a:`${i.size()}px`,o:`${i.size()}px`,i:`${.5*i.size()}px`,n:_()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:R,t:x,a:w,o:N,i:L,n:U},V={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{R!==V.e&&pt(M,"left",R),x!==V.t&&pt(M,"top",x),w!==V.a&&pt(M,"width",w),N!==V.o&&pt(M,"height",N),L!==V.i&&pt(M,"border-radius",L),U!==V.n&&pt(M,"background-color",U)}),M})();return{position:i.position,size:i.size,pressed:_,power:p,justReleased:()=>s()?(o(!1),!0):!1,justReleasedExternal:()=>u()?(d(!1),!0):!1,UI:A}}Zo(["pointerdown","pointerup","contextmenu"]);const Ai=12;class Hh{perm=[];constructor(e=0){const t=[];for(let r=0;r<256;r++)t[r]=r;let n=e;for(let r=255;r>0;r--){n=n*1103515245+12345&2147483647;const s=n%(r+1);[t[r],t[s]]=[t[s],t[r]]}for(let r=0;r<512;r++)this.perm[r]=t[r&255]}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return e+n*(t-e)}grad(e,t,n){const r=e&3,s=r<2?t:n,o=r<2?n:t;return((r&1)===0?s:-s)+((r&2)===0?o:-o)}noise(e,t){const n=Math.floor(e)&255,r=Math.floor(t)&255;e-=Math.floor(e),t-=Math.floor(t);const s=this.fade(e),o=this.fade(t),c=this.perm[n]+r,f=this.perm[n+1]+r;return this.lerp(this.lerp(this.grad(this.perm[c],e,t),this.grad(this.perm[f],e-1,t),s),this.lerp(this.grad(this.perm[c+1],e,t-1),this.grad(this.perm[f+1],e-1,t-1),s),o)}fbm(e,t,n=4){let r=0,s=1,o=1,c=0;for(let f=0;f<n;f++)r+=s*this.noise(e*o,t*o),c+=s,s*=.5,o*=2;return r/c}}const fS=new Hh(54321);new Hh(12345);let Ir=null;function hS(i=12345){if(Ir)return Ir;const e=f=>{const u=Math.sin(i*9999+f*7919)*1e4;return u-Math.floor(u)},t=12+Math.floor(e(0)*6),n=15,r=15,s=160,o=[];for(let f=0;f<t;f++){const u=f/t*Math.PI*2,d=.7+e(f+1)*.6,a=n+Math.cos(u)*s*d,l=r+Math.sin(u)*s*d,h=f/t,m=.5,g=.08,_=6,p=Math.exp(-Math.pow(h-m,2)/(2*Math.pow(g,2))),y=Ln(a,l)+.1-p*_;o.push(new B(a,y,l))}const c=new Mc(o);return c.closed=!0,c.curveType="centripetal",c.tension=.5,Ir=c,c}function Ln(i,e){return fS.fbm(i*.01,e*.01,4)*40}function dS(i=12345){const e=new Gt,t=hS(i),n=800,r=t.getSpacedPoints(n),s=[],o=[],c=[],f=Ai/2,u=t.getLength(),d=10;for(let x=0;x<=n;x++){const w=x/n,N=r[x],L=t.getTangentAt(w),U=new fe(L.x,L.z).normalize(),V=new fe(-U.y,U.x),k=w*u/d;if(s.push(N.x+V.x*f,N.y+.05,N.z+V.y*f,N.x-V.x*f,N.y+.05,N.z-V.y*f),c.push(0,k,1,k),x<n){const z=x*2,O=x*2+1,F=(x+1)*2,W=(x+1)*2+1;o.push(z,F,O,O,F,W)}}const a=new St;a.setAttribute("position",new Qe(s,3)),a.setAttribute("uv",new Qe(c,2)),a.setIndex(o),a.computeVertexNormals();const l=new Et({color:3355443,roughness:.8,side:cn}),h=new je(a,l);h.receiveShadow=!0,e.add(h);for(let x=0;x<2;x++){const w=[];for(let z=0;z<=n;z++){const O=z/n,F=r[z],W=t.getTangentAt(O),te=new fe(W.x,W.z).normalize(),ae=new fe(-te.y,te.x),de=x===0?-f-.2:f+.2,pe=F.x+ae.x*de,De=F.z+ae.y*de;w.push(new B(pe,F.y+.15,De))}const N=new Mc(w);N.closed=!0;const L=new bc(N,n,.06,6,!0),U=new Et({color:x===0?13369344:14540253,roughness:.3,metalness:.5}),V=new je(L,U);V.castShadow=!0,e.add(V);const k=24;for(let z=0;z<k;z++){const O=z/k,F=Math.floor(O*n),W=w[F],te=t.getTangentAt(F/n),ae=new fe(te.x,te.z).normalize();new fe(-ae.y,ae.x);const de=new ir(.12,.35,.12),pe=new je(de,U);pe.position.set(W.x,W.y+.175,W.z),pe.castShadow=!0,e.add(pe)}}for(let x=0;x<2;x++)for(let N=0;N<40;N++){const L=N/40,U=Math.floor(L*n),V=r[U],k=t.getTangentAt(U/n),z=new fe(k.x,k.z).normalize(),O=new fe(-z.y,z.x),F=x===0?-f-36-Math.random()*48:f+36+Math.random()*48,W=V.x+O.x*F,te=V.z+O.y*F,ae=Ln(W,te)+.1;if(Math.random()>.5){const De=new je(new rr(.06999999999999999,.1,.6,8),new Et({color:9127187}));De.position.set(W,ae+.6/2,te),De.castShadow=!0,e.add(De);const K=.35,G=.5,T=new je(new Us(K,G,8),new Et({color:2263842}));T.position.set(W,ae+.6+G/2-.05,te),T.castShadow=!0,e.add(T)}else{const de=.2+Math.random()*.3,pe=new je(new Go(de,0),new Et({color:8947848,roughness:.9}));pe.position.set(W,ae+de*.5,te),pe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),pe.castShadow=!0,e.add(pe)}}const m=.5,g=.2,_=180,p=16,y=new Et({color:1118481,roughness:1,flatShading:!0}),v=new Go(1,0),S=(_+1)*p,A=new i_(v,y,S);A.castShadow=!0,A.receiveShadow=!0,e.add(A);const M=new wt;let R=0;for(let x=0;x<=_;x++){const w=m-g+x/_*(g*2),N=t.getPointAt((w+1)%1),L=t.getTangentAt((w+1)%1),U=new fe(L.x,L.z).normalize(),V=new fe(-U.y,U.x),k=new B(V.x,0,V.y),z=new B(0,1,0);for(let O=0;O<p;O++){const F=-.2+O/(p-1)*(Math.PI+.4),W=3.5+Math.random()*2.5,ae=Ai/2+W*.9+.5+Math.random()*5,de=N.clone().add(k.clone().multiplyScalar(Math.cos(F)*ae)).add(z.clone().multiplyScalar(Math.max(-.2,Math.sin(F))*ae*.8));M.position.copy(de),M.scale.setScalar(W),M.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),M.updateMatrix(),A.setMatrixAt(R++,M.matrix)}}return{group:e,curve:t}}function pS(i=12345){let e=dS(i);return Ir=e.curve,e}function mS(){return Ir}function _S(i,e){const t=Ir;if(!t)return 1/0;const n=800;let r=1/0;for(let s=0;s<=n;s++){const o=s/n,c=t.getPointAt(o),f=c.x-i,u=c.z-e,d=Math.sqrt(f*f+u*u);d<r&&(r=d)}return r}function gS(i,e=0){const t=new Gt,n=i.getPointAt(e),r=i.getTangentAt(e),s=new fe(r.x,r.z).normalize(),o=new fe(-s.y,s.x),c=Ai+.4,f=.6,u=.15,d=Math.ceil(c/u),a=Math.ceil(f/u);for(let A=0;A<d;A++)for(let M=0;M<a;M++){const R=(A+M)%2===0,x=new Vr(u,u),w=new Et({color:R?16777215:2236962,side:cn}),N=new je(x,w),L=(A-d/2+.5)*u,U=(M-a/2+.5)*u;N.position.set(n.x+o.x*L-s.x*U,n.y+.06,n.z+o.y*L-s.y*U),N.rotation.x=-Math.PI/2,N.rotation.z=Math.atan2(r.x,r.z),t.add(N)}const l=2.5,h=new rr(.05,.05,l,8),m=new Et({color:8947848,metalness:.5}),g=new je(h,m);g.position.set(n.x-o.x*(c/2+.3),n.y+l/2,n.z-o.y*(c/2+.3)),g.castShadow=!0,t.add(g);const _=new je(h,m);_.position.set(n.x+o.x*(c/2+.3),n.y+l/2,n.z+o.y*(c/2+.3)),_.castShadow=!0,t.add(_);const p=c+1,y=new Vr(p,.4),v=new Et({color:16711680,side:cn,metalness:.3}),S=new je(y,v);return S.position.set(n.x,n.y+l,n.z),S.rotation.y=Math.atan2(r.x,r.z),t.add(S),t}function xS(i){const e=i.reactiveEcs,t=e.create_entity();return e.add_component(t,jt,{x:i.position.x,y:i.position.y,z:i.position.z}),e.add_component(t,zi,{x:i.velocity.x,y:i.velocity.y,z:i.velocity.z}),e.add_component(t,Pt,{x:0,y:0,z:0,w:1}),e.add_component(t,Eo,{playerType:1,facingForward:1}),e.add_component(t,fs,{speed:0}),t}const vS=tn;class Wo extends Jo{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,r){const s=this,o=new Ch(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(c))}catch(f){r?r(f):console.error(f),s.manager.itemError(e)}},n,r)}parse(e){const t=this;function n(K,G){if(K.nodeType!==1)return;const T=S(K);let C=!1,j=null;switch(K.nodeName){case"svg":G=m(K,G);break;case"style":s(K);break;case"g":G=m(K,G);break;case"path":G=m(K,G),K.hasAttribute("d")&&(j=r(K));break;case"rect":G=m(K,G),j=f(K);break;case"polygon":G=m(K,G),j=u(K);break;case"polyline":G=m(K,G),j=d(K);break;case"circle":G=m(K,G),j=a(K);break;case"ellipse":G=m(K,G),j=l(K);break;case"line":G=m(K,G),j=h(K);break;case"defs":C=!0;break;case"use":G=m(K,G);const ie=(K.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Se=K.viewportElement.getElementById(ie);Se?n(Se,G):console.warn("SVGLoader: 'use node' references non-existent node id: "+ie);break}j&&(G.fill!==void 0&&G.fill!=="none"&&j.color.setStyle(G.fill,vS),M(j,de),U.push(j),j.userData={node:K,style:G});const le=K.childNodes;for(let J=0;J<le.length;J++){const ie=le[J];C&&ie.nodeName!=="style"&&ie.nodeName!=="defs"||n(ie,G)}T&&(k.pop(),k.length>0?de.copy(k[k.length-1]):de.identity())}function r(K){const G=new Ui,T=new fe,C=new fe,j=new fe;let le=!0,J=!1;const ie=K.getAttribute("d");if(ie===""||ie==="none")return null;const Se=ie.match(/[a-df-z][^a-df-z]*/ig);for(let me=0,H=Se.length;me<H;me++){const Y=Se[me],Q=Y.charAt(0),$=Y.slice(1).trim();le===!0&&(J=!0,le=!1);let b;switch(Q){case"M":b=_($);for(let D=0,ce=b.length;D<ce;D+=2)T.x=b[D+0],T.y=b[D+1],C.x=T.x,C.y=T.y,D===0?G.moveTo(T.x,T.y):G.lineTo(T.x,T.y),D===0&&j.copy(T);break;case"H":b=_($);for(let D=0,ce=b.length;D<ce;D++)T.x=b[D],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"V":b=_($);for(let D=0,ce=b.length;D<ce;D++)T.y=b[D],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"L":b=_($);for(let D=0,ce=b.length;D<ce;D+=2)T.x=b[D+0],T.y=b[D+1],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"C":b=_($);for(let D=0,ce=b.length;D<ce;D+=6)G.bezierCurveTo(b[D+0],b[D+1],b[D+2],b[D+3],b[D+4],b[D+5]),C.x=b[D+2],C.y=b[D+3],T.x=b[D+4],T.y=b[D+5],D===0&&J===!0&&j.copy(T);break;case"S":b=_($);for(let D=0,ce=b.length;D<ce;D+=4)G.bezierCurveTo(g(T.x,C.x),g(T.y,C.y),b[D+0],b[D+1],b[D+2],b[D+3]),C.x=b[D+0],C.y=b[D+1],T.x=b[D+2],T.y=b[D+3],D===0&&J===!0&&j.copy(T);break;case"Q":b=_($);for(let D=0,ce=b.length;D<ce;D+=4)G.quadraticCurveTo(b[D+0],b[D+1],b[D+2],b[D+3]),C.x=b[D+0],C.y=b[D+1],T.x=b[D+2],T.y=b[D+3],D===0&&J===!0&&j.copy(T);break;case"T":b=_($);for(let D=0,ce=b.length;D<ce;D+=2){const be=g(T.x,C.x),xe=g(T.y,C.y);G.quadraticCurveTo(be,xe,b[D+0],b[D+1]),C.x=be,C.y=xe,T.x=b[D+0],T.y=b[D+1],D===0&&J===!0&&j.copy(T)}break;case"A":b=_($,[3,4],7);for(let D=0,ce=b.length;D<ce;D+=7){if(b[D+5]==T.x&&b[D+6]==T.y)continue;const be=T.clone();T.x=b[D+5],T.y=b[D+6],C.x=T.x,C.y=T.y,o(G,b[D],b[D+1],b[D+2],b[D+3],b[D+4],be,T),D===0&&J===!0&&j.copy(T)}break;case"m":b=_($);for(let D=0,ce=b.length;D<ce;D+=2)T.x+=b[D+0],T.y+=b[D+1],C.x=T.x,C.y=T.y,D===0?G.moveTo(T.x,T.y):G.lineTo(T.x,T.y),D===0&&j.copy(T);break;case"h":b=_($);for(let D=0,ce=b.length;D<ce;D++)T.x+=b[D],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"v":b=_($);for(let D=0,ce=b.length;D<ce;D++)T.y+=b[D],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"l":b=_($);for(let D=0,ce=b.length;D<ce;D+=2)T.x+=b[D+0],T.y+=b[D+1],C.x=T.x,C.y=T.y,G.lineTo(T.x,T.y),D===0&&J===!0&&j.copy(T);break;case"c":b=_($);for(let D=0,ce=b.length;D<ce;D+=6)G.bezierCurveTo(T.x+b[D+0],T.y+b[D+1],T.x+b[D+2],T.y+b[D+3],T.x+b[D+4],T.y+b[D+5]),C.x=T.x+b[D+2],C.y=T.y+b[D+3],T.x+=b[D+4],T.y+=b[D+5],D===0&&J===!0&&j.copy(T);break;case"s":b=_($);for(let D=0,ce=b.length;D<ce;D+=4)G.bezierCurveTo(g(T.x,C.x),g(T.y,C.y),T.x+b[D+0],T.y+b[D+1],T.x+b[D+2],T.y+b[D+3]),C.x=T.x+b[D+0],C.y=T.y+b[D+1],T.x+=b[D+2],T.y+=b[D+3],D===0&&J===!0&&j.copy(T);break;case"q":b=_($);for(let D=0,ce=b.length;D<ce;D+=4)G.quadraticCurveTo(T.x+b[D+0],T.y+b[D+1],T.x+b[D+2],T.y+b[D+3]),C.x=T.x+b[D+0],C.y=T.y+b[D+1],T.x+=b[D+2],T.y+=b[D+3],D===0&&J===!0&&j.copy(T);break;case"t":b=_($);for(let D=0,ce=b.length;D<ce;D+=2){const be=g(T.x,C.x),xe=g(T.y,C.y);G.quadraticCurveTo(be,xe,T.x+b[D+0],T.y+b[D+1]),C.x=be,C.y=xe,T.x=T.x+b[D+0],T.y=T.y+b[D+1],D===0&&J===!0&&j.copy(T)}break;case"a":b=_($,[3,4],7);for(let D=0,ce=b.length;D<ce;D+=7){if(b[D+5]==0&&b[D+6]==0)continue;const be=T.clone();T.x+=b[D+5],T.y+=b[D+6],C.x=T.x,C.y=T.y,o(G,b[D],b[D+1],b[D+2],b[D+3],b[D+4],be,T),D===0&&J===!0&&j.copy(T)}break;case"Z":case"z":G.currentPath.autoClose=!0,G.currentPath.curves.length>0&&(T.copy(j),G.currentPath.currentPoint.copy(T),le=!0);break;default:console.warn(Y)}J=!1}return G}function s(K){if(!(!K.sheet||!K.sheet.cssRules||!K.sheet.cssRules.length))for(let G=0;G<K.sheet.cssRules.length;G++){const T=K.sheet.cssRules[G];if(T.type!==1)continue;const C=T.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<C.length;j++){const le=Object.fromEntries(Object.entries(T.style).filter(([,J])=>J!==""));V[C[j]]=Object.assign(V[C[j]]||{},le)}}}function o(K,G,T,C,j,le,J,ie){if(G==0||T==0){K.lineTo(ie.x,ie.y);return}C=C*Math.PI/180,G=Math.abs(G),T=Math.abs(T);const Se=(J.x-ie.x)/2,me=(J.y-ie.y)/2,H=Math.cos(C)*Se+Math.sin(C)*me,Y=-Math.sin(C)*Se+Math.cos(C)*me;let Q=G*G,$=T*T;const b=H*H,D=Y*Y,ce=b/Q+D/$;if(ce>1){const _e=Math.sqrt(ce);G=_e*G,T=_e*T,Q=G*G,$=T*T}const be=Q*D+$*b,xe=(Q*$-be)/be;let I=Math.sqrt(Math.max(0,xe));j===le&&(I=-I);const E=I*G*Y/T,X=-I*T*H/G,se=Math.cos(C)*E-Math.sin(C)*X+(J.x+ie.x)/2,he=Math.sin(C)*E+Math.cos(C)*X+(J.y+ie.y)/2,re=c(1,0,(H-E)/G,(Y-X)/T),Te=c((H-E)/G,(Y-X)/T,(-H-E)/G,(-Y-X)/T)%(Math.PI*2);K.currentPath.absellipse(se,he,G,T,re,re+Te,le===0,C)}function c(K,G,T,C){const j=K*T+G*C,le=Math.sqrt(K*K+G*G)*Math.sqrt(T*T+C*C);let J=Math.acos(Math.max(-1,Math.min(1,j/le)));return K*C-G*T<0&&(J=-J),J}function f(K){const G=v(K.getAttribute("x")||0),T=v(K.getAttribute("y")||0),C=v(K.getAttribute("rx")||K.getAttribute("ry")||0),j=v(K.getAttribute("ry")||K.getAttribute("rx")||0),le=v(K.getAttribute("width")),J=v(K.getAttribute("height")),ie=1-.551915024494,Se=new Ui;return Se.moveTo(G+C,T),Se.lineTo(G+le-C,T),(C!==0||j!==0)&&Se.bezierCurveTo(G+le-C*ie,T,G+le,T+j*ie,G+le,T+j),Se.lineTo(G+le,T+J-j),(C!==0||j!==0)&&Se.bezierCurveTo(G+le,T+J-j*ie,G+le-C*ie,T+J,G+le-C,T+J),Se.lineTo(G+C,T+J),(C!==0||j!==0)&&Se.bezierCurveTo(G+C*ie,T+J,G,T+J-j*ie,G,T+J-j),Se.lineTo(G,T+j),(C!==0||j!==0)&&Se.bezierCurveTo(G,T+j*ie,G+C*ie,T,G+C,T),Se}function u(K){function G(le,J,ie){const Se=v(J),me=v(ie);j===0?C.moveTo(Se,me):C.lineTo(Se,me),j++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new Ui;let j=0;return K.getAttribute("points").replace(T,G),C.currentPath.autoClose=!0,C}function d(K){function G(le,J,ie){const Se=v(J),me=v(ie);j===0?C.moveTo(Se,me):C.lineTo(Se,me),j++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new Ui;let j=0;return K.getAttribute("points").replace(T,G),C.currentPath.autoClose=!1,C}function a(K){const G=v(K.getAttribute("cx")||0),T=v(K.getAttribute("cy")||0),C=v(K.getAttribute("r")||0),j=new Pr;j.absarc(G,T,C,0,Math.PI*2);const le=new Ui;return le.subPaths.push(j),le}function l(K){const G=v(K.getAttribute("cx")||0),T=v(K.getAttribute("cy")||0),C=v(K.getAttribute("rx")||0),j=v(K.getAttribute("ry")||0),le=new Pr;le.absellipse(G,T,C,j,0,Math.PI*2);const J=new Ui;return J.subPaths.push(le),J}function h(K){const G=v(K.getAttribute("x1")||0),T=v(K.getAttribute("y1")||0),C=v(K.getAttribute("x2")||0),j=v(K.getAttribute("y2")||0),le=new Ui;return le.moveTo(G,T),le.lineTo(C,j),le.currentPath.autoClose=!1,le}function m(K,G){G=Object.assign({},G);let T={};if(K.hasAttribute("class")){const J=K.getAttribute("class").split(/\s/).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<J.length;ie++)T=Object.assign(T,V["."+J[ie]])}K.hasAttribute("id")&&(T=Object.assign(T,V["#"+K.getAttribute("id")]));function C(J,ie,Se){Se===void 0&&(Se=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),K.hasAttribute(J)&&(G[ie]=Se(K.getAttribute(J))),T[ie]&&(G[ie]=Se(T[ie])),K.style&&K.style[J]!==""&&(G[ie]=Se(K.style[J]))}function j(J){return Math.max(0,Math.min(1,v(J)))}function le(J){return Math.max(0,v(J))}return C("fill","fill"),C("fill-opacity","fillOpacity",j),C("fill-rule","fillRule"),C("opacity","opacity",j),C("stroke","stroke"),C("stroke-opacity","strokeOpacity",j),C("stroke-width","strokeWidth",le),C("stroke-linejoin","strokeLineJoin"),C("stroke-linecap","strokeLineCap"),C("stroke-miterlimit","strokeMiterLimit",le),C("visibility","visibility"),G}function g(K,G){return K-(G-K)}function _(K,G,T){if(typeof K!="string")throw new TypeError("Invalid input: "+typeof K);const C={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,le=1,J=2,ie=3;let Se=j,me=!0,H="",Y="";const Q=[];function $(be,xe,I){const E=new SyntaxError('Unexpected character "'+be+'" at index '+xe+".");throw E.partial=I,E}function b(){H!==""&&(Y===""?Q.push(Number(H)):Q.push(Number(H)*Math.pow(10,Number(Y)))),H="",Y=""}let D;const ce=K.length;for(let be=0;be<ce;be++){if(D=K[be],Array.isArray(G)&&G.includes(Q.length%T)&&C.FLAGS.test(D)){Se=le,H=D,b();continue}if(Se===j){if(C.WHITESPACE.test(D))continue;if(C.DIGIT.test(D)||C.SIGN.test(D)){Se=le,H=D;continue}if(C.POINT.test(D)){Se=J,H=D;continue}C.COMMA.test(D)&&(me&&$(D,be,Q),me=!0)}if(Se===le){if(C.DIGIT.test(D)){H+=D;continue}if(C.POINT.test(D)){H+=D,Se=J;continue}if(C.EXP.test(D)){Se=ie;continue}C.SIGN.test(D)&&H.length===1&&C.SIGN.test(H[0])&&$(D,be,Q)}if(Se===J){if(C.DIGIT.test(D)){H+=D;continue}if(C.EXP.test(D)){Se=ie;continue}C.POINT.test(D)&&H[H.length-1]==="."&&$(D,be,Q)}if(Se===ie){if(C.DIGIT.test(D)){Y+=D;continue}if(C.SIGN.test(D)){if(Y===""){Y+=D;continue}Y.length===1&&C.SIGN.test(Y)&&$(D,be,Q)}}C.WHITESPACE.test(D)?(b(),Se=j,me=!1):C.COMMA.test(D)?(b(),Se=j,me=!0):C.SIGN.test(D)?(b(),Se=le,H=D):C.POINT.test(D)?(b(),Se=J,H=D):$(D,be,Q)}return b(),Q}const p=["mm","cm","in","pt","pc","px"],y={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(K){let G="px";if(typeof K=="string"||K instanceof String)for(let C=0,j=p.length;C<j;C++){const le=p[C];if(K.endsWith(le)){G=le,K=K.substring(0,K.length-le.length);break}}let T;return G==="px"&&t.defaultUnit!=="px"?T=y.in[t.defaultUnit]/t.defaultDPI:(T=y[G][t.defaultUnit],T<0&&(T=y[G].in*t.defaultDPI)),T*parseFloat(K)}function S(K){if(!(K.hasAttribute("transform")||K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))))return null;const G=A(K);return k.length>0&&G.premultiply(k[k.length-1]),de.copy(G),k.push(G),G}function A(K){const G=new qe,T=z;if(K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))){const C=v(K.getAttribute("x")||0),j=v(K.getAttribute("y")||0);G.translate(C,j)}if(K.hasAttribute("transform")){const C=K.getAttribute("transform").split(")");for(let j=C.length-1;j>=0;j--){const le=C[j].trim();if(le==="")continue;const J=le.indexOf("("),ie=le.length;if(J>0&&J<ie){const Se=le.slice(0,J),me=_(le.slice(J+1));switch(T.identity(),Se){case"translate":if(me.length>=1){const H=me[0];let Y=0;me.length>=2&&(Y=me[1]),T.translate(H,Y)}break;case"rotate":if(me.length>=1){let H=0,Y=0,Q=0;H=me[0]*Math.PI/180,me.length>=3&&(Y=me[1],Q=me[2]),O.makeTranslation(-Y,-Q),F.makeRotation(H),W.multiplyMatrices(F,O),O.makeTranslation(Y,Q),T.multiplyMatrices(O,W)}break;case"scale":if(me.length>=1){const H=me[0];let Y=H;me.length>=2&&(Y=me[1]),T.scale(H,Y)}break;case"skewX":me.length===1&&T.set(1,Math.tan(me[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":me.length===1&&T.set(1,0,0,Math.tan(me[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":me.length===6&&T.set(me[0],me[2],me[4],me[1],me[3],me[5],0,0,1);break}}G.premultiply(T)}}return G}function M(K,G){function T(J){ae.set(J.x,J.y,1).applyMatrix3(G),J.set(ae.x,ae.y)}function C(J){const ie=J.xRadius,Se=J.yRadius,me=Math.cos(J.aRotation),H=Math.sin(J.aRotation),Y=new B(ie*me,ie*H,0),Q=new B(-Se*H,Se*me,0),$=Y.applyMatrix3(G),b=Q.applyMatrix3(G),D=z.set($.x,b.x,0,$.y,b.y,0,0,0,1),ce=O.copy(D).invert(),I=F.copy(ce).transpose().multiply(ce).elements,E=L(I[0],I[1],I[4]),X=Math.sqrt(E.rt1),se=Math.sqrt(E.rt2);if(J.xRadius=1/X,J.yRadius=1/se,J.aRotation=Math.atan2(E.sn,E.cs),!((J.aEndAngle-J.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const re=O.set(X,0,0,0,se,0,0,0,1),Te=F.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),_e=re.multiply(Te).multiply(D),we=Oe=>{const{x:ge,y:Me}=new B(Math.cos(Oe),Math.sin(Oe),0).applyMatrix3(_e);return Math.atan2(Me,ge)};J.aStartAngle=we(J.aStartAngle),J.aEndAngle=we(J.aEndAngle),R(G)&&(J.aClockwise=!J.aClockwise)}}function j(J){const ie=w(G),Se=N(G);J.xRadius*=ie,J.yRadius*=Se;const me=ie>Number.EPSILON?Math.atan2(G.elements[1],G.elements[0]):Math.atan2(-G.elements[3],G.elements[4]);J.aRotation+=me,R(G)&&(J.aStartAngle*=-1,J.aEndAngle*=-1,J.aClockwise=!J.aClockwise)}const le=K.subPaths;for(let J=0,ie=le.length;J<ie;J++){const me=le[J].curves;for(let H=0;H<me.length;H++){const Y=me[H];Y.isLineCurve?(T(Y.v1),T(Y.v2)):Y.isCubicBezierCurve?(T(Y.v0),T(Y.v1),T(Y.v2),T(Y.v3)):Y.isQuadraticBezierCurve?(T(Y.v0),T(Y.v1),T(Y.v2)):Y.isEllipseCurve&&(te.set(Y.aX,Y.aY),T(te),Y.aX=te.x,Y.aY=te.y,x(G)?C(Y):j(Y))}}}function R(K){const G=K.elements;return G[0]*G[4]-G[1]*G[3]<0}function x(K){const G=K.elements,T=G[0]*G[3]+G[1]*G[4];if(T===0)return!1;const C=w(K),j=N(K);return Math.abs(T/(C*j))>Number.EPSILON}function w(K){const G=K.elements;return Math.sqrt(G[0]*G[0]+G[1]*G[1])}function N(K){const G=K.elements;return Math.sqrt(G[3]*G[3]+G[4]*G[4])}function L(K,G,T){let C,j,le,J,ie;const Se=K+T,me=K-T,H=Math.sqrt(me*me+4*G*G);return Se>0?(C=.5*(Se+H),ie=1/C,j=K*ie*T-G*ie*G):Se<0?j=.5*(Se-H):(C=.5*H,j=-.5*H),me>0?le=me+H:le=me-H,Math.abs(le)>2*Math.abs(G)?(ie=-2*G/le,J=1/Math.sqrt(1+ie*ie),le=ie*J):Math.abs(G)===0?(le=1,J=0):(ie=-.5*le/G,le=1/Math.sqrt(1+ie*ie),J=ie*le),me>0&&(ie=le,le=-J,J=ie),{rt1:C,rt2:j,cs:le,sn:J}}const U=[],V={},k=[],z=new qe,O=new qe,F=new qe,W=new qe,te=new fe,ae=new B,de=new qe,pe=new DOMParser().parseFromString(e,"image/svg+xml");return n(pe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:pe.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(g,_,p,y){const v=g.x,S=_.x,A=p.x,M=y.x,R=g.y,x=_.y,w=p.y,N=y.y,L=(M-A)*(R-w)-(N-w)*(v-A),U=(S-v)*(R-w)-(x-R)*(v-A),V=(N-w)*(S-v)-(M-A)*(x-R),k=L/V,z=U/V;if(V===0&&L!==0||k<=0||k>=1||z<0||z>1)return null;if(L===0&&V===0){for(let O=0;O<2;O++)if(o(O===0?p:y,g,_),r.loc==n.ORIGIN){const F=O===0?p:y;return{x:F.x,y:F.y,t:r.t}}else if(r.loc==n.BETWEEN){const F=+(v+r.t*(S-v)).toPrecision(10),W=+(R+r.t*(x-R)).toPrecision(10);return{x:F,y:W,t:r.t}}return null}else{for(let W=0;W<2;W++)if(o(W===0?p:y,g,_),r.loc==n.ORIGIN){const te=W===0?p:y;return{x:te.x,y:te.y,t:r.t}}const O=+(v+k*(S-v)).toPrecision(10),F=+(R+k*(x-R)).toPrecision(10);return{x:O,y:F,t:k}}}function o(g,_,p){const y=p.x-_.x,v=p.y-_.y,S=g.x-_.x,A=g.y-_.y,M=y*A-S*v;if(g.x===_.x&&g.y===_.y){r.loc=n.ORIGIN,r.t=0;return}if(g.x===p.x&&g.y===p.y){r.loc=n.DESTINATION,r.t=1;return}if(M<-Number.EPSILON){r.loc=n.LEFT;return}if(M>Number.EPSILON){r.loc=n.RIGHT;return}if(y*S<0||v*A<0){r.loc=n.BEHIND;return}if(Math.sqrt(y*y+v*v)<Math.sqrt(S*S+A*A)){r.loc=n.BEYOND;return}let R;y!==0?R=S/y:R=A/v,r.loc=n.BETWEEN,r.t=R}function c(g,_){const p=[],y=[];for(let v=1;v<g.length;v++){const S=g[v-1],A=g[v];for(let M=1;M<_.length;M++){const R=_[M-1],x=_[M],w=s(S,A,R,x);w!==null&&p.find(N=>N.t<=w.t+Number.EPSILON&&N.t>=w.t-Number.EPSILON)===void 0&&(p.push(w),y.push(new fe(w.x,w.y)))}}return y}function f(g,_,p){const y=new fe;_.getCenter(y);const v=[];return p.forEach(S=>{S.boundingBox.containsPoint(y)&&c(g,S.points).forEach(M=>{v.push({identifier:S.identifier,isCW:S.isCW,point:M})})}),v.sort((S,A)=>S.point.x-A.point.x),v}function u(g,_,p,y,v){(v==null||v==="")&&(v="nonzero");const S=new fe;g.boundingBox.getCenter(S);const A=[new fe(p,S.y),new fe(y,S.y)],M=f(A,g.boundingBox,_);M.sort((U,V)=>U.point.x-V.point.x);const R=[],x=[];M.forEach(U=>{U.identifier===g.identifier?R.push(U):x.push(U)});const w=R[0].point.x,N=[];let L=0;for(;L<x.length&&x[L].point.x<w;)N.length>0&&N[N.length-1]===x[L].identifier?N.pop():N.push(x[L].identifier),L++;if(N.push(g.identifier),v==="evenodd"){const U=N.length%2===0,V=N[N.length-2];return{identifier:g.identifier,isHole:U,for:V}}else if(v==="nonzero"){let U=!0,V=null,k=null;for(let z=0;z<N.length;z++){const O=N[z];U?(k=_[O].isCW,U=!1,V=O):k!==_[O].isCW&&(k=_[O].isCW,U=!0)}return{identifier:g.identifier,isHole:U,for:V}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let d=999999999,a=-999999999,l=e.subPaths.map(g=>{const _=g.getPoints();let p=-999999999,y=999999999,v=-999999999,S=999999999;for(let A=0;A<_.length;A++){const M=_[A];M.y>p&&(p=M.y),M.y<y&&(y=M.y),M.x>v&&(v=M.x),M.x<S&&(S=M.x)}return a<=v&&(a=v+1),d>=S&&(d=S-1),{curves:g.curves,points:_,isCW:Si.isClockWise(_),identifier:-1,boundingBox:new tg(new fe(S,y),new fe(v,p))}});l=l.filter(g=>g.points.length>1);for(let g=0;g<l.length;g++)l[g].identifier=g;const h=l.map(g=>u(g,l,d,a,e.userData?e.userData.style.fillRule:void 0)),m=[];return l.forEach(g=>{if(!h[g.identifier].isHole){const p=new Zi;p.curves=g.curves,h.filter(v=>v.isHole&&v.for===g.identifier).forEach(v=>{const S=l[v.identifier],A=new Pr;A.curves=S.curves,p.holes.push(A)}),m.push(p)}}),m}static getStrokeStyle(e,t,n,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,n,r){const s=[],o=[],c=[];if(Wo.pointsToStrokeWithBuffers(e,t,n,r,s,o,c)===0)return null;const f=new St;return f.setAttribute("position",new Qe(s,3)),f.setAttribute("normal",new Qe(o,3)),f.setAttribute("uv",new Qe(c,2)),f}static pointsToStrokeWithBuffers(e,t,n,r,s,o,c,f){const u=new fe,d=new fe,a=new fe,l=new fe,h=new fe,m=new fe,g=new fe,_=new fe,p=new fe,y=new fe,v=new fe,S=new fe,A=new fe,M=new fe,R=new fe,x=new fe,w=new fe;n=n!==void 0?n:12,r=r!==void 0?r:.001,f=f!==void 0?f:0,e=me(e);const N=e.length;if(N<2)return 0;const L=e[0].equals(e[N-1]);let U,V=e[0],k;const z=t.strokeWidth/2,O=1/(N-1);let F=0,W,te,ae,de,pe=!1,De=0,K=f*3,G=f*2;T(e[0],e[1],u).multiplyScalar(z),_.copy(e[0]).sub(u),p.copy(e[0]).add(u),y.copy(_),v.copy(p);for(let H=1;H<N;H++){U=e[H],H===N-1?L?k=e[1]:k=void 0:k=e[H+1];const Y=u;if(T(V,U,Y),a.copy(Y).multiplyScalar(z),S.copy(U).sub(a),A.copy(U).add(a),W=F+O,te=!1,k!==void 0){T(U,k,d),a.copy(d).multiplyScalar(z),M.copy(U).sub(a),R.copy(U).add(a),ae=!0,a.subVectors(k,V),Y.dot(a)<0&&(ae=!1),H===1&&(pe=ae),a.subVectors(k,U),a.normalize();const Q=Math.abs(Y.dot(a));if(Q>Number.EPSILON){const $=z/Q;a.multiplyScalar(-$),l.subVectors(U,V),h.copy(l).setLength($).add(a),x.copy(h).negate();const b=h.length(),D=l.length();l.divideScalar(D),m.subVectors(k,U);const ce=m.length();switch(m.divideScalar(ce),l.dot(x)<D&&m.dot(x)<ce&&(te=!0),w.copy(h).add(U),x.add(U),de=!1,te?ae?(R.copy(x),A.copy(x)):(M.copy(x),S.copy(x)):le(),t.strokeLineJoin){case"bevel":J(ae,te,W);break;case"round":ie(ae,te),ae?j(U,S,M,W,0):j(U,R,A,W,1);break;default:const be=z*t.strokeMiterLimit/b;if(be<1)if(t.strokeLineJoin!=="miter-clip"){J(ae,te,W);break}else ie(ae,te),ae?(m.subVectors(w,S).multiplyScalar(be).add(S),g.subVectors(w,M).multiplyScalar(be).add(M),C(S,W,0),C(m,W,0),C(U,W,.5),C(U,W,.5),C(m,W,0),C(g,W,0),C(U,W,.5),C(g,W,0),C(M,W,0)):(m.subVectors(w,A).multiplyScalar(be).add(A),g.subVectors(w,R).multiplyScalar(be).add(R),C(A,W,1),C(m,W,1),C(U,W,.5),C(U,W,.5),C(m,W,1),C(g,W,1),C(U,W,.5),C(g,W,1),C(R,W,1));else te?(ae?(C(p,F,1),C(_,F,0),C(w,W,0),C(p,F,1),C(w,W,0),C(x,W,1)):(C(p,F,1),C(_,F,0),C(w,W,1),C(_,F,0),C(x,W,0),C(w,W,1)),ae?M.copy(w):R.copy(w)):ae?(C(S,W,0),C(w,W,0),C(U,W,.5),C(U,W,.5),C(w,W,0),C(M,W,0)):(C(A,W,1),C(w,W,1),C(U,W,.5),C(U,W,.5),C(w,W,1),C(R,W,1)),de=!0;break}}else le()}else le();!L&&H===N-1&&Se(e[0],y,v,ae,!0,F),F=W,V=U,_.copy(M),p.copy(R)}if(!L)Se(U,S,A,ae,!1,W);else if(te&&s){let H=w,Y=x;pe!==ae&&(H=x,Y=w),ae?(de||pe)&&(Y.toArray(s,0),Y.toArray(s,9),de&&H.toArray(s,3)):(de||!pe)&&(Y.toArray(s,3),Y.toArray(s,9),de&&H.toArray(s,0))}return De;function T(H,Y,Q){return Q.subVectors(Y,H),Q.set(-Q.y,Q.x).normalize()}function C(H,Y,Q){s&&(s[K]=H.x,s[K+1]=H.y,s[K+2]=0,o&&(o[K]=0,o[K+1]=0,o[K+2]=1),K+=3,c&&(c[G]=Y,c[G+1]=Q,G+=2)),De+=3}function j(H,Y,Q,$,b){u.copy(Y).sub(H).normalize(),d.copy(Q).sub(H).normalize();let D=Math.PI;const ce=u.dot(d);Math.abs(ce)<1&&(D=Math.abs(Math.acos(ce))),D/=n,a.copy(Y);for(let be=0,xe=n-1;be<xe;be++)l.copy(a).rotateAround(H,D),C(a,$,b),C(l,$,b),C(H,$,.5),a.copy(l);C(l,$,b),C(Q,$,b),C(H,$,.5)}function le(){C(p,F,1),C(_,F,0),C(S,W,0),C(p,F,1),C(S,W,0),C(A,W,1)}function J(H,Y,Q){Y?H?(C(p,F,1),C(_,F,0),C(S,W,0),C(p,F,1),C(S,W,0),C(x,W,1),C(S,Q,0),C(M,Q,0),C(x,Q,.5)):(C(p,F,1),C(_,F,0),C(A,W,1),C(_,F,0),C(x,W,0),C(A,W,1),C(A,Q,1),C(x,Q,0),C(R,Q,1)):H?(C(S,Q,0),C(M,Q,0),C(U,Q,.5)):(C(A,Q,1),C(R,Q,0),C(U,Q,.5))}function ie(H,Y){Y&&(H?(C(p,F,1),C(_,F,0),C(S,W,0),C(p,F,1),C(S,W,0),C(x,W,1),C(S,F,0),C(U,W,.5),C(x,W,1),C(U,W,.5),C(M,F,0),C(x,W,1)):(C(p,F,1),C(_,F,0),C(A,W,1),C(_,F,0),C(x,W,0),C(A,W,1),C(A,F,1),C(x,W,0),C(U,W,.5),C(U,W,.5),C(x,W,0),C(R,F,1)))}function Se(H,Y,Q,$,b,D){switch(t.strokeLineCap){case"round":b?j(H,Q,Y,D,.5):j(H,Y,Q,D,.5);break;case"square":if(b)u.subVectors(Y,H),d.set(u.y,-u.x),a.addVectors(u,d).add(H),l.subVectors(d,u).add(H),$?(a.toArray(s,3),l.toArray(s,0),l.toArray(s,9)):(a.toArray(s,3),c[7]===1?l.toArray(s,9):a.toArray(s,9),l.toArray(s,0));else{u.subVectors(Q,H),d.set(u.y,-u.x),a.addVectors(u,d).add(H),l.subVectors(d,u).add(H);const ce=s.length;$?(a.toArray(s,ce-3),l.toArray(s,ce-6),l.toArray(s,ce-12)):(l.toArray(s,ce-6),a.toArray(s,ce-3),l.toArray(s,ce-12))}break}}function me(H){let Y=!1;for(let $=1,b=H.length-1;$<b;$++)if(H[$].distanceTo(H[$+1])<r){Y=!0;break}if(!Y)return H;const Q=[];Q.push(H[0]);for(let $=1,b=H.length-1;$<b;$++)H[$].distanceTo(H[$+1])>=r&&Q.push(H[$]);return Q.push(H[H.length-1]),Q}}}function Wh(){let i=new Gt;const e=new Et({color:5343944}),t=new Et({color:7779297}),n=new Et({color:16768256}),r=new Et({color:16777215}),s=new Et({color:0}),o=50,u=new Wo().parse('<svg><path d="m 135.55266,65.650453 a 45,45 0 0 0 -48.000001,-15 l -62,20 c 0,0 53,40.000007 94.000001,29.999997 l 3,-0.999997 c 17,-5 23,-21 13,-34 z"/></svg>'),a=Wo.createShapes(u.paths[0])[0],l=.006,h=new Er(a,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});h.center();const m=new je(h,e);m.position.set(-.05,.16,0),m.scale.set(l,l,l),i.add(m);const g=new Er(a,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});g.center();const _=new je(g,t);_.position.set(.05,-.16,0),_.rotation.z=Math.PI,_.scale.set(l,l,l),i.add(_);const p=new Zi;p.moveTo(5,0),p.lineTo(-4,6),p.lineTo(-4,-3),p.closePath();const y=o+.8,v=new Er(p,{bevelEnabled:!1,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:y});v.center(),i.rotation.x=Math.PI;let S=new Gt;S.add(i);let A=new Ps(.1),M=new je(A,r);M.position.set(0,.16,.5*o*l),S.add(M);let R=new Ps(.03),x=new je(R,s);x.position.copy(M.position),x.position.z+=.1,S.add(x);let w=M.clone();w.position.z=-w.position.z,S.add(w);let N=x.clone();N.position.z=-N.position.z,S.add(N);let L=new Gt,U=.03,V=new rr(U,U,.3),k=new je(V,n);k.position.set(0,-.4,0);let z=new Zi;z.moveTo(-.14,0),z.lineTo(.2,.08),z.lineTo(.2,-.08),z.closePath();let O=new Er(z,{bevelEnabled:!1,depth:.04}),F=new je(O,n);F.rotateX(.5*Math.PI),F.position.set(0,-.51,0),L.add(k),L.add(F),L.position.set(0,0,.1),S.add(L);let W=L.clone();W.position.z=-W.position.z,S.add(W);const te=new je(v,n);te.position.set(.375,.14,0),te.scale.set(l,l,l),S.add(te);let ae=new Gt;return S.rotateY(-.5*Math.PI),S.position.set(0,.55,0),ae.add(S),ae}const yS=Object.freeze(Object.defineProperty({__proto__:null,createSolidLogo:Wh},Symbol.toStringTag,{value:"Module"})),SS=/^[og]\s*(.+)?/,MS=/^mtllib /,bS=/^usemtl /,ES=/^usemap /,pf=new B,Ya=new B,mf=new B,_f=new B,ln=new B;function wS(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const c={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const u={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;pf.fromArray(r,e),Ya.fromArray(r,t),mf.fromArray(r,n),ln.subVectors(mf,Ya),_f.subVectors(pf,Ya),ln.cross(_f),ln.normalize(),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,o,c,f,u){const d=this.vertices.length;let a=this.parseVertexIndex(e,d),l=this.parseVertexIndex(t,d),h=this.parseVertexIndex(n,d);if(this.addVertex(a,l,h),this.addColor(a,l,h),c!==void 0&&c!==""){const m=this.normals.length;a=this.parseNormalIndex(c,m),l=this.parseNormalIndex(f,m),h=this.parseNormalIndex(u,m),this.addNormal(a,l,h)}else this.addFaceNormal(a,l,h);if(r!==void 0&&r!==""){const m=this.uvs.length;a=this.parseUVIndex(r,m),l=this.parseUVIndex(s,m),h=this.parseUVIndex(o,m),this.addUV(a,l,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class TS extends Jo{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,o=new Ch(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(c))}catch(f){r?r(f):console.error(f),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new wS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r="",s="",o=0,c=[];const f=typeof"".trimLeft=="function";for(let a=0,l=n.length;a<l;a++)if(r=n[a],r=f?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){const h=r.split(/\s+/);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?t.colors.push(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(s==="f"){const m=r.substr(1).trim().split(/\s+/),g=[];for(let p=0,y=m.length;p<y;p++){const v=m[p];if(v.length>0){const S=v.split("/");g.push(S)}}const _=g[0];for(let p=1,y=g.length-1;p<y;p++){const v=g[p],S=g[p+1];t.addFace(_[0],v[0],S[0],_[1],v[1],S[1],_[2],v[2],S[2])}}else if(s==="l"){const h=r.substring(1).trim().split(" ");let m=[];const g=[];if(r.indexOf("/")===-1)m=h;else for(let _=0,p=h.length;_<p;_++){const y=h[_].split("/");y[0]!==""&&m.push(y[0]),y[1]!==""&&g.push(y[1])}t.addLineGeometry(m,g)}else if(s==="p"){const m=r.substr(1).trim().split(" ");t.addPointGeometry(m)}else if((c=SS.exec(r))!==null){const h=(" "+c[0].substr(1).trim()).substr(1);t.startObject(h)}else if(bS.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(MS.test(r))t.materialLibraries.push(r.substring(7).trim());else if(ES.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(c=r.split(" "),c.length>1){const m=c[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const u=new Gt;if(u.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const h=t.objects[a],m=h.geometry,g=h.materials,_=m.type==="Line",p=m.type==="Points";let y=!1;if(m.vertices.length===0)continue;const v=new St;v.setAttribute("position",new Qe(m.vertices,3)),m.normals.length>0&&v.setAttribute("normal",new Qe(m.normals,3)),m.colors.length>0&&(y=!0,v.setAttribute("color",new Qe(m.colors,3))),m.hasUVIndices===!0&&v.setAttribute("uv",new Qe(m.uvs,2));const S=[];for(let M=0,R=g.length;M<R;M++){const x=g[M],w=x.name+"_"+x.smooth+"_"+y;let N=t.materials[w];if(this.materials!==null){if(N=this.materials.create(x.name),_&&N&&!(N instanceof Po)){const L=new Po;Tn.prototype.copy.call(L,N),L.color.copy(N.color),N=L}else if(p&&N&&!(N instanceof ss)){const L=new ss({size:10,sizeAttenuation:!1});Tn.prototype.copy.call(L,N),L.color.copy(N.color),L.map=N.map,N=L}}N===void 0&&(_?N=new Po:p?N=new ss({size:1,sizeAttenuation:!1}):N=new X_,N.name=x.name,N.flatShading=!x.smooth,N.vertexColors=y,t.materials[w]=N),S.push(N)}let A;if(S.length>1){for(let M=0,R=g.length;M<R;M++){const x=g[M];v.addGroup(x.groupStart,x.groupCount,M)}_?A=new Ru(v,S):p?A=new Fa(v,S):A=new je(v,S)}else _?A=new Ru(v,S[0]):p?A=new Fa(v,S[0]):A=new je(v,S[0]);A.name=h.name,u.add(A)}else if(t.vertices.length>0){const a=new ss({size:1,sizeAttenuation:!1}),l=new St;l.setAttribute("position",new Qe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Qe(t.colors,3)),a.vertexColors=!0);const h=new Fa(l,a);u.add(h)}return u}}const jn=.45,Zn=.45,br=.25,Xh=.15,AS=200,CS=10,qh=.1;function RS(i){let{ecs:e,entityId:t,turnAmount:n,actionDown:r,driftDown:s}=i;const o=30,c=67.5,f=2,u=6,d=3,a=.98,l=.96,h=.92,m=[new B(-jn,br,Zn),new B(jn,br,Zn),new B(-jn,br,-Zn),new B(jn,br,-Zn)];let g=0,_=!1,p=0;return{update(y){e.resource(qf).get("y");const S=e.entity(t).getField(jt,"x"),A=e.entity(t).getField(jt,"y"),M=e.entity(t).getField(jt,"z"),R=e.entity(t).getField(zi,"x"),x=e.entity(t).getField(zi,"y"),w=e.entity(t).getField(zi,"z"),N=e.entity(t).getField(Pt,"x"),L=e.entity(t).getField(Pt,"y"),U=e.entity(t).getField(Pt,"z"),V=e.entity(t).getField(Pt,"w"),k=e.entity(t).getField(fs,"speed"),z=new B(S,A,M),O=new B(R,x,w),F=new Fn(N,L,U,V);let W=new B(0,0,1).applyQuaternion(F);W.y=0,W.normalize();let te=new B(1,0,0).applyQuaternion(F);te.y=0,te.normalize();const ae=Math.sqrt(O.x*O.x+O.z*O.z);let de=o;g>0&&(de=c);let pe=k;r()?pe=Math.min(k+f*y,de):pe=Math.max(k-u*y,0),e.set_field(t,fs,"speed",pe);let De=-n()*d*y,K=0;n()<-.1?K=-1:n()>.1&&(K=1);const G=s()&&K!==0&&ae>3;if(G&&!_?(_=!0,g=0):!G&&_&&(g>1.5&&(pe=Math.min(pe*1.5,c)),_=!1,g=0),_){g+=y;const _e=De*2.5,we=new Fn().setFromAxisAngle(new B(0,1,0),_e);F.multiply(we)}else if(ae>.1){const _e=De*(pe/o),we=new Fn().setFromAxisAngle(new B(0,1,0),_e);F.multiply(we)}F.normalize();const T=new B(0,0,1).applyQuaternion(F);T.y=0,T.normalize();let C=T.multiplyScalar(pe);const j=_?l:a,le=T.clone().multiplyScalar(O.dot(T)),J=O.clone().sub(le).multiplyScalar(h);let ie=le.add(J);const Se=ie.length()>.01?j:1;ie.multiplyScalar(Se),ie.x+=(C.x-ie.x)*(1-j)*y*10,ie.z+=(C.z-ie.z)*(1-j)*y*10;const me=_&&g>1.5?c:o,H=Math.sqrt(ie.x*ie.x+ie.z*ie.z);if(H>me){const _e=me/H;ie.x*=_e,ie.z*=_e}let Y=z.add(ie.clone().multiplyScalar(y));const Q=mS();if(Q){const _e=Ai/2,we=_S(Y.x,Y.z),Oe=_e;if(we>Oe&&we<50&&Number.isFinite(Y.x)&&Number.isFinite(Y.z)){let Me=0,Fe=0,Le=1/0;for(let ye=0;ye<=800;ye++){const Ce=ye/800,ve=Q.getPointAt(Ce),ue=ve.x-Y.x,Ne=ve.z-Y.z,Ge=Math.sqrt(ue*ue+Ne*Ne);Ge<Le&&(Le=Ge,Me=ve.x,Fe=ve.z)}const Ae=(Y.x-Me)/Le,Xe=(Y.z-Fe)/Le,q=we-Oe;Y.x-=Ae*q,Y.z-=Xe*q;const Ee=e.entity(t).getField(fs,"speed");if(q>.02&&Ee>2){const ye=ie.x*Ae+ie.z*Xe;ie.x=ie.x-2*ye*Ae,ie.z=ie.z-2*ye*Xe;const Ce=.3;ie.x*=Ce,ie.z*=Ce,e._lastCollision=Math.min(q*5+Ee/40,1)}}}let $=[];for(let _e=0;_e<4;_e++){const we=m[_e].clone();we.applyQuaternion(F);const Oe=new B(Y.x,Y.y,Y.z).add(we);let ge=Ln(Oe.x,Oe.z);if(Q){let Le=1/0,Ae=0;for(let ye=0;ye<=200;ye++){const Ce=ye/200,ve=Q.getPointAt(Ce),ue=ve.x-Oe.x,Ne=ve.z-Oe.z,Ge=Math.sqrt(ue*ue+Ne*Ne);Ge<Le&&(Le=Ge,Ae=ve.y)}const Xe=Ai/2,q=3;let Ee=ge;if(Le<=Xe+q){const ye=Ae;if(Le<=Xe)Ee=ye;else{const Ce=(Le-Xe)/q;Ee=ye*(1-Ce)+Ee*Ce}}ge=Math.max(Ee,Ae)}const Me=ge+qh+Xh;$.push(Me)}const b=($[0]+$[1])/2,D=($[2]+$[3])/2,ce=($[0]+$[2])/2,be=($[1]+$[3])/2,X=((b+D)/2-br-Y.y)*AS-p*CS;p+=X*y,Y.y+=p*y;const se=Math.atan2(D-b,Zn*2),he=Math.atan2(be-ce,jn*2),re=new fn().setFromQuaternion(F,"YXZ"),Te=Math.min(1,y*8);re.x=au.lerp(re.x,se,Te),re.z=au.lerp(re.z,he,Te),F.setFromEuler(re),e.set_field(t,Pt,"x",F.x),e.set_field(t,Pt,"y",F.y),e.set_field(t,Pt,"z",F.z),e.set_field(t,Pt,"w",F.w),e.set_field(t,zi,"x",ie.x),e.set_field(t,zi,"y",ie.y),e.set_field(t,zi,"z",ie.z),e.set_field(t,jt,"x",Y.x),e.set_field(t,jt,"y",Y.y),e.set_field(t,jt,"z",Y.z)}}}async function PS(){const i=new TS;try{const e=await fetch("./models/kart.obj");if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.text(),n=i.parse(t);n.traverse(p=>{if(p instanceof je&&(p.castShadow=!0,p.receiveShadow=!0,p.material instanceof Tn)){const y=p.material;if(y.name?.includes("Blue"))y.color.setHex(3829413),y.roughness=.5,y.metalness=.2;else if(y.name?.includes("Grey")){const v=y.name.match(/Grey_-_(\d+)/);if(v){const S=parseInt(v[1])/100;y.color.setRGB(S,S,S)}y.roughness=.7,y.metalness=.3}}});const r=new li().setFromObject(n),s=new B;r.getSize(s);const f=1.5/Math.max(s.x,s.y,s.z);n.scale.setScalar(f);let u=new Gt;r.setFromObject(n),n.rotateY(.5*Math.PI),n.position.set(0,-r.min.y,0),u.add(n);const d=br-Xh,a=new Ps(qh,8,8),l=new gc({color:16711680}),h=new je(a,l);h.position.set(-jn,d,Zn),u.add(h);const m=new je(a,l);m.position.set(jn,d,Zn),u.add(m);const g=new je(a,l);g.position.set(-jn,d,-Zn),u.add(g);const _=new je(a,l);return _.position.set(jn,d,-Zn),u.add(_),u}catch(e){throw console.error("Failed to load kart:",e),e}}function IS(i,e){return If(t=>(rt(kf(rt(()=>{let n=[];for(let r of i.query(jt,Pt,Eo)){let s=r.entity_ids;for(let o=0;o<r.entity_count;++o)n.push(s[o])}return n}),n=>{let r=i.entity(n());r.getField(Eo,"playerType"),r.getField(Eo,"facingForward");const s=new Gt;zf(async()=>await PS(),c=>{s.add(c)});const o=Wh();o.position.set(0,.32,0),o.scale.setScalar(.5),s.add(o),e.add(s),bn(()=>{e.remove(s)}),rt(()=>{let c=r.getField(jt,"x"),f=r.getField(jt,"y"),u=r.getField(jt,"z"),d=r.getField(Pt,"x"),a=r.getField(Pt,"y"),l=r.getField(Pt,"z"),h=r.getField(Pt,"w");s.position.set(c,f,u),s.quaternion.set(d,a,l,h)})})),{update:()=>{},dispose:t}))}var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$a={};var gf;function LS(){return gf||(gf=1,(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var l=this||t;if(a=parseFloat(a),l.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(l._volume=a,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var h=0;h<l._howls.length;h++)if(!l._howls[h]._webAudio)for(var m=l._howls[h]._getSoundIds(),g=0;g<m.length;g++){var _=l._howls[h]._soundById(m[g]);_&&_._node&&(_._node.volume=_._volume*a)}return l}return l._volume},mute:function(a){var l=this||t;l.ctx||d(),l._muted=a,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a?0:l._volume,t.ctx.currentTime);for(var h=0;h<l._howls.length;h++)if(!l._howls[h]._webAudio)for(var m=l._howls[h]._getSoundIds(),g=0;g<m.length;g++){var _=l._howls[h]._soundById(m[g]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return l},stop:function(){for(var a=this||t,l=0;l<a._howls.length;l++)a._howls[l].stop();return a},unload:function(){for(var a=this||t,l=a._howls.length-1;l>=0;l--)a._howls[l].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var l=new Audio;l.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return a}if(!l||typeof l.canPlayType!="function")return a;var h=l.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",g=m.match(/OPR\/(\d+)/g),_=g&&parseInt(g[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,y=m.match(/Version\/(.*?) /),v=p&&y&&parseInt(y[1],10)<15;return a._codecs={mp3:!!(!_&&(h||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!h,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var l=function(h){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var _=a._howls[g]._getSoundIds(),p=0;p<_.length;p++){var y=a._howls[g]._soundById(_[p]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var S=0;S<a._howls.length;S++)a._howls[S]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var l=this||t;return a._unlocked&&l._html5AudioPool.push(a),l},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<a._howls.length;l++)if(a._howls[l]._webAudio){for(var h=0;h<a._howls[l]._sounds.length;h++)if(!a._howls[l]._sounds[h]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var l=0;l<a._howls.length;l++)a._howls[l]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var l=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(a)};n.prototype={init:function(a){var l=this;return t.ctx||d(),l._autoplay=a.autoplay||!1,l._format=typeof a.format!="string"?a.format:[a.format],l._html5=a.html5||!1,l._muted=a.mute||!1,l._loop=a.loop||!1,l._pool=a.pool||5,l._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,l._rate=a.rate||1,l._sprite=a.sprite||{},l._src=typeof a.src!="string"?a.src:[a.src],l._volume=a.volume!==void 0?a.volume:1,l._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=a.onend?[{fn:a.onend}]:[],l._onfade=a.onfade?[{fn:a.onfade}]:[],l._onload=a.onload?[{fn:a.onload}]:[],l._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],l._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],l._onpause=a.onpause?[{fn:a.onpause}]:[],l._onplay=a.onplay?[{fn:a.onplay}]:[],l._onstop=a.onstop?[{fn:a.onstop}]:[],l._onmute=a.onmute?[{fn:a.onmute}]:[],l._onvolume=a.onvolume?[{fn:a.onvolume}]:[],l._onrate=a.onrate?[{fn:a.onrate}]:[],l._onseek=a.onseek?[{fn:a.onseek}]:[],l._onunlock=a.onunlock?[{fn:a.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var a=this,l=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var h=0;h<a._src.length;h++){var m,g;if(a._format&&a._format[h])m=a._format[h];else{if(g=a._src[h],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(g),m||(m=/\.([^.]+)$/.exec(g.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){l=a._src[h];break}}if(!l){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=l,a._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new r(a),a._webAudio&&o(a),a},play:function(a,l){var h=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&h._state==="loaded"&&!h._sprite[a])return null;if(typeof a>"u"&&(a="__default",!h._playLock)){for(var g=0,_=0;_<h._sounds.length;_++)h._sounds[_]._paused&&!h._sounds[_]._ended&&(g++,m=h._sounds[_]._id);g===1?a=null:m=null}}var p=m?h._soundById(m):h._inactiveSound();if(!p)return null;if(m&&!a&&(a=p._sprite||"__default"),h._state!=="loaded"){p._sprite=a,p._ended=!1;var y=p._id;return h._queue.push({event:"play",action:function(){h.play(y)}}),y}if(m&&!p._paused)return l||h._loadQueue("play"),p._id;h._webAudio&&t._autoResume();var v=Math.max(0,p._seek>0?p._seek:h._sprite[a][0]/1e3),S=Math.max(0,(h._sprite[a][0]+h._sprite[a][1])/1e3-v),A=S*1e3/Math.abs(p._rate),M=h._sprite[a][0]/1e3,R=(h._sprite[a][0]+h._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var x=function(){p._paused=!1,p._seek=v,p._start=M,p._stop=R,p._loop=!!(p._loop||h._sprite[a][2])};if(v>=R){h._ended(p);return}var w=p._node;if(h._webAudio){var N=function(){h._playLock=!1,x(),h._refreshBuffer(p);var k=p._muted||h._muted?0:p._volume;w.gain.setValueAtTime(k,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof w.bufferSource.start>"u"?p._loop?w.bufferSource.noteGrainOn(0,v,86400):w.bufferSource.noteGrainOn(0,v,S):p._loop?w.bufferSource.start(0,v,86400):w.bufferSource.start(0,v,S),A!==1/0&&(h._endTimers[p._id]=setTimeout(h._ended.bind(h,p),A)),l||setTimeout(function(){h._emit("play",p._id),h._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?N():(h._playLock=!0,h.once("resume",N),h._clearTimer(p._id))}else{var L=function(){w.currentTime=v,w.muted=p._muted||h._muted||t._muted||w.muted,w.volume=p._volume*t.volume(),w.playbackRate=p._rate;try{var k=w.play();if(k&&typeof Promise<"u"&&(k instanceof Promise||typeof k.then=="function")?(h._playLock=!0,x(),k.then(function(){h._playLock=!1,w._unlocked=!0,l?h._loadQueue():h._emit("play",p._id)}).catch(function(){h._playLock=!1,h._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):l||(h._playLock=!1,x(),h._emit("play",p._id)),w.playbackRate=p._rate,w.paused){h._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?h._endTimers[p._id]=setTimeout(h._ended.bind(h,p),A):(h._endTimers[p._id]=function(){h._ended(p),w.removeEventListener("ended",h._endTimers[p._id],!1)},w.addEventListener("ended",h._endTimers[p._id],!1))}catch(z){h._emit("playerror",p._id,z)}};w.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(w.src=h._src,w.load());var U=window&&window.ejecta||!w.readyState&&t._navigator.isCocoonJS;if(w.readyState>=3||U)L();else{h._playLock=!0,h._state="loading";var V=function(){h._state="loaded",L(),w.removeEventListener(t._canPlayEvent,V,!1)};w.addEventListener(t._canPlayEvent,V,!1),h._clearTimer(p._id)}}return p._id},pause:function(a){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(a)}}),l;for(var h=l._getSoundIds(a),m=0;m<h.length;m++){l._clearTimer(h[m]);var g=l._soundById(h[m]);if(g&&!g._paused&&(g._seek=l.seek(h[m]),g._rateSeek=0,g._paused=!0,l._stopFade(h[m]),g._node))if(l._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),l._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||l._emit("pause",g?g._id:null)}return l},stop:function(a,l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"stop",action:function(){h.stop(a)}}),h;for(var m=h._getSoundIds(a),g=0;g<m.length;g++){h._clearTimer(m[g]);var _=h._soundById(m[g]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,h._stopFade(m[g]),_._node&&(h._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&h._clearSound(_._node))),l||h._emit("stop",_._id))}return h},mute:function(a,l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"mute",action:function(){h.mute(a,l)}}),h;if(typeof l>"u")if(typeof a=="boolean")h._muted=a;else return h._muted;for(var m=h._getSoundIds(l),g=0;g<m.length;g++){var _=h._soundById(m[g]);_&&(_._muted=a,_._interval&&h._stopFade(_._id),h._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,t.ctx.currentTime):_._node&&(_._node.muted=t._muted?!0:a),h._emit("mute",_._id))}return h},volume:function(){var a=this,l=arguments,h,m;if(l.length===0)return a._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):h=parseFloat(l[0])}else l.length>=2&&(h=parseFloat(l[0]),m=parseInt(l[1],10));var p;if(typeof h<"u"&&h>=0&&h<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,l)}}),a;typeof m>"u"&&(a._volume=h),m=a._getSoundIds(m);for(var y=0;y<m.length;y++)p=a._soundById(m[y]),p&&(p._volume=h,l[2]||a._stopFade(m[y]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(h,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=h*t.volume()),a._emit("volume",p._id))}else return p=m?a._soundById(m):a._sounds[0],p?p._volume:0;return a},fade:function(a,l,h,m){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,l,h,m)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),l=Math.min(Math.max(0,parseFloat(l)),1),h=parseFloat(h),g.volume(a,m);for(var _=g._getSoundIds(m),p=0;p<_.length;p++){var y=g._soundById(_[p]);if(y){if(m||g._stopFade(_[p]),g._webAudio&&!y._muted){var v=t.ctx.currentTime,S=v+h/1e3;y._volume=a,y._node.gain.setValueAtTime(a,v),y._node.gain.linearRampToValueAtTime(l,S)}g._startFadeInterval(y,a,l,h,_[p],typeof m>"u")}}return g},_startFadeInterval:function(a,l,h,m,g,_){var p=this,y=l,v=h-l,S=Math.abs(v/.01),A=Math.max(4,S>0?m/S:m),M=Date.now();a._fadeTo=h,a._interval=setInterval(function(){var R=(Date.now()-M)/m;M=Date.now(),y+=v*R,y=Math.round(y*100)/100,v<0?y=Math.max(h,y):y=Math.min(h,y),p._webAudio?a._volume=y:p.volume(y,a._id,!0),_&&(p._volume=y),(h<l&&y<=h||h>l&&y>=h)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(h,a._id),p._emit("fade",a._id))},A)},_stopFade:function(a){var l=this,h=l._soundById(a);return h&&h._interval&&(l._webAudio&&h._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(h._interval),h._interval=null,l.volume(h._fadeTo,a),h._fadeTo=null,l._emit("fade",a)),l},loop:function(){var a=this,l=arguments,h,m,g;if(l.length===0)return a._loop;if(l.length===1)if(typeof l[0]=="boolean")h=l[0],a._loop=h;else return g=a._soundById(parseInt(l[0],10)),g?g._loop:!1;else l.length===2&&(h=l[0],m=parseInt(l[1],10));for(var _=a._getSoundIds(m),p=0;p<_.length;p++)g=a._soundById(_[p]),g&&(g._loop=h,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=h,h&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(_[p])&&(a.pause(_[p],!0),a.play(_[p],!0)))));return a},rate:function(){var a=this,l=arguments,h,m;if(l.length===0)m=a._sounds[0]._id;else if(l.length===1){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):h=parseFloat(l[0])}else l.length===2&&(h=parseFloat(l[0]),m=parseInt(l[1],10));var p;if(typeof h=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,l)}}),a;typeof m>"u"&&(a._rate=h),m=a._getSoundIds(m);for(var y=0;y<m.length;y++)if(p=a._soundById(m[y]),p){a.playing(m[y])&&(p._rateSeek=a.seek(m[y]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=h,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(h,t.ctx.currentTime):p._node&&(p._node.playbackRate=h);var v=a.seek(m[y]),S=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-v,A=S*1e3/Math.abs(p._rate);(a._endTimers[m[y]]||!p._paused)&&(a._clearTimer(m[y]),a._endTimers[m[y]]=setTimeout(a._ended.bind(a,p),A)),a._emit("rate",p._id)}}else return p=a._soundById(m),p?p._rate:a._rate;return a},seek:function(){var a=this,l=arguments,h,m;if(l.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(l.length===1){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):a._sounds.length&&(m=a._sounds[0]._id,h=parseFloat(l[0]))}else l.length===2&&(h=parseFloat(l[0]),m=parseInt(l[1],10));if(typeof m>"u")return 0;if(typeof h=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,l)}}),a;var p=a._soundById(m);if(p)if(typeof h=="number"&&h>=0){var y=a.playing(m);y&&a.pause(m,!0),p._seek=h,p._ended=!1,a._clearTimer(m),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=h);var v=function(){y&&a.play(m,!0),a._emit("seek",m)};if(y&&!a._webAudio){var S=function(){a._playLock?setTimeout(S,0):v()};setTimeout(S,0)}else v()}else if(a._webAudio){var A=a.playing(m)?t.ctx.currentTime-p._playStart:0,M=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(M+A*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var l=this;if(typeof a=="number"){var h=l._soundById(a);return h?!h._paused:!1}for(var m=0;m<l._sounds.length;m++)if(!l._sounds[m]._paused)return!0;return!1},duration:function(a){var l=this,h=l._duration,m=l._soundById(a);return m&&(h=l._sprite[m._sprite][1]/1e3),h},state:function(){return this._state},unload:function(){for(var a=this,l=a._sounds,h=0;h<l.length;h++)l[h]._paused||a.stop(l[h]._id),a._webAudio||(a._clearSound(l[h]._node),l[h]._node.removeEventListener("error",l[h]._errorFn,!1),l[h]._node.removeEventListener(t._canPlayEvent,l[h]._loadFn,!1),l[h]._node.removeEventListener("ended",l[h]._endFn,!1),t._releaseHtml5Audio(l[h]._node)),delete l[h]._node,a._clearTimer(l[h]._id);var m=t._howls.indexOf(a);m>=0&&t._howls.splice(m,1);var g=!0;for(h=0;h<t._howls.length;h++)if(t._howls[h]._src===a._src||a._src.indexOf(t._howls[h]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,l,h,m){var g=this,_=g["_on"+a];return typeof l=="function"&&_.push(m?{id:h,fn:l,once:m}:{id:h,fn:l}),g},off:function(a,l,h){var m=this,g=m["_on"+a],_=0;if(typeof l=="number"&&(h=l,l=null),l||h)for(_=0;_<g.length;_++){var p=h===g[_].id;if(l===g[_].fn&&p||!l&&p){g.splice(_,1);break}}else if(a)m["_on"+a]=[];else{var y=Object.keys(m);for(_=0;_<y.length;_++)y[_].indexOf("_on")===0&&Array.isArray(m[y[_]])&&(m[y[_]]=[])}return m},once:function(a,l,h){var m=this;return m.on(a,l,h,1),m},_emit:function(a,l,h){for(var m=this,g=m["_on"+a],_=g.length-1;_>=0;_--)(!g[_].id||g[_].id===l||a==="load")&&(setTimeout((function(p){p.call(this,l,h)}).bind(m,g[_].fn),0),g[_].once&&m.off(a,g[_].fn,g[_].id));return m._loadQueue(a),m},_loadQueue:function(a){var l=this;if(l._queue.length>0){var h=l._queue[0];h.event===a&&(l._queue.shift(),l._loadQueue()),a||h.action()}return l},_ended:function(a){var l=this,h=a._sprite;if(!l._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(l._ended.bind(l,a),100),l;var m=!!(a._loop||l._sprite[h][2]);if(l._emit("end",a._id),!l._webAudio&&m&&l.stop(a._id,!0).play(a._id),l._webAudio&&m){l._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);l._endTimers[a._id]=setTimeout(l._ended.bind(l,a),g)}return l._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,l._clearTimer(a._id),l._cleanBuffer(a._node),t._autoSuspend()),!l._webAudio&&!m&&l.stop(a._id,!0),l},_clearTimer:function(a){var l=this;if(l._endTimers[a]){if(typeof l._endTimers[a]!="function")clearTimeout(l._endTimers[a]);else{var h=l._soundById(a);h&&h._node&&h._node.removeEventListener("ended",l._endTimers[a],!1)}delete l._endTimers[a]}return l},_soundById:function(a){for(var l=this,h=0;h<l._sounds.length;h++)if(a===l._sounds[h]._id)return l._sounds[h];return null},_inactiveSound:function(){var a=this;a._drain();for(var l=0;l<a._sounds.length;l++)if(a._sounds[l]._ended)return a._sounds[l].reset();return new r(a)},_drain:function(){var a=this,l=a._pool,h=0,m=0;if(!(a._sounds.length<l)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&h++;for(m=a._sounds.length-1;m>=0;m--){if(h<=l)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),h--)}}},_getSoundIds:function(a){var l=this;if(typeof a>"u"){for(var h=[],m=0;m<l._sounds.length;m++)h.push(l._sounds[m]._id);return h}else return[a]},_refreshBuffer:function(a){var l=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[l._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),l},_cleanBuffer:function(a){var l=this,h=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return l;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),h))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,l},_clearSound:function(a){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(a){this._parent=a,this.init()};r.prototype={init:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,l._sounds.push(a),a.create(),a},create:function(){var a=this,l=a._parent,h=t._muted||a._muted||a._parent._muted?0:a._volume;return l._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(h,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=l._src,a._node.preload=l._preload===!0?"auto":l._preload,a._node.volume=h*t.volume(),a._node.load()),a},reset:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,l=a._parent;l._duration=Math.ceil(a._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,l=a._parent;l._duration===1/0&&(l._duration=Math.ceil(a._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var l=a._src;if(s[l]){a._duration=s[l].duration,u(a);return}if(/^data:[^;]+;base64,/.test(l)){for(var h=atob(l.split(",")[1]),m=new Uint8Array(h.length),g=0;g<h.length;++g)m[g]=h.charCodeAt(g);f(m.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,l,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){_.setRequestHeader(p,a._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}f(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[l],a.load())},c(_)}},c=function(a){try{a.send()}catch{a.onerror()}},f=function(a,l){var h=function(){l._emit("loaderror",null,"Decoding audio data failed.")},m=function(g){g&&l._sounds.length>0?(s[l._src]=g,u(l,g)):h()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(m).catch(h):t.ctx.decodeAudioData(a,m,h)},u=function(a,l){l&&!a._duration&&(a._duration=l.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),h=l?parseInt(l[1],10):null;if(a&&h&&h<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof ts<"u"?(ts.HowlerGlobal=e,ts.Howler=t,ts.Howl=n,ts.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,o,c){var f=this;if(!f.ctx||!f.ctx.listener)return f;var u=f._orientation;if(n=typeof n!="number"?u[1]:n,r=typeof r!="number"?u[2]:r,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,c=typeof c!="number"?u[5]:c,typeof t=="number")f._orientation=[t,n,r,s,o,c],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(t,n,r,s,o,c);else return u;return f},Howl.prototype.init=(function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var o=r._getSoundIds(n),c=0;c<o.length;c++){var f=r._soundById(o[c]);if(f)if(typeof t=="number")f._stereo=t,f._pos=[t,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&e(f,s),s==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(t,0,0):f._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",f._id);else return f._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,s)}}),o;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")o._pos=[t,n,r];else return o._pos;for(var c=o._getSoundIds(s),f=0;f<c.length;f++){var u=o._soundById(c[f]);if(u)if(typeof t=="number")u._pos=[t,n,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,n,r)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,r=typeof r!="number"?o._orientation[2]:r,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,r];else return o._orientation;for(var c=o._getSoundIds(s),f=0;f<c.length;f++){var u=o._soundById(c[f]);if(u)if(typeof t=="number")u._orientation=[t,n,r],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,r)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var c=t._getSoundIds(s),f=0;f<c.length;f++)if(o=t._soundById(c[f]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=u.coneInnerAngle,d.coneOuterAngle=u.coneOuterAngle,d.coneOuterGain=u.coneOuterGain,d.distanceModel=u.distanceModel,d.maxDistance=u.maxDistance,d.refDistance=u.refDistance,d.rolloffFactor=u.rolloffFactor,d.panningModel=u.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})($a)),$a}var xf=LS();function DS(i,e){const t=new xf.Howl({src:["./engine.mp3"],loop:!0,volume:.5,autoplay:!1,onloaderror:(u,d)=>console.error("Engine load error:",d),onplayerror:(u,d)=>console.error("Engine play error:",d)}),n=new xf.Howl({src:["./crash.ogg"],volume:.5,onloaderror:(u,d)=>console.error("Crash load error:",d)});let r=!1,s=0,o=!0;return{update:(u,d)=>{const a=e?e():!0;if(!a&&r&&(t.stop(),r=!1,console.log("Sound disabled, stopped engine")),!a)return;!r&&o&&(t.play(),r=!0,console.log("Sound enabled, started engine")),o=a;const l=i.entity(d).getField(fs,"speed");if(Math.abs(l-s)>.5||l<1){const h=.6+l/40*1.2;t.rate(Math.max(.5,Math.min(h,2))),s=l}if(i._lastCollision){const h=Math.min(i._lastCollision,1);h>.1&&(n.volume(h*.6),n.play()),i._lastCollision=0}},dispose:()=>{t.stop(),t.unload(),n.unload()}}}var NS=hn("<div style=position:absolute;left:0;top:0;right:0;bottom:0><canvas style=width:100%;height:100%;display:block;touch-action:none></canvas><div style=position:absolute;top:10px;left:10px;z-index:100><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Orbit Camera</label><br><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Sound");function US(i){let[e,t]=ut(),[n,r]=ut(),[s,o]=ut(),[c,f]=ut(!1);yi(()=>[e(),n()],([M,R])=>{M!=null&&R!=null&&f(!0)}),rt(()=>{let M=e();if(M==null)return;let R=n();R!=null&&c()&&bn(Nt(()=>FS(i,M,R,o)))});let u=rt(()=>i.resource(tl).get("enabled")!=0),d=M=>{i.set_resource(tl,{enabled:M?1:0})},a=rt(()=>i.resource(nl).get("enabled")!=0),l=M=>{i.set_resource(nl,{enabled:M?1:0})},h=M=>{let R={...i.ecs.resource(gi)};M.upDown!==void 0&&(R.upDown=M.upDown?1:0),M.downDown!==void 0&&(R.downDown=M.downDown?1:0),M.leftDown!==void 0&&(R.leftDown=M.leftDown?1:0),M.rightDown!==void 0&&(R.rightDown=M.rightDown?1:0),M.actionDown!==void 0&&(R.actionDown=M.actionDown?1:0),M.driftDown!==void 0&&(R.driftDown=M.driftDown?1:0),i.set_resource(gi,R)},m=M=>{switch(M.key){case"ArrowUp":h({upDown:!0});break;case"ArrowDown":h({downDown:!0});break;case"ArrowLeft":h({leftDown:!0});break;case"ArrowRight":h({rightDown:!0});break;case" ":h({actionDown:!0});break;case"z":case"Z":h({driftDown:!0});break}},g=M=>{switch(M.key){case"ArrowUp":h({upDown:!1});break;case"ArrowDown":h({downDown:!1});break;case"ArrowLeft":h({leftDown:!1});break;case"ArrowRight":h({rightDown:!1});break;case" ":h({actionDown:!1});break;case"z":case"Z":h({driftDown:!1});break}};document.addEventListener("keydown",m),document.addEventListener("keyup",g),bn(()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",g)});let _=150,p=aS({position:rt(()=>new fe(50,(s()?.y??0)-50-_)),hitAreaSize:_,outerRingSize:()=>.8*_,knobSize:()=>70});yi(p.value,M=>{i.set_resource(Fo,{joystickX:M.x,joystickY:M.y})});let y=100,v=uS({position:rt(()=>new fe((s()?.x??0)-50-y,(s()?.y??0)-50-y)),size:()=>y});yi(v.pressed,M=>{h({actionDown:M})});let S=rt(()=>[]),A=rt(()=>()=>(()=>{var M=NS(),R=M.firstChild,x=R.nextSibling,w=x.firstChild,N=w.firstChild,L=w.nextSibling,U=L.nextSibling,V=U.firstChild,k=t;typeof k=="function"||Array.isArray(k)?ys(()=>k,M):t=M;var z=r;return typeof z=="function"||Array.isArray(z)?ys(()=>z,R):r=R,N.addEventListener("change",O=>l(O.target.checked)),V.addEventListener("change",O=>d(O.target.checked)),Ur(M,ti(p.UI,{}),null),Ur(M,ti(v.UI,{}),null),bi(()=>({e:a(),t:u()}),({e:O,t:F},W={e:void 0,t:void 0})=>{N.checked=O,V.checked=F}),M})());return{subsystems:S,ui:A}}function FS(i,e,t,n){let r=rt(()=>new fe(i.resource(Fo).get("joystickX"),i.resource(Fo).get("joystickY")));rt(()=>i.resource(gi).get("upDown")!=0),rt(()=>i.resource(gi).get("downDown")!=0);let s=rt(()=>i.resource(gi).get("leftDown")!=0),o=rt(()=>i.resource(gi).get("rightDown")!=0),c=rt(()=>i.resource(gi).get("actionDown")!=0),f=rt(()=>i.resource(gi).get("driftDown")!=0),u=rt(()=>i.resource(tl).get("enabled")!=0),d=rt(()=>i.resource(nl).get("enabled")!=0);const a=new hh;a.background=new Je(6006985);const l=new Lh(16777215,.7);a.add(l);const h=new Ih(16777215,1);h.position.set(20,50,20),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,a.add(h);const{curve:m,group:g}=pS(42);g.position.set(0,0,0),a.add(g);const _=gS(m,0);a.add(_);const{mesh:p,bounds:y}=BS(m),v=y.size/2;h.shadow.camera.left=y.centerX-v,h.shadow.camera.right=y.centerX+v,h.shadow.camera.top=y.centerZ+v,h.shadow.camera.bottom=y.centerZ-v,p.receiveShadow=!0,a.add(p),kS(m,a);const S=.01,A=m.getPointAt(S),M=S+.01,R=m.getPointAt(M);new B().subVectors(R,A).normalize();const x=new B(0,0,0),w=A.y+.1;A.y=w;const N=xS({position:A,velocity:x,reactiveEcs:i}),{dispose:L}=IS(i,a),U=rt(()=>{const $=r().x;return Math.abs($)>.01?$*2:s()?-1:o()?1:0}),{update:V}=RS({ecs:i,entityId:N,turnAmount:U,actionDown:c,driftDown:f}),{update:k,dispose:z}=DS(i,u),O=new kh({antialias:!0,canvas:t});O.shadowMap.enabled=!0,O.shadowMap.type=Yf;const F=new nn(75,1,.1,1e3);let W=0,te=.5,ae=5,de=!1,pe=0,De=0,K=0;t.addEventListener("pointerdown",$=>{de=!0,pe=$.clientX,De=$.clientY,t.setPointerCapture($.pointerId)}),t.addEventListener("pointermove",$=>{if(!de||!d())return;const b=$.clientX-pe,D=$.clientY-De;W-=b*.01,te=Math.max(.1,Math.min(Math.PI/2-.1,te+D*.01)),pe=$.clientX,De=$.clientY}),t.addEventListener("pointerup",$=>{de=!1}),t.addEventListener("pointercancel",()=>{de=!1}),t.addEventListener("contextmenu",$=>$.preventDefault());let G=!1;t.addEventListener("touchstart",$=>{$.touches.length===1&&(G=!0,pe=$.touches[0].clientX,De=$.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",$=>{if(d()&&($.preventDefault(),$.touches.length===1&&G)){const b=$.touches[0].clientX-pe,D=$.touches[0].clientY-De;W-=b*.01,te=Math.max(.1,Math.min(Math.PI/2-.1,te+D*.01)),pe=$.touches[0].clientX,De=$.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",$=>{G=!1}),t.addEventListener("touchstart",$=>{if($.touches.length===2){const b=$.touches[0].clientX-$.touches[1].clientX,D=$.touches[0].clientY-$.touches[1].clientY;K=Math.sqrt(b*b+D*D)}}),t.addEventListener("touchmove",$=>{if(!d()||$.touches.length!==2)return;$.preventDefault();const b=$.touches[0].clientX-$.touches[1].clientX,D=$.touches[0].clientY-$.touches[1].clientY,ce=Math.sqrt(b*b+D*D);ae=Math.max(1,Math.min(20,ae-(ce-K)*.02)),K=ce},{passive:!1}),t.addEventListener("wheel",$=>{d()&&(ae=Math.max(1,Math.min(20,ae+$.deltaY*.01)))});let T=new ResizeObserver(()=>{let $=e.getBoundingClientRect();n(new fe($.width,$.height)),O.setSize($.width,$.height),F.aspect=$.width/$.height,F.updateProjectionMatrix(),O.render(a,F)});T.observe(e),bn(()=>{T.unobserve(e),T.disconnect()});const C=3,j=6;let le=0,J=new B,ie=new B;const Se=12;let me=!0,H=performance.now(),Y=!0;const Q=()=>{if(!me)return;const $=performance.now(),b=Math.min(($-H)/1e3,.1);H=$;const D=i.entity(N).getField(jt,"x"),ce=i.entity(N).getField(jt,"y"),be=i.entity(N).getField(jt,"z"),xe=new B(D,ce,be),I=i.entity(N).getField(Pt,"x"),E=i.entity(N).getField(Pt,"y"),X=i.entity(N).getField(Pt,"z"),se=i.entity(N).getField(Pt,"w"),he=new Fn(I,E,X,se),re=new B(0,0,1).applyQuaternion(he);re.y=0;let Te=0;if(re.length()>.001&&(re.normalize(),Te=Math.atan2(re.x,re.z)),V(b),k(b,N),Y&&(Y=!1,J.copy(xe),ie.copy(xe),le=Te),d()){const _e=Te+W,we=xe;F.position.set(we.x+ae*Math.sin(_e)*Math.cos(te),we.y+ae*Math.sin(te),we.z+ae*Math.cos(_e)*Math.cos(te)),F.lookAt(we)}else{let _e=Te-le;for(;_e>Math.PI;)_e-=Math.PI*2;for(;_e<-Math.PI;)_e+=Math.PI*2;le+=_e*Math.min(1,Se*b);const we=new B(-Math.sin(le)*j,C,-Math.cos(le)*j),Oe=xe.clone().add(we),ge=xe.clone().add(new B(Math.sin(le)*2,.3,Math.cos(le)*2));J.lerp(Oe,1-Math.exp(-Se*b*3)),ie.lerp(ge,1-Math.exp(-Se*b*3)),F.position.copy(J),F.lookAt(ie)}O.render(a,F),requestAnimationFrame(Q)};return Q(),()=>{me=!1,L(),z(),O.dispose()}}function OS(i,e){const t=i.getSpacedPoints(800);let n=1/0,r=-1/0,s=1/0,o=-1/0;for(const d of t)n=Math.min(n,d.x),r=Math.max(r,d.x),s=Math.min(s,d.z),o=Math.max(o,d.z);const c=(n+r)/2,f=(s+o)/2,u=Math.max(r-n,o-s)/2+e+5;return{centerX:c,centerZ:f,size:u*2}}function BS(i){const e=OS(i,18),t=e.size,n=160,r=[],s=[],o=[],c=800,f=i.getSpacedPoints(c),u=t/2;for(let l=0;l<=n;l++)for(let h=0;h<=n;h++){const m=e.centerX-u+h/n*t,g=e.centerZ-u+l/n*t;let _=1/0,p=0;for(let A=0;A<c;A++){const M=f[A].x-m,R=f[A].z-g,x=Math.sqrt(M*M+R*R);x<_&&(_=x,p=f[A].y)}const y=Ai/2,v=3;let S=Ln(m,g);if(_<=y+v){const A=p-.2;if(_<=y)S=A;else{const M=(_-y)/v,R=Ln(m,g),x=A*(1-M)+R*M,w=A+M*1.5;S=Math.min(x,w)}}r.push(m,S,g),o.push(h/n*4,l/n*4)}for(let l=0;l<n;l++)for(let h=0;h<n;h++){const m=l*(n+1)+h,g=m+1,_=(l+1)*(n+1)+h,p=_+1;s.push(g,m,p),s.push(_,p,m)}const d=new St;d.setAttribute("position",new Qe(r,3)),d.setAttribute("uv",new Qe(o,2)),d.setIndex(s),d.computeVertexNormals();const a=new Et({color:4881471,roughness:.9,flatShading:!0});return{mesh:new je(d,a),bounds:e}}function kS(i,e){const s=o=>{const c=Math.sin(o*7919)*1e4;return c-Math.floor(c)};for(let o=0;o<210;o++){const c=s(o*13);if(Math.abs(c-.5)<.22)continue;const f=i.getPointAt(c),u=i.getTangentAt(c),d=-u.z,a=u.x,l=Math.sqrt(d*d+a*a),h=d/l,m=a/l,g=s(o*17)>.5?1:-1,_=Ai/2+4+s(o*19)*25,p=f.x+h*_*g,y=f.z+m*_*g,v=Ln(p,y),S=Ai/2,A=6;let M=v;if(_<=S+A){const R=f.y+.02,x=(_-S)/A;M=Math.min(v,R)*(1-x)+v*x}if(o<160){const R=zS(1.5+s(o*7)*2);R.position.set(p,M,y),e.add(R)}else{const R=1+s(o*3)*2,x=1.5+s(o*4)*3,w=1+s(o*5)*2,N=VS(R,x,w);let L=Math.min(M,Ln(p-.5*R,y-.5*w),Ln(p-.5*R,y+.5*w),Ln(p+.5*R,y-.5*w),Ln(p+.5*R,y+.5*w));N.position.set(p,L,y),N.lookAt(f.x,M,f.z),e.add(N)}}}function zS(i){const e=new Gt,t=new rr(.15,.2,i*.4,6),n=new Et({color:4863784,roughness:.9}),r=new je(t,n);r.position.y=i*.2,r.castShadow=!0,e.add(r);const s=new Us(i*.4,i*.7,6),o=new Et({color:2972199,roughness:.8}),c=new je(s,o);return c.position.y=i*.6,c.castShadow=!0,e.add(c),e}function VS(i,e,t){const n=new Gt,r=new ir(i,e,t),s=[9140069,10518640,10259580,8022618],o=new Et({color:s[Math.floor(Math.random()*s.length)],roughness:.7}),c=new je(r,o);c.position.y=e/2,c.castShadow=!0,c.receiveShadow=!0,n.add(c);const f=new Us(Math.max(i,t)*.7,e*.3,4),u=new Et({color:5917242,roughness:.8}),d=new je(f,u);return d.position.y=e+e*.15,d.rotation.y=Math.PI/4,d.castShadow=!0,n.add(d),n}function GS(i){let e=rt(()=>i.resource(Ss).get("masterState"));return{subsystems:rt(()=>{switch(e()){case Ei.INTRO_SCREEN:return[Bp(i)];case Ei.CHARACTER_SELECTION_SCREEN:return[sS(i)];case Ei.IN_GAME:return[Nt(()=>US(i))]}})}}function HS(){debugger;let{ecs:i}=Up(),e=GS(i),t=n=>[jo(()=>Nt(()=>n.sys.ui?.())),ti(Dd,{get each(){return n.sys.subsystems?.()??[]},children:r=>ti(t,{get sys(){return r()}})})];return ti(t,{sys:e})}const vf=document.getElementById("root");vf&&Bd(()=>ti(HS,{}),vf);export{ir as B,Er as E,Gt as G,Et as M,Pr as P,Ps as S,je as a,Zi as b,bn as o};
