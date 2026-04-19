(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Xe extends Error{source;constructor(t){super(),this.source=t}}class el extends Error{source;constructor(t,e){super(e instanceof Error?e.message:String(e),{cause:e}),this.source=t}}const Ah=0,hr=1,zs=2,Jo=4,si=8,Mr=16,An=32,Sr=64,Er=128,lc=256,nl=512,pe=1,pn=2,ln=4,Ls=1,zn=2,Fr=3,de={},cd={},ud="sp",Rh={},hd=Symbol("refresh");function Ch(i,t){const e=(i.i?.t?i.i.u?.o:i.i?.o)??-1;e>=i.o&&(i.o=e+1);const n=i.o,s=t.l[n];if(s===void 0)t.l[n]=i;else{const r=s.T;r.S=i,i.T=r,s.T=i}n>t.R&&(t.R=n)}function Qo(i,t){let e=i.O;e&(si|Jo)||(e&hr?i.O=e&-4|zs|si:i.O=e|si,e&Mr||Ch(i,t))}function Ph(i,t){let e=i.O;e&(si|Jo|Mr)||(i.O=e|Mr,Ch(i,t))}function Or(i,t){const e=i.O;if(!(e&(si|Mr)))return;i.O=e&-25;const n=i.o;if(i.T===i)t.l[n]=void 0;else{const s=i.S,r=t.l[n],o=s??r;i===r?t.l[n]=s:i.T.S=s,o.T=i.T}i.T=i,i.S=void 0}function fd(i){if(!i._){i._=!0;for(let t=0;t<=i.R;t++)for(let e=i.l[t];e!==void 0;e=e.S)e.O&si&&Bo(e)}}function Bo(i,t=zs){const e=i.O;if(!((e&(hr|zs))>=t)){i.O=e&-4|t;for(let n=i.I;n!==null;n=n.h)Bo(n.p,hr);if(i.A!==null)for(let n=i.A;n!==null;n=n.N)for(let s=n.I;s!==null;s=s.h)Bo(s.p,hr)}}function Ao(i,t){for(i._=!1,i.P=0;i.P<=i.R;i.P++){let e=i.l[i.P];for(;e!==void 0;)e.O&si?t(e):dd(e,i),e=i.l[i.P]}i.R=0}function dd(i,t){Or(i,t);let e=i.o;for(let n=i.C;n;n=n.D){const s=n.m,r=s.V||s;r.L&&r.o>=e&&(e=r.o+1)}if(i.o!==e){i.o=e;for(let n=i.I;n!==null;n=n.h)Ph(n.p,t)}}const Xr=new Set,De={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},mn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Oe=0,Ht=null,br=!1,Br=!1,Ro=null;function pd(i){return!!Ro?.has(i)}function qr(i){for(const t of Ri){if(t.U||t.k.size>0)continue;const e=t.G[i-1];e.length&&(t.G[i-1]=[],zo(e,i))}}function md(i){for(let t=i.I;t!==null;t=t.h){const e=t.p;if(!e.W)continue;if(e.W===Fr){e.H||(e.H=!0,e.F.enqueue(zn,e.M));continue}const n=e.O&An?mn:De;n.P>e.o&&(n.P=e.o),Qo(e,n)}}function mi(i){Br=i}function gd(i,t){t.j=i,i.$.push(...t.$);for(const e of Ri)e.K===t&&(e.K=i);i.Y.push(...t.Y);for(const e of t.Z)i.Z.add(e);for(const[e,n]of t.B){let s=i.B.get(e);s||i.B.set(e,s=new Set);for(const r of n)s.add(r)}}function _d(i){for(let t=0;t<i.length;t++){const e=i[t];e.q=void 0,e.X!==de&&(e.J=e.X,e.X=de);const n=e.ee;e.ee=de,n!==de&&e.J!==n&&ks(e,!0),e.K=null}i.length=0}function xd(i){for(const t of Ri)(i?t.K===i:!t.K)&&(t.U||(t.G[0].length&&zo(t.G[0],Ls),t.G[1].length&&zo(t.G[1],zn)),t.te.q===t&&(t.te.q=void 0),t.k.clear(),t.G[0].length=0,t.G[1].length=0,Ri.delete(t),ko.delete(t.te))}function Ai(){br||(br=!0,!Se.ne&&!Br&&queueMicrotask(il))}class vd{i=null;ie=[[],[]];re=[];created=Oe;addChild(t){this.re.push(t),t.i=this}removeChild(t){const e=this.re.indexOf(t);e>=0&&(this.re.splice(e,1),t.i=null)}notify(t,e,n,s){return this.i?this.i.notify(t,e,n,s):!1}run(t){if(this.ie[t-1].length){const e=this.ie[t-1];this.ie[t-1]=[],zo(e,t)}for(let e=0;e<this.re.length;e++)this.re[e].run?.(t)}enqueue(t,e){t&&(En?qe(En).G[t-1].push(e):this.ie[t-1].push(e)),Ai()}stashQueues(t){t.ie[0].push(...this.ie[0]),t.ie[1].push(...this.ie[1]),this.ie=[[],[]];for(let e=0;e<this.re.length;e++){let n=this.re[e],s=t.re[e];s||(s={ie:[[],[]],re:[]},t.re[e]=s),n.stashQueues(s)}}restoreQueues(t){this.ie[0].push(...t.ie[0]),this.ie[1].push(...t.ie[1]);for(let e=0;e<t.re.length;e++){const n=t.re[e];let s=this.re[e];s&&s.restoreQueues(n)}}}class ri extends vd{ne=!1;se=[];Y=[];Z=new Set;static oe;static ue;static ce=null;flush(){if(!this.ne){this.ne=!0;try{if(Ao(De,ri.oe),Ht){if(!Md(Ht)){const n=Ht;if(Ao(mn,ri.oe),this.se=[],this.Y=[],this.Z=new Set,qr(Ls),qr(zn),this.stashQueues(n.ae),Oe++,br=De.R>=De.P,jc(n.se),Ht=null,!n.$.length&&n.Y.length){Ro=new Set;for(let s=0;s<n.Y.length;s++){const r=n.Y[s];r.L||r.le||(Ro.add(r),md(r))}}try{ua(null,!0)}finally{Ro=null}return}this.se!==Ht.se&&this.se.push(...Ht.se),this.restoreQueues(Ht.ae),Xr.delete(Ht);const e=Ht;Ht=null,jc(this.se),ua(e)}else Xr.size&&Ao(mn,ri.oe),ua();Oe++,br=De.R>=De.P,qr(Ls),this.run(Ls),qr(zn),this.run(zn)}finally{this.ne=!1}}}notify(t,e,n,s){if(e&pe){if(n&pe){const r=s!==void 0?s:t.fe;if(Ht&&r){const o=r.source;let a=Ht.B.get(o);a||Ht.B.set(o,a=new Set);const l=a.size;a.add(t),a.size!==l&&Ai()}}return!0}return!1}initTransition(t){if(t&&(t=Dh(t)),!(t&&t===Ht)&&!(!t&&Ht&&Ht.Ee===Oe)){if(!Ht)Ht=t??{Ee:Oe,se:[],B:new Map,Y:[],Z:new Set,$:[],ae:{ie:[[],[]],re:[]},j:!1};else if(t){const e=Ht;gd(t,e),Xr.delete(e),Ht=t}if(Xr.add(Ht),Ht.Ee=Oe,this.se!==Ht.se){for(let e=0;e<this.se.length;e++){const n=this.se[e];n.K=Ht,Ht.se.push(n)}this.se=Ht.se}if(this.Y!==Ht.Y){for(let e=0;e<this.Y.length;e++){const n=this.Y[e];n.K=Ht,Ht.Y.push(n)}this.Y=Ht.Y}for(const e of Ri)e.K||(e.K=Ht);if(this.Z!==Ht.Z){for(const e of this.Z)Ht.Z.add(e);this.Z=Ht.Z}}}}function ks(i,t=!1){const e=i.q||En,n=i.de!==void 0;for(let s=i.I;s!==null;s=s.h){if(n&&s.p.Te){s.p.O|=lc;continue}t&&e?(s.p.O|=Er,Uh(s.p,e)):t&&(s.p.O|=Er,s.p.q=void 0);const r=s.p;if(r.W===Fr){r.H||(r.H=!0,r.F.enqueue(zn,r.M));continue}const o=s.p.O&An?mn:De;o.P>s.p.o&&(o.P=s.p.o),Qo(s.p,o)}}function Yc(){const i=Se.se;for(let t=0;t<i.length;t++){const e=i[t];e.X!==de&&(e.J=e.X,e.X=de,e.W&&e.W!==Fr&&(e.H=!0)),e.Se&pe||(e.Se&=~ln),e.L&&ri.ue(e,!1,!0)}i.length=0}function ua(i=null,t=!1){const e=!t;e&&Yc(),t||Lh(Se),De.R>=De.P&&Ao(De,ri.oe),e&&(Yc(),_d(i?i.Y:Se.Y),i?i.Z:Se.Z,xd(i))}function Lh(i){for(const t of i.re)t.checkSources?.(),Lh(t)}function Ih(i){Se.Z.add(i),Ai()}function jc(i){for(let t=0;t<i.length;t++)i[t].K=Ht}const Se=new ri;function il(){if(!Se.ne)for(;br||Ht;)Se.flush()}function zo(i,t){for(let e=0;e<i.length;e++)i[e](t)}function yd(i,t){if(i.O&(An|Sr))return!1;if(i.Re===t||i.Oe?.has(t))return!0;for(let e=i.C;e;e=e.D){let n=e.m;for(;n;){if(n===t||n.V===t)return!0;n=n._e}}return!!(i.Se&pe&&i.fe instanceof Xe&&i.fe.source===t)}function Md(i){if(i.j)return!0;if(i.$.length)return!1;let t=!0;for(const[e,n]of i.B){let s=!1;for(const r of n){if(yd(r,e)){s=!0;break}n.delete(r)}if(!s)i.B.delete(e);else if(e.Se&pe&&e.fe?.source===e){t=!1;break}}if(t)for(let e=0;e<i.Y.length;e++){const n=i.Y[e];if(ta(n)&&"Se"in n&&n.Se&pe&&n.fe instanceof Xe&&n.fe.source!==n){t=!1;break}}return t&&(i.j=!0),t}function Dh(i){for(;i.j&&typeof i.j=="object";)i=i.j;return i}function Sd(i,t){const e=Ht;try{return Ht=Dh(i),t()}finally{Ht=e}}const ko=new WeakMap,Ri=new Set;function Ed(i){let t=ko.get(i);if(t)return qe(t);const e=i._e,n=e?.q?qe(e.q):null;return t={te:i,k:new Set,G:[[],[]],U:null,K:Ht,Ie:n},ko.set(i,t),Ri.add(t),i.he=!1,t}function qe(i){for(;i.U;)i=i.U;return i}function Nh(i,t){if(i=qe(i),t=qe(t),i===t)return i;t.U=i;for(const e of t.k)i.k.add(e);return i.G[0].push(...t.G[0]),i.G[1].push(...t.G[1]),i}function Tr(i){const t=i.q;if(!t)return;const e=qe(t);if(Ri.has(e))return e;i.q=void 0}function rr(i){return Tr(i)?.K??i.K}function ta(i){return i.ee!==void 0&&i.ee!==de}function Uh(i,t){const e=qe(t),n=i.q;if(n){if(n.U){i.q=t;return}const s=qe(n);if(Ri.has(s)){s!==e&&!ta(i)&&(e.Ie&&qe(e.Ie)===s?i.q=t:s.Ie&&qe(s.Ie)===e||Nh(e,s));return}}i.q=t}function cc(i){const t=i.m,e=i.D,n=i.h,s=i.pe;return n!==null?n.pe=s:t.Ae=s,s!==null?s.h=n:(t.I=n,n===null&&(t.Ne?.(),t.L&&!t.Pe&&!(t.O&An)&&bd(t))),e}function bd(i){Or(i,i.O&An?mn:De);let t=i.C;for(;t!==null;)t=cc(t);i.C=null,zr(i,!0)}function Yr(i,t){const e=t.ge;if(e!==null&&e.m===i)return;let n=null;const s=t.O&Jo;if(s&&(n=e!==null?e.D:t.C,n!==null&&n.m===i)){t.ge=n;return}const r=i.Ae;if(r!==null&&r.p===t&&(!s||Td(r,t)))return;const o=t.ge=i.Ae={m:i,p:t,D:n,pe:r,h:null};e!==null?e.D=o:t.C=o,r!==null?r.h=o:i.I=o}function Td(i,t){const e=t.ge;if(e!==null){let n=t.C;do{if(n===i)return!0;if(n===e)break;n=n.D}while(n!==null)}return!1}function Fh(i){let t=i.Ce;for(;t;)t.O|=An,t.O&si&&(Or(t,De),Qo(t,mn)),Fh(t),t=t.De}function zr(i,t=!1,e){if(i.O&Sr)return;t&&(i.O=Sr),t&&i.L&&(i.ye=null);let n=e?i.ve:i.Ce;for(;n;){const s=n.De;if(n.C){const r=n;Or(r,r.O&An?mn:De);let o=r.C;do o=cc(o);while(o!==null);r.C=null,r.ge=null}zr(n,!0),n=s}e?i.ve=null:(i.Ce=null,i.me=0),wd(i,e)}function wd(i,t){let e=t?i.we:i.Ve;if(e){if(Array.isArray(e))for(let n=0;n<e.length;n++){const s=e[n];s.call(s)}else e.call(e);t?i.we=null:i.Ve=null}}function Ad(i,t){let e=i;for(;e.be&&e.i;)e=e.i;if(e.id!=null)return Rd(e.id,e.me++);throw new Error("Cannot get child id from owner without an id")}function Oh(i){return Ad(i)}function Rd(i,t){const e=t.toString(36),n=e.length-1;return i+(n?String.fromCharCode(64+n):"")+e}function Ye(){return je?ie:null}function Cd(){return ie}function uc(i){return ie&&(ie.Ve?Array.isArray(ie.Ve)?ie.Ve.push(i):ie.Ve=[ie.Ve,i]:ie.Ve=i),i}function fr(i){const t=ie,e=i?.transparent??!1,n={id:i?.id??(e?t?.id:t?.id!=null?Oh(t):void 0),be:e||void 0,t:!0,u:t?.t?t.u:t,Ce:null,De:null,Ve:null,F:t?.F??Se,Le:t?.Le||Rh,me:0,we:null,ve:null,i:t,dispose(s=!0){zr(n,s)}};if(t){const s=t.Ce;s===null||(n.De=s),t.Ce=n}return n}function hc(i,t){const e=fr(t);return Rs(e,()=>i(e.dispose))}function Pd(i,t){return i.Re===t||i.Oe?.has(t)?!1:i.Re?(i.Oe?i.Oe.add(t):i.Oe=new Set([i.Re,t]),i.Re=void 0,!0):(i.Re=t,!0)}function Ld(i,t){return i.Re?i.Re!==t?!1:(i.Re=void 0,!0):i.Oe?.delete(t)?(i.Oe.size===1?(i.Re=i.Oe.values().next().value,i.Oe=void 0):i.Oe.size===0&&(i.Oe=void 0),!0):!1}function Bh(i){i.Re=void 0,i.Oe?.clear(),i.Oe=void 0}function Vo(i,t,e){if(!t){i.fe=null;return}if(e instanceof Xe&&e.source===t){i.fe=e;return}const n=i.fe;(!(n instanceof Xe)||n.source!==t)&&(i.fe=new Xe(t))}function sl(i,t){for(let e=i.I;e!==null;e=e.h)t(e.p);for(let e=i.A;e!==null;e=e.N)for(let n=e.I;n!==null;n=n.h)t(n.p)}function Id(i){let t=!1;const e=new Set,n=s=>{if(e.has(s)||!Ld(s,i))return;e.add(s),s.Ee=Oe;const r=s.Re??s.Oe?.values().next().value;if(r)Vo(s,r),ns(s);else{if(s.Se&=~pe,Vo(s),ns(s),s.Ue){if(s.W===Fr){const o=s;o.H||(o.H=!0,o.F.enqueue(zn,o.M))}else{const o=s.O&An?mn:De;o.P>s.o&&(o.P=s.o),Qo(s,o)}t=!0}s.Ue=!1}sl(s,n)};sl(i,n),t&&Ai()}function zh(i,t,e){const n=typeof t=="object"&&t!==null,s=n&&on(()=>t[Symbol.asyncIterator]),r=!s&&n&&on(()=>typeof t.then=="function");if(!r&&!s)return i.ye=null,t;i.ye=t;let o;const a=c=>{i.ye===t&&(Se.initTransition(rr(i)),fc(i,c instanceof Xe?pe:pn,c),i.Ee=Oe)},l=(c,u)=>{if(i.ye!==t||i.O&(zs|Er))return;Se.initTransition(rr(i));const f=!!(i.Se&ln);kh(i);const h=Tr(i);if(h&&h.k.delete(i),e)e(c);else if(i.ee!==void 0)i.ee!==void 0&&i.ee!==de?i.X=c:(i.J=c,ks(i)),i.Ee=Oe;else if(h){const d=i.W,g=i.J,y=i.ke;(!d&&f||!y||!y(c,g))&&(i.J=c,i.Ee=Oe,i.xe&&he(i.xe,c),ks(i,!0))}else he(i,()=>c);Id(i),Ai(),il(),u?.()};if(r){let c=!1,u=!0;if(t.then(f=>{u?(o=f,c=!0):l(f)},f=>{u||a(f)}),u=!1,!c)throw Se.initTransition(rr(i)),new Xe(ie)}if(s){const c=t[Symbol.asyncIterator]();let u=!1,f=!1;uc(()=>{if(!f){f=!0;try{const g=c.return?.();g&&typeof g.then=="function"&&g.then(void 0,()=>{})}catch{}}});const h=()=>{let g,y=!1,m=!0;return c.next().then(p=>{if(m)g=p,y=!0,p.done&&(f=!0);else{if(i.ye!==t)return;p.done?(f=!0,Ai(),il()):l(p.value,h)}},p=>{!m&&i.ye===t&&(f=!0,a(p))}),m=!1,y&&!g.done?(o=g.value,u=!0,h()):y&&g.done},d=h();if(!u&&!d)throw Se.initTransition(rr(i)),new Xe(ie)}return o}function kh(i,t=!1){Bh(i),i.Ue=!1,i.Se=t?0:i.Se&ln,Vo(i),ns(i),i.Ge?.()}function fc(i,t,e,n,s){t===pn&&!(e instanceof el)&&!(e instanceof Xe)&&(e=new el(i,e));const r=t===pe&&e instanceof Xe?e.source:void 0,o=r===i,a=t===pe&&i.ee!==void 0&&!o,l=a&&ta(i);n||(t===pe&&r?(Pd(i,r),i.Se=pe|i.Se&ln,Vo(i,r,e)):(Bh(i),i.Se=t|(t!==pn?i.Se&ln:0),i.fe=e),ns(i)),s&&!n&&Uh(i,s);const c=n||l,u=n||a?void 0:s;if(i.Ge){if(n&&t===pe)return;c?i.Ge(t,e):i.Ge();return}sl(i,f=>{f.Ee=Oe,(t===pe&&r&&f.Re!==r&&!f.Oe?.has(r)||t!==pe&&(f.fe!==e||f.Re||f.Oe))&&(!c&&!f.K&&Se.se.push(f),fc(f,t,e,c,u))})}let Dd=null;ri.oe=wi;ri.ue=zr;let je=!1,$i=!1,ie=null,En=null;function wi(i,t=!1){const e=i.W;t||(i.K&&(!e||Ht)&&Ht!==i.K&&Se.initTransition(i.K),Or(i,i.O&An?mn:De),i.ye=null,i.K||e===Fr?zr(i):(Fh(i),i.we=i.Ve,i.ve=i.Ce,i.Ve=null,i.Ce=null,i.me=0));const n=!!(i.O&Er),s=i.ee!==void 0&&i.ee!==de,r=!!(i.Se&pe),o=!!(i.Se&ln),a=ie;ie=i,i.ge=null,i.O=Jo,i.Ee=Oe;let l=i.X===de?i.J:i.X,c=i.o,u=je,f=En;if(je=!0,n){const h=Tr(i);h&&(En=h)}try{l=zh(i,i.L(l)),kh(i,t);const h=Tr(i);h&&(h.k.delete(i),ns(h.te))}catch(h){if(h instanceof Xe&&En){const d=qe(En);d.te!==i&&(d.k.add(i),i.q=d,ns(d.te))}h instanceof Xe&&(i.Ue=!0),fc(i,h instanceof Xe?pe:pn,h,void 0,h instanceof Xe?i.q:void 0)}finally{je=u,i.O=Ah|(t?i.O&lc:0),ie=a}if(!i.fe){const h=i.ge;let d=h!==null?h.D:i.C;if(d!==null){do d=cc(d);while(d!==null);h!==null?h.D=null:i.C=null}const g=s?i.ee:i.X===de?i.J:i.X;if(!e&&o||!i.ke||!i.ke(g,l)){const m=s?i.ee:void 0;t||e&&Ht!==i.K||n?(i.J=l,s&&n&&(i.ee=l,i.X=l)):i.X=l,s&&!n&&r&&!i.he&&(i.ee=l),(!s||n||i.ee!==m)&&ks(i,n||s)}else if(s)i.X=l;else if(i.o!=c)for(let m=i.I;m!==null;m=m.h)Ph(m.p,m.p.O&An?mn:De)}En=f,(!t||i.Se&pe)&&!i.K&&!(Ht&&s)&&Se.se.push(i),i.K&&e&&Ht!==i.K&&Sd(i.K,()=>wi(i))}function Vh(i){if(i.O&hr)for(let t=i.C;t;t=t.D){const e=t.m,n=e.V||e;if(n.L&&Vh(n),i.O&zs)break}(i.O&(zs|Er)||i.fe&&i.Ee<Oe&&!i.ye)&&wi(i),i.O=i.O&(lc|si|Mr)}function ea(i,t,e){const n=e?.transparent??!1,s={id:e?.id??(n?ie?.id:ie?.id!=null?Oh(ie):void 0),be:n||void 0,ke:e?.equals!=null?e.equals:wr,le:!!e?.pureWrite,Ne:e?.unobserved,Ve:null,F:ie?.F??Se,Le:ie?.Le??Rh,me:0,L:i,J:t,o:0,A:null,S:void 0,T:null,C:null,ge:null,I:null,Ae:null,i:ie,De:null,Ce:null,O:e?.lazy?nl:Ah,Se:ln,Ee:Oe,X:de,we:null,ve:null,ye:null,K:null};s.T=s;const r=ie?.t?ie.u:ie;if(ie){const o=ie.Ce;o===null||(s.De=o),ie.Ce=s}return r&&(s.o=r.o+1),!e?.lazy&&wi(s,!0),s}function dr(i,t,e=null){const n={ke:t?.equals!=null?t.equals:wr,le:!!t?.pureWrite,He:!!t?.He,Ne:t?.unobserved,J:i,I:null,Ae:null,Ee:Oe,V:e,N:e?.A||null,X:de};return e&&(e.A=n),n}function wr(i,t){return i===t}function on(i,t){if(!je)return i();const e=je;je=!1;try{return i()}finally{je=e}}function Zi(i){let t=ie;t?.t&&(t=t.u),i.O&nl&&(i.O&=~nl,wi(i,!0));const e=i.V||i;if(t&&je&&(i.L&&i.O&Sr&&wi(i),Yr(i,t),e.L)){const n=i.O&An;e.o>=(n?mn.P:De.P)&&(Bo(t),fd(n?mn:De),Vh(e));const s=e.o;s>=t.o&&i.i!==t&&(t.o=s+1)}if(e.Se&pe)if(t&&!($i&&e.K&&Ht!==e.K))if(En){const n=e.q,s=qe(En);if(n&&qe(n)===s&&!ta(e))throw!je&&i!==t&&Yr(i,t),e.fe}else throw!je&&i!==t&&Yr(i,t),e.fe;else{if(t&&e!==i&&e.Se&ln)throw!je&&i!==t&&Yr(i,t),e.fe;if(!t&&e.Se&ln)throw e.fe}if(i.L&&i.Se&pn){if(i.Ee<Oe)return wi(i),Zi(i);throw i.fe}return i.ee!==void 0&&i.ee!==de?t&&$i&&pd(i)?i.J:i.ee:!t||En!==null&&(i.ee!==void 0||i.q||e===i&&$i||e.Se&pe)||i.X===de||$i&&i.K&&Ht!==i.K?i.J:i.X}function he(i,t){i.K&&Ht!==i.K&&Se.initTransition(i.K);const e=i.ee!==void 0&&!Br,n=i.ee!==void 0&&i.ee!==de,s=e?n?i.ee:i.J:i.X===de?i.J:i.X;if(typeof t=="function"&&(t=t(s)),!(!i.ke||!i.ke(s,t)||!!(i.Se&ln)))return e&&n&&i.L&&(ks(i,!0),Ai()),t;if(e){const o=i.ee===de;o||Se.initTransition(rr(i)),o&&(i.X=i.J,Se.Y.push(i)),i.he=!0;const a=Ed(i);i.q=a,i.ee=t}else i.X===de&&Se.se.push(i),i.X=t;return ns(i),i.xe&&he(i.xe,t),i.Ee=Oe,ks(i,e),Ai(),t}function Rs(i,t){const e=ie,n=je;ie=i,je=!1;try{return t()}finally{ie=e,je=n}}function Nd(i){const t=i,e=i.V;if(e&&i.X!==de)return!e.ye&&!(e.Se&pe);if(i.ee!==void 0&&i.ee!==de){if(t.Se&pe&&!(t.Se&ln))return!0;if(i._e){const n=i.q?qe(i.q):null;return!!(n&&n.k.size>0)}return!0}return i.ee!==void 0&&i.ee===de&&!i._e?!1:i.X!==de&&!(t.Se&ln)?!0:!!(t.Se&pe&&!(t.Se&ln))}function ns(i){if(i.Fe){const t=Nd(i),e=i.Fe;if(he(e,t),!t&&e.q){const n=Tr(i);if(n&&n.k.size>0){const s=qe(e.q);s!==n&&Nh(n,s)}ko.delete(e),e.q=void 0}}}function Ud(i,t=!0){const e=$i;$i=t;try{return i()}finally{$i=e}}function Gh(i,t,e,n,s){let r=!1;const o=ea(s?.render?a=>Ud(()=>i(a)):i,n,{...s,equals:()=>(o.H=!o.fe,r&&o.F.enqueue(o.W,ha.bind(o)),!1),lazy:!0});o.Qe=n,o.Me=t,o.je=e,o.$e=void 0,o.W=s?.render?Ls:zn,o.Ge=(a,l)=>{const c=a!==void 0?a:o.Se,u=l!==void 0?l:o.fe;if(c&pn){let f=u;if(o.F.notify(o,pe,0),o.W===zn)try{return o.je?o.je(f,()=>{o.$e?.(),o.$e=void 0}):console.error(f)}catch(h){f=h}if(!o.F.notify(o,pn,pn))throw f}else o.W===Ls&&o.F.notify(o,pe|pn,c,u)},wi(o,!0),!s?.defer&&(o.W===zn?o.F.enqueue(o.W,ha.bind(o)):ha.call(o)),r=!0,uc(()=>o.$e?.())}function ha(){if(!(!this.H||this.O&Sr)){this.$e?.(),this.$e=void 0;try{const i=this.Me(this.J,this.Qe);this.$e=i}catch(i){if(this.fe=new el(this,i),this.Se|=pn,!this.F.notify(this,pn,pn))throw i}finally{this.Qe=this.J,this.H=!1}}}function na(i){return uc(i)}function Is(i){const t=Zi.bind(null,i);return t.$r=!0,t}function Fd(i,t,e){if(typeof i=="function"){const s=ea(i,t,e);return[Is(s),he.bind(null,s)]}const n=dr(i,t);return[Is(n),he.bind(null,n)]}function dc(i,t,e){let n=ea(i,t,e);return Is(n)}function Od(i,t,e,n){Gh(i,t.effect||t,t.error,e,n)}function Bd(i,t,e,n){Gh(i,t,void 0,e,{render:!0,...n})}function $c(i){return i?.[Ki]?.[ge]??i}function us(i,t,e,n,s){return s&&n in s?s[n]:t&&n in t?t[n]:i[n]}function zd(i,t,e){const n=qh(i,t),s=Object.keys(e);return Array.from(new Set([...n,...s]))}function Ts(i,t,e){const n=t?.[Ki];if(!n)return;const s=n[Fe],r=n[ue],o=n[le];let a=n[ge];if(!(i===s&&!r&&!o)){if((n[Hh]||rl).set(i,n[hn]),n[Fe]=i,n[ue]=void 0,Array.isArray(s)){let l=!1;const c=us(s,r,a,"length",o);if(i.length&&c&&i[0]&&e(i[0])!=null){let u,f,h,d,g,y,m,p;for(h=0,d=Math.min(c,i.length);h<d&&((y=us(s,r,a,h,o))===i[h]||y&&i[h]&&e(y)===e(i[h]));h++)Ts(i[h],sn(y,n),e);const M=new Array(i.length),v=new Map;for(d=c-1,g=i.length-1;d>=h&&g>=h&&((y=us(s,r,a,d,o))===i[g]||y&&i[g]&&e(y)===e(i[g]));d--,g--)M[g]=y;if(h>g||h>d){for(f=h;f<=g;f++)l=!0,n[ge][f]&&he(n[ge][f],sn(i[f],n));for(;f<i.length;f++){l=!0;const _=sn(M[f],n);n[ge][f]&&he(n[ge][f],_),Ts(i[f],_,e)}l&&n[ge][bn]&&he(n[ge][bn],void 0),c!==i.length&&n[ge].length&&he(n[ge].length,i.length);return}for(m=new Array(g+1),f=g;f>=h;f--)y=i[f],p=y&&e(y),u=v.get(p),m[f]=u===void 0?-1:u,v.set(p,f);for(u=h;u<=d;u++)y=us(s,r,a,u,o),p=y&&e(y),f=v.get(p),f!==void 0&&f!==-1&&(M[f]=y,f=m[f],v.set(p,f));for(f=h;f<i.length;f++)if(f in M){const _=sn(M[f],n);n[ge][f]&&he(n[ge][f],_),Ts(i[f],_,e)}else n[ge][f]&&he(n[ge][f],sn(i[f],n));h<i.length&&(l=!0)}else if(i.length)for(let u=0,f=i.length;u<f;u++){const h=us(s,r,a,u,o);Fn(h)?Ts(i[u],sn(h,n),e):n[ge][u]&&he(n[ge][u],i[u])}c!==i.length&&(l=!0,n[ge].length&&he(n[ge].length,i.length)),l&&n[ge][bn]&&he(n[ge][bn],void 0);return}if(a){const l=a[bn],c=l?zd(s,r,i):Object.keys(a);for(let u=0,f=c.length;u<f;u++){const h=c[u],d=a[h],g=$c(us(s,r,a,h,o));let y=$c(i[h]);g!==y&&(!g||!Fn(g)||!Fn(y)||e(g)!=null&&e(g)!==e(y)?(l&&he(l,void 0),d&&he(d,Fn(y)?sn(y,n):y)):Ts(y,sn(g,n),e))}}if(a=n[Go]){const l=Object.keys(a);for(let c=0,u=l.length;c<u;c++){const f=l[c];he(a[f],f in i)}}}}function Zc(i,t){return e=>{if(e==null)throw new Error("Cannot reconcile null or undefined state");const n=typeof t=="string"?r=>r[t]:t;if(n(e)!==void 0&&n(i)!==n(e))throw new Error("Cannot reconcile states with different identity");Ts(i,e,n)}}function kd(i,t={},e){let n;const s=new WeakMap,r=l=>{l[Ho]=o,l[Hh]=s,Object.defineProperty(l,Ds,{get(){return n},configurable:!0})},o=l=>{if(s.has(l))return s.get(l);if(l[Ki]?.[Ho]===o)return l;const c=Wh(l,Yh,r);return s.set(l,c),c},a=o(t);return n=ea(()=>{const l=Cd();let c=!1,u;const f=new Proxy(a,Vd(()=>!c||l.ye===u));al(f,h=>{u=i(h),c=!0;const d=zh(l,u,g=>{g!==h&&g!==void 0&&al(a,Zc(g,e?.key||"id"))});d!==h&&d!==void 0&&Zc(d,e?.key||"id")(a)})}),n.Pe=!0,{store:a,node:n}}function Vd(i){const t={get(e,n){let s;gi(!0),mi(!0);try{s=e[n]}finally{gi(!1),mi(!1)}return typeof s=="object"&&s!==null?new Proxy(s,t):s},has(e,n){let s;gi(!0),mi(!0);try{s=n in e}finally{gi(!1),mi(!1)}return s},set(e,n,s){if(i&&!i())return!0;gi(!0),mi(!0);try{e[n]=s}finally{gi(!1),mi(!1)}return!0},deleteProperty(e,n){if(i&&!i())return!0;gi(!0),mi(!0);try{delete e[n]}finally{gi(!1),mi(!1)}return!0}};return t}const bn=Symbol(0),Ki=Symbol(0),hn=Symbol(0),Mn=Symbol(0),Fe="v",ue="o",le="x",ge="n",Go="h",Ho="w",Hh="l",Ds="f",Ns="p";function Wh(i,t=Yh,e){let n;return Array.isArray(i)?(n=[],n.v=i):n={v:i},e&&e(n),n[hn]=new Proxy(n,t)}const rl=new WeakMap;function sn(i,t){if(t?.[Ho])return t[Ho](i,t);let e=i[hn]||rl.get(i);return e||rl.set(i,e=Wh(i)),e}function Fn(i){return i!=null&&typeof i=="object"&&!Object.isFrozen(i)&&!(typeof Node<"u"&&i instanceof Node)}let Xh=!1;function gi(i){Xh=i}function Ks(i){return Xh||!!qi?.has(i)}function pr(i,t){let e=i[t];return e||(i[t]=e=Object.create(null)),e}function ol(i,t,e,n,s=wr,r,o){if(i[t])return i[t];const a=dr(e,{equals:s,unobserved(){delete i[t]}},n);if(r&&(a.ee=de),o&&t in o){const l=o[t];a.de=l===void 0?cd:l}return i[t]=a}function Kc(i,t=bn){Ye()&&Zi(ol(pr(i,ge),t,void 0,i[Ds],!1,i[Ns]))}function qh(i,t,e=!0){const n=on(()=>e?Object.keys(i):Reflect.ownKeys(i));if(!t)return n;const s=new Set(n),r=Reflect.ownKeys(t);for(const o of r)t[o]!==Mn?s.add(o):s.delete(o);return Array.from(s)}function Jc(i,t,e){if(t&&e in t){if(t[e]===Mn)return;const n=Reflect.getOwnPropertyDescriptor(t,e);if(n?.get||n?.set||!(e in i))return n}return Reflect.getOwnPropertyDescriptor(i,e)}function Qc(i,t,e){if(i[Ns]){const a=i[Ds];a?.K&&Se.initTransition(a.K)}const n=i[Fe],s=n[e],r=i[Ns]&&!Br,o=r?le:ue;return r&&Ih(t),{base:s,overrideKey:o,state:n}}function fa(i,t,e,n){i[Go]?.[t]&&he(i[Go][t],e!=="delete");const s=pr(i,ge);e==="set"?s[t]&&he(s[t],()=>Fn(n)?sn(n,i):n):e==="invalidate"?s[t]&&(he(s[t],{}),delete s[t]):s[t]&&he(s[t],void 0),s[bn]&&he(s[bn],void 0)}let qi=null;const Yh={get(i,t,e){if(t===Ki)return i;if(t===hn)return e;if(t===hd)return i[Ds];if(t===bn)return Kc(i),e;const n=pr(i,ge),s=n[t],r=i[le]&&t in i[le],o=r||i[ue]&&t in i[ue],a=!!i[Fe][Ki],l=r?i[le]:i[ue]&&t in i[ue]?i[ue]:i[Fe];if(!s){const u=Object.getOwnPropertyDescriptor(l,t);if(u&&u.get)return u.get.call(e)}if(Ks(e)){let u=s&&(o||!a)?s.ee!==void 0&&s.ee!==de?s.ee:s.X!==de?s.X:s.J:l[t];if(u===Mn&&(u=void 0),!Fn(u))return u;const f=sn(u,i);return qi?.add(f),f}let c=s?o||!a?Zi(n[t]):(Zi(n[t]),l[t]):l[t];if(c===Mn&&(c=void 0),!s){if(!o&&typeof c=="function"&&!l.hasOwnProperty(t)){let u;return!Array.isArray(i[Fe])&&(u=Object.getPrototypeOf(i[Fe]))&&u!==Object.prototype?c.bind(l):c}else if(Ye())return Zi(ol(n,t,Fn(c)?sn(c,i):c,i[Ds],wr,i[Ns],i[ud]))}return Fn(c)?sn(c,i):c},has(i,t){if(t===hn||t===bn||t==="__proto__")return!0;const e=i[le]&&t in i[le]?i[le][t]!==Mn:i[ue]&&t in i[ue]?i[ue][t]!==Mn:t in i[Fe];return Ks(i[hn])||Ye()&&Zi(ol(pr(i,Go),t,e,i[Ds],wr,i[Ns])),e},set(i,t,e){const n=i[hn];return Ks(n)&&on(()=>{const{base:s,overrideKey:r,state:o}=Qc(i,n,t),a=i[le]&&t in i[le]?i[le][t]:i[ue]&&t in i[ue]?i[ue][t]:s,l=e?.[Ki]?.[Fe]??e,c=Array.isArray(o)&&t!=="length",u=c?parseInt(t)+1:0,f=c&&(i[le]&&"length"in i[le]?i[le].length:i[ue]&&"length"in i[ue]?i[ue].length:o.length),h=c&&u>f?u:void 0;if(a===l&&h===void 0)return!0;if(l!==void 0&&l===s&&h===void 0)delete i[r]?.[t];else{const d=i[r]||(i[r]=Object.create(null));d[t]=l,h!==void 0&&(d.length=h)}if(fa(i,t,"set",l),Array.isArray(o)){const d=pr(i,ge),g=t==="length"?l:h;g!==void 0&&d.length&&he(d.length,g)}}),!0},defineProperty(i,t,e){const n=i[hn];return Ks(n)&&on(()=>{const{base:s,overrideKey:r}=Qc(i,n,t),o="value"in e?{...e,value:e.value?.[Ki]?.[Fe]??e.value}:e;Object.defineProperty(i[r]||(i[r]=Object.create(null)),t,o),fa(i,t,"invalidate")}),!0},deleteProperty(i,t){const e=i[le]?.[t]===Mn,n=i[ue]?.[t]===Mn;return Ks(i[hn])&&!e&&!n&&on(()=>{const s=i[Ns]&&!Br,r=s?le:ue;s&&Ih(i[hn]);const o=i[le]&&t in i[le]?i[le][t]:i[ue]&&t in i[ue]?i[ue][t]:i[Fe][t];if(t in i[Fe]||i[ue]&&t in i[ue])(i[r]||(i[r]=Object.create(null)))[t]=Mn;else if(i[r]&&t in i[r])delete i[r][t];else return!0;fa(i,t,"delete")}),!0},ownKeys(i){Kc(i);let t=qh(i[Fe],i[ue],!1);if(i[le]){const e=new Set(t);for(const n of Reflect.ownKeys(i[le]))i[le][n]!==Mn?e.add(n):e.delete(n);t=Array.from(e)}return t},getOwnPropertyDescriptor(i,t){if(t===hn)return{value:i[hn],writable:!0,configurable:!0};if(i[le]&&t in i[le]){if(i[le][t]===Mn)return;const e=Reflect.getOwnPropertyDescriptor(i[le],t);if(e?.get||e?.set||!(t in i[Fe]))return e;const n=Jc(i[Fe],i[ue],t);return n?{...n,value:i[le][t]}:{value:i[le][t],writable:!0,enumerable:!0,configurable:!0}}return Jc(i[Fe],i[ue],t)},getPrototypeOf(i){return Object.getPrototypeOf(i[Fe])}};function al(i,t){const e=qi;qi=new Set,qi.add(i);try{const n=t(i);if(n!==i&&n!==void 0)if(Array.isArray(n)){for(let s=0,r=n.length;s<r;s++)i[s]=n[s];i.length=n.length}else new Set([...Object.keys(i),...Object.keys(n)]).forEach(r=>{r in n?i[r]=n[r]:delete i[r]})}finally{qi.clear(),qi=e}}function Gd(i,t,e){const n=typeof i=="function",s=n?kd(i,t,e).store:sn(i);return[s,r=>al(s,r)]}const jh=Symbol(0);function or(i,t,e=0){let n,s=i;if(e<t.length-1){n=t[e];const o=typeof n,a=Array.isArray(i);if(Array.isArray(n)){for(let l=0;l<n.length;l++)t[e]=n[l],or(i,t,e);t[e]=n;return}else if(a&&o==="function"){for(let l=0;l<i.length;l++)n(i[l],l)&&(t[e]=l,or(i,t,e));t[e]=n;return}else if(a&&o==="object"){const{from:l=0,to:c=i.length-1,by:u=1}=n;for(let f=l;f<=c;f+=u)t[e]=f,or(i,t,e);t[e]=n;return}else if(e<t.length-2){or(i[n],t,e+1);return}s=i[n]}let r=t[t.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(n===void 0&&r==null))if(r===jh)delete i[n];else if(n===void 0||Fn(s)&&Fn(r)&&!Array.isArray(r)){const o=n!==void 0?i[n]:i,a=Object.keys(r);for(let l=0;l<a.length;l++){const c=a[l],u=Object.getOwnPropertyDescriptor(r,c);u.get||u.set?Object.defineProperty(o,c,u):o[c]=u.value}}else i[n]=r}Object.assign(function(...t){return e=>{or(e,t)}},{DELETE:jh});function Hd(i,t,e){const s=t.length>1,r=t;return dc(Wd.bind({Ye:fr(),Ze:0,Be:i,qe:[],Xe:r,ze:[],Je:[],et:void 0,tt:void 0,nt:s?[]:void 0,it:e?.fallback}))}const da={pureWrite:!0};function Wd(){const i=this.Be()||[],t=i.length;return i[bn],Rs(this.Ye,()=>{let e,n,s=this.tt?()=>(this.tt[n]=dr(i[n],da),this.nt&&(this.nt[n]=dr(n,da)),this.Xe(Is(this.tt[n]),this.nt?Is(this.nt[n]):void 0)):this.nt?()=>{const r=i[n];return this.nt[n]=dr(n,da),this.Xe(()=>r,Is(this.nt[n]))}:()=>{const r=i[n];return this.Xe(()=>r)};if(t===0)this.Ze!==0&&(this.Ye.dispose(!1),this.Je=[],this.qe=[],this.ze=[],this.Ze=0,this.tt&&(this.tt=[]),this.nt&&(this.nt=[])),this.it&&!this.ze[0]&&(this.ze[0]=Rs(this.Je[0]=fr(),this.it));else if(this.Ze===0){for(this.Je[0]&&this.Je[0].dispose(),this.ze=new Array(t),n=0;n<t;n++)this.qe[n]=i[n],this.ze[n]=Rs(this.Je[n]=fr(),s);this.Ze=t}else{let r,o,a,l,c,u,f,h=new Array(t),d=new Array(t),g=this.tt?new Array(t):void 0,y=this.nt?new Array(t):void 0;for(r=0,o=Math.min(this.Ze,t);r<o&&(this.qe[r]===i[r]||this.tt&&tu(this.et,this.qe[r],i[r]));r++)this.tt&&he(this.tt[r],i[r]);for(o=this.Ze-1,a=t-1;o>=r&&a>=r&&(this.qe[o]===i[a]||this.tt&&tu(this.et,this.qe[o],i[a]));o--,a--)h[a]=this.ze[o],d[a]=this.Je[o],g&&(g[a]=this.tt[o]),y&&(y[a]=this.nt[o]);for(u=new Map,f=new Array(a+1),n=a;n>=r;n--)l=i[n],c=this.et?this.et(l):l,e=u.get(c),f[n]=e===void 0?-1:e,u.set(c,n);for(e=r;e<=o;e++)l=this.qe[e],c=this.et?this.et(l):l,n=u.get(c),n!==void 0&&n!==-1?(h[n]=this.ze[e],d[n]=this.Je[e],g&&(g[n]=this.tt[e]),y&&(y[n]=this.nt[e]),n=f[n],u.set(c,n)):this.Je[e].dispose();for(n=r;n<t;n++)n in h?(this.ze[n]=h[n],this.Je[n]=d[n],g&&(this.tt[n]=g[n],he(this.tt[n],i[n])),y&&(this.nt[n]=y[n],he(this.nt[n],n))):this.ze[n]=Rs(this.Je[n]=fr(),s);this.ze=this.ze.slice(0,this.Ze=t),this.qe=i.slice(0)}}),this.ze}function tu(i,t,e){return i?i(t)===i(e):!0}function $h(i,t){if(typeof i=="function"&&!i.length){if(t?.doNotUnwrap)return i;do i=i();while(typeof i=="function"&&!i.length)}if(!(t?.skipNonRendered&&(i==null||i===!0||i===!1||i===""))){if(Array.isArray(i)){let e=[];return ll(i,e,t)?()=>{let n=[];return ll(e,n,{...t,doNotUnwrap:!1}),n}:e}return i}}function ll(i,t=[],e){let n=null,s=!1;for(let r=0;r<i.length;r++)try{let o=i[r];if(typeof o=="function"&&!o.length){if(e?.doNotUnwrap){t.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=ll(o,t,e):e?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||t.push(o)}catch(o){if(!(o instanceof Xe))throw o;n=o}if(n)throw n;return s}const oi=(...i)=>dc(...i),_e=(...i)=>Fd(...i),Xd=(...i)=>Gd(...i),Zh=(...i)=>Bd(...i),Cs=(...i)=>Od(...i);function cl(i,t){return on(()=>i(t||{}))}const ia=(i,t,e)=>Zh(i,t,e,{transparent:!0}),qd=(i,t)=>t?i.$r?i:dc(()=>i(),void 0,{transparent:!0}):oi(()=>i());function Yd(i,t,e){let n=e.length,s=t.length,r=n,o=0,a=0,l=t[s-1].nextSibling,c=null;for(;o<s||a<r;){if(t[o]===e[a]){o++,a++;continue}for(;t[s-1]===e[r-1];)s--,r--;if(s===o){const u=r<n?a?e[a-1].nextSibling:e[r-a]:l;for(;a<r;)i.insertBefore(e[a++],u)}else if(r===a)for(;o<s;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[r-1]&&e[a]===t[s-1]){const u=t[--s].nextSibling;i.insertBefore(e[a++],t[o++].nextSibling),i.insertBefore(e[--r],u),t[s]=e[r]}else{if(!c){c=new Map;let f=a;for(;f<r;)c.set(e[f],f++)}const u=c.get(t[o]);if(u!=null)if(a<u&&u<r){let f=o,h=1,d;for(;++f<s&&f<r&&!((d=c.get(t[f]))==null||d!==u+h);)h++;if(h>u-a){const g=t[o];for(;a<u;)i.insertBefore(e[a++],g)}else i.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const eu="_$DX_DELEGATE";function jd(i,t,e,n={}){let s;return hc(r=>{s=r,t===document?$h(i):hl(t,i(),t.firstChild?null:void 0,e)},{id:n.renderId}),()=>{s(),t.textContent=""}}function pc(i,t,e,n){let s;const r=a=>{const l=document.createElement("template");return l.innerHTML=i,l.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function Kh(i,t=window.document){const e=t[eu]||(t[eu]=new Set);for(let n=0,s=i.length;n<s;n++){const r=i[n];e.has(r)||(e.add(r),t.addEventListener(r,Zd))}}function Le(i,t,e){e!=null?i.style.setProperty(t,e):i.style.removeProperty(t)}function $d(i,t){Array.isArray(i)?i.flat(1/0).forEach(e=>e&&e(t)):i(t)}function ul(i,t){const e=on(i);Rs(null,()=>$d(e,t))}function hl(i,t,e,n){const s=e!==void 0;if(s&&!n&&(n=[]),typeof t!="function"&&(t=iu(t,n,s,!0),typeof t!="function"))return nu(i,t,n,e);if(t=qd(t,!0),s&&n.length===0){const r=document.createTextNode("");i.insertBefore(r,e),n=[r]}ia(r=>iu(t,r,s),(r,o)=>nu(i,r,o,e),n)}function Zd(i){let t=i.target;const e=`$$${i.type}`,n=i.target,s=i.currentTarget,r=l=>Object.defineProperty(i,"target",{configurable:!0,value:l}),o=()=>{const l=t[e];if(l&&!t.disabled){const c=t[`${e}Data`];if(c!==void 0?l.call(t,c,i):l.call(t,i),i.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(i.target)&&r(t.host),!0},a=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}}),i.composedPath){const l=i.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!o());c++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();r(n)}function nu(i,t,e,n){if(t===e)return;const s=typeof t,r=n!==void 0;if(s==="string"||s==="number"){const o=typeof e;o==="string"||o==="number"?i.firstChild.data=t:i.textContent=t}else if(t===void 0)jr(i,e,n);else if(t.nodeType)Array.isArray(e)?jr(i,e,r?n:null,t):e===void 0||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);else if(Array.isArray(t)){const o=e&&Array.isArray(e);t.length===0?jr(i,e,n):o?e.length===0?su(i,t,n):Yd(i,e,t):(e&&jr(i),su(i,t))}}function iu(i,t,e,n){if(i=$h(i,{skipNonRendered:!0,doNotUnwrap:n}),n&&typeof i=="function")return i;if(e&&!Array.isArray(i)&&(i=[i??""]),Array.isArray(i))for(let s=0,r=i.length;s<r;s++){const o=i[s],a=t&&t[s],l=typeof o;(l==="string"||l==="number")&&(i[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return i}function su(i,t,e=null){for(let n=0,s=t.length;n<s;n++)i.insertBefore(t[n],e)}function jr(i,t,e,n){if(e===void 0)return i.textContent="";if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const a=o.parentNode===i;n&&!s&&!r?a?i.replaceChild(n,o):i.insertBefore(n,e):a&&o.remove()}else s=!0}}else n&&i.insertBefore(n,e)}function Kd(...i){return jd(...i)}const mc="183",Jd=0,ru=1,Qd=2,Co=1,Jh=2,ar=3,Ci=0,Je=1,dn=2,ai=0,Us=1,ou=2,au=3,lu=4,tp=5,Yi=100,ep=101,np=102,ip=103,sp=104,rp=200,op=201,ap=202,lp=203,fl=204,dl=205,cp=206,up=207,hp=208,fp=209,dp=210,pp=211,mp=212,gp=213,_p=214,pl=0,ml=1,gl=2,Vs=3,_l=4,xl=5,vl=6,yl=7,gc=0,xp=1,vp=2,kn=0,Qh=1,tf=2,ef=3,nf=4,sf=5,rf=6,of=7,af=300,is=301,Gs=302,pa=303,ma=304,sa=306,Ml=1e3,ii=1001,Sl=1002,Be=1003,yp=1004,$r=1005,Ge=1006,ga=1007,Ji=1008,an=1009,lf=1010,cf=1011,Ar=1012,_c=1013,Wn=1014,On=1015,ui=1016,xc=1017,vc=1018,Rr=1020,uf=35902,hf=35899,ff=1021,df=1022,wn=1023,hi=1026,Qi=1027,pf=1028,yc=1029,Hs=1030,Mc=1031,Sc=1033,Po=33776,Lo=33777,Io=33778,Do=33779,El=35840,bl=35841,Tl=35842,wl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,Il=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,jl=36492,$l=36494,Zl=36495,Kl=36283,Jl=36284,Ql=36285,tc=36286,Mp=3200,Ec=0,Sp=1,Ei="",rn="srgb",Ws="srgb-linear",Wo="linear",re="srgb",hs=7680,cu=519,Ep=512,bp=513,Tp=514,bc=515,wp=516,Ap=517,Tc=518,Rp=519,uu=35044,hu="300 es",Bn=2e3,Cr=2001;function Cp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pp(){const i=Xo("canvas");return i.style.display="block",i}const fu={};function du(...i){const t="THREE."+i.shift();console.log(t,...i)}function mf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=mf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=mf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qo(...i){const t=i.join(" ");t in fu||(fu[t]=!0,Gt(...i))}function Lp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ip={[pl]:ml,[gl]:vl,[_l]:yl,[Vs]:xl,[ml]:pl,[vl]:gl,[yl]:_l,[xl]:Vs};class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const mr=Math.PI/180,Pr=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function wc(i,t){return(i%t+t)%t}function Dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Np(i,t,e){return i!==t?(e-i)/(t-i):0}function gr(i,t,e){return(1-e)*i+e*t}function Up(i,t,e,n){return gr(i,t,1-Math.exp(-e*n))}function Fp(i,t=1){return t-Math.abs(wc(i,t*2)-t)}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kp(i,t){return i+Math.random()*(t-i)}function Vp(i){return i*(.5-Math.random())}function Gp(i){i!==void 0&&(pu=i);let t=pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(i){return i*mr}function Wp(i){return i*Pr}function Xp(i){return(i&i-1)===0&&i!==0}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mu={DEG2RAD:mr,RAD2DEG:Pr,generateUUID:rs,clamp:Kt,euclideanModulo:wc,mapLinear:Dp,inverseLerp:Np,lerp:gr,damp:Up,pingpong:Fp,smoothstep:Op,smootherstep:Bp,randInt:zp,randFloat:kp,randFloatSpread:Vp,seededRandom:Gp,degToRad:Hp,radToDeg:Wp,isPowerOfTwo:Xp,ceilPowerOfTwo:qp,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:jp,normalize:He,denormalize:ws};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+y*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new B,gu=new Vn;class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],v=s[4],_=s[7],A=s[2],b=s[5],C=s[8];return r[0]=o*y+a*M+l*A,r[3]=o*m+a*v+l*b,r[6]=o*p+a*_+l*C,r[1]=c*y+u*M+f*A,r[4]=c*m+u*v+f*b,r[7]=c*p+u*_+f*C,r[2]=h*y+d*M+g*A,r[5]=h*m+d*v+g*b,r[8]=h*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=f*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Xt,_u=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){const i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:re,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ee=$p();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fs;class Zp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=Xo("canvas")),fs.width=t.width,fs.height=t.height;const s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kp=0;class Ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let Jp=0;const ya=new B;class Ze extends js{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ii,s=ii,r=Ge,o=Ji,a=wn,l=an,c=Ze.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=rs(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=af;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(d+1)/2,A=(p+1)/2,b=(u+h)/4,C=(f+y)/4,x=(g+m)/4;return v>_&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=C/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends js{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Qp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tm extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,y=c*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(em,t,nm)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(n,tn),_i.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(n,tn)),_i.normalize(),Zr.crossVectors(tn,_i),s[0]=_i.x,s[4]=Zr.x,s[8]=tn.x,s[1]=_i.y,s[5]=Zr.y,s[9]=tn.y,s[2]=_i.z,s[6]=Zr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],v=n[7],_=n[11],A=n[15],b=s[0],C=s[4],x=s[8],T=s[12],N=s[1],L=s[5],U=s[9],z=s[13],X=s[2],G=s[6],W=s[10],F=s[14],q=s[3],at=s[7],ht=s[11],St=s[15];return r[0]=o*b+a*N+l*X+c*q,r[4]=o*C+a*L+l*G+c*at,r[8]=o*x+a*U+l*W+c*ht,r[12]=o*T+a*z+l*F+c*St,r[1]=u*b+f*N+h*X+d*q,r[5]=u*C+f*L+h*G+d*at,r[9]=u*x+f*U+h*W+d*ht,r[13]=u*T+f*z+h*F+d*St,r[2]=g*b+y*N+m*X+p*q,r[6]=g*C+y*L+m*G+p*at,r[10]=g*x+y*U+m*W+p*ht,r[14]=g*T+y*z+m*F+p*St,r[3]=M*b+v*N+_*X+A*q,r[7]=M*C+v*L+_*G+A*at,r[11]=M*x+v*U+_*W+A*ht,r[15]=M*T+v*z+_*F+A*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=l*d-c*h,v=a*d-c*f,_=a*h-l*f,A=o*d-c*u,b=o*h-l*u,C=o*f-a*u;return e*(y*M-m*v+p*_)-n*(g*M-m*A+p*b)+s*(g*v-y*A+p*C)-r*(g*_-y*b+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=e*a-n*o,v=e*l-s*o,_=e*c-r*o,A=n*l-s*a,b=n*c-r*a,C=s*c-r*l,x=u*y-f*g,T=u*m-h*g,N=u*p-d*g,L=f*m-h*y,U=f*p-d*y,z=h*p-d*m,X=M*z-v*U+_*L+A*N-b*T+C*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/X;return t[0]=(a*z-l*U+c*L)*G,t[1]=(s*U-n*z-r*L)*G,t[2]=(y*C-m*b+p*A)*G,t[3]=(h*b-f*C-d*A)*G,t[4]=(l*N-o*z-c*T)*G,t[5]=(e*z-s*N+r*T)*G,t[6]=(m*_-g*C-p*v)*G,t[7]=(u*C-h*_+d*v)*G,t[8]=(o*U-a*N+c*x)*G,t[9]=(n*N-e*U-r*x)*G,t[10]=(g*b-y*_+p*M)*G,t[11]=(f*_-u*b-d*M)*G,t[12]=(a*T-o*L-l*x)*G,t[13]=(e*L-n*T+s*x)*G,t[14]=(y*v-g*A-m*M)*G,t[15]=(u*A-f*v+h*M)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,y=o*u,m=o*f,p=a*f,M=l*c,v=l*u,_=l*f,A=n.x,b=n.y,C=n.z;return s[0]=(1-(y+p))*A,s[1]=(d+_)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(h+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+v)*C,s[9]=(m-M)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);const c=1/o,u=1/a,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Bn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Bn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Cr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new B,xn=new me,em=new B(0,0,0),nm=new B(1,1,1),_i=new B,Zr=new B,tn=new B,vu=new me,yu=new Vn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let im=0;const Mu=new B,ps=new Vn,$n=new me,Kr=new B,Js=new B,sm=new B,rm=new Vn,Su=new B(1,0,0),Eu=new B(0,1,0),bu=new B(0,0,1),Tu={type:"added"},om={type:"removed"},ms={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ne extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new B,e=new gn,n=new Vn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Xt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Js,Kr,this.up):$n.lookAt(Kr,Js,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ps.setFromRotationMatrix($n),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),ms.child=t,this.dispatchEvent(ms),ms.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(om),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new B(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=wc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ee.workingToColorSpace(Ve.copy(this),t),Math.round(Kt(Ve.r*255,0,255))*65536+Math.round(Kt(Ve.g*255,0,255))*256+Math.round(Kt(Ve.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=rn){ee.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Jr);const n=gr(xi.h,Jr.h,e),s=gr(xi.s,Jr.s,e),r=gr(xi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Jt;Jt.NAMES=xf;class lm extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vn=new B,Zn=new B,ba=new B,Kn=new B,gs=new B,_s=new B,wu=new B,Ta=new B,wa=new B,Aa=new B,Ra=new Me,Ca=new Me,Pa=new Me;class Tn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Zn.subVectors(n,e),ba.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Zn),l=vn.dot(ba),c=Zn.dot(Zn),u=Zn.dot(ba),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Zn.subVectors(t,e),vn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),vn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),Ta.subVectors(t,n);const l=gs.dot(Ta),c=_s.dot(Ta);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);const u=gs.dot(wa),f=_s.dot(wa);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(gs,o);Aa.subVectors(t,r);const d=gs.dot(Aa),g=_s.dot(Aa);if(g>=0&&d<=g)return e.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_s,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return wu.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(wu,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $s{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),to.subVectors(this.max,Qs),xs.subVectors(t.a,Qs),vs.subVectors(t.b,Qs),ys.subVectors(t.c,Qs),vi.subVectors(vs,xs),yi.subVectors(ys,vs),Ni.subVectors(xs,ys);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ni.z,Ni.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ni.z,0,-Ni.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ni.y,Ni.x,0];return!La(e,xs,vs,ys,to)||(e=[1,0,0,0,1,0,0,0,1],!La(e,xs,vs,ys,to))?!1:(eo.crossVectors(vi,yi),e=[eo.x,eo.y,eo.z],La(e,xs,vs,ys,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],yn=new B,Qr=new $s,xs=new B,vs=new B,ys=new B,vi=new B,yi=new B,Ni=new B,Qs=new B,to=new B,eo=new B,Ui=new B;function La(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Te=new B,no=new ut;let cm=0;class Hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class vf extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yf extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const um=new $s,tr=new B,Ia=new B;class kr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ia)),this.expandByPoint(tr.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hm=0;const cn=new me,Da=new Ne,Ms=new B,en=new $s,er=new $s,Pe=new B;class be extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cp(t)?yf:vf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(en.min,er.min),en.expandByPoint(Pe),Pe.addVectors(en.max,er.max),en.expandByPoint(Pe)):(en.expandByPoint(er.min),en.expandByPoint(er.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pe.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Pe.add(Ms)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new B,l[x]=new B;const c=new B,u=new B,f=new B,h=new ut,d=new ut,g=new ut,y=new B,m=new B;function p(x,T,N){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[x].add(y),a[T].add(y),a[N].add(y),l[x].add(m),l[T].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){const N=M[x],L=N.start,U=N.count;for(let z=L,X=L+U;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new B,_=new B,A=new B,b=new B;function C(x){A.fromBufferAttribute(s,x),b.copy(A);const T=a[x];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),_.crossVectors(b,T);const L=_.dot(l[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,L)}for(let x=0,T=M.length;x<T;++x){const N=M[x],L=N.start,U=N.count;for(let z=L,X=L+U;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Hn(h,u,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fm=0;class Rn extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Us,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new B,Na=new B,io=new B,Mi=new B,Ua=new B,so=new B,Fa=new B;class Rc{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Mi.dot(this.direction),l=-Mi.dot(io),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Na).addScaledVector(io,h),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),so.subVectors(n,t),Fa.crossVectors(Ua,so);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(so.crossVectors(Mi,so));if(l<0)return null;const c=a*this.direction.dot(Ua.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cc extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Au=new me,Fi=new Rc,ro=new kr,Ru=new B,oo=new B,ao=new B,lo=new B,Oa=new B,co=new B,Cu=new B,uo=new B;class Zt extends Ne{constructor(t=new be,e=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Oa.fromBufferAttribute(f,t),o?co.addScaledVector(Oa,u):co.addScaledVector(Oa.sub(e),u))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(ro.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ro,Ru)===null||Fi.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,A=v;_<A;_+=3){const b=a.getX(_),C=a.getX(_+1),x=a.getX(_+2);s=ho(this,p,t,n,c,u,f,b,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=ho(this,o,t,n,c,u,f,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,A=v;_<A;_+=3){const b=_,C=_+1,x=_+2;s=ho(this,p,t,n,c,u,f,b,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const M=m,v=m+1,_=m+2;s=ho(this,o,t,n,c,u,f,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function dm(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);const u=dm(i,t,e,n,oo,ao,lo,Cu);if(u){const f=new B;Tn.getBarycoord(Cu,oo,ao,lo,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,f,new ut)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,f,new ut)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Tn.getNormal(oo,ao,lo,h.normal),u.face=h,u.barycoord=f}return u}class pm extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,u=Be,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new B,mm=new B,gm=new Xt;class Vi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ba.subVectors(n,e).cross(mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gm.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new kr,_m=new ut(.5,.5),fo=new B;class Pc{constructor(t=new Vi,e=new Vi,n=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],v=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,p-g,A-M).normalize(),s[1].setComponents(c+o,d+u,p+g,A+M).normalize(),s[2].setComponents(c+a,d+f,p+y,A+v).normalize(),s[3].setComponents(c-a,d-f,p-y,A-v).normalize(),n)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,p-m,A-_).normalize();else if(s[4].setComponents(c-l,d-h,p-m,A-_).normalize(),e===Bn)s[5].setComponents(c+l,d+h,p+m,A+_).normalize();else if(e===Cr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=_m.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class No extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yo=new B,jo=new B,Pu=new me,nr=new Rc,po=new kr,za=new B,Lu=new B;class xm extends Ne{constructor(t=new be,e=new No){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yo.fromBufferAttribute(e,s-1),jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yo.distanceTo(jo);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Pu.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=u.getX(y),M=u.getX(y+1),v=mo(this,t,nr,l,p,M,y);v&&e.push(v)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(d),p=mo(this,t,nr,l,y,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=mo(this,t,nr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=mo(this,t,nr,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Yo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),e.distanceSqToSegment(Yo,jo,za,Lu)>n)return;za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(za);if(!(c<t.near||c>t.far))return{distance:c,point:Lu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Iu=new B,Du=new B;class Nu extends xm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Iu.fromBufferAttribute(e,s),Du.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Iu.distanceTo(Du);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lr extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uu=new me,ec=new Rc,go=new kr,_o=new B;class ka extends Ne{constructor(t=new be,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Uu.copy(s).invert(),ec.copy(t.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,y=d;g<y;g++){const m=c.getX(g);_o.fromBufferAttribute(f,m),Fu(_o,m,l,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,y=d;g<y;g++)_o.fromBufferAttribute(f,g),Fu(_o,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fu(i,t,e,n,s,r,o){const a=ec.distanceSqToPoint(i);if(a<e){const l=new B;ec.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Mf extends Ze{constructor(t=[],e=is,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lr extends Ze{constructor(t,e,n=Wn,s,r,o,a=Be,l=Be,c,u=hi,f=1){if(u!==hi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vm extends Lr{constructor(t,e=Wn,n=is,s,r,o=Be,a=Be,l,c=hi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sf extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class os extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(y,m,p,M,v,_,A,b,C,x,T){const N=_/C,L=A/x,U=_/2,z=A/2,X=b/2,G=C+1,W=x+1;let F=0,q=0;const at=new B;for(let ht=0;ht<W;ht++){const St=ht*L-z;for(let xt=0;xt<G;xt++){const Bt=xt*N-U;at[y]=Bt*M,at[m]=St*v,at[p]=X,c.push(at.x,at.y,at.z),at[y]=0,at[m]=0,at[p]=b>0?1:-1,u.push(at.x,at.y,at.z),f.push(xt/C),f.push(1-ht/x),F+=1}}for(let ht=0;ht<x;ht++)for(let St=0;St<C;St++){const xt=h+St+G*ht,Bt=h+St+G*(ht+1),K=h+(St+1)+G*(ht+1),V=h+(St+1)+G*ht;l.push(xt,Bt,V),l.push(Bt,K,V),q+=6}a.addGroup(d,q,T),d+=q,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class as extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const y=[],m=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){const _=new B,A=new B;let b=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const T=[],N=x/r,L=N*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,X=z*l+a,G=Math.sin(X),W=Math.cos(X);A.x=L*G,A.y=-N*n+m,A.z=L*W,f.push(A.x,A.y,A.z),_.set(G,C,W).normalize(),h.push(_.x,_.y,_.z),d.push(z,1-N),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const N=y[T][x],L=y[T+1][x],U=y[T+1][x+1],z=y[T][x+1];(t>0||T!==0)&&(u.push(N,L,z),b+=3),(e>0||T!==r-1)&&(u.push(L,U,z),b+=3)}c.addGroup(p,b,0),p+=b}function v(_){const A=g,b=new ut,C=new B;let x=0;const T=_===!0?t:e,N=_===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*N,0),h.push(0,N,0),d.push(.5,.5),g++;const L=g;for(let U=0;U<=s;U++){const X=U/s*l+a,G=Math.cos(X),W=Math.sin(X);C.x=T*W,C.y=m*N,C.z=T*G,f.push(C.x,C.y,C.z),h.push(0,N,0),b.x=G*.5+.5,b.y=W*.5*N+.5,d.push(b.x,b.y),g++}for(let U=0;U<s;U++){const z=A+U,X=L+U;_===!0?u.push(X,X+1,z):u.push(X+1,X,z),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vr extends as{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lc extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new B,_=new B,A=new B;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],_),d(e[b+2],A),l(v,_,A,M)}function l(M,v,_,A){const b=A+1,C=[];for(let x=0;x<=b;x++){C[x]=[];const T=M.clone().lerp(_,x/b),N=v.clone().lerp(_,x/b),L=b-x;for(let U=0;U<=L;U++)U===0&&x===b?C[x][U]=T:C[x][U]=T.clone().lerp(N,U/L)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const N=Math.floor(T/2);T%2===0?(h(C[x][N+1]),h(C[x+1][N]),h(C[x][N])):(h(C[x][N+1]),h(C[x+1][N+1]),h(C[x+1][N]))}}function c(M){const v=new B;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){const M=new B;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const _=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(_,1-A)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const v=o[M+0],_=o[M+2],A=o[M+4],b=Math.max(v,_,A),C=Math.min(v,_,A);b>.9&&C<.1&&(v<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const M=new B,v=new B,_=new B,A=new B,b=new ut,C=new ut,x=new ut;for(let T=0,N=0;T<r.length;T+=9,N+=6){M.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(o[N+0],o[N+1]),C.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),A.copy(M).add(v).add(_).divideScalar(3);const L=m(A);y(b,N+0,M,L),y(C,N+2,v,L),y(x,N+4,_,L)}}function y(M,v,_,A){A<0&&M.x===1&&(o[v]=M.x-1),_.x===0&&_.z===0&&(o[v]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.vertices,t.indices,t.radius,t.detail)}}class $o extends Lc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $o(t.radius,t.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],r=[],o=[],a=new B,l=new me;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ym extends Ic{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xo=new B,Va=new Dc,Ga=new Dc,Ha=new Dc;class Nc extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),c=xo);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Va.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,y,m),Ga.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,y,m),Ha.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Ga.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ha.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Ha.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ou(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Mm(i,t){const e=1-i;return e*e*t}function Sm(i,t){return 2*(1-i)*i*t}function Em(i,t){return i*i*t}function _r(i,t,e,n){return Mm(i,t)+Sm(i,e)+Em(i,n)}function bm(i,t){const e=1-i;return e*e*e*t}function Tm(i,t){const e=1-i;return 3*e*e*i*t}function wm(i,t){return 3*(1-i)*i*i*t}function Am(i,t){return i*i*i*t}function xr(i,t,e,n,s){return bm(i,t)+Tm(i,e)+wm(i,n)+Am(i,s)}class Ef extends qn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rm extends qn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends qn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cm extends qn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends qn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends qn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ou(a,l.x,c.x,u.x,f.x),Ou(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:ym,CatmullRomCurve3:Nc,CubicBezierCurve:Ef,CubicBezierCurve3:Rm,EllipseCurve:Ic,LineCurve:bf,LineCurve3:Cm,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:wf,SplineCurve:Af});class Pm extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class Os extends Pm{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bf(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tf(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ef(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ic(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ts extends Os{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Os().fromJSON(s))}return this}}function Lm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Rf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Fm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ir(r,o,e,a,l,c,0),o}function Rf(i,t,e,n,s){let r;if(s===Ym(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Bu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Bu(o/n|0,i[o],i[o+1],r);return r&&Xs(r,r.next)&&(Nr(r),r=r.next),r}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xs(e,e.next)||xe(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Vm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Dm(i,n,s,r):Im(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Nm(ss(i),t),Ir(i,t,e,n,s,r,2)):o===2&&Um(i,t,e,n,s,r):Ir(ss(i),t,e,n,s,r,1);break}}}function Im(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&cr(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),y=Math.max(a,l,c),m=Math.max(u,f,h),p=nc(d,g,t,e,n),M=nc(y,m,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=M;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cr(a,u,l,f,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&cr(a,u,l,f,c,h,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cr(a,u,l,f,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&cr(a,u,l,f,c,h,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Nm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Xs(n,s)&&Pf(n,e,e.next,s)&&Dr(n,s)&&Dr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return ss(e)}function Um(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wm(o,a)){let l=Lf(o,a);o=ss(o,o.next),l=ss(l,l.next),Ir(o,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Rf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hm(c))}s.sort(Om);for(let r=0;r<s.length;r++)e=Bm(s[r],e);return e}function Om(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bm(i,t){const e=zm(i,t);if(!e)return t;const n=Lf(e,i);return ss(n,n.next),ss(e,e.next)}function zm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Xs(i,e))return e;do{if(Xs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Dr(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&km(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function km(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Vm(i,t,e,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gm(s)}function Gm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function nc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function cr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Cf(i,t,e,n,s,r,o,a)}function Wm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xm(i,t)&&(Dr(i,t)&&Dr(t,i)&&qm(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Xs(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xs(i,t){return i.x===t.x&&i.y===t.y}function Pf(i,t,e,n){const s=yo(xe(i,t,e)),r=yo(xe(i,t,n)),o=yo(xe(e,n,i)),a=yo(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||o===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function Xm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function qm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lf(i,t){const e=ic(i.i,i.x,i.y),n=ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(i,t,e,n){const s=ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class jm{static triangulate(t,e,n=2){return Lm(t,e,n)}}class bi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zu(t),ku(n,t);let o=t.length;e.forEach(zu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ku(n,e[l]);const a=jm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ps extends be{constructor(t=new ts([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:$m;let v,_=!1,A,b,C,x;if(p){v=p.getSpacedPoints(u),_=!0,h=!1;const k=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,k),b=new B,C=new B,x=new B}h||(m=0,d=0,g=0,y=0);const T=a.extractPoints(c);let N=T.shape;const L=T.holes;if(!bi.isClockWise(N)){N=N.reverse();for(let k=0,j=L.length;k<j;k++){const J=L[k];bi.isClockWise(J)&&(L[k]=J.reverse())}}function z(k){const J=10000000000000001e-36;let et=k[0];for(let E=1;E<=k.length;E++){const D=E%k.length,lt=k[D],vt=lt.x-et.x,pt=lt.y-et.y,I=vt*vt+pt*pt,S=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(et.x),Math.abs(et.y)),H=J*S*S;if(I<=H){k.splice(D,1),E--;continue}et=lt}}z(N),L.forEach(z);const X=L.length,G=N;for(let k=0;k<X;k++){const j=L[k];N=N.concat(j)}function W(k,j,J){return j||te("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(j,J)}const F=N.length;function q(k,j,J){let et,E,D;const lt=k.x-j.x,vt=k.y-j.y,pt=J.x-k.x,I=J.y-k.y,S=lt*lt+vt*vt,H=lt*I-vt*pt;if(Math.abs(H)>Number.EPSILON){const st=Math.sqrt(S),dt=Math.sqrt(pt*pt+I*I),ot=j.x-vt/st,Pt=j.y+lt/st,gt=J.x-I/dt,It=J.y+pt/dt,Ft=((gt-ot)*I-(It-Pt)*pt)/(lt*I-vt*pt);et=ot+lt*Ft-k.x,E=Pt+vt*Ft-k.y;const mt=et*et+E*E;if(mt<=2)return new ut(et,E);D=Math.sqrt(mt/2)}else{let st=!1;lt>Number.EPSILON?pt>Number.EPSILON&&(st=!0):lt<-Number.EPSILON?pt<-Number.EPSILON&&(st=!0):Math.sign(vt)===Math.sign(I)&&(st=!0),st?(et=-vt,E=lt,D=Math.sqrt(S)):(et=lt,E=vt,D=Math.sqrt(S/2))}return new ut(et/D,E/D)}const at=[];for(let k=0,j=G.length,J=j-1,et=k+1;k<j;k++,J++,et++)J===j&&(J=0),et===j&&(et=0),at[k]=q(G[k],G[J],G[et]);const ht=[];let St,xt=at.concat();for(let k=0,j=X;k<j;k++){const J=L[k];St=[];for(let et=0,E=J.length,D=E-1,lt=et+1;et<E;et++,D++,lt++)D===E&&(D=0),lt===E&&(lt=0),St[et]=q(J[et],J[D],J[lt]);ht.push(St),xt=xt.concat(St)}let Bt;if(m===0)Bt=bi.triangulateShape(G,L);else{const k=[],j=[];for(let J=0;J<m;J++){const et=J/m,E=d*Math.cos(et*Math.PI/2),D=g*Math.sin(et*Math.PI/2)+y;for(let lt=0,vt=G.length;lt<vt;lt++){const pt=W(G[lt],at[lt],D);nt(pt.x,pt.y,-E),et===0&&k.push(pt)}for(let lt=0,vt=X;lt<vt;lt++){const pt=L[lt];St=ht[lt];const I=[];for(let S=0,H=pt.length;S<H;S++){const st=W(pt[S],St[S],D);nt(st.x,st.y,-E),et===0&&I.push(st)}et===0&&j.push(I)}}Bt=bi.triangulateShape(k,j)}const K=Bt.length,V=g+y;for(let k=0;k<F;k++){const j=h?W(N[k],xt[k],V):N[k];_?(C.copy(A.normals[0]).multiplyScalar(j.x),b.copy(A.binormals[0]).multiplyScalar(j.y),x.copy(v[0]).add(C).add(b),nt(x.x,x.y,x.z)):nt(j.x,j.y,0)}for(let k=1;k<=u;k++)for(let j=0;j<F;j++){const J=h?W(N[j],xt[j],V):N[j];_?(C.copy(A.normals[k]).multiplyScalar(J.x),b.copy(A.binormals[k]).multiplyScalar(J.y),x.copy(v[k]).add(C).add(b),nt(x.x,x.y,x.z)):nt(J.x,J.y,f/u*k)}for(let k=m-1;k>=0;k--){const j=k/m,J=d*Math.cos(j*Math.PI/2),et=g*Math.sin(j*Math.PI/2)+y;for(let E=0,D=G.length;E<D;E++){const lt=W(G[E],at[E],et);nt(lt.x,lt.y,f+J)}for(let E=0,D=L.length;E<D;E++){const lt=L[E];St=ht[E];for(let vt=0,pt=lt.length;vt<pt;vt++){const I=W(lt[vt],St[vt],et);_?nt(I.x,I.y+v[u-1].y,v[u-1].x+J):nt(I.x,I.y,f+J)}}}w(),R();function w(){const k=s.length/3;if(h){let j=0,J=F*j;for(let et=0;et<K;et++){const E=Bt[et];$(E[2]+J,E[1]+J,E[0]+J)}j=u+m*2,J=F*j;for(let et=0;et<K;et++){const E=Bt[et];$(E[0]+J,E[1]+J,E[2]+J)}}else{for(let j=0;j<K;j++){const J=Bt[j];$(J[2],J[1],J[0])}for(let j=0;j<K;j++){const J=Bt[j];$(J[0]+F*u,J[1]+F*u,J[2]+F*u)}}n.addGroup(k,s.length/3-k,0)}function R(){const k=s.length/3;let j=0;O(G,j),j+=G.length;for(let J=0,et=L.length;J<et;J++){const E=L[J];O(E,j),j+=E.length}n.addGroup(k,s.length/3-k,1)}function O(k,j){let J=k.length;for(;--J>=0;){const et=J;let E=J-1;E<0&&(E=k.length-1);for(let D=0,lt=u+m*2;D<lt;D++){const vt=F*D,pt=F*(D+1),I=j+et+vt,S=j+E+vt,H=j+E+pt,st=j+et+pt;it(I,S,H,st)}}}function nt(k,j,J){l.push(k),l.push(j),l.push(J)}function $(k,j,J){yt(k),yt(j),yt(J);const et=s.length/3,E=M.generateTopUV(n,s,et-3,et-2,et-1);ft(E[0]),ft(E[1]),ft(E[2])}function it(k,j,J,et){yt(k),yt(j),yt(et),yt(j),yt(J),yt(et);const E=s.length/3,D=M.generateSideWallUV(n,s,E-6,E-3,E-2,E-1);ft(D[0]),ft(D[1]),ft(D[3]),ft(D[1]),ft(D[2]),ft(D[3])}function yt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function ft(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zo[s.type]().fromJSON(s)),new Ps(n,t.options)}}const $m={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-f),new ut(h,1-g),new ut(y,1-p)]:[new ut(a,1-l),new ut(u,1-f),new ut(d,1-g),new ut(m,1-p)]}};function Zm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qs extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let v=0;v<c;v++){const _=v*f-r;g.push(_,-M,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,_=M+c*(p+1),A=M+1+c*(p+1),b=M+1+c*p;d.push(v,_,b),d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ur extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(b+_,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=u[p][M+1],_=u[p][M],A=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&d.push(v,_,b),(p!==n-1||l<Math.PI)&&d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uc extends be{constructor(t=new wf(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new ut;let u=new B;const f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),p()}function m(v){u=t.getPointAt(v/e,u);const _=o.normals[v],A=o.binormals[v];for(let b=0;b<=s;b++){const C=b/s*Math.PI*2,x=Math.sin(C),T=-Math.cos(C);l.x=T*_.x+x*A.x,l.y=T*_.y+x*A.y,l.z=T*_.z+x*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const A=(s+1)*(v-1)+(_-1),b=(s+1)*v+(_-1),C=(s+1)*v+_,x=(s+1)*(v-1)+_;g.push(A,b,x),g.push(b,C,x)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uc(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Km(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function If(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Jm={clone:Ys,merge:We};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eg extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class we extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ng extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=gc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ig extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Gu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Gu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class rg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const og=new rg;class ra{constructor(t){this.manager=t!==void 0?t:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class ag extends Error{constructor(t,e){super(t),this.response=e}}class Df extends ra{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Vu.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let y=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:v,value:_})=>{if(v)p.close();else{y+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let b=0,C=u.length;b<C;b++){const x=u[b];x.onProgress&&x.onProgress(A)}p.enqueue(_),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new ag(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vu.add(`file:${t}`,c);const u=ti[t];delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ti[t];if(u===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Nf extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Wa=new me,Hu=new B,Wu=new B;class lg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Cr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mo=new B,So=new Vn,Ln=new B;class Uf extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Mo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Si=new B,Xu=new ut,qu=new ut;class fn extends Uf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fc extends Uf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cg extends lg{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends Nf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new cg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class hg extends Nf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ss=-90,Es=1;class fg extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ss,Es,t,e);s.layers=this.layers,this.add(s);const r=new fn(Ss,Es,t,e);r.layers=this.layers,this.add(r);const o=new fn(Ss,Es,t,e);o.layers=this.layers,this.add(o);const a=new fn(Ss,Es,t,e);a.layers=this.layers,this.add(a);const l=new fn(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new fn(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dg extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yu=new ut;class pg{constructor(t=new ut(1/0,1/0),e=new ut(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Bi{constructor(){this.type="ShapePath",this.color=new Jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Os,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let v=0,_=p.length;v<_;v++){const A=p[v],b=new ts;b.curves=A.curves,M.push(b)}return M}function n(p,M){const v=M.length;let _=!1;for(let A=v-1,b=0;b<v;A=b++){let C=M[A],x=M[b],T=x.x-C.x,N=x.y-C.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(C=M[b],T=-T,x=M[A],N=-N),p.y<C.y||p.y>x.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const L=N*(p.x-C.x)-T*(p.y-C.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(p.y!==C.y)continue;if(x.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=x.x)return!0}}return _}const s=bi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new ts,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const f=[],h=[];let d=[],g=0,y;h[g]=void 0,d[g]=[];for(let p=0,M=r.length;p<M;p++)a=r[p],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new ts,p:y},h[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:y[0]});if(!h[0])return e(r);if(h.length>1){let p=!1,M=0;for(let v=0,_=h.length;v<_;v++)f[v]=[];for(let v=0,_=h.length;v<_;v++){const A=d[v];for(let b=0;b<A.length;b++){const C=A[b];let x=!0;for(let T=0;T<h.length;T++)n(C.p,h[T].p)&&(v!==T&&M++,x?(x=!1,f[T].push(C)):p=!0);x&&f[v].push(C)}}M>0&&p===!1&&(d=f)}let m;for(let p=0,M=h.length;p<M;p++){l=h[p].s,c.push(l),m=d[p];for(let v=0,_=m.length;v<_;v++)l.holes.push(m[v].h)}return c}}function ju(i,t,e,n){const s=mg(n);switch(e){case ff:return i*t;case pf:return i*t/s.components*s.byteLength;case yc:return i*t/s.components*s.byteLength;case Hs:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case df:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case El:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Il:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jl:case $l:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(i){switch(i){case an:case lf:return{byteLength:1,components:1};case Ar:case cf:case ui:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Wn:case _c:case On:return{byteLength:4,components:1};case uf:case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function Ff(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gg(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
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
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p_=`PhysicalMaterial material;
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
#endif`,m_=`uniform sampler2D dfgLUT;
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
}`,g_=`
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,H0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:_g,alphahash_pars_fragment:xg,alphamap_fragment:vg,alphamap_pars_fragment:yg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:wg,begin_vertex:Ag,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Hg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:jg,envmap_fragment:$g,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Kg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c_,envmap_vertex:Qg,fog_vertex:t_,fog_pars_vertex:e_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:s_,lightmap_pars_fragment:r_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:a_,lights_pars_begin:l_,lights_toon_fragment:u_,lights_toon_pars_fragment:h_,lights_phong_fragment:f_,lights_phong_pars_fragment:d_,lights_physical_fragment:p_,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:__,lights_fragment_end:x_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:S_,map_fragment:E_,map_pars_fragment:b_,map_particle_fragment:T_,map_particle_pars_fragment:w_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:I_,morphtarget_vertex:D_,normal_fragment_begin:N_,normal_fragment_maps:U_,normal_pars_fragment:F_,normal_pars_vertex:O_,normal_vertex:B_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:H_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:q_,project_vertex:Y_,dithering_fragment:j_,dithering_pars_fragment:$_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:y0,cube_frag:M0,depth_vert:S0,depth_frag:E0,distance_vert:b0,distance_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:I0,meshlambert_frag:D0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:H0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:j0,sprite_frag:$0},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Nn={basic:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([wt.points,wt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([wt.common,wt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([wt.sprite,wt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:We([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:We([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Nn.physical={uniforms:We([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Eo={r:0,b:0,g:0},zi=new gn,Z0=new me;function K0(i,t,e,n,s,r){const o=new Jt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const _=M.backgroundBlurriness>0;v=t.get(v,_)}return v}function g(M){let v=!1;const _=d(M);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,v){const _=d(v);_&&(_.isCubeTexture||_.mapping===sa)?(c===void 0&&(c=new Zt(new os(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ys(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(zi)),c.material.toneMapped=ee.getTransfer(_.colorSpace)!==re,(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Zt(new qs(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ys(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(Eo,If(i)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function J0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(L,U,z,X,G){let W=!1;const F=f(L,X,z,U);r!==F&&(r=F,c(r.object)),W=d(L,X,z,G),W&&g(L,X,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(L,U,z,X),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,U,z,X){const G=X.wireframe===!0;let W=n[U.id];W===void 0&&(W={},n[U.id]=W);const F=L.isInstancedMesh===!0?L.id:0;let q=W[F];q===void 0&&(q={},W[F]=q);let at=q[z.id];at===void 0&&(at={},q[z.id]=at);let ht=at[G];return ht===void 0&&(ht=h(l()),at[G]=ht),ht}function h(L){const U=[],z=[],X=[];for(let G=0;G<e;G++)U[G]=0,z[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:X,object:L,attributes:{},index:null}}function d(L,U,z,X){const G=r.attributes,W=U.attributes;let F=0;const q=z.getAttributes();for(const at in q)if(q[at].location>=0){const St=G[at];let xt=W[at];if(xt===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),St===void 0||St.attribute!==xt||xt&&St.data!==xt.data)return!0;F++}return r.attributesNum!==F||r.index!==X}function g(L,U,z,X){const G={},W=U.attributes;let F=0;const q=z.getAttributes();for(const at in q)if(q[at].location>=0){let St=W[at];St===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(St=L.instanceColor));const xt={};xt.attribute=St,St&&St.data&&(xt.data=St.data),G[at]=xt,F++}r.attributes=G,r.attributesNum=F,r.index=X}function y(){const L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const z=r.newAttributes,X=r.enabledAttributes,G=r.attributeDivisors;z[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),G[L]!==U&&(i.vertexAttribDivisor(L,U),G[L]=U)}function M(){const L=r.newAttributes,U=r.enabledAttributes;for(let z=0,X=U.length;z<X;z++)U[z]!==L[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function v(L,U,z,X,G,W,F){F===!0?i.vertexAttribIPointer(L,U,z,G,W):i.vertexAttribPointer(L,U,z,X,G,W)}function _(L,U,z,X){y();const G=X.attributes,W=z.getAttributes(),F=U.defaultAttributeValues;for(const q in W){const at=W[q];if(at.location>=0){let ht=G[q];if(ht===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),ht!==void 0){const St=ht.normalized,xt=ht.itemSize,Bt=t.get(ht);if(Bt===void 0)continue;const K=Bt.buffer,V=Bt.type,w=Bt.bytesPerElement,R=V===i.INT||V===i.UNSIGNED_INT||ht.gpuType===_c;if(ht.isInterleavedBufferAttribute){const O=ht.data,nt=O.stride,$=ht.offset;if(O.isInstancedInterleavedBuffer){for(let it=0;it<at.locationSize;it++)p(at.location+it,O.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let it=0;it<at.locationSize;it++)m(at.location+it);i.bindBuffer(i.ARRAY_BUFFER,K);for(let it=0;it<at.locationSize;it++)v(at.location+it,xt/at.locationSize,V,St,nt*w,($+xt/at.locationSize*it)*w,R)}else{if(ht.isInstancedBufferAttribute){for(let O=0;O<at.locationSize;O++)p(at.location+O,ht.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let O=0;O<at.locationSize;O++)m(at.location+O);i.bindBuffer(i.ARRAY_BUFFER,K);for(let O=0;O<at.locationSize;O++)v(at.location+O,xt/at.locationSize,V,St,xt*w,xt/at.locationSize*O*w,R)}}else if(F!==void 0){const St=F[q];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(at.location,St);break;case 3:i.vertexAttrib3fv(at.location,St);break;case 4:i.vertexAttrib4fv(at.location,St);break;default:i.vertexAttrib1fv(at.location,St)}}}}M()}function A(){T();for(const L in n){const U=n[L];for(const z in U){const X=U[z];for(const G in X){const W=X[G];for(const F in W)u(W[F].object),delete W[F];delete X[G]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const z in U){const X=U[z];for(const G in X){const W=X[G];for(const F in W)u(W[F].object),delete W[F];delete X[G]}}delete n[L.id]}function C(L){for(const U in n){const z=n[U];for(const X in z){const G=z[X];if(G[L.id]===void 0)continue;const W=G[L.id];for(const F in W)u(W[F].object),delete W[F];delete G[L.id]}}}function x(L){for(const U in n){const z=n[U],X=L.isInstancedMesh===!0?L.id:0,G=z[X];if(G!==void 0){for(const W in G){const F=G[W];for(const q in F)u(F[q].object),delete F[q];delete G[W]}delete z[X],Object.keys(z).length===0&&delete n[U]}}}function T(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Q0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y]*h[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,maxSamples:A,samples:b}}function ex(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Vi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,v=M*4;let _=p.clippingState||null;l.value=_,_=u(g,h,v,d);for(let A=0;A!==v;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==y;++v,_+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Ti=4,$u=[.125,.215,.35,.446,.526,.582],ji=20,nx=256,ir=new Fc,Zu=new Jt;let Xa=null,qa=0,Ya=0,ja=!1;const ix=new B;class Ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ix}=r;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ui,format:wn,colorSpace:Ws,depthBuffer:!1},s=Ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sx(r)),this._blurMaterial=ox(r,t,e),this._ggxMaterial=rx(r,t,e)}return s}_compileMaterial(t){const e=new Zt(new be,t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,s,r){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Zu),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new os,new Cc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Zu),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const A=this._cubeSize;bs(s,_*A,v>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ti?n-g+Ti:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,bs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,bs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,ir)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):ji;m>ji&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let M=0;for(let C=0;C<ji;++C){const x=C/y,T=Math.exp(-x*x/2);p.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const _=this._sizeLods[s],A=3*_*(s>v-Ti?s-v+Ti:0),b=4*(this._cubeSize-_);bs(e,A,b,3*_,2*_),l.setRenderTarget(e),l.render(f,ir)}}function sx(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+$u.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ti?l=$u[o-i+Ti-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,x=b>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(T,y*g*b),v.set(h,m*g*b);const N=[b,b,b,b,b,b];_.set(N,p*g*b)}const A=new be;A.setAttribute("position",new Hn(M,y)),A.setAttribute("uv",new Hn(v,m)),A.setAttribute("faceIndex",new Hn(_,p)),n.push(new Zt(A,null)),s>Ti&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ju(i,t,e){const n=new Gn(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rx(i,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ox(i,t,e){const n=new Float32Array(ji),s=new B(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Qu(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function th(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}class Of extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ai});r.uniforms.tEquirect.value=e;const o=new Zt(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Ge),new fg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function ax(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===pa||d===ma)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Of(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===pa||d===ma,y=d===is||d===Gs;if(g||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ku(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Ku(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===pa?h.mapping=is:d===ma&&(h.mapping=Gs),h}function l(h){let d=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function lx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qo("WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const M=d.array;y=d.version;for(let v=0,_=M.length;v<_;v+=3){const A=M[v+0],b=M[v+1],C=M[v+2];h.push(A,b,b,C,C,A)}}else{const M=g.array;y=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const A=v+0,b=v+1,C=v+2;h.push(A,b,b,C,C,A)}}const m=new(g.count>=65535?yf:vf)(h,1);m.version=y;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ux(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,y,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*y[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fx(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var d=N;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*b*4*f),x=new gf(C,A,b,f);x.type=On,x.needsUpdate=!0;const T=_*4;for(let L=0;L<f;L++){const U=p[L],z=M[L],X=v[L],G=A*b*4*L;for(let W=0;W<U.count;W++){const F=W*T;g===!0&&(s.fromBufferAttribute(U,W),C[G+F+0]=s.x,C[G+F+1]=s.y,C[G+F+2]=s.z,C[G+F+3]=0),y===!0&&(s.fromBufferAttribute(z,W),C[G+F+4]=s.x,C[G+F+5]=s.y,C[G+F+6]=s.z,C[G+F+7]=0),m===!0&&(s.fromBufferAttribute(X,W),C[G+F+8]=s.x,C[G+F+9]=s.y,C[G+F+10]=s.z,C[G+F+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new ut(A,b)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function dx(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const px={[Qh]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[nf]:"ACES_FILMIC_TONE_MAPPING",[rf]:"AGX_TONE_MAPPING",[of]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function mx(i,t,e,n,s){const r=new Gn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Gn(t,e,{type:ui,depthBuffer:!1,stencilBuffer:!1}),a=new be;a.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new eg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Zt(a,l),u=new Fc(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,y=null,m=[],p=!1;this.setSize=function(M,v){r.setSize(M,v),o.setSize(M,v);for(let _=0;_<m.length;_++){const A=m[_];A.setSize&&A.setSize(M,v)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const v=r.width,_=r.height;for(let A=0;A<m.length;A++){const b=m[A];b.setSize&&b.setSize(v,_)}},this.begin=function(M,v){if(d||M.toneMapping===kn&&m.length===0)return!1;if(y=v,v!==null){const _=v.width,A=v.height;(r.width!==_||r.height!==A)&&this.setSize(_,A)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=g,d=!0;let _=r,A=o;for(let b=0;b<m.length;b++){const C=m[b];if(C.enabled!==!1&&(C.render(M,A,_,v),C.needsSwap!==!1)){const x=_;_=A,A=x}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},ee.getTransfer(f)===re&&(l.defines.SRGB_TRANSFER="");const b=px[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(y),M.render(c,u),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Bf=new Ze,sc=new Lr(1,1),zf=new gf,kf=new tm,Vf=new Mf,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function yx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Re(e,n)}}function Mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Re(e,n)}}function Sx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Re(e,n)}}function Ex(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Ax(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=e.isReversedDepthBuffer()?Tc:bc,r=sc):r=Bf,e.setTexture2D(t||r,s)}function Ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kf,s)}function Dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vf,s)}function Nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zf,s)}function Ux(i){switch(i){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return Ex;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return wx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Fx(i,t){i.uniform1fv(this.addr,t)}function Ox(i,t){const e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Bx(i,t){const e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function zx(i,t){const e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function kx(i,t){const e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vx(i,t){const e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gx(i,t){const e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hx(i,t){i.uniform1iv(this.addr,t)}function Wx(i,t){i.uniform2iv(this.addr,t)}function Xx(i,t){i.uniform3iv(this.addr,t)}function qx(i,t){i.uniform4iv(this.addr,t)}function Yx(i,t){i.uniform1uiv(this.addr,t)}function jx(i,t){i.uniform2uiv(this.addr,t)}function $x(i,t){i.uniform3uiv(this.addr,t)}function Zx(i,t){i.uniform4uiv(this.addr,t)}function Kx(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sc:o=Bf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Jx(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kf,r[o])}function Qx(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vf,r[o])}function tv(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function ev(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return jx;case 36295:return $x;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return tv}}class nv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}}class iv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}}class sv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function oh(i,t){i.seq.push(t),i.map[t.id]=t}function rv(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oh(e,c===void 0?new nv(a,i,t):new iv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new sv(a),oh(e,f)),e=f}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);rv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ov=37297;let av=0;function lv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const lh=new Xt;function cv(i){ee._getMatrix(lh,ee.workingColorSpace,i);const t=`mat3( ${lh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ch(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+lv(i.getShaderSource(t),a)}else return r}function uv(i,t){const e=cv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const hv={[Qh]:"Linear",[tf]:"Reinhard",[ef]:"Cineon",[nf]:"ACESFilmic",[rf]:"AgX",[of]:"Neutral",[sf]:"Custom"};function fv(i,t){const e=hv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new B;function dv(){ee.getLuminanceCoefficients(bo);const i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function mv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ur(i){return i!==""}function uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(_v,vv)}const xv=new Map;function vv(i,t){let e=jt[t];if(e===void 0){const n=xv.get(t);if(n!==void 0)e=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(yv,Mv)}function Mv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Sv={[Co]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function Ev(i){return Sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bv={[is]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function Tv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const wv={[Gs]:"ENVMAP_MODE_REFRACTION"};function Av(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rv={[gc]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function Cv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rv[i.combine]||"ENVMAP_BLENDING_NONE"}function Pv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ev(e),c=Tv(e),u=Av(e),f=Cv(e),h=Pv(e),d=pv(e),g=mv(r),y=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,uv("linearToOutputTexel",e.outputColorSpace),dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=rc(o),o=uh(o,e),o=hh(o,e),a=rc(a),a=uh(a,e),a=hh(a,e),o=fh(o),a=fh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,_=M+p+a,A=ah(s,s.VERTEX_SHADER,v),b=ah(s,s.FRAGMENT_SHADER,_);s.attachShader(y,A),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(b)||"",G=U.trim(),W=z.trim(),F=X.trim();let q=!0,at=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,b);else{const ht=ch(s,A,"vertex"),St=ch(s,b,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ht+`
`+St)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(W===""||F==="")&&(at=!1);at&&(L.diagnostics={runnable:q,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(A),s.deleteShader(b),x=new Uo(s,y),T=gv(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,ov)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=av++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=b,this}let Iv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nv(t),e.set(t,n)),n}}class Nv{constructor(t){this.id=Iv++,this.code=t,this.usedTimes=0}}function Uv(i,t,e,n,s,r){const o=new _f,a=new Dv,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,N,L,U){const z=L.fog,X=U.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||G,W),q=F&&F.mapping===sa?F.image.height:null,at=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=ht!==void 0?ht.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Bt,K,V,w;if(at){const se=Nn[at];Bt=se.vertexShader,K=se.fragmentShader}else Bt=x.vertexShader,K=x.fragmentShader,a.update(x),V=a.getVertexShaderID(x),w=a.getFragmentShaderID(x);const R=i.getRenderTarget(),O=i.state.buffers.depth.getReversed(),nt=U.isInstancedMesh===!0,$=U.isBatchedMesh===!0,it=!!x.map,yt=!!x.matcap,ft=!!F,k=!!x.aoMap,j=!!x.lightMap,J=!!x.bumpMap,et=!!x.normalMap,E=!!x.displacementMap,D=!!x.emissiveMap,lt=!!x.metalnessMap,vt=!!x.roughnessMap,pt=x.anisotropy>0,I=x.clearcoat>0,S=x.dispersion>0,H=x.iridescence>0,st=x.sheen>0,dt=x.transmission>0,ot=pt&&!!x.anisotropyMap,Pt=I&&!!x.clearcoatMap,gt=I&&!!x.clearcoatNormalMap,It=I&&!!x.clearcoatRoughnessMap,Ft=H&&!!x.iridescenceMap,mt=H&&!!x.iridescenceThicknessMap,Et=st&&!!x.sheenColorMap,Ut=st&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,At=!!x.specularColorMap,qt=!!x.specularIntensityMap,Y=dt&&!!x.transmissionMap,bt=dt&&!!x.thicknessMap,Mt=!!x.gradientMap,Tt=!!x.alphaMap,_t=x.alphaTest>0,ct=!!x.alphaHash,Dt=!!x.extensions;let Wt=kn;x.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const fe={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:K,defines:x.defines,customVertexShaderID:V,customFragmentShaderID:w,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:$,batchingColor:$&&U._colorsTexture!==null,instancing:nt,instancingColor:nt&&U.instanceColor!==null,instancingMorph:nt&&U.morphTexture!==null,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:yt,envMap:ft,envMapMode:ft&&F.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:j,bumpMap:J,normalMap:et,displacementMap:E,emissiveMap:D,normalMapObjectSpace:et&&x.normalMapType===Sp,normalMapTangentSpace:et&&x.normalMapType===Ec,metalnessMap:lt,roughnessMap:vt,anisotropy:pt,anisotropyMap:ot,clearcoat:I,clearcoatMap:Pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:It,dispersion:S,iridescence:H,iridescenceMap:Ft,iridescenceThicknessMap:mt,sheen:st,sheenColorMap:Et,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:At,specularIntensityMap:qt,transmission:dt,transmissionMap:Y,thicknessMap:bt,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:_t,alphaHash:ct,combine:x.combine,mapUv:it&&g(x.map.channel),aoMapUv:k&&g(x.aoMap.channel),lightMapUv:j&&g(x.lightMap.channel),bumpMapUv:J&&g(x.bumpMap.channel),normalMapUv:et&&g(x.normalMap.channel),displacementMapUv:E&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:lt&&g(x.metalnessMap.channel),roughnessMapUv:vt&&g(x.roughnessMap.channel),anisotropyMapUv:ot&&g(x.anisotropyMap.channel),clearcoatMapUv:Pt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(x.sheenRoughnessMap.channel),specularMapUv:Lt&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:qt&&g(x.specularIntensityMap.channel),transmissionMapUv:Y&&g(x.transmissionMap.channel),thicknessMapUv:bt&&g(x.thicknessMap.channel),alphaMapUv:Tt&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(et||pt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(it||Tt),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:O,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||$)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const T=d[x.type];let N;if(T){const L=Nn[T];N=Jm.clone(L.uniforms)}else N=x.uniforms;return N}function _(x,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new Lv(i,T,x,s),c.push(N),u.set(T,N)),N}function A(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:C}}function Fv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ov(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ph(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,y,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,d,g,y,m,p){const M=a(h,d,g,y,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(h,d,g,y,m,p){const M=a(h,d,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||Ov),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Bv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new mh,i.set(n,[o])):s>=r.length?(o=new mh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Jt};break;case"SpotLight":e={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vv=0;function Gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hv(i){const t=new zv,e=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new me,o=new me;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,M=0,v=0,_=0,A=0,b=0,C=0;c.sort(Gv);for(let T=0,N=c.length;T<N;T++){const L=c[T],U=L.color,z=L.intensity,X=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hs?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*z,f+=U.g*z,h+=U.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],z);C++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,q=e.get(L);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[y]=W;const F=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,F.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[y]=F.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=G,_++}y++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const F=L.shadow,q=e.get(L);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==v||x.numSpotShadows!==_||x.numSpotMaps!==A||x.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,x.directionalLength=d,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=v,x.numSpotShadows=_,x.numSpotMaps=A,x.numLightProbes=C,n.version=Vv++)}function l(c,u){let f=0,h=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function gh(i){const t=new Hv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gh(i),t.set(s,[a])):r>=o.length?(a=new gh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Yv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],jv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],_h=new me,sr=new B,Za=new B;function $v(i,t,e){let n=new Pc;const s=new ut,r=new ut,o=new Me,a=new ig,l=new sg,c={},u=e.maxTextureSize,f={[Ci]:Je,[Je]:Ci,[dn]:dn},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Jh&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Co);const T=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(G=>G.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,G=b.length;X<G;X++){const W=b[X],F=W.shadow;if(F===void 0){Gt("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const q=F.getFrameExtents();s.multiply(q),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,F.mapSize.y=r.y));const at=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=at,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ar){if(W.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Gn(s.x,s.y,{format:Hs,type:ui,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new Lr(s.x,s.y,On),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=hi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Be,F.map.depthTexture.magFilter=Be}else W.isPointLight?(F.map=new Of(s.x),F.map.depthTexture=new vm(s.x,Wn)):(F.map=new Gn(s.x,s.y),F.map.depthTexture=new Lr(s.x,s.y,Wn)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=hi,this.type===Co?(F.map.depthTexture.compareFunction=at?Tc:bc,F.map.depthTexture.minFilter=Ge,F.map.depthTexture.magFilter=Ge):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Be,F.map.depthTexture.magFilter=Be);F.camera.updateProjectionMatrix()}const ht=F.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<ht;St++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,St),i.clear();else{St===0&&(i.setRenderTarget(F.map),i.clear());const xt=F.getViewport(St);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),U.viewport(o)}if(W.isPointLight){const xt=F.camera,Bt=F.matrix,K=W.distance||xt.far;K!==xt.far&&(xt.far=K,xt.updateProjectionMatrix()),sr.setFromMatrixPosition(W.matrixWorld),xt.position.copy(sr),Za.copy(xt.position),Za.add(Yv[St]),xt.up.copy(jv[St]),xt.lookAt(Za),xt.updateMatrixWorld(),Bt.makeTranslation(-sr.x,-sr.y,-sr.z),_h.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(_h,xt.coordinateSystem,xt.reversedDepth)}else F.updateMatrices(W);n=F.getFrustum(),_(C,x,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===ar&&M(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,N,L)};function M(b,C){const x=t.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gn(s.x,s.y,{format:Hs,type:ui})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,x,d,y,null)}function v(b,C,x,T){let N=null;const L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=N.uuid,z=C.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let G=X[z];G===void 0&&(G=N.clone(),X[z]=G,C.addEventListener("dispose",A)),N=G}if(N.visible=C.visible,N.wireframe=C.wireframe,T===ar?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=i.properties.get(N);U.light=x}return N}function _(b,C,x,T,N){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===ar)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const z=t.update(b),X=b.material;if(Array.isArray(X)){const G=z.groups;for(let W=0,F=G.length;W<F;W++){const q=G[W],at=X[q.materialIndex];if(at&&at.visible){const ht=v(b,at,T,N);b.onBeforeShadow(i,b,C,x,z,ht,q),i.renderBufferDirect(x,null,z,ht,b,q),b.onAfterShadow(i,b,C,x,z,ht,q)}}}else if(X.visible){const G=v(b,X,T,N);b.onBeforeShadow(i,b,C,x,z,G,null),i.renderBufferDirect(x,null,z,G,b,null),b.onAfterShadow(i,b,C,x,z,G,null)}}const U=b.children;for(let z=0,X=U.length;z<X;z++)_(U[z],C,x,T,N)}function A(b){b.target.removeEventListener("dispose",A);for(const x in c){const T=c[x],N=b.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function Zv(i,t){function e(){let Y=!1;const bt=new Me;let Mt=null;const Tt=new Me(0,0,0,0);return{setMask:function(_t){Mt!==_t&&!Y&&(i.colorMask(_t,_t,_t,_t),Mt=_t)},setLocked:function(_t){Y=_t},setClear:function(_t,ct,Dt,Wt,fe){fe===!0&&(_t*=Wt,ct*=Wt,Dt*=Wt),bt.set(_t,ct,Dt,Wt),Tt.equals(bt)===!1&&(i.clearColor(_t,ct,Dt,Wt),Tt.copy(bt))},reset:function(){Y=!1,Mt=null,Tt.set(-1,0,0,0)}}}function n(){let Y=!1,bt=!1,Mt=null,Tt=null,_t=null;return{setReversed:function(ct){if(bt!==ct){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),bt=ct;const Wt=_t;_t=null,this.setClear(Wt)}},getReversed:function(){return bt},setTest:function(ct){ct?R(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(ct){Mt!==ct&&!Y&&(i.depthMask(ct),Mt=ct)},setFunc:function(ct){if(bt&&(ct=Ip[ct]),Tt!==ct){switch(ct){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ct}},setLocked:function(ct){Y=ct},setClear:function(ct){_t!==ct&&(_t=ct,bt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){Y=!1,Mt=null,Tt=null,_t=null,bt=!1}}}function s(){let Y=!1,bt=null,Mt=null,Tt=null,_t=null,ct=null,Dt=null,Wt=null,fe=null;return{setTest:function(se){Y||(se?R(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function(se){bt!==se&&!Y&&(i.stencilMask(se),bt=se)},setFunc:function(se,Yn,jn){(Mt!==se||Tt!==Yn||_t!==jn)&&(i.stencilFunc(se,Yn,jn),Mt=se,Tt=Yn,_t=jn)},setOp:function(se,Yn,jn){(ct!==se||Dt!==Yn||Wt!==jn)&&(i.stencilOp(se,Yn,jn),ct=se,Dt=Yn,Wt=jn)},setLocked:function(se){Y=se},setClear:function(se){fe!==se&&(i.clearStencil(se),fe=se)},reset:function(){Y=!1,bt=null,Mt=null,Tt=null,_t=null,ct=null,Dt=null,Wt=null,fe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,y=!1,m=null,p=null,M=null,v=null,_=null,A=null,b=null,C=new Jt(0,0,0),x=0,T=!1,N=null,L=null,U=null,z=null,X=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=F>=2);let at=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Bt=new Me().fromArray(St),K=new Me().fromArray(xt);function V(Y,bt,Mt,Tt){const _t=new Uint8Array(4),ct=i.createTexture();i.bindTexture(Y,ct),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Mt;Dt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(bt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return ct}const w={};w[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),w[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),w[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(i.DEPTH_TEST),o.setFunc(Vs),J(!1),et(ru),R(i.CULL_FACE),k(ai);function R(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function O(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function nt(Y,bt){return f[Y]!==bt?(i.bindFramebuffer(Y,bt),f[Y]=bt,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function $(Y,bt){let Mt=d,Tt=!1;if(Y){Mt=h.get(bt),Mt===void 0&&(Mt=[],h.set(bt,Mt));const _t=Y.textures;if(Mt.length!==_t.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=_t.length;ct<Dt;ct++)Mt[ct]=i.COLOR_ATTACHMENT0+ct;Mt.length=_t.length,Tt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(Mt)}function it(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}const yt={[Yi]:i.FUNC_ADD,[ep]:i.FUNC_SUBTRACT,[np]:i.FUNC_REVERSE_SUBTRACT};yt[ip]=i.MIN,yt[sp]=i.MAX;const ft={[rp]:i.ZERO,[op]:i.ONE,[ap]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[dp]:i.SRC_ALPHA_SATURATE,[hp]:i.DST_COLOR,[cp]:i.DST_ALPHA,[lp]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[fp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[pp]:i.CONSTANT_COLOR,[mp]:i.ONE_MINUS_CONSTANT_COLOR,[gp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function k(Y,bt,Mt,Tt,_t,ct,Dt,Wt,fe,se){if(Y===ai){y===!0&&(O(i.BLEND),y=!1);return}if(y===!1&&(R(i.BLEND),y=!0),Y!==tp){if(Y!==m||se!==T){if((p!==Yi||_!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,_=Yi),se)switch(Y){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",Y);break}M=null,v=null,A=null,b=null,C.set(0,0,0),x=0,m=Y,T=se}return}_t=_t||bt,ct=ct||Mt,Dt=Dt||Tt,(bt!==p||_t!==_)&&(i.blendEquationSeparate(yt[bt],yt[_t]),p=bt,_=_t),(Mt!==M||Tt!==v||ct!==A||Dt!==b)&&(i.blendFuncSeparate(ft[Mt],ft[Tt],ft[ct],ft[Dt]),M=Mt,v=Tt,A=ct,b=Dt),(Wt.equals(C)===!1||fe!==x)&&(i.blendColor(Wt.r,Wt.g,Wt.b,fe),C.copy(Wt),x=fe),m=Y,T=!1}function j(Y,bt){Y.side===dn?O(i.CULL_FACE):R(i.CULL_FACE);let Mt=Y.side===Je;bt&&(Mt=!Mt),J(Mt),Y.blending===Us&&Y.transparent===!1?k(ai):k(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Tt=Y.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),D(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(Y){N!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),N=Y)}function et(Y){Y!==Jd?(R(i.CULL_FACE),Y!==L&&(Y===ru?i.cullFace(i.BACK):Y===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),L=Y}function E(Y){Y!==U&&(W&&i.lineWidth(Y),U=Y)}function D(Y,bt,Mt){Y?(R(i.POLYGON_OFFSET_FILL),(z!==bt||X!==Mt)&&(z=bt,X=Mt,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,Mt))):O(i.POLYGON_OFFSET_FILL)}function lt(Y){Y?R(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function vt(Y){Y===void 0&&(Y=i.TEXTURE0+G-1),at!==Y&&(i.activeTexture(Y),at=Y)}function pt(Y,bt,Mt){Mt===void 0&&(at===null?Mt=i.TEXTURE0+G-1:Mt=at);let Tt=ht[Mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},ht[Mt]=Tt),(Tt.type!==Y||Tt.texture!==bt)&&(at!==Mt&&(i.activeTexture(Mt),at=Mt),i.bindTexture(Y,bt||w[Y]),Tt.type=Y,Tt.texture=bt)}function I(){const Y=ht[at];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(Y){te("WebGLState:",Y)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(Y){te("WebGLState:",Y)}}function st(){try{i.texSubImage2D(...arguments)}catch(Y){te("WebGLState:",Y)}}function dt(){try{i.texSubImage3D(...arguments)}catch(Y){te("WebGLState:",Y)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){te("WebGLState:",Y)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){te("WebGLState:",Y)}}function gt(){try{i.texStorage2D(...arguments)}catch(Y){te("WebGLState:",Y)}}function It(){try{i.texStorage3D(...arguments)}catch(Y){te("WebGLState:",Y)}}function Ft(){try{i.texImage2D(...arguments)}catch(Y){te("WebGLState:",Y)}}function mt(){try{i.texImage3D(...arguments)}catch(Y){te("WebGLState:",Y)}}function Et(Y){Bt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Bt.copy(Y))}function Ut(Y){K.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),K.copy(Y))}function Lt(Y,bt){let Mt=c.get(bt);Mt===void 0&&(Mt=new WeakMap,c.set(bt,Mt));let Tt=Mt.get(Y);Tt===void 0&&(Tt=i.getUniformBlockIndex(bt,Y.name),Mt.set(Y,Tt))}function At(Y,bt){const Tt=c.get(bt).get(Y);l.get(bt)!==Tt&&(i.uniformBlockBinding(bt,Tt,Y.__bindingPointIndex),l.set(bt,Tt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ht={},f={},h=new WeakMap,d=[],g=null,y=!1,m=null,p=null,M=null,v=null,_=null,A=null,b=null,C=new Jt(0,0,0),x=0,T=!1,N=null,L=null,U=null,z=null,X=null,Bt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:O,bindFramebuffer:nt,drawBuffers:$,useProgram:it,setBlending:k,setMaterial:j,setFlipSided:J,setCullFace:et,setLineWidth:E,setPolygonOffset:D,setScissorTest:lt,activeTexture:vt,bindTexture:pt,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Ft,texImage3D:mt,updateUBOMapping:Lt,uniformBlockBinding:At,texStorage2D:gt,texStorage3D:It,texSubImage2D:st,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:Et,viewport:Ut,reset:qt}}function Kv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return d?new OffscreenCanvas(I,S):Xo("canvas")}function y(I,S,H){let st=1;const dt=pt(I);if((dt.width>H||dt.height>H)&&(st=H/Math.max(dt.width,dt.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ot=Math.floor(st*dt.width),Pt=Math.floor(st*dt.height);f===void 0&&(f=g(ot,Pt));const gt=S?g(ot,Pt):f;return gt.width=ot,gt.height=Pt,gt.getContext("2d").drawImage(I,0,0,ot,Pt),Gt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Pt+")."),gt}else return"data"in I&&Gt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,S,H,st,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ot=S;if(S===i.RED&&(H===i.FLOAT&&(ot=i.R32F),H===i.HALF_FLOAT&&(ot=i.R16F),H===i.UNSIGNED_BYTE&&(ot=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.R8UI),H===i.UNSIGNED_SHORT&&(ot=i.R16UI),H===i.UNSIGNED_INT&&(ot=i.R32UI),H===i.BYTE&&(ot=i.R8I),H===i.SHORT&&(ot=i.R16I),H===i.INT&&(ot=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ot=i.RG32F),H===i.HALF_FLOAT&&(ot=i.RG16F),H===i.UNSIGNED_BYTE&&(ot=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.RG8UI),H===i.UNSIGNED_SHORT&&(ot=i.RG16UI),H===i.UNSIGNED_INT&&(ot=i.RG32UI),H===i.BYTE&&(ot=i.RG8I),H===i.SHORT&&(ot=i.RG16I),H===i.INT&&(ot=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),H===i.UNSIGNED_INT&&(ot=i.RGB32UI),H===i.BYTE&&(ot=i.RGB8I),H===i.SHORT&&(ot=i.RGB16I),H===i.INT&&(ot=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),H===i.UNSIGNED_INT&&(ot=i.RGBA32UI),H===i.BYTE&&(ot=i.RGBA8I),H===i.SHORT&&(ot=i.RGBA16I),H===i.INT&&(ot=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),S===i.RGBA){const Pt=dt?Wo:ee.getTransfer(st);H===i.FLOAT&&(ot=i.RGBA32F),H===i.HALF_FLOAT&&(ot=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ot=Pt===re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(I,S){let H;return I?S===null||S===Wn||S===Rr?H=i.DEPTH24_STENCIL8:S===On?H=i.DEPTH32F_STENCIL8:S===Ar&&(H=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wn||S===Rr?H=i.DEPTH_COMPONENT24:S===On?H=i.DEPTH_COMPONENT32F:S===Ar&&(H=i.DEPTH_COMPONENT16),H}function A(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Be&&I.minFilter!==Ge?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function b(I){const S=I.target;S.removeEventListener("dispose",b),x(S),S.isVideoTexture&&u.delete(S)}function C(I){const S=I.target;S.removeEventListener("dispose",C),N(S)}function x(I){const S=n.get(I);if(S.__webglInit===void 0)return;const H=I.source,st=h.get(H);if(st){const dt=st[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&T(I),Object.keys(st).length===0&&h.delete(H)}n.remove(I)}function T(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const H=I.source,st=h.get(H);delete st[S.__cacheKey],o.memory.textures--}function N(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let dt=0;dt<S.__webglFramebuffer[st].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[st][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=I.textures;for(let st=0,dt=H.length;st<dt;st++){const ot=n.get(H[st]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(H[st])}n.remove(I)}let L=0;function U(){L=0}function z(){const I=L;return I>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function X(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){const H=n.get(I);if(I.isVideoTexture&&lt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const st=I.image;if(st===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{w(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function W(I,S){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){w(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function F(I,S){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){w(H,I,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function q(I,S){const H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){R(H,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const at={[Ml]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},ht={[Be]:i.NEAREST,[yp]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},St={[Ep]:i.NEVER,[Rp]:i.ALWAYS,[bp]:i.LESS,[bc]:i.LEQUAL,[Tp]:i.EQUAL,[Tc]:i.GEQUAL,[wp]:i.GREATER,[Ap]:i.NOTEQUAL};function xt(I,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ge||S.magFilter===ga||S.magFilter===$r||S.magFilter===Ji||S.minFilter===Ge||S.minFilter===ga||S.minFilter===$r||S.minFilter===Ji)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==$r&&S.minFilter!==Ji||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",b));const st=S.source;let dt=h.get(st);dt===void 0&&(dt={},h.set(st,dt));const ot=X(S);if(ot!==I.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),dt[ot].usedTimes++;const Pt=dt[I.__cacheKey];Pt!==void 0&&(dt[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&T(S)),I.__cacheKey=ot,I.__webglTexture=dt[ot].texture}return H}function K(I,S,H){return Math.floor(Math.floor(I/H)/S)}function V(I,S,H,st){const ot=I.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,st,S.data);else{ot.sort((mt,Et)=>mt.start-Et.start);let Pt=0;for(let mt=1;mt<ot.length;mt++){const Et=ot[Pt],Ut=ot[mt],Lt=Et.start+Et.count,At=K(Ut.start,S.width,4),qt=K(Et.start,S.width,4);Ut.start<=Lt+1&&At===qt&&K(Ut.start+Ut.count-1,S.width,4)===At?Et.count=Math.max(Et.count,Ut.start+Ut.count-Et.start):(++Pt,ot[Pt]=Ut)}ot.length=Pt+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let mt=0,Et=ot.length;mt<Et;mt++){const Ut=ot[mt],Lt=Math.floor(Ut.start/4),At=Math.ceil(Ut.count/4),qt=Lt%S.width,Y=Math.floor(Lt/S.width),bt=At,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,qt,Y,bt,Mt,H,st,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function w(I,S,H){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const dt=Bt(I,S),ot=S.source;e.bindTexture(st,I.__webglTexture,i.TEXTURE0+H);const Pt=n.get(ot);if(ot.version!==Pt.__version||dt===!0){e.activeTexture(i.TEXTURE0+H);const gt=ee.getPrimaries(ee.workingColorSpace),It=S.colorSpace===Ei?null:ee.getPrimaries(S.colorSpace),Ft=S.colorSpace===Ei||gt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let mt=y(S.image,!1,s.maxTextureSize);mt=vt(S,mt);const Et=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let Lt=v(S.internalFormat,Et,Ut,S.colorSpace,S.isVideoTexture);xt(st,S);let At;const qt=S.mipmaps,Y=S.isVideoTexture!==!0,bt=Pt.__version===void 0||dt===!0,Mt=ot.dataReady,Tt=A(S,mt);if(S.isDepthTexture)Lt=_(S.format===Qi,S.type),bt&&(Y?e.texStorage2D(i.TEXTURE_2D,1,Lt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,Et,Ut,null));else if(S.isDataTexture)if(qt.length>0){Y&&bt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,qt[0].width,qt[0].height);for(let _t=0,ct=qt.length;_t<ct;_t++)At=qt[_t],Y?Mt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,At.width,At.height,Et,Ut,At.data):e.texImage2D(i.TEXTURE_2D,_t,Lt,At.width,At.height,0,Et,Ut,At.data);S.generateMipmaps=!1}else Y?(bt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,mt.width,mt.height),Mt&&V(S,mt,Et,Ut)):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,Et,Ut,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Y&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,qt[0].width,qt[0].height,mt.depth);for(let _t=0,ct=qt.length;_t<ct;_t++)if(At=qt[_t],S.format!==wn)if(Et!==null)if(Y){if(Mt)if(S.layerUpdates.size>0){const Dt=ju(At.width,At.height,S.format,S.type);for(const Wt of S.layerUpdates){const fe=At.data.subarray(Wt*Dt/At.data.BYTES_PER_ELEMENT,(Wt+1)*Dt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,Wt,At.width,At.height,1,Et,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,mt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,Lt,At.width,At.height,mt.depth,0,At.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,mt.depth,Et,Ut,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,Lt,At.width,At.height,mt.depth,0,Et,Ut,At.data)}else{Y&&bt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,qt[0].width,qt[0].height);for(let _t=0,ct=qt.length;_t<ct;_t++)At=qt[_t],S.format!==wn?Et!==null?Y?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,Lt,At.width,At.height,0,At.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Mt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,At.width,At.height,Et,Ut,At.data):e.texImage2D(i.TEXTURE_2D,_t,Lt,At.width,At.height,0,Et,Ut,At.data)}else if(S.isDataArrayTexture)if(Y){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,mt.width,mt.height,mt.depth),Mt)if(S.layerUpdates.size>0){const _t=ju(mt.width,mt.height,S.format,S.type);for(const ct of S.layerUpdates){const Dt=mt.data.subarray(ct*_t/mt.data.BYTES_PER_ELEMENT,(ct+1)*_t/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,mt.width,mt.height,1,Et,Ut,Dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Et,Ut,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,mt.width,mt.height,mt.depth,0,Et,Ut,mt.data);else if(S.isData3DTexture)Y?(bt&&e.texStorage3D(i.TEXTURE_3D,Tt,Lt,mt.width,mt.height,mt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Et,Ut,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,mt.width,mt.height,mt.depth,0,Et,Ut,mt.data);else if(S.isFramebufferTexture){if(bt)if(Y)e.texStorage2D(i.TEXTURE_2D,Tt,Lt,mt.width,mt.height);else{let _t=mt.width,ct=mt.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Lt,_t,ct,0,Et,Ut,null),_t>>=1,ct>>=1}}else if(qt.length>0){if(Y&&bt){const _t=pt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Lt,_t.width,_t.height)}for(let _t=0,ct=qt.length;_t<ct;_t++)At=qt[_t],Y?Mt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Et,Ut,At):e.texImage2D(i.TEXTURE_2D,_t,Lt,Et,Ut,At);S.generateMipmaps=!1}else if(Y){if(bt){const _t=pt(mt);e.texStorage2D(i.TEXTURE_2D,Tt,Lt,_t.width,_t.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ut,mt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Et,Ut,mt);m(S)&&p(st),Pt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function R(I,S,H){if(S.image.length!==6)return;const st=Bt(I,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const ot=n.get(dt);if(dt.version!==ot.__version||st===!0){e.activeTexture(i.TEXTURE0+H);const Pt=ee.getPrimaries(ee.workingColorSpace),gt=S.colorSpace===Ei?null:ee.getPrimaries(S.colorSpace),It=S.colorSpace===Ei||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let ct=0;ct<6;ct++)!Ft&&!mt?Et[ct]=y(S.image[ct],!0,s.maxCubemapSize):Et[ct]=mt?S.image[ct].image:S.image[ct],Et[ct]=vt(S,Et[ct]);const Ut=Et[0],Lt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),qt=v(S.internalFormat,Lt,At,S.colorSpace),Y=S.isVideoTexture!==!0,bt=ot.__version===void 0||st===!0,Mt=dt.dataReady;let Tt=A(S,Ut);xt(i.TEXTURE_CUBE_MAP,S);let _t;if(Ft){Y&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,Ut.width,Ut.height);for(let ct=0;ct<6;ct++){_t=Et[ct].mipmaps;for(let Dt=0;Dt<_t.length;Dt++){const Wt=_t[Dt];S.format!==wn?Lt!==null?Y?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,0,0,Wt.width,Wt.height,Lt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,qt,Wt.width,Wt.height,0,Wt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,0,0,Wt.width,Wt.height,Lt,At,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,qt,Wt.width,Wt.height,0,Lt,At,Wt.data)}}}else{if(_t=S.mipmaps,Y&&bt){_t.length>0&&Tt++;const ct=pt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(mt){Y?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Et[ct].width,Et[ct].height,Lt,At,Et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,Et[ct].width,Et[ct].height,0,Lt,At,Et[ct].data);for(let Dt=0;Dt<_t.length;Dt++){const fe=_t[Dt].image[ct].image;Y?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,0,0,fe.width,fe.height,Lt,At,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,qt,fe.width,fe.height,0,Lt,At,fe.data)}}else{Y?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,At,Et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,qt,Lt,At,Et[ct]);for(let Dt=0;Dt<_t.length;Dt++){const Wt=_t[Dt];Y?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,0,0,Lt,At,Wt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,qt,Lt,At,Wt.image[ct])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),ot.__version=dt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function O(I,S,H,st,dt,ot){const Pt=r.convert(H.format,H.colorSpace),gt=r.convert(H.type),It=v(H.internalFormat,Pt,gt,H.colorSpace),Ft=n.get(S),mt=n.get(H);if(mt.__renderTarget=S,!Ft.__hasExternalTextures){const Et=Math.max(1,S.width>>ot),Ut=Math.max(1,S.height>>ot);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,It,Et,Ut,S.depth,0,Pt,gt,null):e.texImage2D(dt,ot,It,Et,Ut,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,dt,mt.__webglTexture,0,E(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,dt,mt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const st=S.depthTexture,dt=st&&st.isDepthTexture?st.type:null,ot=_(S.stencilBuffer,dt),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),ot,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,I)}else{const st=S.textures;for(let dt=0;dt<st.length;dt++){const ot=st[dt],Pt=r.convert(ot.format,ot.colorSpace),gt=r.convert(ot.type),It=v(ot.internalFormat,Pt,gt,ot.colorSpace);D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),It,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),It,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,It,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(I,S,H){const st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(S.depthTexture);if(dt.__renderTarget=S,(!dt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),st){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S.depthTexture);const Ft=r.convert(S.depthTexture.format),mt=r.convert(S.depthTexture.type);let Et;S.depthTexture.format===hi?Et=i.DEPTH_COMPONENT24:S.depthTexture.format===Qi&&(Et=i.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Et,S.width,S.height,0,Ft,mt,null)}}else G(S.depthTexture,0);const ot=dt.__webglTexture,Pt=E(S),gt=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,It=S.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===hi)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,gt,ot,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,It,gt,ot,0);else if(S.depthTexture.format===Qi)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,gt,ot,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,It,gt,ot,0);else throw new Error("Unknown depthTexture format")}function it(I){const S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",dt)};st.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=st}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let st=0;st<6;st++)$(S.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?$(S.__webglFramebuffer[0],I,0):$(S.__webglFramebuffer,I,0)}else if(H){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),nt(S.__webglDepthbuffer[st],I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),nt(S.__webglDepthbuffer,I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(I,S,H){const st=n.get(I);S!==void 0&&O(st.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(I)}function ft(I){const S=I.texture,H=n.get(I),st=n.get(S);I.addEventListener("dispose",C);const dt=I.textures,ot=I.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,o.memory.textures++),ot){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let It=0;It<S.mipmaps.length;It++)H.__webglFramebuffer[gt][It]=i.createFramebuffer()}else H.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<S.mipmaps.length;gt++)H.__webglFramebuffer[gt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,It=dt.length;gt<It;gt++){const Ft=n.get(dt[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&D(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){const It=dt[gt];H.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);const Ft=r.convert(It.format,It.colorSpace),mt=r.convert(It.type),Et=v(It.internalFormat,Ft,mt,It.colorSpace,I.isXRRenderTarget===!0),Ut=E(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Et,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S);for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)O(H.__webglFramebuffer[gt][It],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It);else O(H.__webglFramebuffer[gt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,It=dt.length;gt<It;gt++){const Ft=dt[gt],mt=n.get(Ft);let Et=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,mt.__webglTexture),xt(Et,Ft),O(H.__webglFramebuffer,I,Ft,i.COLOR_ATTACHMENT0+gt,Et,0),m(Ft)&&p(Et)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,st.__webglTexture),xt(gt,S),S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)O(H.__webglFramebuffer[It],I,S,i.COLOR_ATTACHMENT0,gt,It);else O(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,gt,0);m(S)&&p(gt),e.unbindTexture()}I.depthBuffer&&it(I)}function k(I){const S=I.textures;for(let H=0,st=S.length;H<st;H++){const dt=S[H];if(m(dt)){const ot=M(I),Pt=n.get(dt).__webglTexture;e.bindTexture(ot,Pt),p(ot),e.unbindTexture()}}}const j=[],J=[];function et(I){if(I.samples>0){if(D(I)===!1){const S=I.textures,H=I.width,st=I.height;let dt=i.COLOR_BUFFER_BIT;const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(I),gt=S.length>1;if(gt)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const It=I.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ft]);const mt=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,H,st,0,0,H,st,dt,i.NEAREST),l===!0&&(j.length=0,J.length=0,j.push(i.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push(ot),J.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ft]);const mt=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function E(I){return Math.min(s.maxSamples,I.samples)}function D(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(I){const S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function vt(I,S){const H=I.colorSpace,st=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Ws&&H!==Ei&&(ee.getTransfer(H)===re?(st!==wn||dt!==an)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",H)),S}function pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=yt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=O,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Jv(i,t){function e(n,s=Ei){let r;const o=ee.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lf)return i.BYTE;if(n===cf)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===ff)return i.ALPHA;if(n===df)return i.RGB;if(n===wn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===pf)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===Io||n===Do)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===bl||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Il)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===$l||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Qv,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends js{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new ey,p={},M=e.getContextAttributes();let v=null,_=null;const A=[],b=[],C=new ut;let x=null;const T=new fn;T.viewport=new Me;const N=new fn;N.viewport=new Me;const L=[T,N],U=new dg;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getGripSpace()},this.getHand=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getHandSpace()};function G(w){const R=b.indexOf(w.inputSource);if(R===-1)return;const O=A[R];O!==void 0&&(O.update(w.inputSource,w.frame,c||o),O.dispatchEvent({type:w.type,data:w.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",F);for(let w=0;w<A.length;w++){const R=b[w];R!==null&&(b[w]=null,A[w].disconnect(R))}z=null,X=null,m.reset();for(const w in p)delete p[w];t.setRenderTarget(v),d=null,h=null,f=null,s=null,_=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,nt=null,$=null;M.depth&&($=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=M.stencil?Qi:hi,nt=M.stencil?Rr:Wn);const it={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(it),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Gn(h.textureWidth,h.textureHeight,{format:wn,type:an,depthTexture:new Lr(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const O={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Gn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(w){for(let R=0;R<w.removed.length;R++){const O=w.removed[R],nt=b.indexOf(O);nt>=0&&(b[nt]=null,A[nt].disconnect(O))}for(let R=0;R<w.added.length;R++){const O=w.added[R];let nt=b.indexOf(O);if(nt===-1){for(let it=0;it<A.length;it++)if(it>=b.length){b.push(O),nt=it;break}else if(b[it]===null){b[it]=O,nt=it;break}if(nt===-1)break}const $=A[nt];$&&$.connect(O)}}const q=new B,at=new B;function ht(w,R,O){q.setFromMatrixPosition(R.matrixWorld),at.setFromMatrixPosition(O.matrixWorld);const nt=q.distanceTo(at),$=R.projectionMatrix.elements,it=O.projectionMatrix.elements,yt=$[14]/($[10]-1),ft=$[14]/($[10]+1),k=($[9]+1)/$[5],j=($[9]-1)/$[5],J=($[8]-1)/$[0],et=(it[8]+1)/it[0],E=yt*J,D=yt*et,lt=nt/(-J+et),vt=lt*-J;if(R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(vt),w.translateZ(lt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),$[10]===-1)w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const pt=yt+lt,I=ft+lt,S=E-vt,H=D+(nt-vt),st=k*ft/I*pt,dt=j*ft/I*pt;w.projectionMatrix.makePerspective(S,H,st,dt,pt,I),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function St(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let R=w.near,O=w.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(O=m.depthFar)),U.near=N.near=T.near=R,U.far=N.far=T.far=O,(z!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,X=U.far),U.layers.mask=w.layers.mask|6,T.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const nt=w.parent,$=U.cameras;St(U,nt);for(let it=0;it<$.length;it++)St($[it],nt);$.length===2?ht(U,T,N):U.projectionMatrix.copy(T.projectionMatrix),xt(w,U,nt)};function xt(w,R,O){O===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(O.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Pr*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(w){l=w,h!==null&&(h.fixedFoveation=w),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=w)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(w){return p[w]};let Bt=null;function K(w,R){if(u=R.getViewerPose(c||o),g=R,u!==null){const O=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let nt=!1;O.length!==U.cameras.length&&(U.cameras.length=0,nt=!0);for(let ft=0;ft<O.length;ft++){const k=O[ft];let j=null;if(d!==null)j=d.getViewport(k);else{const et=f.getViewSubImage(h,k);j=et.viewport,ft===0&&(t.setRenderTargetTextures(_,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(_))}let J=L[ft];J===void 0&&(J=new fn,J.layers.enable(ft),J.viewport=new Me,L[ft]=J),J.matrix.fromArray(k.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(k.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(j.x,j.y,j.width,j.height),ft===0&&(U.matrix.copy(J.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),nt===!0&&U.cameras.push(J)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const ft=f.getDepthInformation(O[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,s.renderState)}if($&&$.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let ft=0;ft<O.length;ft++){const k=O[ft].camera;if(k){let j=p[k];j||(j=new Sf,p[k]=j);const J=f.getCameraImage(k);j.sourceTexture=J}}}}for(let O=0;O<A.length;O++){const nt=b[O],$=A[O];nt!==null&&$!==void 0&&$.update(nt,R,c||o)}Bt&&Bt(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const V=new Ff;V.setAnimationLoop(K),this.setAnimationLoop=function(w){Bt=w},this.dispose=function(){}}}const ki=new gn,iy=new me;function sy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,If(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,_){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ry(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(g(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(M,A);const b=t.render.frame;r[M.id]!==b&&(h(M),r[M.id]=b)}function u(M){const v=f();M.__bindingPointIndex=v;const _=i.createBuffer(),A=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,C=_.length;b<C;b++){const x=Array.isArray(_[b])?_[b]:[_[b]];for(let T=0,N=x.length;T<N;T++){const L=x[T];if(d(L,b,T,A)===!0){const U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let G=0;G<z.length;G++){const W=z[G],F=y(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,_,A){const b=M.value,C=v+"_"+_;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:A[C]=b.clone(),!0;{const x=A[C];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return A[C]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function g(M){const v=M.uniforms;let _=0;const A=16;for(let C=0,x=v.length;C<x;C++){const T=Array.isArray(v[C])?v[C]:[v[C]];for(let N=0,L=T.length;N<L;N++){const U=T[N],z=Array.isArray(U.value)?U.value:[U.value];for(let X=0,G=z.length;X<G;X++){const W=z[X],F=y(W),q=_%A,at=q%F.boundary,ht=q+at;_+=at,ht!==0&&A-ht<F.storage&&(_+=A-ht),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=F.storage}}}const b=_%A;return b>0&&(_+=A-b),M.__size=_,M.__cache={},this}function y(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Gt("WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function ay(){return In===null&&(In=new pm(oy,16,16,Hs,ui),In.name="DFG_LUT",In.minFilter=Ge,In.magFilter=Ge,In.wrapS=ii,In.wrapT=ii,In.generateMipmaps=!1,In.needsUpdate=!0),In}class ly{constructor(t={}){const{canvas:e=Pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const y=d,m=new Set([Sc,Mc,yc]),p=new Set([an,Wn,Ar,Rr,xc,vc]),M=new Uint32Array(4),v=new Int32Array(4);let _=null,A=null;const b=[],C=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=rn;let L=0,U=0,z=null,X=-1,G=null;const W=new Me,F=new Me;let q=null;const at=new Jt(0);let ht=0,St=e.width,xt=e.height,Bt=1,K=null,V=null;const w=new Me(0,0,St,xt),R=new Me(0,0,St,xt);let O=!1;const nt=new Pc;let $=!1,it=!1;const yt=new me,ft=new B,k=new Me,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function et(){return z===null?Bt:1}let E=n;function D(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),E===null){const Z="webgl2";if(E=D(Z,P),E===null)throw D(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw te("WebGLRenderer: "+P.message),P}let lt,vt,pt,I,S,H,st,dt,ot,Pt,gt,It,Ft,mt,Et,Ut,Lt,At,qt,Y,bt,Mt,Tt;function _t(){lt=new lx(E),lt.init(),bt=new Jv(E,lt),vt=new tx(E,lt,t,bt),pt=new Zv(E,lt),vt.reversedDepthBuffer&&h&&pt.buffers.depth.setReversed(!0),I=new hx(E),S=new Fv,H=new Kv(E,lt,pt,S,vt,bt,I),st=new ax(T),dt=new gg(E),Mt=new J0(E,dt),ot=new cx(E,dt,I,Mt),Pt=new dx(E,ot,dt,Mt,I),At=new fx(E,vt,H),Et=new ex(S),gt=new Uv(T,st,lt,vt,Mt,Et),It=new sy(T,S),Ft=new Bv,mt=new Wv(lt),Lt=new K0(T,st,pt,Pt,g,l),Ut=new $v(T,Pt,vt),Tt=new ry(E,I,vt,pt),qt=new Q0(E,lt,I),Y=new ux(E,lt,I),I.programs=gt.programs,T.capabilities=vt,T.extensions=lt,T.properties=S,T.renderLists=Ft,T.shadowMap=Ut,T.state=pt,T.info=I}_t(),y!==an&&(x=new mx(y,e.width,e.height,s,r));const ct=new ny(T,E);this.xr=ct,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const P=lt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=lt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(P){P!==void 0&&(Bt=P,this.setSize(St,xt,!1))},this.getSize=function(P){return P.set(St,xt)},this.setSize=function(P,Z,rt=!0){if(ct.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=P,xt=Z,e.width=Math.floor(P*Bt),e.height=Math.floor(Z*Bt),rt===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(St*Bt,xt*Bt).floor()},this.setDrawingBufferSize=function(P,Z,rt){St=P,xt=Z,Bt=rt,e.width=Math.floor(P*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,P,Z)},this.setEffects=function(P){if(y===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Z=0;Z<P.length;Z++)if(P[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(W)},this.getViewport=function(P){return P.copy(w)},this.setViewport=function(P,Z,rt,tt){P.isVector4?w.set(P.x,P.y,P.z,P.w):w.set(P,Z,rt,tt),pt.viewport(W.copy(w).multiplyScalar(Bt).round())},this.getScissor=function(P){return P.copy(R)},this.setScissor=function(P,Z,rt,tt){P.isVector4?R.set(P.x,P.y,P.z,P.w):R.set(P,Z,rt,tt),pt.scissor(F.copy(R).multiplyScalar(Bt).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(P){pt.setScissorTest(O=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,rt=!0){let tt=0;if(P){let Q=!1;if(z!==null){const Rt=z.texture.format;Q=m.has(Rt)}if(Q){const Rt=z.texture.type,Nt=p.has(Rt),Ct=Lt.getClearColor(),Ot=Lt.getClearAlpha(),kt=Ct.r,Yt=Ct.g,$t=Ct.b;Nt?(M[0]=kt,M[1]=Yt,M[2]=$t,M[3]=Ot,E.clearBufferuiv(E.COLOR,0,M)):(v[0]=kt,v[1]=Yt,v[2]=$t,v[3]=Ot,E.clearBufferiv(E.COLOR,0,v))}else tt|=E.COLOR_BUFFER_BIT}Z&&(tt|=E.DEPTH_BUFFER_BIT),rt&&(tt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&E.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Lt.dispose(),Ft.dispose(),mt.dispose(),S.dispose(),st.dispose(),Pt.dispose(),Mt.dispose(),Tt.dispose(),gt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",zc),ct.removeEventListener("sessionend",kc),Ii.stop()};function Dt(P){P.preventDefault(),du("WebGLRenderer: Context Lost."),N=!0}function Wt(){du("WebGLRenderer: Context Restored."),N=!1;const P=I.autoReset,Z=Ut.enabled,rt=Ut.autoUpdate,tt=Ut.needsUpdate,Q=Ut.type;_t(),I.autoReset=P,Ut.enabled=Z,Ut.autoUpdate=rt,Ut.needsUpdate=tt,Ut.type=Q}function fe(P){te("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function se(P){const Z=P.target;Z.removeEventListener("dispose",se),Yn(Z)}function Yn(P){jn(P),S.remove(P)}function jn(P){const Z=S.get(P).programs;Z!==void 0&&(Z.forEach(function(rt){gt.releaseProgram(rt)}),P.isShaderMaterial&&gt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,rt,tt,Q,Rt){Z===null&&(Z=j);const Nt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ct=id(P,Z,rt,tt,Q);pt.setMaterial(tt,Nt);let Ot=rt.index,kt=1;if(tt.wireframe===!0){if(Ot=ot.getWireframeAttribute(rt),Ot===void 0)return;kt=2}const Yt=rt.drawRange,$t=rt.attributes.position;let Vt=Yt.start*kt,oe=(Yt.start+Yt.count)*kt;Rt!==null&&(Vt=Math.max(Vt,Rt.start*kt),oe=Math.min(oe,(Rt.start+Rt.count)*kt)),Ot!==null?(Vt=Math.max(Vt,0),oe=Math.min(oe,Ot.count)):$t!=null&&(Vt=Math.max(Vt,0),oe=Math.min(oe,$t.count));const Ee=oe-Vt;if(Ee<0||Ee===1/0)return;Mt.setup(Q,tt,Ct,rt,Ot);let ve,ae=qt;if(Ot!==null&&(ve=dt.get(Ot),ae=Y,ae.setIndex(ve)),Q.isMesh)tt.wireframe===!0?(pt.setLineWidth(tt.wireframeLinewidth*et()),ae.setMode(E.LINES)):ae.setMode(E.TRIANGLES);else if(Q.isLine){let ze=tt.linewidth;ze===void 0&&(ze=1),pt.setLineWidth(ze*et()),Q.isLineSegments?ae.setMode(E.LINES):Q.isLineLoop?ae.setMode(E.LINE_LOOP):ae.setMode(E.LINE_STRIP)}else Q.isPoints?ae.setMode(E.POINTS):Q.isSprite&&ae.setMode(E.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ze=Q._multiDrawStarts,zt=Q._multiDrawCounts,Qe=Q._multiDrawCount,ne=Ot?dt.get(Ot).bytesPerElement:1,_n=S.get(tt).currentProgram.getUniforms();for(let Pn=0;Pn<Qe;Pn++)_n.setValue(E,"_gl_DrawID",Pn),ae.render(ze[Pn]/ne,zt[Pn])}else if(Q.isInstancedMesh)ae.renderInstances(Vt,Ee,Q.count);else if(rt.isInstancedBufferGeometry){const ze=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,zt=Math.min(rt.instanceCount,ze);ae.renderInstances(Vt,Ee,zt)}else ae.render(Vt,Ee)};function Bc(P,Z,rt){P.transparent===!0&&P.side===dn&&P.forceSinglePass===!1?(P.side=Je,P.needsUpdate=!0,Wr(P,Z,rt),P.side=Ci,P.needsUpdate=!0,Wr(P,Z,rt),P.side=dn):Wr(P,Z,rt)}this.compile=function(P,Z,rt=null){rt===null&&(rt=P),A=mt.get(rt),A.init(Z),C.push(A),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),P!==rt&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights();const tt=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Ct=Rt[Nt];Bc(Ct,rt,Q),tt.add(Ct)}else Bc(Rt,rt,Q),tt.add(Rt)}),A=C.pop(),tt},this.compileAsync=function(P,Z,rt=null){const tt=this.compile(P,Z,rt);return new Promise(Q=>{function Rt(){if(tt.forEach(function(Nt){S.get(Nt).currentProgram.isReady()&&tt.delete(Nt)}),tt.size===0){Q(P);return}setTimeout(Rt,10)}lt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let la=null;function nd(P){la&&la(P)}function zc(){Ii.stop()}function kc(){Ii.start()}const Ii=new Ff;Ii.setAnimationLoop(nd),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(P){la=P,ct.setAnimationLoop(P),P===null?Ii.stop():Ii.start()},ct.addEventListener("sessionstart",zc),ct.addEventListener("sessionend",kc),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const rt=ct.enabled===!0&&ct.isPresenting===!0,tt=x!==null&&(z===null||rt)&&x.begin(T,z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,Z,z),A=mt.get(P,C.length),A.init(Z),C.push(A),yt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),nt.setFromProjectionMatrix(yt,Bn,Z.reversedDepth),it=this.localClippingEnabled,$=Et.init(this.clippingPlanes,it),_=Ft.get(P,b.length),_.init(),b.push(_),ct.enabled===!0&&ct.isPresenting===!0){const Nt=T.xr.getDepthSensingMesh();Nt!==null&&ca(Nt,Z,-1/0,T.sortObjects)}ca(P,Z,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(K,V),J=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,J&&Lt.addToRenderList(_,P),this.info.render.frame++,$===!0&&Et.beginShadows();const Q=A.state.shadowsArray;if(Ut.render(Q,P,Z),$===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&x.hasRenderPass())===!1){const Nt=_.opaque,Ct=_.transmissive;if(A.setupLights(),Z.isArrayCamera){const Ot=Z.cameras;if(Ct.length>0)for(let kt=0,Yt=Ot.length;kt<Yt;kt++){const $t=Ot[kt];Gc(Nt,Ct,P,$t)}J&&Lt.render(P);for(let kt=0,Yt=Ot.length;kt<Yt;kt++){const $t=Ot[kt];Vc(_,P,$t,$t.viewport)}}else Ct.length>0&&Gc(Nt,Ct,P,Z),J&&Lt.render(P),Vc(_,P,Z)}z!==null&&U===0&&(H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z)),tt&&x.end(T),P.isScene===!0&&P.onAfterRender(T,P,Z),Mt.resetDefaultState(),X=-1,G=null,C.pop(),C.length>0?(A=C[C.length-1],$===!0&&Et.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function ca(P,Z,rt,tt){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)rt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||nt.intersectsSprite(P)){tt&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(yt);const Nt=Pt.update(P),Ct=P.material;Ct.visible&&_.push(P,Nt,Ct,rt,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||nt.intersectsObject(P))){const Nt=Pt.update(P),Ct=P.material;if(tt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),k.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),k.copy(Nt.boundingSphere.center)),k.applyMatrix4(P.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){const Ot=Nt.groups;for(let kt=0,Yt=Ot.length;kt<Yt;kt++){const $t=Ot[kt],Vt=Ct[$t.materialIndex];Vt&&Vt.visible&&_.push(P,Nt,Vt,rt,k.z,$t)}}else Ct.visible&&_.push(P,Nt,Ct,rt,k.z,null)}}const Rt=P.children;for(let Nt=0,Ct=Rt.length;Nt<Ct;Nt++)ca(Rt[Nt],Z,rt,tt)}function Vc(P,Z,rt,tt){const{opaque:Q,transmissive:Rt,transparent:Nt}=P;A.setupLightsView(rt),$===!0&&Et.setGlobalState(T.clippingPlanes,rt),tt&&pt.viewport(W.copy(tt)),Q.length>0&&Hr(Q,Z,rt),Rt.length>0&&Hr(Rt,Z,rt),Nt.length>0&&Hr(Nt,Z,rt),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Gc(P,Z,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[tt.id]===void 0){const Vt=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[tt.id]=new Gn(1,1,{generateMipmaps:!0,type:Vt?ui:an,minFilter:Ji,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[tt.id],Nt=tt.viewport||W;Rt.setSize(Nt.z*T.transmissionResolutionScale,Nt.w*T.transmissionResolutionScale);const Ct=T.getRenderTarget(),Ot=T.getActiveCubeFace(),kt=T.getActiveMipmapLevel();T.setRenderTarget(Rt),T.getClearColor(at),ht=T.getClearAlpha(),ht<1&&T.setClearColor(16777215,.5),T.clear(),J&&Lt.render(rt);const Yt=T.toneMapping;T.toneMapping=kn;const $t=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),A.setupLightsView(tt),$===!0&&Et.setGlobalState(T.clippingPlanes,tt),Hr(P,rt,tt),H.updateMultisampleRenderTarget(Rt),H.updateRenderTargetMipmap(Rt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let oe=0,Ee=Z.length;oe<Ee;oe++){const ve=Z[oe],{object:ae,geometry:ze,material:zt,group:Qe}=ve;if(zt.side===dn&&ae.layers.test(tt.layers)){const ne=zt.side;zt.side=Je,zt.needsUpdate=!0,Hc(ae,rt,tt,ze,zt,Qe),zt.side=ne,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(H.updateMultisampleRenderTarget(Rt),H.updateRenderTargetMipmap(Rt))}T.setRenderTarget(Ct,Ot,kt),T.setClearColor(at,ht),$t!==void 0&&(tt.viewport=$t),T.toneMapping=Yt}function Hr(P,Z,rt){const tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Rt=P.length;Q<Rt;Q++){const Nt=P[Q],{object:Ct,geometry:Ot,group:kt}=Nt;let Yt=Nt.material;Yt.allowOverride===!0&&tt!==null&&(Yt=tt),Ct.layers.test(rt.layers)&&Hc(Ct,Z,rt,Ot,Yt,kt)}}function Hc(P,Z,rt,tt,Q,Rt){P.onBeforeRender(T,Z,rt,tt,Q,Rt),P.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(T,Z,rt,tt,P,Rt),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=Je,Q.needsUpdate=!0,T.renderBufferDirect(rt,Z,tt,Q,P,Rt),Q.side=Ci,Q.needsUpdate=!0,T.renderBufferDirect(rt,Z,tt,Q,P,Rt),Q.side=dn):T.renderBufferDirect(rt,Z,tt,Q,P,Rt),P.onAfterRender(T,Z,rt,tt,Q,Rt)}function Wr(P,Z,rt){Z.isScene!==!0&&(Z=j);const tt=S.get(P),Q=A.state.lights,Rt=A.state.shadowsArray,Nt=Q.state.version,Ct=gt.getParameters(P,Q.state,Rt,Z,rt),Ot=gt.getProgramCacheKey(Ct);let kt=tt.programs;tt.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Z.environment:null,tt.fog=Z.fog;const Yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;tt.envMap=st.get(P.envMap||tt.environment,Yt),tt.envMapRotation=tt.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,kt===void 0&&(P.addEventListener("dispose",se),kt=new Map,tt.programs=kt);let $t=kt.get(Ot);if($t!==void 0){if(tt.currentProgram===$t&&tt.lightsStateVersion===Nt)return Xc(P,Ct),$t}else Ct.uniforms=gt.getUniforms(P),P.onBeforeCompile(Ct,T),$t=gt.acquireProgram(Ct,Ot),kt.set(Ot,$t),tt.uniforms=Ct.uniforms;const Vt=tt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=Et.uniform),Xc(P,Ct),tt.needsLights=rd(P),tt.lightsStateVersion=Nt,tt.needsLights&&(Vt.ambientLightColor.value=Q.state.ambient,Vt.lightProbe.value=Q.state.probe,Vt.directionalLights.value=Q.state.directional,Vt.directionalLightShadows.value=Q.state.directionalShadow,Vt.spotLights.value=Q.state.spot,Vt.spotLightShadows.value=Q.state.spotShadow,Vt.rectAreaLights.value=Q.state.rectArea,Vt.ltc_1.value=Q.state.rectAreaLTC1,Vt.ltc_2.value=Q.state.rectAreaLTC2,Vt.pointLights.value=Q.state.point,Vt.pointLightShadows.value=Q.state.pointShadow,Vt.hemisphereLights.value=Q.state.hemi,Vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Vt.spotLightMatrix.value=Q.state.spotLightMatrix,Vt.spotLightMap.value=Q.state.spotLightMap,Vt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=$t,tt.uniformsList=null,$t}function Wc(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Uo.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Xc(P,Z){const rt=S.get(P);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function id(P,Z,rt,tt,Q){Z.isScene!==!0&&(Z=j),H.resetTextureUnits();const Rt=Z.fog,Nt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Z.environment:null,Ct=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ws,Ot=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,kt=st.get(tt.envMap||Nt,Ot),Yt=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Vt=!!rt.morphAttributes.position,oe=!!rt.morphAttributes.normal,Ee=!!rt.morphAttributes.color;let ve=kn;tt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ve=T.toneMapping);const ae=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ze=ae!==void 0?ae.length:0,zt=S.get(tt),Qe=A.state.lights;if($===!0&&(it===!0||P!==G)){const Ce=P===G&&tt.id===X;Et.setState(tt,P,Ce)}let ne=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Qe.state.version||zt.outputColorSpace!==Ct||Q.isBatchedMesh&&zt.batching===!1||!Q.isBatchedMesh&&zt.batching===!0||Q.isBatchedMesh&&zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&zt.instancing===!1||!Q.isInstancedMesh&&zt.instancing===!0||Q.isSkinnedMesh&&zt.skinning===!1||!Q.isSkinnedMesh&&zt.skinning===!0||Q.isInstancedMesh&&zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&zt.instancingMorph===!1&&Q.morphTexture!==null||zt.envMap!==kt||tt.fog===!0&&zt.fog!==Rt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Et.numPlanes||zt.numIntersection!==Et.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==$t||zt.morphTargets!==Vt||zt.morphNormals!==oe||zt.morphColors!==Ee||zt.toneMapping!==ve||zt.morphTargetsCount!==ze)&&(ne=!0):(ne=!0,zt.__version=tt.version);let _n=zt.currentProgram;ne===!0&&(_n=Wr(tt,Z,Q));let Pn=!1,Di=!1,ls=!1;const ce=_n.getUniforms(),Ue=zt.uniforms;if(pt.useProgram(_n.program)&&(Pn=!0,Di=!0,ls=!0),tt.id!==X&&(X=tt.id,Di=!0),Pn||G!==P){pt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ce.setValue(E,"projectionMatrix",P.projectionMatrix),ce.setValue(E,"viewMatrix",P.matrixWorldInverse);const pi=ce.map.cameraPosition;pi!==void 0&&pi.setValue(E,ft.setFromMatrixPosition(P.matrixWorld)),vt.logarithmicDepthBuffer&&ce.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ce.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),G!==P&&(G=P,Di=!0,ls=!0)}if(zt.needsLights&&(Qe.state.directionalShadowMap.length>0&&ce.setValue(E,"directionalShadowMap",Qe.state.directionalShadowMap,H),Qe.state.spotShadowMap.length>0&&ce.setValue(E,"spotShadowMap",Qe.state.spotShadowMap,H),Qe.state.pointShadowMap.length>0&&ce.setValue(E,"pointShadowMap",Qe.state.pointShadowMap,H)),Q.isSkinnedMesh){ce.setOptional(E,Q,"bindMatrix"),ce.setOptional(E,Q,"bindMatrixInverse");const Ce=Q.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ce.setValue(E,"boneTexture",Ce.boneTexture,H))}Q.isBatchedMesh&&(ce.setOptional(E,Q,"batchingTexture"),ce.setValue(E,"batchingTexture",Q._matricesTexture,H),ce.setOptional(E,Q,"batchingIdTexture"),ce.setValue(E,"batchingIdTexture",Q._indirectTexture,H),ce.setOptional(E,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ce.setValue(E,"batchingColorTexture",Q._colorsTexture,H));const di=rt.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&At.update(Q,rt,_n),(Di||zt.receiveShadow!==Q.receiveShadow)&&(zt.receiveShadow=Q.receiveShadow,ce.setValue(E,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Z.environment!==null&&(Ue.envMapIntensity.value=Z.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=ay()),Di&&(ce.setValue(E,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&sd(Ue,ls),Rt&&tt.fog===!0&&It.refreshFogUniforms(Ue,Rt),It.refreshMaterialUniforms(Ue,tt,Bt,xt,A.state.transmissionRenderTarget[P.id]),Uo.upload(E,Wc(zt),Ue,H)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Uo.upload(E,Wc(zt),Ue,H),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ce.setValue(E,"center",Q.center),ce.setValue(E,"modelViewMatrix",Q.modelViewMatrix),ce.setValue(E,"normalMatrix",Q.normalMatrix),ce.setValue(E,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ce=tt.uniformsGroups;for(let pi=0,cs=Ce.length;pi<cs;pi++){const qc=Ce[pi];Tt.update(qc,_n),Tt.bind(qc,_n)}}return _n}function sd(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function rd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,Z,rt){const tt=S.get(P);tt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),S.get(P.texture).__webglTexture=Z,S.get(P.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const rt=S.get(P);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const od=E.createFramebuffer();this.setRenderTarget=function(P,Z=0,rt=0){z=P,L=Z,U=rt;let tt=null,Q=!1,Rt=!1;if(P){const Ct=S.get(P);if(Ct.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(E.FRAMEBUFFER,Ct.__webglFramebuffer),W.copy(P.viewport),F.copy(P.scissor),q=P.scissorTest,pt.viewport(W),pt.scissor(F),pt.setScissorTest(q),X=-1;return}else if(Ct.__webglFramebuffer===void 0)H.setupRenderTarget(P);else if(Ct.__hasExternalTextures)H.rebindTextures(P,S.get(P.texture).__webglTexture,S.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Yt=P.depthTexture;if(Ct.__boundDepthTexture!==Yt){if(Yt!==null&&S.has(Yt)&&(P.width!==Yt.image.width||P.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(P)}}const Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);const kt=S.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?tt=kt[Z][rt]:tt=kt[Z],Q=!0):P.samples>0&&H.useMultisampledRTT(P)===!1?tt=S.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?tt=kt[rt]:tt=kt,W.copy(P.viewport),F.copy(P.scissor),q=P.scissorTest}else W.copy(w).multiplyScalar(Bt).floor(),F.copy(R).multiplyScalar(Bt).floor(),q=O;if(rt!==0&&(tt=od),pt.bindFramebuffer(E.FRAMEBUFFER,tt)&&pt.drawBuffers(P,tt),pt.viewport(W),pt.scissor(F),pt.setScissorTest(q),Q){const Ct=S.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,rt)}else if(Rt){const Ct=Z;for(let Ot=0;Ot<P.textures.length;Ot++){const kt=S.get(P.textures[Ot]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ot,kt.__webglTexture,rt,Ct)}}else if(P!==null&&rt!==0){const Ct=S.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ct.__webglTexture,rt)}X=-1},this.readRenderTargetPixels=function(P,Z,rt,tt,Q,Rt,Nt,Ct=0){if(!(P&&P.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=S.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){pt.bindFramebuffer(E.FRAMEBUFFER,Ot);try{const kt=P.textures[Ct],Yt=kt.format,$t=kt.type;if(P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!vt.textureFormatReadable(Yt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable($t)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-tt&&rt>=0&&rt<=P.height-Q&&E.readPixels(Z,rt,tt,Q,bt.convert(Yt),bt.convert($t),Rt)}finally{const kt=z!==null?S.get(z).__webglFramebuffer:null;pt.bindFramebuffer(E.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,rt,tt,Q,Rt,Nt,Ct=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=S.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot)if(Z>=0&&Z<=P.width-tt&&rt>=0&&rt<=P.height-Q){pt.bindFramebuffer(E.FRAMEBUFFER,Ot);const kt=P.textures[Ct],Yt=kt.format,$t=kt.type;if(P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!vt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.bufferData(E.PIXEL_PACK_BUFFER,Rt.byteLength,E.STREAM_READ),E.readPixels(Z,rt,tt,Q,bt.convert(Yt),bt.convert($t),0);const oe=z!==null?S.get(z).__webglFramebuffer:null;pt.bindFramebuffer(E.FRAMEBUFFER,oe);const Ee=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Lp(E,Ee,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Rt),E.deleteBuffer(Vt),E.deleteSync(Ee),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,rt=0){const tt=Math.pow(2,-rt),Q=Math.floor(P.image.width*tt),Rt=Math.floor(P.image.height*tt),Nt=Z!==null?Z.x:0,Ct=Z!==null?Z.y:0;H.setTexture2D(P,0),E.copyTexSubImage2D(E.TEXTURE_2D,rt,0,0,Nt,Ct,Q,Rt),pt.unbindTexture()};const ad=E.createFramebuffer(),ld=E.createFramebuffer();this.copyTextureToTexture=function(P,Z,rt=null,tt=null,Q=0,Rt=0){let Nt,Ct,Ot,kt,Yt,$t,Vt,oe,Ee;const ve=P.isCompressedTexture?P.mipmaps[Rt]:P.image;if(rt!==null)Nt=rt.max.x-rt.min.x,Ct=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Yt=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const Ue=Math.pow(2,-Q);Nt=Math.floor(ve.width*Ue),Ct=Math.floor(ve.height*Ue),P.isDataArrayTexture?Ot=ve.depth:P.isData3DTexture?Ot=Math.floor(ve.depth*Ue):Ot=1,kt=0,Yt=0,$t=0}tt!==null?(Vt=tt.x,oe=tt.y,Ee=tt.z):(Vt=0,oe=0,Ee=0);const ae=bt.convert(Z.format),ze=bt.convert(Z.type);let zt;Z.isData3DTexture?(H.setTexture3D(Z,0),zt=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(H.setTexture2DArray(Z,0),zt=E.TEXTURE_2D_ARRAY):(H.setTexture2D(Z,0),zt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Qe=E.getParameter(E.UNPACK_ROW_LENGTH),ne=E.getParameter(E.UNPACK_IMAGE_HEIGHT),_n=E.getParameter(E.UNPACK_SKIP_PIXELS),Pn=E.getParameter(E.UNPACK_SKIP_ROWS),Di=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$t);const ls=P.isDataArrayTexture||P.isData3DTexture,ce=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const Ue=S.get(P),di=S.get(Z),Ce=S.get(Ue.__renderTarget),pi=S.get(di.__renderTarget);pt.bindFramebuffer(E.READ_FRAMEBUFFER,Ce.__webglFramebuffer),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let cs=0;cs<Ot;cs++)ls&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(P).__webglTexture,Q,$t+cs),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(Z).__webglTexture,Rt,Ee+cs)),E.blitFramebuffer(kt,Yt,Nt,Ct,Vt,oe,Nt,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST);pt.bindFramebuffer(E.READ_FRAMEBUFFER,null),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||S.has(P)){const Ue=S.get(P),di=S.get(Z);pt.bindFramebuffer(E.READ_FRAMEBUFFER,ad),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,ld);for(let Ce=0;Ce<Ot;Ce++)ls?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,$t+Ce):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue.__webglTexture,Q),ce?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,di.__webglTexture,Rt,Ee+Ce):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,di.__webglTexture,Rt),Q!==0?E.blitFramebuffer(kt,Yt,Nt,Ct,Vt,oe,Nt,Ct,E.COLOR_BUFFER_BIT,E.NEAREST):ce?E.copyTexSubImage3D(zt,Rt,Vt,oe,Ee+Ce,kt,Yt,Nt,Ct):E.copyTexSubImage2D(zt,Rt,Vt,oe,kt,Yt,Nt,Ct);pt.bindFramebuffer(E.READ_FRAMEBUFFER,null),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ce?P.isDataTexture||P.isData3DTexture?E.texSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Ot,ae,ze,ve.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Ot,ae,ve.data):E.texSubImage3D(zt,Rt,Vt,oe,Ee,Nt,Ct,Ot,ae,ze,ve):P.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,Nt,Ct,ae,ze,ve.data):P.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,ve.width,ve.height,ae,ve.data):E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,Nt,Ct,ae,ze,ve);E.pixelStorei(E.UNPACK_ROW_LENGTH,Qe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ne),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_n),E.pixelStorei(E.UNPACK_SKIP_ROWS,Pn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Di),Rt===0&&Z.generateMipmaps&&E.generateMipmap(zt),pt.unbindTexture()},this.initRenderTarget=function(P){S.get(P).__webglFramebuffer===void 0&&H.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?H.setTextureCube(P,0):P.isData3DTexture?H.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?H.setTexture2DArray(P,0):H.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){L=0,U=0,z=null,pt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Pi=12;class Gf{perm=[];constructor(t=0){const e=[];for(let s=0;s<256;s++)e[s]=s;let n=t;for(let s=255;s>0;s--){n=n*1103515245+12345&2147483647;const r=n%(s+1);[e[s],e[r]]=[e[r],e[s]]}for(let s=0;s<512;s++)this.perm[s]=e[s&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return t+n*(e-t)}grad(t,e,n){const s=t&3,r=s<2?e:n,o=s<2?n:e;return((s&1)===0?r:-r)+((s&2)===0?o:-o)}noise(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const r=this.fade(t),o=this.fade(e),a=this.perm[n]+s,l=this.perm[n+1]+s;return this.lerp(this.lerp(this.grad(this.perm[a],t,e),this.grad(this.perm[l],t-1,e),r),this.lerp(this.grad(this.perm[a+1],t,e-1),this.grad(this.perm[l+1],t-1,e-1),r),o)}fbm(t,e,n=4){let s=0,r=1,o=1,a=0;for(let l=0;l<n;l++)s+=r*this.noise(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}}const cy=new Gf(54321);new Gf(12345);let Bs=null;function uy(i=12345){if(Bs)return Bs;const t=l=>{const c=Math.sin(i*9999+l*7919)*1e4;return c-Math.floor(c)},e=12+Math.floor(t(0)*6),n=15,s=15,r=160,o=[];for(let l=0;l<e;l++){const c=l/e*Math.PI*2,u=.7+t(l+1)*.6,f=n+Math.cos(c)*r*u,h=s+Math.sin(c)*r*u,d=l/e,g=.5,y=.08,m=6,p=Math.exp(-Math.pow(d-g,2)/(2*Math.pow(y,2))),M=Un(f,h)+.1-p*m;o.push(new B(f,M,h))}const a=new Nc(o);return a.closed=!0,a.curveType="centripetal",a.tension=.5,Bs=a,a}function Un(i,t){return cy.fbm(i*.12,t*.12,4)*10}function hy(i=12345){const t=new $e,e=uy(i),n=800,s=e.getSpacedPoints(n),r=[],o=[],a=[],l=Pi/2,c=e.getLength(),u=10;for(let _=0;_<=n;_++){const A=_/n,b=s[_],C=e.getTangentAt(A),x=new ut(C.x,C.z).normalize(),T=new ut(-x.y,x.x),N=A*c/u;if(r.push(b.x+T.x*l,b.y+.05,b.z+T.y*l,b.x-T.x*l,b.y+.05,b.z-T.y*l),a.push(0,N,1,N),_<n){const L=_*2,U=_*2+1,z=(_+1)*2,X=(_+1)*2+1;o.push(L,z,U,U,z,X)}}const f=new be;f.setAttribute("position",new Qt(r,3)),f.setAttribute("uv",new Qt(a,2)),f.setIndex(o),f.computeVertexNormals();const h=new we({color:3355443,roughness:.8,side:dn}),d=new Zt(f,h);d.receiveShadow=!0,t.add(d);for(let _=0;_<2;_++){const A=[];for(let L=0;L<=n;L++){const U=L/n,z=s[L],X=e.getTangentAt(U),G=new ut(X.x,X.z).normalize(),W=new ut(-G.y,G.x),F=_===0?-l-.2:l+.2,q=z.x+W.x*F,at=z.z+W.y*F;A.push(new B(q,z.y+.15,at))}const b=new Nc(A);b.closed=!0;const C=new Uc(b,n,.06,6,!0),x=new we({color:_===0?13369344:14540253,roughness:.3,metalness:.5}),T=new Zt(C,x);T.castShadow=!0,t.add(T);const N=24;for(let L=0;L<N;L++){const U=L/N,z=Math.floor(U*n),X=A[z],G=e.getTangentAt(z/n),W=new ut(G.x,G.z).normalize();new ut(-W.y,W.x);const F=new os(.12,.35,.12),q=new Zt(F,x);q.position.set(X.x,X.y+.175,X.z),q.castShadow=!0,t.add(q)}}for(let _=0;_<2;_++)for(let b=0;b<40;b++){const C=b/40,x=Math.floor(C*n),T=s[x],N=e.getTangentAt(x/n),L=new ut(N.x,N.z).normalize(),U=new ut(-L.y,L.x),z=_===0?-l-36-Math.random()*48:l+36+Math.random()*48,X=T.x+U.x*z,G=T.z+U.y*z,W=Un(X,G)+.1;if(Math.random()>.5){const at=new Zt(new as(.06999999999999999,.1,.6,8),new we({color:9127187}));at.position.set(X,W+.6/2,G),at.castShadow=!0,t.add(at);const ht=.35,St=.5,xt=new Zt(new Vr(ht,St,8),new we({color:2263842}));xt.position.set(X,W+.6+St/2-.05,G),xt.castShadow=!0,t.add(xt)}else{const F=.2+Math.random()*.3,q=new Zt(new $o(F,0),new we({color:8947848,roughness:.9}));q.position.set(X,W+F*.5,G),q.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),q.castShadow=!0,t.add(q)}}const g=.5,y=.2,m=180,p=16,M=new we({color:1118481,roughness:1,flatShading:!0}),v=new $o(1,0);for(let _=0;_<=m;_++){const A=g-y+_/m*(y*2),b=e.getPointAt((A+1)%1),C=e.getTangentAt((A+1)%1),x=new ut(C.x,C.z).normalize(),T=new ut(-x.y,x.x),N=new B(T.x,0,T.y),L=new B(0,1,0);for(let U=0;U<p;U++){const z=-.2+U/(p-1)*(Math.PI+.4),X=3.5+Math.random()*2.5,W=Pi/2+X*.9+.5+Math.random()*5,F=b.clone().add(N.clone().multiplyScalar(Math.cos(z)*W)).add(L.clone().multiplyScalar(Math.max(-.2,Math.sin(z))*W*.8)),q=new Zt(v,M);q.position.copy(F),q.scale.setScalar(X),q.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),q.castShadow=!0,q.receiveShadow=!0,t.add(q)}}return{group:t,curve:e}}function fy(i=12345){let t=hy(i);return Bs=t.curve,t}function dy(){return Bs}function py(i,t){const e=Bs;if(!e)return 1/0;const n=800;let s=1/0;for(let r=0;r<=n;r++){const o=r/n,a=e.getPointAt(o),l=a.x-i,c=a.z-t,u=Math.sqrt(l*l+c*c);u<s&&(s=u)}return s}function my(i,t=0){const e=new $e,n=i.getPointAt(t),s=i.getTangentAt(t),r=new ut(s.x,s.z).normalize(),o=new ut(-r.y,r.x),a=Pi+.4,l=.6,c=.15,u=Math.ceil(a/c),f=Math.ceil(l/c);for(let A=0;A<u;A++)for(let b=0;b<f;b++){const C=(A+b)%2===0,x=new qs(c,c),T=new we({color:C?16777215:2236962,side:dn}),N=new Zt(x,T),L=(A-u/2+.5)*c,U=(b-f/2+.5)*c;N.position.set(n.x+o.x*L-r.x*U,n.y+.06,n.z+o.y*L-r.y*U),N.rotation.x=-Math.PI/2,N.rotation.z=Math.atan2(s.x,s.z),e.add(N)}const h=2.5,d=new as(.05,.05,h,8),g=new we({color:8947848,metalness:.5}),y=new Zt(d,g);y.position.set(n.x-o.x*(a/2+.3),n.y+h/2,n.z-o.y*(a/2+.3)),y.castShadow=!0,e.add(y);const m=new Zt(d,g);m.position.set(n.x+o.x*(a/2+.3),n.y+h/2,n.z+o.y*(a/2+.3)),m.castShadow=!0,e.add(m);const p=a+1,M=new qs(p,.4),v=new we({color:16711680,side:dn,metalness:.3}),_=new Zt(M,v);return _.position.set(n.x,n.y+h,n.z),_.rotation.y=Math.atan2(s.x,s.z),e.add(_),e}class gy extends Error{constructor(t,e,n){super(t),this.is_operational=e,this.context=n,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Hf=(i=>(i.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",i.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",i.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",i.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",i.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",i.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",i.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",i.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",i))(Hf||{});class _y extends gy{constructor(t,e,n){super(e??t,!0,n),this.category=t}}function Gr(i,t,e){return i}const Dn=-1,Sn=-1,vr=Object.freeze(Object.create(null)),Gi=5,Hi=31,xy=2166136261,vy=16777619,yy=2654435769,My=1367130551,fi=16,xh=2,Wf=1024,To=0,vh=0,Sy=31,Ey=1/60,by=4,Ty=0,wy=4;class ci{_words;constructor(t){this._words=t??new Array(wy).fill(0)}has(t){const e=t>>>Gi;return e>=this._words.length?!1:(this._words[e]&1<<(t&Hi))!==0}set(t){const e=t>>>Gi;e>=this._words.length&&this.grow(e+1),this._words[e]|=1<<(t&Hi)}clear(t){const e=t>>>Gi;e>=this._words.length||(this._words[e]&=~(1<<(t&Hi)))}overlaps(t){const e=this._words,n=t._words,s=e.length<n.length?e.length:n.length;for(let r=0;r<s;r++)if((e[r]&n[r])!==0)return!0;return!1}contains(t){const e=t._words,n=this._words,s=n.length;for(let r=0;r<e.length;r++){const o=e[r];if(o!==0&&(r>=s||(n[r]&o)!==o))return!1}return!0}equals(t){const e=this._words,n=t._words,s=e.length>n.length?e.length:n.length;for(let r=0;r<s;r++){const o=r<e.length?e[r]:0,a=r<n.length?n[r]:0;if(o!==a)return!1}return!0}copy(){return new ci(this._words.slice())}copy_with_set(t){const e=t>>>Gi,n=e+1,s=this._words.length>n?this._words.length:n,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[e]|=1<<(t&Hi),new ci(r)}copy_with_clear(t){const e=this._words.slice(),n=t>>>Gi;return n<e.length&&(e[n]&=~(1<<(t&Hi))),new ci(e)}hash(){let t=xy;const e=this._words;let n=e.length-1;for(;n>=0&&e[n]===0;)n--;for(let s=0;s<=n;s++)t^=e[s],t=Math.imul(t,vy);return t}for_each(t){const e=this._words;for(let n=0;n<e.length;n++){let s=e[n];if(s===0)continue;const r=n<<Gi;for(;s!==0;){const o=s&-s>>>0,a=Hi-Math.clz32(o);t(r+a),s^=o}}}grow(t){let e=this._words.length;for(;e<t;)e*=2;const n=new Array(e).fill(0);for(let s=0;s<this._words.length;s++)n[s]=this._words[s];this._words=n}}class Li{constructor(t,e=fi){this._ctor=t,this._buf=new t(e)}_buf;_len=0;get length(){return this._len}push(t){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=t}pop(){return this._buf[--this._len]}get(t){return this._buf[t]}set_at(t,e){this._buf[t]=e}swap_remove(t){const e=this._buf[t];return this._buf[t]=this._buf[--this._len],e}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let t=0;const e=this._buf,n=this._len;return{next(){return t<n?{value:e[t++],done:!1}:{value:0,done:!0}}}}ensure_capacity(t){if(t<=this._buf.length)return;let e=this._buf.length||1;for(;e<t;)e*=xh;const n=new this._ctor(e);n.set(this._buf.subarray(0,this._len)),this._buf=n}bulk_append(t,e,n){this.ensure_capacity(this._len+n),this._buf.set(t.subarray(e,e+n),this._len),this._len+=n}bulk_append_zeroes(t){this.ensure_capacity(this._len+t),this._buf.fill(0,this._len,this._len+t),this._len+=t}_grow(){const t=new this._ctor(this._buf.length*xh);t.set(this._buf),this._buf=t}}class Ay extends Li{constructor(t=fi){super(Float32Array,t)}}class Ry extends Li{constructor(t=fi){super(Float64Array,t)}}class Cy extends Li{constructor(t=fi){super(Int8Array,t)}}class Py extends Li{constructor(t=fi){super(Int16Array,t)}}class Ly extends Li{constructor(t=fi){super(Int32Array,t)}}class Iy extends Li{constructor(t=fi){super(Uint8Array,t)}}class Dy extends Li{constructor(t=fi){super(Uint16Array,t)}}class Xf extends Li{constructor(t=fi){super(Uint32Array,t)}}const Ny={f32:Ay,f64:Ry,i8:Cy,i16:Py,i32:Ly,u8:Iy,u16:Dy,u32:Xf},es=20,Fo=(1<<es)-1,Uy=Sy-es,yh=(1<<Uy)-1,Fy=(i,t)=>t<<es|i,nn=i=>i&Fo,Mh=i=>i>>es,Oy=i=>Gr(i),By=i=>Gr(i);class zy{field_names;columns;reader;constructor(t){this.field_names=t,this.columns=[];for(let n=0;n<t.length;n++)this.columns.push([]);const e={length:0};for(let n=0;n<t.length;n++)e[t[n]]=this.columns[n];this.reader=e}emit(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)n[s].push(t[e[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const t=this.columns;for(let e=0;e<t.length;e++)t[e].length=0}}const ky=i=>Gr(i);class Vy{field_names;field_index;columns;reader;constructor(t,e){this.field_names=t,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<t.length;r++)this.field_index[t[r]]=r,this.columns.push([e[t[r]]??0]);const n=Object.create(null),s=this.columns;for(let r=0;r<t.length;r++){const o=s[r];Object.defineProperty(n,t[r],{get(){return o[To]},enumerable:!0})}this.reader=n}write(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)e[s]in t&&(n[s][To]=t[e[s]])}read_field(t){return this.columns[t][To]}write_field(t,e){this.columns[t][To]=e}}const Gy=i=>Gr(i);class Hy{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(t,e,n,s=Wf){if(this.id=t,this.mask=e,this._entity_ids=new Xf(s),n){let r=0;for(let o=0;o<n.length;o++){const a=n[o],l=a.component_id,c=new Array(a.field_names.length);this._col_offset[l]=r,this._field_count[l]=a.field_names.length,this._field_index[l]=a.field_index,this._field_names[l]=a.field_names;for(let u=0;u<a.field_names.length;u++){const f=new Ny[a.field_types[u]](s);c[u]=f,this._flat_columns[r++]=f}this.column_groups[l]={layout:a,columns:c},this._column_ids.push(l)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(t){return this.mask.has(t)}matches(t){return this.mask.contains(t)}get_column(t,e){const n=t,s=this._field_index[n][e];return this._flat_columns[this._col_offset[n]+s].buf}write_fields(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let l=0;l<o.length;l++)a[r+l].buf[t]=n[o[l]]}write_fields_positional(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<n.length;a++)o[r+a].buf[t]=n[a]}read_field(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][n];return o===void 0?NaN:this._flat_columns[r+o].buf[t]}copy_shared_from(t,e,n){const s=t._col_offset,r=t._field_count,o=t._flat_columns,a=this._flat_columns,l=this._column_ids;for(let c=0;c<l.length;c++){const u=l[c],f=s[u];if(f===void 0)continue;const h=this._col_offset[u],d=r[u];for(let g=0;g<d;g++)a[h+g].buf[n]=o[f+g].buf[e]}}add_entity(t){const e=this.length;this._entity_ids.push(t);const n=this._flat_columns;for(let s=0;s<n.length;s++)n[s].push(0);return this.length++,e}remove_entity(t){const e=this.length-1;let n=Sn;const s=this._flat_columns,r=this._entity_ids.buf;if(t!==e){r[t]=r[e],n=nn(r[t]);for(let o=0;o<s.length;o++)s[o].swap_remove(t)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,n}add_entity_tag(t){const e=this.length;return this._entity_ids.push(t),this.length++,e}remove_entity_tag(t){const e=this.length-1;let n=Sn;const s=this._entity_ids.buf;return t!==e&&(s[t]=s[e],n=nn(s[t])),this._entity_ids.pop(),this.length--,n}move_entity_from(t,e,n,s){const r=this.length;this._entity_ids.push(n);const o=this._flat_columns,a=t._flat_columns;for(let c=0;c<o.length;c++){const u=s[c];o[c].push(u>=0?a[u].buf[e]:0)}this.length++;const l=t.has_columns?t.remove_entity(e):t.remove_entity_tag(e);ye[0]=r,ye[1]=l}move_entity_from_tag(t,e,n){const s=this.length;this._entity_ids.push(n),this.length++;const r=t.remove_entity_tag(e);ye[0]=s,ye[1]=r}bulk_move_all_from(t,e){const n=t.length;if(n===0)return this.length;const s=this.length,r=this._flat_columns,o=t._flat_columns;this._entity_ids.bulk_append(t._entity_ids.buf,0,n);for(let a=0;a<r.length;a++){const l=e[a];l>=0?r[a].bulk_append(o[l].buf,0,n):r[a].bulk_append_zeroes(n)}this.length+=n,t.length=0,t._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(t){return this.edges[t]}set_edge(t,e){this.edges[t]=e}}const ye=[0,Sn];function wo(i,t){const e=t._flat_columns,n=new Int16Array(e.length),s=t._column_ids,r=i._col_offset,o=t._col_offset,a=t._field_count;for(let l=0;l<s.length;l++){const c=s[l],u=o[c],f=a[c],h=r[c];if(h!==void 0)for(let d=0;d<f;d++)n[u+d]=h+d;else for(let d=0;d<f;d++)n[u+d]=-1}return n}function qf(i,t,e){const n=i.get(t);n!==void 0?n.push(e):i.set(t,[e])}class Wy{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(t){this.initial_capacity=t??Wf,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ci)}arch_get(t){return this.archetypes[t]}arch_get_or_create_from_mask(t){const e=t.hash(),n=this.archetype_map.get(e);if(n!==void 0){for(let l=0;l<n.length;l++)if(this.archetypes[n[l]].mask.equals(t))return n[l]}const s=Gy(this.next_archetype_id++),r=[];t.for_each(l=>{const c=l,u=this.component_metas[c];u&&u.field_names.length>0&&r.push({component_id:c,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new Hy(s,t,r,this.initial_capacity);this.archetypes.push(o),qf(this.archetype_map,e,s),t.for_each(l=>{const c=l;let u=this.component_index.get(c);u||(u=new Set,this.component_index.set(c,u)),u.add(s)});const a=this.registered_queries;for(let l=0;l<a.length;l++){const c=a[l];o.matches(c.include_mask)&&(!c.exclude_mask||!o.mask.overlaps(c.exclude_mask))&&(!c.any_of_mask||o.mask.overlaps(c.any_of_mask))&&c.result.push(o)}return s}arch_resolve_add(t,e){const n=this.arch_get(t);if(n.mask.has(e))return t;const s=n.get_edge(e);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_set(e));return this.arch_cache_edge(n,this.arch_get(r),e),r}arch_resolve_remove(t,e){const n=this.arch_get(t);if(!n.mask.has(e))return t;const s=n.get_edge(e);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_clear(e));return this.arch_cache_edge(this.arch_get(r),n,e),r}arch_cache_edge(t,e,n){const s=t.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};s.add=e.id,s.add_map=wo(t,e),t.set_edge(n,s);const r=e.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=t.id,r.remove_map=wo(e,t),e.set_edge(n,r)}create_entity(){let t,e;this.entity_free_indices.length>0?(t=this.entity_free_indices.pop(),e=this.entity_generations[t]):(t=this.entity_high_water++,this.entity_generations[t]=vh,e=vh),this.entity_alive_count++;const n=Fy(t,e);return this.entity_archetype[t]=this.empty_archetype_id,this.entity_row[t]=Dn,n}destroy_entity(t){if(!this.is_alive(t))return;const e=nn(t),n=this.entity_row[e];if(n!==Dn){const r=this.arch_get(this.entity_archetype[e]).remove_entity(n);r!==Sn&&(this.entity_row[r]=n)}this.entity_archetype[e]=Dn,this.entity_row[e]=Dn;const s=Mh(t);this.entity_generations[e]=s+1&yh,this.entity_free_indices.push(e),this.entity_alive_count--}is_alive(t){const e=nn(t);return e<this.entity_high_water&&this.entity_generations[e]===Mh(t)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(t){this.pending_destroy.push(t)}flush_destroyed(){const t=this.pending_destroy;if(t.length===0)return;const e=this.entity_archetype,n=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<t.length;a++){const l=t[a],c=l&Fo,u=l>>es;if(c>=o||s[c]!==u)continue;const f=n[c];if(f!==Dn){const h=r[e[c]],d=h.has_columns?h.remove_entity(f):h.remove_entity_tag(f);d!==Sn&&(n[d]=f)}e[c]=Dn,n[c]=Dn,s[c]=u+1&yh,this.entity_free_indices.push(c),this.entity_alive_count--}t.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(t,e,n){this.pending_add_ids.push(t),this.pending_add_defs.push(e),this.pending_add_values.push(n??vr)}remove_component_deferred(t,e){this.pending_remove_ids.push(t),this.pending_remove_defs.push(e)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const t=this.pending_add_ids,e=this.pending_add_defs,n=this.pending_add_values,s=t.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,l=this.archetypes,c=this.component_metas,u=this.entity_high_water;for(let f=0;f<s;f++){const h=t[f],d=h&Fo,g=h>>es;if(d>=u||a[d]!==g)continue;const y=r[d],m=e[f],p=l[y];if(p.mask.has(m)){c[m].field_names.length>0&&p.write_fields(o[d],m,n[f]);continue}const M=this.arch_resolve_add(y,m),v=l[M],_=o[d],A=!v.has_columns&&!p.has_columns;let b;if(_!==Dn){if(A)v.move_entity_from_tag(p,_,h);else{const C=p.get_edge(m);v.move_entity_from(p,_,h,C.add_map)}b=ye[0],ye[1]!==Sn&&(o[ye[1]]=_)}else b=A?v.add_entity_tag(h):v.add_entity(h);c[m].field_names.length>0&&v.write_fields(b,m,n[f]),r[d]=M,o[d]=b}t.length=0,e.length=0,n.length=0}_flush_removes(){const t=this.pending_remove_ids,e=this.pending_remove_defs,n=t.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,l=this.entity_high_water;for(let c=0;c<n;c++){const u=t[c],f=u&Fo,h=u>>es;if(f>=l||o[f]!==h)continue;const d=s[f],g=e[c],y=a[d];if(!y.mask.has(g))continue;const m=this.arch_resolve_remove(d,g),p=a[m],M=r[f];if(!p.has_columns&&!y.has_columns)p.move_entity_from_tag(y,M,u);else{const v=y.get_edge(g);p.move_entity_from(y,M,u,v.remove_map)}ye[1]!==Sn&&(r[ye[1]]=M),s[f]=m,r[f]=ye[0]}t.length=0,e.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(t){const e=Oy(this.component_count++),n=Object.keys(t),s=new Array(n.length),r=Object.create(null);for(let o=0;o<n.length;o++)r[n[o]]=o,s[o]=t[n[o]];return this.component_metas.push({field_names:n,field_index:r,field_types:s}),e}add_component(t,e,n){if(!this.is_alive(t))return;const s=nn(t),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(e)){o.write_fields(this.entity_row[s],e,n);return}const a=this.arch_resolve_add(r,e),l=this.arch_get(a),c=this.entity_row[s];let u;if(c!==Dn){const f=o.get_edge(e);!l.has_columns&&!o.has_columns?l.move_entity_from_tag(o,c,t):l.move_entity_from(o,c,t,f.add_map),u=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=c)}else u=l.has_columns?l.add_entity(t):l.add_entity_tag(t);l.write_fields(u,e,n),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let o=0;o<e.length;o++)r=this.arch_resolve_add(r,e[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),l=this.entity_row[n];let c;if(l!==Dn){const u=wo(o,a);a.move_entity_from(o,l,t,u),c=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=l)}else c=a.add_entity(t);for(let u=0;u<e.length;u++)a.write_fields(c,e[u].def,e[u].values??vr);this.entity_archetype[n]=r,this.entity_row[n]=c}else{const o=this.arch_get(s),a=this.entity_row[n];for(let l=0;l<e.length;l++)o.write_fields(a,e[l].def,e[l].values??vr)}}remove_component(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n],r=this.arch_get(s);if(!r.has_component(e))return;const o=this.arch_resolve_remove(s,e),a=this.arch_get(o),l=this.entity_row[n],c=r.get_edge(e);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,l,t):a.move_entity_from(r,l,t,c.remove_map),ye[1]!==Sn&&(this.entity_row[ye[1]]=l),this.entity_archetype[n]=o,this.entity_row[n]=ye[0]}remove_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let u=0;u<e.length;u++)r=this.arch_resolve_remove(r,e[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),l=this.entity_row[n],c=wo(o,a);a.move_entity_from(o,l,t,c),ye[1]!==Sn&&(this.entity_row[ye[1]]=l),this.entity_archetype[n]=r,this.entity_row[n]=ye[0]}has_component(t,e){if(!this.is_alive(t))return!1;const n=nn(t);return this.arch_get(this.entity_archetype[n]).has_component(e)}batch_add_component(t,e,n){if(t.length===0)return;const s=e;if(t.mask.has(s))return;const r=this.arch_resolve_add(t.id,s),o=this.arch_get(r),a=t.get_edge(s),l=t.length,c=this.entity_archetype,u=this.entity_row,f=o.bulk_move_all_from(t,a.add_map);for(let h=0;h<l;h++){const d=nn(o.entity_ids[f+h]);c[d]=r,u[d]=f+h}if(this.component_metas[s].field_names.length>0&&n)for(let h=0;h<l;h++)o.write_fields(f+h,s,n)}batch_remove_component(t,e){if(t.length===0)return;const n=e;if(!t.mask.has(n))return;const s=this.arch_resolve_remove(t.id,n),r=this.arch_get(s),o=t.get_edge(n),a=t.length,l=r.bulk_move_all_from(t,o.remove_map),c=this.entity_archetype,u=this.entity_row;for(let f=0;f<a;f++){const h=nn(r.entity_ids[l+f]);c[h]=s,u[h]=l+f}}get_entity_archetype(t){return this.arch_get(this.entity_archetype[nn(t)])}get_entity_row(t){return this.entity_row[nn(t)]}get_matching_archetypes(t,e,n){const s=t._words;let r=!1;for(let c=0;c<s.length;c++)if(s[c]!==0){r=!0;break}if(!r)return this.archetypes.filter(c=>(!e||!c.mask.overlaps(e))&&(!n||c.mask.overlaps(n)));let o,a=!1;for(let c=0;c<s.length;c++){let u=s[c];if(u===0)continue;const f=c<<Gi;for(;u!==0;){const h=u&-u>>>0,d=f+(Hi-Math.clz32(h));u^=h;const g=this.component_index.get(d);if(!g||g.size===0){a=!0;break}(!o||g.size<o.size)&&(o=g)}if(a)break}if(a||!o)return[];const l=[];for(const c of o){const u=this.arch_get(c);u.matches(t)&&(!e||!u.mask.overlaps(e))&&(!n||u.mask.overlaps(n))&&l.push(u)}return l}register_query(t,e,n){const s=this.get_matching_archetypes(t,e,n);return this.registered_queries.push({include_mask:t.copy(),exclude_mask:e?e.copy():null,any_of_mask:n?n.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(t){const e=By(this.event_count++),n=new zy(t);return this.event_channels.push(n),e}emit_event(t,e){this.event_channels[t].emit(e)}emit_signal(t){this.event_channels[t].emit_signal()}get_event_reader(t){return this.event_channels[t].reader}clear_events(){const t=this.event_channels;for(let e=0;e<t.length;e++)t[e].clear()}register_resource(t,e){const n=ky(this.resource_count++),s=new Vy(t,e);return this.resource_channels.push(s),n}get_resource_reader(t){return this.resource_channels[t].reader}get_resource_channel(t){return this.resource_channels[t]}}const Ka=["PRE_STARTUP","STARTUP","POST_STARTUP"],Ja=["PRE_UPDATE","UPDATE","POST_UPDATE"];class Xy{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let t=0;t<Ka.length;t++)this.label_systems.set(Ka[t],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let t=0;t<Ja.length;t++)this.label_systems.set(Ja[t],[])}add_systems(t,...e){for(const n of e){const s="system"in n?n.system:n,r="system"in n?n.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(t).push(o),this.system_index.set(s,t),this.sorted_cache.delete(t)}}remove_system(t){const e=this.system_index.get(t);if(e===void 0)return;const n=this.label_systems.get(e),s=n.findIndex(r=>r.descriptor===t);if(s!==-1){const r=n.length-1;s!==r&&(n[s]=n[r]),n.pop();for(const o of n)o.before.delete(t),o.after.delete(t)}this.system_index.delete(t),this.sorted_cache.delete(e)}run_startup(t){for(const e of Ka)this.run_label(e,t,Ty)}run_update(t,e){for(const n of Ja)this.run_label(n,t,e)}run_fixed_update(t,e){this.run_label("FIXED_UPDATE",t,e)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const t=[];for(const e of this.label_systems.values())for(const n of e)t.push(n.descriptor);return t}has_system(t){return this.system_index.has(t)}clear(){for(const t of this.label_systems.values())t.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(t,e,n){const s=this.get_sorted(t);for(let r=0;r<s.length;r++)s[r].fn(e,n);e.flush()}get_sorted(t){const e=this.sorted_cache.get(t);if(e!==void 0)return e;const n=this.label_systems.get(t),s=this.topological_sort(n,t);return this.sorted_cache.set(t,s),s}topological_sort(t,e){if(t.length===0)return[];const n=new Map,s=new Map,r=new Map,o=new Set;for(const c of t)n.set(c.descriptor,new Set),s.set(c.descriptor,0),r.set(c.descriptor,c.insertion_order),o.add(c.descriptor);for(const c of t){for(const u of c.before)o.has(u)&&(n.get(c.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of c.after)o.has(u)&&(n.get(u).add(c.descriptor),s.set(c.descriptor,s.get(c.descriptor)+1))}let a=[];for(const c of t)s.get(c.descriptor)===0&&a.push(c.descriptor);a.sort((c,u)=>r.get(u)-r.get(c));const l=[];for(;a.length>0;){const c=a.pop();l.push(c);for(const u of n.get(c)){const f=s.get(u)-1;s.set(u,f),f===0&&a.push(u)}a.sort((u,f)=>r.get(f)-r.get(u))}if(l.length!==t.length){const c=new Set(l),u=t.filter(f=>!c.has(f.descriptor)).map(f=>f.descriptor.name??`system_${f.descriptor.id}`);throw new _y(Hf.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${e}: [${u.join(", ")}]`)}return l}}const Sh=new WeakMap;function qy(i,t){let e=Sh.get(i);if(!e){e=Object.create(null);const{field_names:r}=i.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(e,r[o],{get(){return this._columns[a][this._row]},set(l){this._columns[a][this._row]=l},enumerable:!0,configurable:!1})}Sh.set(i,e)}const n=Object.create(e),s=new Array(i.columns.length);for(let r=0;r<i.columns.length;r++)s[r]=i.columns[r].buf;return n._columns=s,n._row=t,n}class Yy{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(t,e,n,s,r,o){this._archetypes=t,this._defs=e,this._resolver=n,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const t=this._archetypes;let e=0;for(let n=0;n<t.length;n++)e+=t[n].entity_count;return e}get archetypes(){return this._archetypes}*[Symbol.iterator](){const t=this._archetypes;for(let e=0;e<t.length;e++)t[e].entity_count>0&&(yield t[e])}and(...t){const e=this._include.copy(),n=this._defs.slice();for(let s=0;s<t.length;s++)e.has(t[s])||(e.set(t[s]),n.push(t[s]));return this._resolver._resolve_query(e,this._exclude,this._any_of,n)}not(...t){const e=this._exclude?this._exclude.copy():new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,e,this._any_of,this._defs)}any_of(...t){const e=this._any_of?this._any_of.copy():new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,this._exclude,e,this._defs)}}class jy{constructor(t){this._resolver=t}every(...t){const e=new ci;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(e,null,null,t)}}class $y{store;constructor(t){this.store=t}create_entity(){return this.store.create_entity()}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}ref(t,e){const n=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return qy(n.column_groups[t],s)}destroy_entity(t){return this.store.destroy_entity_deferred(t),this}add_component(t,e,n){return this.store.add_component_deferred(t,e,n??vr),this}remove_component(t,e){return this.store.remove_component_deferred(t,e),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}read(t){return this.store.get_event_reader(t)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}}const Zy=i=>Gr(i);class Ky{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ci;constructor(t){this.store=new Wy(t?.initial_capacity),this.schedule=new Xy,this.ctx=new $y(this.store),this._fixed_timestep=t?.fixed_timestep??Ey,this._max_fixed_steps=t?.max_fixed_steps??by}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(t){this._fixed_timestep=t}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(t,e){if(Array.isArray(t)){const n=e??"f64",s=Object.create(null);for(const r of t)s[r]=n;return this.store.register_component(s)}return this.store.register_component(t)}register_tag(){return this.store.register_component({})}register_event(t){return this.store.register_event(t)}register_signal(){return this.store.register_event([])}register_resource(t,e){return this.store.register_resource(t,e)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(t){this.store.destroy_entity_deferred(t)}is_alive(t){return this.store.is_alive(t)}get entity_count(){return this.store.entity_count}add_component(t,e,n){return this.store.add_component(t,e,n??vr),this}add_components(t,e){this.store.add_components(t,e)}remove_component(t,e){return this.store.remove_component(t,e),this}remove_components(t,...e){this.store.remove_components(t,e)}has_component(t,e){return this.store.has_component(t,e)}batch_add_component(t,e,n){this.store.batch_add_component(t,e,n)}batch_remove_component(t,e){this.store.batch_remove_component(t,e)}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}query(...t){const e=this.scratch_mask;e._words.fill(0);for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolve_query(e.copy(),null,null,t)}_resolve_query(t,e,n,s){const r=t.hash(),o=e?e.hash():0,a=n?n.hash():0,l=r^Math.imul(o,yy)^Math.imul(a,My)|0,c=this._find_cached(l,t,e,n);if(c!==void 0)return c.query;const u=this.store.register_query(t,e??void 0,n??void 0),f=new Yy(u,s,this,t.copy(),e?.copy()??null,n?.copy()??null);return qf(this.query_cache,l,{include_mask:t.copy(),exclude_mask:e?.copy()??null,any_of_mask:n?.copy()??null,query:f}),f}_find_cached(t,e,n,s){const r=this.query_cache.get(t);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(e)||!(n===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(n))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(t,e){let n;if(typeof t=="function")if(e!==void 0){const o=e(new jy(this)),a=this.ctx,l=t;n={fn:(c,u)=>l(o,a,u)}}else n={fn:t};else n=t;const s=Zy(this.next_system_id++),r=Object.freeze(Object.assign({id:s},n));return this.systems.add(r),r}add_systems(t,...e){return this.schedule.add_systems(t,...e),this}remove_system(t){this.schedule.remove_system(t),t.on_removed?.(),this.systems.delete(t)}get system_count(){return this.systems.size}startup(){for(const t of this.systems.values())t.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(t){if(this.schedule.has_fixed_systems()){this._accumulator+=t;const e=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>e&&(this._accumulator=e);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,t),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const t of this.systems.values())t.dispose?.(),t.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Jy{#t;#n;constructor(){const[t,e]=Xd({});this.#t=t,this.#n=e}track(t){t in this.#t||queueMicrotask(()=>{this.#n(e=>(e[t]=0,e))}),this.#t[t]}untrack(t){this.#n(e=>(delete e[t],e))}dirty(t){t in this.#t&&this.#n(e=>(e[t]=1-e[t],e))}}class oc{#t;#n;#e;#s;#i=0;#r=!1;#o;constructor(t,e,n,s,r){this.#e=t,this.#s=e,this.#t=n,this.#n=s,this.#o=r}get value(){return this.#e.track(this.#s),Ye()!==null&&(this.#i++,this.#r||(this.#r=!0,na(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#t()}dirty(){this.#n()}}class Qy{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#i=`resource:${e.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(t){if(Ye()===null)return this.#e[t];const n=`${this.#i}:${t}`;let s=this.#s.get(t);return s===void 0&&(s=new oc(this.#t,n,()=>this.#e[t],()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(t)}),this.#s.set(t,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(t){return this.#r(t)}}class tM{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#s=new Map,this.#i=new Map}get id(){return this.#e}hasComponent(t){if(Ye()===null)return this.#n.has_component(this.#e,t);const n=`entity:${this.#e}:has:${t}`;let s=this.#s.get(n);return s===void 0&&(s=new oc(this.#t,n,()=>this.#n.has_component(this.#e,t),()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(n)}),this.#s.set(n,s)),s.value}getField(t,e){if(Ye()===null)return this.#n.get_field(this.#e,t,e);const s=`entity:${this.#e}:${t}:${e}`;let r=this.#i.get(s);return r===void 0&&(r=new oc(this.#t,s,()=>this.#n.get_field(this.#e,t,e),()=>this.#t.dirty(s),()=>{this.#t.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class yr{#t;#n;#e;#s;#i;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#s=n,this.#i=s,this.#e=e.query(...n)}get queryKey(){return this.#i}get archetype_count(){return Ye()===null?this.#e.archetype_count:(this.#t.track(`${this.#i}:archetype_count`),this.#e.archetype_count)}count(){return Ye()===null?this.#e.count():(this.#t.track(`${this.#i}:count`),this.#t.track("world:entities"),this.#e.count())}get archetypes(){return Ye()===null?this.#e.archetypes:(this.#t.track(`${this.#i}:archetypes`),this.#t.track("world:entities"),this.#e.archetypes)}*[Symbol.iterator](){const t=Ye();if(this.#e.archetypes,t===null){for(const e of this.#e)yield e;return}this.#t.track(`${this.#i}:archetypes`);for(const e of this.#e)yield new eM(this.#t,this.#n,e,this.#i)}and(...t){return new yr(this.#t,this.#n,[...this.#s,...t],`${this.#i}:and`)}not(...t){return new yr(this.#t,this.#n,this.#s,`${this.#i}:not`)}any_of(...t){return new yr(this.#t,this.#n,this.#s,`${this.#i}:any_of`)}}class eM{#t;#n;#e;#s;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#e=n,this.#s=s}get entity_ids(){if(Ye()===null)return this.#e.entity_ids;const e=`arch:${this.#e.id}:entity_ids`;return this.#t.track(e),this.#e.entity_ids}get entity_count(){if(Ye()===null)return this.#e.entity_count;const e=`arch:${this.#e.id}:count`;return this.#t.track(e),this.#e.entity_count}has_component(t){if(Ye()===null)return this.#e.has_component(t);const n=`arch:${this.#e.id}:has:${t}`;return this.#t.track(n),this.#e.has_component(t)}get_column(t,e){if(Ye()===null)return this.#e.get_column(t,e);const s=`arch:${this.#e.id}:col`;return this.#t.track(s),this.#e.get_column(t,e)}}class nM{#t;#n;constructor(t){this.#t=t,this.#n=new Jy}get ecs(){return this.#t}dirty(t){this.#n.dirty(t)}query(...t){const e=`query:${t.map(n=>n.toString()).join(",")}`;return new yr(this.#n,this.#t,t,e)}resource(t){return new Qy(this.#n,t,this.#t.resource(t))}entity(t){return new tM(this.#n,this.#t,t)}create_entity(){const t=this.#t.create_entity();return on(()=>this.#n.dirty("world:entities")),t}destroy_entity_deferred(t){this.#t.destroy_entity_deferred(t),on(()=>this.#n.dirty("world:entities"))}add_component(t,e,n){const s=`entity:${t}:has:${e}`;return this.#t.add_component(t,e,n),on(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(t,e){const n=`entity:${t}:has:${e}`;return this.#t.remove_component(t,e),on(()=>{this.#n.dirty(n),this.#n.dirty("world:entities")}),this}set_field(t,e,n,s){const r=`entity:${t}:${e}:${n}`;this.#t.set_field(t,e,n,s),on(()=>this.#n.dirty(r))}set_resource(t,e){const n=this.#t.resource(t);this.#t.set_resource(t,e);for(const s of Object.keys(n))this.#n.dirty(`resource:${t.toString()}:${s}`)}}const iM={def:{x:"f64",y:"f64",z:"f64"}},sM={def:{x:"f64",y:"f64",z:"f64"}},rM={def:{x:"f64",y:"f64",z:"f64",w:"f64"}},oM={def:{playerType:"u8",facingForward:"u8"}},aM={def:[]},lM={def:{meshId:"u32"}},cM={def:{speed:"f64"}},uM={schema:{x:0,y:-10,z:0}},Cn=new Ky,hM=new nM(Cn),Ke=Cn.register_component(iM.def),Wi=Cn.register_component(sM.def),Ie=Cn.register_component(rM.def),Oo=Cn.register_component(oM.def);Cn.register_component(aM.def);Cn.register_component(lM.def);const ac=Cn.register_component(cM.def),Yf=Cn.register_resource(["x","y","z"],uM.schema);function fM(){return Cn.startup(),Cn.set_resource(Yf,{x:0,y:-10,z:0}),{ecs:hM}}function dM(i){const t=i.reactiveEcs,e=t.create_entity();return t.add_component(e,Ke,{x:i.position.x,y:i.position.y,z:i.position.z}),t.add_component(e,Wi,{x:i.velocity.x,y:i.velocity.y,z:i.velocity.z}),t.add_component(e,Ie,{x:0,y:0,z:0,w:1}),t.add_component(e,Oo,{playerType:1,facingForward:1}),t.add_component(e,ac,{speed:0}),e}const pM=rn;class Ko extends ra{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){const r=this,o=new Df(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){const e=this;function n(K,V){if(K.nodeType!==1)return;const w=_(K);let R=!1,O=null;switch(K.nodeName){case"svg":V=g(K,V);break;case"style":r(K);break;case"g":V=g(K,V);break;case"path":V=g(K,V),K.hasAttribute("d")&&(O=s(K));break;case"rect":V=g(K,V),O=l(K);break;case"polygon":V=g(K,V),O=c(K);break;case"polyline":V=g(K,V),O=u(K);break;case"circle":V=g(K,V),O=f(K);break;case"ellipse":V=g(K,V),O=h(K);break;case"line":V=g(K,V),O=d(K);break;case"defs":R=!0;break;case"use":V=g(K,V);const it=(K.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),yt=K.viewportElement.getElementById(it);yt?n(yt,V):console.warn("SVGLoader: 'use node' references non-existent node id: "+it);break}O&&(V.fill!==void 0&&V.fill!=="none"&&O.color.setStyle(V.fill,pM),b(O,St),U.push(O),O.userData={node:K,style:V});const nt=K.childNodes;for(let $=0;$<nt.length;$++){const it=nt[$];R&&it.nodeName!=="style"&&it.nodeName!=="defs"||n(it,V)}w&&(X.pop(),X.length>0?St.copy(X[X.length-1]):St.identity())}function s(K){const V=new Bi,w=new ut,R=new ut,O=new ut;let nt=!0,$=!1;const it=K.getAttribute("d");if(it===""||it==="none")return null;const yt=it.match(/[a-df-z][^a-df-z]*/ig);for(let ft=0,k=yt.length;ft<k;ft++){const j=yt[ft],J=j.charAt(0),et=j.slice(1).trim();nt===!0&&($=!0,nt=!1);let E;switch(J){case"M":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,D===0?V.moveTo(w.x,w.y):V.lineTo(w.x,w.y),D===0&&O.copy(w);break;case"H":E=m(et);for(let D=0,lt=E.length;D<lt;D++)w.x=E[D],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"V":E=m(et);for(let D=0,lt=E.length;D<lt;D++)w.y=E[D],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"L":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"C":E=m(et);for(let D=0,lt=E.length;D<lt;D+=6)V.bezierCurveTo(E[D+0],E[D+1],E[D+2],E[D+3],E[D+4],E[D+5]),R.x=E[D+2],R.y=E[D+3],w.x=E[D+4],w.y=E[D+5],D===0&&$===!0&&O.copy(w);break;case"S":E=m(et);for(let D=0,lt=E.length;D<lt;D+=4)V.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&$===!0&&O.copy(w);break;case"Q":E=m(et);for(let D=0,lt=E.length;D<lt;D+=4)V.quadraticCurveTo(E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&$===!0&&O.copy(w);break;case"T":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2){const vt=y(w.x,R.x),pt=y(w.y,R.y);V.quadraticCurveTo(vt,pt,E[D+0],E[D+1]),R.x=vt,R.y=pt,w.x=E[D+0],w.y=E[D+1],D===0&&$===!0&&O.copy(w)}break;case"A":E=m(et,[3,4],7);for(let D=0,lt=E.length;D<lt;D+=7){if(E[D+5]==w.x&&E[D+6]==w.y)continue;const vt=w.clone();w.x=E[D+5],w.y=E[D+6],R.x=w.x,R.y=w.y,o(V,E[D],E[D+1],E[D+2],E[D+3],E[D+4],vt,w),D===0&&$===!0&&O.copy(w)}break;case"m":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,D===0?V.moveTo(w.x,w.y):V.lineTo(w.x,w.y),D===0&&O.copy(w);break;case"h":E=m(et);for(let D=0,lt=E.length;D<lt;D++)w.x+=E[D],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"v":E=m(et);for(let D=0,lt=E.length;D<lt;D++)w.y+=E[D],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"l":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,V.lineTo(w.x,w.y),D===0&&$===!0&&O.copy(w);break;case"c":E=m(et);for(let D=0,lt=E.length;D<lt;D+=6)V.bezierCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3],w.x+E[D+4],w.y+E[D+5]),R.x=w.x+E[D+2],R.y=w.y+E[D+3],w.x+=E[D+4],w.y+=E[D+5],D===0&&$===!0&&O.copy(w);break;case"s":E=m(et);for(let D=0,lt=E.length;D<lt;D+=4)V.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&$===!0&&O.copy(w);break;case"q":E=m(et);for(let D=0,lt=E.length;D<lt;D+=4)V.quadraticCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&$===!0&&O.copy(w);break;case"t":E=m(et);for(let D=0,lt=E.length;D<lt;D+=2){const vt=y(w.x,R.x),pt=y(w.y,R.y);V.quadraticCurveTo(vt,pt,w.x+E[D+0],w.y+E[D+1]),R.x=vt,R.y=pt,w.x=w.x+E[D+0],w.y=w.y+E[D+1],D===0&&$===!0&&O.copy(w)}break;case"a":E=m(et,[3,4],7);for(let D=0,lt=E.length;D<lt;D+=7){if(E[D+5]==0&&E[D+6]==0)continue;const vt=w.clone();w.x+=E[D+5],w.y+=E[D+6],R.x=w.x,R.y=w.y,o(V,E[D],E[D+1],E[D+2],E[D+3],E[D+4],vt,w),D===0&&$===!0&&O.copy(w)}break;case"Z":case"z":V.currentPath.autoClose=!0,V.currentPath.curves.length>0&&(w.copy(O),V.currentPath.currentPoint.copy(w),nt=!0);break;default:console.warn(j)}$=!1}return V}function r(K){if(!(!K.sheet||!K.sheet.cssRules||!K.sheet.cssRules.length))for(let V=0;V<K.sheet.cssRules.length;V++){const w=K.sheet.cssRules[V];if(w.type!==1)continue;const R=w.selectorText.split(/,/gm).filter(Boolean).map(O=>O.trim());for(let O=0;O<R.length;O++){const nt=Object.fromEntries(Object.entries(w.style).filter(([,$])=>$!==""));z[R[O]]=Object.assign(z[R[O]]||{},nt)}}}function o(K,V,w,R,O,nt,$,it){if(V==0||w==0){K.lineTo(it.x,it.y);return}R=R*Math.PI/180,V=Math.abs(V),w=Math.abs(w);const yt=($.x-it.x)/2,ft=($.y-it.y)/2,k=Math.cos(R)*yt+Math.sin(R)*ft,j=-Math.sin(R)*yt+Math.cos(R)*ft;let J=V*V,et=w*w;const E=k*k,D=j*j,lt=E/J+D/et;if(lt>1){const gt=Math.sqrt(lt);V=gt*V,w=gt*w,J=V*V,et=w*w}const vt=J*D+et*E,pt=(J*et-vt)/vt;let I=Math.sqrt(Math.max(0,pt));O===nt&&(I=-I);const S=I*V*j/w,H=-I*w*k/V,st=Math.cos(R)*S-Math.sin(R)*H+($.x+it.x)/2,dt=Math.sin(R)*S+Math.cos(R)*H+($.y+it.y)/2,ot=a(1,0,(k-S)/V,(j-H)/w),Pt=a((k-S)/V,(j-H)/w,(-k-S)/V,(-j-H)/w)%(Math.PI*2);K.currentPath.absellipse(st,dt,V,w,ot,ot+Pt,nt===0,R)}function a(K,V,w,R){const O=K*w+V*R,nt=Math.sqrt(K*K+V*V)*Math.sqrt(w*w+R*R);let $=Math.acos(Math.max(-1,Math.min(1,O/nt)));return K*R-V*w<0&&($=-$),$}function l(K){const V=v(K.getAttribute("x")||0),w=v(K.getAttribute("y")||0),R=v(K.getAttribute("rx")||K.getAttribute("ry")||0),O=v(K.getAttribute("ry")||K.getAttribute("rx")||0),nt=v(K.getAttribute("width")),$=v(K.getAttribute("height")),it=1-.551915024494,yt=new Bi;return yt.moveTo(V+R,w),yt.lineTo(V+nt-R,w),(R!==0||O!==0)&&yt.bezierCurveTo(V+nt-R*it,w,V+nt,w+O*it,V+nt,w+O),yt.lineTo(V+nt,w+$-O),(R!==0||O!==0)&&yt.bezierCurveTo(V+nt,w+$-O*it,V+nt-R*it,w+$,V+nt-R,w+$),yt.lineTo(V+R,w+$),(R!==0||O!==0)&&yt.bezierCurveTo(V+R*it,w+$,V,w+$-O*it,V,w+$-O),yt.lineTo(V,w+O),(R!==0||O!==0)&&yt.bezierCurveTo(V,w+O*it,V+R*it,w,V+R,w),yt}function c(K){function V(nt,$,it){const yt=v($),ft=v(it);O===0?R.moveTo(yt,ft):R.lineTo(yt,ft),O++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Bi;let O=0;return K.getAttribute("points").replace(w,V),R.currentPath.autoClose=!0,R}function u(K){function V(nt,$,it){const yt=v($),ft=v(it);O===0?R.moveTo(yt,ft):R.lineTo(yt,ft),O++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Bi;let O=0;return K.getAttribute("points").replace(w,V),R.currentPath.autoClose=!1,R}function f(K){const V=v(K.getAttribute("cx")||0),w=v(K.getAttribute("cy")||0),R=v(K.getAttribute("r")||0),O=new Os;O.absarc(V,w,R,0,Math.PI*2);const nt=new Bi;return nt.subPaths.push(O),nt}function h(K){const V=v(K.getAttribute("cx")||0),w=v(K.getAttribute("cy")||0),R=v(K.getAttribute("rx")||0),O=v(K.getAttribute("ry")||0),nt=new Os;nt.absellipse(V,w,R,O,0,Math.PI*2);const $=new Bi;return $.subPaths.push(nt),$}function d(K){const V=v(K.getAttribute("x1")||0),w=v(K.getAttribute("y1")||0),R=v(K.getAttribute("x2")||0),O=v(K.getAttribute("y2")||0),nt=new Bi;return nt.moveTo(V,w),nt.lineTo(R,O),nt.currentPath.autoClose=!1,nt}function g(K,V){V=Object.assign({},V);let w={};if(K.hasAttribute("class")){const $=K.getAttribute("class").split(/\s/).filter(Boolean).map(it=>it.trim());for(let it=0;it<$.length;it++)w=Object.assign(w,z["."+$[it]])}K.hasAttribute("id")&&(w=Object.assign(w,z["#"+K.getAttribute("id")]));function R($,it,yt){yt===void 0&&(yt=function(k){return k.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),k}),K.hasAttribute($)&&(V[it]=yt(K.getAttribute($))),w[it]&&(V[it]=yt(w[it])),K.style&&K.style[$]!==""&&(V[it]=yt(K.style[$]))}function O($){return Math.max(0,Math.min(1,v($)))}function nt($){return Math.max(0,v($))}return R("fill","fill"),R("fill-opacity","fillOpacity",O),R("fill-rule","fillRule"),R("opacity","opacity",O),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",O),R("stroke-width","strokeWidth",nt),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",nt),R("visibility","visibility"),V}function y(K,V){return K-(V-K)}function m(K,V,w){if(typeof K!="string")throw new TypeError("Invalid input: "+typeof K);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},O=0,nt=1,$=2,it=3;let yt=O,ft=!0,k="",j="";const J=[];function et(vt,pt,I){const S=new SyntaxError('Unexpected character "'+vt+'" at index '+pt+".");throw S.partial=I,S}function E(){k!==""&&(j===""?J.push(Number(k)):J.push(Number(k)*Math.pow(10,Number(j)))),k="",j=""}let D;const lt=K.length;for(let vt=0;vt<lt;vt++){if(D=K[vt],Array.isArray(V)&&V.includes(J.length%w)&&R.FLAGS.test(D)){yt=nt,k=D,E();continue}if(yt===O){if(R.WHITESPACE.test(D))continue;if(R.DIGIT.test(D)||R.SIGN.test(D)){yt=nt,k=D;continue}if(R.POINT.test(D)){yt=$,k=D;continue}R.COMMA.test(D)&&(ft&&et(D,vt,J),ft=!0)}if(yt===nt){if(R.DIGIT.test(D)){k+=D;continue}if(R.POINT.test(D)){k+=D,yt=$;continue}if(R.EXP.test(D)){yt=it;continue}R.SIGN.test(D)&&k.length===1&&R.SIGN.test(k[0])&&et(D,vt,J)}if(yt===$){if(R.DIGIT.test(D)){k+=D;continue}if(R.EXP.test(D)){yt=it;continue}R.POINT.test(D)&&k[k.length-1]==="."&&et(D,vt,J)}if(yt===it){if(R.DIGIT.test(D)){j+=D;continue}if(R.SIGN.test(D)){if(j===""){j+=D;continue}j.length===1&&R.SIGN.test(j)&&et(D,vt,J)}}R.WHITESPACE.test(D)?(E(),yt=O,ft=!1):R.COMMA.test(D)?(E(),yt=O,ft=!0):R.SIGN.test(D)?(E(),yt=nt,k=D):R.POINT.test(D)?(E(),yt=$,k=D):et(D,vt,J)}return E(),J}const p=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(K){let V="px";if(typeof K=="string"||K instanceof String)for(let R=0,O=p.length;R<O;R++){const nt=p[R];if(K.endsWith(nt)){V=nt,K=K.substring(0,K.length-nt.length);break}}let w;return V==="px"&&e.defaultUnit!=="px"?w=M.in[e.defaultUnit]/e.defaultDPI:(w=M[V][e.defaultUnit],w<0&&(w=M[V].in*e.defaultDPI)),w*parseFloat(K)}function _(K){if(!(K.hasAttribute("transform")||K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))))return null;const V=A(K);return X.length>0&&V.premultiply(X[X.length-1]),St.copy(V),X.push(V),V}function A(K){const V=new Xt,w=G;if(K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))){const R=v(K.getAttribute("x")||0),O=v(K.getAttribute("y")||0);V.translate(R,O)}if(K.hasAttribute("transform")){const R=K.getAttribute("transform").split(")");for(let O=R.length-1;O>=0;O--){const nt=R[O].trim();if(nt==="")continue;const $=nt.indexOf("("),it=nt.length;if($>0&&$<it){const yt=nt.slice(0,$),ft=m(nt.slice($+1));switch(w.identity(),yt){case"translate":if(ft.length>=1){const k=ft[0];let j=0;ft.length>=2&&(j=ft[1]),w.translate(k,j)}break;case"rotate":if(ft.length>=1){let k=0,j=0,J=0;k=ft[0]*Math.PI/180,ft.length>=3&&(j=ft[1],J=ft[2]),W.makeTranslation(-j,-J),F.makeRotation(k),q.multiplyMatrices(F,W),W.makeTranslation(j,J),w.multiplyMatrices(W,q)}break;case"scale":if(ft.length>=1){const k=ft[0];let j=k;ft.length>=2&&(j=ft[1]),w.scale(k,j)}break;case"skewX":ft.length===1&&w.set(1,Math.tan(ft[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ft.length===1&&w.set(1,0,0,Math.tan(ft[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ft.length===6&&w.set(ft[0],ft[2],ft[4],ft[1],ft[3],ft[5],0,0,1);break}}V.premultiply(w)}}return V}function b(K,V){function w($){ht.set($.x,$.y,1).applyMatrix3(V),$.set(ht.x,ht.y)}function R($){const it=$.xRadius,yt=$.yRadius,ft=Math.cos($.aRotation),k=Math.sin($.aRotation),j=new B(it*ft,it*k,0),J=new B(-yt*k,yt*ft,0),et=j.applyMatrix3(V),E=J.applyMatrix3(V),D=G.set(et.x,E.x,0,et.y,E.y,0,0,0,1),lt=W.copy(D).invert(),I=F.copy(lt).transpose().multiply(lt).elements,S=L(I[0],I[1],I[4]),H=Math.sqrt(S.rt1),st=Math.sqrt(S.rt2);if($.xRadius=1/H,$.yRadius=1/st,$.aRotation=Math.atan2(S.sn,S.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ot=W.set(H,0,0,0,st,0,0,0,1),Pt=F.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),gt=ot.multiply(Pt).multiply(D),It=Ft=>{const{x:mt,y:Et}=new B(Math.cos(Ft),Math.sin(Ft),0).applyMatrix3(gt);return Math.atan2(Et,mt)};$.aStartAngle=It($.aStartAngle),$.aEndAngle=It($.aEndAngle),C(V)&&($.aClockwise=!$.aClockwise)}}function O($){const it=T(V),yt=N(V);$.xRadius*=it,$.yRadius*=yt;const ft=it>Number.EPSILON?Math.atan2(V.elements[1],V.elements[0]):Math.atan2(-V.elements[3],V.elements[4]);$.aRotation+=ft,C(V)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const nt=K.subPaths;for(let $=0,it=nt.length;$<it;$++){const ft=nt[$].curves;for(let k=0;k<ft.length;k++){const j=ft[k];j.isLineCurve?(w(j.v1),w(j.v2)):j.isCubicBezierCurve?(w(j.v0),w(j.v1),w(j.v2),w(j.v3)):j.isQuadraticBezierCurve?(w(j.v0),w(j.v1),w(j.v2)):j.isEllipseCurve&&(at.set(j.aX,j.aY),w(at),j.aX=at.x,j.aY=at.y,x(V)?R(j):O(j))}}}function C(K){const V=K.elements;return V[0]*V[4]-V[1]*V[3]<0}function x(K){const V=K.elements,w=V[0]*V[3]+V[1]*V[4];if(w===0)return!1;const R=T(K),O=N(K);return Math.abs(w/(R*O))>Number.EPSILON}function T(K){const V=K.elements;return Math.sqrt(V[0]*V[0]+V[1]*V[1])}function N(K){const V=K.elements;return Math.sqrt(V[3]*V[3]+V[4]*V[4])}function L(K,V,w){let R,O,nt,$,it;const yt=K+w,ft=K-w,k=Math.sqrt(ft*ft+4*V*V);return yt>0?(R=.5*(yt+k),it=1/R,O=K*it*w-V*it*V):yt<0?O=.5*(yt-k):(R=.5*k,O=-.5*k),ft>0?nt=ft+k:nt=ft-k,Math.abs(nt)>2*Math.abs(V)?(it=-2*V/nt,$=1/Math.sqrt(1+it*it),nt=it*$):Math.abs(V)===0?(nt=1,$=0):(it=-.5*nt/V,nt=1/Math.sqrt(1+it*it),$=it*nt),ft>0&&(it=nt,nt=-$,$=it),{rt1:R,rt2:O,cs:nt,sn:$}}const U=[],z={},X=[],G=new Xt,W=new Xt,F=new Xt,q=new Xt,at=new ut,ht=new B,St=new Xt,xt=new DOMParser().parseFromString(t,"image/svg+xml");return n(xt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:xt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,m,p,M){const v=y.x,_=m.x,A=p.x,b=M.x,C=y.y,x=m.y,T=p.y,N=M.y,L=(b-A)*(C-T)-(N-T)*(v-A),U=(_-v)*(C-T)-(x-C)*(v-A),z=(N-T)*(_-v)-(b-A)*(x-C),X=L/z,G=U/z;if(z===0&&L!==0||X<=0||X>=1||G<0||G>1)return null;if(L===0&&z===0){for(let W=0;W<2;W++)if(o(W===0?p:M,y,m),s.loc==n.ORIGIN){const F=W===0?p:M;return{x:F.x,y:F.y,t:s.t}}else if(s.loc==n.BETWEEN){const F=+(v+s.t*(_-v)).toPrecision(10),q=+(C+s.t*(x-C)).toPrecision(10);return{x:F,y:q,t:s.t}}return null}else{for(let q=0;q<2;q++)if(o(q===0?p:M,y,m),s.loc==n.ORIGIN){const at=q===0?p:M;return{x:at.x,y:at.y,t:s.t}}const W=+(v+X*(_-v)).toPrecision(10),F=+(C+X*(x-C)).toPrecision(10);return{x:W,y:F,t:X}}}function o(y,m,p){const M=p.x-m.x,v=p.y-m.y,_=y.x-m.x,A=y.y-m.y,b=M*A-_*v;if(y.x===m.x&&y.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===p.x&&y.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(b<-Number.EPSILON){s.loc=n.LEFT;return}if(b>Number.EPSILON){s.loc=n.RIGHT;return}if(M*_<0||v*A<0){s.loc=n.BEHIND;return}if(Math.sqrt(M*M+v*v)<Math.sqrt(_*_+A*A)){s.loc=n.BEYOND;return}let C;M!==0?C=_/M:C=A/v,s.loc=n.BETWEEN,s.t=C}function a(y,m){const p=[],M=[];for(let v=1;v<y.length;v++){const _=y[v-1],A=y[v];for(let b=1;b<m.length;b++){const C=m[b-1],x=m[b],T=r(_,A,C,x);T!==null&&p.find(N=>N.t<=T.t+Number.EPSILON&&N.t>=T.t-Number.EPSILON)===void 0&&(p.push(T),M.push(new ut(T.x,T.y)))}}return M}function l(y,m,p){const M=new ut;m.getCenter(M);const v=[];return p.forEach(_=>{_.boundingBox.containsPoint(M)&&a(y,_.points).forEach(b=>{v.push({identifier:_.identifier,isCW:_.isCW,point:b})})}),v.sort((_,A)=>_.point.x-A.point.x),v}function c(y,m,p,M,v){(v==null||v==="")&&(v="nonzero");const _=new ut;y.boundingBox.getCenter(_);const A=[new ut(p,_.y),new ut(M,_.y)],b=l(A,y.boundingBox,m);b.sort((U,z)=>U.point.x-z.point.x);const C=[],x=[];b.forEach(U=>{U.identifier===y.identifier?C.push(U):x.push(U)});const T=C[0].point.x,N=[];let L=0;for(;L<x.length&&x[L].point.x<T;)N.length>0&&N[N.length-1]===x[L].identifier?N.pop():N.push(x[L].identifier),L++;if(N.push(y.identifier),v==="evenodd"){const U=N.length%2===0,z=N[N.length-2];return{identifier:y.identifier,isHole:U,for:z}}else if(v==="nonzero"){let U=!0,z=null,X=null;for(let G=0;G<N.length;G++){const W=N[G];U?(X=m[W].isCW,U=!1,z=W):X!==m[W].isCW&&(X=m[W].isCW,U=!0)}return{identifier:y.identifier,isHole:U,for:z}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,f=-999999999,h=t.subPaths.map(y=>{const m=y.getPoints();let p=-999999999,M=999999999,v=-999999999,_=999999999;for(let A=0;A<m.length;A++){const b=m[A];b.y>p&&(p=b.y),b.y<M&&(M=b.y),b.x>v&&(v=b.x),b.x<_&&(_=b.x)}return f<=v&&(f=v+1),u>=_&&(u=_-1),{curves:y.curves,points:m,isCW:bi.isClockWise(m),identifier:-1,boundingBox:new pg(new ut(_,M),new ut(v,p))}});h=h.filter(y=>y.points.length>1);for(let y=0;y<h.length;y++)h[y].identifier=y;const d=h.map(y=>c(y,h,u,f,t.userData?t.userData.style.fillRule:void 0)),g=[];return h.forEach(y=>{if(!d[y.identifier].isHole){const p=new ts;p.curves=y.curves,d.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{const _=h[v.identifier],A=new Os;A.curves=_.curves,p.holes.push(A)}),g.push(p)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){const r=[],o=[],a=[];if(Ko.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;const l=new be;return l.setAttribute("position",new Qt(r,3)),l.setAttribute("normal",new Qt(o,3)),l.setAttribute("uv",new Qt(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){const c=new ut,u=new ut,f=new ut,h=new ut,d=new ut,g=new ut,y=new ut,m=new ut,p=new ut,M=new ut,v=new ut,_=new ut,A=new ut,b=new ut,C=new ut,x=new ut,T=new ut;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=ft(t);const N=t.length;if(N<2)return 0;const L=t[0].equals(t[N-1]);let U,z=t[0],X;const G=e.strokeWidth/2,W=1/(N-1);let F=0,q,at,ht,St,xt=!1,Bt=0,K=l*3,V=l*2;w(t[0],t[1],c).multiplyScalar(G),m.copy(t[0]).sub(c),p.copy(t[0]).add(c),M.copy(m),v.copy(p);for(let k=1;k<N;k++){U=t[k],k===N-1?L?X=t[1]:X=void 0:X=t[k+1];const j=c;if(w(z,U,j),f.copy(j).multiplyScalar(G),_.copy(U).sub(f),A.copy(U).add(f),q=F+W,at=!1,X!==void 0){w(U,X,u),f.copy(u).multiplyScalar(G),b.copy(U).sub(f),C.copy(U).add(f),ht=!0,f.subVectors(X,z),j.dot(f)<0&&(ht=!1),k===1&&(xt=ht),f.subVectors(X,U),f.normalize();const J=Math.abs(j.dot(f));if(J>Number.EPSILON){const et=G/J;f.multiplyScalar(-et),h.subVectors(U,z),d.copy(h).setLength(et).add(f),x.copy(d).negate();const E=d.length(),D=h.length();h.divideScalar(D),g.subVectors(X,U);const lt=g.length();switch(g.divideScalar(lt),h.dot(x)<D&&g.dot(x)<lt&&(at=!0),T.copy(d).add(U),x.add(U),St=!1,at?ht?(C.copy(x),A.copy(x)):(b.copy(x),_.copy(x)):nt(),e.strokeLineJoin){case"bevel":$(ht,at,q);break;case"round":it(ht,at),ht?O(U,_,b,q,0):O(U,C,A,q,1);break;default:const vt=G*e.strokeMiterLimit/E;if(vt<1)if(e.strokeLineJoin!=="miter-clip"){$(ht,at,q);break}else it(ht,at),ht?(g.subVectors(T,_).multiplyScalar(vt).add(_),y.subVectors(T,b).multiplyScalar(vt).add(b),R(_,q,0),R(g,q,0),R(U,q,.5),R(U,q,.5),R(g,q,0),R(y,q,0),R(U,q,.5),R(y,q,0),R(b,q,0)):(g.subVectors(T,A).multiplyScalar(vt).add(A),y.subVectors(T,C).multiplyScalar(vt).add(C),R(A,q,1),R(g,q,1),R(U,q,.5),R(U,q,.5),R(g,q,1),R(y,q,1),R(U,q,.5),R(y,q,1),R(C,q,1));else at?(ht?(R(p,F,1),R(m,F,0),R(T,q,0),R(p,F,1),R(T,q,0),R(x,q,1)):(R(p,F,1),R(m,F,0),R(T,q,1),R(m,F,0),R(x,q,0),R(T,q,1)),ht?b.copy(T):C.copy(T)):ht?(R(_,q,0),R(T,q,0),R(U,q,.5),R(U,q,.5),R(T,q,0),R(b,q,0)):(R(A,q,1),R(T,q,1),R(U,q,.5),R(U,q,.5),R(T,q,1),R(C,q,1)),St=!0;break}}else nt()}else nt();!L&&k===N-1&&yt(t[0],M,v,ht,!0,F),F=q,z=U,m.copy(b),p.copy(C)}if(!L)yt(U,_,A,ht,!1,q);else if(at&&r){let k=T,j=x;xt!==ht&&(k=x,j=T),ht?(St||xt)&&(j.toArray(r,0),j.toArray(r,9),St&&k.toArray(r,3)):(St||!xt)&&(j.toArray(r,3),j.toArray(r,9),St&&k.toArray(r,0))}return Bt;function w(k,j,J){return J.subVectors(j,k),J.set(-J.y,J.x).normalize()}function R(k,j,J){r&&(r[K]=k.x,r[K+1]=k.y,r[K+2]=0,o&&(o[K]=0,o[K+1]=0,o[K+2]=1),K+=3,a&&(a[V]=j,a[V+1]=J,V+=2)),Bt+=3}function O(k,j,J,et,E){c.copy(j).sub(k).normalize(),u.copy(J).sub(k).normalize();let D=Math.PI;const lt=c.dot(u);Math.abs(lt)<1&&(D=Math.abs(Math.acos(lt))),D/=n,f.copy(j);for(let vt=0,pt=n-1;vt<pt;vt++)h.copy(f).rotateAround(k,D),R(f,et,E),R(h,et,E),R(k,et,.5),f.copy(h);R(h,et,E),R(J,et,E),R(k,et,.5)}function nt(){R(p,F,1),R(m,F,0),R(_,q,0),R(p,F,1),R(_,q,0),R(A,q,1)}function $(k,j,J){j?k?(R(p,F,1),R(m,F,0),R(_,q,0),R(p,F,1),R(_,q,0),R(x,q,1),R(_,J,0),R(b,J,0),R(x,J,.5)):(R(p,F,1),R(m,F,0),R(A,q,1),R(m,F,0),R(x,q,0),R(A,q,1),R(A,J,1),R(x,J,0),R(C,J,1)):k?(R(_,J,0),R(b,J,0),R(U,J,.5)):(R(A,J,1),R(C,J,0),R(U,J,.5))}function it(k,j){j&&(k?(R(p,F,1),R(m,F,0),R(_,q,0),R(p,F,1),R(_,q,0),R(x,q,1),R(_,F,0),R(U,q,.5),R(x,q,1),R(U,q,.5),R(b,F,0),R(x,q,1)):(R(p,F,1),R(m,F,0),R(A,q,1),R(m,F,0),R(x,q,0),R(A,q,1),R(A,F,1),R(x,q,0),R(U,q,.5),R(U,q,.5),R(x,q,0),R(C,F,1)))}function yt(k,j,J,et,E,D){switch(e.strokeLineCap){case"round":E?O(k,J,j,D,.5):O(k,j,J,D,.5);break;case"square":if(E)c.subVectors(j,k),u.set(c.y,-c.x),f.addVectors(c,u).add(k),h.subVectors(u,c).add(k),et?(f.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(f.toArray(r,3),a[7]===1?h.toArray(r,9):f.toArray(r,9),h.toArray(r,0));else{c.subVectors(J,k),u.set(c.y,-c.x),f.addVectors(c,u).add(k),h.subVectors(u,c).add(k);const lt=r.length;et?(f.toArray(r,lt-3),h.toArray(r,lt-6),h.toArray(r,lt-12)):(h.toArray(r,lt-6),f.toArray(r,lt-3),h.toArray(r,lt-12))}break}}function ft(k){let j=!1;for(let et=1,E=k.length-1;et<E;et++)if(k[et].distanceTo(k[et+1])<s){j=!0;break}if(!j)return k;const J=[];J.push(k[0]);for(let et=1,E=k.length-1;et<E;et++)k[et].distanceTo(k[et+1])>=s&&J.push(k[et]);return J.push(k[k.length-1]),J}}}function mM(){let i=new $e;const t=new we({color:5343944}),e=new we({color:7779297}),n=new we({color:16768256}),s=new we({color:16777215}),r=new we({color:0}),o=50,c=new Ko().parse('<svg><path d="m 135.55266,65.650453 a 45,45 0 0 0 -48.000001,-15 l -62,20 c 0,0 53,40.000007 94.000001,29.999997 l 3,-0.999997 c 17,-5 23,-21 13,-34 z"/></svg>'),f=Ko.createShapes(c.paths[0])[0],h=.006,d=new Ps(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});d.center();const g=new Zt(d,t);g.position.set(-.05,.16,0),g.scale.set(h,h,h),i.add(g);const y=new Ps(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});y.center();const m=new Zt(y,e);m.position.set(.05,-.16,0),m.rotation.z=Math.PI,m.scale.set(h,h,h),i.add(m);const p=new ts;p.moveTo(5,0),p.lineTo(-4,6),p.lineTo(-4,-3),p.closePath();const M=o+.8,v=new Ps(p,{bevelEnabled:!1,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:M});v.center(),i.rotation.x=Math.PI;let _=new $e;_.add(i);let A=new Ur(.1),b=new Zt(A,s);b.position.set(0,.16,.5*o*h),_.add(b);let C=new Ur(.03),x=new Zt(C,r);x.position.copy(b.position),x.position.z+=.1,_.add(x);let T=b.clone();T.position.z=-T.position.z,_.add(T);let N=x.clone();N.position.z=-N.position.z,_.add(N);let L=new $e,U=.03,z=new as(U,U,.3),X=new Zt(z,n);X.position.set(0,-.4,0);let G=new ts;G.moveTo(-.14,0),G.lineTo(.2,.08),G.lineTo(.2,-.08),G.closePath();let W=new Ps(G,{bevelEnabled:!1,depth:.04}),F=new Zt(W,n);F.rotateX(.5*Math.PI),F.position.set(0,-.51,0),L.add(X),L.add(F),L.position.set(0,0,.1),_.add(L);let q=L.clone();q.position.z=-q.position.z,_.add(q);const at=new Zt(v,n);at.position.set(.375,.14,0),at.scale.set(h,h,h),_.add(at);let ht=new $e;return _.rotateY(-.5*Math.PI),_.position.set(0,.55,0),ht.add(_),ht}const gM=/^[og]\s*(.+)?/,_M=/^mtllib /,xM=/^usemtl /,vM=/^usemap /,Eh=new B,Qa=new B,bh=new B,Th=new B,un=new B;function yM(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;Eh.fromArray(s,t),Qa.fromArray(s,e),bh.fromArray(s,n),un.subVectors(bh,Qa),Th.subVectors(Eh,Qa),un.cross(Th),un.normalize(),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(n,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class MM extends ra{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,o=new Df(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new yM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s="",r="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let f=0,h=n.length;f<h;f++)if(s=n[f],s=l?s.trimLeft():s.trim(),o=s.length,o!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const d=s.split(/\s+/);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?e.colors.push(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(r==="f"){const g=s.substr(1).trim().split(/\s+/),y=[];for(let p=0,M=g.length;p<M;p++){const v=g[p];if(v.length>0){const _=v.split("/");y.push(_)}}const m=y[0];for(let p=1,M=y.length-1;p<M;p++){const v=y[p],_=y[p+1];e.addFace(m[0],v[0],_[0],m[1],v[1],_[1],m[2],v[2],_[2])}}else if(r==="l"){const d=s.substring(1).trim().split(" ");let g=[];const y=[];if(s.indexOf("/")===-1)g=d;else for(let m=0,p=d.length;m<p;m++){const M=d[m].split("/");M[0]!==""&&g.push(M[0]),M[1]!==""&&y.push(M[1])}e.addLineGeometry(g,y)}else if(r==="p"){const g=s.substr(1).trim().split(" ");e.addPointGeometry(g)}else if((a=gM.exec(s))!==null){const d=(" "+a[0].substr(1).trim()).substr(1);e.startObject(d)}else if(xM.test(s))e.object.startMaterial(s.substring(7).trim(),e.materialLibraries);else if(_M.test(s))e.materialLibraries.push(s.substring(7).trim());else if(vM.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(a=s.split(" "),a.length>1){const g=a[1].trim().toLowerCase();e.object.smooth=g!=="0"&&g!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}e.finalize();const c=new $e;if(c.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=e.objects.length;f<h;f++){const d=e.objects[f],g=d.geometry,y=d.materials,m=g.type==="Line",p=g.type==="Points";let M=!1;if(g.vertices.length===0)continue;const v=new be;v.setAttribute("position",new Qt(g.vertices,3)),g.normals.length>0&&v.setAttribute("normal",new Qt(g.normals,3)),g.colors.length>0&&(M=!0,v.setAttribute("color",new Qt(g.colors,3))),g.hasUVIndices===!0&&v.setAttribute("uv",new Qt(g.uvs,2));const _=[];for(let b=0,C=y.length;b<C;b++){const x=y[b],T=x.name+"_"+x.smooth+"_"+M;let N=e.materials[T];if(this.materials!==null){if(N=this.materials.create(x.name),m&&N&&!(N instanceof No)){const L=new No;Rn.prototype.copy.call(L,N),L.color.copy(N.color),N=L}else if(p&&N&&!(N instanceof lr)){const L=new lr({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(L,N),L.color.copy(N.color),L.map=N.map,N=L}}N===void 0&&(m?N=new No:p?N=new lr({size:1,sizeAttenuation:!1}):N=new ng,N.name=x.name,N.flatShading=!x.smooth,N.vertexColors=M,e.materials[T]=N),_.push(N)}let A;if(_.length>1){for(let b=0,C=y.length;b<C;b++){const x=y[b];v.addGroup(x.groupStart,x.groupCount,b)}m?A=new Nu(v,_):p?A=new ka(v,_):A=new Zt(v,_)}else m?A=new Nu(v,_[0]):p?A=new ka(v,_[0]):A=new Zt(v,_[0]);A.name=d.name,c.add(A)}else if(e.vertices.length>0){const f=new lr({size:1,sizeAttenuation:!1}),h=new be;h.setAttribute("position",new Qt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(h.setAttribute("color",new Qt(e.colors,3)),f.vertexColors=!0);const d=new ka(h,f);c.add(d)}return c}}const ei=.45,ni=.45,As=.25,jf=.15,SM=200,EM=10,$f=.1;function bM(i){let{ecs:t,entityId:e,turnAmount:n,actionDown:s,driftDown:r}=i;const o=45,a=67.5,l=2,c=6,u=3,f=.98,h=.96,d=.92,g=[new B(-ei,As,ni),new B(ei,As,ni),new B(-ei,As,-ni),new B(ei,As,-ni)];let y=0,m=!1,p=0;return{update(M){t.resource(Yf).get("y");const _=t.entity(e).getField(Ke,"x"),A=t.entity(e).getField(Ke,"y"),b=t.entity(e).getField(Ke,"z"),C=t.entity(e).getField(Wi,"x"),x=t.entity(e).getField(Wi,"y"),T=t.entity(e).getField(Wi,"z"),N=t.entity(e).getField(Ie,"x"),L=t.entity(e).getField(Ie,"y"),U=t.entity(e).getField(Ie,"z"),z=t.entity(e).getField(Ie,"w"),X=t.entity(e).getField(ac,"speed"),G=new B(_,A,b),W=new B(C,x,T),F=new Vn(N,L,U,z);let q=new B(0,0,1).applyQuaternion(F);q.y=0,q.normalize();let at=new B(1,0,0).applyQuaternion(F);at.y=0,at.normalize();const ht=Math.sqrt(W.x*W.x+W.z*W.z);let St=o;y>0&&(St=a);let xt=X;s()?xt=Math.min(X+l*M,St):xt=Math.max(X-c*M,0),t.set_field(e,ac,"speed",xt);let Bt=-n()*u*M,K=0;n()<-.1?K=-1:n()>.1&&(K=1);const V=r()&&K!==0&&ht>3;if(V&&!m?(m=!0,y=0):!V&&m&&(y>1.5&&(xt=Math.min(xt*1.5,a)),m=!1,y=0),m){y+=M;const gt=Bt*2.5,It=new Vn().setFromAxisAngle(new B(0,1,0),gt);F.multiply(It)}else if(ht>.1){const gt=Bt*(xt/o),It=new Vn().setFromAxisAngle(new B(0,1,0),gt);F.multiply(It)}F.normalize();const w=new B(0,0,1).applyQuaternion(F);w.y=0,w.normalize();let R=w.multiplyScalar(xt);const O=m?h:f,nt=w.clone().multiplyScalar(W.dot(w)),$=W.clone().sub(nt).multiplyScalar(d);let it=nt.add($);const yt=it.length()>.01?O:1;it.multiplyScalar(yt),it.x+=(R.x-it.x)*(1-O)*M*10,it.z+=(R.z-it.z)*(1-O)*M*10;const ft=m&&y>1.5?a:o,k=Math.sqrt(it.x*it.x+it.z*it.z);if(k>ft){const gt=ft/k;it.x*=gt,it.z*=gt}let j=G.add(it.clone().multiplyScalar(M));const J=dy();if(J){const gt=Pi/2,It=py(j.x,j.z),Ft=gt;if(It>Ft&&It<50&&Number.isFinite(j.x)&&Number.isFinite(j.z)){let Et=0,Ut=0,Lt=1/0;for(let bt=0;bt<=800;bt++){const Mt=bt/800,Tt=J.getPointAt(Mt),_t=Tt.x-j.x,ct=Tt.z-j.z,Dt=Math.sqrt(_t*_t+ct*ct);Dt<Lt&&(Lt=Dt,Et=Tt.x,Ut=Tt.z)}const At=(j.x-Et)/Lt,qt=(j.z-Ut)/Lt,Y=It-Ft;j.x-=At*Y,j.z-=qt*Y}}let et=[];for(let gt=0;gt<4;gt++){const It=g[gt].clone();It.applyQuaternion(F);const Ft=new B(j.x,j.y,j.z).add(It);let mt=Un(Ft.x,Ft.z);if(J){let Lt=1/0,At=0;for(let Mt=0;Mt<=200;Mt++){const Tt=Mt/200,_t=J.getPointAt(Tt),ct=_t.x-Ft.x,Dt=_t.z-Ft.z,Wt=Math.sqrt(ct*ct+Dt*Dt);Wt<Lt&&(Lt=Wt,At=_t.y)}const qt=Pi/2,Y=3;let bt=mt;if(Lt<=qt+Y){const Mt=At;if(Lt<=qt)bt=Mt;else{const Tt=(Lt-qt)/Y;bt=Mt*(1-Tt)+bt*Tt}}mt=Math.max(bt,At)}const Et=mt+$f+jf;et.push(Et)}const E=(et[0]+et[1])/2,D=(et[2]+et[3])/2,lt=(et[0]+et[2])/2,vt=(et[1]+et[3])/2,H=((E+D)/2-As-j.y)*SM-p*EM;p+=H*M,j.y+=p*M;const st=Math.atan2(D-E,ni*2),dt=Math.atan2(vt-lt,ei*2),ot=new gn().setFromQuaternion(F,"YXZ"),Pt=Math.min(1,M*8);ot.x=mu.lerp(ot.x,st,Pt),ot.z=mu.lerp(ot.z,dt,Pt),F.setFromEuler(ot),t.set_field(e,Ie,"x",F.x),t.set_field(e,Ie,"y",F.y),t.set_field(e,Ie,"z",F.z),t.set_field(e,Ie,"w",F.w),t.set_field(e,Wi,"x",it.x),t.set_field(e,Wi,"y",it.y),t.set_field(e,Wi,"z",it.z),t.set_field(e,Ke,"x",j.x),t.set_field(e,Ke,"y",j.y),t.set_field(e,Ke,"z",j.z)}}}async function TM(){const i=new MM;try{const t=await fetch("./models/kart.obj");if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.text(),n=i.parse(e);n.traverse(p=>{if(p instanceof Zt&&(p.castShadow=!0,p.receiveShadow=!0,p.material instanceof Rn)){const M=p.material;if(M.name?.includes("Blue"))M.color.setHex(3829413),M.roughness=.5,M.metalness=.2;else if(M.name?.includes("Grey")){const v=M.name.match(/Grey_-_(\d+)/);if(v){const _=parseInt(v[1])/100;M.color.setRGB(_,_,_)}M.roughness=.7,M.metalness=.3}}});const s=new $s().setFromObject(n),r=new B;s.getSize(r);const l=1.5/Math.max(r.x,r.y,r.z);n.scale.setScalar(l);let c=new $e;s.setFromObject(n),n.rotateY(.5*Math.PI),n.position.set(0,-s.min.y,0),c.add(n);const u=As-jf,f=new Ur($f,8,8),h=new Cc({color:16711680}),d=new Zt(f,h);d.position.set(-ei,u,ni),c.add(d);const g=new Zt(f,h);g.position.set(ei,u,ni),c.add(g);const y=new Zt(f,h);y.position.set(-ei,u,-ni),c.add(y);const m=new Zt(f,h);return m.position.set(ei,u,-ni),c.add(m),c}catch(t){throw console.error("Failed to load kart:",t),t}}function wM(i,t){return hc(e=>(oi(Hd(oi(()=>{let n=[];for(let s of i.query(Ke,Ie,Oo)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)n.push(r[o])}return n}),n=>{let s=i.entity(n());s.getField(Oo,"playerType"),s.getField(Oo,"facingForward");const r=new $e;Zh(async()=>await TM(),a=>{r.add(a)});const o=mM();o.position.set(0,.32,0),o.scale.setScalar(.5),r.add(o),t.add(r),na(()=>{t.remove(r)}),oi(()=>{let a=s.getField(Ke,"x"),l=s.getField(Ke,"y"),c=s.getField(Ke,"z"),u=s.getField(Ie,"x"),f=s.getField(Ie,"y"),h=s.getField(Ie,"z"),d=s.getField(Ie,"w");r.position.set(a,l,c),r.quaternion.set(u,f,h,d)})})),{update:()=>{},dispose:e}))}var AM=pc('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border-radius:50%;border:5px solid rgba(255,255,255,0.5);box-sizing:content-box"><div style=position:absolute;transform:translate(-50%,-50%);border-radius:50%;background-color:rgba(255,255,255,0.5)>');function RM(i){let t=_e(i.position()),e=_e(typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize),n=_e(i.outerRingSize()),s=_e(i.knobSize()),r=_e();Cs(()=>i.position(),l=>{t[1](l)}),Cs(()=>typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize,l=>{e[1](l)}),Cs(()=>i.outerRingSize(),l=>{n[1](l)}),Cs(()=>i.knobSize(),l=>{s[1](l)});let o=oi(()=>{let l=r[0]();return l==null?new ut:new ut().copy(l).multiplyScalar(1/n[0]())});return{position:t,hitAreaSize:e,outerRingSize:n,knobSize:s,dragOffset:r,value:o,UI:()=>{let[l,c]=_e(!1),[u,f]=_e(),[h,d]=r,[g,y]=_e(),m,p=_=>{let A=g();if(A==null)return;m=_.pointerId,A.setPointerCapture(m);let b=A.getBoundingClientRect();f(new ut(_.clientX-b.left,_.clientY-b.top)),d(new ut)},M=_=>{let A=g();if(A==null)return;let b=u();if(b==null)return;A.setPointerCapture(_.pointerId);let C=A.getBoundingClientRect(),x=new ut(_.clientX-C.left-b.x,_.clientY-C.top-b.y),T=x.length();T>.5*n[0]()&&x.multiplyScalar(.5*n[0]()/T),d(x)},v=_=>{g()!=null&&m!=null&&(f(void 0),d(void 0))};return(()=>{var _=AM(),A=_.firstChild,b=A.firstChild;_.$$contextmenu=x=>x.preventDefault(),_.$$pointerup=v,_.$$pointermove=M,_.$$pointerdown=p;var C=y;return typeof C=="function"||Array.isArray(C)?ul(()=>C,_):y=_,ia(()=>({e:`${t[0]().x}px`,t:`${t[0]().y}px`,a:`${e[0]()}px`,o:`${e[0]()}px`,i:`${u()?.x??.5*e[0]()}px`,n:`${u()?.y??.5*e[0]()}px`,s:`${n[0]()}px`,h:`${n[0]()}px`,r:`calc(50% + ${h()?.x??0}px)`,d:`calc(50% + ${h()?.y??0}px)`,l:`${s[0]()}px`,u:`${s[0]()}px`}),({e:x,t:T,a:N,o:L,i:U,n:z,s:X,h:G,r:W,d:F,l:q,u:at},ht={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0})=>{x!==ht.e&&Le(_,"left",x),T!==ht.t&&Le(_,"top",T),N!==ht.a&&Le(_,"width",N),L!==ht.o&&Le(_,"height",L),U!==ht.i&&Le(A,"left",U),z!==ht.n&&Le(A,"top",z),X!==ht.s&&Le(A,"width",X),G!==ht.h&&Le(A,"height",G),W!==ht.r&&Le(b,"left",W),F!==ht.d&&Le(b,"top",F),q!==ht.l&&Le(b,"width",q),at!==ht.u&&Le(b,"height",at)}),_})()}}}Kh(["pointerdown","pointermove","pointerup","contextmenu"]);var CM=pc("<div style=position:absolute;user-select:none;touch-action:none>");const PM=1;function LM(i){const[t,e]=_e(!1),[n,s]=_e(0),[r,o]=_e(!1),[a,l]=_e(0),[c,u]=_e(!1),f=i.externalPressed||(()=>!1);let h,d=!1;const g=()=>{h||(h=window.setInterval(()=>{l(b=>b+1)},50))},y=()=>{h&&(clearInterval(h),h=void 0)};na(()=>y()),requestAnimationFrame(function b(){const C=f();C&&!d&&(s(performance.now()),g()),!C&&d&&u(!0),d=C,requestAnimationFrame(b)});const m=()=>t()||f(),p=oi(()=>{a();const b=m(),C=n();if(!b)return 0;const x=(performance.now()-C)/1e3;return Math.min(x/PM,1)}),M=b=>{b.currentTarget.setPointerCapture(b.pointerId),e(!0),s(performance.now()),g()},v=b=>{e(!1),y(),o(!0)},_=b=>{t()&&(e(!1),y(),o(!0))},A=()=>(()=>{var b=CM();return b.$$contextmenu=C=>C.preventDefault(),b.addEventListener("pointerleave",_),b.$$pointerup=v,b.$$pointerdown=M,ia(()=>({e:`${i.position().x}px`,t:`${i.position().y}px`,a:`${i.size()}px`,o:`${i.size()}px`,i:`${.5*i.size()}px`,n:m()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:C,t:x,a:T,o:N,i:L,n:U},z={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{C!==z.e&&Le(b,"left",C),x!==z.t&&Le(b,"top",x),T!==z.a&&Le(b,"width",T),N!==z.o&&Le(b,"height",N),L!==z.i&&Le(b,"border-radius",L),U!==z.n&&Le(b,"background-color",U)}),b})();return{position:i.position,size:i.size,pressed:m,power:p,justReleased:()=>r()?(o(!1),!0):!1,justReleasedExternal:()=>c()?(u(!1),!0):!1,UI:A}}Kh(["pointerdown","pointerup","contextmenu"]);var IM=pc("<div style=width:100%;height:100%><canvas style=width:100%;height:100%;display:block;touch-action:none></canvas><div style=position:absolute;top:10px;left:10px;z-index:100><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Orbit Camera");function DM(i){const t=new $e,e=new as(.15,.2,i*.4,6),n=new we({color:4863784,roughness:.9}),s=new Zt(e,n);s.position.y=i*.2,s.castShadow=!0,t.add(s);const r=new Vr(i*.4,i*.7,6),o=new we({color:2972199,roughness:.8}),a=new Zt(r,o);return a.position.y=i*.6,a.castShadow=!0,t.add(a),t}function NM(i,t,e){const n=new $e,s=new os(i,t,e),r=[9140069,10518640,10259580,8022618],o=new we({color:r[Math.floor(Math.random()*r.length)],roughness:.7}),a=new Zt(s,o);a.position.y=t/2,a.castShadow=!0,a.receiveShadow=!0,n.add(a);const l=new Vr(Math.max(i,e)*.7,t*.3,4),c=new we({color:5917242,roughness:.8}),u=new Zt(l,c);return u.position.y=t+t*.15,u.rotation.y=Math.PI/4,u.castShadow=!0,n.add(u),n}function UM(i,t){const r=o=>{const a=Math.sin(o*7919)*1e4;return a-Math.floor(a)};for(let o=0;o<210;o++){const a=r(o*13);if(Math.abs(a-.5)<.22)continue;const l=i.getPointAt(a),c=i.getTangentAt(a),u=-c.z,f=c.x,h=Math.sqrt(u*u+f*f),d=u/h,g=f/h,y=r(o*17)>.5?1:-1,m=Pi/2+4+r(o*19)*25,p=l.x+d*m*y,M=l.z+g*m*y,v=Un(p,M),_=Pi/2,A=6;let b=v;if(m<=_+A){const C=l.y+.02,x=(m-_)/A;b=Math.min(v,C)*(1-x)+v*x}if(o<160){const C=DM(1.5+r(o*7)*2);C.position.set(p,b,M),t.add(C)}else{const C=1+r(o*3)*2,x=1.5+r(o*4)*3,T=1+r(o*5)*2,N=NM(C,x,T);let L=Math.min(b,Un(p-.5*C,M-.5*T),Un(p-.5*C,M+.5*T),Un(p+.5*C,M-.5*T),Un(p+.5*C,M+.5*T));N.position.set(p,L,M),N.lookAt(l.x,b,l.z),t.add(N)}}}function FM(i,t){const e=i.getSpacedPoints(800);let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const u of e)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),o=Math.max(o,u.z);const a=(n+s)/2,l=(r+o)/2,c=Math.max(s-n,o-r)/2+t+5;return{centerX:a,centerZ:l,size:c*2}}function OM(i){const t=FM(i,18),e=t.size,n=160,s=[],r=[],o=[],a=800,l=i.getSpacedPoints(a),c=e/2;for(let h=0;h<=n;h++)for(let d=0;d<=n;d++){const g=t.centerX-c+d/n*e,y=t.centerZ-c+h/n*e;let m=1/0,p=0;for(let A=0;A<a;A++){const b=l[A].x-g,C=l[A].z-y,x=Math.sqrt(b*b+C*C);x<m&&(m=x,p=l[A].y)}const M=Pi/2,v=3;let _=Un(g,y);if(m<=M+v){const A=p-.2;if(m<=M)_=A;else{const b=(m-M)/v,C=Un(g,y),x=A*(1-b)+C*b,T=A+b*1.5;_=Math.min(x,T)}}s.push(g,_,y),o.push(d/n*4,h/n*4)}for(let h=0;h<n;h++)for(let d=0;d<n;d++){const g=h*(n+1)+d,y=g+1,m=(h+1)*(n+1)+d,p=m+1;r.push(y,g,p),r.push(m,p,g)}const u=new be;u.setAttribute("position",new Qt(s,3)),u.setAttribute("uv",new Qt(o,2)),u.setIndex(r),u.computeVertexNormals();const f=new we({color:4881471,roughness:.9,flatShading:!0});return{mesh:new Zt(u,f),bounds:t}}let[tl,BM]=_e(),[Xi,Zf]=_e(!1),[XM,Kf]=_e(!1),[qM,Jf]=_e(!1),[zM,Qf]=_e(!1),[kM,td]=_e(!1),[VM,Oc]=_e(!1),[GM,ed]=_e(!1);function HM(i,t,e){const n=new lm;n.background=new Jt(6006985);const s=new hg(16777215,.7);n.add(s);const r=new ug(16777215,1);r.position.set(20,50,20),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,n.add(r);const{curve:o,group:a}=fy(42);a.position.set(0,0,0),n.add(a);const l=my(o,0);n.add(l);const{mesh:c,bounds:u}=OM(o),f=u.size/2;r.shadow.camera.left=u.centerX-f,r.shadow.camera.right=u.centerX+f,r.shadow.camera.top=u.centerZ+f,r.shadow.camera.bottom=u.centerZ-f,c.receiveShadow=!0,n.add(c),UM(o,n);const{ecs:h}=fM(),d=.01,g=o.getPointAt(d),y=d+.01,m=o.getPointAt(y);new B().subVectors(m,g).normalize();const p=new B(0,0,0),M=g.y+.1;g.y=M;const v=dM({position:g,velocity:p,reactiveEcs:h}),{dispose:_}=wM(h,n),A=oi(()=>{const O=e().x;return Math.abs(O)>.01?O*2:zM()?-1:kM()?1:0}),{update:b}=bM({ecs:h,entityId:v,turnAmount:A,actionDown:VM,driftDown:GM}),C=new ly({antialias:!0,canvas:t});C.shadowMap.enabled=!0,C.shadowMap.type=Jh;const x=new fn(75,1,.1,1e3);let T=0,N=.5,L=5,U=!1,z=0,X=0,G=0;t.addEventListener("pointerdown",O=>{U=!0,z=O.clientX,X=O.clientY,t.setPointerCapture(O.pointerId)}),t.addEventListener("pointermove",O=>{if(!U||!Xi())return;const nt=O.clientX-z,$=O.clientY-X;T-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+$*.01)),z=O.clientX,X=O.clientY}),t.addEventListener("pointerup",O=>{U=!1}),t.addEventListener("pointercancel",()=>{U=!1}),t.addEventListener("contextmenu",O=>O.preventDefault());let W=!1;t.addEventListener("touchstart",O=>{O.touches.length===1&&(W=!0,z=O.touches[0].clientX,X=O.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",O=>{if(Xi()&&(O.preventDefault(),O.touches.length===1&&W)){const nt=O.touches[0].clientX-z,$=O.touches[0].clientY-X;T-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+$*.01)),z=O.touches[0].clientX,X=O.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",O=>{W=!1}),t.addEventListener("touchstart",O=>{if(O.touches.length===2){const nt=O.touches[0].clientX-O.touches[1].clientX,$=O.touches[0].clientY-O.touches[1].clientY;G=Math.sqrt(nt*nt+$*$)}}),t.addEventListener("touchmove",O=>{if(!Xi()||O.touches.length!==2)return;O.preventDefault();const nt=O.touches[0].clientX-O.touches[1].clientX,$=O.touches[0].clientY-O.touches[1].clientY,it=Math.sqrt(nt*nt+$*$);L=Math.max(1,Math.min(20,L-(it-G)*.02)),G=it},{passive:!1}),t.addEventListener("wheel",O=>{Xi()&&(L=Math.max(1,Math.min(20,L+O.deltaY*.01)))}),window.addEventListener("keydown",O=>{(O.key==="o"||O.key==="O")&&Zf(!Xi())});let F=new ResizeObserver(()=>{let O=i.getBoundingClientRect();BM(new ut(O.width,O.height)),C.setSize(O.width,O.height),x.aspect=O.width/O.height,x.updateProjectionMatrix(),C.render(n,x)});F.observe(i),na(()=>{F.unobserve(i),F.disconnect()});const q=3,at=6;let ht=0,St=new B,xt=new B;const Bt=12;let K=!0,V=performance.now(),w=!0;const R=()=>{if(!K)return;const O=performance.now(),nt=Math.min((O-V)/1e3,.1);V=O;const $=h.entity(v).getField(Ke,"x"),it=h.entity(v).getField(Ke,"y"),yt=h.entity(v).getField(Ke,"z"),ft=new B($,it,yt),k=h.entity(v).getField(Ie,"x"),j=h.entity(v).getField(Ie,"y"),J=h.entity(v).getField(Ie,"z"),et=h.entity(v).getField(Ie,"w"),E=new Vn(k,j,J,et),D=new B(0,0,1).applyQuaternion(E);D.y=0;let lt=0;if(D.length()>.001&&(D.normalize(),lt=Math.atan2(D.x,D.z)),b(nt),w&&(w=!1,St.copy(ft),xt.copy(ft),ht=lt),Xi()){const vt=lt+T,pt=ft;x.position.set(pt.x+L*Math.sin(vt)*Math.cos(N),pt.y+L*Math.sin(N),pt.z+L*Math.cos(vt)*Math.cos(N)),x.lookAt(pt)}else{let vt=lt-ht;for(;vt>Math.PI;)vt-=Math.PI*2;for(;vt<-Math.PI;)vt+=Math.PI*2;ht+=vt*Math.min(1,Bt*nt);const pt=new B(-Math.sin(ht)*at,q,-Math.cos(ht)*at),I=ft.clone().add(pt),S=ft.clone().add(new B(Math.sin(ht)*2,.3,Math.cos(ht)*2));St.lerp(I,1-Math.exp(-Bt*nt*3)),xt.lerp(S,1-Math.exp(-Bt*nt*3)),x.position.copy(St),x.lookAt(xt)}C.render(n,x),requestAnimationFrame(R)};return R(),()=>{K=!1,_(),C.dispose()}}function WM(){let[i,t]=_e(),[e,n]=_e(),s=150,r=RM({position:oi(()=>new ut(50,(tl()?.y??0)-50-s)),hitAreaSize:s,outerRingSize:()=>.8*s,knobSize:()=>70}),o=100,a=LM({position:oi(()=>new ut((tl()?.x??0)-50-o,(tl()?.y??0)-50-o)),size:()=>o});return Cs(()=>a.pressed(),l=>{Oc(l)}),Cs(()=>[i(),e()],([l,c])=>{l!=null&&c!==void 0&&hc(u=>(HM(l,c,r.value),u))}),(()=>{var l=IM(),c=l.firstChild,u=c.nextSibling,f=u.firstChild,h=f.firstChild,d=t;typeof d=="function"||Array.isArray(d)?ul(()=>d,l):t=l;var g=n;return typeof g=="function"||Array.isArray(g)?ul(()=>g,c):n=c,h.addEventListener("change",y=>Zf(y.target.checked)),hl(l,cl(r.UI,{}),null),hl(l,cl(a.UI,{}),null),ia(Xi,y=>{h.checked=y}),l})()}const wh=document.getElementById("root");wh&&Kd(()=>cl(WM,{}),wh);document.addEventListener("keydown",i=>{switch(i.key){case"ArrowUp":Kf(!0);break;case"ArrowDown":Jf(!0);break;case"ArrowLeft":Qf(!0);break;case"ArrowRight":td(!0);break;case" ":Oc(!0);break;case"z":case"Z":ed(!0);break}});document.addEventListener("keyup",i=>{switch(i.key){case"ArrowUp":Kf(!1);break;case"ArrowDown":Jf(!1);break;case"ArrowLeft":Qf(!1);break;case"ArrowRight":td(!1);break;case" ":Oc(!1);break;case"z":case"Z":ed(!1);break}});
