(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class Xt extends Error{source;constructor(e){super(),this.source=e}}class ll extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const zh=0,_s=1,Gr=2,ra=4,ri=8,As=16,Cn=32,Rs=64,Cs=128,pc=256,cl=512,mt=1,pn=2,ln=4,Nr=1,kn=2,Gs=3,pt={},Md={},bd="sp",kh={},Ed=Symbol("refresh");function Vh(i,e){const t=(i.i?.t?i.i.u?.o:i.i?.o)??-1;t>=i.o&&(i.o=t+1);const n=i.o,r=e.l[n];if(r===void 0)e.l[n]=i;else{const s=r.T;s.S=i,i.T=s,r.T=i}n>e.R&&(e.R=n)}function sa(i,e){let t=i.O;t&(ri|ra)||(t&_s?i.O=t&-4|Gr|ri:i.O=t|ri,t&As||Vh(i,e))}function Gh(i,e){let t=i.O;t&(ri|ra|As)||(i.O=t|As,Vh(i,e))}function Hs(i,e){const t=i.O;if(!(t&(ri|As)))return;i.O=t&-25;const n=i.o;if(i.T===i)e.l[n]=void 0;else{const r=i.S,s=e.l[n],o=r??s;i===s?e.l[n]=r:i.T.S=r,o.T=i.T}i.T=i,i.S=void 0}function Td(i){if(!i._){i._=!0;for(let e=0;e<=i.R;e++)for(let t=i.l[e];t!==void 0;t=t.S)t.O&ri&&Wo(t)}}function Wo(i,e=Gr){const t=i.O;if(!((t&(_s|Gr))>=e)){i.O=t&-4|e;for(let n=i.I;n!==null;n=n.h)Wo(n.p,_s);if(i.A!==null)for(let n=i.A;n!==null;n=n.N)for(let r=n.I;r!==null;r=r.h)Wo(r.p,_s)}}function Do(i,e){for(i._=!1,i.P=0;i.P<=i.R;i.P++){let t=i.l[i.P];for(;t!==void 0;)t.O&ri?e(t):wd(t,i),t=i.l[i.P]}i.R=0}function wd(i,e){Hs(i,e);let t=i.o;for(let n=i.C;n;n=n.D){const r=n.m,s=r.V||r;s.L&&s.o>=t&&(t=s.o+1)}if(i.o!==t){i.o=t;for(let n=i.I;n!==null;n=n.h)Gh(n.p,e)}}const Zs=new Set,Nt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},mn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Ot=0,We=null,Ps=!1,Ws=!1,No=null;function Ad(i){return!!No?.has(i)}function Ks(i){for(const e of Ri){if(e.U||e.k.size>0)continue;const t=e.G[i-1];t.length&&(e.G[i-1]=[],Xo(t,i))}}function Rd(i){for(let e=i.I;e!==null;e=e.h){const t=e.p;if(!t.W)continue;if(t.W===Gs){t.H||(t.H=!0,t.F.enqueue(kn,t.M));continue}const n=t.O&Cn?mn:Nt;n.P>t.o&&(n.P=t.o),sa(t,n)}}function mi(i){Ws=i}function Cd(i,e){e.j=i,i.$.push(...e.$);for(const t of Ri)t.K===e&&(t.K=i);i.Y.push(...e.Y);for(const t of e.Z)i.Z.add(t);for(const[t,n]of e.B){let r=i.B.get(t);r||i.B.set(t,r=new Set);for(const s of n)r.add(s)}}function Pd(i){for(let e=0;e<i.length;e++){const t=i[e];t.q=void 0,t.X!==pt&&(t.J=t.X,t.X=pt);const n=t.ee;t.ee=pt,n!==pt&&t.J!==n&&Hr(t,!0),t.K=null}i.length=0}function Id(i){for(const e of Ri)(i?e.K===i:!e.K)&&(e.U||(e.G[0].length&&Xo(e.G[0],Nr),e.G[1].length&&Xo(e.G[1],kn)),e.te.q===e&&(e.te.q=void 0),e.k.clear(),e.G[0].length=0,e.G[1].length=0,Ri.delete(e),qo.delete(e.te))}function Ai(){Ps||(Ps=!0,!Mt.ne&&!Ws&&queueMicrotask(ul))}class Ld{i=null;ie=[[],[]];re=[];created=Ot;addChild(e){this.re.push(e),e.i=this}removeChild(e){const t=this.re.indexOf(e);t>=0&&(this.re.splice(t,1),e.i=null)}notify(e,t,n,r){return this.i?this.i.notify(e,t,n,r):!1}run(e){if(this.ie[e-1].length){const t=this.ie[e-1];this.ie[e-1]=[],Xo(t,e)}for(let t=0;t<this.re.length;t++)this.re[t].run?.(e)}enqueue(e,t){e&&(bn?qt(bn).G[e-1].push(t):this.ie[e-1].push(t)),Ai()}stashQueues(e){e.ie[0].push(...this.ie[0]),e.ie[1].push(...this.ie[1]),this.ie=[[],[]];for(let t=0;t<this.re.length;t++){let n=this.re[t],r=e.re[t];r||(r={ie:[[],[]],re:[]},e.re[t]=r),n.stashQueues(r)}}restoreQueues(e){this.ie[0].push(...e.ie[0]),this.ie[1].push(...e.ie[1]);for(let t=0;t<e.re.length;t++){const n=e.re[t];let r=this.re[t];r&&r.restoreQueues(n)}}}class si extends Ld{ne=!1;se=[];Y=[];Z=new Set;static oe;static ue;static ce=null;flush(){if(!this.ne){this.ne=!0;try{if(Do(Nt,si.oe),We){if(!Nd(We)){const n=We;if(Do(mn,si.oe),this.se=[],this.Y=[],this.Z=new Set,Ks(Nr),Ks(kn),this.stashQueues(n.ae),Ot++,Ps=Nt.R>=Nt.P,tu(n.se),We=null,!n.$.length&&n.Y.length){No=new Set;for(let r=0;r<n.Y.length;r++){const s=n.Y[r];s.L||s.le||(No.add(s),Rd(s))}}try{_a(null,!0)}finally{No=null}return}this.se!==We.se&&this.se.push(...We.se),this.restoreQueues(We.ae),Zs.delete(We);const t=We;We=null,tu(this.se),_a(t)}else Zs.size&&Do(mn,si.oe),_a();Ot++,Ps=Nt.R>=Nt.P,Ks(Nr),this.run(Nr),Ks(kn),this.run(kn)}finally{this.ne=!1}}}notify(e,t,n,r){if(t&mt){if(n&mt){const s=r!==void 0?r:e.fe;if(We&&s){const o=s.source;let c=We.B.get(o);c||We.B.set(o,c=new Set);const h=c.size;c.add(e),c.size!==h&&Ai()}}return!0}return!1}initTransition(e){if(e&&(e=Xh(e)),!(e&&e===We)&&!(!e&&We&&We.Ee===Ot)){if(!We)We=e??{Ee:Ot,se:[],B:new Map,Y:[],Z:new Set,$:[],ae:{ie:[[],[]],re:[]},j:!1};else if(e){const t=We;Cd(e,t),Zs.delete(t),We=e}if(Zs.add(We),We.Ee=Ot,this.se!==We.se){for(let t=0;t<this.se.length;t++){const n=this.se[t];n.K=We,We.se.push(n)}this.se=We.se}if(this.Y!==We.Y){for(let t=0;t<this.Y.length;t++){const n=this.Y[t];n.K=We,We.Y.push(n)}this.Y=We.Y}for(const t of Ri)t.K||(t.K=We);if(this.Z!==We.Z){for(const t of this.Z)We.Z.add(t);this.Z=We.Z}}}}function Hr(i,e=!1){const t=i.q||bn,n=i.de!==void 0;for(let r=i.I;r!==null;r=r.h){if(n&&r.p.Te){r.p.O|=pc;continue}e&&t?(r.p.O|=Cs,Yh(r.p,t)):e&&(r.p.O|=Cs,r.p.q=void 0);const s=r.p;if(s.W===Gs){s.H||(s.H=!0,s.F.enqueue(kn,s.M));continue}const o=r.p.O&Cn?mn:Nt;o.P>r.p.o&&(o.P=r.p.o),sa(r.p,o)}}function eu(){const i=Mt.se;for(let e=0;e<i.length;e++){const t=i[e];t.X!==pt&&(t.J=t.X,t.X=pt,t.W&&t.W!==Gs&&(t.H=!0)),t.Se&mt||(t.Se&=~ln),t.L&&si.ue(t,!1,!0)}i.length=0}function _a(i=null,e=!1){const t=!e;t&&eu(),e||Hh(Mt),Nt.R>=Nt.P&&Do(Nt,si.oe),t&&(eu(),Pd(i?i.Y:Mt.Y),i?i.Z:Mt.Z,Id(i))}function Hh(i){for(const e of i.re)e.checkSources?.(),Hh(e)}function Wh(i){Mt.Z.add(i),Ai()}function tu(i){for(let e=0;e<i.length;e++)i[e].K=We}const Mt=new si;function ul(){if(!Mt.ne)for(;Ps||We;)Mt.flush()}function Xo(i,e){for(let t=0;t<i.length;t++)i[t](e)}function Dd(i,e){if(i.O&(Cn|Rs))return!1;if(i.Re===e||i.Oe?.has(e))return!0;for(let t=i.C;t;t=t.D){let n=t.m;for(;n;){if(n===e||n.V===e)return!0;n=n._e}}return!!(i.Se&mt&&i.fe instanceof Xt&&i.fe.source===e)}function Nd(i){if(i.j)return!0;if(i.$.length)return!1;let e=!0;for(const[t,n]of i.B){let r=!1;for(const s of n){if(Dd(s,t)){r=!0;break}n.delete(s)}if(!r)i.B.delete(t);else if(t.Se&mt&&t.fe?.source===t){e=!1;break}}if(e)for(let t=0;t<i.Y.length;t++){const n=i.Y[t];if(oa(n)&&"Se"in n&&n.Se&mt&&n.fe instanceof Xt&&n.fe.source!==n){e=!1;break}}return e&&(i.j=!0),e}function Xh(i){for(;i.j&&typeof i.j=="object";)i=i.j;return i}function Ud(i,e){const t=We;try{return We=Xh(i),e()}finally{We=t}}const qo=new WeakMap,Ri=new Set;function Fd(i){let e=qo.get(i);if(e)return qt(e);const t=i._e,n=t?.q?qt(t.q):null;return e={te:i,k:new Set,G:[[],[]],U:null,K:We,Ie:n},qo.set(i,e),Ri.add(e),i.he=!1,e}function qt(i){for(;i.U;)i=i.U;return i}function qh(i,e){if(i=qt(i),e=qt(e),i===e)return i;e.U=i;for(const t of e.k)i.k.add(t);return i.G[0].push(...e.G[0]),i.G[1].push(...e.G[1]),i}function Is(i){const e=i.q;if(!e)return;const t=qt(e);if(Ri.has(t))return t;i.q=void 0}function us(i){return Is(i)?.K??i.K}function oa(i){return i.ee!==void 0&&i.ee!==pt}function Yh(i,e){const t=qt(e),n=i.q;if(n){if(n.U){i.q=e;return}const r=qt(n);if(Ri.has(r)){r!==t&&!oa(i)&&(t.Ie&&qt(t.Ie)===r?i.q=e:r.Ie&&qt(r.Ie)===t||qh(t,r));return}}i.q=e}function mc(i){const e=i.m,t=i.D,n=i.h,r=i.pe;return n!==null?n.pe=r:e.Ae=r,r!==null?r.h=n:(e.I=n,n===null&&(e.Ne?.(),e.L&&!e.Pe&&!(e.O&Cn)&&Od(e))),t}function Od(i){Hs(i,i.O&Cn?mn:Nt);let e=i.C;for(;e!==null;)e=mc(e);i.C=null,Xs(i,!0)}function Js(i,e){const t=e.ge;if(t!==null&&t.m===i)return;let n=null;const r=e.O&ra;if(r&&(n=t!==null?t.D:e.C,n!==null&&n.m===i)){e.ge=n;return}const s=i.Ae;if(s!==null&&s.p===e&&(!r||Bd(s,e)))return;const o=e.ge=i.Ae={m:i,p:e,D:n,pe:s,h:null};t!==null?t.D=o:e.C=o,s!==null?s.h=o:i.I=o}function Bd(i,e){const t=e.ge;if(t!==null){let n=e.C;do{if(n===i)return!0;if(n===t)break;n=n.D}while(n!==null)}return!1}function $h(i){let e=i.Ce;for(;e;)e.O|=Cn,e.O&ri&&(Hs(e,Nt),sa(e,mn)),$h(e),e=e.De}function Xs(i,e=!1,t){if(i.O&Rs)return;e&&(i.O=Rs),e&&i.L&&(i.ye=null);let n=t?i.ve:i.Ce;for(;n;){const r=n.De;if(n.C){const s=n;Hs(s,s.O&Cn?mn:Nt);let o=s.C;do o=mc(o);while(o!==null);s.C=null,s.ge=null}Xs(n,!0),n=r}t?i.ve=null:(i.Ce=null,i.me=0),zd(i,t)}function zd(i,e){let t=e?i.we:i.Ve;if(t){if(Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];r.call(r)}else t.call(t);e?i.we=null:i.Ve=null}}function kd(i,e){let t=i;for(;t.be&&t.i;)t=t.i;if(t.id!=null)return Vd(t.id,t.me++);throw new Error("Cannot get child id from owner without an id")}function jh(i){return kd(i)}function Vd(i,e){const t=e.toString(36),n=t.length-1;return i+(n?String.fromCharCode(64+n):"")+t}function Yt(){return $t?it:null}function Gd(){return it}function _c(i){return it&&(it.Ve?Array.isArray(it.Ve)?it.Ve.push(i):it.Ve=[it.Ve,i]:it.Ve=i),i}function gs(i){const e=it,t=i?.transparent??!1,n={id:i?.id??(t?e?.id:e?.id!=null?jh(e):void 0),be:t||void 0,t:!0,u:e?.t?e.u:e,Ce:null,De:null,Ve:null,F:e?.F??Mt,Le:e?.Le||kh,me:0,we:null,ve:null,i:e,dispose(r=!0){Xs(n,r)}};if(e){const r=e.Ce;r===null||(n.De=r),e.Ce=n}return n}function gc(i,e){const t=gs(e);return Ir(t,()=>i(t.dispose))}function Hd(i,e){return i.Re===e||i.Oe?.has(e)?!1:i.Re?(i.Oe?i.Oe.add(e):i.Oe=new Set([i.Re,e]),i.Re=void 0,!0):(i.Re=e,!0)}function Wd(i,e){return i.Re?i.Re!==e?!1:(i.Re=void 0,!0):i.Oe?.delete(e)?(i.Oe.size===1?(i.Re=i.Oe.values().next().value,i.Oe=void 0):i.Oe.size===0&&(i.Oe=void 0),!0):!1}function Zh(i){i.Re=void 0,i.Oe?.clear(),i.Oe=void 0}function Yo(i,e,t){if(!e){i.fe=null;return}if(t instanceof Xt&&t.source===e){i.fe=t;return}const n=i.fe;(!(n instanceof Xt)||n.source!==e)&&(i.fe=new Xt(e))}function hl(i,e){for(let t=i.I;t!==null;t=t.h)e(t.p);for(let t=i.A;t!==null;t=t.N)for(let n=t.I;n!==null;n=n.h)e(n.p)}function Xd(i){let e=!1;const t=new Set,n=r=>{if(t.has(r)||!Wd(r,i))return;t.add(r),r.Ee=Ot;const s=r.Re??r.Oe?.values().next().value;if(s)Yo(r,s),ir(r);else{if(r.Se&=~mt,Yo(r),ir(r),r.Ue){if(r.W===Gs){const o=r;o.H||(o.H=!0,o.F.enqueue(kn,o.M))}else{const o=r.O&Cn?mn:Nt;o.P>r.o&&(o.P=r.o),sa(r,o)}e=!0}r.Ue=!1}hl(r,n)};hl(i,n),e&&Ai()}function Kh(i,e,t){const n=typeof e=="object"&&e!==null,r=n&&on(()=>e[Symbol.asyncIterator]),s=!r&&n&&on(()=>typeof e.then=="function");if(!s&&!r)return i.ye=null,e;i.ye=e;let o;const c=u=>{i.ye===e&&(Mt.initTransition(us(i)),xc(i,u instanceof Xt?mt:pn,u),i.Ee=Ot)},h=(u,d)=>{if(i.ye!==e||i.O&(Gr|Cs))return;Mt.initTransition(us(i));const a=!!(i.Se&ln);Jh(i);const l=Is(i);if(l&&l.k.delete(i),t)t(u);else if(i.ee!==void 0)i.ee!==void 0&&i.ee!==pt?i.X=u:(i.J=u,Hr(i)),i.Ee=Ot;else if(l){const f=i.W,m=i.J,g=i.ke;(!f&&a||!g||!g(u,m))&&(i.J=u,i.Ee=Ot,i.xe&&ft(i.xe,u),Hr(i,!0))}else ft(i,()=>u);Xd(i),Ai(),ul(),d?.()};if(s){let u=!1,d=!0;if(e.then(a=>{d?(o=a,u=!0):h(a)},a=>{d||c(a)}),d=!1,!u)throw Mt.initTransition(us(i)),new Xt(it)}if(r){const u=e[Symbol.asyncIterator]();let d=!1,a=!1;_c(()=>{if(!a){a=!0;try{const m=u.return?.();m&&typeof m.then=="function"&&m.then(void 0,()=>{})}catch{}}});const l=()=>{let m,g=!1,_=!0;return u.next().then(p=>{if(_)m=p,g=!0,p.done&&(a=!0);else{if(i.ye!==e)return;p.done?(a=!0,Ai(),ul()):h(p.value,l)}},p=>{!_&&i.ye===e&&(a=!0,c(p))}),_=!1,g&&!m.done?(o=m.value,d=!0,l()):g&&m.done},f=l();if(!d&&!f)throw Mt.initTransition(us(i)),new Xt(it)}return o}function Jh(i,e=!1){Zh(i),i.Ue=!1,i.Se=e?0:i.Se&ln,Yo(i),ir(i),i.Ge?.()}function xc(i,e,t,n,r){e===pn&&!(t instanceof ll)&&!(t instanceof Xt)&&(t=new ll(i,t));const s=e===mt&&t instanceof Xt?t.source:void 0,o=s===i,c=e===mt&&i.ee!==void 0&&!o,h=c&&oa(i);n||(e===mt&&s?(Hd(i,s),i.Se=mt|i.Se&ln,Yo(i,s,t)):(Zh(i),i.Se=e|(e!==pn?i.Se&ln:0),i.fe=t),ir(i)),r&&!n&&Yh(i,r);const u=n||h,d=n||c?void 0:r;if(i.Ge){if(n&&e===mt)return;u?i.Ge(e,t):i.Ge();return}hl(i,a=>{a.Ee=Ot,(e===mt&&s&&a.Re!==s&&!a.Oe?.has(s)||e!==mt&&(a.fe!==t||a.Re||a.Oe))&&(!u&&!a.K&&Mt.se.push(a),xc(a,e,t,u,d))})}let qd=null;si.oe=wi;si.ue=Xs;let $t=!1,Zi=!1,it=null,bn=null;function wi(i,e=!1){const t=i.W;e||(i.K&&(!t||We)&&We!==i.K&&Mt.initTransition(i.K),Hs(i,i.O&Cn?mn:Nt),i.ye=null,i.K||t===Gs?Xs(i):($h(i),i.we=i.Ve,i.ve=i.Ce,i.Ve=null,i.Ce=null,i.me=0));const n=!!(i.O&Cs),r=i.ee!==void 0&&i.ee!==pt,s=!!(i.Se&mt),o=!!(i.Se&ln),c=it;it=i,i.ge=null,i.O=ra,i.Ee=Ot;let h=i.X===pt?i.J:i.X,u=i.o,d=$t,a=bn;if($t=!0,n){const l=Is(i);l&&(bn=l)}try{h=Kh(i,i.L(h)),Jh(i,e);const l=Is(i);l&&(l.k.delete(i),ir(l.te))}catch(l){if(l instanceof Xt&&bn){const f=qt(bn);f.te!==i&&(f.k.add(i),i.q=f,ir(f.te))}l instanceof Xt&&(i.Ue=!0),xc(i,l instanceof Xt?mt:pn,l,void 0,l instanceof Xt?i.q:void 0)}finally{$t=d,i.O=zh|(e?i.O&pc:0),it=c}if(!i.fe){const l=i.ge;let f=l!==null?l.D:i.C;if(f!==null){do f=mc(f);while(f!==null);l!==null?l.D=null:i.C=null}const m=r?i.ee:i.X===pt?i.J:i.X;if(!t&&o||!i.ke||!i.ke(m,h)){const _=r?i.ee:void 0;e||t&&We!==i.K||n?(i.J=h,r&&n&&(i.ee=h,i.X=h)):i.X=h,r&&!n&&s&&!i.he&&(i.ee=h),(!r||n||i.ee!==_)&&Hr(i,n||r)}else if(r)i.X=h;else if(i.o!=u)for(let _=i.I;_!==null;_=_.h)Gh(_.p,_.p.O&Cn?mn:Nt)}bn=a,(!e||i.Se&mt)&&!i.K&&!(We&&r)&&Mt.se.push(i),i.K&&t&&We!==i.K&&Ud(i.K,()=>wi(i))}function Qh(i){if(i.O&_s)for(let e=i.C;e;e=e.D){const t=e.m,n=t.V||t;if(n.L&&Qh(n),i.O&Gr)break}(i.O&(Gr|Cs)||i.fe&&i.Ee<Ot&&!i.ye)&&wi(i),i.O=i.O&(pc|ri|As)}function aa(i,e,t){const n=t?.transparent??!1,r={id:t?.id??(n?it?.id:it?.id!=null?jh(it):void 0),be:n||void 0,ke:t?.equals!=null?t.equals:Ls,le:!!t?.pureWrite,Ne:t?.unobserved,Ve:null,F:it?.F??Mt,Le:it?.Le??kh,me:0,L:i,J:e,o:0,A:null,S:void 0,T:null,C:null,ge:null,I:null,Ae:null,i:it,De:null,Ce:null,O:t?.lazy?cl:zh,Se:ln,Ee:Ot,X:pt,we:null,ve:null,ye:null,K:null};r.T=r;const s=it?.t?it.u:it;if(it){const o=it.Ce;o===null||(r.De=o),it.Ce=r}return s&&(r.o=s.o+1),!t?.lazy&&wi(r,!0),r}function xs(i,e,t=null){const n={ke:e?.equals!=null?e.equals:Ls,le:!!e?.pureWrite,He:!!e?.He,Ne:e?.unobserved,J:i,I:null,Ae:null,Ee:Ot,V:t,N:t?.A||null,X:pt};return t&&(t.A=n),n}function Ls(i,e){return i===e}function on(i,e){if(!$t)return i();const t=$t;$t=!1;try{return i()}finally{$t=t}}function Ki(i){let e=it;e?.t&&(e=e.u),i.O&cl&&(i.O&=~cl,wi(i,!0));const t=i.V||i;if(e&&$t&&(i.L&&i.O&Rs&&wi(i),Js(i,e),t.L)){const n=i.O&Cn;t.o>=(n?mn.P:Nt.P)&&(Wo(e),Td(n?mn:Nt),Qh(t));const r=t.o;r>=e.o&&i.i!==e&&(e.o=r+1)}if(t.Se&mt)if(e&&!(Zi&&t.K&&We!==t.K))if(bn){const n=t.q,r=qt(bn);if(n&&qt(n)===r&&!oa(t))throw!$t&&i!==e&&Js(i,e),t.fe}else throw!$t&&i!==e&&Js(i,e),t.fe;else{if(e&&t!==i&&t.Se&ln)throw!$t&&i!==e&&Js(i,e),t.fe;if(!e&&t.Se&ln)throw t.fe}if(i.L&&i.Se&pn){if(i.Ee<Ot)return wi(i),Ki(i);throw i.fe}return i.ee!==void 0&&i.ee!==pt?e&&Zi&&Ad(i)?i.J:i.ee:!e||bn!==null&&(i.ee!==void 0||i.q||t===i&&Zi||t.Se&mt)||i.X===pt||Zi&&i.K&&We!==i.K?i.J:i.X}function ft(i,e){i.K&&We!==i.K&&Mt.initTransition(i.K);const t=i.ee!==void 0&&!Ws,n=i.ee!==void 0&&i.ee!==pt,r=t?n?i.ee:i.J:i.X===pt?i.J:i.X;if(typeof e=="function"&&(e=e(r)),!(!i.ke||!i.ke(r,e)||!!(i.Se&ln)))return t&&n&&i.L&&(Hr(i,!0),Ai()),e;if(t){const o=i.ee===pt;o||Mt.initTransition(us(i)),o&&(i.X=i.J,Mt.Y.push(i)),i.he=!0;const c=Fd(i);i.q=c,i.ee=e}else i.X===pt&&Mt.se.push(i),i.X=e;return ir(i),i.xe&&ft(i.xe,e),i.Ee=Ot,Hr(i,t),Ai(),e}function Ir(i,e){const t=it,n=$t;it=i,$t=!1;try{return e()}finally{it=t,$t=n}}function Yd(i){const e=i,t=i.V;if(t&&i.X!==pt)return!t.ye&&!(t.Se&mt);if(i.ee!==void 0&&i.ee!==pt){if(e.Se&mt&&!(e.Se&ln))return!0;if(i._e){const n=i.q?qt(i.q):null;return!!(n&&n.k.size>0)}return!0}return i.ee!==void 0&&i.ee===pt&&!i._e?!1:i.X!==pt&&!(e.Se&ln)?!0:!!(e.Se&mt&&!(e.Se&ln))}function ir(i){if(i.Fe){const e=Yd(i),t=i.Fe;if(ft(t,e),!e&&t.q){const n=Is(i);if(n&&n.k.size>0){const r=qt(t.q);r!==n&&qh(n,r)}qo.delete(t),t.q=void 0}}}function $d(i,e=!0){const t=Zi;Zi=e;try{return i()}finally{Zi=t}}function ef(i,e,t,n,r){let s=!1;const o=aa(r?.render?c=>$d(()=>i(c)):i,n,{...r,equals:()=>(o.H=!o.fe,s&&o.F.enqueue(o.W,ga.bind(o)),!1),lazy:!0});o.Qe=n,o.Me=e,o.je=t,o.$e=void 0,o.W=r?.render?Nr:kn,o.Ge=(c,h)=>{const u=c!==void 0?c:o.Se,d=h!==void 0?h:o.fe;if(u&pn){let a=d;if(o.F.notify(o,mt,0),o.W===kn)try{return o.je?o.je(a,()=>{o.$e?.(),o.$e=void 0}):console.error(a)}catch(l){a=l}if(!o.F.notify(o,pn,pn))throw a}else o.W===Nr&&o.F.notify(o,mt|pn,u,d)},wi(o,!0),!r?.defer&&(o.W===kn?o.F.enqueue(o.W,ga.bind(o)):ga.call(o)),s=!0,_c(()=>o.$e?.())}function ga(){if(!(!this.H||this.O&Rs)){this.$e?.(),this.$e=void 0;try{const i=this.Me(this.J,this.Qe);this.$e=i}catch(i){if(this.fe=new ll(this,i),this.Se|=pn,!this.F.notify(this,pn,pn))throw i}finally{this.Qe=this.J,this.H=!1}}}function la(i){return _c(i)}function Ur(i){const e=Ki.bind(null,i);return e.$r=!0,e}function jd(i,e,t){if(typeof i=="function"){const r=aa(i,e,t);return[Ur(r),ft.bind(null,r)]}const n=xs(i,e);return[Ur(n),ft.bind(null,n)]}function vc(i,e,t){let n=aa(i,e,t);return Ur(n)}function Zd(i,e,t,n){ef(i,e.effect||e,e.error,t,n)}function Kd(i,e,t,n){ef(i,e,void 0,t,{render:!0,...n})}function nu(i){return i?.[Ji]?.[_t]??i}function fr(i,e,t,n,r){return r&&n in r?r[n]:e&&n in e?e[n]:i[n]}function Jd(i,e,t){const n=sf(i,e),r=Object.keys(t);return Array.from(new Set([...n,...r]))}function Rr(i,e,t){const n=e?.[Ji];if(!n)return;const r=n[Ft],s=n[ht],o=n[lt];let c=n[_t];if(!(i===r&&!s&&!o)){if((n[tf]||fl).set(i,n[hn]),n[Ft]=i,n[ht]=void 0,Array.isArray(r)){let h=!1;const u=fr(r,s,c,"length",o);if(i.length&&u&&i[0]&&t(i[0])!=null){let d,a,l,f,m,g,_,p;for(l=0,f=Math.min(u,i.length);l<f&&((g=fr(r,s,c,l,o))===i[l]||g&&i[l]&&t(g)===t(i[l]));l++)Rr(i[l],rn(g,n),t);const v=new Array(i.length),x=new Map;for(f=u-1,m=i.length-1;f>=l&&m>=l&&((g=fr(r,s,c,f,o))===i[m]||g&&i[m]&&t(g)===t(i[m]));f--,m--)v[m]=g;if(l>m||l>f){for(a=l;a<=m;a++)h=!0,n[_t][a]&&ft(n[_t][a],rn(i[a],n));for(;a<i.length;a++){h=!0;const y=rn(v[a],n);n[_t][a]&&ft(n[_t][a],y),Rr(i[a],y,t)}h&&n[_t][En]&&ft(n[_t][En],void 0),u!==i.length&&n[_t].length&&ft(n[_t].length,i.length);return}for(_=new Array(m+1),a=m;a>=l;a--)g=i[a],p=g&&t(g),d=x.get(p),_[a]=d===void 0?-1:d,x.set(p,a);for(d=l;d<=f;d++)g=fr(r,s,c,d,o),p=g&&t(g),a=x.get(p),a!==void 0&&a!==-1&&(v[a]=g,a=_[a],x.set(p,a));for(a=l;a<i.length;a++)if(a in v){const y=rn(v[a],n);n[_t][a]&&ft(n[_t][a],y),Rr(i[a],y,t)}else n[_t][a]&&ft(n[_t][a],rn(i[a],n));l<i.length&&(h=!0)}else if(i.length)for(let d=0,a=i.length;d<a;d++){const l=fr(r,s,c,d,o);Bn(l)?Rr(i[d],rn(l,n),t):n[_t][d]&&ft(n[_t][d],i[d])}u!==i.length&&(h=!0,n[_t].length&&ft(n[_t].length,i.length)),h&&n[_t][En]&&ft(n[_t][En],void 0);return}if(c){const h=c[En],u=h?Jd(r,s,i):Object.keys(c);for(let d=0,a=u.length;d<a;d++){const l=u[d],f=c[l],m=nu(fr(r,s,c,l,o));let g=nu(i[l]);m!==g&&(!m||!Bn(m)||!Bn(g)||t(m)!=null&&t(m)!==t(g)?(h&&ft(h,void 0),f&&ft(f,Bn(g)?rn(g,n):g)):Rr(g,rn(m,n),t))}}if(c=n[$o]){const h=Object.keys(c);for(let u=0,d=h.length;u<d;u++){const a=h[u];ft(c[a],a in i)}}}}function iu(i,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const n=typeof e=="string"?s=>s[e]:e;if(n(t)!==void 0&&n(i)!==n(t))throw new Error("Cannot reconcile states with different identity");Rr(i,t,n)}}function Qd(i,e={},t){let n;const r=new WeakMap,s=h=>{h[jo]=o,h[tf]=r,Object.defineProperty(h,Fr,{get(){return n},configurable:!0})},o=h=>{if(r.has(h))return r.get(h);if(h[Ji]?.[jo]===o)return h;const u=nf(h,of,s);return r.set(h,u),u},c=o(e);return n=aa(()=>{const h=Gd();let u=!1,d;const a=new Proxy(c,ep(()=>!u||h.ye===d));pl(a,l=>{d=i(l),u=!0;const f=Kh(h,d,m=>{m!==l&&m!==void 0&&pl(c,iu(m,t?.key||"id"))});f!==l&&f!==void 0&&iu(f,t?.key||"id")(c)})}),n.Pe=!0,{store:c,node:n}}function ep(i){const e={get(t,n){let r;_i(!0),mi(!0);try{r=t[n]}finally{_i(!1),mi(!1)}return typeof r=="object"&&r!==null?new Proxy(r,e):r},has(t,n){let r;_i(!0),mi(!0);try{r=n in t}finally{_i(!1),mi(!1)}return r},set(t,n,r){if(i&&!i())return!0;_i(!0),mi(!0);try{t[n]=r}finally{_i(!1),mi(!1)}return!0},deleteProperty(t,n){if(i&&!i())return!0;_i(!0),mi(!0);try{delete t[n]}finally{_i(!1),mi(!1)}return!0}};return e}const En=Symbol(0),Ji=Symbol(0),hn=Symbol(0),Sn=Symbol(0),Ft="v",ht="o",lt="x",_t="n",$o="h",jo="w",tf="l",Fr="f",Or="p";function nf(i,e=of,t){let n;return Array.isArray(i)?(n=[],n.v=i):n={v:i},t&&t(n),n[hn]=new Proxy(n,e)}const fl=new WeakMap;function rn(i,e){if(e?.[jo])return e[jo](i,e);let t=i[hn]||fl.get(i);return t||fl.set(i,t=nf(i)),t}function Bn(i){return i!=null&&typeof i=="object"&&!Object.isFrozen(i)&&!(typeof Node<"u"&&i instanceof Node)}let rf=!1;function _i(i){rf=i}function Qr(i){return rf||!!Yi?.has(i)}function vs(i,e){let t=i[e];return t||(i[e]=t=Object.create(null)),t}function dl(i,e,t,n,r=Ls,s,o){if(i[e])return i[e];const c=xs(t,{equals:r,unobserved(){delete i[e]}},n);if(s&&(c.ee=pt),o&&e in o){const h=o[e];c.de=h===void 0?Md:h}return i[e]=c}function ru(i,e=En){Yt()&&Ki(dl(vs(i,_t),e,void 0,i[Fr],!1,i[Or]))}function sf(i,e,t=!0){const n=on(()=>t?Object.keys(i):Reflect.ownKeys(i));if(!e)return n;const r=new Set(n),s=Reflect.ownKeys(e);for(const o of s)e[o]!==Sn?r.add(o):r.delete(o);return Array.from(r)}function su(i,e,t){if(e&&t in e){if(e[t]===Sn)return;const n=Reflect.getOwnPropertyDescriptor(e,t);if(n?.get||n?.set||!(t in i))return n}return Reflect.getOwnPropertyDescriptor(i,t)}function ou(i,e,t){if(i[Or]){const c=i[Fr];c?.K&&Mt.initTransition(c.K)}const n=i[Ft],r=n[t],s=i[Or]&&!Ws,o=s?lt:ht;return s&&Wh(e),{base:r,overrideKey:o,state:n}}function xa(i,e,t,n){i[$o]?.[e]&&ft(i[$o][e],t!=="delete");const r=vs(i,_t);t==="set"?r[e]&&ft(r[e],()=>Bn(n)?rn(n,i):n):t==="invalidate"?r[e]&&(ft(r[e],{}),delete r[e]):r[e]&&ft(r[e],void 0),r[En]&&ft(r[En],void 0)}let Yi=null;const of={get(i,e,t){if(e===Ji)return i;if(e===hn)return t;if(e===Ed)return i[Fr];if(e===En)return ru(i),t;const n=vs(i,_t),r=n[e],s=i[lt]&&e in i[lt],o=s||i[ht]&&e in i[ht],c=!!i[Ft][Ji],h=s?i[lt]:i[ht]&&e in i[ht]?i[ht]:i[Ft];if(!r){const d=Object.getOwnPropertyDescriptor(h,e);if(d&&d.get)return d.get.call(t)}if(Qr(t)){let d=r&&(o||!c)?r.ee!==void 0&&r.ee!==pt?r.ee:r.X!==pt?r.X:r.J:h[e];if(d===Sn&&(d=void 0),!Bn(d))return d;const a=rn(d,i);return Yi?.add(a),a}let u=r?o||!c?Ki(n[e]):(Ki(n[e]),h[e]):h[e];if(u===Sn&&(u=void 0),!r){if(!o&&typeof u=="function"&&!h.hasOwnProperty(e)){let d;return!Array.isArray(i[Ft])&&(d=Object.getPrototypeOf(i[Ft]))&&d!==Object.prototype?u.bind(h):u}else if(Yt())return Ki(dl(n,e,Bn(u)?rn(u,i):u,i[Fr],Ls,i[Or],i[bd]))}return Bn(u)?rn(u,i):u},has(i,e){if(e===hn||e===En||e==="__proto__")return!0;const t=i[lt]&&e in i[lt]?i[lt][e]!==Sn:i[ht]&&e in i[ht]?i[ht][e]!==Sn:e in i[Ft];return Qr(i[hn])||Yt()&&Ki(dl(vs(i,$o),e,t,i[Fr],Ls,i[Or])),t},set(i,e,t){const n=i[hn];return Qr(n)&&on(()=>{const{base:r,overrideKey:s,state:o}=ou(i,n,e),c=i[lt]&&e in i[lt]?i[lt][e]:i[ht]&&e in i[ht]?i[ht][e]:r,h=t?.[Ji]?.[Ft]??t,u=Array.isArray(o)&&e!=="length",d=u?parseInt(e)+1:0,a=u&&(i[lt]&&"length"in i[lt]?i[lt].length:i[ht]&&"length"in i[ht]?i[ht].length:o.length),l=u&&d>a?d:void 0;if(c===h&&l===void 0)return!0;if(h!==void 0&&h===r&&l===void 0)delete i[s]?.[e];else{const f=i[s]||(i[s]=Object.create(null));f[e]=h,l!==void 0&&(f.length=l)}if(xa(i,e,"set",h),Array.isArray(o)){const f=vs(i,_t),m=e==="length"?h:l;m!==void 0&&f.length&&ft(f.length,m)}}),!0},defineProperty(i,e,t){const n=i[hn];return Qr(n)&&on(()=>{const{base:r,overrideKey:s}=ou(i,n,e),o="value"in t?{...t,value:t.value?.[Ji]?.[Ft]??t.value}:t;Object.defineProperty(i[s]||(i[s]=Object.create(null)),e,o),xa(i,e,"invalidate")}),!0},deleteProperty(i,e){const t=i[lt]?.[e]===Sn,n=i[ht]?.[e]===Sn;return Qr(i[hn])&&!t&&!n&&on(()=>{const r=i[Or]&&!Ws,s=r?lt:ht;r&&Wh(i[hn]);const o=i[lt]&&e in i[lt]?i[lt][e]:i[ht]&&e in i[ht]?i[ht][e]:i[Ft][e];if(e in i[Ft]||i[ht]&&e in i[ht])(i[s]||(i[s]=Object.create(null)))[e]=Sn;else if(i[s]&&e in i[s])delete i[s][e];else return!0;xa(i,e,"delete")}),!0},ownKeys(i){ru(i);let e=sf(i[Ft],i[ht],!1);if(i[lt]){const t=new Set(e);for(const n of Reflect.ownKeys(i[lt]))i[lt][n]!==Sn?t.add(n):t.delete(n);e=Array.from(t)}return e},getOwnPropertyDescriptor(i,e){if(e===hn)return{value:i[hn],writable:!0,configurable:!0};if(i[lt]&&e in i[lt]){if(i[lt][e]===Sn)return;const t=Reflect.getOwnPropertyDescriptor(i[lt],e);if(t?.get||t?.set||!(e in i[Ft]))return t;const n=su(i[Ft],i[ht],e);return n?{...n,value:i[lt][e]}:{value:i[lt][e],writable:!0,enumerable:!0,configurable:!0}}return su(i[Ft],i[ht],e)},getPrototypeOf(i){return Object.getPrototypeOf(i[Ft])}};function pl(i,e){const t=Yi;Yi=new Set,Yi.add(i);try{const n=e(i);if(n!==i&&n!==void 0)if(Array.isArray(n)){for(let r=0,s=n.length;r<s;r++)i[r]=n[r];i.length=n.length}else new Set([...Object.keys(i),...Object.keys(n)]).forEach(s=>{s in n?i[s]=n[s]:delete i[s]})}finally{Yi.clear(),Yi=t}}function tp(i,e,t){const n=typeof i=="function",r=n?Qd(i,e,t).store:rn(i);return[r,s=>pl(r,s)]}const af=Symbol(0);function hs(i,e,t=0){let n,r=i;if(t<e.length-1){n=e[t];const o=typeof n,c=Array.isArray(i);if(Array.isArray(n)){for(let h=0;h<n.length;h++)e[t]=n[h],hs(i,e,t);e[t]=n;return}else if(c&&o==="function"){for(let h=0;h<i.length;h++)n(i[h],h)&&(e[t]=h,hs(i,e,t));e[t]=n;return}else if(c&&o==="object"){const{from:h=0,to:u=i.length-1,by:d=1}=n;for(let a=h;a<=u;a+=d)e[t]=a,hs(i,e,t);e[t]=n;return}else if(t<e.length-2){hs(i[n],e,t+1);return}r=i[n]}let s=e[e.length-1];if(!(typeof s=="function"&&(s=s(r),s===r))&&!(n===void 0&&s==null))if(s===af)delete i[n];else if(n===void 0||Bn(r)&&Bn(s)&&!Array.isArray(s)){const o=n!==void 0?i[n]:i,c=Object.keys(s);for(let h=0;h<c.length;h++){const u=c[h],d=Object.getOwnPropertyDescriptor(s,u);d.get||d.set?Object.defineProperty(o,u,d):o[u]=d.value}}else i[n]=s}Object.assign(function(...e){return t=>{hs(t,e)}},{DELETE:af});function np(i,e,t){const r=e.length>1,s=e;return vc(ip.bind({Ye:gs(),Ze:0,Be:i,qe:[],Xe:s,ze:[],Je:[],et:void 0,tt:void 0,nt:r?[]:void 0,it:t?.fallback}))}const va={pureWrite:!0};function ip(){const i=this.Be()||[],e=i.length;return i[En],Ir(this.Ye,()=>{let t,n,r=this.tt?()=>(this.tt[n]=xs(i[n],va),this.nt&&(this.nt[n]=xs(n,va)),this.Xe(Ur(this.tt[n]),this.nt?Ur(this.nt[n]):void 0)):this.nt?()=>{const s=i[n];return this.nt[n]=xs(n,va),this.Xe(()=>s,Ur(this.nt[n]))}:()=>{const s=i[n];return this.Xe(()=>s)};if(e===0)this.Ze!==0&&(this.Ye.dispose(!1),this.Je=[],this.qe=[],this.ze=[],this.Ze=0,this.tt&&(this.tt=[]),this.nt&&(this.nt=[])),this.it&&!this.ze[0]&&(this.ze[0]=Ir(this.Je[0]=gs(),this.it));else if(this.Ze===0){for(this.Je[0]&&this.Je[0].dispose(),this.ze=new Array(e),n=0;n<e;n++)this.qe[n]=i[n],this.ze[n]=Ir(this.Je[n]=gs(),r);this.Ze=e}else{let s,o,c,h,u,d,a,l=new Array(e),f=new Array(e),m=this.tt?new Array(e):void 0,g=this.nt?new Array(e):void 0;for(s=0,o=Math.min(this.Ze,e);s<o&&(this.qe[s]===i[s]||this.tt&&au(this.et,this.qe[s],i[s]));s++)this.tt&&ft(this.tt[s],i[s]);for(o=this.Ze-1,c=e-1;o>=s&&c>=s&&(this.qe[o]===i[c]||this.tt&&au(this.et,this.qe[o],i[c]));o--,c--)l[c]=this.ze[o],f[c]=this.Je[o],m&&(m[c]=this.tt[o]),g&&(g[c]=this.nt[o]);for(d=new Map,a=new Array(c+1),n=c;n>=s;n--)h=i[n],u=this.et?this.et(h):h,t=d.get(u),a[n]=t===void 0?-1:t,d.set(u,n);for(t=s;t<=o;t++)h=this.qe[t],u=this.et?this.et(h):h,n=d.get(u),n!==void 0&&n!==-1?(l[n]=this.ze[t],f[n]=this.Je[t],m&&(m[n]=this.tt[t]),g&&(g[n]=this.nt[t]),n=a[n],d.set(u,n)):this.Je[t].dispose();for(n=s;n<e;n++)n in l?(this.ze[n]=l[n],this.Je[n]=f[n],m&&(this.tt[n]=m[n],ft(this.tt[n],i[n])),g&&(this.nt[n]=g[n],ft(this.nt[n],n))):this.ze[n]=Ir(this.Je[n]=gs(),r);this.ze=this.ze.slice(0,this.Ze=e),this.qe=i.slice(0)}}),this.ze}function au(i,e,t){return i?i(e)===i(t):!0}function lf(i,e){if(typeof i=="function"&&!i.length){if(e?.doNotUnwrap)return i;do i=i();while(typeof i=="function"&&!i.length)}if(!(e?.skipNonRendered&&(i==null||i===!0||i===!1||i===""))){if(Array.isArray(i)){let t=[];return ml(i,t,e)?()=>{let n=[];return ml(t,n,{...e,doNotUnwrap:!1}),n}:t}return i}}function ml(i,e=[],t){let n=null,r=!1;for(let s=0;s<i.length;s++)try{let o=i[s];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),r=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?r=ml(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Xt))throw o;n=o}if(n)throw n;return r}const oi=(...i)=>vc(...i),gt=(...i)=>jd(...i),rp=(...i)=>tp(...i),cf=(...i)=>Kd(...i),Lr=(...i)=>Zd(...i);function _l(i,e){return on(()=>i(e||{}))}const ca=(i,e,t)=>cf(i,e,t,{transparent:!0}),sp=(i,e)=>e?i.$r?i:vc(()=>i(),void 0,{transparent:!0}):oi(()=>i());function op(i,e,t){let n=t.length,r=e.length,s=n,o=0,c=0,h=e[r-1].nextSibling,u=null;for(;o<r||c<s;){if(e[o]===t[c]){o++,c++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const d=s<n?c?t[c-1].nextSibling:t[s-c]:h;for(;c<s;)i.insertBefore(t[c++],d)}else if(s===c)for(;o<r;)(!u||!u.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[c]===e[r-1]){const d=e[--r].nextSibling;i.insertBefore(t[c++],e[o++].nextSibling),i.insertBefore(t[--s],d),e[r]=t[s]}else{if(!u){u=new Map;let a=c;for(;a<s;)u.set(t[a],a++)}const d=u.get(e[o]);if(d!=null)if(c<d&&d<s){let a=o,l=1,f;for(;++a<r&&a<s&&!((f=u.get(e[a]))==null||f!==d+l);)l++;if(l>d-c){const m=e[o];for(;c<d;)i.insertBefore(t[c++],m)}else i.replaceChild(t[c++],e[o++])}else o++;else e[o++].remove()}}}const lu="_$DX_DELEGATE";function ap(i,e,t,n={}){let r;return gc(s=>{r=s,e===document?lf(i):xl(e,i(),e.firstChild?null:void 0,t)},{id:n.renderId}),()=>{r(),e.textContent=""}}function yc(i,e,t,n){let r;const s=c=>{const h=document.createElement("template");return h.innerHTML=i,h.content.firstChild};return c=>(r||(r=s())).cloneNode(!0)}function uf(i,e=window.document){const t=e[lu]||(e[lu]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];t.has(s)||(t.add(s),e.addEventListener(s,cp))}}function Lt(i,e,t){t!=null?i.style.setProperty(e,t):i.style.removeProperty(e)}function lp(i,e){Array.isArray(i)?i.flat(1/0).forEach(t=>t&&t(e)):i(e)}function gl(i,e){const t=on(i);Ir(null,()=>lp(t,e))}function xl(i,e,t,n){const r=t!==void 0;if(r&&!n&&(n=[]),typeof e!="function"&&(e=uu(e,n,r,!0),typeof e!="function"))return cu(i,e,n,t);if(e=sp(e,!0),r&&n.length===0){const s=document.createTextNode("");i.insertBefore(s,t),n=[s]}ca(s=>uu(e,s,r),(s,o)=>cu(i,s,o,t),n)}function cp(i){let e=i.target;const t=`$$${i.type}`,n=i.target,r=i.currentTarget,s=h=>Object.defineProperty(i,"target",{configurable:!0,value:h}),o=()=>{const h=e[t];if(h&&!e.disabled){const u=e[`${t}Data`];if(u!==void 0?h.call(e,u,i):h.call(e,i),i.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(i.target)&&s(e.host),!0},c=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),i.composedPath){const h=i.composedPath();s(h[0]);for(let u=0;u<h.length-2&&(e=h[u],!!o());u++){if(e._$host){e=e._$host,c();break}if(e.parentNode===r)break}}else c();s(n)}function cu(i,e,t,n){if(e===t)return;const r=typeof e,s=n!==void 0;if(r==="string"||r==="number"){const o=typeof t;o==="string"||o==="number"?i.firstChild.data=e:i.textContent=e}else if(e===void 0)Qs(i,t,n);else if(e.nodeType)Array.isArray(t)?Qs(i,t,s?n:null,e):t===void 0||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?Qs(i,t,n):o?t.length===0?hu(i,e,n):op(i,t,e):(t&&Qs(i),hu(i,e))}}function uu(i,e,t,n){if(i=lf(i,{skipNonRendered:!0,doNotUnwrap:n}),n&&typeof i=="function")return i;if(t&&!Array.isArray(i)&&(i=[i??""]),Array.isArray(i))for(let r=0,s=i.length;r<s;r++){const o=i[r],c=e&&e[r],h=typeof o;(h==="string"||h==="number")&&(i[r]=c&&c.nodeType===3&&c.data===""+o?c:document.createTextNode(o))}return i}function hu(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function Qs(i,e,t,n){if(t===void 0)return i.textContent="";if(e.length){let r=!1;for(let s=e.length-1;s>=0;s--){const o=e[s];if(n!==o){const c=o.parentNode===i;n&&!r&&!s?c?i.replaceChild(n,o):i.insertBefore(n,t):c&&o.remove()}else r=!0}}else n&&i.insertBefore(n,t)}function up(...i){return ap(...i)}const Sc="183",hp=0,fu=1,fp=2,Uo=1,hf=2,fs=3,Ci=0,Jt=1,dn=2,ai=0,Br=1,du=2,pu=3,mu=4,dp=5,$i=100,pp=101,mp=102,_p=103,gp=104,xp=200,vp=201,yp=202,Sp=203,vl=204,yl=205,Mp=206,bp=207,Ep=208,Tp=209,wp=210,Ap=211,Rp=212,Cp=213,Pp=214,Sl=0,Ml=1,bl=2,Wr=3,El=4,Tl=5,wl=6,Al=7,Mc=0,Ip=1,Lp=2,Vn=0,ff=1,df=2,pf=3,mf=4,_f=5,gf=6,xf=7,vf=300,rr=301,Xr=302,ya=303,Sa=304,ua=306,Rl=1e3,ii=1001,Cl=1002,Bt=1003,Dp=1004,eo=1005,Gt=1006,Ma=1007,Qi=1008,an=1009,yf=1010,Sf=1011,Ds=1012,bc=1013,Wn=1014,wn=1015,ui=1016,Ec=1017,Tc=1018,Ns=1020,Mf=35902,bf=35899,Ef=1021,Tf=1022,An=1023,hi=1026,er=1027,wc=1028,Ac=1029,qr=1030,Rc=1031,Cc=1033,Fo=33776,Oo=33777,Bo=33778,zo=33779,Pl=35840,Il=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,Ol=37488,Bl=37489,zl=37490,kl=37491,Vl=37808,Gl=37809,Hl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,$l=37815,jl=37816,Zl=37817,Kl=37818,Jl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,rc=36283,sc=36284,oc=36285,ac=36286,Np=3200,Pc=0,Up=1,bi="",sn="srgb",Yr="srgb-linear",Zo="linear",st="srgb",dr=7680,_u=519,Fp=512,Op=513,Bp=514,Ic=515,zp=516,kp=517,Lc=518,Vp=519,gu=35044,xu="300 es",zn=2e3,Us=2001;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){const i=Ko("canvas");return i.style.display="block",i}const vu={};function yu(...i){const e="THREE."+i.shift();console.log(e,...i)}function wf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Jo(...i){const e=i.join(" ");e in vu||(vu[e]=!0,He(...i))}function Wp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Xp={[Sl]:Ml,[bl]:wl,[El]:Al,[Wr]:Tl,[Ml]:Sl,[wl]:bl,[Al]:El,[Tl]:Wr};class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const ys=Math.PI/180,Fs=180/Math.PI;function or(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Dc(i,e){return(i%e+e)%e}function qp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Yp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function $p(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function jp(i,e=1){return e-Math.abs(Dc(i,e*2)-e)}function Zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qp(i,e){return i+Math.random()*(e-i)}function em(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nm(i){return i*ys}function im(i){return i*Fs}function rm(i){return(i&i-1)===0&&i!==0}function sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function am(i,e,t,n,r){const s=Math.cos,o=Math.sin,c=s(t/2),h=o(t/2),u=s((e+n)/2),d=o((e+n)/2),a=s((e-n)/2),l=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(c*d,h*a,h*l,c*u);break;case"YZY":i.set(h*l,c*d,h*a,c*u);break;case"ZXZ":i.set(h*a,h*l,c*d,c*u);break;case"XZX":i.set(c*d,h*m,h*f,c*u);break;case"YXY":i.set(h*f,c*d,h*m,c*u);break;case"ZYZ":i.set(h*m,h*f,c*d,c*u);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mu={DEG2RAD:ys,RAD2DEG:Fs,generateUUID:or,clamp:Ke,euclideanModulo:Dc,mapLinear:qp,inverseLerp:Yp,lerp:Ss,damp:$p,pingpong:jp,smoothstep:Zp,smootherstep:Kp,randInt:Jp,randFloat:Qp,randFloatSpread:em,seededRandom:tm,degToRad:nm,radToDeg:im,isPowerOfTwo:rm,ceilPowerOfTwo:sm,floorPowerOfTwo:om,setQuaternionFromProperEuler:am,normalize:Ht,denormalize:Cr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,c){let h=n[r+0],u=n[r+1],d=n[r+2],a=n[r+3],l=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a!==g||h!==l||u!==f||d!==m){let _=h*l+u*f+d*m+a*g;_<0&&(l=-l,f=-f,m=-m,g=-g,_=-_);let p=1-c;if(_<.9995){const v=Math.acos(_),x=Math.sin(v);p=Math.sin(p*v)/x,c=Math.sin(c*v)/x,h=h*p+l*c,u=u*p+f*c,d=d*p+m*c,a=a*p+g*c}else{h=h*p+l*c,u=u*p+f*c,d=d*p+m*c,a=a*p+g*c;const v=1/Math.sqrt(h*h+u*u+d*d+a*a);h*=v,u*=v,d*=v,a*=v}}e[t]=h,e[t+1]=u,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,r,s,o){const c=n[r],h=n[r+1],u=n[r+2],d=n[r+3],a=s[o],l=s[o+1],f=s[o+2],m=s[o+3];return e[t]=c*m+d*a+h*f-u*l,e[t+1]=h*m+d*l+u*a-c*f,e[t+2]=u*m+d*f+c*l-h*a,e[t+3]=d*m-c*a-h*l-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,h=Math.sin,u=c(n/2),d=c(r/2),a=c(s/2),l=h(n/2),f=h(r/2),m=h(s/2);switch(o){case"XYZ":this._x=l*d*a+u*f*m,this._y=u*f*a-l*d*m,this._z=u*d*m+l*f*a,this._w=u*d*a-l*f*m;break;case"YXZ":this._x=l*d*a+u*f*m,this._y=u*f*a-l*d*m,this._z=u*d*m-l*f*a,this._w=u*d*a+l*f*m;break;case"ZXY":this._x=l*d*a-u*f*m,this._y=u*f*a+l*d*m,this._z=u*d*m+l*f*a,this._w=u*d*a-l*f*m;break;case"ZYX":this._x=l*d*a-u*f*m,this._y=u*f*a+l*d*m,this._z=u*d*m-l*f*a,this._w=u*d*a+l*f*m;break;case"YZX":this._x=l*d*a+u*f*m,this._y=u*f*a+l*d*m,this._z=u*d*m-l*f*a,this._w=u*d*a-l*f*m;break;case"XZY":this._x=l*d*a-u*f*m,this._y=u*f*a-l*d*m,this._z=u*d*m+l*f*a,this._w=u*d*a+l*f*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],c=t[5],h=t[9],u=t[2],d=t[6],a=t[10],l=n+c+a;if(l>0){const f=.5/Math.sqrt(l+1);this._w=.25/f,this._x=(d-h)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(n>c&&n>a){const f=2*Math.sqrt(1+n-c-a);this._w=(d-h)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(c>a){const f=2*Math.sqrt(1+c-n-a);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(h+d)/f}else{const f=2*Math.sqrt(1+a-n-c);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(h+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,c=t._x,h=t._y,u=t._z,d=t._w;return this._x=n*d+o*c+r*u-s*h,this._y=r*d+o*h+s*c-n*u,this._z=s*d+o*u+n*h-r*c,this._w=o*d-n*c-r*h-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,s=-s,o=-o,c=-c);let h=1-t;if(c<.9995){const u=Math.acos(c),d=Math.sin(u);h=Math.sin(h*u)/d,t=Math.sin(t*u)/d,this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+s*t,this._w=this._w*h+o*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+s*t,this._w=this._w*h+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,c=e.z,h=e.w,u=2*(o*r-c*n),d=2*(c*t-s*r),a=2*(s*n-o*t);return this.x=t+h*u+o*a-c*d,this.y=n+h*d+c*u-s*a,this.z=r+h*a+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,c=t.y,h=t.z;return this.x=r*h-s*c,this.y=s*o-n*h,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new O,bu=new Gn;class qe{constructor(e,t,n,r,s,o,c,h,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,h,u)}set(e,t,n,r,s,o,c,h,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=s,d[5]=h,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[3],h=n[6],u=n[1],d=n[4],a=n[7],l=n[2],f=n[5],m=n[8],g=r[0],_=r[3],p=r[6],v=r[1],x=r[4],y=r[7],A=r[2],T=r[5],P=r[8];return s[0]=o*g+c*v+h*A,s[3]=o*_+c*x+h*T,s[6]=o*p+c*y+h*P,s[1]=u*g+d*v+a*A,s[4]=u*_+d*x+a*T,s[7]=u*p+d*y+a*P,s[2]=l*g+f*v+m*A,s[5]=l*_+f*x+m*T,s[8]=l*p+f*y+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],h=e[6],u=e[7],d=e[8];return t*o*d-t*c*u-n*s*d+n*c*h+r*s*u-r*o*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],h=e[6],u=e[7],d=e[8],a=d*o-c*u,l=c*h-d*s,f=u*s-o*h,m=t*a+n*l+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=a*g,e[1]=(r*u-d*n)*g,e[2]=(c*n-r*o)*g,e[3]=l*g,e[4]=(d*t-r*h)*g,e[5]=(r*s-c*t)*g,e[6]=f*g,e[7]=(n*h-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,c){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*c)+o+e,-r*u,r*h,-r*(-u*o+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new qe,Eu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){const i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const tt=lm();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pr;class cm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Ko("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let um=0;class Nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Ta(r[o].image)):s.push(Ta(r[o]))}else s=Ta(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let hm=0;const wa=new O;class Zt extends Kr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=ii,r=ii,s=Gt,o=Qi,c=An,h=an,u=Zt.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=or(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=vf;Zt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,u=h[0],d=h[4],a=h[8],l=h[1],f=h[5],m=h[9],g=h[2],_=h[6],p=h[10];if(Math.abs(d-l)<.01&&Math.abs(a-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(d+l)<.1&&Math.abs(a+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(f+1)/2,A=(p+1)/2,T=(d+l)/4,P=(a+g)/4,S=(m+_)/4;return x>y&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=P/n):y>A?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=S/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=S/s),this.set(n,r,s,t),this}let v=Math.sqrt((_-m)*(_-m)+(a-g)*(a-g)+(l-d)*(l-d));return Math.abs(v)<.001&&(v=1),this.x=(_-m)/v,this.y=(a-g)/v,this.z=(l-d)/v,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends Kr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Zt(r),o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Af extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dm extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e,t,n,r,s,o,c,h,u,d,a,l,f,m,g,_){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,h,u,d,a,l,f,m,g,_)}set(e,t,n,r,s,o,c,h,u,d,a,l,f,m,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=c,p[13]=h,p[2]=u,p[6]=d,p[10]=a,p[14]=l,p[3]=f,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r),d=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const l=o*d,f=o*a,m=c*d,g=c*a;t[0]=h*d,t[4]=-h*a,t[8]=u,t[1]=f+m*u,t[5]=l-g*u,t[9]=-c*h,t[2]=g-l*u,t[6]=m+f*u,t[10]=o*h}else if(e.order==="YXZ"){const l=h*d,f=h*a,m=u*d,g=u*a;t[0]=l+g*c,t[4]=m*c-f,t[8]=o*u,t[1]=o*a,t[5]=o*d,t[9]=-c,t[2]=f*c-m,t[6]=g+l*c,t[10]=o*h}else if(e.order==="ZXY"){const l=h*d,f=h*a,m=u*d,g=u*a;t[0]=l-g*c,t[4]=-o*a,t[8]=m+f*c,t[1]=f+m*c,t[5]=o*d,t[9]=g-l*c,t[2]=-o*u,t[6]=c,t[10]=o*h}else if(e.order==="ZYX"){const l=o*d,f=o*a,m=c*d,g=c*a;t[0]=h*d,t[4]=m*u-f,t[8]=l*u+g,t[1]=h*a,t[5]=g*u+l,t[9]=f*u-m,t[2]=-u,t[6]=c*h,t[10]=o*h}else if(e.order==="YZX"){const l=o*h,f=o*u,m=c*h,g=c*u;t[0]=h*d,t[4]=g-l*a,t[8]=m*a+f,t[1]=a,t[5]=o*d,t[9]=-c*d,t[2]=-u*d,t[6]=f*a+m,t[10]=l-g*a}else if(e.order==="XZY"){const l=o*h,f=o*u,m=c*h,g=c*u;t[0]=h*d,t[4]=-a,t[8]=u*d,t[1]=l*a+g,t[5]=o*d,t[9]=f*a-m,t[2]=m*a-f,t[6]=c*d,t[10]=g*a+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),gi.crossVectors(n,en),gi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),gi.crossVectors(n,en)),gi.normalize(),to.crossVectors(en,gi),r[0]=gi.x,r[4]=to.x,r[8]=en.x,r[1]=gi.y,r[5]=to.y,r[9]=en.y,r[2]=gi.z,r[6]=to.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[4],h=n[8],u=n[12],d=n[1],a=n[5],l=n[9],f=n[13],m=n[2],g=n[6],_=n[10],p=n[14],v=n[3],x=n[7],y=n[11],A=n[15],T=r[0],P=r[4],S=r[8],E=r[12],N=r[1],L=r[5],U=r[9],V=r[13],Y=r[2],z=r[6],H=r[10],F=r[14],$=r[3],ie=r[7],he=r[11],ve=r[15];return s[0]=o*T+c*N+h*Y+u*$,s[4]=o*P+c*L+h*z+u*ie,s[8]=o*S+c*U+h*H+u*he,s[12]=o*E+c*V+h*F+u*ve,s[1]=d*T+a*N+l*Y+f*$,s[5]=d*P+a*L+l*z+f*ie,s[9]=d*S+a*U+l*H+f*he,s[13]=d*E+a*V+l*F+f*ve,s[2]=m*T+g*N+_*Y+p*$,s[6]=m*P+g*L+_*z+p*ie,s[10]=m*S+g*U+_*H+p*he,s[14]=m*E+g*V+_*F+p*ve,s[3]=v*T+x*N+y*Y+A*$,s[7]=v*P+x*L+y*z+A*ie,s[11]=v*S+x*U+y*H+A*he,s[15]=v*E+x*V+y*F+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],c=e[5],h=e[9],u=e[13],d=e[2],a=e[6],l=e[10],f=e[14],m=e[3],g=e[7],_=e[11],p=e[15],v=h*f-u*l,x=c*f-u*a,y=c*l-h*a,A=o*f-u*d,T=o*l-h*d,P=o*a-c*d;return t*(g*v-_*x+p*y)-n*(m*v-_*A+p*T)+r*(m*x-g*A+p*P)-s*(m*y-g*T+_*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],h=e[6],u=e[7],d=e[8],a=e[9],l=e[10],f=e[11],m=e[12],g=e[13],_=e[14],p=e[15],v=t*c-n*o,x=t*h-r*o,y=t*u-s*o,A=n*h-r*c,T=n*u-s*c,P=r*u-s*h,S=d*g-a*m,E=d*_-l*m,N=d*p-f*m,L=a*_-l*g,U=a*p-f*g,V=l*p-f*_,Y=v*V-x*U+y*L+A*N-T*E+P*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return e[0]=(c*V-h*U+u*L)*z,e[1]=(r*U-n*V-s*L)*z,e[2]=(g*P-_*T+p*A)*z,e[3]=(l*T-a*P-f*A)*z,e[4]=(h*N-o*V-u*E)*z,e[5]=(t*V-r*N+s*E)*z,e[6]=(_*y-m*P-p*x)*z,e[7]=(d*P-l*y+f*x)*z,e[8]=(o*U-c*N+u*S)*z,e[9]=(n*N-t*U-s*S)*z,e[10]=(m*T-g*y+p*v)*z,e[11]=(a*y-d*T-f*v)*z,e[12]=(c*E-o*L-h*S)*z,e[13]=(t*L-n*E+r*S)*z,e[14]=(g*x-m*A-_*v)*z,e[15]=(d*A-a*x+l*v)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,c=e.y,h=e.z,u=s*o,d=s*c;return this.set(u*o+n,u*c-r*h,u*h+r*c,0,u*c+r*h,d*c+n,d*h-r*o,0,u*h-r*c,d*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,c=t._z,h=t._w,u=s+s,d=o+o,a=c+c,l=s*u,f=s*d,m=s*a,g=o*d,_=o*a,p=c*a,v=h*u,x=h*d,y=h*a,A=n.x,T=n.y,P=n.z;return r[0]=(1-(g+p))*A,r[1]=(f+y)*A,r[2]=(m-x)*A,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(l+p))*T,r[6]=(_+v)*T,r[7]=0,r[8]=(m+x)*P,r[9]=(_-v)*P,r[10]=(1-(l+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=mr.set(r[0],r[1],r[2]).length();const c=mr.set(r[4],r[5],r[6]).length(),h=mr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),xn.copy(this);const u=1/o,d=1/c,a=1/h;return xn.elements[0]*=u,xn.elements[1]*=u,xn.elements[2]*=u,xn.elements[4]*=d,xn.elements[5]*=d,xn.elements[6]*=d,xn.elements[8]*=a,xn.elements[9]*=a,xn.elements[10]*=a,t.setFromRotationMatrix(xn),n.x=o,n.y=c,n.z=h,this}makePerspective(e,t,n,r,s,o,c=zn,h=!1){const u=this.elements,d=2*s/(t-e),a=2*s/(n-r),l=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(h)m=s/(o-s),g=o*s/(o-s);else if(c===zn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(c===Us)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=a,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,c=zn,h=!1){const u=this.elements,d=2/(t-e),a=2/(n-r),l=-(t+e)/(t-e),f=-(n+r)/(n-r);let m,g;if(h)m=1/(o-s),g=o/(o-s);else if(c===zn)m=-2/(o-s),g=-(o+s)/(o-s);else if(c===Us)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=0,u[12]=l,u[1]=0,u[5]=a,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mr=new O,xn=new ct,pm=new O(0,0,0),mm=new O(1,1,1),gi=new O,to=new O,en=new O,wu=new ct,Au=new Gn;class _n{constructor(e=0,t=0,n=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],h=r[1],u=r[5],d=r[9],a=r[2],l=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-a,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _m=0;const Ru=new O,_r=new Gn,jn=new ct,no=new O,es=new O,gm=new O,xm=new Gn,Cu=new O(1,0,0),Pu=new O(0,1,0),Iu=new O(0,0,1),Lu={type:"added"},vm={type:"removed"},gr={type:"childadded",child:null},Aa={type:"childremoved",child:null};class At extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new O,t=new _n,n=new Gn,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(es,no,this.up):jn.lookAt(no,es,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(jn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),gr.child=e,this.dispatchEvent(gr),gr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){const a=h[u];s(e.shapes,a)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(s(e.materials,this.material[h]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(s(e.animations,h))}}if(t){const c=o(e.geometries),h=o(e.materials),u=o(e.textures),d=o(e.images),a=o(e.shapes),l=o(e.skeletons),f=o(e.animations),m=o(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),l.length>0&&(n.skeletons=l),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(c){const h=[];for(const u in c){const d=c[u];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const c=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],l=d.position.distanceTo(a.position),f=.02,m=.005;u.inputState.pinching&&l>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&l<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Dc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ca(o,s,e+1/3),this.g=Ca(o,s,e),this.b=Ca(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return tt.workingToColorSpace(Vt.copy(this),e),Math.round(Ke(Vt.r*255,0,255))*65536+Math.round(Ke(Vt.g*255,0,255))*256+Math.round(Ke(Vt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(n,r,s),c=Math.min(n,r,s);let h,u;const d=(c+o)/2;if(c===o)h=0,u=0;else{const a=o-c;switch(u=d<=.5?a/(o+c):a/(2-o-c),o){case n:h=(r-s)/a+(r<s?6:0);break;case r:h=(s-n)/a+2;break;case s:h=(n-r)/a+4;break}h/=6}return e.h=h,e.s=u,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=sn){tt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(io);const n=Ss(xi.h,io.h,t),r=Ss(xi.s,io.s,t),s=Ss(xi.l,io.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Je;Je.NAMES=Cf;class Sm extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new O,Zn=new O,Pa=new O,Kn=new O,xr=new O,vr=new O,Du=new O,Ia=new O,La=new O,Da=new O,Na=new St,Ua=new St,Fa=new St;class Tn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Zn.subVectors(n,t),Pa.subVectors(e,t);const o=vn.dot(vn),c=vn.dot(Zn),h=vn.dot(Pa),u=Zn.dot(Zn),d=Zn.dot(Pa),a=o*u-c*c;if(a===0)return s.set(0,0,0),null;const l=1/a,f=(u*h-c*d)*l,m=(o*d-c*h)*l;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,c,h){return this.getBarycoord(e,t,n,r,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Kn.x),h.addScaledVector(o,Kn.y),h.addScaledVector(c,Kn.z),h)}static getInterpolatedAttribute(e,t,n,r,s,o){return Na.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Fa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Na,s.x),o.addScaledVector(Ua,s.y),o.addScaledVector(Fa,s.z),o}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Zn.subVectors(e,t),vn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),vn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,c;xr.subVectors(r,n),vr.subVectors(s,n),Ia.subVectors(e,n);const h=xr.dot(Ia),u=vr.dot(Ia);if(h<=0&&u<=0)return t.copy(n);La.subVectors(e,r);const d=xr.dot(La),a=vr.dot(La);if(d>=0&&a<=d)return t.copy(r);const l=h*a-d*u;if(l<=0&&h>=0&&d<=0)return o=h/(h-d),t.copy(n).addScaledVector(xr,o);Da.subVectors(e,s);const f=xr.dot(Da),m=vr.dot(Da);if(m>=0&&f<=m)return t.copy(s);const g=f*u-h*m;if(g<=0&&u>=0&&m<=0)return c=u/(u-m),t.copy(n).addScaledVector(vr,c);const _=d*m-f*a;if(_<=0&&a-d>=0&&f-m>=0)return Du.subVectors(s,r),c=(a-d)/(a-d+(f-m)),t.copy(r).addScaledVector(Du,c);const p=1/(_+g+l);return o=g*p,c=l*p,t.copy(n).addScaledVector(xr,o).addScaledVector(vr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ii{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),so.subVectors(this.max,ts),yr.subVectors(e.a,ts),Sr.subVectors(e.b,ts),Mr.subVectors(e.c,ts),vi.subVectors(Sr,yr),yi.subVectors(Mr,Sr),Ui.subVectors(yr,Mr);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Oa(t,yr,Sr,Mr,so)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,yr,Sr,Mr,so))?!1:(oo.crossVectors(vi,yi),t=[oo.x,oo.y,oo.z],Oa(t,yr,Sr,Mr,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,ro=new Ii,yr=new O,Sr=new O,Mr=new O,vi=new O,yi=new O,Ui=new O,ts=new O,so=new O,oo=new O,Fi=new O;function Oa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fi.fromArray(i,s);const c=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),h=e.dot(Fi),u=t.dot(Fi),d=n.dot(Fi);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>c)return!1}return!0}const Tt=new O,ao=new ue;let Mm=0;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class Pf extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class If extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bm=new Ii,ns=new O,Ba=new O;class ar{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ns,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Ba)),this.expandByPoint(ns.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Em=0;const cn=new ct,za=new At,br=new O,tn=new Ii,is=new Ii,It=new O;class Et extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?If:Pf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];is.setFromBufferAttribute(c),this.morphTargetsRelative?(It.addVectors(tn.min,is.min),tn.expandByPoint(It),It.addVectors(tn.max,is.max),tn.expandByPoint(It)):(tn.expandByPoint(is.min),tn.expandByPoint(is.max))}tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],h=this.morphTargetsRelative;for(let u=0,d=c.count;u<d;u++)It.fromBufferAttribute(c,u),h&&(br.fromBufferAttribute(e,u),It.add(br)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],h=[];for(let S=0;S<n.count;S++)c[S]=new O,h[S]=new O;const u=new O,d=new O,a=new O,l=new ue,f=new ue,m=new ue,g=new O,_=new O;function p(S,E,N){u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),a.fromBufferAttribute(n,N),l.fromBufferAttribute(s,S),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,N),d.sub(u),a.sub(u),f.sub(l),m.sub(l);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(g.copy(d).multiplyScalar(m.y).addScaledVector(a,-f.y).multiplyScalar(L),_.copy(a).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(L),c[S].add(g),c[E].add(g),c[N].add(g),h[S].add(_),h[E].add(_),h[N].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,E=v.length;S<E;++S){const N=v[S],L=N.start,U=N.count;for(let V=L,Y=L+U;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new O,y=new O,A=new O,T=new O;function P(S){A.fromBufferAttribute(r,S),T.copy(A);const E=c[S];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(T,E);const L=y.dot(h[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,L)}for(let S=0,E=v.length;S<E;++S){const N=v[S],L=N.start,U=N.count;for(let V=L,Y=L+U;V<Y;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,f=n.count;l<f;l++)n.setXYZ(l,0,0,0);const r=new O,s=new O,o=new O,c=new O,h=new O,u=new O,d=new O,a=new O;if(e)for(let l=0,f=e.count;l<f;l+=3){const m=e.getX(l+0),g=e.getX(l+1),_=e.getX(l+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),d.subVectors(o,s),a.subVectors(r,s),d.cross(a),c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),c.add(d),h.add(d),u.add(d),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let l=0,f=t.count;l<f;l+=3)r.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),d.subVectors(o,s),a.subVectors(r,s),d.cross(a),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(c,h){const u=c.array,d=c.itemSize,a=c.normalized,l=new u.constructor(h.length*d);let f=0,m=0;for(let g=0,_=h.length;g<_;g++){c.isInterleavedBufferAttribute?f=h[g]*c.data.stride+c.offset:f=h[g]*d;for(let p=0;p<d;p++)l[m++]=u[f++]}return new Rn(l,d,a)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],u=e(h,n);t.setAttribute(c,u)}const s=this.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,a=u.length;d<a;d++){const l=u[d],f=e(l,n);h.push(f)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const u=n[h];e.data.attributes[h]=u.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],d=[];for(let a=0,l=u.length;a<l;a++){const f=u[a];d.push(f.toJSON(e.data))}d.length>0&&(r[h]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],a=s[u];for(let l=0,f=a.length;l<f;l++)d.push(a[l].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Tm=0;class Pn extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Br,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const c in s){const h=s[c];delete h.metadata,o.push(h)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new O,ka=new O,lo=new O,Si=new O,Va=new O,co=new O,Ga=new O;class Uc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ka.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lo),c=Si.dot(this.direction),h=-Si.dot(lo),u=Si.lengthSq(),d=Math.abs(1-o*o);let a,l,f,m;if(d>0)if(a=o*h-c,l=o*c-h,m=s*d,a>=0)if(l>=-m)if(l<=m){const g=1/d;a*=g,l*=g,f=a*(a+o*l+2*c)+l*(o*a+l+2*h)+u}else l=s,a=Math.max(0,-(o*l+c)),f=-a*a+l*(l+2*h)+u;else l=-s,a=Math.max(0,-(o*l+c)),f=-a*a+l*(l+2*h)+u;else l<=-m?(a=Math.max(0,-(-o*s+c)),l=a>0?-s:Math.min(Math.max(-s,-h),s),f=-a*a+l*(l+2*h)+u):l<=m?(a=0,l=Math.min(Math.max(-s,-h),s),f=l*(l+2*h)+u):(a=Math.max(0,-(o*s+c)),l=a>0?s:Math.min(Math.max(-s,-h),s),f=-a*a+l*(l+2*h)+u);else l=o>0?-s:s,a=Math.max(0,-(o*l+c)),f=-a*a+l*(l+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(ka).addScaledVector(lo,l),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,c,h;const u=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,l=this.origin;return u>=0?(n=(e.min.x-l.x)*u,r=(e.max.x-l.x)*u):(n=(e.max.x-l.x)*u,r=(e.min.x-l.x)*u),d>=0?(s=(e.min.y-l.y)*d,o=(e.max.y-l.y)*d):(s=(e.max.y-l.y)*d,o=(e.min.y-l.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),a>=0?(c=(e.min.z-l.z)*a,h=(e.max.z-l.z)*a):(c=(e.max.z-l.z)*a,h=(e.min.z-l.z)*a),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,r,s){Va.subVectors(t,e),co.subVectors(n,e),Ga.crossVectors(Va,co);let o=this.direction.dot(Ga),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Si.subVectors(this.origin,e);const h=c*this.direction.dot(co.crossVectors(Si,co));if(h<0)return null;const u=c*this.direction.dot(Va.cross(Si));if(u<0||h+u>o)return null;const d=-c*Si.dot(Ga);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fc extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nu=new ct,Oi=new Uc,uo=new ar,Uu=new O,ho=new O,fo=new O,po=new O,Ha=new O,mo=new O,Fu=new O,_o=new O;class je extends At{constructor(e=new Et,t=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){mo.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const d=c[h],a=s[h];d!==0&&(Ha.fromBufferAttribute(a,e),o?mo.addScaledVector(Ha,d):mo.addScaledVector(Ha.sub(t),d))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(uo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(uo,Uu)===null||Oi.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,c=s.index,h=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,a=s.attributes.normal,l=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(o))for(let m=0,g=l.length;m<g;m++){const _=l[m],p=o[_.materialIndex],v=Math.max(_.start,f.start),x=Math.min(c.count,Math.min(_.start+_.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const T=c.getX(y),P=c.getX(y+1),S=c.getX(y+2);r=go(this,p,e,n,u,d,a,T,P,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const v=c.getX(_),x=c.getX(_+1),y=c.getX(_+2);r=go(this,o,e,n,u,d,a,v,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let m=0,g=l.length;m<g;m++){const _=l[m],p=o[_.materialIndex],v=Math.max(_.start,f.start),x=Math.min(h.count,Math.min(_.start+_.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const T=y,P=y+1,S=y+2;r=go(this,p,e,n,u,d,a,T,P,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),g=Math.min(h.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const v=_,x=_+1,y=_+2;r=go(this,o,e,n,u,d,a,v,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function wm(i,e,t,n,r,s,o,c){let h;if(e.side===Jt?h=n.intersectTriangle(o,s,r,!0,c):h=n.intersectTriangle(r,s,o,e.side===Ci,c),h===null)return null;_o.copy(c),_o.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(_o);return u<t.near||u>t.far?null:{distance:u,point:_o.clone(),object:i}}function go(i,e,t,n,r,s,o,c,h,u){i.getVertexPosition(c,ho),i.getVertexPosition(h,fo),i.getVertexPosition(u,po);const d=wm(i,e,t,n,ho,fo,po,Fu);if(d){const a=new O;Tn.getBarycoord(Fu,ho,fo,po,a),r&&(d.uv=Tn.getInterpolatedAttribute(r,c,h,u,a,new ue)),s&&(d.uv1=Tn.getInterpolatedAttribute(s,c,h,u,a,new ue)),o&&(d.normal=Tn.getInterpolatedAttribute(o,c,h,u,a,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const l={a:c,b:h,c:u,normal:new O,materialIndex:0};Tn.getNormal(ho,fo,po,l.normal),d.face=l,d.barycoord=a}return d}class Lf extends Zt{constructor(e=null,t=1,n=1,r,s,o,c,h,u=Bt,d=Bt,a,l){super(null,o,c,h,u,d,r,s,a,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ou extends Rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new ct,Bu=new ct,xo=[],zu=new Ii,Am=new ct,rs=new je,ss=new ar;class Rm extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ou(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Am)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),zu.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(zu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),ss.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=r[o+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Er),Bu.multiplyMatrices(n,Er),rs.matrixWorld=Bu,rs.raycast(e,xo);for(let o=0,c=xo.length;o<c;o++){const h=xo[o];h.instanceId=s,h.object=this,t.push(h)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lf(new Float32Array(r*this.count),r,this.count,wc,wn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const c=this.geometry.morphTargetsRelative?1:1-o,h=r*e;s[h]=c,s.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wa=new O,Cm=new O,Pm=new qe;class Gi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Wa.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pm.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ar,Im=new ue(.5,.5),vo=new O;class Oc{constructor(e=new Gi,t=new Gi,n=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],h=s[2],u=s[3],d=s[4],a=s[5],l=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],v=s[12],x=s[13],y=s[14],A=s[15];if(r[0].setComponents(u-o,f-d,p-m,A-v).normalize(),r[1].setComponents(u+o,f+d,p+m,A+v).normalize(),r[2].setComponents(u+c,f+a,p+g,A+x).normalize(),r[3].setComponents(u-c,f-a,p-g,A-x).normalize(),n)r[4].setComponents(h,l,_,y).normalize(),r[5].setComponents(u-h,f-l,p-_,A-y).normalize();else if(r[4].setComponents(u-h,f-l,p-_,A-y).normalize(),t===zn)r[5].setComponents(u+h,f+l,p+_,A+y).normalize();else if(t===Us)r[5].setComponents(h,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Im.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new O,ea=new O,ku=new ct,os=new Uc,yo=new ar,Xa=new O,Vu=new O;class Lm extends At{constructor(e=new Et,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Qo.fromBufferAttribute(t,r-1),ea.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Qo.distanceTo(ea);e.setAttribute("lineDistance",new Qe(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;ku.copy(r).invert(),os.copy(e.ray).applyMatrix4(ku);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,u=this.isLineSegments?2:1,d=n.index,l=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m-1;g<_;g+=u){const p=d.getX(g),v=d.getX(g+1),x=So(this,e,os,h,p,v,g);x&&t.push(x)}if(this.isLineLoop){const g=d.getX(m-1),_=d.getX(f),p=So(this,e,os,h,g,_,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m-1;g<_;g+=u){const p=So(this,e,os,h,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=So(this,e,os,h,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function So(i,e,t,n,r,s,o){const c=i.geometry.attributes.position;if(Qo.fromBufferAttribute(c,r),ea.fromBufferAttribute(c,s),t.distanceSqToSegment(Qo,ea,Xa,Vu)>n)return;Xa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Xa);if(!(u<e.near||u>e.far))return{distance:u,point:Vu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Gu=new O,Hu=new O;class Wu extends Lm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Gu.fromBufferAttribute(t,r),Hu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Gu.distanceTo(Hu);e.setAttribute("lineDistance",new Qe(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ds extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xu=new ct,lc=new Uc,Mo=new ar,bo=new O;class qa extends At{constructor(e=new Et,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Xu.copy(r).invert(),lc.copy(e.ray).applyMatrix4(Xu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,u=n.index,a=n.attributes.position;if(u!==null){const l=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=l,g=f;m<g;m++){const _=u.getX(m);bo.fromBufferAttribute(a,_),qu(bo,_,h,r,e,t,this)}}else{const l=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let m=l,g=f;m<g;m++)bo.fromBufferAttribute(a,m),qu(bo,m,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function qu(i,e,t,n,r,s,o){const c=lc.distanceSqToPoint(i);if(c<t){const h=new O;lc.closestPointToPoint(i,h),h.applyMatrix4(n);const u=r.ray.origin.distanceTo(h);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Df extends Zt{constructor(e=[],t=rr,n,r,s,o,c,h,u,d){super(e,t,n,r,s,o,c,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends Zt{constructor(e,t,n=Wn,r,s,o,c=Bt,h=Bt,u,d=hi,a=1){if(d!==hi&&d!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:e,height:t,depth:a};super(l,r,s,o,c,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dm extends Os{constructor(e,t=Wn,n=rr,r,s,o=Bt,c=Bt,h,u=hi){const d={width:e,height:e,depth:1},a=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,c,h,u),this.image=a,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nf extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lr extends Et{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],a=[];let l=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(a,2));function m(g,_,p,v,x,y,A,T,P,S,E){const N=y/P,L=A/S,U=y/2,V=A/2,Y=T/2,z=P+1,H=S+1;let F=0,$=0;const ie=new O;for(let he=0;he<H;he++){const ve=he*L-V;for(let pe=0;pe<z;pe++){const Ue=pe*N-U;ie[g]=Ue*v,ie[_]=ve*x,ie[p]=Y,u.push(ie.x,ie.y,ie.z),ie[g]=0,ie[_]=0,ie[p]=T>0?1:-1,d.push(ie.x,ie.y,ie.z),a.push(pe/P),a.push(1-he/S),F+=1}}for(let he=0;he<S;he++)for(let ve=0;ve<P;ve++){const pe=l+ve+z*he,Ue=l+ve+z*(he+1),K=l+(ve+1)+z*(he+1),k=l+(ve+1)+z*he;h.push(pe,Ue,k),h.push(Ue,K,k),$+=6}c.addGroup(f,$,E),f+=$,l+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cr extends Et{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:h};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],a=[],l=[],f=[];let m=0;const g=[],_=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(f,2));function v(){const y=new O,A=new O;let T=0;const P=(t-e)/n;for(let S=0;S<=s;S++){const E=[],N=S/s,L=N*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,Y=V*h+c,z=Math.sin(Y),H=Math.cos(Y);A.x=L*z,A.y=-N*n+_,A.z=L*H,a.push(A.x,A.y,A.z),y.set(z,P,H).normalize(),l.push(y.x,y.y,y.z),f.push(V,1-N),E.push(m++)}g.push(E)}for(let S=0;S<r;S++)for(let E=0;E<s;E++){const N=g[E][S],L=g[E+1][S],U=g[E+1][S+1],V=g[E][S+1];(e>0||E!==0)&&(d.push(N,L,V),T+=3),(t>0||E!==s-1)&&(d.push(L,U,V),T+=3)}u.addGroup(p,T,0),p+=T}function x(y){const A=m,T=new ue,P=new O;let S=0;const E=y===!0?e:t,N=y===!0?1:-1;for(let U=1;U<=r;U++)a.push(0,_*N,0),l.push(0,N,0),f.push(.5,.5),m++;const L=m;for(let U=0;U<=r;U++){const Y=U/r*h+c,z=Math.cos(Y),H=Math.sin(Y);P.x=E*H,P.y=_*N,P.z=E*z,a.push(P.x,P.y,P.z),l.push(0,N,0),T.x=z*.5+.5,T.y=H*.5*N+.5,f.push(T.x,T.y),m++}for(let U=0;U<r;U++){const V=A+U,Y=L+U;y===!0?d.push(Y,Y+1,V):d.push(Y+1,Y,V),S+=3}u.addGroup(p,S,y===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qs extends cr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,r,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bc extends Et{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];c(r),u(n),d(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(v){const x=new O,y=new O,A=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],y),f(t[T+2],A),h(x,y,A,v)}function h(v,x,y,A){const T=A+1,P=[];for(let S=0;S<=T;S++){P[S]=[];const E=v.clone().lerp(y,S/T),N=x.clone().lerp(y,S/T),L=T-S;for(let U=0;U<=L;U++)U===0&&S===T?P[S][U]=E:P[S][U]=E.clone().lerp(N,U/L)}for(let S=0;S<T;S++)for(let E=0;E<2*(T-S)-1;E++){const N=Math.floor(E/2);E%2===0?(l(P[S][N+1]),l(P[S+1][N]),l(P[S][N])):(l(P[S][N+1]),l(P[S+1][N+1]),l(P[S+1][N]))}}function u(v){const x=new O;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function d(){const v=new O;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=_(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(y,1-A)}m(),a()}function a(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],A=o[v+4],T=Math.max(x,y,A),P=Math.min(x,y,A);T>.9&&P<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function l(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){const v=new O,x=new O,y=new O,A=new O,T=new ue,P=new ue,S=new ue;for(let E=0,N=0;E<s.length;E+=9,N+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),T.set(o[N+0],o[N+1]),P.set(o[N+2],o[N+3]),S.set(o[N+4],o[N+5]),A.copy(v).add(x).add(y).divideScalar(3);const L=_(A);g(T,N+0,v,L),g(P,N+2,x,L),g(S,N+4,y,L)}}function g(v,x,y,A){A<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=A/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.vertices,e.indices,e.radius,e.detail)}}class ta extends Bc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ta(e.radius,e.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,h=s-1,u;for(;c<=h;)if(r=Math.floor(c+(h-c)/2),u=n[r]-o,u<0)c=r+1;else if(u>0)h=r-1;else{h=r;break}if(r=h,n[r]===o)return r/(s-1);const d=n[r],l=n[r+1]-d,f=(o-d)/l;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),c=this.getPoint(s),h=t||(o.isVector2?new ue:new O);return h.copy(c).sub(o).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],s=[],o=[],c=new O,h=new ct;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new O)}s[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const d=Math.abs(r[0].x),a=Math.abs(r[0].y),l=Math.abs(r[0].z);d<=u&&(u=d,n.set(1,0,0)),a<=u&&(u=a,n.set(0,1,0)),l<=u&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],c),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),c.crossVectors(r[f-1],r[f]),c.length()>Number.EPSILON){c.normalize();const m=Math.acos(Ke(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(c,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ke(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(c.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(h.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zc extends qn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new ue){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const c=this.aStartAngle+e*s;let h=this.aX+this.xRadius*Math.cos(c),u=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),a=Math.sin(this.aRotation),l=h-this.aX,f=u-this.aY;h=l*d-f*a+this.aX,u=l*a+f*d+this.aY}return n.set(h,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nm extends zc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let i=0,e=0,t=0,n=0;function r(s,o,c,h){i=s,e=c,t=-3*s+3*o-2*c-h,n=2*s-2*o+c+h}return{initCatmullRom:function(s,o,c,h,u){r(o,c,u*(c-s),u*(h-o))},initNonuniformCatmullRom:function(s,o,c,h,u,d,a){let l=(o-s)/u-(c-s)/(u+d)+(c-o)/d,f=(c-o)/d-(h-o)/(d+a)+(h-c)/a;l*=d,f*=d,r(o,c,l,f)},calc:function(s){const o=s*s,c=o*s;return i+e*s+t*o+n*c}}}const Eo=new O,Ya=new kc,$a=new kc,ja=new kc;class Vc extends qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),h=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1);let u,d;this.closed||c>0?u=r[(c-1)%s]:(Eo.subVectors(r[0],r[1]).add(r[0]),u=Eo);const a=r[c%s],l=r[(c+1)%s];if(this.closed||c+2<s?d=r[(c+2)%s]:(Eo.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(a),f),g=Math.pow(a.distanceToSquared(l),f),_=Math.pow(l.distanceToSquared(d),f);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),Ya.initNonuniformCatmullRom(u.x,a.x,l.x,d.x,m,g,_),$a.initNonuniformCatmullRom(u.y,a.y,l.y,d.y,m,g,_),ja.initNonuniformCatmullRom(u.z,a.z,l.z,d.z,m,g,_)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(u.x,a.x,l.x,d.x,this.tension),$a.initCatmullRom(u.y,a.y,l.y,d.y,this.tension),ja.initCatmullRom(u.z,a.z,l.z,d.z,this.tension));return n.set(Ya.calc(h),$a.calc(h),ja.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,c=i*i,h=i*c;return(2*t-2*n+s+o)*h+(-3*t+3*n-2*s-o)*c+s*i+t}function Um(i,e){const t=1-i;return t*t*e}function Fm(i,e){return 2*(1-i)*i*e}function Om(i,e){return i*i*e}function Ms(i,e,t,n){return Um(i,e)+Fm(i,t)+Om(i,n)}function Bm(i,e){const t=1-i;return t*t*t*e}function zm(i,e){const t=1-i;return 3*t*t*i*e}function km(i,e){return 3*(1-i)*i*i*e}function Vm(i,e){return i*i*i*e}function bs(i,e,t,n,r){return Bm(i,e)+zm(i,t)+km(i,n)+Vm(i,r)}class Uf extends qn{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(bs(e,r.x,s.x,o.x,c.x),bs(e,r.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gm extends qn{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(bs(e,r.x,s.x,o.x,c.x),bs(e,r.y,s.y,o.y,c.y),bs(e,r.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ff extends qn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hm extends qn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Of extends qn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ms(e,r.x,s.x,o.x),Ms(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends qn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ms(e,r.x,s.x,o.x),Ms(e,r.y,s.y,o.y),Ms(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),c=s-o,h=r[o===0?o:o-1],u=r[o],d=r[o>r.length-2?r.length-1:o+1],a=r[o>r.length-3?r.length-1:o+2];return n.set(Yu(c,h.x,u.x,d.x,a.x),Yu(c,h.y,u.y,d.y,a.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var na=Object.freeze({__proto__:null,ArcCurve:Nm,CatmullRomCurve3:Vc,CubicBezierCurve:Uf,CubicBezierCurve3:Gm,EllipseCurve:zc,LineCurve:Ff,LineCurve3:Hm,QuadraticBezierCurve:Of,QuadraticBezierCurve3:Bf,SplineCurve:zf});class Wm extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,c=this.curves[s],h=c.getLength(),u=h===0?0:1-o/h;return c.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,h=o.getPoints(c);for(let u=0;u<h.length;u++){const d=h[u];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new na[r.type]().fromJSON(r))}return this}}class kr extends Wm{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ff(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Of(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const c=new Uf(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+c,t+h,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,c,h){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+u,t+d,n,r,s,o,c,h),this}absellipse(e,t,n,r,s,o,c,h){const u=new zc(e,t,n,r,s,o,c,h);if(this.curves.length>0){const a=u.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(u);const d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tr extends kr{constructor(e){super(e),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new kr().fromJSON(r))}return this}}function Xm(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=kf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,h,u;if(n&&(s=Zm(i,e,s,t)),i.length>80*t){c=i[0],h=i[1];let d=c,a=h;for(let l=t;l<r;l+=t){const f=i[l],m=i[l+1];f<c&&(c=f),m<h&&(h=m),f>d&&(d=f),m>a&&(a=m)}u=Math.max(d-c,a-h),u=u!==0?32767/u:0}return Bs(s,o,t,c,h,u,0),o}function kf(i,e,t,n,r){let s;if(r===a_(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=$u(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=$u(o/n|0,i[o],i[o+1],s);return s&&$r(s,s.next)&&(ks(s),s=s.next),s}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($r(t,t.next)||xt(t.prev,t,t.next)===0)){if(ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&t_(i,n,r,s);let c=i;for(;i.prev!==i.next;){const h=i.prev,u=i.next;if(s?Ym(i,n,r,s):qm(i)){e.push(h.i,i.i,u.i),ks(i),i=u.next,c=u.next;continue}if(i=u,i===c){o?o===1?(i=$m(sr(i),e),Bs(i,e,t,n,r,s,2)):o===2&&jm(i,e,t,n,r,s):Bs(sr(i),e,t,n,r,s,1);break}}}function qm(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,c=e.y,h=t.y,u=n.y,d=Math.min(r,s,o),a=Math.min(c,h,u),l=Math.max(r,s,o),f=Math.max(c,h,u);let m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=l&&m.y>=a&&m.y<=f&&ps(r,c,s,h,o,u,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ym(i,e,t,n){const r=i.prev,s=i,o=i.next;if(xt(r,s,o)>=0)return!1;const c=r.x,h=s.x,u=o.x,d=r.y,a=s.y,l=o.y,f=Math.min(c,h,u),m=Math.min(d,a,l),g=Math.max(c,h,u),_=Math.max(d,a,l),p=cc(f,m,e,t,n),v=cc(g,_,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=_&&x!==r&&x!==o&&ps(c,d,h,a,u,l,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=g&&y.y>=m&&y.y<=_&&y!==r&&y!==o&&ps(c,d,h,a,u,l,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=_&&x!==r&&x!==o&&ps(c,d,h,a,u,l,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=_&&y!==r&&y!==o&&ps(c,d,h,a,u,l,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $m(i,e){let t=i;do{const n=t.prev,r=t.next.next;!$r(n,r)&&Gf(n,t,t.next,r)&&zs(n,r)&&zs(r,n)&&(e.push(n.i,t.i,r.i),ks(t),ks(t.next),t=i=r),t=t.next}while(t!==i);return sr(t)}function jm(i,e,t,n,r,s){let o=i;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&r_(o,c)){let h=Hf(o,c);o=sr(o,o.next),h=sr(h,h.next),Bs(o,e,t,n,r,s,0),Bs(h,e,t,n,r,s,0);return}c=c.next}o=o.next}while(o!==i)}function Zm(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const c=e[s]*n,h=s<o-1?e[s+1]*n:i.length,u=kf(i,c,h,n,!1);u===u.next&&(u.steiner=!0),r.push(i_(u))}r.sort(Km);for(let s=0;s<r.length;s++)t=Jm(r[s],t);return t}function Km(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Jm(i,e){const t=Qm(i,e);if(!t)return e;const n=Hf(t,i);return sr(n,n.next),sr(t,t.next)}function Qm(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if($r(i,t))return t;do{if($r(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const a=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;const c=o,h=o.x,u=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=h&&n!==t.x&&Vf(r<u?n:s,r,h,u,r<u?s:n,r,t.x,t.y)){const a=Math.abs(r-t.y)/(n-t.x);zs(t,i)&&(a<d||a===d&&(t.x>o.x||t.x===o.x&&e_(o,t)))&&(o=t,d=a)}t=t.next}while(t!==c);return o}function e_(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function t_(i,e,t,n){let r=i;do r.z===0&&(r.z=cc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,n_(r)}function n_(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,c=0;for(let u=0;u<t&&(c++,o=o.nextZ,!!o);u++);let h=t;for(;c>0||h>0&&o;)c!==0&&(h===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,c--):(r=o,o=o.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function cc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function i_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vf(i,e,t,n,r,s,o,c){return(r-o)*(e-c)>=(i-o)*(s-c)&&(i-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(r-o)*(n-c)}function ps(i,e,t,n,r,s,o,c){return!(i===o&&e===c)&&Vf(i,e,t,n,r,s,o,c)}function r_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!s_(i,e)&&(zs(i,e)&&zs(e,i)&&o_(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||$r(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $r(i,e){return i.x===e.x&&i.y===e.y}function Gf(i,e,t,n){const r=wo(xt(i,e,t)),s=wo(xt(i,e,n)),o=wo(xt(t,n,i)),c=wo(xt(t,n,e));return!!(r!==s&&o!==c||r===0&&To(i,t,e)||s===0&&To(i,n,e)||o===0&&To(t,i,n)||c===0&&To(t,e,n))}function To(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wo(i){return i>0?1:i<0?-1:0}function s_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zs(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function o_(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hf(i,e){const t=uc(i.i,i.x,i.y),n=uc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function $u(i,e,t,n){const r=uc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class l_{static triangulate(e,t,n=2){return Xm(e,t,n)}}class Ei{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ei.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ju(e),Zu(n,e);let o=e.length;t.forEach(ju);for(let h=0;h<t.length;h++)r.push(o),o+=t[h].length,Zu(n,t[h]);const c=l_.triangulate(n,r);for(let h=0;h<c.length;h+=3)s.push(c.slice(h,h+3));return s}}function ju(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Dr extends Et{constructor(e=new tr([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];o(u)}this.setAttribute("position",new Qe(r,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function o(c){const h=[],u=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,a=t.depth!==void 0?t.depth:1;let l=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:c_;let x,y=!1,A,T,P,S;if(p){x=p.getSpacedPoints(d),y=!0,l=!1;const G=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(d,G),T=new O,P=new O,S=new O}l||(_=0,f=0,m=0,g=0);const E=c.extractPoints(u);let N=E.shape;const L=E.holes;if(!Ei.isClockWise(N)){N=N.reverse();for(let G=0,X=L.length;G<X;G++){const J=L[G];Ei.isClockWise(J)&&(L[G]=J.reverse())}}function V(G){const J=10000000000000001e-36;let ne=G[0];for(let b=1;b<=G.length;b++){const D=b%G.length,ce=G[D],Me=ce.x-ne.x,_e=ce.y-ne.y,I=Me*Me+_e*_e,M=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(ne.x),Math.abs(ne.y)),W=J*M*M;if(I<=W){G.splice(D,1),b--;continue}ne=ce}}V(N),L.forEach(V);const Y=L.length,z=N;for(let G=0;G<Y;G++){const X=L[G];N=N.concat(X)}function H(G,X,J){return X||et("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(X,J)}const F=N.length;function $(G,X,J){let ne,b,D;const ce=G.x-X.x,Me=G.y-X.y,_e=J.x-G.x,I=J.y-G.y,M=ce*ce+Me*Me,W=ce*I-Me*_e;if(Math.abs(W)>Number.EPSILON){const re=Math.sqrt(M),fe=Math.sqrt(_e*_e+I*I),oe=X.x-Me/re,Pe=X.y+ce/re,xe=J.x-I/fe,Le=J.y+_e/fe,Oe=((xe-oe)*I-(Le-Pe)*_e)/(ce*I-Me*_e);ne=oe+ce*Oe-G.x,b=Pe+Me*Oe-G.y;const ge=ne*ne+b*b;if(ge<=2)return new ue(ne,b);D=Math.sqrt(ge/2)}else{let re=!1;ce>Number.EPSILON?_e>Number.EPSILON&&(re=!0):ce<-Number.EPSILON?_e<-Number.EPSILON&&(re=!0):Math.sign(Me)===Math.sign(I)&&(re=!0),re?(ne=-Me,b=ce,D=Math.sqrt(M)):(ne=ce,b=Me,D=Math.sqrt(M/2))}return new ue(ne/D,b/D)}const ie=[];for(let G=0,X=z.length,J=X-1,ne=G+1;G<X;G++,J++,ne++)J===X&&(J=0),ne===X&&(ne=0),ie[G]=$(z[G],z[J],z[ne]);const he=[];let ve,pe=ie.concat();for(let G=0,X=Y;G<X;G++){const J=L[G];ve=[];for(let ne=0,b=J.length,D=b-1,ce=ne+1;ne<b;ne++,D++,ce++)D===b&&(D=0),ce===b&&(ce=0),ve[ne]=$(J[ne],J[D],J[ce]);he.push(ve),pe=pe.concat(ve)}let Ue;if(_===0)Ue=Ei.triangulateShape(z,L);else{const G=[],X=[];for(let J=0;J<_;J++){const ne=J/_,b=f*Math.cos(ne*Math.PI/2),D=m*Math.sin(ne*Math.PI/2)+g;for(let ce=0,Me=z.length;ce<Me;ce++){const _e=H(z[ce],ie[ce],D);le(_e.x,_e.y,-b),ne===0&&G.push(_e)}for(let ce=0,Me=Y;ce<Me;ce++){const _e=L[ce];ve=he[ce];const I=[];for(let M=0,W=_e.length;M<W;M++){const re=H(_e[M],ve[M],D);le(re.x,re.y,-b),ne===0&&I.push(re)}ne===0&&X.push(I)}}Ue=Ei.triangulateShape(G,X)}const K=Ue.length,k=m+g;for(let G=0;G<F;G++){const X=l?H(N[G],pe[G],k):N[G];y?(P.copy(A.normals[0]).multiplyScalar(X.x),T.copy(A.binormals[0]).multiplyScalar(X.y),S.copy(x[0]).add(P).add(T),le(S.x,S.y,S.z)):le(X.x,X.y,0)}for(let G=1;G<=d;G++)for(let X=0;X<F;X++){const J=l?H(N[X],pe[X],k):N[X];y?(P.copy(A.normals[G]).multiplyScalar(J.x),T.copy(A.binormals[G]).multiplyScalar(J.y),S.copy(x[G]).add(P).add(T),le(S.x,S.y,S.z)):le(J.x,J.y,a/d*G)}for(let G=_-1;G>=0;G--){const X=G/_,J=f*Math.cos(X*Math.PI/2),ne=m*Math.sin(X*Math.PI/2)+g;for(let b=0,D=z.length;b<D;b++){const ce=H(z[b],ie[b],ne);le(ce.x,ce.y,a+J)}for(let b=0,D=L.length;b<D;b++){const ce=L[b];ve=he[b];for(let Me=0,_e=ce.length;Me<_e;Me++){const I=H(ce[Me],ve[Me],ne);y?le(I.x,I.y+x[d-1].y,x[d-1].x+J):le(I.x,I.y,a+J)}}}w(),R();function w(){const G=r.length/3;if(l){let X=0,J=F*X;for(let ne=0;ne<K;ne++){const b=Ue[ne];B(b[2]+J,b[1]+J,b[0]+J)}X=d+_*2,J=F*X;for(let ne=0;ne<K;ne++){const b=Ue[ne];B(b[0]+J,b[1]+J,b[2]+J)}}else{for(let X=0;X<K;X++){const J=Ue[X];B(J[2],J[1],J[0])}for(let X=0;X<K;X++){const J=Ue[X];B(J[0]+F*d,J[1]+F*d,J[2]+F*d)}}n.addGroup(G,r.length/3-G,0)}function R(){const G=r.length/3;let X=0;j(z,X),X+=z.length;for(let J=0,ne=L.length;J<ne;J++){const b=L[J];j(b,X),X+=b.length}n.addGroup(G,r.length/3-G,1)}function j(G,X){let J=G.length;for(;--J>=0;){const ne=J;let b=J-1;b<0&&(b=G.length-1);for(let D=0,ce=d+_*2;D<ce;D++){const Me=F*D,_e=F*(D+1),I=X+ne+Me,M=X+b+Me,W=X+b+_e,re=X+ne+_e;Q(I,M,W,re)}}}function le(G,X,J){h.push(G),h.push(X),h.push(J)}function B(G,X,J){me(G),me(X),me(J);const ne=r.length/3,b=v.generateTopUV(n,r,ne-3,ne-2,ne-1);de(b[0]),de(b[1]),de(b[2])}function Q(G,X,J,ne){me(G),me(X),me(ne),me(X),me(J),me(ne);const b=r.length/3,D=v.generateSideWallUV(n,r,b-6,b-3,b-2,b-1);de(D[0]),de(D[1]),de(D[3]),de(D[1]),de(D[2]),de(D[3])}function me(G){r.push(h[G*3+0]),r.push(h[G*3+1]),r.push(h[G*3+2])}function de(G){s.push(G.x),s.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return u_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new na[r.type]().fromJSON(r)),new Dr(n,e.options)}}const c_={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],c=e[n*3],h=e[n*3+1],u=e[r*3],d=e[r*3+1];return[new ue(s,o),new ue(c,h),new ue(u,d)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],c=e[t*3+1],h=e[t*3+2],u=e[n*3],d=e[n*3+1],a=e[n*3+2],l=e[r*3],f=e[r*3+1],m=e[r*3+2],g=e[s*3],_=e[s*3+1],p=e[s*3+2];return Math.abs(c-d)<Math.abs(o-u)?[new ue(o,1-h),new ue(u,1-a),new ue(l,1-m),new ue(g,1-p)]:[new ue(c,1-h),new ue(d,1-a),new ue(f,1-m),new ue(_,1-p)]}};function u_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jr extends Et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(n),h=Math.floor(r),u=c+1,d=h+1,a=e/c,l=t/h,f=[],m=[],g=[],_=[];for(let p=0;p<d;p++){const v=p*l-o;for(let x=0;x<u;x++){const y=x*a-s;m.push(y,-v,0),g.push(0,0,1),_.push(x/c),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let v=0;v<c;v++){const x=v+u*p,y=v+u*(p+1),A=v+1+u*(p+1),T=v+1+u*p;f.push(x,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vs extends Et{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(o+c,Math.PI);let u=0;const d=[],a=new O,l=new O,f=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&h===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const T=A/t;a.x=-e*Math.cos(r+T*s)*Math.sin(o+x*c),a.y=e*Math.cos(o+x*c),a.z=e*Math.sin(r+T*s)*Math.sin(o+x*c),m.push(a.x,a.y,a.z),l.copy(a).normalize(),g.push(l.x,l.y,l.z),_.push(T+y,1-x),v.push(u++)}d.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=d[p][v+1],y=d[p][v],A=d[p+1][v],T=d[p+1][v+1];(p!==0||o>0)&&f.push(x,y,T),(p!==n-1||h<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gc extends Et{constructor(e=new Bf(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new O,h=new O,u=new ue;let d=new O;const a=[],l=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(f,2));function g(){for(let x=0;x<t;x++)_(x);_(s===!1?t:0),v(),p()}function _(x){d=e.getPointAt(x/t,d);const y=o.normals[x],A=o.binormals[x];for(let T=0;T<=r;T++){const P=T/r*Math.PI*2,S=Math.sin(P),E=-Math.cos(P);h.x=E*y.x+S*A.x,h.y=E*y.y+S*A.y,h.z=E*y.z+S*A.z,h.normalize(),l.push(h.x,h.y,h.z),c.x=d.x+n*h.x,c.y=d.y+n*h.y,c.z=d.z+n*h.z,a.push(c.x,c.y,c.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const A=(r+1)*(x-1)+(y-1),T=(r+1)*x+(y-1),P=(r+1)*x+y,S=(r+1)*(x-1)+y;m.push(A,T,S),m.push(T,P,S)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)u.x=x/t,u.y=y/r,f.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gc(new na[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Zr(i[t]);for(const r in n)e[r]=n[r]}return e}function h_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const f_={clone:Zr,merge:Wt};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class m_ extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class __ extends Pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g_ extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x_ extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ku={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ju(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ju(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ju(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class v_{constructor(e,t,n){const r=this;let s=!1,o=0,c=0,h;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){c++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,c),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,a){return u.push(d,a),this},this.removeHandler=function(d){const a=u.indexOf(d);return a!==-1&&u.splice(a,2),this},this.getHandler=function(d){for(let a=0,l=u.length;a<l;a+=2){const f=u[a],m=u[a+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const y_=new v_;class ha{constructor(e){this.manager=e!==void 0?e:y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class S_ extends Error{constructor(e,t){super(e),this.response=t}}class Xf extends ha{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ku.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,h=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=ei[e],a=u.body.getReader(),l=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=l?parseInt(l):0,m=f!==0;let g=0;const _=new ReadableStream({start(p){v();function v(){a.read().then(({done:x,value:y})=>{if(x)p.close();else{g+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let T=0,P=d.length;T<P;T++){const S=d[T];S.onProgress&&S.onProgress(A)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(_)}else throw new S_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return u.json();default:if(c==="")return u.text();{const a=/charset="?([^;"\s]*)"?/i.exec(c),l=a&&a[1]?a[1].toLowerCase():void 0,f=new TextDecoder(l);return u.arrayBuffer().then(m=>f.decode(m))}}}).then(u=>{Ku.add(`file:${e}`,u);const d=ei[e];delete ei[e];for(let a=0,l=d.length;a<l;a++){const f=d[a];f.onLoad&&f.onLoad(u)}}).catch(u=>{const d=ei[e];if(d===void 0)throw this.manager.itemError(e),u;delete ei[e];for(let a=0,l=d.length;a<l;a++){const f=d[a];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qf extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Za=new ct,Qu=new O,eh=new O;class M_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Us||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ao=new O,Ro=new Gn,Dn=new O;class Yf extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ao,Ro,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ao,Ro,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new O,th=new ue,nh=new ue;class fn extends Yf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/h,t-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hc extends Yf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,c-=d*this.view.offsetY,h=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class b_ extends M_{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E_ extends qf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new b_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class T_ extends qf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Tr=-90,wr=1;class w_ extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Tr,wr,e,t);r.layers=this.layers,this.add(r);const s=new fn(Tr,wr,e,t);s.layers=this.layers,this.add(s);const o=new fn(Tr,wr,e,t);o.layers=this.layers,this.add(o);const c=new fn(Tr,wr,e,t);c.layers=this.layers,this.add(c);const h=new fn(Tr,wr,e,t);h.layers=this.layers,this.add(h);const u=new fn(Tr,wr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,c,h]=t;for(const u of t)this.remove(u);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,h,u,d]=this.children,a=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,l,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class A_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ih=new ue;class R_{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ih.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ih).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class zi{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new kr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let x=0,y=p.length;x<y;x++){const A=p[x],T=new tr;T.curves=A.curves,v.push(T)}return v}function n(p,v){const x=v.length;let y=!1;for(let A=x-1,T=0;T<x;A=T++){let P=v[A],S=v[T],E=S.x-P.x,N=S.y-P.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(P=v[T],E=-E,S=v[A],N=-N),p.y<P.y||p.y>S.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const L=N*(p.x-P.x)-E*(p.y-P.y);if(L===0)return!0;if(L<0)continue;y=!y}}else{if(p.y!==P.y)continue;if(S.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=S.x)return!0}}return y}const r=Ei.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,h;const u=[];if(s.length===1)return c=s[0],h=new tr,h.curves=c.curves,u.push(h),u;let d=!r(s[0].getPoints());d=e?!d:d;const a=[],l=[];let f=[],m=0,g;l[m]=void 0,f[m]=[];for(let p=0,v=s.length;p<v;p++)c=s[p],g=c.getPoints(),o=r(g),o=e?!o:o,o?(!d&&l[m]&&m++,l[m]={s:new tr,p:g},l[m].s.curves=c.curves,d&&m++,f[m]=[]):f[m].push({h:c,p:g[0]});if(!l[0])return t(s);if(l.length>1){let p=!1,v=0;for(let x=0,y=l.length;x<y;x++)a[x]=[];for(let x=0,y=l.length;x<y;x++){const A=f[x];for(let T=0;T<A.length;T++){const P=A[T];let S=!0;for(let E=0;E<l.length;E++)n(P.p,l[E].p)&&(x!==E&&v++,S?(S=!1,a[E].push(P)):p=!0);S&&a[x].push(P)}}v>0&&p===!1&&(f=a)}let _;for(let p=0,v=l.length;p<v;p++){h=l[p].s,u.push(h),_=f[p];for(let x=0,y=_.length;x<y;x++)h.holes.push(_[x].h)}return u}}function rh(i,e,t,n){const r=C_(n);switch(t){case Ef:return i*e;case wc:return i*e/r.components*r.byteLength;case Ac:return i*e/r.components*r.byteLength;case qr:return i*e*2/r.components*r.byteLength;case Rc:return i*e*2/r.components*r.byteLength;case Tf:return i*e*3/r.components*r.byteLength;case An:return i*e*4/r.components*r.byteLength;case Cc:return i*e*4/r.components*r.byteLength;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Pl:case Ll:return Math.max(i,8)*Math.max(e,8)/2;case Nl:case Ul:case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:case zl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(i){switch(i){case an:case yf:return{byteLength:1,components:1};case Ds:case Sf:case ui:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Wn:case bc:case wn:return{byteLength:4,components:1};case Mf:case bf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function $f(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function P_(i){const e=new WeakMap;function t(c,h){const u=c.array,d=c.usage,a=u.byteLength,l=i.createBuffer();i.bindBuffer(h,l),i.bufferData(h,u,d),c.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:a}}function n(c,h,u){const d=h.array,a=h.updateRanges;if(i.bindBuffer(u,c),a.length===0)i.bufferSubData(u,0,d);else{a.sort((f,m)=>f.start-m.start);let l=0;for(let f=1;f<a.length;f++){const m=a[l],g=a[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++l,a[l]=g)}a.length=l+1;for(let f=0,m=a.length;f<m;f++){const g=a[f];i.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,h),u.version=c.version}}return{get:r,remove:s,update:o}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
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
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,X_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
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
#endif`,Cg=`uniform sampler2D dfgLUT;
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
}`,Pg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,ex=`#define STANDARD
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
}`,tx=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,rx=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:I_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:N_,alphatest_fragment:U_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:k_,begin_vertex:V_,beginnormal_vertex:G_,bsdfs:H_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:j_,color_fragment:Z_,color_pars_fragment:K_,color_pars_vertex:J_,color_vertex:Q_,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:rg,emissivemap_fragment:sg,emissivemap_pars_fragment:og,colorspace_fragment:ag,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:bg,envmap_vertex:dg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:_g,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:vg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Mg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:wg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Pg,lights_fragment_maps:Ig,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Hg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:jg,normal_pars_fragment:Zg,normal_pars_vertex:Kg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:o0,project_vertex:a0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:_0,skinning_pars_vertex:g0,skinning_vertex:x0,skinnormal_vertex:v0,specularmap_fragment:y0,specularmap_pars_fragment:S0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:E0,transmission_pars_fragment:T0,uv_pars_fragment:w0,uv_pars_vertex:A0,uv_vertex:R0,worldpos_vertex:C0,background_vert:P0,background_frag:I0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:N0,cube_frag:U0,depth_vert:F0,depth_frag:O0,distance_vert:B0,distance_frag:z0,equirect_vert:k0,equirect_frag:V0,linedashed_vert:G0,linedashed_frag:H0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:$0,meshmatcap_frag:j0,meshnormal_vert:Z0,meshnormal_frag:K0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:rx,points_frag:sx,shadow_vert:ox,shadow_frag:ax,sprite_vert:lx,sprite_frag:cx},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([Ae.points,Ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([Ae.common,Ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([Ae.sprite,Ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Wt([Ae.common,Ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Wt([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fn.physical={uniforms:Wt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Co={r:0,b:0,g:0},ki=new _n,ux=new ct;function hx(i,e,t,n,r,s){const o=new Je(0);let c=r===!0?0:1,h,u,d=null,a=0,l=null;function f(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const y=v.backgroundBlurriness>0;x=e.get(x,y)}return x}function m(v){let x=!1;const y=f(v);y===null?_(o,c):y&&y.isColor&&(_(y,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,x){const y=f(x);y&&(y.isCubeTexture||y.mapping===ua)?(u===void 0&&(u=new je(new lr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Zr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(ki)),u.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,(d!==y||a!==y.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,a=y.version,l=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new je(new jr(2,2),new Xn({name:"BackgroundMaterial",uniforms:Zr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||a!==y.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,a=y.version,l=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function _(v,x){v.getRGB(Co,Wf(i)),t.buffers.color.setClear(Co.r,Co.g,Co.b,x,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,_(o,c)},render:m,addToRenderList:g,dispose:p}}function fx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null);let s=r,o=!1;function c(L,U,V,Y,z){let H=!1;const F=a(L,Y,V,U);s!==F&&(s=F,u(s.object)),H=f(L,Y,V,z),H&&m(L,Y,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(L,U,V,Y),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function h(){return i.createVertexArray()}function u(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function a(L,U,V,Y){const z=Y.wireframe===!0;let H=n[U.id];H===void 0&&(H={},n[U.id]=H);const F=L.isInstancedMesh===!0?L.id:0;let $=H[F];$===void 0&&($={},H[F]=$);let ie=$[V.id];ie===void 0&&(ie={},$[V.id]=ie);let he=ie[z];return he===void 0&&(he=l(h()),ie[z]=he),he}function l(L){const U=[],V=[],Y=[];for(let z=0;z<t;z++)U[z]=0,V[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,U,V,Y){const z=s.attributes,H=U.attributes;let F=0;const $=V.getAttributes();for(const ie in $)if($[ie].location>=0){const ve=z[ie];let pe=H[ie];if(pe===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),ve===void 0||ve.attribute!==pe||pe&&ve.data!==pe.data)return!0;F++}return s.attributesNum!==F||s.index!==Y}function m(L,U,V,Y){const z={},H=U.attributes;let F=0;const $=V.getAttributes();for(const ie in $)if($[ie].location>=0){let ve=H[ie];ve===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor));const pe={};pe.attribute=ve,ve&&ve.data&&(pe.data=ve.data),z[ie]=pe,F++}s.attributes=z,s.attributesNum=F,s.index=Y}function g(){const L=s.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function _(L){p(L,0)}function p(L,U){const V=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;V[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),z[L]!==U&&(i.vertexAttribDivisor(L,U),z[L]=U)}function v(){const L=s.newAttributes,U=s.enabledAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]!==L[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function x(L,U,V,Y,z,H,F){F===!0?i.vertexAttribIPointer(L,U,V,z,H):i.vertexAttribPointer(L,U,V,Y,z,H)}function y(L,U,V,Y){g();const z=Y.attributes,H=V.getAttributes(),F=U.defaultAttributeValues;for(const $ in H){const ie=H[$];if(ie.location>=0){let he=z[$];if(he===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),he!==void 0){const ve=he.normalized,pe=he.itemSize,Ue=e.get(he);if(Ue===void 0)continue;const K=Ue.buffer,k=Ue.type,w=Ue.bytesPerElement,R=k===i.INT||k===i.UNSIGNED_INT||he.gpuType===bc;if(he.isInterleavedBufferAttribute){const j=he.data,le=j.stride,B=he.offset;if(j.isInstancedInterleavedBuffer){for(let Q=0;Q<ie.locationSize;Q++)p(ie.location+Q,j.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<ie.locationSize;Q++)_(ie.location+Q);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Q=0;Q<ie.locationSize;Q++)x(ie.location+Q,pe/ie.locationSize,k,ve,le*w,(B+pe/ie.locationSize*Q)*w,R)}else{if(he.isInstancedBufferAttribute){for(let j=0;j<ie.locationSize;j++)p(ie.location+j,he.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<ie.locationSize;j++)_(ie.location+j);i.bindBuffer(i.ARRAY_BUFFER,K);for(let j=0;j<ie.locationSize;j++)x(ie.location+j,pe/ie.locationSize,k,ve,pe*w,pe/ie.locationSize*j*w,R)}}else if(F!==void 0){const ve=F[$];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(ie.location,ve);break;case 3:i.vertexAttrib3fv(ie.location,ve);break;case 4:i.vertexAttrib4fv(ie.location,ve);break;default:i.vertexAttrib1fv(ie.location,ve)}}}}v()}function A(){E();for(const L in n){const U=n[L];for(const V in U){const Y=U[V];for(const z in Y){const H=Y[z];for(const F in H)d(H[F].object),delete H[F];delete Y[z]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const V in U){const Y=U[V];for(const z in Y){const H=Y[z];for(const F in H)d(H[F].object),delete H[F];delete Y[z]}}delete n[L.id]}function P(L){for(const U in n){const V=n[U];for(const Y in V){const z=V[Y];if(z[L.id]===void 0)continue;const H=z[L.id];for(const F in H)d(H[F].object),delete H[F];delete z[L.id]}}}function S(L){for(const U in n){const V=n[U],Y=L.isInstancedMesh===!0?L.id:0,z=V[Y];if(z!==void 0){for(const H in z){const F=z[H];for(const $ in F)d(F[$].object),delete F[$];delete z[H]}delete V[Y],Object.keys(V).length===0&&delete n[U]}}}function E(){N(),o=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:E,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:_,disableUnusedAttributes:v}}function dx(i,e,t){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function o(u,d,a){a!==0&&(i.drawArraysInstanced(n,u,d,a),t.update(d,n,a))}function c(u,d,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,a);let f=0;for(let m=0;m<a;m++)f+=d[m];t.update(f,n,1)}function h(u,d,a,l){if(a===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)o(u[m],d[m],l[m]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,d,0,l,0,a);let m=0;for(let g=0;g<a;g++)m+=d[g]*l[g];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function px(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){const S=P===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!S)}function h(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=h(u);d!==u&&(He("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const a=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:a,reversedDepthBuffer:l,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:A,samples:T}}function mx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gi,c=new qe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(a,l){const f=a.length!==0||l||n!==0||r;return r=l,n=a.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,l){t=d(a,l,0)},this.setState=function(a,l,f){const m=a.clippingPlanes,g=a.clipIntersection,_=a.clipShadows,p=i.get(a);if(!r||m===null||m.length===0||s&&!_)s?d(null):u();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;h.value=y,y=d(m,l,x,f);for(let A=0;A!==x;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,l,f,m){const g=a!==null?a.length:0;let _=null;if(g!==0){if(_=h.value,m!==!0||_===null){const p=f+g*4,v=l.matrixWorldInverse;c.getNormalMatrix(v),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)o.copy(a[x]).applyMatrix4(v,c),o.normal.toArray(_,y),_[y+3]=o.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}const Ti=4,sh=[.125,.215,.35,.446,.526,.582],ji=20,_x=256,as=new Hc,oh=new Je;let Ka=null,Ja=0,Qa=0,el=!1;const gx=new O;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:c=gx}=s;Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,r,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),this._renderer.xr.enabled=el,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ui,format:An,colorSpace:Yr,depthBuffer:!1},r=lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xx(s)),this._blurMaterial=yx(s,e,t),this._ggxMaterial=vx(s,e,t)}return r}_compileMaterial(e){const t=new je(new Et,e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,n,r,s){const h=new fn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],a=this._renderer,l=a.autoClear,f=a.toneMapping;a.getClearColor(oh),a.toneMapping=Vn,a.autoClear=!1,a.state.buffers.depth.getReversed()&&(a.setRenderTarget(r),a.clearDepth(),a.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new lr,new Fc({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(oh),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(h.up.set(0,u[x],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+d[x],s.y,s.z)):y===1?(h.up.set(0,0,u[x]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+d[x],s.z)):(h.up.set(0,u[x],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+d[x]));const A=this._cubeSize;Ar(r,y*A,x>2?A:0,A,A),a.setRenderTarget(r),p&&a.render(g,h),a.render(e,h)}a.toneMapping=f,a.autoClear=l,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===rr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const h=this._cubeSize;Ar(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,as)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const h=o.uniforms,u=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),a=Math.sqrt(u*u-d*d),l=0+u*1.25,f=a*l,{_lodMax:m}=this,g=this._sizeLods[n],_=3*g*(n>m-Ti?n-m+Ti:0),p=4*(this._cubeSize-g);h.envMap.value=e.texture,h.roughness.value=f,h.mipInt.value=m-t,Ar(s,_,p,3*g,2*g),r.setRenderTarget(s),r.render(c,as),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=m-n,Ar(e,_,p,3*g,2*g),r.setRenderTarget(e),r.render(c,as)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,c){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,a=this._lodMeshes[r];a.material=u;const l=u.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ji-1),g=s/m,_=isFinite(s)?1+Math.floor(d*g):ji;_>ji&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ji}`);const p=[];let v=0;for(let P=0;P<ji;++P){const S=P/g,E=Math.exp(-S*S/2);p.push(E),P===0?v+=E:P<_&&(v+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;l.envMap.value=e.texture,l.samples.value=_,l.weights.value=p,l.latitudinal.value=o==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:x}=this;l.dTheta.value=m,l.mipInt.value=x-n;const y=this._sizeLods[r],A=3*y*(r>x-Ti?r-x+Ti:0),T=4*(this._cubeSize-y);Ar(t,A,T,3*y,2*y),h.setRenderTarget(t),h.render(a,as)}}function xx(i){const e=[],t=[],n=[];let r=i;const s=i-Ti+1+sh.length;for(let o=0;o<s;o++){const c=Math.pow(2,r);e.push(c);let h=1/c;o>i-Ti?h=sh[o-i+Ti-1]:o===0&&(h=0),t.push(h);const u=1/(c-2),d=-u,a=1+u,l=[d,d,a,d,a,a,d,d,a,a,d,a],f=6,m=6,g=3,_=2,p=1,v=new Float32Array(g*m*f),x=new Float32Array(_*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,S=T>2?0:-1,E=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];v.set(E,g*m*T),x.set(l,_*m*T);const N=[T,T,T,T,T,T];y.set(N,p*m*T)}const A=new Et;A.setAttribute("position",new Rn(v,g)),A.setAttribute("uv",new Rn(x,_)),A.setAttribute("faceIndex",new Rn(y,p)),n.push(new je(A,null)),r>Ti&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lh(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function vx(i,e,t){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function yx(i,e,t){const n=new Float32Array(ji),r=new O(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ch(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function uh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}class jf extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Df(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lr(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ai});s.uniforms.tEquirect.value=t;const o=new je(r,s),c=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Gt),new w_(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function Sx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(l,f=!1){return l==null?null:f?o(l):s(l)}function s(l){if(l&&l.isTexture){const f=l.mapping;if(f===ya||f===Sa)if(e.has(l)){const m=e.get(l).texture;return c(m,l.mapping)}else{const m=l.image;if(m&&m.height>0){const g=new jf(m.height);return g.fromEquirectangularTexture(i,l),e.set(l,g),l.addEventListener("dispose",u),c(g.texture,l.mapping)}else return null}}return l}function o(l){if(l&&l.isTexture){const f=l.mapping,m=f===ya||f===Sa,g=f===rr||f===Xr;if(m||g){let _=t.get(l);const p=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new ah(i)),_=m?n.fromEquirectangular(l,_):n.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,t.set(l,_),_.texture;if(_!==void 0)return _.texture;{const v=l.image;return m&&v&&v.height>0||g&&v&&h(v)?(n===null&&(n=new ah(i)),_=m?n.fromEquirectangular(l):n.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,t.set(l,_),l.addEventListener("dispose",d),_.texture):null}}}return l}function c(l,f){return f===ya?l.mapping=rr:f===Sa&&(l.mapping=Xr),l}function h(l){let f=0;const m=6;for(let g=0;g<m;g++)l[g]!==void 0&&f++;return f===m}function u(l){const f=l.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(l){const f=l.target;f.removeEventListener("dispose",d);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function a(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function Mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Jo("WebGLRenderer: "+n+" extension not supported."),r}}}function bx(i,e,t,n){const r={},s=new WeakMap;function o(a){const l=a.target;l.index!==null&&e.remove(l.index);for(const m in l.attributes)e.remove(l.attributes[m]);l.removeEventListener("dispose",o),delete r[l.id];const f=s.get(l);f&&(e.remove(f),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(a,l){return r[l.id]===!0||(l.addEventListener("dispose",o),r[l.id]=!0,t.memory.geometries++),l}function h(a){const l=a.attributes;for(const f in l)e.update(l[f],i.ARRAY_BUFFER)}function u(a){const l=[],f=a.index,m=a.attributes.position;let g=0;if(m===void 0)return;if(f!==null){const v=f.array;g=f.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],T=v[x+1],P=v[x+2];l.push(A,T,T,P,P,A)}}else{const v=m.array;g=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,T=x+1,P=x+2;l.push(A,T,T,P,P,A)}}const _=new(m.count>=65535?If:Pf)(l,1);_.version=g;const p=s.get(a);p&&e.remove(p),s.set(a,_)}function d(a){const l=s.get(a);if(l){const f=a.index;f!==null&&l.version<f.version&&u(a)}else u(a);return s.get(a)}return{get:c,update:h,getWireframeAttribute:d}}function Ex(i,e,t){let n;function r(l){n=l}let s,o;function c(l){s=l.type,o=l.bytesPerElement}function h(l,f){i.drawElements(n,f,s,l*o),t.update(f,n,1)}function u(l,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,l*o,m),t.update(f,n,m))}function d(l,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,l,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];t.update(_,n,1)}function a(l,f,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<l.length;p++)u(l[p]/o,f[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,s,l,0,g,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=a}function Tx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wx(i,e,t){const n=new WeakMap,r=new St;function s(o,c,h){const u=o.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,a=d!==void 0?d.length:0;let l=n.get(c);if(l===void 0||l.count!==a){let N=function(){S.dispose(),n.delete(c),c.removeEventListener("dispose",N)};var f=N;l!==void 0&&l.texture.dispose();const m=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],x=c.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let A=c.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*T*4*a),S=new Af(P,A,T,a);S.type=wn,S.needsUpdate=!0;const E=y*4;for(let L=0;L<a;L++){const U=p[L],V=v[L],Y=x[L],z=A*T*4*L;for(let H=0;H<U.count;H++){const F=H*E;m===!0&&(r.fromBufferAttribute(U,H),P[z+F+0]=r.x,P[z+F+1]=r.y,P[z+F+2]=r.z,P[z+F+3]=0),g===!0&&(r.fromBufferAttribute(V,H),P[z+F+4]=r.x,P[z+F+5]=r.y,P[z+F+6]=r.z,P[z+F+7]=0),_===!0&&(r.fromBufferAttribute(Y,H),P[z+F+8]=r.x,P[z+F+9]=r.y,P[z+F+10]=r.z,P[z+F+11]=Y.itemSize===4?r.w:1)}}l={count:a,texture:S,size:new ue(A,T)},n.set(c,l),c.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const g=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:s}}function Ax(i,e,t,n,r){let s=new WeakMap;function o(u){const d=r.render.frame,a=u.geometry,l=e.get(u,a);if(s.get(l)!==d&&(e.update(l),s.set(l,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),s.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return l}function c(){s=new WeakMap}function h(u){const d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}const Rx={[ff]:"LINEAR_TONE_MAPPING",[df]:"REINHARD_TONE_MAPPING",[pf]:"CINEON_TONE_MAPPING",[mf]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[xf]:"NEUTRAL_TONE_MAPPING",[_f]:"CUSTOM_TONE_MAPPING"};function Cx(i,e,t,n,r){const s=new Hn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Hn(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),c=new Et;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));const h=new m_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new je(c,h),d=new Hc(-1,1,1,-1,0,1);let a=null,l=null,f=!1,m,g=null,_=[],p=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<_.length;y++){const A=_[y];A.setSize&&A.setSize(v,x)}},this.setEffects=function(v){_=v,p=_.length>0&&_[0].isRenderPass===!0;const x=s.width,y=s.height;for(let A=0;A<_.length;A++){const T=_[A];T.setSize&&T.setSize(x,y)}},this.begin=function(v,x){if(f||v.toneMapping===Vn&&_.length===0)return!1;if(g=x,x!==null){const y=x.width,A=x.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return p===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(v,x){v.toneMapping=m,f=!0;let y=s,A=o;for(let T=0;T<_.length;T++){const P=_[T];if(P.enabled!==!1&&(P.render(v,A,y,x),P.needsSwap!==!1)){const S=y;y=A,A=S}}if(a!==v.outputColorSpace||l!==v.toneMapping){a=v.outputColorSpace,l=v.toneMapping,h.defines={},tt.getTransfer(a)===st&&(h.defines.SRGB_TRANSFER="");const T=Rx[l];T&&(h.defines[T]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(g),v.render(u,d),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),c.dispose(),h.dispose()}}const Zf=new Zt,hc=new Os(1,1),Kf=new Af,Jf=new dm,Qf=new Df,hh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Jr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(s,c)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function da(i,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),Ct(t,n)}}function Ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),Ct(t,n)}}function Fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),Ct(t,n)}}function Ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=t.isReversedDepthBuffer()?Lc:Ic,s=hc):s=Zf,t.setTexture2D(e||s,r)}function qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jf,r)}function Yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qf,r)}function $x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kf,r)}function jx(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Vx;case 36294:return Gx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function Zx(i,e){i.uniform1fv(this.addr,e)}function Kx(i,e){const t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){const t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qx(i,e){const t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function ev(i,e){const t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tv(i,e){const t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nv(i,e){const t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iv(i,e){i.uniform1iv(this.addr,e)}function rv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function ov(i,e){i.uniform4iv(this.addr,e)}function av(i,e){i.uniform1uiv(this.addr,e)}function lv(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function uv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=hc:o=Zf;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function fv(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jf,s[o])}function dv(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qf,s[o])}function pv(i,e,t){const n=this.cache,r=e.length,s=da(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kf,s[o])}function mv(i){switch(i){case 5126:return Zx;case 35664:return Kx;case 35665:return Jx;case 35666:return Qx;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jx(t.type)}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function _h(i,e){i.seq.push(e),i.map[e.id]=e}function vv(i,e,t){const n=i.name,r=n.length;for(tl.lastIndex=0;;){const s=tl.exec(n),o=tl.lastIndex;let c=s[1];const h=s[2]==="]",u=s[3];if(h&&(c=c|0),u===void 0||u==="["&&o+2===r){_h(t,u===void 0?new _v(c,i,e):new gv(c,i,e));break}else{let a=t.map[c];a===void 0&&(a=new xv(c),_h(t,a)),t=a}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),h=e.getUniformLocation(t,c.name);vv(c,h,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yv=37297;let Sv=0;function Mv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const xh=new qe;function bv(i){tt._getMatrix(xh,tt.workingColorSpace,i);const e=`mat3( ${xh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Zo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Mv(i.getShaderSource(e),c)}else return s}function Ev(i,e){const t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tv={[ff]:"Linear",[df]:"Reinhard",[pf]:"Cineon",[mf]:"ACESFilmic",[gf]:"AgX",[xf]:"Neutral",[_f]:"Custom"};function wv(i,e){const t=Tv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new O;function Av(){tt.getLuminanceCoefficients(Po);const i=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Cv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function ms(i){return i!==""}function yh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(Iv,Dv)}const Lv=new Map;function Dv(i,e){let t=$e[e];if(t===void 0){const n=Lv.get(e);if(n!==void 0)t=$e[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(Nv,Uv)}function Uv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Fv={[Uo]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function Ov(i){return Fv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bv={[rr]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function zv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Bv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const kv={[Xr]:"ENVMAP_MODE_REFRACTION"};function Vv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gv={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[Ip]:"ENVMAP_BLENDING_MIX",[Lp]:"ENVMAP_BLENDING_ADD"};function Hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[i.combine]||"ENVMAP_BLENDING_NONE"}function Wv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const h=Ov(t),u=zv(t),d=Vv(t),a=Hv(t),l=Wv(t),f=Rv(t),m=Cv(s),g=r.createProgram();let _,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ms).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(_=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Vn?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=fc(o),o=yh(o,t),o=Sh(o,t),c=fc(c),c=yh(c,t),c=Sh(c,t),o=Mh(o),c=Mh(c),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+_+o,y=v+p+c,A=gh(r,r.VERTEX_SHADER,x),T=gh(r,r.FRAGMENT_SHADER,y);r.attachShader(g,A),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(L){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",V=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(T)||"",z=U.trim(),H=V.trim(),F=Y.trim();let $=!0,ie=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,T);else{const he=vh(r,A,"vertex"),ve=vh(r,T,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+he+`
`+ve)}else z!==""?He("WebGLProgram: Program Info Log:",z):(H===""||F==="")&&(ie=!1);ie&&(L.diagnostics={runnable:$,programLog:z,vertexShader:{log:H,prefix:_},fragmentShader:{log:F,prefix:p}})}r.deleteShader(A),r.deleteShader(T),S=new Vo(r,g),E=Pv(r,g)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(g,yv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $v(e),t.set(e,n)),n}}class $v{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function jv(i,e,t,n,r,s){const o=new Rf,c=new Yv,h=new Set,u=[],d=new Map,a=n.logarithmicDepthBuffer;let l=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return h.add(S),S===0?"uv":`uv${S}`}function g(S,E,N,L,U){const V=L.fog,Y=U.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,F=e.get(S.envMap||z,H),$=F&&F.mapping===ua?F.image.height:null,ie=f[S.type];S.precision!==null&&(l=n.getMaxPrecision(S.precision),l!==S.precision&&He("WebGLProgram.getParameters:",S.precision,"not supported, using",l,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=he!==void 0?he.length:0;let pe=0;Y.morphAttributes.position!==void 0&&(pe=1),Y.morphAttributes.normal!==void 0&&(pe=2),Y.morphAttributes.color!==void 0&&(pe=3);let Ue,K,k,w;if(ie){const rt=Fn[ie];Ue=rt.vertexShader,K=rt.fragmentShader}else Ue=S.vertexShader,K=S.fragmentShader,c.update(S),k=c.getVertexShaderID(S),w=c.getFragmentShaderID(S);const R=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),le=U.isInstancedMesh===!0,B=U.isBatchedMesh===!0,Q=!!S.map,me=!!S.matcap,de=!!F,G=!!S.aoMap,X=!!S.lightMap,J=!!S.bumpMap,ne=!!S.normalMap,b=!!S.displacementMap,D=!!S.emissiveMap,ce=!!S.metalnessMap,Me=!!S.roughnessMap,_e=S.anisotropy>0,I=S.clearcoat>0,M=S.dispersion>0,W=S.iridescence>0,re=S.sheen>0,fe=S.transmission>0,oe=_e&&!!S.anisotropyMap,Pe=I&&!!S.clearcoatMap,xe=I&&!!S.clearcoatNormalMap,Le=I&&!!S.clearcoatRoughnessMap,Oe=W&&!!S.iridescenceMap,ge=W&&!!S.iridescenceThicknessMap,be=re&&!!S.sheenColorMap,Fe=re&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,Te=!!S.specularColorMap,Xe=!!S.specularIntensityMap,q=fe&&!!S.transmissionMap,Ee=fe&&!!S.thicknessMap,Se=!!S.gradientMap,we=!!S.alphaMap,ye=S.alphaTest>0,ae=!!S.alphaHash,De=!!S.extensions;let Ge=Vn;S.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const dt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Ue,fragmentShader:K,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:w,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:l,batching:B,batchingColor:B&&U._colorsTexture!==null,instancing:le,instancingColor:le&&U.instanceColor!==null,instancingMorph:le&&U.morphTexture!==null,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yr,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:me,envMap:de,envMapMode:de&&F.mapping,envMapCubeUVHeight:$,aoMap:G,lightMap:X,bumpMap:J,normalMap:ne,displacementMap:b,emissiveMap:D,normalMapObjectSpace:ne&&S.normalMapType===Up,normalMapTangentSpace:ne&&S.normalMapType===Pc,metalnessMap:ce,roughnessMap:Me,anisotropy:_e,anisotropyMap:oe,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:xe,clearcoatRoughnessMap:Le,dispersion:M,iridescence:W,iridescenceMap:Oe,iridescenceThicknessMap:ge,sheen:re,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Te,specularIntensityMap:Xe,transmission:fe,transmissionMap:q,thicknessMap:Ee,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:ye,alphaHash:ae,combine:S.combine,mapUv:Q&&m(S.map.channel),aoMapUv:G&&m(S.aoMap.channel),lightMapUv:X&&m(S.lightMap.channel),bumpMapUv:J&&m(S.bumpMap.channel),normalMapUv:ne&&m(S.normalMap.channel),displacementMapUv:b&&m(S.displacementMap.channel),emissiveMapUv:D&&m(S.emissiveMap.channel),metalnessMapUv:ce&&m(S.metalnessMap.channel),roughnessMapUv:Me&&m(S.roughnessMap.channel),anisotropyMapUv:oe&&m(S.anisotropyMap.channel),clearcoatMapUv:Pe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&m(S.sheenRoughnessMap.channel),specularMapUv:Ie&&m(S.specularMap.channel),specularColorMapUv:Te&&m(S.specularColorMap.channel),specularIntensityMapUv:Xe&&m(S.specularIntensityMap.channel),transmissionMapUv:q&&m(S.transmissionMap.channel),thicknessMapUv:Ee&&m(S.thicknessMap.channel),alphaMapUv:we&&m(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ne||_e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Q||we),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Y.attributes.normal===void 0&&ne===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:a,reversedDepthBuffer:j,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:D&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||B)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=h.has(1),dt.vertexUv2s=h.has(2),dt.vertexUv3s=h.has(3),h.clear(),dt}function _(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(p(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function p(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const E=f[S.type];let N;if(E){const L=Fn[E];N=f_.clone(L.uniforms)}else N=S.uniforms;return N}function y(S,E){let N=d.get(E);return N!==void 0?++N.usedTimes:(N=new Xv(i,E,S,r),u.push(N),d.set(E,N)),N}function A(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function T(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:P}}function Zv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,h){i.get(o)[c]=h}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Kv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Th(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(l){let f=0;return l.isInstancedMesh&&(f+=2),l.isSkinnedMesh&&(f+=1),f}function c(l,f,m,g,_,p){let v=i[e];return v===void 0?(v={id:l.id,object:l,geometry:f,material:m,materialVariant:o(l),groupOrder:g,renderOrder:l.renderOrder,z:_,group:p},i[e]=v):(v.id=l.id,v.object=l,v.geometry=f,v.material=m,v.materialVariant=o(l),v.groupOrder=g,v.renderOrder=l.renderOrder,v.z=_,v.group=p),e++,v}function h(l,f,m,g,_,p){const v=c(l,f,m,g,_,p);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function u(l,f,m,g,_,p){const v=c(l,f,m,g,_,p);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function d(l,f){t.length>1&&t.sort(l||Kv),n.length>1&&n.sort(f||Eh),r.length>1&&r.sort(f||Eh)}function a(){for(let l=e,f=i.length;l<f;l++){const m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:h,unshift:u,finish:a,sort:d}}function Jv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Th,i.set(n,[o])):r>=s.length?(o=new Th,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ty=0;function ny(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iy(i){const e=new Qv,t=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new O);const r=new O,s=new ct,o=new ct;function c(u){let d=0,a=0,l=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,g=0,_=0,p=0,v=0,x=0,y=0,A=0,T=0,P=0;u.sort(ny);for(let E=0,N=u.length;E<N;E++){const L=u[E],U=L.color,V=L.intensity,Y=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qr?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=U.r*V,a+=U.g*V,l+=U.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);P++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,$=t.get(L);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(V),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[g]=H;const F=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,F.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[g]=F.matrix,L.castShadow){const $=t.get(L);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=z,y++}g++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(U).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=H,_++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const F=L.shadow,$=t.get(L);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,x++}n.point[m]=H,m++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=a,n.ambient[2]=l;const S=n.hash;(S.directionalLength!==f||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==_||S.hemiLength!==p||S.numDirectionalShadows!==v||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==A||S.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,S.directionalLength=f,S.pointLength=m,S.spotLength=g,S.rectAreaLength=_,S.hemiLength=p,S.numDirectionalShadows=v,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=A,S.numLightProbes=P,n.version=ty++)}function h(u,d){let a=0,l=0,f=0,m=0,g=0;const _=d.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const y=n.directional[a];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),a++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[l];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),l++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:c,setupView:h,state:n}}function wh(i){const e=new iy(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o}}function ry(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new wh(i),e.set(r,[c])):s>=o.length?(c=new wh(i),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
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
}`,ay=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ly=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Ah=new ct,ls=new O,nl=new O;function cy(i,e,t){let n=new Oc;const r=new ue,s=new ue,o=new St,c=new g_,h=new x_,u={},d=t.maxTextureSize,a={[Ci]:Jt,[Jt]:Ci,[dn]:dn},l=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:sy,fragmentShader:oy}),f=l.clone();f.defines.HORIZONTAL_PASS=1;const m=new Et;m.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new je(m,l),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let p=this.type;this.render=function(T,P,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===hf&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uo);const E=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==this.type;V&&P.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=T.length;Y<z;Y++){const H=T[Y],F=H.shadow;if(F===void 0){He("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const $=F.getFrameExtents();r.multiply($),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,F.mapSize.y=s.y));const ie=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ie,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===fs){if(H.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hn(r.x,r.y,{format:qr,type:ui,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Os(r.x,r.y,wn),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=hi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt}else H.isPointLight?(F.map=new jf(r.x),F.map.depthTexture=new Dm(r.x,Wn)):(F.map=new Hn(r.x,r.y),F.map.depthTexture=new Os(r.x,r.y,Wn)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=hi,this.type===Uo?(F.map.depthTexture.compareFunction=ie?Lc:Ic,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt);F.camera.updateProjectionMatrix()}const he=F.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<he;ve++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(F.map),i.clear());const pe=F.getViewport(ve);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),U.viewport(o)}if(H.isPointLight){const pe=F.camera,Ue=F.matrix,K=H.distance||pe.far;K!==pe.far&&(pe.far=K,pe.updateProjectionMatrix()),ls.setFromMatrixPosition(H.matrixWorld),pe.position.copy(ls),nl.copy(pe.position),nl.add(ay[ve]),pe.up.copy(ly[ve]),pe.lookAt(nl),pe.updateMatrixWorld(),Ue.makeTranslation(-ls.x,-ls.y,-ls.z),Ah.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ah,pe.coordinateSystem,pe.reversedDepth)}else F.updateMatrices(H);n=F.getFrustum(),y(P,S,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===fs&&v(F,S),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(E,N,L)};function v(T,P){const S=e.update(g);l.defines.VSM_SAMPLES!==T.blurSamples&&(l.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,l.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(r.x,r.y,{format:qr,type:ui})),l.uniforms.shadow_pass.value=T.map.depthTexture,l.uniforms.resolution.value=T.mapSize,l.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,S,l,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,S,f,g,null)}function x(T,P,S,E){let N=null;const L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)N=L;else if(N=S.isPointLight===!0?h:c,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=N.uuid,V=P.uuid;let Y=u[U];Y===void 0&&(Y={},u[U]=Y);let z=Y[V];z===void 0&&(z=N.clone(),Y[V]=z,P.addEventListener("dispose",A)),N=z}if(N.visible=P.visible,N.wireframe=P.wireframe,E===fs?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:a[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=i.properties.get(N);U.light=S}return N}function y(T,P,S,E,N){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===fs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const V=e.update(T),Y=T.material;if(Array.isArray(Y)){const z=V.groups;for(let H=0,F=z.length;H<F;H++){const $=z[H],ie=Y[$.materialIndex];if(ie&&ie.visible){const he=x(T,ie,E,N);T.onBeforeShadow(i,T,P,S,V,he,$),i.renderBufferDirect(S,null,V,he,T,$),T.onAfterShadow(i,T,P,S,V,he,$)}}}else if(Y.visible){const z=x(T,Y,E,N);T.onBeforeShadow(i,T,P,S,V,z,null),i.renderBufferDirect(S,null,V,z,T,null),T.onAfterShadow(i,T,P,S,V,z,null)}}const U=T.children;for(let V=0,Y=U.length;V<Y;V++)y(U[V],P,S,E,N)}function A(T){T.target.removeEventListener("dispose",A);for(const S in u){const E=u[S],N=T.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function uy(i,e){function t(){let q=!1;const Ee=new St;let Se=null;const we=new St(0,0,0,0);return{setMask:function(ye){Se!==ye&&!q&&(i.colorMask(ye,ye,ye,ye),Se=ye)},setLocked:function(ye){q=ye},setClear:function(ye,ae,De,Ge,dt){dt===!0&&(ye*=Ge,ae*=Ge,De*=Ge),Ee.set(ye,ae,De,Ge),we.equals(Ee)===!1&&(i.clearColor(ye,ae,De,Ge),we.copy(Ee))},reset:function(){q=!1,Se=null,we.set(-1,0,0,0)}}}function n(){let q=!1,Ee=!1,Se=null,we=null,ye=null;return{setReversed:function(ae){if(Ee!==ae){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Ee=ae;const Ge=ye;ye=null,this.setClear(Ge)}},getReversed:function(){return Ee},setTest:function(ae){ae?R(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ae){Se!==ae&&!q&&(i.depthMask(ae),Se=ae)},setFunc:function(ae){if(Ee&&(ae=Xp[ae]),we!==ae){switch(ae){case Sl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ae}},setLocked:function(ae){q=ae},setClear:function(ae){ye!==ae&&(ye=ae,Ee&&(ae=1-ae),i.clearDepth(ae))},reset:function(){q=!1,Se=null,we=null,ye=null,Ee=!1}}}function r(){let q=!1,Ee=null,Se=null,we=null,ye=null,ae=null,De=null,Ge=null,dt=null;return{setTest:function(rt){q||(rt?R(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(rt){Ee!==rt&&!q&&(i.stencilMask(rt),Ee=rt)},setFunc:function(rt,Yn,$n){(Se!==rt||we!==Yn||ye!==$n)&&(i.stencilFunc(rt,Yn,$n),Se=rt,we=Yn,ye=$n)},setOp:function(rt,Yn,$n){(ae!==rt||De!==Yn||Ge!==$n)&&(i.stencilOp(rt,Yn,$n),ae=rt,De=Yn,Ge=$n)},setLocked:function(rt){q=rt},setClear:function(rt){dt!==rt&&(i.clearStencil(rt),dt=rt)},reset:function(){q=!1,Ee=null,Se=null,we=null,ye=null,ae=null,De=null,Ge=null,dt=null}}}const s=new t,o=new n,c=new r,h=new WeakMap,u=new WeakMap;let d={},a={},l=new WeakMap,f=[],m=null,g=!1,_=null,p=null,v=null,x=null,y=null,A=null,T=null,P=new Je(0,0,0),S=0,E=!1,N=null,L=null,U=null,V=null,Y=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),H=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=F>=2);let ie=null,he={};const ve=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ue=new St().fromArray(ve),K=new St().fromArray(pe);function k(q,Ee,Se,we){const ye=new Uint8Array(4),ae=i.createTexture();i.bindTexture(q,ae),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Se;De++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Ee+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ae}const w={};w[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),w[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),w[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),R(i.DEPTH_TEST),o.setFunc(Wr),J(!1),ne(fu),R(i.CULL_FACE),G(ai);function R(q){d[q]!==!0&&(i.enable(q),d[q]=!0)}function j(q){d[q]!==!1&&(i.disable(q),d[q]=!1)}function le(q,Ee){return a[q]!==Ee?(i.bindFramebuffer(q,Ee),a[q]=Ee,q===i.DRAW_FRAMEBUFFER&&(a[i.FRAMEBUFFER]=Ee),q===i.FRAMEBUFFER&&(a[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function B(q,Ee){let Se=f,we=!1;if(q){Se=l.get(Ee),Se===void 0&&(Se=[],l.set(Ee,Se));const ye=q.textures;if(Se.length!==ye.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,De=ye.length;ae<De;ae++)Se[ae]=i.COLOR_ATTACHMENT0+ae;Se.length=ye.length,we=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,we=!0);we&&i.drawBuffers(Se)}function Q(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const me={[$i]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};me[_p]=i.MIN,me[gp]=i.MAX;const de={[xp]:i.ZERO,[vp]:i.ONE,[yp]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[wp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[Mp]:i.DST_ALPHA,[Sp]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[Tp]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[Rp]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function G(q,Ee,Se,we,ye,ae,De,Ge,dt,rt){if(q===ai){g===!0&&(j(i.BLEND),g=!1);return}if(g===!1&&(R(i.BLEND),g=!0),q!==dp){if(q!==_||rt!==E){if((p!==$i||y!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,y=$i),rt)switch(q){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",q);break}else switch(q){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",q);break}v=null,x=null,A=null,T=null,P.set(0,0,0),S=0,_=q,E=rt}return}ye=ye||Ee,ae=ae||Se,De=De||we,(Ee!==p||ye!==y)&&(i.blendEquationSeparate(me[Ee],me[ye]),p=Ee,y=ye),(Se!==v||we!==x||ae!==A||De!==T)&&(i.blendFuncSeparate(de[Se],de[we],de[ae],de[De]),v=Se,x=we,A=ae,T=De),(Ge.equals(P)===!1||dt!==S)&&(i.blendColor(Ge.r,Ge.g,Ge.b,dt),P.copy(Ge),S=dt),_=q,E=!1}function X(q,Ee){q.side===dn?j(i.CULL_FACE):R(i.CULL_FACE);let Se=q.side===Jt;Ee&&(Se=!Se),J(Se),q.blending===Br&&q.transparent===!1?G(ai):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);const we=q.stencilWrite;c.setTest(we),we&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),D(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function ne(q){q!==hp?(R(i.CULL_FACE),q!==L&&(q===fu?i.cullFace(i.BACK):q===fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=q}function b(q){q!==U&&(H&&i.lineWidth(q),U=q)}function D(q,Ee,Se){q?(R(i.POLYGON_OFFSET_FILL),(V!==Ee||Y!==Se)&&(V=Ee,Y=Se,o.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,Se))):j(i.POLYGON_OFFSET_FILL)}function ce(q){q?R(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Me(q){q===void 0&&(q=i.TEXTURE0+z-1),ie!==q&&(i.activeTexture(q),ie=q)}function _e(q,Ee,Se){Se===void 0&&(ie===null?Se=i.TEXTURE0+z-1:Se=ie);let we=he[Se];we===void 0&&(we={type:void 0,texture:void 0},he[Se]=we),(we.type!==q||we.texture!==Ee)&&(ie!==Se&&(i.activeTexture(Se),ie=Se),i.bindTexture(q,Ee||w[q]),we.type=q,we.texture=Ee)}function I(){const q=he[ie];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function re(){try{i.texSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function fe(){try{i.texSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function xe(){try{i.texStorage2D(...arguments)}catch(q){et("WebGLState:",q)}}function Le(){try{i.texStorage3D(...arguments)}catch(q){et("WebGLState:",q)}}function Oe(){try{i.texImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function ge(){try{i.texImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function be(q){Ue.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ue.copy(q))}function Fe(q){K.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),K.copy(q))}function Ie(q,Ee){let Se=u.get(Ee);Se===void 0&&(Se=new WeakMap,u.set(Ee,Se));let we=Se.get(q);we===void 0&&(we=i.getUniformBlockIndex(Ee,q.name),Se.set(q,we))}function Te(q,Ee){const we=u.get(Ee).get(q);h.get(Ee)!==we&&(i.uniformBlockBinding(Ee,we,q.__bindingPointIndex),h.set(Ee,we))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,he={},a={},l=new WeakMap,f=[],m=null,g=!1,_=null,p=null,v=null,x=null,y=null,A=null,T=null,P=new Je(0,0,0),S=0,E=!1,N=null,L=null,U=null,V=null,Y=null,Ue.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:R,disable:j,bindFramebuffer:le,drawBuffers:B,useProgram:Q,setBlending:G,setMaterial:X,setFlipSided:J,setCullFace:ne,setLineWidth:b,setPolygonOffset:D,setScissorTest:ce,activeTexture:Me,bindTexture:_e,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:Oe,texImage3D:ge,updateUBOMapping:Ie,uniformBlockBinding:Te,texStorage2D:xe,texStorage3D:Le,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Pe,scissor:be,viewport:Fe,reset:Xe}}function hy(i,e,t,n,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ue,d=new WeakMap;let a;const l=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,M){return f?new OffscreenCanvas(I,M):Ko("canvas")}function g(I,M,W){let re=1;const fe=_e(I);if((fe.width>W||fe.height>W)&&(re=W/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const oe=Math.floor(re*fe.width),Pe=Math.floor(re*fe.height);a===void 0&&(a=m(oe,Pe));const xe=M?m(oe,Pe):a;return xe.width=oe,xe.height=Pe,xe.getContext("2d").drawImage(I,0,0,oe,Pe),He("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Pe+")."),xe}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,M,W,re,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe=M;if(M===i.RED&&(W===i.FLOAT&&(oe=i.R32F),W===i.HALF_FLOAT&&(oe=i.R16F),W===i.UNSIGNED_BYTE&&(oe=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.R8UI),W===i.UNSIGNED_SHORT&&(oe=i.R16UI),W===i.UNSIGNED_INT&&(oe=i.R32UI),W===i.BYTE&&(oe=i.R8I),W===i.SHORT&&(oe=i.R16I),W===i.INT&&(oe=i.R32I)),M===i.RG&&(W===i.FLOAT&&(oe=i.RG32F),W===i.HALF_FLOAT&&(oe=i.RG16F),W===i.UNSIGNED_BYTE&&(oe=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RG8UI),W===i.UNSIGNED_SHORT&&(oe=i.RG16UI),W===i.UNSIGNED_INT&&(oe=i.RG32UI),W===i.BYTE&&(oe=i.RG8I),W===i.SHORT&&(oe=i.RG16I),W===i.INT&&(oe=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),W===i.UNSIGNED_INT&&(oe=i.RGB32UI),W===i.BYTE&&(oe=i.RGB8I),W===i.SHORT&&(oe=i.RGB16I),W===i.INT&&(oe=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),W===i.UNSIGNED_INT&&(oe=i.RGBA32UI),W===i.BYTE&&(oe=i.RGBA8I),W===i.SHORT&&(oe=i.RGBA16I),W===i.INT&&(oe=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),M===i.RGBA){const Pe=fe?Zo:tt.getTransfer(re);W===i.FLOAT&&(oe=i.RGBA32F),W===i.HALF_FLOAT&&(oe=i.RGBA16F),W===i.UNSIGNED_BYTE&&(oe=Pe===st?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(I,M){let W;return I?M===null||M===Wn||M===Ns?W=i.DEPTH24_STENCIL8:M===wn?W=i.DEPTH32F_STENCIL8:M===Ds&&(W=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===Ns?W=i.DEPTH_COMPONENT24:M===wn?W=i.DEPTH_COMPONENT32F:M===Ds&&(W=i.DEPTH_COMPONENT16),W}function A(I,M){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function T(I){const M=I.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&d.delete(M)}function P(I){const M=I.target;M.removeEventListener("dispose",P),N(M)}function S(I){const M=n.get(I);if(M.__webglInit===void 0)return;const W=I.source,re=l.get(W);if(re){const fe=re[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(I),Object.keys(re).length===0&&l.delete(W)}n.remove(I)}function E(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const W=I.source,re=l.get(W);delete re[M.__cacheKey],o.memory.textures--}function N(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let fe=0;fe<M.__webglFramebuffer[re].length;fe++)i.deleteFramebuffer(M.__webglFramebuffer[re][fe]);else i.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)i.deleteFramebuffer(M.__webglFramebuffer[re]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=I.textures;for(let re=0,fe=W.length;re<fe;re++){const oe=n.get(W[re]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(W[re])}n.remove(I)}let L=0;function U(){L=0}function V(){const I=L;return I>=r.maxTextures&&He("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),L+=1,I}function Y(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function z(I,M){const W=n.get(I);if(I.isVideoTexture&&ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const re=I.image;if(re===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{w(W,I,M);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function H(I,M){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){w(W,I,M);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function F(I,M){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){w(W,I,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function $(I,M){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){R(W,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const ie={[Rl]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},he={[Bt]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ve={[Fp]:i.NEVER,[Vp]:i.ALWAYS,[Op]:i.LESS,[Ic]:i.LEQUAL,[Bp]:i.EQUAL,[Lc]:i.GEQUAL,[zp]:i.GREATER,[kp]:i.NOTEQUAL};function pe(I,M){if(M.type===wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gt||M.magFilter===Ma||M.magFilter===eo||M.magFilter===Qi||M.minFilter===Gt||M.minFilter===Ma||M.minFilter===eo||M.minFilter===Qi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ie[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==eo&&M.minFilter!==Qi||M.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(I,M){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",T));const re=M.source;let fe=l.get(re);fe===void 0&&(fe={},l.set(re,fe));const oe=Y(M);if(oe!==I.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),fe[oe].usedTimes++;const Pe=fe[I.__cacheKey];Pe!==void 0&&(fe[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(M)),I.__cacheKey=oe,I.__webglTexture=fe[oe].texture}return W}function K(I,M,W){return Math.floor(Math.floor(I/W)/M)}function k(I,M,W,re){const oe=I.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,re,M.data);else{oe.sort((ge,be)=>ge.start-be.start);let Pe=0;for(let ge=1;ge<oe.length;ge++){const be=oe[Pe],Fe=oe[ge],Ie=be.start+be.count,Te=K(Fe.start,M.width,4),Xe=K(be.start,M.width,4);Fe.start<=Ie+1&&Te===Xe&&K(Fe.start+Fe.count-1,M.width,4)===Te?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++Pe,oe[Pe]=Fe)}oe.length=Pe+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ge=0,be=oe.length;ge<be;ge++){const Fe=oe[ge],Ie=Math.floor(Fe.start/4),Te=Math.ceil(Fe.count/4),Xe=Ie%M.width,q=Math.floor(Ie/M.width),Ee=Te,Se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Xe,q,Ee,Se,W,re,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function w(I,M,W){let re=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=i.TEXTURE_3D);const fe=Ue(I,M),oe=M.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+W);const Pe=n.get(oe);if(oe.version!==Pe.__version||fe===!0){t.activeTexture(i.TEXTURE0+W);const xe=tt.getPrimaries(tt.workingColorSpace),Le=M.colorSpace===bi?null:tt.getPrimaries(M.colorSpace),Oe=M.colorSpace===bi||xe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ge=g(M.image,!1,r.maxTextureSize);ge=Me(M,ge);const be=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type);let Ie=x(M.internalFormat,be,Fe,M.colorSpace,M.isVideoTexture);pe(re,M);let Te;const Xe=M.mipmaps,q=M.isVideoTexture!==!0,Ee=Pe.__version===void 0||fe===!0,Se=oe.dataReady,we=A(M,ge);if(M.isDepthTexture)Ie=y(M.format===er,M.type),Ee&&(q?t.texStorage2D(i.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,be,Fe,null));else if(M.isDataTexture)if(Xe.length>0){q&&Ee&&t.texStorage2D(i.TEXTURE_2D,we,Ie,Xe[0].width,Xe[0].height);for(let ye=0,ae=Xe.length;ye<ae;ye++)Te=Xe[ye],q?Se&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Te.width,Te.height,be,Fe,Te.data):t.texImage2D(i.TEXTURE_2D,ye,Ie,Te.width,Te.height,0,be,Fe,Te.data);M.generateMipmaps=!1}else q?(Ee&&t.texStorage2D(i.TEXTURE_2D,we,Ie,ge.width,ge.height),Se&&k(M,ge,be,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,be,Fe,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){q&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,Xe[0].width,Xe[0].height,ge.depth);for(let ye=0,ae=Xe.length;ye<ae;ye++)if(Te=Xe[ye],M.format!==An)if(be!==null)if(q){if(Se)if(M.layerUpdates.size>0){const De=rh(Te.width,Te.height,M.format,M.type);for(const Ge of M.layerUpdates){const dt=Te.data.subarray(Ge*De/Te.data.BYTES_PER_ELEMENT,(Ge+1)*De/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ge,Te.width,Te.height,1,be,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,ge.depth,be,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ie,Te.width,Te.height,ge.depth,0,Te.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,ge.depth,be,Fe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ie,Te.width,Te.height,ge.depth,0,be,Fe,Te.data)}else{q&&Ee&&t.texStorage2D(i.TEXTURE_2D,we,Ie,Xe[0].width,Xe[0].height);for(let ye=0,ae=Xe.length;ye<ae;ye++)Te=Xe[ye],M.format!==An?be!==null?q?Se&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ie,Te.width,Te.height,0,Te.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Se&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Te.width,Te.height,be,Fe,Te.data):t.texImage2D(i.TEXTURE_2D,ye,Ie,Te.width,Te.height,0,be,Fe,Te.data)}else if(M.isDataArrayTexture)if(q){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,ge.width,ge.height,ge.depth),Se)if(M.layerUpdates.size>0){const ye=rh(ge.width,ge.height,M.format,M.type);for(const ae of M.layerUpdates){const De=ge.data.subarray(ae*ye/ge.data.BYTES_PER_ELEMENT,(ae+1)*ye/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ge.width,ge.height,1,be,Fe,De)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,be,Fe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,be,Fe,ge.data);else if(M.isData3DTexture)q?(Ee&&t.texStorage3D(i.TEXTURE_3D,we,Ie,ge.width,ge.height,ge.depth),Se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,be,Fe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,be,Fe,ge.data);else if(M.isFramebufferTexture){if(Ee)if(q)t.texStorage2D(i.TEXTURE_2D,we,Ie,ge.width,ge.height);else{let ye=ge.width,ae=ge.height;for(let De=0;De<we;De++)t.texImage2D(i.TEXTURE_2D,De,Ie,ye,ae,0,be,Fe,null),ye>>=1,ae>>=1}}else if(Xe.length>0){if(q&&Ee){const ye=_e(Xe[0]);t.texStorage2D(i.TEXTURE_2D,we,Ie,ye.width,ye.height)}for(let ye=0,ae=Xe.length;ye<ae;ye++)Te=Xe[ye],q?Se&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,be,Fe,Te):t.texImage2D(i.TEXTURE_2D,ye,Ie,be,Fe,Te);M.generateMipmaps=!1}else if(q){if(Ee){const ye=_e(ge);t.texStorage2D(i.TEXTURE_2D,we,Ie,ye.width,ye.height)}Se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Fe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ie,be,Fe,ge);_(M)&&p(re),Pe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function R(I,M,W){if(M.image.length!==6)return;const re=Ue(I,M),fe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const oe=n.get(fe);if(fe.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+W);const Pe=tt.getPrimaries(tt.workingColorSpace),xe=M.colorSpace===bi?null:tt.getPrimaries(M.colorSpace),Le=M.colorSpace===bi||Pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ae=0;ae<6;ae++)!Oe&&!ge?be[ae]=g(M.image[ae],!0,r.maxCubemapSize):be[ae]=ge?M.image[ae].image:M.image[ae],be[ae]=Me(M,be[ae]);const Fe=be[0],Ie=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),Xe=x(M.internalFormat,Ie,Te,M.colorSpace),q=M.isVideoTexture!==!0,Ee=oe.__version===void 0||re===!0,Se=fe.dataReady;let we=A(M,Fe);pe(i.TEXTURE_CUBE_MAP,M);let ye;if(Oe){q&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){ye=be[ae].mipmaps;for(let De=0;De<ye.length;De++){const Ge=ye[De];M.format!==An?Ie!==null?q?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Ge.width,Ge.height,Ie,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,Xe,Ge.width,Ge.height,0,Ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Ge.width,Ge.height,Ie,Te,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,Xe,Ge.width,Ge.height,0,Ie,Te,Ge.data)}}}else{if(ye=M.mipmaps,q&&Ee){ye.length>0&&we++;const ae=_e(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ge){q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,be[ae].width,be[ae].height,Ie,Te,be[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,be[ae].width,be[ae].height,0,Ie,Te,be[ae].data);for(let De=0;De<ye.length;De++){const dt=ye[De].image[ae].image;q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,dt.width,dt.height,Ie,Te,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,Xe,dt.width,dt.height,0,Ie,Te,dt.data)}}else{q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,Te,be[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,Ie,Te,be[ae]);for(let De=0;De<ye.length;De++){const Ge=ye[De];q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,Ie,Te,Ge.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,Xe,Ie,Te,Ge.image[ae])}}}_(M)&&p(i.TEXTURE_CUBE_MAP),oe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function j(I,M,W,re,fe,oe){const Pe=s.convert(W.format,W.colorSpace),xe=s.convert(W.type),Le=x(W.internalFormat,Pe,xe,W.colorSpace),Oe=n.get(M),ge=n.get(W);if(ge.__renderTarget=M,!Oe.__hasExternalTextures){const be=Math.max(1,M.width>>oe),Fe=Math.max(1,M.height>>oe);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Le,be,Fe,M.depth,0,Pe,xe,null):t.texImage2D(fe,oe,Le,be,Fe,0,Pe,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),D(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,fe,ge.__webglTexture,0,b(M)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,fe,ge.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const re=M.depthTexture,fe=re&&re.isDepthTexture?re.type:null,oe=y(M.stencilBuffer,fe),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(M),oe,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(M),oe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,I)}else{const re=M.textures;for(let fe=0;fe<re.length;fe++){const oe=re[fe],Pe=s.convert(oe.format,oe.colorSpace),xe=s.convert(oe.type),Le=x(oe.internalFormat,Pe,xe,oe.colorSpace);D(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(M),Le,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(M),Le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(I,M,W){const re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),fe.__webglTexture===void 0){fe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M.depthTexture);const Oe=s.convert(M.depthTexture.format),ge=s.convert(M.depthTexture.type);let be;M.depthTexture.format===hi?be=i.DEPTH_COMPONENT24:M.depthTexture.format===er&&(be=i.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,M.width,M.height,0,Oe,ge,null)}}else z(M.depthTexture,0);const oe=fe.__webglTexture,Pe=b(M),xe=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Le=M.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===hi)D(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,xe,oe,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,Le,xe,oe,0);else if(M.depthTexture.format===er)D(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,xe,oe,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,Le,xe,oe,0);else throw new Error("Unknown depthTexture format")}function Q(I){const M=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=re}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let re=0;re<6;re++)B(M.__webglFramebuffer[re],I,re);else{const re=I.texture.mipmaps;re&&re.length>0?B(M.__webglFramebuffer[0],I,0):B(M.__webglFramebuffer,I,0)}else if(W){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=i.createRenderbuffer(),le(M.__webglDepthbuffer[re],I,!1);else{const fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,oe)}}else{const re=I.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),le(M.__webglDepthbuffer,I,!1);else{const fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(I,M,W){const re=n.get(I);M!==void 0&&j(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Q(I)}function de(I){const M=I.texture,W=n.get(I),re=n.get(M);I.addEventListener("dispose",P);const fe=I.textures,oe=I.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=M.version,o.memory.textures++),oe){W.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[xe]=[];for(let Le=0;Le<M.mipmaps.length;Le++)W.__webglFramebuffer[xe][Le]=i.createFramebuffer()}else W.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)W.__webglFramebuffer[xe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let xe=0,Le=fe.length;xe<Le;xe++){const Oe=n.get(fe[xe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&D(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const Le=fe[xe];W.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[xe]);const Oe=s.convert(Le.format,Le.colorSpace),ge=s.convert(Le.type),be=x(Le.internalFormat,Oe,ge,Le.colorSpace,I.isXRRenderTarget===!0),Fe=b(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,W.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),le(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)j(W.__webglFramebuffer[xe][Le],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le);else j(W.__webglFramebuffer[xe],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let xe=0,Le=fe.length;xe<Le;xe++){const Oe=fe[xe],ge=n.get(Oe);let be=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ge.__webglTexture),pe(be,Oe),j(W.__webglFramebuffer,I,Oe,i.COLOR_ATTACHMENT0+xe,be,0),_(Oe)&&p(be)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,re.__webglTexture),pe(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)j(W.__webglFramebuffer[Le],I,M,i.COLOR_ATTACHMENT0,xe,Le);else j(W.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,xe,0);_(M)&&p(xe),t.unbindTexture()}I.depthBuffer&&Q(I)}function G(I){const M=I.textures;for(let W=0,re=M.length;W<re;W++){const fe=M[W];if(_(fe)){const oe=v(I),Pe=n.get(fe).__webglTexture;t.bindTexture(oe,Pe),p(oe),t.unbindTexture()}}}const X=[],J=[];function ne(I){if(I.samples>0){if(D(I)===!1){const M=I.textures,W=I.width,re=I.height;let fe=i.COLOR_BUFFER_BIT;const oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(I),xe=M.length>1;if(xe)for(let Oe=0;Oe<M.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Le=I.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Oe=0;Oe<M.length;Oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const ge=n.get(M[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,W,re,0,0,W,re,fe,i.NEAREST),h===!0&&(X.length=0,J.length=0,X.push(i.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(X.push(oe),J.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Oe=0;Oe<M.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const ge=n.get(M[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function b(I){return Math.min(r.maxSamples,I.samples)}function D(I){const M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(I){const M=o.render.frame;d.get(I)!==M&&(d.set(I,M),I.update())}function Me(I,M){const W=I.colorSpace,re=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Yr&&W!==bi&&(tt.getTransfer(W)===st?(re!==An||fe!==an)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",W)),M}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=me,this.setupRenderTarget=de,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=j,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fy(i,e){function t(n,r=bi){let s;const o=tt.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yf)return i.BYTE;if(n===Sf)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===Tf)return i.RGB;if(n===An)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===qr)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===Fo||n===Oo||n===Bo||n===zo)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Il||n===Ll||n===Dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nl||n===Ul)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return s.COMPRESSED_R11_EAC;if(n===Bl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===zl)return s.COMPRESSED_RG11_EAC;if(n===kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Zl||n===Kl||n===Jl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===nc||n===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===tc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===sc||n===oc||n===ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
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

}`;class my{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:dy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _y extends Kr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,c="local-floor",h=1,u=null,d=null,a=null,l=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",_=new my,p={},v=t.getContextAttributes();let x=null,y=null;const A=[],T=[],P=new ue;let S=null;const E=new fn;E.viewport=new St;const N=new fn;N.viewport=new St;const L=[E,N],U=new A_;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=A[w];return R===void 0&&(R=new Ra,A[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=A[w];return R===void 0&&(R=new Ra,A[w]=R),R.getGripSpace()},this.getHand=function(w){let R=A[w];return R===void 0&&(R=new Ra,A[w]=R),R.getHandSpace()};function z(w){const R=T.indexOf(w.inputSource);if(R===-1)return;const j=A[R];j!==void 0&&(j.update(w.inputSource,w.frame,u||o),j.dispatchEvent({type:w.type,data:w.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let w=0;w<A.length;w++){const R=T[w];R!==null&&(T[w]=null,A[w].disconnect(R))}V=null,Y=null,_.reset();for(const w in p)delete p[w];e.setRenderTarget(x),f=null,l=null,a=null,r=null,y=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){s=w,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){c=w,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(w){u=w},this.getBaseLayer=function(){return l!==null?l:f},this.getBinding=function(){return a===null&&g&&(a=new XRWebGLBinding(r,t)),a},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(w){if(r=w,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,le=null,B=null;v.depth&&(B=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?er:hi,le=v.stencil?Ns:Wn);const Q={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:s};a=this.getBinding(),l=a.createProjectionLayer(Q),r.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),y=new Hn(l.textureWidth,l.textureHeight,{format:An,type:an,depthTexture:new Os(l.textureWidth,l.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}else{const j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Hn(f.framebufferWidth,f.framebufferHeight,{format:An,type:an,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(c),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(w){for(let R=0;R<w.removed.length;R++){const j=w.removed[R],le=T.indexOf(j);le>=0&&(T[le]=null,A[le].disconnect(j))}for(let R=0;R<w.added.length;R++){const j=w.added[R];let le=T.indexOf(j);if(le===-1){for(let Q=0;Q<A.length;Q++)if(Q>=T.length){T.push(j),le=Q;break}else if(T[Q]===null){T[Q]=j,le=Q;break}if(le===-1)break}const B=A[le];B&&B.connect(j)}}const $=new O,ie=new O;function he(w,R,j){$.setFromMatrixPosition(R.matrixWorld),ie.setFromMatrixPosition(j.matrixWorld);const le=$.distanceTo(ie),B=R.projectionMatrix.elements,Q=j.projectionMatrix.elements,me=B[14]/(B[10]-1),de=B[14]/(B[10]+1),G=(B[9]+1)/B[5],X=(B[9]-1)/B[5],J=(B[8]-1)/B[0],ne=(Q[8]+1)/Q[0],b=me*J,D=me*ne,ce=le/(-J+ne),Me=ce*-J;if(R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Me),w.translateZ(ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),B[10]===-1)w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const _e=me+ce,I=de+ce,M=b-Me,W=D+(le-Me),re=G*de/I*_e,fe=X*de/I*_e;w.projectionMatrix.makePerspective(M,W,re,fe,_e,I),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function ve(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(r===null)return;let R=w.near,j=w.far;_.texture!==null&&(_.depthNear>0&&(R=_.depthNear),_.depthFar>0&&(j=_.depthFar)),U.near=N.near=E.near=R,U.far=N.far=E.far=j,(V!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,Y=U.far),U.layers.mask=w.layers.mask|6,E.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const le=w.parent,B=U.cameras;ve(U,le);for(let Q=0;Q<B.length;Q++)ve(B[Q],le);B.length===2?he(U,E,N):U.projectionMatrix.copy(E.projectionMatrix),pe(w,U,le)};function pe(w,R,j){j===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(j.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Fs*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(l===null&&f===null))return h},this.setFoveation=function(w){h=w,l!==null&&(l.fixedFoveation=w),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=w)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(w){return p[w]};let Ue=null;function K(w,R){if(d=R.getViewerPose(u||o),m=R,d!==null){const j=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let le=!1;j.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let de=0;de<j.length;de++){const G=j[de];let X=null;if(f!==null)X=f.getViewport(G);else{const ne=a.getViewSubImage(l,G);X=ne.viewport,de===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let J=L[de];J===void 0&&(J=new fn,J.layers.enable(de),J.viewport=new St,L[de]=J),J.matrix.fromArray(G.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(G.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(X.x,X.y,X.width,X.height),de===0&&(U.matrix.copy(J.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(J)}const B=r.enabledFeatures;if(B&&B.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){a=n.getBinding();const de=a.getDepthInformation(j[0]);de&&de.isValid&&de.texture&&_.init(de,r.renderState)}if(B&&B.includes("camera-access")&&g){e.state.unbindTexture(),a=n.getBinding();for(let de=0;de<j.length;de++){const G=j[de].camera;if(G){let X=p[G];X||(X=new Nf,p[G]=X);const J=a.getCameraImage(G);X.sourceTexture=J}}}}for(let j=0;j<A.length;j++){const le=T[j],B=A[j];le!==null&&B!==void 0&&B.update(le,R,u||o)}Ue&&Ue(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),m=null}const k=new $f;k.setAnimationLoop(K),this.setAnimationLoop=function(w){Ue=w},this.dispose=function(){}}}const Vi=new _n,gy=new ct;function xy(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Wf(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,v,x,y){p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),a(_,p)):p.isMeshPhongMaterial?(s(_,p),d(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),l(_,p),p.isMeshPhysicalMaterial&&f(_,p,y)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&c(_,p)):p.isPointsMaterial?h(_,p,v,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Jt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Jt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(_.envMap.value=x,Vi.copy(y),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),_.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Vi)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function c(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,v,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*v,_.scale.value=x*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function a(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function l(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,v){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const v=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vy(i,e,t,n){let r={},s={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(m(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",_));const A=x.program;n.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(l(v),s[v.id]=T)}function d(v){const x=a();v.__bindingPointIndex=x;const y=i.createBuffer(),A=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function a(){for(let v=0;v<c;v++)if(o.indexOf(v)===-1)return o.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const x=r[v.id],y=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,P=y.length;T<P;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,N=S.length;E<N;E++){const L=S[E];if(f(L,T,E,A)===!0){const U=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let z=0;z<V.length;z++){const H=V[z],F=g(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,y,A){const T=v.value,P=x+"_"+y;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const S=A[P];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return A[P]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function m(v){const x=v.uniforms;let y=0;const A=16;for(let P=0,S=x.length;P<S;P++){const E=Array.isArray(x[P])?x[P]:[x[P]];for(let N=0,L=E.length;N<L;N++){const U=E[N],V=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,z=V.length;Y<z;Y++){const H=V[Y],F=g(H),$=y%A,ie=$%F.boundary,he=$+ie;y+=ie,he!==0&&A-he<F.storage&&(y+=A-he),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=F.storage}}}const T=y%A;return T>0&&(y+=A-T),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:h,update:u,dispose:p}}const yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function Sy(){return Nn===null&&(Nn=new Lf(yy,16,16,qr,ui),Nn.name="DFG_LUT",Nn.minFilter=Gt,Nn.magFilter=Gt,Nn.wrapS=ii,Nn.wrapT=ii,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class My{constructor(e={}){const{canvas:t=Hp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1,reversedDepthBuffer:l=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=f,_=new Set([Cc,Rc,Ac]),p=new Set([an,Wn,Ds,Ns,Ec,Tc]),v=new Uint32Array(4),x=new Int32Array(4);let y=null,A=null;const T=[],P=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let N=!1;this._outputColorSpace=sn;let L=0,U=0,V=null,Y=-1,z=null;const H=new St,F=new St;let $=null;const ie=new Je(0);let he=0,ve=t.width,pe=t.height,Ue=1,K=null,k=null;const w=new St(0,0,ve,pe),R=new St(0,0,ve,pe);let j=!1;const le=new Oc;let B=!1,Q=!1;const me=new ct,de=new O,G=new St,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ne(){return V===null?Ue:1}let b=n;function D(C,Z){return t.getContext(C,Z)}try{const C={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",dt,!1),b===null){const Z="webgl2";if(b=D(Z,C),b===null)throw D(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw et("WebGLRenderer: "+C.message),C}let ce,Me,_e,I,M,W,re,fe,oe,Pe,xe,Le,Oe,ge,be,Fe,Ie,Te,Xe,q,Ee,Se,we;function ye(){ce=new Mx(b),ce.init(),Ee=new fy(b,ce),Me=new px(b,ce,e,Ee),_e=new uy(b,ce),Me.reversedDepthBuffer&&l&&_e.buffers.depth.setReversed(!0),I=new Tx(b),M=new Zv,W=new hy(b,ce,_e,M,Me,Ee,I),re=new Sx(E),fe=new P_(b),Se=new fx(b,fe),oe=new bx(b,fe,I,Se),Pe=new Ax(b,oe,fe,Se,I),Te=new wx(b,Me,W),be=new mx(M),xe=new jv(E,re,ce,Me,Se,be),Le=new xy(E,M),Oe=new Jv,ge=new ry(ce),Ie=new hx(E,re,_e,Pe,m,h),Fe=new cy(E,Pe,Me),we=new vy(b,I,Me,_e),Xe=new dx(b,ce,I),q=new Ex(b,ce,I),I.programs=xe.programs,E.capabilities=Me,E.extensions=ce,E.properties=M,E.renderLists=Oe,E.shadowMap=Fe,E.state=_e,E.info=I}ye(),g!==an&&(S=new Cx(g,t.width,t.height,r,s));const ae=new _y(E,b);this.xr=ae,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(C){C!==void 0&&(Ue=C,this.setSize(ve,pe,!1))},this.getSize=function(C){return C.set(ve,pe)},this.setSize=function(C,Z,se=!0){if(ae.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=C,pe=Z,t.width=Math.floor(C*Ue),t.height=Math.floor(Z*Ue),se===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(ve*Ue,pe*Ue).floor()},this.setDrawingBufferSize=function(C,Z,se){ve=C,pe=Z,Ue=se,t.width=Math.floor(C*se),t.height=Math.floor(Z*se),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(g===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,Z,se,te){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,Z,se,te),_e.viewport(H.copy(w).multiplyScalar(Ue).round())},this.getScissor=function(C){return C.copy(R)},this.setScissor=function(C,Z,se,te){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,Z,se,te),_e.scissor(F.copy(R).multiplyScalar(Ue).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){_e.setScissorTest(j=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,se=!0){let te=0;if(C){let ee=!1;if(V!==null){const Re=V.texture.format;ee=_.has(Re)}if(ee){const Re=V.texture.type,Ne=p.has(Re),Ce=Ie.getClearColor(),Be=Ie.getClearAlpha(),ke=Ce.r,Ye=Ce.g,Ze=Ce.b;Ne?(v[0]=ke,v[1]=Ye,v[2]=Ze,v[3]=Be,b.clearBufferuiv(b.COLOR,0,v)):(x[0]=ke,x[1]=Ye,x[2]=Ze,x[3]=Be,b.clearBufferiv(b.COLOR,0,x))}else te|=b.COLOR_BUFFER_BIT}Z&&(te|=b.DEPTH_BUFFER_BIT),se&&(te|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&b.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Ie.dispose(),Oe.dispose(),ge.dispose(),M.dispose(),re.dispose(),Pe.dispose(),Se.dispose(),we.dispose(),xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",qc),ae.removeEventListener("sessionend",Yc),Di.stop()};function De(C){C.preventDefault(),yu("WebGLRenderer: Context Lost."),N=!0}function Ge(){yu("WebGLRenderer: Context Restored."),N=!1;const C=I.autoReset,Z=Fe.enabled,se=Fe.autoUpdate,te=Fe.needsUpdate,ee=Fe.type;ye(),I.autoReset=C,Fe.enabled=Z,Fe.autoUpdate=se,Fe.needsUpdate=te,Fe.type=ee}function dt(C){et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function rt(C){const Z=C.target;Z.removeEventListener("dispose",rt),Yn(Z)}function Yn(C){$n(C),M.remove(C)}function $n(C){const Z=M.get(C).programs;Z!==void 0&&(Z.forEach(function(se){xe.releaseProgram(se)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,se,te,ee,Re){Z===null&&(Z=X);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=_d(C,Z,se,te,ee);_e.setMaterial(te,Ne);let Be=se.index,ke=1;if(te.wireframe===!0){if(Be=oe.getWireframeAttribute(se),Be===void 0)return;ke=2}const Ye=se.drawRange,Ze=se.attributes.position;let Ve=Ye.start*ke,ot=(Ye.start+Ye.count)*ke;Re!==null&&(Ve=Math.max(Ve,Re.start*ke),ot=Math.min(ot,(Re.start+Re.count)*ke)),Be!==null?(Ve=Math.max(Ve,0),ot=Math.min(ot,Be.count)):Ze!=null&&(Ve=Math.max(Ve,0),ot=Math.min(ot,Ze.count));const bt=ot-Ve;if(bt<0||bt===1/0)return;Se.setup(ee,te,Ce,se,Be);let vt,at=Xe;if(Be!==null&&(vt=fe.get(Be),at=q,at.setIndex(vt)),ee.isMesh)te.wireframe===!0?(_e.setLineWidth(te.wireframeLinewidth*ne()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if(ee.isLine){let zt=te.linewidth;zt===void 0&&(zt=1),_e.setLineWidth(zt*ne()),ee.isLineSegments?at.setMode(b.LINES):ee.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else ee.isPoints?at.setMode(b.POINTS):ee.isSprite&&at.setMode(b.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))at.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const zt=ee._multiDrawStarts,ze=ee._multiDrawCounts,Qt=ee._multiDrawCount,nt=Be?fe.get(Be).bytesPerElement:1,gn=M.get(te).currentProgram.getUniforms();for(let Ln=0;Ln<Qt;Ln++)gn.setValue(b,"_gl_DrawID",Ln),at.render(zt[Ln]/nt,ze[Ln])}else if(ee.isInstancedMesh)at.renderInstances(Ve,bt,ee.count);else if(se.isInstancedBufferGeometry){const zt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ze=Math.min(se.instanceCount,zt);at.renderInstances(Ve,bt,ze)}else at.render(Ve,bt)};function Xc(C,Z,se){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Jt,C.needsUpdate=!0,js(C,Z,se),C.side=Ci,C.needsUpdate=!0,js(C,Z,se),C.side=dn):js(C,Z,se)}this.compile=function(C,Z,se=null){se===null&&(se=C),A=ge.get(se),A.init(Z),P.push(A),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),C!==se&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();const te=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ce=Re[Ne];Xc(Ce,se,ee),te.add(Ce)}else Xc(Re,se,ee),te.add(Re)}),A=P.pop(),te},this.compileAsync=function(C,Z,se=null){const te=this.compile(C,Z,se);return new Promise(ee=>{function Re(){if(te.forEach(function(Ne){M.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){ee(C);return}setTimeout(Re,10)}ce.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let pa=null;function md(C){pa&&pa(C)}function qc(){Di.stop()}function Yc(){Di.start()}const Di=new $f;Di.setAnimationLoop(md),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){pa=C,ae.setAnimationLoop(C),C===null?Di.stop():Di.start()},ae.addEventListener("sessionstart",qc),ae.addEventListener("sessionend",Yc),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const se=ae.enabled===!0&&ae.isPresenting===!0,te=S!==null&&(V===null||se)&&S.begin(E,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Z),Z=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,Z,V),A=ge.get(C,P.length),A.init(Z),P.push(A),me.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(me,zn,Z.reversedDepth),Q=this.localClippingEnabled,B=be.init(this.clippingPlanes,Q),y=Oe.get(C,T.length),y.init(),T.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ne=E.xr.getDepthSensingMesh();Ne!==null&&ma(Ne,Z,-1/0,E.sortObjects)}ma(C,Z,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(K,k),J=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,J&&Ie.addToRenderList(y,C),this.info.render.frame++,B===!0&&be.beginShadows();const ee=A.state.shadowsArray;if(Fe.render(ee,C,Z),B===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&S.hasRenderPass())===!1){const Ne=y.opaque,Ce=y.transmissive;if(A.setupLights(),Z.isArrayCamera){const Be=Z.cameras;if(Ce.length>0)for(let ke=0,Ye=Be.length;ke<Ye;ke++){const Ze=Be[ke];jc(Ne,Ce,C,Ze)}J&&Ie.render(C);for(let ke=0,Ye=Be.length;ke<Ye;ke++){const Ze=Be[ke];$c(y,C,Ze,Ze.viewport)}}else Ce.length>0&&jc(Ne,Ce,C,Z),J&&Ie.render(C),$c(y,C,Z)}V!==null&&U===0&&(W.updateMultisampleRenderTarget(V),W.updateRenderTargetMipmap(V)),te&&S.end(E),C.isScene===!0&&C.onAfterRender(E,C,Z),Se.resetDefaultState(),Y=-1,z=null,P.pop(),P.length>0?(A=P[P.length-1],B===!0&&be.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function ma(C,Z,se,te){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){te&&G.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ne=Pe.update(C),Ce=C.material;Ce.visible&&y.push(C,Ne,Ce,se,G.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const Ne=Pe.update(C),Ce=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),G.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),G.copy(Ne.boundingSphere.center)),G.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ce)){const Be=Ne.groups;for(let ke=0,Ye=Be.length;ke<Ye;ke++){const Ze=Be[ke],Ve=Ce[Ze.materialIndex];Ve&&Ve.visible&&y.push(C,Ne,Ve,se,G.z,Ze)}}else Ce.visible&&y.push(C,Ne,Ce,se,G.z,null)}}const Re=C.children;for(let Ne=0,Ce=Re.length;Ne<Ce;Ne++)ma(Re[Ne],Z,se,te)}function $c(C,Z,se,te){const{opaque:ee,transmissive:Re,transparent:Ne}=C;A.setupLightsView(se),B===!0&&be.setGlobalState(E.clippingPlanes,se),te&&_e.viewport(H.copy(te)),ee.length>0&&$s(ee,Z,se),Re.length>0&&$s(Re,Z,se),Ne.length>0&&$s(Ne,Z,se),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function jc(C,Z,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[te.id]===void 0){const Ve=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[te.id]=new Hn(1,1,{generateMipmaps:!0,type:Ve?ui:an,minFilter:Qi,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Re=A.state.transmissionRenderTarget[te.id],Ne=te.viewport||H;Re.setSize(Ne.z*E.transmissionResolutionScale,Ne.w*E.transmissionResolutionScale);const Ce=E.getRenderTarget(),Be=E.getActiveCubeFace(),ke=E.getActiveMipmapLevel();E.setRenderTarget(Re),E.getClearColor(ie),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),J&&Ie.render(se);const Ye=E.toneMapping;E.toneMapping=Vn;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),A.setupLightsView(te),B===!0&&be.setGlobalState(E.clippingPlanes,te),$s(C,se,te),W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ot=0,bt=Z.length;ot<bt;ot++){const vt=Z[ot],{object:at,geometry:zt,material:ze,group:Qt}=vt;if(ze.side===dn&&at.layers.test(te.layers)){const nt=ze.side;ze.side=Jt,ze.needsUpdate=!0,Zc(at,se,te,zt,ze,Qt),ze.side=nt,ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re))}E.setRenderTarget(Ce,Be,ke),E.setClearColor(ie,he),Ze!==void 0&&(te.viewport=Ze),E.toneMapping=Ye}function $s(C,Z,se){const te=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Re=C.length;ee<Re;ee++){const Ne=C[ee],{object:Ce,geometry:Be,group:ke}=Ne;let Ye=Ne.material;Ye.allowOverride===!0&&te!==null&&(Ye=te),Ce.layers.test(se.layers)&&Zc(Ce,Z,se,Be,Ye,ke)}}function Zc(C,Z,se,te,ee,Re){C.onBeforeRender(E,Z,se,te,ee,Re),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(E,Z,se,te,C,Re),ee.transparent===!0&&ee.side===dn&&ee.forceSinglePass===!1?(ee.side=Jt,ee.needsUpdate=!0,E.renderBufferDirect(se,Z,te,ee,C,Re),ee.side=Ci,ee.needsUpdate=!0,E.renderBufferDirect(se,Z,te,ee,C,Re),ee.side=dn):E.renderBufferDirect(se,Z,te,ee,C,Re),C.onAfterRender(E,Z,se,te,ee,Re)}function js(C,Z,se){Z.isScene!==!0&&(Z=X);const te=M.get(C),ee=A.state.lights,Re=A.state.shadowsArray,Ne=ee.state.version,Ce=xe.getParameters(C,ee.state,Re,Z,se),Be=xe.getProgramCacheKey(Ce);let ke=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,te.fog=Z.fog;const Ye=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=re.get(C.envMap||te.environment,Ye),te.envMapRotation=te.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",rt),ke=new Map,te.programs=ke);let Ze=ke.get(Be);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Ne)return Jc(C,Ce),Ze}else Ce.uniforms=xe.getUniforms(C),C.onBeforeCompile(Ce,E),Ze=xe.acquireProgram(Ce,Be),ke.set(Be,Ze),te.uniforms=Ce.uniforms;const Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=be.uniform),Jc(C,Ce),te.needsLights=xd(C),te.lightsStateVersion=Ne,te.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function Kc(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Vo.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Jc(C,Z){const se=M.get(C);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function _d(C,Z,se,te,ee){Z.isScene!==!0&&(Z=X),W.resetTextureUnits();const Re=Z.fog,Ne=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Z.environment:null,Ce=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Yr,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=re.get(te.envMap||Ne,Be),Ye=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ze=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!se.morphAttributes.position,ot=!!se.morphAttributes.normal,bt=!!se.morphAttributes.color;let vt=Vn;te.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=E.toneMapping);const at=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,zt=at!==void 0?at.length:0,ze=M.get(te),Qt=A.state.lights;if(B===!0&&(Q===!0||C!==z)){const Pt=C===z&&te.id===Y;be.setState(te,C,Pt)}let nt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Qt.state.version||ze.outputColorSpace!==Ce||ee.isBatchedMesh&&ze.batching===!1||!ee.isBatchedMesh&&ze.batching===!0||ee.isBatchedMesh&&ze.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ze.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ze.instancing===!1||!ee.isInstancedMesh&&ze.instancing===!0||ee.isSkinnedMesh&&ze.skinning===!1||!ee.isSkinnedMesh&&ze.skinning===!0||ee.isInstancedMesh&&ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ze.instancingMorph===!1&&ee.morphTexture!==null||ze.envMap!==ke||te.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==be.numPlanes||ze.numIntersection!==be.numIntersection)||ze.vertexAlphas!==Ye||ze.vertexTangents!==Ze||ze.morphTargets!==Ve||ze.morphNormals!==ot||ze.morphColors!==bt||ze.toneMapping!==vt||ze.morphTargetsCount!==zt)&&(nt=!0):(nt=!0,ze.__version=te.version);let gn=ze.currentProgram;nt===!0&&(gn=js(te,Z,ee));let Ln=!1,Ni=!1,ur=!1;const ut=gn.getUniforms(),Ut=ze.uniforms;if(_e.useProgram(gn.program)&&(Ln=!0,Ni=!0,ur=!0),te.id!==Y&&(Y=te.id,Ni=!0),Ln||z!==C){_e.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ut.setValue(b,"projectionMatrix",C.projectionMatrix),ut.setValue(b,"viewMatrix",C.matrixWorldInverse);const pi=ut.map.cameraPosition;pi!==void 0&&pi.setValue(b,de.setFromMatrixPosition(C.matrixWorld)),Me.logarithmicDepthBuffer&&ut.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ut.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,Ni=!0,ur=!0)}if(ze.needsLights&&(Qt.state.directionalShadowMap.length>0&&ut.setValue(b,"directionalShadowMap",Qt.state.directionalShadowMap,W),Qt.state.spotShadowMap.length>0&&ut.setValue(b,"spotShadowMap",Qt.state.spotShadowMap,W),Qt.state.pointShadowMap.length>0&&ut.setValue(b,"pointShadowMap",Qt.state.pointShadowMap,W)),ee.isSkinnedMesh){ut.setOptional(b,ee,"bindMatrix"),ut.setOptional(b,ee,"bindMatrixInverse");const Pt=ee.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(b,"boneTexture",Pt.boneTexture,W))}ee.isBatchedMesh&&(ut.setOptional(b,ee,"batchingTexture"),ut.setValue(b,"batchingTexture",ee._matricesTexture,W),ut.setOptional(b,ee,"batchingIdTexture"),ut.setValue(b,"batchingIdTexture",ee._indirectTexture,W),ut.setOptional(b,ee,"batchingColorTexture"),ee._colorsTexture!==null&&ut.setValue(b,"batchingColorTexture",ee._colorsTexture,W));const di=se.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Te.update(ee,se,gn),(Ni||ze.receiveShadow!==ee.receiveShadow)&&(ze.receiveShadow=ee.receiveShadow,ut.setValue(b,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Z.environment!==null&&(Ut.envMapIntensity.value=Z.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Sy()),Ni&&(ut.setValue(b,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&gd(Ut,ur),Re&&te.fog===!0&&Le.refreshFogUniforms(Ut,Re),Le.refreshMaterialUniforms(Ut,te,Ue,pe,A.state.transmissionRenderTarget[C.id]),Vo.upload(b,Kc(ze),Ut,W)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Vo.upload(b,Kc(ze),Ut,W),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ut.setValue(b,"center",ee.center),ut.setValue(b,"modelViewMatrix",ee.modelViewMatrix),ut.setValue(b,"normalMatrix",ee.normalMatrix),ut.setValue(b,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Pt=te.uniformsGroups;for(let pi=0,hr=Pt.length;pi<hr;pi++){const Qc=Pt[pi];we.update(Qc,gn),we.bind(Qc,gn)}}return gn}function gd(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function xd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,Z,se){const te=M.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=Z,M.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const se=M.get(C);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0};const vd=b.createFramebuffer();this.setRenderTarget=function(C,Z=0,se=0){V=C,L=Z,U=se;let te=null,ee=!1,Re=!1;if(C){const Ce=M.get(C);if(Ce.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(b.FRAMEBUFFER,Ce.__webglFramebuffer),H.copy(C.viewport),F.copy(C.scissor),$=C.scissorTest,_e.viewport(H),_e.scissor(F),_e.setScissorTest($),Y=-1;return}else if(Ce.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Ce.__hasExternalTextures)W.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(Ce.__boundDepthTexture!==Ye){if(Ye!==null&&M.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Re=!0);const ke=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[Z])?te=ke[Z][se]:te=ke[Z],ee=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?te=M.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[se]:te=ke,H.copy(C.viewport),F.copy(C.scissor),$=C.scissorTest}else H.copy(w).multiplyScalar(Ue).floor(),F.copy(R).multiplyScalar(Ue).floor(),$=j;if(se!==0&&(te=vd),_e.bindFramebuffer(b.FRAMEBUFFER,te)&&_e.drawBuffers(C,te),_e.viewport(H),_e.scissor(F),_e.setScissorTest($),ee){const Ce=M.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce.__webglTexture,se)}else if(Re){const Ce=Z;for(let Be=0;Be<C.textures.length;Be++){const ke=M.get(C.textures[Be]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Be,ke.__webglTexture,se,Ce)}}else if(C!==null&&se!==0){const Ce=M.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,se)}Y=-1},this.readRenderTargetPixels=function(C,Z,se,te,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){_e.bindFramebuffer(b.FRAMEBUFFER,Be);try{const ke=C.textures[Ce],Ye=ke.format,Ze=ke.type;if(C.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ce),!Me.textureFormatReadable(Ye)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ze)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-te&&se>=0&&se<=C.height-ee&&b.readPixels(Z,se,te,ee,Ee.convert(Ye),Ee.convert(Ze),Re)}finally{const ke=V!==null?M.get(V).__webglFramebuffer:null;_e.bindFramebuffer(b.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,Z,se,te,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(Z>=0&&Z<=C.width-te&&se>=0&&se<=C.height-ee){_e.bindFramebuffer(b.FRAMEBUFFER,Be);const ke=C.textures[Ce],Ye=ke.format,Ze=ke.type;if(C.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ce),!Me.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ve),b.bufferData(b.PIXEL_PACK_BUFFER,Re.byteLength,b.STREAM_READ),b.readPixels(Z,se,te,ee,Ee.convert(Ye),Ee.convert(Ze),0);const ot=V!==null?M.get(V).__webglFramebuffer:null;_e.bindFramebuffer(b.FRAMEBUFFER,ot);const bt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Wp(b,bt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ve),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Re),b.deleteBuffer(Ve),b.deleteSync(bt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,se=0){const te=Math.pow(2,-se),ee=Math.floor(C.image.width*te),Re=Math.floor(C.image.height*te),Ne=Z!==null?Z.x:0,Ce=Z!==null?Z.y:0;W.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,se,0,0,Ne,Ce,ee,Re),_e.unbindTexture()};const yd=b.createFramebuffer(),Sd=b.createFramebuffer();this.copyTextureToTexture=function(C,Z,se=null,te=null,ee=0,Re=0){let Ne,Ce,Be,ke,Ye,Ze,Ve,ot,bt;const vt=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(se!==null)Ne=se.max.x-se.min.x,Ce=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Ye=se.min.y,Ze=se.isBox3?se.min.z:0;else{const Ut=Math.pow(2,-ee);Ne=Math.floor(vt.width*Ut),Ce=Math.floor(vt.height*Ut),C.isDataArrayTexture?Be=vt.depth:C.isData3DTexture?Be=Math.floor(vt.depth*Ut):Be=1,ke=0,Ye=0,Ze=0}te!==null?(Ve=te.x,ot=te.y,bt=te.z):(Ve=0,ot=0,bt=0);const at=Ee.convert(Z.format),zt=Ee.convert(Z.type);let ze;Z.isData3DTexture?(W.setTexture3D(Z,0),ze=b.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),ze=b.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),ze=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment);const Qt=b.getParameter(b.UNPACK_ROW_LENGTH),nt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),gn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ln=b.getParameter(b.UNPACK_SKIP_ROWS),Ni=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,vt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,vt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ze);const ur=C.isDataArrayTexture||C.isData3DTexture,ut=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Ut=M.get(C),di=M.get(Z),Pt=M.get(Ut.__renderTarget),pi=M.get(di.__renderTarget);_e.bindFramebuffer(b.READ_FRAMEBUFFER,Pt.__webglFramebuffer),_e.bindFramebuffer(b.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let hr=0;hr<Be;hr++)ur&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(C).__webglTexture,ee,Ze+hr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(Z).__webglTexture,Re,bt+hr)),b.blitFramebuffer(ke,Ye,Ne,Ce,Ve,ot,Ne,Ce,b.DEPTH_BUFFER_BIT,b.NEAREST);_e.bindFramebuffer(b.READ_FRAMEBUFFER,null),_e.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||M.has(C)){const Ut=M.get(C),di=M.get(Z);_e.bindFramebuffer(b.READ_FRAMEBUFFER,yd),_e.bindFramebuffer(b.DRAW_FRAMEBUFFER,Sd);for(let Pt=0;Pt<Be;Pt++)ur?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ut.__webglTexture,ee,Ze+Pt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ut.__webglTexture,ee),ut?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,di.__webglTexture,Re,bt+Pt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,di.__webglTexture,Re),ee!==0?b.blitFramebuffer(ke,Ye,Ne,Ce,Ve,ot,Ne,Ce,b.COLOR_BUFFER_BIT,b.NEAREST):ut?b.copyTexSubImage3D(ze,Re,Ve,ot,bt+Pt,ke,Ye,Ne,Ce):b.copyTexSubImage2D(ze,Re,Ve,ot,ke,Ye,Ne,Ce);_e.bindFramebuffer(b.READ_FRAMEBUFFER,null),_e.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ut?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(ze,Re,Ve,ot,bt,Ne,Ce,Be,at,zt,vt.data):Z.isCompressedArrayTexture?b.compressedTexSubImage3D(ze,Re,Ve,ot,bt,Ne,Ce,Be,at,vt.data):b.texSubImage3D(ze,Re,Ve,ot,bt,Ne,Ce,Be,at,zt,vt):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Re,Ve,ot,Ne,Ce,at,zt,vt.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Re,Ve,ot,vt.width,vt.height,at,vt.data):b.texSubImage2D(b.TEXTURE_2D,Re,Ve,ot,Ne,Ce,at,zt,vt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Qt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,nt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ln),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ni),Re===0&&Z.generateMipmaps&&b.generateMipmap(ze),_e.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){L=0,U=0,V=null,_e.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Pi=12;class ed{perm=[];constructor(e=0){const t=[];for(let r=0;r<256;r++)t[r]=r;let n=e;for(let r=255;r>0;r--){n=n*1103515245+12345&2147483647;const s=n%(r+1);[t[r],t[s]]=[t[s],t[r]]}for(let r=0;r<512;r++)this.perm[r]=t[r&255]}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return e+n*(t-e)}grad(e,t,n){const r=e&3,s=r<2?t:n,o=r<2?n:t;return((r&1)===0?s:-s)+((r&2)===0?o:-o)}noise(e,t){const n=Math.floor(e)&255,r=Math.floor(t)&255;e-=Math.floor(e),t-=Math.floor(t);const s=this.fade(e),o=this.fade(t),c=this.perm[n]+r,h=this.perm[n+1]+r;return this.lerp(this.lerp(this.grad(this.perm[c],e,t),this.grad(this.perm[h],e-1,t),s),this.lerp(this.grad(this.perm[c+1],e,t-1),this.grad(this.perm[h+1],e-1,t-1),s),o)}fbm(e,t,n=4){let r=0,s=1,o=1,c=0;for(let h=0;h<n;h++)r+=s*this.noise(e*o,t*o),c+=s,s*=.5,o*=2;return r/c}}const by=new ed(54321);new ed(12345);let Vr=null;function Ey(i=12345){if(Vr)return Vr;const e=h=>{const u=Math.sin(i*9999+h*7919)*1e4;return u-Math.floor(u)},t=12+Math.floor(e(0)*6),n=15,r=15,s=160,o=[];for(let h=0;h<t;h++){const u=h/t*Math.PI*2,d=.7+e(h+1)*.6,a=n+Math.cos(u)*s*d,l=r+Math.sin(u)*s*d,f=h/t,m=.5,g=.08,_=6,p=Math.exp(-Math.pow(f-m,2)/(2*Math.pow(g,2))),v=On(a,l)+.1-p*_;o.push(new O(a,v,l))}const c=new Vc(o);return c.closed=!0,c.curveType="centripetal",c.tension=.5,Vr=c,c}function On(i,e){return by.fbm(i*.01,e*.01,4)*40}function Ty(i=12345){const e=new jt,t=Ey(i),n=800,r=t.getSpacedPoints(n),s=[],o=[],c=[],h=Pi/2,u=t.getLength(),d=10;for(let S=0;S<=n;S++){const E=S/n,N=r[S],L=t.getTangentAt(E),U=new ue(L.x,L.z).normalize(),V=new ue(-U.y,U.x),Y=E*u/d;if(s.push(N.x+V.x*h,N.y+.05,N.z+V.y*h,N.x-V.x*h,N.y+.05,N.z-V.y*h),c.push(0,Y,1,Y),S<n){const z=S*2,H=S*2+1,F=(S+1)*2,$=(S+1)*2+1;o.push(z,F,H,H,F,$)}}const a=new Et;a.setAttribute("position",new Qe(s,3)),a.setAttribute("uv",new Qe(c,2)),a.setIndex(o),a.computeVertexNormals();const l=new wt({color:3355443,roughness:.8,side:dn}),f=new je(a,l);f.receiveShadow=!0,e.add(f);for(let S=0;S<2;S++){const E=[];for(let z=0;z<=n;z++){const H=z/n,F=r[z],$=t.getTangentAt(H),ie=new ue($.x,$.z).normalize(),he=new ue(-ie.y,ie.x),ve=S===0?-h-.2:h+.2,pe=F.x+he.x*ve,Ue=F.z+he.y*ve;E.push(new O(pe,F.y+.15,Ue))}const N=new Vc(E);N.closed=!0;const L=new Gc(N,n,.06,6,!0),U=new wt({color:S===0?13369344:14540253,roughness:.3,metalness:.5}),V=new je(L,U);V.castShadow=!0,e.add(V);const Y=24;for(let z=0;z<Y;z++){const H=z/Y,F=Math.floor(H*n),$=E[F],ie=t.getTangentAt(F/n),he=new ue(ie.x,ie.z).normalize();new ue(-he.y,he.x);const ve=new lr(.12,.35,.12),pe=new je(ve,U);pe.position.set($.x,$.y+.175,$.z),pe.castShadow=!0,e.add(pe)}}for(let S=0;S<2;S++)for(let N=0;N<40;N++){const L=N/40,U=Math.floor(L*n),V=r[U],Y=t.getTangentAt(U/n),z=new ue(Y.x,Y.z).normalize(),H=new ue(-z.y,z.x),F=S===0?-h-36-Math.random()*48:h+36+Math.random()*48,$=V.x+H.x*F,ie=V.z+H.y*F,he=On($,ie)+.1;if(Math.random()>.5){const Ue=new je(new cr(.06999999999999999,.1,.6,8),new wt({color:9127187}));Ue.position.set($,he+.6/2,ie),Ue.castShadow=!0,e.add(Ue);const K=.35,k=.5,w=new je(new qs(K,k,8),new wt({color:2263842}));w.position.set($,he+.6+k/2-.05,ie),w.castShadow=!0,e.add(w)}else{const ve=.2+Math.random()*.3,pe=new je(new ta(ve,0),new wt({color:8947848,roughness:.9}));pe.position.set($,he+ve*.5,ie),pe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),pe.castShadow=!0,e.add(pe)}}const m=.5,g=.2,_=180,p=16,v=new wt({color:1118481,roughness:1,flatShading:!0}),x=new ta(1,0),y=(_+1)*p,A=new Rm(x,v,y);A.castShadow=!0,A.receiveShadow=!0,e.add(A);const T=new At;let P=0;for(let S=0;S<=_;S++){const E=m-g+S/_*(g*2),N=t.getPointAt((E+1)%1),L=t.getTangentAt((E+1)%1),U=new ue(L.x,L.z).normalize(),V=new ue(-U.y,U.x),Y=new O(V.x,0,V.y),z=new O(0,1,0);for(let H=0;H<p;H++){const F=-.2+H/(p-1)*(Math.PI+.4),$=3.5+Math.random()*2.5,he=Pi/2+$*.9+.5+Math.random()*5,ve=N.clone().add(Y.clone().multiplyScalar(Math.cos(F)*he)).add(z.clone().multiplyScalar(Math.max(-.2,Math.sin(F))*he*.8));T.position.copy(ve),T.scale.setScalar($),T.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),T.updateMatrix(),A.setMatrixAt(P++,T.matrix)}}return{group:e,curve:t}}function wy(i=12345){let e=Ty(i);return Vr=e.curve,e}function Ay(){return Vr}function Ry(i,e){const t=Vr;if(!t)return 1/0;const n=800;let r=1/0;for(let s=0;s<=n;s++){const o=s/n,c=t.getPointAt(o),h=c.x-i,u=c.z-e,d=Math.sqrt(h*h+u*u);d<r&&(r=d)}return r}function Cy(i,e=0){const t=new jt,n=i.getPointAt(e),r=i.getTangentAt(e),s=new ue(r.x,r.z).normalize(),o=new ue(-s.y,s.x),c=Pi+.4,h=.6,u=.15,d=Math.ceil(c/u),a=Math.ceil(h/u);for(let A=0;A<d;A++)for(let T=0;T<a;T++){const P=(A+T)%2===0,S=new jr(u,u),E=new wt({color:P?16777215:2236962,side:dn}),N=new je(S,E),L=(A-d/2+.5)*u,U=(T-a/2+.5)*u;N.position.set(n.x+o.x*L-s.x*U,n.y+.06,n.z+o.y*L-s.y*U),N.rotation.x=-Math.PI/2,N.rotation.z=Math.atan2(r.x,r.z),t.add(N)}const l=2.5,f=new cr(.05,.05,l,8),m=new wt({color:8947848,metalness:.5}),g=new je(f,m);g.position.set(n.x-o.x*(c/2+.3),n.y+l/2,n.z-o.y*(c/2+.3)),g.castShadow=!0,t.add(g);const _=new je(f,m);_.position.set(n.x+o.x*(c/2+.3),n.y+l/2,n.z+o.y*(c/2+.3)),_.castShadow=!0,t.add(_);const p=c+1,v=new jr(p,.4),x=new wt({color:16711680,side:dn,metalness:.3}),y=new je(v,x);return y.position.set(n.x,n.y+l,n.z),y.rotation.y=Math.atan2(r.x,r.z),t.add(y),t}class Py extends Error{constructor(e,t,n){super(e),this.is_operational=t,this.context=n,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var td=(i=>(i.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",i.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",i.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",i.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",i.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",i.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",i.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",i.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",i))(td||{});class Iy extends Py{constructor(e,t,n){super(t??e,!0,n),this.category=e}}function Ys(i,e,t){return i}const Un=-1,Mn=-1,Es=Object.freeze(Object.create(null)),Hi=5,Wi=31,Ly=2166136261,Dy=16777619,Ny=2654435769,Uy=1367130551,fi=16,Rh=2,nd=1024,Io=0,Ch=0,Fy=31,Oy=1/60,By=4,zy=0,ky=4;class ci{_words;constructor(e){this._words=e??new Array(ky).fill(0)}has(e){const t=e>>>Hi;return t>=this._words.length?!1:(this._words[t]&1<<(e&Wi))!==0}set(e){const t=e>>>Hi;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&Wi)}clear(e){const t=e>>>Hi;t>=this._words.length||(this._words[t]&=~(1<<(e&Wi)))}overlaps(e){const t=this._words,n=e._words,r=t.length<n.length?t.length:n.length;for(let s=0;s<r;s++)if((t[s]&n[s])!==0)return!0;return!1}contains(e){const t=e._words,n=this._words,r=n.length;for(let s=0;s<t.length;s++){const o=t[s];if(o!==0&&(s>=r||(n[s]&o)!==o))return!1}return!0}equals(e){const t=this._words,n=e._words,r=t.length>n.length?t.length:n.length;for(let s=0;s<r;s++){const o=s<t.length?t[s]:0,c=s<n.length?n[s]:0;if(o!==c)return!1}return!0}copy(){return new ci(this._words.slice())}copy_with_set(e){const t=e>>>Hi,n=t+1,r=this._words.length>n?this._words.length:n,s=new Array(r).fill(0);for(let o=0;o<this._words.length;o++)s[o]=this._words[o];return s[t]|=1<<(e&Wi),new ci(s)}copy_with_clear(e){const t=this._words.slice(),n=e>>>Hi;return n<t.length&&(t[n]&=~(1<<(e&Wi))),new ci(t)}hash(){let e=Ly;const t=this._words;let n=t.length-1;for(;n>=0&&t[n]===0;)n--;for(let r=0;r<=n;r++)e^=t[r],e=Math.imul(e,Dy);return e}for_each(e){const t=this._words;for(let n=0;n<t.length;n++){let r=t[n];if(r===0)continue;const s=n<<Hi;for(;r!==0;){const o=r&-r>>>0,c=Wi-Math.clz32(o);e(s+c),r^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const n=new Array(t).fill(0);for(let r=0;r<this._words.length;r++)n[r]=this._words[r];this._words=n}}class Li{constructor(e,t=fi){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,n=this._len;return{next(){return e<n?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=Rh;const n=new this._ctor(t);n.set(this._buf.subarray(0,this._len)),this._buf=n}bulk_append(e,t,n){this.ensure_capacity(this._len+n),this._buf.set(e.subarray(t,t+n),this._len),this._len+=n}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*Rh);e.set(this._buf),this._buf=e}}class Vy extends Li{constructor(e=fi){super(Float32Array,e)}}class Gy extends Li{constructor(e=fi){super(Float64Array,e)}}class Hy extends Li{constructor(e=fi){super(Int8Array,e)}}class Wy extends Li{constructor(e=fi){super(Int16Array,e)}}class Xy extends Li{constructor(e=fi){super(Int32Array,e)}}class qy extends Li{constructor(e=fi){super(Uint8Array,e)}}class Yy extends Li{constructor(e=fi){super(Uint16Array,e)}}class id extends Li{constructor(e=fi){super(Uint32Array,e)}}const $y={f32:Vy,f64:Gy,i8:Hy,i16:Wy,i32:Xy,u8:qy,u16:Yy,u32:id},nr=20,Go=(1<<nr)-1,jy=Fy-nr,Ph=(1<<jy)-1,Zy=(i,e)=>e<<nr|i,nn=i=>i&Go,Ih=i=>i>>nr,Ky=i=>Ys(i),Jy=i=>Ys(i);class Qy{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let n=0;n<e.length;n++)this.columns.push([]);const t={length:0};for(let n=0;n<e.length;n++)t[e[n]]=this.columns[n];this.reader=t}emit(e){const t=this.field_names,n=this.columns;for(let r=0;r<t.length;r++)n[r].push(e[t[r]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const eS=i=>Ys(i);class tS{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let s=0;s<e.length;s++)this.field_index[e[s]]=s,this.columns.push([t[e[s]]??0]);const n=Object.create(null),r=this.columns;for(let s=0;s<e.length;s++){const o=r[s];Object.defineProperty(n,e[s],{get(){return o[Io]},enumerable:!0})}this.reader=n}write(e){const t=this.field_names,n=this.columns;for(let r=0;r<t.length;r++)t[r]in e&&(n[r][Io]=e[t[r]])}read_field(e){return this.columns[e][Io]}write_field(e,t){this.columns[e][Io]=t}}const nS=i=>Ys(i);class iS{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,n,r=nd){if(this.id=e,this.mask=t,this._entity_ids=new id(r),n){let s=0;for(let o=0;o<n.length;o++){const c=n[o],h=c.component_id,u=new Array(c.field_names.length);this._col_offset[h]=s,this._field_count[h]=c.field_names.length,this._field_index[h]=c.field_index,this._field_names[h]=c.field_names;for(let d=0;d<c.field_names.length;d++){const a=new $y[c.field_types[d]](r);u[d]=a,this._flat_columns[s++]=a}this.column_groups[h]={layout:c,columns:u},this._column_ids.push(h)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const n=e,r=this._field_index[n][t];return this._flat_columns[this._col_offset[n]+r].buf}write_fields(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return;const o=this._field_names[r],c=this._flat_columns;for(let h=0;h<o.length;h++)c[s+h].buf[e]=n[o[h]]}write_fields_positional(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return;const o=this._flat_columns;for(let c=0;c<n.length;c++)o[s+c].buf[e]=n[c]}read_field(e,t,n){const r=t,s=this._col_offset[r];if(s===void 0)return NaN;const o=this._field_index[r][n];return o===void 0?NaN:this._flat_columns[s+o].buf[e]}copy_shared_from(e,t,n){const r=e._col_offset,s=e._field_count,o=e._flat_columns,c=this._flat_columns,h=this._column_ids;for(let u=0;u<h.length;u++){const d=h[u],a=r[d];if(a===void 0)continue;const l=this._col_offset[d],f=s[d];for(let m=0;m<f;m++)c[l+m].buf[n]=o[a+m].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const n=this._flat_columns;for(let r=0;r<n.length;r++)n[r].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let n=Mn;const r=this._flat_columns,s=this._entity_ids.buf;if(e!==t){s[e]=s[t],n=nn(s[e]);for(let o=0;o<r.length;o++)r[o].swap_remove(e)}else for(let o=0;o<r.length;o++)r[o].pop();return this._entity_ids.pop(),this.length--,n}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let n=Mn;const r=this._entity_ids.buf;return e!==t&&(r[e]=r[t],n=nn(r[e])),this._entity_ids.pop(),this.length--,n}move_entity_from(e,t,n,r){const s=this.length;this._entity_ids.push(n);const o=this._flat_columns,c=e._flat_columns;for(let u=0;u<o.length;u++){const d=r[u];o[u].push(d>=0?c[d].buf[t]:0)}this.length++;const h=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);yt[0]=s,yt[1]=h}move_entity_from_tag(e,t,n){const r=this.length;this._entity_ids.push(n),this.length++;const s=e.remove_entity_tag(t);yt[0]=r,yt[1]=s}bulk_move_all_from(e,t){const n=e.length;if(n===0)return this.length;const r=this.length,s=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,n);for(let c=0;c<s.length;c++){const h=t[c];h>=0?s[c].bulk_append(o[h].buf,0,n):s[c].bulk_append_zeroes(n)}this.length+=n,e.length=0,e._entity_ids.clear();for(let c=0;c<o.length;c++)o[c].clear();return r}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const yt=[0,Mn];function Lo(i,e){const t=e._flat_columns,n=new Int16Array(t.length),r=e._column_ids,s=i._col_offset,o=e._col_offset,c=e._field_count;for(let h=0;h<r.length;h++){const u=r[h],d=o[u],a=c[u],l=s[u];if(l!==void 0)for(let f=0;f<a;f++)n[d+f]=l+f;else for(let f=0;f<a;f++)n[d+f]=-1}return n}function rd(i,e,t){const n=i.get(e);n!==void 0?n.push(t):i.set(e,[t])}class rS{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??nd,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ci)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),n=this.archetype_map.get(t);if(n!==void 0){for(let h=0;h<n.length;h++)if(this.archetypes[n[h]].mask.equals(e))return n[h]}const r=nS(this.next_archetype_id++),s=[];e.for_each(h=>{const u=h,d=this.component_metas[u];d&&d.field_names.length>0&&s.push({component_id:u,field_names:d.field_names,field_index:d.field_index,field_types:d.field_types})});const o=new iS(r,e,s,this.initial_capacity);this.archetypes.push(o),rd(this.archetype_map,t,r),e.for_each(h=>{const u=h;let d=this.component_index.get(u);d||(d=new Set,this.component_index.set(u,d)),d.add(r)});const c=this.registered_queries;for(let h=0;h<c.length;h++){const u=c[h];o.matches(u.include_mask)&&(!u.exclude_mask||!o.mask.overlaps(u.exclude_mask))&&(!u.any_of_mask||o.mask.overlaps(u.any_of_mask))&&u.result.push(o)}return r}arch_resolve_add(e,t){const n=this.arch_get(e);if(n.mask.has(t))return e;const r=n.get_edge(t);if(r?.add!=null)return r.add;const s=this.arch_get_or_create_from_mask(n.mask.copy_with_set(t));return this.arch_cache_edge(n,this.arch_get(s),t),s}arch_resolve_remove(e,t){const n=this.arch_get(e);if(!n.mask.has(t))return e;const r=n.get_edge(t);if(r?.remove!=null)return r.remove;const s=this.arch_get_or_create_from_mask(n.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(s),n,t),s}arch_cache_edge(e,t,n){const r=e.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};r.add=t.id,r.add_map=Lo(e,t),e.set_edge(n,r);const s=t.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};s.remove=e.id,s.remove_map=Lo(t,e),t.set_edge(n,s)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=Ch,t=Ch),this.entity_alive_count++;const n=Zy(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Un,n}destroy_entity(e){if(!this.is_alive(e))return;const t=nn(e),n=this.entity_row[t];if(n!==Un){const s=this.arch_get(this.entity_archetype[t]).remove_entity(n);s!==Mn&&(this.entity_row[s]=n)}this.entity_archetype[t]=Un,this.entity_row[t]=Un;const r=Ih(e);this.entity_generations[t]=r+1&Ph,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=nn(e);return t<this.entity_high_water&&this.entity_generations[t]===Ih(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,n=this.entity_row,r=this.entity_generations,s=this.archetypes,o=this.entity_high_water;for(let c=0;c<e.length;c++){const h=e[c],u=h&Go,d=h>>nr;if(u>=o||r[u]!==d)continue;const a=n[u];if(a!==Un){const l=s[t[u]],f=l.has_columns?l.remove_entity(a):l.remove_entity_tag(a);f!==Mn&&(n[f]=a)}t[u]=Un,n[u]=Un,r[u]=d+1&Ph,this.entity_free_indices.push(u),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,n){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(n??Es)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,n=this.pending_add_values,r=e.length,s=this.entity_archetype,o=this.entity_row,c=this.entity_generations,h=this.archetypes,u=this.component_metas,d=this.entity_high_water;for(let a=0;a<r;a++){const l=e[a],f=l&Go,m=l>>nr;if(f>=d||c[f]!==m)continue;const g=s[f],_=t[a],p=h[g];if(p.mask.has(_)){u[_].field_names.length>0&&p.write_fields(o[f],_,n[a]);continue}const v=this.arch_resolve_add(g,_),x=h[v],y=o[f],A=!x.has_columns&&!p.has_columns;let T;if(y!==Un){if(A)x.move_entity_from_tag(p,y,l);else{const P=p.get_edge(_);x.move_entity_from(p,y,l,P.add_map)}T=yt[0],yt[1]!==Mn&&(o[yt[1]]=y)}else T=A?x.add_entity_tag(l):x.add_entity(l);u[_].field_names.length>0&&x.write_fields(T,_,n[a]),s[f]=v,o[f]=T}e.length=0,t.length=0,n.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,n=e.length,r=this.entity_archetype,s=this.entity_row,o=this.entity_generations,c=this.archetypes,h=this.entity_high_water;for(let u=0;u<n;u++){const d=e[u],a=d&Go,l=d>>nr;if(a>=h||o[a]!==l)continue;const f=r[a],m=t[u],g=c[f];if(!g.mask.has(m))continue;const _=this.arch_resolve_remove(f,m),p=c[_],v=s[a];if(!p.has_columns&&!g.has_columns)p.move_entity_from_tag(g,v,d);else{const x=g.get_edge(m);p.move_entity_from(g,v,d,x.remove_map)}yt[1]!==Mn&&(s[yt[1]]=v),r[a]=_,s[a]=yt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=Ky(this.component_count++),n=Object.keys(e),r=new Array(n.length),s=Object.create(null);for(let o=0;o<n.length;o++)s[n[o]]=o,r[o]=e[n[o]];return this.component_metas.push({field_names:n,field_index:s,field_types:r}),t}add_component(e,t,n){if(!this.is_alive(e))return;const r=nn(e),s=this.entity_archetype[r],o=this.arch_get(s);if(o.has_component(t)){o.write_fields(this.entity_row[r],t,n);return}const c=this.arch_resolve_add(s,t),h=this.arch_get(c),u=this.entity_row[r];let d;if(u!==Un){const a=o.get_edge(t);!h.has_columns&&!o.has_columns?h.move_entity_from_tag(o,u,e):h.move_entity_from(o,u,e,a.add_map),d=yt[0],yt[1]!==Mn&&(this.entity_row[yt[1]]=u)}else d=h.has_columns?h.add_entity(e):h.add_entity_tag(e);h.write_fields(d,t,n),this.entity_archetype[r]=c,this.entity_row[r]=d}add_components(e,t){if(!this.is_alive(e))return;const n=nn(e),r=this.entity_archetype[n];let s=r;for(let o=0;o<t.length;o++)s=this.arch_resolve_add(s,t[o].def);if(s!==r){const o=this.arch_get(r),c=this.arch_get(s),h=this.entity_row[n];let u;if(h!==Un){const d=Lo(o,c);c.move_entity_from(o,h,e,d),u=yt[0],yt[1]!==Mn&&(this.entity_row[yt[1]]=h)}else u=c.add_entity(e);for(let d=0;d<t.length;d++)c.write_fields(u,t[d].def,t[d].values??Es);this.entity_archetype[n]=s,this.entity_row[n]=u}else{const o=this.arch_get(r),c=this.entity_row[n];for(let h=0;h<t.length;h++)o.write_fields(c,t[h].def,t[h].values??Es)}}remove_component(e,t){if(!this.is_alive(e))return;const n=nn(e),r=this.entity_archetype[n],s=this.arch_get(r);if(!s.has_component(t))return;const o=this.arch_resolve_remove(r,t),c=this.arch_get(o),h=this.entity_row[n],u=s.get_edge(t);!c.has_columns&&!s.has_columns?c.move_entity_from_tag(s,h,e):c.move_entity_from(s,h,e,u.remove_map),yt[1]!==Mn&&(this.entity_row[yt[1]]=h),this.entity_archetype[n]=o,this.entity_row[n]=yt[0]}remove_components(e,t){if(!this.is_alive(e))return;const n=nn(e),r=this.entity_archetype[n];let s=r;for(let d=0;d<t.length;d++)s=this.arch_resolve_remove(s,t[d]);if(s===r)return;const o=this.arch_get(r),c=this.arch_get(s),h=this.entity_row[n],u=Lo(o,c);c.move_entity_from(o,h,e,u),yt[1]!==Mn&&(this.entity_row[yt[1]]=h),this.entity_archetype[n]=s,this.entity_row[n]=yt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const n=nn(e);return this.arch_get(this.entity_archetype[n]).has_component(t)}batch_add_component(e,t,n){if(e.length===0)return;const r=t;if(e.mask.has(r))return;const s=this.arch_resolve_add(e.id,r),o=this.arch_get(s),c=e.get_edge(r),h=e.length,u=this.entity_archetype,d=this.entity_row,a=o.bulk_move_all_from(e,c.add_map);for(let l=0;l<h;l++){const f=nn(o.entity_ids[a+l]);u[f]=s,d[f]=a+l}if(this.component_metas[r].field_names.length>0&&n)for(let l=0;l<h;l++)o.write_fields(a+l,r,n)}batch_remove_component(e,t){if(e.length===0)return;const n=t;if(!e.mask.has(n))return;const r=this.arch_resolve_remove(e.id,n),s=this.arch_get(r),o=e.get_edge(n),c=e.length,h=s.bulk_move_all_from(e,o.remove_map),u=this.entity_archetype,d=this.entity_row;for(let a=0;a<c;a++){const l=nn(s.entity_ids[h+a]);u[l]=r,d[l]=h+a}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[nn(e)])}get_entity_row(e){return this.entity_row[nn(e)]}get_matching_archetypes(e,t,n){const r=e._words;let s=!1;for(let u=0;u<r.length;u++)if(r[u]!==0){s=!0;break}if(!s)return this.archetypes.filter(u=>(!t||!u.mask.overlaps(t))&&(!n||u.mask.overlaps(n)));let o,c=!1;for(let u=0;u<r.length;u++){let d=r[u];if(d===0)continue;const a=u<<Hi;for(;d!==0;){const l=d&-d>>>0,f=a+(Wi-Math.clz32(l));d^=l;const m=this.component_index.get(f);if(!m||m.size===0){c=!0;break}(!o||m.size<o.size)&&(o=m)}if(c)break}if(c||!o)return[];const h=[];for(const u of o){const d=this.arch_get(u);d.matches(e)&&(!t||!d.mask.overlaps(t))&&(!n||d.mask.overlaps(n))&&h.push(d)}return h}register_query(e,t,n){const r=this.get_matching_archetypes(e,t,n);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:n?n.copy():null,result:r}),r}get archetype_count(){return this.archetypes.length}register_event(e){const t=Jy(this.event_count++),n=new Qy(e);return this.event_channels.push(n),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const n=eS(this.resource_count++),r=new tS(e,t);return this.resource_channels.push(r),n}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const il=["PRE_STARTUP","STARTUP","POST_STARTUP"],rl=["PRE_UPDATE","UPDATE","POST_UPDATE"];class sS{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<il.length;e++)this.label_systems.set(il[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<rl.length;e++)this.label_systems.set(rl[e],[])}add_systems(e,...t){for(const n of t){const r="system"in n?n.system:n,s="system"in n?n.ordering:void 0,o={descriptor:r,insertion_order:this.next_insertion_order++,before:new Set(s?.before??[]),after:new Set(s?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(r,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const n=this.label_systems.get(t),r=n.findIndex(s=>s.descriptor===e);if(r!==-1){const s=n.length-1;r!==s&&(n[r]=n[s]),n.pop();for(const o of n)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of il)this.run_label(t,e,zy)}run_update(e,t){for(const n of rl)this.run_label(n,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const n of t)e.push(n.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,n){const r=this.get_sorted(e);for(let s=0;s<r.length;s++)r[s].fn(t,n);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const n=this.label_systems.get(e),r=this.topological_sort(n,e);return this.sorted_cache.set(e,r),r}topological_sort(e,t){if(e.length===0)return[];const n=new Map,r=new Map,s=new Map,o=new Set;for(const u of e)n.set(u.descriptor,new Set),r.set(u.descriptor,0),s.set(u.descriptor,u.insertion_order),o.add(u.descriptor);for(const u of e){for(const d of u.before)o.has(d)&&(n.get(u.descriptor).add(d),r.set(d,r.get(d)+1));for(const d of u.after)o.has(d)&&(n.get(d).add(u.descriptor),r.set(u.descriptor,r.get(u.descriptor)+1))}let c=[];for(const u of e)r.get(u.descriptor)===0&&c.push(u.descriptor);c.sort((u,d)=>s.get(d)-s.get(u));const h=[];for(;c.length>0;){const u=c.pop();h.push(u);for(const d of n.get(u)){const a=r.get(d)-1;r.set(d,a),a===0&&c.push(d)}c.sort((d,a)=>s.get(a)-s.get(d))}if(h.length!==e.length){const u=new Set(h),d=e.filter(a=>!u.has(a.descriptor)).map(a=>a.descriptor.name??`system_${a.descriptor.id}`);throw new Iy(td.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${d.join(", ")}]`)}return h}}const Lh=new WeakMap;function oS(i,e){let t=Lh.get(i);if(!t){t=Object.create(null);const{field_names:s}=i.layout;for(let o=0;o<s.length;o++){const c=o;Object.defineProperty(t,s[o],{get(){return this._columns[c][this._row]},set(h){this._columns[c][this._row]=h},enumerable:!0,configurable:!1})}Lh.set(i,t)}const n=Object.create(t),r=new Array(i.columns.length);for(let s=0;s<i.columns.length;s++)r[s]=i.columns[s].buf;return n._columns=r,n._row=e,n}class aS{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,n,r,s,o){this._archetypes=e,this._defs=t,this._resolver=n,this._include=r,this._exclude=s,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let n=0;n<e.length;n++)t+=e[n].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),n=this._defs.slice();for(let r=0;r<e.length;r++)t.has(e[r])||(t.set(e[r]),n.push(e[r]));return this._resolver._resolve_query(t,this._exclude,this._any_of,n)}not(...e){const t=this._exclude?this._exclude.copy():new ci;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new ci;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class lS{constructor(e){this._resolver=e}every(...e){const t=new ci;for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolver._resolve_query(t,null,null,e)}}class cS{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,n){const r=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return r.read_field(s,t,n)}set_field(e,t,n,r){const s=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),c=s.get_column(t,n);c[o]=r}ref(e,t){const n=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return oS(n.column_groups[e],r)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,n){return this.store.add_component_deferred(e,t,n??Es),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const uS=i=>Ys(i);class hS{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ci;constructor(e){this.store=new rS(e?.initial_capacity),this.schedule=new sS,this.ctx=new cS(this.store),this._fixed_timestep=e?.fixed_timestep??Oy,this._max_fixed_steps=e?.max_fixed_steps??By}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const n=t??"f64",r=Object.create(null);for(const s of e)r[s]=n;return this.store.register_component(r)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,n){return this.store.add_component(e,t,n??Es),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,n){this.store.batch_add_component(e,t,n)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,n){const r=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return r.read_field(s,t,n)}set_field(e,t,n,r){const s=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),c=s.get_column(t,n);c[o]=r}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let n=0;n<e.length;n++)t.set(e[n]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,n,r){const s=e.hash(),o=t?t.hash():0,c=n?n.hash():0,h=s^Math.imul(o,Ny)^Math.imul(c,Uy)|0,u=this._find_cached(h,e,t,n);if(u!==void 0)return u.query;const d=this.store.register_query(e,t??void 0,n??void 0),a=new aS(d,r,this,e.copy(),t?.copy()??null,n?.copy()??null);return rd(this.query_cache,h,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:n?.copy()??null,query:a}),a}_find_cached(e,t,n,r){const s=this.query_cache.get(e);if(s)for(let o=0;o<s.length;o++){const c=s[o];if(!(!c.include_mask.equals(t)||!(n===null?c.exclude_mask===null:c.exclude_mask!==null&&c.exclude_mask.equals(n))||!(r===null?c.any_of_mask===null:c.any_of_mask!==null&&c.any_of_mask.equals(r))))return c}}register_system(e,t){let n;if(typeof e=="function")if(t!==void 0){const o=t(new lS(this)),c=this.ctx,h=e;n={fn:(u,d)=>h(o,c,d)}}else n={fn:e};else n=e;const r=uS(this.next_system_id++),s=Object.freeze(Object.assign({id:r},n));return this.systems.add(s),s}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class fS{#e;#n;constructor(){const[e,t]=rp({});this.#e=e,this.#n=t}track(e){e in this.#e||queueMicrotask(()=>{this.#n(t=>(t[e]=0,t))}),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class dc{#e;#n;#t;#r;#i=0;#s=!1;#o;constructor(e,t,n,r,s){this.#t=e,this.#r=t,this.#e=n,this.#n=r,this.#o=s}get value(){return this.#t.track(this.#r),Yt()!==null&&(this.#i++,this.#s||(this.#s=!0,la(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#s=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class dS{#e;#n;#t;#r;#i;constructor(e,t,n){this.#e=e,this.#n=t,this.#t=n,this.#i=`resource:${t.toString()}`,this.#r=new Map}get resourceKey(){return this.#i}#s(e){if(Yt()===null)return this.#t[e];const n=`${this.#i}:${e}`;let r=this.#r.get(e);return r===void 0&&(r=new dc(this.#e,n,()=>this.#t[e],()=>this.#e.dirty(n),()=>{this.#e.untrack(n),this.#r.delete(e)}),this.#r.set(e,r)),r.value}get delta(){return this.#s("delta")}get elapsed(){return this.#s("elapsed")}get(e){return this.#s(e)}}class pS{#e;#n;#t;#r;#i;constructor(e,t,n){this.#e=e,this.#n=t,this.#t=n,this.#r=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(Yt()===null)return this.#n.has_component(this.#t,e);const n=`entity:${this.#t}:has:${e}`;let r=this.#r.get(n);return r===void 0&&(r=new dc(this.#e,n,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(n),()=>{this.#e.untrack(n),this.#r.delete(n)}),this.#r.set(n,r)),r.value}getField(e,t){if(Yt()===null)return this.#n.get_field(this.#t,e,t);const r=`entity:${this.#t}:${e}:${t}`;let s=this.#i.get(r);return s===void 0&&(s=new dc(this.#e,r,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(r),()=>{this.#e.untrack(r),this.#i.delete(r)}),this.#i.set(r,s)),s.value}}class Ts{#e;#n;#t;#r;#i;constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=n,this.#i=r,this.#t=t.query(...n)}get queryKey(){return this.#i}get archetype_count(){return Yt()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return Yt()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return Yt()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=Yt();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new mS(this.#e,this.#n,t,this.#i)}and(...e){return new Ts(this.#e,this.#n,[...this.#r,...e],`${this.#i}:and`)}not(...e){return new Ts(this.#e,this.#n,this.#r,`${this.#i}:not`)}any_of(...e){return new Ts(this.#e,this.#n,this.#r,`${this.#i}:any_of`)}}class mS{#e;#n;#t;#r;constructor(e,t,n,r){this.#e=e,this.#n=t,this.#t=n,this.#r=r}get entity_ids(){if(Yt()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(Yt()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(Yt()===null)return this.#t.has_component(e);const n=`arch:${this.#t.id}:has:${e}`;return this.#e.track(n),this.#t.has_component(e)}get_column(e,t){if(Yt()===null)return this.#t.get_column(e,t);const r=`arch:${this.#t.id}:col`;return this.#e.track(r),this.#t.get_column(e,t)}}class _S{#e;#n;constructor(e){this.#e=e,this.#n=new fS}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(n=>n.toString()).join(",")}`;return new Ts(this.#n,this.#e,e,t)}resource(e){return new dS(this.#n,e,this.#e.resource(e))}entity(e){return new pS(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return on(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),on(()=>this.#n.dirty("world:entities"))}add_component(e,t,n){const r=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,n),on(()=>{this.#n.dirty(r),this.#n.dirty("world:entities")}),this}remove_component(e,t){const n=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),on(()=>{this.#n.dirty(n),this.#n.dirty("world:entities")}),this}set_field(e,t,n,r){const s=`entity:${e}:${t}:${n}`;this.#e.set_field(e,t,n,r),on(()=>this.#n.dirty(s))}set_resource(e,t){const n=this.#e.resource(e);this.#e.set_resource(e,t);for(const r of Object.keys(n))this.#n.dirty(`resource:${e.toString()}:${r}`)}}const gS={def:{x:"f64",y:"f64",z:"f64"}},xS={def:{x:"f64",y:"f64",z:"f64"}},vS={def:{x:"f64",y:"f64",z:"f64",w:"f64"}},yS={def:{playerType:"u8",facingForward:"u8"}},SS={def:[]},MS={def:{meshId:"u32"}},bS={def:{speed:"f64"}},ES={schema:{x:0,y:-10,z:0}},In=new hS,TS=new _S(In),Kt=In.register_component(gS.def),Xi=In.register_component(xS.def),Dt=In.register_component(vS.def),Ho=In.register_component(yS.def);In.register_component(SS.def);In.register_component(MS.def);const ws=In.register_component(bS.def),sd=In.register_resource(["x","y","z"],ES.schema);function wS(){return In.startup(),In.set_resource(sd,{x:0,y:-10,z:0}),{ecs:TS}}function AS(i){const e=i.reactiveEcs,t=e.create_entity();return e.add_component(t,Kt,{x:i.position.x,y:i.position.y,z:i.position.z}),e.add_component(t,Xi,{x:i.velocity.x,y:i.velocity.y,z:i.velocity.z}),e.add_component(t,Dt,{x:0,y:0,z:0,w:1}),e.add_component(t,Ho,{playerType:1,facingForward:1}),e.add_component(t,ws,{speed:0}),t}const RS=sn;class ia extends ha{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,r){const s=this,o=new Xf(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(c))}catch(h){r?r(h):console.error(h),s.manager.itemError(e)}},n,r)}parse(e){const t=this;function n(K,k){if(K.nodeType!==1)return;const w=y(K);let R=!1,j=null;switch(K.nodeName){case"svg":k=m(K,k);break;case"style":s(K);break;case"g":k=m(K,k);break;case"path":k=m(K,k),K.hasAttribute("d")&&(j=r(K));break;case"rect":k=m(K,k),j=h(K);break;case"polygon":k=m(K,k),j=u(K);break;case"polyline":k=m(K,k),j=d(K);break;case"circle":k=m(K,k),j=a(K);break;case"ellipse":k=m(K,k),j=l(K);break;case"line":k=m(K,k),j=f(K);break;case"defs":R=!0;break;case"use":k=m(K,k);const Q=(K.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),me=K.viewportElement.getElementById(Q);me?n(me,k):console.warn("SVGLoader: 'use node' references non-existent node id: "+Q);break}j&&(k.fill!==void 0&&k.fill!=="none"&&j.color.setStyle(k.fill,RS),T(j,ve),U.push(j),j.userData={node:K,style:k});const le=K.childNodes;for(let B=0;B<le.length;B++){const Q=le[B];R&&Q.nodeName!=="style"&&Q.nodeName!=="defs"||n(Q,k)}w&&(Y.pop(),Y.length>0?ve.copy(Y[Y.length-1]):ve.identity())}function r(K){const k=new zi,w=new ue,R=new ue,j=new ue;let le=!0,B=!1;const Q=K.getAttribute("d");if(Q===""||Q==="none")return null;const me=Q.match(/[a-df-z][^a-df-z]*/ig);for(let de=0,G=me.length;de<G;de++){const X=me[de],J=X.charAt(0),ne=X.slice(1).trim();le===!0&&(B=!0,le=!1);let b;switch(J){case"M":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2)w.x=b[D+0],w.y=b[D+1],R.x=w.x,R.y=w.y,D===0?k.moveTo(w.x,w.y):k.lineTo(w.x,w.y),D===0&&j.copy(w);break;case"H":b=_(ne);for(let D=0,ce=b.length;D<ce;D++)w.x=b[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"V":b=_(ne);for(let D=0,ce=b.length;D<ce;D++)w.y=b[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"L":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2)w.x=b[D+0],w.y=b[D+1],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"C":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=6)k.bezierCurveTo(b[D+0],b[D+1],b[D+2],b[D+3],b[D+4],b[D+5]),R.x=b[D+2],R.y=b[D+3],w.x=b[D+4],w.y=b[D+5],D===0&&B===!0&&j.copy(w);break;case"S":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=4)k.bezierCurveTo(g(w.x,R.x),g(w.y,R.y),b[D+0],b[D+1],b[D+2],b[D+3]),R.x=b[D+0],R.y=b[D+1],w.x=b[D+2],w.y=b[D+3],D===0&&B===!0&&j.copy(w);break;case"Q":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=4)k.quadraticCurveTo(b[D+0],b[D+1],b[D+2],b[D+3]),R.x=b[D+0],R.y=b[D+1],w.x=b[D+2],w.y=b[D+3],D===0&&B===!0&&j.copy(w);break;case"T":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2){const Me=g(w.x,R.x),_e=g(w.y,R.y);k.quadraticCurveTo(Me,_e,b[D+0],b[D+1]),R.x=Me,R.y=_e,w.x=b[D+0],w.y=b[D+1],D===0&&B===!0&&j.copy(w)}break;case"A":b=_(ne,[3,4],7);for(let D=0,ce=b.length;D<ce;D+=7){if(b[D+5]==w.x&&b[D+6]==w.y)continue;const Me=w.clone();w.x=b[D+5],w.y=b[D+6],R.x=w.x,R.y=w.y,o(k,b[D],b[D+1],b[D+2],b[D+3],b[D+4],Me,w),D===0&&B===!0&&j.copy(w)}break;case"m":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2)w.x+=b[D+0],w.y+=b[D+1],R.x=w.x,R.y=w.y,D===0?k.moveTo(w.x,w.y):k.lineTo(w.x,w.y),D===0&&j.copy(w);break;case"h":b=_(ne);for(let D=0,ce=b.length;D<ce;D++)w.x+=b[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"v":b=_(ne);for(let D=0,ce=b.length;D<ce;D++)w.y+=b[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"l":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2)w.x+=b[D+0],w.y+=b[D+1],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&B===!0&&j.copy(w);break;case"c":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=6)k.bezierCurveTo(w.x+b[D+0],w.y+b[D+1],w.x+b[D+2],w.y+b[D+3],w.x+b[D+4],w.y+b[D+5]),R.x=w.x+b[D+2],R.y=w.y+b[D+3],w.x+=b[D+4],w.y+=b[D+5],D===0&&B===!0&&j.copy(w);break;case"s":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=4)k.bezierCurveTo(g(w.x,R.x),g(w.y,R.y),w.x+b[D+0],w.y+b[D+1],w.x+b[D+2],w.y+b[D+3]),R.x=w.x+b[D+0],R.y=w.y+b[D+1],w.x+=b[D+2],w.y+=b[D+3],D===0&&B===!0&&j.copy(w);break;case"q":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=4)k.quadraticCurveTo(w.x+b[D+0],w.y+b[D+1],w.x+b[D+2],w.y+b[D+3]),R.x=w.x+b[D+0],R.y=w.y+b[D+1],w.x+=b[D+2],w.y+=b[D+3],D===0&&B===!0&&j.copy(w);break;case"t":b=_(ne);for(let D=0,ce=b.length;D<ce;D+=2){const Me=g(w.x,R.x),_e=g(w.y,R.y);k.quadraticCurveTo(Me,_e,w.x+b[D+0],w.y+b[D+1]),R.x=Me,R.y=_e,w.x=w.x+b[D+0],w.y=w.y+b[D+1],D===0&&B===!0&&j.copy(w)}break;case"a":b=_(ne,[3,4],7);for(let D=0,ce=b.length;D<ce;D+=7){if(b[D+5]==0&&b[D+6]==0)continue;const Me=w.clone();w.x+=b[D+5],w.y+=b[D+6],R.x=w.x,R.y=w.y,o(k,b[D],b[D+1],b[D+2],b[D+3],b[D+4],Me,w),D===0&&B===!0&&j.copy(w)}break;case"Z":case"z":k.currentPath.autoClose=!0,k.currentPath.curves.length>0&&(w.copy(j),k.currentPath.currentPoint.copy(w),le=!0);break;default:console.warn(X)}B=!1}return k}function s(K){if(!(!K.sheet||!K.sheet.cssRules||!K.sheet.cssRules.length))for(let k=0;k<K.sheet.cssRules.length;k++){const w=K.sheet.cssRules[k];if(w.type!==1)continue;const R=w.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<R.length;j++){const le=Object.fromEntries(Object.entries(w.style).filter(([,B])=>B!==""));V[R[j]]=Object.assign(V[R[j]]||{},le)}}}function o(K,k,w,R,j,le,B,Q){if(k==0||w==0){K.lineTo(Q.x,Q.y);return}R=R*Math.PI/180,k=Math.abs(k),w=Math.abs(w);const me=(B.x-Q.x)/2,de=(B.y-Q.y)/2,G=Math.cos(R)*me+Math.sin(R)*de,X=-Math.sin(R)*me+Math.cos(R)*de;let J=k*k,ne=w*w;const b=G*G,D=X*X,ce=b/J+D/ne;if(ce>1){const xe=Math.sqrt(ce);k=xe*k,w=xe*w,J=k*k,ne=w*w}const Me=J*D+ne*b,_e=(J*ne-Me)/Me;let I=Math.sqrt(Math.max(0,_e));j===le&&(I=-I);const M=I*k*X/w,W=-I*w*G/k,re=Math.cos(R)*M-Math.sin(R)*W+(B.x+Q.x)/2,fe=Math.sin(R)*M+Math.cos(R)*W+(B.y+Q.y)/2,oe=c(1,0,(G-M)/k,(X-W)/w),Pe=c((G-M)/k,(X-W)/w,(-G-M)/k,(-X-W)/w)%(Math.PI*2);K.currentPath.absellipse(re,fe,k,w,oe,oe+Pe,le===0,R)}function c(K,k,w,R){const j=K*w+k*R,le=Math.sqrt(K*K+k*k)*Math.sqrt(w*w+R*R);let B=Math.acos(Math.max(-1,Math.min(1,j/le)));return K*R-k*w<0&&(B=-B),B}function h(K){const k=x(K.getAttribute("x")||0),w=x(K.getAttribute("y")||0),R=x(K.getAttribute("rx")||K.getAttribute("ry")||0),j=x(K.getAttribute("ry")||K.getAttribute("rx")||0),le=x(K.getAttribute("width")),B=x(K.getAttribute("height")),Q=1-.551915024494,me=new zi;return me.moveTo(k+R,w),me.lineTo(k+le-R,w),(R!==0||j!==0)&&me.bezierCurveTo(k+le-R*Q,w,k+le,w+j*Q,k+le,w+j),me.lineTo(k+le,w+B-j),(R!==0||j!==0)&&me.bezierCurveTo(k+le,w+B-j*Q,k+le-R*Q,w+B,k+le-R,w+B),me.lineTo(k+R,w+B),(R!==0||j!==0)&&me.bezierCurveTo(k+R*Q,w+B,k,w+B-j*Q,k,w+B-j),me.lineTo(k,w+j),(R!==0||j!==0)&&me.bezierCurveTo(k,w+j*Q,k+R*Q,w,k+R,w),me}function u(K){function k(le,B,Q){const me=x(B),de=x(Q);j===0?R.moveTo(me,de):R.lineTo(me,de),j++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new zi;let j=0;return K.getAttribute("points").replace(w,k),R.currentPath.autoClose=!0,R}function d(K){function k(le,B,Q){const me=x(B),de=x(Q);j===0?R.moveTo(me,de):R.lineTo(me,de),j++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new zi;let j=0;return K.getAttribute("points").replace(w,k),R.currentPath.autoClose=!1,R}function a(K){const k=x(K.getAttribute("cx")||0),w=x(K.getAttribute("cy")||0),R=x(K.getAttribute("r")||0),j=new kr;j.absarc(k,w,R,0,Math.PI*2);const le=new zi;return le.subPaths.push(j),le}function l(K){const k=x(K.getAttribute("cx")||0),w=x(K.getAttribute("cy")||0),R=x(K.getAttribute("rx")||0),j=x(K.getAttribute("ry")||0),le=new kr;le.absellipse(k,w,R,j,0,Math.PI*2);const B=new zi;return B.subPaths.push(le),B}function f(K){const k=x(K.getAttribute("x1")||0),w=x(K.getAttribute("y1")||0),R=x(K.getAttribute("x2")||0),j=x(K.getAttribute("y2")||0),le=new zi;return le.moveTo(k,w),le.lineTo(R,j),le.currentPath.autoClose=!1,le}function m(K,k){k=Object.assign({},k);let w={};if(K.hasAttribute("class")){const B=K.getAttribute("class").split(/\s/).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<B.length;Q++)w=Object.assign(w,V["."+B[Q]])}K.hasAttribute("id")&&(w=Object.assign(w,V["#"+K.getAttribute("id")]));function R(B,Q,me){me===void 0&&(me=function(G){return G.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),G}),K.hasAttribute(B)&&(k[Q]=me(K.getAttribute(B))),w[Q]&&(k[Q]=me(w[Q])),K.style&&K.style[B]!==""&&(k[Q]=me(K.style[B]))}function j(B){return Math.max(0,Math.min(1,x(B)))}function le(B){return Math.max(0,x(B))}return R("fill","fill"),R("fill-opacity","fillOpacity",j),R("fill-rule","fillRule"),R("opacity","opacity",j),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",j),R("stroke-width","strokeWidth",le),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",le),R("visibility","visibility"),k}function g(K,k){return K-(k-K)}function _(K,k,w){if(typeof K!="string")throw new TypeError("Invalid input: "+typeof K);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,le=1,B=2,Q=3;let me=j,de=!0,G="",X="";const J=[];function ne(Me,_e,I){const M=new SyntaxError('Unexpected character "'+Me+'" at index '+_e+".");throw M.partial=I,M}function b(){G!==""&&(X===""?J.push(Number(G)):J.push(Number(G)*Math.pow(10,Number(X)))),G="",X=""}let D;const ce=K.length;for(let Me=0;Me<ce;Me++){if(D=K[Me],Array.isArray(k)&&k.includes(J.length%w)&&R.FLAGS.test(D)){me=le,G=D,b();continue}if(me===j){if(R.WHITESPACE.test(D))continue;if(R.DIGIT.test(D)||R.SIGN.test(D)){me=le,G=D;continue}if(R.POINT.test(D)){me=B,G=D;continue}R.COMMA.test(D)&&(de&&ne(D,Me,J),de=!0)}if(me===le){if(R.DIGIT.test(D)){G+=D;continue}if(R.POINT.test(D)){G+=D,me=B;continue}if(R.EXP.test(D)){me=Q;continue}R.SIGN.test(D)&&G.length===1&&R.SIGN.test(G[0])&&ne(D,Me,J)}if(me===B){if(R.DIGIT.test(D)){G+=D;continue}if(R.EXP.test(D)){me=Q;continue}R.POINT.test(D)&&G[G.length-1]==="."&&ne(D,Me,J)}if(me===Q){if(R.DIGIT.test(D)){X+=D;continue}if(R.SIGN.test(D)){if(X===""){X+=D;continue}X.length===1&&R.SIGN.test(X)&&ne(D,Me,J)}}R.WHITESPACE.test(D)?(b(),me=j,de=!1):R.COMMA.test(D)?(b(),me=j,de=!0):R.SIGN.test(D)?(b(),me=le,G=D):R.POINT.test(D)?(b(),me=B,G=D):ne(D,Me,J)}return b(),J}const p=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(K){let k="px";if(typeof K=="string"||K instanceof String)for(let R=0,j=p.length;R<j;R++){const le=p[R];if(K.endsWith(le)){k=le,K=K.substring(0,K.length-le.length);break}}let w;return k==="px"&&t.defaultUnit!=="px"?w=v.in[t.defaultUnit]/t.defaultDPI:(w=v[k][t.defaultUnit],w<0&&(w=v[k].in*t.defaultDPI)),w*parseFloat(K)}function y(K){if(!(K.hasAttribute("transform")||K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))))return null;const k=A(K);return Y.length>0&&k.premultiply(Y[Y.length-1]),ve.copy(k),Y.push(k),k}function A(K){const k=new qe,w=z;if(K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))){const R=x(K.getAttribute("x")||0),j=x(K.getAttribute("y")||0);k.translate(R,j)}if(K.hasAttribute("transform")){const R=K.getAttribute("transform").split(")");for(let j=R.length-1;j>=0;j--){const le=R[j].trim();if(le==="")continue;const B=le.indexOf("("),Q=le.length;if(B>0&&B<Q){const me=le.slice(0,B),de=_(le.slice(B+1));switch(w.identity(),me){case"translate":if(de.length>=1){const G=de[0];let X=0;de.length>=2&&(X=de[1]),w.translate(G,X)}break;case"rotate":if(de.length>=1){let G=0,X=0,J=0;G=de[0]*Math.PI/180,de.length>=3&&(X=de[1],J=de[2]),H.makeTranslation(-X,-J),F.makeRotation(G),$.multiplyMatrices(F,H),H.makeTranslation(X,J),w.multiplyMatrices(H,$)}break;case"scale":if(de.length>=1){const G=de[0];let X=G;de.length>=2&&(X=de[1]),w.scale(G,X)}break;case"skewX":de.length===1&&w.set(1,Math.tan(de[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":de.length===1&&w.set(1,0,0,Math.tan(de[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":de.length===6&&w.set(de[0],de[2],de[4],de[1],de[3],de[5],0,0,1);break}}k.premultiply(w)}}return k}function T(K,k){function w(B){he.set(B.x,B.y,1).applyMatrix3(k),B.set(he.x,he.y)}function R(B){const Q=B.xRadius,me=B.yRadius,de=Math.cos(B.aRotation),G=Math.sin(B.aRotation),X=new O(Q*de,Q*G,0),J=new O(-me*G,me*de,0),ne=X.applyMatrix3(k),b=J.applyMatrix3(k),D=z.set(ne.x,b.x,0,ne.y,b.y,0,0,0,1),ce=H.copy(D).invert(),I=F.copy(ce).transpose().multiply(ce).elements,M=L(I[0],I[1],I[4]),W=Math.sqrt(M.rt1),re=Math.sqrt(M.rt2);if(B.xRadius=1/W,B.yRadius=1/re,B.aRotation=Math.atan2(M.sn,M.cs),!((B.aEndAngle-B.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const oe=H.set(W,0,0,0,re,0,0,0,1),Pe=F.set(M.cs,M.sn,0,-M.sn,M.cs,0,0,0,1),xe=oe.multiply(Pe).multiply(D),Le=Oe=>{const{x:ge,y:be}=new O(Math.cos(Oe),Math.sin(Oe),0).applyMatrix3(xe);return Math.atan2(be,ge)};B.aStartAngle=Le(B.aStartAngle),B.aEndAngle=Le(B.aEndAngle),P(k)&&(B.aClockwise=!B.aClockwise)}}function j(B){const Q=E(k),me=N(k);B.xRadius*=Q,B.yRadius*=me;const de=Q>Number.EPSILON?Math.atan2(k.elements[1],k.elements[0]):Math.atan2(-k.elements[3],k.elements[4]);B.aRotation+=de,P(k)&&(B.aStartAngle*=-1,B.aEndAngle*=-1,B.aClockwise=!B.aClockwise)}const le=K.subPaths;for(let B=0,Q=le.length;B<Q;B++){const de=le[B].curves;for(let G=0;G<de.length;G++){const X=de[G];X.isLineCurve?(w(X.v1),w(X.v2)):X.isCubicBezierCurve?(w(X.v0),w(X.v1),w(X.v2),w(X.v3)):X.isQuadraticBezierCurve?(w(X.v0),w(X.v1),w(X.v2)):X.isEllipseCurve&&(ie.set(X.aX,X.aY),w(ie),X.aX=ie.x,X.aY=ie.y,S(k)?R(X):j(X))}}}function P(K){const k=K.elements;return k[0]*k[4]-k[1]*k[3]<0}function S(K){const k=K.elements,w=k[0]*k[3]+k[1]*k[4];if(w===0)return!1;const R=E(K),j=N(K);return Math.abs(w/(R*j))>Number.EPSILON}function E(K){const k=K.elements;return Math.sqrt(k[0]*k[0]+k[1]*k[1])}function N(K){const k=K.elements;return Math.sqrt(k[3]*k[3]+k[4]*k[4])}function L(K,k,w){let R,j,le,B,Q;const me=K+w,de=K-w,G=Math.sqrt(de*de+4*k*k);return me>0?(R=.5*(me+G),Q=1/R,j=K*Q*w-k*Q*k):me<0?j=.5*(me-G):(R=.5*G,j=-.5*G),de>0?le=de+G:le=de-G,Math.abs(le)>2*Math.abs(k)?(Q=-2*k/le,B=1/Math.sqrt(1+Q*Q),le=Q*B):Math.abs(k)===0?(le=1,B=0):(Q=-.5*le/k,le=1/Math.sqrt(1+Q*Q),B=Q*le),de>0&&(Q=le,le=-B,B=Q),{rt1:R,rt2:j,cs:le,sn:B}}const U=[],V={},Y=[],z=new qe,H=new qe,F=new qe,$=new qe,ie=new ue,he=new O,ve=new qe,pe=new DOMParser().parseFromString(e,"image/svg+xml");return n(pe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:pe.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(g,_,p,v){const x=g.x,y=_.x,A=p.x,T=v.x,P=g.y,S=_.y,E=p.y,N=v.y,L=(T-A)*(P-E)-(N-E)*(x-A),U=(y-x)*(P-E)-(S-P)*(x-A),V=(N-E)*(y-x)-(T-A)*(S-P),Y=L/V,z=U/V;if(V===0&&L!==0||Y<=0||Y>=1||z<0||z>1)return null;if(L===0&&V===0){for(let H=0;H<2;H++)if(o(H===0?p:v,g,_),r.loc==n.ORIGIN){const F=H===0?p:v;return{x:F.x,y:F.y,t:r.t}}else if(r.loc==n.BETWEEN){const F=+(x+r.t*(y-x)).toPrecision(10),$=+(P+r.t*(S-P)).toPrecision(10);return{x:F,y:$,t:r.t}}return null}else{for(let $=0;$<2;$++)if(o($===0?p:v,g,_),r.loc==n.ORIGIN){const ie=$===0?p:v;return{x:ie.x,y:ie.y,t:r.t}}const H=+(x+Y*(y-x)).toPrecision(10),F=+(P+Y*(S-P)).toPrecision(10);return{x:H,y:F,t:Y}}}function o(g,_,p){const v=p.x-_.x,x=p.y-_.y,y=g.x-_.x,A=g.y-_.y,T=v*A-y*x;if(g.x===_.x&&g.y===_.y){r.loc=n.ORIGIN,r.t=0;return}if(g.x===p.x&&g.y===p.y){r.loc=n.DESTINATION,r.t=1;return}if(T<-Number.EPSILON){r.loc=n.LEFT;return}if(T>Number.EPSILON){r.loc=n.RIGHT;return}if(v*y<0||x*A<0){r.loc=n.BEHIND;return}if(Math.sqrt(v*v+x*x)<Math.sqrt(y*y+A*A)){r.loc=n.BEYOND;return}let P;v!==0?P=y/v:P=A/x,r.loc=n.BETWEEN,r.t=P}function c(g,_){const p=[],v=[];for(let x=1;x<g.length;x++){const y=g[x-1],A=g[x];for(let T=1;T<_.length;T++){const P=_[T-1],S=_[T],E=s(y,A,P,S);E!==null&&p.find(N=>N.t<=E.t+Number.EPSILON&&N.t>=E.t-Number.EPSILON)===void 0&&(p.push(E),v.push(new ue(E.x,E.y)))}}return v}function h(g,_,p){const v=new ue;_.getCenter(v);const x=[];return p.forEach(y=>{y.boundingBox.containsPoint(v)&&c(g,y.points).forEach(T=>{x.push({identifier:y.identifier,isCW:y.isCW,point:T})})}),x.sort((y,A)=>y.point.x-A.point.x),x}function u(g,_,p,v,x){(x==null||x==="")&&(x="nonzero");const y=new ue;g.boundingBox.getCenter(y);const A=[new ue(p,y.y),new ue(v,y.y)],T=h(A,g.boundingBox,_);T.sort((U,V)=>U.point.x-V.point.x);const P=[],S=[];T.forEach(U=>{U.identifier===g.identifier?P.push(U):S.push(U)});const E=P[0].point.x,N=[];let L=0;for(;L<S.length&&S[L].point.x<E;)N.length>0&&N[N.length-1]===S[L].identifier?N.pop():N.push(S[L].identifier),L++;if(N.push(g.identifier),x==="evenodd"){const U=N.length%2===0,V=N[N.length-2];return{identifier:g.identifier,isHole:U,for:V}}else if(x==="nonzero"){let U=!0,V=null,Y=null;for(let z=0;z<N.length;z++){const H=N[z];U?(Y=_[H].isCW,U=!1,V=H):Y!==_[H].isCW&&(Y=_[H].isCW,U=!0)}return{identifier:g.identifier,isHole:U,for:V}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let d=999999999,a=-999999999,l=e.subPaths.map(g=>{const _=g.getPoints();let p=-999999999,v=999999999,x=-999999999,y=999999999;for(let A=0;A<_.length;A++){const T=_[A];T.y>p&&(p=T.y),T.y<v&&(v=T.y),T.x>x&&(x=T.x),T.x<y&&(y=T.x)}return a<=x&&(a=x+1),d>=y&&(d=y-1),{curves:g.curves,points:_,isCW:Ei.isClockWise(_),identifier:-1,boundingBox:new R_(new ue(y,v),new ue(x,p))}});l=l.filter(g=>g.points.length>1);for(let g=0;g<l.length;g++)l[g].identifier=g;const f=l.map(g=>u(g,l,d,a,e.userData?e.userData.style.fillRule:void 0)),m=[];return l.forEach(g=>{if(!f[g.identifier].isHole){const p=new tr;p.curves=g.curves,f.filter(x=>x.isHole&&x.for===g.identifier).forEach(x=>{const y=l[x.identifier],A=new kr;A.curves=y.curves,p.holes.push(A)}),m.push(p)}}),m}static getStrokeStyle(e,t,n,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,n,r){const s=[],o=[],c=[];if(ia.pointsToStrokeWithBuffers(e,t,n,r,s,o,c)===0)return null;const h=new Et;return h.setAttribute("position",new Qe(s,3)),h.setAttribute("normal",new Qe(o,3)),h.setAttribute("uv",new Qe(c,2)),h}static pointsToStrokeWithBuffers(e,t,n,r,s,o,c,h){const u=new ue,d=new ue,a=new ue,l=new ue,f=new ue,m=new ue,g=new ue,_=new ue,p=new ue,v=new ue,x=new ue,y=new ue,A=new ue,T=new ue,P=new ue,S=new ue,E=new ue;n=n!==void 0?n:12,r=r!==void 0?r:.001,h=h!==void 0?h:0,e=de(e);const N=e.length;if(N<2)return 0;const L=e[0].equals(e[N-1]);let U,V=e[0],Y;const z=t.strokeWidth/2,H=1/(N-1);let F=0,$,ie,he,ve,pe=!1,Ue=0,K=h*3,k=h*2;w(e[0],e[1],u).multiplyScalar(z),_.copy(e[0]).sub(u),p.copy(e[0]).add(u),v.copy(_),x.copy(p);for(let G=1;G<N;G++){U=e[G],G===N-1?L?Y=e[1]:Y=void 0:Y=e[G+1];const X=u;if(w(V,U,X),a.copy(X).multiplyScalar(z),y.copy(U).sub(a),A.copy(U).add(a),$=F+H,ie=!1,Y!==void 0){w(U,Y,d),a.copy(d).multiplyScalar(z),T.copy(U).sub(a),P.copy(U).add(a),he=!0,a.subVectors(Y,V),X.dot(a)<0&&(he=!1),G===1&&(pe=he),a.subVectors(Y,U),a.normalize();const J=Math.abs(X.dot(a));if(J>Number.EPSILON){const ne=z/J;a.multiplyScalar(-ne),l.subVectors(U,V),f.copy(l).setLength(ne).add(a),S.copy(f).negate();const b=f.length(),D=l.length();l.divideScalar(D),m.subVectors(Y,U);const ce=m.length();switch(m.divideScalar(ce),l.dot(S)<D&&m.dot(S)<ce&&(ie=!0),E.copy(f).add(U),S.add(U),ve=!1,ie?he?(P.copy(S),A.copy(S)):(T.copy(S),y.copy(S)):le(),t.strokeLineJoin){case"bevel":B(he,ie,$);break;case"round":Q(he,ie),he?j(U,y,T,$,0):j(U,P,A,$,1);break;default:const Me=z*t.strokeMiterLimit/b;if(Me<1)if(t.strokeLineJoin!=="miter-clip"){B(he,ie,$);break}else Q(he,ie),he?(m.subVectors(E,y).multiplyScalar(Me).add(y),g.subVectors(E,T).multiplyScalar(Me).add(T),R(y,$,0),R(m,$,0),R(U,$,.5),R(U,$,.5),R(m,$,0),R(g,$,0),R(U,$,.5),R(g,$,0),R(T,$,0)):(m.subVectors(E,A).multiplyScalar(Me).add(A),g.subVectors(E,P).multiplyScalar(Me).add(P),R(A,$,1),R(m,$,1),R(U,$,.5),R(U,$,.5),R(m,$,1),R(g,$,1),R(U,$,.5),R(g,$,1),R(P,$,1));else ie?(he?(R(p,F,1),R(_,F,0),R(E,$,0),R(p,F,1),R(E,$,0),R(S,$,1)):(R(p,F,1),R(_,F,0),R(E,$,1),R(_,F,0),R(S,$,0),R(E,$,1)),he?T.copy(E):P.copy(E)):he?(R(y,$,0),R(E,$,0),R(U,$,.5),R(U,$,.5),R(E,$,0),R(T,$,0)):(R(A,$,1),R(E,$,1),R(U,$,.5),R(U,$,.5),R(E,$,1),R(P,$,1)),ve=!0;break}}else le()}else le();!L&&G===N-1&&me(e[0],v,x,he,!0,F),F=$,V=U,_.copy(T),p.copy(P)}if(!L)me(U,y,A,he,!1,$);else if(ie&&s){let G=E,X=S;pe!==he&&(G=S,X=E),he?(ve||pe)&&(X.toArray(s,0),X.toArray(s,9),ve&&G.toArray(s,3)):(ve||!pe)&&(X.toArray(s,3),X.toArray(s,9),ve&&G.toArray(s,0))}return Ue;function w(G,X,J){return J.subVectors(X,G),J.set(-J.y,J.x).normalize()}function R(G,X,J){s&&(s[K]=G.x,s[K+1]=G.y,s[K+2]=0,o&&(o[K]=0,o[K+1]=0,o[K+2]=1),K+=3,c&&(c[k]=X,c[k+1]=J,k+=2)),Ue+=3}function j(G,X,J,ne,b){u.copy(X).sub(G).normalize(),d.copy(J).sub(G).normalize();let D=Math.PI;const ce=u.dot(d);Math.abs(ce)<1&&(D=Math.abs(Math.acos(ce))),D/=n,a.copy(X);for(let Me=0,_e=n-1;Me<_e;Me++)l.copy(a).rotateAround(G,D),R(a,ne,b),R(l,ne,b),R(G,ne,.5),a.copy(l);R(l,ne,b),R(J,ne,b),R(G,ne,.5)}function le(){R(p,F,1),R(_,F,0),R(y,$,0),R(p,F,1),R(y,$,0),R(A,$,1)}function B(G,X,J){X?G?(R(p,F,1),R(_,F,0),R(y,$,0),R(p,F,1),R(y,$,0),R(S,$,1),R(y,J,0),R(T,J,0),R(S,J,.5)):(R(p,F,1),R(_,F,0),R(A,$,1),R(_,F,0),R(S,$,0),R(A,$,1),R(A,J,1),R(S,J,0),R(P,J,1)):G?(R(y,J,0),R(T,J,0),R(U,J,.5)):(R(A,J,1),R(P,J,0),R(U,J,.5))}function Q(G,X){X&&(G?(R(p,F,1),R(_,F,0),R(y,$,0),R(p,F,1),R(y,$,0),R(S,$,1),R(y,F,0),R(U,$,.5),R(S,$,1),R(U,$,.5),R(T,F,0),R(S,$,1)):(R(p,F,1),R(_,F,0),R(A,$,1),R(_,F,0),R(S,$,0),R(A,$,1),R(A,F,1),R(S,$,0),R(U,$,.5),R(U,$,.5),R(S,$,0),R(P,F,1)))}function me(G,X,J,ne,b,D){switch(t.strokeLineCap){case"round":b?j(G,J,X,D,.5):j(G,X,J,D,.5);break;case"square":if(b)u.subVectors(X,G),d.set(u.y,-u.x),a.addVectors(u,d).add(G),l.subVectors(d,u).add(G),ne?(a.toArray(s,3),l.toArray(s,0),l.toArray(s,9)):(a.toArray(s,3),c[7]===1?l.toArray(s,9):a.toArray(s,9),l.toArray(s,0));else{u.subVectors(J,G),d.set(u.y,-u.x),a.addVectors(u,d).add(G),l.subVectors(d,u).add(G);const ce=s.length;ne?(a.toArray(s,ce-3),l.toArray(s,ce-6),l.toArray(s,ce-12)):(l.toArray(s,ce-6),a.toArray(s,ce-3),l.toArray(s,ce-12))}break}}function de(G){let X=!1;for(let ne=1,b=G.length-1;ne<b;ne++)if(G[ne].distanceTo(G[ne+1])<r){X=!0;break}if(!X)return G;const J=[];J.push(G[0]);for(let ne=1,b=G.length-1;ne<b;ne++)G[ne].distanceTo(G[ne+1])>=r&&J.push(G[ne]);return J.push(G[G.length-1]),J}}}function CS(){let i=new jt;const e=new wt({color:5343944}),t=new wt({color:7779297}),n=new wt({color:16768256}),r=new wt({color:16777215}),s=new wt({color:0}),o=50,u=new ia().parse('<svg><path d="m 135.55266,65.650453 a 45,45 0 0 0 -48.000001,-15 l -62,20 c 0,0 53,40.000007 94.000001,29.999997 l 3,-0.999997 c 17,-5 23,-21 13,-34 z"/></svg>'),a=ia.createShapes(u.paths[0])[0],l=.006,f=new Dr(a,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});f.center();const m=new je(f,e);m.position.set(-.05,.16,0),m.scale.set(l,l,l),i.add(m);const g=new Dr(a,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});g.center();const _=new je(g,t);_.position.set(.05,-.16,0),_.rotation.z=Math.PI,_.scale.set(l,l,l),i.add(_);const p=new tr;p.moveTo(5,0),p.lineTo(-4,6),p.lineTo(-4,-3),p.closePath();const v=o+.8,x=new Dr(p,{bevelEnabled:!1,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:v});x.center(),i.rotation.x=Math.PI;let y=new jt;y.add(i);let A=new Vs(.1),T=new je(A,r);T.position.set(0,.16,.5*o*l),y.add(T);let P=new Vs(.03),S=new je(P,s);S.position.copy(T.position),S.position.z+=.1,y.add(S);let E=T.clone();E.position.z=-E.position.z,y.add(E);let N=S.clone();N.position.z=-N.position.z,y.add(N);let L=new jt,U=.03,V=new cr(U,U,.3),Y=new je(V,n);Y.position.set(0,-.4,0);let z=new tr;z.moveTo(-.14,0),z.lineTo(.2,.08),z.lineTo(.2,-.08),z.closePath();let H=new Dr(z,{bevelEnabled:!1,depth:.04}),F=new je(H,n);F.rotateX(.5*Math.PI),F.position.set(0,-.51,0),L.add(Y),L.add(F),L.position.set(0,0,.1),y.add(L);let $=L.clone();$.position.z=-$.position.z,y.add($);const ie=new je(x,n);ie.position.set(.375,.14,0),ie.scale.set(l,l,l),y.add(ie);let he=new jt;return y.rotateY(-.5*Math.PI),y.position.set(0,.55,0),he.add(y),he}const PS=/^[og]\s*(.+)?/,IS=/^mtllib /,LS=/^usemtl /,DS=/^usemap /,Dh=new O,sl=new O,Nh=new O,Uh=new O,un=new O;function NS(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const c={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const u={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Dh.fromArray(r,e),sl.fromArray(r,t),Nh.fromArray(r,n),un.subVectors(Nh,sl),Uh.subVectors(Dh,sl),un.cross(Uh),un.normalize(),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,o,c,h,u){const d=this.vertices.length;let a=this.parseVertexIndex(e,d),l=this.parseVertexIndex(t,d),f=this.parseVertexIndex(n,d);if(this.addVertex(a,l,f),this.addColor(a,l,f),c!==void 0&&c!==""){const m=this.normals.length;a=this.parseNormalIndex(c,m),l=this.parseNormalIndex(h,m),f=this.parseNormalIndex(u,m),this.addNormal(a,l,f)}else this.addFaceNormal(a,l,f);if(r!==void 0&&r!==""){const m=this.uvs.length;a=this.parseUVIndex(r,m),l=this.parseUVIndex(s,m),f=this.parseUVIndex(o,m),this.addUV(a,l,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class US extends ha{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,o=new Xf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(c))}catch(h){r?r(h):console.error(h),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new NS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r="",s="",o=0,c=[];const h=typeof"".trimLeft=="function";for(let a=0,l=n.length;a<l;a++)if(r=n[a],r=h?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){const f=r.split(/\s+/);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?t.colors.push(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(s==="f"){const m=r.substr(1).trim().split(/\s+/),g=[];for(let p=0,v=m.length;p<v;p++){const x=m[p];if(x.length>0){const y=x.split("/");g.push(y)}}const _=g[0];for(let p=1,v=g.length-1;p<v;p++){const x=g[p],y=g[p+1];t.addFace(_[0],x[0],y[0],_[1],x[1],y[1],_[2],x[2],y[2])}}else if(s==="l"){const f=r.substring(1).trim().split(" ");let m=[];const g=[];if(r.indexOf("/")===-1)m=f;else for(let _=0,p=f.length;_<p;_++){const v=f[_].split("/");v[0]!==""&&m.push(v[0]),v[1]!==""&&g.push(v[1])}t.addLineGeometry(m,g)}else if(s==="p"){const m=r.substr(1).trim().split(" ");t.addPointGeometry(m)}else if((c=PS.exec(r))!==null){const f=(" "+c[0].substr(1).trim()).substr(1);t.startObject(f)}else if(LS.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(IS.test(r))t.materialLibraries.push(r.substring(7).trim());else if(DS.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(c=r.split(" "),c.length>1){const m=c[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const u=new jt;if(u.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const f=t.objects[a],m=f.geometry,g=f.materials,_=m.type==="Line",p=m.type==="Points";let v=!1;if(m.vertices.length===0)continue;const x=new Et;x.setAttribute("position",new Qe(m.vertices,3)),m.normals.length>0&&x.setAttribute("normal",new Qe(m.normals,3)),m.colors.length>0&&(v=!0,x.setAttribute("color",new Qe(m.colors,3))),m.hasUVIndices===!0&&x.setAttribute("uv",new Qe(m.uvs,2));const y=[];for(let T=0,P=g.length;T<P;T++){const S=g[T],E=S.name+"_"+S.smooth+"_"+v;let N=t.materials[E];if(this.materials!==null){if(N=this.materials.create(S.name),_&&N&&!(N instanceof ko)){const L=new ko;Pn.prototype.copy.call(L,N),L.color.copy(N.color),N=L}else if(p&&N&&!(N instanceof ds)){const L=new ds({size:10,sizeAttenuation:!1});Pn.prototype.copy.call(L,N),L.color.copy(N.color),L.map=N.map,N=L}}N===void 0&&(_?N=new ko:p?N=new ds({size:1,sizeAttenuation:!1}):N=new __,N.name=S.name,N.flatShading=!S.smooth,N.vertexColors=v,t.materials[E]=N),y.push(N)}let A;if(y.length>1){for(let T=0,P=g.length;T<P;T++){const S=g[T];x.addGroup(S.groupStart,S.groupCount,T)}_?A=new Wu(x,y):p?A=new qa(x,y):A=new je(x,y)}else _?A=new Wu(x,y[0]):p?A=new qa(x,y[0]):A=new je(x,y[0]);A.name=f.name,u.add(A)}else if(t.vertices.length>0){const a=new ds({size:1,sizeAttenuation:!1}),l=new Et;l.setAttribute("position",new Qe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Qe(t.colors,3)),a.vertexColors=!0);const f=new qa(l,a);u.add(f)}return u}}const ti=.45,ni=.45,Pr=.25,od=.15,FS=200,OS=10,ad=.1;function BS(i){let{ecs:e,entityId:t,turnAmount:n,actionDown:r,driftDown:s}=i;const o=30,c=67.5,h=2,u=6,d=3,a=.98,l=.96,f=.92,m=[new O(-ti,Pr,ni),new O(ti,Pr,ni),new O(-ti,Pr,-ni),new O(ti,Pr,-ni)];let g=0,_=!1,p=0;return{update(v){e.resource(sd).get("y");const y=e.entity(t).getField(Kt,"x"),A=e.entity(t).getField(Kt,"y"),T=e.entity(t).getField(Kt,"z"),P=e.entity(t).getField(Xi,"x"),S=e.entity(t).getField(Xi,"y"),E=e.entity(t).getField(Xi,"z"),N=e.entity(t).getField(Dt,"x"),L=e.entity(t).getField(Dt,"y"),U=e.entity(t).getField(Dt,"z"),V=e.entity(t).getField(Dt,"w"),Y=e.entity(t).getField(ws,"speed"),z=new O(y,A,T),H=new O(P,S,E),F=new Gn(N,L,U,V);let $=new O(0,0,1).applyQuaternion(F);$.y=0,$.normalize();let ie=new O(1,0,0).applyQuaternion(F);ie.y=0,ie.normalize();const he=Math.sqrt(H.x*H.x+H.z*H.z);let ve=o;g>0&&(ve=c);let pe=Y;r()?pe=Math.min(Y+h*v,ve):pe=Math.max(Y-u*v,0),e.set_field(t,ws,"speed",pe);let Ue=-n()*d*v,K=0;n()<-.1?K=-1:n()>.1&&(K=1);const k=s()&&K!==0&&he>3;if(k&&!_?(_=!0,g=0):!k&&_&&(g>1.5&&(pe=Math.min(pe*1.5,c)),_=!1,g=0),_){g+=v;const xe=Ue*2.5,Le=new Gn().setFromAxisAngle(new O(0,1,0),xe);F.multiply(Le)}else if(he>.1){const xe=Ue*(pe/o),Le=new Gn().setFromAxisAngle(new O(0,1,0),xe);F.multiply(Le)}F.normalize();const w=new O(0,0,1).applyQuaternion(F);w.y=0,w.normalize();let R=w.multiplyScalar(pe);const j=_?l:a,le=w.clone().multiplyScalar(H.dot(w)),B=H.clone().sub(le).multiplyScalar(f);let Q=le.add(B);const me=Q.length()>.01?j:1;Q.multiplyScalar(me),Q.x+=(R.x-Q.x)*(1-j)*v*10,Q.z+=(R.z-Q.z)*(1-j)*v*10;const de=_&&g>1.5?c:o,G=Math.sqrt(Q.x*Q.x+Q.z*Q.z);if(G>de){const xe=de/G;Q.x*=xe,Q.z*=xe}let X=z.add(Q.clone().multiplyScalar(v));const J=Ay();if(J){const xe=Pi/2,Le=Ry(X.x,X.z),Oe=xe;if(Le>Oe&&Le<50&&Number.isFinite(X.x)&&Number.isFinite(X.z)){let be=0,Fe=0,Ie=1/0;for(let Se=0;Se<=800;Se++){const we=Se/800,ye=J.getPointAt(we),ae=ye.x-X.x,De=ye.z-X.z,Ge=Math.sqrt(ae*ae+De*De);Ge<Ie&&(Ie=Ge,be=ye.x,Fe=ye.z)}const Te=(X.x-be)/Ie,Xe=(X.z-Fe)/Ie,q=Le-Oe;X.x-=Te*q,X.z-=Xe*q;const Ee=e.entity(t).getField(ws,"speed");if(q>.02&&Ee>2){const Se=Q.x*Te+Q.z*Xe;Q.x=Q.x-2*Se*Te,Q.z=Q.z-2*Se*Xe;const we=.3;Q.x*=we,Q.z*=we,e._lastCollision=Math.min(q*5+Ee/40,1)}}}let ne=[];for(let xe=0;xe<4;xe++){const Le=m[xe].clone();Le.applyQuaternion(F);const Oe=new O(X.x,X.y,X.z).add(Le);let ge=On(Oe.x,Oe.z);if(J){let Ie=1/0,Te=0;for(let Se=0;Se<=200;Se++){const we=Se/200,ye=J.getPointAt(we),ae=ye.x-Oe.x,De=ye.z-Oe.z,Ge=Math.sqrt(ae*ae+De*De);Ge<Ie&&(Ie=Ge,Te=ye.y)}const Xe=Pi/2,q=3;let Ee=ge;if(Ie<=Xe+q){const Se=Te;if(Ie<=Xe)Ee=Se;else{const we=(Ie-Xe)/q;Ee=Se*(1-we)+Ee*we}}ge=Math.max(Ee,Te)}const be=ge+ad+od;ne.push(be)}const b=(ne[0]+ne[1])/2,D=(ne[2]+ne[3])/2,ce=(ne[0]+ne[2])/2,Me=(ne[1]+ne[3])/2,W=((b+D)/2-Pr-X.y)*FS-p*OS;p+=W*v,X.y+=p*v;const re=Math.atan2(D-b,ni*2),fe=Math.atan2(Me-ce,ti*2),oe=new _n().setFromQuaternion(F,"YXZ"),Pe=Math.min(1,v*8);oe.x=Mu.lerp(oe.x,re,Pe),oe.z=Mu.lerp(oe.z,fe,Pe),F.setFromEuler(oe),e.set_field(t,Dt,"x",F.x),e.set_field(t,Dt,"y",F.y),e.set_field(t,Dt,"z",F.z),e.set_field(t,Dt,"w",F.w),e.set_field(t,Xi,"x",Q.x),e.set_field(t,Xi,"y",Q.y),e.set_field(t,Xi,"z",Q.z),e.set_field(t,Kt,"x",X.x),e.set_field(t,Kt,"y",X.y),e.set_field(t,Kt,"z",X.z)}}}async function zS(){const i=new US;try{const e=await fetch("./models/kart.obj");if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.text(),n=i.parse(t);n.traverse(p=>{if(p instanceof je&&(p.castShadow=!0,p.receiveShadow=!0,p.material instanceof Pn)){const v=p.material;if(v.name?.includes("Blue"))v.color.setHex(3829413),v.roughness=.5,v.metalness=.2;else if(v.name?.includes("Grey")){const x=v.name.match(/Grey_-_(\d+)/);if(x){const y=parseInt(x[1])/100;v.color.setRGB(y,y,y)}v.roughness=.7,v.metalness=.3}}});const r=new Ii().setFromObject(n),s=new O;r.getSize(s);const h=1.5/Math.max(s.x,s.y,s.z);n.scale.setScalar(h);let u=new jt;r.setFromObject(n),n.rotateY(.5*Math.PI),n.position.set(0,-r.min.y,0),u.add(n);const d=Pr-od,a=new Vs(ad,8,8),l=new Fc({color:16711680}),f=new je(a,l);f.position.set(-ti,d,ni),u.add(f);const m=new je(a,l);m.position.set(ti,d,ni),u.add(m);const g=new je(a,l);g.position.set(-ti,d,-ni),u.add(g);const _=new je(a,l);return _.position.set(ti,d,-ni),u.add(_),u}catch(e){throw console.error("Failed to load kart:",e),e}}function kS(i,e){return gc(t=>(oi(np(oi(()=>{let n=[];for(let r of i.query(Kt,Dt,Ho)){let s=r.entity_ids;for(let o=0;o<r.entity_count;++o)n.push(s[o])}return n}),n=>{let r=i.entity(n());r.getField(Ho,"playerType"),r.getField(Ho,"facingForward");const s=new jt;cf(async()=>await zS(),c=>{s.add(c)});const o=CS();o.position.set(0,.32,0),o.scale.setScalar(.5),s.add(o),e.add(s),la(()=>{e.remove(s)}),oi(()=>{let c=r.getField(Kt,"x"),h=r.getField(Kt,"y"),u=r.getField(Kt,"z"),d=r.getField(Dt,"x"),a=r.getField(Dt,"y"),l=r.getField(Dt,"z"),f=r.getField(Dt,"w");s.position.set(c,h,u),s.quaternion.set(d,a,l,f)})})),{update:()=>{},dispose:t}))}var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ol={};var Fh;function VS(){return Fh||(Fh=1,(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var l=this||t;if(a=parseFloat(a),l.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(l._volume=a,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var f=0;f<l._howls.length;f++)if(!l._howls[f]._webAudio)for(var m=l._howls[f]._getSoundIds(),g=0;g<m.length;g++){var _=l._howls[f]._soundById(m[g]);_&&_._node&&(_._node.volume=_._volume*a)}return l}return l._volume},mute:function(a){var l=this||t;l.ctx||d(),l._muted=a,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a?0:l._volume,t.ctx.currentTime);for(var f=0;f<l._howls.length;f++)if(!l._howls[f]._webAudio)for(var m=l._howls[f]._getSoundIds(),g=0;g<m.length;g++){var _=l._howls[f]._soundById(m[g]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return l},stop:function(){for(var a=this||t,l=0;l<a._howls.length;l++)a._howls[l].stop();return a},unload:function(){for(var a=this||t,l=a._howls.length-1;l>=0;l--)a._howls[l].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var l=new Audio;l.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return a}if(!l||typeof l.canPlayType!="function")return a;var f=l.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",g=m.match(/OPR\/(\d+)/g),_=g&&parseInt(g[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,v=m.match(/Version\/(.*?) /),x=p&&v&&parseInt(v[1],10)<15;return a._codecs={mp3:!!(!_&&(f||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var l=function(f){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var _=a._howls[g]._getSoundIds(),p=0;p<_.length;p++){var v=a._howls[g]._soundById(_[p]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}a._autoResume();var x=a.ctx.createBufferSource();x.buffer=a._scratchBuffer,x.connect(a.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),x.onended=function(){x.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var y=0;y<a._howls.length;y++)a._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var l=this||t;return a._unlocked&&l._html5AudioPool.push(a),l},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<a._howls.length;l++)if(a._howls[l]._webAudio){for(var f=0;f<a._howls[l]._sounds.length;f++)if(!a._howls[l]._sounds[f]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var l=0;l<a._howls.length;l++)a._howls[l]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var l=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(a)};n.prototype={init:function(a){var l=this;return t.ctx||d(),l._autoplay=a.autoplay||!1,l._format=typeof a.format!="string"?a.format:[a.format],l._html5=a.html5||!1,l._muted=a.mute||!1,l._loop=a.loop||!1,l._pool=a.pool||5,l._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,l._rate=a.rate||1,l._sprite=a.sprite||{},l._src=typeof a.src!="string"?a.src:[a.src],l._volume=a.volume!==void 0?a.volume:1,l._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=a.onend?[{fn:a.onend}]:[],l._onfade=a.onfade?[{fn:a.onfade}]:[],l._onload=a.onload?[{fn:a.onload}]:[],l._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],l._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],l._onpause=a.onpause?[{fn:a.onpause}]:[],l._onplay=a.onplay?[{fn:a.onplay}]:[],l._onstop=a.onstop?[{fn:a.onstop}]:[],l._onmute=a.onmute?[{fn:a.onmute}]:[],l._onvolume=a.onvolume?[{fn:a.onvolume}]:[],l._onrate=a.onrate?[{fn:a.onrate}]:[],l._onseek=a.onseek?[{fn:a.onseek}]:[],l._onunlock=a.onunlock?[{fn:a.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var a=this,l=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var f=0;f<a._src.length;f++){var m,g;if(a._format&&a._format[f])m=a._format[f];else{if(g=a._src[f],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(g),m||(m=/\.([^.]+)$/.exec(g.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){l=a._src[f];break}}if(!l){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=l,a._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new r(a),a._webAudio&&o(a),a},play:function(a,l){var f=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&f._state==="loaded"&&!f._sprite[a])return null;if(typeof a>"u"&&(a="__default",!f._playLock)){for(var g=0,_=0;_<f._sounds.length;_++)f._sounds[_]._paused&&!f._sounds[_]._ended&&(g++,m=f._sounds[_]._id);g===1?a=null:m=null}}var p=m?f._soundById(m):f._inactiveSound();if(!p)return null;if(m&&!a&&(a=p._sprite||"__default"),f._state!=="loaded"){p._sprite=a,p._ended=!1;var v=p._id;return f._queue.push({event:"play",action:function(){f.play(v)}}),v}if(m&&!p._paused)return l||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var x=Math.max(0,p._seek>0?p._seek:f._sprite[a][0]/1e3),y=Math.max(0,(f._sprite[a][0]+f._sprite[a][1])/1e3-x),A=y*1e3/Math.abs(p._rate),T=f._sprite[a][0]/1e3,P=(f._sprite[a][0]+f._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var S=function(){p._paused=!1,p._seek=x,p._start=T,p._stop=P,p._loop=!!(p._loop||f._sprite[a][2])};if(x>=P){f._ended(p);return}var E=p._node;if(f._webAudio){var N=function(){f._playLock=!1,S(),f._refreshBuffer(p);var Y=p._muted||f._muted?0:p._volume;E.gain.setValueAtTime(Y,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof E.bufferSource.start>"u"?p._loop?E.bufferSource.noteGrainOn(0,x,86400):E.bufferSource.noteGrainOn(0,x,y):p._loop?E.bufferSource.start(0,x,86400):E.bufferSource.start(0,x,y),A!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),A)),l||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?N():(f._playLock=!0,f.once("resume",N),f._clearTimer(p._id))}else{var L=function(){E.currentTime=x,E.muted=p._muted||f._muted||t._muted||E.muted,E.volume=p._volume*t.volume(),E.playbackRate=p._rate;try{var Y=E.play();if(Y&&typeof Promise<"u"&&(Y instanceof Promise||typeof Y.then=="function")?(f._playLock=!0,S(),Y.then(function(){f._playLock=!1,E._unlocked=!0,l?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):l||(f._playLock=!1,S(),f._emit("play",p._id)),E.playbackRate=p._rate,E.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),A):(f._endTimers[p._id]=function(){f._ended(p),E.removeEventListener("ended",f._endTimers[p._id],!1)},E.addEventListener("ended",f._endTimers[p._id],!1))}catch(z){f._emit("playerror",p._id,z)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=f._src,E.load());var U=window&&window.ejecta||!E.readyState&&t._navigator.isCocoonJS;if(E.readyState>=3||U)L();else{f._playLock=!0,f._state="loading";var V=function(){f._state="loaded",L(),E.removeEventListener(t._canPlayEvent,V,!1)};E.addEventListener(t._canPlayEvent,V,!1),f._clearTimer(p._id)}}return p._id},pause:function(a){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(a)}}),l;for(var f=l._getSoundIds(a),m=0;m<f.length;m++){l._clearTimer(f[m]);var g=l._soundById(f[m]);if(g&&!g._paused&&(g._seek=l.seek(f[m]),g._rateSeek=0,g._paused=!0,l._stopFade(f[m]),g._node))if(l._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),l._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||l._emit("pause",g?g._id:null)}return l},stop:function(a,l){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(a)}}),f;for(var m=f._getSoundIds(a),g=0;g<m.length;g++){f._clearTimer(m[g]);var _=f._soundById(m[g]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,f._stopFade(m[g]),_._node&&(f._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),f._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&f._clearSound(_._node))),l||f._emit("stop",_._id))}return f},mute:function(a,l){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(a,l)}}),f;if(typeof l>"u")if(typeof a=="boolean")f._muted=a;else return f._muted;for(var m=f._getSoundIds(l),g=0;g<m.length;g++){var _=f._soundById(m[g]);_&&(_._muted=a,_._interval&&f._stopFade(_._id),f._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,t.ctx.currentTime):_._node&&(_._node.muted=t._muted?!0:a),f._emit("mute",_._id))}return f},volume:function(){var a=this,l=arguments,f,m;if(l.length===0)return a._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):f=parseFloat(l[0])}else l.length>=2&&(f=parseFloat(l[0]),m=parseInt(l[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,l)}}),a;typeof m>"u"&&(a._volume=f),m=a._getSoundIds(m);for(var v=0;v<m.length;v++)p=a._soundById(m[v]),p&&(p._volume=f,l[2]||a._stopFade(m[v]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),a._emit("volume",p._id))}else return p=m?a._soundById(m):a._sounds[0],p?p._volume:0;return a},fade:function(a,l,f,m){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,l,f,m)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),l=Math.min(Math.max(0,parseFloat(l)),1),f=parseFloat(f),g.volume(a,m);for(var _=g._getSoundIds(m),p=0;p<_.length;p++){var v=g._soundById(_[p]);if(v){if(m||g._stopFade(_[p]),g._webAudio&&!v._muted){var x=t.ctx.currentTime,y=x+f/1e3;v._volume=a,v._node.gain.setValueAtTime(a,x),v._node.gain.linearRampToValueAtTime(l,y)}g._startFadeInterval(v,a,l,f,_[p],typeof m>"u")}}return g},_startFadeInterval:function(a,l,f,m,g,_){var p=this,v=l,x=f-l,y=Math.abs(x/.01),A=Math.max(4,y>0?m/y:m),T=Date.now();a._fadeTo=f,a._interval=setInterval(function(){var P=(Date.now()-T)/m;T=Date.now(),v+=x*P,v=Math.round(v*100)/100,x<0?v=Math.max(f,v):v=Math.min(f,v),p._webAudio?a._volume=v:p.volume(v,a._id,!0),_&&(p._volume=v),(f<l&&v<=f||f>l&&v>=f)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(f,a._id),p._emit("fade",a._id))},A)},_stopFade:function(a){var l=this,f=l._soundById(a);return f&&f._interval&&(l._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,l.volume(f._fadeTo,a),f._fadeTo=null,l._emit("fade",a)),l},loop:function(){var a=this,l=arguments,f,m,g;if(l.length===0)return a._loop;if(l.length===1)if(typeof l[0]=="boolean")f=l[0],a._loop=f;else return g=a._soundById(parseInt(l[0],10)),g?g._loop:!1;else l.length===2&&(f=l[0],m=parseInt(l[1],10));for(var _=a._getSoundIds(m),p=0;p<_.length;p++)g=a._soundById(_[p]),g&&(g._loop=f,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(_[p])&&(a.pause(_[p],!0),a.play(_[p],!0)))));return a},rate:function(){var a=this,l=arguments,f,m;if(l.length===0)m=a._sounds[0]._id;else if(l.length===1){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):f=parseFloat(l[0])}else l.length===2&&(f=parseFloat(l[0]),m=parseInt(l[1],10));var p;if(typeof f=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,l)}}),a;typeof m>"u"&&(a._rate=f),m=a._getSoundIds(m);for(var v=0;v<m.length;v++)if(p=a._soundById(m[v]),p){a.playing(m[v])&&(p._rateSeek=a.seek(m[v]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var x=a.seek(m[v]),y=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-x,A=y*1e3/Math.abs(p._rate);(a._endTimers[m[v]]||!p._paused)&&(a._clearTimer(m[v]),a._endTimers[m[v]]=setTimeout(a._ended.bind(a,p),A)),a._emit("rate",p._id)}}else return p=a._soundById(m),p?p._rate:a._rate;return a},seek:function(){var a=this,l=arguments,f,m;if(l.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(l.length===1){var g=a._getSoundIds(),_=g.indexOf(l[0]);_>=0?m=parseInt(l[0],10):a._sounds.length&&(m=a._sounds[0]._id,f=parseFloat(l[0]))}else l.length===2&&(f=parseFloat(l[0]),m=parseInt(l[1],10));if(typeof m>"u")return 0;if(typeof f=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,l)}}),a;var p=a._soundById(m);if(p)if(typeof f=="number"&&f>=0){var v=a.playing(m);v&&a.pause(m,!0),p._seek=f,p._ended=!1,a._clearTimer(m),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var x=function(){v&&a.play(m,!0),a._emit("seek",m)};if(v&&!a._webAudio){var y=function(){a._playLock?setTimeout(y,0):x()};setTimeout(y,0)}else x()}else if(a._webAudio){var A=a.playing(m)?t.ctx.currentTime-p._playStart:0,T=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(T+A*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var l=this;if(typeof a=="number"){var f=l._soundById(a);return f?!f._paused:!1}for(var m=0;m<l._sounds.length;m++)if(!l._sounds[m]._paused)return!0;return!1},duration:function(a){var l=this,f=l._duration,m=l._soundById(a);return m&&(f=l._sprite[m._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var a=this,l=a._sounds,f=0;f<l.length;f++)l[f]._paused||a.stop(l[f]._id),a._webAudio||(a._clearSound(l[f]._node),l[f]._node.removeEventListener("error",l[f]._errorFn,!1),l[f]._node.removeEventListener(t._canPlayEvent,l[f]._loadFn,!1),l[f]._node.removeEventListener("ended",l[f]._endFn,!1),t._releaseHtml5Audio(l[f]._node)),delete l[f]._node,a._clearTimer(l[f]._id);var m=t._howls.indexOf(a);m>=0&&t._howls.splice(m,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===a._src||a._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,l,f,m){var g=this,_=g["_on"+a];return typeof l=="function"&&_.push(m?{id:f,fn:l,once:m}:{id:f,fn:l}),g},off:function(a,l,f){var m=this,g=m["_on"+a],_=0;if(typeof l=="number"&&(f=l,l=null),l||f)for(_=0;_<g.length;_++){var p=f===g[_].id;if(l===g[_].fn&&p||!l&&p){g.splice(_,1);break}}else if(a)m["_on"+a]=[];else{var v=Object.keys(m);for(_=0;_<v.length;_++)v[_].indexOf("_on")===0&&Array.isArray(m[v[_]])&&(m[v[_]]=[])}return m},once:function(a,l,f){var m=this;return m.on(a,l,f,1),m},_emit:function(a,l,f){for(var m=this,g=m["_on"+a],_=g.length-1;_>=0;_--)(!g[_].id||g[_].id===l||a==="load")&&(setTimeout((function(p){p.call(this,l,f)}).bind(m,g[_].fn),0),g[_].once&&m.off(a,g[_].fn,g[_].id));return m._loadQueue(a),m},_loadQueue:function(a){var l=this;if(l._queue.length>0){var f=l._queue[0];f.event===a&&(l._queue.shift(),l._loadQueue()),a||f.action()}return l},_ended:function(a){var l=this,f=a._sprite;if(!l._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(l._ended.bind(l,a),100),l;var m=!!(a._loop||l._sprite[f][2]);if(l._emit("end",a._id),!l._webAudio&&m&&l.stop(a._id,!0).play(a._id),l._webAudio&&m){l._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);l._endTimers[a._id]=setTimeout(l._ended.bind(l,a),g)}return l._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,l._clearTimer(a._id),l._cleanBuffer(a._node),t._autoSuspend()),!l._webAudio&&!m&&l.stop(a._id,!0),l},_clearTimer:function(a){var l=this;if(l._endTimers[a]){if(typeof l._endTimers[a]!="function")clearTimeout(l._endTimers[a]);else{var f=l._soundById(a);f&&f._node&&f._node.removeEventListener("ended",l._endTimers[a],!1)}delete l._endTimers[a]}return l},_soundById:function(a){for(var l=this,f=0;f<l._sounds.length;f++)if(a===l._sounds[f]._id)return l._sounds[f];return null},_inactiveSound:function(){var a=this;a._drain();for(var l=0;l<a._sounds.length;l++)if(a._sounds[l]._ended)return a._sounds[l].reset();return new r(a)},_drain:function(){var a=this,l=a._pool,f=0,m=0;if(!(a._sounds.length<l)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&f++;for(m=a._sounds.length-1;m>=0;m--){if(f<=l)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),f--)}}},_getSoundIds:function(a){var l=this;if(typeof a>"u"){for(var f=[],m=0;m<l._sounds.length;m++)f.push(l._sounds[m]._id);return f}else return[a]},_refreshBuffer:function(a){var l=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[l._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),l},_cleanBuffer:function(a){var l=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return l;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),f))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,l},_clearSound:function(a){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(a){this._parent=a,this.init()};r.prototype={init:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,l._sounds.push(a),a.create(),a},create:function(){var a=this,l=a._parent,f=t._muted||a._muted||a._parent._muted?0:a._volume;return l._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(f,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=l._src,a._node.preload=l._preload===!0?"auto":l._preload,a._node.volume=f*t.volume(),a._node.load()),a},reset:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,l=a._parent;l._duration=Math.ceil(a._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,l=a._parent;l._duration===1/0&&(l._duration=Math.ceil(a._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var l=a._src;if(s[l]){a._duration=s[l].duration,u(a);return}if(/^data:[^;]+;base64,/.test(l)){for(var f=atob(l.split(",")[1]),m=new Uint8Array(f.length),g=0;g<f.length;++g)m[g]=f.charCodeAt(g);h(m.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,l,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){_.setRequestHeader(p,a._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}h(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[l],a.load())},c(_)}},c=function(a){try{a.send()}catch{a.onerror()}},h=function(a,l){var f=function(){l._emit("loaderror",null,"Decoding audio data failed.")},m=function(g){g&&l._sounds.length>0?(s[l._src]=g,u(l,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(m).catch(f):t.ctx.decodeAudioData(a,m,f)},u=function(a,l){l&&!a._duration&&(a._duration=l.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=l?parseInt(l[1],10):null;if(a&&f&&f<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof cs<"u"?(cs.HowlerGlobal=e,cs.Howler=t,cs.Howl=n,cs.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,o,c){var h=this;if(!h.ctx||!h.ctx.listener)return h;var u=h._orientation;if(n=typeof n!="number"?u[1]:n,r=typeof r!="number"?u[2]:r,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,c=typeof c!="number"?u[5]:c,typeof t=="number")h._orientation=[t,n,r,s,o,c],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,r,s,o,c);else return u;return h},Howl.prototype.init=(function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var o=r._getSoundIds(n),c=0;c<o.length;c++){var h=r._soundById(o[c]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,s),s==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",h._id);else return h._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,s)}}),o;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")o._pos=[t,n,r];else return o._pos;for(var c=o._getSoundIds(s),h=0;h<c.length;h++){var u=o._soundById(c[h]);if(u)if(typeof t=="number")u._pos=[t,n,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,n,r)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,r=typeof r!="number"?o._orientation[2]:r,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,r];else return o._orientation;for(var c=o._getSoundIds(s),h=0;h<c.length;h++){var u=o._soundById(c[h]);if(u)if(typeof t=="number")u._orientation=[t,n,r],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,r)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var c=t._getSoundIds(s),h=0;h<c.length;h++)if(o=t._soundById(c[h]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=u.coneInnerAngle,d.coneOuterAngle=u.coneOuterAngle,d.coneOuterGain=u.coneOuterGain,d.distanceModel=u.distanceModel,d.maxDistance=u.maxDistance,d.refDistance=u.refDistance,d.rolloffFactor=u.rolloffFactor,d.panningModel=u.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(ol)),ol}var Oh=VS();function GS(i,e){const t=new Oh.Howl({src:["/engine.mp3"],loop:!0,volume:.5,autoplay:!1,onloaderror:(u,d)=>console.error("Engine load error:",d),onplayerror:(u,d)=>console.error("Engine play error:",d)}),n=new Oh.Howl({src:["/crash.ogg"],volume:.5,onloaderror:(u,d)=>console.error("Crash load error:",d)});let r=!1,s=0,o=!0;return{update:(u,d)=>{const a=e?e():!0;if(!a&&r&&(t.stop(),r=!1,console.log("Sound disabled, stopped engine")),!a)return;!r&&o&&(t.play(),r=!0,console.log("Sound enabled, started engine")),o=a;const l=i.entity(d).getField(ws,"speed");if(Math.abs(l-s)>.5||l<1){const f=.6+l/40*1.2;t.rate(Math.max(.5,Math.min(f,2))),s=l}if(i._lastCollision){const f=Math.min(i._lastCollision,1);f>.1&&(n.volume(f*.6),n.play()),i._lastCollision=0}},dispose:()=>{t.stop(),t.unload(),n.unload()}}}var HS=yc('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border-radius:50%;border:5px solid rgba(255,255,255,0.5);box-sizing:content-box"><div style=position:absolute;transform:translate(-50%,-50%);border-radius:50%;background-color:rgba(255,255,255,0.5)>');function WS(i){let e=gt(i.position()),t=gt(typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize),n=gt(i.outerRingSize()),r=gt(i.knobSize()),s=gt();Lr(()=>i.position(),h=>{e[1](h)}),Lr(()=>typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize,h=>{t[1](h)}),Lr(()=>i.outerRingSize(),h=>{n[1](h)}),Lr(()=>i.knobSize(),h=>{r[1](h)});let o=oi(()=>{let h=s[0]();return h==null?new ue:new ue().copy(h).multiplyScalar(1/n[0]())});return{position:e,hitAreaSize:t,outerRingSize:n,knobSize:r,dragOffset:s,value:o,UI:()=>{let[h,u]=gt(!1),[d,a]=gt(),[l,f]=s,[m,g]=gt(),_,p=y=>{let A=m();if(A==null)return;_=y.pointerId,A.setPointerCapture(_);let T=A.getBoundingClientRect();a(new ue(y.clientX-T.left,y.clientY-T.top)),f(new ue)},v=y=>{let A=m();if(A==null)return;let T=d();if(T==null)return;A.setPointerCapture(y.pointerId);let P=A.getBoundingClientRect(),S=new ue(y.clientX-P.left-T.x,y.clientY-P.top-T.y),E=S.length();E>.5*n[0]()&&S.multiplyScalar(.5*n[0]()/E),f(S)},x=y=>{m()!=null&&_!=null&&(a(void 0),f(void 0))};return(()=>{var y=HS(),A=y.firstChild,T=A.firstChild;y.$$contextmenu=S=>S.preventDefault(),y.$$pointerup=x,y.$$pointermove=v,y.$$pointerdown=p;var P=g;return typeof P=="function"||Array.isArray(P)?gl(()=>P,y):g=y,ca(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${d()?.x??.5*t[0]()}px`,n:`${d()?.y??.5*t[0]()}px`,s:`${n[0]()}px`,h:`${n[0]()}px`,r:`calc(50% + ${l()?.x??0}px)`,d:`calc(50% + ${l()?.y??0}px)`,l:`${r[0]()}px`,u:`${r[0]()}px`}),({e:S,t:E,a:N,o:L,i:U,n:V,s:Y,h:z,r:H,d:F,l:$,u:ie},he={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0})=>{S!==he.e&&Lt(y,"left",S),E!==he.t&&Lt(y,"top",E),N!==he.a&&Lt(y,"width",N),L!==he.o&&Lt(y,"height",L),U!==he.i&&Lt(A,"left",U),V!==he.n&&Lt(A,"top",V),Y!==he.s&&Lt(A,"width",Y),z!==he.h&&Lt(A,"height",z),H!==he.r&&Lt(T,"left",H),F!==he.d&&Lt(T,"top",F),$!==he.l&&Lt(T,"width",$),ie!==he.u&&Lt(T,"height",ie)}),y})()}}}uf(["pointerdown","pointermove","pointerup","contextmenu"]);var XS=yc("<div style=position:absolute;user-select:none;touch-action:none>");const qS=1;function YS(i){const[e,t]=gt(!1),[n,r]=gt(0),[s,o]=gt(!1),[c,h]=gt(0),[u,d]=gt(!1),a=i.externalPressed||(()=>!1);let l,f=!1;const m=()=>{l||(l=window.setInterval(()=>{h(T=>T+1)},50))},g=()=>{l&&(clearInterval(l),l=void 0)};la(()=>g()),requestAnimationFrame(function T(){const P=a();P&&!f&&(r(performance.now()),m()),!P&&f&&d(!0),f=P,requestAnimationFrame(T)});const _=()=>e()||a(),p=oi(()=>{c();const T=_(),P=n();if(!T)return 0;const S=(performance.now()-P)/1e3;return Math.min(S/qS,1)}),v=T=>{T.currentTarget.setPointerCapture(T.pointerId),t(!0),r(performance.now()),m()},x=T=>{t(!1),g(),o(!0)},y=T=>{e()&&(t(!1),g(),o(!0))},A=()=>(()=>{var T=XS();return T.$$contextmenu=P=>P.preventDefault(),T.addEventListener("pointerleave",y),T.$$pointerup=x,T.$$pointerdown=v,ca(()=>({e:`${i.position().x}px`,t:`${i.position().y}px`,a:`${i.size()}px`,o:`${i.size()}px`,i:`${.5*i.size()}px`,n:_()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:P,t:S,a:E,o:N,i:L,n:U},V={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{P!==V.e&&Lt(T,"left",P),S!==V.t&&Lt(T,"top",S),E!==V.a&&Lt(T,"width",E),N!==V.o&&Lt(T,"height",N),L!==V.i&&Lt(T,"border-radius",L),U!==V.n&&Lt(T,"background-color",U)}),T})();return{position:i.position,size:i.size,pressed:_,power:p,justReleased:()=>s()?(o(!1),!0):!1,justReleasedExternal:()=>u()?(d(!1),!0):!1,UI:A}}uf(["pointerdown","pointerup","contextmenu"]);var $S=yc("<div style=width:100%;height:100%><canvas style=width:100%;height:100%;display:block;touch-action:none></canvas><div style=position:absolute;top:10px;left:10px;z-index:100><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Orbit Camera</label><br><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Sound");function jS(i){const e=new jt,t=new cr(.15,.2,i*.4,6),n=new wt({color:4863784,roughness:.9}),r=new je(t,n);r.position.y=i*.2,r.castShadow=!0,e.add(r);const s=new qs(i*.4,i*.7,6),o=new wt({color:2972199,roughness:.8}),c=new je(s,o);return c.position.y=i*.6,c.castShadow=!0,e.add(c),e}function ZS(i,e,t){const n=new jt,r=new lr(i,e,t),s=[9140069,10518640,10259580,8022618],o=new wt({color:s[Math.floor(Math.random()*s.length)],roughness:.7}),c=new je(r,o);c.position.y=e/2,c.castShadow=!0,c.receiveShadow=!0,n.add(c);const h=new qs(Math.max(i,t)*.7,e*.3,4),u=new wt({color:5917242,roughness:.8}),d=new je(h,u);return d.position.y=e+e*.15,d.rotation.y=Math.PI/4,d.castShadow=!0,n.add(d),n}function KS(i,e){const s=o=>{const c=Math.sin(o*7919)*1e4;return c-Math.floor(c)};for(let o=0;o<210;o++){const c=s(o*13);if(Math.abs(c-.5)<.22)continue;const h=i.getPointAt(c),u=i.getTangentAt(c),d=-u.z,a=u.x,l=Math.sqrt(d*d+a*a),f=d/l,m=a/l,g=s(o*17)>.5?1:-1,_=Pi/2+4+s(o*19)*25,p=h.x+f*_*g,v=h.z+m*_*g,x=On(p,v),y=Pi/2,A=6;let T=x;if(_<=y+A){const P=h.y+.02,S=(_-y)/A;T=Math.min(x,P)*(1-S)+x*S}if(o<160){const P=jS(1.5+s(o*7)*2);P.position.set(p,T,v),e.add(P)}else{const P=1+s(o*3)*2,S=1.5+s(o*4)*3,E=1+s(o*5)*2,N=ZS(P,S,E);let L=Math.min(T,On(p-.5*P,v-.5*E),On(p-.5*P,v+.5*E),On(p+.5*P,v-.5*E),On(p+.5*P,v+.5*E));N.position.set(p,L,v),N.lookAt(h.x,T,h.z),e.add(N)}}}function JS(i,e){const t=i.getSpacedPoints(800);let n=1/0,r=-1/0,s=1/0,o=-1/0;for(const d of t)n=Math.min(n,d.x),r=Math.max(r,d.x),s=Math.min(s,d.z),o=Math.max(o,d.z);const c=(n+r)/2,h=(s+o)/2,u=Math.max(r-n,o-s)/2+e+5;return{centerX:c,centerZ:h,size:u*2}}function QS(i){const e=JS(i,18),t=e.size,n=160,r=[],s=[],o=[],c=800,h=i.getSpacedPoints(c),u=t/2;for(let l=0;l<=n;l++)for(let f=0;f<=n;f++){const m=e.centerX-u+f/n*t,g=e.centerZ-u+l/n*t;let _=1/0,p=0;for(let A=0;A<c;A++){const T=h[A].x-m,P=h[A].z-g,S=Math.sqrt(T*T+P*P);S<_&&(_=S,p=h[A].y)}const v=Pi/2,x=3;let y=On(m,g);if(_<=v+x){const A=p-.2;if(_<=v)y=A;else{const T=(_-v)/x,P=On(m,g),S=A*(1-T)+P*T,E=A+T*1.5;y=Math.min(S,E)}}r.push(m,y,g),o.push(f/n*4,l/n*4)}for(let l=0;l<n;l++)for(let f=0;f<n;f++){const m=l*(n+1)+f,g=m+1,_=(l+1)*(n+1)+f,p=_+1;s.push(g,m,p),s.push(_,p,m)}const d=new Et;d.setAttribute("position",new Qe(r,3)),d.setAttribute("uv",new Qe(o,2)),d.setIndex(s),d.computeVertexNormals();const a=new wt({color:4881471,roughness:.9,flatShading:!0});return{mesh:new je(d,a),bounds:e}}let[al,eM]=gt(),[qi,ld]=gt(!1),[cd,tM]=gt(!0),[lM,ud]=gt(!1),[cM,hd]=gt(!1),[nM,fd]=gt(!1),[iM,dd]=gt(!1),[rM,Wc]=gt(!1),[sM,pd]=gt(!1);function oM(i,e,t){const n=new Sm;n.background=new Je(6006985);const r=new T_(16777215,.7);n.add(r);const s=new E_(16777215,1);s.position.set(20,50,20),s.castShadow=!0,s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,n.add(s);const{curve:o,group:c}=wy(42);c.position.set(0,0,0),n.add(c);const h=Cy(o,0);n.add(h);const{mesh:u,bounds:d}=QS(o),a=d.size/2;s.shadow.camera.left=d.centerX-a,s.shadow.camera.right=d.centerX+a,s.shadow.camera.top=d.centerZ+a,s.shadow.camera.bottom=d.centerZ-a,u.receiveShadow=!0,n.add(u),KS(o,n);const{ecs:l}=wS(),f=.01,m=o.getPointAt(f),g=f+.01,_=o.getPointAt(g);new O().subVectors(_,m).normalize();const p=new O(0,0,0),v=m.y+.1;m.y=v;const x=AS({position:m,velocity:p,reactiveEcs:l}),{dispose:y}=kS(l,n),A=oi(()=>{const B=t().x;return Math.abs(B)>.01?B*2:nM()?-1:iM()?1:0}),{update:T}=BS({ecs:l,entityId:x,turnAmount:A,actionDown:rM,driftDown:sM}),{update:P,dispose:S}=GS(l,cd),E=new My({antialias:!0,canvas:e});E.shadowMap.enabled=!0,E.shadowMap.type=hf;const N=new fn(75,1,.1,1e3);let L=0,U=.5,V=5,Y=!1,z=0,H=0,F=0;e.addEventListener("pointerdown",B=>{Y=!0,z=B.clientX,H=B.clientY,e.setPointerCapture(B.pointerId)}),e.addEventListener("pointermove",B=>{if(!Y||!qi())return;const Q=B.clientX-z,me=B.clientY-H;L-=Q*.01,U=Math.max(.1,Math.min(Math.PI/2-.1,U+me*.01)),z=B.clientX,H=B.clientY}),e.addEventListener("pointerup",B=>{Y=!1}),e.addEventListener("pointercancel",()=>{Y=!1}),e.addEventListener("contextmenu",B=>B.preventDefault());let $=!1;e.addEventListener("touchstart",B=>{B.touches.length===1&&($=!0,z=B.touches[0].clientX,H=B.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",B=>{if(qi()&&(B.preventDefault(),B.touches.length===1&&$)){const Q=B.touches[0].clientX-z,me=B.touches[0].clientY-H;L-=Q*.01,U=Math.max(.1,Math.min(Math.PI/2-.1,U+me*.01)),z=B.touches[0].clientX,H=B.touches[0].clientY}},{passive:!1}),e.addEventListener("touchend",B=>{$=!1}),e.addEventListener("touchstart",B=>{if(B.touches.length===2){const Q=B.touches[0].clientX-B.touches[1].clientX,me=B.touches[0].clientY-B.touches[1].clientY;F=Math.sqrt(Q*Q+me*me)}}),e.addEventListener("touchmove",B=>{if(!qi()||B.touches.length!==2)return;B.preventDefault();const Q=B.touches[0].clientX-B.touches[1].clientX,me=B.touches[0].clientY-B.touches[1].clientY,de=Math.sqrt(Q*Q+me*me);V=Math.max(1,Math.min(20,V-(de-F)*.02)),F=de},{passive:!1}),e.addEventListener("wheel",B=>{qi()&&(V=Math.max(1,Math.min(20,V+B.deltaY*.01)))}),window.addEventListener("keydown",B=>{(B.key==="o"||B.key==="O")&&ld(!qi())});let ie=new ResizeObserver(()=>{let B=i.getBoundingClientRect();eM(new ue(B.width,B.height)),E.setSize(B.width,B.height),N.aspect=B.width/B.height,N.updateProjectionMatrix(),E.render(n,N)});ie.observe(i),la(()=>{ie.unobserve(i),ie.disconnect()});const he=3,ve=6;let pe=0,Ue=new O,K=new O;const k=12;let w=!0,R=performance.now(),j=!0;const le=()=>{if(!w)return;const B=performance.now(),Q=Math.min((B-R)/1e3,.1);R=B;const me=l.entity(x).getField(Kt,"x"),de=l.entity(x).getField(Kt,"y"),G=l.entity(x).getField(Kt,"z"),X=new O(me,de,G),J=l.entity(x).getField(Dt,"x"),ne=l.entity(x).getField(Dt,"y"),b=l.entity(x).getField(Dt,"z"),D=l.entity(x).getField(Dt,"w"),ce=new Gn(J,ne,b,D),Me=new O(0,0,1).applyQuaternion(ce);Me.y=0;let _e=0;if(Me.length()>.001&&(Me.normalize(),_e=Math.atan2(Me.x,Me.z)),T(Q),P(Q,x),j&&(j=!1,Ue.copy(X),K.copy(X),pe=_e),qi()){const I=_e+L,M=X;N.position.set(M.x+V*Math.sin(I)*Math.cos(U),M.y+V*Math.sin(U),M.z+V*Math.cos(I)*Math.cos(U)),N.lookAt(M)}else{let I=_e-pe;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;pe+=I*Math.min(1,k*Q);const M=new O(-Math.sin(pe)*ve,he,-Math.cos(pe)*ve),W=X.clone().add(M),re=X.clone().add(new O(Math.sin(pe)*2,.3,Math.cos(pe)*2));Ue.lerp(W,1-Math.exp(-k*Q*3)),K.lerp(re,1-Math.exp(-k*Q*3)),N.position.copy(Ue),N.lookAt(K)}E.render(n,N),requestAnimationFrame(le)};return le(),()=>{w=!1,y(),S(),E.dispose()}}function aM(){let[i,e]=gt(),[t,n]=gt(),r=150,s=WS({position:oi(()=>new ue(50,(al()?.y??0)-50-r)),hitAreaSize:r,outerRingSize:()=>.8*r,knobSize:()=>70}),o=100,c=YS({position:oi(()=>new ue((al()?.x??0)-50-o,(al()?.y??0)-50-o)),size:()=>o});return Lr(()=>c.pressed(),h=>{Wc(h)}),Lr(()=>[i(),t()],([h,u])=>{h!=null&&u!==void 0&&gc(d=>(oM(h,u,s.value),d))}),(()=>{var h=$S(),u=h.firstChild,d=u.nextSibling,a=d.firstChild,l=a.firstChild,f=a.nextSibling,m=f.nextSibling,g=m.firstChild,_=e;typeof _=="function"||Array.isArray(_)?gl(()=>_,h):e=h;var p=n;return typeof p=="function"||Array.isArray(p)?gl(()=>p,u):n=u,l.addEventListener("change",v=>ld(v.target.checked)),g.addEventListener("change",v=>tM(v.target.checked)),xl(h,_l(s.UI,{}),null),xl(h,_l(c.UI,{}),null),ca(()=>({e:qi(),t:cd()}),({e:v,t:x},y={e:void 0,t:void 0})=>{l.checked=v,g.checked=x}),h})()}const Bh=document.getElementById("root");Bh&&up(()=>_l(aM,{}),Bh);document.addEventListener("keydown",i=>{switch(i.key){case"ArrowUp":ud(!0);break;case"ArrowDown":hd(!0);break;case"ArrowLeft":fd(!0);break;case"ArrowRight":dd(!0);break;case" ":Wc(!0);break;case"z":case"Z":pd(!0);break}});document.addEventListener("keyup",i=>{switch(i.key){case"ArrowUp":ud(!1);break;case"ArrowDown":hd(!1);break;case"ArrowLeft":fd(!1);break;case"ArrowRight":dd(!1);break;case" ":Wc(!1);break;case"z":case"Z":pd(!1);break}});
